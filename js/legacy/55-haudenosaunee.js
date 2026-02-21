// ============================================================
// HAUDENOSAUNEE (IROQUOIS) CONFEDERACY
// "People of the Longhouse" — Six Nations of Central/Western NY
// Mohawk · Oneida · Onondaga · Cayuga · Seneca · Tuscarora
// ============================================================
// DEEP CHRONOLOGY:
//   ~13,000 BP: Paleoindians arrive in post-glacial New York
//     - Dutchess Quarry Cave (Orange Co.) — fluted point + caribou bone
//     - West Athens Hill (Greene Co.) — Clovis quarry/workshop
//     - Glacial Lake Iroquois fills Lake Ontario basin
//   ~10,000 BP: Early Archaic — mobile hunter-gatherer bands
//     - Twin Fields, Port Mobil (Staten Island)
//   ~6,000–3,500 BP: Late Archaic cultures flourish
//     - Lamoka Lake (Schuyler Co.) — type site for Archaic Period
//     - Frontenac Island (Cayuga Lake) — 159+ burials, 5,000+ years
//     - Brewerton sites — Laurentian tradition
//   ~2,500–1,000 BP: Woodland Period
//     - Pottery appears ~3,000 BP
//     - Burial mounds, early horticulture
//   ~1,000–600 BP: OWASCO CULTURE — Proto-Iroquoian
//     - AD 900–1400: Semi-sedentary villages
//     - Roundtop site (Broome Co.) — earliest corn-beans-squash
//     - Palisaded hilltop villages emerge
//     - Rimmed pottery, animal effigy pipes
//     - Owasco are likely direct ancestors of Haudenosaunee
//   ~884–578 BP (1142–1451 CE): FORMATION OF THE CONFEDERACY
//     - Great Law of Peace (Gayanesshagowa)
//     - Solar eclipse Aug 31, 1142 CE (Mann & Fields)
//       over Ganondagan — Seneca join the league
//     - Alternate dates: 1451 CE, possibly 909 CE
//     - Deganawida (Peacemaker) + Hiawatha + Jigonsaseh
//     - Tree of Peace planted at Onondaga Lake
//   ~500–350 BP: Late Prehistoric peak
//     - Large nucleated villages, 1,000–4,500 people
//     - 150+ longhouses at Ganondagan
//     - Elaborate trade networks
//     - 50 sachems govern through consensus
//   Contact Period:
//     1534: Cartier encounters St. Lawrence Iroquoians
//     1609: Champlain attacks Mohawk; Hudson sails river
//     1615: Champlain attacks Oneida/Onondaga
//     1620s–1660s: Beaver Wars — massive territorial expansion
//     1677: Greenhalgh visits all Five Nations
//     1687: Denonville burns Ganondagan
//     1722: Tuscarora join — Six Nations
//     1744: Canassatego's speech urges colonial unity
//     1779: Sullivan-Clinton Campaign devastates homeland
//
// THE LONGHOUSE METAPHOR:
//   Territory = a great longhouse stretching east-west
//   Mohawk (Kanienʼkehá:ka) = "Keepers of the Eastern Door"
//   Oneida (Onyota'a:ka) = "People of the Standing Stone"
//   Onondaga (Onöñda'gega') = "Keepers of the Central Fire"
//   Cayuga (Gayogo̱hó:nǫ') = "People of the Great Swamp"
//   Seneca (Onödowáʼga:) = "Keepers of the Western Door"
//   Tuscarora (Skarù:ręʼ) = "People of the Shirt" (joined 1722)
//
// WATER IS CENTRAL:
//   Rivers as highways: Mohawk River, Susquehanna, Genesee,
//     Seneca River, Oswego River, St. Lawrence
//   Finger Lakes: Seneca, Cayuga, Owasco, Skaneateles,
//     Canandaigua, Keuka, Onondaga Lake
//   Onondaga Lake: birthplace of the Confederacy, sacred site,
//     Superfund site since 1994, ongoing cleanup + land return
//   Great Horned Serpent (underwater) vs Thunderbird (sky) —
//     fundamental cosmological duality played out on water
//
// Sources: Ritchie 1965, 1969; Snow 1994; Engelbrecht 2003;
//   Funk & Kuhn 2003; Mann & Fields 1997; Birch 2015;
//   Hart et al. 2019; Jordan 2008; NY State Museum;
//   Onondaga Nation; Ganondagan State Historic Site;
//   Seneca-Iroquois National Museum; Iroquois Indian Museum;
//   Sacred Land Film Project; NPS; Wikipedia;
//   New York Almanack; Syracuse University
// ============================================================

// Background pane
if (!map.getPane('haudenosauneePane')) {
  map.createPane('haudenosauneePane');
  map.getPane('haudenosauneePane').style.zIndex = 350;
}

const HDN = {
  mohawk:    '#8B0000',  // dark red — Mohawk (People of the Flint)
  oneida:    '#2E8B57',  // sea green — Oneida (Standing Stone)
  onondaga:  '#4B0082',  // indigo — Onondaga (Keepers of the Fire)
  cayuga:    '#B8860B',  // dark goldenrod — Cayuga (Great Swamp)
  seneca:    '#CD3700',  // red-orange — Seneca (Great Hill)
  tuscarora: '#008B8B',  // dark cyan — Tuscarora
  ancient:   '#4682B4',  // steel blue — pre-Iroquoian sites
  owasco:    '#708090',  // slate gray — Owasco proto-Iroquoian
  water:     '#1E90FF',  // dodger blue — waterways
  sacred:    '#DC143C',  // crimson — sacred sites
  village:   '#DEB887',  // burlywood — villages
  lost:      '#B22222',  // firebrick — destroyed/lost sites
  dam:       '#696969',  // dim gray — dams/infrastructure
  rockart:   '#FFD700',  // gold — rock art/petroglyphs
  museum:    '#9370DB',  // medium purple — museums/cultural centers
  confederacy:'#F5DEB3'  // wheat — Confederacy-wide sites
};

// ==================== DEEP TIME: PALEOINDIAN SITES ====================
// These predate all Iroquoian peoples by thousands of years

