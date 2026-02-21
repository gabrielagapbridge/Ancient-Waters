const bayFillStyle = {color:'#AB47BC', weight:1.5, opacity:0.5, fillColor:'#AB47BC', fillOpacity:0.1};
const bayFillZones = [
  {name:'Marina District (1906 debris fill)', desc:'Built on rubble from the 1906 earthquake for the 1915 Panama-Pacific International Exposition. The fill liquefied catastrophically during the 1989 Loma Prieta earthquake, collapsing buildings and rupturing gas lines. Before fill: tidal marsh and beach. Ohlone artifacts found in underlying layers.',
   src:'USGS liquefaction hazard maps (2006); KQED; Priceonomics; FoundSF',
   coords:[[37.805,-122.446],[37.805,-122.432],[37.800,-122.428],[37.800,-122.446]]},
  {name:'Treasure Island (entirely artificial)', desc:'Built 1936-1937 from 2.5 million dump trucks of dredged bay mud and sand for the 1939 Golden Gate International Exposition. No natural land — sits on Yerba Buena Shoals. Now undergoing massive redevelopment. Radioactive contamination from Navy use being cleaned up.',
   src:'Army Corps of Engineers; KQED; USGS; SF Public Library historical photos',
   coords:[[37.826,-122.374],[37.826,-122.362],[37.814,-122.362],[37.814,-122.374]]},
  {name:'Mission Bay (was actual bay)', desc:'Before fill, Mission Bay was a navigable inlet extending deep into the peninsula. Mission Creek emptied into it. Ohlone settlements lined its shores. Filled progressively from the 1860s onward. Now home to UCSF campus, Chase Center, and condos — all on piles driven to bedrock 200 ft down.',
   src:'USGS; Priceonomics; Oakland Museum historical maps; KQED',
   coords:[[37.775,-122.398],[37.775,-122.385],[37.767,-122.385],[37.767,-122.398]]},
  {name:'Financial District / Embarcadero (Gold Rush fill)', desc:'Among the earliest fill in San Francisco. During the Gold Rush, hundreds of ships were abandoned in the harbor and simply buried under fill. Some remain entombed under modern buildings. The original shoreline ran roughly along Montgomery Street — everything east was open water or mud.',
   src:'USGS; SF Maritime NHP; Priceonomics; KQED "Parts of Bay Area Built on Fill"',
   coords:[[37.798,-122.403],[37.798,-122.390],[37.788,-122.390],[37.788,-122.403]]},
  {name:'SoMa / South of Market (former marsh)', desc:'Originally marshland where Mission Creek and other waterways drained into the bay. Filled over decades. The Transbay Terminal construction (2014) uncovered a 7,600-year-old Ohlone man buried beneath 30+ feet of fill. USGS maps show "very high" liquefaction risk across the entire zone.',
   src:'USGS liquefaction maps; SF Chronicle; SFGate (2014 Transbay discovery)',
   coords:[[37.788,-122.412],[37.788,-122.396],[37.775,-122.396],[37.775,-122.412]]}
];
bayFillZones.forEach(z => {
  L.polygon(z.coords, bayFillStyle).addTo(L_groups.bayFill)
    .bindPopup(`<h4>${z.name}</h4><span class="ptype pt-bay-fill">Bay Fill / Lost Coastline</span><div class="popup-what">Approximate fill zone from USGS geological surveys, historical Coast Survey maps</div>${z.desc}<div class="popup-src">📖 ${z.src}</div>`);
});

