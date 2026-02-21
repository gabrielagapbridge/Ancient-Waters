// ============================================================
// TRIBAL LENS — Territory-focused view of tribal nations
// Shows territory polygons + associated site layers
// ============================================================

(function () {
  'use strict';

  window.AW = window.AW || {};

  var selectedTribe = null;

  // Regional grouping for display
  var regions = {
    'California Coast': ['chumash', 'coastmiwok', 'bayohlone', 'pomo', 'yuki', 'mattole', 'klamath'],
    'California Interior': ['yokuts', 'greatbasin', 'mojave', 'diablo', 'sierra', 'modoc', 'wintu', 'maidu', 'wappo', 'easternca'],
    'Columbia Plateau': ['plateau'],
    'Northeast': ['mohican', 'maine', 'wampanoag', 'thunderbird', 'ctriver', 'berkshire'],
    'Great Lakes': ['haudenosaunee', 'wendat', 'neutral', 'erie']
  };

  function buildSidebar() {
    var sections = AW.engine.cultureSections;
    var config = AW.engine.config;

    var html = '<div class="layer-section"><div class="layer-section-title">Tribal Lens</div>';
    html += '<p class="lens-description">Explore by tribal territory. Select a nation to see their lands and associated archaeological sites.</p>';
    html += '<button class="lens-btn" onclick="AW.tribalLens.showAll()">Show All Territories</button>';
    html += '</div>';

    Object.keys(regions).forEach(function (regionName) {
      html += '<div class="lens-region-header">' + regionName + '</div>';

      regions[regionName].forEach(function (id) {
        var s = sections[id];
        if (!s) return;
        var isSelected = selectedTribe === id;
        var hasTerr = config && config.territoryLayers && config.territoryLayers[id];

        html += '<div class="lens-card' + (isSelected ? ' selected' : '') + (hasTerr ? '' : ' no-territory') + '" data-tribe="' + id + '" onclick="AW.tribalLens.selectTribe(\'' + id + '\')">';
        html += '<div class="lens-card-color" style="background:' + s.color + '"></div>';
        html += '<div class="lens-card-body">';
        html += '<div class="lens-card-name">' + s.name + '</div>';
        html += '<div class="lens-card-meta">' + s.meta + '</div>';
        if (hasTerr) {
          html += '<div class="lens-card-count">' + config.territoryLayers[id].length + ' territory layer' + (config.territoryLayers[id].length !== 1 ? 's' : '') + '</div>';
        }
        html += '</div></div>';

        // If selected, show layer toggles
        if (isSelected && s.layers) {
          html += '<div class="lens-sublayers">';
          s.layers.forEach(function (layerName) {
            var isVisible = L_groups[layerName] && map.hasLayer(L_groups[layerName]);
            html += '<label class="layer-toggle"><input type="checkbox" ' + (isVisible ? 'checked' : '') + ' onchange="toggle(\'' + layerName + '\')"><span style="color:' + s.color + '">' + formatLayerName(layerName) + '</span></label>';
          });
          html += '</div>';
        }
      });
    });

    return html;
  }

  function formatLayerName(name) {
    return name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, function (s) { return s.toUpperCase(); })
      .trim();
  }

  var tribalLens = {
    id: 'tribal',
    label: 'Tribal',

    activate: function () {
      if (selectedTribe) {
        applyFilter(selectedTribe);
      } else {
        showAllTerritories();
      }
    },

    deactivate: function () {},

    renderSidebar: function () {
      return buildSidebar();
    },

    selectTribe: function (id) {
      if (selectedTribe === id) {
        selectedTribe = null;
        showAllTerritories();
      } else {
        selectedTribe = id;
        applyFilter(id);
      }

      var body = document.getElementById('layer-body');
      if (body) body.innerHTML = buildSidebar();

      AW.engine.writeHash({ lens: 'tribal', sel: selectedTribe || '' });
    },

    showAll: function () {
      selectedTribe = null;
      showAllTerritories();

      var body = document.getElementById('layer-body');
      if (body) body.innerHTML = buildSidebar();

      AW.engine.writeHash({ lens: 'tribal' });
    }
  };

  function showAllTerritories() {
    var config = AW.engine.config;
    if (!config || !config.territoryLayers) return;

    // Collect all territory layers
    var terrLayers = [];
    Object.keys(config.territoryLayers).forEach(function (id) {
      config.territoryLayers[id].forEach(function (l) {
        if (terrLayers.indexOf(l) === -1) terrLayers.push(l);
      });
    });

    AW.engine.showLayers(terrLayers);
  }

  function applyFilter(tribeId) {
    var sections = AW.engine.cultureSections;
    var config = AW.engine.config;
    var section = sections[tribeId];
    if (!section) return;

    var layers = section.layers.slice();

    // Add territory layers
    if (config && config.territoryLayers && config.territoryLayers[tribeId]) {
      config.territoryLayers[tribeId].forEach(function (t) {
        if (layers.indexOf(t) === -1) layers.push(t);
      });
    }

    AW.engine.showLayers(layers);
  }

  AW.tribalLens = tribalLens;
  AW.engine.registerLens(tribalLens);
})();
