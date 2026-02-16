function flyTo(region) {
  document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  const views = {
    overview: [35.5, -113, 5],
    southwest: [34.5, -111.5, 6],
    jtree: [34.0, -116.1, 11],
    bayarea: [37.78, -122.25, 10],
    centralvalley: [36.0, -119.5, 7],
    owensvalley: [36.8, -117.8, 8],
    eastbay: [37.75, -121.9, 10],
    chumash: [34.35, -119.5, 9],
    lakecountry: [39.0, -122.75, 11],
    russianriver: [38.7, -123.0, 10],
    eelriver: [39.7, -123.3, 10],
    lostcoast: [40.4, -124.15, 10]
  };
  const v = views[region];
  map.flyTo([v[0],v[1]], v[2], {duration:1.5});
  if (typeof expandCulturesForRegion === 'function') expandCulturesForRegion(region);
}

// Loading
setTimeout(() => document.getElementById('loading').classList.add('hidden'), 2200);

// ============================================================
// TRIBAL ENCYCLOPEDIA DATA & LOGIC
// ============================================================
