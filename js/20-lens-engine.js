// ============================================================
// LENS ENGINE — Phase 2 Core Module
// Manages lens registration, activation, sidebar swapping,
// and layer visibility. window.AW namespace for all state.
// ============================================================

(function () {
  'use strict';

  window.AW = window.AW || {};

  // ---- State ----
  var lenses = {};
  var activeLensId = null;
  var originalSidebarHTML = '';
  var savedLayerState = {};    // { layerName: true/false }
  var cultureSections = {};    // parsed from DOM
  var lensConfig = null;       // from lens-config.json

  // Base layers: always visible in every lens (water infrastructure)
  var BASE_LAYERS = [
    'ancientRivers', 'ancientLakes', 'modernDams',
    'modernReservoirs', 'lostRivers'
  ];

  // ---- Public API ----
  var engine = {
    lenses: lenses,
    cultureSections: cultureSections,
    config: null,

    // Called once after data-loader finishes
    init: function () {
      // Save original sidebar HTML
      var body = document.getElementById('layer-body');
      if (body) originalSidebarHTML = body.innerHTML;

      // Parse culture sections from DOM
      engine.parseCultureSections();

      // Fetch lens config
      fetch('data/config/lens-config.json')
        .then(function (r) { return r.json(); })
        .then(function (data) {
          lensConfig = data;
          engine.config = data;

          // Merge extraCultures into cultureSections
          if (data.extraCultures) {
            Object.keys(data.extraCultures).forEach(function (id) {
              if (!cultureSections[id]) {
                cultureSections[id] = data.extraCultures[id];
              }
            });
          }

          // Save initial layer state
          engine.saveLayerState();

          // Read URL hash and activate lens
          var hashLens = engine.readHash().lens || 'explorer';
          if (lenses[hashLens]) {
            engine.activateLens(hashLens);
          } else {
            engine.activateLens('explorer');
          }

          console.log('Lens engine: initialized with ' + Object.keys(lenses).length + ' lenses, ' + Object.keys(cultureSections).length + ' culture sections');
        })
        .catch(function (err) {
          console.warn('Lens engine: config load failed, defaulting to explorer —', err.message);
          engine.saveLayerState();
          engine.activateLens('explorer');
        });
    },

    // Parse .culture-section elements from DOM
    parseCultureSections: function () {
      document.querySelectorAll('.culture-section').forEach(function (el) {
        var id = el.id.replace('culture-', '');
        var header = el.querySelector('.culture-header-text');
        var nameEl = header ? header.querySelector('.culture-name') : null;
        var metaEl = header ? header.querySelector('.culture-meta') : null;
        var colorBar = el.querySelector('.culture-color-bar');
        var regionsStr = el.dataset.regions || '';

        // Extract layer names from toggle checkboxes
        var layers = [];
        el.querySelectorAll('.culture-layers label input[type="checkbox"]').forEach(function (cb) {
          var onchange = cb.getAttribute('onchange') || '';
          var match = onchange.match(/toggle\('([^']+)'\)/);
          if (match) layers.push(match[1]);
        });

        cultureSections[id] = {
          name: nameEl ? nameEl.textContent.trim() : id,
          meta: metaEl ? metaEl.textContent.trim() : '',
          color: colorBar ? colorBar.style.backgroundColor || '#888' : '#888',
          regions: regionsStr.split(' ').filter(Boolean),
          layers: layers
        };
      });
    },

    // Register a lens object
    registerLens: function (lens) {
      if (!lens || !lens.id) {
        console.warn('Lens engine: cannot register lens without id');
        return;
      }
      lenses[lens.id] = lens;
    },

    // Activate a lens by id
    activateLens: function (id) {
      if (!lenses[id]) {
        console.warn('Lens engine: unknown lens "' + id + '"');
        return;
      }

      // Deactivate current lens
      if (activeLensId && lenses[activeLensId] && lenses[activeLensId].deactivate) {
        lenses[activeLensId].deactivate();
      }

      activeLensId = id;

      // Update picker UI
      document.querySelectorAll('.lens-pill').forEach(function (pill) {
        pill.classList.toggle('active', pill.dataset.lens === id);
      });

      // Activate new lens
      var lens = lenses[id];

      // Render sidebar
      if (lens.renderSidebar) {
        var body = document.getElementById('layer-body');
        if (body) {
          body.classList.add('lens-sidebar-fade-out');
          setTimeout(function () {
            body.innerHTML = lens.renderSidebar();
            body.classList.remove('lens-sidebar-fade-out');
            body.classList.add('lens-sidebar-fade-in');
            setTimeout(function () {
              body.classList.remove('lens-sidebar-fade-in');
            }, 150);
          }, 100);
        }
      }

      if (lens.activate) lens.activate();

      // Update URL hash
      engine.writeHash({ lens: id });
    },

    getActiveLensId: function () {
      return activeLensId;
    },

    // Show only the listed layers, hide all others.
    // Base layers (water features) are always kept visible.
    showLayers: function (names) {
      var nameSet = {};
      names.forEach(function (n) { nameSet[n] = true; });
      // Always include base layers
      BASE_LAYERS.forEach(function (n) { nameSet[n] = true; });

      Object.keys(L_groups).forEach(function (name) {
        var group = L_groups[name];
        if (!group) return;
        var shouldShow = !!nameSet[name];
        var isShown = map.hasLayer(group);

        if (shouldShow && !isShown) {
          group.addTo(map);
        } else if (!shouldShow && isShown) {
          map.removeLayer(group);
        }
      });
    },

    // Show all layers (restore everything visible)
    showAllLayers: function () {
      Object.keys(L_groups).forEach(function (name) {
        var group = L_groups[name];
        if (group && !map.hasLayer(group)) {
          group.addTo(map);
        }
      });
    },

    // Save current layer visibility state
    saveLayerState: function () {
      savedLayerState = {};
      Object.keys(L_groups).forEach(function (name) {
        savedLayerState[name] = map.hasLayer(L_groups[name]);
      });
    },

    // Restore saved layer visibility state
    restoreLayerState: function () {
      Object.keys(L_groups).forEach(function (name) {
        var group = L_groups[name];
        if (!group) return;
        var shouldShow = savedLayerState[name] !== false; // default to visible
        var isShown = map.hasLayer(group);

        if (shouldShow && !isShown) {
          group.addTo(map);
        } else if (!shouldShow && isShown) {
          map.removeLayer(group);
        }
      });
    },

    // Restore original sidebar HTML and sync checkboxes
    restoreOriginalSidebar: function () {
      var body = document.getElementById('layer-body');
      if (body && originalSidebarHTML) {
        body.innerHTML = originalSidebarHTML;
        engine.syncCheckboxes();
      }
    },

    // Sync sidebar checkboxes to actual layer visibility
    syncCheckboxes: function () {
      document.querySelectorAll('.culture-layers input[type="checkbox"], .layer-section input[type="checkbox"]').forEach(function (cb) {
        var onchange = cb.getAttribute('onchange') || '';
        var match = onchange.match(/toggle\('([^']+)'\)/);
        if (match && L_groups[match[1]]) {
          cb.checked = map.hasLayer(L_groups[match[1]]);
        }
      });

      // Sync culture master checkboxes
      document.querySelectorAll('.culture-master').forEach(function (master) {
        var section = master.closest('.culture-section');
        if (!section) return;
        var layerCbs = section.querySelectorAll('.culture-layers input[type="checkbox"]');
        var allChecked = true;
        layerCbs.forEach(function (cb) { if (!cb.checked) allChecked = false; });
        master.checked = allChecked;
      });
    },

    // Get all layer names for a culture section
    getLayersForCulture: function (cultureId) {
      var section = cultureSections[cultureId];
      return section ? section.layers.slice() : [];
    },

    // Get all layer names across all culture sections
    getAllCultureLayers: function () {
      var all = [];
      Object.keys(cultureSections).forEach(function (id) {
        cultureSections[id].layers.forEach(function (l) {
          if (all.indexOf(l) === -1) all.push(l);
        });
      });
      return all;
    },

    // URL hash helpers
    readHash: function () {
      var params = {};
      var hash = window.location.hash.replace('#', '');
      hash.split('&').forEach(function (pair) {
        var kv = pair.split('=');
        if (kv[0]) params[kv[0]] = decodeURIComponent(kv[1] || '');
      });
      return params;
    },

    writeHash: function (params) {
      var parts = [];
      Object.keys(params).forEach(function (k) {
        if (params[k]) parts.push(k + '=' + encodeURIComponent(params[k]));
      });
      history.replaceState(null, '', '#' + parts.join('&'));
    }
  };

  engine.BASE_LAYERS = BASE_LAYERS;
  window.AW.engine = engine;

  // ---- Auto-init: wait for data-loader to finish ----
  function waitForDataLoader() {
    var loadingEl = document.getElementById('loading');
    if (loadingEl && loadingEl.classList.contains('hidden')) {
      engine.init();
      return;
    }
    // Also check if L_groups has been populated (fallback)
    if (Object.keys(L_groups).length > 50) {
      engine.init();
      return;
    }
    setTimeout(waitForDataLoader, 200);
  }

  // Start checking after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(waitForDataLoader, 300);
    });
  } else {
    setTimeout(waitForDataLoader, 300);
  }

  // Listen for hash changes
  window.addEventListener('hashchange', function () {
    var params = engine.readHash();
    if (params.lens && params.lens !== activeLensId && lenses[params.lens]) {
      engine.activateLens(params.lens);
    }
  });
})();
