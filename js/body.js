let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    slider.style.transform = `translateX(-${100 * currentSlide}%)`;
}

setInterval(nextSlide, 3000);  // Cambia slide ogni 3 secondi