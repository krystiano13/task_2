var hamburgerMenu = document.querySelector(".hamburgermenu");
var searchButton = document.querySelector(".searchButton");
var navbar = document.querySelector("nav");
var searchForm = document.querySelector(".searchForm");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("crossedStripes");
  navbar.classList.toggle("shown");
  searchForm.classList.remove("searchForm-visible");
});

searchButton.addEventListener("click", function () {
  hamburgerMenu.classList.remove("crossedStripes");
  navbar.classList.remove("shown");
  searchForm.classList.toggle("searchForm-visible");
});
