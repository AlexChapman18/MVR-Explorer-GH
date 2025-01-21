import * as zipUtils from "../utils/zipUtils.ts";
import * as GSDStruct from "../structures/GSDStruct.ts";
import * as threeUtils from "../utils/threeUtils.ts";
import JSZip from "jszip";
import { Matrix4 } from "three";
import { XMLParser } from "fast-xml-parser";
import { MetadataMap } from "../utils/modelUtils.ts";

// Parses the GSD file, and produces a metadataMap

export class GSD {
    private file: JSZip.JSZipObject;
    private matrixMap: MetadataMap; // Maps filenames to transition matrices

    constructor(file: JSZip.JSZipObject) {
        this.file = file;
        this.matrixMap = new MetadataMap();
    }

    // Getter
    public getMatrixMap(): MetadataMap {
        return this.matrixMap;
    }

    async init() {
        // Get text content of GSD file
        const textContent: string = await zipUtils.getTextContent(this.file);

        // Convert the file to json object
        const GSDFile: GSDStruct.GSDFile = this.convertToJson(textContent);

        // Parse GSD File
        this.parseGSDFile(GSDFile);
    }

    private convertToJson(textContent: string): GSDStruct.GSDFile {
        const parser = new XMLParser({
            ignoreAttributes: false, // Do not ignore attributes, keep them in the result
            attributeNamePrefix: "_", // Prefix for attributes in the result e.g. _fileName
            isArray: (name) => {
                return GSDStruct.GSDArrays.includes(name);
            },
        });
        return parser.parse(textContent) as GSDStruct.GSDFile;
    }

    private parseGSDFile(json: GSDStruct.GSDFile) {
        // The initial transformation
        const unitMatrix: Matrix4 = new Matrix4();

        const Scene = json.GeneralSceneDescription.Scene;

        // this.parseAUXData(Scene.AUXData, matrix); // TODO: Implement parseAUXData
        this.parseLayersHEAD(Scene.Layers, unitMatrix);
    }

    private parseLayersHEAD(layers: GSDStruct.Layers, matrix: Matrix4) {
        if (layers.Layer) {
            this.parseLayers(layers.Layer, matrix);
        }
    }

    private parseLayers(layers: GSDStruct.Layer[], matrix: Matrix4) {
        for (const Layer of layers) {
            const transformedMatrix: Matrix4 = matrix.clone();
            const layerName = Layer._name ?? Layer._uuid;
            if (Layer.Matrix) transformedMatrix.multiply(this.parseMatrix(Layer.Matrix));
            if (Layer.ChildList) this.parseChildList(Layer.ChildList, transformedMatrix, layerName);
        }
    }

    private parseChildList(childList: GSDStruct.ChildList, matrix: Matrix4, layerName: string) {
        if (childList.GroupObject) this.parseGroupObjects(childList.GroupObject, matrix, layerName);
        if (childList.SceneObject) this.parseSceneObjects(childList.SceneObject, matrix, layerName);
        if (childList.FocusPoint) this.parseFocusPoints(childList.FocusPoint, matrix, layerName);
        if (childList.Fixture) this.parseFixtures(childList.Fixture, matrix, layerName);
        if (childList.Support) this.parseSupports(childList.Support, matrix, layerName);
        if (childList.Truss) this.parseTrusses(childList.Truss, matrix, layerName);
        if (childList.VideoScreen) this.parseVideoScreens(childList.VideoScreen, matrix, layerName);
        if (childList.Projector) this.parseProjectors(childList.Projector, matrix, layerName);
    }

    private parseSceneObjects(sceneObjects: GSDStruct.SceneObject[], matrix: Matrix4, layerName: string) {
        for (const SceneObject of sceneObjects) {
            const transformedMatrix: Matrix4 = matrix.clone();
            if (SceneObject.Matrix) transformedMatrix.multiply(this.parseMatrix(SceneObject.Matrix));
            if (SceneObject.Geometries) this.parseGeometries(SceneObject.Geometries, transformedMatrix, layerName);
            if (SceneObject.ChildList) this.parseChildList(SceneObject.ChildList, transformedMatrix, layerName);
        }
    }

    private parseGroupObjects(groupObjects: GSDStruct.GroupObject[], matrix: Matrix4, layerName: string) {
        for (const GroupObject of groupObjects) {
            const transformedMatrix: Matrix4 = matrix.clone();
            if (GroupObject.Matrix) transformedMatrix.multiply(this.parseMatrix(GroupObject.Matrix));
            if (GroupObject.ChildList) this.parseChildList(GroupObject.ChildList, transformedMatrix, layerName);
        }
    }

