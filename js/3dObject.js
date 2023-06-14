import * as THREE from "https://cdn.skypack.dev/three@0.130.0";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.130.0/examples/jsm/controls/OrbitControls.js";

let camera, scene, renderer, controls, sphere, img_number;

img_number = Math.floor(Math.random() * 17) + 1;

function init() {
  // création de la scène
  scene = new THREE.Scene();
  
  // création de la caméra
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.set(0, 0, 1);

  // création du rendu
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  const canvas = renderer.domElement;
  document.getElementById("threeObject").appendChild(canvas);

  // création du background en 360 degrés
  const texture = new THREE.TextureLoader().load('media/360_views/' + img_number +'.jpg');
  const material = new THREE.MeshBasicMaterial({ map: texture });
  material.side = THREE.BackSide;
  const geometry = new THREE.SphereGeometry(1500, 100, 100);
  sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // ajout d'un éclairage
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 0, 1);
  scene.add(light);

  // création des contrôles de la caméra
  controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.enablePan = false;

  // commence l'animation
  animate();
}

function animate() {
  // fait tourner la sphère automatiquement
  sphere.rotation.y += 0.002;
  controls.update();
  renderer.render(scene, camera);

  // demande à la fonction d'être appelée à chaque frame
  requestAnimationFrame(animate);
}

function onWindowResize() {
  // ajuste la taille du rendu lorsque la fenêtre est redimensionnée
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  changePlaceThreeObject();
}

window.addEventListener('resize', onWindowResize);

init();


const bannerThree = document.getElementById('bannerThree');
const threeObject = document.getElementById('threeObject');
const gallery = document.querySelector('.gallery');

function changePlaceThreeObject(){
    if (window.innerWidth < 800) {
        bannerThree.appendChild(threeObject);
        
      }
      else if(threeObject.classList.value == 'no-images'){
        gallery.appendChild(threeObject);
      }
}

changePlaceThreeObject();