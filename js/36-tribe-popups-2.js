// ============================================================
// TRIBE TERRITORY INFO POPUPS — Part 2
// Maidu, Mtn Maidu, Wappo, Shasta + existing tribes
// ============================================================

// ========== VALLEY MAIDU ==========
L.polygon([[40.10,-122.10],[40.10,-121.50],[39.60,-121.20],[39.30,-121.30],[39.30,-121.80],[39.60,-122.00],[39.80,-122.10]],
{color:'transparent',fillColor:'#DAA520',fillOpacity:0.03,weight:0,interactive:true})
.bindPopup(tribePopup({
  name:'Valley Maidu & Konkow', altName:'Maidu = "person" · Konkow = Northwestern Maidu', color:'#DAA520',
  language:'Maidu / Konkow', family:'Penutian > Maiduan',
  population:'~9,000 all Maidu groups pre-contact',
  territory:'Sacramento Valley (Chico/Oroville) & Feather River canyons',
  summary:'Valley and canyon people of the Feather River. The Maidu built large semi-subterranean roundhouses (k\'um) up to 40 feet across for ceremonies and community gatherings. Their block mortars for acorn processing distinguish them archaeologically from neighboring Wintun peoples.',
  sections:[
    {title:'Way of Life', content:'Large roundhouses (k\'um) — up to 40 feet across — served as ceremonial dance houses and community centers. Smaller family dwellings clustered around the roundhouse. Acorns were the staple, processed using distinctive block mortars. Salmon, deer, and gathered plants supplemented the diet. Rich ceremonial life including the Hesi ceremony and Kuksu dance society — a secret religious society with elaborate costumes and mythological impersonations.'},
    {title:'Konkow Trail of Tears (1863)', content:'In September 1863, <b>461 Konkow people</b> were force-marched 100+ miles from Chico to the Round Valley Reservation over rugged mountains. Many died from exhaustion, exposure, and violence. Survivors were confined far from their Feather River homeland — one of California\'s most devastating forced relocations.'},
    {title:'Ancient Sites', content:'Llano Seco (CA-BUT-233) is the earliest C14-dated habitation in the Chico area — a 12-foot deep midden dating back <b>4,000+ years</b>. Five Michoopda village sites identified near Chico. The archaeology shows continuous Valley Maidu occupation for millennia.'}
  ],
  modernStatus:'Multiple federally recognized Maidu entities: Mechoopda Indian Tribe (Chico), Berry Creek Rancheria, Enterprise Rancheria, Mooretown Rancheria, and others. Active language and cultural preservation programs continue.',
  sources:'Kroeber 1925; Dixon 1905; Kowta 1988; Chico State archaeology'
})).addTo(L_groups.maiduVillages);

// ========== MOUNTAIN MAIDU ==========
L.polygon([[40.20,-121.30],[40.20,-120.80],[39.90,-120.50],[39.60,-120.60],[39.60,-121.00],[39.90,-121.20]],
{color:'transparent',fillColor:'#B8860B',fillOpacity:0.03,weight:0,interactive:true})
.bindPopup(tribePopup({
  name:'Mountain Maidu', altName:'Tásmam Koyóm — "Mountain People"', color:'#B8860B',
  language:'Mountain Maidu', family:'Penutian > Maiduan',
  population:'~1,500 pre-contact',
  territory:'Indian Valley, Greenville, American Valley, Plumas/Sierra Cos. (3,500–6,000 ft)',
  summary:'High-Sierra people who lived at elevations between 3,500 and 6,000 feet — one of the highest-elevation year-round populations in California. Bedrock milling features (mortars and metates worn into granite) across the Plumas National Forest document their intensive acorn processing.',
  sections:[
    {title:'Way of Life', content:'Permanent villages in mountain valleys (Indian Valley, American Valley) with summer camps at higher elevations. Earth-covered lodges for winter, bark shelters in summer. Intensive acorn gathering from black oak groves, supplemented by deer, bear, roots, seeds, and trout. The Mountain Maidu, Washoe, and Northern Paiute all used the high Sierra seasonally — their territories overlapping in the mountains with shared trade relationships.'},
    {title:'Sierra Petroglyphs', content:'The Plumas and Sierra county areas contain numerous Style 7 (Martis Complex) petroglyph sites — geometric designs pecked into glaciated bedrock at high elevations. These may have been created by ancestors of the Washoe or Maidu between 4,000–1,500 years ago. Sites at Lakes Basin, Jamison Creek, Salmon Lake, and Frazier Creek are monitored by the Friends of Sierra Rock Art.'}
  ],
  modernStatus:'The Maidu Summit Consortium works to protect Mountain Maidu cultural sites in the Plumas National Forest. The Greenville Rancheria (Maidu and Wailaki) is federally recognized. The devastating 2021 Dixie Fire burned through the heart of Mountain Maidu territory, destroying the town of Greenville.',
  sources:'Kowta 1988; Plumas NF; FSRA; Kroeber 1925'
})).addTo(L_groups.maiduVillages);