// --- Dutchess Quarry Cave (~12,000+ BP) ---
L.circleMarker([41.344, -74.332], {radius: 6, color: HDN.ancient, fillColor: HDN.ancient, fillOpacity: 0.85, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.ancient}">⬢ Dutchess Quarry Caves</h3>
    <p><b>Date:</b> ~12,000+ BP (Paleoindian)</p>
    <p><b>Location:</b> Town of Goshen, Orange County, NY</p>
    <p><b>Discovery:</b> 1960s excavations found caves with Paleo-Indian artifacts from the last Ice Age.</p>
    <p><b>Artifacts:</b> A Cumberland-like fluted point found in the same stratum as caribou bone. Additional fluted point fragments (Michaud/Neponset style) from Cave 8. Early Archaic corner-notched points (Amos type, ~11,500–10,300 cal BP). Evidence of 25 mammal, 8 bird, 4 reptile, 2 amphibian, and 3 fish species utilized by early inhabitants.</p>
    <p><b>Significance:</b> The only Paleoindian site in eastern New York with datable subsistence remains. Cave 1 has evidence for the <i>entire period of human occupation</i> of the Northeastern US — Pleistocene through historic. One of the earliest confirmed human habitation sites in the United States.</p>
    <p><b>Landscape:</b> Overlooks the Black Dirt region — a former glacial lake bed and bog. Massive concentration of mastodon fossils found nearby in Orange County. Chert-bearing dolomite bedrock provided raw material for tool-making for thousands of years.</p>
    <p><b>Threat:</b> Active quarry operations on-site. Archaeologists and quarry owners have battled for decades. 20-acre preserve established on most sensitive area. NRHP-listed 1974, expanded 1997. Appraised at $1.27 million (2020).</p>
    <p><b>Sources:</b> Funk et al. 1970; Rennenkampf 1973; Steadman & Funk 1994; NPS; Orange County</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnArchSites);

// --- West Athens Hill (Clovis quarry-workshop) ---
L.circleMarker([42.27, -73.82], {radius: 5, color: HDN.ancient, fillColor: HDN.ancient, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.ancient}">⬢ West Athens Hill</h3>
    <p><b>Date:</b> ~13,000 BP (Clovis era)</p>
    <p><b>Location:</b> Greene County, mid-Hudson Valley, NY</p>
    <p><b>Culture:</b> Paleoindian — quarry and habitation site</p>
    <p><b>Description:</b> A major Paleoindian chert quarry and workshop. Preliminary analysis reveals fluted preforms with possible overshot flake scars (a diagnostic Clovis technique), flat bases, and "rowboat" shaped bifaces. The Normanskill chert sources in Greene County attracted some of the earliest known quarrying and camping in the Northeast.</p>
    <p><b>Significance:</b> Part of a cluster of Paleoindian sites (Kings Road, Swale, West Athens Hill) in Greene County, demonstrating that high-quality stone sources drew the very first human inhabitants of the region. Confirms Clovis-style bifaces in eastern New York.</p>
    <p><b>Sources:</b> Funk 2004 (NY State Museum Bulletin 504); Morrow 2015</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnArchSites);

// --- Lamoka Lake (~4,500 BP — type site for Archaic Period) ---
L.circleMarker([42.395, -77.095], {radius: 6, color: HDN.ancient, fillColor: HDN.ancient, fillOpacity: 0.85, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.ancient}">⬢ Lamoka Lake Site</h3>
    <p><b>Date:</b> ~4,500 BP (~3,500 BCE) — Late Archaic</p>
    <p><b>Location:</b> Schuyler County, NY (near Finger Lakes)</p>
    <p><b>Culture:</b> Lamoka — type site for the Archaic Period of all North American prehistory</p>
    <p><b>Discovery:</b> Arthur Parker (NY State Museum) first learned of the site in 1905. Parker and William Ritchie excavated 1925–1928.</p>
    <p><b>Artifacts:</b> Lamoka projectile points, stone netsinkers, groundstone tools (adzes, hammerstones, pestles, mortars, metates), bone tools (awls, knives, fishhooks), shell beads, pottery, lithic debitage. Large numbers of white-tailed deer, tree squirrel, and passenger pigeon bones.</p>
    <p><b>Features:</b> Storage pits, hearths, floors indicating small houses, human burials.</p>
    <p><b>Significance:</b> One of the most important Archaic Period sites in North America. Established that a hunting-gathering culture existed between Paleo-Indian and pottery-using Woodland periods. The "Lamoka culture" became the definition of the Archaic lifeway in the Northeast.</p>
    <p><b>Sources:</b> Ritchie 1932, 1965; Funk 1976; NRHP</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnArchSites);

// --- Frontenac Island (~5,000+ BP) ---
L.circleMarker([42.84, -76.70], {radius: 6, color: HDN.ancient, fillColor: HDN.ancient, fillOpacity: 0.85, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.ancient}">⬢ Frontenac Island</h3>
    <p><b>Date:</b> ~5,000+ BP — Late Archaic</p>
    <p><b>Location:</b> Cayuga Lake, Union Springs, Cayuga County, NY</p>
    <p><b>Culture:</b> Lamoka + Laurentian fusion — two great Archaic traditions merge</p>
    <p><b>Excavation:</b> William A. Ritchie excavated 159 human burials (1939–1940). The last of four great Archaic sites he investigated in central NY.</p>
    <p><b>Artifacts:</b> Marine shell beads and ornaments (cut conch/whelk shell — traded hundreds of miles from the coast). Copper implements — part of vast exchange networks connecting to Great Lakes copper sources. Both Lamoka-style fishhooks (southern tradition) and Laurentian-style harpoons coexist.</p>
    <p><b>Burials:</b> Both flexed (Lamoka tradition) and extended (Laurentian tradition) burial types. Craniometric measurements revealed both longheaded and roundheaded individuals — evidence of two populations merging into a new society.</p>
    <p><b>Significance:</b> One of the oldest and most significant historic places in New York. Demonstrates the coalescence of two distinct cultural traditions into a new community — a pattern that would repeat throughout Northeast prehistory.</p>
    <p><b>Sources:</b> Ritchie 1944, 1945; Sassaman 2010; Curtin Archaeological Consulting</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnArchSites);

// --- Roundtop Site (Owasco culture) ---
L.circleMarker([42.16, -75.92], {radius: 5, color: HDN.owasco, fillColor: HDN.owasco, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.owasco}">◆ Roundtop Site — Owasco Culture</h3>
    <p><b>Date:</b> ~AD 1100–1300 (700–900 BP)</p>
    <p><b>Location:</b> Broome County, Upper Susquehanna River Valley, NY</p>
    <p><b>Culture:</b> Owasco — Proto-Iroquoian, likely direct ancestors of the Haudenosaunee</p>
    <p><b>Significance:</b> Contains the first evidence of cultivation of beans in the American Northeast, and the oldest example of the corn-beans-squash growth triad (the "Three Sisters") — the agricultural foundation that would sustain all Haudenosaunee civilization.</p>
    <p><b>Settlement:</b> Owasco villages transitioned from round huts to larger rectangular structures, some protected by stockades. This evolution in housing hints at increasing population and hostilities between groups — the very conditions that led to the formation of the Confederacy.</p>
    <p><b>Material culture:</b> Rimmed round-based pottery, animal and human effigy pipes, highly developed religious rites — these artifacts link directly to later Haudenosaunee artistic and ceremonial traditions.</p>
    <p><b>Sources:</b> New York Almanack; Ritchie & Funk 1973; Hart et al.</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnArchSites);

