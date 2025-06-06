import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { scene, camera } from './scene.js';

const loader = new GLTFLoader();
const models = [];
const spacing = 0.36;
const numberOfModels = 13;
let mixer;
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
            const standUpAction = mixer.clipAction(
                THREE.AnimationClip.findByName(gltf.animations, 'TRS|standUpToIdle')
            ); // 26 Wakeup
            const idleAction = mixer.clipAction(
                THREE.AnimationClip.findByName(gltf.animations, 'TRS|idleToRun')
            ); // 15 idle
            const runAction = mixer.clipAction(
                THREE.AnimationClip.findByName(gltf.animations, 'TRS|run')
            ); // 22 Running

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

export { models, spacing, initModels, loadElephant, mixer, isAccelerating };
