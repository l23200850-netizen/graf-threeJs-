import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría para los cubos
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Crear materiales con diferentes colores
const materialGreen = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // verde
const materialBlue = new THREE.MeshStandardMaterial({ color: 0x0000ff });  // azul
const materialRed = new THREE.MeshStandardMaterial({ color: 0xff0000 });   // rojo

// Crear los tres cubos
const cube1 = new THREE.Mesh(geometry, materialGreen);
const cube2 = new THREE.Mesh(geometry, materialBlue);
const cube3 = new THREE.Mesh(geometry, materialRed);

// Posicionar los cubos uno al lado del otro
cube1.position.x = -2; // izquierda
cube2.position.x = 0;  // centro
cube3.position.x = 2;  // derecha

// Agregar los cubos a la escena
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

// Agregar una luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación con diferentes velocidades
function animate() {
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;

    cube2.rotation.x += 0.02; // más rápido
    cube2.rotation.y += 0.015;

    cube3.rotation.x += 0.005; // más lento
    cube3.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);
