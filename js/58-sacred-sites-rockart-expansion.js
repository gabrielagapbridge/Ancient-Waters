// ============================================================
// 58-sacred-sites-rockart-expansion.js
// Sacred Sites, Rock Art, Spiritual Landscapes, Erie & Neutral
// Nations, and Additional Archaeological Sites
// ============================================================

const SAC = {
  sacred: '#DC143C',
  rock: '#FF8C00',
  village: '#228B22',
  water: '#1E90FF',
  trail: '#8B4513',
  founding: '#800080',
  neutral: '#2E8B57',
  erie: '#4169E1'
};


// ==================== HAUDENOSAUNEE SACRED SITES ====================

// --- Onondaga Lake — Birthplace of the Haudenosaunee Confederacy ---
L.circleMarker([43.08, -76.17], {radius: 8, color: SAC.founding, fillColor: SAC.founding, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:600px;overflow-y:auto;">
    <h3 style="color:${SAC.founding}">🌲 Onondaga Lake — Birthplace of the Haudenosaunee Confederacy</h3>
    <p><b>Location:</b> Syracuse, New York</p>
    <p><b>THE FOUNDING:</b> On the shores of this lake, the Great Peacemaker (Deganawida) and Hiawatha (Aiionwatha) convinced the warring Five Nations to accept the Great Law of Peace (Kayaneren'kowa) and form the Haudenosaunee Confederacy — the oldest participatory democracy in the world.</p>
    <p><b>The Story:</b> The Peacemaker, said to be born a Huron/Wendat, traveled from village to village teaching the Kariwiio (good mind). His greatest challenge was the sorcerer Tadodaho of the Onondaga, whose body was twisted and whose hair was a tangle of writhing snakes — symbolizing the disorder of his violent mind.</p>
    <p><b>The Solar Eclipse:</b> The Seneca demanded a sign. The Peacemaker told them to look to the sky. They witnessed the sun turn black — a total solar eclipse. Many scholars date the League's founding to <b>1142 AD</b> based on eclipse records.</p>
    <p><b>Combing the Snakes:</b> Hiawatha combed the snakes from Tadodaho's hair and straightened his twisted body. Rather than destroy him, they made him the Firekeeper — spiritual leader of the Confederacy. The title Tadodaho continues today.</p>
    <p><b>The Tree of Peace:</b> The Peacemaker uprooted a great white pine and the nations buried their weapons beneath it. The tree was replanted with roots stretching in four directions — the Great White Roots of Peace. An eagle watches from the top. Five needles per bundle = five nations.</p>
    <p><b>The Hiawatha Belt:</b> Wampum recording the founding — five symbols joined by a path. This design became the Flag of the Iroquois Confederacy.</p>
    <p><b>Today:</b> One of the most polluted lakes in the United States — mercury, salt, industrial waste. The Onondaga Nation filed a land rights action: "Onondaga Lake is the birthplace of Haudenosaunee democracy... and should be protected as a national treasure instead of the chemical cesspool it has become."</p>
    <p><b>Sources:</b> Onondaga Nation; Haudenosaunee Confederacy; Sacred Land Film Project; History.com</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.hdnArchSites);

// --- Bare Hill / Genundewa — Seneca Genesis ---
L.circleMarker([42.68, -77.27], {radius: 7, color: SAC.sacred, fillColor: SAC.sacred, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${SAC.sacred}">🏔️ Bare Hill / Genundewa — Where the Seneca Emerged from the Earth</h3>
    <p><b>Location:</b> South end of Canandaigua Lake, Middlesex, Yates County, NY (865 ft above lake)</p>
    <p><b>The Seneca Genesis:</b> Oral history states the Seneca originated at <b>Nundawao</b> near the south end of Canandaigua Lake. The earth opened at Kanandague, allowing the first Seneca people to step into the world.</p>
    <p><b>Genundewa</b> stands adjacent — sacred mountain of the Seneca since before recorded memory. The Seneca name themselves <b>Onödowá'ga</b> — "People of the Great Hill" — in reference to this place.</p>
    <p><b>The Great Serpent:</b> A boy found a beautiful snake and kept it as a pet. It grew enormous, consuming mice, then rabbits, then deer. When deer grew scarce, it eyed the people. Warriors killed it on Bare Hill — the round stones in the shallow waters are said to be skulls of those it killed.</p>
    <p><b>Ancient Fort:</b> First recorded 1825 by Tuscarora historian David Cusick — traces of a fort covering ~1 acre, surrounded by a ditch and wall. The stones were "ancient when the first Seneca found them."</p>
    <p><b>Ring of Fire:</b> The Genundowa Festival of Lights continues annually — a bonfire atop Bare Hill signals flares around the entire shore of Canandaigua Lake, recreating the ancient celebration of gratitude.</p>
    <p><b>Status:</b> Bare Hill Unique Area, acquired by New York State beginning 1989.</p>
  </div>`, {maxWidth: 420}).addTo(L_groups.hdnArchSites);

// --- Iroquois Trail / Edge of the Woods ---
L.circleMarker([42.95, -76.12], {radius: 4, color: SAC.trail, fillColor: SAC.trail, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:350px;overflow-y:auto;">
    <h3 style="color:${SAC.trail}">🛤️ Edge of the Woods — Iroquois Trail</h3>
    <p><b>Location:</b> Route 11, Nedrow, NY (Onondaga-Oneida border)</p>
    <p>Plaque on a boulder marks where the Iroquois Trail — the Great Indian Trail — crossed east-west through Haudenosaunee territory. Used for trade, communication, and war.</p>
    <p>This is the <b>"Edge of the Woods"</b> between Onondaga and Oneida territories. A spring emerges, travels underground, and re-enters a hillside. Travelers built a small fire to announce themselves and be formally greeted by the neighboring nation.</p>
    <p>The trail eventually became many of New York's major roadways.</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnArchSites);

// --- White Springs & Townley-Read (Seneca, 1688-1754) ---
L.circleMarker([42.83, -77.00], {radius: 4, color: SAC.village, fillColor: SAC.village, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.village}">🏠 White Springs / Townley-Read Sites</h3>
    <p><b>Date:</b> ~1688–1715 / ~1715–1754</p>
    <p><b>Location:</b> North end of Seneca Lake, Ontario County, NY</p>
    <p>Two consecutively occupied Seneca village sites from the era between the Beaver Wars and the Revolution. Cornell digitized the collections for Seneca descendant communities.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnArchSites);

// --- Nichols Pond (Oneida, 1400s) ---
L.circleMarker([42.92, -75.80], {radius: 4, color: SAC.village, fillColor: SAC.village, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.village}">🏠 Nichols Pond — Oneida Village (1400s)</h3>
    <p><b>Location:</b> Town of Fenner, Madison County, NY</p>
    <p>Main village site of the Oneida dating to the 1400s. Excavated 1950s by Dr. Peter Pratt (SUNY Oswego), revealing palisade locations. Grain storage pits still visible across the street.</p>
    <p>Bear Clan Mother Marilyn John planted a white pine Tree of Peace here before her death in 2007.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnArchSites);

// --- Techiroguen ---
L.circleMarker([43.17, -76.25], {radius: 3, color: SAC.village, fillColor: SAC.village, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.village}">🏠 Techiroguen — Onondaga Fishing Village</h3>
    <p><b>Location:</b> West end of Oneida Lake (Tsioqui / "White Waters")</p>
    <p>Onondaga fishing village — canoes traveled north to the Salmon River and Lake Ontario. Oneida Lake once held 25-pound Atlantic salmon, easily caught by hand.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnArchSites);


// ==================== ROCK ART — SUSQUEHANNA RIVER ====================

L.circleMarker([39.92, -76.40], {radius: 6, color: SAC.rock, fillColor: SAC.rock, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${SAC.rock}">🪨 Safe Harbor Petroglyphs — Largest Rock Art in the Northeast</h3>
    <p><b>Location:</b> Susquehanna River below Safe Harbor Dam, Lancaster County, PA</p>
    <p><b>Age:</b> ~AD 1000-1450</p>
    <p><b>Artists:</b> Shenks Ferry people (Algonquian-speaking), ~AD 1200–1550. Displaced by Susquehannocks ~1450.</p>
    <p><b>Scale:</b> <b>~1,000 petroglyphs</b> across 10 sites — largest concentration in the northeastern US.</p>
    <p><b>Little Indian Rock:</b> ~150 petroglyphs — thunderbirds, serpents, deer/turkey/bear/elk tracks (clan symbols?), concentric circles, cupules.</p>
    <p><b>Big Indian Rock:</b> Human stick figure with horned headpiece, turkey tracks, thunderbird.</p>
    <p><b>Solstice Alignments:</b> Paul Nevin discovered long serpent forms point to sunrise/sunset on solstices.</p>
    <p><b>Loss:</b> Many sites submerged by dams. Seven figures in floor tiling at the Pennsylvania State Capitol.</p>
    <p><b>Both on National Register of Historic Places.</b></p>
  </div>`, {maxWidth: 450}).addTo(L_groups.hdnArchSites);

L.circleMarker([39.72, -76.33], {radius: 4, color: SAC.rock, fillColor: SAC.rock, fillOpacity: 0.6, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.rock}">🪨 Bald Friar Petroglyphs (Submerged)</h3>
    <p><b>Location:</b> PA-Maryland border (under Conowingo Dam impoundment)</p>
    <p>Designs unlike any others in the region — very abstract, resembling unknown writing systems. Salvaged petroglyphs at Maryland Archaeological Conservation Lab.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnArchSites);


// ==================== ROCK ART — ALLEGHENY RIVER ====================

L.circleMarker([41.34, -79.82], {radius: 5, color: SAC.rock, fillColor: SAC.rock, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:450px;overflow-y:auto;">
    <h3 style="color:${SAC.rock}">🪨 Indian God Rock — Sacred Allegheny River Petroglyph</h3>
    <p><b>Location:</b> Allegheny River, Rockland Township, Venango County, PA</p>
    <p><b>Age:</b> After AD 900, probably after 1200. French recorded 1749.</p>
    <p><b>Size:</b> Sandstone ~22×14×10 ft, ~55 carvings — humans, animals, archers, supernatural beings.</p>
    <p><b>Notable:</b> First Ohio River valley petroglyph in written records. Two archer figures = <b>only known archer representations</b> in Ohio River valley rock art.</p>
    <p><b>1749:</b> Native guides "regarded the rock with superstitious reverence."</p>
    <p><b>Cultural boundary:</b> "Iroquoian people did not do petroglyphs" — petroglyphs disappear as you enter Iroquois territory.</p>
    <p><b>National Register (1984).</b> USFS: one of 75 most significant sites on the Allegheny Wild and Scenic River.</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.hdnArchSites);

L.circleMarker([41.10, -79.70], {radius: 4, color: SAC.rock, fillColor: SAC.rock, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.rock}">🪨 Parkers Landing — The Water Panther</h3>
    <p><b>Location:</b> Allegheny River, Armstrong County, PA</p>
    <p>Spectacular supernatural figures including a remarkable <b>"Water Panther"</b> (Mishipeshu) — powerful being in Algonquian cosmology. Visible only in summer low water.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnArchSites);

L.circleMarker([39.87, -80.03], {radius: 3, color: SAC.rock, fillColor: SAC.rock, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.rock}">🪨 Sugar Grove Petroglyphs</h3>
    <p><b>Location:</b> Greene County, PA. "Picture Rocks." Possibly Monongahela or proto-Shawnee. National Register (1986).</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnArchSites);


// ==================== ROCK ART — ONTARIO ====================

L.circleMarker([44.61, -78.04], {radius: 7, color: SAC.rock, fillColor: SAC.rock, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${SAC.rock}">🪨 Kinomagewapkong — "The Rocks That Teach"</h3>
    <p><b>Location:</b> Petroglyphs Provincial Park, NE of Peterborough, Ontario (National Historic Site)</p>
    <p><b>Age:</b> ~900-1400 AD. Some estimates: 2,000 years.</p>
    <p><b>Scale:</b> <b>~900-1,200 carvings</b> on crystalline limestone 55m × 30m — <b>largest in Ontario</b>, one of the largest in North America.</p>
    <p><b>Artists:</b> Most likely Algonquian (Anishinaabe). Sits on the Algonquian-Iroquoian cultural boundary.</p>
    <p><b>Images:</b> ~300 decipherable forms — shamans, animals, solar symbols, spirit boats, a dominant sun-headed figure.</p>
    <p><b>Why Sacred:</b> Deep crevices lead to the spirit world. An underground stream produces sounds the Anishinaabe interpret as Spirits speaking. The rock itself is the primary reason this site is sacred.</p>
    <p><b>Hidden Until 1954.</b> Photography prohibited for spiritual reasons.</p>
    <p><b>Managed by</b> Ontario Parks with Curve Lake First Nation since 1990.</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.wdtWaterways);


// ==================== ADDITIONAL WENDAT SITES ====================

L.circleMarker([44.48, -79.30], {radius: 3, color: SAC.village, fillColor: SAC.village, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.village}">🏠 Benson Site — Arendarhonon Village</h3>
    <p><b>Location:</b> Trent Valley, Simcoe County, ON</p>
    <p>Earliest in the Arendarhonon sequence: Benson → Sopher → Ball → Warminster/Cahiagué. Manning 2019 Bayesian redating pushed dates back ~50 years.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.wdtVillages);

L.circleMarker([44.52, -79.35], {radius: 3, color: SAC.village, fillColor: SAC.village, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.village}">🏠 Sopher Site — Arendarhonon Village</h3>
    <p><b>Location:</b> Trent Valley, Simcoe County, ON</p>
    <p>Second in the Trent Valley sequence. Part of the Dating Iroquoia project (Manning/Birch/Conger).</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.wdtVillages);


// ==================== NEUTRAL NATION (ATTAWANDARON) ====================

L.polygon([
  [43.50, -80.40], [43.30, -80.20], [43.05, -79.90], [43.00, -79.80],
  [43.05, -79.20], [43.15, -79.10], [43.30, -79.05],
  [43.40, -79.10], [43.60, -79.30], [43.80, -79.50],
  [43.90, -79.80], [44.00, -80.10], [43.80, -80.50],
  [43.60, -80.50]
], {color: SAC.neutral, fillColor: SAC.neutral, fillOpacity: 0.06, weight: 1.5, dashArray: '6,4'})
  .bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
    <h3 style="color:${SAC.neutral}">🗺️ Attawandaron (Neutral Nation) Territory</h3>
    <p>Iroquoian-speaking confederacy on the north shore of Lake Erie from the Niagara Peninsula to the Detroit River.</p>
    <p><b>Name:</b> "Attiwandaron" (Wendat) = "those who speak a slightly different dialect." French: "Neutrals" for staying neutral in Wendat-Haudenosaunee conflicts. Self-name possibly <b>Chonnonton</b>.</p>
    <p><b>Population:</b> ~40,000 in 1626 (Father Daillon); ~12,000 by 1640 (disease); ~40 villages.</p>
    <p><b>Economy:</b> Weapons-dealers of the Eastern Woodlands — controlled flint quarries at Point Abino. Middlemen in north-south trade.</p>
    <p><b>Led by:</b> Tsouharissen ("Child of the Sun"), chief of 28 settlements, died ~1646.</p>
    <p><b>Destruction:</b> After destroying Wendat (1649) and Petun (1649), Haudenosaunee attacked ~1650. By 1651 the Neutral ceased to exist. No distinct descendant population today.</p>
  </div>`, {maxWidth: 420}).addTo(L_groups.ntrTerritory);

// --- Southwold Earthworks ---
L.circleMarker([42.66, -81.20], {radius: 6, color: SAC.neutral, fillColor: SAC.neutral, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${SAC.neutral}">🏛️ Southwold Earthworks — National Historic Site of Canada</h3>
    <p><b>Location:</b> Near Iona, Elgin County, Ontario</p>
    <p><b>Date:</b> AD 1450–1550</p>
    <p><b>Population:</b> 800–900 in up to 24 longhouses</p>
    <p><b>The only Iroquoian village administered by Parks Canada</b> commemorated as a village in itself. A rare, well-preserved double oval ring of earthworks — the <b>only double-palisaded village in southern Ontario</b>.</p>
    <p><b>Unusual:</b> Flat land with no defensive advantages. No evidence of ever being attacked. Little refuse.</p>
    <p><b>Oral Tradition:</b> Local Oneida say this was a <b>ceremonial site</b> — the palisade screened healing and purification rituals. A <b>seasonal place of pilgrimage</b>, not a year-round village.</p>
    <p><b>Archaeology:</b> 1935 and 1976 investigations. Posts 4-5m high driven into ground. National Historic Site since 1923 — one of the first in Canada.</p>
    <p><b>Artifacts</b> from surrounding area dated up to 9,000 years old.</p>
  </div>`, {maxWidth: 420}).addTo(L_groups.ntrVillages);

// --- Lawson Site ---
L.circleMarker([43.03, -81.33], {radius: 6, color: SAC.neutral, fillColor: SAC.neutral, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${SAC.neutral}">🏛️ Lawson Site — Canada's Only Ongoing Pre-Contact Village Excavation</h3>
    <p><b>Location:</b> NW London, Ontario (Museum of Ontario Archaeology)</p>
    <p><b>Date:</b> ~AD 1500–1525</p>
    <p><b>Population:</b> ~2,000 in up to 40 longhouses on 2 hectares</p>
    <p>On a plateau above Snake Creek and Medway River, fortified with multiple palisade rows, entrance maze, and lookout platforms.</p>
    <p><b>The Dig:</b> First excavations 1921-23 by Wintemberg. Then Jury (1930s-40s), then field schools through 2011. <b>Over 500,000 artifacts recovered</b>, 39 longhouses, 30 middens.</p>
    <p><b>Firsts:</b> First archaeological site in Ontario on the Canadian Register of Historic Places (2004). Canada's only ongoing pre-contact village excavation and reconstruction.</p>
    <p><b>Trade:</b> Connected to Atlantic Seaboard, Lake Superior, Ohio, Michigan, Pennsylvania, and Illinois.</p>
    <p><b>Today:</b> Museum of Ontario Archaeology — 2 million+ artifacts, reconstructed longhouses and palisade. Interprets 11,000 years of Ontario history.</p>
  </div>`, {maxWidth: 420}).addTo(L_groups.ntrVillages);

// --- Walker Site ---
L.circleMarker([43.20, -79.90], {radius: 4, color: SAC.neutral, fillColor: SAC.neutral, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.neutral}">🏠 Walker Site — Neutral Confederacy Capital?</h3>
    <p><b>Location:</b> SW of Hamilton, Ontario</p>
    <p>Excavated by William Noble (McMaster), who believed this was the center of the Neutral Confederacy under Souharissen. Noble also documented Neutral villages at Thorold, Grimsby, and Binbrook.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.ntrVillages);

// --- Ivan Elliot Site ---
L.circleMarker([43.42, -80.25], {radius: 5, color: SAC.neutral, fillColor: SAC.neutral, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.neutral}">🏠 Ivan Elliot Site — Largest Neutral Village</h3>
    <p><b>Location:</b> Puslinch, near Morriston, Ontario</p>
    <p><b>Excavated:</b> 1983-85. 13 acres, population <b>~4,000</b>, occupied ~20 years. Nearby McPhee farm: ~1,000 people, ~1500-1530.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.ntrVillages);

// --- Barbican Heights ---
L.circleMarker([43.18, -79.23], {radius: 4, color: SAC.neutral, fillColor: SAC.neutral, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${SAC.neutral}">🏠 Barbican Heights — Neutral Village at Niagara</h3>
    <p><b>Location:</b> St. Catharines, Niagara Peninsula, ON</p>
    <p>~30 longhouses with distinctive tapered ends (different from western Neutral sites). Likely an <b>Ongiara</b> capital. Internal wall divided the village in two.</p>
    <p>Wampum from the south and French metal tools confirmed wide trade networks. 8,000+ animal bones; carbonized beans, corn, plum pits, grape seeds, raspberry seeds.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.ntrVillages);

// --- Grimsby Burial ---
L.circleMarker([43.19, -79.56], {radius: 3, color: SAC.neutral, fillColor: SAC.neutral, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.neutral}">💀 Grimsby Burial Site</h3>
    <p><b>Location:</b> Grimsby, ON (Niagara Escarpment embayment)</p>
    <p>Neutral burial uncovered 1976 during housing development. Excavation by Kenyon closed after 2 months. Studied by Mary Jackes — documented the "mid-seventeenth century collapse."</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.ntrVillages);

// --- Point Abino Quarries ---
L.circleMarker([42.85, -79.10], {radius: 4, color: '#B8860B', fillColor: '#B8860B', fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:#B8860B">⚒️ Point Abino Flint Quarries</h3>
    <p><b>Location:</b> Near Fort Erie, Ontario</p>
    <p>Source of Neutral power — Onondaga Limestone flint quarries. Before contact, these cherts were the primary material for arrowheads, knives, and bifaces across the Eastern Woodlands. The Neutrals were the <b>weapons-dealers of the Eastern Woodlands</b>.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.ntrVillages);


// ==================== ERIE NATION ====================

L.polygon([
  [42.90, -79.00], [42.90, -80.50], [42.50, -80.90],
  [42.00, -80.90], [41.80, -80.50], [41.80, -79.80],
  [42.00, -79.00], [42.40, -78.00], [42.70, -78.40]
], {color: SAC.erie, fillColor: SAC.erie, fillOpacity: 0.06, weight: 1.5, dashArray: '6,4'})
  .bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
    <h3 style="color:${SAC.erie}">🗺️ Erie Nation Territory</h3>
    <p>Iroquoian-speaking people on the south shore of Lake Erie — western NY, NW Pennsylvania, northern Ohio — before 1658.</p>
    <p><b>Known villages:</b> Kentaientonga, Honniasont (Black Minqua), Rigué (Arrigahaga — the leading tribe).</p>
    <p><b>Linguistically</b> closer to Wendat/Huron than to Haudenosaunee.</p>
    <p><b>Destruction:</b> 1653-56 — Erie launched preemptive attack after accepting Wendat refugees. Disadvantaged: few firearms vs. Dutch/English-armed Haudenosaunee. Confederacy destroyed. Survivors adopted by Iroquois or joined Wyandot.</p>
    <p><b>Legacy:</b> Among the most legended of all North American peoples. Almost everything known is second-hand. Only one first-hand European account (English trader, Jamestown, 1632).</p>
  </div>`, {maxWidth: 420}).addTo(L_groups.erieTerritory);

// --- Ripley Site ---
L.circleMarker([42.25, -79.72], {radius: 5, color: SAC.erie, fillColor: SAC.erie, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${SAC.erie}">🏠 Ripley Site — Terminal Erie Village</h3>
    <p><b>Location:</b> Ripley, Chautauqua County, NY</p>
    <p>One of five known terminal (final) Erie village sites, identified by Marian White and William Engelbrecht. All are palisaded, contain European trade goods, and are ~20-25 miles apart — separate polities within a confederacy.</p>
    <p>Each has 3-5 predecessor sites showing population centralizing for defense.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.erieVillages);

// --- Bead Hill ---
L.circleMarker([42.77, -78.61], {radius: 4, color: SAC.erie, fillColor: SAC.erie, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.erie}">🏠 Bead Hill — Eastern Erie Terminal Village</h3>
    <p><b>Location:</b> East Aurora, NY. Easternmost terminal Erie site. Named for glass trade beads recovered.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.erieVillages);

// --- Kleis Site ---
L.circleMarker([42.72, -78.83], {radius: 4, color: SAC.erie, fillColor: SAC.erie, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.erie}">🏠 Kleis Site — Erie Terminal Village</h3>
    <p><b>Location:</b> Hamburg, NY. Large, palisaded.</p>
  </div>`, {maxWidth: 260}).addTo(L_groups.erieVillages);

// --- Silverheels-Highbanks ---
L.circleMarker([42.32, -79.20], {radius: 4, color: SAC.erie, fillColor: SAC.erie, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.erie}">🏠 Silverheels-Highbanks — Erie Terminal Village</h3>
    <p><b>Location:</b> Near Irvine, Cattaraugus Creek Reservation, NY. Later became Seneca territory.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.erieVillages);

// --- East 28th Street Site ---
L.circleMarker([42.11, -80.09], {radius: 4, color: SAC.erie, fillColor: SAC.erie, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.erie}">🏠 East 28th Street — Westernmost Erie Terminal Village</h3>
    <p><b>Location:</b> Erie, PA. The city sits on the former heartland of the Erie Nation that gave it — and the Great Lake — their name.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.erieVillages);

// --- Towner's Mound ---
L.circleMarker([41.15, -81.36], {radius: 3, color: SAC.erie, fillColor: SAC.erie, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SAC.erie}">🔺 Towner's Mound — Last Standing Erie-Associated Mound</h3>
    <p><b>Location:</b> Kent, Ohio</p>
    <p>Haudenosaunee traditions say the Erie defeated an earlier mound-building people. Three associated mounds excavated in PA and Ohio — only Towner's still stands.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.erieVillages);
