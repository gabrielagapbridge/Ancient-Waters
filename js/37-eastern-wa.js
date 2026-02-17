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
  interactive: false
}).addTo(L_groups.yakamaTerr);

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
  interactive: false
}).addTo(L_groups.spokaneTerr);

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
