const btnLeft = document.querySelector("#scrollLeft");
const btnRight = document.querySelector("#scrollRight");
const mainBlockContainer = document.querySelector(".main__booklets-menu-container");
const mainBlockMenu = document.querySelector(".main__booklets-menu-block");
const fullBookletWidth = 330;
let isScrolling = false;

function handleButtonClick() {
    if (isScrolling) {
        return;
    }
    isScrolling = true;
    this.id === "scrollLeft" ? mainBlockContainer.scroll({ left: mainBlockContainer.scrollLeft - fullBookletWidth, behavior: "smooth", }) : mainBlockContainer.scroll({ left: fullBookletWidth + mainBlockContainer.scrollLeft, behavior: "smooth", });
    setTimeout(function () {
        isScrolling = false;
    }, 300);
}

btnLeft.addEventListener('click', handleButtonClick);
btnRight.addEventListener('click', handleButtonClick);

