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
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: false, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;
//renderer.outputEncoding = THREE.sRGBEncoding;

let previousWidth = window.innerWidth;

onWindowResize();

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(5, 10, 7.5);
scene.add(light);

function onWindowResize() {
    const currentWidth = window.innerWidth;

    if (currentWidth !== previousWidth) {
        const height = window.innerHeight;

        camera.aspect = currentWidth / height;
        camera.updateProjectionMatrix();

        renderer.setSize(currentWidth, height);
        // renderer.setPixelRatio(window.devicePixelRatio);

        previousWidth = currentWidth;
    }
}



export { scene, camera, renderer, onWindowResize };
