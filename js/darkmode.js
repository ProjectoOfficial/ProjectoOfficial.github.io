const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
        localStorage.setItem("darkMode", "enabled");
    } else {
        disableDarkMode();
        localStorage.setItem("darkMode", "disabled");
    }
});

function enableDarkMode() {
    body.classList.add("dark-mode");
}

function disableDarkMode() {
    body.classList.remove("dark-mode");
}