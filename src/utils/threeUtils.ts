import * as jsonUtils from '../utils/jsonUtils';
import * as zipUtils from '../utils/zipUtils';
import * as THREE from "three"; // To create and display animated 3D computer graphics
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; // Load GLTS model files
import { TDSLoader } from 'three/addons/loaders/TDSLoader.js'; // Load .3ds model files


export async function loadModel3ds(modelData: ArrayBuffer): Promise<THREE.Object3D> {

    return new Promise((resolve, reject) => {
        const loader = new TDSLoader();

        // Create a URL from the ArrayBuffer
        const modelURL = URL.createObjectURL(new Blob([modelData]));

        loader.load(
            modelURL,
            (object) => {
                resolve(object);
            },
            undefined,
            (error) => {
                reject(error);
            }
        );
    });
}