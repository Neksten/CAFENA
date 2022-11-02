// Burger
/*
const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.icon-menu');

iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
})
*/
const formSearch = document.querySelector('.menu__search')
const search = document.querySelector('#search')
const searchBtn = document.querySelector('#search-btn')

searchBtn.addEventListener('click', () => {
    search.classList.toggle('_active')
})