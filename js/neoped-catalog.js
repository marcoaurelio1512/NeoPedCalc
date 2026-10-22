(() => {
  'use strict';
  const root = document.querySelector('[data-catalog]');
  if (!root) return;
  const mode = root.dataset.catalog;
  const catalog = window.NEOPED_CATALOG || {};
  const entries = [];
  const seen = new Set();
  Object.entries(catalog).forEach(([specialty, groups]) => {
    if (mode !== 'all' && mode !== specialty) return;
    groups.forEach(group => group.items.forEach(item => {
      // A shared calculator appears once in the all-specialties view.
      if (seen.has(item.url)) return;
      seen.add(item.url);
      entries.push({ ...item, category: group.title, specialty });
    }));
  });
  let favoritesOnly = false;
  let category = '';
  let memory = {};
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  function readFavorites() {
    const result = {};
    ['neonatal', 'pediatrico'].forEach(key => {
      try {
        const raw = JSON.parse(localStorage.getItem('neopedcalc_favoritos_' + key) || '{}');
        Object.values(raw).forEach(value => { if (value && typeof value.url === 'string') result[value.url] = true; });
      } catch {}
    });
    return { ...result, ...memory };
  }
  function toggleFavorite(entry) {
    const active = !readFavorites()[entry.url];
    memory[entry.url] = active;
    Object.entries(catalog).forEach(([key, groups]) => {
      if (!groups.some(group => group.items.some(item => item.url === entry.url))) return;
      const storageKey = 'neopedcalc_favoritos_' + key;
      try {
        let saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
        if (!saved || typeof saved !== 'object' || Array.isArray(saved)) saved = {};
        Object.keys(saved).forEach(k => { if (saved[k]?.url === entry.url) delete saved[k]; });
        if (active) saved[entry.title + '|' + entry.url] = { title: entry.title, url: entry.url };
        localStorage.setItem(storageKey, JSON.stringify(saved));
      } catch {}
    });
    const focusedUrl = document.activeElement?.dataset.favoriteUrl;
    render();
    if (focusedUrl) [...document.querySelectorAll('[data-favorite-url]')].find(el => el.dataset.favoriteUrl === focusedUrl)?.focus();
    window.neopedToast?.(active ? 'Adicionado aos favoritos.' : 'Removido dos favoritos.');
  }
  function element(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  }
  const search = document.getElementById('catalog-search');
  const results = document.getElementById('catalog-results');
  const categories = [...new Set(entries.map(e => e.category))];
  function render() {
    const favorites = readFavorites();
    const query = normalize(search.value.trim());
    const visible = entries.filter(entry => (!category || entry.category === category) && (!favoritesOnly || favorites[entry.url]) && normalize(entry.title + ' ' + entry.category + ' ' + (entry.specialty === 'neonatal' ? 'neonatologia' : 'pediatria')).includes(query));
    document.getElementById('results-count').textContent = visible.length + (visible.length === 1 ? ' ferramenta' : ' ferramentas');
    document.getElementById('results-title').textContent = favoritesOnly ? 'Seus favoritos' : (category || 'Todas as áreas');
    document.getElementById('favorites-count').textContent = entries.filter(entry => favorites[entry.url]).length;
    document.getElementById('catalog-empty').hidden = visible.length > 0;
    results.replaceChildren();
    categories.forEach(name => {
      const items = visible.filter(entry => entry.category === name);
      if (!items.length) return;
      const section = element('section', 'np-calc-group');
      section.append(element('h3', '', name));
      const grid = element('div', 'np-calc-grid');
      items.forEach(entry => {
        const card = element('article', 'np-calc-card');
        const link = element('a');
        link.href = entry.url;
        link.append(element('h4', '', entry.title));
        const meta = element('div', 'np-calc-meta');
        meta.append(element('span', '', entry.specialty === 'neonatal' ? 'Neonatal' : 'Pediátrica'), element('span', '', 'Consulta educacional'));
        link.append(meta);
        const star = element('button', 'np-star', favorites[entry.url] ? '★' : '☆');
        star.type = 'button';
        star.dataset.favoriteUrl = entry.url;
        star.setAttribute('aria-label', (favorites[entry.url] ? 'Remover dos favoritos: ' : 'Adicionar aos favoritos: ') + entry.title);
        star.setAttribute('aria-pressed', String(Boolean(favorites[entry.url])));
        star.addEventListener('click', () => toggleFavorite(entry));
        const arrow = element('span', 'np-calc-arrow', '↗');
        arrow.setAttribute('aria-hidden', 'true');
        card.append(link, star, arrow);
        grid.append(card);
      });
      section.append(grid);
      results.append(section);
    });
    const filters = document.getElementById('category-filters');
    filters.replaceChildren();
    ['', ...categories].forEach(name => {
      const button = element('button', 'np-category', name || 'Todas as áreas');
      button.type = 'button';
      button.setAttribute('aria-pressed', String(category === name));
      button.append(element('span', '', String(name ? entries.filter(e => e.category === name).length : entries.length)));
      button.addEventListener('click', () => { category = name; render(); [...filters.children].find(el => el.getAttribute('aria-pressed') === 'true')?.focus(); });
      filters.append(button);
    });
    const url = new URL(location.href);
    if (search.value) url.searchParams.set('q', search.value); else url.searchParams.delete('q');
    history.replaceState(null, '', url);
  }
  search.value = new URLSearchParams(location.search).get('q') || '';
  search.addEventListener('input', render);
  document.getElementById('favorites-filter').addEventListener('click', event => {
    favoritesOnly = !favoritesOnly;
    event.currentTarget.setAttribute('aria-pressed', String(favoritesOnly));
    render();
  });
  document.getElementById('clear-filters').addEventListener('click', () => {
    search.value = ''; category = ''; favoritesOnly = false;
    document.getElementById('favorites-filter').setAttribute('aria-pressed', 'false');
    render(); search.focus();
  });
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !/input|textarea|select/i.test(event.target.tagName)) { event.preventDefault(); search.focus(); }
  });
  window.addEventListener('storage', () => { memory = {}; render(); });
  render();
})();
