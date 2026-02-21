// ============================================================
// MAINE — Petroglyphs & Rock Art of the Wabanaki Peoples
// Passamaquoddy, Penobscot, Eastern Abenaki, Mi'kmaq, Malecite
// ============================================================
// ARCHAEOLOGICAL CHRONOLOGY:
//   ~13,000 BP: Deglaciation of Maine, earliest Paleoindian presence
//   ~11,500 BP: Munsungun Lake Paleoindian sites (chert quarries)
//   ~10,000–3,000 BP: Archaic period — Maritime Archaic tradition
//     - Red Paint People (Moorehead phase) ~5,000–3,800 BP
//     - Coastal habitation, deep-sea fishing, elaborate burials
//   ~3,000 BP: Woodland period begins — pottery appears
//     - Machias Bay petroglyph tradition begins (Style 1)
//     - Passamaquoddy/Malecite group separates from Central Algonkian ~3,000 BP
//   ~3,000–2,200 BP: STYLE 1 — paired anthropomorphs, spirit lines
//     - Early Woodland (ca. 3000–2200 B.P.)
//     - Birch Point, Hog Island, Holmes Point
//   ~2,200 BP: STYLE 2 — transitional, single torso with inner body lines
//     - Found only on Hog Island
//   2,200–1,660 BP: STYLE 3 — hourglass-shaped bodies, complex inner lines
//     - Early Middle Woodland
//     - Birch Point, Holmes Point, Hog Island
//   ~1,500 BP: STYLE 4 — elaborate anthropomorphs with headdresses
//     - Hopewellian influence possible
//     - Hog Island, Holmes Point
//   1,100–600 BP: STYLE 5 — action figures, thunderbird-like, birdlike features
//     - Late Middle Woodland / early Late Woodland
//     - Shamanistic societies emerge
//     - Hog Island, Holmes Point, Birch Point
//   700–300 BP: STYLE 6 — angular, geometric, Christian crosses appear
//     - Late Woodland into Contact period
//     - Birch Point, Embden ledge
//   ~380 BP (ca. 1620–1630): Last petroglyphs at Machias Bay
//     - Mi'kmaq style figure at Machias Bay
//     - European sailing ships depicted (62.46, 62.47)
//   1790s: Last documented seasonal gatherings at Machias Bay
//     - 100+ canoes, drumming heard by European settlers
//   1888: Garrick Mallery (Smithsonian) visits, photographs 57 images
//   1977: Mark Hedden begins systematic recording
//   2006: Birch Point returned to Passamaquoddy Tribe by MCHT
//   2013: Long Point (66 acres) conserved by MCHT/Passamaquoddy
//
// EMBDEN PETROGLYPHS (Eastern Abenaki/Norridgewock territory):
//   Ceramic period (~1 CE – 1600 CE), 107+ designs
//   Kennebec River — major canoe highway to St. Lawrence
//   Dean Snow (1977): carved for or by a shaman
//   Figures: canoes (27), birdmen (13), game animals (5), 
//     ithyphallic figures (2), phalli (2), serpent, houses (3)
//   Gluscap (Klose-kur-beh) — Abenaki culture hero depicted
//   Partially destroyed by dynamiting for log drives pre-1900
//
// WABANAKI PEOPLES (at European contact):
//   Four languages of eastern Algonkian family:
//   - Mi'kmaq (eastern/northern Maine)
//   - Passamaquoddy/Malecite (Down East Maine, New Brunswick)
//   - Eastern Abenaki (Penobscot, Kennebec, Androscoggin rivers)
//   - Western Abenaki (Vermont, New Hampshire, western Maine)
//   Passamaquoddy/Malecite occupied coast from Kennebec River mouth
//     easterly into central New Brunswick
//
// Sources: 
//   Lenik, Edward J. (2002). Picture Rocks: American Indian Rock Art 
//     in the Northeast Woodlands. University Press of New England.
//   Hedden, Mark (2002). "Contact Period Petroglyphs in Machias Bay, Maine."
//     Archaeology of Eastern North America, Vol. 30, pp. 1-20.
//   Mallery, Garrick (1893). Picture Writing of the American Indian.
//     Smithsonian Institution.
//   Ray, Roger B. (1987). "The Embden, Maine, Petroglyphs."
//     Maine History 27(1): 14-23.
//   Snow, Dean (1976, 1977). Fieldwork and interpretation.
//   Wikipedia: Rock art of eastern Maine; Birch Point; Hodgdon Site.
//   Maine Historic Preservation Commission / National Register nominations.
// ============================================================

// Background pane for territory polygons
if (!map.getPane('maineBackgroundPane')) {
  map.createPane('maineBackgroundPane');
  map.getPane('maineBackgroundPane').style.zIndex = 345;
}

const MNE = {
  passamaquoddy: '#4A148C',  // deep purple — Passamaquoddy
  penobscot:     '#1B5E20',  // dark green — Penobscot
  abenaki:       '#BF360C',  // deep orange — Eastern Abenaki
  mikmaq:        '#0D47A1',  // dark blue — Mi'kmaq
  malecite:      '#006064',  // dark teal — Malecite
  wabanaki:      '#4E342E',  // brown — pan-Wabanaki
  petro:         '#FFD700',  // gold — petroglyphs
  picto:         '#FF6347',  // tomato — pictographs
  village:       '#DEB887',  // burlewood — villages/habitation
  water:         '#1E90FF',  // dodger blue — waterways
  sacred:        '#DC143C',  // crimson — sacred sites
  conserved:     '#2E7D32',  // green — conserved/returned lands
  ancient:       '#4682B4',  // steel blue — deep time archaeological
  style1:        '#8D6E63',  // brown — Style 1 (oldest, 3000-2200 BP)
  style23:       '#A1887F',  // light brown — Styles 2-3
  style45:       '#78909C',  // blue-grey — Styles 4-5
  style6:        '#546E7A',  // dark blue-grey — Style 6 (most recent)
  contact:       '#B71C1C',  // dark red — contact period
  lost:          '#B22222'   // firebrick — lost/damaged sites
};

