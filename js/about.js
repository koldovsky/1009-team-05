// carousel

const slides = {
    < div class="about__content-team-carousel-card" >
        <img class="about__content-team-carousel-card-photo" src="images/about/card_tomas.png"
            alt="Tomas Jackson">
    </div>
    <p class="about__content-team-carousel-card-name">Tomas Jackson</p>
</div >
<div class="about__content-team-carousel-card">
    <div>
        <img class="about__content-team-carousel-card-photo" src="images/about/card_eloise.png"
            alt="Eloise Birkenstone">
    </div>
    <p class="about__content-team-carousel-card-name">Eloise Birkenstone</p>
</div>
<div class="about__content-team-carousel-card">
    <div>
        <img class="about__content-team-carousel-card-photo" src="images/about/card_jane.png"
            alt="Jane Woss">
    </div>
    <p class="about__content-team-carousel-card-name">Jane Woss</p>
</div>
}


let currentSlide = 0;

const slideContainer = document.querySelector('.about__content-team-carousel');


function showCurrentSlide() {
   slideContainer.innerHTML = slides[currentSlide];
   }

showCurrentSlide();

function nextSlide() {
    currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    showCurrentSlide();
}

setInterval(nextSlide, 3000);