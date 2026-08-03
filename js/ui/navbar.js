document.addEventListener('DOMContentLoaded', () => {
    const canvasBox = document.getElementById('canvasWrapperBox');
    const navbarBg = document.querySelector('.navbarBg');
    const internalMainBox = document.getElementById("InternalMainBox");
    let firstScrollDone = false;
    let scrollInProgress = false;

    const navbarInitialTop = internalMainBox.getBoundingClientRect().top + window.pageYOffset;

    function updateNavbarShadow() {
        if (window.pageYOffset >= navbarInitialTop) navbarBg.classList.add("headerBoxShadow");
        else navbarBg.classList.remove("headerBoxShadow");
    }

    updateNavbarShadow();

    window.addEventListener('scroll', () => {
        updateNavbarShadow();

        if (window.pageYOffset === 0 && !scrollInProgress) firstScrollDone = false;
    });
});
