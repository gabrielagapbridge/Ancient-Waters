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
L.circleMarker([47.42, -120.31], {radius: 5, color: PLT.ancient, fillColor: PLT.ancient, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.ancient}">⬢ East Wenatchee Clovis Cache</h3>
    <p><b>Date:</b> ~11,300 BCE (Clovis period)</p>
    <p><b>Culture:</b> Clovis — earliest known inhabitants of the Columbia Plateau</p>
    <p><b>Location:</b> Apple orchard near East Wenatchee, Douglas County, WA</p>
    <p><b>Discovery:</b> Found 1987 by orchard owner Rich Roberts digging an irrigation pond. WSU excavated 1988–1990 under Dr. Peter Mehringer.</p>
    <p><b>Artifacts:</b> 14 Clovis fluted projectile points — some of the largest ever found (up to 23 cm / 9 inches), made from high-quality chalcedony and agate. 10 bone foreshafts (beveled rod-shaped objects — among the rarest Clovis artifacts known). Scrapers and a crescent-shaped tool.</p>
    <p><b>Significance:</b> One of fewer than 20 Clovis caches in all of North America. Size and craftsmanship suggest ritual caching — a ceremonial offering or emergency reserve by big-game hunters pursuing mammoth, bison, and horse.</p>
    <p><b>Landscape:</b> The catastrophic Ice Age Floods (Missoula Floods, ~15,000–13,000 BCE) had reshaped Eastern WA just ~2,000 years prior, scouring the Channeled Scablands with floods carrying 10× the flow of all rivers on Earth.</p>
    <p><b>Status:</b> Private land. Artifacts at WA State Historical Society, Tacoma. National Register of Historic Places.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Mehringer 1988, WSU; Gramly 1993, "The Richey Clovis Cache"; Handbook of North American Indians Vol. 12: Plateau</p>
  </div>`).addTo(L_groups.plateauArchSites);

// --- Marmes Rockshelter (~11,000+ years — INUNDATED 1969) ---
L.circleMarker([46.54, -118.14], {radius: 4, color: PLT.lost, fillColor: PLT.ancient, fillOpacity: 0.8, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.lost}">⬢ Marmes Rockshelter (INUNDATED)</h3>
    <p><b>Site:</b> 45FR50</p>
    <p><b>Date:</b> 11,000+ years of continuous habitation</p>
    <p><b>Culture:</b> Windust Phase (type site) through all subsequent Plateau periods</p>
    <p><b>Location:</b> Palouse River canyon at its confluence with the Snake River, Franklin County, WA. Rockshelter at the base of a 100-foot basalt cliff.</p>
    <p><b>Discovery:</b> Excavated from 1962 by Dr. Richard Daugherty (WSU). In 1965, geologist Roald Fryxell found human skeletal remains in the lowest levels — among the oldest in the Americas (~10,000 BP).</p>
    <p><b>Windust Phase (named here):</b> Earliest documented Plateau culture (10,600–7,100 BCE). Stemmed projectile points ("Western Stemmed Tradition"), bison hunting, fishing, plant gathering. Traded for ocean shells — long-distance exchange at this early date.</p>
    <p><b>Key finds:</b> Human cremation burials (~10,000 BP); bone needles/awls; thousands of stone tools spanning every era; faunal sequence from Ice Age megafauna to modern species; freshwater mussels; seasonal occupation evidence.</p>
    <p><b>The race against the dam:</b> 1968: Congress authorized $1.5M emergency excavation. President Johnson ordered Army Corps to build protective cofferdam. It leaked. Waters reached the site Feb. 1969.</p>
    <p style="color:${PLT.lost};font-weight:bold;">LOST: Inundated Feb. 1969 by Lower Monumental Dam. Cofferdam failed. The most important archaeological site in the Pacific Northwest — 11,000 years of human record — lies beneath the reservoir.</p>
    <p><b>Legacy:</b> The loss directly contributed to passage of the Archaeological Resources Protection Act (1979).</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Rice 1972, WSU Report No. 50; Hicks (ed.) 2004, "Marmes Rockshelter" (WSU Press); Daugherty 1962; Sheppard et al. 1987, American Antiquity 52(1)</p>
  </div>`).addTo(L_groups.plateauArchSites);

// --- Lind Coulee (~8,000 BCE) ---
L.circleMarker([46.93, -119.03], {radius: 4, color: PLT.ancient, fillColor: PLT.ancient, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.ancient}">⬢ Lind Coulee (45GR97)</h3>
    <p><b>Date:</b> ~8,500–5,500 BCE</p>
    <p><b>Culture:</b> Late Windust / Early Cascade Phase transition</p>
    <p><b>Location:</b> East-central WA, Grant County, along an ancient coulee carved by Missoula Floods</p>
    <p><b>Discovery:</b> Excavated by Richard Daugherty (WSU) 1951–53. Found in wall of irrigation canal cut through ancient lake sediments.</p>
    <p><b>Artifacts:</b> Leaf-shaped and stemmed points, scrapers, bone tools. Found with Bison antiquus (extinct giant bison), pronghorn, rabbit, ground squirrel, freshwater mussels. Notably absent: salmon bones — salmon use developed later (~5,000 BCE), making Lind Coulee a window into the pre-salmon economy.</p>
    <p><b>Significance:</b> Documents the shift from big-game hunting to broader foraging as climate warmed and megafauna vanished. Tools evolve from large fluted Clovis points to smaller stemmed forms for faster game.</p>
    <p><b>Environment:</b> The coulee held a shallow lake/marsh surrounded by grassland — very different from today's sagebrush steppe.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Daugherty 1956, Proc. American Philosophical Society Vol. 100 No. 3; Handbook Vol. 12: Plateau</p>
  </div>`).addTo(L_groups.plateauArchSites);

// --- Kennewick Man / The Ancient One (~8,500 BP) ---
L.circleMarker([46.22, -119.24], {radius: 4, color: PLT.ancient, fillColor: '#FFD700', fillOpacity: 0.9, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.ancient}">★ The Ancient One / Kennewick Man</h3>
    <p><b>Date:</b> ~8,400–8,690 cal. years before present (Cascade Phase era)</p>
    <p><b>Discovery:</b> July 28, 1996. College students Will Thomas and David Deacy, wading to watch hydroplane races at Columbia Park, Kennewick. Thomas's foot struck a skull in ~50 cm of water. They took it to police in a plastic bucket. Coroner Floyd Johnson called forensic anthropologist James Chatters.</p>
    <p><b>The skeleton:</b> 350+ bones — one of the most complete ancient skeletons in the Americas. Male, 40–50 years, ~5'7"–5'9". Right-handed (right arm larger from spearfishing). A Cascade-type stone point embedded in right hip — healed over, meaning he survived. Additional healed injuries: rib fracture, skull depressions. Arthritis in elbow, knees, vertebrae.</p>
    <p><b>The 20-year controversy:</b> Chatters described the skull as "Caucasoid" and produced a reconstruction resembling Patrick Stewart. Five tribes (Colville, Umatilla, Yakama, Wanapum, Nez Perce) sought reburial under NAGPRA. Eight scientists sued. Battle reached the 9th Circuit. Remains held at Burke Museum 1998–2017.</p>
    <p><b>DNA resolution (2015):</b> Rasmussen & Willerslev (Univ. Copenhagen) extracted DNA from a hand bone. Published in Nature: genetically closer to modern Native Americans than any other population, with affinity to Columbia Plateau tribes. Colville Tribe provided 24 DNA samples. Confirmed by Univ. Chicago (2016). Chatters himself changed his mind.</p>
    <p><b>Reburial:</b> Congress passed WIIN Act (Dec. 2016). Feb. 18, 2017: 200+ tribal members conducted private burial at undisclosed Plateau location — ending a 20-year struggle.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Rasmussen et al. 2015, Nature 523:455–458; Burke Museum; HistoryLink.org #5664 & #21141; Chatters 2001, "Ancient Encounters"; Thomas 2000, "Skull Wars"</p>
  </div>`).addTo(L_groups.plateauArchSites);

