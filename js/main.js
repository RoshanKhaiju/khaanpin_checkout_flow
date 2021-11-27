// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  navMenu.classList.toggle("active");
}

// mobile menu close
const cross = document.querySelector(".cross");
cross.addEventListener("click", closeMenu);
function closeMenu() {
  navMenu.classList.remove("active");
}