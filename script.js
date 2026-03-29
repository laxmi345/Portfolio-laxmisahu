// Navbar background change on scroll
window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#050816';
    } else {
        nav.style.background = 'rgba(10, 14, 39, 0.95)';
    }
};

// Form submission check (optional)
const form = document.querySelector('form');
if(form) {
    form.onsubmit = function() {
        // You can add a 'Thank You' alert here if needed
        console.log("Form is being sent via Formspree...");
    };
}