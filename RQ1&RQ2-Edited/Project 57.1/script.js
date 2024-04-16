// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Your form handling logic here
    // For example, get form data and send it to a server using fetch or XMLHttpRequest
});

// Toggling classes (e.g., for a mobile menu)
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
});
