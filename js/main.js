// ── Year ──────────────────────────────────────────
document.getElementById('current-year').textContent = new Date().getFullYear();

// ── Theme Toggle ──────────────────────────────────
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const icon = themeToggle.querySelector('i');
const saved = localStorage.getItem('portfolio-theme') || 'dark';
html.setAttribute('data-theme', saved);
icon.className = saved === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
themeToggle.addEventListener('click', () => {
    const curr = html.getAttribute('data-theme');
    const next = curr === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    icon.className = next === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
});

// ── Mobile Nav ────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// ── Active Nav on Scroll ──────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector('.nav-link[href="#' + entry.target.id + '"]');
            if (active) active.classList.add('active');
        }
    });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

// ── Header shadow on scroll ───────────────────────
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 20 ? '0 4px 30px rgba(0,0,0,0.35)' : 'none';
});

// ── Back to Top ───────────────────────────────────
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Contact Form ──────────────────────────────────
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.textContent = 'Message sent! I will get back to you soon.';
    status.style.color = '#10b981';
    this.reset();
    setTimeout(() => { status.textContent = ''; }, 5000);
});
