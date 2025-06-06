import { models, spacing } from './models.js';
import { mixer, isAccelerating } from './models.js';
import { water } from './water.js';
import { camera, scene, renderer } from './scene.js';

let moveSpeed = 0;
const maxMoveSpeed = 0.0038;

function animate() {
    requestAnimationFrame(animate);

    if (isAccelerating || moveSpeed > 0) {
        if (isAccelerating && moveSpeed < maxMoveSpeed) {
            moveSpeed += 0.0001;
            if (moveSpeed >= maxMoveSpeed) {
                moveSpeed = maxMoveSpeed;
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

export { animate };
