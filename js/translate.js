// Funzione per caricare le traduzioni da un file XML
function loadTranslationsXML(callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const xmlDoc = xhr.responseXML;
                const translationMap = {};
                
                const translations = xmlDoc.getElementsByTagName("translation");
                for (let i = 0; i < translations.length; i++) {
                    const lang = translations[i].getAttribute("lang");
                    const elements = translations[i].getElementsByTagName("element");
                    const elementMap = {};
                    for (let j = 0; j < elements.length; j++) {
                        const id = elements[j].getAttribute("id");
                        const text = elements[j].getElementsByTagName("text")[0].textContent;
                        elementMap[id] = text;
                    }
                    translationMap[lang] = elementMap;
                }
                
                callback(translationMap);
            } else {
                console.error('Errore durante il caricamento del file XML di traduzione.');
            }
        }
    };
    xhr.open("GET", "content/text.xml", true); // Modifica il percorso del file XML
    xhr.send();
}

// Funzione principale per tradurre il testo
function translateContent(language, translationMap) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(function(element) {
        const id = element.getAttribute('data-translate');
        const translatedText = translationMap[language][id];
        if (translatedText) {
            element.innerHTML = translatedText;
        } else {
            console.error('Nessuna traduzione trovata per l\'ID:', id);
        }
    });
}

// Inizializza il caricamento delle traduzioni
loadTranslationsXML(function(translationMap) {
    const selectedLanguage = 'it'; // Imposta la lingua predefinita
    translateContent(selectedLanguage, translationMap); // Traduci il contenuto con la lingua predefinita
    // Definisci la funzione per cambiare la lingua quando viene selezionata una nuova opzione
    document.getElementById('languageSelector').addEventListener('change', function() {
        const selectedLanguage = this.value;
        translateContent(selectedLanguage, translationMap);
    });
});
