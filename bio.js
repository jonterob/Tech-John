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