// ========== CONSTRUCTION / ACCIDENTAL DISCOVERY SITES ==========
const constructionFinds = [
  [37.779, -122.414, 'Civic Center BART Discovery', '1969 — BART construction', '5,000-year-old remains of a female aged 24-26 discovered during construction of the Civic Center BART station. One of many accidental discoveries that illustrate how indigenous sites lie beneath modern infrastructure.', 'SFGate (2024); FoundSF "Searching for the Yelamu"; BART historical records'],
  [37.789, -122.394, 'Transbay Transit Center Discovery', '2014 — Transbay construction', 'Well-preserved remains of a 7,600-year-old man, likely Ohlone, found beneath 30+ feet of fill during concrete preparation. One of the oldest human remains found on the SF peninsula. Located in an "Archaeological Mitigation Zone."', 'SFGate (2024); SF Chronicle; Archaeology Magazine'],
  [37.766, -122.389, 'CCA Campus Discovery', '2018 — campus expansion testing', '8,000-year-old buried site found 40 feet below surface — the oldest evidence ever discovered of the bay\'s first inhabitants. Obsidian and chert tool flakes, marine shells indicating cooking. No human remains found. CCA built permanent interpretive features in partnership with Ohlone.', 'SFGate (2024); AECOM archaeological report; CCA interpretive plan'],
  [37.838, -122.292, 'Bay Street Mall Construction', '1999-2003 — mall construction', '~300 intact burials found despite expectations that nothing remained. ~100 recovered from behind what became Victoria\'s Secret. $2 million spent on archaeological work. Bodies reburied on-site. Construction continued despite protest. An unknown number of remains still lie beneath the shopping center.', 'Cediel, "Shellmound" (2005); E\'ville Eye; KQED; Emeryville Historical Society'],
  [37.863, -122.297, '1919 Fourth Street Discovery', '2016 — trenching for development', 'Four ancient burials disturbed during trenching for construction just across the street from the West Berkeley Shellmound, outside previously established archaeological boundaries. Demonstrated that the indigenous village site was larger than thought.', 'West Berkeley Shellmound Wikipedia; shellmound.org; Berkeley city records'],
  [37.766, -122.244, 'Alameda / Santa Clara Ave Extension', '1908 — street construction', '450+ individuals disinterred from the 3-acre Sather Mound when developers bisected it to extend Santa Clara Avenue and Mound Street. Previously in 1892, a journalist excavated without permission and "played football" with skulls. SF Academy of Sciences subsequently excavated extensively.', 'Alameda LocalWiki; SF Daily Call (1892); Imelda Merlin historical accounts'],
  [37.349, -122.050, 'Mission Santa Clara Disturbances', '19th-20th century — multiple events', 'Native burials at Mission Santa Clara disturbed by construction multiple times over decades. Remains and artifacts collected by various institutions. 2012 excavation found postholes, artifacts, and plant remains from tule reed dwellings — evidence of a bustling indigenous town around the church.', 'Panich (2022); Archaeology Magazine "California\'s Coastal Homelands" (2022); SCU Archives'],
  [37.806, -122.430, 'Fort Mason Discovery', 'Recent — NPS surveys', 'Three previously unknown archaeological sites discovered at Fort Mason in San Francisco. Part of the broader pattern of finds showing that indigenous habitation extended across the northern waterfront of the peninsula.', 'FoundSF "Searching for the Yelamu"; NPS Golden Gate NRA cultural resources'],
  [37.934, -122.519, 'Larkspur Luxury Home Destruction', '2010s — residential construction', '4,500-year-old "grandfather midden" with 600 burials destroyed under confidentiality agreement for luxury homes. Contained unprecedented ceremonial condor burial, 100+ bear bones, atlatl sticks, flutes. State archaeologist E. Breck Parkman: "In my 40 years, I\'ve never heard of a site quite like this one." Radiocarbon dating was arbitrarily limited; DNA testing prohibited. Artifacts reburied on-site and paved over.', 'SFGate (2014); E. Breck Parkman; Al Schwitalla; East Bay Hill People'],
  [38.105, -122.568, 'Olompali / Marin Mounds Leveled', '1874-1875 — road construction', 'Shell and soil mounds from the 8,000-year-old Olompali settlement were leveled and used as fill material across Marin County, according to an 1911 Marin Journal article. Relics and human remains were scattered across the county as rapid development in the 1960s unearthed masses of Coast Miwok artifacts — leading to the founding of the Museum of the American Indian in Novato (1967).', 'Marin Journal (1911); Museum of the American Indian; MAPOM (est. 1970)'],
  [38.425, -121.740, 'UC Davis Mondavi Center', '1999 — university construction', 'Patwin Indian remains discovered at the Robert Mondavi Center for the Performing Arts construction site. The university subsequently built a Native American Contemplative Garden within the Arboretum to honor the Patwin people whose territory includes the campus and surrounding Sacramento Valley.', 'Wikipedia (Patwin); UC Davis Arboretum']
,
  [37.960, -122.345, 'Marin Mounds Bulldozed for Topsoil (1960s)', 'Coast Miwok — destroyed for topsoil', 'Moratto (1973) Case #3: "A Marin County entrepreneur spent the early 1960s bulldozing local Indian mounds to sell the midden material as topsoil." Stopped only when the alkaline shell-rich earth killed domestic plants. Marin County later passed Ordinance No. 1589 — one of only 3 CA counties making it unlawful to disturb any Indian midden without a permit.', 'Moratto (1973) "Status of CA Archaeology" Case #3; SCA Special Report No. 3'],
  [37.963, -122.360, 'San Pablo Shellmound I (destroyed ~1969)', 'Ohlone — destroyed for housing', 'Moratto (1973) Case #29: A monumental shellmound representing 2,000+ years of habitation exposed during home building in San Pablo. Student volunteers raced to salvage remains, "sometimes meeting heavy opposition from the contractor." Builders and archaeologists nearly came to blows. Public letters called it "disgraceful" — site destroyed anyway.', 'Moratto (1973) Case #29; CSU San Francisco files'],
  [37.965, -122.355, 'San Pablo Shellmound II (trailer park)', 'Ohlone — destroyed for trailer park', 'Moratto (1973) Case #25: A large undamaged mound in San Pablo replaced by a trailer park. Archaeologists who attempted salvage "were harassed and finally removed by the contractor." Dozens of pot hunters were allowed to dig freely. One of the last intact large mounds on the east shore of San Pablo Bay.', 'Moratto (1973) Case #25; Elsasser, Lowie Museum; Coles, Contra Costa College'],
  [37.964, -122.358, 'Fernandez Site CCo-259 (sold 25c/yard)', 'Ohlone — sold to topsoil company', 'Moratto (1973) Case #32: Known to Berkeley Archaeological Survey as critically important. Landowner promised to protect it. When the Survey was finally ready, "the landowner confessed with some shame that he had sold the site to a topsoil company for 25 cents per yard and that the site was no longer in existence."', 'Moratto (1973) Case #32; Dr. Robert F. Heizer, UC Berkeley'],
  [38.333, -123.048, 'Bodega Bay Midden Son-299 (bulldozed)', 'Coast Miwok (Olamentko) — bulldozed by owner', 'Moratto (1973) Case #33: A large deep midden on Bodega Bay shore, critical to local prehistory. Two years after Berkeley sampled it, "the owner destroyed the site with a bulldozer in order to discover materials for his private collection. He found little by this method, but he effectively destroyed a very important site."', 'Moratto (1973) Case #33; Dr. Robert F. Heizer, UC Berkeley'],
  [38.340, -122.690, 'Largest Pomo Cremation Site (crushed 1950s)', 'Southern Pomo — ground by gravel plant', 'Moratto (1973) Case #16: The largest known Pomo cremation and mortuary site, on Santa Rosa Creek, "was ground to oblivion by a gravel crushing plant in the early 1950s." Schoolchildren ravaged the bulldozed heaps, hauling off wagons of mortars, pestles, charmstones, beads, and human remains. Most went through the crusher.', 'Moratto (1973) Case #16; Michael J. Moratto, CSU San Francisco'],
  [37.882, -122.500, 'MRN-14 Bulldozed for Housing (1976)', '1976 — housing construction', 'After 10 days of excavation by SF State and MAPOM volunteers in 1974-1975, the site was bulldozed in 1976 for a residential development. The 3-meter-deep mound contained 12 features, cremated human remains throughout, infant burial with elaborate grave goods, and evidence of occupation from AD 0 to contact. Riley (1979) later found evidence of contact-period hunting (domestic cow bones) contradicting earlier claims the site was abandoned pre-contact.', 'Barrow (2009); Moratto et al. (1974); Riley (1979)'],
  [37.890, -122.315, 'Nelson 1909: Collections Sent to British Museum', '1900s — museum looting', 'Nelson noted during his 1909 survey that multiple San Rafael sites had been looted for artifacts. Collections from at least two sites were shipped to the British Museum in London, where they remain today. Other sites were carted away for "gardens, ballast for roads and sidewalks, chicken feed, and tennis court construction." Of 425 Bay Area mounds Nelson documented, only ~4 are visible today.', 'Nelson (1909) "Shellmounds of the SF Bay Region"; Barrow (2009); KQED; Corrina Gould'],
  [37.770, -121.710, 'CCo-696 Reservoir Construction (1990s)', '1990s — reservoir construction', 'Construction of Los Vaqueros Reservoir triggered massive excavations at 8+ sites (CCo-447/H, -458/H, -459, -468, -469, -621/H, -636, -637) plus newly discovered CCo-696. The reservoir flooded a valley inhabited for nearly 10,000 years. CCo-696 alone yielded ~150 human burials and the oldest known cultural remains in the SF Bay-Delta region (9,800 cal BP). Sonoma State conducted 9 surveys across 25,000 acres.', 'Meyer & Rosenthal (1997); Bramlette (1988); Ziesing (1997); CCWD'],
  [37.755, -121.690, 'Los Vaqueros Expansion (2011 burials)', '2011 — reservoir expansion', 'Expansion of Los Vaqueros Reservoir in 2011 threatened to expose additional Native American burial sites. The Volvon people had been completely removed from their homeland by 1806, absorbed into Mission San Jose — making cultural consultation complex as no direct Volvon tribal entity exists today.', 'Anthropology Now (2015); CCWD; Muwekma Ohlone Tribal Council'],
  [38.313, -121.498, 'Gualacomne (Freeport)', 'Plains Miwok — Sacramento River village', 'Important landholding Plains Miwok village-community on both sides of the Sacramento River at present-day Freeport. The suffix -amni/-umni means "people of" in Plains Miwok — so Gualacomne means "people of Gualaco." Barrett (1908) showed this suffix was not tribal but locational: if a person moved villages, they took the name of their new home. First contacted by Spanish in Gabriel Moraga\'s 1808 expedition up the Sacramento Valley.', 'Barrett (1908) UC Publications; Kroeber (1908/1919); Lodi Winegrape Commission; Wilton Rancheria'],
  [38.258, -121.506, 'Hulpu-mni (east bank Sacramento)', 'Plains Miwok — Kroeber village site', 'Village-community of the Hulpumni on the east bank of the Sacramento River below Sacramento. Kroeber (1919) listed Hulpumni among the Plains Miwok names ending in -mni that suggest Yokuts-style tribal names, but Barrett (1908) proved these were village names, not tribes. The Plains Miwok dialect was the most distinct of the four Sierra Miwok dialects, with 40% of word stems unique to itself.', 'Barrett (1908); Kroeber (1919) Handbook of Indians of CA; Bureau of American Ethnology'],
  [38.175, -121.578, 'Ilamne (Yolano)', 'Plains Miwok — west Sacramento village', 'Plains Miwok village on the west side of the Sacramento River northwest of Freeport, at present-day Yolano (Solano County). One of the western-most Plains Miwok settlements, showing their territory extended across the Sacramento into the tule marshlands of the Delta.', 'Kroeber (1919); Lodi Winegrape Commission; Milliken (1995)'],
  [38.157, -121.692, 'Anizumne (Rio Vista)', 'Plains Miwok — Sacramento River west', 'Plains Miwok village-community at present-day Rio Vista on the west side of the Sacramento River. Located at the edge of the vast tule marshland of the Sacramento-San Joaquin Delta. The Plains Miwok took salmon and sturgeon from these Delta waters and used elaborate tule boats for navigation. First European contact with Delta Miwok occurred in 1772 when Pedro Fages arrived at the San Joaquin River near Pittsburg-Antioch.', 'Kroeber (1919); Wilton Rancheria tribal history; Lodi Winegrape Commission'],
  [38.165, -121.690, 'Chucumne (Liberty Island)', 'Plains Miwok — Delta island village', 'Plains Miwok village on Liberty Island on the west side of the Sacramento River. Island villages in the Delta were strategically important — the Anza-Font expedition of 1776 documented that when Spanish explorers approached, Miwok women and children were sent across the rivers to safety while warriors remained. The Miwok had mastered tule boat construction for Delta navigation.', 'Font (1776) in Bolton 1930; Wilton Rancheria; Kroeber (1919)'],
  [38.200, -121.400, 'Cosomne (Wilton Rancheria)', 'Plains Miwok — Cosumnes River village', 'Village-community of the Cosomne on the Cosumnes River at present-day Wilton. The Cosumnes River formed the approximate northern boundary of the entire main Miwok territory. Barrett (1908) noted informants disagreed whether the boundary was at the river itself or slightly north at Elk Grove. Today the Wilton Rancheria of Miwok Indians maintains federal recognition here.', 'Barrett (1908); Wilton Rancheria; Kroeber (1919); Lodi Winegrape Commission'],
  [38.095, -121.331, 'Sonolomne (near Galt)', 'Plains Miwok — Dry Creek village', 'Plains Miwok village probably on Dry and Laguna creeks east of present-day Galt. Located in the transition zone between the Sacramento plains and the gentle rise into the foothills. Barrett (1908) noted that in this area "it is difficult to say definitely where the plains end and the foot-hills begin, so gentle and undulating are the first rises."', 'Kroeber (1919); Barrett (1908); Lodi Winegrape Commission'],
  [38.100, -121.270, 'Ochech-ak/Otcehamni (near Galt)', 'Plains Miwok — Barrett\'s key informant village', 'Village site a few miles west of Galt. Barrett (1908) used this village to demonstrate how the Miwok naming system worked: O\'tcex was the place name, and Otceha\'mni meant "people of O\'tce" — proving these were not tribal names like the Yokuts had, but village-community designations. Barrett\'s Plains Miwok vocabulary came from a single informant who spoke the Mokelumne dialect.', 'Barrett (1908) UC Publ. Am. Arch. Ethn. Vol.6 No.2; Kroeber (1908)'],
  [38.165, -121.170, 'Muquelemne (Ione)', 'Plains Miwok — Mokelumne River village', 'Village at present-day Ione on the Mokelumne River. The informant Jesus Oliver, living near Ione in 1906, told Kroeber that the people near Stockton were called Chulamni — but this proved to be a Yokuts group, not Miwok. The boundary between Plains Miwok and the Amador (foothill) dialect ran from the forks of the Cosumnes River southwest to Jackson Creek near Ione.', 'Barrett (1908); Kroeber (1908); Lodi Winegrape Commission'],
  [38.104, -121.243, 'Mokel-umni (near Lockford)', 'Plains Miwok — "People of Mokel"', 'The village-community that gave its name to the Mokelumne River — and eventually to Lodi. Mo\'kel was the place name, moke\'lumni meant "people of Mokel." Barrett (1908) obtained a vocabulary from a single Plains Miwok informant who spoke this dialect. "Mokelumne" was corrupted from the Miwok words mogul (river) and one (people of). All Plains Miwok communities in the Mokelumne watershed were gone by 1848.', 'Barrett (1908); Kroeber (1908/1919); Clark, Ralph "Lodi—Images of America"; Lodi Winegrape Commission'],
  [38.052, -121.260, 'Lelamne (Clements)', 'Plains Miwok — Mokelumne River village', 'Lel-amni village on the Mokelumne River at present-day Clements. Kroeber (1919) noted this as one of the Plains Miwok village-communities. Located in what is now the Clements Hills Viticultural Area of the Lodi wine region. By the 1830s most Plains Miwok had succumbed to waves of malaria, smallpox, and cholera epidemics introduced through mission contact.', 'Kroeber (1919); Barrett (1908); Lodi Winegrape Commission'],
  [38.032, -121.100, 'Seuamne (Jenny Lind)', 'Plains/Northern Sierra Miwok — transitional village', 'Village-community at present-day Jenny Lind on the Calaveras River. Described as "intermediate to Northern Sierra Miwok" — sitting on the dialectic boundary between Plains and Amador (foothill) Miwok. The Calaveras River roughly marked the southern edge of Plains Miwok territory, beyond which lay Yokuts land in the San Joaquin Valley plains.', 'Kroeber (1919); Barrett (1908); Lodi Winegrape Commission'],
  [38.025, -121.160, 'Chilamne (Bellota)', 'Plains Miwok — Calaveras River village', 'Plains Miwok village at present-day Bellota on the Calaveras River. The Calaveras River formed the critical boundary: Barrett (1908) showed that south of it, the San Joaquin Valley plains were entirely Yokuts territory, not Miwok. Kroeber confirmed with vocabulary evidence that Plains Miwok informants near Merced Falls and Knight\'s Ferry stated "the plains in these two regions were held by people speaking the Yokuts language."', 'Barrett (1908); Kroeber (1908); Lodi Winegrape Commission'],
  [38.047, -121.365, 'Unizumne (Thornton)', 'Plains Miwok — river confluence village', 'Plains Miwok village at present-day Thornton at the confluence of the Cosumnes and Mokelumne rivers. A strategically important location controlling access to both major waterways. The Plains Miwok used these river corridors for salmon and sturgeon fishing, and the surrounding grasslands and oak groves provided acorns — their chief food source.', 'Kroeber (1919); Lodi Winegrape Commission; Barrett (1908)'],
  [38.040, -121.495, 'Guaypemne (Terminus)', 'Plains Miwok — Mokelumne River delta', 'Plains Miwok village at present-day Terminus on the Mokelumne River delta. Located at the edge of the vast tule marsh that formed the Sacramento-San Joaquin Delta. These Delta-edge villages were adapted to a riparian environment of grasslands, oaks, and marshland that early European settlers called "an abundant paradise."', 'Kroeber (1919); Clark, Ralph "Lodi—Images of America"; Lodi Winegrape Commission'],
  [38.008, -121.458, 'Musupum (Andrus Island)', 'Plains Miwok — Delta island village', 'Plains Miwok village on Andrus Island at the confluence of the Mokelumne and San Joaquin rivers. One of several island settlements showing Plains Miwok mastery of Delta waterways. The Anza expedition of 1776 described elaborate tule boats used by Delta Miwok, illustrating their sophisticated river-and-marsh adaptation.', 'Kroeber (1919); Wilton Rancheria; Font (1776); Lodi Winegrape Commission'],
  [38.076, -121.527, 'Ochejamne (Courtland)', 'Plains Miwok — Sacramento River village', 'Plains Miwok village at present-day Courtland on the east side of the Sacramento River. Located in the heart of the Delta, where the Sacramento River splits into distributary channels. Today this area is famous for pear orchards built on the deep peat soils of reclaimed Delta islands — soils enriched by millennia of tule marsh decomposition.', 'Kroeber (1919); Lodi Winegrape Commission'],
  [38.120, -121.565, 'Quenemsia (Grand Island)', 'Plains Miwok — Delta distributary village', 'Plains Miwok village on Grand Island among the distributary channels of the Sacramento River. The network of Plains Miwok Delta villages — Anizumne, Chucumne, Musupum, Quenemsia, Ochejamne — formed an interconnected water-adapted community controlling river confluences and island territories across the Delta.', 'Kroeber (1919); Lodi Winegrape Commission']
];
constructionFinds.forEach(s => {
  L.marker([s[0],s[1]], {icon:constructionIcon}).addTo(L_groups.constructionFinds)
    .bindPopup(`<h4>${s[2]}</h4><span class="ptype pt-construction">${s[3]}</span><div class="popup-what">Construction / accidental discovery site — from news reports & archaeological records</div>${s[4]}<div class="popup-src">📖 ${s[5]}</div>`);
});

