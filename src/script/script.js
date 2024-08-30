"use strict";
let btn = document.getElementById("btn");
let linksScroll = document.querySelector('.links_scroll');
let isScrolledUp = false;
let links = document.querySelectorAll('.links_scroll .link');
function setupToggleBar() {
    if (window.matchMedia("(max-width: 834px)").matches) {
        btn.addEventListener("click", toggleBar);
        linksScroll.style.maxHeight = "0px";
    }
    else {
        btn.removeEventListener("click", toggleBar);
        linksScroll.style.maxHeight = "none";
    }
}
function toggleBar() {
    if (isScrolledUp) {
        linksScroll.style.maxHeight = "0px";
    }
    else {
        linksScroll.style.maxHeight = `${linksScroll.scrollHeight}px`;
    }
    isScrolledUp = !isScrolledUp;
}
setupToggleBar();
window.addEventListener('resize', setupToggleBar);
links.forEach((link) => {
    link.addEventListener("click", () => {
        if (link.classList.contains('active')) {
            link.classList.remove('active');
        }
        else {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});
let year = document.getElementById('year');
let years = new Date().getFullYear();
year.textContent = years.toString();
