function scrollWorkCarrousel(direction) {
    const carousel = document.getElementById('workCarrousel');
    const card = carousel.querySelector('.workCard');
    const scrollAmount = card.offsetWidth + parseFloat(getComputedStyle(carousel).gap || 0);
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

window.scrollWorkCarrousel = scrollWorkCarrousel;