    private parseFocusPoints(focusPoints: GSDStruct.FocusPoint[], matrix: Matrix4, layerName: string) {
        for (const FocusPoint of focusPoints) {
            const transformedMatrix: Matrix4 = matrix.clone();
            if (FocusPoint.Matrix) transformedMatrix.multiply(this.parseMatrix(FocusPoint.Matrix));
            if (FocusPoint.Geometries) this.parseGeometries(FocusPoint.Geometries, transformedMatrix, layerName);
            if (FocusPoint.ChildList) this.parseChildList(FocusPoint.ChildList, transformedMatrix, layerName);
        }
    }

    private parseFixtures(fixtures: GSDStruct.Fixture[], matrix: Matrix4, layerName: string) {
        for (const Fixture of fixtures) {
            const transformedMatrix: Matrix4 = matrix.clone();
            if (Fixture.Matrix) transformedMatrix.multiply(this.parseMatrix(Fixture.Matrix));
            if (Fixture.ChildList) this.parseChildList(Fixture.ChildList, transformedMatrix, layerName);
        }
    }

    private parseSupports(supports: GSDStruct.Support[], matrix: Matrix4, layerName: string) {
        for (const Support of supports) {
            const transformedMatrix: Matrix4 = matrix.clone();
            if (Support.Matrix) transformedMatrix.multiply(this.parseMatrix(Support.Matrix));
            if (Support.Geometries) this.parseGeometries(Support.Geometries, transformedMatrix, layerName);
            if (Support.ChildList) this.parseChildList(Support.ChildList, transformedMatrix, layerName);
        }
    }

    private parseTrusses(trusses: GSDStruct.Truss[], matrix: Matrix4, layerName: string) {
        for (const Truss of trusses) {
            const transformedMatrix: Matrix4 = matrix.clone();
            if (Truss.Matrix) transformedMatrix.multiply(this.parseMatrix(Truss.Matrix));
            if (Truss.Geometries) this.parseGeometries(Truss.Geometries, transformedMatrix, layerName);
            if (Truss.ChildList) this.parseChildList(Truss.ChildList, transformedMatrix, layerName);
        }
    }

    private parseVideoScreens(videoScreens: GSDStruct.VideoScreen[], matrix: Matrix4, layerName: string) {
        for (const VideoScreen of videoScreens) {
            const transformedMatrix: Matrix4 = matrix.clone();
            if (VideoScreen.Matrix) transformedMatrix.multiply(this.parseMatrix(VideoScreen.Matrix));
            if (VideoScreen.Geometries) this.parseGeometries(VideoScreen.Geometries, transformedMatrix, layerName);
            if (VideoScreen.ChildList) this.parseChildList(VideoScreen.ChildList, transformedMatrix, layerName);
        }
    }

    private parseProjectors(projectors: GSDStruct.Projector[], matrix: Matrix4, layerName: string) {
        for (const Projector of projectors) {
            const transformedMatrix: Matrix4 = matrix.clone();
            if (Projector.Matrix) transformedMatrix.multiply(this.parseMatrix(Projector.Matrix));
            if (Projector.Geometries) this.parseGeometries(Projector.Geometries, transformedMatrix, layerName);
            if (Projector.ChildList) this.parseChildList(Projector.ChildList, transformedMatrix, layerName);
        }
    }

    private parseGeometries(geometries: GSDStruct.Geometries[], matrix: Matrix4, layerName: string) {
        for (const Geometry of geometries) {
            if (Geometry.Geometry3D) this.parseGeometry3D(Geometry.Geometry3D, matrix, layerName);
        }
    }

    private parseGeometry3D(geometry3Ds: GSDStruct.Geometry3D[], matrix: Matrix4, layerName: string) {
        for (const Geometry3D of geometry3Ds) {
            const transformedMatrix: Matrix4 = matrix.clone();
            if (Geometry3D.Matrix) transformedMatrix.multiply(this.parseMatrix(Geometry3D.Matrix));
            this.matrixMap.add(Geometry3D._fileName, transformedMatrix, layerName);
        }
    }

    private parseMatrix(rawMatrix: string): Matrix4 {
        return threeUtils.StringToMatrix(rawMatrix);
    }
}
