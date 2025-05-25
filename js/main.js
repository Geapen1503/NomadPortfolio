import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { PMREMGenerator } from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

const canvas = document.getElementById('threeCanvas');
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.outputEncoding = THREE.sRGBEncoding;

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(5, 10, 7.5);
scene.add(light);

const loader = new GLTFLoader();
const models = [];
const spacing = 0.36;
const numberOfModels = 13;
let mixer;

let shouldMove = false;
let moveSpeed = 0;
const maxMoveSpeed = 0.0038;
let isAccelerating = false;


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
    const visibleBridges = 3;
    const offset = -spacing * visibleBridges;

    for (let i = 0; i < numberOfModels; i++) {
        const model = await createModel(i * spacing + offset);
        models.push(model);
    }
}

function playExclusive(action) {
    mixer.stopAllAction();
    action.reset();
    action.setEffectiveWeight(1);
    action.setEffectiveTimeScale(1);
    action.play();
}


function loadElephant() {
    loader.load('./src/model/elephant_transition.glb', (gltf) => {
        const elephant = gltf.scene;
        //elephant.position.set(-0.02, 1.862, 4.69);
        elephant.position.set(
            camera.position.x - 0.04,
            camera.position.y - 0.132,
            camera.position.z - 0.31
        );

        elephant.rotation.set(0, 1.6, 0);
        elephant.scale.set(0.1, 0.1, 0.1);
        scene.add(elephant);

        mixer = new THREE.AnimationMixer(elephant);
        if (gltf.animations.length > 0) {
            const standUpAction = mixer.clipAction(THREE.AnimationClip.findByName(gltf.animations, 'TRS|standUpToIdle')); // 26 Wakeup
            const idleAction = mixer.clipAction(THREE.AnimationClip.findByName(gltf.animations, 'TRS|idleToRun')); // 15 idle
            const runAction = mixer.clipAction(THREE.AnimationClip.findByName(gltf.animations, 'TRS|run')); // 22 Running

            standUpAction.setLoop(THREE.LoopOnce);
            standUpAction.clampWhenFinished = true;
            standUpAction.play();

            standUpAction.setLoop(THREE.LoopOnce);
            standUpAction.clampWhenFinished = true;
            playExclusive(standUpAction);

            mixer.addEventListener('finished', (e) => {
                if (e.action === standUpAction) {
                    idleAction.setLoop(THREE.LoopOnce);
                    idleAction.clampWhenFinished = true;
                    playExclusive(idleAction);

                    const delayBeforeRun = 3300;

                    setTimeout(() => {
                        isAccelerating = true;
                    }, delayBeforeRun);
                } else if (e.action === idleAction) {
                    runAction.setLoop(THREE.LoopRepeat);
                    playExclusive(runAction);
                    isAccelerating = true;
                }
            });

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
    textureWidth: 512, // default: 512, I set to 256 for better performance
    textureHeight: 512, // default: 512, idem
    waterNormals: waterNormals,
    sunDirection: new THREE.Vector3(),
    sunColor: 0xffffff,
    waterColor: 0x001e0f,
    distortionScale: 8.0, // default 3.7, min 0.0, max 8.0
    fog: scene.fog !== undefined,

});

water.material.uniforms['size'] = { value: 10.0 };
water.rotation.x = -Math.PI / 2;
water.position.y = -10.3;
scene.add(water);

/*
console.log(water.material.uniforms); // Pour voir si 'size' existe
water.material.uniforms.size.value = 10.0;
water.material.needsUpdate = true;
Object.entries(water.material.uniforms).forEach(([key, val]) => {
    console.log(`${key}:`, val.value);
});*/


// sky vars
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
skyUniforms['mieDirectionalG'].value = 0.8; // default: 0.8, ugh... stickiness of the light around the sun ?

// Sky settings
const parameters = {
    elevation: -0.4,
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

    if (isAccelerating || moveSpeed > 0) {
        if (isAccelerating && moveSpeed < maxMoveSpeed) {
            moveSpeed += 0.0001;
            if (moveSpeed >= maxMoveSpeed) {
                moveSpeed = maxMoveSpeed;
                isAccelerating = false;
            }
        }

        models.forEach((model) => {
            model.position.x -= moveSpeed;

            if (model.position.x < -spacing * 2) {
                const lastModel = models[models.length - 1];
                model.position.x = lastModel.position.x + spacing;
                models.push(models.shift());
            }
        });
    }

    if (mixer) mixer.update(0.016);

    water.material.uniforms['time'].value += 1.0 / 60.0;

    renderer.render(scene, camera);
}

initModels().then(() => {
    loadElephant();
    animate();

    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.transition = 'opacity 0.5s ease';
        loader.style.opacity = 0;
        setTimeout(() => loader.remove(), 500);
    }

    document.body.classList.add('loaded');

    setTimeout(() => {
        const mask = document.getElementById('loading-mask');
        if (mask) mask.remove();
    }, 2000);
});

window.addEventListener('resize', onWindowResize, false);

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

document.addEventListener('DOMContentLoaded', () => {
    const canvasBox = document.getElementById('canvasWrapperBox');
    const navbar = document.getElementById('navbarBox');
    let firstScrollDone = false;
    let scrollInProgress = false;

    const navbarInitialTop = navbar.offsetTop;

    /*canvasBox.addEventListener('wheel', (e) => {
        if (e.deltaY > 0 && window.pageYOffset === 0 && !firstScrollDone && !scrollInProgress) {
            e.preventDefault();
            scrollInProgress = true;
            firstScrollDone = true;

            const targetY = navbar.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: targetY,
                behavior: 'smooth',
            });

            const lockDuration = 800;
            const scrollBlocker = (event) => event.preventDefault();

            window.addEventListener('wheel', scrollBlocker, { passive: false });
            window.addEventListener('touchmove', scrollBlocker, { passive: false });

            setTimeout(() => {
                window.removeEventListener('wheel', scrollBlocker);
                window.removeEventListener('touchmove', scrollBlocker);
                scrollInProgress = false;
            }, lockDuration);
        }
    }, { passive: false });*/

    window.addEventListener('scroll', () => {
        if (window.pageYOffset === 0 && !scrollInProgress) firstScrollDone = false;

        if (window.pageYOffset >= navbarInitialTop) navbar.classList.add("headerBoxShadow");
        else navbar.classList.remove("headerBoxShadow");
    });
});
