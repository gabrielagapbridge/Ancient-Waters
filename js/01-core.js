// ========== MAP INIT ==========
const map = L.map('map', { center: [36, -115], zoom: 6, minZoom: 4, maxZoom: 16 });

// Earth-tone terrain basemap
const terrain = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Sources: Esri, USGS, NOAA', maxZoom: 19
});
const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, Maxar, Earthstar', maxZoom: 19
});
const darkMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap &copy; CARTO', subdomains: 'abcd', maxZoom: 19
});
terrain.addTo(map);

// Coordinate display on mouse move
const coordBox = document.getElementById('coord-display');
map.on('mousemove', function(e) {
  coordBox.textContent = e.latlng.lat.toFixed(5) + '°N, ' + Math.abs(e.latlng.lng).toFixed(5) + '°W';
});
map.on('click', function(e) {
  const lat = e.latlng.lat.toFixed(6);
  const lng = e.latlng.lng.toFixed(6);
  L.popup().setLatLng(e.latlng).setContent(
    `<div style="font-family:monospace;font-size:12px;color:var(--turquoise)">${lat}, ${lng}</div><div style="font-size:10px;color:var(--text-dim);margin-top:3px">Click coordinates to copy</div>`
  ).openOn(map);
  navigator.clipboard.writeText(`${lat}, ${lng}`).catch(()=>{});
});

// ========== LAYERS ==========
const L_groups = {};
const layerNames = ['ancientRivers','ancientLakes','modernDams','modernReservoirs','lostRivers',
  'hohokamCanals','swSites','jtreeSites','eastBaySites','spanishSites',
  'rockArt',
  'marinCreeks',
  'langTerritories',
  'languageZones',
  'bayMiwokTribelets',
  'yokutsTerr',
  'sValleyYokuts',
  'foothillYokuts',
  'yokutsNeighbors',
  'greatBasinRockArt',
  'pluvialLakes',
  'numicTerritories',
  'preNumicSites',
  'scRockArt',
  'centralValleyLakes','owensChain','waterDiversions','lakeCorcoran',
  'springs','cienegas','tradeRoutes','modernInfra',
  'shellmounds','buriedCreeks','bayFill','constructionFinds','bayMissions','historicShoreline',
  'martisRockArt',
  'chumashSacred',
  'chumashWaterways',
  'chumashVillages',
  'lostWaters',
  'tradeNetwork',
  'pomoVillages',
  'pomoWaterways',
  'pomoSacred',
  'pomoLostWaters',
  'pomoRockArt',
  'pomoCoastalVillages',
  'pomoCoastalWater',
  'pomoCoastalSacred',
  'pomoCoastalLost'];
layerNames.forEach(n => { L_groups[n] = (n === 'eastBaySites') ? L.markerClusterGroup({maxClusterRadius:40}) : L.layerGroup(); L_groups[n].addTo(map); });

function toggle(name) { map.hasLayer(L_groups[name]) ? map.removeLayer(L_groups[name]) : L_groups[name].addTo(map); }

// Layers hidden by default (too large or distracting at overview zoom)
['lakeCorcoran'].forEach(n => { if(L_groups[n]) map.removeLayer(L_groups[n]); });

// Basemap switching
const baseMaps = { terrain, satellite, dark: darkMap };
let activeBase = 'terrain';
function switchBase(name) {
  map.removeLayer(baseMaps[activeBase]);
  baseMaps[name].addTo(map);
  activeBase = name;
  document.querySelectorAll('.basemap-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('btn-' + name).classList.add('active');
}

// Collapsible layer panel
function toggleLayerPanel() {
  const body = document.getElementById('layer-body');
  const arrow = document.getElementById('collapse-arrow');
  body.classList.toggle('collapsed');
  arrow.classList.toggle('collapsed');
}

// ===== CULTURE SECTION ACCORDION =====
function toggleCulture(id) {
  const layers = document.getElementById('layers-' + id);
  const arrow = document.getElementById('arrow-' + id);
  const section = document.getElementById('culture-' + id);
  const isOpen = layers.classList.contains('open');
  layers.classList.toggle('open');
  arrow.classList.toggle('open');
  section.classList.toggle('expanded');
}

function toggleCultureAll(id, checked) {
  const container = document.getElementById('layers-' + id);
  container.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    if (cb.checked !== checked) { cb.checked = checked; cb.onchange(); }
  });
}

// Auto-expand culture sections when region nav is clicked
function expandCulturesForRegion(regionId) {
  document.querySelectorAll('.culture-section').forEach(section => {
    const regions = (section.dataset.regions || '').split(' ');
    const layers = section.querySelector('.culture-layers');
    const arrow = section.querySelector('.culture-arrow');
    if (regions.includes(regionId)) {
      if (!layers.classList.contains('open')) {
        layers.classList.add('open');
        arrow.classList.add('open');
        section.classList.add('expanded');
      }
    }
  });
}

