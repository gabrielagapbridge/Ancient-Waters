// The 1873 map shows colored sections for each Mexican-era land grant
// Every one was carved from Coast Miwok tribelet territory
const landGrantStyle = {color:'#8D6E63', weight:2, opacity:0.6, fillColor:'#8D6E63', fillOpacity:0.08, dashArray:'10,6'};

const marinLandGrants = [
  {name:'Rancho Olompali (Camilo Ynitia, 1843)', 
   desc:'8,877 acres granted to Camilo Ynitia — the last hoipu (headman) of the Olompali Coast Miwok, and the ONLY Native American in Northern California to have a Mexican land grant confirmed by the U.S. government. The grant encompassed his people\'s 8,000-year-old ancestral village and 25 square miles of tribelet territory. Ynitia sold most of the land to James Black in 1852 for $5,200. Now Olompali State Historic Park.',
   src:'Austin/Whitney 1873 map; CA State Parks; Olompali SHP; Wikipedia',
   coords:[[38.125,-122.600],[38.125,-122.540],[38.085,-122.540],[38.085,-122.600]]},
  {name:'Rancho Corte Madera del Presidio (John Reed, 1834)', 
   desc:'"The wood cutting place for the Presidio" — granted to Irishman John Reed, who built the first house in Sausalito and the first ferry across the bay. The rancho was vigorously logged to supply lumber to the Presidio in San Francisco. Two sawmills operated in what became Larkspur. This was Huimen Coast Miwok territory. Reed\'s rancho encompasses present-day Mill Valley, Corte Madera, and Larkspur — where shellmounds were later destroyed for development.',
   src:'Austin/Whitney 1873 map; CA Historical Landmark #207; Marin IJ',
   coords:[[37.930,-122.545],[37.930,-122.480],[37.895,-122.480],[37.895,-122.545]]},
  {name:'Rancho San Pedro, Santa Margarita y Las Gallinas', 
   desc:'Massive grant encompassing the San Rafael area, including China Camp and much of the eastern Marin shoreline. The 1873 map shows it covering San Rafael Township. This territory held numerous Coast Miwok villages and shellmounds along San Pablo Bay — including the San Rafael mound photographed by Nelson in 1909.',
   src:'Austin/Whitney 1873 map; Nelson (1909); Marin County historical records',
   coords:[[37.985,-122.540],[37.985,-122.440],[37.950,-122.440],[37.950,-122.540]]},
  {name:'Rancho Nicasio (1844)', 
   desc:'Large inland grant in central-west Marin, shown prominently on the 1873 map within Nicasio Township. The village of Nicasio was a Coast Miwok settlement — the name itself is Miwok. This interior valley was a major gathering and ceremonial area, connected by trails to the coast and the bay.',
   src:'Austin/Whitney 1873 map; MAPOM; Federated Indians of Graton Rancheria',
   coords:[[38.070,-122.720],[38.070,-122.630],[38.020,-122.630],[38.020,-122.720]]},
  {name:'Rancho Punta de los Reyes (1843)', 
   desc:'Point Reyes grant visible on the 1873 map in the Point Reyes Township. This windswept peninsula was Coast Miwok territory for at least 3,000-4,000 years. Kule Loklo (Bear Valley) — a reconstructed Miwok village — now sits within Point Reyes National Seashore. Francis Drake may have landed here in 1579; an Elizabethan sixpence found at nearby Olompali supports contact.',
   src:'Austin/Whitney 1873 map; NPS Point Reyes; CA State Parks',
   coords:[[38.060,-122.850],[38.060,-122.780],[38.010,-122.780],[38.010,-122.850]]},
  {name:'Rancho Tomales y Baulines', 
   desc:'Grant along Tomales Bay and Bolinas area, visible on the 1873 map spanning Bolinas Township. Tomales Bay was a critical Coast Miwok (Olamentko) resource — rich in shellfish, fish, and waterfowl. The bay\'s name comes from the Miwok word "Tamal." Toms Point, a 3,000-year-old village site, sits along Tomales Bay and was still a thriving Native trading post in the 1840s-50s.',
   src:'Austin/Whitney 1873 map; Schneider/Panich (UCSC); Federated Indians of Graton Rancheria',
   coords:[[38.020,-122.770],[38.020,-122.700],[37.960,-122.700],[37.960,-122.770]]},
  {name:'Rancho Saucelito (William Richardson, 1838)', 
   desc:'Granted to William Richardson, who established the first European settlement in what became Sausalito. The 1873 map shows "Sausalito Township" covering the southern tip of Marin. This was the landing point for Coast Miwok crossing the Golden Gate by tule boat. Richardson Bay — named for the grantee — was surrounded by shellmounds.',
   src:'Austin/Whitney 1873 map; CA Historical Landmarks; Sausalito Historical Society',
   coords:[[37.870,-122.510],[37.870,-122.470],[37.845,-122.470],[37.845,-122.510]]}
];

