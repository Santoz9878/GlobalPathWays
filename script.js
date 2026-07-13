// Mobile Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
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
        // Using a dummy number for the main agency line
        window.open(`https://wa.me/15550100000?text=${waMessage}`, '_blank');
    });
}