// --- Otstungo (fortified Mohawk village, ~AD 1100–1450) ---
L.circleMarker([42.96, -74.58], {radius: 5, color: HDN.owasco, fillColor: HDN.owasco, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.owasco}">◆ Otstungo — Early Iroquoian Hilltop Village</h3>
    <p><b>Date:</b> ~AD 1100–1450 (transition from Owasco to Mohawk)</p>
    <p><b>Location:</b> Fulton County, Mohawk Valley, NY (on high ground above creek meander)</p>
    <p><b>Culture:</b> Early Iroquoian, transitional to Mohawk</p>
    <p><b>Description:</b> A palisaded hilltop village perched on a ridge protected on three sides by stream-cut cliffs. The Mohawk Iroquois favored these naturally defensible isolated oxbows and ridges — using the same topographic strategy their ancestors adopted 12,000 years after the retreat of the Wisconsinan ice.</p>
    <p><b>Significance:</b> Part of a cluster of early Iroquoian sites in the Mohawk Valley (including Oak Hill No. 1, Jackson-Everson, Galligan, Wormuth) that show the gradual coalescence of Owasco communities into what would become the Mohawk Nation. These sites document the transition from small semi-sedentary hamlets to larger fortified villages.</p>
    <p><b>Sources:</b> NY State Museum; Ritchie & Funk 1973; SAA 2020</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnArchSites);


// ==================== HAUDENOSAUNEE NATION TERRITORIES ====================

// --- MOHAWK (Kanienʼkehá:ka) — "People of the Flint" ---
// "Keepers of the Eastern Door"
L.polygon([
  [43.20, -75.00], [43.15, -74.20], [43.00, -73.80],
  [42.80, -73.70], [42.70, -74.00], [42.70, -74.60],
  [42.80, -75.00], [43.00, -75.10]
], {
  color: HDN.mohawk, fillColor: HDN.mohawk, fillOpacity: 0.06,
  weight: 2, dashArray: '8,4', pane: 'haudenosauneePane', interactive: true
}).bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
  <h3 style="color:${HDN.mohawk}">🔥 Kanienʼkehá:ka (Mohawk)</h3>
  <h4>"People of the Flint" — Keepers of the Eastern Door</h4>
  <table style="width:100%;font-size:11px;border-collapse:collapse;">
    <tr><td style="padding:4px;"><b>Name</b></td><td style="padding:4px;">Kanienʼkehá:ka — "People of the place of flint"</td></tr>
    <tr><td style="padding:4px;"><b>Language</b></td><td style="padding:4px;">Kanienʼkéha (Mohawk), Northern Iroquoian family</td></tr>
    <tr><td style="padding:4px;"><b>Homeland</b></td><td style="padding:4px;">Mohawk River valley, Fulton & Montgomery Counties, NY</td></tr>
    <tr><td style="padding:4px;"><b>Clans</b></td><td style="padding:4px;">Bear, Wolf, Turtle (3 clans — fewest of any Haudenosaunee nation)</td></tr>
    <tr><td style="padding:4px;"><b>Confederacy Role</b></td><td style="padding:4px;">9 sachems on Grand Council. Easternmost nation — first to deal with Europeans, first to receive the Peacemaker's message</td></tr>
    <tr><td style="padding:4px;"><b>Key Waterway</b></td><td style="padding:4px;">Mohawk River (Te-non-an-at-che, "river flowing through the mountains") — major east-west corridor connecting Hudson Valley to Great Lakes via the Oneida Carry</td></tr>
  </table>
  <h4 style="margin-top:10px;">Archaeological History</h4>
  <p>The Mohawk River valley contains one of the densest concentrations of Iroquoian archaeological sites in the Northeast. Dozens of village sites from AD 1350–1700 have been mapped in Fulton and Montgomery Counties, including:</p>
  <p>• <b>Klock site</b> (16th c.) — excavated by NY State Museum 1960s–70s, longhouse post mold patterns revealed</p>
  <p>• <b>Garoga site</b> — large 16th c. village with multiple longhouses</p>
  <p>• <b>Smith-Pagerie site</b> — earliest of the three Caroga Creek villages</p>
  <p>• <b>Otstungo</b> — fortified hilltop village, early Iroquoian transition</p>
  <p>• <b>Caughnawaga / Gandaouage</b> — 17th c. village, Jesuit mission site, Saint Kateri Tekakwitha born here (~1656). 300 people, 12+ longhouses, palisaded. NRHP-listed.</p>
  <h4 style="margin-top:10px;">The Peacemaker's Test</h4>
  <p>In Haudenosaunee oral tradition, the Peacemaker first brought his message of peace to the Mohawk. They tested him by making him climb a tree leaning over a high waterfall, then cutting it down. He survived the fall — and the Mohawk became the first nation to accept the Great Law of Peace.</p>
  <h4 style="margin-top:10px;">Contact & Dispossession</h4>
  <p><b>1609:</b> Henry Hudson and Samuel de Champlain both arrive — Champlain fights alongside Algonquin enemies against Mohawk. <b>1630s:</b> Dutch fur trade transforms economy. <b>1666:</b> French burn Mohawk villages. <b>1690:</b> French and Algonquin massacre at Schenectady. <b>1777:</b> American forces attack — most Mohawk driven north toward Montreal or west to Niagara. <b>1783:</b> Joseph Brant leads Mohawk to Grand River, Ontario. Today: Akwesasne (NY/Ontario/Quebec border), Kahnawake (near Montreal), Six Nations of the Grand River (Ontario), Ganienkeh (NY).</p>
</div>`, {maxWidth: 380}).addTo(L_groups.hdnTerritories);

// --- ONEIDA (Onyota'a:ka) — "People of the Standing Stone" ---
L.polygon([
  [43.40, -75.80], [43.35, -75.20], [43.20, -75.00],
  [42.80, -75.00], [42.75, -75.40], [42.80, -75.90],
  [43.10, -76.00]
], {
  color: HDN.oneida, fillColor: HDN.oneida, fillOpacity: 0.06,
  weight: 2, dashArray: '8,4', pane: 'haudenosauneePane', interactive: true
}).bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
  <h3 style="color:${HDN.oneida}">🪨 Onyota'a:ka (Oneida)</h3>
  <h4>"People of the Standing Stone"</h4>
  <table style="width:100%;font-size:11px;border-collapse:collapse;">
    <tr><td style="padding:4px;"><b>Name</b></td><td style="padding:4px;">Onyota'a:ka — from a distinctive large stone near their principal village</td></tr>
    <tr><td style="padding:4px;"><b>Language</b></td><td style="padding:4px;">Oneida, closely related to Mohawk</td></tr>
    <tr><td style="padding:4px;"><b>Homeland</b></td><td style="padding:4px;">Central NY — Oneida Lake area, headwaters of the Susquehanna and Mohawk</td></tr>
    <tr><td style="padding:4px;"><b>Clans</b></td><td style="padding:4px;">Bear, Wolf, Turtle (9 clans historically)</td></tr>
    <tr><td style="padding:4px;"><b>Confederacy Role</b></td><td style="padding:4px;">9 sachems. "Younger Brothers" alongside the Cayuga. Second nation to accept the Great Peace.</td></tr>
    <tr><td style="padding:4px;"><b>Key Waterway</b></td><td style="padding:4px;">Oneida Lake — connected to Lake Ontario via the Oswego River. The "Oneida Carry" (Great Carry) between Mohawk River and Wood Creek was the critical portage linking the Atlantic watershed to the Great Lakes. This passage was so important it later became the route of the Erie Canal.</td></tr>
    <tr><td style="padding:4px;"><b>Territory</b></td><td style="padding:4px;">Approximately 6 million acres — though only 600 Oneida people held this land by 1784</td></tr>
  </table>
  <h4 style="margin-top:10px;">Revolutionary War</h4>
  <p>The Oneida (along with the Tuscarora) broke with the rest of the Confederacy to support the American cause during the Revolutionary War — a devastating split that permanently fractured the ancient league. Despite their sacrifice, New York systematically stripped their land in the decades that followed.</p>
  <h4 style="margin-top:10px;">Modern Status</h4>
  <p>Oneida Nation of New York (32-acre territory near Verona); Oneida Nation of Wisconsin (moved 1820s–1830s); Oneida of the Thames (Ontario).</p>
</div>`, {maxWidth: 380}).addTo(L_groups.hdnTerritories);