// ========== BAY AREA MISSIONS (Spanish colonial overlay) ==========
const bayMissions = [
  [37.764, -122.427, 'Mission San Francisco de Asís (Dolores)', 1776, 'Sixth California mission. Established near Ohlone settlements along Mission Creek. Church records document 5,000+ Native deaths at Bay Area missions from disease and maltreatment. The Yelamu population (~160-300) was devastated within a generation.'],
  [37.519, -121.917, 'Mission San José', 1797, 'Founded near Tuibun Ohlone territory. One of the most productive missions. Forcibly gathered indigenous peoples from across the East Bay and Central Valley. The nearby Coyote Hills shellmounds represent the pre-mission lifeways that were destroyed.'],
  [37.349, -122.050, 'Mission Santa Clara de Asís', 1777, '2012 excavation revealed a thriving indigenous town of tule houses around the church. 8,200+ Native deaths documented across Bay Area missions. Recent archaeological work done collaboratively with Muwekma Ohlone tribe.'],
  [37.974, -122.531, 'Mission San Rafael Arcángel', 1817, 'Founded as an asistencia (sub-mission) for sick neophytes from Mission Dolores. Located in Coast Miwok territory. Many shellmounds documented along the Marin coast by Nelson in 1909.'],
  [38.293, -122.456, 'Mission San Francisco Solano', 1823, 'Last and northernmost California mission, in Sonoma. Established in Wappo/Patwin territory. Completed the ring of missions that enclosed the Bay Area\'s indigenous populations.']
];
bayMissions.forEach(s => {
  L.marker([s[0],s[1]], {icon:bayMissionIcon}).addTo(L_groups.bayMissions)
    .bindPopup(`<h4>${s[2]}</h4><span class="ptype pt-bay-mission">Bay Area Mission — ${s[3]}</span><div class="popup-what">Spanish colonial mission site — location from NPS/state records</div>${s[4]}<div class="popup-src">📖 Milliken, "A Time of Little Choice" (1995); Panich (2022); Archaeology Magazine; mission archives</div>`);
});

