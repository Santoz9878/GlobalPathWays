// Mobile Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars', !isOpen);
        icon.classList.toggle('fa-times', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
    });
}
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.glass-card, .section-title').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Video background loading
const heroVideo = document.querySelector('.bg-video');
if (heroVideo) {
    const startVideo = () => {
        heroVideo.play().catch(() => {});
    };

    window.addEventListener('load', () => {
        setTimeout(startVideo, 200);
    });

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            startVideo();
        }
    });
}

// Apply Form WhatsApp Redirect
const appForm = document.getElementById('applicationForm');
if (appForm) {
    appForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('fullName').value;
        const phone = document.getElementById('phone').value;
        const country = document.getElementById('country').value;
        const job = document.getElementById('jobRole').value;
        let waMessage = `*NEW APPLICATION*%0AName: ${name}%0APhone: ${phone}%0ACountry: ${country}%0AJob: ${job}`;
        // Using the Kenyan main agency line
        window.open(`https://wa.me/254712345678?text=${waMessage}`, '_blank');
    });
}