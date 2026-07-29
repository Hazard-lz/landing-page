/* ==========================================================================
   LANDING PAGE TEMPLATE - MASTER JAVASCRIPT ORCHESTRATOR
   Modular JS Architecture: Pure Vanilla JS - Zero External Dependencies
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Performance (js/performance.js)
  if (typeof initPerformance === 'function') initPerformance();

  // Fixed Theme (must run before other theme controllers)
  if (typeof initFixedTheme === 'function') initFixedTheme();

  // Theme, Niche & Interface Controllers (js/theme-switcher.js)
  if (typeof initPreloader === 'function') initPreloader();
  if (typeof initNavbarAndProgress === 'function') initNavbarAndProgress();
  if (typeof initBackToTop === 'function') initBackToTop();


  // Animations & Visual Effects (js/animations.js)
  if (typeof initParticleCanvas === 'function') initParticleCanvas();

  if (typeof initRevealOnScroll === 'function') initRevealOnScroll();
  // init3DTilt removed
  if (typeof initButtonEffects === 'function') initButtonEffects();

  // Interactive Components & Forms (js/components.js)
  if (typeof initFAQAccordion === 'function') initFAQAccordion();
  if (typeof initContactForm === 'function') initContactForm();
  if (typeof initCookieConsent === 'function') initCookieConsent();

  // Conversion & Analytics Modules
  if (typeof initWhatsAppWidget === 'function') initWhatsAppWidget();
  if (typeof initAnalytics === 'function') initAnalytics();
});
