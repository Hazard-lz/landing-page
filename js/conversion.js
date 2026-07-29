/* ==========================================================================
   CONVERSION MODULE - WhatsApp Widget, Budget Calculator & Analytics
   Dependências: site-config.js
   ========================================================================== */

/* ─── 1. SMART WHATSAPP WIDGET ──────────────────────────────────────────── */
function initWhatsAppWidget() {
  const waFloat = document.querySelector('.whatsapp-float');
  const cfg = window.SITE_CONFIG;
  if (!waFloat || !cfg) return;

  // Atualizar link com mensagem padrão
  const defaultMsg = encodeURIComponent(cfg.whatsappMessages.default);
  waFloat.setAttribute('href', `${cfg.social.whatsapp}?text=${defaultMsg}`);

  // Adicionar indicador "Online agora"
  const tooltip = waFloat.querySelector('.whatsapp-tooltip');
  if (tooltip) {
    tooltip.innerHTML = `
      <strong>Quero um Site Como Este</strong>
      <span>Falar no WhatsApp ${cfg.brand.phone}</span>
    `;
  }

  // Pop-up de boas-vindas
  if (cfg.whatsAppPopup?.enabled !== false) {
  const popup = document.createElement('div');
  popup.className = 'wa-popup';
  popup.innerHTML = `
    <div class="wa-popup-content">
      <button class="wa-popup-close" aria-label="Fechar">&times;</button>
      <div class="wa-popup-avatar">
        <i class="fa-solid fa-headset"></i>
      </div>
      <div class="wa-popup-text">
        <strong>${cfg.whatsAppPopup?.title || 'Olá! Precisa de um site?'}</strong>
        <p>${cfg.whatsAppPopup?.description || 'Posso ajudar com um orçamento personalizado para o seu negócio!'}</p>
      </div>
      <a href="${cfg.social.whatsapp}?text=${encodeURIComponent(cfg.whatsappMessages.default)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-shine wa-popup-btn">
        <i class="fa-brands fa-whatsapp"></i>
        <span>${cfg.whatsAppPopup?.buttonText || 'Falar Agora'}</span>
      </a>
    </div>
  `;

  document.body.appendChild(popup);

  // Mostrar popup com delay configurável
  const popupDelay = cfg.whatsAppPopup?.delay ?? 15000;
  setTimeout(() => {
    if (!localStorage.getItem('wa_popup_closed')) {
      popup.classList.add('show');
    }
  }, popupDelay);

  popup.querySelector('.wa-popup-close').addEventListener('click', () => {
    popup.classList.remove('show');
    localStorage.setItem('wa_popup_closed', 'true');
  });
  }

  // Pulse animation com tooltip permanente após scroll
  let waTooltipShown = false;
  window.addEventListener('scroll', () => {
    if (!waTooltipShown && window.scrollY > 600) {
      waTooltipShown = true;
      const tooltipEl = waFloat.querySelector('.whatsapp-tooltip');
      if (tooltipEl) tooltipEl.classList.add('show');
    }
  }, { once: true });
}

/* ─── 2. BUDGET CALCULATOR ──────────────────────────────────────────────── */
function initBudgetCalculator() {
  const cfg = window.SITE_CONFIG;
  if (!cfg || !cfg.budgetCalculator) return;

  const grid = document.getElementById('budget-grid');
  const totalEl = document.querySelector('.budget-total-value');
  const ctaBtn = document.querySelector('.budget-cta');
  if (!grid || !totalEl || !ctaBtn) return;

  const options = grid.querySelectorAll('.budget-option');

  function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function updateTotal() {
    let total = 0;
    options.forEach(opt => {
      if (opt.getAttribute('data-checked') === 'true') {
        total += parseFloat(opt.getAttribute('data-price'));
      }
    });
    totalEl.textContent = formatCurrency(total);
    ctaBtn.disabled = total === 0;
  }

  options.forEach(opt => {
    opt.addEventListener('click', function() {
      const isChecked = this.getAttribute('data-checked') === 'true';
      this.setAttribute('data-checked', isChecked ? 'false' : 'true');
      this.classList.toggle('checked', !isChecked);
      updateTotal();
    });
  });

  ctaBtn.addEventListener('click', () => {
    const selected = [];
    options.forEach(opt => {
      if (opt.getAttribute('data-checked') === 'true') {
        selected.push(opt.querySelector('.budget-label').textContent.trim());
      }
    });
    if (selected.length === 0) return;
    const msg = encodeURIComponent(cfg.whatsappMessages.budget(selected));
    const link = document.createElement('a');
    link.href = `${cfg.social.whatsapp}?text=${msg}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  });
}

/* ─── 3. UNIFIED ANALYTICS TRACKING ─────────────────────────────────────── */
function initAnalytics() {
  const cfg = window.SITE_CONFIG;
  if (!cfg || !cfg.analytics || cfg.analytics.enabled === false) return;

  const gtmId = cfg.analytics.googleTagManagerId;
  const gaId = cfg.analytics.googleAnalyticsId;
  const pixelId = cfg.analytics.metaPixelId;

  // Google Tag Manager
  if (gtmId) {
    if (!document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${gtmId}"]`)) {
      const gtmScript = document.createElement('script');
      gtmScript.async = true;
      gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      document.head.appendChild(gtmScript);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    }
    // Noscript fallback
    if (!document.querySelector('noscript[data-gtm]')) {
      const noscript = document.createElement('noscript');
      noscript.setAttribute('data-gtm', '');
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertAdjacentElement('afterbegin', noscript);
    }
  }

  // Google Analytics 4
  if (gaId) {
    // Injetar script GA4
    if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${gaId}"]`)) {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(gaScript);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() { dataLayer.push(arguments); };
      gtag('js', new Date());
      gtag('config', gaId);
    }
  }

  // Meta Pixel
  if (pixelId) {
    if (!document.querySelector(`script#meta-pixel-${pixelId}`)) {
      const pixelScript = document.createElement('script');
      pixelScript.id = `meta-pixel-${pixelId}`;
      pixelScript.textContent = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(pixelScript);
    }
  }

  // Auto-track events
  function trackEvent(action, label) {
    if (typeof gtag === 'function') {
      gtag('event', action, { event_category: 'conversion', event_label: label });
    }
    if (typeof fbq === 'function') {
      fbq('track', action, { content_name: label });
    }
  }

  // Track WhatsApp button clicks
  document.addEventListener('click', (e) => {
    const waBtn = e.target.closest('[href*="wa.me"], [href*="whatsapp.com"]');
    if (waBtn) {
      const label = waBtn.getAttribute('aria-label') || waBtn.classList.value || 'whatsapp-click';
      trackEvent('Lead', label);
    }
  });

  // Track form submission (wait for original submit handler)
  const form = document.getElementById('contact-form');
  if (form) {
    const origSubmit = form.querySelector('button[type="submit"]');
    if (origSubmit) {
      origSubmit.addEventListener('click', function() {
        // Small delay to let validation run first
        setTimeout(() => {
          if (!form.querySelector('.form-group.error')) {
            trackEvent('Submit', 'contact-form');
          }
        }, 200);
      });
    }
  }

  // Track scroll depth
  let scrollDepths = new Set();
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = Math.round((window.scrollY + window.innerHeight) / h.scrollHeight * 100);
    [25, 50, 75, 100].forEach(depth => {
      if (pct >= depth && !scrollDepths.has(depth)) {
        scrollDepths.add(depth);
        trackEvent('Scroll', `${depth}%`);
      }
    });
  }, { passive: true });
}