const setPic = document.querySelector(".menu-img");
const btnMenu = document.querySelector(".menu-btn");

const picsArray = ["images/menu/menu-sale/sweetj.png", "images/menu/menu-sale/gentlec.png", "images/menu/menu-sale/rosesp.png"];

function choosingPic() {
    const randomIndex = Math.floor(Math.random() * picsArray.length);
    setPic.src = picsArray[randomIndex];
}

btnMenu.addEventListener("click", choosingPic);