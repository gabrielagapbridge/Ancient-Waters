// ============================================================
// EASTERN WASHINGTON — Columbia Plateau Peoples
// Precontact cultures, historic tribes, rock art & archaeological sites
// ============================================================
// ARCHAEOLOGICAL CHRONOLOGY:
//   ~13,000 BCE: Ice Age Floods (Missoula Floods) reshape landscape
//   ~11,300 BCE: Clovis hunters (East Wenatchee cache)
//   10,600–7,100 BCE: WINDUST PHASE — earliest documented culture
//     - Stemmed projectile points, hunters/fishers/gatherers
//     - Marmes Rockshelter, Lind Coulee
//   7,100–4,300 BCE: CASCADE PHASE — transitional culture
//     - Leaf-shaped "Cascade points", first residential structures
//     - Salmon use begins ~5,000 BCE
//   4,300–2,000 BCE: PITHOUSE PERIOD begins
//     - Pit house villages appear on rivers
//     - Interior Salish expand south ~4,000-5,000 BP
//   2,000 BCE–1730 CE: LATE PREHISTORIC / ETHNOGRAPHIC
//     - Storage-dependent collectors, permanent seasonal villages
//     - Named tribes emerge in archaeological/oral record
//     - Sahaptin speakers present 2,000-5,000+ years
//     - Interior Salish speakers expand ~4,000-5,000 BP
//   ~1730: Horse arrives — transforms Plateau culture
//   1805-1806: Lewis & Clark contact
//   1855: Treaty era begins
//
// KENNEWICK MAN / THE ANCIENT ONE (~8,500 BP):
//   Found 1996 at Columbia River, Kennewick
//   DNA (2015) confirmed: Native American, closest to Columbia Plateau tribes
//   Reburied 2017 by Colville, Umatilla, Yakama, Wanapum, Nez Perce
//
// Sources: Rice 1972, Keyser 1992, Chatters 1995, Walker (ed.) 1998
//          Handbook of North American Indians Vol. 12: Plateau,
//          Rasmussen et al. 2015 (Nature), Burke Museum, NPS,
//          Spokane Tribe, Yakama Nation, Colville CT, Kalispel Tribe,
//          Coeur d'Alene Tribe official histories
// ============================================================

// Background pane for territory polygons
if (!map.getPane('plateauBackgroundPane')) {
  map.createPane('plateauBackgroundPane');
  map.getPane('plateauBackgroundPane').style.zIndex = 345;
}

const PLT = {
  yakama:    '#B8860B',  // dark goldenrod — Yakama Nation
  spokane:   '#CD853F',  // peru — Spokane Tribe
  palouse:   '#D2691E',  // chocolate — Palouse
  wanapum:   '#DAA520',  // goldenrod — Wanapum
  colville:  '#BC8F8F',  // rosy brown — Colville Confederated
  coeur:     '#8FBC8F',  // dark sea green — Coeur d'Alene
  kalispel:  '#5F9EA0',  // cadet blue — Kalispel
  nezperce:  '#A0522D',  // sienna — Nez Perce
  wishram:   '#9370DB',  // medium purple — Wishram/Wasco
  precontact:'#708090',  // slate gray — pre-tribal archaeological sites
  petro:     '#FFD700',  // gold — petroglyphs
  picto:     '#FF6347',  // tomato — pictographs
  village:   '#DEB887',  // burlewood — villages/habitation
  water:     '#1E90FF',  // dodger blue — waterways
  sacred:    '#DC143C',  // crimson — sacred sites
  lost:      '#B22222',  // firebrick — lost/inundated sites
  dam:       '#696969',  // dim gray — dams
  ancient:   '#4682B4'   // steel blue — ancient archaeological sites
};

// ==================== PRECONTACT ARCHAEOLOGICAL SITES ====================
// These predate named tribal identities — represent ancestral populations
// of ALL Columbia Plateau peoples

