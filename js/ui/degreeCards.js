function addTiltEffect() {
    const degreeItemBoxes = document.querySelectorAll('.degreeItemBox');
    let animationId = null;
    let currentBox = null;
    let mouseData = { x: 0, y: 0 };

    function throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;
        return function (...args) {
            const currentTime = Date.now();

            if (currentTime - lastExecTime > delay) {
                func.apply(this, args);
                lastExecTime = currentTime;
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                    lastExecTime = Date.now();
                }, delay - (currentTime - lastExecTime));
            }
        };
    }

    function updateTransform() {
        if (!currentBox) return;

        const rect = currentBox.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = (mouseData.x - centerX) / (rect.width / 2);
        const mouseY = (mouseData.y - centerY) / (rect.height / 2);

        const intensity = 15;
        const rotateX = mouseY * intensity;
        const rotateY = -mouseX * intensity;

        currentBox.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }

    const throttledMouseMove = throttle((e, box) => {
        mouseData.x = e.clientX;
        mouseData.y = e.clientY;
        currentBox = box;

        if (animationId) cancelAnimationFrame(animationId);

        animationId = requestAnimationFrame(updateTransform);
    }, 16); // ~60fps

    degreeItemBoxes.forEach(box => {
        const enterTransition = 'transform 0.1s ease-out, box-shadow 0.3s ease';
        const leaveTransition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease';

        box.addEventListener('mousemove', (e) => {
            throttledMouseMove(e, box);
        }, { passive: true });

        box.addEventListener('mouseleave', () => {
            currentBox = null;
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }

            box.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            box.style.transition = leaveTransition;
        }, { passive: true });

        box.addEventListener('mouseenter', () => {
            box.style.transition = enterTransition;
        }, { passive: true });
    });
}

document.addEventListener('DOMContentLoaded', addTiltEffect);


/*function addTiltEffect() {
    const degreeItemBoxes = document.querySelectorAll('.degreeItemBox');

    degreeItemBoxes.forEach(box => {
        box.addEventListener('mousemove', (e) => {
            const rect = box.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const mouseX = (e.clientX - centerX) / (rect.width / 2);
            const mouseY = (e.clientY - centerY) / (rect.height / 2);

            const intensity = 15;

            const rotateX = mouseY * intensity;
            const rotateY = -mouseX * intensity;

            box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });

        box.addEventListener('mouseenter', () => {
            box.style.transition = 'transform 0.1s ease-out, box-shadow 0.3s ease';
        });

        box.addEventListener('mouseleave', () => {
            box.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease';
        });
    });
}

document.addEventListener('DOMContentLoaded', addTiltEffect);*/