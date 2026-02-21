let eras = [];
fetch('data/meta/timeline-eras.json')
  .then(r => r.json())
  .then(data => { eras = data.eras; })
  .catch(err => console.warn('Timeline: could not load eras —', err));

function onTimeline(val) {
  const era = eras[val];
  if (!era) return;
  document.getElementById('era-label').textContent = era.label;
  document.querySelectorAll('.timeline-tick').forEach((t,i) => t.classList.toggle('active', i==val));

  const showList = era.show === 'all' ? (window.layerNames || []) : era.show;
  const checkboxes = document.querySelectorAll('.layer-toggle input');

  (window.layerNames || []).forEach(name => {
    if (!L_groups[name]) return;
    const shouldShow = showList.includes(name);
    if (shouldShow && !map.hasLayer(L_groups[name])) L_groups[name].addTo(map);
    if (!shouldShow && map.hasLayer(L_groups[name])) map.removeLayer(L_groups[name]);
  });

  // Sync checkboxes
  checkboxes.forEach(cb => {
    const label = cb.closest('.layer-toggle').querySelector('span').textContent;
    const layerMap = {
      'Free-flowing rivers':'ancientRivers','Ancient / pluvial lakes':'ancientLakes',
      'Hohokam canals':'hohokamCanals','Major dams':'modernDams','Reservoirs':'modernReservoirs',
      'Dried / diverted rivers':'lostRivers','Spanish colonial sites':'spanishSites',
      'SW pueblos & villages':'swSites','Joshua Tree rock art':'jtreeSites','Rock art sites':'rockArt','East Bay Hills sites':'eastBaySites',
      'Springs & sacred water':'springs','Lost ciénegas':'cienegas',
      'Trade routes':'tradeRoutes','Rock art style regions':'rockArt','South-Central Rock Art':'scRockArt','CAP canal & infrastructure':'modernInfra',
      'Southern Valley Yokuts':'sValleyYokuts','Foothill Yokuts':'foothillYokuts','Yokuts neighbors':'yokutsNeighbors',
      'Great Basin rock art (Heizer)':'greatBasinRockArt',
      'Pleistocene pluvial lakes':'pluvialLakes',
      'Central Valley lost lakes (Tulare / Buena Vista / Kern)':'centralValleyLakes',
      'Lake Corcoran — Inland Sea (~600,000 BP)':'lakeCorcoran',
      'Owens River cascade (7-lake chain to Death Valley)':'owensChain',
      'Water diversions & aqueducts':'waterDiversions',
      'Numic & Washoe territories':'numicTerritories',
      'Pre-Numic archaeological sites':'preNumicSites',
      'Ohlone shellmounds':'shellmounds','Buried / lost creeks':'buriedCreeks',
      'Bay fill zones':'bayFill','Construction discoveries':'constructionFinds','Bay Area missions':'bayMissions',
      'Fill zones / lost shoreline':'historicShoreline'
    };
    const ln = layerMap[label];
    if (ln) cb.checked = showList.includes(ln);
  });
}

function setEra(val) {
  document.getElementById('timeline').value = val;
  onTimeline(val);
  // Notify Time lens if active
  if (window.AW && AW.engine.getActiveLensId() === 'time' && AW.timeLens) {
    document.querySelectorAll('.lens-card').forEach(function(c) {
      c.classList.toggle('selected', parseInt(c.dataset.era) === parseInt(val));
    });
  }
}