marinLandGrants.forEach(g => {
  L.rectangle(g.coords, landGrantStyle).addTo(L_groups.historicShoreline)
    .bindPopup(`<h4>${g.name}</h4><span class="ptype" style="color:#8D6E63">Mexican Land Grant — carved from Coast Miwok territory</span><div class="popup-what">Approximate boundaries from 1873 Austin/Whitney county survey (David Rumsey Collection)</div>${g.desc}<div class="popup-src">📖 ${g.src}</div>`);
});

// Ross Landing marker (visible on 1873 map)
L.marker([37.928, -122.495], {icon:L.divIcon({className:'',html:'<div style="width:8px;height:8px;background:#8D6E63;border:1px solid #FFF;border-radius:50%;box-shadow:0 0 4px #000"></div>',iconSize:[8,8],iconAnchor:[4,4]})}).addTo(L_groups.historicShoreline)
  .bindPopup('<h4>Ross Landing (1873 map)</h4><span class="ptype" style="color:#8D6E63">Historical settlement — Corte Madera Creek mouth</span><div class="popup-what">Marked on the 1873 Austin/Whitney survey at the navigable head of Corte Madera Creek</div>Ross Landing was an early shipping point where lumber cut from Coast Miwok forests was loaded onto barges and sent across the bay to San Francisco. The creek was navigable here — the same waters the Miwok had used for millennia. The 1873 map shows it at the junction of creek and tidal marsh, within Rancho Corte Madera del Presidio.<div class="popup-src">📖 Austin/Whitney 1873 map (David Rumsey); Marin IJ; Larkspur historical records</div>');

// San Quentin Point marker
L.marker([37.942, -122.425], {icon:L.divIcon({className:'',html:'<div style="width:8px;height:8px;background:#8D6E63;border:1px solid #FFF;border-radius:50%;box-shadow:0 0 4px #000"></div>',iconSize:[8,8],iconAnchor:[4,4]})}).addTo(L_groups.historicShoreline)
  .bindPopup('<h4>San Quentin Point (1873 map)</h4><span class="ptype" style="color:#8D6E63">Historical landmark — prison and quarry site</span><div class="popup-what">Clearly marked on the 1873 Austin/Whitney survey as the San Quentin peninsula</div>The 1873 map shows San Quentin Point before the Hutchinson Rock Quarry (est. 1924) blasted the ridge for 50 years. The quarry rock was used for Bay Bridge access roads, Sacramento Delta dikes, and Oakland railroad beds. The Remillard Brick Company smokestack still stands. Shellmound material from this area was used as fill. Now the site of Larkspur Landing shopping center and ferry terminal.<div class="popup-src">📖 Austin/Whitney 1873 map (David Rumsey); Marin IJ (2020); CA Historical Landmark #917</div>');

