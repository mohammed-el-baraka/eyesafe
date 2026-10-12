document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();

  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const languageButtons = document.querySelectorAll('[data-lang-option]');
  const translatedElements = document.querySelectorAll('[data-en][data-fr]');

  const setHeaderState = () => {
    header.classList.toggle('scrolled', window.scrollY > 32);
  };

  const closeMenu = () => {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('menu-open');
  };

  const setLanguage = (language) => {
    document.documentElement.dataset.lang = language;
    document.documentElement.lang = language;
    translatedElements.forEach((element) => {
      element.textContent = element.dataset[language];
    });
    languageButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.langOption === language);
    });
    try { localStorage.setItem('eyesafe-language', language); } catch (_) {}
    closeMenu();
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('active');
    menuToggle.classList.toggle('active', isOpen);
    mobileMenu.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('menu-open', isOpen);
  });

  mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.langOption)));

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    revealElements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }

  document.querySelectorAll('video').forEach((video) => {
    const play = video.play();
    if (play && typeof play.catch === 'function') play.catch(() => {});
  });

  window.addEventListener('scroll', setHeaderState, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1100) closeMenu();
  });

  document.getElementById('year').textContent = new Date().getFullYear();
  setHeaderState();

  let preferredLanguage = 'en';
  try { preferredLanguage = localStorage.getItem('eyesafe-language') || 'en'; } catch (_) {}
  if (preferredLanguage === 'fr') setLanguage('fr');
});