// ==================== PASSAMAQUODDY TERRITORY ====================
const passamaquoddyTerrCoords = [
  [45.15, -67.0],   // St. Croix headwaters
  [45.30, -67.5],   // north of Calais
  [45.50, -67.3],   // New Brunswick border region
  [45.60, -67.0],   // into NB
  [45.40, -66.5],   // Passamaquoddy Bay
  [45.10, -66.9],   // St. Andrews area
  [44.95, -67.0],   // Eastport area
  [44.70, -67.1],   // Machias Bay north
  [44.55, -67.5],   // Down East coast
  [44.40, -67.8],   // south of Jonesport
  [44.50, -68.0],   // west toward Penobscot territory
  [44.80, -68.2],   // inland — Penobscot boundary
  [45.00, -67.8],   // Grand Lake Stream area
  [45.20, -67.3],   // back north
  [45.15, -67.0]
];

L.polygon(passamaquoddyTerrCoords, {
  color: MNE.passamaquoddy, weight: 2, opacity: 0.7,
  fillColor: MNE.passamaquoddy, fillOpacity: 0.08,
  pane: 'maineBackgroundPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MNE.passamaquoddy}">Passamaquoddy / Peskotomuhkatiyik Territory</h3>
  <p><b>People:</b> Peskotomuhkatiyik — "people who spear pollock"</p>
  <p><b>Language:</b> Eastern Algonkian — Passamaquoddy/Malecite (closely related dialects)</p>
  <p><b>Territory:</b> Coast from Machias Bay to Passamaquoddy Bay, St. Croix River valley, extending into New Brunswick</p>
  <p><b>Time depth:</b> The Passamaquoddy/Malecite language group likely separated from the Central Algonkian family about 3,000 years ago — the same period when the Machias Bay petroglyph tradition began.</p>
  <p><b>Seasonal round:</b> Coastal fishing and shellfish harvesting in summer; interior hunting in winter. Seasonal gatherings at Machias Bay for trade, marriage, and ceremony — as many as 100 canoes documented as late as the 1790s.</p>
  <p><b>Rock art:</b> Created the largest concentration of petroglyphs on the East Coast at Machias Bay — 500+ glyphs across 9 sites spanning 3,000 years.</p>
  <p><b>Modern:</b> Passamaquoddy Tribe at Pleasant Point (Sipayik) and Indian Township. 3,600+ enrolled members.</p>
  <p><b>Land return:</b> Birch Point / Picture Rocks returned to Passamaquoddy by MCHT in 2006. Long Point conserved in 2013.</p>
</div>`).addTo(L_groups.maineTerritory);

// ==================== EASTERN ABENAKI TERRITORY ====================
const easternAbenakiTerrCoords = [
  [44.50, -68.0],   // coastal boundary with Passamaquoddy
  [44.30, -68.5],   // Penobscot Bay area
  [44.10, -69.0],   // midcoast
  [43.90, -69.5],   // Kennebec mouth area
  [43.80, -70.0],   // Casco Bay
  [43.70, -70.5],   // Saco River mouth
  [44.00, -70.8],   // inland — western boundary
  [44.50, -70.5],   // Franklin County
  [45.00, -70.0],   // Somerset County
  [45.30, -69.5],   // Moosehead area
  [45.50, -69.0],   // north
  [45.30, -68.5],   // Penobscot headwaters
  [44.90, -68.3],   // Bangor area
  [44.50, -68.0]
];

L.polygon(easternAbenakiTerrCoords, {
  color: MNE.abenaki, weight: 2, opacity: 0.7,
  fillColor: MNE.abenaki, fillOpacity: 0.08,
  pane: 'maineBackgroundPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MNE.abenaki}">Eastern Abenaki Territory</h3>
  <p><b>Peoples:</b> Penobscot (Panawahpskewtəkʷ), Kennebec, Norridgewock, Androscoggin, Pigwacket, Rocameca, and others</p>
  <p><b>Language:</b> Eastern Abenaki — part of the eastern branch of the Algonkian family</p>
  <p><b>Territory:</b> Penobscot River drainage, Kennebec River, Androscoggin River, and coastal areas from Penobscot Bay to the Saco River</p>
  <p><b>Key rivers:</b> The Kennebec was a principal artery from coast to the St. Lawrence River, via Dead River and the Chaudière — a major canoe highway bearing heavy traffic for thousands of years.</p>
  <p><b>Rock art:</b> The Embden petroglyphs on the Kennebec River — 107+ designs pecked into a shale ledge at a key canoe portage stop. Themes of shamanism, fertility, canoe travel, and the culture hero Gluscap.</p>
  <p><b>Modern:</b> Penobscot Nation at Indian Island (Old Town). 2,400+ enrolled members.</p>
</div>`).addTo(L_groups.maineTerritory);

// ==================== MACHIAS BAY PETROGLYPH SITES ====================

// --- Birch Point / Clark's Point (Main Ledge) ---
L.circleMarker([44.683, -67.372], {radius: 8, color: MNE.petro, fillColor: MNE.petro, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.petro}">⬢ Birch Point / Clark's Point — Main Ledge</h3>
    <p><b>Also known as:</b> Malusah'ekan — Passamaquoddy for "Picture Rocks on the Shore"</p>
    <p><b>Location:</b> West side of Machias Bay, Machiasport, Washington County, Maine</p>
    <p><b>Date range:</b> ca. 3,000–380 B.P. (1000 BCE – ~1620 CE)</p>
    <p><b>Culture:</b> Passamaquoddy / Malecite — eastern Algonkian</p>
    <p><b>Description:</b> The main ledge at Birch Point is the principal rock art site in Machias Bay, containing at least 57 documented figures. Consists of three principal loci: the main ledge, outer ledge, and the north slope. Petroglyphs are pecked into bedrock ledges exposed by glacial erosion.</p>
    <p><b>Chronology:</b> The seaside ledges display striations of glacial scraping and grinding. Scattered boulders deposited in glacial till were dropped on bedrock as rising seas cut away gravel banks. At each site, petroglyphs are found on all but the ledges nearest present-day gravel banks — freshly exposed bedrock free of petroglyphs represents the last 250–300 years when the Passamaquoddy lost control of the area.</p>
    <p><b>Oldest glyphs:</b> Style 1 figures (paired anthropomorphs with spirit lines) lie at the far edge near the water, covered daily by tidal waters and eroding away.</p>
    <p><b>Most recent:</b> Style 6 figures including Christian crosses, indicating contact with Jesuit missionaries. One figure in "Mi'kmaq style" dated ca. 1620–1630.</p>
    <p><b>First documentation:</b> Garrick Mallery of the Smithsonian Institution visited in 1888, inspected and photographed the Birch Point area. 57 images were published in <em>Picture Writing of the American Indian</em> (1893).</p>
    <p><b>Significance:</b> Machias Bay provides the longest chronological series of petroglyphs in Maine (ca. 3,000 to 380 years ago) as well as the largest number of known sites (9) and the largest number of petroglyphs (500+).</p>
    <p><b>NRHP:</b> Listed 1997, as part of Native American Petroglyphs and Pictographs of Maine MPS</p>
    <p><b>Land return:</b> In 2006, the coastal properties containing the rock art panels were given to the Passamaquoddy Tribe by the Maine Coast Heritage Trust in exchange for conservation easements. After 400 years, the picture rocks returned to the descendants of the people who created them.</p>
    <p><b>Source:</b> Lenik 2002; Hedden 2002; Mallery 1893; NRHP</p>
  </div>`).addTo(L_groups.mainePetro);

// --- Birch Point — Outer Ledge ---
L.circleMarker([44.682, -67.369], {radius: 5, color: MNE.petro, fillColor: MNE.petro, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.petro}">⬢ Birch Point — Outer Ledge</h3>
    <p><b>Location:</b> Seaward of main ledge, Birch Point, Machiasport</p>
    <p><b>Date range:</b> Styles 5–6 (ca. 1100–300 B.P.)</p>
    <p><b>Description:</b> Style 5 and 6 petroglyphs on the outer ledge. Style 5 features action figures with triangular bodies, birdlike beaklike projections, and bent arms with featherlike digits — resembling the thunderbird motif. Style 6 shows angular, geometric figures including horned serpents and bird figures.</p>
    <p><b>Photos:</b> Shaman-like figure with animal helpers and bird figure photographed by E. J. Lenik, 1976.</p>
    <p><b>Source:</b> Lenik 2002, figs. 33–34</p>
  </div>`).addTo(L_groups.mainePetro);

// --- Holmes Point ---
L.circleMarker([44.688, -67.345], {radius: 7, color: MNE.petro, fillColor: MNE.petro, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.petro}">⬢ Holmes Point Petroglyphs</h3>
    <p><b>Location:</b> East side of Machias Bay, East Machias, Washington County</p>
    <p><b>Date range:</b> ca. 3,000–600 B.P. (Styles 1, 3–5)</p>
    <p><b>Culture:</b> Passamaquoddy / Malecite</p>
    <p><b>Description:</b> Northernmost promontory of Holmes Bay. Petroglyphs occur on bedrock outcrops along the shore. Contains examples of Style 1 paired anthropomorphs, Style 3 hourglass-shaped figures, Style 4 elaborate anthropomorphs with headdresses, and Style 5 action figures.</p>
    <p><b>Significance:</b> Together with Birch Point and Hog Island, Holmes Point forms the core of what is the greatest concentration of rock art on the East Coast of North America.</p>
    <p><b>Hedden's interpretation:</b> The petroglyphs are the work of tribal shamans, depicting the evolution of shamanistic performance and the interaction between shaman and spirit over 2,500+ years.</p>
    <p><b>NRHP:</b> Listed as part of Native American Petroglyphs and Pictographs of Maine MPS</p>
    <p><b>Source:</b> Lenik 2002; Hedden 1977–2002</p>
  </div>`).addTo(L_groups.mainePetro);

// --- Hog Island ---
L.circleMarker([44.680, -67.355], {radius: 7, color: MNE.petro, fillColor: MNE.petro, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.petro}">⬢ Hog Island Petroglyphs</h3>
    <p><b>Location:</b> Island in middle of Machias Bay, between Holmes Point and Birch Point</p>
    <p><b>Date range:</b> ca. 3,000–1,500 B.P. (Styles 1–4)</p>
    <p><b>Culture:</b> Passamaquoddy / Malecite</p>
    <p><b>Description:</b> A small island containing a concentration of glyphs along its southwest shore. Contains the ONLY known examples of Style 2 (transitional figures where a single torso displays multiple attributes as inner body lines — interpreted as an early representation of a shaman merging with or being possessed by a spirit). Also contains Style 3 hourglass figures and Style 4 elaborate anthropomorphs.</p>
    <p><b>Style 2:</b> Found exclusively here. Hedden interprets these transitional figures as depicting a shaman becoming a vessel for spiritual power — the earliest depiction of spirit possession in the Machias Bay sequence.</p>
    <p><b>Style 4:</b> Best represented here. Elongated figures with broad shoulders, narrow torsos, inner patterning, and headdresses. Smaller zoomorphic or anthropomorphic "spirit familiars" appear alongside. May represent Hopewellian influence (~1500 B.P.).</p>
    <p><b>NRHP:</b> 4 panel sites designated 62.23, 62.24, 62.25, 62.29 — all listed on National Register</p>
    <p><b>Source:</b> Lenik 2002; Hedden 1996, 2002</p>
  </div>`).addTo(L_groups.mainePetro);

// --- Long Point ---
L.circleMarker([44.695, -67.380], {radius: 6, color: MNE.conserved, fillColor: MNE.petro, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.conserved}">⬢ Long Point Petroglyphs (Conserved 2013)</h3>
    <p><b>Location:</b> Northern region of Machias Bay, southern coast of Long Point</p>
    <p><b>Date range:</b> ca. 3,000 B.P. to Contact period</p>
    <p><b>Culture:</b> Wabanaki / Passamaquoddy</p>
    <p><b>Description:</b> Petroglyphs similar to other Machias Bay sites, found on coastal ledges. Includes a shell midden indicating long-term habitation. Archaeological research by University of Maine associate professor Brian Robinson documented the site's connection to the broader cultural landscape of Machias Bay.</p>
    <p><b>Conservation:</b> In 2013, Maine Coast Heritage Trust acquired the 66-acre Long Point property to protect the petroglyphs and surrounding landscape from a proposed 26-lot subdivision. Access to petroglyphs limited to Passamaquoddy tribal and research functions.</p>
    <p><b>Donald Soctomah (Passamaquoddy Historic Preservation Officer):</b> "There is something very spiritual about the petroglyphs. They represent our people's history and stories of our culture."</p>
    <p><b>Source:</b> MCHT 2013; Robinson 2013; Lenik 2002</p>
  </div>`).addTo(L_groups.mainePetro);

// --- Offshore Island Sites (discovered 1999) ---
L.circleMarker([44.670, -67.360], {radius: 4, color: MNE.petro, fillColor: MNE.petro, fillOpacity: 0.6, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.petro}">⬢ Offshore Island Petroglyphs (Discovered 1999)</h3>
    <p><b>Location:</b> Ledges off another island in Machias Bay (exact location restricted)</p>
    <p><b>Date range:</b> Multiple periods</p>
    <p><b>Culture:</b> Passamaquoddy</p>
    <p><b>Description:</b> Two new petroglyph sites discovered in 1999, located on ledges off another island in the bay. Together they contain fifty-three glyphs. Geological and stylistic changes combine at these sites to provide a chronology of motifs and implied cultural concepts.</p>
    <p><b>Source:</b> Lenik 2002</p>
  </div>`).addTo(L_groups.mainePetro);

// --- European Ship Petroglyphs (Contact Period) ---
L.circleMarker([44.676, -67.362], {radius: 4, color: MNE.contact, fillColor: MNE.contact, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.contact}">⛵ European Ship Petroglyphs (Sites 62.46 & 62.47)</h3>
    <p><b>Location:</b> Machias Bay (exact locations restricted)</p>
    <p><b>Date range:</b> ca. 1620–1640 CE (Contact period)</p>
    <p><b>Culture:</b> Passamaquoddy, depicting European visitors</p>
    <p><b>Description:</b> Two sites include representations of small European sailing ships. Mark Hedden believes them to be consistent with ships used by Plymouth Colony traders known to have visited Machias Bay in the early 1630s.</p>
    <p><b>Significance:</b> Among the most compelling contact-period petroglyphs in the Northeast — indigenous artists documenting the arrival of European vessels in their homeland.</p>
    <p><b>Source:</b> Hedden 2002; Wikipedia</p>
  </div>`).addTo(L_groups.mainePetro);

// ==================== EMBDEN PETROGLYPHS ====================

// --- Embden / Indian Rock ---
L.circleMarker([44.870, -69.800], {radius: 8, color: MNE.petro, fillColor: '#FF8C00', fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:#FF8C00">⬢ Embden Petroglyphs / "Indian Rock"</h3>
    <p><b>Location:</b> West bank of the Kennebec River, Town of Embden, Somerset County, Maine</p>
    <p><b>Date range:</b> Ceramic period (~1 CE – 1600 CE); rock art estimated 900–1,200 years old</p>
    <p><b>Culture:</b> Eastern Abenaki (Norridgewock territory) — Kennebec River peoples</p>
    <p><b>Description:</b> A ledge of metamorphosed shale extends perpendicularly into the river, with 107+ distinct designs pecked or incised into its south-facing surface. The petroglyphs are visible within a band 8 meters (26 feet) long by 2 meters (6.6 feet) wide.</p>
    <p><b>Survey:</b> In 1977, Mark Hedden conducted an intensive survey for the Maine State Museum and identified 107 distinct designs.</p>
    <p><b>Motifs identified by Hedden:</b></p>
    <p>• 27 figures in canoes (canoe travel was central to life on the Kennebec)</p>
    <p>• 13 birdmen (arms curved like wings, some with beaklike heads — likely representing Pamola or thunderbird)</p>
    <p>• 5 game animals</p>
    <p>• 2 ithyphallic figures in profile (one identified as Gluscap by Penobscot elder Michael Sockalexis)</p>
    <p>• 2 isolated phalli with female genitalia representations (fertility/creation imagery)</p>
    <p>• 3 houses or structures, 2 H-forms, a serpent, and geometric designs</p>
    <p><b>Gluscap / Klose-kur-beh:</b> One running ithyphallic figure was identified by Michael Sockalexis, a Penobscot elder, as "Gluscap" — the great culture hero of the Abenaki people. The figure runs toward a representation of female genitalia, interpreted as representing creation.</p>
    <p><b>Canoe imagery:</b> Occupants range from 2 to 5, some with broad shoulders and tapered bodies (possibly Algonkian shamans). Long oblique lines represent poles, shorter lines are paddles. Most canoes move left to right (west to east) — from shore to water — perhaps metaphors for shamanic spirit voyages.</p>
    <p><b>Fertility and power:</b> Dean Snow (1976) proposed the sexual figures were made by shamans to express sexual prowess and power, linking sexuality, shamanism, political power, and male dominance in Abenaki society.</p>
    <p><b>Pamola:</b> Snow suggested the birdlike figures represent Pamola — a supernatural birdlike creature said to live on Mount Katahdin, described as having a huge head, four-foot beak, and wings that could cause storms.</p>
    <p><b>Landscape:</b> The Kennebec was a principal artery from coast to the St. Lawrence River. The ledge sits just downstream from rapids, where canoeists would stop to portage — a natural resting point on this major travel corridor.</p>
    <p><b>Damage:</b> Prior to 1900, a portion of the ledge extending farthest into the river was dynamited and removed to facilitate log drives. It is unknown whether petroglyphs were present on the destroyed section. Exfoliation, river ice, and log drives have visibly damaged some remaining designs.</p>
    <p><b>First documented:</b> Photographed by local resident E. W. Moore in 1894. Five drawings in a bound sketchbook survive.</p>
    <p><b>NRHP:</b> Listed on the National Register of Historic Places (as Hodgdon Site, MAS 69.4), 1980</p>
    <p><b>Access:</b> Accessible only by boat, canoe, or kayak. Located opposite the Evergreens Campground in Solon — evidence of Indian presence here dates back 5,000 years.</p>
    <p><b>Source:</b> Lenik 2002; Ray 1987; Hedden 1977; Snow 1976–1977; NRHP</p>
  </div>`).addTo(L_groups.mainePetro);

// --- Hodgdon Archaeological Site ---
L.circleMarker([44.868, -69.799], {radius: 5, color: MNE.ancient, fillColor: MNE.ancient, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.ancient}">⬢ Hodgdon Archaeological Site (MAS 69.4)</h3>
    <p><b>Location:</b> Southern side of Embden petroglyph ledge, Kennebec River</p>
    <p><b>Date range:</b> Ceramic period (~1 CE – 1600 CE)</p>
    <p><b>Culture:</b> Norridgewock (Eastern Abenaki)</p>
    <p><b>Description:</b> An interior, riverine campsite used primarily in the Ceramic period. Rich in artifacts indicating this was a popular fishing location for thousands of years.</p>
    <p><b>Connection:</b> Father Sebastien Rasles, who had his mission 14 miles downstream at Norridgewock, reportedly intended to draw on the fish supply here in 1724 to supplement a skimpy harvest. The site's importance for fishing thus spans from deep prehistory through the contact period.</p>
    <p><b>Across the river:</b> The Evergreen site on the opposite bank yielded similar artifacts but with evidence of Indian presence dating back 5,000 years.</p>
    <p><b>NRHP:</b> Listed 1980</p>
    <p><b>Source:</b> Lenik 2002; Ray 1987; NRHP</p>
  </div>`).addTo(L_groups.mainePetro);

// ==================== PICTOGRAPH SITES (Southwest Maine) ====================
// The Lenik book map (fig. 23) shows two pictograph sites in southwestern Maine

L.circleMarker([44.2, -70.4], {radius: 5, color: MNE.picto, fillColor: MNE.picto, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.picto}">🎨 Pictograph Site — Southwestern Maine</h3>
    <p><b>Location:</b> Androscoggin River / Saco River watershed area (approximate — exact location restricted)</p>
    <p><b>Type:</b> Pictograph (painted, not pecked)</p>
    <p><b>Culture:</b> Eastern Abenaki</p>
    <p><b>Description:</b> One of two pictograph sites in southwestern Maine identified on Lenik's map of rock art sites (fig. 23). These painted sites are distinct from the pecked petroglyphs of Machias Bay and Embden. Two pictograph sites in southwest Maine were first brought to attention of archaeologists in the early 1990s.</p>
    <p><b>Note:</b> Exact locations are restricted to protect site integrity per Maine Historic Preservation Commission policy.</p>
    <p><b>Source:</b> Lenik 2002, fig. 23; MHPC</p>
  </div>`).addTo(L_groups.mainePickto);

L.circleMarker([44.0, -70.6], {radius: 5, color: MNE.picto, fillColor: MNE.picto, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.picto}">🎨 Pictograph Site — Saco River Area</h3>
    <p><b>Location:</b> Near Saco River watershed, southwestern Maine (approximate — exact location restricted)</p>
    <p><b>Type:</b> Pictograph (painted)</p>
    <p><b>Culture:</b> Eastern Abenaki / Pigwacket</p>
    <p><b>Description:</b> Second pictograph site shown on Lenik's map (fig. 23). Located in the Saco River region, within the territory of the Pigwacket band of Eastern Abenaki.</p>
    <p><b>Note:</b> Exact locations restricted.</p>
    <p><b>Source:</b> Lenik 2002, fig. 23; MHPC</p>
  </div>`).addTo(L_groups.mainePickto);

// ==================== GRAND LAKE STREAM SITE ====================

L.circleMarker([45.178, -67.776], {radius: 5, color: MNE.petro, fillColor: MNE.contact, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.contact}">⬢ Grand Lake Stream Petroglyphs (Site 94.32)</h3>
    <p><b>Location:</b> Rock ledge near Grand Lake Stream village, Washington County</p>
    <p><b>Date range:</b> Historic / 19th–20th century (with possible older elements)</p>
    <p><b>Culture:</b> Passamaquoddy — continuing rock art tradition</p>
    <p><b>Description:</b> Located on a rock ledge along a historically frequented canoe route, well inland from Machias Bay. The figures were incised with metal tools, probably in the 19th century, along with pecked pictographs apparently of late 20th-century origin.</p>
    <p><b>Motifs:</b> Human figures, thunderbird motifs, a serpent or snake figure, and a deer with antlers.</p>
    <p><b>Significance:</b> Suggests that the tradition of rock art creation continues in the local Native community — a living tradition stretching across millennia.</p>
    <p><b>NRHP:</b> Listed on the National Register of Historic Places</p>
    <p><b>Source:</b> Wikipedia; NRHP</p>
  </div>`).addTo(L_groups.mainePetro);

// ==================== WATERWAYS ====================

// --- Machias River ---
L.polyline([
  [44.82, -67.53], [44.78, -67.48], [44.75, -67.45],
  [44.72, -67.42], [44.70, -67.39], [44.68, -67.37]
], {color: MNE.water, weight: 3, opacity: 0.7, dashArray: '8 4'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.water}">🌊 Machias River</h3>
    <p>The Machias River feeds Machias Bay from the north. Its mouth was the center of Passamaquoddy territory and the focus of thousands of years of rock art creation. The name "Machias" derives from the Passamaquoddy word meaning "bad little falls."</p>
  </div>`).addTo(L_groups.maineWater);

// --- Kennebec River (Embden section) ---
L.polyline([
  [45.10, -69.85], [45.05, -69.84], [44.98, -69.82],
  [44.92, -69.81], [44.87, -69.80], [44.82, -69.79],
  [44.77, -69.78], [44.72, -69.77]
], {color: MNE.water, weight: 3, opacity: 0.7, dashArray: '8 4'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.water}">🌊 Kennebec River</h3>
    <p>Major river system used by Eastern Abenaki peoples for thousands of years. The Kennebec was a principal artery from the coast to the St. Lawrence River via Dead River and the Chaudière — bearing heavy canoe traffic. The Embden petroglyph site sits at a natural stopping point just downstream from rapids.</p>
    <p>The drainage basin was the territory of the Eastern Abenaki Indians. The present-day Penobscot Indians, a branch of the Eastern Abenaki, still reside primarily along the Penobscot River to the east of the Kennebec.</p>
  </div>`).addTo(L_groups.maineWater);

// --- St. Croix River ---
L.polyline([
  [45.55, -67.15], [45.40, -67.20], [45.25, -67.25],
  [45.10, -67.10], [45.00, -67.08]
], {color: MNE.water, weight: 2, opacity: 0.5, dashArray: '8 4'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.water}">🌊 St. Croix River</h3>
    <p>Eastern boundary of Passamaquoddy territory, flowing into Passamaquoddy Bay. The St. Croix and its lakes were a major canoe route connecting coastal and interior resources.</p>
  </div>`).addTo(L_groups.maineWater);

// --- Penobscot River ---
L.polyline([
  [45.60, -68.80], [45.40, -68.70], [45.20, -68.60],
  [45.00, -68.65], [44.80, -68.70], [44.60, -68.75],
  [44.45, -68.80]
], {color: MNE.water, weight: 3, opacity: 0.6, dashArray: '8 4'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.water}">🌊 Penobscot River</h3>
    <p>Panawahpskewtəkʷ — "river of white rocks opening or spreading out." Heart of Penobscot Nation territory and one of Maine's greatest waterways. Indian Island at Old Town remains the center of Penobscot governance and culture.</p>
  </div>`).addTo(L_groups.maineWater);

// ==================== HEDDEN'S 6 STYLE CHRONOLOGY ====================
// Interpretive markers explaining the stylistic evolution

L.circleMarker([44.684, -67.374], {radius: 4, color: MNE.style1, fillColor: MNE.style1, fillOpacity: 0.9, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.style1}">Style 1 — Paired Anthropomorphs (3000–2200 B.P.)</h3>
    <p><b>Period:</b> Early Woodland</p>
    <p><b>Sites:</b> Birch Point, Hog Island, Holmes Point (lowest, tidewashed surfaces)</p>
    <p><b>Description:</b> The oldest petroglyphs at Machias Bay — paired anthropomorphic figures of equal size with outstretched arms that touch. Only the left figure has a head (V-shaped). Both have a center or "spirit line" running through the body.</p>
    <p><b>Interpretation:</b> Hedden interprets the pairing as a shaman speaking for a spirit — the headless/speechless figure represents the spirit being contacted.</p>
    <p><b>Social context:</b> Dispersed small family-size units meeting seasonally at Machias Bay for trade, marriage, and festivities.</p>
    <p><b>Technique:</b> Narrowly pecked with precise lines.</p>
  </div>`).addTo(L_groups.maineStyles);

L.circleMarker([44.681, -67.356], {radius: 4, color: MNE.style23, fillColor: MNE.style23, fillOpacity: 0.9, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.style23}">Styles 2 & 3 — Spirit Merging (2200–1660 B.P.)</h3>
    <p><b>Period:</b> Transition into Early Middle Woodland</p>
    <p><b>Style 2 sites:</b> Hog Island ONLY</p>
    <p><b>Style 3 sites:</b> Birch Point, Holmes Point, Hog Island</p>
    <p><b>Style 2:</b> A single torso displays multiple attributes appearing as inner body lines. Hedden interprets this as the earliest depiction of a shaman merging with or possessed by a spirit.</p>
    <p><b>Style 3:</b> Hourglass-shaped bodies filled with double or triple legs and multiple lines — more complex than Style 2. The shaman now considers himself an open receptacle to be invested by spirits.</p>
    <p><b>Social context:</b> Greater population but still extended family/band level organization (2200–1660 B.P.).</p>
  </div>`).addTo(L_groups.maineStyles);

L.circleMarker([44.680, -67.354], {radius: 4, color: MNE.style45, fillColor: MNE.style45, fillOpacity: 0.9, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.style45}">Styles 4 & 5 — Elaborate & Active Figures (1500–600 B.P.)</h3>
    <p><b>Period:</b> Middle to Late Woodland</p>
    <p><b>Style 4 sites:</b> Hog Island (best), Holmes Point. ~1500 B.P.</p>
    <p><b>Style 5 sites:</b> Hog Island, Holmes Point, Birch Point. 1100–600 B.P.</p>
    <p><b>Style 4:</b> Elongated anthropomorphs with broad shoulders, narrow torsos, inner patterning, and headdresses. Smaller "spirit familiar" figures appear alongside — indicating specialization of roles and possibly social hierarchy with the shaman in a leadership role. Possible Hopewellian influence.</p>
    <p><b>Style 5:</b> First action figures — frontally oriented with triangular bodies. Birdlike features: beaklike projections, unilinear feet, bent arms with splayed featherlike digits. Resemble the thunderbird motif. More active anthropomorphic and zoomorphic figures, including sexual imagery. Hedden ties this to the rise of shamanistic societies performing public demonstrations of magical power.</p>
    <p><b>Moose:</b> Prominent in later petroglyphs — moose were central to Algonkian life and legends. Joseph Nicolar (1893) told of Klose-kur-beh (the culture hero) killing a moose with his dog, leaving marks on ledges and rocks.</p>
  </div>`).addTo(L_groups.maineStyles);

L.circleMarker([44.683, -67.370], {radius: 4, color: MNE.style6, fillColor: MNE.style6, fillOpacity: 0.9, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.style6}">Style 6 — Contact Period (700–300 B.P. / ~1300–1650 CE)</h3>
    <p><b>Period:</b> Late Woodland into Contact</p>
    <p><b>Sites:</b> Birch Point, Embden ledge</p>
    <p><b>Description:</b> The images lose the curvilinear organic sense of Style 5 and become straight, sharp, and angular. Figures include disembodied heads, horned serpents, bird figures, and anthropomorphs with a pointing gesture.</p>
    <p><b>Christian crosses:</b> Present among the later designs — indicating contact with Jesuit missionaries.</p>
    <p><b>Mi'kmaq influence:</b> One figure at Machias Bay, dated ca. 1620–1630, is pecked in what Hedden identifies as "Mi'kmaq style."</p>
    <p><b>Climate context:</b> The "Little Ice Age" — severe winters would have brought greater reliance on big-game hunting, which is reflected in increased moose imagery.</p>
    <p><b>European ships:</b> Sites 62.46 and 62.47 depict small European sailing ships, consistent with Plymouth Colony traders visiting in the early 1630s.</p>
    <p><b>End of tradition:</b> Freshly exposed bedrock without petroglyphs represents the last 250–300 years when the Passamaquoddy were displaced from Machias Bay.</p>
  </div>`).addTo(L_groups.maineStyles);

// ==================== SACRED / CULTURAL SITES ====================

// --- Machias Bay Seasonal Gathering Place ---
L.circleMarker([44.685, -67.365], {radius: 6, color: MNE.sacred, fillColor: MNE.sacred, fillOpacity: 0.6, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.sacred}">🔥 Machias Bay Seasonal Gathering Place</h3>
    <p><b>Time depth:</b> At least 3,000 years</p>
    <p><b>Culture:</b> Passamaquoddy / Wabanaki</p>
    <p><b>Description:</b> Machias Bay was a major seasonal gathering place where Passamaquoddy and related peoples came together for trade, marriage opportunities, and ceremony. The gathering continued through the contact period — European settlers reported that seasonal gatherings involving more than one hundred canoes loaded with Indian visitors took place at Machias Bay as late as the 1790s. The sounds of drumming could be heard through the night.</p>
    <p><b>Significance:</b> The petroglyph sites around the bay were intimately connected to this gathering tradition. Mark Hedden suggests the attributes of these ledges — perhaps a quality of light or position in the landscape — made them particularly attractive for rock art.</p>
  </div>`).addTo(L_groups.maineSacred);

// --- Norridgewock Village Site ---
L.circleMarker([44.770, -69.790], {radius: 5, color: MNE.village, fillColor: MNE.village, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.village}">🏘️ Norridgewock (Nanrantsouak) Village</h3>
    <p><b>Location:</b> About half a mile downstream from Embden petroglyphs, Kennebec River</p>
    <p><b>Culture:</b> Norridgewock band of Eastern Abenaki</p>
    <p><b>Description:</b> A significant Abenaki village and later the site of Father Sebastien Rasles' Jesuit mission. The village was strategically positioned on the Kennebec River, the major travel corridor between the coast and the St. Lawrence.</p>
    <p><b>1724:</b> The village was destroyed in a British raid that killed Father Rasles and many Abenaki residents — a pivotal event in the colonial wars.</p>
    <p><b>Connection to petroglyphs:</b> The Embden petroglyph site is 14 miles upstream, at a natural canoe resting point. The two sites were part of the same cultural landscape.</p>
  </div>`).addTo(L_groups.maineSacred);

// --- Indian Island / Penobscot Nation ---
L.circleMarker([44.935, -68.665], {radius: 5, color: MNE.penobscot, fillColor: MNE.penobscot, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.penobscot}">🏘️ Indian Island — Penobscot Nation</h3>
    <p><b>Location:</b> Penobscot River at Old Town, Penobscot County</p>
    <p><b>Culture:</b> Penobscot Nation (Panawahpskewtəkʷ)</p>
    <p><b>Description:</b> Center of Penobscot governance and culture since time immemorial. The Penobscot are the "people of the river of white rocks" — the Penobscot River is their homeland. Modern tribal headquarters with 2,400+ enrolled members.</p>
    <p><b>Cultural hero:</b> Gluscabe (Gluscap) teachings are passed down through oral histories — the same figure depicted at the Embden petroglyphs.</p>
  </div>`).addTo(L_groups.maineSacred);

// --- Pleasant Point / Sipayik (Passamaquoddy) ---
L.circleMarker([44.978, -67.045], {radius: 5, color: MNE.passamaquoddy, fillColor: MNE.passamaquoddy, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.passamaquoddy}">🏘️ Pleasant Point / Sipayik — Passamaquoddy Tribe</h3>
    <p><b>Location:</b> Perry, Washington County, on Passamaquoddy Bay</p>
    <p><b>Culture:</b> Passamaquoddy (Peskotomuhkatiyik)</p>
    <p><b>Description:</b> One of two Passamaquoddy tribal communities (the other being Indian Township at Peter Dana Point). The Passamaquoddy have inhabited this region for at least 12,000 years and are the creators of the Machias Bay petroglyphs — the largest concentration of rock art on the East Coast.</p>
    <p><b>Donald Soctomah (Historic Preservation Officer):</b> "Our life stories are on those rocks. It is our ancestors that made them, our ancestors that live in the stories that are transposed onto the rocks."</p>
  </div>`).addTo(L_groups.maineSacred);

// --- Mount Katahdin / Pamola ---
L.circleMarker([45.904, -68.921], {radius: 6, color: MNE.sacred, fillColor: MNE.sacred, fillOpacity: 0.5, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.sacred}">⛰️ Mount Katahdin — Home of Pamola</h3>
    <p><b>Location:</b> Baxter State Park, Piscataquis County</p>
    <p><b>Significance:</b> The highest peak in Maine (5,269 ft) and one of the most sacred places in Wabanaki cosmology. Home of Pamola — a supernatural birdlike flying creature with a huge head, four-foot beak, and wings that could cause storms.</p>
    <p><b>Connection to rock art:</b> Dean Snow suggested that the birdlike figures found at the Embden petroglyphs represent Pamola. The thunderbird motif appears at both Embden and Machias Bay, and at the Grand Lake Stream site — linking these rock art traditions to the sacred geography of Katahdin.</p>
    <p><b>Penobscot tradition:</b> The Penobscot people have long regarded Katahdin as a deeply spiritual place. Its name means "the Greatest Mountain" in the Penobscot language.</p>
  </div>`).addTo(L_groups.maineSacred);

// ==================== CONSERVATION / MODERN ====================

L.circleMarker([44.684, -67.373], {radius: 10, color: MNE.conserved, fillColor: MNE.conserved, fillOpacity: 0.15, weight: 2, dashArray: '5 5'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.conserved}">🌿 Birch Point — Returned to Passamaquoddy (2006)</h3>
    <p>In 2006, 5.5 acres containing the Picture Rocks were returned to the Passamaquoddy Tribe by Maine Coast Heritage Trust. The committee "Malusah'ekan" (Passamaquoddy for "Picture Rocks on the Shore") was established to protect other petroglyph sites. The tribe plans guided tours with tribal members interpreting the petroglyphs.</p>
    <p>In exchange, MCHT received conservation easements on 300 acres of Passamaquoddy land at Moose Snare Cove, expanding protected lands to 1,000+ acres around Little Kennebec Bay.</p>
  </div>`).addTo(L_groups.maineConserved);

L.circleMarker([44.695, -67.381], {radius: 8, color: MNE.conserved, fillColor: MNE.conserved, fillOpacity: 0.15, weight: 2, dashArray: '5 5'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${MNE.conserved}">🌿 Long Point — Conserved (2013)</h3>
    <p>In 2013, Maine Coast Heritage Trust acquired 66 acres at Long Point to protect 3,000-year-old petroglyphs from a proposed 26-lot subdivision. The property includes the petroglyph ledges and a shell midden.</p>
    <p>Access to petroglyphs is limited to Passamaquoddy tribal and research functions. Public trails for hiking, bird-watching, and shellfish harvesting are being developed.</p>
  </div>`).addTo(L_groups.maineConserved);