// ========== 425 SHELLMOUND DISTRIBUTION (visual indicator) ==========
// Light ring showing approximate density zone of Nelson's 425 documented mounds
L.circle([37.78, -122.25], {radius:35000, color:'#FF4500', weight:1, opacity:0.15, fillColor:'#FF4500', fillOpacity:0.03, dashArray:'12,8'}).addTo(L_groups.shellmounds);
L.marker([37.65, -122.10], {icon:L.divIcon({className:'',html:'<div style="font-family:Cinzel,serif;font-size:9px;color:#FF4500;text-shadow:0 0 4px #000;white-space:nowrap;letter-spacing:1px;opacity:0.6">425+ SHELLMOUNDS<br>DOCUMENTED 1909</div>',iconSize:[130,30],iconAnchor:[65,15]})}).addTo(L_groups.shellmounds);


// ========== HISTORICAL SHORELINE & FILL ZONES (~1850, pre-fill) ==========
// Filled polygons showing land that WAS WATER/MARSH before fill.
// The polygon edges trace the ~1850 historic shoreline (inland edge)
// and the modern shoreline (waterward edge). The colored fill = artificial land.
// Sources: NOAA NGS T-sheets (1851-1887), SFEI EcoAtlas ca. 1800,
// Alameda Native History Project (Gabriel Duncan, Paiute),
// Oakland Museum CA creek maps, USGS liquefaction hazard maps

