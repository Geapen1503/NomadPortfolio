import { scene, camera, renderer, onWindowResize } from './three/scene.js';
import { initModels, loadElephant } from './three/models.js';
import { updateSun } from './three/sky.js';
import { animate } from './three/animate.js';
import './three/water.js';
import './ui/navbar.js';
import './ui/burgerMenu.js';
import './ui/scrollLogic.js';
import './ui/carousel.js';

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
