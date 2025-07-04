import * as THREE from 'three';
import Globe from 'globe.gl';
import earthBlueMarble from '/src/img/transparentTextures/earth-blue-marble.jpg';
import earthTopology from '/src/img/transparentTextures/earth-topology.png';
import clouds from '/src/img/transparentTextures/clouds.png';

const world = new Globe(document.getElementById('globeWindow'), { animateIn: false })
    .globeImageUrl(earthBlueMarble)
    .bumpImageUrl(earthTopology);

world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.55;

if (isMobileDevice()) world.controls().enableRotate = false;
else world.controls().enableZoom = false;

setTimeout(() => {
    const renderer = world.renderer?.();
    if (renderer) renderer.setClearColor(0x000000, 0);

    const globeCanvas = document.querySelector('#globeWindow canvas');
    if (globeCanvas) {
        globeCanvas.style.backgroundColor = 'transparent';
    }
}, 100);

const CLOUDS_IMG_URL = clouds;
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

function isMobileDevice() {
    return typeof window.orientation !== "undefined" || navigator.userAgent.includes('IEMobile') || window.innerWidth < 768;
}