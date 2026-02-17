const eras = [
  {label:'All Eras', show:layerNames},
  {label:'10,000 BCE', show:['ancientLakes','swSites','eastBaySites','springs','cienegas','rockArt','shellmounds','buriedCreeks','historicShoreline','languageZones','bayMiwokTribelets','yokutsTerr','sValleyYokuts','foothillYokuts','yokutsNeighbors','greatBasinRockArt','scRockArt','lakeCorcoran','centralValleyLakes','owensChain','pluvialLakes','pomoVillages','pomoWaterways','pomoSacred','pomoRockArt','pomoCoastalVillages','pomoCoastalWater','pomoCoastalSacred','yukiVillages','yukiWater','yukiSacred','yukiRockArt','mattoleVillages','mattoleWater','mattoleSacred','plateauArchSites','plateauRockArt','mohicanGlacialLakes','mohicanChamplainSea','mohicanArchSites','mohicanLost','mohicanLakesBefore']},
  {label:'1000 BCE – 1450 CE', show:['ancientRivers','ancientLakes','hohokamCanals','swSites','jtreeSites','eastBaySites','springs','cienegas','tradeRoutes','rockArt','shellmounds','buriedCreeks','historicShoreline','languageZones','marinCreeks','bayMiwokTribelets','yokutsTerr','sValleyYokuts','foothillYokuts','yokutsNeighbors','greatBasinRockArt','scRockArt','centralValleyLakes','owensChain','pomoVillages','pomoWaterways','pomoSacred','pomoRockArt','pomoCoastalVillages','pomoCoastalWater','pomoCoastalSacred','yukiVillages','yukiWater','yukiSacred','yukiRockArt','mattoleVillages','mattoleWater','mattoleSacred','plateauArchSites','yakamaTerr','spokaneTerr','palouseTerr','wanapumTerr','colvilleTerr','coeurTerr','kalispelTerr','nezperceTerr','plateauRockArt','mohicanRivers','mohicanVillages','mohicanSacred','mohicanWetlands','mohicanLakesBefore']},
  {label:'Hohokam Peak ~1300', show:['ancientRivers','ancientLakes','hohokamCanals','swSites','jtreeSites','eastBaySites','springs','cienegas','tradeRoutes','rockArt','shellmounds','buriedCreeks','historicShoreline','languageZones','marinCreeks','bayMiwokTribelets','yokutsTerr','sValleyYokuts','foothillYokuts','yokutsNeighbors','greatBasinRockArt','scRockArt','centralValleyLakes','owensChain','pomoVillages','pomoWaterways','pomoSacred','pomoRockArt','pomoCoastalVillages','pomoCoastalWater','pomoCoastalSacred','yukiVillages','yukiWater','yukiSacred','yukiRockArt','mattoleVillages','mattoleWater','mattoleSacred','plateauArchSites','yakamaTerr','spokaneTerr','palouseTerr','wanapumTerr','colvilleTerr','coeurTerr','kalispelTerr','nezperceTerr','plateauRockArt','mohicanRivers','mohicanVillages','mohicanSacred','mohicanWetlands','mohicanLakesBefore']},
  {label:'Contact ~1540', show:['ancientRivers','ancientLakes','swSites','jtreeSites','eastBaySites','spanishSites','springs','cienegas','tradeRoutes','rockArt','shellmounds','buriedCreeks','bayMissions','historicShoreline','languageZones','marinCreeks','bayMiwokTribelets','yokutsTerr','sValleyYokuts','foothillYokuts','yokutsNeighbors','greatBasinRockArt','scRockArt','centralValleyLakes','owensChain','pomoVillages','pomoWaterways','pomoSacred','pomoRockArt','pomoCoastalVillages','pomoCoastalWater','pomoCoastalSacred','yukiVillages','yukiWater','yukiSacred','yukiRockArt','mattoleVillages','mattoleWater','mattoleSacred','plateauArchSites','yakamaTerr','spokaneTerr','palouseTerr','wanapumTerr','colvilleTerr','coeurTerr','kalispelTerr','nezperceTerr','plateauRockArt','mohicanRivers','mohicanVillages','mohicanSacred','mohicanWetlands','mohicanLakesBefore']},
  {label:'Settlement ~1850', show:['ancientRivers','swSites','jtreeSites','eastBaySites','spanishSites','springs','cienegas','rockArt','shellmounds','buriedCreeks','bayFill','bayMissions','historicShoreline','marinCreeks','langTerritories','bayMiwokTribelets','yokutsTerr','sValleyYokuts','foothillYokuts','yokutsNeighbors','greatBasinRockArt','scRockArt','centralValleyLakes','owensChain','pomoVillages','pomoWaterways','pomoSacred','pomoLostWaters','pomoRockArt','pomoCoastalVillages','pomoCoastalWater','pomoCoastalSacred','yukiVillages','yukiWater','yukiSacred','yukiLost','yukiRockArt','mattoleVillages','mattoleWater','mattoleSacred','mattoleLost','plateauArchSites','yakamaTerr','spokaneTerr','palouseTerr','wanapumTerr','colvilleTerr','coeurTerr','kalispelTerr','nezperceTerr','plateauRockArt','mohicanRivers','mohicanVillages','mohicanSacred','mohicanDams','mohicanLost','mohicanOrigShoreline','mohicanFillZones','mohicanBuriedWater','mohicanArchInFill','mohicanLakesAfter','mohicanHousatonicDams']},
  {label:'Dam Era ~1940', show:['ancientRivers','modernDams','modernReservoirs','lostRivers','swSites','jtreeSites','eastBaySites','spanishSites','springs','modernInfra','rockArt','shellmounds','bayFill','constructionFinds','bayMissions','historicShoreline','marinCreeks','langTerritories','bayMiwokTribelets','yokutsTerr','sValleyYokuts','foothillYokuts','yokutsNeighbors','greatBasinRockArt','scRockArt','waterDiversions','pomoVillages','pomoWaterways','pomoLostWaters','pomoRockArt','pomoCoastalVillages','pomoCoastalWater','pomoCoastalSacred','yukiVillages','yukiWater','yukiLost','yukiRockArt','mattoleVillages','mattoleWater','mattoleLost','plateauArchSites','yakamaTerr','spokaneTerr','palouseTerr','wanapumTerr','colvilleTerr','coeurTerr','kalispelTerr','nezperceTerr','plateauRockArt','plateauDams','mohicanRivers','mohicanVillages','mohicanDams','mohicanLost','mohicanOrigShoreline','mohicanFillZones','mohicanBuriedWater','mohicanLostIslands','mohicanArchInFill','mohicanContamination','mohicanLakesAfter','mohicanReservoirs','mohicanHousatonicDams']},
  {label:'Present Day', show:['modernDams','modernReservoirs','lostRivers','swSites','jtreeSites','eastBaySites','spanishSites','springs','modernInfra','rockArt','marinCreeks','langTerritories','bayMiwokTribelets','yokutsTerr','sValleyYokuts','foothillYokuts','yokutsNeighbors','greatBasinRockArt','scRockArt','waterDiversions','pomoVillages','pomoLostWaters','pomoCoastalVillages','pomoCoastalLost','yukiVillages','yukiLost','yukiSacred','mattoleVillages','mattoleLost','mattoleSacred','mattoleModern','plateauArchSites','plateauRockArt','plateauDams','mohicanWetlands','mohicanDams','mohicanLost','mohicanOrigShoreline','mohicanFillZones','mohicanBuriedWater','mohicanLostIslands','mohicanArchInFill','mohicanContamination','mohicanLakesAfter','mohicanReservoirs','mohicanHousatonicDams']}
];

function onTimeline(val) {
  const era = eras[val];
  document.getElementById('era-label').textContent = era.label;
  document.querySelectorAll('.timeline-tick').forEach((t,i) => t.classList.toggle('active', i==val));

  // Update checkboxes
  const checkboxes = document.querySelectorAll('.layer-toggle input');

  layerNames.forEach(name => {
    const shouldShow = era.show.includes(name);
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
    if (ln) cb.checked = era.show.includes(ln);
  });
}

function setEra(val) {
  document.getElementById('timeline').value = val;
  onTimeline(val);
}

// ========== REGION NAV ==========
