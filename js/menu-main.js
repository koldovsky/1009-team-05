const setPic = document.querySelector(".menu-img");
const btnMenu = document.querySelector(".menu-btn");
const rectangle = document.querySelector(".card-menu");

const picsArray = ["images/menu/menu-sale/sweetj.png", "images/menu/menu-sale/gentlec.png", 
"images/menu/menu-sale/rosesp.png"];

function choosingPic() {
    const randomIndex = Math.floor(Math.random() * picsArray.length);
    setPic.src = picsArray[randomIndex];
}

function setClasses() {
    rectangle.classList.add("card-rectangle");
    setPic.classList.remove("img-height");
    setPic.classList.add("img-random");
}

btnMenu.addEventListener("click", function() {
    return choosingPic(), setClasses();
});