// --- ONONDAGA (Onöñda'gega') — "People of the Hills" ---
// Keepers of the Central Fire — political heart of the Confederacy
L.polygon([
  [43.20, -76.40], [43.10, -75.80], [42.80, -75.70],
  [42.65, -76.00], [42.65, -76.40], [42.90, -76.50],
  [43.10, -76.50]
], {
  color: HDN.onondaga, fillColor: HDN.onondaga, fillOpacity: 0.06,
  weight: 2, dashArray: '8,4', pane: 'haudenosauneePane', interactive: true
}).bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
  <h3 style="color:${HDN.onondaga}">🔥 Onöñda'gega' (Onondaga)</h3>
  <h4>"People of the Hills" — Keepers of the Central Council Fire & Wampum</h4>
  <table style="width:100%;font-size:11px;border-collapse:collapse;">
    <tr><td style="padding:4px;"><b>Name</b></td><td style="padding:4px;">Onöñda'gega' — "People of the hills"</td></tr>
    <tr><td style="padding:4px;"><b>Language</b></td><td style="padding:4px;">Onondaga</td></tr>
    <tr><td style="padding:4px;"><b>Homeland</b></td><td style="padding:4px;">Onondaga County, surrounding Syracuse, NY. Onondaga Lake and its tributaries.</td></tr>
    <tr><td style="padding:4px;"><b>Confederacy Role</b></td><td style="padding:4px;">14 sachems — most of any nation. "Elder Brothers." The Tadodaho (spiritual leader of all Haudenosaunee) is always Onondaga. Central council fire has burned at Onondaga for 900+ years. Wampum keepers. Current Tadodaho: Sid Hill.</td></tr>
    <tr><td style="padding:4px;"><b>Sacred Water</b></td><td style="padding:4px;">Onondaga Lake — birthplace of the Confederacy. Where the Peacemaker planted the Tree of Peace. Natural salt springs. Designated a Superfund site in 1994 due to industrial pollution. Ongoing land return negotiations.</td></tr>
  </table>
  <h4 style="margin-top:10px;">Taming of Tadodaho</h4>
  <p>The most powerful story in Haudenosaunee oral tradition: Tadodaho, the fearsome Onondaga sorcerer-chief depicted with snakes entwined in his hair, was the last holdout against peace. Hiawatha and the Peacemaker used songs and the "Hymn of Peace" to ritually comb the snakes from his hair and straighten his twisted body and mind. The Onondaga were given the role of central firekeeper as compensation — making their territory the political capital of the Confederacy forever.</p>
  <h4 style="margin-top:10px;">Modern Status</h4>
  <p>The Onondaga Nation Territory (7,300 acres just south of Syracuse) is the only Haudenosaunee territory that has never been on a reservation — they have always maintained their sovereignty. The Grand Council still meets at Onondaga. They issue their own passports. The Thanksgiving Address (Ganoñhéñ•nyoñ') opens every gathering.</p>
</div>`, {maxWidth: 400}).addTo(L_groups.hdnTerritories);

// --- CAYUGA (Gayogo̱hó:nǫ') — "People of the Great Swamp" ---
L.polygon([
  [43.00, -76.90], [42.95, -76.40], [42.65, -76.40],
  [42.40, -76.50], [42.35, -76.80], [42.50, -77.00],
  [42.80, -77.00]
], {
  color: HDN.cayuga, fillColor: HDN.cayuga, fillOpacity: 0.06,
  weight: 2, dashArray: '8,4', pane: 'haudenosauneePane', interactive: true
}).bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
  <h3 style="color:${HDN.cayuga}">🦌 Gayogo̱hó:nǫ' (Cayuga)</h3>
  <h4>"People of the Great Swamp" / "People at the Landing"</h4>
  <table style="width:100%;font-size:11px;border-collapse:collapse;">
    <tr><td style="padding:4px;"><b>Name</b></td><td style="padding:4px;">Gayogo̱hó:nǫ' — "people of the marshy area"</td></tr>
    <tr><td style="padding:4px;"><b>Homeland</b></td><td style="padding:4px;">Cayuga Lake and northern Seneca River, central NY</td></tr>
    <tr><td style="padding:4px;"><b>Confederacy Role</b></td><td style="padding:4px;">10 sachems. "Younger Brothers" alongside Oneida.</td></tr>
    <tr><td style="padding:4px;"><b>Key Water</b></td><td style="padding:4px;">Cayuga Lake (40 miles long, 435 ft deep) — second largest Finger Lake. Cayuga Reservation controlled the northern end of Cayuga Lake and the Seneca River, governing all waterborne access to the Finger Lakes.</td></tr>
    <tr><td style="padding:4px;"><b>Archaeology</b></td><td style="padding:4px;">Frontenac Island (Cayuga Lake) — 5,000+ year burial site. Multiple pre-contact and contact-era village sites along the lake.</td></tr>
  </table>
  <h4 style="margin-top:10px;">Sullivan-Clinton Campaign (1779)</h4>
  <p>The Cayuga homeland was devastated by the Sullivan-Clinton Expedition. American forces burned nearly every village, destroyed crops and stored food at the onset of winter. Many Cayuga fled to British Fort Niagara. The Cayuga eventually split between Six Nations of the Grand River (Ontario) and Cayuga Nation of New York (current land claim ongoing).</p>
  <h4 style="margin-top:10px;">Erie Canal Impact</h4>
  <p>The Cayuga-Seneca Canal cut directly through former Cayuga territory. Their control of access to the Finger Lakes was one of the primary reasons New York state pushed to extinguish their land title.</p>
</div>`, {maxWidth: 380}).addTo(L_groups.hdnTerritories);

