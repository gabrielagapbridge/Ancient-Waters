const rs = {color:'#006D6F',weight:3.5,opacity:0.85};
const rivers = [
  {name:'Colorado River',w:4,what:'Pre-dam river course (approximate)',desc:'Before Hoover (1935) & Glen Canyon (1966) dams, flowed freely to the Gulf of California. Annual floods reached 129,000 cfs near Yuma.',src:'USGS Water Resources; Bureau of Reclamation historical records; Webb et al., "The Controlled Flood in Grand Canyon" (1999)',
   pts:[[38.5,-107.8],[38.2,-108.5],[38,-109],[37.6,-109.8],[37.2,-110.4],[37,-110.8],[36.9,-111.5],[36.8,-111.8],[36.6,-111.8],[36.2,-111.9],[36,-112],[35.9,-112.1],[36,-112.4],[36,-112.8],[36.1,-113.2],[36,-113.8],[36,-114],[35.8,-114.5],[35.2,-114.6],[34.8,-114.5],[34.3,-114.3],[33.5,-114.5],[32.7,-114.7],[32.2,-114.8],[31.8,-115]]},
  {name:'Salt River (Salado)',w:3,what:'Pre-dam river course (approximate)',desc:'Perennial river sustaining Hohokam civilization 1000+ years. Canal network was the largest pre-Columbian irrigation in the Western Hemisphere.',src:'Salt River Project historical archives; Ackerly et al., "Hohokam Irrigation" (1989); USGS streamflow records',
   pts:[[33.8,-110.9],[33.7,-111],[33.6,-111.1],[33.55,-111.3],[33.5,-111.5],[33.45,-111.7],[33.43,-111.9],[33.4,-112],[33.38,-112.2],[33.35,-112.4],[33.3,-112.6]]},
  {name:'Gila River',w:3,what:'Pre-dam river course (approximate)',desc:'Once navigable by riverboats from Yuma to Phoenix. The Akimel O\'odham called it their holy river. 19 Hohokam irrigation systems drew from it.',src:'Woodson, "The Gila River Indian Community" (2010); USGS; Rea, "At the Desert\'s Green Edge" (1997)',
   pts:[[33.1,-108.2],[33,-108.8],[33,-109.3],[32.9,-109.8],[33,-110.2],[33.1,-110.5],[33.15,-110.8],[33.1,-111.1],[33.05,-111.4],[33,-111.6],[32.95,-111.8],[32.9,-112],[32.85,-112.3],[32.8,-112.7],[32.75,-113],[32.7,-113.5],[32.72,-114],[32.73,-114.5],[32.72,-114.65]]},
  {name:'Rio Grande',w:3.5,what:'Pre-dam river course (approximate)',desc:'Before Elephant Butte Dam (1916), flowed freely through NM. Pueblo peoples farmed its floodplains for centuries.',src:'Bureau of Reclamation Rio Grande Project records; Scurlock, "From the Rio to the Sierra" (1998)',
   pts:[[37.6,-105.6],[37,-105.8],[36.5,-105.7],[36,-105.9],[35.5,-106.4],[35,-106.6],[34.5,-106.8],[34,-106.8],[33.5,-106.9],[33,-106.9],[32.5,-106.7],[32,-106.5],[31.8,-106.4]]},
  {name:'Verde River',w:2,what:'Pre-dam river course (approximate)',desc:'Supported Sinagua people and cliff dwellings like Montezuma Castle. Bartlett Dam now controls lower reaches.',src:'NPS Montezuma Castle NM resources; USGS Verde River watershed studies',
   pts:[[34.8,-111.8],[34.5,-111.75],[34.2,-111.7],[33.9,-111.65],[33.7,-111.6],[33.55,-111.55]]},
  {name:'San Juan River',w:2.5,what:'Pre-dam river course (approximate)',desc:'Connected Ancestral Puebloan communities at Chaco Canyon, Aztec Ruins, and Mesa Verde. Navajo Dam (1963) impounds part of it.',src:'NPS Chaco Culture NHP; Bureau of Reclamation Navajo Dam records',
   pts:[[37.5,-107],[37.3,-107.8],[37,-108.5],[36.8,-109],[36.8,-109.5],[37,-110],[37,-110.3],[37.05,-110.8]]},
  {name:'Little Colorado River',w:2,what:'Pre-dam river course (approximate)',desc:'Vital to Ancestral Puebloans and Hopi people. Much of its lower course is now intermittent.',src:'Hopi Cultural Preservation Office; USGS Little Colorado River basin reports',
   pts:[[34.4,-109.5],[34.6,-109.8],[34.8,-110.2],[35,-110.5],[35.3,-110.8],[35.5,-111.2],[35.7,-111.5],[35.9,-111.7],[36,-111.8]]}
];
rivers.forEach(r => L.polyline(r.pts,{...rs,weight:r.w}).addTo(L_groups.ancientRivers).bindPopup(`<h4>${r.name}</h4><span class="ptype pt-ancient">Pre-dam free-flowing course</span><div class="popup-what">${r.what}</div>${r.desc}<div class="popup-src">📖 ${r.src}</div>`));

