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

    window.loadPage = function(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.getElementById('main-content').innerHTML = html;
                history.pushState({}, '', url); 
            })
            .catch(error => console.error('Error al cargar la página:', error));
    };

    window.addEventListener('popstate', function(event) {
        const url = location.pathname.substring(1);
        loadPage(url);
    });

const numParticles = 100;
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 5}px`;
        particle.style.height = `${Math.random() * 5}px`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animation = `move ${Math.random() * 5 + 5}s linear infinite`;
        document.body.appendChild(particle);
    }

    document.styleSheets[0].insertRule(`
        @keyframes move {
            0% { transform: translateY(0) translateX(0); }
            100% { transform: translateY(-100vh) translateX(${Math.random() * 20 - 10}vw); }
        }
    `, document.styleSheets[0].cssRules.length);


function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}
        requestAnimationFrame(animationStep);
    }
});


