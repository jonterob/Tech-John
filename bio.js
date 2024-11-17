// Placeholder for JavaScript functionality
console.log("Interests and Hobbies page loaded!");

// Automatically apply dark mode or light mode based on system preferences
const body = document.body;

// Detect system theme preference and apply it automatically
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (isDarkMode) {
  body.classList.add('dark-mode');
  console.log("Dark mode activated.");
} else {
  console.log("Light mode activated.");
}

// Hover Effect for Interest Items
const interestItems = document.querySelectorAll('.interest-item');

// Adding hover effects to all interest items
interestItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.05)';
  });

  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
  });
});

// Dynamic Year
const currentYear = document.getElementById('currentYear');
currentYear.textContent = new Date().getFullYear();