// --- East Wenatchee Clovis Cache (~11,300 BCE) ---
L.circleMarker([47.42, -120.31], {radius: 9, color: PLT.ancient, fillColor: PLT.ancient, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.ancient}">⬢ East Wenatchee Clovis Cache</h3>
    <p><b>Date:</b> ~11,300 BCE (Clovis period)</p>
    <p><b>Culture:</b> Clovis — earliest known inhabitants of the Columbia Plateau</p>
    <p><b>Significance:</b> Cache of large Clovis fluted spear points and bone foreshafts found by an orchard owner in 1987. One of the most important Clovis sites in western North America. These big-game hunters pursued mammoth, bison, and other megafauna across the recently deglaciated Plateau landscape.</p>
    <p><b>Context:</b> At this time, the Ice Age Floods (Missoula Floods) had just reshaped Eastern Washington within the previous ~2,000 years, creating the Channeled Scablands. The first humans arrived into a dramatically transformed landscape.</p>
    <p style="font-size:11px;color:#999;">Windust Phase predecessor — pre-tribal period</p>
  </div>`).addTo(L_groups.plateauArchSites);

// --- Marmes Rockshelter (~11,000+ years — INUNDATED 1969) ---
L.circleMarker([46.54, -118.14], {radius: 10, color: PLT.lost, fillColor: PLT.ancient, fillOpacity: 0.8, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.lost}">⬢ Marmes Rockshelter (INUNDATED)</h3>
    <p><b>Date:</b> 11,000+ years of continuous habitation</p>
    <p><b>Culture:</b> Windust Phase through historic period</p>
    <p><b>Significance:</b> One of the oldest continuously occupied sites in the Americas. Stratified deposits spanning the entire sequence of human occupation in the Columbia Plateau. Among the oldest human skeletal remains found in the Western Hemisphere at the time of discovery. Named after rancher Roland Marmes on whose land the site was found.</p>
    <p><b>Location:</b> Palouse River canyon, where the Palouse River joins the Snake River</p>
    <p style="color:${PLT.lost};font-weight:bold;">LOST: Inundated in 1969 by Lower Monumental Dam on the Snake River. Despite emergency excavations, the rising waters drowned this irreplaceable 11,000-year record of human life.</p>
    <p style="font-size:11px;color:#999;">Windust Phase type site — Franklin County</p>
  </div>`).addTo(L_groups.plateauArchSites);

// --- Lind Coulee (~8,000 BCE) ---
L.circleMarker([46.93, -119.03], {radius: 7, color: PLT.ancient, fillColor: PLT.ancient, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.ancient}">⬢ Lind Coulee</h3>
    <p><b>Date:</b> ~8,500–5,500 BCE</p>
    <p><b>Culture:</b> Late Windust / Early Cascade Phase</p>
    <p><b>Significance:</b> Leaf-shaped projectile points and knives found alongside bison bones and remains of smaller mammals and fish. No salmon bones yet — salmon use developed later (~5,000 BCE). Evidence of hunters adapting to a changing post-glacial environment.</p>
    <p style="font-size:11px;color:#999;">East-central Washington — transitional culture period</p>
  </div>`).addTo(L_groups.plateauArchSites);

// --- Kennewick Man / The Ancient One (~8,500 BP) ---
L.circleMarker([46.22, -119.24], {radius: 10, color: PLT.ancient, fillColor: '#FFD700', fillOpacity: 0.9, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.ancient}">★ The Ancient One / Kennewick Man</h3>
    <p><b>Date:</b> ~8,400–8,690 years before present (Cascade Phase)</p>
    <p><b>Discovery:</b> Found July 28, 1996, in the Columbia River near Columbia Park, Kennewick, by two college students watching hydroplane races. Nearly complete skeleton — one of the oldest and most complete ever found in the Americas.</p>
    <p><b>The Controversy:</b> Initial studies suggested skull shape was unlike modern Native Americans, sparking a 20-year legal battle. Five Columbia Plateau tribes (Colville, Umatilla, Yakama, Wanapum, Nez Perce) sought reburial under NAGPRA.</p>
    <p><b>Resolution (2015):</b> DNA analysis by University of Copenhagen confirmed The Ancient One is genetically closest to modern Native Americans, particularly Columbia Plateau tribes. This definitively ended theories of non-Native ancient American populations.</p>
    <p><b>Reburial:</b> On February 18, 2017, over 200 members of the five tribes reburied the Ancient One at an undisclosed location on the Columbia Plateau, ending a 20-year struggle.</p>
    <p><b>Physical details:</b> Male, 40–50 years old. Had a Cascade-style stone projectile point embedded in his pelvis — healed over, meaning he survived the wound. Arthritis in knees and elbow, healed rib fracture. Right-handed spearfisher/hunter.</p>
    <p style="font-size:11px;color:#999;">One of the most important archaeological finds in North American history</p>
  </div>`).addTo(L_groups.plateauArchSites);

// --- Alpowa Site / Chief Timothy State Park (~4,000+ years) ---
L.circleMarker([46.40, -117.10], {radius: 6, color: PLT.ancient, fillColor: PLT.ancient, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.ancient}">⬢ Alpowa / Chief Timothy Site</h3>
    <p><b>Date:</b> ~2,000 BCE onward</p>
    <p><b>Culture:</b> Late Prehistoric — ancestors of Nez Perce</p>
    <p><b>Significance:</b> Long-occupied site at the confluence of Alpowa Creek and the Snake River. Demonstrates the transition to storage-dependent salmon fishing economies. Named for Chief Timothy, a Nez Perce leader who maintained peace with settlers.</p>
  </div>`).addTo(L_groups.plateauArchSites);

// --- Kettle Falls — Ancient fishing & trading center ---
L.circleMarker([48.61, -118.06], {radius: 9, color: PLT.colville, fillColor: PLT.sacred, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.sacred}">★ Kettle Falls — Shonitkwu</h3>
    <p><b>Date:</b> Millennia of continuous use</p>
    <p><b>Tribes:</b> Colville Confederated (all 11 bands), plus many neighboring tribes</p>
    <p><b>Significance:</b> One of the most important intertribal fishing and trading centers in the entire Columbia Plateau. Many different tribes gathered here seasonally to fish for salmon at the falls and trade goods. The site drew peoples from across the region for thousands of years.</p>
    <p><b>Contact Period:</b> Fort Colville established 1826 as fur trading post. Named after Andrew Colville, a London director who never set foot in America. From 1826–1887, Indians traded beaver, bear, muskrat, fisher, fox, lynx, marten, mink, otter, raccoon, wolverine, badger, and wolf pelts.</p>
    <p style="color:${PLT.lost};font-weight:bold;">LOST: Fishing grounds inundated by Grand Coulee Dam (1942), severing thousands of years of salmon fishing tradition. The dam blocked all salmon migration above it.</p>
  </div>`).addTo(L_groups.plateauArchSites);