const fillZoneStyle = {
  color:'#E65100', weight:2.5, opacity:0.85,
  fillColor:'#FF6D00', fillOpacity:0.28,
  dashArray:null
};
const historicLineStyle = {color:'#FFAB40', weight:1.5, opacity:0.6, dashArray:'6,4'};

// Each zone: polygon tracing historic shore (inland) then modern shore (waterward)
// The filled area = land that was created by fill / didn't exist pre-1850

// --- SF PENINSULA FILL ---
// Historic shore ran along Montgomery St; everything E was water/marsh
const sfFillZone = [
  // Historic shoreline (inland edge, ~1850)
  [37.810,-122.448],[37.808,-122.440],[37.806,-122.435],[37.804,-122.430],
  [37.802,-122.425],[37.800,-122.420],[37.798,-122.413],[37.795,-122.408],
  [37.792,-122.404],[37.789,-122.401],[37.786,-122.399],[37.783,-122.397],
  [37.780,-122.396],[37.777,-122.396],[37.774,-122.397],[37.770,-122.399],
  [37.766,-122.401],[37.762,-122.404],[37.758,-122.407],[37.755,-122.405],
  [37.752,-122.401],[37.748,-122.397],[37.745,-122.393],[37.742,-122.389],
  [37.738,-122.386],[37.733,-122.383],[37.728,-122.381],[37.723,-122.379],
  // Wrap around via modern shoreline (waterward edge, going back north)
  [37.718,-122.375],[37.712,-122.372],[37.708,-122.370],
  [37.708,-122.364],[37.712,-122.360],[37.718,-122.358],
  [37.723,-122.362],[37.728,-122.366],[37.733,-122.369],
  [37.738,-122.372],[37.742,-122.375],[37.745,-122.378],
  [37.748,-122.382],[37.752,-122.386],[37.755,-122.390],
  [37.758,-122.393],[37.762,-122.390],[37.766,-122.388],
  [37.770,-122.386],[37.774,-122.384],[37.777,-122.383],
  [37.780,-122.383],[37.783,-122.384],[37.786,-122.386],
  [37.789,-122.388],[37.792,-122.391],[37.795,-122.395],
  [37.798,-122.400],[37.800,-122.405],[37.802,-122.412],
  [37.804,-122.418],[37.806,-122.423],[37.808,-122.430],
  [37.810,-122.438],[37.810,-122.448]
];
L.polygon(sfFillZone, fillZoneStyle).addTo(L_groups.historicShoreline)
  .bindPopup('<h4>SF Peninsula — Artificial Fill</h4><span class="ptype pt-historic-shore">THIS LAND WAS WATER before ~1850</span><div class="popup-what">Everything in the orange zone was open bay, tidal marsh, or mud flat</div>The original SF shoreline ran roughly along Montgomery Street. The Financial District, Embarcadero, SoMa, Mission Bay, and Marina District are all built on fill. Gold Rush ships lie buried under modern buildings. The 1906 earthquake debris was used to create the Marina — which then liquefied in the 1989 Loma Prieta quake. The Transbay Transit Center (2014) found a 7,600-year-old Ohlone man 30 ft below the surface.<div class="popup-src">📖 NOAA NGS T-sheets; SFEI EcoAtlas; USGS liquefaction maps; Alameda Native History Project</div>');
