import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTSLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TDSLoader } from 'three/addons/loaders/TDSLoader.js';
import GSD from '/src/GeneralSceneDescription.xml'
import { JSZip } from 'jszip';

var zip = new JSZip();



console.log(GSD);


// Create scene
const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;

// Create renderer and set scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
renderer.setClearColor(0x333333, 1);

document.body.appendChild(renderer.domElement);

// Set orbit controls (Use mouse to look around)
const ctrls = new OrbitControls(camera, renderer.domElement);
ctrls.enableDamping = true;

// Create an instance of TDSLoader
var loader = new TDSLoader();

// Load the 3DS model
// loader.load('./assets/Showfiles/capture_demo_show/0x1A6F77A3.3ds', function (DSObject) {
//   console.log(DSObject);
//   // When the model is loaded, add it to the scene
//   scene.add(DSObject);
//   DSObject.position.set(0, 0, 0); // Optional: Set position if needed
// });


const normal = new THREE.TextureLoader().load('models/3ds/portalgun/textures/normal.jpg');


// loader.setResourcePath('./assets/');
// loader.load('Showfiles/capture_demo_show/0x4EA4B5C9.3ds', function (object) {
// loader.load('./src/portalgun.3ds', function (object) {
//   console.log(object)
//   object.traverse(function (child) {
//     if (child.isMesh) {
//       child.material.specular.setScalar(0.1);
//       child.material.normalMap = normal;
//     }
//   });
//   scene.add(object);
// });

loader.load('./src/0x1A6F77A3.3ds', function (object) {
  console.log(object)
  // object.traverse(function (child) {
  //   if (child.isMesh) {
  //     child.material.specular.setScalar(0.1);
  //     child.material.normalMap = normal;
  //   }
  // });
  object.scale.set(0.001, 0.001, 0.001)
  object.position.set(0, 0, 0)
  scene.add(object);
});







// Create cube
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshStandardMaterial({
//   color: 0xffff00,
// });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// Create light
const light = new THREE.PointLight(0xffffff, 100, 100);
light.position.z = 20
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffeedd, 3);
directionalLight.position.set(0, 0, 2);
scene.add(directionalLight);

// Make cube animate
function animate() {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.001;
  // cube.rotation.y += 0.002;
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
window.addEventListener('resize', handleWindowResize, false);