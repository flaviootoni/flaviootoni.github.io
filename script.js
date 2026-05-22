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

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    updateWhatsAppLink();

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

// ===== GSAP Cinematic System =====
function hidePreloaderAndShowHero() {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.style.display = 'none';
    document.body.classList.remove('preloader-fallback');
    document.body.style.overflow = '';
    document.querySelectorAll(
        '.hero-text h1, .hero-eyebrow, .hero-description, .hero-buttons, .hero-stats, .hero-photo'
    ).forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.filter = 'none';
    });
}

if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    hidePreloaderAndShowHero();
} else {
    gsap.registerPlugin(ScrollTrigger);

// Smooth scrolling via Lenis (opcional)
let lenis;
try {
    if (typeof Lenis !== 'undefined') {
        lenis = new Lenis({ duration: 1.2 });
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        if (typeof gsap.ticker.lagSmoothing === 'function') {
            gsap.ticker.lagSmoothing(0);
        }
        lenis.on('scroll', ScrollTrigger.update);
    }
} catch (err) {
    console.warn('Lenis não inicializado:', err);
}

// Redireciona cliques em anchors pelo Lenis (evita perda de scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        if (lenis) {
            e.preventDefault();
            lenis.scrollTo(target, {
                offset: -80,
                onComplete: () => ScrollTrigger.refresh()
            });
        }
    });
});

// Estado inicial da hero (invisível até o preloader terminar)
gsap.set('.hero-photo', { opacity: 0, y: 40 });
gsap.set('.hero-text h1', { opacity: 0, y: 50, filter: 'blur(8px)' });
gsap.set(['.hero-eyebrow', '.hero-description', '.hero-buttons', '.hero-stats'], { opacity: 0, y: 30 });

// Preloader
function runPreloader() {
    document.body.style.overflow = 'hidden';
    const tl = gsap.timeline({
        onComplete: () => {
            hidePreloaderAndShowHero();
            animateHero();
        }
    });
    tl.to('.preloader-fill', { scaleX: 1, duration: 1.2, ease: 'power2.inOut' })
      .to('#preloader', { opacity: 0, duration: 0.5, ease: 'power2.in' }, '+=0.15');
}

// Entrada cinematográfica da hero
function animateHero() {
    const tl = gsap.timeline();
    tl.to('.hero-text h1',    { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0, ease: 'power3.out' })
      .to('.hero-eyebrow',    { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.8')
      .to('.hero-description',{ opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.5')
      .to('.hero-buttons',    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .to('.hero-stats',      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .to('.hero-photo',      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=1.4');
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
    scrollTrigger: { trigger: '.education-grid', start: 'top 92%', once: true },
    opacity: 0, y: 40, duration: 0.7, ease: 'power3.out'
});

// Contact cards are critical, so we removed GSAP ScrollTrigger for them
// to ensure they are always visible regardless of screen size and scroll bounds.

// Consult benefits cards
gsap.from('.consult-benefit-card', {
    scrollTrigger: { trigger: '.consult-benefits-grid', start: 'top 92%', once: true },
    opacity: 0, y: 40, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    onComplete: () => gsap.set('.consult-benefit-card', { clearProps: 'opacity,y,transform' })
});

// Consult modules cards
gsap.from('.consult-module-card', {
    scrollTrigger: { trigger: '.consult-modules-grid', start: 'top 92%', once: true },
    opacity: 0, y: 40, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    onComplete: () => gsap.set('.consult-module-card', { clearProps: 'opacity,y,transform' })
});

// Consult card
gsap.from('.consult-card', {
    scrollTrigger: { trigger: '.consult-card', start: 'top 92%', once: true },
    opacity: 0, y: 50, duration: 0.9, ease: 'power3.out'
});
}

// Scroll reveal (webinar pattern)
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in');
    });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Consult form
const WHATSAPP_NUMBER = '5541988628720';
const consultForm = document.getElementById('consult-form');
const consultStatus = document.getElementById('consult-form-status');
const whatsappBtn = document.getElementById('consult-whatsapp');

function getConsultTypeLabel(value) {
    const opt = document.querySelector(`#consult-type option[value="${value}"]`);
    return opt ? opt.textContent.trim() : value;
}

function updateWhatsAppLink() {
    if (!whatsappBtn) return;
    const msg = translations[currentLang]?.['consult.wa.default'] || 'Olá Flávio, gostaria de agendar uma consultoria.';
    whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function showConsultStatus(type, message) {
    if (!consultStatus) return;
    consultStatus.className = `consult-form-status ${type}`;
    consultStatus.textContent = message;
}

function submitViaMailto(data) {
    const subject = encodeURIComponent(`Consultoria — ${data.name}`);
    const body = encodeURIComponent(
        `Nome: ${data.name}\nE-mail: ${data.email}\nEmpresa: ${data.company || '—'}\nTipo: ${data.typeLabel}\n\n${data.message}`
    );
    window.location.href = `mailto:flaviootoni@gmail.com?subject=${subject}&body=${body}`;
    return true;
}

if (consultForm) {
    consultForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const endpoint = document.getElementById('formspree-endpoint')?.value?.trim();
        const name = document.getElementById('consult-name').value.trim();
        const email = document.getElementById('consult-email').value.trim();
        const company = document.getElementById('consult-company').value.trim();
        const type = document.getElementById('consult-type').value;
        const message = document.getElementById('consult-message').value.trim();
        const typeLabel = getConsultTypeLabel(type);

        if (!name || !email || !type || !message) {
            consultForm.reportValidity();
            return;
        }

        const payload = { name, email, company, type: typeLabel, message };
        const submitBtn = consultForm.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;
        showConsultStatus('', '');

        try {
            if (endpoint) {
                const res = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!res.ok) throw new Error('Formspree failed');
            } else {
                submitViaMailto({ ...payload, typeLabel });
            }
            showConsultStatus('success', translations[currentLang]['consult.success']);
            consultForm.reset();
        } catch {
            showConsultStatus('error', translations[currentLang]['consult.error']);
        } finally {
            if (submitBtn) submitBtn.disabled = false;
        }
    });
}

if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
        const name = document.getElementById('consult-name')?.value.trim();
        const type = document.getElementById('consult-type')?.value;
        const typeLabel = type ? getConsultTypeLabel(type) : '';
        const parts = [translations[currentLang]?.['consult.wa.default'] || 'Olá Flávio, gostaria de agendar uma consultoria.'];
        if (name) parts.push(`Nome: ${name}`);
        if (typeLabel) parts.push(`Interesse: ${typeLabel}`);
        whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(parts.join('\n'))}`;
    });
}

// Idioma + animações após dependências prontas
setLanguage(currentLang);
updateWhatsAppLink();

if (typeof gsap !== 'undefined') {
    runPreloader();
} else {
    hidePreloaderAndShowHero();
}

// Fallback se o preloader travar
setTimeout(hidePreloaderAndShowHero, 5000);
