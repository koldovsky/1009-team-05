setInterval(function () {
    let currentTime = new Date();
    const deadLine = new Date("2023-06-06 10:10:10");
    let difference = deadLine - currentTime;
    let timeFragment = convertMilliseconds(difference);

    document.querySelector(".header__countdown-days").innerHTML = timeFragment.days;
    // document.querySelector(".header__countdown-days-txt").innerHTML = pluralizeDay(timeFragment.days);

    document.querySelector(".header__countdown-housr").innerHTML = timeFragment.hours;
    document.querySelector(".header__countdown-housr-txt").innerHTML = pluralizeTime(timeFragment.minutes, "годин");

    document.querySelector(".header__countdown-minutes").innerHTML = timeFragment.minutes;
    document.querySelector(".header__countdown-minutes-txt").innerHTML = pluralizeTime(timeFragment.minutes, "хвилин");

    document.querySelector(".header__countdown-seconds").innerHTML = timeFragment.seconds;
    document.querySelector(".header__countdown-seconds-txt").innerHTML = pluralizeTime(timeFragment.seconds, "секунд");

}, 1000);

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

let lastDigit = (inputDigit) => inputDigit.length === 1 ? parseInt(inputDigit) : parseInt(inputDigit.charAt(inputDigit.length - 1));

function pluralizeTime(seconds, timeTemplate) {
    return `${timeTemplate}${seconds >= 5 && seconds <= 20 ? '' : lastDigit(seconds) >= 2 && lastDigit(seconds) <= 4 ? 'и' : lastDigit(seconds) === 1 ? 'a' : ''}`;
}

// function pluralizeDay(days) {
//     return `${days} ${days >= 5 && days <= 20 ? 'днів' : lastDigit(days) >= 2 && lastDigit(days) <= 4 ? 'дні' : lastDigit(days) === 1 ? 'день' : 'днів'}`;
// }