// --- SENECA (Onödowáʼga:) — "People of the Great Hill" ---
// Keepers of the Western Door — largest territory
L.polygon([
  [43.10, -77.90], [43.00, -77.00], [42.50, -76.90],
  [42.10, -77.00], [42.00, -77.40], [42.00, -78.00],
  [42.30, -78.50], [42.70, -78.30], [43.10, -78.10]
], {
  color: HDN.seneca, fillColor: HDN.seneca, fillOpacity: 0.06,
  weight: 2, dashArray: '8,4', pane: 'haudenosauneePane', interactive: true
}).bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
  <h3 style="color:${HDN.seneca}">🦅 Onödowáʼga: (Seneca)</h3>
  <h4>"People of the Great Hill" — Keepers of the Western Door</h4>
  <table style="width:100%;font-size:11px;border-collapse:collapse;">
    <tr><td style="padding:4px;"><b>Name</b></td><td style="padding:4px;">Onödowáʼga: — "great hill people"</td></tr>
    <tr><td style="padding:4px;"><b>Language</b></td><td style="padding:4px;">Seneca</td></tr>
    <tr><td style="padding:4px;"><b>Homeland</b></td><td style="padding:4px;">Western NY — Genesee River to Lake Erie, Seneca Lake to Allegany plateau</td></tr>
    <tr><td style="padding:4px;"><b>Confederacy Role</b></td><td style="padding:4px;">8 sachems. "Elder Brothers." Largest and most powerful nation — fielded the most warriors. Westernmost — controlled access from the Great Lakes world.</td></tr>
    <tr><td style="padding:4px;"><b>Key Waters</b></td><td style="padding:4px;">Seneca Lake (35 mi long, 618 ft deep — deepest Finger Lake), Canandaigua Lake, Genesee River, Allegany River, and tributaries</td></tr>
    <tr><td style="padding:4px;"><b>Population</b></td><td style="padding:4px;">Largest of the Five Nations. Ganondagan alone had ~4,500 people in 150+ longhouses at its peak.</td></tr>
  </table>
  <h4 style="margin-top:10px;">Ganondagan — Town of Peace</h4>
  <p>The largest Seneca town of the 17th century. Connected to the story of Jigonsaseh (Jikonhsaseh), the "Mother of Nations" — one of three founders of the Confederacy alongside the Peacemaker and Hiawatha. It was in her house at Ganondagan that the crucial discussions about bringing the Onondaga into the Confederacy took place.</p>
  <p>On July 13, 1687, the Marquis de Denonville led 832 French regulars, 900+ Canadian militia, and 400 Indigenous allies to destroy Ganondagan. They burned 1.2 million bushels of stored corn. The town was never reoccupied at that scale.</p>
  <h4 style="margin-top:10px;">The Eclipse and the Founding</h4>
  <p>The Seneca were the last nation to join the Confederacy. The Peacemaker told them to watch the sky for a sign. When the sun turned black — a total solar eclipse — the Seneca accepted the Great Law of Peace. Researchers Mann & Fields (1997) identified this eclipse as August 31, 1142 CE, over Ganondagan/Victor, NY.</p>
  <h4 style="margin-top:10px;">Modern Status</h4>
  <p>Seneca Nation of Indians (Allegany, Cattaraugus, Oil Spring reservations); Tonawanda Band of Seneca (Tonawanda Reservation); Six Nations of the Grand River (Ontario). Seneca-Iroquois National Museum in Salamanca, NY.</p>
</div>`, {maxWidth: 400}).addTo(L_groups.hdnTerritories);

// --- TUSCARORA (Skarù:ręʼ) — "People of the Shirt" (joined 1722) ---
L.polygon([
  [43.20, -78.70], [43.15, -78.40], [43.05, -78.35],
  [42.95, -78.50], [42.95, -78.80], [43.05, -78.85]
], {
  color: HDN.tuscarora, fillColor: HDN.tuscarora, fillOpacity: 0.06,
  weight: 2, dashArray: '8,4', pane: 'haudenosauneePane', interactive: true
}).bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
  <h3 style="color:${HDN.tuscarora}">🌿 Skarù:ręʼ (Tuscarora)</h3>
  <h4>"People of the Shirt" — Sixth Nation (joined 1722)</h4>
  <table style="width:100%;font-size:11px;border-collapse:collapse;">
    <tr><td style="padding:4px;"><b>Original Homeland</b></td><td style="padding:4px;">Eastern North Carolina and Virginia (Neuse & Tar River valleys)</td></tr>
    <tr><td style="padding:4px;"><b>Language</b></td><td style="padding:4px;">Tuscarora — Southern Iroquoian (split from Northern Iroquoian ~400 BC–AD 100)</td></tr>
    <tr><td style="padding:4px;"><b>Migration</b></td><td style="padding:4px;">Forced north after the Tuscarora War (1711–1715) against British colonial forces and mercenaries. Sought refuge among the politically strong Haudenosaunee. Adopted by the Oneida Nation.</td></tr>
    <tr><td style="padding:4px;"><b>NY Homeland</b></td><td style="padding:4px;">Tuscarora Reservation near Niagara Falls, Niagara County, NY (since 1797)</td></tr>
    <tr><td style="padding:4px;"><b>Confederacy Role</b></td><td style="padding:4px;">Joined 1722, making Five Nations → Six Nations. Do not have sachems on the Grand Council but participate through the Oneida.</td></tr>
  </table>
  <h4 style="margin-top:10px;">Deep Connection</h4>
  <p>The Tuscarora's linguistic relationship proves that Iroquoian peoples once ranged from the Great Lakes to the Carolinas. Their northward migration reunited a family separated for perhaps 2,000+ years.</p>
</div>`, {maxWidth: 380}).addTo(L_groups.hdnTerritories);


// ==================== SACRED WATER SITES ====================

// --- Onondaga Lake — Birthplace of the Confederacy ---
L.circleMarker([43.07, -76.18], {radius: 8, color: HDN.sacred, fillColor: HDN.sacred, fillOpacity: 0.8, weight: 3})
  .bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
    <h3 style="color:${HDN.sacred}">🌊 Onondaga Lake — Birthplace of Democracy</h3>
    <p><b>Location:</b> Syracuse, Onondaga County, NY (43.07°N, 76.18°W)</p>
    <p><b>Size:</b> 4.6 miles long × 1 mile wide, max depth 63 ft</p>
    <p><b>Sacred Significance:</b> This is where the Peacemaker planted the Great Tree of Peace and the warring nations buried their weapons beneath it. The Hiawatha Belt was created here — its design became the Flag of the Haudenosaunee. The Grand Council fire has burned at Onondaga for 900+ years.</p>
    <p><b>The Haudenosaunee View:</b> "We speak in terms of responsibilities with respect to water, not in terms of water rights… The Haudenosaunee have a deep respect for the waters of the Earth." — Joyce Tekahnawiiaks King, Mohawk Turtle Clan, Haudenosaunee Environmental Task Force</p>
    <p><b>Pollution History:</b> Natural salt springs attracted Europeans in 1654. By 1884, Solvay Process Company dumped industrial waste directly into the lake. By 1940, swimming was banned. Mercury, chlor-alkali waste, industrial solvents devastated the ecosystem. Became the most polluted lake in America.</p>
    <p><b>Superfund:</b> Designated EPA Superfund site in 1994. Major cleanup underway — dredging contaminated sediments, restoring wetlands. Swimming now permitted in northern section. But Onondaga leaders say cleanup is insufficient.</p>
    <p><b>Land Return:</b> Since 2010, Onondaga County has sought to transfer lakeshore land back to the Onondaga Nation. As of 2025, negotiations are stalled over tax issues and a Christopher Columbus statue nearby. Tadodaho Sid Hill: "The lake is a living relative to our people. We have ceremonies which need to be practiced on its shores."</p>
    <p><b>Sources:</b> Onondaga Nation; Sacred Land Film Project; Wikipedia; AP News (2025)</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.hdnSacredWater);