// --- Celilo Falls / The Dalles (INUNDATED 1957) ---
L.circleMarker([45.63, -121.13], {radius: 10, color: PLT.lost, fillColor: PLT.sacred, fillOpacity: 0.8, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.lost}">★ Celilo Falls — Wyam (INUNDATED)</h3>
    <p><b>Date:</b> 10,000+ years of continuous human occupation</p>
    <p><b>Tribes:</b> Wishram, Wasco, Yakama, Umatilla, Nez Perce, Wanapum, and dozens more</p>
    <p><b>Significance:</b> One of the longest continuously inhabited sites in North America and one of the largest trading centers on the continent. Peoples from across the Pacific Northwest, Great Basin, and Plains gathered to fish salmon at the great falls and trade goods. Lewis & Clark documented the bustling village in 1805.</p>
    <p><b>Rock Art:</b> 100+ individual rock art sites documented in The Dalles–Deschutes area, with some sites containing over 1,000 different motifs. The largest concentration of rock art in North America.</p>
    <p style="color:${PLT.lost};font-weight:bold;">DESTROYED: On March 10, 1957, the floodgates of The Dalles Dam closed. "Weeping Indians stood on the shore and watched as the white man's dam drowned their homes, their livelihood and the center of their culture." — Historian Roberta Ulrich</p>
    <p style="font-size:11px;color:#999;">The Dalles, OR/WA border — Klickitat County side</p>
  </div>`).addTo(L_groups.plateauArchSites);

// ==================== TRIBAL TERRITORIES ====================

// ===== YAKAMA NATION =====
// 14 confederated bands — largest tribal territory in Eastern WA
// Archaeological evidence dates back 12,000+ years
// Sahaptin speakers — present 2,000-5,000+ years

L.polygon([
  [47.30, -121.40], // NW — Cascade crest near Snoqualmie Pass area
  [47.40, -121.00],
  [47.50, -120.50], // N — Wenatchee River area
  [47.40, -120.00],
  [47.20, -119.60],
  [47.00, -119.30],
  [46.80, -119.10],
  [46.60, -119.00], // E — toward Tri-Cities
  [46.40, -119.00],
  [46.20, -119.10], // SE — Columbia River
  [46.00, -119.30],
  [45.80, -119.50],
  [45.70, -120.00],
  [45.60, -120.50], // S — Columbia Gorge
  [45.65, -121.00],
  [45.70, -121.30],
  [45.80, -121.50], // SW — near The Dalles
  [46.00, -121.50],
  [46.20, -121.60], // W — Cascade Range, Mount Adams
  [46.50, -121.50],
  [46.80, -121.50],
  [47.00, -121.50],
  [47.20, -121.50]
], {
  color: PLT.yakama, fillColor: PLT.yakama, fillOpacity: 0.06,
  weight: 2, dashArray: '10,6', pane: 'plateauBackgroundPane',
  interactive: false
}).addTo(L_groups.yakamaTerr);

L.marker([46.60, -120.50], {
  icon: L.divIcon({
    className: '', iconSize: [220, 40], iconAnchor: [110, 20],
    html: `<div style="text-align:center;color:${PLT.yakama};font-size:14px;font-weight:bold;font-family:Georgia,serif;text-shadow:1px 1px 4px rgba(0,0,0,0.6);letter-spacing:2px;opacity:0.55;">YAKAMA NATION</div><div style="text-align:center;color:${PLT.yakama};font-size:9px;font-family:Georgia,serif;opacity:0.45;">14 Confederated Tribes & Bands</div>`
  }), interactive: false
}).addTo(L_groups.yakamaTerr);

// Pahto / Mount Adams — Sacred Mountain
L.circleMarker([46.2024, -121.4909], {radius: 10, color: PLT.sacred, fillColor: PLT.sacred, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.sacred}">★ Pahto (Mount Adams) — Sacred Mountain</h3>
    <p><b>Elevation:</b> 12,281 ft — 2nd highest peak in Washington</p>
    <p><b>Tribe:</b> Yakama Nation — "Pahto" is the Yakama name</p>
    <p><b>Significance:</b> Sacred mountain of the Yakama people. Largest of the Cascade volcanoes by volume. Partly within the Yakama Reservation. The Yakama fought as recently as 2021 (Ninth Circuit) to retain jurisdiction over "Tract D," lands SW of the mountain promised in the 1855 Treaty — 166 years to fully acknowledge.</p>
    <p><b>Cultural role:</b> Snowmelt from Pahto flows through canyons, forests, meadows and valleys to provide water — "gifts to our people." The mountain appears on the Yakama Nation flag.</p>
  </div>`).addTo(L_groups.yakamaTerr);

