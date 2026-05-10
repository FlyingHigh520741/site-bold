(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  /* ---------- X-RAY ---------- */
  function initXray(el) {
    const cursor = el.querySelector('.xray__cursor');

    if (!isTouch) {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const px = e.clientX - r.left;
        const py = e.clientY - r.top;
        el.style.setProperty('--mx', `${(px / r.width) * 100}%`);
        el.style.setProperty('--my', `${(py / r.height) * 100}%`);
        if (cursor) {
          cursor.style.left = `${px}px`;
          cursor.style.top = `${py}px`;
        }
      });
      el.addEventListener('mouseenter', () => el.classList.add('is-hovering'));
      el.addEventListener('mouseleave', () => el.classList.remove('is-hovering'));
    } else if (!reduceMotion) {
      let t = Math.random() * Math.PI * 2;
      setInterval(() => {
        t += 0.02;
        el.style.setProperty('--mx', `${50 + Math.sin(t) * 30}%`);
        el.style.setProperty('--my', `${50 + Math.cos(t * 0.7) * 20}%`);
      }, 30);
    }
  }
  document.querySelectorAll('.xray').forEach(initXray);

  /* ---------- SCROLL REVEALS ---------- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- NAV SCROLL STATE ---------- */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- COPYRIGHT YEAR ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- NEWSLETTER ---------- */
  const newsletter = document.getElementById('newsletter');
  if (newsletter) {
    newsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = newsletter.querySelector('button');
      const input = newsletter.querySelector('input');
      if (!input.value) return;
      const original = btn.textContent;
      btn.textContent = 'OBRIGADO!';
      input.value = '';
      setTimeout(() => { btn.textContent = original; }, 3000);
    });
  }

  /* ---------- ONLY ONE FAQ OPEN AT A TIME ---------- */
  const faqs = document.querySelectorAll('.faq__item');
  faqs.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqs.forEach((other) => { if (other !== item) other.open = false; });
      }
    });
  });
})();
