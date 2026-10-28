(() => {
  const root = document.documentElement;
  const body = document.body;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  root.classList.remove('no-js');
  root.classList.add('js-enabled');

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const motionButton = document.querySelector('.motion-toggle');
  const motionGlyph = document.querySelector('.motion-glyph');
  const motionLabel = document.querySelector('.motion-label');
  if (motionButton) {
    let userPaused = false;
    const paintMotionState = () => {
      const systemReduced = reduceMotion.matches;
      const paused = systemReduced || userPaused;
      body.classList.toggle('motion-paused', paused);
      motionButton.disabled = systemReduced;
      motionButton.setAttribute('aria-pressed', String(paused));
      motionButton.setAttribute('aria-label', systemReduced
        ? 'Decorative motion is reduced by your device preference'
        : paused ? 'Resume motion' : 'Pause motion');
      motionButton.title = systemReduced ? 'Reduced motion is enabled on your device' : paused ? 'Resume motion' : 'Pause motion';
      motionLabel.textContent = systemReduced ? 'Reduced motion' : paused ? 'Resume motion' : 'Pause motion';
      motionGlyph.textContent = paused ? '▶' : 'Ⅱ';
      if (systemReduced) revealItems.forEach((item) => item.classList.add('is-visible'));
    };
    motionButton.addEventListener('click', () => {
      if (reduceMotion.matches) return;
      userPaused = !userPaused;
      paintMotionState();
    });
    reduceMotion.addEventListener('change', paintMotionState);
    paintMotionState();
  }

  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const setMenuOpen = (open) => {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    mobileNav.hidden = !open;
  };
  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });
    mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        menuButton.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (menuButton.getAttribute('aria-expanded') === 'true' && !mobileNav.contains(event.target) && !menuButton.contains(event.target)) setMenuOpen(false);
    });
  }

  const filterButtons = document.querySelectorAll('.filter-button');
  const projectCards = document.querySelectorAll('.project-card');
  const filterStatus = document.querySelector('.filter-status');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;
      let visibleCount = 0;
      filterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });
      projectCards.forEach((card) => {
        const show = selected === 'all' || card.dataset.category === selected;
        card.hidden = !show;
        if (show) {
          visibleCount += 1;
          if (!reduceMotion.matches && !body.classList.contains('motion-paused')) {
            card.animate([
              { opacity: 0.72, transform: 'translateY(5px)' },
              { opacity: 1, transform: 'translateY(0)' }
            ], { duration: 240, easing: 'cubic-bezier(.2, .8, .2, 1)' });
          }
        }
      });
      if (filterStatus) {
        const label = button.textContent.trim().replace(/\s+\d+$/, '');
        filterStatus.textContent = selected === 'all'
          ? 'Showing all projects'
          : `Showing ${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'}: ${label}`;
      }
    });
  });

  const navLinks = document.querySelectorAll('.desktop-nav a');
  const sections = [...navLinks]
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  const progress = document.getElementById('reading-progress-fill');
  let progressQueued = false;
  const updateProgress = () => {
    if (!progress) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const value = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    progress.style.transform = `scaleX(${value})`;
    progressQueued = false;
  };
  window.addEventListener('scroll', () => {
    if (progressQueued) return;
    progressQueued = true;
    window.requestAnimationFrame(updateProgress);
  }, { passive: true });
  updateProgress();

  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