// Union Gap — Main Yakama village site
L.circleMarker([46.55, -120.47], {radius: 7, color: PLT.yakama, fillColor: PLT.village, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.yakama}">● Union Gap — Principal Village</h3>
    <p><b>Tribe:</b> Yakama (Mamachatpam)</p>
    <p><b>Names:</b> "Waptailnsim" (people of the narrow river) or "Pa'kiut'lĕma" (people of the gap) — both refer to the narrows in the Yakima River here</p>
    <p><b>Significance:</b> Pass through Ahtanum Ridge where the Yakima River flows. Main village site of the Yakama people. Chief Weowwicht unified a vast region from this location in the 1700s. After his death, the territory was divided: Lower Yakama south of Wenas Creek (Chief Kamiakin), Upper Yakama/Kittitas north of Wenas Creek (Chiefs Teias and Owhi).</p>
    <p><b>Population:</b> 60-70 villages of 50-200 people across the Yakima River Valley</p>
  </div>`).addTo(L_groups.yakamaTerr);

// ===== SPOKANE TRIBE =====
// 3 divisions — Interior Salish speakers
// 9,000+ years of habitation confirmed

L.polygon([
  [48.20, -118.30], // NW — toward Columbia River
  [48.30, -117.80],
  [48.40, -117.30],
  [48.30, -116.80], // NE — toward Idaho border
  [48.10, -116.50],
  [47.80, -116.40],
  [47.60, -116.60],
  [47.40, -116.80],
  [47.30, -117.00], // SE — Hangman Creek area
  [47.30, -117.40],
  [47.40, -117.80],
  [47.50, -118.00],
  [47.70, -118.20], // SW
  [47.90, -118.30],
  [48.10, -118.30]
], {
  color: PLT.spokane, fillColor: PLT.spokane, fillOpacity: 0.06,
  weight: 2, dashArray: '10,6', pane: 'plateauBackgroundPane',
  interactive: false
}).addTo(L_groups.spokaneTerr);

L.marker([47.80, -117.40], {
  icon: L.divIcon({
    className: '', iconSize: [200, 40], iconAnchor: [100, 20],
    html: `<div style="text-align:center;color:${PLT.spokane};font-size:13px;font-weight:bold;font-family:Georgia,serif;text-shadow:1px 1px 4px rgba(0,0,0,0.6);letter-spacing:2px;opacity:0.55;">SPOKANE</div><div style="text-align:center;color:${PLT.spokane};font-size:9px;font-family:Georgia,serif;opacity:0.45;">Sqeliz — "Children of the Sun"</div>`
  }), interactive: false
}).addTo(L_groups.spokaneTerr);

// Spokane Falls — Center of Spokane world
L.circleMarker([47.66, -117.43], {radius: 9, color: PLT.sacred, fillColor: PLT.sacred, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.sacred}">★ Spokane Falls — Heart of the Spokane People</h3>
    <p><b>Tribe:</b> Spokane — Upper Spokane (Sntʔtʔúlixʷ, "People of the Falls")</p>
    <p><b>Date:</b> 9,000+ years of habitation confirmed archaeologically</p>
    <p><b>Significance:</b> Sacred falls at the center of Spokane territory. The falls were a vital salmon fishing site for millennia. The Spokane people's name may derive from a chief, Illim-Spokanee ("Son of the Sun"), first encountered by fur traders.</p>
    <p><b>Contact:</b> Spokane House established 1810 by North West Company at Spokane/Little Spokane River confluence — first permanent non-Indian settlement in Washington State.</p>
    <p><b>Today:</b> The city of Spokane (Sʎˈetkʷ in Spokane language) grew around these falls, within ancestral Spokane land but outside the reservation.</p>
  </div>`).addTo(L_groups.spokaneTerr);

// ===== PALOUSE =====
L.polygon([
  [47.10, -118.30], // NW
  [47.10, -117.50],
  [47.00, -117.00],
  [46.80, -116.80], // NE — toward Idaho
  [46.50, -116.90],
  [46.30, -117.10],
  [46.20, -117.40], // SE — Snake River
  [46.30, -117.80],
  [46.40, -118.10],
  [46.60, -118.40], // SW
  [46.80, -118.40],
  [47.00, -118.40]
], {
  color: PLT.palouse, fillColor: PLT.palouse, fillOpacity: 0.06,
  weight: 2, dashArray: '10,6', pane: 'plateauBackgroundPane',
  interactive: false
}).addTo(L_groups.palouseTerr);

