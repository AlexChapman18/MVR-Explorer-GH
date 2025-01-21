import * as zipUtils from "../utils/zipUtils.ts";
import * as matrixUtils from "../utils/matrixUtils.ts";
import * as GSDStruct from "../utils/GSDStructure.ts";
import * as JSZip from "jszip";
import { XMLParser } from "fast-xml-parser";
import { Matrix4 } from "three";

export class GSD {
    file: JSZip.JSZipObject;
    models: Map<string, Matrix4[]> = new Map<string, Matrix4[]>();

    constructor(file: JSZip.JSZipObject) {
        this.file = file;
    }

    async init() {
        const textContent: string = await zipUtils.getTextContent(this.file);

        const parser = new XMLParser({
            ignoreAttributes: false, // Do not ignore attributes, keep them in the result
            attributeNamePrefix: "_", // Prefix for attributes in the result
            isArray: (name) => {
                return GSDStruct.alwaysArray.includes(name);
            },
        });
        const jsonObj: GSDStruct.GSDFile = parser.parse(
            textContent,
        ) as GSDStruct.GSDFile;

        const unitMatrix: Matrix4 = new Matrix4();
        this.models = new Map<string, Matrix4[]>();
        this.parseGSD(jsonObj, unitMatrix.clone());
    }

    parseGSD(json: GSDStruct.GSDFile, matrix: Matrix4) {
        const Scene = json.GeneralSceneDescription.Scene;
        // this.parseAUXData(Scene.AUXData, matrix.clone());
        this.parseLayersHEAD(Scene.Layers, matrix.clone());
    }

    // TODO: Implement parseAUXData
    // parseAUXData(AUXData, matrix: Matrix4) {
    //     // To be completed
    // }

    parseLayersHEAD(Layers: GSDStruct.Layers, matrix: Matrix4) {
        if (Layers.Layer) {
            this.parseLayers(Layers.Layer, matrix.clone());
        }
    }

    parseLayers(Layers: GSDStruct.Layer[], matrix: Matrix4) {
        for (const Layer of Layers) {
            const tmpMatrix: Matrix4 = matrix.clone();
            if (Layer.Matrix)
                tmpMatrix.multiply(matrixUtils.parseMatrix(Layer.Matrix));
            if (Layer.ChildList) {
                this.parseChildList(Layer.ChildList, tmpMatrix.clone());
            }
        }
    }

    parseChildList(ChildList: GSDStruct.ChildList, matrix: Matrix4) {
        if (ChildList.GroupObject)
            this.parseGroupObjects(ChildList.GroupObject, matrix.clone());
        if (ChildList.SceneObject)
            this.parseSceneObjects(ChildList.SceneObject, matrix.clone());
        if (ChildList.FocusPoint)
            this.parseFocusPoints(ChildList.FocusPoint, matrix.clone());
        if (ChildList.Fixture)
            this.parseFixtures(ChildList.Fixture, matrix.clone());
        if (ChildList.Support)
            this.parseSupports(ChildList.Support, matrix.clone());
        if (ChildList.Truss) this.parseTrusses(ChildList.Truss, matrix.clone());
        if (ChildList.VideoScreen)
            this.parseVideoScreens(ChildList.VideoScreen, matrix.clone());
        if (ChildList.Projector)
            this.parseProjectors(ChildList.Projector, matrix.clone());
    }

    parseSceneObjects(SceneObjects: GSDStruct.SceneObject[], matrix: Matrix4) {
        for (const SceneObject of SceneObjects) {
            const tmpMatrix: Matrix4 = matrix.clone();
            if (SceneObject.Matrix)
                tmpMatrix.multiply(matrixUtils.parseMatrix(SceneObject.Matrix));
            if (SceneObject.Geometries)
                this.parseGeometries(SceneObject.Geometries, tmpMatrix.clone());
            if (SceneObject.ChildList)
                this.parseChildList(SceneObject.ChildList, tmpMatrix.clone());
        }
    }

    parseGroupObjects(GroupObjects: GSDStruct.GroupObject[], matrix: Matrix4) {
        for (const GroupObject of GroupObjects) {
            const tmpMatrix: Matrix4 = matrix.clone();
            if (GroupObject.Matrix)
                tmpMatrix.multiply(matrixUtils.parseMatrix(GroupObject.Matrix));
            if (GroupObject.ChildList)
                this.parseChildList(GroupObject.ChildList, tmpMatrix.clone());
        }
    }

