// scripts.js

// Simple form validation
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        }
    });
}
