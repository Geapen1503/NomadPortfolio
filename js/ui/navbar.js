document.addEventListener('DOMContentLoaded', () => {
    const canvasBox = document.getElementById('canvasWrapperBox');
    const navbar = document.getElementById('navbarBox');
    const internalMainBox = document.getElementById("InternalMainBox");
    let firstScrollDone = false;
    let scrollInProgress = false;

    const navbarInitialTop = internalMainBox.getBoundingClientRect().top + window.pageYOffset;

    function updateNavbarShadow() {
        if (window.pageYOffset >= navbarInitialTop) navbar.classList.add("headerBoxShadow");
        else navbar.classList.remove("headerBoxShadow");
    }

    updateNavbarShadow();

    window.addEventListener('scroll', () => {
        updateNavbarShadow();

        if (window.pageYOffset === 0 && !scrollInProgress) firstScrollDone = false;

        if (window.pageYOffset >= navbarInitialTop) navbar.classList.add("headerBoxShadow");
        else navbar.classList.remove("headerBoxShadow");
    });
});
