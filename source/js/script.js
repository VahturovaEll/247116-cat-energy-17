var toggleMenu = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav");

menu.classList.remove("main-nav--nojs");
toggleMenu.addEventListener("click", function() {
  menu.classList.toggle("main-nav--opened");
});
