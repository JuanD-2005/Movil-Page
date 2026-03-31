// Fecha de referencia: 11 de julio de 2025 a las 7:30 PM
const targetDate = new Date('July 11, 2025 19:30:00').getTime();

function updateCounter() {
    const now = Date.now();
    const timeDifference = now - targetDate;

    // Si la fecha ya paso, calcular el tiempo transcurrido
    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
}

// Actualizar el contador cada segundo
setInterval(updateCounter, 1000);
updateCounter(); // Llamada inicial

// Crear flores flotantes
function createFlowers() {
    const flowersContainer = document.getElementById('flowers-container');
    const flowerSymbols = ['🌸', '🌼', '💛', '🌻'];

    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.innerHTML = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];

        // Posicion aleatoria
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;

        flower.style.left = `${posX}vw`;
        flower.style.top = `${posY}vh`;

        // Animacion con duracion y delay aleatorios
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 2;
        flower.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

        flowersContainer.appendChild(flower);
    }
}

// Inicializar
createFlowers();
