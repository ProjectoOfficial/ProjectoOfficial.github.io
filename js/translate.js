function loadTranslationsXML(fileUrls, callback) {
    let translationsLoaded = 0;
    const translationMap = {};

    function processFile(fileUrl) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const xmlDoc = xhr.responseXML;
                    if (xmlDoc) {
                        const translations = xmlDoc.getElementsByTagName("translation");

                        for (let i = 0; i < translations.length; i++) {
                            const lang = translations[i].getAttribute("lang");
                            const elements = translations[i].getElementsByTagName("element");

                            if (!translationMap[lang]) {
                                translationMap[lang] = {};
                            }
                            
                            for (let j = 0; j < elements.length; j++) {
                                const id = elements[j].getAttribute("id");
                                const text = elements[j].getElementsByTagName("text")[0].textContent;
                                translationMap[lang][id] = text;
                            }
                        }

                        translationsLoaded++;
                        if (translationsLoaded === fileUrls.length) {
                            callback(translationMap);
                        }
                    } else {
                        console.error('Errore nel parsing del documento XML:', fileUrl);
                    }
                } else {
                    console.error('Errore durante il caricamento del file XML di traduzione:', fileUrl);
                }
            }
        };
        xhr.open("GET", fileUrl, true);
        xhr.send();
    }

    fileUrls.forEach(processFile);
}

function translateContent(language, translationMap) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(function(element) {
        const id = element.getAttribute('data-translate');
        const translatedText = translationMap[language] && translationMap[language][id];
        if (translatedText) {
            element.textContent = translatedText;
        } else {
            console.error('Nessuna traduzione trovata per l\'ID:', id);
        }
    });
}

const translationFiles = ["content/index.xml", "content/pytorch.xml"];

loadTranslationsXML(translationFiles, function(translationMap) {
    const selectedLanguage = 'it'; 
    translateContent(selectedLanguage, translationMap); 

    document.getElementById('languageSelector').addEventListener('change', function() {
        const selectedLanguage = this.value;
        translateContent(selectedLanguage, translationMap);
    });
});
