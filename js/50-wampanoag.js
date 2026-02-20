// ============================================================
// WAMPANOAG — "People of the First Light"
// Southeastern Massachusetts, Eastern Rhode Island, Cape Cod,
// Martha's Vineyard (Noepe), Nantucket (Natocket)
// ============================================================
// ARCHAEOLOGICAL CHRONOLOGY (Southeastern New England):
//   ~12,000 BP: Paleoindian — post-glacial caribou hunters
//     - Bull Brook (Ipswich), Wapanucket No. 8 (Middleboro)
//     - Cape Cod still forming; Martha's Vineyard not yet an island
//     - Earliest settlements now submerged beneath Atlantic
//   ~10,000–8,000 BP: Early Archaic — mobile bands, exotic stone tools
//     - Titicut site (Middleboro/Bridgewater) — 8,600 BP
//   ~8,000–6,000 BP: Middle Archaic — shift to local stone, upland camps
//   ~6,000–3,000 BP: Late Archaic — Wapanucket Crematory Complex
//     - LARGEST Native American crematory in North America
//     - Red ochre (red paint) ceremonial tradition, 6,000 years
//     - Links to Maritime Archaic tradition (Maine)
//   ~3,000–450 BP: Woodland Period
//     - Clay pottery (~3,000 BP), smaller arrowheads
//     - Maize cultivation (~1,000 CE), shell middens proliferate
//     - Wampanoag confederacy structure emerges
//     - Semi-sedentary: seasonal rounds, wetu (bark/reed houses)
//   Contact Period:
//     - 1524: Verrazano contacts Wampanoag at Narragansett Bay
//     - 1605: Champlain maps Nauset harbor (Cape Cod)
//     - 1614: Thomas Hunt kidnaps Wampanoag, sells in Spain
//     - 1616–1619: Leptospirosis epidemic — 90% mortality mainland
//     - 1620: Pilgrims arrive at Patuxet (Plymouth)
//     - 1675–1676: King Philip's War (Metacomet's Rebellion)
//
// TERRITORY: 67 villages, 12,000–40,000+ people at contact
//   From Wessagusset (Weymouth) south through Cape Cod,
//   Martha's Vineyard, Nantucket, to Pokanoket (Bristol/Warren, RI)
//
// LANGUAGE: Wôpanâak (Massachusett), Southern New England Algonquian
//   Reclamation project begun 1993 by Jessie Little Doe Baird
//
// FEDERALLY RECOGNIZED TODAY:
//   Mashpee Wampanoag Tribe (Cape Cod)
//   Wampanoag Tribe of Gay Head / Aquinnah (Martha's Vineyard)
//
// Sources: Bradley & Boudreau (MAS Bulletin), Robbins 1980 (Wapanucket),
//   Bragdon 1996 (Native Peoples of Southern New England), Plimoth Patuxet,
//   Herbster (PAL 2018), Lenik 2002 (Picture Rocks), Anick 2018 (AIRA 44),
//   Duranleau 2023 (EDI), MHC reconnaissance surveys, Wikipedia,
//   Wampanoag Tribe of Gay Head, Mashpee Wampanoag Tribe
// ============================================================

// Background pane for territory polygons
if (!map.getPane('wampanoagBackgroundPane')) {
  map.createPane('wampanoagBackgroundPane');
  map.getPane('wampanoagBackgroundPane').style.zIndex = 346;
}

const WMP = {
  territory:  '#8B4513',  // saddle brown — Wampanoag Nation boundary
  pokanoket:  '#CD853F',  // peru — Pokanoket (political center)
  nauset:     '#DAA520',  // goldenrod — Nauset
  mashpee:    '#D2691E',  // chocolate — Mashpee
  aquinnah:   '#BC8F8F',  // rosy brown — Aquinnah/Gay Head
  nantucket:  '#B8860B',  // dark goldenrod — Nantucket communities
  pocasset:   '#A0522D',  // sienna — Pocasset
  sakonet:    '#8FBC8F',  // dark sea green — Sakonet
  paleo:      '#4682B4',  // steel blue — Paleoindian sites
  archaic:    '#708090',  // slate gray — Archaic period
  woodland:   '#556B2F',  // dark olive green — Woodland period
  contact:    '#800000',  // maroon — Contact period
  petro:      '#FFD700',  // gold — petroglyphs
  sacred:     '#DC143C',  // crimson — sacred/burial sites
  water:      '#1E90FF',  // dodger blue — waterways
  lost:       '#B22222',  // firebrick — lost/submerged sites
  shell:      '#F5DEB3',  // wheat — shell middens
  village:    '#DEB887',  // burlewood — villages
  trail:      '#D4760A',  // dark orange — trails
  epidemic:   '#8B0000',  // dark red — epidemic devastation
  modern:     '#2E7D32'   // green — modern tribal presence
};

// ==================== WAMPANOAG NATION TERRITORY ====================

