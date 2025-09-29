import { camera } from './scene.js';
import * as THREE from 'three';

export function initCameraControls(wrapper, canvas) {
    const baseRotation = { x: camera.rotation.x, y: camera.rotation.y };

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotation = { x: baseRotation.x, y: baseRotation.y };


    const dragSensitivity = 0.002;
    const maxRotation = 0.15;

    function applyDelta(deltaX, deltaY) {
        targetRotation.y = THREE.MathUtils.clamp(
            targetRotation.y - deltaX * dragSensitivity,
            baseRotation.y - maxRotation,
            baseRotation.y + maxRotation
        );
        targetRotation.x = THREE.MathUtils.clamp(
            targetRotation.x - deltaY * dragSensitivity,
            baseRotation.x - maxRotation,
            baseRotation.x + maxRotation
        );
    }

    wrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    wrapper.addEventListener('mouseup', () => { isDragging = false; });
    wrapper.addEventListener('mouseleave', () => { isDragging = false; });

    wrapper.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        applyDelta(
            e.clientX - previousMousePosition.x,
            e.clientY - previousMousePosition.y
        );
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    wrapper.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            isDragging = true;
            previousMousePosition = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        }
    });

    wrapper.addEventListener('touchend', () => { isDragging = false; });

    wrapper.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        applyDelta(
            e.touches[0].clientX - previousMousePosition.x,
            e.touches[0].clientY - previousMousePosition.y
        );
        previousMousePosition = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
    });

    function updateCameraRotation() {
        if (!isDragging) {
            targetRotation.x += (baseRotation.x - targetRotation.x) * 0.05;
            targetRotation.y += (baseRotation.y - targetRotation.y) * 0.05;
        }

        camera.rotation.x += (targetRotation.x - camera.rotation.x) * 0.1;
        camera.rotation.y += (targetRotation.y - camera.rotation.y) * 0.1;

        requestAnimationFrame(updateCameraRotation);
    }
    updateCameraRotation();
}