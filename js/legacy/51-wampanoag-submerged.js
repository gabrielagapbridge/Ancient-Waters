// ============================================================
// WAMPANOAG SUBMERGED LANDSCAPES — The Drowned World
// Post-glacial sea level rise and the lost coastline of
// southeastern Massachusetts
// ============================================================
// THE SCALE OF THE LOSS:
//   At the Last Glacial Maximum (~20,000 BP), sea level was ~400 ft
//   (122 m) below present. The shoreline lay ~60–100 miles further
//   east, near the edge of the continental shelf. Georges Bank was
//   a massive island. Cape Cod, Martha's Vineyard, and Nantucket
//   were inland hills on a vast coastal plain.
//
//   The Wampanoag (and their Paleoindian ancestors) occupied this
//   now-submerged landscape for at least 7,000 years before rising
//   seas erased it. Their earliest camps, fishing stations, burial
//   grounds, and tool caches now lie beneath the Atlantic.
//
// SEA LEVEL TIMELINE (New England):
//   ~20,000 BP: -400 ft (-122 m). Shoreline at shelf edge. Georges
//     Bank is a massive island. All of Nantucket Sound is dry land.
//   ~15,000 BP: -300 ft (-91 m). Ice retreats from Cape Cod. Rapid
//     meltwater release. Caribou hunters on the exposed plain.
//   ~12,000 BP: -200 ft (-61 m). Land rebounds from ice weight.
//     Georges Bank, Stellwagen Bank, Jeffries Ledge become islands.
//     Paleoindians (Wapanucket No. 8 era) occupy the region.
//   ~10,000 BP: -130 ft (-40 m). Coastline still well east of
//     present. Martha's Vineyard and Cape Cod still connected.
//   ~7,500 BP: -50 ft (-15 m). Vineyard Sound floods. Martha's
//     Vineyard becomes an island. Wampanoag oral tradition: Moshup
//     drags his toe, creating the channel.
//   ~6,000 BP: -30 ft (-9 m). Nantucket Sound floods. Nantucket
//     separates. Wave erosion of Cape Cod glacial deposits begins.
//     Georges Bank fully submerged.
//   ~4,000 BP: -20 ft (-6 m). Sandy Neck forms. Cape Cod takes
//     recognizable shape. Barrier islands develop.
//   ~2,000 BP: -5 ft (-1.5 m). Coastline approaches present position.
//     Rate slows to ~3 ft per 1,000 years.
//   Present: Sea level still rising. 2.8 mm/yr at Woods Hole,
//     3.5 mm/yr at Nantucket (65–76% above global average).
//     Projected: +1.5 ft by 2050, +5 ft by 2100.
//
// UNDERWATER ARCHAEOLOGY:
//   David Robinson (Director, MA Board of Underwater Archaeological
//   Resources) has pioneered submerged paleolandscape research in
//   Nantucket Sound — the first intact in situ paleolandforms and
//   ancient Indigenous cultural materials found underwater in
//   North America.
//
// Sources: USGS (Oldale 1992, 2001), MHC 1987, North Shore Nature,
//   Martha's Vineyard Magazine 2005/2019, Falmouth.gov, BUAR/
//   Robinson 2021, PLOS ONE (Anderson et al. 2017), NPS,
//   Britannica, MV Commission, Vineyard Conservation Society
// ============================================================

// Pane for submerged features (below regular markers)
if (!map.getPane('submergedPane')) {
  map.createPane('submergedPane');
  map.getPane('submergedPane').style.zIndex = 340;
}

const SUB = {
  glacial:    '#1A237E',  // deep indigo — glacial maximum shoreline
  paleo:      '#283593',  // indigo — 12,000 BP shoreline
  archaic:    '#1565C0',  // blue — 7,500 BP shoreline
  woodland:   '#1E88E5',  // lighter blue — 6,000 BP shoreline
  modern:     '#42A5F5',  // light blue — near-modern
  georges:    '#4A148C',  // deep purple — Georges Island
  subsite:    '#FF6F00',  // amber — probable submerged sites
  threat:     '#D32F2F',  // red — modern threat zones
  drowned:    '#006064',  // teal — drowned landscape areas
  shelf:      '#0D47A1',  // dark blue — continental shelf
  moshup:     '#7B1FA2',  // purple — Moshup legend
  research:   '#00C853'   // green — active research areas
};

