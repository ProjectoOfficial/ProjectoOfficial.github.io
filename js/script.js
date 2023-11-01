// Recupera il toggle e il body del documento
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Verifica il valore iniziale del toggle
if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
    darkModeToggle.checked = true;
}

// Gestisci il cambio di stato del toggle
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
        localStorage.setItem("darkMode", "enabled");
    } else {
        disableDarkMode();
        localStorage.setItem("darkMode", "disabled");
    }
});

// Funzioni per abilitare e disabilitare la modalità scura
function enableDarkMode() {
    body.classList.add("dark-mode");
}

function disableDarkMode() {
    body.classList.remove("dark-mode");
}
