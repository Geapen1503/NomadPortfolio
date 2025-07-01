import * as THREE from 'three';
import Globe from 'globe.gl';

const world = new Globe(document.getElementById('globeWindow'), { animateIn: false })
    .globeImageUrl('./src/img/transparentTextures/earth-blue-marble.jpg')
    .bumpImageUrl('./src/img/transparentTextures/earth-topology.png');

world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.55;
world.controls().enableZoom = false;

setTimeout(() => {
    const renderer = world.renderer?.();
    if (renderer) renderer.setClearColor(0x000000, 0);

    const globeCanvas = document.querySelector('#globeWindow canvas');
    if (globeCanvas) {
        globeCanvas.style.backgroundColor = 'transparent';
    }
}, 100);

const CLOUDS_IMG_URL = './src/img/transparentTextures/clouds.png';
const CLOUDS_ALT = 0.004;
const CLOUDS_ROTATION_SPEED = -0.008;

new THREE.TextureLoader().load(CLOUDS_IMG_URL, cloudsTexture => {
    const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(world.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
    );
    world.scene().add(clouds);

    (function rotateClouds() {
        clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
        requestAnimationFrame(rotateClouds);
    })();
});