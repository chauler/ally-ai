document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event){
            event.preventDefault();
            alert('Form submitted! We will get back to you soon.');
        });
    }
});
