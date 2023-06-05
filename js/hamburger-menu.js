let timeoutId;
let blockedRunning = false;

const bodySelector = document.querySelector("body");
const groupLines = document.querySelector(".header__hamburger-group-lines");
const crossSign = document.querySelector(".header__x-ham");
const hamburgerBlock = document.querySelector(".header__main-hamburger-block");
const hamburgerButton = document.querySelector("#header__hamburger-button");

const calculateScrollBarWidth = () => window.innerWidth - document.documentElement.clientWidth;

hamburgerButton.addEventListener('click', function () {
    bodySelector.classList.toggle("stop-scrolling");
    groupLines.classList.toggle("header__hamburger-group-lines-toggle");
    crossSign.classList.toggle("header__x-ham-toggle");
    hamburgerBlock.classList.toggle("header__main-hamburger-block-toggle");
});

hamburgerBlock.addEventListener('click', function () {
    bodySelector.classList.remove("stop-scrolling");
    groupLines.classList.remove("header__hamburger-group-lines-toggle");
    crossSign.classList.remove("header__x-ham-toggle");
    hamburgerBlock.classList.remove("header__main-hamburger-block-toggle");
})