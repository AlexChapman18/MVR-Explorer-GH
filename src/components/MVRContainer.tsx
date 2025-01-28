import { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // To create and display animated 3D computer graphics
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; // Have camera orbit around the rig
import { MVR } from "../MVR-Renderer/classes/MVR.ts";
import { Model } from "../MVR-Renderer/utils/modelUtils.ts";
import { StepStatus, StepName } from "../contexts/ProgressContext.tsx";
import { useProgressStepsContext } from "../contexts/ProgressContext.tsx";

function MVRContainer() {
    const refContainer = useRef<HTMLDivElement>(null);
    const psContext = useProgressStepsContext();

    // Create scene
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scene = new THREE.Scene();

    // Create camera, Renderer, controls, and light
    const camera: THREE.PerspectiveCamera = createCamera();
    const renderer: THREE.WebGLRenderer = createRenderer();
    const controls: OrbitControls = createControls();
    controls.addEventListener("change", function () {
        renderer.render(scene, camera); // render whenever the OrbitControls changes
    });
    const light: THREE.DirectionalLight = createLight();

    // Create a base camera
    function createCamera(): THREE.PerspectiveCamera {
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100000);
        return camera;
    }

    // Create the renderer
    function createRenderer(): THREE.WebGLRenderer {
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            logarithmicDepthBuffer: true,
        });
        renderer.setSize(width, height);
        renderer.setClearColor(0x333333, 1);
        return renderer;
    }

    // Create orbit controls
    function createControls(): OrbitControls {
        // Set orbit controls (Use mouse to look around)
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        return controls;
    }

    // Create a directional light (Points towards 0,0,0)
    function createLight(): THREE.DirectionalLight {
        const light = new THREE.DirectionalLight(0xffeedd, 1);
        scene.add(light);
        return light;
    }

    // Animate scene
    // function animate() {
    //     requestAnimationFrame(animate);
    //     renderer.render(scene, camera);
    //     controls.update();
    // }
    // animate();
    renderer.render(scene, camera); // render once when the scene has been setup

    // Handle window resize
    function handleWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera); // render whenever the screen size changes
    }

    window.addEventListener("resize", handleWindowResize, false);

    // Remove all models on scene
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

        if (!inputElement || !inputElement.files || !inputElement.files[0])
            throw new Error("Error, no target or files");

        const file: File = inputElement.files[0];

        if (!file.name.endsWith(".mvr")) throw new Error("File '" + file.name + "' is not a .mvr file");
        psContext.setMVRName(file.name);
        return file;
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

    // Function to load a zip, extract and load all .3ds files
    async function loadScene(file: File) {
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

                // Force a re-render
                instancedMesh.instanceMatrix.needsUpdate = true;

                // Add to scene
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

        renderer.render(scene, camera); // render once when the scene has been setup
    }

    // Run initMVRCanvas when container is mounted
    useEffect(() => {
        refContainer.current!.appendChild(renderer.domElement);
    }, []);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        psContext.resetProgressSteps();
        psContext.setVisibility(true);

        try {
            const file: File = loadFile(event);
            await loadScene(file); // Wait for loadScene to complete
        } catch (error) {
            if (error instanceof Error) alert(error.message); // Handle the error
        }

        psContext.setVisibility(false);
    };

    return (
        <>
            <input type="file" id="fileInput" accept=".mvr" onChange={handleFileChange} />
            <div ref={refContainer} className="MVRContainer" />
        </>
    );
}

export default MVRContainer;