// --- Alpowa Site / Chief Timothy State Park (~4,000+ years) ---
L.circleMarker([46.40, -117.10], {radius: 4, color: PLT.ancient, fillColor: PLT.ancient, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.ancient}">⬢ Alpowa / Chief Timothy Site</h3>
    <p><b>Date:</b> ~2,000 BCE onward</p>
    <p><b>Culture:</b> Ancestral Nez Perce (Sahaptin speakers)</p>
    <p><b>Location:</b> Confluence of Alpowa Creek and Snake River, Asotin County. Now Chief Timothy State Park on an island in Lower Granite Reservoir.</p>
    <p><b>Significance:</b> Long-occupied site showing the transition to storage-dependent salmon fishing. Pit house depressions visible on surface. Intensive salmon, camas root, and game use.</p>
    <p><b>Named for:</b> Chief Timothy (Tamootsin, ~1800–1891), Nez Perce leader of the Alpowai band. Baptized by missionary Henry Spalding 1839. Maintained peace during Nez Perce conflicts. Ferried Col. Steptoe's troops across the Snake (1858).</p>
    <p><b>Status:</b> State park. Some materials impacted by Lower Granite Dam reservoir (1975).</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Browman & Munsell 1969, American Antiquity 34:3; WA State Parks; Handbook Vol. 12</p>
  </div>`).addTo(L_groups.plateauArchSites);

// --- Kettle Falls — Ancient fishing & trading center ---
L.circleMarker([48.61, -118.06], {radius: 5, color: PLT.colville, fillColor: PLT.sacred, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.sacred}">★ Kettle Falls — Shonitkwu</h3>
    <p><b>Date:</b> 9,000+ years of documented use</p>
    <p><b>Tribes:</b> Colville Confederated (all 11 bands), Spokane, Kalispel, Coeur d'Alene, Okanogan, Lakes, San Poil, Nez Perce, and many others</p>
    <p><b>Location:</b> Columbia River, Stevens County, WA. Falls dropped 20+ feet through a narrow basalt canyon.</p>
    <p><b>Fishery:</b> Second-largest salmon fishery on the Columbia (after Celilo). Tribes built wooden platforms and large funnel-shaped traps called "kettles" (hence the English name). At peak runs thousands of fish caught daily. A "Salmon Chief" directed fishing — the first salmon each season was ceremonially shared before general fishing began.</p>
    <p><b>Trading center:</b> Peoples from hundreds of miles gathered June–Oct. Traded: dried salmon, camas, bitterroot, berries, buffalo robes from Plains, dentalium shells from coast, obsidian from Oregon. Gambling, horse racing, and diplomacy accompanied the fishing.</p>
    <p><b>Archaeology:</b> Excavations 1938–40 revealed 9,000+ years of deposits: stone tools, bone implements, fire-cracked rock, fish bones.</p>
    <p><b>Contact:</b> Fort Colville (HBC) established 1826 — named for London director Andrew Colvile who never visited. St. Paul's Mission 1845.</p>
    <p style="color:${PLT.lost};font-weight:bold;">LOST: Inundated by Grand Coulee Dam (1942). Blocked ALL salmon above it — no fish ladder ever built. Lake Roosevelt drowned the falls under 90+ feet. Colville Tribes never fully compensated.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Chance & Chance 1982, "Kettle Falls: 1971/1974" (Univ. Idaho Report No. 84); Colville Confederated Tribes; Columbia River Inter-Tribal Fish Commission; Handbook Vol. 12</p>
  </div>`).addTo(L_groups.plateauArchSites);

// --- Celilo Falls / The Dalles (INUNDATED 1957) ---
L.circleMarker([45.63, -121.13], {radius: 4, color: PLT.lost, fillColor: PLT.sacred, fillOpacity: 0.8, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.lost}">★ Celilo Falls — Wyam ("Echo of Falling Water") — DESTROYED 1957</h3>
    <p><b>Date:</b> 10,000–15,000 years of continuous occupation</p>
    <p><b>Tribes:</b> Wishram (north/WA), Wasco (south/OR), Yakama, Umatilla, Warm Springs, Nez Perce, Wanapum, and dozens more</p>
    <p><b>Location:</b> Columbia River at The Dalles, WA/OR border. River narrowed from over a mile wide to just 140 feet, plunging through cascading falls.</p>
    <p><b>Fishery:</b> Greatest salmon fishery in the world. 15–20 million salmon annually. Fishers on wooden scaffolds above thundering water used long dip nets for 30–60 lb salmon. Fishing platforms were inherited property passed through families for generations.</p>
    <p><b>Trading center:</b> One of the largest in pre-contact North America — comparable to Cahokia. Coastal tribes brought shells, whale oil; Plains tribes brought buffalo hides; Plateau peoples brought camas, salmon; Great Basin peoples brought obsidian. 3,000–5,000 gathered at peak. Chinook Jargon likely originated here.</p>
    <p><b>Rock art:</b> Dalles–Deschutes area: densest concentration in North America. 100+ sites, some with 1,000+ motifs. Iconic "Spedis Owl" originated here.</p>
    <p><b>Lewis & Clark (1805):</b> Documented the bustling village. Clark estimated 10,000 lbs dried fish at one village.</p>
    <p style="color:${PLT.lost};font-weight:bold;">DESTROYED: March 10, 1957. The Dalles Dam floodgates closed. Within hours the falls were silenced forever. Flora Thompson (Wasco elder): "Everything is gone." One-time compensation: ~$27/acre of fishing rights sustained for 10,000 years.</p>
    <p><b>Today:</b> Celilo Park marks the site. Falls invisible beneath reservoir. 2007: tribes held 50th-anniversary mourning. Some leaders advocate dam removal.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Ulrich 1999, "Empty Nets"; Barber 2005, "Death of Celilo Falls"; Keyser 1992; Cressman 1960; Lewis & Clark Journals; Columbia River Inter-Tribal Fish Commission</p>
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
  interactive: true
}).bindPopup(`<div class="popup-content" style="max-width:400px;">
  <h3 style="color:${PLT.yakama};margin:0 0 4px;">YAKAMA NATION</h3>
  <div style="font-size:11px;color:#aaa;margin-bottom:8px;">14 Confederated Tribes & Bands of the Yakama Nation</div>
  <p><b>Self-name:</b> Mamachatpam (people of the Yakima River)</p>
  <p><b>Language:</b> Ichishkíin Sínwit (Sahaptin) — Plateau Penutian family. Closely related to Nez Perce. 15 dialects in 3 groups. Linguistic evidence places Sahaptin speakers in the Columbia Basin for 2,000–5,000+ years.</p>
  <p><b>Territory:</b> 12+ million acres ceded in 1855 Treaty — from the Cascade crest east to the Columbia River, Yakima River watershed, Klickitat River, and tributaries. Columbia River lowlands to alpine peaks. Sacred mountain: Pahto (Mt. Adams, 12,281 ft).</p>
  <p><b>Population:</b> 60–70 villages of 50–200 people each (~7,000 total at contact). Today: 10,000+ enrolled members.</p>
  <p><b>14 bands:</b> Kah-milt-pah, Klickitat, Klinquit, Kow-was-say-ee, Li-ay-was, Oche-chotes, Palouse, Pisquose, Se-ap-cat, Shyiks, Skin-pah, Wenatshapam, Wish-ham, Yakama.</p>
  <p><b>Seasonal round:</b> Spring: root-digging on prairies (camas, bitterroot, lomatium). Summer: salmon fishing at falls and rapids. Fall: berry-picking in mountains (huckleberry, serviceberry). Winter: sheltered river valleys in mat-covered longhouses (up to 100+ ft long).</p>
  <p><b>Horses:</b> Arrived ~1730. The Yakama became expert breeders, maintaining large herds on the bunchgrass prairies. Horses transformed trade, warfare, and seasonal movement — enabling buffalo hunting trips to Montana.</p>
  <p><b>Treaty & Wars:</b> June 9, 1855 Treaty at Walla Walla council with Gov. Isaac Stevens ceded 12+ million acres, reserving 1.3 million. Chief Kamiakin reluctantly signed, then led the Yakima Wars (1855–1858) after treaty violations. Gold miners trespassed; Indian agent Andrew Bolon was killed. Col. George Wright's brutal campaign ended resistance — he slaughtered 800+ Yakama horses and hanged chiefs. Kamiakin escaped to British Columbia.</p>
  <p><b>Archaeological depth:</b> 12,000+ years of evidence in Yakama territory. The Yakima River valley has been continuously inhabited since the end of the last Ice Age.</p>
  <p><b>Reservation:</b> 1.3 million acres (Yakima County) — one of the largest in the US. Topock, WA is the capital.</p>
  <p><b>Spelling:</b> The tribe spells its name "Yakama" (restored to original Sahaptin); the city, county, and river retain "Yakima" (anglicized).</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Schuster 1998, "Yakima and Neighboring Groups" in Handbook Vol. 12: Plateau; Hunn 1990, "Nch'i-Wana: The Big River"; Beavert & Hargus 2009; Yakama Nation Cultural Center; Trafzer 1997, "Death Stalks the Yakama"</p>
</div>`, {maxWidth:420}).addTo(L_groups.yakamaTerr);

