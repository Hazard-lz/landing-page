/* ==========================================================================
   PERFORMANCE OPTIMIZATION MODULE
   ========================================================================== */

function initPerformance() {
  const cfg = window.SITE_CONFIG;
  if (!cfg || !cfg.performance || !cfg.performance.enabled) return;

  const perf = cfg.performance;

  /* 1. Preconnect / dns-prefetch */
  if (perf.preconnectOrigins && perf.preconnectOrigins.length) {
    perf.preconnectOrigins.forEach(origin => {
      if (!document.querySelector(`link[rel="preconnect"][href="${origin}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = origin;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });
  }

  /* 2. Prefetch hints */
  if (perf.prefetchLinks && perf.prefetchLinks.length) {
    perf.prefetchLinks.forEach(({ href, as }) => {
      if (href && !document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        if (as) link.setAttribute('as', as);
        document.head.appendChild(link);
      }
    });
  }

  /* 3. Lazy load images */
  if (perf.lazyLoadImages) {
    document.querySelectorAll('img:not([loading])').forEach(img => {
      if (!img.closest('.hero') && !img.hasAttribute('fetchpriority')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }

  /* 4. Defer non-critical scripts */
  if (perf.deferScripts) {
    document.querySelectorAll('script[src]:not([defer]):not([async])').forEach(script => {
      if (!script.src.includes('site-config') && !script.src.includes('engine')) {
        script.setAttribute('defer', '');
      }
    });
  }
}
