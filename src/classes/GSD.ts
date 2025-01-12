import * as jsonUtils from '../utils/jsonUtils';
import * as zipUtils from '../utils/zipUtils';
import * as matrixUtils from '../utils/matrixUtils';
import JSZip from 'jszip'; // Handle the .mvr file (just a zip file)
import { XMLParser } from 'fast-xml-parser';
import { Matrix4 } from "three";

export class GSD {
    models: Map<string, Matrix4[]>;
    file: JSZip.JSZipObject

    constructor(file: JSZip.JSZipObject) {
        this.file = file;
    }

    async init() {
        const textContent: string = await zipUtils.getTextContent(this.file);

        const parser = new XMLParser({
            ignoreAttributes: false, // Do not ignore attributes, keep them in the result
            attributeNamePrefix: "_", // Prefix for attributes in the result
        });
        const jsonObj = parser.parse(textContent);

        const unitMatrix: Matrix4 = new Matrix4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        this.models = new Map<string, Matrix4[]>;
        this.parseGSD(jsonObj, unitMatrix.clone());
    }



    parseGSD(json: any, matrix: Matrix4) {
        const Scene = json.GeneralSceneDescription.Scene;
        this.parseAUXData(Scene.AUXData, matrix.clone())
        this.parseLayers(Scene.Layers, matrix.clone())
    }

    parseAUXData(AUXData, matrix: Matrix4) {
        // To be completed
    }

    parseLayers(Layers, matrix: Matrix4) {
        if (Layers.Layer) {
            if (Array.isArray(Layers.Layer)) {
                Layers.Layer.map((layer: any) => this.parseLayer(layer, matrix.clone()))
            } else {
                this.parseLayer(Layers.Layer, matrix.clone())
            }
        }
    }

    parseLayer(Layer, matrix: Matrix4) {
        if (Layer.Matrix) matrix.multiply(matrixUtils.parseMatrix(Layer.Matrix));
        if (Layer.ChildList) {
            if (Array.isArray(Layer.ChildList)) {
                Layer.ChildList.map((childList: any) => this.parseChildList(childList, matrix.clone()))
            } else {
                this.parseChildList(Layer.ChildList, matrix.clone())
            }
        }
    }

    parseChildList(ChildList, matrix) {
        if (ChildList.GroupObject) this.parseGroupObject(ChildList.GroupObject, matrix.clone())
        if (ChildList.SceneObject) this.parseSceneObject(ChildList.SceneObject, matrix.clone())
        if (ChildList.FocusPoint) this.parseFocusPoint(ChildList.FocusPoint, matrix.clone())
        if (ChildList.Fixture) this.parseFixture(ChildList.Fixture, matrix.clone())
        if (ChildList.Support) this.parseSupport(ChildList.Support, matrix.clone())
        if (ChildList.Truss) this.parseTruss(ChildList.Truss, matrix.clone())
        if (ChildList.VideoScreen) this.parseVideoScreen(ChildList.VideoScreen, matrix.clone())
        if (ChildList.Projector) this.parseProjector(ChildList.Projector, matrix.clone())
    }

    parseSceneObject(SceneObject, matrix) {
        if (SceneObject && Array.isArray(SceneObject)) SceneObject.map((obj: any) => this.parseSceneObject(obj, matrix.clone()));

        if (SceneObject.Matrix) matrix.multiply(matrixUtils.parseMatrix(SceneObject.Matrix));
        if (SceneObject.Geometries) this.parseGeometries(SceneObject.Geometries, matrix.clone());
        if (SceneObject.ChildList) this.parseChildList(SceneObject.ChildList, matrix.clone());
    }

    parseGroupObject(GroupObject, matrix) {
        if (GroupObject && Array.isArray(GroupObject)) GroupObject.map((obj: any) => this.parseFocusPoint(obj, matrix.clone()));

        if (GroupObject.Matrix) matrix.multiply(matrixUtils.parseMatrix(GroupObject.Matrix));
        if (GroupObject.ChildList) this.parseChildList(GroupObject.ChildList, matrix.clone());
    }


