/* ==========================================================================
   ANIMATIONS & VISUAL EFFECTS MODULE
   ========================================================================== */

/* 1. CANVAS SUBTLE GRID BACKGROUND */
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  function drawGrid() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.body.classList.contains('light-mode');
    const color = isLight ? 'rgba(124, 58, 237, 0.06)' : 'rgba(167, 139, 250, 0.05)';
    const spacing = 48;

    ctx.strokeStyle = color;
    ctx.lineWidth = 0.5;

    for (let x = 0; x <= width; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y <= height; y += spacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  drawGrid();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      drawGrid();
    }, 150);
  }, { passive: true });
}

/* 2. TYPEWRITER EFFECT */
function initTypewriter() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const words = JSON.parse(typingElement.getAttribute('data-words') || '["o Seu Negócio", "a Sua Clínica", "o Seu Restaurante", "a Sua Agência", "o Seu E-Commerce"]');
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeTimer = null;

  function type() {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 40 : 100;

    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = speed;
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      delay = 2200;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    typeTimer = setTimeout(type, delay);
  }

  type();
}

/* 3. REVEAL ON SCROLL */
function initRevealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(element => observer.observe(element));
}

/* 5. BUTTON MICRO-INTERACTIONS */
function initButtonEffects() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  const magnetics = document.querySelectorAll('[data-magnetic]');
  magnetics.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    }, { passive: true });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0px, 0px)';
    });
  });
}
