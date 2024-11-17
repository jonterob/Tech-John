// 1. Hover Effects for Interest Items
const interestItems = document.querySelectorAll('.interest-item');

interestItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Change icon color on hover
    const icon = item.querySelector('i');
    icon.style.color = '#ff6347'; // Change icon color on hover
  });

  item.addEventListener('mouseleave', () => {
    // Reset icon color
    const icon = item.querySelector('i');
    icon.style.color = '#ff6f61'; // Default icon color
  });
});

// 2. Smooth Scrolling Effect
// Adds smooth scroll behavior when clicking on links (if you have links later)
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 3. Show More / Show Less Button for Interests
// Initially, show only 4 items (example) and allow users to see more
const showMoreButton = document.createElement('button');
showMoreButton.textContent = 'Show More';
showMoreButton.classList.add('show-more-btn');
document.querySelector('.interests-section').appendChild(showMoreButton);

const allInterestItems = document.querySelectorAll('.interest-item');

// Initially hide the items beyond the 4th
for (let i = 4; i < allInterestItems.length; i++) {
  allInterestItems[i].style.display = 'none';
}

// Add event listener to the 'Show More' button
showMoreButton.addEventListener('click', () => {
  const hiddenItems = document.querySelectorAll('.interest-item[style="display: none;"]');
  
  if (hiddenItems.length > 0) {
    hiddenItems.forEach(item => {
      item.style.display = 'flex'; // Show hidden items
    });
    showMoreButton.textContent = 'Show Less'; // Change button text
  } else {
    // If all are shown, hide the extra ones
    for (let i = 4; i < allInterestItems.length; i++) {
      allInterestItems[i].style.display = 'none';
    }
    showMoreButton.textContent = 'Show More'; // Change button text back
  }
});
