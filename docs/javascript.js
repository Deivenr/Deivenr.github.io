document.addEventListener('DOMContentLoaded', () => {
    // --- Manejo del menú de navegación móvil ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav .nav-list a');

    // Función para alternar el menú y el ícono
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace (para móvil)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // ---  Efecto de cabecera fija y cambio de estilo (opcional, si quieres que cambie de color o algo al hacer scroll) ---
    const header = document.querySelector('.main-header');
    const heroSectionHeight = document.querySelector('.hero-section').offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > header.offsetHeight) { // Si el scroll supera la altura del header
            header.classList.add('scrolled'); // Añade una clase para posibles estilos de scroll
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Puedes añadir estilos a '.main-header.scrolled' en tu CSS si quieres un cambio visual.
    // Ejemplo:
    // .main-header.scrolled {
    //     background-color: rgba(255, 255, 255, 0.95);
    //     box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    // }
    // .main-header.scrolled .logo a,
    // .main-header.scrolled .main-nav .nav-list a {
    //     color: #333; // Cambia el color del texto si es necesario
    // }
    // .menu-toggle.scrolled span {
    //     background-color: #333;
    // }

    // --- Animaciones al hacer scroll (ejemplo con Intersection Observer) ---
    // Esto es para que los elementos aparezcan o se animen cuando entran en la vista
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% del elemento visible para activar
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Añade una clase cuando es visible
                // Si quieres que solo se anime una vez, puedes descomentar la siguiente línea
                // observer.unobserve(entry.target);
            } else {
                // entry.target.classList.remove('visible'); // Si quieres que la animación se revierta al salir de la vista
            }
        });
    }, observerOptions);

    // Observa las secciones que quieres animar
    document.querySelectorAll('.content-section, .service-item, .resource-card').forEach(section => {
        section.classList.add('animate-on-scroll'); // Añade esta clase para el CSS
        sectionObserver.observe(section);
    });

    // Añade el siguiente CSS a `style.css` para que esta parte de JS funcione:
    /*
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
    }
    */
});
