const btnToggle = document.querySelector(".btn-toggle");
const circle = document.querySelector(".icon-circle");
const circleFill = document.querySelector(".icon-circle-fill");

btnToggle.addEventListener('click', () => {
    circle.classList.toggle("none");
    circleFill.classList.toggle("none");
})