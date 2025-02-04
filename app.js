(function (document) {
    // Seleccionar las tarjetas y el elemento con la clase 'blue'
    const tarjetas = document.querySelectorAll('.tarjeta-servicio.ttt.invisible');
    const blue = document.querySelector('.blue');
  
    // Validar si existe el elemento 'blue' para evitar errores

  
    // Configurar IntersectionObserver para observar la clase 'blue'
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Si 'blue' es visible, cargar las tarjetas
            tarjetas.forEach((tarjeta) => {
              tarjeta.classList.add('animated', 'fadeInLeft');
              tarjeta.classList.remove('invisible');
            });
  
            // Dejar de observar 'blue' después de activar la animación
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.8, // Umbral del 80% de visibilidad
      }
    );
  
    // Observar el elemento con la clase 'blue'
    observer.observe(blue);
  })(document);
  