// ========== ANCIENT LAKES ==========
const lakeStyle = {color:'#006D6F',weight:2,opacity:0.6,fillColor:'#006D6F',fillOpacity:0.15,dashArray:'6,4'};
const lakes = [
  {name:'Lake Cahuilla',src:'USGS paleolake surveys; Laylander, "The Cahuilla" (2011); travertine shoreline surveys by Imperial Valley College',desc:'100 mi long, 35 mi wide, 300 ft deep. Fed by Colorado River. Supported Cahuilla, Kumeyaay & Cucapá peoples. Last filled ~1580 CE. Fish weirs & travertine shorelines still visible.',
   pts:[[33.8,-116.1],[33.7,-115.8],[33.5,-115.6],[33.2,-115.5],[32.9,-115.5],[32.6,-115.5],[32.4,-115.6],[32.3,-115.8],[32.4,-116],[32.6,-116.1],[32.8,-116],[33,-115.8],[33.2,-115.7],[33.5,-115.8],[33.7,-116],[33.8,-116.1]]},
  {name:'Pluvial Lake Estancia',src:'Allen & Anderson, "Lake Estancia, NM" (2000), NM Bureau of Geology; USGS Estancia Valley studies',desc:'Glacial paleolake in central NM that once held cutthroat trout. Paleo-Indian sites ring its former shoreline. Now dry Estancia Valley.',
   pts:[[34.8,-106],[34.75,-105.85],[34.6,-105.8],[34.45,-105.85],[34.4,-106],[34.45,-106.15],[34.6,-106.2],[34.75,-106.15],[34.8,-106]]},
  {name:'Lake San Agustín',src:'Markgraf et al., "Paleoclimate of San Agustin" (1984); NM Bureau of Geology publications',desc:'Pleistocene lake — now the Plains of San Agustín, home to the Very Large Array. Paleo-Indian camps surrounded it.',
   pts:[[33.95,-108.6],[33.9,-108.4],[33.8,-108.35],[33.7,-108.4],[33.65,-108.6],[33.7,-108.8],[33.8,-108.85],[33.9,-108.8],[33.95,-108.6]]},
  {name:'Lake Lucero / Lake Otero',src:'NPS White Sands National Park geology; Langford, "Geology of White Sands" (2003); USGS Tularosa Basin reports',desc:'Ancient lake whose evaporation created the gypsum deposits of White Sands. Indigenous peoples used the area for millennia.',
   pts:[[32.85,-106.3],[32.8,-106.15],[32.65,-106.1],[32.5,-106.15],[32.45,-106.3],[32.5,-106.45],[32.65,-106.5],[32.8,-106.45],[32.85,-106.3]]}
];
lakes.forEach(l => L.polygon(l.pts,lakeStyle).addTo(L_groups.ancientLakes).bindPopup(`<h4>${l.name}</h4><span class="ptype pt-ancient">Ancient / pluvial lake</span><div class="popup-what">Approximate paleolake extent from geological/shoreline evidence</div>${l.desc}<div class="popup-src">📖 ${l.src}</div>`));