// ========== WAPPO ==========
L.polygon([[38.85,-122.70],[38.85,-122.30],[38.65,-122.15],[38.30,-122.20],[38.30,-122.50],[38.45,-122.65],[38.65,-122.75]],
{color:'transparent',fillColor:'#8B008B',fillOpacity:0.03,weight:0,interactive:true})
.bindPopup(tribePopup({
  name:'Wappo', altName:'From Spanish guapo — "brave" (for their fierce resistance)', color:'#8B008B',
  language:'Wappo', family:'Yukian (isolate — related only to Yuki)',
  population:'~1,000 pre-contact; ~500 by 1855',
  territory:'Napa Valley, Pope Valley, Alexander Valley, south shore of Clear Lake',
  summary:'A small but culturally distinct people of the Napa Valley who spoke a Yukian language — a linguistic isolate related only to the Yuki people far to the north. The Wappo controlled Glass Mountain, one of Northern California\'s most important obsidian sources, and fiercely resisted both Spanish and Mexican colonization.',
  sections:[
    {title:'Way of Life', content:'The Wappo lived in conical bark houses in villages along creeks and rivers. Diet included acorns, buckeye, deer, elk, fish, and small game. They traded obsidian from Glass Mountain (~2000 BCE onward) — a volcanic glass prized for toolmaking found at archaeological sites throughout Northern California. Summer trips brought Wappo to Clear Lake and the Pacific coast for trade and gathering.'},
    {title:'Language Mystery', content:'Wappo belongs to the Yukian language family — a true isolate with no demonstrated relationship to any other language family in the world. The only other Yukian languages are Yuki and Coast Yuki, spoken by peoples 100+ miles to the north. How these tiny, geographically separated populations came to share a unique language family remains one of California linguistics\' greatest puzzles.'},
    {title:'Colonization', content:'The Spanish name "Wappo" (from <i>guapo</i>, "brave") was given for their fierce resistance to Mission Sonoma and the Mexican ranchos. Despite their courage, the Wappo were devastated by disease and forced labor. By 1855, only ~500 remained in Napa Valley. In 1854, Wappo from the Russian River were moved to a Mendocino reservation where nearly half died within two years.'}
  ],
  modernStatus:'The Mishewal Wappo Tribe of Alexander Valley is the primary Wappo descendant community (not currently federally recognized). Wappo language documentation exists from field recordings, but no fluent speakers remain. The Napa Valley vineyards now cover much of their former territory.',
  sources:'Sawyer 1978; Elmendorf 1963; Kroeber 1925; Milliken 1995'
})).addTo(L_groups.wappoVillages);

// ========== SHASTA ==========
L.polygon([[42.00,-122.80],[42.00,-122.20],[41.80,-122.00],[41.50,-122.10],[41.30,-122.20],[41.30,-122.60],[41.50,-122.70],[41.75,-122.80]],
{color:'transparent',fillColor:'#CD5C5C',fillOpacity:0.03,weight:0,interactive:true})
.bindPopup(tribePopup({
  name:'Shasta', altName:'Kahosadi (self-designation)', color:'#CD5C5C',
  language:'Shasta', family:'Hokan (Shastan branch)',
  population:'~2,000–3,000 pre-contact',
  territory:'Upper Klamath River, Shasta Valley, Scott Valley, Mt. Shasta',
  summary:'People of the sacred mountain. The Shasta occupied the upper Klamath River drainage and the valleys at the foot of Mt. Shasta (Úytaahkoo) — a 14,179-foot volcano sacred to virtually every Northern California people. They served as critical intermediaries in the obsidian and dentalium shell trade networks.',
  sections:[
    {title:'Way of Life', content:'The Shasta lived in villages of bark-covered houses and semi-subterranean earth lodges. They hunted deer, elk, and bear in the mountains, fished for salmon in the Klamath and its tributaries, and gathered acorns, roots, and berries. Shasta Valley and Scott Valley provided fertile gathering grounds. The Shasta were closely related culturally to the Karuk but linguistically distinct (Hokan vs. possible Hokan).'},
    {title:'Mt. Shasta — Sacred Mountain', content:'Úytaahkoo (Mt. Shasta) is sacred to the Shasta, Wintu, Karuk, Modoc, and many other peoples. The Wintu call it <i>Bohem Puyuq</i> ("Great Mountain"). Creation stories from multiple tribes center on the mountain. It is considered a living spiritual being — not merely a geographic feature. The Shasta people took their English name from the mountain.'},
    {title:'Trade & Relations', content:'The Shasta were important intermediaries between the Sacramento Valley peoples (Wintu), the Klamath Basin (Modoc, Klamath), and the Northwest Coast (Karuk). They traded obsidian, dentalium shells, deerskins, and other goods. Their territory straddled the boundary between the Northwest Coast and Great Basin cultural areas.'}
  ],
  modernStatus:'Shasta descendants are enrolled in the Quartz Valley Indian Reservation (with Karuk and Klamath), the Shasta Indian Nation (not federally recognized), and other entities. The Shasta have fought for decades for independent federal recognition, distinct from the Karuk and other neighboring tribes.',
  sources:'Kroeber 1925; Holt 1946; Silver 1978'
})).addTo(L_groups.wappoVillages);

