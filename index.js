const hamburgerMenu = document.querySelector('.hamburgermenu');
const searchButton = document.querySelector('.searchButton');
const navbar = document.querySelector('nav');
const searchForm = document.querySelector('.searchForm');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle("crossedStripes");
    navbar.classList.toggle('shown');
    searchForm.classList.remove('searchForm-visible');
});

searchButton.addEventListener('click', () => {
    hamburgerMenu.classList.remove("crossedStripes");
    navbar.classList.remove("shown");
    searchForm.classList.toggle("searchForm-visible");
});