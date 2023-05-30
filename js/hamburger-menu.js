let timeoutId;
let blockedRunning = false;
const calculateScrollBarWidth = () => window.innerWidth - document.documentElement.clientWidth;
const bodySelector = document.querySelector("body");
const groupLines = document.querySelector(".header__hamburger-group-lines");
const crossSign = document.querySelector(".header__x-ham");
const hamburgerList = document.querySelector("#hamburger-list");
const hamburgerButton = document.querySelector("#header__hamburger-button");

function showHideHamburger() {
    if (blockedRunning) {
        return;
    }
    else {
        blockedRunning = true;
        if (hamburgerList.style.display === "unset") {
            hamburgerButton.style.marginRight = "0px";
            hamburgerList.style.display = "none";
            bodySelector.style.overflow = "unset";

            setTimeout(function () {
                groupLines.style.width = "36px";
                groupLines.style.height = "32px";
                groupLines.style.transition = "width 150ms, height 550ms";
            }, 500);

            crossSign.style.width = "0px";
            crossSign.style.height = "0px";
            crossSign.style.transition = "width 500ms, height 500ms";
        }
        else {
            hamburgerButton.style.marginRight = calculateScrollBarWidth() + "px";
            hamburgerList.style.display = "unset";
            bodySelector.style.overflow = "hidden";
            groupLines.style.height = "3px";
            groupLines.style.width = "0px";
            groupLines.style.transition = "height 150ms, width 550ms";
            setTimeout(function () {
                crossSign.style.width = "36px";
                crossSign.style.height = "32px";
                crossSign.style.transition = "width 500ms, height 500ms";
            }, 550);
        }
    }
    timeoutId = setTimeout(function () {
        blockedRunning = false;
    }, 1000);
}

hamburgerButton.addEventListener('click', showHideHamburger);
hamburgerList.addEventListener('click', showHideHamburger)