L.marker([46.70, -117.60], {
  icon: L.divIcon({
    className: '', iconSize: [160, 30], iconAnchor: [80, 15],
    html: `<div style="text-align:center;color:${PLT.palouse};font-size:12px;font-weight:bold;font-family:Georgia,serif;text-shadow:1px 1px 4px rgba(0,0,0,0.6);letter-spacing:2px;opacity:0.55;">PALOUSE</div>`
  }), interactive: false
}).addTo(L_groups.palouseTerr);

// ===== WANAPUM =====
// Small band along Columbia River — Priest Rapids to Snake River mouth

L.polyline([
  [46.22, -119.27], // Pasco / Snake River mouth
  [46.30, -119.40],
  [46.40, -119.55],
  [46.50, -119.70],
  [46.60, -119.85],
  [46.65, -119.93]  // Priest Rapids area
], {
  color: PLT.wanapum, weight: 4, opacity: 0.6, dashArray: '12,6'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${PLT.wanapum}">WANAPUM — River People</h3>
  <p><b>Language:</b> Sahaptin (Wánapam = "river people")</p>
  <p><b>Territory:</b> Columbia River from Pasco (Snake River mouth) upstream to Priest Rapids</p>
  <p><b>Population:</b> Small band — ~60 still live near Priest Rapids today</p>
  <p><b>Culture:</b> River people who cut 300+ petroglyphs into basalt cliffs. Created the Washane/Dreamer Religion (Smohalla, 1800s) — prayed rather than fought. Never fought settlers, never signed a treaty, and as a result retained no federally recognized land rights.</p>
  <p><b>Principal village:</b> P'ná, located 2 miles downstream of present Priest Rapids Dam. At least 4 other village sites at the dam location (Verne Ray, 1936).</p>
</div>`).addTo(L_groups.wanapumTerr);

L.marker([46.45, -119.70], {
  icon: L.divIcon({
    className: '', iconSize: [140, 30], iconAnchor: [70, 15],
    html: `<div style="text-align:center;color:${PLT.wanapum};font-size:11px;font-weight:bold;font-family:Georgia,serif;text-shadow:1px 1px 4px rgba(0,0,0,0.6);letter-spacing:2px;opacity:0.55;">WANAPUM</div>`
  }), interactive: false
}).addTo(L_groups.wanapumTerr);

// ===== COLVILLE CONFEDERATED TRIBES =====
L.polygon([
  [49.00, -120.00], // N — Canadian border
  [49.00, -118.50],
  [49.00, -117.80],
  [48.80, -117.60],
  [48.50, -117.60], // NE
  [48.30, -118.00],
  [48.00, -118.20],
  [47.80, -118.40],
  [47.60, -118.70], // S
  [47.60, -119.20],
  [47.70, -119.60],
  [47.80, -119.80],
  [48.00, -120.00],
  [48.30, -120.30],
  [48.60, -120.20],
  [48.80, -120.10]
], {
  color: PLT.colville, fillColor: PLT.colville, fillOpacity: 0.05,
  weight: 2, dashArray: '10,6', pane: 'plateauBackgroundPane',
  interactive: false
}).addTo(L_groups.colvilleTerr);

L.marker([48.30, -119.00], {
  icon: L.divIcon({
    className: '', iconSize: [240, 40], iconAnchor: [120, 20],
    html: `<div style="text-align:center;color:${PLT.colville};font-size:13px;font-weight:bold;font-family:Georgia,serif;text-shadow:1px 1px 4px rgba(0,0,0,0.6);letter-spacing:2px;opacity:0.55;">COLVILLE CONFEDERATED</div><div style="text-align:center;color:${PLT.colville};font-size:9px;font-family:Georgia,serif;opacity:0.4;">11 Bands — Wenatchee, Entiat, Chelan, Methow, Okanogan, Nespelen, San Poil, Lakes, Moses, Palouse, Nez Perce</div>`
  }), interactive: false
}).addTo(L_groups.colvilleTerr);

// ===== COEUR D'ALENE (Schitsu'umsh) =====
L.polygon([
  [48.00, -117.20], // N — near Lake Pend Oreille south end
  [48.00, -116.60],
  [47.80, -116.20], // NE — toward Montana
  [47.50, -115.90],
  [47.20, -116.00], // SE — Clearwater area
  [46.80, -116.40],
  [46.70, -116.80],
  [46.70, -117.20], // SW — Steptoe Butte area
  [46.90, -117.40],
  [47.10, -117.50],
  [47.40, -117.40],
  [47.60, -117.30],
  [47.80, -117.20]
], {
  color: PLT.coeur, fillColor: PLT.coeur, fillOpacity: 0.06,
  weight: 2, dashArray: '10,6', pane: 'plateauBackgroundPane',
  interactive: false
}).addTo(L_groups.coeurTerr);

L.marker([47.40, -116.80], {
  icon: L.divIcon({
    className: '', iconSize: [200, 40], iconAnchor: [100, 20],
    html: `<div style="text-align:center;color:${PLT.coeur};font-size:12px;font-weight:bold;font-family:Georgia,serif;text-shadow:1px 1px 4px rgba(0,0,0,0.6);letter-spacing:2px;opacity:0.55;">COEUR D'ALENE</div><div style="text-align:center;color:${PLT.coeur};font-size:9px;font-family:Georgia,serif;opacity:0.4;">Schitsu'umsh — "The Ones Found Here"</div>`
  }), interactive: false
}).addTo(L_groups.coeurTerr);

// Steptoe Butte — Sacred Site
L.circleMarker([47.04, -117.30], {radius: 8, color: PLT.sacred, fillColor: PLT.sacred, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.sacred}">★ Steptoe Butte — Sacred Site</h3>
    <p><b>Tribe:</b> Coeur d'Alene (Schitsu'umsh)</p>
    <p><b>Geology:</b> 500 million year old quartzite rock rising 1,000+ feet above the Palouse prairie</p>
    <p><b>Significance:</b> One of the most important sacred sites of the Coeur d'Alene people. Its peak was a site of meditation, prayer, and ceremony for centuries. The butte is solid rock, covered with downy grass — the highest point in the Palouse.</p>
  </div>`).addTo(L_groups.coeurTerr);

// ===== KALISPEL =====
L.polygon([
  [48.80, -117.40], // N — toward British Columbia
  [48.80, -116.80],
  [48.60, -116.20],
  [48.30, -115.80], // NE — toward Paradise, MT
  [48.00, -115.80],
  [47.80, -116.20],
  [47.70, -116.60], // S — Lake Pend Oreille area
  [47.80, -117.00],
  [48.00, -117.30],
  [48.30, -117.40],
  [48.60, -117.50]
], {
  color: PLT.kalispel, fillColor: PLT.kalispel, fillOpacity: 0.05,
  weight: 2, dashArray: '10,6', pane: 'plateauBackgroundPane',
  interactive: false
}).addTo(L_groups.kalispelTerr);

L.marker([48.20, -116.80], {
  icon: L.divIcon({
    className: '', iconSize: [180, 30], iconAnchor: [90, 15],
    html: `<div style="text-align:center;color:${PLT.kalispel};font-size:12px;font-weight:bold;font-family:Georgia,serif;text-shadow:1px 1px 4px rgba(0,0,0,0.6);letter-spacing:2px;opacity:0.55;">KALISPEL</div>`
  }), interactive: false
}).addTo(L_groups.kalispelTerr);

// ===== NEZ PERCE (Nimiipuu) — SE Washington / Idaho =====
L.polygon([
  [46.80, -116.60], // NW — near Lewiston/Clarkston
  [46.80, -115.80],
  [46.60, -115.20], // NE — Clearwater headwaters
  [46.20, -114.80],
  [45.80, -114.60], // SE — Salmon River
  [45.50, -114.80],
  [45.30, -115.30],
  [45.30, -115.80],
  [45.50, -116.30], // SW — Hells Canyon
  [45.80, -116.80],
  [46.10, -117.00],
  [46.30, -117.00],
  [46.50, -116.90],
  [46.70, -116.70]
], {
  color: PLT.nezperce, fillColor: PLT.nezperce, fillOpacity: 0.05,
  weight: 2, dashArray: '10,6', pane: 'plateauBackgroundPane',
  interactive: false
}).addTo(L_groups.nezperceTerr);

L.marker([46.10, -115.80], {
  icon: L.divIcon({
    className: '', iconSize: [180, 40], iconAnchor: [90, 20],
    html: `<div style="text-align:center;color:${PLT.nezperce};font-size:13px;font-weight:bold;font-family:Georgia,serif;text-shadow:1px 1px 4px rgba(0,0,0,0.6);letter-spacing:2px;opacity:0.55;">NEZ PERCE</div><div style="text-align:center;color:${PLT.nezperce};font-size:9px;font-family:Georgia,serif;opacity:0.4;">Nimiipuu — "The Real People"</div>`
  }), interactive: false
}).addTo(L_groups.nezperceTerr);

// ==================== ROCK ART SITES ====================

// --- Tsagaglalal / "She Who Watches" — Columbia Hills ---
L.circleMarker([45.649, -121.108], {radius: 10, color: PLT.petro, fillColor: PLT.picto, fillOpacity: 0.9, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.petro}">★ Tsagaglalal — "She Who Watches"</h3>
    <p><b>Type:</b> Pictograph & Petroglyph</p>
    <p><b>Tribe:</b> Wishram / Wasco-Wishram (Upper Chinookan)</p>
    <p><b>Location:</b> Columbia Hills State Park (formerly Horsethief Lake), Klickitat County</p>
    <p><b>Significance:</b> The most famous rock image in the Pacific Northwest. A striking female figure with large staring eyes, both painted and carved into the rock face. The Temani Pesh-wa ("Written on Rock") Trail nearby displays additional petroglyphs rescued from the rising waters of The Dalles Dam.</p>
    <p><b>The Collection:</b> Before the dam, Lewis & Clark visited this village in 1805. Petroglyphs were cut from Petroglyph Canyon before inundation, stored for 30 years, then restored and displayed in 2004 at the request of Yakama, Warm Springs, Umatilla, and Nez Perce tribes.</p>
    <p><b>Access:</b> Guided tours only for Tsagaglalal; Temani Pesh-wa Trail self-guided April–October</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Vantage / Ginkgo Petrified Forest Petroglyphs ---
L.circleMarker([46.949, -120.003], {radius: 8, color: PLT.petro, fillColor: PLT.petro, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.petro}">◆ Vantage Petroglyphs — Wanapum</h3>
    <p><b>Type:</b> Petroglyphs (relocated)</p>
    <p><b>Tribe:</b> Wanapum</p>
    <p><b>Location:</b> Ginkgo Petrified Forest State Park, near Vantage</p>
    <p><b>Description:</b> ~60 petroglyphs salvaged from 3 Columbia River sites before Wanapum Dam construction (1963). Originally 300+ petroglyphs at the site. Includes twin figures with rayed arcs (possibly the most striking panel), mountain sheep, animal designs, human forms, and sun designs.</p>
    <p><b>Context:</b> The Wanapum people carved over 300 petroglyphs into basalt cliffs along the Columbia River. Most were destroyed or inundated by the dam.</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Buffalo Eddy — Nez Perce ---
L.circleMarker([46.172, -116.930], {radius: 8, color: PLT.petro, fillColor: PLT.petro, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.petro}">◆ Buffalo Eddy Petroglyphs</h3>
    <p><b>Type:</b> Petroglyphs & Pictographs</p>
    <p><b>Tribe:</b> Nez Perce (Nimiipuu)</p>
    <p><b>Location:</b> Snake River, 15 miles south of Asotin, WA</p>
    <p><b>Description:</b> Finest publicly accessible rock art in the region. Carved into a jumble of black basalt rocks at Buffalo Eddy — one of the deepest holes in the Snake River. The swirling water created a sacred whirlpool site. Carvings span thousands of years.</p>
    <p><b>Protection:</b> Added to Nez Perce National Historical Park 1992. Road moved away from rocks 1999 for protection. Quarter-mile interpretive gravel trail.</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Indian Painted Rocks — Spokane ---
L.circleMarker([47.775, -117.468], {radius: 7, color: PLT.picto, fillColor: PLT.picto, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.picto}">◆ Indian Painted Rocks — Spokane</h3>
    <p><b>Type:</b> Pictographs (red paint)</p>
    <p><b>Tribe:</b> Spokane</p>
    <p><b>Date:</b> ~250 years old (~1750 CE) — may depict horses and a cross (contact-era)</p>
    <p><b>Location:</b> Little Spokane River Natural Area, Spokane County</p>
    <p><b>Description:</b> Red pigment paintings on porous granite. Made from pulverized red rock mixed with fish or animal oil — the iron oxide stain seeped deep into the rock, making the paintings permanent. Two groups of pictographs in a 6-foot-square area on a 25-foot-tall rock.</p>
    <p><b>Context:</b> Near a large Spokane village site at the confluence of the Little Spokane and Spokane Rivers. Listed on National Register of Historic Places 1970. Protected by iron grate from vandalism.</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Bowl & Pitcher — Riverside State Park ---
L.circleMarker([47.695, -117.496], {radius: 6, color: PLT.petro, fillColor: PLT.petro, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.petro}">◆ Bowl & Pitcher Petroglyphs</h3>
    <p><b>Type:</b> Petroglyphs</p>
    <p><b>Tribe:</b> Spokane</p>
    <p><b>Location:</b> Riverside State Park, Spokane County</p>
    <p><b>Description:</b> Petroglyphs carved into basalt cliffs in a popular hiking area along the Spokane River. Designs include animals, human figures, and geometric patterns.</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Ice Harbor Dam / Indian Memorial Park ---
L.circleMarker([46.252, -118.876], {radius: 7, color: PLT.lost, fillColor: PLT.petro, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.lost}">◆ Ice Harbor Dam Petroglyphs (Relocated)</h3>
    <p><b>Type:</b> Petroglyphs</p>
    <p><b>Tribes:</b> Yakama, Nez Perce, Umatilla, Colville, Wanapum</p>
    <p><b>Location:</b> Indian Memorial Park, Burbank, Walla Walla County</p>
    <p><b>Description:</b> Petroglyphs found during 1956 surveying before Ice Harbor Lock & Dam construction. Snake River level rose 100+ feet, inundating burial grounds and cultural sites. 15-acre memorial park created 1965 to commemorate the flooded sites.</p>
    <p style="color:${PLT.lost};">Vandalized in 2024 — spur road temporarily closed for damage assessment.</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Yakima Indian Painted Rocks ---
L.circleMarker([46.58, -120.60], {radius: 6, color: PLT.picto, fillColor: PLT.picto, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.picto}">◆ Yakima Indian Painted Rocks</h3>
    <p><b>Type:</b> Pictographs (polychromatic — white, red, black)</p>
    <p><b>Tribe:</b> Yakama</p>
    <p><b>Date:</b> Possibly 1,000+ years old</p>
    <p><b>Location:</b> Tiny state park (~2,000 sq ft) outside Yakima, at intersection of Powerhouse and Ackley Roads</p>
    <p><b>Description:</b> Painted on basalt cliff when a prehistoric lake submerged the bottom — painted from canoes using organic materials. The cliff parallels what was once an Indian trail connecting the Ahtanum valley to the Wenas mountains. Stylized polychromatic paintings.</p>
    <p><b>Note:</b> Some paintings were controversially "enhanced" by L.V. McWhorter using enamel paints — a practice unacceptable to modern preservation standards.</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Kettle Falls Petroglyphs ---
L.circleMarker([48.62, -118.07], {radius: 6, color: PLT.petro, fillColor: PLT.petro, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.petro}">◆ Kettle Falls Petroglyphs</h3>
    <p><b>Type:</b> Petroglyphs</p>
    <p><b>Tribes:</b> Colville Confederated (multiple bands)</p>
    <p><b>Description:</b> Animals, human figures, and geometric patterns near the great intertribal fishing and trading center. Some accessible by boat or short hike. Marcus Island nearby features additional petroglyphs visible only at low water levels.</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Bear Paw Rock — Kalispel ---
L.circleMarker([48.16, -116.55], {radius: 6, color: PLT.petro, fillColor: PLT.sacred, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.sacred}">◆ Bear Paw Rock — Kalispel</h3>
    <p><b>Type:</b> Rock art</p>
    <p><b>Tribe:</b> Kalispel</p>
    <p><b>Location:</b> Near Denton Slough, across from "Indian Meadows" powwow grounds</p>
    <p><b>Significance:</b> Memorializes one of the genesis stories of the Kalispel people. Now partially flooded — sits across the now-flooded meadow from historic gathering grounds.</p>
  </div>`).addTo(L_groups.plateauRockArt);

// ==================== INUNDATED SITES / DAM IMPACTS ====================

// Major dams that destroyed cultural sites
const damSites = [
  {pos:[47.93,-119.98], name:'Rock Island Dam', year:1933, lost:'Rock Island petroglyphs (600+ panels)', river:'Columbia'},
  {pos:[47.95,-118.98], name:'Grand Coulee Dam', year:1942, lost:'Kettle Falls fishing grounds, villages — blocked ALL salmon above', river:'Columbia'},
  {pos:[47.80,-120.03], name:'Wanapum Dam', year:1963, lost:'300+ Wanapum petroglyphs (60 salvaged to Ginkgo)', river:'Columbia'},
  {pos:[45.62,-121.13], name:'The Dalles Dam', year:1957, lost:'Celilo Falls, Petroglyph Canyon, 90+ rock art sites, villages — destroyed continent\'s greatest trading center', river:'Columbia'},
  {pos:[45.93,-120.69], name:'John Day Dam', year:1968, lost:'Hundreds of rock art sites, village sites — Lorings recorded petroglyphs as waters rose', river:'Columbia'},
  {pos:[46.56,-118.63], name:'Ice Harbor Dam', year:1961, lost:'Burial grounds, petroglyphs (some relocated)', river:'Snake'},
  {pos:[46.59,-118.14], name:'Lower Monumental Dam', year:1969, lost:'Marmes Rockshelter (11,000-year site) — DROWNED', river:'Snake'},
  {pos:[46.58,-117.83], name:'Little Goose Dam', year:1970, lost:'Village sites along lower Snake', river:'Snake'},
  {pos:[46.66,-117.43], name:'Lower Granite Dam', year:1975, lost:'Village sites along lower Snake', river:'Snake'}
];

damSites.forEach(d => {
  L.circleMarker(d.pos, {radius: 7, color: PLT.dam, fillColor: PLT.dam, fillOpacity: 0.7, weight: 2})
    .bindPopup(`<div class="popup-content">
      <h3 style="color:${PLT.dam}">⬛ ${d.name} (${d.year})</h3>
      <p><b>River:</b> ${d.river} River</p>
      <p style="color:${PLT.lost};font-weight:bold;">LOST: ${d.lost}</p>
    </div>`).addTo(L_groups.plateauDams);
});