L.marker([46.60, -120.50], {
  icon: L.divIcon({
    className: '', iconSize: [220, 40], iconAnchor: [110, 20],
    html: `<div style="text-align:center;color:${PLT.yakama};font-size:14px;font-weight:bold;font-family:Georgia,serif;text-shadow:1px 1px 4px rgba(0,0,0,0.6);letter-spacing:2px;opacity:0.55;">YAKAMA NATION</div><div style="text-align:center;color:${PLT.yakama};font-size:9px;font-family:Georgia,serif;opacity:0.45;">14 Confederated Tribes & Bands</div>`
  }), interactive: false
}).addTo(L_groups.yakamaTerr);

// Pahto / Mount Adams — Sacred Mountain
L.circleMarker([46.2024, -121.4909], {radius: 4, color: PLT.sacred, fillColor: PLT.sacred, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.sacred}">★ Pahto (Mount Adams) — Sacred Mountain</h3>
    <p><b>Elevation:</b> 12,281 ft — 2nd highest peak in Washington</p>
    <p><b>Tribe:</b> Yakama Nation — "Pahto" is the Yakama name</p>
    <p><b>Significance:</b> Sacred mountain of the Yakama people. Largest of the Cascade volcanoes by volume. Partly within the Yakama Reservation. The Yakama fought as recently as 2021 (Ninth Circuit) to retain jurisdiction over "Tract D," lands SW of the mountain promised in the 1855 Treaty — 166 years to fully acknowledge.</p>
    <p><b>Cultural role:</b> Snowmelt from Pahto flows through canyons, forests, meadows and valleys to provide water — "gifts to our people." The mountain appears on the Yakama Nation flag.</p>
  </div>`).addTo(L_groups.yakamaTerr);

// Union Gap — Main Yakama village site
L.circleMarker([46.55, -120.47], {radius: 4, color: PLT.yakama, fillColor: PLT.village, fillOpacity: 0.8, weight: 2})
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
  interactive: true
}).bindPopup(`<div class="popup-content" style="max-width:400px;">
  <h3 style="color:${PLT.spokane};margin:0 0 4px;">SPOKANE TRIBE</h3>
  <div style="font-size:11px;color:#aaa;margin-bottom:8px;">Sqeliz — "Children of the Sun"</div>
  <p><b>Language:</b> Interior Salish (Spokane-Kalispel-Flathead branch). Salish languages expanded south into the Plateau ~4,000–5,000 years ago from British Columbia.</p>
  <p><b>Territory:</b> ~3 million acres in northeastern Washington centered on the Spokane River system — from the Columbia River east to Lake Coeur d'Alene, Spokane River and all tributaries.</p>
  <p><b>Population:</b> 1,400–2,500 at contact. Today: ~2,900 enrolled members.</p>
  <p><b>Three divisions:</b> Upper Spokane (Sntʔtʔúlixʷ — "People of the Falls," at Spokane Falls), Middle Spokane (Snxʷme̓nʔey — "People of the Steelhead River," downstream), Lower Spokane (Scqesciłni — "People of Little Falls," at the Little Falls rapids). Each had distinct territory but shared language, culture, and intermarried.</p>
  <p><b>Subsistence:</b> Salmon (caught at Spokane Falls and rapids with spears, nets, and weirs), roots (camas, bitterroot — women dug at prairies around Spokane), berries, deer, elk. After horses (~1730), buffalo hunting trips to Montana plains became common.</p>
  <p><b>Habitation:</b> 9,000+ years confirmed at Spokane Falls. Semi-subterranean pit houses in winter, tule mat lodges in summer. Villages along the Spokane River at rapids and fishing sites.</p>
  <p><b>Contact:</b> Spokane House (1810) — first permanent non-Indian settlement in Washington — built at the Spokane/Little Spokane confluence. Lewis & Clark did not enter Spokane territory (1805–06) but the Spokane heard of them.</p>
  <p><b>Conflicts:</b> Battle of Spokane Plains (Sept. 1858) — Col. George Wright defeated combined Spokane, Coeur d'Alene, and Palouse forces. Wright executed chiefs and slaughtered 800+ horses as punishment. The Spokane signed no formal treaty but were confined to a reservation (1881).</p>
  <p><b>Reservation:</b> 159,000 acres in Stevens County, WA (est. 1881). Wellpinit is the tribal headquarters.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Ross 1998, "Spokane" in Handbook Vol. 12; Ruby & Brown 1970, "The Spokane Indians"; Spokane Tribe of Indians (spokanetribe.com); HistoryLink.org</p>
</div>`, {maxWidth:420}).addTo(L_groups.spokaneTerr);

L.marker([47.80, -117.40], {
  icon: L.divIcon({
    className: '', iconSize: [200, 40], iconAnchor: [100, 20],
    html: `<div style="text-align:center;color:${PLT.spokane};font-size:13px;font-weight:bold;font-family:Georgia,serif;text-shadow:1px 1px 4px rgba(0,0,0,0.6);letter-spacing:2px;opacity:0.55;">SPOKANE</div><div style="text-align:center;color:${PLT.spokane};font-size:9px;font-family:Georgia,serif;opacity:0.45;">Sqeliz — "Children of the Sun"</div>`
  }), interactive: false
}).addTo(L_groups.spokaneTerr);

// Spokane Falls — Center of Spokane world
L.circleMarker([47.66, -117.43], {radius: 5, color: PLT.sacred, fillColor: PLT.sacred, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.sacred}">★ Spokane Falls — Heart of the Spokane People</h3>
    <p><b>Tribe:</b> Spokane — Upper Spokane (Sntʔtʔúlixʷ, "People of the Falls")</p>
    <p><b>Date:</b> 9,000+ years of habitation confirmed archaeologically</p>
    <p><b>Significance:</b> Sacred falls at the center of Spokane territory. The falls were a vital salmon fishing site for millennia. The Spokane people's name may derive from a chief, Illim-Spokanee ("Son of the Sun"), first encountered by fur traders.</p>
    <p><b>Contact:</b> Spokane House established 1810 by North West Company at Spokane/Little Spokane River confluence — first permanent non-Indian settlement in Washington State.</p>
    <p><b>Today:</b> The city of Spokane grew directly on top of the Spokane people's most sacred site.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Spokane Tribe (spokanetribe.com); Ross 1998, Handbook Vol. 12; Ruby &amp; Brown 1970, "The Spokane Indians"</p>
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
  interactive: true
}).bindPopup(`<div class="popup-content" style="max-width:400px;">
  <h3 style="color:${PLT.palouse};margin:0 0 4px;">PALOUSE</h3>
  <div style="font-size:11px;color:#aaa;margin-bottom:8px;">Palúuspam — "People of the Palouse"</div>
  <p><b>Language:</b> Sahaptin (closely related to Yakama and Nez Perce). The rolling bunchgrass hills of southeastern Washington — the "Palouse" landscape — take their name from this people.</p>
  <p><b>Territory:</b> Palouse River, lower Snake River, and the rolling prairies of SE Washington. The rich bunchgrass provided ideal horse pasture.</p>
  <p><b>The Appaloosa:</b> After horses arrived (~1730), the Palouse became among the most expert horse breeders in North America. They developed the spotted Appaloosa breed — named after the Palouse River ("a Palouse horse" → "Appaloosa"). They selectively bred for the distinctive spotted coat, endurance, and surefootedness. By the early 1800s, some families owned herds of 1,000+ horses.</p>
  <p><b>Subsistence:</b> Salmon fishing at Snake River rapids, camas and root gathering on prairies, hunting deer and elk in surrounding hills. After horses, buffalo hunting trips to Montana.</p>
  <p><b>Treaty refusal:</b> The Palouse refused to sign the 1855 Yakama Treaty and refused the Nez Perce Treaty. They refused to move to any reservation. Some joined the Yakima Wars (1855–58). After defeat, most were forced onto various reservations — Yakama, Colville, or Nez Perce. The Palouse never received their own reservation.</p>
  <p><b>Chief Tilcoax:</b> Led Palouse resistance during the Yakima Wars. Refused to surrender and continued resistance after other chiefs made peace.</p>
  <p><b>Today:</b> Palouse descendants are enrolled in the Yakama Nation, Colville Confederated Tribes, and Nez Perce Tribe. The Appaloosa is the state horse of Idaho.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Trafzer & Scheuerman 1986, "Renegade Tribe: The Palouse Indians"; Haines 1955, "The Appaloosa Horse"; Handbook Vol. 12; Appaloosa Museum, Moscow, ID</p>
</div>`, {maxWidth:420}).addTo(L_groups.palouseTerr);

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
}).bindPopup(`<div class="popup-content" style="max-width:400px;">
  <h3 style="color:${PLT.wanapum};margin:0 0 4px;">WANAPUM</h3>
  <div style="font-size:11px;color:#aaa;margin-bottom:8px;">Wánapam — "River People"</div>
  <p><b>Language:</b> Sahaptin (Plateau Penutian). Wánapam literally means "river people" — their entire identity was defined by the Columbia.</p>
  <p><b>Territory:</b> Columbia River from Pasco (Snake River mouth) upstream ~50 miles to Priest Rapids — a stretch of river that was their entire world.</p>
  <p><b>Population:</b> 500–800 at contact. Today: ~60 still live near Priest Rapids.</p>
  <p><b>Principal village:</b> P'ná, 2 miles downstream of present Priest Rapids Dam. Anthropologist Verne Ray documented at least 4 village sites at the dam location (1936).</p>
  <p><b>Rock art:</b> The Wanapum carved 300+ petroglyphs into basalt cliffs along the Columbia — one of the densest concentrations in the Northwest. Twin human figures with rayed arcs, mountain sheep, sun designs, abstract patterns. Most were drowned by Wanapum Dam (1963); 60 salvaged to Ginkgo State Park.</p>
  <p><b>Dreamer Religion:</b> The prophet Smohalla (~1815–1895), a Wanapum, founded the Washane (Dreamer) Religion. He taught the earth was the mother of all people and could not be sold or divided. His followers prayed, danced, and dreamed rather than fighting. His teaching: "My young men shall never work. Men who work cannot dream, and wisdom comes to us in dreams."</p>
  <p><b>No treaty, no land:</b> The Wanapum never fought settlers and never signed a treaty. Because they never went to war or negotiated, they were never assigned a reservation. They have no federally recognized land rights to this day. When Wanapum Dam was built (1963), Grant County PUD gave them permission to live on a small area near the dam — essentially guests on their own ancestral land.</p>
  <p><b>Wanapum Heritage Center:</b> In 2015, Grant County PUD opened the Wanapum Heritage Center at Priest Rapids Dam — a cultural center designed with Wanapum input to tell their story and house cultural collections.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Click 1986, "Smohalla and the Dreamer Religion"; Relander 1956, "Drummers and Dreamers"; Ray 1936; Wanapum Heritage Center; Handbook Vol. 12</p>
</div>`, {maxWidth:420}).addTo(L_groups.wanapumTerr);

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
  interactive: true
}).bindPopup(`<div class="popup-content" style="max-width:400px;">
  <h3 style="color:${PLT.colville};margin:0 0 4px;">COLVILLE CONFEDERATED TRIBES</h3>
  <div style="font-size:11px;color:#aaa;margin-bottom:8px;">11 Bands — Confederation est. April 9, 1872 by Executive Order of President Grant</div>
  <p><b>11 bands:</b> Wenatchee (Pisquose), Entiat, Chelan, Methow, Okanogan (Sinkaietk), Nespelem, San Poil (Snpəlčqéns), Lakes (Sinixt/Arrow Lakes), Moses-Columbia, Palouse, and Chief Joseph Band of Nez Perce.</p>
  <p><b>Languages:</b> Interior Salish (most bands), Sahaptin (Palouse, Nez Perce), and Okanagan (Okanogan). The confederation brings together peoples who spoke different languages but shared a Plateau culture.</p>
  <p><b>Territory:</b> Combined pre-contact territories of the 11 bands spanned most of north-central Washington from the Cascades east to the Columbia/Spokane area and north to the Canadian border — millions of acres.</p>
  <p><b>Formation:</b> Not a traditional political unit — the confederation was created by the U.S. government. In 1872, President Grant's Executive Order established the Colville Reservation for bands that had not signed treaties or had been displaced. Over decades, various bands were relocated there. The Chief Joseph Band of Nez Perce was forcibly settled on the reservation after their 1877 flight for freedom ended in surrender in Montana.</p>
  <p><b>Kettle Falls (Shonitkwu):</b> The great salmon fishery and trading center was the shared heart of many Colville bands for 9,000+ years. Inundated by Grand Coulee Dam (1942), which blocked all salmon above it — devastating the economic and spiritual foundation of these peoples.</p>
  <p><b>Grand Coulee Dam:</b> Built 1933–1942 on Colville Reservation land. The tribe received no compensation until 1994 — 52 years later — when Congress authorized annual payments. The tribe estimates total losses at over $3 billion.</p>
  <p><b>Lakes (Sinixt):</b> The Canadian government declared the Sinixt/Arrow Lakes people "extinct" in 1956. They are very much alive as part of the Colville Confederation. In 2021, the Canadian Supreme Court ruled the Sinixt have Aboriginal rights in British Columbia.</p>
  <p><b>Today:</b> 1.4 million-acre reservation in Okanogan and Ferry Counties. ~9,400 enrolled members. Tribal headquarters in Nespelem, WA.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Colville Confederated Tribes (colvilletribes.com); Chance & Chance 1982; Kennedy & Bouchard 1998, Handbook Vol. 12; NPS; Canadian Supreme Court R. v. Desautel (2021)</p>
</div>`, {maxWidth:420}).addTo(L_groups.colvilleTerr);

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
  interactive: true
}).bindPopup(`<div class="popup-content" style="max-width:400px;">
  <h3 style="color:${PLT.coeur};margin:0 0 4px;">COEUR D'ALENE</h3>
  <div style="font-size:11px;color:#aaa;margin-bottom:8px;">Schitsu'umsh — "The Ones Found Here" or "Those Who Are Found Here"</div>
  <p><b>Language:</b> Interior Salish (Southern branch). Related to Spokane, Kalispel, and Flathead.</p>
  <p><b>Territory:</b> 4–5 million acres centered on Lake Coeur d'Alene and the Coeur d'Alene River system in northern Idaho, extending into eastern Washington and western Montana. From the Bitterroot Range west to the Palouse prairie.</p>
  <p><b>Population:</b> ~5,000 at contact in ~35 semi-permanent winter villages. Today: ~2,500 enrolled members.</p>
  <p><b>Name origin:</b> French Canadian fur traders named them "Cœur d'Alêne" — "Heart of an Awl" (meaning sharp-hearted or shrewd) — acknowledging their skill and toughness in trade negotiations. The Coeur d'Alene drove famously hard bargains.</p>
  <p><b>Subsistence:</b> Salmon and steelhead (Coeur d'Alene, St. Joe, and Spokane Rivers), water potato (wapato) and camas from lake marshes, bitterroot from prairies, deer and elk from mountains. Lake Coeur d'Alene provided year-round fish and waterfowl.</p>
  <p><b>Sacred sites:</b> Steptoe Butte — 500-million-year-old quartzite rising 1,000+ ft above the Palouse prairie. Vision quest site. Named by the U.S. military after Lt. Col. Steptoe, whom the Coeur d'Alene defeated at the Battle of Pine Creek (May 1858).</p>
  <p><b>Coeur d'Alene War (1858):</b> Alongside Spokane and Palouse warriors, the Coeur d'Alene defeated Steptoe's column near present-day Rosalia, WA. Col. Wright's retaliatory campaign broke resistance — he hanged leaders and destroyed food stores and horses.</p>
  <p><b>Cataldo Mission:</b> The oldest standing building in Idaho (built 1850–53). Jesuit missionaries and Coeur d'Alene people built the church together using traditional post-and-beam construction with wattle-and-daub walls. Now a state park.</p>
  <p><b>Environmental justice:</b> The Coeur d'Alene basin was devastated by silver/lead mining (Bunker Hill mine, 1885–1981). Millions of tons of heavy metals contaminated Lake Coeur d'Alene and 200+ miles of waterways. The tribe has led cleanup efforts and won a landmark $780 million settlement (2011) — one of the largest environmental settlements in U.S. history.</p>
  <p><b>Today:</b> 345,000-acre reservation south of Lake Coeur d'Alene. Tribal headquarters in Plummer, ID.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Palmer 1998, "Coeur d'Alene" in Handbook Vol. 12; Frey 2001, "Landscape Traveled by Coyote and Crane"; Coeur d'Alene Tribe (cdatribe-nsn.gov); NPS Cataldo Mission; EPA Bunker Hill Superfund Site</p>
</div>`, {maxWidth:420}).addTo(L_groups.coeurTerr);

L.marker([47.40, -116.80], {
  icon: L.divIcon({
    className: '', iconSize: [200, 40], iconAnchor: [100, 20],
    html: `<div style="text-align:center;color:${PLT.coeur};font-size:12px;font-weight:bold;font-family:Georgia,serif;text-shadow:1px 1px 4px rgba(0,0,0,0.6);letter-spacing:2px;opacity:0.55;">COEUR D'ALENE</div><div style="text-align:center;color:${PLT.coeur};font-size:9px;font-family:Georgia,serif;opacity:0.4;">Schitsu'umsh — "The Ones Found Here"</div>`
  }), interactive: false
}).addTo(L_groups.coeurTerr);

// Steptoe Butte — Sacred Site
L.circleMarker([47.04, -117.30], {radius: 5, color: PLT.sacred, fillColor: PLT.sacred, fillOpacity: 0.7, weight: 2})
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
  interactive: true
}).bindPopup(`<div class="popup-content" style="max-width:400px;">
  <h3 style="color:${PLT.kalispel};margin:0 0 4px;">KALISPEL TRIBE</h3>
  <div style="font-size:11px;color:#aaa;margin-bottom:8px;">Qlispé — "People of the Pend Oreille" (also Pend d'Oreilles)</div>
  <p><b>Language:</b> Interior Salish (Kalispel-Spokane-Flathead branch). Very closely related to Spokane. The name "Pend Oreille" (French: "ear pendant") was given by fur traders who noted their shell earrings.</p>
  <p><b>Territory:</b> ~200 miles along the Pend Oreille and Clark Fork Rivers, from NE Washington through northern Idaho to western Montana. Lake Pend Oreille (Idaho's largest lake) was central to their territory.</p>
  <p><b>Two divisions:</b> Upper Kalispel (moved to the Flathead Reservation in Montana with the Salish and Kootenai) and Lower Kalispel (remained on the Pend Oreille River in NE Washington — refused to leave their homeland).</p>
  <p><b>Population:</b> ~1,000–1,600 at contact. Lower Kalispel today: ~470 enrolled members.</p>
  <p><b>Subsistence:</b> Salmon and trout from Pend Oreille River and Lake Pend Oreille, camas from lakeside meadows, bitterroot, deer, elk, bear. Large bark canoes navigated the lake and rivers. After horses, buffalo hunting trips across the Rockies to Montana.</p>
  <p><b>Archaeology:</b> 9,000+ year old encampment documented near Priest River, ID — among the oldest habitation sites in the Pend Oreille region.</p>
  <p><b>Bear Paw Rock:</b> Sacred petroglyphs memorializing a genesis story of the Kalispel people, near Denton Slough. Now partially flooded by Albeni Falls Dam (1955).</p>
  <p><b>Resistance to removal:</b> Unlike most tribes, the Lower Kalispel stubbornly refused to join the Flathead Reservation when pressured throughout the 1850s–1900s. They remained on their river. Finally received a small reservation (4,600 acres) in 1914 — one of the last reservations created in the U.S.</p>
  <p><b>Dam impacts:</b> Albeni Falls Dam (1955) on the Pend Oreille River flooded ~2,000 acres of Kalispel land including Indian Meadows (powwow grounds) and Bear Paw Rock. Box Canyon Dam (1955) further altered river flows.</p>
  <p><b>Today:</b> 4,600-acre reservation in Pend Oreille County, WA, near Usk. The tribe operates Northern Quest Resort & Casino in Spokane (major employer). Headquarters in Usk, WA.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Lahren 1998, "Kalispel" in Handbook Vol. 12; Kalispel Tribe of Indians (kalispeltribe.com); Ruby & Brown 1981, "The Kalispel"; NPS</p>
</div>`, {maxWidth:420}).addTo(L_groups.kalispelTerr);

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
  interactive: true
}).bindPopup(`<div class="popup-content" style="max-width:400px;">
  <h3 style="color:${PLT.nezperce};margin:0 0 4px;">NEZ PERCE</h3>
  <div style="font-size:11px;color:#aaa;margin-bottom:8px;">Nimiipuu — "The Real People" or "We the People"</div>
  <p><b>Language:</b> Nez Perce (Nimipuutímt) — Sahaptian family. Related to but distinct from Sahaptin languages (Yakama, Palouse). Sahaptian speakers have occupied the Columbia Plateau for 2,000–5,000+ years.</p>
  <p><b>Territory:</b> 13+ million acres across central Idaho, SE Washington, and NE Oregon. The Clearwater, Salmon, and Snake River basins — including Hells Canyon (deepest gorge in North America, deeper than the Grand Canyon). From the Bitterroot Mountains west to the Blue Mountains.</p>
  <p><b>Population:</b> ~6,000 at contact. Today: ~3,500 enrolled members.</p>
  <p><b>Name:</b> "Nez Percé" (French: "pierced nose") was applied by French traders, possibly from a misunderstanding — the Nez Perce did NOT typically pierce their noses (neighboring Chinookan peoples did). The name stuck despite being wrong.</p>
  <p><b>Subsistence:</b> Salmon (Clearwater, Salmon, Snake Rivers — massive annual runs), camas root (dug from Camas Prairie and Weippe Prairie — Lewis & Clark survived on Nez Perce camas in 1805), bitterroot, huckleberries. Deer, elk, mountain sheep. After horses: buffalo hunting trips across the Rockies.</p>
  <p><b>Horse culture:</b> The Nez Perce were among the finest horse breeders in the Americas. Along with the Palouse, they developed the Appaloosa breed through selective breeding for spotted coat, speed, endurance, and temperament. Their horse herds numbered in the thousands — the foundation of their wealth and military power.</p>
  <p><b>Lewis & Clark (1805):</b> The expedition stumbled out of the Bitterroot Mountains starving in September 1805. The Nez Perce, led by Chief Twisted Hair, fed them, nursed them back to health, taught them to make dugout canoes, and cared for their horses over winter. Without Nez Perce generosity, the expedition would have ended in the Bitterroots. The Nez Perce asked for nothing in return.</p>
  <p><b>The 1863 "Steal Treaty":</b> After gold was discovered on Nez Perce land (1860), the government forced a new treaty reducing the reservation from 7.5 million to 750,000 acres — a 90% reduction. Non-treaty bands (including Chief Joseph's Wallowa band) refused to sign. This split the Nez Perce into "treaty" and "non-treaty" factions.</p>
  <p><b>Chief Joseph's Flight (1877):</b> When the Army ordered all non-treaty Nez Perce onto the reduced reservation, ~750 people (including women, children, and elderly) fled toward Canada under Chiefs Joseph (Hin-mah-too-yah-lat-kekt — "Thunder Rolling Down the Mountains"), Looking Glass, and White Bird. They fought a running 1,170-mile retreat across Idaho, Wyoming, and Montana — defeating or eluding the U.S. Army in multiple battles. Captured just 40 miles from Canada at Bear Paw (Oct. 1877). Joseph's surrender speech: "Hear me, my chiefs! I am tired; my heart is sick and sad. From where the sun now stands, I will fight no more forever."</p>
  <p><b>Exile:</b> Joseph's band was exiled to Indian Territory (Oklahoma) for 8 years. Many died of malaria and heartbreak. Joseph never returned to the Wallowa Valley. He was sent to the Colville Reservation, where he died in 1904 — "of a broken heart," his doctor said.</p>
  <p><b>Today:</b> Nez Perce Reservation: 750,000 acres in north-central Idaho. Tribal headquarters in Lapwai, ID. Nez Perce National Historical Park spans 38 sites across 4 states telling the complete Nez Perce story.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Walker 1998, "Nez Perce" in Handbook Vol. 12; Josephy 1965, "The Nez Perce Indians and the Opening of the Northwest"; Hampton 1994, "Children of Grace: The Nez Perce War of 1877"; NPS Nez Perce NHP; Nez Perce Tribe (nezperce.org)</p>
</div>`, {maxWidth:420}).addTo(L_groups.nezperceTerr);

L.marker([46.10, -115.80], {
  icon: L.divIcon({
    className: '', iconSize: [180, 40], iconAnchor: [90, 20],
    html: `<div style="text-align:center;color:${PLT.nezperce};font-size:13px;font-weight:bold;font-family:Georgia,serif;text-shadow:1px 1px 4px rgba(0,0,0,0.6);letter-spacing:2px;opacity:0.55;">NEZ PERCE</div><div style="text-align:center;color:${PLT.nezperce};font-size:9px;font-family:Georgia,serif;opacity:0.4;">Nimiipuu — "The Real People"</div>`
  }), interactive: false
}).addTo(L_groups.nezperceTerr);

// ==================== ROCK ART SITES ====================

// --- Tsagaglalal / "She Who Watches" — Columbia Hills ---
L.circleMarker([45.649, -121.108], {radius: 4, color: PLT.petro, fillColor: PLT.picto, fillOpacity: 0.9, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.petro}">★ Tsagaglalal — "She Who Watches"</h3>
    <p><b>Type:</b> Both pictograph (painted) AND petroglyph (carved) — the same image in both media, extremely rare</p>
    <p><b>Tribe:</b> Wishram / Wasco (Upper Chinookan speakers)</p>
    <p><b>Location:</b> Columbia Hills State Park (formerly Horsethief Lake), Klickitat County, WA. On a basalt cliff overlooking the Columbia.</p>
    <p><b>Description:</b> A striking female face ~3 feet across with enormous round staring eyes, wide mouth, and radiating lines. Visitors report feeling watched. The design is unique in the Columbia Plateau tradition.</p>
    <p><b>Origin story:</b> Coyote visited this village ruled by a woman chief named Tsagaglalal. He told her the world would change and women would no longer be chiefs. He turned her into rock so she could watch over her people forever.</p>
    <p><b>Temani Pesh-wa Trail:</b> Nearby trail displays petroglyphs rescued from Petroglyph Canyon before The Dalles Dam flooded it (1957). Carvings were cut from rock, stored in a gravel lot for 30 years (!), finally displayed in 2004 at the request of Yakama, Warm Springs, Umatilla, and Nez Perce tribes. Motifs: elk, bighorn sheep, owls, eagles, humans, geometric designs.</p>
    <p><b>Access:</b> Tsagaglalal: guided tours only (Fri–Sat, Apr–Oct, by reservation). Temani Pesh-wa: self-guided Apr–Oct.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Keyser 1992, "Indian Rock Art of the Columbia Plateau"; WA State Parks; Loring & Loring 1982; NPS</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Vantage / Ginkgo Petrified Forest Petroglyphs ---
L.circleMarker([46.949, -120.003], {radius: 5, color: PLT.petro, fillColor: PLT.petro, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.petro}">◆ Vantage Petroglyphs — Wanapum</h3>
    <p><b>Type:</b> Petroglyphs (relocated from river sites before dam)</p>
    <p><b>Tribe:</b> Wanapum</p>
    <p><b>Location:</b> Ginkgo Petrified Forest State Park, near Vantage, Kittitas County, WA</p>
    <p><b>Description:</b> ~60 petroglyphs salvaged from 3 Columbia River sites before Wanapum Dam (1963). Originally 300+ petroglyphs. Includes twin figures with rayed arcs (most striking panel — two symmetrical figures with radiating lines), mountain sheep, sun designs, abstract geometric patterns.</p>
    <p><b>Rock art tradition:</b> Columbia Plateau tradition — most homogeneous and widespread in North America. Common motifs: stick-figure humans, block-body animals, rayed arcs/circles, dots, tally marks, "Spedis Owl." Made by pecking/abrading rock, removing dark desert varnish to expose lighter stone. These are NOT "art" — sacred images to teach, warn, and record for future generations.</p>
    <p><b>What was lost:</b> 240+ petroglyphs that couldn't be salvaged lie beneath Wanapum Dam's reservoir.</p>
    <p><b>Access:</b> Open year-round. Interpretive displays at visitor center.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Keyser 1992; WA State Parks; Wanapum Heritage Center (Grant County PUD); McClure 1984</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Buffalo Eddy — Nez Perce ---
L.circleMarker([46.172, -116.930], {radius: 5, color: PLT.petro, fillColor: PLT.petro, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.petro}">◆ Buffalo Eddy Petroglyphs</h3>
    <p><b>Type:</b> Petroglyphs & Pictographs</p>
    <p><b>Tribe:</b> Nez Perce (Nimiipuu)</p>
    <p><b>Location:</b> Snake River, 15 mi south of Asotin, Asotin County, WA. At one of the deepest pools in the river.</p>
    <p><b>Description:</b> Finest publicly accessible rock art in the region. Carved/painted on tumbled black basalt boulders at water's edge. Bighorn sheep, deer, elk, humans with headdresses, geometric designs. Both older petroglyphs (pecked) and younger pictographs (red ochre) spanning thousands of years.</p>
    <p><b>The eddy:</b> Named for the powerful whirlpool — one of the deepest pools in the Snake, considered spiritually significant. "Buffalo" refers to a bison-shaped rock formation.</p>
    <p><b>Protection:</b> Added to Nez Perce National Historical Park 1992 (one of 38 sites across 4 states). Road moved 1999. Quarter-mile interpretive trail. Free, open year-round.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> NPS Nez Perce NHP; Keyser 1992; Boreson 1998; Nez Perce Tribe Cultural Resources</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Indian Painted Rocks — Spokane ---
L.circleMarker([47.775, -117.468], {radius: 4, color: PLT.picto, fillColor: PLT.picto, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.picto}">◆ Indian Painted Rocks — Spokane</h3>
    <p><b>Type:</b> Pictographs (red ochre paint)</p>
    <p><b>Tribe:</b> Spokane</p>
    <p><b>Date:</b> ~250 years old (~1750 CE) — contact-era. May depict horses (arrived ~1730) and a cross.</p>
    <p><b>Location:</b> Little Spokane River Natural Area, Spokane County. Painted on a 25-foot porous granite rock along the river.</p>
    <p><b>Description:</b> Two groups of pictographs in ~6 sq ft. Red pigment: pulverized hematite mixed with fish/animal oil. The iron oxide seeped deep into the porous granite — remarkably permanent despite 250+ years. Applied with fingers (lines are finger-width), typical of Plateau pictograph tradition.</p>
    <p><b>Context:</b> Near a major Spokane village at the Little Spokane / Spokane confluence. Plateau pictographs were typically made at spiritually significant or vision quest sites.</p>
    <p><b>Protection:</b> National Register 1970. Iron grate installed against vandalism.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> National Register nomination 1970; WA DNR; Keyser 1992; Spokane Tribe</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Bowl & Pitcher — Riverside State Park ---
L.circleMarker([47.695, -117.496], {radius: 4, color: PLT.petro, fillColor: PLT.petro, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.petro}">◆ Bowl & Pitcher Petroglyphs</h3>
    <p><b>Type:</b> Petroglyphs</p>
    <p><b>Tribe:</b> Spokane</p>
    <p><b>Location:</b> Riverside State Park, Spokane County</p>
    <p><b>Description:</b> Petroglyphs carved into basalt cliffs in a popular hiking area along the Spokane River. Designs include animals, human figures, and geometric patterns. The basalt gorge was a fishing area and travel corridor.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> WA State Parks; Keyser 1992; Spokane Tribe</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Ice Harbor Dam / Indian Memorial Park ---
L.circleMarker([46.252, -118.876], {radius: 4, color: PLT.lost, fillColor: PLT.petro, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.lost}">◆ Ice Harbor Dam Petroglyphs (Relocated)</h3>
    <p><b>Type:</b> Petroglyphs (salvaged from Snake River sites before dam)</p>
    <p><b>Tribes:</b> Yakama, Nez Perce, Umatilla, Colville, Wanapum</p>
    <p><b>Location:</b> Indian Memorial Park (15 acres, created 1965), Burbank, Walla Walla County, WA</p>
    <p><b>History:</b> Found during 1956 surveying before Ice Harbor Lock & Dam. Snake River rose 100+ feet when dam completed (1961), inundating burial grounds, village sites, and rock art. Some petroglyphs cut from rock and relocated to this memorial.</p>
    <p style="color:${PLT.lost};">VANDALIZED 2024 — spray paint on ancient carvings. Spur road temporarily closed. Underscores ongoing vulnerability of indigenous cultural sites.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> USACE Walla Walla District; Keyser 1992; Tri-City Herald 2024</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Yakima Indian Painted Rocks ---
L.circleMarker([46.58, -120.60], {radius: 4, color: PLT.picto, fillColor: PLT.picto, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.picto}">◆ Yakima Indian Painted Rocks</h3>
    <p><b>Type:</b> Pictographs (polychromatic — white, red, black — unusual for the Plateau)</p>
    <p><b>Tribe:</b> Yakama</p>
    <p><b>Date:</b> Possibly 1,000+ years old</p>
    <p><b>Location:</b> Tiny state park (~2,000 sq ft) at Powerhouse & Ackley Roads, Yakima County</p>
    <p><b>Description:</b> Painted on basalt when a prehistoric lake submerged the cliff base — artists worked from canoes. The cliff parallels an Indian trail from Ahtanum valley to Wenas mountains. Three-color technique (white kaolin, red hematite, black charcoal/manganese) indicates special significance — most Plateau pictographs are monochrome red.</p>
    <p><b>Controversy:</b> L.V. McWhorter "enhanced" faded paintings with enamel paints in early 1900s — irreversible, now-condemned practice.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> WA State Parks; McWhorter 1913; Keyser 1992; Loring & Loring 1982</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Kettle Falls Petroglyphs ---
L.circleMarker([48.62, -118.07], {radius: 4, color: PLT.petro, fillColor: PLT.petro, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.petro}">◆ Kettle Falls Petroglyphs</h3>
    <p><b>Type:</b> Petroglyphs</p>
    <p><b>Tribes:</b> Colville Confederated (multiple bands)</p>
    <p><b>Description:</b> Animals, human figures, and geometric patterns near the great intertribal fishing and trading center. Some accessible by boat or short hike. Marcus Island nearby features petroglyphs visible only when Lake Roosevelt levels drop during dam operations — periodic glimpses of the submerged past.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Chance &amp; Chance 1982; Keyser 1992; Colville Tribes; NPS Lake Roosevelt NRA</p>
  </div>`).addTo(L_groups.plateauRockArt);

// --- Bear Paw Rock — Kalispel ---
L.circleMarker([48.16, -116.55], {radius: 4, color: PLT.petro, fillColor: PLT.sacred, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${PLT.sacred}">◆ Bear Paw Rock — Kalispel</h3>
    <p><b>Type:</b> Rock art</p>
    <p><b>Tribe:</b> Kalispel</p>
    <p><b>Location:</b> Near Denton Slough, across from "Indian Meadows" powwow grounds</p>
    <p><b>Significance:</b> Memorializes one of the genesis stories of the Kalispel people. Partially flooded by Albeni Falls Dam (1955) on the Pend Oreille River — sits across a now-flooded meadow from historic gathering grounds.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Kalispel Tribe of Indians; Lahren 1998, Handbook Vol. 12; NPS</p>
  </div>`).addTo(L_groups.plateauRockArt);

// ==================== INUNDATED SITES / DAM IMPACTS ====================

// Major dams that destroyed cultural sites
const damSites = [
  {pos:[47.93,-119.98], name:'Rock Island Dam', year:1933, lost:'600+ petroglyph panels along 2 miles of Columbia River cliffs. No systematic recording before inundation — one of the largest concentrations in the Pacific Northwest, gone with almost no documentation.', river:'Columbia', src:'Keyser 1992; Loring & Loring 1982'},
  {pos:[47.95,-118.98], name:'Grand Coulee Dam', year:1942, lost:'Kettle Falls fishing grounds (9,000+ years of use). BLOCKED ALL SALMON above — no fish ladder ever built. Lake Roosevelt (150 mi long) inundated villages, burial grounds, root-digging and berry-picking areas of Colville, Spokane, and other tribes.', river:'Columbia', src:'Colville Tribes; Bureau of Reclamation; Chance & Chance 1982'},
  {pos:[47.80,-120.03], name:'Wanapum Dam', year:1963, lost:'300+ Wanapum petroglyphs (60 salvaged to Ginkgo State Park). Multiple village sites including P\'ná, the principal Wanapum village. The Wanapum — who never signed a treaty — were allowed to stay on a small parcel by Grant County PUD.', river:'Columbia', src:'Wanapum Heritage Center; Keyser 1992; Relander 1956'},
  {pos:[45.62,-121.13], name:'The Dalles Dam', year:1957, lost:'Celilo Falls (Wyam) — 10,000+ year trading center, greatest salmon fishery in the world. Petroglyph Canyon (carvings cut and stored in gravel lot 30 years). 90+ rock art sites. One-time tribal compensation: ~$27/acre of fishing rights.', river:'Columbia', src:'Ulrich 1999; Barber 2005; Cressman 1960; Keyser 1992'},
  {pos:[45.93,-120.69], name:'John Day Dam', year:1968, lost:'Hundreds of rock art sites. Malcolm & Louise Loring recorded petroglyphs from boats as waters rose — racing the reservoir. Their photos are now the only record of many sites.', river:'Columbia', src:'Loring & Loring 1982; USACE'},
  {pos:[46.56,-118.63], name:'Ice Harbor Dam', year:1961, lost:'Burial grounds, village sites, petroglyphs along lower Snake. River rose 100+ ft. Some petroglyphs salvaged to Indian Memorial Park (15 acres, est. 1965). Park vandalized 2024.', river:'Snake', src:'USACE Walla Walla; Keyser 1992'},
  {pos:[46.59,-118.14], name:'Lower Monumental Dam', year:1969, lost:'MARMES ROCKSHELTER — 11,000 years of habitation, most important site in the Pacific Northwest. Despite $1.5M emergency excavation and presidential cofferdam order, the cofferdam leaked and the site drowned.', river:'Snake', src:'Hicks 2004; Rice 1972; Daugherty 1962'},
  {pos:[46.58,-117.83], name:'Little Goose Dam', year:1970, lost:'Village sites along lower Snake canyon. Archaeological surveys documented habitation sites, fishing stations, and burial areas before construction.', river:'Snake', src:'USACE; Leonhardy & Rice 1970'},
  {pos:[46.66,-117.43], name:'Lower Granite Dam', year:1975, lost:'Village sites along lower Snake. Last of four lower Snake dams — combined, they turned 140 miles of free-flowing river into slack-water reservoirs, destroying the entire lower Snake ecosystem. Ongoing movement to breach these dams to restore salmon.', river:'Snake', src:'USACE; Columbia River Inter-Tribal Fish Commission; Save Our Wild Salmon'}
];

damSites.forEach(d => {
  L.circleMarker(d.pos, {radius: 4, color: PLT.dam, fillColor: PLT.dam, fillOpacity: 0.7, weight: 2})
    .bindPopup(`<div class="popup-content">
      <h3 style="color:${PLT.dam}">⬛ ${d.name} (${d.year})</h3>
      <p><b>River:</b> ${d.river} River</p>
      <p style="color:${PLT.lost};font-weight:bold;">LOST: ${d.lost}</p>
      <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> ${d.src}</p>
    </div>`).addTo(L_groups.plateauDams);
});
