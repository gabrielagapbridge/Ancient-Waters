// ============================================================
// ROCK ART LENS — Shows only rock art layers, grouped by tradition
// ============================================================

(function () {
  'use strict';

  window.AW = window.AW || {};

  function buildSidebar() {
    var config = AW.engine.config;
    if (!config || !config.rockArtGroups) {
      return '<div class="layer-section"><div class="layer-section-title">Rock Art</div><p>Loading...</p></div>';
    }

    var html = '<div class="layer-section"><div class="layer-section-title">Rock Art Lens</div>';
    html += '<p class="lens-description">All rock art, petroglyphs, pictographs & cupule sites across ' + (config.rockArtLayers.length) + ' layers.</p>';
    html += '<label class="layer-toggle lens-toggle-all"><input type="checkbox" checked onchange="AW.rockartLens.toggleAll(this.checked)"><span style="color:var(--turquoise);font-weight:700">Show All Rock Art</span></label>';
    html += '</div>';

    var groups = config.rockArtGroups;
    Object.keys(groups).forEach(function (groupName) {
      var group = groups[groupName];
      html += '<div class="lens-group">';
      html += '<div class="lens-group-header">';
      html += '<div class="lens-group-color" style="background:' + group.color + '"></div>';
      html += '<div class="lens-group-title">' + groupName + '</div>';
      html += '<input type="checkbox" class="lens-group-master" checked onchange="AW.rockartLens.toggleGroup(\'' + groupName.replace(/'/g, "\\'") + '\', this.checked)">';
      html += '</div>';
      html += '<div class="lens-group-meta">' + group.description + '</div>';

      group.layers.forEach(function (layerName) {
        var isVisible = L_groups[layerName] && map.hasLayer(L_groups[layerName]);
        html += '<label class="layer-toggle"><input type="checkbox" ' + (isVisible ? 'checked' : '') + ' onchange="toggle(\'' + layerName + '\')"><span style="color:' + group.color + '">' + formatLayerName(layerName) + '</span></label>';
      });

      html += '</div>';
    });

    return html;
  }

  function formatLayerName(name) {
    // Convert camelCase to readable label
    return name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, function (s) { return s.toUpperCase(); })
      .replace(/Petro$/, ' Petroglyphs')
      .replace(/Pickto$/, ' Pictographs')
      .replace(/ Rock Art$/, ' Rock Art')
      .trim();
  }

  var rockartLens = {
    id: 'rockart',
    label: 'Rock Art',

    activate: function () {
      var config = AW.engine.config;
      if (config && config.rockArtLayers) {
        AW.engine.showLayers(config.rockArtLayers);
      }
    },

    deactivate: function () {},

    renderSidebar: function () {
      return buildSidebar();
    },

    toggleAll: function (checked) {
      var config = AW.engine.config;
      if (!config) return;
      config.rockArtLayers.forEach(function (name) {
        if (!L_groups[name]) return;
        var isShown = map.hasLayer(L_groups[name]);
        if (checked && !isShown) L_groups[name].addTo(map);
        if (!checked && isShown) map.removeLayer(L_groups[name]);
      });
      // Sync individual checkboxes
      document.querySelectorAll('.lens-group input[type="checkbox"]').forEach(function (cb) {
        cb.checked = checked;
      });
    },

    toggleGroup: function (groupName, checked) {
      var config = AW.engine.config;
      if (!config || !config.rockArtGroups[groupName]) return;
      config.rockArtGroups[groupName].layers.forEach(function (name) {
        if (!L_groups[name]) return;
        var isShown = map.hasLayer(L_groups[name]);
        if (checked && !isShown) L_groups[name].addTo(map);
        if (!checked && isShown) map.removeLayer(L_groups[name]);
      });
      // Sync child checkboxes in this group
      var groupEl = document.querySelector('.lens-group-master[onchange*="' + groupName.replace(/'/g, "\\'") + '"]');
      if (groupEl) {
        var container = groupEl.closest('.lens-group');
        if (container) {
          container.querySelectorAll('.layer-toggle input').forEach(function (cb) {
            cb.checked = checked;
          });
        }
      }
    }
  };

  AW.rockartLens = rockartLens;
  AW.engine.registerLens(rockartLens);
})();
