function addTiltEffect() {
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

document.addEventListener('DOMContentLoaded', addTiltEffect);

