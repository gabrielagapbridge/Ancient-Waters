// ============================================================
// SITE SEARCH — type-ahead search across all loaded features
// ============================================================

(function initSearch() {
  'use strict';

  const index = [];   // {name, lat, lng, leafletObj}

  // Build index after data-loader finishes (poll for features)
  let tries = 0;
  const poll = setInterval(() => {
    tries++;
    if (tries > 100) { clearInterval(poll); return; }

    // Check if loading screen is gone (data-loader sets .hidden)
    const el = document.getElementById('loading');
    if (el && !el.classList.contains('hidden')) return;
    clearInterval(poll);
    buildIndex();
    createUI();
  }, 200);

  function buildIndex() {
    // Walk every layer group, extract name from popup <h3> tag
    for (const [groupName, group] of Object.entries(L_groups)) {
      group.eachLayer(function (layer) {
        const popup = layer.getPopup && layer.getPopup();
        if (!popup) return;
        const html = popup.getContent();
        if (!html || typeof html !== 'string') return;

        // Extract text from first <h3> or first <b> tag
        let name = '';
        const h3 = html.match(/<h3[^>]*>(.*?)<\/h3>/i);
        if (h3) {
          name = h3[1].replace(/<[^>]+>/g, '').trim();
        } else {
          const b = html.match(/<b>(.*?)<\/b>/i);
          if (b) name = b[1].replace(/<[^>]+>/g, '').trim();
        }
        if (!name) return;

        // Decode HTML entities
        const txt = document.createElement('textarea');
        txt.innerHTML = name;
        name = txt.value;

        let lat, lng;
        if (layer.getLatLng) {
          const ll = layer.getLatLng();
          lat = ll.lat; lng = ll.lng;
        } else if (layer.getBounds) {
          const c = layer.getBounds().getCenter();
          lat = c.lat; lng = c.lng;
        } else {
          return;
        }

        index.push({ name, lat, lng, layer, group: groupName });
      });
    }

    // Sort alphabetically
    index.sort((a, b) => a.name.localeCompare(b.name));
    console.log('Search index: ' + index.length + ' features indexed');
  }

  function createUI() {
    // Container
    const container = document.createElement('div');
    container.id = 'site-search';
    container.innerHTML =
      '<input type="text" id="search-input" placeholder="Search sites..." autocomplete="off" spellcheck="false">' +
      '<div id="search-results"></div>';
    document.body.appendChild(container);

    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');

    input.addEventListener('input', function () {
      const q = this.value.trim().toLowerCase();
      results.innerHTML = '';
      if (q.length < 2) { results.style.display = 'none'; return; }

      const matches = index.filter(f =>
        f.name.toLowerCase().includes(q)
      ).slice(0, 12);

      if (matches.length === 0) {
        results.style.display = 'none';
        return;
      }

      matches.forEach(m => {
        const div = document.createElement('div');
        div.className = 'search-result';
        // Highlight matching text
        const idx = m.name.toLowerCase().indexOf(q);
        div.innerHTML =
          escHtml(m.name.substring(0, idx)) +
          '<b>' + escHtml(m.name.substring(idx, idx + q.length)) + '</b>' +
          escHtml(m.name.substring(idx + q.length));
        div.addEventListener('click', function () {
          input.value = m.name;
          results.style.display = 'none';
          map.flyTo([m.lat, m.lng], 14, { duration: 1.2 });
          setTimeout(() => {
            // Ensure the layer's parent group is on the map
            if (m.layer._map || (L_groups[m.group] && map.hasLayer(L_groups[m.group]))) {
              m.layer.openPopup();
            } else {
              // Add layer group to map if hidden, then open
              if (L_groups[m.group]) {
                L_groups[m.group].addTo(map);
              }
              setTimeout(() => m.layer.openPopup(), 300);
            }
          }, 1300);
        });
        results.appendChild(div);
      });
      results.style.display = 'block';
    });

    // Close on click outside
    document.addEventListener('click', function (e) {
      if (!container.contains(e.target)) {
        results.style.display = 'none';
      }
    });

    // Close on Escape
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        this.value = '';
        results.style.display = 'none';
        this.blur();
      }
    });
  }

  function escHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
})();
