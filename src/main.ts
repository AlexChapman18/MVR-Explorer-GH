// Package imports
import * as THREE from "three"; // To create and display animated 3D computer graphics
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MVR } from "./MVR-Renderer/classes/MVR";

// File Imports
// import capture_demo_show from './assets/Showfiles/capture_demo_show.mvr'; // Example mvr file

// Create scene
const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 100000);
camera.position.z = 5000;
camera.position.y = -20000;

// Create renderer and set scene
const MVRCanvas = document.getElementById("MVRCanvas")! as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({
  canvas: MVRCanvas,
  antialias: true,
  logarithmicDepthBuffer: true,
});
renderer.setSize(w, h);
renderer.setClearColor(0x333333, 1);

// Set orbit controls (Use mouse to look around)
const ctrls = new OrbitControls(camera, renderer.domElement);
ctrls.enableDamping = true;

// ----- File handling
const fileInput = document.getElementById("fileInput")!;
fileInput.addEventListener("change", handleFileUpload);
// File handling -----

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
  const target = event.target as HTMLInputElement;

  if (!target || !target.files) {
    throw new Error("Error: !target || !target.files");
  }

  const file: File = target.files[0];

  if (!file) {
    throw new Error("No file selected.");
  } else if (!file.name.endsWith(".mvr")) {
    throw new Error("Please upload a valid .mvr file.");
  } else {
    return file;
  }
}

// Function to load a zip, extract and load all .3ds files
async function loadScene(file: File) {
  const mvr: MVR = new MVR(file);
  await mvr.init(); // Initialize MVR (Load models n stuff)

  // Wait for all models to load
  try {
    const models = mvr.models;
    const positions = mvr.GSD.models;
    models.forEach((model) => {
      if (positions.get(model[0])) {
        const modelPositions = positions.get(model[0])!;

        modelPositions.forEach((modelPosition) => {
          const newModel = model[1].clone();
          newModel.applyMatrix4(modelPosition);
          scene.add(newModel);
        });
      }
    });
  } catch (error) {
    console.error("Error loading some models", error);
  }
}

// Create light
const light = new THREE.PointLight(0xffffff, 100, 9999);
light.position.z = 20;
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffeedd, 3);
directionalLight.position.set(0, 0, 2);
scene.add(directionalLight);

// Make cube animate
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  ctrls.update();
}
animate();

// Handle window resizing
function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", handleWindowResize, false);
