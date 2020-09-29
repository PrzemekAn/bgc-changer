const btn = document.querySelector('.color-changer');
const body = document.querySelector('body');


btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
})