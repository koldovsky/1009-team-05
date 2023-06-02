const btnLeft = document.querySelector("#scrollLeft");
const btnRight = document.querySelector("#scrollRight");
const mainBlockContainer = document.querySelector(".main__booklets-menu-container");
const mainBlockMenu = document.querySelector(".main__booklets-menu-block");
const fullBookletWidth = 330;
let isScrolling = false;
let autoInterval;
let lockInterval;
let defaultDirectionScroll = "scrollRight";
runScroll();

function handleButtonClick(currentId) {
    runScroll();
    if (isScrolling) {
        return;
    }
    isScrolling = true;
    currentId === "scrollLeft" ? (mainBlockContainer.scroll({ left: mainBlockContainer.scrollLeft - fullBookletWidth, behavior: "smooth", }), defaultDirectionScroll = "scrollLeft") : (mainBlockContainer.scroll({ left: fullBookletWidth + mainBlockContainer.scrollLeft, behavior: "smooth", }), defaultDirectionScroll = "scrollRight");
    unlockScrolling()
}

btnLeft.addEventListener('click', function () { handleButtonClick(this.id); });
btnRight.addEventListener('click', function () { handleButtonClick(this.id); });
window.addEventListener('scroll', function () {
    isScrolling = true;
    unlockScrolling();
});

function runScroll() {
    clearInterval(autoInterval);
    autoInterval = setInterval(function () {
        if (isScrollEnd()) {
            defaultDirectionScroll = "scrollLeft";
        }
        if (isScrollStart()) {
            defaultDirectionScroll = "scrollRight";
        }
        handleButtonClick(defaultDirectionScroll);
    }, 3000);
}

function isScrollEnd() {
    let isEnd = mainBlockContainer.scrollLeft + mainBlockContainer.clientWidth >= mainBlockContainer.scrollWidth;
    return isEnd;
}

function isScrollStart() {
    let isStart = mainBlockContainer.scrollLeft + mainBlockContainer.clientWidth === mainBlockContainer.clientWidth;
    return isStart;
}

function unlockScrolling() {
    clearInterval(lockInterval);
    lockInterval = setTimeout(function () {
        isScrolling = false;
    }, 500);
}