    parseFocusPoint(FocusPoint, matrix) {
        if (FocusPoint && Array.isArray(FocusPoint)) FocusPoint.map((obj: any) => this.parseFocusPoint(obj, matrix.clone()));
        else {
            if (FocusPoint.Matrix) matrix.multiply(matrixUtils.parseMatrix(FocusPoint.Matrix));
            if (FocusPoint.Geometries) this.parseGeometries(FocusPoint.Geometries, matrix.clone());
            if (FocusPoint.ChildList) this.parseChildList(FocusPoint.ChildList, matrix.clone());
        }

    }

    parseFixture(Fixture, matrix) {
        if (Fixture && Array.isArray(Fixture)) Fixture.map((obj: any) => this.parseFixture(obj, matrix.clone()));
        else {
            if (Fixture.Matrix) matrix.multiply(matrixUtils.parseMatrix(Fixture.Matrix));
            if (Fixture.ChildList) this.parseChildList(Fixture.ChildList, matrix.clone());
        }
    }

    parseSupport(Support, matrix) {
        if (Support && Array.isArray(Support)) Support.map((obj: any) => this.parseSupport(obj, matrix.clone()));
        else {
            if (Support.Matrix) matrix.multiply(matrixUtils.parseMatrix(Support.Matrix));
            if (Support.Geometries) this.parseGeometries(Support.Geometries, matrix.clone());
            if (Support.ChildList) this.parseChildList(Support.ChildList, matrix.clone());
        }
    }

    parseTruss(Truss, matrix) {
        if (Truss && Array.isArray(Truss)) Truss.map((obj: any) => this.parseTruss(obj, matrix.clone()));
        else {
            if (Truss.Matrix) matrix.multiply(matrixUtils.parseMatrix(Truss.Matrix));
            if (Truss.Geometries) this.parseGeometries(Truss.Geometries, matrix.clone());
            if (Truss.ChildList) this.parseChildList(Truss.ChildList, matrix.clone());
        }
    }

    parseVideoScreen(VideoScreen, matrix) {
        if (VideoScreen && Array.isArray(VideoScreen)) VideoScreen.map((obj: any) => this.parseVideoScreen(obj, matrix.clone()));
        else {
            if (VideoScreen.Matrix) matrix.multiply(matrixUtils.parseMatrix(VideoScreen.Matrix));
            if (VideoScreen.Geometries) this.parseGeometries(VideoScreen.Geometries, matrix.clone());
            if (VideoScreen.ChildList) this.parseChildList(VideoScreen.ChildList, matrix.clone());
        }
    }

    parseProjector(Projector, matrix) {
        if (Projector && Array.isArray(Projector)) Projector.map((obj: any) => this.parseGeometries(obj, matrix.clone()));
        else {
            if (Projector.Matrix) matrix.multiply(matrixUtils.parseMatrix(Projector.Matrix));
            if (Projector.Geometries) this.parseGeometries(Projector.Geometries, matrix.clone());
            if (Projector.ChildList) this.parseChildList(Projector.ChildList, matrix.clone());
        }
    }

    parseGeometries(Geometries, matrix) {
        if (Geometries && Array.isArray(Geometries)) Geometries.map((obj: any) => this.parseGeometries(obj, matrix.clone()));
        else {
            if (Geometries.Geometry3D) this.parseGeometry3D(Geometries.Geometry3D, matrix.clone());
        }
    }

    parseGeometry3D(Geometry3D, matrix) {
        if (Array.isArray(Geometry3D)) Geometry3D.map((obj: any) => this.parseGeometry3D(obj, matrix.clone()));
        else {
            if (Geometry3D.Matrix) matrix.multiply(matrixUtils.parseMatrix(Geometry3D.Matrix));

            const matrices = this.models.get(Geometry3D._fileName) || [];
            matrices.push(matrix.clone());
            this.models.set(Geometry3D._fileName, matrices);

            if (Geometry3D._fileName == "0x826A5EB7.3ds") {
                console.log(matrix.clone())
            }
        }
    }
}
