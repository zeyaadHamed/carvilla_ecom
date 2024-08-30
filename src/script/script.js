"use strict";
const btn = document.getElementById("btn");
const linksScroll = document.querySelector('.links_scroll');
const links = document.querySelectorAll('.links_scroll .link');
const arrowUp = document.querySelector('.arrow_up');
const yearElement = document.getElementById('year');
let isScrolledUp = false;
const toggleBar = () => {
    if (isScrolledUp) {
        linksScroll.style.maxHeight = "0px";
    }
    else {
        linksScroll.style.maxHeight = `${linksScroll.scrollHeight}px`;
    }
    isScrolledUp = !isScrolledUp;
};
const setupToggleBar = () => {
    if (window.matchMedia("(max-width: 834px)").matches) {
        btn.addEventListener("click", toggleBar);
        linksScroll.style.maxHeight = "0px";
    }
    else {
        btn.removeEventListener("click", toggleBar);
        linksScroll.style.maxHeight = "none";
    }
};
const checkScrollPosition = () => {
    if (window.scrollY >= 450) {
        arrowUp.style.display = 'flex';
    }
    else {
        arrowUp.style.display = 'none';
    }
};
const handleActiveLink = () => {
    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
};
const setCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear.toString();
};
window.addEventListener('load', () => {
    setupToggleBar();
    checkScrollPosition();
    setCurrentYear();
    handleActiveLink();
});
window.addEventListener('resize', setupToggleBar);
document.addEventListener('scroll', checkScrollPosition);
arrowUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
