const menu = document.querySelector(".bars__menu");
menu.addEventListener("click", animarBarras);
let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
const nav = document.querySelector(".nav-container");

function animarBarras() {
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    nav.classList.toggle("nav-container__active");
}
