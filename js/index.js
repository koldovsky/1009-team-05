// hamburger menu
let timeoutId;
let blockedRunning = false;

function show_hide_hamburger() {
    timeoutId = setTimeout(function () {
        blockedRunning = false;
    }, 550);

    if (blockedRunning) { }
    else {
        blockedRunning = true;
        const calculateScrollBarWidth = () => window.innerWidth - document.documentElement.clientWidth;
        const bodySelector = document.querySelector("body");
        const hamburgerButton = document.querySelector(".header__hamburger-button");
        const groupLines = document.querySelector(".header__hamburger-group-lines");
        const crossSign = document.querySelector(".header__x-ham");
        const hamburgerList = document.querySelector("#hamburger-list");

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
}
//end hamburger menu


// countdown
setInterval(function () {
    let currentTime = new Date();
    const deadLine = new Date("2023-06-06 10:10:10");
    let difference = deadLine - currentTime;
    let timeFragment = convertMilliseconds(difference);
    document.querySelector(".header__countdown-days").innerHTML = timeFragment.days;
    document.querySelector(".header__countdown-housr").innerHTML = timeFragment.hours + ":";
    document.querySelector(".header__countdown-minutes").innerHTML = timeFragment.minutes + ":";
    document.querySelector(".header__countdown-seconds").innerHTML = timeFragment.seconds;

}, 1000);

function convertMilliseconds(milliseconds) {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const days = Math.floor(milliseconds / DAY);
    const hours = Math.floor((milliseconds % DAY) / HOUR).toString().padStart(2, '0');
    const minutes = Math.floor((milliseconds % HOUR) / MINUTE).toString().padStart(2, '0');
    const seconds = Math.floor((milliseconds % MINUTE) / SECOND).toString().padStart(2, '0');

    return {
        days,
        hours,
        minutes,
        seconds
    };
}
  // end countdown