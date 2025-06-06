import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { PMREMGenerator } from 'three';
import { scene, renderer } from './scene.js';

const sky = new Sky();
sky.scale.setScalar(10000);
scene.add(sky);

const sun = new THREE.Vector3();
const pmremGenerator = new PMREMGenerator(renderer);
const sceneEnv = new THREE.Scene();

const skyUniforms = sky.material.uniforms;
skyUniforms['turbidity'].value = 4; // default: 10, lighting beyond the sun
skyUniforms['rayleigh'].value = 2.2; // default: 2, sunset orangeness variation
skyUniforms['mieCoefficient'].value = 0.004; // default: 0.005, idk you're on your own with that one
skyUniforms['mieDirectionalG'].value = 0.8; // default: 0.8, ugh... stickiness of the light autour du soleil ?

// Sky settings
const parameters = {
    elevation: -0.4,
    azimuth: 130,
};

function updateSun() {
    const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
    const theta = THREE.MathUtils.degToRad(parameters.azimuth);

    sun.setFromSphericalCoords(1, phi, theta);
    sky.material.uniforms['sunPosition'].value.copy(sun);

    if (scene && scene.children) {
        const waterUniform = scene.children.find((child) => child.material?.uniforms?.sunDirection);
        if (waterUniform) {
            waterUniform.material.uniforms['sunDirection'].value.copy(sun).normalize();
        }
    }

    const renderTarget = pmremGenerator.fromScene(sceneEnv);
    scene.environment = renderTarget.texture;
}

updateSun();

export { sky, updateSun };
