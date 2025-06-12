import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { scene } from './scene.js';

const waterGeometry = new THREE.PlaneGeometry(10000, 10000);

const waterNormals = new THREE.TextureLoader().load(
    './src/textures/waternormals.jpg',
    (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    }
);

const water = new Water(waterGeometry, {
    textureWidth: 256, // default: 512, I set to 256 for better performance
    textureHeight: 256, // default: 512, idem
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

export { water };
