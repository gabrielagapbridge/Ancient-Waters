// ============================================================
// MOHICAN TERRITORY — Hudson Valley, Connecticut River Valley,
// Housatonic/Berkshires, Lake Champlain/Vermont
// Paleohydrology & Ancient Waterways Through Time
// ============================================================
// CHRONOLOGY:
//   ~15,000 BP: Glacial Lake Albany fills Hudson Valley (160 mi)
//   ~15,000–13,100 BP: Glacial Lake Vermont fills Champlain Valley
//   ~17,800–13,100 BP: Glacial Lake Hitchcock fills CT River Valley (200 mi)
//   ~13,100–10,000 BP: Champlain Sea — saltwater arm of Atlantic
//   ~13,000–10,500 BP: Lake Albany catastrophically drains
//   ~12,000 BP: Paleoindians arrive — landscape in active transformation
//   ~10,000 BP: Lake Champlain freshens; rivers emerging
//   ~6,000 BP: Sea level stabilizes; Hudson becomes full estuary
//   ~1,000–400 BP: Late Woodland Mohican culture thrives
//   1798: First CT River dam kills salmon run
//   1909: Vernon Dam drowns Brattleboro petroglyphs
//
// KEY CONCEPT: Muh-he-kun-ne-tuk — "the river that flows both ways"
//   The tidal Hudson estuary defined Mohican identity
//
// Sources: USGS glacial Lake Albany publications; Ridge et al. Lake
//   Hitchcock varve chronology; Cronin et al. 2008 Champlain Sea;
//   Pekar et al. 2004 Hudson paleosalinity; Scenic Hudson;
//   CT River salmon restoration records; Kchi Pôntegok Project;
//   Housatonic watershed geological surveys
// ============================================================

// Background pane for territory polygons
if (!map.getPane('mohicanBackgroundPane')) {
  map.createPane('mohicanBackgroundPane');
  map.getPane('mohicanBackgroundPane').style.zIndex = 346;
}

const MHC = {
  mohican:   '#8B4513',  // saddle brown — Mohican
  abenaki:   '#6B8E23',  // olive drab — Abenaki
  glacial:   '#4682B4',  // steel blue — glacial features
  estuary:   '#1E90FF',  // dodger blue — estuarine features
  ancient:   '#708090',  // slate gray — paleoindian sites
  petro:     '#FFD700',  // gold — petroglyphs
  sacred:    '#DC143C',  // crimson — sacred/spiritual sites
  lost:      '#B22222',  // firebrick — lost/destroyed
  dam:       '#696969',  // dim gray — dams
  village:   '#DEB887',  // burlewood — villages
  shell:     '#F5DEB3',  // wheat — shell middens
  fish:      '#20B2AA',  // light sea green — fisheries
  wetland:   '#2E8B57',  // sea green — wetlands
  saltwater: '#006994',  // dark cerulean — Champlain Sea
  oyster:    '#D2B48C'   // tan — oyster beds
};

// ==================== VANISHED GLACIAL LAKES ====================
// These enormous water bodies defined the Paleoindian landscape

