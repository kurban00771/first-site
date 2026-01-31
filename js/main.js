/* В файле js/main.js: */

function clearUrlHash() {
    // Единая функция для очистки URL от хеша без таймаута
    history.replaceState(null, null, window.location.pathname + window.location.search);
}

function scrollToForm() {
    const target = document.getElementById('form');
    if (target) {
        target.scrollIntoView({ 
            behavior: 'smooth' 
        });
        // Вызываем сразу после начала скролла
        clearUrlHash(); 
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    // Вызываем сразу после начала скролла
    clearUrlHash();
}