    parseFocusPoints(FocusPoints: GSDStruct.FocusPoint[], matrix: Matrix4) {
        for (const FocusPoint of FocusPoints) {
            const tmpMatrix: Matrix4 = matrix.clone();
            if (FocusPoint.Matrix)
                tmpMatrix.multiply(matrixUtils.parseMatrix(FocusPoint.Matrix));
            if (FocusPoint.Geometries)
                this.parseGeometries(FocusPoint.Geometries, tmpMatrix.clone());
            if (FocusPoint.ChildList)
                this.parseChildList(FocusPoint.ChildList, tmpMatrix.clone());
        }
    }

    parseFixtures(Fixtures: GSDStruct.Fixture[], matrix: Matrix4) {
        for (const Fixture of Fixtures) {
            const tmpMatrix: Matrix4 = matrix.clone();
            if (Fixture.Matrix)
                tmpMatrix.multiply(matrixUtils.parseMatrix(Fixture.Matrix));
            if (Fixture.ChildList)
                this.parseChildList(Fixture.ChildList, tmpMatrix.clone());
        }
    }

    parseSupports(Supports: GSDStruct.Support[], matrix: Matrix4) {
        for (const Support of Supports) {
            const tmpMatrix: Matrix4 = matrix.clone();
            if (Support.Matrix)
                tmpMatrix.multiply(matrixUtils.parseMatrix(Support.Matrix));
            if (Support.Geometries)
                this.parseGeometries(Support.Geometries, tmpMatrix.clone());
            if (Support.ChildList)
                this.parseChildList(Support.ChildList, tmpMatrix.clone());
        }
    }

    parseTrusses(Trusses: GSDStruct.Truss[], matrix: Matrix4) {
        for (const Truss of Trusses) {
            const tmpMatrix: Matrix4 = matrix.clone();
            if (Truss.Matrix)
                tmpMatrix.multiply(matrixUtils.parseMatrix(Truss.Matrix));
            if (Truss.Geometries)
                this.parseGeometries(Truss.Geometries, tmpMatrix.clone());
            if (Truss.ChildList)
                this.parseChildList(Truss.ChildList, tmpMatrix.clone());
        }
    }

    parseVideoScreens(VideoScreens: GSDStruct.VideoScreen[], matrix: Matrix4) {
        for (const VideoScreen of VideoScreens) {
            const tmpMatrix: Matrix4 = matrix.clone();
            if (VideoScreen.Matrix)
                tmpMatrix.multiply(matrixUtils.parseMatrix(VideoScreen.Matrix));
            if (VideoScreen.Geometries)
                this.parseGeometries(VideoScreen.Geometries, tmpMatrix.clone());
            if (VideoScreen.ChildList)
                this.parseChildList(VideoScreen.ChildList, tmpMatrix.clone());
        }
    }

    parseProjectors(Projectors: GSDStruct.Projector[], matrix: Matrix4) {
        for (const Projector of Projectors) {
            const tmpMatrix: Matrix4 = matrix.clone();
            if (Projector.Matrix)
                tmpMatrix.multiply(matrixUtils.parseMatrix(Projector.Matrix));
            if (Projector.Geometries)
                this.parseGeometries(Projector.Geometries, tmpMatrix.clone());
            if (Projector.ChildList)
                this.parseChildList(Projector.ChildList, tmpMatrix.clone());
        }
    }

    parseGeometries(Geometries: GSDStruct.Geometries[], matrix: Matrix4) {
        for (const Geometry of Geometries) {
            if (Geometry.Geometry3D)
                this.parseGeometry3D(Geometry.Geometry3D, matrix.clone());
        }
    }

    parseGeometry3D(Geometry3Ds: GSDStruct.Geometry3D[], matrix: Matrix4) {
        for (const Geometry3D of Geometry3Ds) {
            const tmpMatrix: Matrix4 = matrix.clone();
            if (Geometry3D.Matrix)
                tmpMatrix.multiply(matrixUtils.parseMatrix(Geometry3D.Matrix));

            const matrices = this.models.get(Geometry3D._fileName) || [];
            matrices.push(tmpMatrix.clone());
            this.models.set(Geometry3D._fileName, matrices);
        }
    }
}
