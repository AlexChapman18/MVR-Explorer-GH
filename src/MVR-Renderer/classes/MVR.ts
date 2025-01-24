import JSZip from "jszip";
import * as zipUtils from "../utils/zipUtils.ts";
import * as threeUtils from "../utils/threeUtils.ts";
import { GSD } from "./GSD.ts";
import { Model, Models, GeometryMap } from "../utils/modelUtils.ts";

const GENERAL_SCENE_DESCRIPTION = "GeneralSceneDescription.xml";

export class MVR {
    private file: File;
    private GSD!: GSD;
    private models!: Models;

    constructor(file: File) {
        this.file = file;
    }

    // Initialise MVR
    async init() {
        try {
            const zipArchive = await zipUtils.loadZip(this.file);

            // Load General Scene Descriptor
            await this.loadGSD(zipArchive);

            // Load Models
            const geometryMap = await this.loadModels(zipArchive);
            this.models = new Models(this.GSD.getMatrixMap(), geometryMap);
        } catch (error) {
            console.error("Error initializing MVR: ", error);
        }
    }

    // Generate a list of model and return it
    public getModels(): Model[] {
        return this.models.getModels();
    }

    // Load GeneralSceneDescription.xml file
    private async loadGSD(zipArchive: JSZip) {
        const response = await fetch("https://gdtf-share.com/apis/public/login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: "Real User 42", password: "123SafePassw0rd456" }),
        });

        console.log(response);

        try {
            const gsdFile = await zipUtils.getFile(zipArchive, GENERAL_SCENE_DESCRIPTION);
            this.GSD = new GSD(gsdFile);
            await this.GSD.init();
        } catch (error) {
            console.error("Error loading GSD: ", error);
        }
    }

    // Produce a geometry map: Map<fileName, BufferGeometry>
    private async loadModels(zipArchive: JSZip): Promise<GeometryMap> {
        const geometryMap: GeometryMap = new GeometryMap();
        try {
            // Load .3ds files
            const modelFiles3DS: JSZip.JSZipObject[] = await zipUtils.getFiles(zipArchive, ".3ds");
            for (const modelFile of modelFiles3DS) {
                const arrayBuffer = await modelFile.async("arraybuffer");
                const geometry = await threeUtils.load3DSGeometry(arrayBuffer);
                geometryMap.set(modelFile.name, geometry);
            }

            // Load GLB files
            const modelFilesGLB: JSZip.JSZipObject[] = await zipUtils.getFiles(zipArchive, ".glb");
            for (const modelFile of modelFilesGLB) {
                const arrayBuffer = await modelFile.async("arraybuffer");
                const geometry = await threeUtils.loadGLBGeometry(arrayBuffer);
                geometryMap.set(modelFile.name, geometry);
            }
        } catch (error) {
            console.error("Error loading models: ", error);
        }

        return geometryMap;
    }
}