// ============================================================
// EXISTING TRIBES — Add popups to pre-existing territory polygons
// These use JavaScript to find existing layers and add interactivity
// We create new transparent overlay polygons for each
// ============================================================

// ========== POMO (Interior — Lake, Sonoma, Mendocino) ==========
// Territory already drawn in pomo layers but non-interactive
L.polygon([[39.50,-123.40],[39.50,-122.50],[39.10,-122.40],[38.80,-122.50],[38.60,-122.75],[38.60,-123.20],[38.90,-123.40],[39.20,-123.50]],
{color:'transparent',fillColor:'#7B3F00',fillOpacity:0.02,weight:0,interactive:true})
.bindPopup(tribePopup({
  name:'Pomo', altName:'Seven distinct Pomo languages — one of the most diverse linguistic groups in CA', color:'#7B3F00',
  language:'Northern/Central/Southern/Eastern/Southeastern/Kashaya/Northeastern Pomo', family:'Hokan (Pomoan branch)',
  population:'~8,000–10,000 pre-contact across all Pomo groups',
  territory:'Clear Lake, Russian River, Sonoma to Mendocino coast (~100 miles N-S)',
  summary:'The Pomo were among the most culturally rich peoples in California — world-renowned basket weavers, sophisticated lake and river managers, and practitioners of the Kuksu ceremonial complex. Seven distinct Pomo languages made them one of the most linguistically diverse groups in the Americas within such a small area.',
  sections:[
    {title:'Way of Life', content:'The Pomo occupied diverse environments from Clear Lake (the largest natural lake entirely within California) to the Russian River valley to the Mendocino coast. Diet varied by locale: Clear Lake Pomo fished for perch, catfish, and collected tule; Russian River Pomo relied on salmon and acorns; coastal groups harvested abalone, seaweed, and marine resources. Semi-subterranean roundhouses served as dance houses. Fire management was sophisticated — controlled burns maintained productive oak woodlands.'},
    {title:'Basketry', content:'Pomo baskets are considered the finest in the world. Woven from sedge root, willow, bulrush, and redbud, with feather and shell decoration, Pomo baskets achieved a level of artistry unmatched anywhere. Some "jewel baskets" were so finely woven they held water. Basket designs encoded cosmological knowledge. Today Pomo master weavers continue this tradition, and historic baskets are treasured by museums worldwide.'},
    {title:'Rock Art', content:'Pomo "baby rocks" — boulders with cupules (small ground depressions) — were central to fertility rituals. Central Pomo mythology attributes PCN (Pecked Curvilinear Nucleated) petroglyphs to supernatural Bird People. The Yorkville petroglyphs in Anderson Valley appear to predate Pomo occupation, suggesting multiple layers of cultural use across millennia.'},
    {title:'Colonization', content:'The Pomo suffered terribly under both Spanish missions and Mexican ranchos. The 1850 Bloody Island Massacre at Clear Lake saw U.S. Army soldiers kill 60–200+ Pomo men, women, and children on an island (now Bo-no-po-ti). The Mendocino and Round Valley reservations confined survivors far from their homelands.'}
  ],
  modernStatus:'Over 20 federally recognized Pomo tribal entities including the Kashia Band of Pomo (Stewarts Point), Hopland Band, Dry Creek Rancheria, Elem Indian Colony, Robinson Rancheria, and many others. Active language and cultural revitalization programs continue. Clear Lake remains central to Pomo identity.',
  sources:'Kroeber 1925; Barrett 1908; McLendon & Oswalt; Loeb 1926'
})).addTo(L_groups.pomoVillages);

