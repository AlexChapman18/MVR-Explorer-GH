import JSZip from "jszip";
import * as zipUtils from "../utils/zipUtils.ts";
import * as threeUtils from "../utils/threeUtils.ts";
import { GSD } from "./GSD.ts";
import { Model, Models, GeometryMap } from "../utils/modelUtils.ts";
import { LoadingManager } from "three";

const loadingManager = new LoadingManager();
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
            const modelFilesGLB: JSZip.JSZipObject[] = await zipUtils.getFiles(zipArchive, ".glb");
            const numFilesToLoad: number = modelFiles3DS.length + modelFilesGLB.length;
            let numFilesLoaded: number = 0;

            loadingManager.onLoad = function () {
                numFilesLoaded = numFilesLoaded + 1;
                console.log(numFilesLoaded / numFilesToLoad);
            };

            for (const modelFile of modelFiles3DS) {
                const arrayBuffer = await modelFile.async("arraybuffer");
                const geometry = await threeUtils.load3DSGeometry(arrayBuffer, loadingManager);
                geometryMap.set(modelFile.name, geometry);
            }

            // Load GLB files
            for (const modelFile of modelFilesGLB) {
                const arrayBuffer = await modelFile.async("arraybuffer");
                const geometry = await threeUtils.loadGLBGeometry(arrayBuffer, loadingManager);
                geometryMap.set(modelFile.name, geometry);
            }
        } catch (error) {
            console.error("Error loading models: ", error);
        }

        console.log("Models loaded");

        return geometryMap;
    }
}
