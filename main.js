/* script.js - VERSIÓN SEGURA Y ROBUSTA */
document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // 1. DEFINIR DATOS (¡AHORA CON IMÁGENES!)
    // ============================================
    // IMPORTANTE: Guarda tus imágenes de letras en una carpeta (ej. "img/letras/")
    // y actualiza las rutas 'image' aquí abajo.
    const songs = [
        {
            title: "Describe lo que siento y como fue",
            desc: "El momento exacto en que supe que eras tú.",
            link: "https://open.spotify.com/intl-es/track/28Ct4qwkQXY2W5yyNCLuVI?si=f308e15a1ea54a9d",
            image: "NuestraCancion.jpeg" // REEMPLAZA con tu imagen real (ej. "img/letras/cancion1.jpg")
        },
        {
            title: "No fue casualidad coincidir contigo",
            desc: "si estamos destinados a estar unidos",
            link: "https://open.spotify.com/intl-es/track/3UI9I3e1g1y5T3SMfdgfGO?si=fe1d6e4960584317",
            image: "Colgando.jpeg" // REEMPLAZA
        },
        {
            title: "Siempre seras mi persona favorita",
            desc: "siempre quiero que seas tú.",
            link: "https://open.spotify.com/intl-es/track/28Ct4qwkQXY2W5yyNCLuVI?si=30ca349d488f48c7",
            image: "SoloTu.jpeg" // REEMPLAZA
        },
        {
            title: "¿Por qué te amo así?",
            desc: "¿Acaso está mal sentir demasiado?",
            link: "https://open.spotify.com/intl-es/track/2bvO1KXbUd4vySCWGNqIIa?si=3cd7a66c279a42e4",
            image: "Amarte.jpeg" // REEMPLAZA
        },
        {
            title: "Tú",
            desc: "Siempre serás tú.",
            link: "https://open.spotify.com/intl-es/track/2rYjkYQWpn66nf5Ihk7SHJ?si=ac780dd83a764797",
            image: "EresTu.jpeg" // REEMPLAZA
        },

        {
            title: "Nunca habrá",
            desc: "Cosa más bella que tú, cosa más linda que tú.",
            link: "https://open.spotify.com/intl-es/track/1EZypwk0xcj64ZLAglhLs2?si=3fa7ec76ba1e4c38",
            image: "Gracias.jpeg" // REEMPLAZA
        },
        {
            title: "No tengo razón para dudarlo",
            desc: "Elijo quedarme contigo.",
            link: "https://open.spotify.com/intl-es/track/66iygyOSvvoQQsKJ1vEXfT?si=d11af1b5add74758",
            image: "Elegirte.jpeg" // REEMPLAZA
        },
        {
            title: "Quiero compartir contigo",
            desc: "Todo de mí, todo de ti.",
            link: "https://open.spotify.com/intl-es/track/29Ro9cW0qbFdXGmrJ3aNKs?si=c1a7c5a2b64b413a",
            image: "Compartir.jpeg" // REEMPLAZA
        },
        {
            title: "A Dios le pido",
            desc: "Seguir estando contigo.",
            link: "https://open.spotify.com/intl-es/track/129lYDVKnWtlJc2PZJviuA?si=f2c8a9ad69434dcb",
            image: "LePido.jpeg" // REEMPLAZA
        },
        {
            title: "Es que somos tal para cual",
            desc: "Nada ni nadie lo puede negar",
            link: "https://open.spotify.com/intl-es/track/0svWUjefj6RBlIQxA3VCvx?si=5a23a017e98a462f",
            image: "TeNecesito.jpeg" // REEMPLAZA
        },
        {
            title: "Te lo digo de verdad",
            desc: "Eres lo mas bello que me ha pasado en la vida.",
            link: "https://open.spotify.com/intl-es/track/2PZtKB8fDoDGLot27oUnWH?si=f9914880e57a43aa",
            image: "OroDeLey.jpeg" // REEMPLAZA
        },
        {
            title: "Te quiero, te quiero, te quiero",
            desc: "y no puedo dejar dejar de pensar en ti",
            link: "https://open.spotify.com/intl-es/track/6tu2FHuKL9C8pwNrityweQ?si=d14185eb73ec4ca4",
            image: "TeQuiero.jpeg" // REEMPLAZA
        },
        {
            title: "No hay bella melodia en que no exitas tú",
            desc: "Te has convertido en parte de mi",
            link: "https://open.spotify.com/intl-es/track/03oCjV73Utu9KpXrgcqoTJ?si=d5c30c415f67433c",
            image: "Contigo.jpeg" // REEMPLAZA
        },
        {
            title: "Si me siento más tuyo que de mi mismo,",
            desc: "¿Cómo quieres que no te ame?.",
            link: "https://open.spotify.com/intl-es/track/098fCi4s5RXgbwufb9086i?si=65522189f9634726",
            image: "Privilegio.jpeg" // REEMPLAZA
        },
        {
            title: "Me diste ganas de extrañarte",
            desc: "sin ningun motivo",
            link: "https://open.spotify.com/intl-es/track/5QSYWruQQ7kBCHScI4xJ9g?si=18c186eef3fc4685",
            image: "Agua.jpeg" // REEMPLAZA
        },
        {
            title: "Todo se ha ordenado",
            desc: "Desde que llegaste a mi vida todo cambió",
            link: "https://open.spotify.com/intl-es/track/5mE03INQwKsRKxFsrzlvNY?si=5abaa6184a684186",
            image: "MiVidaCambio.jpeg" // REEMPLAZA
        },
        {
            title: "Qué puedo decirte que no te he dicho ",
            desc: "Todo se trata de ti",
            link: "https://open.spotify.com/intl-es/track/0MHSnVk2CrGP8hIkxpxwMJ?si=0d3eb4c055224c02",
            image: "Usted.jpeg" // REEMPLAZA
        },

        {
            title: "No es fácil estar contigo lejos de ti",
            desc: "pero aún sin estar aquí, puedes hacer lo que quieras de mi",
            link: "https://open.spotify.com/intl-es/track/00kIWJu9IHiQ6i0qJAU0Z9?si=2368615d19f74872",
            image: "TeVi.jpeg" // REEMPLAZA
        },
        {
            title: "Siempre te extraño, ¿cómo no hacerlo?",
            desc: "Cierro mis ojos y lo que veo eres tú",
            link: "https://open.spotify.com/intl-es/album/7rItmPh0tZpMKcFXBScaU8?si=vTaBYjSQTmOyNpDgvu5wrg",
            image: "Small.jpeg" // REEMPLAZA
        },
        {
            title: "Donde sea que miraba ahí estabas tú",
            desc: "Si nadie lo buscó y nadie lo planeó, entonces es porque eras para mi y yo para ti",
            link: "https://open.spotify.com/intl-es/track/2G74yhtIMW8tJY5I83dS4Z?si=e6f9f41199474bae",
            image: "AmorDelBueno.jpeg" // REEMPLAZA
        },
        {
            title: "Debes ser exactamente",
            desc: "Lo que yo siempre soñe",
            link: "https://open.spotify.com/intl-es/track/09QfIIP4NUx4A3thmovb2o?si=62ffde331f414404",
            image: "Perfecta.jpeg" // REEMPLAZA
        }
        // ... Añade el resto de tus canciones con sus imágenes ...
    ];

    // ============================================
    // 2. GENERAR EL HTML (ESTILO COLLAGE)
    // ============================================
    const musicContainer = document.getElementById('music-container');

    if (musicContainer) {
        songs.forEach((song, index) => {
            const card = document.createElement('a');
            card.href = song.link;
            card.target = "_blank";
            card.className = 'music-card scrapbook-style'; // Nueva clase para estilo

            // Iconos decorativos aleatorios
            const icons = ['♥', '♪', '♫', '✿', '✨'];
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];

            // Estructura interna: Imagen + Contenido
            card.innerHTML = `
                <div class="card-image">
                    <img src="${song.image}" alt="Letra de ${song.title}">
                </div>
                <div class="card-content">
                    <span class="song-icon">${randomIcon}</span>
                    <span class="song-title">${song.title}</span>
                    <span class="song-desc">${song.desc}</span>
                </div>
            `;

            // --- MAGIA DEL COLLAGE (Aleatoriedad) ---

            // 1. Rotación aleatoria (entre -8 y 8 grados) para parecer pegado a mano
            const randomRotation = (Math.random() * 16) - 8;

            // 2. Margen superior aleatorio para romper la cuadrícula vertical
            const randomMarginTop = Math.floor(Math.random() * 60);

            // 3. Un poco de margen izquierdo/derecho negativo para superposición sutil
            const randomMarginSide = (Math.random() * 20) - 10;

            // Aplicar estilos
            card.style.transform = `rotate(${randomRotation}deg)`;
            card.style.marginTop = `${randomMarginTop}px`;
            card.style.marginLeft = `${randomMarginSide}px`;
            card.style.zIndex = index; // Asegura que se superpongan en orden

            musicContainer.appendChild(card);
        });
        console.log("Collage generado correctamente.");
    } else {
        console.error("Error: No se encontró el contenedor con id 'music-container'");
    }

    // ============================================
    // 3. INICIALIZAR LIBRERÍAS (ANIMACIONES)
    // ============================================
    // Usamos try-catch para que si falla GSAP, no rompa el resto de la página.
    try {
        if (typeof Lenis !== 'undefined') {
            const lenis = new Lenis({ smooth: true });
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }

        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            // Animar aparición de las tarjetas
            gsap.from(".music-card", {
                scrollTrigger: {
                    trigger: ".music",
                    start: "top 80%" // Inicia cuando la sección entra al 80% de la pantalla
                },
                y: 50, // Vienen desde 50px abajo
                opacity: 0, // Empiezan invisibles
                duration: 0.8,
                stagger: 0.1, // Aparecen una por una
                clearProps: "all" // Al terminar, quita los estilos inline para evitar bugs
            });

            // Animar textos del Hero
            gsap.from(".anim-text", { opacity: 0, y: 30, duration: 1, stagger: 0.3 });

        } else {
            console.warn("GSAP no está cargado. Las animaciones no funcionarán, pero el contenido sí.");
        }
    } catch (error) {
        console.error("Error en animaciones:", error);
    }

    // ============================================
    // 4. LÓGICA DE INTERACCIÓN (CARTA Y BOTONES)
    // ============================================
    const btnOpen = document.getElementById('open-letter-btn');
    const overlay = document.getElementById('letter-overlay');
    const btnClose = document.querySelector('.close-overlay');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const finalSection = document.getElementById('final-message');
    const typewriterElement = document.getElementById('typewriter-text');
    const proposalBox = document.getElementById('proposal-container');

    // Mensaje de la carta
    const letterText = `
    Linda Joss,<br><br>
    He hecho esto pensando en cada sonrisa tuya. Cada mensaje, cada audio que me mandas es mi fuerza y mi inspiración.<br><br>
    No sé qué depare el destino, pero quiero que ahí estés conmigo, dejame protegerte y cuidarte, déjame hacerte saber que estoy dispuesto a cualquier cosa por ti.  Déjame demostrarte cuánto te amo toda tu vida.
    `;

    if (btnOpen) {
        btnOpen.addEventListener('click', () => {
            overlay.classList.add('active');
            if (typewriterElement && typewriterElement.innerHTML.trim() === "") {
                typewriterElement.innerHTML = letterText; // Poner texto directo
                gsap.fromTo(typewriterElement, { opacity: 0 }, { opacity: 1, duration: 2 }); // Fade in suave

                // Mostrar pregunta después de un momento
                setTimeout(() => {
                    if (proposalBox) {
                        proposalBox.classList.remove('hidden');
                        gsap.from(proposalBox, { opacity: 0, y: 20, duration: 1 });
                    }
                }, 1500);
            }
        });
    }

    if (btnClose) {
        btnClose.addEventListener('click', () => overlay.classList.remove('active'));
    }

    // Botón NO Escapadizo
    if (btnNo) {
        const moveBtn = () => {
            const x = (Math.random() - 0.5) * 150;
            const y = (Math.random() - 0.5) * 150;
            btnNo.style.transform = `translate(${x}px, ${y}px)`;
        };
        btnNo.addEventListener('mouseover', moveBtn);
        btnNo.addEventListener('touchstart', (e) => { e.preventDefault(); moveBtn(); });
    }

    // Botón SÍ
    if (btnYes) {
        btnYes.addEventListener('click', () => {
            overlay.classList.remove('active');
            if (finalSection) {
                finalSection.classList.remove('hidden');
                setTimeout(() => {
                    // Intento de scroll suave nativo si Lenis falla
                    finalSection.scrollIntoView({ behavior: 'smooth' });
                }, 300);
            }
            createConfetti();
        });
    }

    // ============================================
    // 5. FONDO DE FLORES (CANVAS)
    // ============================================
    const canvas = document.createElement('canvas');
    canvas.id = 'flower-canvas';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');

    let width, height, particles = [];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height - height;
            this.size = Math.random() * 5 + 3;
            this.speedY = Math.random() * 1 + 0.5;
            this.color = `rgba(255, 192, 203, ${Math.random() * 0.5 + 0.3})`; // Rosa
        }
        update() {
            this.y += this.speedY;
            if (this.y > height) this.reset();
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < 50; i++) particles.push(new Particle());
    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();

    function createConfetti() {
        // Lógica simple de confeti (opcional)
        console.log("¡Explosión de amor!");
    }
});