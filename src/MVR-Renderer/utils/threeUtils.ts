import * as THREE from "three"; // To create and display animated 3D computer graphics
import { Matrix4 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"; // Load GLTS model files
import { TDSLoader } from "three/examples/jsm/loaders/TDSLoader.js"; // Load .3ds model files

// Get the Mesh from the .3ds file ArrayBuffer
export async function load3DSGeometry(modelData: ArrayBuffer): Promise<THREE.BufferGeometry> {
    return new Promise((resolve, reject) => {
        const loader = new TDSLoader();

        const modelURL = URL.createObjectURL(new Blob([modelData]));

        loader.load(
            modelURL,
            (ds3) => {
                const mesh = ds3.children[0] as THREE.Mesh;
                if (mesh.geometry) {
                    resolve(mesh.geometry);
                } else {
                    reject(new Error("No geometry found in 3DS model."));
                }
            },
            undefined,
            (error) => {
                reject(error);
            },
        );
    });
}

// Get the Mesh from the .glb file ArrayBuffer
export async function loadGLBGeometry(modelData: ArrayBuffer): Promise<THREE.BufferGeometry> {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();

        const modelURL = URL.createObjectURL(new Blob([modelData]));

        loader.load(
            modelURL,
            (glb) => {
                const mesh = glb.scene.children[0] as THREE.Mesh;
                if (mesh.geometry) {
                    resolve(mesh.geometry);
                } else {
                    reject(new Error("No geometry found in GLB model."));
                }
            },
            undefined,
            (error) => {
                reject(error);
            },
        );
    });
}

// Convert matrix string from the GSD to Matrix4
export function StringToMatrix(matrixString: string): Matrix4 {
    const matrix = matrixString
        .slice(1, -1) // Remove the outer curly braces
        .replace(/}{/g, ",")
        .split(",")
        .map(parseFloat);

    // prettier-ignore
    return new Matrix4(
    matrix[0]!, matrix[3]!, matrix[6]!, matrix[9]!, 
    matrix[1]!, matrix[4]!, matrix[7]!, matrix[10]!,
    matrix[2]!, matrix[5]!, matrix[8]!, matrix[11]!,
    0,          0,          0,          1,
  );
}
