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
// Obtener el botón de despliegue y el contenedor de los botones flotantes
const botonDesplegar = document.getElementById('botonDesplegar');
const botonesFlotantes = document.getElementById('botonesFlotantes');

// Función para desplegar/ocultar los botones flotantes al hacer clic en el botón de despliegue
botonDesplegar.addEventListener('click', function() {
    if (botonesFlotantes.style.display === 'none') {
        botonesFlotantes.style.display = 'block';
    } else {
        botonesFlotantes.style.display = 'none';
    }
});

// Función para agregar un botón flotante con un ícono específico y un enlace
function agregarBotonFlotante(iconoClase, enlace) {
    const boton = document.createElement('a');
    boton.href = enlace;
    boton.className = 'boton-flotante';
    boton.innerHTML = `<i class="${iconoClase}"></i>`;
    botonesFlotantes.appendChild(boton);
}

// Llamar a la función para agregar los botones flotantes dinámicamente
// Por ejemplo:
// agregarBotonFlotante('fab fa-instagram', 'https://www.instagram.com/tu_usuario');
// agregarBotonFlotante('fab fa-whatsapp', 'https://wa.me/15551234567');

