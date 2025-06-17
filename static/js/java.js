
    const canvas = document.getElementById('threejs-canvas');
    const popup = document.getElementById('popup');



    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 4500);
    camera.position.z = 100;

    const sun = new THREE.AmbientLight(0xffffff, 1);
    scene.add(sun);



    const planetData = {
        "Mercury": {
            name: "Mercury",
            description: "The smallest planet in our solar system and the closest to the Sun.",
            distanceFromSun: "57.9 million kilometers (0.39 AU)",  // Distance from the Sun
            radius: "2,439.7 kilometers",  // Radius of Mercury
            atmosphereComposition: "Oxygen, sodium, hydrogen, helium, potassium",  // Atmospheric composition
            surfaceTemperatureRange: "-173°C to 427°C",  // Temperature range
            orbitalPeriod: "88 Earth days",  // Orbital period
            moons: "0",  // Number of moons
            age: "Approximately 4.5 billion years"  // Age of the planet
        },
        "Venus": {
            name: "Venus",
            description: "The second planet from the Sun, often referred to as Earth's twin due to its similar size.",
            distanceFromSun: "108.2 million kilometers (0.72 AU)",  // Distance from the Sun
            radius: "6,051.8 kilometers",  // Radius of Venus
            atmosphereComposition: "Carbon dioxide (96.5%), Nitrogen (3.5%), and trace gases",  // Atmospheric composition
            surfaceTemperatureRange: "462°C (constant)",  // Temperature range
            orbitalPeriod: "225 Earth days",  // Orbital period
            moons: "0",  // Number of moons
            age: "Approximately 4.5 billion years"  // Age of the planet
        },
        "Earth": {
            name: "Earth",
            description: "The third planet from the Sun and the only astronomical object known to harbor life.",
            distanceFromSun: "149.6 million kilometers (1 AU)",  // Distance from the Sun
            radius: "6,371 kilometers",  // Radius of Earth
            atmosphereComposition: "Nitrogen (78%), Oxygen (21%), and other gases (1%)",  // Atmospheric composition
            surfaceTemperatureRange: "-88°C to 58°C",  // Temperature range
            orbitalPeriod: "365.25 days",  // Orbital period
            moons: "1",  // Number of moons
            age: "Approximately 4.54 billion years"  // Age of the planet
        },
        "Mars": {
            name: "Mars",
            description: "The fourth planet from the Sun and the second-smallest planet in the Solar System, often referred to as the 'Red Planet'.",
            distanceFromSun: "227.9 million kilometers (1.52 AU)",  // Distance from the Sun
            radius: "3,389.5 kilometers",  // Radius of Mars
            atmosphereComposition: "Carbon dioxide (95.3%), Nitrogen (2.7%), Argon (1.6%), Oxygen (0.13%)",  // Atmospheric composition
            surfaceTemperatureRange: "-125°C to 20°C",  // Temperature range
            orbitalPeriod: "687 Earth days",  // Orbital period
            moons: "2 (Phobos and Deimos)",  // Number of moons
            age: "Approximately 4.6 billion years"  // Age of the planet
        },
        "Jupiter": {
            name: "Jupiter",
            description: "The largest planet in our solar system and a gas giant with a Great Red Spot.",
            distanceFromSun: "778.5 million kilometers (5.20 AU)",  // Distance from the Sun
            radius: "69,911 kilometers",  // Radius of Jupiter
            atmosphereComposition: "Hydrogen (90%), Helium (10%), with trace amounts of methane, water vapor, ammonia, and other compounds.",  // Atmospheric composition
            surfaceTemperatureRange: "-145°C",  // Average temperature
            orbitalPeriod: "11.86 Earth years",  // Orbital period
            moons: "79 (including the four largest: Io, Europa, Ganymede, Callisto)",  // Number of moons
            age: "Approximately 4.5 billion years"  // Age of the planet
        },
        "Saturn": {
            name: "Saturn",
            description: "Known for its prominent ring system, Saturn is the second-largest planet in our solar system.",
            distanceFromSun: "1.43 billion kilometers (9.58 AU)",  // Distance from the Sun
            radius: "58,232 kilometers",  // Radius of Saturn
            atmosphereComposition: "Hydrogen (96.3%), Helium (3.25%), and trace amounts of methane and ammonia.",  // Atmospheric composition
            surfaceTemperatureRange: "-178°C",  // Average temperature
            orbitalPeriod: "29.46 Earth years",  // Orbital period
            moons: "83 (including Titan)",  // Number of moons
            age: "Approximately 4.5 billion years"  // Age of the planet
        },
        "Uranus": {
            name: "Uranus",
            description: "An ice giant with a unique tilt, Uranus has a faint ring system and many moons.",
            distanceFromSun: "2.87 billion kilometers (19.22 AU)",  // Distance from the Sun
            radius: "25,362 kilometers",  // Radius of Uranus
            atmosphereComposition: "Hydrogen (83%), Helium (15%), and Methane (2%), which gives it a blue color.",  // Atmospheric composition
            surfaceTemperatureRange: "-224°C",  // Average temperature
            orbitalPeriod: "84 Earth years",  // Orbital period
            moons: "27 (including Miranda, Ariel, Umbriel, Titania, and Oberon)",  // Number of moons
            age: "Approximately 4.5 billion years"  // Age of the planet
        },
        "Neptune": {
            name: "Neptune",
            description: "The furthest planet from the Sun, Neptune is known for its striking blue color and strong winds.",
            distanceFromSun: "4.50 billion kilometers (30.07 AU)",  // Distance from the Sun
            radius: "24,622 kilometers",  // Radius of Neptune
            atmosphereComposition: "Hydrogen (80%), Helium (19%), and Methane (1%), contributing to its blue hue.",  // Atmospheric composition
            surfaceTemperatureRange: "-214°C",  // Average temperature
            orbitalPeriod: "165 Earth years",  // Orbital period
            moons: "14 (including Triton)",  // Number of moons
            age: "Approximately 4.5 billion years"  // Age of the planet
        },
        "realMoon": {
            name: "Moon",
            description: "Earth's only natural satellite and the fifth largest moon in the Solar System.",
            distanceFromSun: "Average distance from Earth: 384,400 kilometers",  // Distance from the Sun
            radius: "1,737.4 kilometers",  // Radius of the Moon
            atmosphereComposition: "Extremely thin atmosphere (essentially a vacuum)",  // Atmospheric composition
            surfaceTemperatureRange: "-233°C to 123°C",  // Temperature range
            orbitalPeriod: "27.3 days",  // Orbital period
            moons: "0",  // Number of moons (as a moon itself)
            age: "Approximately 4.5 billion years"  // Age of the moon
        },
        "Pluto": {
            name: "Pluto",
            description: "Once considered the ninth planet, Pluto is now classified as a dwarf planet. It is part of the Kuiper Belt, a region of icy bodies beyond Neptune.",
            distanceFromSun: "5.9 billion kilometers (on average)",  // Distance from the Sun
            radius: "1,188 kilometers",  // Radius of Pluto
            atmosphereComposition: "Nitrogen (90%), Methane (9%), Carbon Monoxide (trace amounts)",  // Atmospheric composition
            surfaceTemperatureRange: "-229°C",  // Average temperature
            orbitalPeriod: "248 Earth years",  // Orbital period
            moons: "5 (including Charon, which is almost half the size of Pluto)",  // Number of moons
            age: "Approximately 4.5 billion years"  // Age of the dwarf planet
        }
    };



    const planetPlot = {
        "Mercury": {
            name: "Mercury",
            description: "Mercury has a surface temperature range of 430°C during the day to -180°C at night, with no atmosphere to retain heat.",
            parameter1: 'Normal Map',
            parameter2: 'Thermal Map',
            parameter3: 'Topology Map'
        },
        "Venus": {
            name: "Venus",
            description: "Venus has an average surface temperature of about 462°C due to a thick atmosphere rich in carbon dioxide, creating a strong greenhouse effect.",
            parameter1: 'Normal Map',
            parameter2: 'Thermal Map',
            parameter3: 'Topology Map'
        },
        "Earth": {
            name: "Earth",
            description: "Earth has a surface temperature range of -88 to 58°C and is the only planet known to support life, with over 70% of its surface covered by water.",
            parameter1: 'Normal Map',
            parameter2: 'Thermal Map',
            parameter3: 'Topology Map'
        },
        "Mars": {
            name: "Mars",
            description: "Mars has an average temperature of -63°C, with the largest dust storms in the Solar System and evidence of past water flows.",
            parameter1: 'Normal Map',
            parameter2: 'Thermal Map',
            parameter3: 'Topology Map'
        },
        "Jupiter": {
            name: "Jupiter",
            description: "Jupiter has a mass that is 318 times that of Earth, and it possesses the strongest magnetic field of all the planets in the Solar System.",
            parameter1: 'Normal Map',
            parameter2: 'Thermal Map',
            parameter3: 'Topology Map'
        },
        "Saturn": {
            name: "Saturn",
            description: "Saturn is famous for its rings, which are composed mainly of ice particles, and has a rotation period of about 10.7 hours.",
            parameter1: 'Normal Map',
            parameter2: 'Thermal Map',
            parameter3: 'Topology Map'
        },
        "Uranus": {
            name: "Uranus",
            description: "Uranus has a unique tilt of about 98 degrees, resulting in extreme seasonal variations and a faint ring system.",
            parameter1: 'Normal Map',
            parameter2: 'Thermal Map',
            parameter3: 'Topology Map'
        },
        "Neptune": {
            name: "Neptune",
            description: "Neptune has the strongest winds in the Solar System, reaching speeds of up to 2,100 km/h, and is known for its deep blue color.",
            parameter1: 'Normal Map',
            parameter2: 'Thermal Map',
            parameter3: 'Topology Map'
        },
        "Pluto": {
            name: "Pluto",
            description: "Pluto has a diameter of about 2,377 km and a highly elliptical orbit that takes it about 248 years to complete one revolution around the Sun.",
            parameter1: 'Normal Map',
            parameter2: 'Thermal Map',
            parameter3: 'Topology Map'
        },
        "Moon": {
            name: "Moon",
            description: "Earth's Moon has a diameter of about 3,474 km and influences Earth's tides, orbiting at an average distance of 384,400 km.",
            parameter1: 'Normal Map',
            parameter2: 'Thermal Map',
            parameter3: 'Topology Map'
        }
    };
    
    // Create a WebGL renderer and link it to the existing canvas
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Enable OrbitControls for camera interaction
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enabled = true; 

    let useOrbitControls = true;

    // Load the starry sky background texture
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 700; // Number of stars
    const starPositions = new Float32Array(starCount * 3); // X, Y, Z for each star

    for (let i = 0; i < starCount * 3; i++) {
        starPositions[i] = (Math.random() - 0.5) * 6000; // Spread stars randomly in space
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.7 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);


    // Load the texture file before loading the GLTF model
    const textureLoader = new THREE.TextureLoader();


    // Draco loader for compressed models
    // const dracoLoader = new THREE.DRACOLoader();
    // dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/'); // Draco loader path

    // GLTF loader with Draco compression enabled
    const gltfLoader = new THREE.GLTFLoader();
    // gltfLoader.setDRACOLoader(dracoLoader);


    // Define the orbit logic for the moons
    const orbitRadius1 = 58; // Radius for mercury
    const orbitRadius2 = 108; 
    const orbitRadius3 = 150;
    const orbitRadius4 = 275;
    const orbitRadius5 = 778;
    const orbitRadius6 = 1430;
    const orbitRadius7 = 2870;
    const orbitRadius8 = 4500;
    const orbitRadius9 = 5900;
    const orbitRadius0 = 6000;
    const orbitRadiusm = 25;

