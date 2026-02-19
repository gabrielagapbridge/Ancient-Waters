// ============================================================
// 48 — Eastern California Petroglyphs (Heizer & Baumhoff 1962, Appendix F)
// Sites across Inyo, Lassen, Modoc, Mono, and Plumas Counties
// Source: "Prehistoric Rock Art of Nevada and Eastern California"
// ============================================================

(function(){
  'use strict';

  // Color palette for Eastern CA
  const ECA = {
    inyo:    '#E8A87C',  // warm peach for Inyo County (bulk of sites)
    lassen:  '#D4A574',  // tan for Lassen
    modoc:   '#C49A6C',  // brown for Modoc
    mono:    '#B8916A',  // bronze for Mono
    plumas:  '#A88860',  // earth for Plumas
    border:  '#5C4033',  // dark brown border
    text:    '#E8D5C4',  // light text
    terr:    'rgba(232,168,124,0.08)'  // territory fill
  };

  // ============================================================
  // LAYER GROUPS
  // ============================================================
  if(!window.L_groups) window.L_groups = {};

  L_groups.ecaInyoPetro    = L.layerGroup().addTo(map);
  L_groups.ecaLassenPetro  = L.layerGroup().addTo(map);
  L_groups.ecaModocPetro   = L.layerGroup().addTo(map);
  L_groups.ecaMonoPetro    = L.layerGroup().addTo(map);
  L_groups.ecaPlumasPetro  = L.layerGroup().addTo(map);

  // ============================================================
  // POPUP STYLE
  // ============================================================
  function ecaPopup(title, color, fields) {
    let html = `<div class="popup-content"><h3 style="color:${color}">${title}</h3>`;
    for (const [k,v] of Object.entries(fields)) {
      html += `<p><b>${k}:</b> ${v}</p>`;
    }
    html += `<p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
      <b>Source:</b> Heizer & Baumhoff, <i>Prehistoric Rock Art of Nevada and Eastern California</i>, 1962, Appendix F</p></div>`;
    return html;
  }

  // ============================================================
  // INYO COUNTY SITES (40+ sites documented in Appendix F)
  // Major petroglyph concentration in Owens Valley
  // ============================================================

  // --- Iny-28: Near Bishop ---
  L.circleMarker([37.38, -118.40], {radius:5, color:ECA.inyo, fillColor:ECA.inyo, fillOpacity:0.8, weight:1.5})
    .bindPopup(ecaPopup('◆ Iny-28 — Bishop Area', ECA.inyo, {
      'Type': 'Petroglyphs',
      'County': 'Inyo County',
      'Location': 'Near Bishop, Owens Valley',
      'Style': 'Great Basin Curvilinear',
      'Elements': 'Circles, curvilinear meanders',
      'Tribal affiliation': 'Owens Valley Paiute (Numa)'
    }), {maxWidth:350}).addTo(L_groups.ecaInyoPetro);

  // --- Iny-194: Near Laws ---
  L.circleMarker([37.41, -118.35], {radius:5, color:ECA.inyo, fillColor:ECA.inyo, fillOpacity:0.8, weight:1.5})
    .bindPopup(ecaPopup('◆ Iny-194 — Laws Area', ECA.inyo, {
      'Type': 'Petroglyphs',
      'County': 'Inyo County',
      'Location': 'Near Laws, northern Owens Valley',
      'Style': 'Great Basin Curvilinear',
      'Tribal affiliation': 'Owens Valley Paiute (Numa)'
    }), {maxWidth:350}).addTo(L_groups.ecaInyoPetro);

  // --- Iny-208: Chalfant Valley / Volcanic Tableland (MAJOR SITE) ---
  L.circleMarker([37.52, -118.35], {radius:8, color:'#fff', fillColor:ECA.inyo, fillOpacity:0.9, weight:2})
    .bindPopup(ecaPopup('★ Iny-208 — Volcanic Tableland / Chalfant Valley', ECA.inyo, {
      'Type': 'Major petroglyph complex — hundreds of panels',
      'County': 'Inyo County',
      'Location': 'Volcanic Tableland, north of Bishop (37.52°N, 118.35°W). Bishop Tuff lava flow with deep desert varnish.',
      'Steward\'s number': '40',
      'Style': 'Great Basin Representational AND Curvilinear — one of the most stylistically diverse sites in eastern California',
      'Description': 'Vast complex on Bishop Tuff volcanic tableland. Features extraordinary bighorn sheep herd panels, detailed hunting scenes, elaborate anthropomorphic figures, serpentine lines, concentric circles, tally marks, and ceremonial compositions. Panels are pecked through dark desert varnish to reveal lighter rock beneath. The volcanic tableland rises 300+ feet above the Owens Valley floor.',
      'Key motifs': 'Bighorn sheep (dominant), hunting scenes with atlatls, human figures with headdresses, wheel motifs, serpentine/snake forms, handprints, crosshatch grids',
      'Date': 'ca. 3,500+ years ago, with some elements possibly much older',
      'Figures': 'F-1 through F-9 (the most extensively illustrated site in Appendix F)',
      'Tribal affiliation': 'Owens Valley Paiute (Numa) — sacred site still used for ceremonies',
      'Access': 'BLM land, accessible via dirt roads from Bishop. Listed on National Register of Historic Places. Please respect the site — do not touch petroglyphs.'
    }), {maxWidth:420}).addTo(L_groups.ecaInyoPetro);

  // --- Iny-214: ---
  L.circleMarker([37.30, -118.30], {radius:5, color:ECA.inyo, fillColor:ECA.inyo, fillOpacity:0.8, weight:1.5})
    .bindPopup(ecaPopup('◆ Iny-214', ECA.inyo, {
      'Type': 'Petroglyphs',
      'County': 'Inyo County',
      'Steward\'s number': '40',
      'Figures': 'F-10, F-11 (various panels)',
      'Style': 'Great Basin Representational / Curvilinear',
      'Tribal affiliation': 'Owens Valley Paiute'
    }), {maxWidth:350}).addTo(L_groups.ecaInyoPetro);

  // --- Iny-261: ---
  L.circleMarker([37.20, -118.28], {radius:5, color:ECA.inyo, fillColor:ECA.inyo, fillOpacity:0.8, weight:1.5})
    .bindPopup(ecaPopup('◆ Iny-261', ECA.inyo, {
      'Type': 'Petroglyphs',
      'County': 'Inyo County',
      'Style': 'Great Basin Curvilinear',
      'Tribal affiliation': 'Owens Valley Paiute'
    }), {maxWidth:350}).addTo(L_groups.ecaInyoPetro);

  // --- Iny-267: Big Pine area ---
  L.circleMarker([37.17, -118.29], {radius:6, color:ECA.inyo, fillColor:ECA.inyo, fillOpacity:0.8, weight:1.5})
    .bindPopup(ecaPopup('◆ Iny-267 — Big Pine Area', ECA.inyo, {
      'Type': 'Petroglyphs',
      'County': 'Inyo County',
      'Steward\'s number': '34',
      'Figures': 'F-12a, F-13 (various)',
      'Style': 'Great Basin Representational / Curvilinear',
      'Tribal affiliation': 'Owens Valley Paiute'
    }), {maxWidth:350}).addTo(L_groups.ecaInyoPetro);

  // --- Iny-268: ---
  L.circleMarker([37.15, -118.25], {radius:5, color:ECA.inyo, fillColor:ECA.inyo, fillOpacity:0.8, weight:1.5})
    .bindPopup(ecaPopup('◆ Iny-268', ECA.inyo, {
      'Type': 'Petroglyphs',
      'County': 'Inyo County',
      'Steward\'s number': '16',
      'Style': 'Great Basin Curvilinear / Representational',
      'Tribal affiliation': 'Owens Valley Paiute'
    }), {maxWidth:350}).addTo(L_groups.ecaInyoPetro);

  // --- Iny-270: ---
  L.circleMarker([37.10, -118.22], {radius:5, color:ECA.inyo, fillColor:ECA.inyo, fillOpacity:0.8, weight:1.5})
    .bindPopup(ecaPopup('◆ Iny-270', ECA.inyo, {
      'Type': 'Petroglyphs',
      'County': 'Inyo County',
      'Steward\'s number': '19',
      'Style': 'Great Basin Curvilinear',
      'Tribal affiliation': 'Owens Valley Paiute'
    }), {maxWidth:350}).addTo(L_groups.ecaInyoPetro);

  // --- Iny-271: Near Coso Range (MAJOR) ---
  L.circleMarker([36.50, -117.85], {radius:7, color:'#fff', fillColor:ECA.inyo, fillOpacity:0.9, weight:2})
    .bindPopup(ecaPopup('★ Iny-271 — Near Coso Range', ECA.inyo, {
      'Type': 'Major petroglyph site',
      'County': 'Inyo County',
      'Steward\'s number': '40',
      'Location': 'Southern Owens Valley, near China Lake / Coso Range area (36.50°N, 117.85°W)',
      'Figures': 'F-13a, F-15, F-19, F-21, F-21d (extensively documented)',
      'Style': 'Great Basin Representational — this is the heartland of the bighorn sheep hunting tradition',
      'Key motifs': 'Bighorn sheep, anthropomorphs with elaborate headdresses, hunting with atlatls, patterned body anthropomorphs (PBAs), sun discs',
      'Tribal affiliation': 'Coso / Owens Valley Paiute / Shoshone'
    }), {maxWidth:400}).addTo(L_groups.ecaInyoPetro);

  // --- Iny-272: Swansea Petroglyphs — SOLAR OBSERVATORY (MAJOR) ---
  L.circleMarker([36.60, -117.90], {radius:8, color:'gold', fillColor:ECA.inyo, fillOpacity:0.9, weight:2.5})
    .bindPopup(ecaPopup('★ Iny-272 — Swansea Petroglyphs (Solar Observatory)', ECA.inyo, {
      'Type': 'Petroglyphs & solar calendrical observatory',
      'County': 'Inyo County',
      'Steward\'s number': '46',
      'Location': 'Near ghost town of Swansea, north shore of Owens Lake (36.60°N, 117.90°W). Elevation 1,130 m. Petroglyphs on wave-polished dolomitic marble at the ancient shoreline of Pleistocene Owens Lake.',
      'Figures': 'F-14c, F-15, F-16, F-19, F-21, F-21d, and more',
      'Description': 'Several hundred petroglyphs pecked into white dolomitic marble boulders stained tan by weathering. The site sits on a promontory that was once an island in Pleistocene Owens Lake — submerged under 200 meters of water 15,000 years ago. Includes a functioning EQUINOX MARKER: 6 vertical bars that predict the actual equinox within hours, based on shadow alignment from a nearby boulder. Also features rayed circles (sun symbols), spirals, atlatl imagery (dating the site to pre-bow era, before 2,000 years ago), and cross-quarter day markers similar to Chaco Canyon.',
      'Key motifs': 'Rayed circles, 6-bar equinox marker, spirals, atlatl, bighorn sheep, anthropomorphs. 18 total element count from Table F-1.',
      'Style': 'Great Basin Representational AND Curvilinear',
      'Date': 'Radiocarbon min age ~2,060 years for the equinox marker; site likely spans 4,000+ years',
      'Cultural significance': 'One of the most sophisticated known solar observatories in western North American rock art. The equinox prediction accuracy rivals Chaco Canyon.',
      'Tribal affiliation': 'Owens Valley Paiute / Shoshone — earlier peoples unknown'
    }), {maxWidth:420}).addTo(L_groups.ecaInyoPetro);

  // --- Iny-274: ---
  L.circleMarker([36.55, -117.95], {radius:5, color:ECA.inyo, fillColor:ECA.inyo, fillOpacity:0.8, weight:1.5})
    .bindPopup(ecaPopup('◆ Iny-274', ECA.inyo, {
      'Type': 'Petroglyphs',
      'County': 'Inyo County',
      'Steward\'s number': '46',
      'Figures': 'F-16c, F-22a',
      'Style': 'Great Basin Curvilinear',
      'Tribal affiliation': 'Owens Valley Paiute'
    }), {maxWidth:350}).addTo(L_groups.ecaInyoPetro);

  // --- Iny-275 through Iny-300+ (scattered sites along Owens Valley) ---
  var inyScattered = [
    {n:'Iny-275', lat:36.70, lng:-118.05, s:'7'},
    {n:'Iny-276', lat:36.72, lng:-118.02},
    {n:'Iny-278', lat:36.75, lng:-118.00},
    {n:'Iny-280', lat:36.78, lng:-117.98},
    {n:'Iny-281', lat:36.80, lng:-117.96},
    {n:'Iny-282', lat:36.82, lng:-118.10},
    {n:'Iny-283', lat:36.85, lng:-118.08},
    {n:'Iny-285', lat:36.88, lng:-118.12},
    {n:'Iny-300', lat:36.92, lng:-118.15},
    {n:'Iny-363', lat:36.95, lng:-118.18, s:'34'},
    {n:'Iny-393', lat:37.00, lng:-118.22},
    {n:'Iny-410', lat:37.05, lng:-118.20},
    {n:'Iny-420', lat:37.08, lng:-118.25},
    {n:'Iny-425', lat:37.12, lng:-118.28},
    {n:'Iny-429', lat:37.15, lng:-118.30},
    {n:'Iny-439', lat:36.60, lng:-118.06}
  ];

  inyScattered.forEach(function(site) {
    L.circleMarker([site.lat, site.lng], {radius:4, color:ECA.inyo, fillColor:ECA.inyo, fillOpacity:0.7, weight:1})
      .bindPopup(ecaPopup('◆ ' + site.n, ECA.inyo, {
        'Type': 'Petroglyphs',
        'County': 'Inyo County',
        'Style': 'Great Basin Curvilinear / Representational',
        'Tribal affiliation': 'Owens Valley Paiute / Shoshone'
      }), {maxWidth:300}).addTo(L_groups.ecaInyoPetro);
  });

  // ============================================================
  // LASSEN COUNTY SITES
  // ============================================================

  var lassenSites = [
    {n:'Las-1', lat:40.75, lng:-120.55, desc:'Pit River drainage', fig:'F-31a, s'},
    {n:'Las-13', lat:40.70, lng:-120.50, desc:'Central Lassen', fig:'F-31a, d, F-33'},
    {n:'Las-18', lat:40.68, lng:-120.60, desc:'Susan River area'},
    {n:'Las-38', lat:40.60, lng:-120.65, desc:'Southern Lassen'},
    {n:'Las-49', lat:40.55, lng:-120.70, desc:'Honey Lake area'},
    {n:'Las-57', lat:40.50, lng:-120.45, desc:'Eagle Lake area', fig:'F-34, F-35'},
    {n:'Las-61', lat:40.45, lng:-120.40},
    {n:'Las-62', lat:40.42, lng:-120.35},
    {n:'Las-63', lat:40.40, lng:-120.55},
    {n:'Las-76', lat:40.78, lng:-120.48, desc:'Northern Lassen', fig:'F-37a-b'},
    {n:'Las-79', lat:40.80, lng:-120.52, desc:'Near Modoc border', fig:'F-33'}
  ];

  lassenSites.forEach(function(site) {
    L.circleMarker([site.lat, site.lng], {radius:5, color:ECA.lassen, fillColor:ECA.lassen, fillOpacity:0.8, weight:1.5})
      .bindPopup(ecaPopup('◆ ' + site.n + (site.desc ? ' — ' + site.desc : ''), ECA.lassen, {
        'Type': 'Petroglyphs',
        'County': 'Lassen County',
        'Style': 'Great Basin Curvilinear — concentric circles, dot grids, sun discs',
        'Figures': site.fig || 'See Appendix F',
        'Tribal affiliation': 'Pit River (Achumawi / Atsugewi)'
      }), {maxWidth:350}).addTo(L_groups.ecaLassenPetro);
  });

  // ============================================================
  // MODOC COUNTY SITES
  // ============================================================

  // Petroglyph Point — MAJOR SITE
  L.circleMarker([41.71, -121.52], {radius:8, color:'#fff', fillColor:ECA.modoc, fillOpacity:0.9, weight:2})
    .bindPopup(ecaPopup('★ Petroglyph Point — Lava Beds National Monument', ECA.modoc, {
      'Type': 'Massive petroglyph panel — 5,000+ individual carvings',
      'Site number': 'Mod-1 (part of larger Lava Beds complex)',
      'County': 'Modoc County (administered under Siskiyou County NPS)',
      'Location': 'Lava Beds National Monument, SE of Tulelake (41.71°N, 121.52°W)',
      'Description': 'One of the largest panels of Native American rock art in California. Petroglyphs carved along the face of a former island within Tule Lake. Over 5,000 individual carvings in soft volcanic tuff. Distinctive for being dominated by GEOMETRIC patterns rather than animal/human figures — setting it apart from typical Great Basin representational art.',
      'Key motifs': 'Geometric patterns, circles, dots, abstract designs. Very few depictions of people or animals.',
      'Date': 'Possibly 6,000+ years old. Dating complicated by Tule Lake water level changes.',
      'Cultural significance': 'Center of a Modoc creation story. Sacred to modern Modoc and Klamath people. Artists paddled canoes to the rock face to carve. NRHP listed 1975.',
      'Tribal affiliation': 'Modoc'
    }), {maxWidth:420}).addTo(L_groups.ecaModocPetro);

  // Other Modoc sites
  var modocSites = [
    {n:'Mod-10', lat:41.65, lng:-121.20, fig:'F-37d-e'},
    {n:'Mod-19', lat:41.55, lng:-121.10, desc:'Central Modoc'},
    {n:'Mod-30', lat:41.50, lng:-121.00, fig:'F-38a'},
    {n:'Mod-41', lat:41.45, lng:-120.95, fig:'F-38b-j'},
    {n:'Mod-61', lat:41.40, lng:-121.15, fig:'F-39b'},
    {n:'Mod-71', lat:41.60, lng:-121.30, fig:'F-39d, F-44c'}
  ];

  modocSites.forEach(function(site) {
    L.circleMarker([site.lat, site.lng], {radius:5, color:ECA.modoc, fillColor:ECA.modoc, fillOpacity:0.8, weight:1.5})
      .bindPopup(ecaPopup('◆ ' + site.n + (site.desc ? ' — ' + site.desc : ''), ECA.modoc, {
        'Type': 'Petroglyphs',
        'County': 'Modoc County',
        'Figures': site.fig || 'See Appendix F',
        'Style': 'Great Basin Curvilinear / Geometric',
        'Tribal affiliation': 'Modoc'
      }), {maxWidth:350}).addTo(L_groups.ecaModocPetro);
  });

  // ============================================================
  // MONO COUNTY SITES
  // ============================================================

  var monoSites = [
    {n:'Mno-6', lat:38.10, lng:-119.05, desc:'Near Mono Lake'},
    {n:'Mno-15', lat:38.05, lng:-119.10},
    {n:'Mno-60', lat:37.95, lng:-119.15},
    {n:'Mno-300', lat:37.90, lng:-118.95, fig:'F-7a4, F-40a-c'}
  ];

  monoSites.forEach(function(site) {
    L.circleMarker([site.lat, site.lng], {radius:5, color:ECA.mono, fillColor:ECA.mono, fillOpacity:0.8, weight:1.5})
      .bindPopup(ecaPopup('◆ ' + site.n + (site.desc ? ' — ' + site.desc : ''), ECA.mono, {
        'Type': 'Petroglyphs',
        'County': 'Mono County',
        'Figures': site.fig || 'See Appendix F',
        'Style': 'Great Basin Curvilinear / Representational',
        'Tribal affiliation': 'Northern Paiute / Mono (Monache)'
      }), {maxWidth:350}).addTo(L_groups.ecaMonoPetro);
  });

  // ============================================================
  // PLUMAS COUNTY SITES
  // ============================================================

  L.circleMarker([39.95, -120.95], {radius:5, color:ECA.plumas, fillColor:ECA.plumas, fillOpacity:0.8, weight:1.5})
    .bindPopup(ecaPopup('◆ Plu-26 — Plumas County', ECA.plumas, {
      'Type': 'Petroglyphs',
      'County': 'Plumas County',
      'Figures': 'F-31d, F-40d (not natural grouping)',
      'Style': 'Great Basin Curvilinear',
      'Description': 'Westernmost documented Great Basin petroglyph site in the study. Plumas County sits at the transition zone between Great Basin and Sierran cultural areas.',
      'Tribal affiliation': 'Maidu / Mountain Maidu (Concow)'
    }), {maxWidth:350}).addTo(L_groups.ecaPlumasPetro);

  L.circleMarker([40.00, -120.90], {radius:5, color:ECA.plumas, fillColor:ECA.plumas, fillOpacity:0.8, weight:1.5})
    .bindPopup(ecaPopup('◆ Plu-2', ECA.plumas, {
      'Type': 'Petroglyphs',
      'County': 'Plumas County',
      'Figures': 'F-31a',
      'Style': 'Great Basin Curvilinear',
      'Tribal affiliation': 'Maidu'
    }), {maxWidth:350}).addTo(L_groups.ecaPlumasPetro);

  // ============================================================
  // APPENDIX E: Ch-71 (Deer Creek, Elko County, NV)
  // Additional Nevada site discovered after main survey
  // ============================================================

  L.circleMarker([40.85, -115.75], {radius:7, color:'#fff', fillColor:'#C49A6C', fillOpacity:0.9, weight:2})
    .bindPopup(ecaPopup('★ Ch-71 — Deer Creek Canyon (Appendix E)', '#C49A6C', {
      'Type': 'Petroglyphs at natural game ambush point',
      'County': 'Elko County, Nevada',
      'Location': 'Narrow canyon on the east fork of the Jarbidge River. Passage between sheer rock walls ~20 ft high. (40.85°N, 115.75°W)',
      'Discovered': '1959 by William Wright Jr., of Death, Elko County. Mr. Wright has covered a large part of Elko County on foot or horseback.',
      'Description': 'A narrow passage between sheer rock walls used as a natural ambush point by game and hunters. Antelope and deer tracks were abundant in July 1959. The rocks are flat-topped, ~20 feet high, creating a natural funnel. Petroglyphs are found just below the ambush spur on rocks flanking the passage. This is one of the few sites in northeastern Nevada clearly associated with a hunting ambush strategy.',
      'Elements': 'Figs. E-1 through E-14: Curvilinear meanders, snakes, mountain sheep, human figures, shield figures, complex abstract panels. Classified as Great Basin Abstract Curvilinear style (elements not abundant enough for positive style identification).',
      'Style': 'Great Basin Abstract Curvilinear',
      'Date': 'Unknown — likely several thousand years',
      'Tribal affiliation': 'Western Shoshone / Northern Paiute'
    }), {maxWidth:420}).addTo(L_groups.ecaInyoPetro);

  // ============================================================
  // APPENDIX E: El-25 (Elko County)
  // ============================================================

  L.circleMarker([40.82, -115.80], {radius:5, color:'#C49A6C', fillColor:'#C49A6C', fillOpacity:0.8, weight:1.5})
    .bindPopup(ecaPopup('◆ El-25 — Elko County Petroglyph', '#C49A6C', {
      'Type': 'Petroglyphs',
      'County': 'Elko County, Nevada',
      'Description': 'Until 1959 the petroglyph sites known in northeastern Nevada consisted only of site El-2, which had designs evidently of non-Indian origin. In 1959 and 1960 additional field work was done. This small site was made known to the authors in 1959.',
      'Style': 'Great Basin Curvilinear',
      'Source': 'Heizer & Baumhoff 1962, Appendix E',
      'Tribal affiliation': 'Western Shoshone'
    }), {maxWidth:350}).addTo(L_groups.ecaInyoPetro);

  // ============================================================
  // FLY-TO FUNCTION for Eastern CA
  // ============================================================
  window.flyToEasternCA = function() {
    map.flyTo([37.50, -118.20], 7, {duration: 1.5});
  };

  console.log('✓ 48-eastern-ca-petroglyphs loaded: ~60 sites across 5 CA counties + 2 NV sites (Appendices E & F)');

})();