// --- NORTH BAY / CARQUINEZ / SUISUN FILL ---
const northBayFillZone = [
  // Historic shore (inland) - Carquinez to Suisun
  [38.030,-122.350],[38.040,-122.330],[38.050,-122.310],[38.055,-122.290],
  [38.060,-122.270],[38.065,-122.250],[38.068,-122.230],[38.072,-122.210],
  [38.080,-122.190],[38.090,-122.170],[38.100,-122.150],[38.115,-122.130],
  [38.130,-122.105],[38.145,-122.082],[38.160,-122.060],[38.180,-122.040],
  // Wrap via modern shore
  [38.180,-122.025],[38.160,-122.045],[38.145,-122.065],
  [38.130,-122.088],[38.115,-122.112],[38.100,-122.133],
  [38.090,-122.153],[38.080,-122.172],[38.072,-122.192],
  [38.068,-122.212],[38.065,-122.232],[38.060,-122.252],
  [38.055,-122.272],[38.050,-122.292],[38.040,-122.313],
  [38.030,-122.335],[38.030,-122.350]
];
L.polygon(northBayFillZone, {...fillZoneStyle, fillOpacity:0.20})
  .addTo(L_groups.historicShoreline)
  .bindPopup('<h4>North Bay / Carquinez / Suisun — Lost Marshlands</h4><span class="ptype pt-historic-shore">TIDAL MARSH AND WETLANDS filled or diked</span><div class="popup-what">Vast marshlands once extended along Carquinez Strait and Suisun Bay</div>Sogorea Te\' (Glen Cove) — a 3,500-year-old Karkin Ohlone sacred site — sat along this waterway. The Suisun Marsh was one of the largest brackish marshes in the western U.S. Chief Sem-Yeto\'s Suisun Patwin people controlled these marshlands and waterways. Much has been diked for salt ponds and agriculture.<div class="popup-src">📖 NOAA NGS; SFEI; Solano County Historical Society; Patwin ethnographic records</div>');
L.polyline(northBayFillZone.slice(0,16), historicLineStyle).addTo(L_groups.historicShoreline);

// --- SOUTH BAY FILL (extensive marshes, San Jose to Fremont) ---
const southBayFillZone = [
  // Historic shore (inland) - west side going south
  [37.600,-122.110],[37.590,-122.095],[37.580,-122.082],[37.570,-122.070],
  [37.560,-122.060],[37.550,-122.052],[37.540,-122.044],[37.530,-122.038],
  [37.520,-122.032],[37.510,-122.028],[37.500,-122.022],[37.485,-122.015],
  [37.470,-122.008],[37.455,-122.000],[37.440,-121.995],[37.425,-121.990],
  // Bottom arc (south tip)
  [37.420,-121.988],[37.415,-121.985],[37.412,-121.980],
  // East side going north
  [37.415,-121.970],[37.420,-121.965],[37.425,-121.960],
  [37.440,-121.965],[37.455,-121.970],[37.470,-121.978],
  [37.485,-121.985],[37.500,-121.992],[37.510,-121.998],
  [37.520,-122.002],[37.530,-122.008],[37.540,-122.014],
  [37.550,-122.020],[37.560,-122.028],[37.570,-122.038],
  [37.580,-122.050],[37.590,-122.063],[37.600,-122.078],
  [37.600,-122.110]
];
L.polygon(southBayFillZone, {...fillZoneStyle, fillOpacity:0.22})
  .addTo(L_groups.historicShoreline)
  .bindPopup('<h4>South Bay — Lost Tidal Marshes & Salt Flats</h4><span class="ptype pt-historic-shore">THIS AREA WAS MARSH before ~1850</span><div class="popup-what">~70% was seasonal wetland grading into high marsh</div>The South Bay was ringed by vast tidal marshes, seasonal wetlands, and salt flats. The SFEI Historical T-zone study found the original interface was dominated by low-gradient seasonal wetlands — wet meadow, alkali meadow, and vernal pool complexes. Coyote Hills shellmounds sat within this marshscape. The Tuibun Ohlone navigated these wetlands for thousands of years. Today: salt ponds, airports, and development.<div class="popup-src">📖 NOAA NGS; SFEI Historical T-zone study; Oakland Museum; USGS</div>');
