// ============================================================
// TIME LENS — Browse the map by historical era
// Uses timeline-eras.json (already loaded by 16-timeline.js)
// ============================================================

(function () {
  'use strict';

  window.AW = window.AW || {};

  var eraDescriptions = [
    'All layers visible — full dataset',
    'First Peoples — Clovis, pluvial lakes, earliest sites',
    'Flourishing — Hohokam canals, trade networks, rock art',
    'Hohokam Peak — canal systems at maximum extent',
    'Contact — Spanish missions, first colonial encounters',
    'Settlement — land grants, early dams, forced removals',
    'Dam Era — massive infrastructure, drowned homelands',
    'Present Day — what remains, what was lost, what endures'
  ];

  var selectedEra = 0;

  function buildSidebar() {
    var html = '<div class="layer-section"><div class="layer-section-title">Time Lens</div>';
    html += '<p class="lens-description">Explore the map through eight eras of Indigenous history. Each era shows layers relevant to that time period.</p>';
    html += '</div>';

    // Get era data from the global eras array (loaded by timeline.js)
    var eraLabels = ['All Eras', '10,000 BCE', '1000 BCE – 1450 CE', 'Hohokam Peak ~1300',
                     'Contact ~1540', 'Settlement ~1850', 'Dam Era ~1940', 'Present Day'];

    for (var i = 0; i < eraLabels.length; i++) {
      var isActive = i === selectedEra;
      html += '<div class="lens-card' + (isActive ? ' selected' : '') + '" data-era="' + i + '" onclick="AW.timeLens.selectEra(' + i + ')">';
      html += '<div class="lens-card-color" style="background:' + getEraColor(i) + '"></div>';
      html += '<div class="lens-card-body">';
      html += '<div class="lens-card-name">' + eraLabels[i] + '</div>';
      html += '<div class="lens-card-meta">' + eraDescriptions[i] + '</div>';
      html += '</div></div>';
    }

    return html;
  }

  function getEraColor(index) {
    var colors = ['#40E0D0', '#4FC3F7', '#FFB74D', '#FF7043', '#CE93D8', '#EF5350', '#696969', '#2E8B57'];
    return colors[index] || '#888';
  }

  var timeLens = {
    id: 'time',
    label: 'Time',

    activate: function () {
      // Apply currently selected era
      setEra(selectedEra);
    },

    deactivate: function () {
      // Reset timeline to "All Eras" when leaving
      setEra(0);
    },

    renderSidebar: function () {
      return buildSidebar();
    },

    selectEra: function (index) {
      selectedEra = index;
      setEra(index);

      // Update card highlights
      document.querySelectorAll('.lens-card').forEach(function (card) {
        card.classList.toggle('selected', parseInt(card.dataset.era) === index);
      });
    }
  };

  AW.timeLens = timeLens;
  AW.engine.registerLens(timeLens);
})();
