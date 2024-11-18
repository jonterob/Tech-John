function openModal(projectName) {
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('project-title');
    const description = document.getElementById('project-description');

    const projects = {
        "Portfolio Website": "Built a dynamic portfolio website using HTML, CSS, and JavaScript. Added animations and interactive elements.",
        "Task Manager App": "A full-stack web application to manage tasks using React and Node.js. Implemented user authentication and real-time updates."
    };

    title.textContent = projectName;
    description.textContent = projects[projectName];
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = "none";
}

// Smooth Scroll
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle More Info
function toggleSection() {
    const section = document.getElementById('more-info-section');
    section.style.display = section.style.display === "none" ? "block" : "none";
}
