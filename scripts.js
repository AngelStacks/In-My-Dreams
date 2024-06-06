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
            } else if (window.location.pathname.includes('Parte4.html')) {
                window.location.href = 'Parte3.html';
            } else if (window.location.pathname.includes('Parte5.html')) {
                window.location.href = 'Parte4.html';
            } else if (window.location.pathname.includes('Parte6.html')) {
                window.location.href = 'Parte5.html';
            } else if (window.location.pathname.includes('Parte7.html')) {
                window.location.href = 'Parte6.html';
            } 
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            if (window.location.pathname.includes('Parte1.html')) {
                window.location.href = 'Parte2.html';
            } else if (window.location.pathname.includes('Parte2.html')) {
                window.location.href = 'Parte3.html';
            } else if (window.location.pathname.includes('Parte3.html')) {
                window.location.href = 'Parte4.html';
            } else if (window.location.pathname.includes('Parte4.html')) {
                window.location.href = 'Parte5.html';
            } else if (window.location.pathname.includes('Parte5.html')) {
                window.location.href = 'Parte6.html';
            } else if (window.location.pathname.includes('Parte6.html')) {
                window.location.href = 'Parte7.html';
            } else if (window.location.pathname.includes('Parte7.html')) {
                window.location.href = 'Parte8.html';
            }
        });
    };
document.addEventListener("DOMContentLoaded", function() {
    const botonCabezaGato = document.getElementById("botonCabezaGato");
    const redesSociales = document.getElementById("redesSociales");
    let visible = false;

    botonCabezaGato.addEventListener("click", function() {
        if (visible) {
            redesSociales.style.display = "none";
            redesSociales.classList.remove("show");
        } else {
            redesSociales.style.display = "flex";
            setTimeout(() => {
                redesSociales.classList.add("show");
            }, 10); // Añadimos un pequeño delay para que la animación funcione
        }
        visible = !visible;
    });

    // Añadimos un listener a los enlaces para prevenir el comportamiento por defecto en caso de error
    const enlaces = document.querySelectorAll(".redes-sociales a");
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(event) {
            if (!event.currentTarget.href) {
                event.preventDefault();
                alert("Error en el enlace. Por favor verifica el enlace.");
            }
        });
    });
});

