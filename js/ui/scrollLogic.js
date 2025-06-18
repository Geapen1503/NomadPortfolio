document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbarBox");
    const burger = document.querySelector(".burgerMenu");
    const buttonBox = document.querySelector(".buttonBox");
    const degreeBox = document.querySelector(".degreeBox");

    function isOverOrange(element) {
        const elemRect = element.getBoundingClientRect();
        const projectRect = degreeBox.getBoundingClientRect();

        return (
            elemRect.bottom > projectRect.top &&
            elemRect.top < projectRect.bottom
        );
    }

    function updateStyles() {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            if (
                isOverOrange(burger) ||
                (buttonBox.classList.contains("show") && isOverOrange(buttonBox))
            )
                navbar.classList.add("on-orange");
            else navbar.classList.remove("on-orange");
        } else {
            if (isOverOrange(navbar)) navbar.classList.add("on-orange");
            else navbar.classList.remove("on-orange");
        }
    }

    window.addEventListener("scroll", updateStyles);
    window.addEventListener("resize", updateStyles);
    updateStyles();
});