// ========== DAMS ==========
const dams = [
  [36.01,-111.49,'Glen Canyon Dam',1966,'Colorado','Created Lake Powell, flooding 196-mi Glen Canyon with Ancestral Puebloan ruins never surveyed.'],
  [36.02,-114.74,'Hoover Dam',1935,'Colorado','Created Lake Mead. Area never archaeologically surveyed before flooding.'],
  [33.67,-111.17,'Roosevelt Dam',1911,'Salt','First major federal dam in SW. Built over ancient Hohokam canal headgates.'],
  [33.57,-111.43,'Horse Mesa Dam',1927,'Salt','Created Apache Lake along ancient Hohokam water source.'],
  [33.55,-111.47,'Mormon Flat Dam',1925,'Salt','Created Canyon Lake, part of Salt River dam chain.'],
  [33.82,-111.64,'Bartlett Dam',1939,'Verde','Impounds Verde River; Sinagua settlements for centuries.'],
  [33.18,-110.53,'Coolidge Dam',1928,'Gila','On San Carlos Apache Reservation. Only major dam on Gila main stem.'],
  [33.08,-106.89,'Elephant Butte Dam',1916,'Rio Grande','First major Rio Grande dam. Pueblo & Apache peoples used the corridor for centuries.'],
  [36.81,-107.6,'Navajo Dam',1963,'San Juan','Impounds San Juan River connecting Chaco Canyon, Aztec Ruins, Mesa Verde.'],
  [34.87,-111.76,'Horseshoe Dam',1946,'Verde','Further impoundment of Verde River, lifeline for Sinagua cliff dwellings.'],
  [35.6,-108.75,'Bluewater Dam',1927,'Bluewater Creek','Near Zuni territory in western NM.']
];
dams.forEach(d => L.marker([d[0],d[1]],{icon:damIcon}).addTo(L_groups.modernDams).bindPopup(`<h4>${d[2]}</h4><span class="ptype pt-dam">Dam — Built ${d[3]} — ${d[4]} River</span><div class="popup-what">Major dam — coordinates from USGS National Dam Inventory</div>${d[5]}<div class="popup-src">📖 Bureau of Reclamation project records; USGS National Water Information System; NPS cultural resource surveys</div>`));

// ========== RESERVOIRS ==========
const resStyle = {color:'#1565C0',weight:2,opacity:0.6,fillColor:'#1565C0',fillOpacity:0.2};
const reservoirs = [
  {name:'Lake Powell',desc:'186 mi long. Flooded unrecorded Ancestral Puebloan sites. Recent droughts exposing submerged ruins.',
   pts:[[37.35,-110.4],[37.2,-110.6],[37.05,-110.85],[36.95,-111.1],[36.9,-111.3],[36.85,-111.45],[37,-111.5],[37.1,-111.3],[37.2,-111.1],[37.3,-110.8],[37.35,-110.5],[37.35,-110.4]]},
  {name:'Lake Mead',desc:'Largest US reservoir. Submerged confluence of Virgin & Muddy Rivers — indigenous habitation corridors.',
   pts:[[36.45,-114.05],[36.35,-114.2],[36.2,-114.4],[36.1,-114.6],[36,-114.73],[36.05,-114.75],[36.2,-114.55],[36.35,-114.35],[36.4,-114.15],[36.45,-114.05]]},
  {name:'Roosevelt Lake',desc:'First major SW reservoir. Tonto Basin was home to Salado cliff dwellings.',
   pts:[[33.72,-111.15],[33.7,-111],[33.65,-110.9],[33.6,-110.95],[33.62,-111.05],[33.68,-111.15],[33.72,-111.15]]},
  {name:'Elephant Butte Reservoir',desc:'NM\'s largest reservoir. Fluctuating levels have alternately hidden and revealed archaeological sites.',
   pts:[[33.35,-107.15],[33.25,-107.1],[33.15,-107],[33.05,-106.95],[33,-107],[33.1,-107.1],[33.2,-107.15],[33.35,-107.15]]}
];
reservoirs.forEach(r => L.polygon(r.pts,resStyle).addTo(L_groups.modernReservoirs).bindPopup(`<h4>${r.name}</h4><span class="ptype pt-modern">Modern reservoir</span><div class="popup-what">Approximate reservoir extent from satellite/survey data</div>${r.desc}<div class="popup-src">📖 Bureau of Reclamation; USGS reservoir monitoring data</div>`));

