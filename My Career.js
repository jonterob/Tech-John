// Add dynamic greeting based on time of day
const header = document.querySelector('header p');
const currentHour = new Date().getHours();
let greeting = 'Welcome to my professional journey!';

if (currentHour < 12) {
    greeting = 'Good morning! Welcome to my professional journey!';
} else if (currentHour < 18) {
    greeting = 'Good afternoon! Welcome to my professional journey!';
} else {
    greeting = 'Good evening! Welcome to my professional journey!';
}

header.textContent = greeting;

// Add animation to skills section
const skillsContainer = document.getElementById('skills');
const skillElements = skillsContainer.querySelectorAll('span');

skillElements.forEach((skill, index) => {
    skill.style.opacity = 0;
    skill.style.transform = 'translateY(20px)';

    setTimeout(() => {
        skill.style.transition = 'all 0.6s ease';
        skill.style.opacity = 1;
        skill.style.transform = 'translateY(0)';
    }, index * 200);
});

// Add interactive skill highlighting
skillElements.forEach(skill => {
    skill.addEventListener('click', () => {
        alert(`You clicked on ${skill.textContent}!`);
    });
});

// Back-to-top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆ Back to Top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.backgroundColor = '#3498db';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
backToTopButton.style.zIndex = '1000';

document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
