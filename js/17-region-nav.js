let regionViews = {};
fetch('data/meta/region-views.json')
  .then(r => r.json())
  .then(data => { regionViews = data.views; })
  .catch(err => console.warn('Region nav: could not load views —', err));

function flyTo(region) {
  document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  const v = regionViews[region];
  if (!v) return;
  map.flyTo([v.lat, v.lng], v.zoom, {duration:1.5});
  if (typeof expandCulturesForRegion === 'function') expandCulturesForRegion(region);
}

// Eastern CA flyTo (was in 48-eastern-ca-petroglyphs.js)
function flyToEasternCA() {
  map.flyTo([37.50, -118.20], 7, {duration: 1.5});
}