// Dashed line showing just the historic edge
L.polyline(sfFillZone.slice(0,28), historicLineStyle).addTo(L_groups.historicShoreline);

// --- EAST BAY FILL (Berkeley to San Leandro) ---
const eastBayFillZone = [
  // Historic shoreline (inland)
  [37.920,-122.330],[37.910,-122.325],[37.900,-122.318],[37.890,-122.312],
  [37.880,-122.308],[37.870,-122.303],[37.860,-122.298],[37.855,-122.294],
  [37.850,-122.290],[37.845,-122.285],[37.840,-122.280],[37.835,-122.276],
  [37.830,-122.272],[37.825,-122.268],[37.820,-122.264],[37.815,-122.260],
  [37.808,-122.256],[37.800,-122.252],[37.792,-122.248],[37.785,-122.244],
  [37.778,-122.240],[37.770,-122.236],[37.765,-122.233],[37.758,-122.228],
  [37.750,-122.222],[37.742,-122.215],
  // Wrap via modern waterfront (going back north)
  [37.742,-122.200],[37.750,-122.205],[37.758,-122.210],
  [37.765,-122.215],[37.770,-122.218],[37.778,-122.222],
  [37.785,-122.226],[37.792,-122.230],[37.800,-122.234],
  [37.808,-122.238],[37.815,-122.242],[37.820,-122.246],
  [37.825,-122.250],[37.830,-122.254],[37.835,-122.258],
  [37.840,-122.262],[37.845,-122.267],[37.850,-122.272],
  [37.855,-122.277],[37.860,-122.282],[37.870,-122.288],
  [37.880,-122.293],[37.890,-122.298],[37.900,-122.303],
  [37.910,-122.308],[37.920,-122.314],[37.920,-122.330]
];
L.polygon(eastBayFillZone, fillZoneStyle).addTo(L_groups.historicShoreline)
  .bindPopup('<h4>East Bay — Artificial Fill</h4><span class="ptype pt-historic-shore">THIS LAND WAS WATER before ~1850</span><div class="popup-what">Tidal marshes, mud flats, and estuaries once extended far inland</div>The East Bay waterfront was a vast marsh system. Temescal, Strawberry, and Codornices Creeks flowed freely to the bay. Shellmounds rose from this marshscape. Oakland & Alameda airports, much of Emeryville, and large sections of the Oakland waterfront are built entirely on fill. The Emeryville Shellmound (60 ft high, 350 ft wide) was once surrounded by tidal wetlands.<div class="popup-src">📖 NOAA NGS; SFEI; Oakland Museum; USGS Knudsen et al. (2000, 2006)</div>');