// ========== YUKI / CAHTO ==========
L.polygon([[39.95,-123.75],[40.00,-123.30],[39.75,-123.10],[39.50,-123.15],[39.40,-123.40],[39.50,-123.65],[39.75,-123.80]],
{color:'transparent',fillColor:'#4A7C59',fillOpacity:0.02,weight:0,interactive:true})
.bindPopup(tribePopup({
  name:'Yuki, Cahto & Huchnom', altName:'Yuki = "stranger" (Wintu term); self-name: Ukomno\'m — "people of the valley"', color:'#4A7C59',
  language:'Yuki, Coast Yuki, Huchnom', family:'Yukian (isolate)',
  population:'~3,000–6,000 pre-contact; ~100 by 1880',
  territory:'Round Valley, Eel River headwaters, Laytonville (Mendocino Co.)',
  summary:'People of the Round Valley — speakers of a Yukian language, one of the most mysterious linguistic isolates in North America. The Yuki had a unique base-8 counting system (counting the spaces between fingers rather than the fingers themselves). They suffered one of the most devastating population collapses in California history.',
  sections:[
    {title:'Way of Life', content:'The Yuki occupied the rugged mountains and valleys of the Eel River headwaters. They built conical bark houses and earth-covered dance houses. Diet centered on acorns, deer, salmon, and bear. The Yuki counted in base-8 rather than base-10 — counting the spaces between fingers. Their language was unrelated to any neighbor\'s, a profound mystery of California linguistics.'},
    {title:'Round Valley & Genocide', content:'In 1856, the U.S. Army established the Nome Cult Farm (later Round Valley Reservation) in the heart of Yuki territory — then forced other displaced tribes onto the same land. Settlers conducted systematic killing campaigns against the Yuki throughout the late 1850s and 1860s. The Yuki population fell from perhaps 6,000 to approximately 100 survivors by 1880 — a population decline of over 98%.'},
    {title:'Cahto / Kato', content:'The Cahto (Kato) were a small Athabaskan-speaking group living near present-day Laytonville. Despite their Athabaskan language (related to Hupa and Navajo), they were culturally similar to their Pomo neighbors. They were largely absorbed into the Round Valley Reservation population.'}
  ],
  modernStatus:'The Round Valley Indian Tribes (federally recognized) include Yuki, Concow Maidu, Little Lake Pomo, Nomlaki, Pit River, and Wailaki descendants. The Cahto Tribe of the Laytonville Rancheria is separately recognized. Yuki language has no fluent speakers remaining.',
  sources:'Kroeber 1925; Miller 1979; Powers 1877'
})).addTo(L_groups.yukiVillages);

// ========== MATTOLE / WIYOT / BEAR RIVER ==========
L.polygon([[40.70,-124.40],[40.70,-124.00],[40.40,-123.80],[40.10,-123.85],[40.00,-124.10],[40.10,-124.30],[40.40,-124.40]],
{color:'transparent',fillColor:'#8B4513',fillOpacity:0.02,weight:0,interactive:true})
.bindPopup(tribePopup({
  name:'Mattole, Wiyot & Bear River', altName:'Lost Coast peoples', color:'#8B4513',
  language:'Mattole (Athabaskan), Wiyot (Algic), Bear River (Athabaskan)', family:'Mixed: Athabaskan & Algic',
  population:'~2,000 Wiyot + ~1,500 Mattole/Bear River pre-contact',
  territory:'Lost Coast (King Range), Humboldt Bay, Mattole River, Bear River',
  summary:'The rugged Lost Coast hosted a remarkable diversity of peoples — Athabaskan-speaking Mattole and Bear River alongside Algic-speaking Wiyot around Humboldt Bay. The Wiyot\'s Algic language links them (like the Yurok) to distant eastern peoples — a deep-time mystery.',
  sections:[
    {title:'Wiyot & Tuluwat', content:'The Wiyot centered their world on Humboldt Bay and the lower Eel River. Their most sacred site was Tuluwat (Indian Island) in Humboldt Bay, where they held the World Renewal Dance. In February 1860, settlers attacked sleeping Wiyot during the ceremony, massacring 80–250 people — mostly women, children, and elders. The Tuluwat massacre was one of the most infamous in California history. In 2019, the city of Eureka returned Indian Island to the Wiyot Tribe.'},
    {title:'Mattole & Bear River', content:'Athabaskan peoples of the Lost Coast — the most remote and rugged stretch of California coastline. The King Range rises abruptly from the sea, creating an isolated territory that preserved indigenous lifeways longer than most. Bear River people were largely wiped out in 1860s massacres, including the Bear River Massacre of February 1864.'},
    {title:'Sally Bell & Sinkyone', content:'To the south, the Sinkyone (also Athabaskan) occupied the Sinkyone Wilderness. Sally Bell (c.1843–1923) was one of the last surviving Sinkyone, whose account of witnessing the massacre of her family as a child was recorded and became a powerful symbol of California genocide.'}
  ],
  modernStatus:'The Wiyot Tribe (Table Bluff Reservation, Blue Lake Rancheria) is actively restoring Tuluwat on Indian Island — the first return of land to a California tribe by a municipality. The Bear River Band of Rohnerville Rancheria is separately recognized. Mattole descendants are enrolled in various tribal entities.',
  sources:'Kroeber 1925; Loud 1918; Wiyot Tribe; NPS'
})).addTo(L_groups.mattoleVillages);
