import * as THREE from "three"; // To create and display animated 3D computer graphics
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; // Have camera orbit around the rig
import { MVR } from "../MVR-Renderer/classes/MVR.ts";
import { Model } from "../MVR-Renderer/utils/modelUtils.ts";
import { StepStatus, StepName, ProgressStepsContextType } from "../contexts/ProgressContext.tsx";

const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
const controls = new OrbitControls(camera, renderer.domElement);
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

        // Dampen Orbit Controls
        controls.enableDamping = true;

        // Add light to scene
        scene.add(light);

        // Setup renderer
        this.setRenderer(window.innerWidth, window.innerHeight);

        // Handle window resizing
        window.addEventListener("resize", this.handleWindowResize, false);

        renderer.render(scene, camera);
    },

    setRenderer: function (width: number, height: number): void {
        renderer.setSize(width, height);
        renderer.setClearColor(0x2a2b2e, 1);
    },

    handleWindowResize: function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera); // render whenever the screen size changes
    },

    call: function () {
        console.log("Calling log");
    },
    loadFile: async function (file: File, PSContext: ProgressStepsContextType) {
        await this.loadScene(file, PSContext); // Wait for loadScene to complete
    },
    // Remove all models from scene and re-render
    clean: function () {
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
    },

    // Function to load a zip, extract and load all .3ds files
    loadScene: async function (file: File, psContext: ProgressStepsContextType) {
        psContext.startProgressSteps();

        // Remove existing MVR model if one
        this.clean();

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

            //
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
            this.setOrbitCamera(0, boundingBox.max.y * 1.5, boundingBox.max.z * 1.5);
            this.setLightPosition(0, boundingBox.max.y * 1.5, boundingBox.max.z * 1.5);

            psContext.setProgressStatus(StepName.DRAWING_MODELS, StepStatus.SUCCESS);
        } catch (error) {
            console.error("Error loading models: ", error);
        }

        // Close ProgressSteps
        psContext.finishProgressSteps();

        renderer.render(scene, camera); // render once when the scene has been setup
    },

    // Move the camera and reset orbit position to 0,0,0
    setOrbitCamera: function (x: number, y: number, z: number) {
        controls.target = new THREE.Vector3(0, 0, 0);
        camera.position.set(x, y, z);
        controls.update();
    },

    // Move the light
    setLightPosition: function (x: number, y: number, z: number) {
        light.position.set(x, y, z);
    },
};