// --- Ganondagan / Boughton Hill —  where the eclipse fell ---
L.circleMarker([42.97, -77.44], {radius: 7, color: HDN.sacred, fillColor: HDN.sacred, fillOpacity: 0.8, weight: 3})
  .bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
    <h3 style="color:${HDN.sacred}">☀️ Ganondagan — "Town of Peace"</h3>
    <p><b>Location:</b> Victor, Ontario County, NY (Boughton Hill)</p>
    <p><b>Date:</b> 17th century peak; connected to founding ~1142 CE</p>
    <p><b>Description:</b> Largest Seneca town — at its height over 150 bark buildings housing an estimated 4,500 people. National Historic Landmark. 569 acres.</p>
    <p><b>The Founding Eclipse:</b> Haudenosaunee oral tradition records that when the Seneca were deliberating whether to join the Confederacy, the Peacemaker told them to look to the sky for a sign. A total solar eclipse darkened the sky over this exact location — August 31, 1142 CE (Mann & Fields 1997). The Seneca accepted the Great Law of Peace.</p>
    <p><b>Jigonsaseh:</b> Seneca oral tradition connects Ganondagan to Jigonsaseh, the "Mother of Nations" — one of three founders of the Confederacy. It was in her house here that the plan to bring the Onondaga into the Confederacy was devised.</p>
    <p><b>Destruction:</b> July 13, 1687 — Marquis de Denonville led 2,100+ troops to destroy the town. They burned the village and 1.2 million bushels of stored corn to cripple the Seneca's role in the fur trade.</p>
    <p><b>Today:</b> Ganondagan State Historic Site — the only NYS Historic Site dedicated to a Native American theme. Full-size Seneca bark longhouse replica (1998). Seneca Art & Culture Center (2015, 17,300 sq ft). Iroquois White Corn Project revives heirloom variety. 7.6 miles of interpretive trails.</p>
    <p><b>Sources:</b> Ganondagan SHS; NYS Parks; Wikipedia; CBC News</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.hdnSacredWater);

// --- Seneca Lake ---
L.polyline([
  [42.78, -76.93], [42.70, -76.92], [42.55, -76.90],
  [42.45, -76.88], [42.35, -76.87]
], {color: HDN.water, weight: 3, opacity: 0.7, dashArray: '5,5'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.water}">💧 Seneca Lake</h3>
    <p><b>Name:</b> Named for the Seneca Nation</p>
    <p><b>Size:</b> 35 miles long, 618 feet deep — deepest of the Finger Lakes</p>
    <p><b>Significance:</b> Heart of Seneca territory. White Springs site (c. 1688–1715) and Townley-Read site (c. 1715–1754) located near its north end — consecutively occupied Seneca villages.</p>
    <p><b>Archaeology:</b> Cornell University digital collection documents artifacts from these sites in collaboration with Seneca-Iroquois National Museum.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnSacredWater);

// --- Cayuga Lake ---
L.polyline([
  [42.93, -76.72], [42.85, -76.72], [42.70, -76.70],
  [42.55, -76.68], [42.45, -76.53]
], {color: HDN.water, weight: 3, opacity: 0.7, dashArray: '5,5'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.water}">💧 Cayuga Lake</h3>
    <p><b>Name:</b> Named for the Cayuga Nation ("people at the landing")</p>
    <p><b>Size:</b> 40 miles long, 435 feet deep — second largest Finger Lake</p>
    <p><b>Archaeology:</b> Frontenac Island — 5,000+ year burial site in the lake. Cayuga villages lined both shores.</p>
    <p><b>Control:</b> Cayuga Reservation included the northern end of the lake and the Seneca River — controlling all waterborne access to the Finger Lakes. This strategic position was a major reason NY state targeted Cayuga land.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnSacredWater);

