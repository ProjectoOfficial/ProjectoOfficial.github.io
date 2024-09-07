document.getElementById('menuToggle').addEventListener('click', function() {
    document.querySelector('.nav-content').classList.toggle('active');
    });

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-content').classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
        hljs.highlightAll();
});

document.getElementById('copyButton').addEventListener('click', () => {
    const codeBlock = document.querySelector('pre code');
    const codeText = codeBlock.textContent;

    navigator.clipboard.writeText(codeText).then(() => {
        const copyIcon = document.querySelector('#copyButton i');
        const feedback = document.getElementById('feedback');

        copyIcon.classList.remove('fa-copy');
        copyIcon.classList.add('fa-check');

        feedback.classList.remove('hide');
        feedback.classList.add('show');

        setTimeout(() => {
            feedback.classList.remove('show');
            feedback.classList.add('hide');
            copyIcon.classList.remove('fa-check');
            copyIcon.classList.add('fa-copy');
        }, 400);
    }).catch(err => {
        console.error('Errore nella copia del codice: ', err);
    });
});