let orbitAngle1 = 1.0472; // Mercury (π/3)
let orbitAngle2 = 0.7854; // Venus (π/4)
let orbitAngle3 = 0;      // Earth (0)
let orbitAngle4 = -0.7854; // Mars (-π/4)
let orbitAngle5 = 0.5236; // Jupiter (π/6)
let orbitAngle6 = 1.5708; // Saturn (π/2)
let orbitAngle7 = -1.0472; // Uranus (-π/3)
let orbitAngle8 = -1.5708; // Neptune (-π/2)
let orbitAngle9 = 0.5236; // Pluto (π/6)
let orbitAngle0 = 0;      // For a specific point (if needed)
let orbitAnglem = 0;      // Moon (as it orbits Earth)



    let solar, mercury, venus, earth, mars, astbelt, Jupiter, saturn, urnaus, neptune, pluto ,realMoon;
    let selectedPlanet = null; 


    const centerScale = 15;
    const m1 = 0.6;
    const m2 = 0.6;
    const m3 = 1.3;
    const m4 = 0.8;
    const m5 = 9;
    const m6 = 0.9; 
    const m7 = 1.5;
    const m8 = 1.8;
    const m9 = 2;
    const mm = 0.1

    //============== Tectures ===================

    let mercuryTextures = [
        'static/assets/planetImages/me1.jpg',
        'static/assets/planetImages/mehp.jpeg',
        'static/assets/planetImages/metp.jpg'
    ];

    let venustexture = [
        'static/assets/planetImages/v1.jpg',
        'static/assets/planetImages/vehp.png',
        'static/assets/planetImages/vetp.jpg'
        
    ];

    let earthtexture = [
        'static/assets/planetImages/e1.jpg',
        'static/assets/planetImages/eahp.jpeg',
        'static/assets/planetImages/e3.jpg'
    ];

    let marstexture = [
        'static/assets/planetImages/ma1.jpg',
        'static/assets/planetImages/mahp.jpg',
        'static/assets/planetImages/vt.jpg'
    ];

    let Jupitertexture = [
        'static/assets/planetImages/j1.jpg',
        'static/assets/planetImages/jphp.png',
        'static/assets/planetImages/vt.jpg'
    ];

    let saturntexture = [
        'static/assets/planetImages/s1.jpg',
        'static/assets/planetImages/sahp.png',
        'static/assets/planetImages/vt.jpg'
    ];

    let urnaustexture = [
        'static/assets/planetImages/v1.jpg',
        'static/assets/planetImages/urhp.png',
        'static/assets/planetImages/vt.jpg'
    ];

    let neptunetexture = [
        'static/assets/planetImages/v1.jpg',
        'static/assets/planetImages/nphp.jpg',
        'static/assets/planetImages/vt.jpg'
    ];

    let astexture = [
        'static/assets/planetImages/p1.jpg',
        'static/assets/planetImages/p2.jpg'
    ]


    let ctim = 0; 
    let ctiv = 0; 
    let ctie = 0;
    let ctima = 0;
    let ctij = 0;
    let ctis = 0;
    let ctin = 0;
    let ctiu = 0;
    let ctip = 0;
    let ctias = 0;
    let findex;

    const objectsWithLabels = [];

    function createNameTag(object, name) {
        const labelDiv = document.createElement('div');
        labelDiv.className = 'name-tag'; // Add a class for styling
        labelDiv.textContent = name;
        document.getElementById('labels-container').appendChild(labelDiv);

        return labelDiv;
    }

    function createAllNameTags() {
        const planets = [
            { object: mercury, name: "Mercury" },
            { object: venus, name: "Venus" },
            { object: earth, name: "Earth" },
            { object: mars, name: "Mars" },
            { object: Jupiter, name: "Jupiter" },
            { object: saturn, name: "Saturn" },
            { object: urnaus, name: "Uranus" },
            { object: neptune, name: "Neptune" },
            { object: realMoon, name: "Moon" }
        ];

        planets.forEach(planet => {
            if (planet.object) {
                const nameTag = createNameTag(planet.object, planet.name);
                objectsWithLabels.push({ object: planet.object, labelDiv: nameTag });
            } else {
                console.log(`${planet.name} object not found`);
            }
        });
        console.log("Finished creating name tags");
    }

    function updateNameTags() {
        objectsWithLabels.forEach(({ object, labelDiv }) => {
            if (object && object.position) {
                const vector = object.position.clone(); // Clone the object's position
                vector.project(camera); // Project 3D position to 2D screen coordinates

                const widthHalf = window.innerWidth / 2;
                const heightHalf = window.innerHeight / 2;

                const x = (vector.x * widthHalf) + widthHalf;
                const y = -(vector.y * heightHalf) + heightHalf*1.3;

                labelDiv.style.left = `${x}px`;  // Set the x-position
                labelDiv.style.top = `${y}px`;   // Set the y-position

                // Hide labels that are behind the camera or far away
                if (vector.z > 1 || vector.z < -1) {
                    labelDiv.style.display = 'none';
                } else {
                    labelDiv.style.display = 'block';
                }
            }
        });
    }

    function createAsteroidBelt(scene) {
        const asteroidCount = 830; // Number of asteroids
        const innerRadius = 450;   // Inner radius of the asteroid belt
        const outerRadius = 500;   // Outer radius of the asteroid belt
        const minAsteroidSize = 0.03; // Minimum size of an asteroid
        const maxAsteroidSize = 1.5; // Maximum size of an asteroid

        // Texture for the asteroids (optional, you can use a texture or color)
        const textureLoader = new THREE.TextureLoader();
        const asteroidTexture = textureLoader.load('static/assets/planetImages/ast1.jpg');

        // Loop to create asteroids
        for (let i = 0; i < asteroidCount; i++) {
            // Randomly generate a radius for the asteroid's orbit
            const radius = THREE.MathUtils.randFloat(innerRadius, outerRadius);

            // Randomly generate an angle (in radians) around the Sun
            const angle = THREE.MathUtils.randFloat(0, Math.PI * 2);

            // Calculate the asteroid's position
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const y = THREE.MathUtils.randFloat(-30, 30); // Some randomness in the Y-axis for more natural distribution

            // Create a geometry for each asteroid (e.g., SphereGeometry)
            const asteroidSize = THREE.MathUtils.randFloat(minAsteroidSize, maxAsteroidSize);
            const geometry = new THREE.SphereGeometry(asteroidSize, 8, 8); // Simple spherical asteroid

            // Create a material for the asteroid
            const material = new THREE.MeshStandardMaterial({
                map: asteroidTexture, // Use texture or just set a color
                roughness: 0.8, // Make the surface rough for a rocky appearance
            });

            // Create the asteroid mesh
            const asteroid = new THREE.Mesh(geometry, material);

            // Set the asteroid's position
            
            asteroid.position.set(x, y, z);

            // Randomly rotate the asteroid for variation
            asteroid.rotation.x = THREE.MathUtils.randFloat(0, Math.PI);
            asteroid.rotation.y = THREE.MathUtils.randFloat(0, Math.PI);

            // Add the asteroid to the scene
            scene.add(asteroid);
        }
    }

    createAsteroidBelt(scene);


    // Function to create an orbit/trajectory for a planet
    function createOrbit(radius, segments, color) {
        const orbitGeometry = new THREE.BufferGeometry();
        const orbitMaterial = new THREE.LineBasicMaterial({ color: color });

        // Define vertices for the orbit
        const vertices = [];
        for (let i = 0; i <= segments; i++) {
            const theta = (i / segments) * Math.PI * 2;
            const x = radius * Math.cos(theta);
            const z = radius * Math.sin(theta);
            vertices.push(x, 0, z); // y = 0, so it's flat
        }

        // Convert vertices to a Float32Array and assign them to the geometry
        orbitGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

        // Create the orbit line from the geometry and material
        const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);

        return orbitLine;
    }

    // Add orbits for each planet
    const mercuryOrbit = createOrbit(orbitRadius1, 64, 0x909090); // Mercury orbit - Dark Gray
    scene.add(mercuryOrbit);

    const venusOrbit = createOrbit(orbitRadius2, 64, 0xe3c565); // Venus orbit - Pale Yellow
    scene.add(venusOrbit);

    const earthOrbit = createOrbit(orbitRadius3, 64, 0x2a6bd4); // Earth orbit - Blue
    scene.add(earthOrbit);

    const marsOrbit = createOrbit(orbitRadius4, 64, 0xb22222); // Mars orbit - Red
    scene.add(marsOrbit);

    const jupiterOrbit = createOrbit(orbitRadius5, 64, 0xd69e31); // Jupiter orbit - Orange
    scene.add(jupiterOrbit);

    const saturnOrbit = createOrbit(orbitRadius6, 64, 0xe5c07b); // Saturn orbit - Pale Gold
    scene.add(saturnOrbit);

    const uranusOrbit = createOrbit(orbitRadius7, 64, 0x82cafc); // Uranus orbit - Light Cyan
    scene.add(uranusOrbit);

    const neptuneOrbit = createOrbit(orbitRadius8, 64, 0x2e3fd8); // Neptune orbit - Deep Blue
    scene.add(neptuneOrbit);

    const plutoOrbit = createOrbit(orbitRadius9, 64, 0xd1c8c4); // Pluto orbit - Light Brown
    scene.add(plutoOrbit);



    function createHitbox(planet, scale) {
        const hitboxGeometry = new THREE.SphereGeometry(5, 6, 6); // Larger radius for easier selection
        const hitboxMaterial = new THREE.MeshBasicMaterial({ visible: false });
        const hitbox = new THREE.Mesh(hitboxGeometry, hitboxMaterial);
        hitbox.scale.set(scale, scale, scale);
        hitbox.name = planet.name + "_hitbox";
        
        planet.add(hitbox); // Add the hitbox as a child of the planet
    }


    // Load the Sun model (or Jupiter as placeholder for Sun) and add it to the scene
    gltfLoader.load('static/assets/Sun.glb', function(gltf) {
        solar = gltf.scene;
        solar.scale.set(centerScale, centerScale, centerScale);
        solar.name = 'Sun'; // Name the sun for raycasting
        scene.add(solar);


        createHitbox(solar, 2);
    

        // Ensure all child meshes cast and receive shadows
        solar.traverse(function(child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                child.material.emissive = new THREE.Color(0xFFFFFF);  // Yellow glow
                child.material.emissiveIntensity = 2;  // Adjust intensity
                child.material.needsUpdate = true;
            }
        });

        const sunLight = new THREE.PointLight(0xffffff, 4.5, 10000); 
        sunLight.position.set(0, 0, 0); 
        sunLight.castShadow = true;
        solar.add(sunLight);

    }, undefined, function(error) {
        console.error('An error occurred while loading the Sun model:', error);
    });



    gltfLoader.load('static/assets/plain.glb', function(gltf) {
        mercury = gltf.scene;
        mercury.scale.set(m1, m1, m1);
        mercury.position.set(orbitRadius1, 0, 0);
        mercury.name = 'Mercury'; 
        scene.add(mercury);

        // Traverse the loaded model to find mesh nodes and apply the texture
        setplanetTexture(mercury,mercuryTextures,ctim);

        createHitbox(mercury, 5);  // Function to create a hitbox
        console.log("Mercury loaded successfully");
    }, undefined, function(error) {
        console.error('An error occurred while loading Mercury:', error);
    });



    gltfLoader.load('static/assets/plain.glb', function(gltf) {
        venus = gltf.scene;
        venus.scale.set(m2, m2, m2);
        venus.position.set(orbitRadius2, 0, 0); // Set Venus's initial position
        venus.name = 'Venus'; 
        scene.add(venus);
        setplanetTexture(venus,venustexture,ctiv);
        createHitbox(venus, 5);

    }, undefined, function(error) {
        console.error('An error occurred while loading Venus:', error);
    });

    gltfLoader.load('static/assets/plain.glb', function(gltf) {
        earth = gltf.scene;
        earth.scale.set(m3, m3, m3);
        earth.position.set(orbitRadius3, 0, 0); // Set Earth's initial position
        earth.name = 'Earth'; 
        scene.add(earth);
        setplanetTexture(earth,earthtexture,ctim);
        createHitbox(earth, 5);
        
    }, undefined, function(error) {
        console.error('An error occurred while loading Earth:', error);
    });

    gltfLoader.load('static/assets/moon.glb', function(gltf) {
        realMoon = gltf.scene;
        realMoon.scale.set(mm, mm, mm);
        realMoon.position.set(orbitRadiusm, 0, 0); // Set Neptune's initial position
        realMoon.name = 'realMoon'; 
        scene.add(realMoon);
        createHitbox(realMoon, 5);

    }, undefined, function(error) {
        console.error('An error occurred while loading Neptune:', error);
    });

    gltfLoader.load('static/assets/plain.glb', function(gltf) {
        mars = gltf.scene;
        mars.scale.set(m4, m4, m4);
        mars.position.set(orbitRadius4, 0, 0); // Set Mars's initial position
        mars.name = 'Mars'; 
        scene.add(mars);
        setplanetTexture(mars,marstexture,ctima);
        createHitbox(mars, 5);

        console.log("mars loaded successfully");
    }, undefined, function(error) {
        console.error('An error occurred while loading Mars:', error);
    });

    gltfLoader.load('static/assets/plain.glb', function(gltf) {
        astbelt = gltf.scene;
        astbelt.scale.set(m5, m5, m5);
        astbelt.position.set(orbitRadius0, 0, 0); // Set Asteroid Belt's initial position
        astbelt.name = 'Asteroid Belt'; 
        scene.add(astbelt);
        setplanetTexture(astbelt,astexture,ctias);
        createHitbox(astbelt, 5);

        console.log("astbelt loaded successfully");
    }, undefined, function(error) {
        console.error('An error occurred while loading Asteroid Belt:', error);
    });

    gltfLoader.load('static/assets/plain.glb', function(gltf) {
        Jupiter = gltf.scene;
        Jupiter.scale.set(m6, m6, m6);
        Jupiter.position.set(orbitRadius5, 0, 0); // Set Jupiter's initial position
        Jupiter.name = 'Jupiter'; 
        scene.add(Jupiter);
        setplanetTexture(Jupiter,Jupitertexture,ctij);
        createHitbox(Jupiter, 5);

    }, undefined, function(error) {
        console.error('An error occurred while loading Jupiter:', error);
    });

    gltfLoader.load('static/assets/plain.glb', function(gltf) {
        saturn = gltf.scene;
        saturn.scale.set(m7, m7, m7);
        saturn.position.set(orbitRadius6, 0, 0); // Set Saturn's initial position
        saturn.name = 'Saturn'; 
        scene.add(saturn);
        setplanetTexture(saturn,saturntexture,ctis);
        createHitbox(saturn, 5);

    }, undefined, function(error) {
        console.error('An error occurred while loading Saturn:', error);
    });

    gltfLoader.load('static/assets/plain.glb', function(gltf) {
        urnaus = gltf.scene;
        urnaus.scale.set(m8, m8, m8);
        urnaus.position.set(orbitRadius7, 0, 0); // Set Uranus's initial position
        urnaus.name = 'Uranus'; 
        scene.add(urnaus);
        setplanetTexture(urnaus,urnaustexture,ctiu);
        createHitbox(urnaus, 5);

    }, undefined, function(error) {
        console.error('An error occurred while loading Uranus:', error);
    });

    gltfLoader.load('static/assets/plain.glb', function(gltf) {
        neptune = gltf.scene;
        neptune.scale.set(m9, m9, m9);
        neptune.position.set(orbitRadius8, 0, 0); // Set Neptune's initial position
        neptune.name = 'Neptune'; 
        scene.add(neptune);
        setplanetTexture(neptune,neptunetexture,ctin);
        createHitbox(neptune, 5);
        createAllNameTags();
        
    }, undefined, function(error) {
        console.error('An error occurred while loading Neptune:', error);
    });


    function animateAsteroidBelt(scene) {
        scene.children.forEach((asteroid) => {
            if (asteroid.isMesh) {
                // Rotate each asteroid around the Y-axis (the Sun's center)
                asteroid.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.001); // Adjust speed of rotation
            }
        });
    }


    // Track which keys are currently pressed
    let keysPressed = {};

    // Event listeners for keyboard inputs
    window.addEventListener('keydown', function(event) {
        keysPressed[event.key] = true;
    });

    window.addEventListener('keyup', function(event) {
        keysPressed[event.key] = false;
    });

    var clock = new THREE.Clock();

    const moveSpeed = 100;   // Speed of movement
    const panSpeed = 50;     // Speed of panning
    const rotateSpeed = Math.PI / 2; // Speed of rotation (in radians per second)

    function updateCameraMovement(delta) {
        const moveDistance = moveSpeed * delta; // Movement per frame
        const panDistance = panSpeed * delta;   // Panning distance per frame
        const rotateAngle = rotateSpeed * delta; // Rotation per frame

        // Camera direction for forward/backward movement
        const direction = new THREE.Vector3();
        camera.getWorldDirection(direction);
        
        if (useOrbitControls) {
            // Move the camera based on the keys pressed
            

            if (keysPressed["w"] || keysPressed["W"]) {
                camera.translateZ(-panDistance); // Pan forward
            }
            if (keysPressed["s"] || keysPressed["S"]) {
                camera.translateZ(panDistance);  // Pan backward
            }
            if (keysPressed["a"] || keysPressed["A"]) {
                camera.translateX(-panDistance); // Pan left
            }
            if (keysPressed["d"] || keysPressed["D"]) {
                camera.translateX(panDistance);  // Pan right
            }

            if (keysPressed["q"] || keysPressed["Q"]) {
                camera.translateY(panDistance); // Pan up
            }
            if (keysPressed["e"] || keysPressed["E"]) {
                camera.translateY(-panDistance); // Pan down
            }

            // Camera rotation using arrow keys
            if (keysPressed["ArrowLeft"]) {
                camera.rotateY(rotateAngle); // Rotate left
            }
            if (keysPressed["ArrowRight"]) {
                camera.rotateY(-rotateAngle); // Rotate right
            }
            if (keysPressed["ArrowUp"]) {
                camera.rotateX(rotateAngle); // Rotate up
            }
            if (keysPressed["ArrowDown"]) {
                camera.rotateX(-rotateAngle); // Rotate down
            }
        } else {


            if (keysPressed["w"] || keysPressed["W"]) {
                camera.position.add(direction.multiplyScalar(moveDistance)); // Move forward
            }
            if (keysPressed["s"] || keysPressed["S"]) {
                camera.position.add(direction.multiplyScalar(-moveDistance)); // Move backward
            }
            if (keysPressed["a"] || keysPressed["A"]) {
                camera.translateX(-moveDistance); // Move left (strafe)
            }
            if (keysPressed["d"] || keysPressed["D"]) {
                camera.translateX(moveDistance); // Move right (strafe)

            }

            // Optional: move up/down using Q and E keys (for flight-style movement)
            if (keysPressed["q"] || keysPressed["Q"]) {
                camera.translateY(moveDistance); // Move up
            }
            if (keysPressed["e"] || keysPressed["E"]) {
                camera.translateY(-moveDistance); // Move down
            }

            // Handle camera rotation
            if (keysPressed["ArrowLeft"]) {
                camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), rotateAngle); // Rotate left (yaw)
            }
            if (keysPressed["ArrowRight"]) {
                camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), -rotateAngle); // Rotate right (yaw)
            }
            if (keysPressed["ArrowUp"]) {
                camera.rotateOnAxis(new THREE.Vector3(1, 0, 0), rotateAngle); // Rotate up (pitch)
            }
            if (keysPressed["ArrowDown"]) {
                camera.rotateOnAxis(new THREE.Vector3(1, 0, 0), -rotateAngle); // Rotate down (pitch)
            }

        }

        if (useOrbitControls) {
            controls.update(); // Update OrbitControls when enabled
        }
    }

    let currentAsteroidMesh = null;

    function plotAsteroidRandomly(asteroidName) {
        const textureLoader = new THREE.TextureLoader();
    
        // Create a random position between Uranus (2870 units) and Neptune (4500 units)
        const minDistance = 2870; // Uranus
        const maxDistance = 4500; // Neptune
        const radius = THREE.MathUtils.randFloat(minDistance, maxDistance);
    
        // Randomize the angle
        const angle = THREE.MathUtils.randFloat(0, Math.PI * 2);
    
        // Calculate the asteroid's position
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = THREE.MathUtils.randFloat(-30, 30); // A bit of random height variation
    
        // Create geometry and material for the asteroid
        const geometry = new THREE.SphereGeometry(15, 16, 16); // Asteroid size
        const material = new THREE.MeshStandardMaterial({
            map: textureLoader.load('static/assets/planetImages/ast1.jpg'),
            roughness: 0.8
        });
    
        // Create the asteroid mesh
        const asteroidMesh = new THREE.Mesh(geometry, material);
        asteroidMesh.position.set(x, y, z); // Set the position of the asteroid mesh
        asteroidMesh.name = asteroidName; // Set the name of the asteroid for tracking purposes
    
        // Add the asteroid mesh to the scene
        scene.add(asteroidMesh);
    
        console.log(`Asteroid Position: ${asteroidMesh.position.x}, ${asteroidMesh.position.y}, ${asteroidMesh.position.z}`);
    
        return asteroidMesh; // Return the asteroid so it can be set as selectedPlanet
    }


    function handleAsteroidSelection(asteroidName) {
        console.log(`Asteroid clicked: ${asteroidName}`);
    
        // First, remove the previous asteroid if it exists
        if (currentAsteroidMesh) {
            scene.remove(currentAsteroidMesh); // Remove the old asteroid from the scene
            currentAsteroidMesh.geometry.dispose(); // Dispose of the geometry
            currentAsteroidMesh.material.dispose(); // Dispose of the material
            currentAsteroidMesh = null; // Clear the reference
        }
    
        // Create and plot a new asteroid randomly between Uranus and Neptune
        currentAsteroidMesh = plotAsteroidRandomly(asteroidName);
        selectedPlanet = currentAsteroidMesh;
        showAsteroidInfo(asteroidName);
    }
    
    // Function to show asteroid information
    function showAsteroidInfo(asteroidName) {
        console.log(`Showing info for asteroid: ${asteroidName}`);
        if (selectedPlanet) {
            const offset = new THREE.Vector3(0, 7, -40); // Offset for third-person view
            const targetPosition = selectedPlanet.position.clone().add(offset);
            camera.position.lerp(targetPosition, 0.1); // Smooth movement
            controls.target.copy(selectedPlanet.position); // Focus the camera on the planet or asteroid
        } else {
            controls.target.set(0, 0, 0); // Reset controls target to origin when nothing is selected
        }
    }
    


    // Main update function (called every frame)
    function update() {
        const delta = clock.getDelta(); // Time between frames

        // Update camera movement based on keyboard input
        updateCameraMovement(delta);

        // Other updates (e.g., planet orbits)
        // stats.update();
        if (earth) {
            earth.rotation.y += 0.004; // Rotate around the Y-axis
        }
        if (mercury) {
            mercury.rotation.y += 0.002; // Rotate Mercury
        }
        if (earth) {
            earth.rotation.y += 0.004; // Rotate around the Y-axis
        }
        if (mercury) {
            mercury.rotation.y += 0.002; // Rotate Mercury
        }
        if (venus) {
            venus.rotation.y += 0.002; // Rotate Venus
        }
        if (mars) {
            mars.rotation.y += 0.0004; // Rotate Mars
        }
    }


    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // getting 3d mouse coordinates
    function get3DPointFromMouse(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(scene, true); 
        if (intersects.length > 0) {
            return intersects[0].point;
        } else {
            return null;
        }
    }


    function showPlanetInfo(planetName) {
        const planetInfo = planetData[planetName];
        if (planetInfo) {
            // Set the planet name and description
            document.getElementById('planetName').textContent = planetInfo.name;
            document.getElementById('planetDescription').textContent = planetInfo.description;

            // Set the individual parameters (facts)
            document.getElementById('distanceFromSun').textContent = `Distance from Sun: ${planetInfo.distanceFromSun}`;
            document.getElementById('radius').textContent = `Radius: ${planetInfo.radius}`;
            document.getElementById('atmosphereComposition').textContent = `Atmosphere: ${planetInfo.atmosphereComposition}`;
            document.getElementById('surfaceTemperatureRange').textContent = `Temperature Range: ${planetInfo.surfaceTemperatureRange}`;
            document.getElementById('orbitalPeriod').textContent = `Orbital Period: ${planetInfo.orbitalPeriod}`;
            document.getElementById('moons').textContent = `Moons: ${planetInfo.moons}`;
            document.getElementById('age').textContent = `Age: ${planetInfo.age}`;

            // Show the planet information container
            document.getElementById('planetInfo').style.display = 'block'; // Display the info container
        }
    }


    function showPlanetPlot(planetName) {
        const planetPlotdata = planetPlot[planetName];
        if (planetPlotdata) {
            document.getElementById('planetName1').textContent = planetPlotdata.name;
            document.getElementById('planetDescription1').textContent = planetPlotdata.description;
            document.getElementById('parameters11').textContent= planetPlotdata.parameter1;
            document.getElementById('parameters21').textContent= planetPlotdata.parameter2;
            document.getElementById('parameters31').textContent= planetPlotdata.parameter3;
            document.getElementById('planetPlotdata').style.display = 'block'; // Show the info container
            
        }
    }

    // Function to hide the planet info
    function hidePlanetInfo() {
        document.getElementById('planetInfo').style.display = 'none'; // Hide the info container
    }

    function hidePlanetPlot() {
        document.getElementById('planetPlotdata').style.display = 'none'; // Hide the info container
    }


    // Add ambient light for general illumination
    const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft white light
    scene.add(ambientLight);

    // Enable shadow mapping
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Main animation loop
    function animate() {

        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        stars.rotation.x += 0.0005;
        stars.rotation.y += 0.0005;

        
        // Update Mercury's orbit around the sun
        if (solar && mercury) {
            orbitAngle1 += 0.002; // Adjust speed as needed
            mercury.position.x = solar.position.x + orbitRadius1 * Math.cos(orbitAngle1);
            mercury.position.z = solar.position.z + orbitRadius1 * Math.sin(orbitAngle1);
        }

        // Update Venus's orbit around the sun
        if (solar && venus) {
            orbitAngle2 += 0.005; // Adjust speed as needed
            venus.position.x = solar.position.x + orbitRadius2 * Math.cos(orbitAngle2);
            venus.position.z = solar.position.z + orbitRadius2 * Math.sin(orbitAngle2);
        }

        if (solar && earth) {
            orbitAngle3 += 0.0007; // Adjust speed as needed
            earth.position.x = solar.position.x + orbitRadius3 * Math.cos(orbitAngle3);
            earth.position.z = solar.position.z + orbitRadius3 * Math.sin(orbitAngle3);
        }

        if (earth && realMoon) {
            orbitAnglem += 0.07; // Adjust speed as needed
            realMoon.position.x = earth.position.x + orbitRadiusm * Math.cos(orbitAnglem);
            realMoon.position.z = earth.position.z + orbitRadiusm * Math.sin(orbitAnglem);
        }

        if (solar && mars) {
            orbitAngle4 += 0.0007; // Adjust speed as needed
            mars.position.x = solar.position.x + orbitRadius4 * Math.cos(orbitAngle4);
            mars.position.z = solar.position.z + orbitRadius4 * Math.sin(orbitAngle4);
        }
        if (solar && astbelt) {
            orbitAngle0 += 0.0003; // Adjust speed as needed
            astbelt.position.x = solar.position.x + orbitRadius0 * Math.cos(orbitAngle0);
            astbelt.position.z = solar.position.z + orbitRadius0 * Math.sin(orbitAngle0);
        }
        if (solar && Jupiter) {
            orbitAngle5 += 0.0007; // Adjust speed as needed
            Jupiter.position.x = solar.position.x + orbitRadius5 * Math.cos(orbitAngle5);
            Jupiter.position.z = solar.position.z + orbitRadius5 * Math.sin(orbitAngle5);
        }
        if (solar && saturn) {
            orbitAngle6 += 0.0007; // Adjust speed as needed
            saturn.position.x = solar.position.x + orbitRadius6 * Math.cos(orbitAngle6);
            saturn.position.z = solar.position.z + orbitRadius6 * Math.sin(orbitAngle6);
        }
        if (solar && urnaus) {
            orbitAngle7 += 0.0007; // Adjust speed as needed
            urnaus.position.x = solar.position.x + orbitRadius7 * Math.cos(orbitAngle7);
            urnaus.position.z = solar.position.z + orbitRadius7 * Math.sin(orbitAngle7);
        }
        if (solar && neptune) {
            orbitAngle8 += 0.0007; // Adjust speed as needed
            neptune.position.x = solar.position.x + orbitRadius8 * Math.cos(orbitAngle8);
            neptune.position.z = solar.position.z + orbitRadius8 * Math.sin(orbitAngle8);
        }
        if (solar && pluto) {
            orbitAngle9 += 0.0007; // Adjust speed as needed
            pluto.position.x = solar.position.x + orbitRadius9 * Math.cos(orbitAngle9);
            pluto.position.z = solar.position.z + orbitRadius9 * Math.sin(orbitAngle9);
        }


        // Move the camera to follow the selected planet
        if (selectedPlanet) {
            const offset = new THREE.Vector3(0, 5, -40); // Offset for third-person view
            const targetPosition = selectedPlanet.position.clone().add(offset);
            camera.position.lerp(targetPosition, 0.1); // Smooth movement
            controls.target.copy(selectedPlanet.position); // Focus the camera on the planet or asteroid
        } else {
            controls.target.set(0, 0, 0); // Reset controls target to origin when nothing is selected
        }
        update();
        // Orbit controls target should update to ensure smooth control
        if (selectedPlanet) {
            controls.target.copy(selectedPlanet.position); // Focus on the selected planet
        }

        animateAsteroidBelt(scene);
        renderer.render(scene, camera);
        updateNameTags();
    }
    document.addEventListener('asteroidClicked', (event) => {
        const asteroidName = event.detail.asteroidName;
        // Call the function to handle asteroid selection
        if (typeof handleAsteroidSelection === 'function') {
            handleAsteroidSelection(asteroidName);
        } else {
            console.error('handleAsteroidSelection function not found');
        }
    });
    
    // Click event to remove the current asteroid if clicking outside
    window.addEventListener('click', (event) => {
        // Check if the click is not on the asteroid card
        if (!event.target.closest('.asteroid-card')) {
            console.log("Clicked outside asteroid card");
            // Remove the current asteroid if it exists
            if (currentAsteroidMesh) {
                scene.remove(currentAsteroidMesh); // Remove the old asteroid from the scene
                currentAsteroidMesh.geometry.dispose(); // Dispose of the geometry
                currentAsteroidMesh.material.dispose(); // Dispose of the material
                currentAsteroidMesh = null; // Clear the reference
            }
        }
    });
    