// ==================== APPROXIMATE PALEOSHORELINES ====================
// Based on USGS bathymetry, Oldale (1992), and MHC (1987)
// These are schematic representations of where the coast roughly was
// at different sea level stands. Actual shorelines were irregular
// and complex; these convey the general position and scale of change.

// --- ~20,000 BP: Glacial Maximum — sea level -400 ft ---
// Shoreline near the edge of the continental shelf, ~60-100 mi out
L.polyline([
  [40.00, -69.00], [40.20, -68.50], [40.50, -68.00],
  [40.80, -67.50], [41.00, -67.20], [41.20, -67.00],
  [41.50, -66.80], [41.80, -66.60], [42.10, -66.50],
  [42.40, -66.60], [42.70, -66.80], [43.00, -67.00]
], {
  color: SUB.glacial, weight: 4, opacity: 0.8,
  dashArray: '12,6', pane: 'submergedPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${SUB.glacial}">~20,000 BP — Glacial Maximum Shoreline</h3>
  <p><b>Sea level:</b> ~400 ft (122 m) below present</p>
  <p><b>Distance from modern coast:</b> 60–100 miles further east</p>
  <p>At the peak of the last Ice Age, the Laurentide Ice Sheet had locked up so much water that sea level dropped ~400 feet. The entire continental shelf south of Cape Cod was dry land — a vast coastal plain extending to the shelf edge. Georges Bank was not a bank at all but a massive island, larger than Massachusetts itself.</p>
  <p>Cape Cod, Martha's Vineyard, and Nantucket were merely inland hills on this plain. The "coast" as the Wampanoag's deepest ancestors knew it was 60–100 miles east of where it is today.</p>
  <p>This shoreline represents the maximum extent of habitable land. No known archaeological sites survive from this period in New England — the ice sheet still covered the region — but animals including mastodon, mammoth, walruses, and giant sloths roamed the exposed shelf. Their teeth and bones are regularly dredged up by fishing boats.</p>
  <p style="font-size:10px;color:#888"><b>Sources:</b> USGS (Oldale 1992, 2001); NPS; North Shore Nature</p>
</div>`).addTo(L_groups.wampanoagSubmerged);

// Label for glacial shoreline
L.circleMarker([41.00, -67.20], {radius: 0, opacity: 0})
  .bindTooltip('~20,000 BP: Glacial Maximum<br>Sea level −400 ft', {
    permanent: true, direction: 'right',
    className: 'submerged-label',
    offset: [10, 0]
  }).addTo(L_groups.wampanoagSubmerged);

// --- ~12,000 BP: Paleoindian Era — sea level -200 ft ---
// Land rebounding from ice weight. Georges Bank becomes an island.
L.polyline([
  [40.30, -69.50], [40.50, -69.20], [40.80, -68.80],
  [41.00, -68.50], [41.20, -68.30], [41.40, -68.10],
  [41.60, -67.90], [41.80, -67.80], [42.00, -67.80],
  [42.20, -67.90], [42.50, -68.00], [42.80, -68.20]
], {
  color: SUB.paleo, weight: 3, opacity: 0.7,
  dashArray: '10,5', pane: 'submergedPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${SUB.paleo}">~12,000 BP — Paleoindian Era Shoreline</h3>
  <p><b>Sea level:</b> ~200 ft (61 m) below present</p>
  <p><b>Distance from modern coast:</b> 30–50 miles further east</p>
  <p>By 12,000 years ago, the ice had retreated north of the St. Lawrence River. The land, freed from the mile-thick glacier, was rebounding upward. Sea level had risen 200 ft from the glacial maximum but was still 200 ft below present.</p>
  <p>This is the era of the Wapanucket No. 8 and Wamsutta Paleoindian sites — the earliest known human occupation in southeastern Massachusetts. But the people who made those tools were not "coastal" people in the modern sense. The coast was still tens of miles to the east. They were interior forest people hunting caribou, deer, and smaller game.</p>
  <p>Georges Bank, Stellwagen Bank, and Jeffries Ledge had become islands — separated from the mainland as sea level rose around them but not yet fully submerged.</p>
  <p style="font-size:10px;color:#888"><b>Sources:</b> USGS; North Shore Nature; MAS</p>
</div>`).addTo(L_groups.wampanoagSubmerged);

L.circleMarker([41.20, -68.30], {radius: 0, opacity: 0})
  .bindTooltip('~12,000 BP: Paleoindian Era<br>Sea level −200 ft', {
    permanent: true, direction: 'right',
    className: 'submerged-label',
    offset: [10, 0]
  }).addTo(L_groups.wampanoagSubmerged);

// --- ~7,500 BP: Vineyard Separation — sea level -50 ft ---
// Vineyard Sound floods. Martha's Vineyard becomes an island.
L.polyline([
  [40.80, -70.30], [41.00, -70.10], [41.15, -69.80],
  [41.25, -69.50], [41.35, -69.30], [41.50, -69.10],
  [41.65, -68.90], [41.85, -68.80], [42.05, -68.80],
  [42.25, -68.90], [42.45, -69.00]
], {
  color: SUB.archaic, weight: 3, opacity: 0.7,
  dashArray: '8,4', pane: 'submergedPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${SUB.archaic}">~7,500 BP — Martha's Vineyard Separated</h3>
  <p><b>Sea level:</b> ~50 ft (15 m) below present</p>
  <p><b>The moment of separation:</b> Seawater floods the deepest areas of what is now Vineyard Sound, cutting Martha's Vineyard off from the mainland.</p>
  <p>The Wampanoag witnessed this — and remembered. Their oral tradition describes the giant Moshup dragging his toe between the island and the mainland, creating a channel that filled with water. Tobias Vanderhoop of the Wampanoag Tribe of Aquinnah says: <i>"Our people walked from the mainland prior to the separation. We've been here since before the Island was an island."</i></p>
  <p>The sea was rising fast enough over the gently sloping coastal plain to make a visible difference within a single human lifetime. Entire camps and fishing stations were being swallowed by the advancing water.</p>
  <p>Nantucket and Cape Cod were still connected at this point — Nantucket Sound was still dry land.</p>
  <p style="font-size:10px;color:#888"><b>Sources:</b> Martha's Vineyard Magazine (2005); Wampanoag Tribe of Aquinnah; USGS</p>
</div>`).addTo(L_groups.wampanoagSubmerged);

L.circleMarker([41.15, -69.80], {radius: 0, opacity: 0})
  .bindTooltip('~7,500 BP: Vineyard separates<br>Sea level −50 ft<br>Moshup legend', {
    permanent: true, direction: 'right',
    className: 'submerged-label',
    offset: [10, 0]
  }).addTo(L_groups.wampanoagSubmerged);

// --- ~6,000 BP: Nantucket Separation — sea level -30 ft ---
// Nantucket Sound floods. Both islands fully separated.
L.polyline([
  [41.10, -70.50], [41.25, -70.20], [41.38, -69.95],
  [41.50, -69.70], [41.60, -69.50], [41.75, -69.30],
  [41.90, -69.10], [42.05, -69.00], [42.20, -69.05],
  [42.40, -69.15]
], {
  color: SUB.woodland, weight: 3, opacity: 0.65,
  dashArray: '6,4', pane: 'submergedPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${SUB.woodland}">~6,000 BP — Nantucket Sound Floods</h3>
  <p><b>Sea level:</b> ~30 ft (9 m) below present</p>
  <p>Nantucket Sound is inundated, finally separating Nantucket from Cape Cod. Both islands are now fully surrounded by water.</p>
  <p>Wave erosion of Cape Cod's glacial deposits begins in earnest. The outer Cape starts to take its recognizable shape. The eroded sand is carried by longshore currents to form the spits and barrier beaches that define the Cape today.</p>
  <p>Georges Bank — once a massive island — is now fully submerged. The shallowest portions are only a few feet deep, and as recently as the 19th century, sailors have reported standing on temporarily exposed ground there.</p>
  <p>The rate of sea level rise is slowing: from ~50 ft per 1,000 years in the early post-glacial period to ~11 ft per 1,000 years by this time.</p>
</div>`).addTo(L_groups.wampanoagSubmerged);


// ==================== GEORGES ISLAND / BANK ====================
// Once larger than Massachusetts — now submerged

// Approximate outline of Georges Bank as dry land (very schematic)
L.polygon([
  [41.20, -67.80], [41.40, -67.20], [41.60, -66.80],
  [41.80, -66.40], [42.00, -66.20], [42.20, -66.10],
  [42.40, -66.30], [42.20, -66.80], [42.00, -67.20],
  [41.80, -67.50], [41.50, -67.80], [41.30, -67.90]
], {
  color: SUB.georges, weight: 3, fillColor: SUB.georges, fillOpacity: 0.08,
  dashArray: '10,5', pane: 'submergedPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${SUB.georges}">★ Georges Island — Lost Mega-Island</h3>
  <p><b>Modern name:</b> Georges Bank (submerged fishing ground)</p>
  <p><b>Location:</b> ~60 miles east of Cape Cod</p>
  <p><b>Size when exposed:</b> Larger than the entire state of Massachusetts</p>
  <p><b>Submerged:</b> Became an island ~12,000 BP as surrounding lowlands flooded. Fully submerged by ~6,000 BP.</p>
  <p><b>Description:</b> During the Ice Age, Georges Bank was a massive island — one of the largest landmasses on the continental shelf. According to the American Museum of Natural History, it was home to many large prehistoric mammals including walruses, mastodons, and giant sloths, traces of which are still found in fishing nets.</p>
  <p><b>Human presence?</b> Paleogeographer John Shaw: "Looking at paleogeography I am sure people were there" — though no direct evidence has been recovered from the seabed yet. The island would have been an extraordinary resource: abundant marine mammals, shellfish, and seabirds.</p>
  <p><b>Today:</b> One of the most prolific fishing grounds in the world. The shallowest portions are only a few feet deep. In the 19th century, a U.S. vessel crew actually landed on temporarily exposed ground and played a game of baseball.</p>
  <p style="font-size:10px;color:#888"><b>Sources:</b> Martha's Vineyard Magazine (2019, "Martha's Archipelago"); AMNH; Shaw; USGS</p>
</div>`).addTo(L_groups.wampanoagSubmerged);

// Georges Bank center marker
L.circleMarker([41.80, -66.90], {radius: 8, color: SUB.georges, fillColor: SUB.georges, fillOpacity: 0.3, weight: 3})
  .bindTooltip('Georges Island<br>(submerged ~6,000 BP)<br>Once larger than Massachusetts', {
    permanent: true, direction: 'right',
    className: 'submerged-label',
    offset: [10, 0]
  }).addTo(L_groups.wampanoagSubmerged);


// ==================== NANTUCKET SOUND — DROWNED LANDSCAPE ====================

// The entire sound was once dry land — a coastal plain
L.polygon([
  // Roughly Nantucket Sound boundaries
  [41.70, -70.30], [41.65, -70.10], [41.60, -69.95],
  [41.55, -69.90], [41.45, -69.95], [41.35, -70.00],
  [41.30, -70.10], [41.32, -70.25], [41.35, -70.40],
  [41.40, -70.50], [41.50, -70.55], [41.60, -70.45]
], {
  color: SUB.drowned, weight: 2, fillColor: SUB.drowned, fillOpacity: 0.10,
  dashArray: '6,3', pane: 'submergedPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${SUB.drowned}">Nantucket Sound — Drowned Coastal Plain</h3>
  <p><b>Submerged:</b> ~6,000 BP (gradually, over ~1,500 years)</p>
  <p>The entire area of Nantucket Sound — roughly 600 square miles — was once dry land. For more than 70,000 years, this was an interior coastal plain connecting Cape Cod, Martha's Vineyard, and Nantucket.</p>
  <p><b>What was here:</b> Rivers, freshwater ponds, forests, grasslands, and almost certainly human settlements. Wampanoag ancestors walked freely between the mainland, what is now the Vineyard, and what is now Nantucket. There was no "sound" — just land.</p>
  <p><b>Underwater archaeology:</b> David Robinson, Director of the Massachusetts Board of Underwater Archaeological Resources (BUAR), has been conducting pioneering research in Nantucket Sound waters, successfully identifying intact paleolandforms and ancient Indigenous cultural materials preserved in situ on the drowned seabed — among the first such discoveries in North America.</p>
  <p><b>Significance:</b> This is likely the single largest zone of unrecoverable Wampanoag archaeological heritage. Thousands of years of habitation — camps, trails, fishing stations, burial grounds — lie beneath the waves.</p>
  <p style="font-size:10px;color:#888"><b>Sources:</b> Robinson 2021 (NHA lecture); BUAR; MHC 1987; USGS</p>
</div>`).addTo(L_groups.wampanoagSubmerged);

// --- Vineyard Sound — drowned channel ---
L.polygon([
  [41.45, -70.50], [41.48, -70.75], [41.52, -70.85],
  [41.55, -70.90], [41.60, -70.88], [41.63, -70.75],
  [41.60, -70.60], [41.55, -70.50], [41.50, -70.45]
], {
  color: SUB.moshup, weight: 2, fillColor: SUB.moshup, fillOpacity: 0.08,
  dashArray: '6,3', pane: 'submergedPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${SUB.moshup}">Vineyard Sound — Moshup's Channel</h3>
  <p><b>Flooded:</b> ~7,500 BP</p>
  <p>When the rising sea breached the lowest points of the land bridge between the Vineyard and the mainland ~7,500 years ago, Vineyard Sound was born. The Wampanoag witnessed this event and preserved it in oral tradition as the work of the benevolent giant Moshup.</p>
  <p>The earliest and deepest parts of the sound were the first to flood. Within 1,500 years, the entire channel was submerged, and by ~6,000 BP, Nantucket Sound followed.</p>
  <p><b>Archaeological potential:</b> The deepest portions of Vineyard Sound may preserve the oldest submerged sites — settlements from before the separation, when this was an inland valley.</p>
</div>`).addTo(L_groups.wampanoagSubmerged);


// ==================== STELLWAGEN BANK — DROWNED ISLAND ====================

L.polygon([
  [42.20, -70.30], [42.30, -70.15], [42.40, -70.05],
  [42.50, -70.00], [42.55, -70.05], [42.50, -70.20],
  [42.40, -70.30], [42.30, -70.35]
], {
  color: SUB.shelf, weight: 2, fillColor: SUB.shelf, fillOpacity: 0.10,
  dashArray: '6,3', pane: 'submergedPane'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${SUB.shelf}">Stellwagen Bank — Drowned Island</h3>
  <p><b>Location:</b> North of Cape Cod, now the Stellwagen Bank National Marine Sanctuary</p>
  <p><b>As an island:</b> ~12,000 BP — when the land rebounded from glacial weight, sea level temporarily dropped and Stellwagen Bank, along with Jeffries Ledge and Georges Bank, emerged as islands.</p>
  <p><b>Submerged:</b> Between 10,000 and 6,000 BP as seas continued rising.</p>
  <p>Mastodon and mammoth teeth have been dredged from Stellwagen Bank and the Gulf of Maine — evidence that these Ice Age megafauna grazed on what was then exposed land. The Paleoindians who hunted them may have camped on these now-drowned islands.</p>
</div>`).addTo(L_groups.wampanoagSubmerged);


// ==================== PROBABLE SUBMERGED SITE ZONES ====================
// Areas where archaeological sites almost certainly exist underwater

// Submerged site zone: outer Cape Cod shelf
L.circleMarker([41.50, -69.60], {radius: 10, color: SUB.subsite, fillColor: SUB.subsite, fillOpacity: 0.15, weight: 2, dashArray: '4,3'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SUB.subsite}">⬢ Probable Submerged Sites — Nantucket Sound Shelf</h3>
    <p>Based on the density of terrestrial archaeological sites on Cape Cod, Martha's Vineyard, and Nantucket, archaeologists estimate that hundreds of additional sites must lie beneath Nantucket Sound and the adjacent shelf.</p>
    <p>The logic is straightforward: if the land supported dense habitation for thousands of years (and it did — 350+ sites at Aquinnah alone), then the now-submerged land adjacent to it almost certainly did too.</p>
    <p>David Robinson's BUAR research has confirmed this with actual discoveries of in situ cultural materials on the drowned seabed.</p>
  </div>`).addTo(L_groups.wampanoagSubmerged);

// Submerged site zone: south of Martha's Vineyard
L.circleMarker([41.15, -70.60], {radius: 10, color: SUB.subsite, fillColor: SUB.subsite, fillOpacity: 0.15, weight: 2, dashArray: '4,3'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SUB.subsite}">⬢ Probable Submerged Sites — South of Martha's Vineyard</h3>
    <p>The southern coast of Martha's Vineyard once extended much further south. Settlements that were "coastal" 8,000–10,000 years ago are now well offshore. The Aquinnah Cliffs — sacred to the Wampanoag — would have overlooked a broad plain extending to the south, not the open ocean.</p>
    <p>Fishing trawlers operating south of the Vineyard have occasionally brought up mastodon bones and stone tools — tantalizing evidence of the drowned landscape.</p>
  </div>`).addTo(L_groups.wampanoagSubmerged);

// Submerged site zone: east of Cape Cod
L.circleMarker([41.80, -69.50], {radius: 10, color: SUB.subsite, fillColor: SUB.subsite, fillOpacity: 0.15, weight: 2, dashArray: '4,3'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SUB.subsite}">⬢ Probable Submerged Sites — East of Cape Cod</h3>
    <p>USGS geologist Robert Oldale documented that the glacial Cape extended significantly further east before wave erosion carved it back. The outer Cape's eastern headlands — now underwater — were the first to erode as the rising sea reached them ~6,000 years ago.</p>
    <p>Any settlements on those vanished headlands are now on the seafloor. The USGS has mapped the approximate extent of the pre-erosion glacial Cape, showing how much land has been lost.</p>
  </div>`).addTo(L_groups.wampanoagSubmerged);

// Deep sea artifact find - off Plymouth
L.circleMarker([41.90, -70.45], {radius: 5, color: SUB.subsite, fillColor: SUB.subsite, fillOpacity: 0.6, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SUB.subsite}">⬢ Deep Sea Plummet — Off Gurnet Head, Plymouth</h3>
    <p>A "plummet" (a polished stone weight used for fishing or as a plumb bob) was recovered from the seafloor off Gurnet Head, Plymouth. Published by Bernard Otto in the <i>Bulletin of the Massachusetts Archaeological Society</i> (Vol. 60, No. 1).</p>
    <p>This artifact was found in deep water — evidence that the area was once dry land where people fished and lived. One of many incidental finds that hint at the scale of the submerged archaeological record.</p>
  </div>`).addTo(L_groups.wampanoagSubmerged);


// ==================== DAVID ROBINSON / BUAR RESEARCH AREA ====================

L.rectangle([[41.35, -70.30], [41.65, -69.95]], {
  color: SUB.research, weight: 2, fillColor: SUB.research, fillOpacity: 0.06,
  dashArray: '8,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${SUB.research}">★ Active Research Area — BUAR Submerged Paleolandscapes</h3>
  <p><b>Lead:</b> David Robinson, Director & Chief Archaeologist, Massachusetts Board of Underwater Archaeological Resources (BUAR)</p>
  <p><b>Location:</b> Nantucket Sound and nearby Rhode Island waters</p>
  <p><b>Description:</b> Over the past two decades, Robinson and his team have pioneered the archaeology of submerged paleolandscapes in North American waters. Using advances in underwater survey technology, they have:</p>
  <p>• Successfully identified intact paleolandforms (ancient land surfaces) preserved on the seabed<br>
  • Located ancient Indigenous cultural materials in situ — among the first such finds in North America<br>
  • Developed new methods for locating drowned formerly-terrestrial ancient landscapes underwater</p>
  <p><b>Significance:</b> This research is at the absolute forefront of a global movement to study the ~20 million square kilometers of cultural landscapes drowned by post-glacial sea level rise worldwide. Robinson's work in Nantucket Sound demonstrates that intact prehistoric sites <i>can</i> survive millennia of submersion — preservation underwater can actually be better than on land in some cases.</p>
  <p><b>Threats:</b> Offshore wind energy development, commercial fishing (bottom trawling), and continued sea level rise all threaten these irreplaceable submerged sites.</p>
  <p style="font-size:10px;color:#888"><b>Sources:</b> Robinson 2021 (NHA University lecture); Mass.gov BUAR; Robinson 2020 (Robbins Museum "Diggin' In!" series)</p>
</div>`).addTo(L_groups.wampanoagSubmerged);


// ==================== MODERN SEA LEVEL RISE THREAT ZONES ====================

// Martha's Vineyard erosion threat
L.polyline([
  [41.33, -70.77], [41.30, -70.65], [41.32, -70.52],
  [41.35, -70.45], [41.38, -70.42], [41.42, -70.43],
  [41.45, -70.50], [41.47, -70.60]
], {
  color: SUB.threat, weight: 3, opacity: 0.7,
  dashArray: '4,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${SUB.threat}">⚠ Martha's Vineyard — Modern Erosion & Sea Level Rise</h3>
  <p><b>Current rate:</b> Sea level at Nantucket rising 3.5 mm/year — 76% above the global average</p>
  <p><b>Projections:</b> +1.5 ft by 2050, +5 ft by 2100</p>
  <p><b>Impact:</b> Since 1887, Martha's Vineyard and Nantucket combined have lost 3,295 acres of coastal areas — an area roughly the size of the town of Aquinnah. This is approximately 5.1 square miles, or about 2,500 football fields.</p>
  <p><b>Archaeological threat:</b> Known Wampanoag sites near the coast — shell middens, village sites, burial grounds — are at increasing risk from erosion and storm surge. Sites that survived thousands of years above water may be lost within decades.</p>
  <p><b>Infrastructure at risk:</b> Nearly 800 structures (homes, businesses, infrastructure) worth over $4.6 billion may be lost to erosion by 2050. Over 44 miles of roads on both islands are also threatened.</p>
  <p style="font-size:10px;color:#888"><b>Sources:</b> MV Commission; Vineyard Conservation Society; The Trustees "State of the Coast" report</p>
</div>`).addTo(L_groups.wampanoagThreat);

// Nantucket erosion threat (Siasconset loses 12 ft/year)
L.polyline([
  [41.22, -70.05], [41.25, -69.95], [41.28, -69.93],
  [41.30, -69.95], [41.32, -70.05], [41.30, -70.15]
], {
  color: SUB.threat, weight: 3, opacity: 0.7,
  dashArray: '4,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${SUB.threat}">⚠ Nantucket — Accelerated Erosion</h3>
  <p><b>Current rate:</b> 3.94 mm/year sea level rise (1965–2010 average)</p>
  <p><b>Erosion:</b> The eastern shore at Siasconset (Siasconsit, the old Wampanoag community) loses up to 12 feet of beach per year. Archaeological sites along this coast are being actively destroyed.</p>
  <p>By 2050, Nantucket could lose nearly 569 acres of high salt marsh — an area 11 times the size of Boston Common.</p>
</div>`).addTo(L_groups.wampanoagThreat);

// Cape Cod outer coast erosion
L.polyline([
  [41.67, -69.93], [41.75, -69.95], [41.85, -69.97],
  [41.95, -70.00], [42.03, -70.05], [42.05, -70.10]
], {
  color: SUB.threat, weight: 3, opacity: 0.7,
  dashArray: '4,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${SUB.threat}">⚠ Cape Cod Outer Coast — Ongoing Erosion</h3>
  <p>The outer coast of Cape Cod has been eroding since the sea reached it ~6,000 years ago. The eastern shore loses an average of 3 feet per year. Archaeological sites in the Cape Cod National Seashore — including the Indian Neck Ossuary area at Wellfleet — are under constant threat.</p>
  <p>The glacial Cape extended significantly further east than it does today. The headlands that first Wampanoag generations knew are long gone.</p>
</div>`).addTo(L_groups.wampanoagThreat);


// ==================== SEA LEVEL RISE DATA VISUALIZATION ====================
// A timeline marker showing the rate of rise

L.circleMarker([41.52, -70.67], {radius: 6, color: '#fff', fillColor: SUB.drowned, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SUB.drowned}">📊 Sea Level Rise Timeline — Wampanoag Territory</h3>
    <table style="width:100%;border-collapse:collapse;font-size:11px;margin:6px 0;">
      <tr style="border-bottom:1px solid rgba(193,154,107,0.3)"><td style="padding:3px"><b>~20,000 BP</b></td><td>−400 ft</td><td>Coastline at shelf edge (~60-100 mi out)</td></tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.3)"><td style="padding:3px"><b>~15,000 BP</b></td><td>−300 ft</td><td>Ice retreats from Cape Cod. Rapid rise (~50 ft/1000 yr)</td></tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.3)"><td style="padding:3px"><b>~12,000 BP</b></td><td>−200 ft</td><td>Paleoindians arrive. Georges Bank = island</td></tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.3)"><td style="padding:3px"><b>~10,000 BP</b></td><td>−130 ft</td><td>Vineyard & Cape still connected to mainland</td></tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.3);color:${SUB.moshup}"><td style="padding:3px"><b>~7,500 BP</b></td><td>−50 ft</td><td><b>Vineyard Sound floods. Moshup legend.</b></td></tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.3);color:${SUB.woodland}"><td style="padding:3px"><b>~6,000 BP</b></td><td>−30 ft</td><td><b>Nantucket Sound floods. Georges Bank submerged.</b></td></tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.3)"><td style="padding:3px"><b>~4,000 BP</b></td><td>−20 ft</td><td>Sandy Neck forms. Cape takes shape. Rise slows: 11 ft/1000 yr</td></tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.3)"><td style="padding:3px"><b>~2,000 BP</b></td><td>−5 ft</td><td>Near-modern coastline. Rise: 3 ft/1000 yr</td></tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.3)"><td style="padding:3px"><b>1620 CE</b></td><td>−1 ft</td><td>Pilgrims arrive at Patuxet</td></tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.3);color:${SUB.threat}"><td style="padding:3px"><b>2025</b></td><td>0</td><td>Baseline. 3.5 mm/yr rise at Nantucket (76% above avg)</td></tr>
      <tr style="color:${SUB.threat}"><td style="padding:3px"><b>2050</b></td><td>+1.5 ft</td><td>~800 structures, 44 miles of roads at risk</td></tr>
      <tr style="color:${SUB.threat}"><td style="padding:3px"><b>2100</b></td><td>+5 ft</td><td>Major coastal communities inundated</td></tr>
    </table>
    <p style="font-size:10px;margin-top:4px;">Total land lost since Ice Age: thousands of square miles of habitable coastal plain, including the largest island on the Atlantic shelf (Georges Island/Bank). The oldest 7,000+ years of Wampanoag habitation are almost entirely underwater.</p>
  </div>`).addTo(L_groups.wampanoagSubmerged);


// ==================== NATIONAL-SCALE CONTEXT ====================

L.circleMarker([41.00, -68.00], {radius: 4, color: '#fff', fillColor: SUB.shelf, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SUB.shelf}">The Scale of the Crisis — National Context</h3>
    <p>The Wampanoag's drowned landscape is part of a continental-scale archaeological catastrophe. A 2017 study in PLOS ONE found that along the Gulf and Atlantic coasts of the southeastern United States alone:</p>
    <p>• <b>32,898</b> recorded archaeological sites are within 5 meters of modern sea level</p>
    <p>• <b>5,762</b> are already at or below sea level</p>
    <p>• A 1-meter rise would submerge <b>19,676</b> currently recorded sites</p>
    <p>• Since survey coverage is incomplete, actual numbers are much higher</p>
    <p>And this counts only <i>recorded</i> sites. The submerged continental shelf — where the earliest coastal peoples lived for millennia — has barely been surveyed at all.</p>
    <p>In New England specifically, offshore wind energy development is now driving new survey requirements. BOEM (Bureau of Ocean Energy Management) requires management plans that include mitigation measures for submerged archaeological sites — a positive development, though the technology to locate and protect these sites is still in its infancy.</p>
    <p style="font-size:10px;color:#888"><b>Sources:</b> Anderson et al. 2017, PLOS ONE; Robinson 2021; BUAR; BOEM</p>
  </div>`).addTo(L_groups.wampanoagSubmerged);
