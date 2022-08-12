const menu = document.querySelector(".bars__menu");
menu.addEventListener("click", animarBarras);
let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
const nav = document.querySelector(".nav-container");

/**
 * When the user clicks on the bars icon, the bars icon will animate and the nav menu will appear.
 */
function animarBarras() {
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    nav.classList.toggle("nav-container__active");
}

// PROGRESS-BAR SCROLL

let progressbar = document.querySelector(".progressbar");
/* A function that is called when the user scrolls. It calculates the percentage of the scroll and sets
the width of the progress bar to that percentage. */
function ScrollProgressBar() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    let windowHeight = scrollHeight - clientHeight;
    let porcentaje = (scrollTop / windowHeight) * 100;
    // console.log(porcentaje);
    progressbar.style.width = porcentaje + "%";

    let subir = document.querySelector(".goup");
    if (true) {
        subir.classList.toggle(".goupshow");
    }
}
window.addEventListener("scroll", ScrollProgressBar);
