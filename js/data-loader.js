// ============================================================
// DATA LOADER — Phase 1 of Lens System Architecture
// Loads site data from JSON files and creates Leaflet features
// Replaces 62 individual JS data files
// ============================================================

(async function loadMapData() {
  'use strict';

  try {
    // 1. Fetch layer registry
    const registry = await fetch('data/meta/layer-registry.json').then(r => r.json());

    // 2. Create custom panes (must exist before features reference them)
    if (registry.panes) {
      for (const [paneName, paneConfig] of Object.entries(registry.panes)) {
        if (!map.getPane(paneName)) {
          map.createPane(paneName);
          if (paneConfig.zIndex) {
            map.getPane(paneName).style.zIndex = paneConfig.zIndex;
          }
        }
      }
    }

    // 3. Create all layer groups
    const layerNamesFromRegistry = Object.keys(registry.layers);
    for (const [name, config] of Object.entries(registry.layers)) {
      if (L_groups[name]) continue; // Skip if already exists (shouldn't happen, but safe)
      if (config.type === 'markerClusterGroup') {
        L_groups[name] = L.markerClusterGroup(config.clusterOptions || {});
      } else {
        L_groups[name] = L.layerGroup();
      }
      if (config.addedToMap !== false) {
        L_groups[name].addTo(map);
      }
    }

    // Expose layerNames globally for timeline.js backward compatibility
    if (typeof window !== 'undefined') {
      window.layerNames = layerNamesFromRegistry;
    }

    // 4. Collect unique data source files
    const dataFiles = new Set();
    for (const config of Object.values(registry.layers)) {
      if (config.dataSources) {
        config.dataSources.forEach(f => dataFiles.add(f));
      }
    }

    // 5. Fetch all data files in parallel
    const fileArray = Array.from(dataFiles);
    const fetchPromises = fileArray.map(f =>
      fetch('data/layers/' + f)
        .then(r => {
          if (!r.ok) throw new Error('Failed to load ' + f + ': ' + r.status);
          return r.json();
        })
        .catch(err => {
          console.warn('Data loader: skipping ' + f + ' —', err.message);
          return null;
        })
    );

    const allData = await Promise.all(fetchPromises);

    // 6. Create Leaflet features from JSON
    let totalFeatures = 0;
    allData.forEach(fileData => {
      if (!fileData || !fileData.features) return;

      fileData.features.forEach(f => {
        if (!f.layer || !L_groups[f.layer]) {
          console.warn('Data loader: unknown layer "' + f.layer + '" in ' + fileData.source);
          return;
        }

        let leafletObj = null;

        try {
          switch (f.type) {
            case 'marker':
              leafletObj = L.marker(
                [f.geometry.lat, f.geometry.lng],
                buildMarkerOptions(f)
              );
              break;

            case 'circleMarker':
              leafletObj = L.circleMarker(
                [f.geometry.lat, f.geometry.lng],
                buildCircleMarkerStyle(f)
              );
              break;

            case 'polyline':
              leafletObj = L.polyline(f.geometry, f.style || {});
              break;

            case 'circle':
              leafletObj = L.circle(
                [f.geometry.lat, f.geometry.lng],
                f.style || {}
              );
              break;

            case 'polygon':
              leafletObj = L.polygon(f.geometry, f.style || {});
              break;

            default:
              console.warn('Data loader: unknown feature type "' + f.type + '"');
              return;
          }
        } catch (err) {
          console.warn('Data loader: error creating feature —', err.message, f);
          return;
        }

        if (leafletObj) {
          // Bind popup if present
          if (f.popup) {
            leafletObj.bindPopup(f.popup, f.popupOptions || {});
          }

          // Add to layer group
          leafletObj.addTo(L_groups[f.layer]);
          totalFeatures++;
        }
      });
    });

    console.log('Data loader: loaded ' + totalFeatures + ' features from ' + fileArray.length + ' files');

    // 7. Update feature count display if present
    const countEl = document.getElementById('feature-count');
    if (countEl) {
      countEl.textContent = totalFeatures + '+';
    }

    // 8. Signal loading complete
    const loadingEl = document.getElementById('loading');
    if (loadingEl) {
      loadingEl.classList.add('hidden');
    }

  } catch (err) {
    console.error('Data loader: fatal error —', err);
    const loadingEl = document.getElementById('loading');
    if (loadingEl) {
      loadingEl.textContent = 'Error loading map data. Please refresh.';
    }
  }
})();

// ============================================================
// HELPER: Build marker options (icon resolution)
// ============================================================
function buildMarkerOptions(f) {
  const opts = {};

  if (f.icon) {
    switch (f.icon.factory) {
      case 'mkIcon':
        opts.icon = mkIcon(f.icon.color, f.icon.size);
        break;
      case 'mkPetroIcon':
        opts.icon = mkPetroIcon(f.icon.color, f.icon.size);
        break;
      case 'mkPictoIcon':
        opts.icon = mkPictoIcon(f.icon.color, f.icon.size);
        break;
      case 'mkBothIcon':
        opts.icon = mkBothIcon(f.icon.color, f.icon.size);
        break;
      case 'mkPCNIcon':
        opts.icon = mkPCNIcon(f.icon.size);
        break;
      case 'raIcon':
        opts.icon = raIcon(f.icon.raType, f.icon.color, f.icon.size);
        break;
      case 'divIcon':
        opts.icon = L.divIcon({
          className: f.icon.className || '',
          html: f.icon.html || '',
          iconSize: f.icon.iconSize || [20, 20],
          iconAnchor: f.icon.iconAnchor || [10, 10]
        });
        break;
      default:
        // Fallback: try to use the factory name as a function
        console.warn('Data loader: unknown icon factory "' + f.icon.factory + '"');
    }
  }

  // Handle interactive: false (used for label markers)
  if (f.options && f.options.interactive === false) {
    opts.interactive = false;
  }

  // Handle custom pane
  if (f.options && f.options.pane) {
    opts.pane = f.options.pane;
  }

  return opts;
}

// ============================================================
// HELPER: Build circleMarker style
// ============================================================
function buildCircleMarkerStyle(f) {
  const style = Object.assign({}, f.style || {});

  // Handle interactive: false
  if (f.options && f.options.interactive === false) {
    style.interactive = false;
  }

  // Handle custom pane
  if (f.options && f.options.pane) {
    style.pane = f.options.pane;
  }

  return style;
}
