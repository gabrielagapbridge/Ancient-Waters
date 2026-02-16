// ========== MENDOCINO INTERIOR — Phase 3: Yuki, Cahto & Eel River Athabaskans ==========
// Sources: Kroeber (1925), Barrett (1908), Goddard (1909/1923), Baumhoff (1958),
// Madley (2016), Balodis (2016), Begay (2017), RVIT, Cahto Tribe, Sinkyone Council
// Basgall (1982), Cook (1943/1976), Heizer (1953)

(function(){

if (!map.getPane('yukiBackgroundPane')) {
  map.createPane('yukiBackgroundPane');
  map.getPane('yukiBackgroundPane').style.zIndex = 350;
}

const C = {
  yuki: '#795548',       // earth brown — ancient people
  huchnom: '#A1887F',    // lighter brown
  coastYuki: '#8D6E63',  // warm brown
  cahto: '#5D4037',      // dark brown — Athabaskan
  wailaki: '#6D4C41',    // mid brown
  water: '#1E88E5',      // Eel River blue
  lost: '#EF5350',       // red
  sacred: '#CE93D8',     // lavender
  rockart: '#FFB74D',    // amber
  rancheria: '#66BB6A',  // green
  genocide: '#B71C1C'    // dark red — genocide sites
};

// ========== EEL RIVER — THE GREAT WATERWAY ==========
// 196 miles, 3,684 sq mi watershed, 3rd largest entirely in California
// Highest suspended sediment yield of any major river globally
// Wild & Scenic: 398 miles protected
const eelMainstem = [
  [39.72, -123.60],[39.68, -123.55],[39.62, -123.50],[39.55, -123.42],
  [39.50, -123.38],[39.45, -123.35],[39.40, -123.38],[39.35, -123.42],
  [39.30, -123.45],[39.28, -123.42],[39.25, -123.38],[39.22, -123.35],
  [39.18, -123.30],[39.15, -123.28],[39.10, -123.22],[39.08, -123.18],
  [39.05, -123.10],[39.02, -123.05],[39.00, -123.00],[38.97, -122.97],
  [38.95, -122.95],[38.92, -122.93]
];
L.polyline(eelMainstem, {
  color: C.water, weight: 4, opacity: 0.85, pane: 'yukiBackgroundPane',
  dashArray: null
}).bindPopup(`<b>Eel River (Main Stem)</b><br>
  ~196 miles from Mendocino National Forest to Pacific Ocean<br>
  3,684 sq mi watershed — California's 3rd largest<br>
  Highest suspended sediment yield of any major river globally<br>
  398 miles Wild & Scenic designation (state 1972, federal 1981)<br>
  <i>Named for Pacific lamprey — oldest fish species in the river, millions of years of presence</i><br>
  <b>Dam removal pending:</b> PG&E surrendering Potter Valley Project license —
  demolition could begin ~2028, making the Eel the longest free-flowing river in California`
).addTo(L_groups.yukiWater);

// Middle Fork — 70 miles, largest tributary, heart of Yuki territory
const middleFork = [
  [39.78, -122.92],[39.75, -122.98],[39.72, -123.05],[39.70, -123.10],
  [39.68, -123.15],[39.65, -123.20],[39.62, -123.25],[39.58, -123.28],
  [39.55, -123.32],[39.52, -123.35],[39.50, -123.38]
];
L.polyline(middleFork, {
  color: C.water, weight: 3, opacity: 0.7, pane: 'yukiBackgroundPane'
}).bindPopup(`<b>Middle Fork Eel River</b><br>
  70 miles, 753 sq mi — largest tributary by drainage area<br>
  Rises in Yolla Bolly Mountains (Trinity County)<br>
  Joins mainstem at Dos Rios<br>
  <i>Heart of Yuki territory — Round Valley sits between Middle and North Forks</i><br>
  Black Butte River joins east of Covelo`
).addTo(L_groups.yukiWater);

// South Fork — 105 miles, Cahto & Sinkyone territory
const southFork = [
  [39.68, -123.68],[39.65, -123.63],[39.60, -123.58],[39.55, -123.55],
  [39.50, -123.52],[39.45, -123.50],[39.42, -123.48],[39.40, -123.50],
  [39.38, -123.52],[39.35, -123.55],[39.32, -123.58],[39.30, -123.60],
  [39.28, -123.62],[39.25, -123.60],[39.22, -123.57]
];
L.polyline(southFork, {
  color: C.water, weight: 3, opacity: 0.7, pane: 'yukiBackgroundPane'
}).bindPopup(`<b>South Fork Eel River</b><br>
  105 miles from Laytonville to Dyerville through ancient redwood forests<br>
  689 sq mi drainage — carries the most water (highest rainfall)<br>
  No major dams — one of the most pristine large rivers in California<br>
  <i>Cahto and Sinkyone homeland</i>`
).addTo(L_groups.yukiWater);

// North Fork — 35 miles
L.polyline([
  [39.82, -123.15],[39.78, -123.18],[39.75, -123.22],[39.72, -123.28],
  [39.68, -123.32],[39.65, -123.38],[39.62, -123.42]
], {
  color: C.water, weight: 2.5, opacity: 0.6, pane: 'yukiBackgroundPane'
}).bindPopup(`<b>North Fork Eel River</b><br>35 miles, entirely in Trinity County<br>
  286 sq mi drainage — Wailaki territory<br>
  Remote, rugged wilderness`
).addTo(L_groups.yukiWater);

// Outlet Creek — connects to Willits area
L.polyline([
  [39.50, -123.38],[39.48, -123.36],[39.45, -123.35],[39.42, -123.35]
], {
  color: C.water, weight: 2, opacity: 0.5, pane: 'yukiBackgroundPane'
}).bindPopup(`<b>Outlet Creek</b><br>Drains from Willits area into the Eel<br>
  One of the few coho salmon runs on the mainstem`
).addTo(L_groups.yukiWater);

// Ten Mile River — Coast Yuki territory
L.polyline([
  [39.55, -123.55],[39.54, -123.60],[39.53, -123.65],[39.54, -123.72],[39.55, -123.76]
], {
  color: C.water, weight: 2, opacity: 0.5, pane: 'yukiBackgroundPane'
}).bindPopup(`<b>Ten Mile River</b><br>Largest stream in Coast Yuki territory<br>
  Empties into Pacific — important salmon run<br>
  <i>Boundary between Coast Yuki and Northern Pomo</i>`
).addTo(L_groups.yukiWater);

// ========== TERRITORY POLYGONS ==========

// Yuki Proper — Round Valley & upper Eel
L.polygon([
  [39.90, -123.05],[39.90, -122.85],[39.80, -122.80],[39.70, -122.85],
  [39.60, -122.90],[39.55, -123.00],[39.50, -123.10],[39.45, -123.15],
  [39.45, -123.30],[39.50, -123.40],[39.55, -123.38],[39.62, -123.32],
  [39.70, -123.25],[39.80, -123.15],[39.85, -123.10]
], {
  color: C.yuki, fillColor: C.yuki, fillOpacity: 0.08,
  weight: 1.5, dashArray: '6,4', pane: 'yukiBackgroundPane'
}).bindPopup(`<b>Yuki Proper (Ukomno'om)</b><br>
  "Valley People" — self-name<br>
  Round Valley & upper Eel River drainage<br>
  8-9 tribal subdivisions, 500+ village sites<br>
  <b>Language isolate</b> — unrelated to any known language family<br>
  Possibly 10,000+ years in this homeland<br>
  <i>"Yuki" is Wintun for "foreigner" or "enemy"</i>`
).addTo(L_groups.yukiVillages);

// Huchnom — South Eel / Potter Valley
L.polygon([
  [39.45, -123.15],[39.45, -123.00],[39.38, -122.95],[39.30, -122.98],
  [39.25, -123.08],[39.25, -123.20],[39.30, -123.25],[39.38, -123.22]
], {
  color: C.huchnom, fillColor: C.huchnom, fillOpacity: 0.08,
  weight: 1.5, dashArray: '6,4', pane: 'yukiBackgroundPane'
}).bindPopup(`<b>Huchnom ("Outside the Valley")</b><br>
  Yuki subgroup on South Eel River & Potter Valley<br>
  Intermediaries between Yuki and Pomo<br>
  Participated in Pomo/Cahto ceremonies<br>
  Known as "Redwoods" at Round Valley after forced relocation (1869)<br>
  Pre-contact pop: ~500 (Kroeber)`
).addTo(L_groups.yukiVillages);

// Coast Yuki — 50-mile Mendocino Coast strip
L.polygon([
  [39.70, -123.78],[39.70, -123.72],[39.65, -123.65],[39.55, -123.55],
  [39.50, -123.55],[39.45, -123.62],[39.42, -123.68],[39.44, -123.78],
  [39.50, -123.82],[39.58, -123.82],[39.65, -123.80]
], {
  color: C.coastYuki, fillColor: C.coastYuki, fillOpacity: 0.08,
  weight: 1.5, dashArray: '6,4', pane: 'yukiBackgroundPane'
}).bindPopup(`<b>Coast Yuki (Ukohtontilka)</b><br>
  "Ocean People" / "People Beside the Big Water"<br>
  ~50 miles of Mendocino Coast: Noyo River to Usal Creek<br>
  11 groups, each with coastal strip extending inland to redwood forests<br>
  Separated from interior Yuki by Cahto migration<br>
  Diet: salmon, mussels, abalone, surf fish, sea lions (no canoes)<br>
  Invented wooden spatula to pry abalone from rocks<br>
  Pre-contact: ~500; down to 15-20 by early 1900s`
).addTo(L_groups.yukiVillages);

// Cahto — Long Valley / Laytonville
L.polygon([
  [39.72, -123.55],[39.72, -123.45],[39.65, -123.42],[39.58, -123.42],
  [39.55, -123.48],[39.55, -123.58],[39.58, -123.65],[39.65, -123.65]
], {
  color: C.cahto, fillColor: C.cahto, fillOpacity: 0.08,
  weight: 1.5, dashArray: '6,4', pane: 'yukiBackgroundPane'
}).bindPopup(`<b>Cahto / Kato (Tlokyhan — "Grass People")</b><br>
  <b>Southernmost Athabaskan speakers</b> on the Pacific Coast<br>
  Long Valley, Cahto Valley, upper South Fork Eel River<br>
  ~50 village sites surrounded by redwood forests<br>
  Bordered on 3 sides by Yukian peoples<br>
  Most speakers bilingual in Northern Pomo<br>
  Name from Pomo word for "lake" — key village: Djilbi<br>
  Pre-contact: 500-1,100`
).addTo(L_groups.yukiVillages);

// Wailaki — main Eel & North Fork (partial — extends north beyond map)
L.polygon([
  [39.95, -123.20],[39.95, -123.45],[39.90, -123.55],[39.82, -123.50],
  [39.75, -123.42],[39.70, -123.38],[39.68, -123.30],[39.70, -123.20],
  [39.75, -123.10],[39.82, -123.08],[39.90, -123.12]
], {
  color: C.wailaki, fillColor: C.wailaki, fillOpacity: 0.08,
  weight: 1.5, dashArray: '6,4', pane: 'yukiBackgroundPane'
}).bindPopup(`<b>Wailaki (Kinist'ee — "The People")</b><br>
  Eel River Athabaskan / Dene speakers<br>
  Main Eel south of Kekawaka Creek & North Fork Eel<br>
  3 subdivisions: Eel River, North Fork, Pitch Wailaki<br>
  ~95-100 villages, 19+ tribelets<br>
  Arrived in California ~900 AD<br>
  Creator god: Katanagai ("Night Traveler")<br>
  Pre-contact: ~2,700 Wailaki; Eel River Athabaskans combined: ~10,700+<br>
  <i>"Wailaki" is Wintun for "north language"</i>`
).addTo(L_groups.yukiVillages);

// ========== VILLAGES ==========
const villages = [
  // Yuki Proper
  {lat:39.79, lng:-123.12, name:'Ukomno\'om villages — Round Valley (Covelo)',
   desc:'Heart of Yuki world. Nearly circular valley on Middle Eel headwaters. Barrett\'s Pomo name: maca\'-kai ("Indian hemp valley"). Supported largest Yuki population — multiple village groups including Chochhanuk, Mameshishmo, U\'wit, Hake, Son.',
   color: C.yuki},
  {lat:39.68, lng:-123.05, name:'Witukomno\'om — Eden Valley',
   desc:'Yuki subdivision in the Sanhedrin Range between Middle and South Eel Rivers. Small valley with distinct dialect. K\'ilikuno\'m at lower end.',
   color: C.yuki},
  {lat:39.60, lng:-122.95, name:'Utitno\'m — Forks of Middle & South Eel',
   desc:'Yuki group at the strategic confluence. Controlled access between river drainages.',
   color: C.yuki},
  {lat:39.85, lng:-123.02, name:'Sukshultaano\'m — North Fork Middle Eel',
   desc:'Yuki group on Hull Creek (Súkshudltatúm = "straight pine"). Northernmost Yuki territory.',
   color: C.yuki},
  {lat:39.72, lng:-122.92, name:'Huititno\'m — South Fork Middle Eel',
   desc:'Yuki group in the deep canyons east of Round Valley.',
   color: C.yuki},
  {lat:39.55, lng:-123.05, name:'Ta\'no\'m — Main Eel River',
   desc:'Yuki group along the main Eel. 6 known sub-groups: Kichilpitno\'m, Kashansichno\'m, Pomahanno\'m, Mantno\'m, Hanchhotno\'m, Ulamolno\'m.',
   color: C.yuki},

  // Huchnom
  {lat:39.35, lng:-123.10, name:'Huchnom villages — South Eel River',
   desc:'"Outside the Valley" people. South Eel drainage to Potter Valley. Intermediaries between Yuki & Pomo — participated in ceremonies of both. Cremated their dead.',
   color: C.huchnom},

  // Coast Yuki
  {lat:39.63, lng:-123.78, name:'Coast Yuki village cluster — Rockport/Usal area',
   desc:'Northern Coast Yuki territory. Shell-mound dwellers. 11 groups along 50 miles of coast, each with elected headman.',
   color: C.coastYuki},
  {lat:39.54, lng:-123.76, name:'Coast Yuki — Ten Mile River villages',
   desc:'Ten Mile River was the largest stream in Coast Yuki territory. Salmon caught with spears going upstream, scoop nets coming down.',
   color: C.coastYuki},
  {lat:39.48, lng:-123.75, name:'Coast Yuki — Westport/Beall\'s Landing area',
   desc:'Southern Coast Yuki territory near modern Westport. Summer camps on windy beaches, permanent villages slightly inland in redwood forests.',
   color: C.coastYuki},

  // Cahto
  {lat:39.69, lng:-123.49, name:'Djilbi — Principal Cahto village',
   desc:'The village that gave the Cahto their name (from Pomo word for "lake"). Located in Cahto Valley. Self-name: Tlokyhan ("Grass People"). Goddard recorded 50+ Cahto villages.',
   color: C.cahto},
  {lat:39.68, lng:-123.54, name:'Cahto villages — Long Valley (Laytonville)',
   desc:'Three valleys of Cahto settlement. Houses: circular pits 2 ft deep, 4 forked posts, bark/earth covering. Rebuilt every two winters. Villages including ka\'ibi ("nuts in"), nebō\'cēgût ("ground hump on-top"), seLgaitceli\'nda ("rock white run-out").',
   color: C.cahto},
  {lat:39.65, lng:-123.60, name:'Cahto — Branscomb/Jackson Valley band',
   desc:'Siinkook-kiiyaahaangn ("South Fork Eel River band"). Villages along South Fork Eel near Branscomb. Multiple named sites including Beehshoochinmiî\' ("Horseshoe Bend").',
   color: C.cahto},

  // Wailaki
  {lat:39.88, lng:-123.32, name:'Wailaki — Eel River Mainstem villages',
   desc:'Tsennahkenne (Eel River Wailaki). Largest subdivision. Villages on both sides of Eel River from Boulder Creek to Cottonwood Creek. Multiple bands including Bis-kaiyaah, Daadii\'schow-kaiyaah.',
   color: C.wailaki},
  {lat:39.82, lng:-123.18, name:'Wailaki — North Fork band (Bahneko)',
   desc:'North Fork Wailaki. 6 tribelets along the North Fork Eel. Traded obsidian and shells with Pomo, Yuki, and Cahto.',
   color: C.wailaki}
];

villages.forEach(v => {
  L.circleMarker([v.lat, v.lng], {
    radius: 5, color: v.color, fillColor: v.color, fillOpacity: 0.9,
    weight: 1.5, pane: 'markerPane'
  }).bindPopup(`<b>${v.name}</b><br>${v.desc}`).addTo(L_groups.yukiVillages);
});

// ========== SACRED / SIGNIFICANT SITES ==========

// Round Valley — heart of the Yuki world, then site of genocide
L.circleMarker([39.79, -123.12], {
  radius: 10, color: C.genocide, fillColor: C.genocide, fillOpacity: 0.3,
  weight: 2, dashArray: '4,3', pane: 'markerPane'
}).bindPopup(`<b>Round Valley — Yuki Homeland & Genocide Site</b><br>
  The Yuki considered this valley their homeland "since time began"<br>
  Nearly circular valley on Middle Eel River headwaters<br>
  <b>1854:</b> Asbill brothers arrive — kill Yuki, kidnap 35 girls/women to sell as wives<br>
  <b>1856:</b> U.S. establishes Nome Cult Farm (later Round Valley Reservation)<br>
  <b>1858-59:</b> Brutal winter massacres — 150-170+ killed in targeted raids<br>
  <b>1859:</b> Mendocino War — militias kill hundreds, force survivors to reservation<br>
  <b>1863:</b> Nome Cult Trail — 461 Concow Maidu force-marched; only 277 survived<br>
  <b>Result:</b> From perhaps 10,000-20,000 Yuki to several hundred by 1864<br>
  <i>Benjamin Madley (2016): "a clear-cut example of genocide"</i><br>
  <i>E.N. Anderson: "the extermination of the Yuki was a genocidal massacre"</i>`
).addTo(L_groups.yukiSacred);

// Tc'ih-Léh-Dûñ — Sinkyone land back
L.circleMarker([39.70, -123.72], {
  radius: 8, color: C.sacred, fillColor: C.sacred, fillOpacity: 0.5,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Tc'ih-Léh-Dûñ ("Fish Run Place")</b><br>
  523 acres of old-growth redwood returned to InterTribal Sinkyone Wilderness Council (2022)<br>
  200 acres of ancient coast redwoods, 1.5 miles of Anderson Creek<br>
  Renamed from "Andersonia West" — "an act of cultural empowerment and Indigenous resilience"<br>
  Sinkyone Council: consortium of 10 federally recognized tribes (founded 1986)<br>
  Also stewarding 3,845-acre InterTribal Sinkyone Wilderness (since 1997)<br>
  Adjacent to 7,250-acre Sinkyone Wilderness State Park<br>
  <i>"Our ancestors are still here, they're still around us" — Buffie Schmidt, Sherwood Valley Rancheria</i><br>
  <b>National Geographic July 2022 "We Are Here" cover story</b>`
).addTo(L_groups.yukiSacred);

// Needle Rock / Sinkyone Wilderness
L.circleMarker([39.98, -123.92], {
  radius: 6, color: C.sacred, fillColor: C.sacred, fillOpacity: 0.4,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Needle Rock — Sinkyone Wilderness State Park</b><br>
  Northwest corner of Mendocino Coast — gateway to the Lost Coast<br>
  Traditional Sinkyone territory<br>
  7,250-acre park — site of original activism that led to Sinkyone Council founding (1986)<br>
  Co-founder Priscilla Hunter (Coyote Valley Pomo) championed return of 4,531+ acres<br>
  <i>She "journeyed home to her ancestors" November 2024</i>`
).addTo(L_groups.yukiSacred);

// ========== ROCK ART ==========

// Spyrock Road Petroglyphs
L.circleMarker([39.82, -123.42], {
  radius: 6, color: C.rockart, fillColor: C.rockart, fillOpacity: 0.8,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Spyrock Road Petroglyphs (CA-MEN-1912)</b><br>
  Discovered 1982 beside Spy Rock Road, near Eel River<br>
  <b>First evidence of complex rock art boulders in the western United States</b><br>
  Wailaki/Yuki borderlands territory<br>
  Bay Area Rock Art Archive field trips documented 1998<br>
  <i>Spyrock named for a 540-ft landmark hill east of the Eel River</i>`
).addTo(L_groups.yukiRockArt);

// Bell Springs Petroglyphs
L.circleMarker([39.85, -123.50], {
  radius: 5, color: C.rockart, fillColor: C.rockart, fillOpacity: 0.7,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Bell Springs Petroglyphs (CA-MEN-0433)</b><br>
  Bell Springs area, Eel River region<br>
  Documented in Bay Area Rock Art Archive field trips (1998)<br>
  Wailaki territory — borderlands with Yuki`
).addTo(L_groups.yukiRockArt);

// Slakaiya Rock / Eel River Canyon Petroglyphs (Trinity County)
// Source: Foster & Foster, "Slakaiya Rock (CA-TRI-1): A Rediscovered Petroglyph Site
// Near the Eel River, Trinity County, California" in Essays in California Archaeology:
// A Memorial to Franklin Fenenga (Wallace & Riddell eds.), UC ARF No. 60
L.circleMarker([40.05, -123.48], {
  radius: 8, color: C.rockart, fillColor: C.rockart, fillOpacity: 0.9,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Slakaiya Rock (CA-TRI-1)</b><br>
  <i>The most significant petroglyph site in the Eel River region</i><br>
  East bank of Main Fork Eel River, deep canyon, ~520 ft elevation<br>
  Site: 105 × 55 m, oak-woodland on stream terrace with schist boulders<br>
  3 housepits (~3m diameter, 60cm deep), midden, abundant lithics<br>
  <b>Two rock art panels with 6 discrete styles:</b><br>
  • <b>Panel 1:</b> 253 cm × 150 cm on vertical schist face, partly in rock shelter<br>
  &nbsp;&nbsp;SR Style 4: Pecked abstract curvilinear — zigzags, circles, linked circles,<br>
  &nbsp;&nbsp;linked diamonds, tally marks, 39 dots. Made by punch & hammer (antler tip?)<br>
  &nbsp;&nbsp;SR Style 5: Hundreds of fine scratched lines (chert flake/biface)<br>
  &nbsp;&nbsp;SR Style 6: Deeply incised lines — <b>female fertility ritual</b> (Barrett 1952, Loeb 1926)<br>
  • <b>Panel 2:</b> 147 × 135 cm, moss-covered until rediscovery<br>
  &nbsp;&nbsp;SR Style 1: Two large PCN petroglyphs (27×24 cm & 19×16 cm)<br>
  &nbsp;&nbsp;SR Style 2: 36 cupules (2.5-5 cm, possibly early Holocene)<br>
  &nbsp;&nbsp;SR Style 3: 6 grooved lines (largest 42 cm long)<br>
  <b>Chronology:</b> Styles 1-3 (oldest) → Style 4 → Style 5 → Style 6 (~350 BP to historic)<br>
  Some Style 4 elements appear re-pecked by historic Wailaki (1850-1900)<br>
  <b>History:</b> Discovered 1913 by O.W. Degen (NWP Railroad surveyor).<br>
  Degen wrote to Kroeber; material passed to Goddard (studying Wailaki).<br>
  Listed as Steward's PT.2 (1929). Lost 80 years — inaccurate location records.<br>
  Rediscovered Oct 1993 by CDF forester Dave Drennan during timber inspection.<br>
  Named for the <b>Slakaiya tribelet</b> (1 of 18 Wailaki groups, Goddard 1923)<br>
  <i>Foster & Foster, in Wallace & Riddell eds., UC ARF No. 60</i>`
).addTo(L_groups.yukiRockArt);

// Slakaiya Wailaki villages — from Goddard 1923:104 via Foster & Foster
const slakVillages = [
  {lat:40.06, lng:-123.47, name:'sketeclkascanan',
   desc:'"Mush throw away sunny place" — a large Slakaiya village downstream with a ceremonial rock. Mush-like substance on rock face each spring predicted the year\'s acorn crop. Named for Panther, who threw away mush here when tired from hunting. (Goddard 1923)'},
  {lat:40.04, lng:-123.49, name:'kaslenkyobi',
   desc:'"Spring large in" — a good rock shelter where a family wintered. Captain Jim, Goddard\'s informant, was forced to leave his father-in-law to die here when pursued by white men. (Goddard 1923)'},
  {lat:40.07, lng:-123.46, name:'kaitcdantadan',
   desc:'"Christmas berries place" — northernmost Slakaiya hamlet, near a bend in the Eel. Graveyard a quarter mile north. Northern boundary marked by tributary creek tciskot. (Goddard 1923)'},
  {lat:40.03, lng:-123.48, name:'tosekyok\'at',
   desc:'A large Slakaiya village a quarter mile downstream from the boundary creek. (Goddard 1923)'}
];
slakVillages.forEach(v => {
  L.circleMarker([v.lat, v.lng], {
    radius: 4, color: C.wailaki, fillColor: C.wailaki, fillOpacity: 0.7,
    weight: 1, pane: 'markerPane'
  }).bindPopup(`<b>${v.name}</b> (Slakaiya Wailaki village)<br>${v.desc}`).addTo(L_groups.yukiVillages);
});

// Coleman Creek Petroglyphs — unknown to archaeology until river trip discovery
// Source: Jon Harman (DStretch), visited April 2012 with Pierre Pelet (BARARA)
L.circleMarker([39.92, -123.45], {
  radius: 5, color: C.rockart, fillColor: C.rockart, fillOpacity: 0.7,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Coleman Creek Petroglyphs (Eel River)</b><br>
  Discovered by a photographer on a river trip — <b>previously unknown to archaeologists</b><br>
  "Many petroglyphs in a setting of beautiful meadows steeply sloping down to the Eel"<br>
  Visited 2012 by Jon Harman (DStretch) & Pierre Pelet (BARARA)<br>
  Not yet formally documented by Dan Foster (Senior State Archaeologist, ret. 2012)<br>
  Accessible only by river — remote Eel River canyon<br>
  <i>Wailaki territory</i>`
).addTo(L_groups.yukiRockArt);

// Spyrock Station site — distinct from the Spyrock Road site (CA-MEN-1912)
// Contains SR Style 4 pecked designs PLUS cupules superimposed over them
// Photo by Robert Connick, 1960. Source: Foster & Foster; Paul Freeman (BARARA)
L.circleMarker([39.80, -123.45], {
  radius: 6, color: C.rockart, fillColor: C.rockart, fillOpacity: 0.75,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Spyrock Station Petroglyphs</b><br>
  Distinct from Spyrock Road (CA-MEN-1912), ~10 miles downstream<br>
  Located on the Eel River near the former Spyrock railroad station<br>
  Contains many SR Style 4 pecked abstract designs:<br>
  wavy lines, linked circles, zigzags, abstract figures, AND dozens of cupules<br>
  <b>Cupules superimposed over pecked elements</b> — key to regional chronology<br>
  (Proves cupules younger than Style 4 at this site; confirmed by repatination differences)<br>
  Photo by Robert Connick (1960); Paul Freeman (BARARA) source<br>
  <i>Foster & Foster use this site to establish the style sequence across the region</i>`
).addTo(L_groups.yukiRockArt);

// Keystone Petroglyphs (CA-MEN-2200) — central Mendocino County
// Source: Gary & McLear-Gary 1988; Foster & Foster
L.circleMarker([39.15, -123.15], {
  radius: 5, color: C.rockart, fillColor: C.rockart, fillOpacity: 0.7,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Keystone Petroglyphs (CA-MEN-2200)</b><br>
  Central Mendocino County, between Willits and Ukiah<br>
  Contains concentric-circle motifs (among oldest styles in region)<br>
  Concentric circles, cupules, shields with superimposed incised lines<br>
  Gary & McLear-Gary (1988) proposed a chronological sequence here:<br>
  1) abstract curvilinear/grids 2) concentric circles 3) incised lines<br>
  <b>Consistent with the sequence at Slakaiya Rock</b><br>
  <i>Pomo territory — one of 178 sites in Pomo/Yuki/Coast Miwok lands</i>`
).addTo(L_groups.yukiRockArt);

// Feliz Creek Petroglyphs (CA-MEN-793) — Mendocino County
L.circleMarker([39.05, -123.12], {
  radius: 5, color: C.rockart, fillColor: C.rockart, fillOpacity: 0.65,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Feliz Creek Petroglyphs (CA-MEN-793)</b><br>
  Near Ukiah, Mendocino County<br>
  Concentric circles and deeply incised lines<br>
  Part of the 178+ petroglyph sites documented in Pomo/Yuki/Coast Miwok territory<br>
  <i>Pomo territory — southern end of the Eel River rock art corridor</i>`
).addTo(L_groups.yukiRockArt);

// Elledge Valley Baby Rock #2 — Mendocino County
L.circleMarker([39.02, -123.08], {
  radius: 4, color: C.rockart, fillColor: C.rockart, fillOpacity: 0.6,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Elledge Valley Baby Rock #2</b><br>
  Near Ukiah, Mendocino County<br>
  PCN/cupule site — part of the "Baby Rocks" tradition<br>
  Hedges (1983a) noted: deeply incised lines always present,<br>
  but at this site only a single cupule — suggesting incised lines<br>
  more strongly linked to fertility rituals than cupules themselves<br>
  <i>Pomo territory</i>`
).addTo(L_groups.yukiRockArt);

// ========== LOST WATERS ==========

// Potter Valley Project — expanded from Phase 2
L.circleMarker([39.43, -122.95], {
  radius: 8, color: C.lost, fillColor: C.lost, fillOpacity: 0.4,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Potter Valley Project — Eel River Captured (1908)</b><br>
  Scott Dam (1922) created Lake Pillsbury, blocking uppermost Eel River<br>
  Cape Horn Dam diverts water through 1-mile tunnel to Russian River<br>
  Blocked fish passage to ~10% of watershed for 100+ years<br>
  <b>Hope:</b> PG&E surrendering license (2023); demolition possible ~2028<br>
  <b>When dams come down, the Eel becomes the longest free-flowing river in California</b><br>
  <i>Huchnom homeland — diverted their river to another watershed entirely</i>`
).addTo(L_groups.yukiLost);

// Nome Cult Farm / Reservation — cultural landscape destruction
L.circleMarker([39.79, -123.14], {
  radius: 9, color: C.genocide, fillColor: C.genocide, fillOpacity: 0.25,
  weight: 2, dashArray: '5,3', pane: 'markerPane'
}).bindPopup(`<b>Nome Cult Farm → Round Valley Reservation (1856-present)</b><br>
  Yuki homeland transformed into a concentration point for 6+ displaced tribes<br>
  Settlers took the southern half of the valley; govt crammed tribes into the north<br>
  Multiple tribes "driven like cattle" — elderly and sick died en route<br>
  High picket fences corralled captives<br>
  Ghost village Amacha: built for 100, "one day soldiers took all the people and burned the houses"<br>
  <i>The Yuki — the valley's original people — became a minority in their own homeland</i>`
).addTo(L_groups.yukiLost);

// Old-growth redwood destruction — South Fork / Sinkyone
L.circleMarker([39.60, -123.70], {
  radius: 7, color: C.lost, fillColor: C.lost, fillOpacity: 0.3,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Lost Redwood Forests — Sinkyone/Coast Yuki Territory</b><br>
  Entire South Fork Eel / Sinkyone coast clearcut from 1850s onward<br>
  Old-growth coast redwoods reduced to 5% of original extent statewide<br>
  Loss of redwoods = loss of entire subsistence ecosystem:<br>
  salmon streams, basket materials (sedge, willow), food plants, shelter<br>
  <i>Sinkyone Council working to restore: 4,531+ acres now under tribal stewardship</i>`
).addTo(L_groups.yukiLost);

// 1964 Christmas Flood
L.circleMarker([39.55, -123.42], {
  radius: 6, color: C.lost, fillColor: C.lost, fillOpacity: 0.3,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>1964 Christmas Flood — Eel River Devastation</b><br>
  >500,000 cubic feet per second — record for 20th century<br>
  Warm Pineapple Express rains melted snowpack<br>
  Destroyed towns, ancient redwoods, highways, railroad<br>
  Washed away much of Weott, stranded hundreds in Eel River Canyon<br>
  Exacerbated by clearcut logging — increased runoff and sediment<br>
  <i>The river itself became a weapon of destruction</i>`
).addTo(L_groups.yukiLost);

// ========== MODERN RANCHERIAS ==========
const rancherias = [
  {lat:39.79, lng:-123.12, name:'Round Valley Indian Reservation (Covelo)',
   desc:'~44 sq mi (26,000+ acres). Confederation: Yuki, Wailaki, Concow, Little Lake Pomo, Nomlaki, Pit River. Enrollment: 5,781 (2022); ~21% on-reservation. First CA forest carbon offset (2015). Yuki & Wailaki taught at grade school. The Yuki — the only CA tribe to continuously live on their ancestral homeland.'},
  {lat:39.68, lng:-123.50, name:'Cahto Indian Tribe — Laytonville Rancheria',
   desc:'~264 acres, ~3 mi west of Laytonville. Cahto and Pomo peoples. Operates Red Fox Casino. Tribal police, housing authority, EPA office. Pre-contact Cahto: 500-1,100.'},
  {lat:39.72, lng:-123.72, name:'InterTribal Sinkyone Wilderness Council',
   desc:'Not a rancheria — a 10-tribe land trust & conservation consortium. Founded 1986. 4,531+ acres under protection. Members: Cahto, Pinoleville Pomo, Round Valley, Sherwood Valley, Coyote Valley, Scotts Valley, Hopland, Redwood Valley, Robinson, Manchester-Pt Arena. First-ever InterTribal Protected Area (1997).'},
  {lat:39.42, lng:-123.35, name:'Sherwood Valley Rancheria of Pomo Indians',
   desc:'Near Willits, Mendocino County. Pomo people. Vice-chair Buffie Schmidt spoke at Tc\'ih-Léh-Dûñ ceremony 2022.'}
];

rancherias.forEach(r => {
  L.circleMarker([r.lat, r.lng], {
    radius: 5, color: C.rancheria, fillColor: C.rancheria, fillOpacity: 0.8,
    weight: 1.5, pane: 'markerPane'
  }).bindPopup(`<b>${r.name}</b><br>${r.desc}`).addTo(L_groups.yukiVillages);
});

})();
