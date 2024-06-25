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

window.addEventListener('scroll', throttle(function() {

    console.log('Scroll event triggered');
}, 200));

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onload = () => {
            img.classList.add('loaded');
        };
    });
});

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js config loaded');
});


document.addEventListener('DOMContentLoaded', function() {
    const isMobile = window.innerWidth <= 768;
    const numberOfParticles = isMobile ? 10 : 50; // Reducir el número de partículas en dispositivos móviles

    for (let i = 0; i < numberOfParticles; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);
        if (!isMobile) { // Solo animar partículas en dispositivos no móviles
            animateParticle(particle);
        }
    }

    function animateParticle(particle) {
        const duration = Math.random() * 30 + 20; // Duración de la animación entre 20s y 50s
        const delay = Math.random() * 10;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const finalX = Math.random() * 100;
        const finalY = Math.random() * 100;

        let startTime = null;
        function animationStep(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = (elapsed / (duration * 1000)) % 1;

            const currentX = initialX + (finalX - initialX) * progress;
            const currentY = initialY + (finalY - initialY) * progress;

            particle.style.transform = `translate(${currentX}vw, ${currentY}vh)`;

            requestAnimationFrame(animationStep);
        }

        requestAnimationFrame(animationStep);
    }
});
