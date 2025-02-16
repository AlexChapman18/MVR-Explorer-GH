import JSZip from "jszip";
import * as zipUtils from "../utils/zipUtils.ts";
import * as threeUtils from "../utils/threeUtils.ts";
import { GSD } from "./GSD.ts";
import { Model, Models, GeometryMap } from "../utils/modelUtils.ts";
import { LoadingManager } from "three";
import { ProgressStepsContextType, StepStatus, StepName } from "../../contexts/ProgressContextUtils.ts";

const loadingManager = new LoadingManager();
const GENERAL_SCENE_DESCRIPTION = "GeneralSceneDescription.xml";

export class MVR {
    private file: File;
    private GSD!: GSD;
    private models!: Models;
    private psContext: ProgressStepsContextType;

    constructor(file: File, psContext: ProgressStepsContextType) {
        this.file = file;
        this.psContext = psContext;
    }

    // Initialise MVR
    async init() {
        this.psContext.setProgressStatus(StepName.EXTRACTING_MVR, StepStatus.PENDING);
        try {
            const zipArchive = await zipUtils.loadZip(this.file);
            this.psContext.setNumFilesProcessed(StepName.EXTRACTING_MVR, 1);
            this.psContext.setProgressStatus(StepName.EXTRACTING_MVR, StepStatus.SUCCESS);

            // Load General Scene Descriptor
            await this.loadGSD(zipArchive);
            await this.fetchFixtures();

            // Load Models
            const geometryMap = await this.loadModels(zipArchive);
            this.models = new Models(this.GSD.getMatrixMap(), geometryMap);
        } catch (error) {
            console.error("Error initializing MVR: ", error);
            this.psContext.setProgressStatus(StepName.EXTRACTING_MVR, StepStatus.ERROR);
        }
    }

    async fetchFixtures() {
        this.psContext.setProgressStatus(StepName.FETCHING_FIXTURES, StepStatus.ERROR);

        // const NUM_FIXTURES = 0;

        // this.psContext.setNumFilesToProcess(StepName.FETCHING_FIXTURES, NUM_FIXTURES);

        // for (let i = 1; i <= NUM_FIXTURES; i++) {
        //     await delay(250);
        //     this.psContext.setNumFilesProcessed(StepName.FETCHING_FIXTURES, i);
        // }

        // this.psContext.setProgressStatus(StepName.FETCHING_FIXTURES, StepStatus.SUCCESS);
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
        this.psContext.setProgressStatus(StepName.LOADING_MODELS, StepStatus.PENDING);
        const geometryMap: GeometryMap = new GeometryMap();

        try {
            // Load .3ds files
            const modelFiles3DS: JSZip.JSZipObject[] = await zipUtils.getFiles(zipArchive, ".3ds");
            const modelFilesGLB: JSZip.JSZipObject[] = await zipUtils.getFiles(zipArchive, ".glb");
            const numFilesToLoad: number = modelFiles3DS.length + modelFilesGLB.length;
            this.psContext.setNumFilesToProcess(StepName.LOADING_MODELS, numFilesToLoad);
            const psContext = this.psContext;

            let numFilesLoaded: number = 0;

            loadingManager.onLoad = function () {
                numFilesLoaded = numFilesLoaded + 1;
                if (numFilesLoaded % 100 == 0) psContext.setNumFilesProcessed(StepName.LOADING_MODELS, numFilesLoaded);
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
            psContext.setNumFilesProcessed(StepName.LOADING_MODELS, numFilesToLoad);
            this.psContext.setProgressStatus(StepName.LOADING_MODELS, StepStatus.SUCCESS);
        } catch (error) {
            console.error("Error loading models: ", error);
            this.psContext.setProgressStatus(StepName.LOADING_MODELS, StepStatus.ERROR);
        }

        console.log("Models loaded");

        return geometryMap;
    }
}
