const hamburgerMenu = document.querySelector('.hamburgermenu');
const navbar = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('crossedStripes');
    navbar.classList.toggle('shown');
});