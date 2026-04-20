// ─── Shared JS for all pages ───────────────────────────

document.addEventListener('DOMContentLoaded', () => {

    // Header scroll
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    // Mobile nav
    const toggle = document.getElementById('nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileClose = document.getElementById('mobile-nav-close');

    toggle?.addEventListener('click', () => mobileNav.classList.add('open'));
    mobileClose?.addEventListener('click', () => mobileNav.classList.remove('open'));
    mobileNav?.addEventListener('click', (e) => {
        if (e.target === mobileNav) mobileNav.classList.remove('open');
    });

    // Scroll reveal
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

    // Active nav link
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a, .mobile-nav a').forEach(a => {
        if (a.getAttribute('href') === currentPage) a.classList.add('active');
    });

    // Lucide icons
    if (window.lucide) lucide.createIcons();
});
