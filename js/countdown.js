setInterval(function () {
    let currentTime = new Date();
    const deadLine = new Date("2023-06-06 10:10:10");
    let difference = deadLine - currentTime;
    let timeFragment = convertMilliseconds(difference);
    document.querySelector(".header__countdown-days").innerHTML = timeFragment.days;
    document.querySelector(".header__countdown-housr").innerHTML = timeFragment.hours;
    document.querySelector(".header__countdown-minutes").innerHTML = timeFragment.minutes;
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