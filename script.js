// 1. Dark / Light Mode Toggle
const themeToggleBtn = document.createElement('button');
themeToggleBtn.innerText = '🌙 Dark Mode';
themeToggleBtn.classList.add('theme-toggle');
document.body.appendChild(themeToggleBtn);

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeToggleBtn.innerText = '☀️ Light Mode';
    } else {
        themeToggleBtn.innerText = '🌙 Dark Mode';
    }
});

// 2. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 3. Contact Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Simple form validation check
        const inputs = contactForm.querySelectorAll('input, textarea');
        let allValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                allValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ccc';
            }
        });

        if (allValid) {
            alert('Thank you! Your message has been sent successfully.');
            contactForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}