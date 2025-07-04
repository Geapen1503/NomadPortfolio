import { scene, camera, renderer, onWindowResize } from './three/scene.js';
import { initModels, loadElephant } from './three/models.js';
import { updateSun } from './three/sky.js';
import { animate } from './three/animate.js';
import './three/water.js';
import './three/globe.js';
import '../js/globe.gl.min.js';
import './ui/navbar.js';
import './ui/burgerMenu.js';
//import './ui/scrollLogic.js';
import './ui/projectCarousel.js';
import './ui/projectsUnfold.js';
import './ui/degreeCards.js';
import './ui/workCarrousel.js';
import './ui/arrowUp.js';


initModels().then(() => {
    loadElephant();
    animate();

    const canvasWrapper = document.getElementById('canvasWrapperBox');
    let animationRunning = true;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            animationRunning = entry.isIntersecting;
        });
    }, {
        root: null,
        threshold: 0.1
    });

    if (canvasWrapper) observer.observe(canvasWrapper);

    window.__elephantSceneVisible = () => animationRunning;

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