// --- Mohawk River ---
L.polyline([
  [42.77, -73.70], [42.82, -73.95], [42.88, -74.20],
  [42.93, -74.60], [42.98, -74.90], [43.02, -75.20],
  [43.08, -75.50], [43.10, -75.45]
], {color: HDN.water, weight: 3, opacity: 0.7, dashArray: '5,5'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.water}">💧 Te-non-an-at-che — Mohawk River</h3>
    <p><b>Meaning:</b> "River flowing through the mountains"</p>
    <p><b>Length:</b> ~149 miles — largest tributary of the Hudson River</p>
    <p><b>Significance:</b> The central artery of Mohawk territory and the critical east-west corridor connecting the Hudson Valley to the Great Lakes. For thousands of years it served as a highway for trade, diplomacy, and warfare. The "Oneida Carry" at its headwaters was one of the most strategically important portages in North America.</p>
    <p><b>Helderberg Escarpment:</b> Nearby chert quarries provided raw material for stone tools from Paleoindian times through the contact period. Old Indian trails connected Mohawk villages to these quarries.</p>
    <p><b>Colonial Impact:</b> The river's strategic importance made it the route of the Erie Canal, which was built directly through Haudenosaunee territory, dispossessing the very nations whose waterway network made the route possible.</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnSacredWater);

// --- Genesee River ---
L.polyline([
  [42.06, -77.93], [42.20, -77.82], [42.44, -77.75],
  [42.60, -77.72], [42.82, -77.61], [43.00, -77.62],
  [43.16, -77.61], [43.26, -77.61]
], {color: HDN.water, weight: 2.5, opacity: 0.6, dashArray: '5,5'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.water}">💧 Genesee River — "Beautiful Valley"</h3>
    <p><b>Length:</b> ~157 miles, flowing north to Lake Ontario at Rochester</p>
    <p><b>Significance:</b> Western boundary of the Seneca heartland. Letchworth State Park ("Grand Canyon of the East") along its gorge includes the Mary Jemison home — the "White Woman of the Genesee" who was adopted by the Seneca in 1758 and chose to remain with them for life.</p>
    <p><b>Sullivan-Clinton:</b> American forces under General Sullivan followed the Genesee corridor destroying Seneca and Cayuga villages in 1779.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnSacredWater);


// ==================== KEY ARCHAEOLOGICAL VILLAGE SITES ====================

// --- Caughnawaga (Mohawk village & Kateri Tekakwitha site) ---
L.circleMarker([42.955, -74.37], {radius: 5, color: HDN.mohawk, fillColor: HDN.village, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.mohawk}">🏠 Caughnawaga — Mohawk Village</h3>
    <p><b>Date:</b> c. 1666–1693</p>
    <p><b>Location:</b> West of Fonda, Montgomery County, NY (north bank of Mohawk River, near natural spring)</p>
    <p><b>Population:</b> ~300 people, 12+ longhouses, palisaded</p>
    <p><b>Jesuit Mission:</b> Mission established ~1668–1679. Father Jacques Bruyas. Taught some Mohawk to read and write in French.</p>
    <p><b>Saint Kateri Tekakwitha:</b> Born here ~1656 — canonized 2012 as the first Native North American saint in the Catholic Church. Daughter of a Mohawk chief and an Algonquin Christian mother.</p>
    <p><b>Status:</b> Open to the public. Outlines of 12 longhouses and stockade staked out. Mohawk-Caughnawaga Museum on site. NRHP-listed 1973.</p>
    <p><b>Sources:</b> Wikipedia; NY State Museum; Dean Snow</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnVillages);

// --- Klock site (16th c. Mohawk) ---
L.circleMarker([43.00, -74.52], {radius: 4, color: HDN.mohawk, fillColor: HDN.village, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.mohawk}">🏠 Klock Site — 16th Century Mohawk Village</h3>
    <p><b>Date:</b> Mid-16th century AD</p>
    <p><b>Location:</b> Caroga Creek drainage, Fulton/Montgomery County, NY</p>
    <p><b>Excavation:</b> NY State Museum, 1960s–1970, under Dr. Robert Funk</p>
    <p><b>Features:</b> Longhouse post mold patterns revealed through careful hand excavation. Rimmed pottery, bone tools, evidence of palisade. Located on cliff overlooking Caroga Creek.</p>
    <p><b>Significance:</b> One of three 16th-century Mohawk sites (with Garoga and Smith-Pagerie) that were once thought to represent a single community's sequential relocations — recent social network analysis of pottery motifs suggests they may actually represent different communities.</p>
    <p><b>Sources:</b> Funk & Kuhn 2003 (NY State Museum Bulletin 503)</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnVillages);

// --- Garoga site (16th c. Mohawk) ---
L.circleMarker([43.02, -74.55], {radius: 4, color: HDN.mohawk, fillColor: HDN.village, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.mohawk}">🏠 Garoga Site — 16th Century Mohawk Village</h3>
    <p><b>Date:</b> Late 16th century AD</p>
    <p><b>Location:</b> Caroga Creek drainage, within 5 km of Klock and Smith-Pagerie</p>
    <p><b>Description:</b> Large village with multiple longhouses. Excavated by NY State Museum. Represents the Mohawk pattern of nucleated villages on hilltops protected by stream meanders.</p>
    <p><b>Sources:</b> Ritchie & Funk 1973; Funk & Kuhn 2003</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnVillages);

// --- White Springs (Seneca, c. 1688–1715) ---
L.circleMarker([42.80, -76.95], {radius: 4, color: HDN.seneca, fillColor: HDN.village, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.seneca}">🏠 White Springs — Seneca Village</h3>
    <p><b>Date:</b> c. 1688–1715 (after Ganondagan's destruction)</p>
    <p><b>Location:</b> North end of Seneca Lake, Ontario County, NY</p>
    <p><b>Description:</b> Post-Ganondagan Seneca settlement. Part of Cornell University digital collection in collaboration with Seneca-Iroquois National Museum.</p>
    <p><b>Settlement Pattern:</b> After Denonville's 1687 attack destroyed the large nucleated towns, Seneca communities shifted from two large core sites to a network of smaller, more dispersed villages — a strategic adaptation to colonial military threat.</p>
    <p><b>Sources:</b> Cornell University / Seneca-Iroquois National Museum; Jordan 2008</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnVillages);

// --- Townley-Read (Seneca, c. 1715–1754) ---
L.circleMarker([42.82, -76.97], {radius: 4, color: HDN.seneca, fillColor: HDN.village, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.seneca}">🏠 Townley-Read — Seneca Village</h3>
    <p><b>Date:</b> c. 1715–1754</p>
    <p><b>Location:</b> North end of Seneca Lake, Ontario County, NY</p>
    <p><b>Description:</b> Succeeded the White Springs site. Features a "short longhouse" — evidence that Seneca architecture was adapting during the 18th century as communities became smaller and more dispersed. Excavated 18th-century Seneca Iroquois domestic architecture.</p>
    <p><b>Sources:</b> Jordan 2008; Cornell University</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnVillages);

// --- Indian Castle (Mohawk, 18th c.) ---
L.circleMarker([43.02, -74.72], {radius: 4, color: HDN.mohawk, fillColor: HDN.village, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.mohawk}">🏠 Indian Castle — Upper Mohawk Castle</h3>
    <p><b>Date:</b> 18th century</p>
    <p><b>Location:</b> Herkimer County, Mohawk Valley, NY</p>
    <p><b>Description:</b> One of the last major Mohawk settlements in the valley before the Revolutionary War forced most Mohawk north and west. Church built by Sir William Johnson still stands.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnVillages);


// ==================== MUSEUMS & CULTURAL CENTERS ====================

// --- Ganondagan Seneca Art & Culture Center ---
L.circleMarker([42.975, -77.435], {radius: 5, color: HDN.museum, fillColor: HDN.museum, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.museum}">🏛️ Ganondagan Seneca Art & Culture Center</h3>
    <p><b>Location:</b> 7000 County Rd 41, Victor, NY 14564</p>
    <p><b>Opened:</b> 2015 — 17,300 sq ft interactive facility</p>
    <p><b>Features:</b> Multimedia exhibits, Creation Story film theater, changing gallery, bark longhouse replica (1998), Iroquois White Corn Project, 7.6 miles of interpretive trails</p>
    <p><b>Trails:</b> Trail of Peace (0.8 mi — oral tradition + Confederacy founding), Earth is Our Mother Trail (ethnobotany), Granary Trail at Fort Hill (Denonville campaign)</p>
    <p>Open Wed–Sat, 9 AM – 4 PM. (585) 924-5848</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnMuseums);

// --- Seneca-Iroquois National Museum ---
L.circleMarker([42.08, -78.71], {radius: 5, color: HDN.museum, fillColor: HDN.museum, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.museum}">🏛️ Seneca-Iroquois National Museum</h3>
    <p><b>Location:</b> Onöhsagwë:dé Cultural Center, 794 Broad St, Salamanca, NY 14779</p>
    <p><b>Description:</b> Designed and operated by the Seneca Nation of Indians. Exhibits on clans, history, material culture. Largest display of Iroquois artifacts in the state at Rochester Museum (related collection).</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnMuseums);

// --- Iroquois Indian Museum ---
L.circleMarker([42.69, -74.39], {radius: 5, color: HDN.museum, fillColor: HDN.museum, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.museum}">🏛️ Iroquois Indian Museum</h3>
    <p><b>Location:</b> Howes Cave, Schoharie County, NY</p>
    <p><b>Description:</b> Educational institution dedicated to fostering understanding of Iroquois culture. Specializes in ethnohistory of the Schoharie Mohawk with library of original documents from the 1600s–1700s. World-class contemporary Iroquois art collection. Archaeological department discovered the seat of the pre-Revolutionary Schoharie Mohawks.</p>
    <p><b>Collections:</b> Jim Peck collection — donated entirety of Schoharie County artifacts. Enders and Cider Mill site materials.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnMuseums);

// --- Skä•noñh Center — Great Law of Peace Center ---
L.circleMarker([43.08, -76.18], {radius: 5, color: HDN.museum, fillColor: HDN.museum, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.museum}">🏛️ Skä•noñh Center — Great Law of Peace Center</h3>
    <p><b>Location:</b> Eastern shore of Onondaga Lake, Liverpool, NY</p>
    <p><b>Name:</b> Skä•noñh is an Onondaga welcoming greeting meaning "Peace and Wellness"</p>
    <p><b>Description:</b> Formerly "Sainte Marie among the Iroquois." Repurposed in 2013 as a Haudenosaunee Heritage Center operated by the Onondaga Historical Association. Tells the Haudenosaunee side of the story — from the founding of the Confederacy to the colonial encounter — directly on the sacred shore of Onondaga Lake.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnMuseums);

// --- NY State Museum (Albany) ---
L.circleMarker([42.66, -73.76], {radius: 4, color: HDN.museum, fillColor: HDN.museum, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.museum}">🏛️ New York State Museum</h3>
    <p><b>Location:</b> 222 Madison Ave, Albany, NY</p>
    <p><b>Exhibits:</b> Native life over the last 12,000 years. Life-size Mohawk-Iroquois longhouse — the most accurate reconstruction ever built in a museum. Dioramas of Iroquois corn fields. Contemporary beadwork. Massive research collections from Ritchie, Funk, and Kuhn excavations.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnMuseums);


// ==================== SULLIVAN-CLINTON CAMPAIGN (1779) — LOST SITES ====================
// Washington ordered the "total destruction and devastation" of Haudenosaunee settlements

// --- Sullivan-Clinton overview marker ---
L.circleMarker([42.45, -76.80], {radius: 6, color: HDN.lost, fillColor: HDN.lost, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
    <h3 style="color:${HDN.lost}">🔥 Sullivan-Clinton Campaign (1779)</h3>
    <h4>"The Total Destruction & Devastation of Their Settlements"</h4>
    <p>In 1779, George Washington ordered Generals John Sullivan, James Clinton, and Goose Van Schaick to launch a three-pronged attack against the Onondaga, Cayuga, and Seneca nations. Washington's orders were explicit: not merely to overpower, but to annihilate.</p>
    <p><b>Scale of Destruction:</b></p>
    <p>• <b>40+ towns and villages</b> burned to the ground</p>
    <p>• <b>160,000+ bushels of corn</b> destroyed</p>
    <p>• Orchards of hundreds of fruit trees girdled and cut down</p>
    <p>• Stored food supplies systematically destroyed at the onset of winter</p>
    <p>• Thousands of Haudenosaunee left without food or shelter</p>
    <p><b>Aftermath:</b> Many fled to British Fort Niagara. The winter of 1779–1780 was devastating — many died of cold, hunger, and disease. Although many Haudenosaunee returned after the 1783 Treaty of Paris, substantial numbers remained in British Canada. The centuries-old Confederacy suffered a permanent geographical split.</p>
    <p><b>Legacy:</b> The Seneca called Washington "Town Destroyer" (Hanödaga:nyas). The campaign followed the same waterway routes — Mohawk River, Susquehanna, Finger Lakes — that the Haudenosaunee had traveled for millennia. The soldiers' reports of the rich farmland and orchards they destroyed directly fueled postwar settler migration into the region.</p>
    <p><b>Sources:</b> NPS Sullivan-Clinton documentation; New York Almanack</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.hdnLost);

// --- Catherine's Town (Seneca, destroyed 1779) ---
L.circleMarker([42.38, -76.85], {radius: 4, color: HDN.lost, fillColor: HDN.lost, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.lost}">🔥 Catherine's Town (Seneca) — Destroyed 1779</h3>
    <p><b>Location:</b> Head of Seneca Lake, near Watkins Glen</p>
    <p><b>Named for:</b> Queen Catherine Montour, a prominent Seneca/French mixed-heritage leader</p>
    <p><b>Destroyed:</b> Sullivan's army, September 1779. Village burned, crops destroyed.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnLost);

// --- Kanadasaga (Seneca capital, destroyed 1779) ---
L.circleMarker([42.77, -76.97], {radius: 5, color: HDN.lost, fillColor: HDN.lost, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.lost}">🔥 Kanadasaga — Seneca Capital, Destroyed 1779</h3>
    <p><b>Location:</b> Present-day Geneva, Ontario County, NY (north end of Seneca Lake)</p>
    <p><b>Description:</b> One of the principal Seneca towns in the 18th century. Major settlement at the strategic north end of Seneca Lake.</p>
    <p><b>Destroyed:</b> Sullivan's army, September 1779. Town and surrounding crops burned. 70+ structures destroyed.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnLost);

// --- Onondaga villages (destroyed by Van Schaick, 1779) ---
L.circleMarker([42.97, -76.12], {radius: 4, color: HDN.lost, fillColor: HDN.lost, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.lost}">🔥 Onondaga Villages — Destroyed 1779</h3>
    <p><b>Location:</b> Onondaga Valley, south of Syracuse</p>
    <p><b>Destroyed by:</b> General Goose Van Schaick's force, April 1779. The first prong of the Sullivan-Clinton Campaign targeted the Onondaga — the political heart of the Confederacy.</p>
    <p><b>Significance:</b> The destruction of the central council fire's immediate surroundings was a deliberate attempt to destroy the Confederacy's political infrastructure.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnLost);


// ==================== ERIE CANAL — COLONIAL WATER INFRASTRUCTURE ====================

// --- Oneida Carry / Great Carry ---
L.circleMarker([43.21, -75.46], {radius: 5, color: HDN.dam, fillColor: HDN.dam, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN.dam}">⛏️ The Oneida Carry ("Great Carry")</h3>
    <p><b>Location:</b> Present-day Rome, Oneida County, NY</p>
    <p><b>Description:</b> The critical portage between the Mohawk River (Atlantic drainage) and Wood Creek (Great Lakes drainage via Oneida Lake → Oswego River → Lake Ontario). For thousands of years, this was the key passage connecting the worlds of the Atlantic coast and the interior.</p>
    <p><b>Haudenosaunee Use:</b> Essential corridor for Haudenosaunee commerce, diplomacy, and warfare. The Oneida Nation controlled this carry — a major source of their political leverage.</p>
    <p><b>Colonial Seizure:</b> Became the route of the Erie Canal. Oneida territory was crossed by the Erie Canal running east-west and by the Black River Canal running north and the Chenango Canal running south. The same Indigenous water knowledge that created these routes was used to dispossess the people who maintained them.</p>
    <p><b>Sources:</b> New York Almanack; NPS Erie Canalway</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnLost);
