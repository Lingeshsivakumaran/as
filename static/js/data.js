async function fetchAsteroids() {
    try {
        const response = await fetch('/api/asteroids');
        const data = await response.json();
        renderAsteroids(data);
    } catch (error) {
        console.error('Error fetching asteroid data:', error);
    }
}

function renderAsteroids(data) {
    const container = document.getElementById('all-asteroids');
    const allAsteroids = [
        ...data.named,
        ...data.dangerous.sort((a, b) => b.diameter - a.diameter),
        ...data.non_dangerous.sort((a, b) => b.diameter - a.diameter)
    ];
    const limitedAsteroids = allAsteroids.slice(0, 10);
    container.innerHTML = limitedAsteroids.map(asteroid => createAsteroidCard(asteroid)).join('');
    attachClickListeners();
}

function createAsteroidCard(asteroid) {
    const cardClass = ["Ceres", "Vesta", "Pallas"].includes(asteroid.name) ? 'named' : (asteroid.is_dangerous ? 'dangerous' : '');
    return `
        <div class="asteroid-card ${cardClass}" data-asteroid-name="${asteroid.name}">
            <div class="asteroid-name">${asteroid.name}</div>
            <div class="asteroid-info">
                <p>Diameter: ${asteroid.diameter.toFixed(2)} meters</p>
                <p>First Observed: ${asteroid.first_observation}</p>
                ${asteroid.description ? `<p>${asteroid.description}</p>` : ''}
                ${asteroid.velocity ? `<p>Velocity: ${parseFloat(asteroid.velocity).toFixed(2)} km/h</p>` : ''}
                ${asteroid.is_dangerous ? '<div class="danger-badge">Potentially Hazardous</div>' : ''}
            </div>
        </div>
    `;
}

function attachClickListeners() {
    const asteroidCards = document.querySelectorAll('.asteroid-card');
    
    asteroidCards.forEach(card => {
        card.addEventListener('click', (event) => {
            const asteroidName = card.dataset.asteroidName;
            handleAsteroidClick(asteroidName);
        });
    });
}

function handleAsteroidClick(asteroidName) {
    console.log(`Asteroid clicked: ${asteroidName}`);
    
    // Create and dispatch a custom event
    const asteroidClickEvent = new CustomEvent('asteroidClicked', {
        detail: { asteroidName: asteroidName }
    });
    
    document.dispatchEvent(asteroidClickEvent);
}

// Initial load of asteroids
fetchAsteroids();

