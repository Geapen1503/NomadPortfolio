import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { PMREMGenerator } from 'three';

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
let mixer;

function createModel(xPosition) {
    return new Promise((resolve, reject) => {
        loader.load(
            './src/model/bridge_model.glb',
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

function loadElephant() {
    loader.load('./src/model/elephant.glb', (gltf) => {
        const elephant = gltf.scene;
        elephant.position.set(-0.02, 1.862, 4.69);
        elephant.rotation.set(0, 1.6, 0);
        elephant.scale.set(0.1, 0.1, 0.1);
        scene.add(elephant);

        mixer = new THREE.AnimationMixer(elephant);
        if (gltf.animations.length > 0) {
            const action = mixer.clipAction(gltf.animations[22]);
            action.play();
        }
    });
}

// ocean vars
const waterGeometry = new THREE.PlaneGeometry(10000, 10000);

const waterNormals = new THREE.TextureLoader().load(
    './src/textures/waternormals.jpg',
    (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    }
);

const water = new Water(waterGeometry, {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: waterNormals,
    sunDirection: new THREE.Vector3(),
    sunColor: 0xffffff,
    waterColor: 0x001e0f,
    distortionScale: 8.0, // default 3.7, min 0.0, max 8.0
    fog: scene.fog !== undefined
});

// Sea settings
water.material.uniforms.size.value = 10.0;

water.rotation.x = -Math.PI / 2;
water.position.y = -10;
scene.add(water);

// sky vars
const sky = new Sky();
sky.scale.setScalar(10000);
scene.add(sky);

const sun = new THREE.Vector3();
const pmremGenerator = new PMREMGenerator(renderer);
const sceneEnv = new THREE.Scene();

const skyUniforms = sky.material.uniforms;
skyUniforms['turbidity'].value = 4; // default: 10, lighting beyond the sun
skyUniforms['rayleigh'].value = 2; // default: 2, sunset orangeness variation
skyUniforms['mieCoefficient'].value = 0.005; // default: 0.005, idk you're on your own with that one
skyUniforms['mieDirectionalG'].value = 0.8; // default: 0.8, ugh... stickiness of the light around the sun ?

// Sky settings
const parameters = {
    elevation: 0.0,
    azimuth: 130
};

function updateSun() {
    const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
    const theta = THREE.MathUtils.degToRad(parameters.azimuth);

    sun.setFromSphericalCoords(1, phi, theta);
    sky.material.uniforms['sunPosition'].value.copy(sun);
    water.material.uniforms['sunDirection'].value.copy(sun).normalize();

    const renderTarget = pmremGenerator.fromScene(sceneEnv);
    scene.environment = renderTarget.texture;
}

updateSun();

function animate() {
    requestAnimationFrame(animate);

    models.forEach((model) => {
        model.position.x -= 0.0038;

        if (model.position.x < -spacing * 2) {
            const lastModel = models[models.length - 1];
            model.position.x = lastModel.position.x + spacing;
            models.push(models.shift());
        }
    });

    if (mixer) mixer.update(0.016);

    water.material.uniforms['time'].value += 1.0 / 60.0;

    renderer.render(scene, camera);
}

initModels().then(() => {
    loadElephant();
    animate();
});
