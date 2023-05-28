const btnLeft = document.querySelector("#leftBtn");
const btnRight = document.querySelector("#rightBtn");
const mainBlockContainer = document.querySelector(".main__booklets-menu-container");
const mainBlockMenu = document.querySelector(".main__booklets-menu-block");

btnLeft.addEventListener('click', handleButtonClick);
btnRight.addEventListener('click', handleButtonClick);

function handleButtonClick() {
    this.id === "leftBtn" ? mainBlockContainer.scroll({ left: mainBlockContainer.scrollLeft - 330, behavior: "smooth", }) : mainBlockContainer.scroll({ left: 330 + mainBlockContainer.scrollLeft, behavior: "smooth", });
}