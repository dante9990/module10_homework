const btnScreen = document.querySelector(".btn-screen");
const width = window.screen.width;
const height = window.screen.height;

btnScreen.addEventListener('click', () => {
    alert(`Ширина: ${width} Высота: ${height}`)
})