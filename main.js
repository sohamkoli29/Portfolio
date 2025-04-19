document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        { skill: 'HTML', percent: 95 },
        { skill: 'CSS', percent: 85 },
        { skill: 'JavaScript', percent: 75 },
        { skill: 'Python', percent: 75 },
        { skill: 'Java', percent: 75 }
    ];

    const CIRCUMFERENCE = 408;
    const circles = document.querySelectorAll('.progress');
    const percentages = document.querySelectorAll('.percentage');

    skills.forEach((skill, index) => {
        const offset = CIRCUMFERENCE - (CIRCUMFERENCE * skill.percent) / 100;
        circles[index].style.strokeDashoffset = offset;
        percentages[index].textContent = `${skill.percent}%`;
    });
});

let list = document.querySelectorAll('.nav li');
function active(){
    list.forEach((i) =>
    i.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((i) =>
i.addEventListener('click', active));

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.onclick = function(){
    header.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const modal = document.getElementById('videoModal');
    const btn = document.querySelector('.view-project-btn');
    const closeBtn = document.querySelector('.close-modal');
    const video = document.getElementById('portfolioVideo');
    
    // Open modal when button is clicked
    btn.addEventListener('click', function() {
      modal.style.display = 'block';
      video.play();
    });
    
    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      video.pause();
      video.currentTime = 0;
    });
    
    // Close modal when clicking outside video
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        video.pause();
        video.currentTime = 0;
      }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        modal.style.display = 'none';
        video.pause();
        video.currentTime = 0;
      }
    });
  });