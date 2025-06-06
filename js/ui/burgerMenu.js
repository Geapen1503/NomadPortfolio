const burger = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

window.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('show');
    }
});