L.polyline(eastBayFillZone.slice(0,26), historicLineStyle).addTo(L_groups.historicShoreline);

// --- MARIN FILL (Richardson Bay / Corte Madera / San Rafael marshes) ---
// Refined from 1873 Austin/Whitney county map overlay on modern basemap
// The 1873 map clearly shows tidal flats extending much further inland
const marinFillZone = [
  // Historic shoreline (inland) — traced from 1873 map overlay
  // Starting at Strawberry Point area, going north along Richardson Bay
  [37.890,-122.510],[37.895,-122.505],[37.900,-122.498],[37.905,-122.492],
  [37.910,-122.487],[37.915,-122.482],[37.920,-122.478],[37.925,-122.473],
  [37.930,-122.468],[37.935,-122.462],[37.940,-122.456],[37.943,-122.450],
  // Corte Madera marsh area — 1873 map shows extensive tidal flats here
  [37.945,-122.445],[37.942,-122.438],[37.940,-122.430],[37.938,-122.422],
  // San Rafael shore
  [37.945,-122.415],[37.950,-122.408],[37.955,-122.400],[37.960,-122.395],
  // North toward San Pedro/China Camp
  [37.965,-122.390],[37.970,-122.385],[37.975,-122.380],
  // Wrap via modern shore (going back south)
  [37.975,-122.370],[37.970,-122.374],[37.965,-122.378],
  [37.960,-122.382],[37.955,-122.388],[37.950,-122.394],
  [37.945,-122.400],[37.942,-122.408],[37.940,-122.416],
  [37.938,-122.412],[37.940,-122.418],[37.942,-122.425],
  [37.943,-122.432],[37.945,-122.438],[37.943,-122.442],
  [37.940,-122.448],[37.935,-122.454],[37.930,-122.460],
  [37.925,-122.465],[37.920,-122.470],[37.915,-122.474],
  [37.910,-122.478],[37.905,-122.484],[37.900,-122.490],
  [37.895,-122.496],[37.890,-122.502],[37.890,-122.510]
];
L.polygon(marinFillZone, fillZoneStyle).addTo(L_groups.historicShoreline)
  .bindPopup('<h4>Marin — Lost Tidal Marshes</h4><span class="ptype pt-historic-shore">THIS AREA WAS MARSH / TIDAL FLAT before ~1850</span><div class="popup-what">Refined from 1873 Austin/Whitney county survey overlaid on modern basemap (David Rumsey Collection)</div>The 1873 map clearly shows Richardson Bay\'s tidal marshes extending far inland of the modern shoreline. Corte Madera Creek was navigable — Ross Landing sat at its mouth as a shipping point. Five shellmounds stood on Strawberry Point. The 20-foot Mill Valley mound was used to pave roads. The Larkspur "Grandfather Midden" (4,500 years, 600 burials, ceremonial condor burial) was destroyed for luxury homes. Coast Miwok navigated these waters in tule balsa boats.<div class="popup-src">📖 Austin/Whitney 1873 map (David Rumsey); NOAA NGS; SFEI; Nelson (1909); MAPOM</div>');
L.polyline(marinFillZone.slice(0,22), historicLineStyle).addTo(L_groups.historicShoreline);

// ========== RICHARDSON BAY DEEP DIVE ==========
