let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    slider.style.transform = `translateX(-${100 * currentSlide}%)`;
}

setInterval(nextSlide, 3000);

document.getElementById('menuToggle').addEventListener('click', function() {
    document.querySelector('.nav-content').classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-content').classList.remove('active');
    });
});