// ESC key to close info panels and deselect
window.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        hidePlanetInfo();
        hidePlanetPlot();
        selectedPlanet = null;
        clickedObject = null;
        showPopup("Closed planet info");
    }
});

// M key to toggle instructions bar
let instructionsVisible = false;
window.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'm') {
        instructionsVisible = !instructionsVisible;
        const bar = document.getElementById('instructionsBar');
        if (bar) bar.style.display = instructionsVisible ? 'block' : 'none';
    }
});

animate(); 



        canvas.addEventListener('wheel', (event) => {
            event.preventDefault(); // Prevent default scroll behavior
        
            const zoomSpeed = 0.5; // Adjust zoom speed here
            const zoomDirection = (event.deltaY > 0) ? 1 : -1;
        
            // Get the 3D point under the mouse cursor
            const zoomTarget = get3DPointFromMouse(event);
        
            if (zoomTarget) {
                // Calculate the direction from the camera to the zoom target
                const direction = new THREE.Vector3().subVectors(zoomTarget, camera.position).normalize();
        
                // Move the camera along the direction towards or away from the zoom target
                const distance = camera.position.distanceTo(zoomTarget);
                const newDistance = distance - zoomSpeed * zoomDirection;
                const newCameraPosition = camera.position.clone().add(direction.multiplyScalar(newDistance - distance));
        
                // Ensure the camera doesn't go through the zoom target
                if (newDistance > 0) {
                    camera.position.copy(newCameraPosition);
                }
        
                // Update orbit controls target to focus on the zoom target point
                controls.target.copy(zoomTarget);
            }
        });

    let raytoggle = true
    let clickedObject = null;
        
        
    // Raycasting to select or deselect a planet on click
    window.addEventListener('click', (event) => {
        if (!raytoggle) return;

        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(scene.children, true);

        if (intersects.length > 0) {
            clickedObject = intersects[0].object;
            let clickedPlanet;

            if (clickedObject.name.endsWith("_hitbox")) {
                clickedPlanet = clickedObject.parent;
            } else {
                clickedPlanet = clickedObject;
            }

            console.log("Clicked Object:", clickedPlanet.name);

            if (selectedPlanet === clickedPlanet) {
                selectedPlanet = null;
                showPopup(`${clickedPlanet.name} deselected`);
                hidePlanetInfo();
                hidePlanetPlot();
            } else {
                selectedPlanet = clickedPlanet;
                showPopup(`Selected: ${clickedPlanet.name}`);
                showPlanetInfo(clickedPlanet.name);
                showPlanetPlot(clickedPlanet.name);
            }
        } else {
            if (selectedPlanet) {
                selectedPlanet = null;
                clickedObject = null;
                showPopup("Deselected all planets");
                hidePlanetInfo();
                hidePlanetPlot();
            }
        }

    });


    document.getElementById('plot1').addEventListener('mouseover', function() {
        if (clickedObject && clickedObject.parent) {
            toggletexture(clickedObject.parent, 0);
        }
        raytoggle = false;
        setTimeout(() => { raytoggle = true; }, 100);
    });

    document.getElementById('plot2').addEventListener('mouseover', function() {
        if (clickedObject && clickedObject.parent) {
            toggletexture(clickedObject.parent, 1);
        }
        raytoggle = false;
        setTimeout(() => { raytoggle = true; }, 100);
    });

    document.getElementById('plot3').addEventListener('mouseover', function() {
        if (clickedObject && clickedObject.parent) {
            toggletexture(clickedObject.parent, 2);
        }
        raytoggle = false;
        setTimeout(() => { raytoggle = true; }, 100);
    });

    function toggletexture(planet, index) {
        findex = index;
        setplanetTexture(planet, getTextureMap(planet.name), findex);
    }

    function getTextureMap(planetName) {
        switch(planetName) {
            case 'Mercury':
                return mercuryTextures;
            case 'Earth':
                return earthtexture;
            // Add cases for other planets as needed
            default:
                console.warn(`No texture map defined for ${planetName}`);
                return [];
        }
    }

    function setplanetTexture(planet, tmap, index) {
        if (tmap && tmap[index]) {
            const textureLoader = new THREE.TextureLoader();
            const texture = textureLoader.load(tmap[index], () => {
                planet.traverse((node) => {
                    if (node.isMesh) {
                        node.material.map = texture;
                        node.material.needsUpdate = true;
                    }
                });
            });
        } else {
            console.warn(`Invalid texture map or index for ${planet.name}`);
        }
    }

    const movementSpeed = 0.5;
    const movement = { forward: false, backward: false, left: false, right: false };

    // Add event listener for keydown to detect ASDW key presses
    window.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'w': // Move forward
                if (!useOrbitControls) movement.forward = true;
                break;
            case 's': // Move backward
                if (!useOrbitControls) movement.backward = true;
                break;
            case 'a': // Move left
                if (!useOrbitControls) movement.left = true;
                break;
            case 'd': // Move right
                if (!useOrbitControls) movement.right = true;
                break;
            case 'f':  
                useOrbitControls = !useOrbitControls;
                controls.enabled = useOrbitControls;
                break;
        }
    });

    // Add event listener for keyup to stop movement when keys are released
    window.addEventListener('keyup', function (event) {
        switch (event.key) {
            case 'w': // Stop moving forward
                movement.forward = false;
                break;
            case 's': // Stop moving backward
                movement.backward = false;
                break;
            case 'a': // Stop moving left
                movement.left = false;
                break;
            case 'd': // Stop moving right
                movement.right = false;
                break;
        }
    });



    // Function to show popup message
    function showPopup(message) {
        popup.textContent = message;
        popup.style.display = 'block'; // Show popup
        popup.style.opacity = '1'; // Ensure popup is visible
        setTimeout(() => {
            popup.style.opacity = '0'; // Fade out the popup
        }, 1500); // Show for 1.5 seconds
        setTimeout(() => {
            popup.style.display = 'none'; // Hide completely after fading out
        }, 2000); // Hide completely after 2 seconds
    }

    // Handle window resizing
    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

