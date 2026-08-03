const projectData = {
    jarod57: {
        title: "Jarod'57",
        text: "Jarod'57 was the first <span class=\"highlightedWAIText\">3D game</span> I built using " +
            "<span class=\"highlightedWAIText\">Unity</span>. " +
            "It’s a <span class=\"highlightedWAIText\">third-person open-world adventure</span> set on a mysterious island " +
            "— think a mix between <span class=\"highlightedWAIText\">tropical</span> " +
            "and <span class=\"highlightedWAIText\">desert</span> vibes, somewhere between Mexico and nowhere. " +
            "<br><br>The game was never officially released — it was a super <span class=\"highlightedWAIText\">ambitious</span> " +
            "project, especially for a first. But I learned a ton from it, and it really " +
            "helped me get comfortable with Unity.<br><br>Jarod'57 " +
            "became my personal <span class=\"highlightedWAIText\">sandbox</span> for <span class=\"highlightedWAIText\">experimenting</span> " +
            "with all kinds of features: From <span class=\"highlightedWAIText\">vehicle systems</span> (cars, bikes) " +
            "to custom <span class=\"highlightedWAIText\">NPCs</span> with <span class=\"highlightedWAIText\">pathfinding</span> and " +
            "interactive roles — healers, mechanics, shopkeepers... I built a <span class=\"highlightedWAIText\">big island</span> named " +
            "\"<span class=\"highlightedWAIText\">Cala</span>\" with a full <span class=\"highlightedWAIText\">city</span>, " +
            "oil pipelines, boats, palm trees, pine forests with wind, grass, ocean, outposts, " +
            "buildings, lighthouses, birds, crabs, multiple weapons — the list goes on and on and on.<br><br>The project " +
            "had a <span class=\"highlightedWAIText\">unique atmosphere</span> and I loved working on it. " +
            "But after almost two years, I realized it " +
            "had grown a bit too big.<br><br>Some early systems were holding the game back, and refactoring " +
            "everything would’ve taken forever. So I made the <span class=\"highlightedWAIText\">tough call</span> " +
            "to pause it — and started a smaller, more focused game instead: <span class=\"highlightedWAIText\">TavernMan</span>." +
            "<br><br>I ended up reusing a lot of what I built in " +
            "<span class=\"highlightedWAIText\">Jarod'57</span>, and the new game — set " +
            "on a smaller <span class=\"highlightedWAIText\">island</span> — is way more doable.",
        /*imgs: [
            "./src/img/logoLosTortillas.png",
            "./src/img/logoJarod57.png",
            "./src/img/logoTavernMan1.png"
        ],*/
        github: 'https://github.com/Jarod-57',
    },
    tavernman: {
        title: "TavernMan",
        text: "TavernMan is a <span class=\"highlightedWAIText\">first-person 3D game</span> " +
            "made with <span class=\"highlightedWAIText\">Unity</span>.<br><br>" +
            "I started working on it right after putting <span class=\"highlightedWAIText\">Jarod'57</span> " +
            "on hold — the goal was clear: build something smaller, more <span class=\"highlightedWAIText\">focused</span>, " +
            "and most importantly, something I could actually <span class=\"highlightedWAIText\">finish</span>.<br><br>" +
            "The game takes place entirely at " +
            "<span class=\"highlightedWAIText\">night</span>, on a small <span class=\"highlightedWAIText\">tropical island</span>. " +
            "Most of the action happens inside a strange <span class=\"highlightedWAIText\">bar</span> — " +
            "part <span class=\"highlightedWAIText\">saloon</span>, part <span class=\"highlightedWAIText\">tiki tavern</span> — " +
            "where you’ve just been hired as the new bartender. " +
            "As the <span class=\"highlightedWAIText\">TavernMan</span>, your job is to run the place: Serve drinks, clean up, " +
            "manage the band, and deal with whatever problems (or weird customers) " +
            "show up throughout the night. You’ll meet <span class=\"highlightedWAIText\">unique characters</span> and slowly uncover " +
            "the strange secrets hidden on the <span class=\"highlightedWAIText\">island</span>.<br><br>" +
            "On a more serious note, <span class=\"highlightedWAIText\">TavernMan</span> is a " +
            "project where I’m combining everything I learned while building <span class=\"highlightedWAIText\">Jarod'57</span> — " +
            "from <span class=\"highlightedWAIText\">Unity mechanics</span> to <span class=\"highlightedWAIText\">game design</span> " +
            "and world-building. <br><br>My goal is to finish and <span class=\"highlightedWAIText\">release</span> " +
            "this game, and finally achieve a long-time dream: publishing a full " +
            "<span class=\"highlightedWAIText\">indie title</span> of my own.",
        github: 'https://github.com/Geapen1503/TavernMan_Scripts',
        url: 'https://tavernmandev.itch.io/tavernman',
    },
    blogai: {
        title: "BlogAI",
        text: "BlogAI is a <span class=\"highlightedWAIText\">Node.js REST API</span> I developed during my internship " +
            "at <span class=\"highlightedWAIText\">Ortros</span>.<br><br> At the time, the team was facing a recurring " +
            "SEO issue — many client websites lacked fresh content, which negatively impacted their search rankings. " +
            "The idea was to <span class=\"highlightedWAIText\">automate</span> blog content creation and publication.<br><br>" +
            "I first built a custom <span class=\"highlightedWAIText\">WordPress plugin</span>, where clients could write " +
            "a short introduction about their business, set a publishing schedule (powered by a " +
            "<span class=\"highlightedWAIText\">cron job</span>), and tweak a few options — like whether to include images " +
            "in the posts.<br><br>" +
            "Then I developed <span class=\"highlightedWAIText\">BlogAI</span>, the <span class=\"highlightedWAIText\">Node.js API</span> " +
            "behind the scenes. It receives the data from the <span class=\"highlightedWAIText\">plugin</span>, formats " +
            "a request to the <span class=\"highlightedWAIText\">OpenAI API</span> with dynamic parameters, and uses a prompt " +
            "+ title-generation system to create hundreds of unique articles — all based on that initial intro text." +
            "There’s a lot more going on under the hood, but to keep it short: this project was a deep dive into " +
            "<span class=\"highlightedWAIText\">automation</span>, API design, and <span class=\"highlightedWAIText\">prompt engineering</span>.<br><br>" +
            "It’s definitely one of the most rewarding things I’ve worked on, and I learned a lot from it.<br><br>" +
            "If you’re curious, you can check it out on my <span class=\"highlightedWAIText\">GitHub</span>!",
        github: 'https://github.com/Geapen1503/BlogAI_NodeJS',
    },
    "los-tortillas-hermanos": {
        title: "Los-Tortillas-Hermanos",
        text: "Los Tortillas Hermanos was one of the very first websites I built from scratch — back when I was still in " +
            "high school.<br><br>It started as a way to learn <span class=\"highlightedWAIText\">HTML</span> " +
            "and <span class=\"highlightedWAIText\">CSS</span>, back then, I was a huge Breaking Bad fan, " +
            "I thought it’d be fun to create a fictional restaurant website inspired by the show. " +
            "Once the first version was done, I got curious to explore further. So I rebuilt the whole thing from the " +
            "ground up, this time using a custom <span class=\"highlightedWAIText\">PHP MVC architecture</span>." +
            "<br><br>I set up the structure, then built a small <span class=\"highlightedWAIText\">e-commerce</span> feature " +
            "where you could add… tortillas to your cart (naturally).<br><br>This project means a lot to me — " +
            "it was my first real dive into coding, and it has a vibe that I still enjoy. " +
            "Open the site, and you'll feel like you're right in <span class=\"highlightedWAIText\">Albuquerque</span>, " +
            "New Mexico. It also taught me the basics of PHP, <span class=\"highlightedWAIText\">databases</span>, " +
            "and <span class=\"highlightedWAIText\">backend</span> logic — and looking back, it definitely helped " +
            "spark my decision to pursue computer science more seriously.",
        github: 'https://github.com/Geapen1503/Los-Tortillas-Hermanos_v1.6',
    },
    alkubot: {
        title: "Alkubot",
        text: "Alkubot is one of the very first \"<span class=\"highlightedWAIText\">apps</span>\" I ever built. " +
            "I started working on it right after finishing <span class=\"highlightedWAIText\">Los Tortillas Hermanos</span>, " +
            "still in high school, right around the time we began " +
            "learning <span class=\"highlightedWAIText\">Python</span> in class.<br><br>I wanted " +
            "something simple and useful — a <span class=\"highlightedWAIText\">Discord bot</span> " +
            "to help manage <span class=\"highlightedWAIText\">servers</span>, including the one we had " +
            "for our classroom. So I started " +
            "adding features as they came to mind: basic <span class=\"highlightedWAIText\">role distribution</span>, " +
            "<span class=\"highlightedWAIText\">auto-moderation</span> " +
            "with a <span class=\"highlightedWAIText\">ban word</span> system, a basic <span class=\"highlightedWAIText\">translation</span> " +
            "feature, some <span class=\"highlightedWAIText\">random quotes</span>, <span class=\"highlightedWAIText\">weather " +
            "info</span>, even a <span class=\"highlightedWAIText\">level system</span>. There was also a little welcome " +
            "message when people " +
            "joined or left, and I tried my hand at polls and <span class=\"highlightedWAIText\">surveys</span> too." +
            "<br><br>Now, let’s be honest: this <span class=\"highlightedWAIText\">wasn’t</span> " +
            "exactly <span class=\"highlightedWAIText\">clean code</span>. It was " +
            "<span class=\"highlightedWAIText\">messy</span>, <span class=\"highlightedWAIText\">full of shortcuts</span>, " +
            "and written with the enthusiasm of someone who had just discovered <span class=\"highlightedWAIText\">if statements</span>. " +
            "But that’s exactly why I love it — it represents my <span class=\"highlightedWAIText\">first steps</span> into building " +
            "<span class=\"highlightedWAIText\">non-web tools</span>, and it showed me how far you can go just by being " +
            "<span class=\"highlightedWAIText\">curious</span> and <span class=\"highlightedWAIText\">motivated</span>.<br><br>" +
            "It’s not a polished project by any means, but it taught me a lot — and it still makes me smile when I look back at it."
    },
    oldPortfolio: {
        title: "Old Space Portfolio",
        text: "This is my <span class=\"highlightedWAIText\">old portfolio</span>, the first one I " +
            "ever published — built around a <span class=\"highlightedWAIText\">space theme</span> that " +
            "I was really into at the time.<br><br>The idea was to create something " +
            "simple yet immersive. " +
            "<span class=\"highlightedWAIText\">Stars</span> would appear randomly across a transparent " +
            "<span class=\"highlightedWAIText\">canvas</span>, and there was this sphere that flipped between " +
            "my face and the planet Mercury with the moon rotating around it. It had its charm, and " +
            "for some time, I really loved the " +
            "atmosphere it gave off.<br><br>It <span class=\"highlightedWAIText\">evolved</span> little by little " +
            "over the years, but eventually, it just didn’t feel like me anymore. As I gained experience, worked on more serious " +
            "projects, and started to figure out the kind of developer I wanted to be, this " +
            "version stopped being representative of where I was headed.<br><br>That said, it still " +
            "means a lot to me. It got me through my <span class=\"highlightedWAIText\">Bac Pro SN RISC</span> and " +
            "<span class=\"highlightedWAIText\">BTS SIO SLAM</span> oral " +
            "exams, and it marked the moment where I began treating development as more than " +
            "just a hobby.<br><br>After my last exam, I knew it was time to move on — so I " +
            "\"<span class=\"highlightedWAIText\">archived</span>\" " +
            "this version, and started building the one you're browsing right now, powered by " +
            "<span class=\"highlightedWAIText\">Three.js</span>. This old space-themed portfolio now feels more like a time " +
            "capsule — a snapshot of where my journey began.",
        github: 'https://github.com/Geapen1503/PortfolioSIO/',
    },
    gsb: {
        title: "GSB",
        text: "GSB stands for <span class=\"highlightedWAIText\">Galaxy Swiss Bourdin</span> " +
            "— it’s a <span class=\"highlightedWAIText\">PHP-based web app</span> designed to manage and " +
            "track payments made to medical representatives.<br><br>The app follows an " +
            "<span class=\"highlightedWAIText\">MVC</span> architecture " +
            "and was developed during my second year of the <span class=\"highlightedWAIText\">BTS SIO SLAM</span> " +
            "program, as a team project. We were given an existing codebase where the " +
            "<span class=\"highlightedWAIText\">medical rep</span> side of the app was already functional " +
            "— they could log in and declare their payments.<br><br>Our mission was to build " +
            "the <span class=\"highlightedWAIText\">accountant</span> " +
            "interface: a new section where accountants could review, validate (or reject) those payment " +
            "declarations, and generate official PDF receipts.<br><br>This project was a great " +
            "opportunity to work on an <span class=\"highlightedWAIText\">existing codebase</span> " +
            "— which meant adapting to someone else’s " +
            "architecture and being careful not to break what was already there. " +
            "It also helped me solidify my skills in <span class=\"highlightedWAIText\">PHP</span> " +
            "and <span class=\"highlightedWAIText\">MySQL</span>, and gave me hands-on experience " +
            "with structured backend logic and real-world business flows.",
        github: 'https://github.com/Geapen1503/GSB_SIO',
    },
    cgb: {
        title: "CGB",
        text: "CGB is a <span class=\"highlightedWAIText\">RESTful banking API</span> built with " +
            "<span class=\"highlightedWAIText\">Spring Boot</span>, developed during my second year of BTS SIO SLAM. " +
            "It was designed as a kind of \"<span class=\"highlightedWAIText\">successor</span>\" to the " +
            "<span class=\"highlightedWAIText\">GSB</span> project — where GSB handled payment " +
            "declarations from <span class=\"highlightedWAIText\">medical representatives</span>, CGB handled the " +
            "actual payment processing.<br><br>We started by building <span class=\"highlightedWAIText\">endpoints</span> " +
            "to generate <span class=\"highlightedWAIText\">IBANs</span> and validate them according to " +
            "<span class=\"highlightedWAIText\">banking standards</span>. We also " +
            "implemented endpoints to list all accounts, using <span class=\"highlightedWAIText\">design patterns</span> " +
            "like <span class=\"highlightedWAIText\">DTOs</span> to keep the " +
            "architecture clean and scalable.<br><br>The two core features of the <span class=\"highlightedWAIText\">API</span> " +
            "were:<br><br>- <span class=\"highlightedWAIText\">Transfer</span>: an endpoint that allowed " +
            "us to transfer funds from one IBAN to another. Each transaction " +
            "was logged into a file for tracking purposes.<br><br>- <span class=\"highlightedWAIText\">TransferLot</span>: " +
            "since GSB needed to process " +
            "many payments in one go (paying multiple medical reps at once), we built a batch " +
            "endpoint that could send money from a single account to multiple recipients — each with " +
            "their own IBAN and amount — in one <span class=\"highlightedWAIText\">atomic transaction</span>." +
            "<br><br>This project was my first dive " +
            "into <span class=\"highlightedWAIText\">Spring Boot</span> and <span class=\"highlightedWAIText\">REST API design</span>. " +
            "It was especially satisfying to build it within the " +
            "same context as GSB, since it gave me a clearer view of how different systems can work " +
            "together in a broader software ecosystem.",
        github: 'https://github.com/Geapen1503/CreditGeneralGSB',
    },
};

