const projectData = {
    jarod57: {
        title: "Jarod'57",
        text: "Sandbox 3D Game développé en C# avec Unity. Premier projet 3D pour expérimenter mécaniques de gameplay, IA basique, etc.",
        img: "jarod57-detail.jpg"
    },
    tavernman: {
        title: "TavernMan",
        text: "Simulation 3D d’une taverne, gestion des ressources, IA des PNJ, économie interne. En cours de développement.",
        img: "tavernman-detail.png"
    },
    blogai: {
        title: "BlogAI",
        text: "API Node.js génère automatiquement des articles de blog via GPT, avec un plugin WordPress pour intégration directe."
    },
    "los-tortillas-hermanos": {
        title: "Los-Tortillas-Hermanos",
        text: "Site e-commerce en PHP MVC, panier, gestion utilisateurs, paiement PayPal sandbox.",
        img: "los-tortillas-detail.jpg"
    },
    alkubot: {
        title: "Alkubot",
        text: "Bot Discord en Python utilisant discord.py, commandes modération, musique et mini-jeux.",
        img: "alkubot-detail.png"
    }
};

const detailBox = document.getElementById('detailBox');
const bottomBox = document.querySelector('.projectBottomBox');
const cards     = document.querySelectorAll('.projectCard');

let currentId = null;

function buildDetailHtml(data) {
    let html = `
    <h2 class="detail-title">${data.title}</h2>
    <p class="detail-text">${data.text}</p>
  `;

    if (data.img) html += `<img class="detail-image" src="${data.img}" alt="${data.title}">`;

    html += `<span class="detail-close">&#10095;</span>`;
    return html;
}

function attachCloseHandler() {
    const btn = detailBox.querySelector('.detail-close');
    btn.addEventListener('click', () => {
        bottomBox.classList.remove('open');
        currentId = null;
    });
}

cards.forEach(card => {
    card.addEventListener('click', () => {
        const id   = card.dataset.id;
        const data = projectData[id];
        if (!data) return;

        if (bottomBox.classList.contains('open') && currentId === id) {
            bottomBox.classList.remove('open');
            currentId = null;
            return;
        }

        if (bottomBox.classList.contains('open') && currentId !== id) {
            bottomBox.classList.remove('open');

            const onEnd = e => {
                if (e.propertyName === 'height') {
                    detailBox.removeEventListener('transitionend', onEnd);
                    detailBox.innerHTML = buildDetailHtml(data);

                    attachCloseHandler();

                    bottomBox.classList.add('open');
                    currentId = id;
                }
            };
            detailBox.addEventListener('transitionend', onEnd);
            return;
        }

        currentId = id;
        detailBox.innerHTML = buildDetailHtml(data);
        attachCloseHandler();
        bottomBox.classList.add('open');
    });
});