// ========== DRIED RIVERS ==========
const driedStyle = {color:'#A83200',weight:3,opacity:0.8,dashArray:'8,6'};
const dried = [
  {name:'Lower Gila — Dried',desc:'Once navigable by riverboats. Now dry below Ashurst-Hayden Dam except after storms.',
   pts:[[33,-111.6],[32.95,-111.8],[32.9,-112],[32.85,-112.3],[32.8,-112.7],[32.75,-113],[32.7,-113.5],[32.72,-114]]},
  {name:'Lower Salt — Dried',desc:'Through Phoenix, now usually dry. Stark contrast to the river Hohokam built their civilization around.',
   pts:[[33.52,-111.7],[33.48,-111.85],[33.43,-111.95],[33.4,-112.05],[33.38,-112.2],[33.35,-112.35]]},
  {name:'Lower Colorado — Depleted',desc:'Colorado River Delta — once 3,000 sq mi wetland — now mostly dry. The Cocopah lost traditional fishing grounds.',
   pts:[[32.72,-114.72],[32.5,-114.9],[32.2,-115],[31.9,-115.1]]}
];
dried.forEach(d => L.polyline(d.pts,driedStyle).addTo(L_groups.lostRivers).bindPopup(`<h4>${d.name}</h4><span class="ptype pt-dam">Now intermittent / dry</span><div class="popup-what">Dried/diverted river reach — approximate historical course</div>${d.desc}<div class="popup-src">📖 USGS streamflow records; Bureau of Reclamation diversion data; Tellman et al., "Arizona\'s Changing Rivers" (1997)</div>`));

// ========== HOHOKAM CANALS ==========
const canalStyle = {color:'#B8860B',weight:2.5,opacity:0.7,dashArray:'4,3'};
[[[33.45,-111.95],[33.5,-111.9],[33.55,-111.85],[33.53,-111.7]],
 [[33.42,-112],[33.38,-112.05],[33.35,-112.1],[33.33,-112.2]],
 [[33.48,-111.9],[33.5,-111.95],[33.52,-112.05],[33.5,-112.15]],
 [[33.45,-111.8],[33.48,-111.75],[33.5,-111.68],[33.52,-111.6]],
 [[33.05,-111.4],[33.08,-111.5],[33.1,-111.6],[33.08,-111.7]],
 [[33.43,-112],[33.45,-112.1],[33.47,-112.2],[33.45,-112.3]]
].forEach(r => L.polyline(r,canalStyle).addTo(L_groups.hohokamCanals));
L.marker([33.47,-112],{icon:L.divIcon({className:'',html:'<div style="font-family:Cinzel,serif;font-size:9px;color:#DAA520;text-shadow:0 0 4px #000;white-space:nowrap;letter-spacing:1px">HOHOKAM CANAL SYSTEM</div>',iconSize:[140,16],iconAnchor:[70,8]})}).addTo(L_groups.hohokamCanals)
  .bindPopup('<h4>Hohokam Canal Network</h4><span class="ptype pt-ancient">~200 CE – 1450 CE</span><div class="popup-what">Simplified canal routes based on archaeological surveys</div>700+ mi of hand-dug canals. Largest pre-Columbian irrigation in the Western Hemisphere. Phoenix\'s modern canals follow ~70% of original routes.<div class="popup-src">📖 Ackerly et al., "Hohokam Irrigation" (1989); Woodson (2010); Pueblo Grande Museum; City of Phoenix Archaeology Office</div>');

// ========== SPANISH COLONIAL SITES ==========
