/* ============================================================
   Pedro Santos — Apresentação Executiva
   Navegação por teclado, count-up nos outcomes,
   modo overview, tema light/dark, fullscreen, escala fluida 16:9
   ============================================================ */

(() => {
  const stage = document.getElementById('stage');
  const deck = document.getElementById('deck');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const counter = document.getElementById('counter');
  const progress = document.getElementById('progress');
  const controls = document.getElementById('controls');

  let currentIndex = 0;
  let overviewMode = false;

  // ============================================================
  // ESCALA FLUIDA 16:9
  // ============================================================
  function scaleDeck() {
    if (overviewMode) return;
    const padding = 32;
    const availableW = window.innerWidth - padding;
    const availableH = window.innerHeight - padding;
    const targetW = 1920;
    const targetH = 1080;
    const scale = Math.min(availableW / targetW, availableH / targetH);
    deck.style.transform = `scale(${scale})`;
  }

  window.addEventListener('resize', scaleDeck);
  window.addEventListener('load', scaleDeck);
  scaleDeck();

  // ============================================================
  // NAVEGAÇÃO
  // ============================================================
  function goTo(index, options = {}) {
    if (index < 0 || index >= slides.length) return;

    slides[currentIndex].classList.remove('is-active');
    currentIndex = index;
    slides[currentIndex].classList.add('is-active');

    updateUI();
    triggerCountUps(slides[currentIndex]);

    // History — slide # na URL
    if (!options.silent) {
      const slideNum = currentIndex + 1;
      history.replaceState(null, '', `#${slideNum}`);
    }
  }

  function next() { goTo(Math.min(currentIndex + 1, slides.length - 1)); }
  function prev() { goTo(Math.max(currentIndex - 1, 0)); }
  function first() { goTo(0); }
  function last() { goTo(slides.length - 1); }

  function updateUI() {
    const n = String(currentIndex + 1).padStart(2, '0');
    const total = String(slides.length).padStart(2, '0');
    counter.textContent = `${n} / ${total}`;
    progress.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
  }

  // ============================================================
  // COUNT-UP — signature motion das outcomes
  // ============================================================
  const counted = new WeakSet();

  function triggerCountUps(slide) {
    const els = slide.querySelectorAll('[data-countup]');
    if (!els.length) return;

    // Respeita prefers-reduced-motion
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    els.forEach((el) => {
      if (counted.has(el)) return;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';

      if (reduceMotion) {
        el.textContent = target + suffix;
        counted.add(el);
        return;
      }

      const duration = 1100;
      const start = performance.now();
      const from = 0;

      function step(now) {
        const elapsed = now - start;
        const t = Math.min(elapsed / duration, 1);
        // ease-out-expo
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        const value = Math.round(from + (target - from) * eased);
        el.textContent = value + suffix;
        if (t < 1) requestAnimationFrame(step);
        else counted.add(el);
      }
      requestAnimationFrame(step);
    });
  }

  // Triggera no slide ativo no carregamento
  triggerCountUps(slides[currentIndex]);

  // ============================================================
  // KEYBINDINGS
  // ============================================================
  document.addEventListener('keydown', (e) => {
    // Ignora se estiver em input/textarea
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        if (overviewMode) exitOverview();
        next();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        if (overviewMode) exitOverview();
        prev();
        break;
      case 'Home':
        e.preventDefault();
        first();
        break;
      case 'End':
        e.preventDefault();
        last();
        break;
      case 'Escape':
        if (overviewMode) exitOverview();
        else if (document.fullscreenElement) document.exitFullscreen();
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        break;
      case 't':
      case 'T':
        toggleTheme();
        break;
      case 'o':
      case 'O':
        toggleOverview();
        break;
      default:
        // Número direto (1-9) navega para o slide
        if (/^[1-9]$/.test(e.key)) {
          const slideNum = parseInt(e.key, 10);
          if (slideNum <= slides.length) goTo(slideNum - 1);
        }
    }
  });

  // ============================================================
  // CONTROLES UI
  // ============================================================
  document.getElementById('next').addEventListener('click', next);
  document.getElementById('prev').addEventListener('click', prev);
  document.getElementById('fullscreen').addEventListener('click', toggleFullscreen);
  document.getElementById('theme').addEventListener('click', toggleTheme);
  document.getElementById('overview').addEventListener('click', toggleOverview);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  }

  function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    if (current === 'dark') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', 'dark');
    }
  }

  // ============================================================
  // OVERVIEW MODE — grade de todos os slides
  // ============================================================
  function toggleOverview() {
    if (overviewMode) exitOverview();
    else enterOverview();
  }

  function enterOverview() {
    overviewMode = true;
    stage.classList.add('overview');

    // Cria container de grade
    const grid = document.createElement('div');
    grid.id = 'overview-grid';
    grid.style.cssText = `
      position: fixed; inset: 0;
      background: oklch(15% 0.01 270);
      overflow-y: auto;
      z-index: 200;
      padding: 48px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
      gap: 24px;
      align-content: start;
    `;

    slides.forEach((slide, idx) => {
      const thumb = document.createElement('div');
      thumb.style.cssText = `
        position: relative;
        aspect-ratio: 16 / 9;
        background: oklch(98% 0.005 90);
        border: 2px solid ${idx === currentIndex ? 'oklch(45% 0.15 155)' : 'transparent'};
        border-radius: 6px;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.2s ease, border-color 0.2s ease;
      `;
      thumb.addEventListener('mouseenter', () => {
        thumb.style.transform = 'translateY(-4px)';
        thumb.style.borderColor = 'oklch(45% 0.15 155)';
      });
      thumb.addEventListener('mouseleave', () => {
        thumb.style.transform = '';
        thumb.style.borderColor = idx === currentIndex ? 'oklch(45% 0.15 155)' : 'transparent';
      });

      // Mini-render dentro do thumb
      const clone = slide.cloneNode(true);
      clone.style.cssText = `
        display: flex;
        position: absolute;
        inset: 0;
        width: 1920px;
        height: 1080px;
        transform: scale(0.197);
        transform-origin: top left;
        pointer-events: none;
      `;
      thumb.appendChild(clone);

      // Label embaixo
      const label = document.createElement('div');
      label.style.cssText = `
        position: absolute;
        bottom: 6px; right: 8px;
        background: oklch(15% 0.01 270 / 0.85);
        color: oklch(98% 0.005 90);
        padding: 4px 10px;
        font-family: 'Inter', sans-serif;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.08em;
        border-radius: 3px;
        backdrop-filter: blur(8px);
      `;
      label.textContent = String(idx + 1).padStart(2, '0');
      thumb.appendChild(label);

      thumb.addEventListener('click', () => {
        exitOverview();
        goTo(idx);
      });

      grid.appendChild(thumb);
    });

    document.body.appendChild(grid);
  }

  function exitOverview() {
    overviewMode = false;
    stage.classList.remove('overview');
    const grid = document.getElementById('overview-grid');
    if (grid) grid.remove();
    scaleDeck();
  }

  // ============================================================
  // TOUCH/SWIPE — mobile preview
  // ============================================================
  let touchStartX = 0;
  let touchStartY = 0;

  stage.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
  }, { passive: true });

  // ============================================================
  // CARREGAMENTO INICIAL — pega slide da URL
  // ============================================================
  function initFromHash() {
    const hash = window.location.hash.replace('#', '');
    const num = parseInt(hash, 10);
    if (!isNaN(num) && num >= 1 && num <= slides.length) {
      goTo(num - 1, { silent: true });
    } else {
      updateUI();
    }
  }
  initFromHash();
  window.addEventListener('hashchange', initFromHash);

  // ============================================================
  // SHOW CONTROLS BRIEFLY ON LOAD
  // ============================================================
  controls.classList.add('show');
  setTimeout(() => controls.classList.remove('show'), 4000);
})();
