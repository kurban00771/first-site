function scrollToForm() {
    const target = document.getElementById('form');
    if (target) {
        // Плавная прокрутка
        target.scrollIntoView({ behavior: 'smooth' });
        // Удаляем #form из URL после прокрутки
        setTimeout(() => {
            history.replaceState(null, null, window.location.pathname + window.location.search);
        }, 600); // 600мс — чуть больше времени анимации
    }
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    // Удаляем # из URL (если был)
    setTimeout(() => {
        history.replaceState(null, null, window.location.pathname + window.location.search);
    }, 600);
}