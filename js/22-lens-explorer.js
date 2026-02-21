// ============================================================
// EXPLORER LENS — Default lens, restores original sidebar
// ============================================================

(function () {
  'use strict';

  window.AW = window.AW || {};

  AW.engine.registerLens({
    id: 'explorer',
    label: 'Explorer',

    activate: function () {
      AW.engine.restoreLayerState();
      AW.engine.syncCheckboxes();
    },

    deactivate: function () {
      // Save layer state when leaving explorer
      AW.engine.saveLayerState();
    },

    renderSidebar: function () {
      AW.engine.restoreOriginalSidebar();
      return document.getElementById('layer-body').innerHTML;
    }
  });
})();
