// Package imports
import * as THREE from "three"; // To create and display animated 3D computer graphics
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; // Have camera orbit around the rig
import { MVR } from "./classes/MVR.ts";
import { Model } from "./utils/modelUtils.ts";

// File Imports
// import capture_demo_show from './assets/Showfiles/capture_demo_show.mvr'; // Example mvr file

export function init(refContainer: React.MutableRefObject<HTMLElement | null>) {
    // Don't render canvases if init is called multiple times
    if (refContainer.current?.hasChildNodes()) {
        return;
    }

    // Create scene
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scene = new THREE.Scene();

    // Create camera, Renderer, controls, and light
    const camera: THREE.PerspectiveCamera = createCamera();
    const renderer: THREE.WebGLRenderer = createRenderer();
    const controls: OrbitControls = createControls();
    const light: THREE.DirectionalLight = createLight();

    // Add scene to element
    refContainer.current!.appendChild(renderer.domElement);

    // ----- File handling
    const fileInput = document.getElementById("fileInput")!;
    fileInput.addEventListener("change", handleFileUpload);
    // File handling -----

    // Animate scene
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        controls.update();
    }
    animate();

    // Handle window resizing
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
    }

    // Handle window resize
    // TODO: Improve
    function handleWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
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
    // TODO: Improve
    function createControls(): OrbitControls {
        // Set orbit controls (Use mouse to look around)
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        return controls;
    }

    // Triggered when a file is uploaded
    function handleFileUpload(event: Event) {
        try {
            const file: File = loadFile(event);
            loadScene(file);
        } catch (error) {
            if (error instanceof Error) alert(error.message); // Handle the error
        }
    }

    // Load the mvr file
    function loadFile(event: Event): File | never {
        const inputElement = event.target as HTMLInputElement;

        if (!inputElement || !inputElement.files || !inputElement.files[0])
            throw new Error("Error, no target or files");

        const file: File = inputElement.files[0];

        if (!file.name.endsWith(".mvr")) throw new Error("File '" + file.name + "' is not a .mvr file");
        return file;
    }

    // Create a base camera
    function createCamera(): THREE.PerspectiveCamera {
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100000);
        return camera;
    }

    // Move the camera and reset orbit position to 0,0,0
    function setOrbitCamera(x: number, y: number, z: number) {
        controls.target = new THREE.Vector3(0, 0, 0);
        camera.position.set(x, y, z);
        controls.update();
    }

    // Create a directional light (Points towards 0,0,0)
    function createLight(): THREE.DirectionalLight {
        const light = new THREE.DirectionalLight(0xffeedd, 1);
        scene.add(light);
        return light;
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
        const mvr = new MVR(file);
        await mvr.init(); // Initialize MVR (Load models n stuff)

        // Load all models
        try {
            const models: Model[] = mvr.getModels();
            const boundingBox = new THREE.Box3();
            const material = new THREE.MeshStandardMaterial(); // Using standard Material for now

            models.forEach((model) => {
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
            });

            // Adjust camera position based on the bounding sphere
            setOrbitCamera(0, boundingBox.max.y * 1.5, boundingBox.max.z * 1.5);
            setLightPosition(0, boundingBox.max.y * 1.5, boundingBox.max.z * 1.5);
        } catch (error) {
            console.error("Error loading models: ", error);
        }
    }
}
