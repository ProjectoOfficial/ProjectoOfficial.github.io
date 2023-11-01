const scrollToTopButton = document.getElementById('scrollToTopBtn');

// Mostra il pulsante quando si scorre oltre una certa altezza
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Torna in cima quando il pulsante viene cliccato
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});