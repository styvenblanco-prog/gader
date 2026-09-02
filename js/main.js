(() => {
  'use strict';

  const whatsappNumber = '584124898929';

  function setupMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('#main-nav');
    if (!toggle || !navigation) return;

    toggle.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navigation.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menú');
      });
    });
  }

  function setupProductLinks() {
    document.querySelectorAll('.product-link').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const product = link.dataset.product;
        const price = link.dataset.price;
        if (!product || !price) return;

        const message = `Hola Gader 👋\n\nMe interesa el reloj: ${product}\nPrecio: $${price}\n\n¿Me podrías dar más información?\n\nGracias.`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    });
  }

  function setupRevealAnimations() {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
  }

  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function init() {
    try {
      setupMobileMenu();
      setupProductLinks();
      setupRevealAnimations();
      setupSmoothScroll();
    } catch (error) {
      console.error('No se pudieron inicializar las interacciones de Gader.', error);
    }
  }

  init();
})();