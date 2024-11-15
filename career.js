// Function to display a greeting based on the time of day
function updateDateTime() {
    const d = new Date();
    const theDay = d.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const headerText = document.querySelector('header p');
    const dateTime = document.createElement('p');
    dateTime.style.fontSize = "14px";
    dateTime.textContent = "Current Date and Time: " + d.toLocaleString();

    headerText.textContent = `Happy ${daysOfWeek[theDay]}!`;
    headerText.appendChild(dateTime);
}

// Show description when clicking on the button
function showDescription() {
    const desc = document.getElementById('portfolioDesc');
    const btn = document.getElementById('showDescriptionBtn');
    if (desc.style.display === 'none') {
        desc.style.display = 'block';
        btn.textContent = 'Hide Description';
    } else {
        desc.style.display = 'none';
        btn.textContent = 'Know More';
    }
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show "Scroll to Top" button when scrolling down
window.addEventListener('scroll', () => {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (window.scrollY > 100) {
        scrollBtn.classList.add('active');
    } else {
        scrollBtn.classList.remove('active');
    }
});

// Load date and time update when the page loads
document.addEventListener('DOMContentLoaded', function () {
    updateDateTime();
    setInterval(updateDateTime, 1000);
});