const navBtn = document.querySelector('.theme-toggle-and-nav__nav__container');
const navMenu = document.querySelector('.nav-list');
const closeBtn = document.querySelector('.close-nav-list-btn');

navBtn.addEventListener('click', () => {
    const leftValue = window.getComputedStyle(navMenu).left;//Получаем значение left при клике
    if (leftValue !== '0px') {
        navMenu.style.left = 0;
    } else {
        navMenu.style.left = '-2000px';
    }
});

closeBtn.addEventListener('click', () => {
    navMenu.style.left = '-2000px';
});