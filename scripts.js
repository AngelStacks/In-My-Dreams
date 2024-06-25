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

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            navigateToPreviousPage();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            navigateToNextPage();
        });
    }

    function navigateToPreviousPage() {
        const currentPage = getCurrentPageNumber();
        if (currentPage > 1) {
            const previousPage = `Parte${currentPage - 1}.html`;
            window.location.href = previousPage;
        }
    }

    function navigateToNextPage() {
        const currentPage = getCurrentPageNumber();
        if (currentPage < 8) {
            const nextPage = `Parte${currentPage + 1}.html`;
            window.location.href = nextPage;
        }
    }

    function getCurrentPageNumber() {
        const path = window.location.pathname;
        const match = path.match(/Parte(\d+)\.html/);
        return match ? parseInt(match[1]) : 1;
    }

    const botonCabezaGato = document.getElementById("botonCabezaGato");
    const redesSociales = document.getElementById("redesSociales");

    if (botonCabezaGato && redesSociales) {
        botonCabezaGato.addEventListener('click', function() {
            redesSociales.classList.toggle("activo");
        });
    } else {
        console.error("No se encontraron los elementos 'botonCabezaGato' o 'redesSociales'");
    }

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

    const isMobile = window.innerWidth <= 768;
    const numberOfParticles = isMobile ? 0 : 50; // No crear partículas en dispositivos móviles

    for (let i = 0; i < numberOfParticles; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);
        animateParticle(particle);
    }

    function animateParticle(particle) {
        const duration = Math.random() * 30 + 20; // Duración de la animación entre 20s y 50s
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
