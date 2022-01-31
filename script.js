const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.header-menu');
const language = document.querySelector('.denis-novik-language')

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    language.classList.toggle('open')
})