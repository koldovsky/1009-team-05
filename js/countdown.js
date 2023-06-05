let openingTime = "2023-06-06 16:30:00";
let headerCountdown = document.querySelector(".header__countdown");
let timeFragment
let countdownTimer;

countdownTimer = setInterval(function () {
    let currentTime = new Date();
    const deadLine = new Date(openingTime);
    let difference = deadLine - currentTime;
    difference < 0 ? (headerCountdown.style.display = "none", clearInterval(countdownTimer)) : printTime(convertMilliseconds(difference));
}, 1000);

function printTime(timeFragment) {
    document.querySelector(".header__countdown-days").innerHTML = timeFragment.days;
    document.querySelector(".header__countdown-days-txt").innerHTML = pluralizeTime(timeFragment.days, "day");

    document.querySelector(".header__countdown-housr").innerHTML = timeFragment.hours;
    document.querySelector(".header__countdown-housr-txt").innerHTML = pluralizeTime(timeFragment.hours, "hour");

    document.querySelector(".header__countdown-minutes").innerHTML = timeFragment.minutes;
    document.querySelector(".header__countdown-minutes-txt").innerHTML = pluralizeTime(timeFragment.minutes, "minute");

    document.querySelector(".header__countdown-seconds").innerHTML = timeFragment.seconds;
    document.querySelector(".header__countdown-seconds-txt").innerHTML = pluralizeTime(timeFragment.seconds, "second");
}

function convertMilliseconds(milliseconds) {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const days = Math.floor(milliseconds / DAY).toString();
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

let pluralizeTime = (seconds, timeTemplate) => `${timeTemplate}${parseInt(seconds) === 1 ? '' : 's'}`;