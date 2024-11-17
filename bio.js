// Optionally, if you want more dynamic interactions or animations, you can extend here.    
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;    
// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode')
    ? 'Switch to Light Theme'
    : 'Switch to Dark Theme';
});

// Dynamic Year
const currentYear = document.getElementById('currentYear');
currentYear.textContent = new Date().getFullYear();
