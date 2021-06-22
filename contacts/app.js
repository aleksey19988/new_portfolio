const form = document.querySelector('.container-form');
const openFormBtn = document.querySelector('.open-form-btn');
const closeFormBtn = document.querySelector('.close-form-btn');

openFormBtn.addEventListener('click', () => {
    form.style.transform = 'translate(-50%, -50%)';
});

closeFormBtn.addEventListener('click', () => {
    form.style.transform = 'translate(-50%, -2000px)';
});