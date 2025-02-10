document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        { skill: 'HTML', percent: 80 },
        { skill: 'CSS', percent: 60 },
        { skill: 'JavaScript', percent: 40 },
        { skill: 'Python', percent: 50 }
    ];

    const circles = document.querySelectorAll('.progress');
    const percentages = document.querySelectorAll('.percentage');

    skills.forEach((skill, index) => {
        const strokeOffset = 440 - (440 * skill.percent) / 100;
        circles[index].style.strokeDashoffset = strokeOffset;
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