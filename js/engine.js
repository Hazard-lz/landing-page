/* ==========================================================================
   ENGINE MODULE - Data Injection from SITE_CONFIG
   Dependências: site-config.js (deve ser carregado antes)
   ========================================================================== */

(function() {
  'use strict';

  const cfg = window.SITE_CONFIG;
  if (!cfg) {
    console.warn('[Engine] SITE_CONFIG não encontrado. Certifique-se de que site-config.js foi carregado.');
    return;
  }

  // ─── HELPERS ─────────────────────────────────────────────────────────────

  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return (ctx || document).querySelectorAll(sel); }

  function setText(el, text) { if (el) el.textContent = text; }
  function setHTML(el, html) { if (el) el.innerHTML = html; }
  function setAttr(el, attr, val) { if (el) el.setAttribute(attr, val); }
  function setHref(el, href) { if (el) el.setAttribute('href', href); }

  // ─── 1. BRAND / NOME DA EMPRESA ────────────────────────────────────────

  function injectBrand() {
    const brand = cfg.brand;
    qsa('.nav-brand-text').forEach(el => setHTML(el, brand.nameHtml));
    setText(qs('#brand-headline'), brand.name);
    setText(qs('#copyright-brand'), brand.name);
    setHTML(qs('.loader-logo .nav-brand-text'), brand.nameHtml);
  }

  // ─── 2. WHATSAPP, REDES SOCIAIS & TELEFONE ─────────────────────────────

  function injectWhatsApp() {
    const waUrl = cfg.social.whatsapp;
    const defaultMsg = encodeURIComponent(cfg.whatsappMessages.default);
    const fullUrl = waUrl + '?text=' + defaultMsg;

    // Botão nav desktop
    const navCTA = qs('.nav-desktop-cta');
    if (navCTA) setHref(navCTA, fullUrl);

    // Botão mobile menu
    const mobileCTA = qs('.mobile-cta-btn');
    if (mobileCTA) setHref(mobileCTA, fullUrl);

    // Botão CTA principal
    const ctaBtn = qs('.cta-box a.btn');
    if (ctaBtn) setHref(ctaBtn, fullUrl);

    // Botão WhatsApp flutuante
    const waFloat = qs('.whatsapp-float');
    if (waFloat) setHref(waFloat, fullUrl);

    // Ícones sociais do footer (WhatsApp + demais redes)
    const socialLinks = {
      WhatsApp: fullUrl,
      LinkedIn: cfg.social.linkedin,
      GitHub: cfg.social.github,
      Instagram: cfg.social.instagram,
      Facebook: cfg.social.facebook,
      YouTube: cfg.social.youtube,
      Portfolio: cfg.social.portfolio
    };
    Object.entries(socialLinks).forEach(([label, url]) => {
      const el = qs(`.social-icon[aria-label="${label}"]`);
      if (!el) return;
      if (url) {
        setHref(el, url);
      } else {
        el.remove();
      }
    });

    // Número no tooltip
    const tooltipSpan = qs('.whatsapp-tooltip span');
    if (tooltipSpan) setText(tooltipSpan, `${cfg.brand.phone}`);

    // Info de contato
    const contactPhone = qsa('.contact-info .info-text p');
    contactPhone.forEach(el => {
      if (el.closest('.info-item') && el.closest('.info-item').querySelector('.fa-phone')) {
        setText(el, `+55 ${cfg.brand.phoneRaw.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')}`);
      }
    });

    // Portfolio CTA
    const portfolioCta = qs('.portfolio-cta');
    if (portfolioCta && cfg.social.portfolio) {
      setHref(portfolioCta, cfg.social.portfolio);
    }

    // Todos os botões "Solicitar Orçamento" com #contato (exceto nav/footer)
    qsa('a[href="#contato"]').forEach(el => {
      if (el.closest('.nav-menu') || el.closest('.footer-links')) return;
      const card = el.closest('.service-card');
      const pricingCard = el.closest('.pricing-card');
      let msg = defaultMsg;
      if (card) {
        const serviceName = card.querySelector('h3')?.textContent?.trim();
        if (serviceName && cfg.whatsappMessages.service)
          msg = encodeURIComponent(cfg.whatsappMessages.service(serviceName));
      } else if (pricingCard) {
        const planName = pricingCard.querySelector('.price-title')?.textContent?.trim();
        if (planName && cfg.whatsappMessages.plan)
          msg = encodeURIComponent(cfg.whatsappMessages.plan(planName));
      }
      setHref(el, waUrl + '?text=' + msg);
    });
  }

  // ─── 3. CONTATO (ENDEREÇO, EMAIL) ───────────────────────────────────────

  function injectContact() {
    const b = cfg.brand;
    const contactInfoItems = qsa('.contact-info .info-item');
    if (!contactInfoItems.length) return;

    // Endereço
    const addrItem = contactInfoItems[0];
    if (addrItem) {
      const p = addrItem.querySelector('p');
      if (p) setText(p, b.address);
    }

    // Email
    const emailItem = contactInfoItems[1];
    if (emailItem) {
      const p = emailItem.querySelector('p');
      if (p) setText(p, b.email);
    }

    // Telefone (já tratado no injectWhatsApp)

    // Horários
    const hoursItem = contactInfoItems[3];
    if (hoursItem) {
      const p = hoursItem.querySelector('p');
      if (p) setText(p, b.hours);
    }
  }

  // ─── 4. FOOTER ──────────────────────────────────────────────────────────

  function injectFooter() {
    const year = new Date().getFullYear();
    const footerBottom = qs('.footer-bottom');
    if (footerBottom) {
      const p = footerBottom.querySelector('p');
      if (p) {
        const showCookiePrefs = cfg.analytics && cfg.analytics.enabled;
        const cookieLink = showCookiePrefs
          ? ' | <a href="javascript:void(0)" role="button" id="open-cookie-modal-footer" style="color: var(--text-muted); text-decoration: underline;">Preferências de Cookies</a>'
          : '';
        setHTML(p, `&copy; ${year} <span id="copyright-brand">${cfg.brand.name}</span>. Todos os direitos reservados. | <a href="politica-de-privacidade.html" style="color: var(--text-muted); text-decoration: underline;">Política de Privacidade</a>${cookieLink}`);
      }
    }
  }

  // ─── 5. SEO & META TAGS ─────────────────────────────────────────────────

  function ensureMeta(selector, attrs) {
    let el = qs(selector);
    if (!el) {
      el = document.createElement('meta');
      Object.keys(attrs).forEach(k => el.setAttribute(k, attrs[k]));
      document.head.appendChild(el);
    } else {
      Object.keys(attrs).forEach(k => el.setAttribute(k, attrs[k]));
    }
  }

  function injectSEO() {
    const seo = cfg.seo;
    if (!seo) return;

    // Básico (sempre ativo)
    document.title = seo.title || '';
    ensureMeta('meta[name="description"]', { name: 'description', content: seo.description || '' });
    ensureMeta('meta[name="keywords"]', { name: 'keywords', content: seo.keywords || '' });

    if (seo.enabled === false) return;

    // Avançado (só quando enabled: true)
    const baseUrl = seo.canonicalUrl || window.location.origin;
    const resolveUrl = (url) => url && !url.startsWith('http') ? baseUrl.replace(/\/$/, '') + '/' + url.replace(/^\//, '') : url || '';

    // Open Graph
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: seo.ogTitle || seo.title || '' });
    ensureMeta('meta[property="og:description"]', { property: 'og:description', content: seo.ogDescription || seo.description || '' });
    ensureMeta('meta[property="og:image"]', { property: 'og:image', content: resolveUrl(seo.ogImage) });
    ensureMeta('meta[property="og:type"]', { property: 'og:type', content: seo.ogType || 'website' });
    ensureMeta('meta[property="og:locale"]', { property: 'og:locale', content: seo.ogLocale || 'pt_BR' });
    if (seo.ogSiteName) {
      ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: seo.ogSiteName });
    }

    // Twitter Cards
    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: seo.twitterCard || 'summary_large_image' });
    if (seo.twitterSite) {
      ensureMeta('meta[name="twitter:site"]', { name: 'twitter:site', content: seo.twitterSite });
    }
    if (seo.twitterCreator) {
      ensureMeta('meta[name="twitter:creator"]', { name: 'twitter:creator', content: seo.twitterCreator });
    }
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.ogTitle || seo.title || '' });
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.ogDescription || seo.description || '' });
    if (seo.ogImage) {
      ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: resolveUrl(seo.ogImage) });
    }

    // Canonical
    if (seo.canonicalUrl) {
      let link = qs('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', seo.canonicalUrl);
    }

    // Robots meta tag
    if (seo.robotsEnabled === false) {
      ensureMeta('meta[name="robots"]', { name: 'robots', content: 'noindex, nofollow' });
    } else {
      ensureMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow' });
    }

    // Sitemap link
    if (seo.sitemapUrl) {
      let link = qs('link[rel="sitemap"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'sitemap');
        link.setAttribute('type', 'application/xml');
        document.head.appendChild(link);
      }
      link.setAttribute('href', seo.sitemapUrl);
    }

    // Favicon
    if (seo.favicon) {
      let link = qs('link[rel="icon"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'icon');
        document.head.appendChild(link);
      }
      link.setAttribute('href', seo.favicon);
    }
  }

  // ─── 6. SCHEMA.ORG JSON-LD ─────────────────────────────────────────────

  function injectSchema() {
    const b = cfg.brand;
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: b.name,
      description: b.description,
      url: window.location.origin,
      telephone: '+' + b.phoneRaw,
      email: b.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: b.address
      },
      foundingDate: b.foundedYear ? `${b.foundedYear}-01-01` : undefined,
      numberOfEmployees: b.employees,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+' + b.phoneRaw,
        contactType: 'customer service',
        availableLanguage: ['Portuguese']
      },
      sameAs: [
        cfg.social.instagram,
        cfg.social.linkedin,
        cfg.social.facebook,
        cfg.social.youtube
      ].filter(Boolean)
    };

    // Remove undefined campos
    if (!b.foundedYear) delete schema.foundingDate;
    if (!b.employees) delete schema.numberOfEmployees;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);
  }

  // ─── 7. STATS COUNTERS ──────────────────────────────────────────────────

  function injectStats() {
    const statCards = qsa('.stat-card');
    if (!statCards.length || !cfg.stats.length) return;

    statCards.forEach((card, i) => {
      if (!cfg.stats[i]) return;
      const s = cfg.stats[i];
      const num = card.querySelector('.stat-number');
      if (num) {
        num.setAttribute('data-count', s.count);
        if (s.prefix) num.setAttribute('data-prefix', s.prefix);
        if (s.suffix) num.setAttribute('data-suffix', s.suffix);
      }
      const label = card.querySelector('.stat-label');
      if (label) setText(label, s.label);
    });
  }

  // ─── 8. SOCIAL PROOF ────────────────────────────────────────────────────

  function injectSocialProof() {
    const proofText = qs('.proof-info p');
    if (proofText) {
      const count = cfg.stats[0] ? cfg.stats[0].count : 0;
      if (count > 0) {
        setHTML(proofText, `<strong>+${count} ${cfg.stats[0].label || 'Atendimentos'}</strong> realizados`);
      }
    }
  }

  // ─── 9. ABOUT SECTION ───────────────────────────────────────────────────

  function injectAbout() {
    const aboutSection = qs('#sobre');
    if (!aboutSection) return;
    const aboutYear = aboutSection.querySelector('.about-year');
    if (aboutYear && cfg.brand.foundedYear) {
      setText(aboutYear, cfg.brand.foundedYear);
    }
  }

  // ─── 10. SECTIONS TOGGLE ─────────────────────────────────────────────────

  function injectSections() {
    if (!cfg || !cfg.sections) return;
    Object.keys(cfg.sections).forEach(id => {
      if (!cfg.sections[id]) {
        const section = document.getElementById(id);
        if (section) section.style.display = 'none';
        document.querySelectorAll(`[href="#${id}"]`).forEach(el => {
          el.style.display = 'none';
          if (el.closest('li')) el.closest('li').style.display = 'none';
        });
      }
    });
  }

  // ─── 11. INIT ALL ────────────────────────────────────────────────────────

  function init() {
    injectSections();
    injectBrand();
    injectWhatsApp();
    injectContact();
    injectFooter();
    injectSEO();
    injectSchema();
    injectStats();
    injectSocialProof();
    injectAbout();
  }

  // Aguarda o DOM carregar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();