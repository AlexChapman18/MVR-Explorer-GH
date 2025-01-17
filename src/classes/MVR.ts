import * as THREE from "three"; // To create and display animated 3D computer graphics
import JSZip, { file } from 'jszip'; // Handle the .MVR file (just a zip file)
import * as zipUtils from '../utils/zipUtils';
import { GSD } from './GSD';
import * as threeUtils from '../utils/threeUtils';

export class MVR {
    file: File;
    GSD: GSD;
    public models;

    constructor(file: File) {
        this.file = file;
    }

    public async init() {
        const zipArchive = await zipUtils.loadZip(this.file);

        // Load General Scene Descriptor
        await this.loadGSD(zipArchive);

        // Load Models
        await this.loadModels(zipArchive);
    }

    private async loadModels(zipArchive: JSZip) {
        const modelFiles3d: JSZip.JSZipObject[] = await zipUtils.getFiles(zipArchive, ".3ds");

        let fileNames: string[] = [];
        let loadPromises: Promise<THREE.Object3D>[] = [];

        // Process each .3ds file
        if (modelFiles3d) {
            loadPromises = loadPromises.concat(modelFiles3d.map(async (modelFile) => {
                fileNames.push(modelFile.name)
                const modelData = await modelFile.async('arraybuffer');
                return threeUtils.loadModel3ds(modelData);
            }));
        }

        const modelFilesGlb: JSZip.JSZipObject[] = await zipUtils.getFiles(zipArchive, ".glb");
        // console.log(modelFilesGlb)
        if (modelFilesGlb) {
            loadPromises = loadPromises.concat(modelFilesGlb.map(async (modelFile) => {
                fileNames.push(modelFile.name)
                const modelData = await modelFile.async('arraybuffer');
                return threeUtils.loadModelGlb(modelData);
            }));
        }


        console.log(loadPromises)


        // Wait for them to all be loaded
        const modelObjects = await Promise.all(loadPromises);
        this.models = fileNames.map(function (e, i) {
            return [e, modelObjects[i]];
        });
    }

    private async loadGSD(zipArchive: JSZip) {
        this.GSD = new GSD(await zipUtils.getFile(zipArchive, "GeneralSceneDescription.xml"));
        await this.GSD.init();
    }
}