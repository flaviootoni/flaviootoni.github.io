// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) {
            if (scrollPos >= top && scrollPos < top + height) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});

// ===== i18n Language Switcher =====
let currentLang = localStorage.getItem('lang') || 'pt';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update innerHTML (for elements with icons/bold)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update curriculo button href based on language
    const btnCurriculo = document.getElementById('btn-curriculo');
    if (btnCurriculo) {
        btnCurriculo.href = lang === 'en' ? 'curriculo-en.html' : 'curriculo.html';
    }
}

// Language button handlers
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
    });
});

// Apply saved language on load
setLanguage(currentLang);

// ===== GSAP Cinematic System =====
gsap.registerPlugin(ScrollTrigger);

// Smooth scrolling via Lenis
const lenis = new Lenis({ duration: 1.2 });
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
lenis.on('scroll', ScrollTrigger.update);

// Redireciona cliques em anchors pelo Lenis (evita perda de scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            lenis.scrollTo(target, {
                offset: -80,
                onComplete: () => ScrollTrigger.refresh()
            });
        }
    });
});

// Estado inicial da hero (invisível até o preloader terminar)
gsap.set('.hero-number-bg', { opacity: 0 });
gsap.set('.hero-label', { opacity: 0 });
gsap.set('.hero-rule', { scaleX: 0, transformOrigin: 'left' });
gsap.set('.hero-photo', { opacity: 0, y: 40 });
gsap.set('.hero-text h1', { opacity: 0, y: 50, filter: 'blur(8px)' });
gsap.set(['.hero-subtitle', '.hero-description', '.hero-buttons', '.hero-stats'], { opacity: 0, y: 30 });

// Preloader
function runPreloader() {
    document.body.style.overflow = 'hidden';
    const tl = gsap.timeline({
        onComplete: () => {
            document.getElementById('preloader').style.display = 'none';
            document.body.style.overflow = '';
            animateHero();
        }
    });
    tl.to('.preloader-fill', { scaleX: 1, duration: 1.2, ease: 'power2.inOut' })
      .to('#preloader', { opacity: 0, duration: 0.5, ease: 'power2.in' }, '+=0.15');
}

// Entrada cinematográfica da hero
function animateHero() {
    const tl = gsap.timeline();
    tl.to('.hero-number-bg',  { opacity: 1, duration: 2.0, ease: 'power2.out' })
      .to('.hero-label',      { opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=1.6')
      .to('.hero-text h1',    { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0, ease: 'power3.out' }, '-=1.0')
      .to('.hero-rule',       { scaleX: 1, duration: 0.6, ease: 'power3.inOut' }, '-=0.4')
      .to('.hero-subtitle',   { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')
      .to('.hero-description',{ opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .to('.hero-buttons',    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .to('.hero-stats',      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .to('.hero-photo',      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=1.8');
}

// Parallax sutil na hero ao scrollar
gsap.to('.hero-content', {
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.5 },
    y: 80, ease: 'none'
});

// Section titles
gsap.utils.toArray('.section-title').forEach(el => {
    gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out'
    });
});

// Timeline — alternando da esquerda e direita
gsap.utils.toArray('.timeline-item').forEach((el, i) => {
    gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        opacity: 0, x: i % 2 === 0 ? -50 : 50, duration: 0.8, ease: 'power3.out'
    });
});

// Skill cards — stagger em cascata
gsap.from('.skill-card', {
    scrollTrigger: { trigger: '.skills-grid', start: 'top 82%', once: true },
    opacity: 0, y: 60, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    onComplete: () => gsap.set('.skill-card', { clearProps: 'opacity,y,transform' })
});

// Highlights da seção Sobre
gsap.from('.highlight-item', {
    scrollTrigger: { trigger: '.about-highlights', start: 'top 85%', once: true },
    opacity: 0, y: 30, duration: 0.6, stagger: 0.1, ease: 'power3.out'
});

// Bloco de IA na seção Sobre
gsap.from('.about-ai', {
    scrollTrigger: { trigger: '.about-ai', start: 'top 85%', once: true },
    opacity: 0, y: 30, duration: 0.8, ease: 'power3.out'
});

// Education card
gsap.from('.education-card', {
    scrollTrigger: { trigger: '.education-grid', start: 'top 85%', once: true },
    opacity: 0, y: 40, duration: 0.7, ease: 'power3.out'
});

// Contact cards
gsap.from('.contact-card', {
    scrollTrigger: { trigger: '.contact-grid', start: 'top 85%', once: true },
    opacity: 0, y: 40, duration: 0.6, stagger: 0.1, ease: 'power3.out'
});

runPreloader();
