import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 2, 5);

const canvas = document.getElementById('threeCanvas');
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.outputEncoding = THREE.sRGBEncoding;

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(5, 10, 7.5);
scene.add(light);

function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerWidth * (9 / 16);
    const aspect = width / height;

    camera.aspect = aspect;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);

    if (width < 768) camera.position.set(0, 2.08, 5.1);
    else camera.position.set(0, 2, 5);
}

export { scene, camera, renderer, onWindowResize };
