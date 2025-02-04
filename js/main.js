import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.outputEncoding = THREE.sRGBEncoding;
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(5, 10, 7.5);
scene.add(light);

const loader = new GLTFLoader();
const models = [];
const spacing = 0.36;
const numberOfModels = 13;

function createModel(xPosition) {
    return new Promise((resolve, reject) => {
        loader.load(
            './model/bridge_model.glb',
            (gltf) => {
                const model = gltf.scene;
                model.position.set(xPosition, camera.position.y - 0.25, camera.position.z - 0.3);
                model.rotation.set(0, 7.854, 0);
                model.scale.set(3, 3, 3);
                scene.add(model);
                resolve(model);
            },
            null,
            (error) => reject(error)
        );
    });
}

async function initModels() {
    for (let i = 0; i < numberOfModels; i++) {
        const model = await createModel(i * spacing);
        models.push(model);
    }
}

function animate() {
    requestAnimationFrame(animate);

    models.forEach((model) => {
        model.position.x -= 0.004;

        if (model.position.x < -spacing * 2) {
            const lastModel = models[models.length - 1];
            model.position.x = lastModel.position.x + spacing;
            models.push(models.shift());
        }
    });

    renderer.render(scene, camera);
}

initModels().then(() => animate());
