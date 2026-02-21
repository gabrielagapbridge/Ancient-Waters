// ============================================================
// CULTURE LENS — Browse the map by Indigenous culture group
// Shows culture cards; clicking one filters to that culture's layers
// ============================================================

(function () {
  'use strict';

  window.AW = window.AW || {};

  var selectedCulture = null;

  function buildSidebar() {
    var sections = AW.engine.cultureSections;
    if (!sections || Object.keys(sections).length === 0) {
      return '<div class="layer-section"><div class="layer-section-title">Culture</div><p>Loading...</p></div>';
    }

    var html = '<div class="layer-section"><div class="layer-section-title">Culture Lens</div>';
    html += '<p class="lens-description">Select a culture to focus the map on their territory, villages, waterways and sacred sites.</p>';
    html += '<button class="lens-btn" onclick="AW.cultureLens.showAll()">Show All Cultures</button>';
    html += '</div>';

    Object.keys(sections).forEach(function (id) {
      var s = sections[id];
      var isSelected = selectedCulture === id;
      var layerCount = s.layers ? s.layers.length : 0;

      html += '<div class="lens-card' + (isSelected ? ' selected' : '') + '" data-culture="' + id + '" onclick="AW.cultureLens.selectCulture(\'' + id + '\')">';
      html += '<div class="lens-card-color" style="background:' + s.color + '"></div>';
      html += '<div class="lens-card-body">';
      html += '<div class="lens-card-name">' + s.name + '</div>';
      html += '<div class="lens-card-meta">' + s.meta + '</div>';
      html += '<div class="lens-card-count">' + layerCount + ' layer' + (layerCount !== 1 ? 's' : '') + '</div>';
      html += '</div></div>';

      // If selected, show individual layer toggles
      if (isSelected && s.layers) {
        html += '<div class="lens-sublayers">';
        s.layers.forEach(function (layerName) {
          var isVisible = L_groups[layerName] && map.hasLayer(L_groups[layerName]);
          html += '<label class="layer-toggle"><input type="checkbox" ' + (isVisible ? 'checked' : '') + ' onchange="toggle(\'' + layerName + '\')"><span style="color:' + s.color + '">' + formatLayerName(layerName) + '</span></label>';
        });
        html += '</div>';
      }
    });

    return html;
  }

  function formatLayerName(name) {
    return name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, function (s) { return s.toUpperCase(); })
      .trim();
  }

  var cultureLens = {
    id: 'culture',
    label: 'Culture',

    activate: function () {
      if (selectedCulture) {
        applyFilter(selectedCulture);
      }
      // else show all — don't change layer visibility on first enter
    },

    deactivate: function () {},

    renderSidebar: function () {
      return buildSidebar();
    },

    selectCulture: function (id) {
      // Toggle off if already selected
      if (selectedCulture === id) {
        selectedCulture = null;
        AW.engine.showAllLayers();
      } else {
        selectedCulture = id;
        applyFilter(id);
      }

      // Re-render sidebar to show/hide sublayers
      var body = document.getElementById('layer-body');
      if (body) body.innerHTML = buildSidebar();

      AW.engine.writeHash({ lens: 'culture', sel: selectedCulture || '' });
    },

    showAll: function () {
      selectedCulture = null;
      AW.engine.showAllLayers();

      var body = document.getElementById('layer-body');
      if (body) body.innerHTML = buildSidebar();

      // Remove selection from hash
      AW.engine.writeHash({ lens: 'culture' });
    }
  };

  function applyFilter(cultureId) {
    var sections = AW.engine.cultureSections;
    var section = sections[cultureId];
    if (!section) return;

    var layers = section.layers.slice();

    // Also add territory layers if available
    var config = AW.engine.config;
    if (config && config.territoryLayers && config.territoryLayers[cultureId]) {
      config.territoryLayers[cultureId].forEach(function (t) {
        if (layers.indexOf(t) === -1) layers.push(t);
      });
    }

    AW.engine.showLayers(layers);
  }

  AW.cultureLens = cultureLens;
  AW.engine.registerLens(cultureLens);
})();