// Main territory polygon — southeastern MA + eastern RI + Cape Cod + Islands
L.polygon([
  // Northern boundary (Wessagusset/Weymouth area)
  [42.22, -70.94], [42.20, -71.00], [42.15, -71.05], [42.10, -71.10],
  // Western boundary — along Taunton River drainage
  [42.05, -71.15], [41.95, -71.20], [41.85, -71.25], [41.80, -71.30],
  // Southwest into Rhode Island (Pokanoket/Bristol/Warren)
  [41.75, -71.35], [41.70, -71.35], [41.68, -71.30], [41.65, -71.28],
  // Narragansett Bay eastern shore
  [41.60, -71.25], [41.55, -71.22], [41.50, -71.20],
  // Sakonet / Little Compton coast
  [41.48, -71.17], [41.45, -71.10], [41.50, -71.05],
  // Buzzards Bay coast
  [41.55, -70.95], [41.58, -70.85], [41.60, -70.75],
  // South coast — New Bedford / Dartmouth
  [41.58, -70.65], [41.55, -70.55],
  // Cape Cod — south shore
  [41.60, -70.45], [41.63, -70.30], [41.65, -70.15], [41.67, -70.00],
  // Cape Cod tip — Provincetown
  [41.90, -69.97], [42.05, -70.05], [42.08, -70.15],
  // Cape Cod — north shore back
  [41.95, -70.20], [41.85, -70.25], [41.80, -70.30],
  // Plymouth coast
  [41.90, -70.55], [41.95, -70.60], [42.00, -70.65],
  // North along coast to Weymouth
  [42.05, -70.70], [42.10, -70.75], [42.15, -70.80], [42.20, -70.85]
], {
  color: WMP.territory, weight: 3, fillColor: WMP.territory, fillOpacity: 0.08,
  dashArray: '8,4', pane: 'wampanoagBackgroundPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${WMP.territory}">Wampanoag Nation — "People of the First Light"</h3>
  <p><b>Language:</b> Wôpanâak (Massachusett), Southern New England Algonquian</p>
  <p><b>Territory:</b> Southeastern Massachusetts from Wessagusset (Weymouth) south through Cape Cod, the islands of Noepe (Martha's Vineyard) and Natocket (Nantucket), and southeast to Pokanoket (Bristol/Warren, Rhode Island).</p>
  <p><b>Population (pre-contact):</b> 12,000–40,000+ people in 67 self-governing villages. Each village had its own sachem (leader) and council. Sachemships were hereditary, passed through families.</p>
  <p><b>Political structure:</b> Matrilineal confederacy — women owned property, hereditary status passed through maternal line. Women elders approved selection of sachems. Powerful sonksquash (female leaders) included Weetamoo (Pocasset) and Awashonks (Sakonet).</p>
  <p><b>Economy:</b> Semi-sedentary seasonal round — winter villages along rivers, spring fishing (herring runs), summer coastal camps (shellfish, whaling), fall harvest (corn, beans, squash — the "Three Sisters"). Expert whalers — Wampanoag men later became famous harpooners in the commercial whaling era.</p>
  <p><b>Dwellings:</b> Wetus (dome-shaped houses of bent saplings covered in bark or cattail mats) — well-suited for Northeast climate. Longhouses for larger gatherings.</p>
  <p><b>Habitation:</b> 12,000+ years. Earliest settlements now submerged — the coastline was miles further out during the Ice Age. Martha's Vineyard didn't become an island until ~5,000 years ago.</p>
  <p><b>Today:</b> ~4,000–5,000 Wampanoag in New England. Two federally recognized tribes: Mashpee Wampanoag (Cape Cod, recognized 2007) and Wampanoag Tribe of Gay Head/Aquinnah (Martha's Vineyard, recognized 1987). Active communities also at Herring Pond (Plymouth), Assonet (Lakeville), Chappaquiddick, Pocasset, and Seaconke.</p>
  <p><b>Language reclamation:</b> The Wôpanâak Language Reclamation Project (1993, led by Jessie Little Doe Baird / MIT) is bringing back a language not spoken fluently for over a century.</p>
</div>`).addTo(L_groups.wampanoagTerritory);

// Martha's Vineyard (Noepe) territory
L.polygon([
  [41.45, -70.50], [41.47, -70.80], [41.40, -70.82],
  [41.33, -70.77], [41.30, -70.65], [41.32, -70.52],
  [41.38, -70.45], [41.42, -70.43]
], {
  color: WMP.aquinnah, weight: 2, fillColor: WMP.aquinnah, fillOpacity: 0.12,
  dashArray: '5,3', pane: 'wampanoagBackgroundPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${WMP.aquinnah}">Noepe (Martha's Vineyard)</h3>
  <p><b>Wampanoag name:</b> Noepe ("amid the waters" / "dry land amid the streams")</p>
  <p><b>Habitation:</b> Continuous Wampanoag occupation for at least 10,000 years. The island wasn't separated from the mainland until ~5,000 years ago — earliest settlements may lie beneath the waves.</p>
  <p><b>Communities:</b> Aquinnah (Gay Head), Chappaquiddick, Christiantown, Capawack, Nunnepoag, Nashanekammuck, and 10+ more named villages.</p>
  <p><b>Archaeology:</b> Over 350 documented sites at Aquinnah alone. A 2001 bylaw requiring archaeological review before construction has uncovered 40+ new sites — every single one Native American. Exclusively Wampanoag for 9,000+ years.</p>
  <p><b>Today:</b> Wampanoag Tribe of Gay Head (Aquinnah) — federally recognized 1987. The oldest continuous community on the island.</p>
</div>`).addTo(L_groups.wampanoagTerritory);

// Nantucket (Natocket) territory
L.polygon([
  [41.30, -69.95], [41.32, -70.10], [41.28, -70.20],
  [41.23, -70.18], [41.22, -70.05], [41.25, -69.93]
], {
  color: WMP.nantucket, weight: 2, fillColor: WMP.nantucket, fillOpacity: 0.12,
  dashArray: '5,3', pane: 'wampanoagBackgroundPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${WMP.nantucket}">Natocket (Nantucket)</h3>
  <p><b>Wampanoag name:</b> Natocket / Nantucket ("far-away land")</p>
  <p><b>Population (pre-contact):</b> ~3,000–4,000. Protected from the mainland epidemics of 1616–1619 by island isolation.</p>
  <p><b>Communities:</b> Miacomit, Polpis, Siasconsit (Sconset), Squam, Sasacackeh, Shaukimmo, Talhanio, Tetaukimmo, and more.</p>
  <p><b>Habitation:</b> Archaeological evidence of occupation for 5,000+ years. Squam Pond and Coskata are among the earliest sites.</p>
</div>`).addTo(L_groups.wampanoagTerritory);


// ==================== PALEOINDIAN & ARCHAIC ARCHAEOLOGICAL SITES ====================

// --- Wapanucket No. 8 (~10,000+ BP) ---
L.circleMarker([41.875, -70.89], {radius: 6, color: WMP.paleo, fillColor: WMP.paleo, fillOpacity: 0.9, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.paleo}">★ Wapanucket No. 8 — Paleoindian Site</h3>
    <p><b>Date:</b> ~10,000+ BP (Paleoindian period — Gainey/Butler phase)</p>
    <p><b>Location:</b> Northern shore of Lake Assawompsett, Middleboro, Massachusetts — the largest natural lake in the state.</p>
    <p><b>Discovery:</b> Found by avocational archaeologist Maurice Robbins. Systematic excavations by Massachusetts Archaeological Society 1941–1960s.</p>
    <p><b>Description:</b> Two occupation areas — Locus 8 on a sand dune crest along the proglacial lake, and a "Beach component" several hundred meters west along the lakeshore. The Paleoindians made new fluted points and resharpened tools here before moving on to replenish stone supplies (Boston basin or Bull Brook).</p>
    <p><b>Artifacts:</b> Fluted projectile points (both Early Archaic and Late Woodland), scrapers, tools made from Mt. Jasper rhyolite (quarried near Berlin, NH — 200+ miles away), Mt. Independence chert, and Colchester jasper from Vermont.</p>
    <p><b>Significance:</b> One of the earliest sites in southeastern Massachusetts. Part of a network of Paleoindian stopping points between New York and New England. The use of exotic stone from New Hampshire and Vermont reveals long-distance exchange networks.</p>
  </div>`).addTo(L_groups.wampanoagArch);

// --- Wapanucket Crematory Complex (~6,000 years) ---
L.circleMarker([41.87, -70.89], {radius: 7, color: WMP.sacred, fillColor: WMP.archaic, fillOpacity: 0.9, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.sacred}">★ Wapanucket Crematory Complex — Largest in North America</h3>
    <p><b>Date:</b> Late Archaic through Woodland — sacred use for up to 6,000 years</p>
    <p><b>Location:</b> Hundreds of acres along the shores of Lake Assawompsett, Middleboro, MA</p>
    <p><b>Discovery:</b> Excavated by Maurice Robbins (MAS) 1941–1960s. Published in 333-page report <i>Wapanucket: An Archaeological Report</i> (MAS, 1980).</p>
    <p><b>Description:</b> Dozens of dwelling sites and numerous crematory pits, ALL containing red paint (red ochre) residue. The series of crematory pits constitute the <b>largest known Native American crematory in North America</b> — the sacred burial grounds of the Wampanoag Nation.</p>
    <p><b>Red Ochre Tradition:</b> Links to the Maritime Archaic red ochre burial tradition found in Maine and the Maritimes. Both used red paint in ceremonial/funerary contexts. However, the Wampanoag at Wapanucket had freshwater/tidewater fishing tools — no evidence of deep sea fishing like the Maine Maritime Archaic.</p>
    <p><b>Continuity:</b> Wampanoag people returned to this sacred site to memorialize their ancestors as recently as 1919.</p>
    <p><b>Status:</b> Lake Assawompsett is now the water supply for Taunton and New Bedford. Artifacts at the Robbins Museum of Archaeology, Middleboro.</p>
  </div>`).addTo(L_groups.wampanoagArch);

// --- Wapanucket No. 6 (Archaic Village, ~4,300 BP) ---
L.circleMarker([41.878, -70.895], {radius: 4, color: WMP.archaic, fillColor: WMP.archaic, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.archaic}">⬢ Wapanucket No. 6 — Archaic Village</h3>
    <p><b>Date:</b> ~4,300 BP (Late Archaic)</p>
    <p><b>Location:</b> Lake Assawompsett, Middleboro, MA</p>
    <p><b>Description:</b> Archaic village site with evidence of habitation, tool production, and food processing. Published by Robbins (1959, Cohannet Chapter, MAS).</p>
    <p><b>Key find:</b> Faunal remains include a right femur and left radius of the extinct sea mink — extending the known range of this animal to Massachusetts.</p>
  </div>`).addTo(L_groups.wampanoagArch);

// --- Titicut Site (~8,600 BP) ---
L.circleMarker([41.93, -70.97], {radius: 5, color: WMP.archaic, fillColor: WMP.paleo, fillOpacity: 0.85, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.paleo}">★ Titicut — Multi-Component Site (8,600 BP – Contact)</h3>
    <p><b>Date:</b> Early Archaic (~8,600 BP) through Contact period (400 BP)</p>
    <p><b>Location:</b> Along the Taunton River, Middleboro/Bridgewater, MA</p>
    <p><b>Description:</b> One of the most significant multi-component sites in southeastern New England. Contains 241 hearths and pits, 416 post molds, 5 red paint ceremonial deposits, burial pits, and 1 rectangular lodge floor — evidence of continuous occupation for over 8,000 years.</p>
    <p><b>Warfare evidence:</b> 5 burials contained quartz arrows embedded in skeletons — evidence of raids, probably by Narragansett. The victims were young and defenseless.</p>
    <p><b>Later history:</b> Titicut became an Indian reservation, officially deeded to the Indians on June 9, 1664. A fort was built at nearby Fort Hill in 1660. Elizabeth Poole led English settlers here in 1637. By 1689, 40 adult Native inhabitants remained at Titicut.</p>
    <p><b>Significance:</b> Documents 8,000+ years of habitation at a single riverine location — from Early Archaic hunter-gatherers through the Wampanoag confederacy to the devastating Contact period.</p>
  </div>`).addTo(L_groups.wampanoagArch);

// --- Bull Brook Site (~11,000–10,500 BP) ---
L.circleMarker([42.68, -70.84], {radius: 5, color: WMP.paleo, fillColor: WMP.paleo, fillOpacity: 0.85, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.paleo}">★ Bull Brook — Paleoindian Mega-Site</h3>
    <p><b>Date:</b> ~11,000–10,500 BP</p>
    <p><b>Location:</b> Ipswich, Massachusetts (north of Wampanoag territory but part of the regional Paleoindian network)</p>
    <p><b>Description:</b> One of the oldest archaeological sites in eastern North America and one of the largest Paleoindian settlements on the continent. Contains 40+ circular "hot spots" of activity arranged in a semi-circle — possibly representing individual family camps around a communal area.</p>
    <p><b>Culture:</b> Transitory hunting camp frequented by small bands pursuing caribou herds across the post-glacial landscape.</p>
    <p><b>Significance:</b> Demonstrates the scale of early human occupation in New England. Part of a network connecting to Wapanucket, Turners Falls, and the Wamsutta site.</p>
  </div>`).addTo(L_groups.wampanoagArch);

// --- Wamsutta Site (~12,000 BP) ---
L.circleMarker([42.18, -71.08], {radius: 4, color: WMP.paleo, fillColor: WMP.paleo, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.paleo}">⬢ Wamsutta Site — Early Paleoindian</h3>
    <p><b>Date:</b> ~12,000 BP</p>
    <p><b>Location:</b> Near the Neponset River, Norfolk County, MA (site of ancient Lake Neponset)</p>
    <p><b>Artifacts:</b> Tools made from Mt. Jasper flow-banded rhyolite (quarried near Berlin, NH) — same exotic stone found at Wapanucket No. 8. Also Mt. Independence chert and Colchester Jasper from Vermont.</p>
    <p><b>Landscape:</b> Occupied when proglacial Lake Neponset still existed. As the lake receded and sea level rose, the coastline took on its present contour. Visitors then traveled the Neponset River from Dorchester Bay, discovering nearby sites along the way.</p>
  </div>`).addTo(L_groups.wampanoagArch);

// --- Aquinnah Archaeological District (10,000+ years) ---
L.circleMarker([41.35, -70.83], {radius: 6, color: WMP.aquinnah, fillColor: WMP.archaic, fillOpacity: 0.8, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.aquinnah}">★ Aquinnah Archaeological District — 10,000 Years</h3>
    <p><b>Date:</b> ~10,000 BP through present — continuous Wampanoag occupation</p>
    <p><b>Location:</b> Aquinnah (Gay Head), western Martha's Vineyard</p>
    <p><b>Discovery:</b> 350+ archaeological sites documented over the past century. Since a 2001 bylaw requiring archaeological review before construction, 40+ new sites discovered — <b>every single one is a Native American site</b>.</p>
    <p><b>Key finds:</b> Early Archaic stone tools (10,000–7,500 BP); shell middens preserving bones in the island's acidic soil; Late Archaic artifacts; Woodland-period pottery, smaller arrowheads, evidence of maize cultivation; trade goods (beads, copper) from the Contact era; whaling-era imported materials from around the world; and the footprint of an ancient wetu (traditional Wampanoag dwelling).</p>
    <p><b>Why unique:</b> Non-native people didn't begin living at Gay Head until the early 20th century. The prehistorical record is exclusively Wampanoag for over 9,000 years. Limited plowing means unusually well-preserved stratigraphy.</p>
    <p><b>Lost coastline:</b> The earliest Wampanoag settlements are likely submerged beneath the Atlantic. Martha's Vineyard wasn't an island until ~5,000 BP — the shoreline was miles further out.</p>
    <p><b>Protection:</b> Sacred and ceremonial sites (especially burial grounds) are strictly hands-off. Archaeologists stop immediately and contact the tribe.</p>
    <p style="font-size:10px;color:#888"><b>Sources:</b> Holly Herbster, Public Archaeology Laboratory (2018); Vineyard Gazette</p>
  </div>`).addTo(L_groups.wampanoagArch);

// --- Indian Neck Ossuary, Wellfleet (excavated 1979) ---
L.circleMarker([41.93, -70.03], {radius: 4, color: WMP.sacred, fillColor: WMP.sacred, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.sacred}">⬢ Indian Neck Ossuary</h3>
    <p><b>Date:</b> Late Woodland period</p>
    <p><b>Location:</b> Indian Neck peninsula, Wellfleet Harbor, outer Cape Cod (within Cape Cod National Seashore)</p>
    <p><b>Discovery:</b> September 1979 — discovered during NPS archaeological survey when backhoe excavation cut into a shell midden, exposing human bones. NPS archaeologist Francis McManamon directed excavation.</p>
    <p><b>Description:</b> Ossuary (communal burial) with human remains beneath a shell midden layer. Wampanoag and Mashpee tribal representatives observed the excavation, including John Peters (Slow Turtle), Massachusetts Commissioner of Indian Affairs.</p>
    <p><b>Context:</b> Part of the broader Cape Cod National Seashore archaeological survey documenting centuries of Native American habitation along outer Cape Cod.</p>
  </div>`).addTo(L_groups.wampanoagArch);

// --- Pleasant Bay / Nauset Estuary (4,000+ years) ---
L.circleMarker([41.72, -69.97], {radius: 5, color: WMP.woodland, fillColor: WMP.shell, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.woodland}">⬢ Pleasant Bay / Nauset Estuary Sites</h3>
    <p><b>Date:</b> Multiple occupations spanning 4,000+ years</p>
    <p><b>Location:</b> Head of Pleasant Bay, Orleans, Cape Cod</p>
    <p><b>Description:</b> Shell middens, wigwam sites, and burials demonstrating continuous use of the estuary for at least 4,000 years. Champlain's 1605 map depicts a sedentary Nauset village of wetus and planting fields surrounding the harbor.</p>
    <p><b>Artifacts:</b> Stone tools made from local beach cobbles — rhyolite, quartz, quartzite. At least one large rhyolite boulder in the area was quarried by Native People for toolstone. The 17th–18th century wigwam sites relate to individual Wampanoag family homesteads.</p>
    <p><b>Shell middens:</b> Highly visible accumulations of marine shells, fish and mammal bones, and domestic refuse. Significant resources for understanding settlement patterns, diet, and culture history. Many have been disturbed by amateur diggers.</p>
  </div>`).addTo(L_groups.wampanoagArch);

// --- Stony Brook Watershed, Brewster (9,000 years) ---
L.circleMarker([41.77, -70.08], {radius: 4, color: WMP.archaic, fillColor: WMP.archaic, fillOpacity: 0.75, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.archaic}">⬢ Stony Brook Watershed Sites</h3>
    <p><b>Date:</b> Settlements dating back 9,000 years</p>
    <p><b>Location:</b> Stony Brook watershed, Brewster, Cape Cod</p>
    <p><b>Description:</b> The Cape Cod Museum of Natural History has studied archaeological sites in the Stony Brook area since 1987, investigating how Native Peoples adapted to the diverse and constantly changing landscape.</p>
    <p><b>Landscape:</b> After the last Ice Age (~24,000 years ago), meltwater carried rock, gravel, and sand forming Cape Cod. Huge chunks of ice created kettle ponds. Melting ice raised sea levels, creating saltwater bays and estuaries — "one Cape, many waters."</p>
  </div>`).addTo(L_groups.wampanoagArch);

// --- Nantucket Early Sites (5,000+ BP) ---
L.circleMarker([41.27, -70.07], {radius: 4, color: WMP.archaic, fillColor: WMP.archaic, fillOpacity: 0.75, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.archaic}">⬢ Nantucket Early Sites (Squam Pond / Coskata)</h3>
    <p><b>Date:</b> Early Archaic through Contact — 5,000+ years</p>
    <p><b>Location:</b> Squam Pond and Coskata regions, Nantucket</p>
    <p><b>Description:</b> Among the earliest archaeological sites on Nantucket. Four Early Archaic sites established in the Squam Pond and Coskata areas. Shell middens document long-term use of marine resources.</p>
  </div>`).addTo(L_groups.wampanoagArch);


// ==================== CONTACT-PERIOD VILLAGES ====================

// --- Pokanoket / Sowams (Massasoit's seat — Warren/Bristol, RI) ---
L.circleMarker([41.73, -71.28], {radius: 6, color: WMP.pokanoket, fillColor: WMP.pokanoket, fillOpacity: 0.9, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.pokanoket}">★ Pokanoket / Sowams — Seat of Massasoit</h3>
    <p><b>Location:</b> Warren and Bristol, Rhode Island (Mount Hope peninsula)</p>
    <p><b>Sachem:</b> Massasoit (Ousemequin, "Yellow Feather") — Great Sachem of the Wampanoag Confederacy until 1661. Succeeded by Wamsutta (d. 1662) then Metacomet (Philip).</p>
    <p><b>Description:</b> The political center of the Wampanoag Nation. Mount Hope (Montaup) on Narragansett Bay was the seat from which Metacomet launched King Philip's War in 1675. The Pokanoket territory extended from the Pawtuxet River boundary with the Narragansett to the northeast.</p>
    <p><b>Historical significance:</b> Massasoit made a peace treaty with the Pilgrims in 1621 which he honored until his death. In 1632, Narragansett attacked Sowams but were driven back with colonial help. After Massasoit's death, relations deteriorated — leading to the most devastating war in New England history.</p>
    <p style="color:${WMP.epidemic}"><b>King Philip's War (1675–76):</b> Metacomet commanded 1,000+ warriors from virtually every tribe in New England. The English burned every Wampanoag village en route to Mount Hope. Only 400 Wampanoag survived.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Patuxet (Plymouth) ---
L.circleMarker([41.96, -70.66], {radius: 5, color: WMP.contact, fillColor: WMP.village, fillOpacity: 0.85, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.contact}">★ Patuxet (Plymouth)</h3>
    <p><b>Location:</b> Modern-day Plymouth, MA</p>
    <p><b>Significance:</b> Home of the Patuxet band of Wampanoag. In 1614, Thomas Hunt kidnapped 20 Patuxet men and sold them as slaves in Spain. One captive, Tisquantum (Squanto), eventually returned via England in 1619 — only to find every member of his village dead from the 1616–1619 epidemic.</p>
    <p><b>1620:</b> The Pilgrims established Plymouth Colony on the site of the abandoned Patuxet village. Champlain had mapped the harbor and village in 1605.</p>
    <p><b>First encounter:</b> Samoset, an Abenaki visitor to the Wampanoag, was the first to greet the Pilgrims. Squanto became their primary interpreter and survival instructor. The 1621 harvest feast between 53 Pilgrims and ~90 Wampanoag was later recast as "Thanksgiving."</p>
    <p style="color:${WMP.epidemic}"><b>Epidemic:</b> The entire Patuxet community was wiped out between 1616–1619. 100% mortality. Squanto was the last Patuxet.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Nemasket (Middleboro) ---
L.circleMarker([41.89, -70.91], {radius: 5, color: WMP.village, fillColor: WMP.village, fillOpacity: 0.85, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.village}">⬢ Nemasket — "The Fishing Place"</h3>
    <p><b>Location:</b> Middleboro, MA (along the Nemasket River)</p>
    <p><b>Sachem:</b> Corbitant at time of contact</p>
    <p><b>Description:</b> Critical crossroads village at the midpoint between Pokanoket (Warren/Bristol RI) to the west and Patuxet (Plymouth) to the east. English emissaries to Massasoit would travel halfway in one day, overnight at Nemasket, and complete the journey the next day.</p>
    <p><b>Trail network:</b> Native trails radiated in all directions — to Mattapuyst (Swansea), Pokanoket, Pawtuxet (Plymouth), Weweantic/Agawam (Wareham), and Acushnet (New Bedford). Many of these trails became Colonial roads (Routes 44, 105, etc.).</p>
    <p><b>Later history:</b> Sachem Tispaquin moved the Muttock (Barden Hill) community to Betty's Neck at Assawompsett Pond by mid-17th century as colonial pressure increased. A fort was built at Fort Hill in 1660. Three "Praying Indian" churches established here.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Nauset (Orleans/Eastham area) ---
L.circleMarker([41.80, -69.98], {radius: 5, color: WMP.nauset, fillColor: WMP.nauset, fillOpacity: 0.85, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.nauset}">⬢ Nauset — Cape Cod Eastern Shore</h3>
    <p><b>Location:</b> From Orleans and Eastham to Truro and Provincetown, Cape Cod</p>
    <p><b>Sachem:</b> Aspinet — possibly ranked second in regional power to Massasoit</p>
    <p><b>Population (pre-epidemic):</b> ~1,200 (reduced to ~500 by 1621)</p>
    <p><b>Description:</b> Sedentary community with wetus and planting fields surrounding the harbor, as depicted on Champlain's 1605 map. Shellfish consumption enabled year-round coastal settlement. The Nauset controlled the outer Cape from the eastern shore of Pleasant Bay to Provincetown.</p>
    <p><b>History:</b> In 1606, Champlain had an encounter with the Nauset. In 1614, Hunt kidnapped 7 Nauset. Despite initial hostility toward the Pilgrims in 1620 (the "First Encounter"), they soon became allies and even assisted against Philip in 1675–76. Most had been Christianized before King Philip's War.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Cummaquid (Barnstable) ---
L.circleMarker([41.70, -70.30], {radius: 4, color: WMP.village, fillColor: WMP.village, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.village}">⬢ Cummaquid</h3>
    <p><b>Location:</b> Modern Barnstable, Cape Cod</p>
    <p><b>Sachem:</b> Iyanough — known to the Pilgrims as a friendly leader</p>
    <p><b>Description:</b> Mid-Cape community with access to both bay and ocean resources.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Mashpee ---
L.circleMarker([41.65, -70.48], {radius: 5, color: WMP.mashpee, fillColor: WMP.mashpee, fillOpacity: 0.85, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.mashpee}">★ Mashpee — Heart of the Wampanoag</h3>
    <p><b>Location:</b> Mashpee, Cape Cod, MA</p>
    <p><b>Description:</b> Today home to the largest concentration of Wampanoag people. The Mashpee Wampanoag Tribe was federally recognized in 2007 after decades of legal battles. A December 2021 Interior Department ruling gave the tribe "substantial control" over 320 acres on Cape Cod.</p>
    <p><b>Mashpee Rebellion (1833):</b> Tribal members resisted state interference and attempts to sell communal lands — an early assertion of sovereignty.</p>
    <p><b>Today:</b> Home to the Mashpee Wampanoag Museum — the only museum in existence devoted exclusively to Wampanoag history. The tribe operates government offices, cultural programs, and the Wôpanâak Language Reclamation Project.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Pocasset (Tiverton, RI) ---
L.circleMarker([41.60, -71.16], {radius: 4, color: WMP.pocasset, fillColor: WMP.pocasset, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.pocasset}">⬢ Pocasset — Weetamoo's Community</h3>
    <p><b>Location:</b> Tiverton, Rhode Island area</p>
    <p><b>Sachem:</b> Weetamoo — one of the most powerful sonksquash (female leaders). She commanded warriors and was a fierce advocate for Wampanoag sovereignty during King Philip's War.</p>
    <p><b>Description:</b> Important southeastern Wampanoag community controlling lands around Mount Hope Bay.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Sakonet (Little Compton, RI) ---
L.circleMarker([41.52, -71.10], {radius: 4, color: WMP.sakonet, fillColor: WMP.sakonet, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.sakonet}">⬢ Sakonet — Awashonks' Community</h3>
    <p><b>Location:</b> Little Compton, Rhode Island</p>
    <p><b>Sachem:</b> Awashonks — another powerful sonksquash. Initially maintained neutrality during King Philip's War before joining Metacomet.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Agawam (Wareham) ---
L.circleMarker([41.76, -70.72], {radius: 3, color: WMP.village, fillColor: WMP.village, fillOpacity: 0.75, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.village}">⬢ Agawam</h3>
    <p><b>Location:</b> Wareham, MA (head of Buzzards Bay)</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Acushnet (New Bedford area) ---
L.circleMarker([41.68, -70.90], {radius: 3, color: WMP.village, fillColor: WMP.village, fillOpacity: 0.75, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.village}">⬢ Acushnet / Nukkehkummeess</h3>
    <p><b>Location:</b> New Bedford / Acushnet, MA</p>
    <p><b>Description:</b> Coastal community with access to Buzzards Bay resources. Part of the Wampanoag "Praying town" network before 1675. Contact-period population concentration along the Acushnet River.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Cohannet (Taunton) ---
L.circleMarker([41.90, -71.09], {radius: 3, color: WMP.village, fillColor: WMP.village, fillOpacity: 0.75, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.village}">⬢ Cohannet</h3>
    <p><b>Location:</b> Near Fowling Pond, Taunton, MA</p>
    <p><b>Description:</b> Inland community along the Taunton River drainage.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Mattapoiset ---
L.circleMarker([41.66, -70.81], {radius: 3, color: WMP.village, fillColor: WMP.village, fillOpacity: 0.75, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.village}">⬢ Mattapoiset</h3>
    <p><b>Location:</b> Mattapoisett, Plymouth County, MA</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Manomet ---
L.circleMarker([41.88, -70.59], {radius: 3, color: WMP.village, fillColor: WMP.village, fillOpacity: 0.75, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.village}">⬢ Manomet</h3>
    <p><b>Location:</b> Near Monument Pond, Plymouth County, MA</p>
    <p><b>Description:</b> Wampanoag "Praying town" before 1675. Also known as part of the Herring Pond Wampanoag community.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Herring Pond (Comassakumkanit) ---
L.circleMarker([41.85, -70.60], {radius: 4, color: WMP.modern, fillColor: WMP.village, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.modern}">⬢ Herring Pond (Comassakumkanit)</h3>
    <p><b>Location:</b> Plymouth County, MA</p>
    <p><b>Description:</b> One of the Wampanoag "Praying towns" before 1675. Today home to the Herring Pond Wampanoag Tribe — one of the surviving Wampanoag communities.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Assawompsett / Betty's Neck (Lakeville) ---
L.circleMarker([41.85, -70.87], {radius: 4, color: WMP.village, fillColor: WMP.village, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.village}">⬢ Assawompsett / Betty's Neck</h3>
    <p><b>Location:</b> Lake Assawompsett, Lakeville, MA</p>
    <p><b>Description:</b> Sachem Tispaquin moved his community here from Muttock (Barden Hill) by mid-17th century. A 1689 survey found 20 houses and 80 Native inhabitants at Assawompsett Pond. By the late 18th century, Betty's Neck was the last recorded Native occupation in the Middleboro area.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Assonet ---
L.circleMarker([41.78, -71.06], {radius: 3, color: WMP.village, fillColor: WMP.village, fillOpacity: 0.75, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.village}">⬢ Assonet</h3>
    <p><b>Location:</b> Near present-day Assonet, Lakeville/Freetown, MA</p>
    <p><b>Description:</b> Today home to the Assonet Band of Wampanoag. Participant in the Wôpanâak Language Reclamation Project.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Aquinnah / Gay Head Village ---
L.circleMarker([41.35, -70.84], {radius: 4, color: WMP.aquinnah, fillColor: WMP.aquinnah, fillOpacity: 0.85, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.aquinnah}">★ Aquinnah (Gay Head) — "Land Under the Hill"</h3>
    <p><b>Location:</b> Southwestern tip of Martha's Vineyard</p>
    <p><b>Description:</b> According to Wampanoag oral tradition, the benevolent being Moshup roamed this land. Dragging his foot, he created the channel that separated Noepe from the mainland. The Aquinnah Cliffs are sacred — multicolored clay cliffs overlooking the Atlantic.</p>
    <p><b>Today:</b> Headquarters of the Wampanoag Tribe of Gay Head (Aquinnah), federally recognized April 1987. The Aquinnah Cultural Center preserves tribal history and culture.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Chappaquiddick ---
L.circleMarker([41.38, -70.48], {radius: 3, color: WMP.village, fillColor: WMP.village, fillOpacity: 0.75, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.village}">⬢ Chappaquiddick</h3>
    <p><b>Location:</b> Chappaquiddick Island, Martha's Vineyard</p>
    <p><b>Description:</b> Ancestral homeland of the Chappaquiddick Wampanoag. The tribe had two reservation areas on Chappaquiddick until the late 1800s.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Monomoyick (Chatham) ---
L.circleMarker([41.68, -69.97], {radius: 3, color: WMP.village, fillColor: WMP.village, fillOpacity: 0.75, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.village}">⬢ Monomoit (Chatham)</h3>
    <p><b>Location:</b> Modern Chatham, Cape Cod</p>
    <p><b>Description:</b> The Monomoyick lived by the sea in summer and inland during winter. The area was colonized and incorporated into Plymouth Colony in 1712.</p>
  </div>`).addTo(L_groups.wampanoagVillages);

// --- Mattapuyst (Swansea) ---
L.circleMarker([41.75, -71.20], {radius: 3, color: WMP.village, fillColor: WMP.village, fillOpacity: 0.75, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.village}">⬢ Mattapuyst (Swansea)</h3>
    <p><b>Location:</b> Swansea, MA</p>
    <p><b>Description:</b> Western Wampanoag community near the Rhode Island border. Connected to Nemasket and Pokanoket by native trail network.</p>
  </div>`).addTo(L_groups.wampanoagVillages);


// ==================== PETROGLYPHS & ROCK ART ====================

// --- Dighton Rock ---
L.circleMarker([41.82, -71.12], {radius: 7, color: WMP.petro, fillColor: WMP.petro, fillOpacity: 0.9, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.petro}">★ Dighton Rock — New England's Most Famous Petroglyph</h3>
    <p><b>Date:</b> Multiple periods — some petroglyphs may be thousands of years old; others from Contact era</p>
    <p><b>Location:</b> Eastern shore of the Taunton River, Berkley, MA (formerly part of Dighton). Now in Dighton Rock Museum, Dighton Rock State Park.</p>
    <p><b>Description:</b> A 40-ton glacial erratic of grey-brown crystalline sandstone — 11 ft long, 5 ft high, 9.5 ft wide. One face is covered in petroglyphs that have inspired 1,000+ books and articles and 35+ competing theories since first documented in 1680.</p>
    <p><b>The carvings:</b> Round-headed anthropomorphs, animal tracks (turkey, etc.), footprints, geometric designs (triangles, diamonds, X shapes), snaking lines, and possible narrative scenes. Some motifs are consistent with Northeastern Algonquian rock art traditions.</p>
    <p><b>Attribution debate:</b> Rev. John Danforth (1680) believed Wampanoag origin — reported oral tradition of a "wooden house" arriving by river and battle with newcomers. Carl Christian Rafn (1837) proposed Norse (discredited). Edmund Delabarre (1920s) proposed Portuguese explorer Miguel Corte-Real. George Washington agreed with Danforth's Native American attribution. Most modern scholars attribute the core petroglyphs to Algonquian (Wampanoag/Narragansett) peoples.</p>
    <p><b>History:</b> Sat in the Taunton River for millennia — visible at low tide, nearly submerged at high tide. Moved to shore museum in 1963 to protect it.</p>
  </div>`).addTo(L_groups.wampanoagPetro);

// --- Assawompset Pond Petroglyphs (Betty's Neck, Lakeville) ---
L.circleMarker([41.85, -70.88], {radius: 5, color: WMP.petro, fillColor: WMP.petro, fillOpacity: 0.85, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.petro}">◆ Assawompset Pond Petroglyphs — Betty's Neck</h3>
    <p><b>Date:</b> Possibly Woodland period (1000 BCE – 1000 CE)</p>
    <p><b>Location:</b> Betty's Neck, a peninsula extending into the south side of Assawompset Pond, Lakeville, MA</p>
    <p><b>Description:</b> Multiple rocks and boulders with pecked carvings near the pond. Two rocks with multiple inscriptions include a pecked footprint, a teepee/wetu shape, and a handprint. Per Edward J. Lenik (MAS Bulletin, 2016), one is a "pecked left-hand-oriented vertically on the rock."</p>
    <p><b>Significance:</b> Handprints and footprints are common Native American rock art motifs across North America. These lie along the major water route from Narragansett Bay to Assawompset Pond — a critical Wampanoag thoroughfare from the Ice Age through Contact.</p>
  </div>`).addTo(L_groups.wampanoagPetro);

// --- Hand Rock (Middleboro) ---
L.circleMarker([41.90, -70.92], {radius: 5, color: WMP.petro, fillColor: WMP.petro, fillOpacity: 0.85, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.petro}">◆ Hand Rock — Middleboro</h3>
    <p><b>Date:</b> Contact period (associated with King Philip's War legend)</p>
    <p><b>Location:</b> Middleboro, MA (private property)</p>
    <p><b>Description:</b> The best-known of several life-sized hand petroglyphs in the Middleboro area. A pecked handprint on a boulder. According to local legend, during King Philip's War, an English soldier at a nearby garrison (Nemasket River) shot a Wampanoag warrior taunting from this rock — the handprint was left as the dying man's hand struck the stone.</p>
    <p><b>Context:</b> Part of a cluster of hand petroglyphs in the Old Colony region. Nehemiah Bennett described it in 1793: "a rock on a high hill a little to the eastward of the old stone fishing weir, where there is the print of a person's hand." The carving may have been "enhanced" in the 1930s.</p>
    <p style="font-size:10px;color:#888"><b>Sources:</b> Lenik 2016, MAS Bulletin 77(1); Anick 2018, AIRA Vol. 45; Mass. Historical Collections Vol. 3, 1810</p>
  </div>`).addTo(L_groups.wampanoagPetro);

// --- Chestnut Street Petroglyphs (Middleboro) ---
L.circleMarker([41.895, -70.905], {radius: 4, color: WMP.petro, fillColor: WMP.petro, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.petro}">◆ Chestnut Street Hand Petroglyphs</h3>
    <p><b>Location:</b> Chestnut Street, Middleboro, MA</p>
    <p><b>Description:</b> A pair of hand petroglyphs on a rock outcropping. Part of the cluster of hand carvings in the Middleboro/Old Colony region. Possibly marking territory or left as a spiritual imprint.</p>
  </div>`).addTo(L_groups.wampanoagPetro);

// --- Great Rock Petroglyphs (Middleboro) ---
L.circleMarker([41.91, -70.93], {radius: 4, color: WMP.petro, fillColor: WMP.petro, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.petro}">◆ Great Rock — Up to 5 Hand Petroglyphs</h3>
    <p><b>Location:</b> Near Middleboro, MA</p>
    <p><b>Description:</b> Researchers have discovered as many as 5 hand petroglyphs on Great Rock. This is the densest concentration of hand carvings in the Middleboro cluster. 3D models of all the Middleboro hands have been produced.</p>
    <p style="font-size:10px;color:#888"><b>Sources:</b> Anick 2018, "Shamans, Sachems, or Selfies: The Carved Hands of Southeastern New England," AIRA Vol. 45</p>
  </div>`).addTo(L_groups.wampanoagPetro);

// --- Mark Rock (Warwick, RI) ---
L.circleMarker([41.72, -71.40], {radius: 4, color: WMP.petro, fillColor: WMP.petro, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.petro}">◆ Mark Rock (Warwick, RI)</h3>
    <p><b>Location:</b> Warwick, Rhode Island — along the Narragansett Bay to Assawompset Pond water route</p>
    <p><b>Description:</b> Petroglyph site along the major Native American water route from Narragansett Bay northward. Contains carvings including a possible post-Contact "flower" motif (likely Indian, possibly influenced by European floral bead/embroidery styles). Also historic names, dates, and initials — demonstrating use of the rock well into historic times. A pecked profile of a man's head in a hat smoking a pipe appears to be a later addition.</p>
    <p style="font-size:10px;color:#888"><b>Sources:</b> Anick 2018, AIRA Vol. 44; Lenik 2002, <i>Picture Rocks</i></p>
  </div>`).addTo(L_groups.wampanoagPetro);

// --- Profile Rock / Massasoit Profile Rock ---
L.circleMarker([41.74, -71.02], {radius: 4, color: WMP.sacred, fillColor: WMP.sacred, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.sacred}">⬢ Profile Rock (Massasoit Profile Rock)</h3>
    <p><b>Location:</b> Near Freetown State Forest, Freetown, MA</p>
    <p><b>Description:</b> A striking 50-foot granite outcropping that cast a natural profile resembling Wampanoag sachem Massasoit. Also called "Old Man of Joshua's Mountain." The rock formation has since collapsed due to natural erosion. Sacred site associated with Wampanoag spiritual tradition.</p>
  </div>`).addTo(L_groups.wampanoagSacred);


// ==================== SACRED SITES & HISTORICAL EVENTS ====================

// --- Mount Hope (King Philip's War) ---
L.circleMarker([41.68, -71.22], {radius: 6, color: WMP.epidemic, fillColor: WMP.sacred, fillOpacity: 0.9, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.epidemic}">★ Mount Hope (Montaup) — King Philip's War</h3>
    <p><b>Location:</b> Bristol, Rhode Island (on Mount Hope Bay / Narragansett Bay)</p>
    <p><b>Description:</b> The "Seat of Metacomet" — political center of the Wampanoag under Metacomet (Philip), the last great sachem. From here, Metacomet launched King Philip's War in 1675.</p>
    <p><b>King Philip's War (1675–1676):</b> The first major intertribal war of Native resistance to English settlement in North America. Metacomet united warriors from virtually every tribe in New England — over 1,000 fighters. Even the "Praying Indians" largely defected. Those who didn't were sent to "plantations of confinement" on Boston Harbor islands.</p>
    <p style="color:${WMP.epidemic}"><b>Devastation:</b> The English burned every Wampanoag village from Plymouth to Mount Hope. By the war's end, the Wampanoag had been reduced from 12,000+ to just 400 survivors. Metacomet was killed August 12, 1676 near Mount Hope by a Pocasset Indian allied with the English. His head was displayed on a pike at Plymouth for 25 years.</p>
    <p><b>Legacy:</b> The deadliest war per capita in American history. 5% of New England's colonial population and 40–60% of the Native population killed.</p>
  </div>`).addTo(L_groups.wampanoagSacred);

// --- Anawan Rock ---
L.circleMarker([41.80, -71.07], {radius: 4, color: WMP.sacred, fillColor: WMP.sacred, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.sacred}">⬢ Anawan Rock — End of King Philip's War</h3>
    <p><b>Location:</b> Rehoboth, MA (now a public historic site)</p>
    <p><b>Description:</b> On August 28, 1676, Captain Benjamin Church discovered war chief Anawan's camp here. Church lowered himself down the rock face and surprised the Wampanoag leader and his people — a hungry band of women, children, and warriors. Anawan's capture effectively ended King Philip's War in southern New England.</p>
  </div>`).addTo(L_groups.wampanoagSacred);

// --- Plimoth Patuxet Museums (living history) ---
L.circleMarker([41.95, -70.62], {radius: 4, color: WMP.modern, fillColor: WMP.modern, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.modern}">★ Plimoth Patuxet Museums</h3>
    <p><b>Location:</b> Plymouth, MA</p>
    <p><b>Description:</b> Living history museum with a Wampanoag Homesite staffed by Native people (not actors in costume). Features traditional wetus, a mishoon (dugout canoe), cooking demonstrations, and a garden with Three Sisters crops. Also includes a 17th-century English Village recreation.</p>
    <p><b>Significance:</b> One of the most important sites for public understanding of Wampanoag culture. Native staff are modern museum professionals who share their history and culture in their own words.</p>
  </div>`).addTo(L_groups.wampanoagSacred);


// ==================== WATER ROUTES & TRAILS ====================

// Narragansett Bay to Assawompset Pond — major Native water/trail route
L.polyline([
  [41.50, -71.20], // Narragansett Bay mouth
  [41.60, -71.15], // up bay
  [41.70, -71.10], // Taunton River mouth
  [41.82, -71.10], // up Taunton
  [41.85, -70.95], // toward Assawompsett
  [41.87, -70.89]  // Assawompsett Pond
], {color: WMP.trail, weight: 3, dashArray: '8,5', opacity: 0.7})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.trail}">Native Water Route: Narragansett Bay → Assawompset Pond</h3>
    <p>Major Wampanoag thoroughfare from the coast deep into the interior. Used from the Ice Age through Contact. The petroglyph sites (Dighton Rock, Mark Rock, Assawompset Pond, Middleboro hands) all follow this corridor — likely marking the route or sacred stopping points.</p>
  </div>`).addTo(L_groups.wampanoagTrails);

// Nemasket trail hub radiating outward
L.polyline([
  [41.89, -70.91], // Nemasket (Middleboro)
  [41.96, -70.66]  // Patuxet (Plymouth) — Route 44 corridor
], {color: WMP.trail, weight: 2, dashArray: '6,4', opacity: 0.6})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.trail}">Native Trail: Nemasket → Patuxet (Plymouth)</h3>
    <p>Eastern trail from the crossroads village of Nemasket to the coast at Patuxet. Later became the Route 44 corridor. English emissaries traveled this route between Plymouth and Massasoit's seat at Pokanoket.</p>
  </div>`).addTo(L_groups.wampanoagTrails);

L.polyline([
  [41.89, -70.91], // Nemasket
  [41.73, -71.28]  // Pokanoket (Warren/Bristol RI)
], {color: WMP.trail, weight: 2, dashArray: '6,4', opacity: 0.6})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.trail}">Native Trail: Nemasket → Pokanoket</h3>
    <p>Western trail from the crossroads village of Nemasket to the political center at Pokanoket/Sowams (Warren/Bristol RI). The trail that English emissaries to Massasoit traveled — stopping overnight at Nemasket.</p>
  </div>`).addTo(L_groups.wampanoagTrails);

L.polyline([
  [41.89, -70.91], // Nemasket
  [41.76, -70.72]  // Agawam (Wareham)
], {color: WMP.trail, weight: 2, dashArray: '6,4', opacity: 0.6})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.trail}">Native Trail: Nemasket → Agawam (Wareham)</h3>
    <p>Southern trail from the crossroads to the Buzzards Bay coast communities.</p>
  </div>`).addTo(L_groups.wampanoagTrails);

L.polyline([
  [41.89, -70.91], // Nemasket
  [41.68, -70.90]  // Acushnet (New Bedford)
], {color: WMP.trail, weight: 2, dashArray: '6,4', opacity: 0.6})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.trail}">Native Trail: Nemasket → Acushnet (New Bedford)</h3>
    <p>Southwestern trail to the Acushnet River communities and Buzzards Bay.</p>
  </div>`).addTo(L_groups.wampanoagTrails);


// ==================== EPIDEMIC DEVASTATION MARKERS ====================

// Epidemic impact zones — 1616-1619
L.circle([41.96, -70.66], {radius: 8000, color: WMP.epidemic, fillColor: WMP.epidemic, fillOpacity: 0.06, weight: 1, dashArray: '4,4'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.epidemic}">☠ Patuxet — 100% Mortality (1616–1619)</h3>
    <p>The entire Patuxet community was killed by the leptospirosis epidemic. When Squanto returned from captivity in 1619, he found no one alive. The Pilgrims built Plymouth Colony on the site of this ghost village in 1620.</p>
  </div>`).addTo(L_groups.wampanoagEpidemic);

L.circle([41.73, -71.28], {radius: 12000, color: WMP.epidemic, fillColor: WMP.epidemic, fillOpacity: 0.04, weight: 1, dashArray: '4,4'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WMP.epidemic}">☠ Mainland Wampanoag Epidemic Zone (1616–1619)</h3>
    <p>Three epidemics between 1614 and 1620 devastated the Wampanoag and neighboring Massachusett. Mortality in many mainland villages reached up to 90–100%. The groups most devastated were those who had traded heavily with the French. At least 10 mainland villages were completely abandoned — there was no one left.</p>
    <p><b>Before:</b> ~8,000 mainland Wampanoag, ~4,000 on islands</p>
    <p><b>After (1620):</b> Fewer than 2,000 mainland survivors. Island populations (~3,000) were somewhat protected by isolation.</p>
    <p><b>Nature of the epidemic:</b> Long thought to be smallpox, a 2010 study suggests leptospirosis — introduced by rat reservoirs on European ships. A "virgin soil" epidemic — no prior immunity.</p>
  </div>`).addTo(L_groups.wampanoagEpidemic);
