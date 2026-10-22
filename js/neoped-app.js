(() => {
  'use strict';
  document.querySelectorAll('[data-neoped-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  if (window.NEOPED_CATALOG) {
    const count = new Set(Object.values(window.NEOPED_CATALOG).flatMap(groups => groups.flatMap(group => group.items.map(item => item.url)))).size;
    document.querySelectorAll('[data-catalog-count]').forEach(el => { el.textContent = count + ''; });
  }
  fetch('/api/config').then(res => res.ok ? res.json() : null).then(config => {
    if (!config?.demo) return;
    const banner = document.createElement('div');
    banner.className = 'np-demo-banner';
    banner.textContent = 'Prévia local · Login e pagamentos precisam ser configurados para ativar as vendas.';
    document.body.prepend(banner);
  }).catch(() => {});
})();