L.polyline(southBayFillZone.slice(0,16), historicLineStyle).addTo(L_groups.historicShoreline);

// --- TREASURE ISLAND (entirely artificial, separate highlight) ---
L.polygon([
  [37.830,-122.378],[37.830,-122.360],[37.820,-122.356],
  [37.812,-122.360],[37.812,-122.378],[37.820,-122.382],[37.830,-122.378]
], {...fillZoneStyle, fillOpacity:0.45, fillColor:'#FF3D00', color:'#FF3D00'})
  .addTo(L_groups.historicShoreline)
  .bindPopup('<h4>Treasure Island — 100% Artificial</h4><span class="ptype pt-historic-shore">THIS ENTIRE ISLAND WAS OPEN WATER</span><div class="popup-what">No natural land whatsoever — built on Yerba Buena Shoals</div>Created 1936-1937 from 2.5 million dump trucks of dredged bay mud for the 1939 Golden Gate International Exposition. Sat on open water (Yerba Buena Shoals). Used by Navy through Cold War; now being redeveloped. Radioactive contamination being cleaned up. When you stand on Treasure Island, you are standing on what was the bottom of the bay.<div class="popup-src">📖 Army Corps of Engineers; KQED; USGS; NPS</div>');

// --- SFO / OAK AIRPORT FILL ---
L.polygon([
  [37.630,-122.400],[37.630,-122.365],[37.608,-122.365],
  [37.608,-122.400],[37.630,-122.400]
], {...fillZoneStyle, fillOpacity:0.30})
  .addTo(L_groups.historicShoreline)
  .bindPopup('<h4>SFO Airport — Built on Bay Fill</h4><span class="ptype pt-historic-shore">TIDAL MUD FLAT before ~1930s</span><div class="popup-what">Airport runways extend into former bay waters</div>San Francisco International Airport was built on filled tidal mud flats extending into the bay. The runways sit on fill that is vulnerable to liquefaction and sea-level rise. The original shoreline was well inland of the current airport boundary.<div class="popup-src">📖 USGS; SFEI; FAA environmental records</div>');

L.polygon([
  [37.728,-122.225],[37.728,-122.200],[37.710,-122.195],
  [37.710,-122.220],[37.728,-122.225]
], {...fillZoneStyle, fillOpacity:0.30})
  .addTo(L_groups.historicShoreline)
  .bindPopup('<h4>Oakland Airport — Built on Bay Fill</h4><span class="ptype pt-historic-shore">TIDAL MARSH before ~1920s</span><div class="popup-what">Airport and surrounding area is entirely on fill</div>Oakland International Airport was built by progressively filling bay marshland. The surrounding area including much of Bay Farm Island / Harbor Bay Isle in Alameda was created from fill. The Emeryville Shellmound was once surrounded by these same tidal marshes.<div class="popup-src">📖 USGS; SFEI; Oakland Museum; Port of Oakland records</div>');

// Legend label
L.marker([37.63, -122.08], {icon:L.divIcon({className:'',html:'<div style="font-family:Cinzel,serif;font-size:10px;color:#FF6D00;text-shadow:0 0 5px #000,0 0 3px #000;white-space:nowrap;letter-spacing:1px;font-weight:bold">◼ ORANGE = ARTIFICIAL FILL (was water/marsh)</div>',iconSize:[280,16],iconAnchor:[140,8]})}).addTo(L_groups.historicShoreline);
L.marker([37.62, -122.08], {icon:L.divIcon({className:'',html:'<div style="font-family:Cinzel,serif;font-size:9px;color:#FFAB40;text-shadow:0 0 4px #000;white-space:nowrap;letter-spacing:1px;opacity:0.7">- - - DASHED LINE = PRE-1850 SHORELINE (approx.)</div>',iconSize:[260,16],iconAnchor:[130,8]})}).addTo(L_groups.historicShoreline);


