function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const card = carousel.querySelector('.projectCard');
    const scrollAmount = card.offsetWidth + parseFloat(getComputedStyle(carousel).gap || 0);
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

window.scrollCarousel = scrollCarousel;
