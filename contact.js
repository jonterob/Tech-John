// Dark Mode Toggle Function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Dynamic Greeting Based on Time
window.onload = function() {
    let greeting = '';
    const hour = new Date().getHours();
    if (hour < 12) {
        greeting = 'Good Morning';
    } else if (hour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }
    alert(greeting + ', John Njoroge!');
};

// Reveal Sections on Scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', function() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

// Display progress bar on page load
window.onload = function() {
    setTimeout(function() {
        document.getElementById('progress-skill').style.width = '80%';
    }, 500);
};
