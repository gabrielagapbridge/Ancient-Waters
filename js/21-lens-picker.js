// ============================================================
// LENS PICKER — Pill button bar for switching lenses
// Created programmatically below the region nav
// ============================================================

(function () {
  'use strict';

  var pills = [
    { id: 'explorer', label: 'Explorer' },
    { id: 'time',     label: 'Time' },
    { id: 'culture',  label: 'Culture' },
    { id: 'rockart',  label: 'Rock Art' },
    { id: 'tribal',   label: 'Tribal' }
  ];

  function createPicker() {
    var bar = document.createElement('div');
    bar.className = 'lens-picker';

    pills.forEach(function (p) {
      var btn = document.createElement('button');
      btn.className = 'lens-pill' + (p.id === 'explorer' ? ' active' : '');
      btn.textContent = p.label;
      btn.dataset.lens = p.id;
      btn.addEventListener('click', function () {
        AW.engine.activateLens(p.id);
      });
      bar.appendChild(btn);
    });

    document.body.appendChild(bar);
  }

  // Create picker when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createPicker);
  } else {
    createPicker();
  }
})();
