document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
});

    // Redirigir al hacer clic en los botones de navegación
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (window.location.pathname.includes('Parte2.html')) {
                window.location.href = 'Parte1.html';
            } else if (window.location.pathname.includes('Parte3.html')) {
                window.location.href = 'Parte2.html';
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            if (window.location.pathname.includes('Parte1.html')) {
                window.location.href = 'Parte2.html';
            } else if (window.location.pathname.includes('Parte2.html')) {
                window.location.href = 'Parte3.html';
            }
        });
    };