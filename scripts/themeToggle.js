const themeToggleBtn = document.querySelector('.theme-toggle-and-nav__toggle');
const links = document.querySelectorAll('a');
const navList = document.querySelector('.nav-list');
const navLinks = navList.querySelector('a');
const closeNavBtn = document.querySelector('.close-nav-list-btn');

themeToggleBtn.addEventListener('click', () => {
    const bodyBackGroundColor = window.getComputedStyle(document.body).backgroundColor;//Вычисляем текущий цвет темы
    
    if (bodyBackGroundColor === 'rgb(0, 0, 0)') {//Если фон черный
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        for (link of links) {
            link.style.color = '#000';
        }
        navList.style.backgroundColor = '#fff';
        navLinks.style.color = '#000';
        closeNavBtn.style.color = '#000';
    } else {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        for (link of links) {
            link.style.color = '#fff';
        }
        navList.style.backgroundColor = '#000';
        navLinks.style.color = '#fff';
        closeNavBtn.style.color = '#fff';
    }
});