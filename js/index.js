import { showHideHamburger } from './hamburger-menu.js';
window.showHideHamburger = showHideHamburger;
document.addEventListener('partialsLoaded', () => {
    import('./countdown.js');
    import('./slider.js');
    import('./our-gallery-carousel.js');
});