/* ==========================================================================
   ANIMATIONS & VISUAL EFFECTS MODULE
   ========================================================================== */

/* 1. CANVAS BACKGROUND PARTICLES (60 FPS) */
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  let animFrame = null;
  let isActive = true;

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 35), 35);

  function isLight() {
    return document.body.classList.contains('light-mode');
  }

  function getColor(alpha) {
    return isLight()
      ? `rgba(37, 99, 235, ${alpha * 0.7})`
      : `rgba(96, 165, 250, ${alpha})`;
  }

  function getGlow() {
    return isLight() ? 'rgba(37, 99, 235, 0.15)' : '#2563eb';
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize, { passive: true });

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.alpha = Math.random() * 0.4 + 0.1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = getColor(this.alpha);
      ctx.shadowBlur = 6;
      ctx.shadowColor = getGlow();
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    if (!isActive) return;
    ctx.clearRect(0, 0, width, height);
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    animFrame = requestAnimationFrame(animate);
  }

  document.addEventListener('visibilitychange', () => {
    isActive = !document.hidden;
    if (isActive && !animFrame) {
      animate();
    } else if (!isActive && animFrame) {
      cancelAnimationFrame(animFrame);
      animFrame = null;
    }
  }, { passive: true });

  animate();
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

/* 4. 3D TILT EFFECT ON CARDS (desktop only) */
function init3DTilt() {
  const isHoverCapable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isHoverCapable) return;

  const tiltElements = document.querySelectorAll('[data-tilt]');

  tiltElements.forEach(el => {
    let ticking = false;

    el.addEventListener('mouseenter', () => {
      el.style.transition = 'transform 0.1s ease-out, border-color 0.35s ease, box-shadow 0.35s ease';
    });

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale(1.02)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease';
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
    });
  });
}

/* 6. BUTTON MICRO-INTERACTIONS */
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
