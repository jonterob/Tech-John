// Optionally, if you want more dynamic interactions or animations, you can extend here.    

// Check for matchMedia support
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) { // Ensure the element exists
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode')
      ? 'Switch to Light Theme'
      : 'Switch to Dark Theme';
  });
}

// Dynamic Year
const currentYear = document.getElementById('currentYear');
if (currentYear) { // Ensure the element exists
  currentYear.textContent = new Date().getFullYear();
}
