const container = document.querySelector('.internalWorkBox');
const cards = Array.from(container.querySelectorAll('.workCard'));

function applyDynamicPadding() {
    if (!cards.length) return;

    const cardWidth = cards[0].offsetWidth;
    const containerWidth = container.offsetWidth;
    const sidePadding = (containerWidth - cardWidth) / 2;

    container.style.paddingLeft = `${sidePadding}px`;
    container.style.paddingRight = `${sidePadding}px`;
}

function centerCard(index) {
    const card = cards[index];
    if (!card) return;

    cards.forEach((c, i) => c.classList.toggle('active', i === index));

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    const offset = cardRect.left - containerRect.left;
    const scroll = offset - (container.clientWidth / 2 - card.offsetWidth / 2);

    container.scrollTo({
        left: container.scrollLeft + scroll,
        behavior: 'smooth'
    });
}

window.addEventListener('load', () => {
    applyDynamicPadding();
    centerCard(0);
});
window.addEventListener('resize', applyDynamicPadding);

cards.forEach((card, index) => {
    card.addEventListener('click', () => centerCard(index));
});
