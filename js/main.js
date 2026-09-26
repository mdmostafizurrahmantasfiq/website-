// ── Year ──────────────────────────────────────────
const yearElem = document.getElementById('current-year');
if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
}

// ── Theme Toggle (Default: Light) ─────────────────
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
html.setAttribute('data-theme', savedTheme);

if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
        icon.className = savedTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', nextTheme);
        localStorage.setItem('portfolio-theme', nextTheme);
        if (icon) {
            icon.className = nextTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
    });
}

// ── Mobile Navigation ─────────────────────────────
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
        });
    });
}

// ── Active Nav on Scroll ──────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { threshold: 0.35 });

    sections.forEach(s => observer.observe(s));
}

// ── Header Shadow on Scroll ───────────────────────
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ── Back to Top Button ────────────────────────────
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ── Contact Form Handler ──────────────────────────
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const status = document.getElementById('form-status');
        if (status) {
            status.textContent = 'Thank you! Your message has been sent successfully.';
            status.style.color = '#059669';
        }
        this.reset();
        setTimeout(() => {
            if (status) status.textContent = '';
        }, 5000);
    });
}
