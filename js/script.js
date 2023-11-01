const buttons = document.querySelectorAll('.support-item');
let maxWidth = 0;

buttons.forEach(button => {
    const buttonWidth = button.offsetWidth;
    maxWidth = Math.max(maxWidth, buttonWidth);
});

// Imposta la larghezza massima per tutti i bottoni
buttons.forEach(button => {
    button.style.width = maxWidth + 'px';
});