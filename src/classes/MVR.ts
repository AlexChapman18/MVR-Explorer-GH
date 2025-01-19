import * as THREE from "three";
import * as JSZip from "jszip";
import * as zipUtils from "../utils/zipUtils";
import { GSD } from "./GSD";
import * as threeUtils from "../utils/threeUtils";

export class MVR {
  private file: File;
  public GSD!: GSD;
  public models!: [string, THREE.Object3D][];

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
    const modelFiles: JSZip.JSZipObject[] = await zipUtils.getFiles(
      zipArchive,
      ".3ds",
    );

    // Process each .3ds file
    const fileNames: string[] = [];
    const loadPromises = modelFiles.map(async (modelFile) => {
      fileNames.push(modelFile.name);
      const modelData = await modelFile.async("arraybuffer");
      return threeUtils.loadModel3ds(modelData);
    });

    // Wait for them to all be loaded
    const modelObjects = await Promise.all(loadPromises);
    this.models = fileNames.map(function (e, i) {
      return [e, modelObjects[i]];
    });
  }

  private async loadGSD(zipArchive: JSZip) {
    this.GSD = new GSD(
      await zipUtils.getFile(zipArchive, "GeneralSceneDescription.xml"),
    );
    await this.GSD.init();
  }
}
