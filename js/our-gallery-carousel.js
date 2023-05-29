const carousels = document.querySelectorAll('.galcarousel');
carousels.forEach((carousel) => {
    const image = carousel.querySelector('#galcarousel-image');
    const previousButton = carousel.querySelector('.previous-button');
    const nextButton = carousel.querySelector('.next-button');
    const images = [
        'images/gallery/manwoman.png',
        'images/gallery/icecreamdif.png',
        'images/gallery/icecreamcup.png',
        'images/gallery/twoicecreams.png',
        'images/gallery/mangoice.png'
    ];
    let currentIndex = 0;
    function updateImage() {
        image.src = images[currentIndex];
    }
    previousButton.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        updateImage();
    });
    nextButton.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        updateImage();
    });
    updateImage();
});

