/* ==========================================================================
   INTERACTIVE COMPONENTS MODULE
   ========================================================================== */

/* 1. FAQ ACCORDION */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    header.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
}

/* 6. CONTACT FORM VALIDATION, PHONE MASK & REAL SUBMISSION */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const phoneInput = document.getElementById('phone');

  if (!form) return;

  // Phone mask
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 11) v = v.substring(0, 11);

      if (v.length > 10) {
        v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      } else if (v.length > 6) {
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
      } else if (v.length > 0) {
        v = v.replace(/^(\d{0,2})$/, '($1');
      }
      e.target.value = v;
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const submitBtn = form.querySelector('button[type="submit"]');

    let isValid = true;

    form.querySelectorAll('.form-group').forEach(group => group.classList.remove('error'));

    if (!name.value.trim()) {
      showError(name, 'Por favor, insira seu nome.');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      showError(email, 'Insira um e-mail válido.');
      isValid = false;
    }

    if (phoneInput && phoneInput.value.length < 14) {
      showError(phoneInput, 'Insira um telefone válido com DDD.');
      isValid = false;
    }

    if (!message.value.trim()) {
      showError(message, 'Escreva sua mensagem.');
      isValid = false;
    }

    if (!isValid) return;

    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

    const formData = {
      name: name.value.trim(),
      email: email.value.trim(),
      phone: phoneInput ? phoneInput.value.trim() : '',
      message: message.value.trim()
    };

    // Decide method from SITE_CONFIG
    const method = window.SITE_CONFIG && window.SITE_CONFIG.form ? window.SITE_CONFIG.form.method : 'whatsapp';

    if (method === 'whatsapp') {
      submitViaWhatsApp(formData, submitBtn, originalText);
    } else if (method === 'emailjs' && typeof emailjs !== 'undefined') {
      submitViaEmailJS(formData, submitBtn, originalText);
    } else if (method === 'formspree') {
      submitViaFormspree(formData, submitBtn, originalText);
    } else {
      // Fallback: just show success
      setTimeout(() => {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showToast('Mensagem enviada com sucesso!');
      }, 1000);
    }
  });

  function submitViaWhatsApp(data, btn, originalHTML) {
    const cfg = window.SITE_CONFIG;
    const msg = cfg && cfg.whatsappMessages
      ? cfg.whatsappMessages.form(data)
      : `*Novo Lead pelo Site*%0A%0ANome: ${data.name}%0AE-mail: ${data.email}%0ATelefone: ${data.phone}%0AMensagem: ${data.message}`;

    const phoneRaw = cfg ? cfg.brand.phoneRaw : '5511934376059';
    const waUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(msg)}`;

    // Abre WhatsApp
    window.open(waUrl, '_blank');

    // Reseta form
    btn.disabled = false;
    btn.innerHTML = originalHTML;
    document.getElementById('contact-form').reset();
    showToast('Redirecionamos você para o WhatsApp!');
  }

  function submitViaEmailJS(data, btn, originalHTML) {
    const cfg = window.SITE_CONFIG.form.emailjs;
    emailjs.send(cfg.serviceId, cfg.templateId, {
      name: data.name,
      from_email: data.email,
      from_phone: data.phone,
      message: data.message
    }).then(() => {
      btn.disabled = false;
      btn.innerHTML = originalHTML;
      document.getElementById('contact-form').reset();
      showToast('Mensagem enviada com sucesso!');
      // Notifica no WhatsApp com apenas a mensagem
      const waMsg = encodeURIComponent(window.SITE_CONFIG.whatsappMessages.formAlert(data.message));
      window.open(`${window.SITE_CONFIG.social.whatsapp}?text=${waMsg}`, '_blank');
    }).catch(() => {
      btn.disabled = false;
      btn.innerHTML = originalHTML;
      showToast('Erro ao enviar. Tente novamente ou use o WhatsApp.');
    });
  }

  function submitViaFormspree(data, btn, originalHTML) {
    const endpoint = window.SITE_CONFIG.form.formspreeEndpoint;
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(() => {
      btn.disabled = false;
      btn.innerHTML = originalHTML;
      document.getElementById('contact-form').reset();
      window.location.href = 'obrigado';
    }).catch(() => {
      btn.disabled = false;
      btn.innerHTML = originalHTML;
      showToast('Erro ao enviar. Tente novamente.');
    });
  }

  function showError(input, msg) {
    const group = input.closest('.form-group');
    const errorEl = group.querySelector('.form-error');
    if (errorEl) errorEl.textContent = msg;
    group.classList.add('error');
  }
}

/* Global Toast Helper */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.querySelector('.toast-text').textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* 7. COOKIE CONSENT BANNER & MODAL (LGPD DEMO) */
function initCookieConsent() {
  const cfg = window.SITE_CONFIG;
  if (cfg && cfg.analytics && cfg.analytics.enabled === false) return;

  const banner = document.getElementById('cookie-banner');
  const backdrop = document.getElementById('cookie-modal-backdrop');
  const modal = document.getElementById('cookie-modal');

  const btnAcceptAll = document.getElementById('cookie-accept-all');
  const btnOpenPreferences = document.getElementById('cookie-open-preferences');
  const btnRejectOptional = document.getElementById('cookie-reject-optional');
  const btnCloseModal = document.getElementById('cookie-modal-close');
  const btnSavePreferences = document.getElementById('cookie-save-preferences');
  const btnFooterOpenModal = document.getElementById('open-cookie-modal-footer');

  if (!banner) return;

  const savedConsent = localStorage.getItem('demo_cookie_consent');

  if (!savedConsent) {
    setTimeout(() => {
      banner.classList.add('show');
    }, 1200);
  }

  function hideBanner() {
    banner.classList.remove('show');
  }

  function openModal() {
    hideBanner();
    backdrop?.classList.add('show');
    modal?.classList.add('show');
  }

  function closeModal() {
    backdrop?.classList.remove('show');
    modal?.classList.remove('show');
  }

  btnAcceptAll?.addEventListener('click', () => {
    localStorage.setItem('demo_cookie_consent', JSON.stringify({ analytics: true, marketing: true }));
    hideBanner();
    showToast('Preferências de cookies salvas: Todos aceitos.');
  });

  btnRejectOptional?.addEventListener('click', () => {
    localStorage.setItem('demo_cookie_consent', JSON.stringify({ analytics: false, marketing: false }));
    hideBanner();
    showToast('Preferências salvas: Apenas cookies essenciais ativos.');
  });

  btnOpenPreferences?.addEventListener('click', openModal);
  btnFooterOpenModal?.addEventListener('click', openModal);
  btnCloseModal?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);

  btnSavePreferences?.addEventListener('click', () => {
    const analytics = document.getElementById('cookie-analytics-check')?.checked ?? true;
    const marketing = document.getElementById('cookie-marketing-check')?.checked ?? true;

    localStorage.setItem('demo_cookie_consent', JSON.stringify({ analytics, marketing }));
    closeModal();
    showToast('Suas preferências de privacidade foram salvas com sucesso!');
  });
}
