    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Newsletter form validation
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        const email = this.querySelector('input[type="email"]').value;
        if(!validateEmail(email)) {
            e.preventDefault();
            alert('Please enter a valid email address');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }