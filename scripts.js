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

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM completamente cargado y parseado");

    const botonCabezaGato = document.getElementById("botonCabezaGato");
    const redesSociales = document.getElementById("redesSociales");

    if (botonCabezaGato && redesSociales) {
        botonCabezaGato.addEventListener('click', function() {
            console.log("Botón de cabeza de gato clickeado");
            redesSociales.classList.toggle("activo");
        });
    } else {
        console.error("No se encontraron los elementos 'botonCabezaGato' o 'redesSociales'");
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('background-audio');
    const songs = [
        "Claro de Luna de Beethoven.mp3",
        "Chopin - Nocturne op.9 No.2.mp3",
        "CHOPIN - NOCTURNE NO.20.mp3"
    ];
    let currentSongIndex = 0;

    if (sessionStorage.getItem('currentSongIndex')) {
        currentSongIndex = parseInt(sessionStorage.getItem('currentSongIndex'), 10);
        audio.src = songs[currentSongIndex];
    }
    if (sessionStorage.getItem('currentTime')) {
        audio.currentTime = parseFloat(sessionStorage.getItem('currentTime'));
    }

    audio.play();

    audio.addEventListener('ended', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        audio.src = songs[currentSongIndex];
        audio.play();
        sessionStorage.setItem('currentSongIndex', currentSongIndex);
    });

    audio.addEventListener('timeupdate', () => {
        sessionStorage.setItem('currentTime', audio.currentTime);
    });

    // Función para cargar el contenido de la página de manera asíncrona
    window.loadPage = function(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.getElementById('main-content').innerHTML = html;
                history.pushState({}, '', url); // Actualiza la URL
            })
            .catch(error => console.error('Error al cargar la página:', error));
    };

    // Detecta los cambios en la URL (carga de página anterior/siguiente)
    window.addEventListener('popstate', function(event) {
        const url = location.pathname.substring(1);
        loadPage(url);
    });

    // Carga la página inicial
    loadPage('parte1.html');
});
function setMusicState(state) {
    document.cookie = `musicState=${state}; path=/`;
}
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('background-audio');
    const songs = [
        "Claro de Luna de Beethoven.mp3",
        "Chopin - Nocturne op.9 No.2.mp3",
        "CHOPIN - NOCTURNE NO.20.mp3"
    ];
    let currentIndex = 0;

    function playNextSong() {
        currentIndex = (currentIndex + 1) % songs.length;
        audio.src = songs[currentIndex];
        audio.play();
    }

    audio.addEventListener('ended', playNextSong);

    // Reproduce la primera canción automáticamente
    audio.src = songs[currentIndex];
    audio.play();
});