// --- Glacial Lake Albany (~15,000–10,500 BP) ---
// 160 miles long, up to 24 km wide, turquoise glacial meltwater
L.polygon([
  [42.82, -73.85], [42.75, -73.65], [42.50, -73.60], [42.20, -73.70],
  [42.00, -73.80], [41.80, -73.85], [41.65, -73.90], [41.55, -73.95],
  [41.70, -74.05], [41.85, -74.00], [42.05, -73.95], [42.25, -73.90],
  [42.50, -73.80], [42.70, -73.78], [42.82, -73.85]
], {
  color: MHC.glacial, weight: 2, opacity: 0.7,
  fillColor: MHC.glacial, fillOpacity: 0.15, dashArray: '6,4',
  pane: 'mohicanBackgroundPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MHC.glacial}">🌊 Glacial Lake Albany</h3>
  <p><b>Date:</b> ~15,000–10,500 BP</p>
  <p><b>Extent:</b> ~160 miles from Poughkeepsie to Glens Falls, up to 24 km wide</p>
  <p><b>Description:</b> A massive proglacial lake filled the entire Hudson Valley. Turquoise-colored from suspended glacial silt, dammed at the south by the Harbor Hill Moraine (connecting Long Island to NJ at the Verrazano Narrows — then dry land). Fed by the Iromohawk River carrying Lake Iroquois overflow.</p>
  <p><b>Catastrophic drainage (~13,000–10,500 BP):</b> The moraine dam was breached catastrophically, releasing a wall of water that carved the Hudson Shelf Valley — a 150-km submarine valley still visible on ocean floor maps. Left behind flat clay plains (later the Albany Pine Bush and Hudson Valley brick-making clay banks).</p>
  <p><b>Paleoindians saw:</b> Earliest arrivals (~12,000 BP) encountered the lake still partially filled — shorelines retreating, new land emerging from murky glacial waters, braided meltwater channels cutting through barren gravel plains.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> USGS publications on glacial Lake Albany drainage; Connally & Sirkin 1973; Dineen 1986; Wall & LaFleur 1995</p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanGlacialLakes);

// --- Glacial Lake Hitchcock (~17,800–13,100 BP) ---
// 200 miles long, 10–20 km wide, up to 150 ft deep
L.polygon([
  [44.42, -72.05], [44.30, -72.00], [44.00, -72.40], [43.50, -72.55],
  [43.00, -72.55], [42.50, -72.55], [42.20, -72.60], [42.00, -72.62],
  [41.75, -72.65], [41.66, -72.65], [41.66, -72.75], [41.80, -72.75],
  [42.05, -72.72], [42.25, -72.70], [42.55, -72.65], [43.05, -72.62],
  [43.55, -72.60], [44.05, -72.45], [44.35, -72.15], [44.42, -72.05]
], {
  color: MHC.glacial, weight: 2, opacity: 0.7,
  fillColor: '#5F9EA0', fillOpacity: 0.15, dashArray: '6,4',
  pane: 'mohicanBackgroundPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MHC.glacial}">🌊 Glacial Lake Hitchcock</h3>
  <p><b>Date:</b> ~17,800–13,100 BP (existed ~4,700 years)</p>
  <p><b>Extent:</b> ~200 miles from Rocky Hill, CT to St. Johnsbury, VT</p>
  <p><b>Width:</b> 10–20 km wide, up to 150 feet deep</p>
  <p><b>Dammed by:</b> Massive glacial debris pile at Rocky Hill, CT (~1 mile wide)</p>
  <p><b>Drainage:</b> Dam breached in stages starting ~13,500 BP — first the southern basin below Holyoke Range, then progressively northward.</p>
  <p><b>Legacy:</b> Thick clay varve deposits from the lake bottom now form river banks and beds. These clays became habitat for bloodworms — critical food for fish that ancient people harvested. Flat lake-bottom deltas (now home to Bradley Airport, UMass Amherst) were conspicuous platforms in the post-lake landscape.</p>
  <p><b>Oral history:</b> Connecticut River peoples preserved stories about a great lake that once filled the valley — geological knowledge maintained across hundreds of generations.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Ridge et al. Lake Hitchcock varve chronology; Stone & Ashley 1995; Rittenour et al. 2000</p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanGlacialLakes);

// --- Glacial Lake Vermont (~15,000–13,100 BP) ---
L.polygon([
  [45.00, -73.20], [44.80, -73.15], [44.50, -73.20], [44.20, -73.25],
  [44.00, -73.30], [43.80, -73.35], [43.60, -73.30], [43.40, -73.25],
  [43.40, -73.40], [43.60, -73.45], [43.80, -73.50], [44.00, -73.45],
  [44.25, -73.40], [44.55, -73.35], [44.85, -73.30], [45.00, -73.35],
  [45.00, -73.20]
], {
  color: MHC.glacial, weight: 2, opacity: 0.6,
  fillColor: MHC.glacial, fillOpacity: 0.12, dashArray: '6,4',
  pane: 'mohicanBackgroundPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MHC.glacial}">🌊 Glacial Lake Vermont</h3>
  <p><b>Date:</b> ~15,000–13,100 BP</p>
  <p><b>Description:</b> Predecessor to both the Champlain Sea and Lake Champlain. Formed as ice retreated northward through the valley. Drained southward through the Hudson Valley (its outlet fed into Lake Albany). Burlington, VT and Plattsburgh, NY were underwater. Mount Philo was an island.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Chapman 1937; Rayburn et al. 2005; Parent & Occhietti 1988</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanGlacialLakes);

// --- The Champlain Sea (~13,100–10,000 BP) ---
// Saltwater arm of the Atlantic Ocean — with beluga whales
L.polygon([
  [45.00, -73.20], [44.80, -73.15], [44.50, -73.20], [44.20, -73.25],
  [44.00, -73.30], [43.80, -73.35], [43.60, -73.30], [43.40, -73.25],
  [43.40, -73.40], [43.60, -73.45], [43.80, -73.50], [44.00, -73.45],
  [44.25, -73.40], [44.55, -73.35], [44.85, -73.30], [45.00, -73.35],
  [45.00, -73.20]
], {
  color: MHC.saltwater, weight: 2.5, opacity: 0.8,
  fillColor: MHC.saltwater, fillOpacity: 0.18, dashArray: '4,3',
  pane: 'mohicanBackgroundPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MHC.saltwater}">🐋 The Champlain Sea</h3>
  <p><b>Date:</b> ~13,100–10,000 BP</p>
  <p><b>Salinity:</b> Up to 25 psu (practical salinity units)</p>
  <p><b>Description:</b> When ice retreated from the St. Lawrence Valley, the Atlantic Ocean rushed in through the isostatically depressed landscape. The Champlain Valley became an arm of the Atlantic Ocean.</p>
  <p><b>Marine life:</b> <b>Beluga whales, Atlantic cod, seals, and blue mussels</b> lived where Lake Champlain is today. A beluga whale skeleton found in Charlotte, VT (1849) is on display at UVM.</p>
  <p><b>Extent:</b> As far south as Lake Champlain's present extent and as far west as Ottawa, Ontario. Marine shoreline features preserved at 150–200 meters above modern sea level — evidence of how far the land was pushed down by ice weight.</p>
  <p><b>Transition:</b> Isostatic rebound (the land rising after ice removal) gradually pushed the sea out. By ~10,000 BP, freshwater Lake Champlain had formed.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Cronin et al. 2008; Rodrigues 1992; Parent & Occhietti 1988; UVM Natural History Museum</p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanChamplainSea);

// --- Glacial Lake Hudson (Upper NY Bay, breached ~6,000 BP) ---
L.polygon([
  [40.70, -74.08], [40.68, -74.00], [40.63, -73.98], [40.58, -74.05],
  [40.55, -74.10], [40.52, -74.18], [40.55, -74.22], [40.60, -74.18],
  [40.65, -74.12], [40.70, -74.08]
], {
  color: MHC.glacial, weight: 2, opacity: 0.6,
  fillColor: MHC.glacial, fillOpacity: 0.15, dashArray: '6,4',
  pane: 'mohicanBackgroundPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MHC.glacial}">🌊 Glacial Lake Hudson</h3>
  <p><b>Extent:</b> Filled Upper New York Bay</p>
  <p><b>Breach:</b> ~6,000 BP — broke through the Narrows, separating Staten Island from Long Island and creating the New York archipelago in its recognizable form.</p>
  <p><b>Significance:</b> This breach, combined with sea level stabilizing near modern levels, is when the Hudson estuary reached approximately its modern extent — tidal influence from the Battery to Troy (153 miles). The Hudson truly became <i>Muh-he-kun-ne-tuk</i>.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Pekar et al. 2004; Weiss 1974; Newman et al. 1969</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanGlacialLakes);

// ==================== PALEOINDIAN SITES ====================

// --- Reagan Site (Highgate, VT) — Champlain Sea beach ---
L.circleMarker([44.97, -73.02], {radius: 5, color: MHC.ancient, fillColor: MHC.ancient, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.ancient}">⬢ Reagan Site — Paleoindian on Champlain Sea Beach</h3>
    <p><b>Date:</b> ~11,000–10,000 BP (Paleoindian)</p>
    <p><b>Location:</b> Highgate, VT — on sand dunes formed from Champlain Sea beach deposits</p>
    <p><b>Significance:</b> Paleoindian artifacts in dunes from the saltwater Champlain Sea. These people were living on the edge of a saltwater sea where a freshwater lake exists today.</p>
    <p><b>Landscape:</b> The Champlain Valley was an arm of the Atlantic Ocean with beluga whales, seals, and cod. As the land rebounded from ice weight, the sea retreated and freshwater Lake Champlain formed.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Loring 1980; Haviland & Power 1994; Cronin et al. 2008</p>
  </div>`).addTo(L_groups.mohicanArchSites);

// --- Fairfax Sandblows (VT-FR-64) ---
L.circleMarker([44.67, -73.00], {radius: 4, color: MHC.ancient, fillColor: MHC.ancient, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.ancient}">⬢ Fairfax Sandblows (VT-FR-64)</h3>
    <p><b>Date:</b> Paleoindian period</p>
    <p><b>Location:</b> Fairfax, Franklin County, VT</p>
    <p><b>Significance:</b> Paleoindian artifacts found in sand dunes formed from Champlain Sea beach deposits — evidence of people living on the shores of the saltwater Champlain Sea.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Haviland & Power 1994; VT Division for Historic Preservation</p>
  </div>`).addTo(L_groups.mohicanArchSites);

// --- Charlotte Beluga Whale Discovery ---
L.circleMarker([44.31, -73.21], {radius: 5, color: MHC.saltwater, fillColor: MHC.saltwater, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.saltwater}">🐋 Charlotte Beluga Whale Skeleton</h3>
    <p><b>Date found:</b> 1849</p>
    <p><b>Age:</b> ~12,000–11,000 BP (Champlain Sea period)</p>
    <p><b>Location:</b> Charlotte, VT — found during railroad construction</p>
    <p><b>Significance:</b> A complete beluga whale skeleton found 10 feet underground — proof that the Champlain Valley was once a saltwater arm of the Atlantic Ocean. Vermont's state fossil. On display at UVM Perkins Museum of Geology.</p>
    <p><b>Context:</b> During the Paleoindian period, beluga whales, Atlantic cod, seals, and blue mussels inhabited these waters where Lake Champlain sits today.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> UVM Perkins Museum; Harington 1988; Cronin et al. 2008</p>
  </div>`).addTo(L_groups.mohicanChamplainSea);

// --- Turners Falls Paleoindian Site ---
L.circleMarker([42.60, -72.55], {radius: 5, color: MHC.ancient, fillColor: MHC.ancient, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.ancient}">⬢ Turners Falls — Paleoindian Occupation</h3>
    <p><b>Date:</b> ~10,500+ BP</p>
    <p><b>Location:</b> Turners Falls area, Montague, MA</p>
    <p><b>Context:</b> When Paleoindians occupied this area, Lake Hitchcock may have still partially existed in northern reaches, or had very recently drained. People lived on former lake terraces and deltas — flat, sandy, well-drained surfaces overlooking the newly emerging Connecticut River.</p>
    <p><b>Landscape:</b> Vast flat expanses of lake-bottom clay and silt, punctuated by sand dune fields and gravel deltas where meltwater streams had once entered the lake. Treeless tundra transitioning to scattered spruce.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Chilton et al. 2005; Thomas 1980; Ridge et al. varve chronology</p>
  </div>`).addTo(L_groups.mohicanArchSites);

// ==================== ANCIENT WATERWAYS (Pre-dam rivers) ====================

// --- Hudson River (Muh-he-kun-ne-tuk) — pre-dam course ---
L.polyline([
  [42.75, -73.69], [42.65, -73.75], [42.45, -73.78], [42.25, -73.80],
  [42.10, -73.85], [42.00, -73.90], [41.90, -73.95], [41.80, -73.96],
  [41.70, -73.97], [41.55, -73.98], [41.45, -73.99], [41.35, -73.97],
  [41.25, -73.96], [41.15, -73.95], [41.05, -73.95], [40.95, -73.92],
  [40.85, -73.92], [40.75, -73.97], [40.70, -74.00]
], {
  color: '#006D6F', weight: 4, opacity: 0.85
}).bindPopup(`<div class="popup-content">
  <h3 style="color:#006D6F">🏞️ Muh-he-kun-ne-tuk — Hudson River</h3>
  <p><b>Name meaning:</b> "The river that flows both ways" (Mohican)</p>
  <p><b>Length:</b> 315 miles; tidal for 153 miles (Battery to Troy)</p>
  <p><b>Evolution:</b></p>
  <p>• <b>15,000 BP:</b> Glacial Lake Albany fills the valley</p>
  <p>• <b>10,500 BP:</b> Lake drains; freshwater river emerges</p>
  <p>• <b>8,000 BP:</b> Estuary forming in lower reaches; tidal head migrating north</p>
  <p>• <b>6,000 BP:</b> Sea level stabilizes; full estuary to Troy established</p>
  <p>• <b>1,000 BP:</b> Peak ecological abundance — sturgeon, striped bass, shad, salmon, herring, lamprey</p>
  <p><b>Salinity zones:</b> Polyhaline near NYC → mesohaline through Highlands → oligohaline mid-valley → freshwater tidal Kingston to Troy</p>
  <p><b>Tidal character:</b> Twice daily, tides pushed saltwater as far north as Poughkeepsie and tidal influence to Troy — defining Mohican daily life and identity.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Pekar et al. 2004; Scenic Hudson; USGS Hudson River estuary studies</p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanRivers);

// --- Connecticut River — pre-dam course ---
L.polyline([
  [44.95, -71.50], [44.50, -71.75], [44.20, -72.05], [43.80, -72.20],
  [43.40, -72.35], [43.10, -72.45], [42.80, -72.55], [42.60, -72.60],
  [42.30, -72.58], [42.10, -72.62], [41.80, -72.65], [41.55, -72.65],
  [41.35, -72.38], [41.28, -72.34]
], {
  color: '#006D6F', weight: 3.5, opacity: 0.85
}).bindPopup(`<div class="popup-content">
  <h3 style="color:#006D6F">🏞️ Connecticut River — Unbroken Corridor</h3>
  <p><b>Pre-dam condition:</b> Salmon could travel from Long Island Sound to headwaters in northern NH — over 400 miles without a single obstruction. Shad traveled unimpeded to Bellows Falls (200+ miles).</p>
  <p><b>Evolution:</b></p>
  <p>• <b>17,800–13,100 BP:</b> Glacial Lake Hitchcock fills the valley</p>
  <p>• <b>13,000 BP:</b> Lake drains in stages; river cuts through varve clay deposits</p>
  <p>• <b>8,000 BP:</b> Great Falls at Bellows Falls and Turners Falls established as major fishing sites</p>
  <p>• <b>1,000 BP:</b> "The most fertile salmon habitat in the Eastern United States"</p>
  <p><b>Fish runs:</b> Salmon, shad, trout, herring, bass, lamprey — smoked, dried, and roasted at processing sites near the Great Falls.</p>
  <p><b>Destruction:</b> 1798 dam at Montague killed all salmon by the War of 1812. 45-year restoration effort abandoned in 2012 as a failure.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> CT River salmon restoration records; Bellows Falls Kchi Pôntegok Project; Bendremer & Thomas 2008</p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanRivers);

// --- Housatonic River (Usi-a-di-en-uk) ---
L.polyline([
  [42.45, -73.25], [42.35, -73.23], [42.20, -73.30], [42.10, -73.35],
  [42.00, -73.32], [41.90, -73.33], [41.78, -73.32], [41.65, -73.30],
  [41.50, -73.25], [41.35, -73.20], [41.20, -73.17], [41.10, -73.15]
], {
  color: '#006D6F', weight: 3, opacity: 0.85
}).bindPopup(`<div class="popup-content">
  <h3 style="color:#006D6F">🏞️ Usi-a-di-en-uk — Housatonic River</h3>
  <p><b>Name meaning:</b> "Beyond the mountain place" or "river of the mountain place" (Mohican)</p>
  <p><b>Mohican heartland:</b> The broad valley from Pittsfield through Great Barrington provided rich floodplains for agriculture.</p>
  <p><b>Key sites:</b> Old Indian Fordway at Great Barrington (critical river crossing); Canoe Meadows/Unkamet's Crossing at Pittsfield.</p>
  <p><b>7,000+ years of occupation:</b> Settlement at Weatogue/Bartholomew's Cobble dates to at least 7,000 BP.</p>
  <p><b>Destruction:</b> 28+ paper mill dams by end of Civil War. Now one of the most PCB-contaminated rivers in the country (GE Pittsfield plant).</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Housatonic watershed geological surveys; Lavin 2013; Brumbach 1986</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanRivers);

// --- Hudson Canyon (submarine) ---
L.polyline([
  [40.50, -73.85], [40.30, -73.50], [40.10, -73.20], [39.80, -72.80],
  [39.50, -72.40], [39.20, -72.00]
], {
  color: '#4682B4', weight: 2.5, opacity: 0.6, dashArray: '8,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MHC.glacial}">🌊 Hudson Canyon — Submarine River</h3>
  <p><b>Length:</b> 400+ miles across the continental shelf</p>
  <p><b>Scale:</b> Comparable to the Grand Canyon (walls up to 3,600 ft at continental slope)</p>
  <p><b>Origin:</b> During the Paleoindian period, sea level was 350–400 ft lower and the coastline was 50–100 miles further east. The Hudson River flowed across the exposed continental shelf in this channel — the ancient river mouth was near the shelf edge, ~100 miles east of modern Manhattan.</p>
  <p><b>All Paleoindian coastal sites</b> from this period are now submerged beneath the Atlantic.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> USGS; Uchupi et al. 2001; Newman et al. 1969</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanRivers);

// ==================== MOHICAN VILLAGES & HABITATION SITES ====================

// --- Papscanee Island / Goldkrest site (Nanosech) ---
L.circleMarker([42.53, -73.73], {radius: 5, color: MHC.mohican, fillColor: MHC.village, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.mohican}">⬢ Papscanee Island / Goldkrest Site (Nanosech)</h3>
    <p><b>Period:</b> Late Woodland (prominent by ~AD 1000)</p>
    <p><b>Location:</b> East bank of Hudson, Rensselaer County, NY</p>
    <p><b>Description:</b> Warm-season fishing site surrounded by marshes and rich alluvial soils. By ~AD 1000, evidence of corn production and deliberate forest burning for clearing — this affected watershed dynamics, increasing runoff and expanding meadow/wetland areas near the village.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Chilton 2010; Brumbach 1975; Funk 1976</p>
  </div>`).addTo(L_groups.mohicanVillages);

// --- Winney's Rift (Upper Hudson — nucleated Mahican settlement) ---
L.circleMarker([42.85, -73.63], {radius: 5, color: MHC.mohican, fillColor: MHC.village, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.mohican}">⬢ Winney's Rift — Mohican Nucleated Settlement</h3>
    <p><b>Period:</b> Middle Woodland through Late Woodland</p>
    <p><b>Location:</b> Upper Hudson River, Saratoga County, NY</p>
    <p><b>Significance:</b> Shows Mohican occupation becoming "increasingly nucleated and year-round" — the river was productive enough to support semi-permanent settlement. Evidence of growing sedentism tied to abundant estuarine resources.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Brumbach 1975; Funk 1976; Snow 1980</p>
  </div>`).addTo(L_groups.mohicanVillages);

// --- Claverack Creek / Spook Rock (Proto-Mohican winter camp) ---
L.circleMarker([42.22, -73.73], {radius: 4, color: MHC.mohican, fillColor: MHC.village, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.mohican}">⬢ Claverack Creek / Spook Rock</h3>
    <p><b>Period:</b> Middle Archaic through Woodland</p>
    <p><b>Location:</b> Near Hudson, NY (Columbia County)</p>
    <p><b>Description:</b> Proto-Mohican camps showing winter occupation along Claverack Creek with seasonal movement to the Hudson River in warmer months. Demonstrates the seasonal round that characterized Mohican life — interior creek sites in winter, river sites in summer for fishing.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Funk 1976; Ritchie 1994</p>
  </div>`).addTo(L_groups.mohicanVillages);

// --- Weatogue / Bartholomew's Cobble (7,000+ years) ---
L.circleMarker([42.05, -73.33], {radius: 5, color: MHC.mohican, fillColor: MHC.village, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.mohican}">⬢ Weatogue / Bartholomew's Cobble</h3>
    <p><b>Date:</b> ~7,000+ years of Native American settlement</p>
    <p><b>Location:</b> Along the Housatonic River, Ashley Falls/Sheffield, MA</p>
    <p><b>Significance:</b> One of the longest continuously occupied sites in the Housatonic Valley. Located where the river stabilized in its marble valley course through the Berkshires.</p>
    <p><b>Landscape:</b> The river cut through easily eroded Stockbridge Formation limestone/marble, creating a continually changing path through the Marble Valley.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Housatonic watershed surveys; Lavin 2013</p>
  </div>`).addTo(L_groups.mohicanVillages);

// --- Twin Lakes (Salisbury, CT — 5,000+ years) ---
L.circleMarker([42.02, -73.43], {radius: 4, color: MHC.mohican, fillColor: MHC.village, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.mohican}">⬢ Twin Lakes — Ancient Lakeside Occupation</h3>
    <p><b>Date:</b> ~5,000+ years (likely earlier)</p>
    <p><b>Location:</b> Salisbury, CT</p>
    <p><b>Description:</b> Long-term occupation site at the lakes, part of the broader Housatonic watershed settlement pattern.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Lavin 2013; CT State Historic Preservation Office</p>
  </div>`).addTo(L_groups.mohicanVillages);

// --- Canoe Meadows / Unkamet's Crossing (Pittsfield, MA) ---
L.circleMarker([42.45, -73.26], {radius: 5, color: MHC.mohican, fillColor: MHC.sacred, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.mohican}">⬢ Canoe Meadows / Unkamet's Crossing</h3>
    <p><b>Period:</b> Late Woodland / Contact</p>
    <p><b>Location:</b> Pittsfield, MA — along the Housatonic River</p>
    <p><b>Significance:</b> A major Mohican site along the Housatonic. The name "Canoe Meadows" reflects the importance of water travel. The broad, flat valley between Pittsfield and Great Barrington supported rich agricultural floodplains.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Brasser 1978; Dunn 1994</p>
  </div>`).addTo(L_groups.mohicanVillages);

// --- Old Indian Fordway (Great Barrington, MA) ---
L.circleMarker([42.19, -73.36], {radius: 4, color: MHC.mohican, fillColor: MHC.sacred, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.mohican}">⬢ Old Indian Fordway</h3>
    <p><b>Period:</b> Pre-contact through Contact</p>
    <p><b>Location:</b> Great Barrington, MA — Housatonic River</p>
    <p><b>Description:</b> A critical river crossing on the Housatonic, used by Mohican people and later as part of the broader trail network connecting the Hudson Valley to Long Island Sound.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Brasser 1978; Dunn 1994; Lavin 2013</p>
  </div>`).addTo(L_groups.mohicanVillages);

// ==================== GREAT FALLS & FISHERIES ====================

// --- Bellows Falls (Kchi Pôntegok) — petroglyphs & fishery ---
L.circleMarker([43.13, -72.44], {radius: 6, color: MHC.petro, fillColor: MHC.sacred, fillOpacity: 0.9, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.sacred}">◆ Bellows Falls — Kchi Pôntegok (Great Falls)</h3>
    <p><b>Type:</b> Petroglyphs + Major fishery + Sacred site</p>
    <p><b>Location:</b> Bellows Falls, VT — narrowest point of the Connecticut River</p>
    <p><b>Petroglyphs:</b> ~24 carved faces on rocks at the falls — placed where fish concentrated during spawning runs, a place of immense spiritual and practical significance.</p>
    <p><b>Fishery:</b> "The most fertile salmon habitat in the Eastern United States" before damming. Fish concentrated at the narrowest point during migrations, making it a gathering place for thousands of years.</p>
    <p><b>Fish species:</b> Salmon, shad, trout, herring, bass, lamprey — smoked, dried, and roasted at processing sites near the falls.</p>
    <p><b>Peoples:</b> Mohawk, Abenaki, and other peoples visited these falls for the annual fish runs.</p>
    <p><b>Significance:</b> A place of "spiritual importance and resource abundance" for thousands of years.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Bellows Falls Kchi Pôntegok Project; Calloway 1990; VT Division for Historic Preservation</p>
  </div>`).addTo(L_groups.mohicanSacred);

// --- Turners Falls — Great Falls fishery ---
L.circleMarker([42.60, -72.56], {radius: 6, color: MHC.fish, fillColor: MHC.sacred, fillOpacity: 0.9, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.sacred}">◆ Turners Falls — Great Falls Fishery</h3>
    <p><b>Location:</b> Turners Falls, Montague, MA</p>
    <p><b>Description:</b> One of the two Great Falls on the Connecticut River (along with Bellows Falls). A major fishing and habitation site where fish concentrated during spawning runs.</p>
    <p><b>Fishery:</b> Fish were smoked, dried, and roasted at processing sites near the falls. The falls were a gathering place for thousands of years.</p>
    <p><b>Destruction:</b> In 1798, the first dam across the Connecticut mainstem was built here — "the engineering marvel of the world" at the time. It blocked ALL salmon from reaching their last remaining spawning habitat. By the War of 1812, Atlantic salmon were completely extirpated from the Connecticut River.</p>
    <p><b>Modern impact:</b> Of 537,000 shad passing Holyoke in 2017, only 48,000 (9%) made it past Turners Falls.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> CT River salmon restoration records; Chilton et al. 2005</p>
  </div>`).addTo(L_groups.mohicanSacred);

// --- Croton Point / Navish Shell Midden ---
L.circleMarker([41.19, -73.89], {radius: 6, color: MHC.shell, fillColor: MHC.oyster, fillOpacity: 0.9, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.oyster}">🦪 Croton Point / Navish Shell Midden</h3>
    <p><b>Date:</b> 7,000+ years of continuous occupation</p>
    <p><b>Location:</b> Croton Point, Westchester County, NY</p>
    <p><b>Significance:</b> The <b>largest oyster shell midden on the North Atlantic coast</b>. Evidence spans from the Late Archaic through Contact period.</p>
    <p><b>Oyster abundance:</b> With stabilized sea levels (~6,000 BP), massive oyster beds formed in the mesohaline Hudson. Research shows oysters thrived in two major periods: ~5,600–6,100 BP and ~500–2,400 BP, linked to warm climate cycles.</p>
    <p><b>Context:</b> Fossil oyster beds still cover 30% of the Hudson's mesohaline river floor — ghostly remnants of the abundance that sustained thousands of years of habitation.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Claassen 1995; Funk 1976; Scenic Hudson; Hudson River estuary oyster studies</p>
  </div>`).addTo(L_groups.mohicanSacred);

// ==================== PETROGLYPHS & SACRED SITES ====================

// --- Brattleboro Petroglyphs (SUBMERGED 1909) ---
L.circleMarker([42.85, -72.56], {radius: 5, color: MHC.lost, fillColor: MHC.petro, fillOpacity: 0.9, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.lost}">◆ Brattleboro Petroglyphs (SUBMERGED)</h3>
    <p><b>Location:</b> Confluence of West River and Connecticut River, Brattleboro, VT (Wnatstique — Abenaki name)</p>
    <p><b>Carvings:</b> 9 petroglyphs on a rock ledge: 5 thunderbirds, a human figure, a dog/wolf, and 2 serpent/eel figures.</p>
    <p><b>Cultural significance:</b> Wnatstique was a place where "people returned to be buried with their ancestors" (Abenaki).</p>
    <p style="color:${MHC.lost};font-weight:bold;">LOST: In 1909, the Vernon hydroelectric dam was built downstream, and the carvings disappeared under ~15 feet of water and 2.5 feet of silt. For over a century, they were lost.</p>
    <p><b>Rediscovery:</b> In 2015, diver Annette Spaulding — who had been searching for 30 years — found a single carved face. In 2017, she located the full panel on a 12×8 foot underwater ledge. The petroglyphs are now accessible only to divers.</p>
    <p><b>Significance:</b> Represents what happened to countless sacred sites along every dammed river in this region.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> VT Division for Historic Preservation; Spaulding 2017; Calloway 1990</p>
  </div>`).addTo(L_groups.mohicanLost);

// --- Bellows Falls Petroglyphs (the visible ones) ---
L.circleMarker([43.134, -72.443], {radius: 5, color: MHC.petro, fillColor: MHC.petro, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.petro}">◆ Bellows Falls Petroglyphs</h3>
    <p><b>Date:</b> Pre-contact (exact date unknown — possibly 1,000+ years)</p>
    <p><b>Location:</b> Bellows Falls, VT — on rocks at the Great Falls</p>
    <p><b>Description:</b> ~24 carved faces placed at the narrowest point of the Connecticut River, where fish concentrated during spawning runs. The petroglyphs mark a site of immense spiritual and practical significance — connecting the physical world of abundant fish with the spiritual world.</p>
    <p><b>Status:</b> Still visible (unlike the Brattleboro petroglyphs, which were submerged).</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Kchi Pôntegok Project; VT Division for Historic Preservation; Calloway 1990</p>
  </div>`).addTo(L_groups.mohicanSacred);

// ==================== TIDAL WETLANDS (Surviving) ====================

// --- Stockport Flats ---
L.circleMarker([42.30, -73.74], {radius: 4, color: MHC.wetland, fillColor: MHC.wetland, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.wetland}">🌿 Stockport Flats — Tidal Wetland</h3>
    <p><b>Location:</b> Stockport, Columbia County, NY</p>
    <p><b>Description:</b> One of the last significant freshwater tidal wetland complexes on the Hudson. 80% of the Hudson's tidal wetlands sit above the saltwater reach — this was true in pre-contact times as it is now.</p>
    <p><b>Significance:</b> These wetlands were nurseries for fish, nesting grounds for waterfowl, and sources of reeds for mat-making and construction.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Scenic Hudson; NYSDEC Hudson River Estuary Program</p>
  </div>`).addTo(L_groups.mohicanWetlands);

// --- Tivoli Bays ---
L.circleMarker([42.05, -73.91], {radius: 4, color: MHC.wetland, fillColor: MHC.wetland, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.wetland}">🌿 Tivoli Bays — Tidal Wetland</h3>
    <p><b>Location:</b> Tivoli, Dutchess County, NY</p>
    <p><b>Description:</b> Significant freshwater tidal wetland complex. Part of the Hudson's surviving ~7,000 acres of tidal wetlands — a fraction of pre-contact extent.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Scenic Hudson; Bard College Field Station</p>
  </div>`).addTo(L_groups.mohicanWetlands);

// --- Constitution Marsh ---
L.circleMarker([41.40, -73.95], {radius: 4, color: MHC.wetland, fillColor: MHC.wetland, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.wetland}">🌿 Constitution Marsh — Tidal Wetland</h3>
    <p><b>Location:</b> Cold Spring, Putnam County, NY (Hudson Highlands)</p>
    <p><b>Description:</b> Audubon-managed tidal marsh. One of the last significant wetland complexes in the Hudson Highlands reach of the estuary.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Audubon; Scenic Hudson; NYSDEC</p>
  </div>`).addTo(L_groups.mohicanWetlands);

// --- Iona Island ---
L.circleMarker([41.30, -73.98], {radius: 4, color: MHC.wetland, fillColor: MHC.wetland, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.wetland}">🌿 Iona Island — Tidal Wetland</h3>
    <p><b>Location:</b> Bear Mountain, Rockland County, NY</p>
    <p><b>Description:</b> One of the last significant tidal wetland complexes on the Hudson — representing what survived from the vast marshes that once lined the river.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Palisades Interstate Park Commission; NYSDEC</p>
  </div>`).addTo(L_groups.mohicanWetlands);

// ==================== DAMS & DESTRUCTION ====================

const mohicanDams = [
  {
    pos: [42.60, -72.56], name: 'Turners Falls Dam (orig. 1798)',
    year: 1798, river: 'Connecticut',
    lost: 'First dam across the CT mainstem — "engineering marvel of the world." Blocked ALL salmon from reaching last spawning habitat. Atlantic salmon completely extirpated from the Connecticut River by the War of 1812.',
    src: 'CT River salmon restoration records; Bendremer & Thomas 2008'
  },
  {
    pos: [42.21, -72.61], name: 'Holyoke Dam (1869/rebuilt 1895)',
    year: 1869, river: 'Connecticut',
    lost: 'Blocked remaining migratory fish from upper reaches. Combined with Turners Falls dam, severed the 400-mile unbroken salmon corridor.',
    src: 'Holyoke Water Power Co. records; CT River Watershed Council'
  },
  {
    pos: [42.77, -72.51], name: 'Vernon Dam (1909)',
    year: 1909, river: 'Connecticut',
    lost: 'SUBMERGED the Brattleboro petroglyphs under ~15 feet of water and 2.5 feet of silt. Nine ancient carvings of thunderbirds, a human figure, a dog/wolf, and serpent/eel figures disappeared. Only rediscovered underwater in 2015–2017 by diver Annette Spaulding.',
    src: 'VT Division for Historic Preservation; Spaulding 2017'
  },
  {
    pos: [43.13, -72.44], name: 'Bellows Falls Dam',
    year: 1928, river: 'Connecticut',
    lost: 'Further fragmented the river. Shad runs that once reached Bellows Falls (200+ miles) now mostly stop at Turners Falls (123 miles).',
    src: 'Kchi Pôntegok Project; CT River Watershed Council'
  },
  {
    pos: [43.68, -72.31], name: 'Wilder Dam',
    year: 1950, river: 'Connecticut',
    lost: 'Additional fragmentation of the Connecticut River corridor.',
    src: 'USACE New England Division'
  },
  {
    pos: [41.21, -73.87], name: 'Old Croton Dam (1842) / New Croton Dam (1906)',
    year: 1842, river: 'Croton (Hudson tributary)',
    lost: 'Dammed the Croton River (flowing past the ancient Navish/Croton Point midden site) for NYC water. 1906 replacement at 297 ft was the tallest dam in the world. Original dam and surroundings submerged. Created 400-acre lake, permanently altering the ecology.',
    src: 'NYC DEP; Koeppel 2000, "Water for Gotham"'
  },
  {
    pos: [42.75, -73.69], name: 'Federal Dam at Troy',
    year: 1825, river: 'Hudson',
    lost: 'Created the modern head of tidal influence. Before the dam, tidal waters may have reached slightly further upstream.',
    src: 'USGS; NYSDEC Hudson River Estuary Program'
  }
];

mohicanDams.forEach(d => {
  L.circleMarker(d.pos, {radius: 4, color: MHC.dam, fillColor: MHC.dam, fillOpacity: 0.7, weight: 2})
    .bindPopup(`<div class="popup-content">
      <h3 style="color:${MHC.dam}">⬛ ${d.name} (${d.year})</h3>
      <p><b>River:</b> ${d.river} River</p>
      <p style="color:${MHC.lost};font-weight:bold;">LOST: ${d.lost}</p>
      <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> ${d.src}</p>
    </div>`).addTo(L_groups.mohicanDams);
});

// ==================== LOST/DESTROYED FEATURES ====================

// --- Connecticut River Salmon Run (eliminated 1798–1812) ---
L.polyline([
  [41.28, -72.34], [41.55, -72.65], [42.10, -72.62], [42.60, -72.60],
  [43.13, -72.44], [43.40, -72.35], [43.80, -72.20], [44.20, -72.05],
  [44.95, -71.50]
], {
  color: MHC.lost, weight: 3, opacity: 0.5, dashArray: '10,6'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MHC.lost}">🐟 Connecticut River Salmon Run (ELIMINATED)</h3>
  <p><b>Pre-dam condition:</b> Atlantic salmon traveled from Long Island Sound to headwaters in northern NH — 400+ miles without obstruction. "The most fertile salmon habitat in the Eastern United States."</p>
  <p><b>Destruction:</b> 1798 dam at Montague blocked all salmon. By the War of 1812, Atlantic salmon were completely extirpated.</p>
  <p><b>Failed restoration:</b> A 45-year, multi-million dollar restoration effort was abandoned in 2012 as a failure.</p>
  <p><b>Shad today:</b> Of 537,000 shad passing Holyoke in 2017, only 48,000 (9%) made it past Turners Falls.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> CT River salmon restoration records; USFWS</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanLost);

// --- Hudson Oyster Beds (fossil remnants) ---
L.polyline([
  [41.00, -73.92], [41.10, -73.93], [41.20, -73.88], [41.30, -73.95],
  [41.40, -73.97], [41.50, -73.96]
], {
  color: MHC.oyster, weight: 6, opacity: 0.4, dashArray: '4,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MHC.oyster}">🦪 Hudson Oyster Beds (Fossil Remnants)</h3>
  <p><b>Location:</b> Mesohaline (moderately salty) reaches of the Hudson estuary</p>
  <p><b>Coverage:</b> Fossil oyster beds cover 30% of the river floor in some mesohaline reaches — ghostly remnants of the abundance that sustained thousands of years of habitation.</p>
  <p><b>Peak periods:</b> Oysters thrived ~5,600–6,100 BP and ~500–2,400 BP, linked to warm climate cycles.</p>
  <p><b>Historical abundance:</b> The Croton Point/Navish midden — largest oyster shell midden on the North Atlantic coast — accumulated over 7,000+ years.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Coen & Grizzle 2007; Scenic Hudson; NYSDEC</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanLost);

// --- Extended Paleoindian Coastline (approximate) ---
L.polyline([
  [41.20, -72.50], [40.80, -72.00], [40.50, -71.50], [40.20, -71.00],
  [39.90, -70.50], [39.60, -70.00]
], {
  color: MHC.glacial, weight: 2, opacity: 0.4, dashArray: '12,6'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MHC.glacial}">🌊 Paleoindian Coastline (~12,000 BP)</h3>
  <p><b>Sea level:</b> 350–400 feet lower than today</p>
  <p><b>Coastline position:</b> 50–100 miles further east, near the continental shelf edge</p>
  <p><b>What this means:</b> New York Harbor was a river canyon. Long Island Sound was dry land (CT and Long Island connected). The Hudson continued flowing across the exposed shelf to its ancient mouth ~100 miles east of modern Manhattan.</p>
  <p><b>All coastal Paleoindian sites</b> from this period are now submerged beneath the Atlantic.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> USGS continental shelf surveys; Newman et al. 1969</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanLost);

// ==================== HARBOR HILL MORAINE (Verrazano Narrows — dry land) ====================

L.circleMarker([40.61, -74.04], {radius: 5, color: MHC.glacial, fillColor: MHC.glacial, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.glacial}">🏔️ Harbor Hill Moraine — Verrazano Narrows</h3>
    <p><b>Date:</b> ~15,000+ BP (glacial feature)</p>
    <p><b>Description:</b> A wall of glacial debris connecting Long Island to New Jersey. During the Paleoindian period, the Verrazano Narrows was dry land — a moraine dam that held back Glacial Lake Albany. The catastrophic breach of this dam released a wall of water that carved the Hudson Shelf Valley.</p>
    <p><b>Today:</b> The Verrazano-Narrows Bridge spans this former glacial dam. The breach separated Staten Island from Long Island ~6,000 BP.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Connally & Sirkin 1973; USGS glacial geology</p>
  </div>`).addTo(L_groups.mohicanArchSites);

// ==================== MOUNT PHILO (Island in Glacial Lake Vermont) ====================

L.circleMarker([44.28, -73.22], {radius: 4, color: MHC.glacial, fillColor: MHC.glacial, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MHC.glacial}">🏝️ Mount Philo — Island in Glacial Lake Vermont</h3>
    <p><b>Date:</b> ~15,000–13,100 BP</p>
    <p><b>Description:</b> During Glacial Lake Vermont, Mount Philo (968 ft) was an island rising above the lake waters. Burlington and Plattsburgh were underwater. Today it's a Vermont state park with views of Lake Champlain.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Chapman 1937; VT Geological Survey</p>
  </div>`).addTo(L_groups.mohicanArchSites);

// ==================== SOAPSTONE TRADE ROUTES ====================

// Trade route: Quinebaug/Blackstone Rivers — interior quarries to Narragansett Bay
L.polyline([
  [42.10, -71.85], [42.00, -71.75], [41.85, -71.65], [41.75, -71.55],
  [41.60, -71.45], [41.50, -71.40]
], {
  color: '#AB47BC', weight: 2, opacity: 0.6, dashArray: '6,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:#AB47BC">🛤️ Soapstone Trade Route — Quinebaug/Blackstone to Narragansett</h3>
  <p><b>Period:</b> Late Archaic (~6,000–3,000 BP)</p>
  <p><b>Description:</b> Soapstone (steatite) quarrying began in the Late Archaic. The nearest major sources were in southern Worcester County, MA. Trade routes followed rivers: the Quinebaug and Blackstone Rivers connected interior quarries to Narragansett Bay.</p>
  <p><b>Broader network:</b> The Housatonic and its tributaries served as trade corridors between the Hudson Valley and Long Island Sound. Water systems were not just resources — they were the highway network.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Lavin 2013; Ritchie 1994</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanRivers);

// Trade route: Housatonic corridor (Hudson Valley to Long Island Sound)
L.polyline([
  [42.45, -73.78], [42.35, -73.50], [42.20, -73.35], [42.00, -73.30],
  [41.70, -73.20], [41.40, -73.10], [41.20, -73.05]
], {
  color: '#AB47BC', weight: 2, opacity: 0.6, dashArray: '6,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:#AB47BC">🛤️ Housatonic Trade Corridor</h3>
  <p><b>Period:</b> Late Archaic through Contact</p>
  <p><b>Description:</b> The Housatonic and its tributaries connected the Hudson Valley to Long Island Sound. Soapstone, lithics, shell, and other goods traveled this water highway for thousands of years.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Lavin 2013; Brasser 1978</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanRivers);