const detailBox = document.getElementById('detailBox');
const bottomBox = document.querySelector('.projectBottomBox');
const cards = document.querySelectorAll('.projectCard');
let currentId = null;

function buildDetailHtml(data, id) {
    let html = `
    <h2 class="detail-title">${data.title}</h2>
    <p class="detail-text">${data.text}</p>
    <div class="detail-action-buttons">
  `;

    if (data.imgs) {
        html += `<a class="detail-open-images" data-action="open-images">
               <img src="/src/img/svg/plus-icon-orange.svg">
             </a>`;
    }

    if (data.github) {
        html += `<a href="${data.github}" target="_blank" class="detail-github-link">
               <img src="./src/img/svg/github-icon-orange.svg">
             </a>`;
    }

    if (data.url) {
        html += `<a href="${data.url}" target="_blank" class="detail-url-link">
               <img src="./src/img/svg/internet-globe.svg">
             </a>`;
    }

    html += `
    </div>
    <span class="detail-close">&#10095;</span>
  `;

    return html;
}

function attachDetailHandlers(id) {
    currentId = id;
    detailBox.querySelector('.detail-close')
        .addEventListener('click', closePopupAndDetail);

    const openBtn = detailBox.querySelector('[data-action="open-images"]');

    if (openBtn) openBtn.addEventListener('click', () => openImagePopup(id));
}

