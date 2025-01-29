import { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // To create and display animated 3D computer graphics
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; // Have camera orbit around the rig
import { MVR } from "../MVR-Renderer/classes/MVR.ts";
import { Model } from "../MVR-Renderer/utils/modelUtils.ts";
import { StepStatus, StepName, ProgressStepsContextType } from "../contexts/ProgressContext.tsx";
import { useProgressStepsContext } from "../contexts/ProgressContext.tsx";

// Creating renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
// Creating scene
const scene = new THREE.Scene();
// Creating camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
// Create Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
// Create Light
const light = new THREE.DirectionalLight(0xffeedd, 1);

export default {
    renderer,
    scene,
    camera,
    controls,
    light,

    init: function () {
        // Only update the view when using controls
        controls.addEventListener("change", function () {
            renderer.render(scene, camera); // render whenever the OrbitControls changes
        });

        // Set window Width and Height
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Dampen Orbit Controls
        controls.enableDamping = true;

        // Add light to scene
        scene.add(light);

        // Setup renderer
        setRenderer();
        function setRenderer(): void {
            renderer.setSize(width, height);
            renderer.setClearColor(0x333333, 1);
        }

        // Handle window resizing
        window.addEventListener("resize", handleWindowResize, false);
        function handleWindowResize() {
            camera.aspect = window.innerWidth / width;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, height);
            renderer.render(scene, camera); // render whenever the screen size changes
        }

        renderer.render(scene, camera);
    },
    call: function () {
        console.log("Calling log");
    },
    loadFile: async function (file: File, PSContext: ProgressStepsContextType) {
        await loadScene(file, PSContext); // Wait for loadScene to complete
    },
};

// Remove all models from scene and re-render
function clean() {
    const meshes: THREE.Mesh[] = [];

    // If a mesh, add to meshes "Executes the callback on this object and all descendants."
    scene.traverse(function (object) {
        if (object instanceof THREE.Mesh) meshes.push(object);
    });

    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        if (mesh) {
            // Material: Material | Material[]
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]; // If singular, make array
            materials.forEach((material) => material.dispose()); // Inline dispose
            mesh.geometry.dispose();
        }
        scene.remove(mesh!);
    }
    renderer.render(scene, camera);
}

// Load the mvr file
function loadFile(event: Event): File | never {
    const inputElement = event.target as HTMLInputElement;

    if (!inputElement || !inputElement.files || !inputElement.files[0]) throw new Error("Error, no target or files");

    const file: File = inputElement.files[0];

    if (!file.name.endsWith(".mvr")) throw new Error("File '" + file.name + "' is not a .mvr file");
    // psContext.setMVRName(file.name);
    return file;
}

// Function to load a zip, extract and load all .3ds files
async function loadScene(file: File, psContext: ProgressStepsContextType) {
    psContext.startProgressSteps();

    // Remove existing MVR model if one
    clean();

    // Create and initialise new MVR model
    const mvr = new MVR(file, psContext);
    psContext.setProgressStatus(StepName.EXTRACTING_MVR, StepStatus.PENDING);
    await mvr.init(); // Initialize MVR (Load models n stuff)
    psContext.setNumFilesProcessed(StepName.EXTRACTING_MVR, 1);
    psContext.setProgressStatus(StepName.EXTRACTING_MVR, StepStatus.SUCCESS);

    // Load all models
    try {
        const models: Model[] = mvr.getModels();
        const boundingBox = new THREE.Box3();
        const material = new THREE.MeshStandardMaterial(); // Using standard Material for now
        psContext.setProgressStatus(StepName.DRAWING_MODELS, StepStatus.PENDING);
        psContext.setNumFilesToProcess(StepName.DRAWING_MODELS, models.length);

        models.forEach(async (model, index) => {
            // Computer bounding sphere(used to place camera at start)
            if (!model.geometry.boundingBox) {
                model.geometry.computeBoundingBox();
            }
            boundingBox.union(model.geometry.boundingBox!);

            // Use an instanced mesh to improve performance
            const instancedMesh = new THREE.InstancedMesh(model.geometry, material, model.modelMetadata.length);

            // Iterate through and set transitionMatrix
            model.modelMetadata.forEach((modelMetadata, index) => {
                instancedMesh.setMatrixAt(index, modelMetadata.matrix);
            });

            // Force a re-render and add to scene
            instancedMesh.instanceMatrix.needsUpdate = true;
            scene.add(instancedMesh);

            psContext.setNumFilesProcessed(StepName.DRAWING_MODELS, index);
        });

        // Adjust camera position based on the bounding sphere
        setOrbitCamera(0, boundingBox.max.y * 1.5, boundingBox.max.z * 1.5);
        setLightPosition(0, boundingBox.max.y * 1.5, boundingBox.max.z * 1.5);

        psContext.setProgressStatus(StepName.DRAWING_MODELS, StepStatus.SUCCESS);
    } catch (error) {
        console.error("Error loading models: ", error);
    }

    // Close ProgressSteps
    psContext.finishProgressSteps();

    renderer.render(scene, camera); // render once when the scene has been setup
}

// Move the camera and reset orbit position to 0,0,0
function setOrbitCamera(x: number, y: number, z: number) {
    controls.target = new THREE.Vector3(0, 0, 0);
    camera.position.set(x, y, z);
    controls.update();
}

// Move the light
function setLightPosition(x: number, y: number, z: number) {
    light.position.set(x, y, z);
}