function closePopupAndDetail() {
    bottomBox.classList.remove('open');
    currentId = null;
}

cards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.dataset.id;
        const data = projectData[id]; if (!data) return;

        if (bottomBox.classList.contains('open') && currentId === id) { closePopupAndDetail(); return; }
        if (bottomBox.classList.contains('open') && currentId !== id) {
            bottomBox.classList.remove('open');
            detailBox.addEventListener('transitionend', function onEnd(e) {
                if (e.propertyName === 'height') {
                    detailBox.removeEventListener('transitionend', onEnd);
                    detailBox.innerHTML = buildDetailHtml(data, id);
                    attachDetailHandlers(id);
                    bottomBox.classList.add('open');
                }
            });
            return;
        }

        detailBox.innerHTML = buildDetailHtml(data, id);
        attachDetailHandlers(id);
        bottomBox.classList.add('open');
    });
});

const overlay = document.getElementById('imagePopupOverlay');
const popupCarousel = document.getElementById('popupCarousel');
let currentSlideIndex = 0;

function openImagePopup(id) {
    const data = projectData[id];
    if (!data?.imgs) return;

    popupCarousel.innerHTML = '';
    data.imgs.forEach((src, idx) => {
        const slide = document.createElement('div');
        slide.className = 'popup-slide';
        slide.innerHTML = `<img src="${src}" alt="${data.title} screenshot ${idx+1}">`;
        popupCarousel.appendChild(slide);
    });
    currentSlideIndex = 0;
    showSlide(0);

    document.body.style.overflow = 'hidden';

    overlay.classList.add('visible');
}

function showSlide(n) {
    const slides = popupCarousel.querySelectorAll('.popup-slide');

    if (!slides.length) return;

    currentSlideIndex = (n + slides.length) % slides.length;
    slides.forEach(sl => sl.classList.remove('active'));
    slides[currentSlideIndex].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentSlideIndex + n);
}

function closeImagePopup() {
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
}

window.openImagePopup = openImagePopup;
window.changeSlide = changeSlide;

overlay.querySelector('.popup-close').addEventListener('click', closeImagePopup);
overlay.addEventListener('click', e => { if (e.target === overlay) closeImagePopup(); });