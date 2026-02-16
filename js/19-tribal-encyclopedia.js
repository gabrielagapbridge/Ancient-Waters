const tribalData = [
  {
    name: "Coast Miwok",
    altNames: "Marin Miwok, Southern Coast Miwok",
    language: "Miwok (Utian/Penutian)",
    dialect: "Marin & Bodega dialects — so similar Barrett (1908) could not distinguish them in vocabulary samples",
    timeStart: -6000, timeEnd: 1850,
    occupation: "~6000 BCE — 1850s (8,000+ years documented at Olompali)",
    territory: "Marin County, southern Sonoma County, and a small part of Napa County. 13 tribelets controlling San Francisco Bay's northern shore, Point Reyes Peninsula, Tomales Bay, and Bodega Bay.",
    population: "~3,000 at contact (estimated from mission records)",
    centerLat: 38.05, centerLng: -122.70, zoom: 10,
    color: "#FF6B35",
    description: "The Coast Miwok were not a single tribe but a network of 13+ autonomous tribelets, each controlling 25-50 sq mi. Barrett (1908) proved they had no tribal organization — only villages and dialect groups. The suffix -amni meant 'people of' a place, not a tribal name. Kroeber (1908) confirmed this, showing the Marin and Bodega dialects formed a single unit. Chief Marin (Huicmuse) of the Huimen tribelet led resistance against the Spanish. The Federated Indians of Graton Rancheria represent Coast Miwok descendants today.",
    villages: ["Liwanelowa (Sausalito)","Huimen Village (Muir Beach)","Ewu/Puyuku (Ignacio)","Chokeche/Olompolli (Novato)","Olema-loke (Olema)","Echa-tamal (Nicasio)","Shotommo-wi (Tomales)","Lekahtewut (Petaluma)","Pulya-lakum (Salmon Creek)"],
    keyDates: "1579: Drake lands at Point Reyes • 1783: First Huimen baptized at Mission Dolores • 1817: Mission San Rafael founded • 1835: Nicasio reservation (4,000 acres, later seized) • 2000: Graton Rancheria federally restored",
    sources: "Barrett (1908); Kroeber (1908/1919); Milliken (1995); Barrow (2009); Nelson (1909)"
  },
  {
    name: "Bay Miwok (Volvon)",
    altNames: "Saclan, Chupcan, Tatcan, Ssaoam",
    language: "Bay Miwok (Utian/Penutian)",
    dialect: "Bay Miwok — distinct from both Coast Miwok and Plains Miwok",
    timeStart: -8000, timeEnd: 1806,
    occupation: "~9,800 cal BP — 1806 CE (oldest artifacts in SF Bay-Delta region)",
    territory: "Present-day Contra Costa County: Mount Diablo, Black Hills, Marsh Creek drainage, Los Vaqueros watershed, San Ramon Valley, and tributaries of Kellogg Creek.",
    population: "~200 for Volvon tribelet alone (Milliken estimate from mission records — likely undercount given 1,000+ bedrock mortars)",
    centerLat: 37.82, centerLng: -121.80, zoom: 11,
    color: "#9B59B6",
    description: "The Volvon controlled Mount Diablo — 'Cerro Alto de los Bolbones' — where Ohlone and Miwok creation stories say Indian people were created and given all they needed to sustain life. Their main village at Morgan Territory has the largest known concentration of bedrock mortars in the Bay Area (~1,000 across 50+ sites). Los Vaqueros reservoir construction unearthed CCo-696 with ~150 burials and artifacts dated to 9,800 cal BP — among the oldest in the region. CCo-637 yielded the earliest dated human remains in the SF Bay-Delta (8,530 BP). All Volvon were removed to Mission San Jose by 1806. Brushy Peak nearby was 'possibly the most frequented trading grounds in central California.'",
    villages: ["Volvon Village (Morgan Territory)","CCo-696 (Los Vaqueros)","CCo-320 (Round Valley)","CCo-434 (Rock City pictographs)","Brushy Peak Trading Grounds"],
    keyDates: "~9800 BP: Oldest artifacts at CCo-696 • ~8530 BP: Oldest human remains at CCo-637 • 1772: Fages expedition first Spanish contact • 1797: Mission San Jose founded • 1806: All Volvon removed to missions",
    sources: "Meyer & Rosenthal (1997); Bramlette (1988); Fredrickson (1982); East Bay Hill People; Milliken (1995)"
  },
  {
    name: "Plains Miwok",
    altNames: "Valley Miwok, Northwestern Sierra Miwok",
    language: "Plains Miwok (Utian/Penutian)",
    dialect: "Most distinct of 4 Sierra Miwok dialects — 40% unique word stems (Barrett 1908)",
    timeStart: -3000, timeEnd: 1848,
    occupation: "~3,000 BCE — 1848 (gone from homeland before Gold Rush)",
    territory: "Sacramento-San Joaquin Delta, Cosumnes River to Calaveras River, from Sierra foothills to Delta tule marshes. Includes present-day Sacramento, San Joaquin, and parts of Solano counties.",
    population: "~11,000-17,800 total Miwok at contact (1769); Plains Miwok were the most populous branch",
    centerLat: 38.10, centerLng: -121.40, zoom: 10,
    color: "#E67E22",
    description: "The Plains Miwok occupied a lush riparian environment of grasslands and oaks between the Sierra foothills and the Sacramento-San Joaquin Delta. Barrett (1908) showed they were organized as independent village-communities, not tribes: 'Mokelumni' meant 'people of Mokel' — the village that gave its name to the Mokelumne River and eventually to Lodi. They mastered Delta navigation with tule boats, took salmon and sturgeon from Delta waters, and maintained trade networks sourcing obsidian from Napa Valley. By the 1830s, most had succumbed to malaria, smallpox, and cholera. John Sutter played remaining families against each other to seize their lands. Today the Wilton Rancheria maintains federal recognition.",
    villages: ["Mokel-umni (Lockford)","Cosomne (Wilton)","Gualacomne (Freeport)","Ochejamne (Courtland)","Anizumne (Rio Vista)","Chucumne (Liberty Island)","Lelamne (Clements)","Guaypemne (Terminus)","Musupum (Andrus Island)","Quenemsia (Grand Island)","Chilamne (Bellota)","Seuamne (Jenny Lind)","Hulpu-mni (Sacramento)","Ochech-ak (near Galt)","Unizumne (Thornton)"],
    keyDates: "1772: Fages expedition reaches Delta • 1776: Anza-Font expedition documents tule boats • 1808: Moraga expedition enters territory • 1811: First Plains Miwok at Mission San Jose • 1830s: Malaria/smallpox devastation • 1848: Homeland vacant before Gold Rush",
    sources: "Barrett (1908); Kroeber (1908/1919); Wilton Rancheria; Lodi Winegrape Commission; Milliken (1995)"
  },
  {
    name: "Ramaytush Ohlone",
    altNames: "Yelamu, Ssalson, Urebure",
    language: "Ramaytush (Costanoan/Utian)",
    dialect: "Northernmost Ohlone language — no fluent speakers remain",
    timeStart: -4000, timeEnd: 1835,
    occupation: "~4,000 BCE — 1835 (Mission Dolores era)",
    territory: "San Francisco Peninsula from the Golden Gate south to San Bruno Mountain and the Pacific coast. The Yelamu tribelet held the area that became San Francisco itself.",
    population: "~1,500 at contact across several tribelets",
    centerLat: 37.76, centerLng: -122.45, zoom: 12,
    color: "#3498DB",
    description: "The Yelamu and related tribelets occupied what became San Francisco. Their shellmounds at Lands End, Crissy Field, and throughout the peninsula document thousands of years of occupation. The Transbay Terminal construction discovery (2014) found a burial in the original marsh — sparking controversy about proper treatment of indigenous remains in urban development. Mission Dolores (1776) was built directly in their territory and fundamentally destroyed Ramaytush social structures within decades.",
    villages: ["Yelamu (Mission Dolores area)","Sitlintac (Visitacion Valley)","Petlenuc (San Bruno Mountain)","Pruristac (San Mateo)"],
    keyDates: "1769: Portolá expedition reaches SF • 1776: Mission Dolores founded • 2014: Transbay Terminal burial discovered • 2019: Ramaytush Ohlone Land Acknowledgment adopted by SF",
    sources: "Nelson (1909); Milliken (1995); Anthropology Now; City of San Francisco"
  },
  {
    name: "Chochenyo Ohlone",
    altNames: "East Bay Ohlone, Huchiun, Jalquin",
    language: "Chochenyo (Costanoan/Utian)",
    dialect: "East Bay Ohlone language — revival efforts underway",
    timeStart: -5000, timeEnd: 1840,
    occupation: "~5,000 BCE — 1840s (East Bay shellmounds among largest in world)",
    territory: "East Bay from Richmond south to Fremont, including the vast shellmound complexes of Emeryville, West Berkeley, Coyote Hills, and the Alameda Creek watershed.",
    population: "~2,000+ at contact across multiple tribelets",
    centerLat: 37.80, centerLng: -122.27, zoom: 11,
    color: "#2ECC71",
    description: "The Chochenyo Ohlone built some of the largest shellmounds in the world — the Emeryville Shellmound was 60 ft high and 350 ft in diameter before its destruction in 1924. Nelson (1909) documented 425+ shellmounds around San Francisco Bay, most in Chochenyo territory. The West Berkeley shellmound (CA-ALA-307) dates to ~3700 BCE. The Muwekma Ohlone Tribe traces direct descent from these communities and is seeking federal re-recognition. Ryan Mound at Coyote Hills yielded ~500 ancestral burials.",
    villages: ["Huchiun (Richmond/El Cerrito)","Xucyun (Oakland)","Halkin (Berkeley)","Tuibun (Coyote Hills)","Jalquin (Alameda/San Leandro)","Irgin (Pleasanton)"],
    keyDates: "~3700 BCE: West Berkeley shellmound begun • 1909: Nelson documents 425+ shellmounds • 1924: Emeryville shellmound destroyed • 1999: Last BART construction finds • 2021: Muwekma federal recognition pending",
    sources: "Nelson (1909); Leventhal (1993); Muwekma Ohlone; KQED; UC Berkeley"
  },
  {
    name: "Karkin Ohlone",
    altNames: "Carquin",
    language: "Karkin (Costanoan/Utian)",
    dialect: "Most divergent Ohlone language — considered a separate branch",
    timeStart: -3500, timeEnd: 1811,
    occupation: "~3,500 BCE — 1811 (Sogorea Te' burial ground used 3,500+ years)",
    territory: "Carquinez Strait area, including present-day Crockett, Rodeo, Hercules, and Glen Cove in Vallejo.",
    population: "~300-500 at contact",
    centerLat: 38.05, centerLng: -122.23, zoom: 12,
    color: "#E74C3C",
    description: "The Karkin controlled the strategic Carquinez Strait — the only outlet from the Sacramento-San Joaquin Delta to San Francisco Bay. Their sacred site Sogorea Te' (Glen Cove) in Vallejo served as a gathering place and burial ground for 3,500+ years, used by Ohlone, Miwok, Pomo, Patwin and other nations. In 2011, a 109-day spiritual encampment led by Corrina Gould prevented further development. The Sogorea Te' Land Trust (est. 2015) now operates a land rematriation program — the first urban Indigenous women-led land trust.",
    villages: ["Karkin village (Carquinez)","Sogorea Te' (Glen Cove)"],
    keyDates: "~1500 BCE: Sogorea Te' burials begin • 1811: Last Karkin at missions • 2011: 109-day occupation saves Glen Cove • 2015: Sogorea Te' Land Trust founded",
    sources: "Milliken (1995); protectsogoreate.org; Sacred Land Film Project"
  },
  {
    name: "Tamyen Ohlone",
    altNames: "Thámien, Santa Clara Ohlone",
    language: "Tamyen (Costanoan/Utian)",
    dialect: "South Bay Ohlone language",
    timeStart: -4000, timeEnd: 1840,
    occupation: "~4,000 BCE — 1840s",
    territory: "Santa Clara Valley, southern San Francisco Bay shores. The heartland of what became Silicon Valley.",
    population: "~1,200 at contact",
    centerLat: 37.35, centerLng: -121.90, zoom: 11,
    color: "#1ABC9C",
    description: "The Tamyen Ohlone inhabited the fertile Santa Clara Valley — now the heart of Silicon Valley. Their shellmounds lined the southern bay shore and creek corridors. Mission Santa Clara (1777) was built in their territory and drew thousands into the mission system. Today the Muwekma Ohlone Tribe and the Tamien Nation both maintain connections to this ancestral homeland, advocating for recognition and protection of remaining sites beneath the tech campuses and suburban development.",
    villages: ["Tamien (Santa Clara)","Posolmi (Alviso)","Soucke (Milpitas)"],
    keyDates: "1777: Mission Santa Clara founded • 1797: Mission San Jose draws from territory • 2020s: Tamien Nation cultural advocacy",
    sources: "Milliken (1995); Tamien Nation; Mission records"
  },
  {
    name: "Ancestral Puebloans",
    altNames: "Anasazi (Diné term), Hisatsinom (Hopi term)",
    language: "Multiple — ancestors of Hopi, Zuni, Tewa, Tiwa, Keres",
    dialect: "Multiple language families represented",
    timeStart: -1500, timeEnd: 1300,
    occupation: "~1500 BCE — 1300 CE (Four Corners region)",
    territory: "Four Corners region: present-day corners of Arizona, New Mexico, Colorado, and Utah. Mesa Verde, Chaco Canyon, Canyon de Chelly, and hundreds of smaller sites.",
    population: "~20,000-40,000 at peak (Chaco era, ~1050 CE)",
    centerLat: 36.06, centerLng: -107.97, zoom: 8,
    color: "#F39C12",
    description: "The Ancestral Puebloans built the most architecturally sophisticated civilization in pre-Columbian North America north of Mexico. Chaco Canyon's great houses contained 700+ rooms. Mesa Verde's cliff dwellings were engineering marvels. An extensive road network connected communities across hundreds of miles. The 'Great Drought' of 1276-1299 contributed to migration away from the Four Corners, but descendants — Hopi, Zuni, and Rio Grande Puebloans — maintain that their ancestors simply moved to new homelands, not 'vanished.'",
    villages: ["Pueblo Bonito (Chaco)","Cliff Palace (Mesa Verde)","Betatakin (Navajo NM)","Keet Seel","Aztec Ruins"],
    keyDates: "~1500 BCE: Early pithouse villages • ~850 CE: Chaco Canyon construction begins • ~1050 CE: Peak population • 1276-1299: Great Drought • ~1300 CE: Migration to Rio Grande & Hopi mesas",
    sources: "NPS; Lekson (2006); Crown & Wills (2003); Pueblo oral histories"
  },
  {
    name: "Hohokam",
    altNames: "Huhugam (O'odham term, 'those who have gone')",
    language: "Ancestral O'odham (Uto-Aztecan)",
    dialect: "Proto-Tepiman",
    timeStart: -300, timeEnd: 1450,
    occupation: "~300 BCE — 1450 CE (Phoenix Basin)",
    territory: "Central and southern Arizona: Salt River, Gila River, Santa Cruz River valleys. The Phoenix metropolitan area sits directly on Hohokam territory.",
    population: "~40,000-80,000 at peak in the Salt River Valley",
    centerLat: 33.43, centerLng: -111.95, zoom: 9,
    color: "#E74C3C",
    description: "The Hohokam engineered the most extensive pre-Columbian canal system in North America — over 1,000 miles of canals irrigating 110,000+ acres in the Salt River Valley. Snaketown, occupied for 1,500+ years, is one of the most significant archaeological sites in the Southwest. Their ball courts suggest Mesoamerican connections. The Hohokam 'disappeared' around 1450 CE, but the Akimel O'odham (Pima) and Tohono O'odham consider them direct ancestors — 'Hohokam' is an O'odham word meaning 'those who have gone before.'",
    villages: ["Snaketown","Pueblo Grande","Casa Grande","Los Muertos","Mesa Grande"],
    keyDates: "~300 BCE: First canals • ~600 CE: Ball courts appear • ~1100 CE: Platform mounds built • ~1350 CE: Casa Grande constructed • ~1450 CE: Canal system abandoned",
    sources: "Haury (1976); NPS; Pueblo Grande Museum; Salt River Project; Gila River Indian Community"
  },
  {
    name: "Kashaya Pomo",
    altNames: "Southwestern Pomo, Kashia",
    language: "Kashaya (Pomoan/Hokan)",
    dialect: "Kashaya — one of 7 Pomo languages, not mutually intelligible",
    timeStart: -6000, timeEnd: 2026,
    occupation: "~6,000-8,000 years ago — present (Stewarts Point Reservation)",
    territory: "Sonoma County coast from the Gualala River south past the Russian River. Interior territory extended into the Northern Coast Range mountains. Core territory centered on what became Fort Ross State Historic Park.",
    population: "~600 Kashaya Pomo in Northern California today (Stewarts Point Reservation, 40 acres)",
    centerLat: 38.52, centerLng: -123.25, zoom: 10,
    color: "#8E44AD",
    description: "The Kashaya Pomo inhabited the coastal lands north of Bodega Bay for at least 6,000-8,000 years before Colony Ross was founded in their territory in 1812 by the Russian-American Company. Unlike the Spanish missions to the south, the Russians did not attempt to eradicate native cultural practices — instead recruiting Kashaya as seasonal laborers paid in food, tobacco, beads, and clothing. The area became a refuge for Indians fleeing Spanish missions. However, by the 1820s the Russians began armed raids to capture Native laborers. Metini Village, a sacred Kashaya site with a ceremonial roundhouse depression, has been studied using low-impact geophysical methods in collaboration with tribal elders. The Fort Ross Archaeological Project (UC Berkeley, California State Parks, Kashaya Pomo Tribe) is a model of collaborative indigenous archaeology. Today 600 Kashaya Pomo return to the 40-acre Stewarts Point Reservation for seasonal dances, feasts, and ceremonies.",
    villages: ["Metini Village (Fort Ross)","Stewarts Point Reservation","Gualala River villages","Ridge-top villages (Coast Range)"],
    keyDates: "~6000-8000 BP: Earliest occupation at Fort Ross area • 1812: Colony Ross founded by Russian-American Company • 1820s: Russian armed raids for native laborers • 1841: Russians abandon Colony Ross • 1914: Stewarts Point Reservation established • 2004+: Fort Ross Archaeological Project collaboration",
    sources: "Lightfoot et al. (2007); Gonzalez et al. (2013); Parrish et al. (2000); Fort Ross State Historic Park; Kashaya Pomo Tribe"
  },
  {
    name: "Huimen (Coast Miwok tribelet)",
    altNames: "Huimen, Guaulen — Southern Marin tribelet of the Hookooeko",
    language: "Coast Miwok (Hookooeko dialect, Utian/Penutian)",
    dialect: "Hookooeko — the Marin County dialect, nearly identical to the Lekahtewutko dialect of southern Sonoma",
    timeStart: -6000, timeEnd: 2026,
    occupation: "~6,000+ years — present (Federated Indians of Graton Rancheria)",
    territory: "Southern Marin County: Richardson Bay, Sausalito, Mill Valley, Muir Woods, Tam Valley, Strawberry Point, and the southern flanks of Mt. Tamalpais. ~38 square miles. Their territory stretched from the Golden Gate north to approximately Corte Madera Creek and west to the Pacific coast at Muir Beach.",
    population: "Est. 200-500 at contact. The Huimen were the first Coast Miwok tribelet to enter Mission San Francisco de Asís (1783). Today their descendants are part of the Federated Indians of Graton Rancheria (federally recognized 2000).",
    centerLat: 37.888, centerLng: -122.500, zoom: 13,
    color: "#1565C0",
    description: "The Huimen were the Coast Miwok tribelet whose territory encompassed all of southern Marin County, including Richardson Bay, Sausalito, Mill Valley, and the slopes of Mt. Tamalpais. Their named village Liwanelowa stood at present-day Sausalito. Chief Marin (Huicmuse), for whom Marin County is named, was Huimen. They were the first Coast Miwok to enter Mission San Francisco (1783), making them among the earliest to face colonial disruption. THE SEASONAL ROUND: The Huimen followed an annual cycle within their ~38 square mile territory. WINTER: Permanent villages at bayshore sites around Richardson Bay — CA-MRN-5, MRN-14, MRN-27, and the 5 Strawberry Point shellmounds (MRN-17 through MRN-21). These sat at the tidal marsh-to-oak woodland edge, with access to shellfish beds, waterfowl, and stored acorns. SPRING: Coastal camps for herring runs, tide pools, seaweed, and fresh greens. SUMMER: Upland camps on Mt. Tamalpais flanks for seed gathering, deer hunting, and prescribed burns. Angel Island served as a seasonal hunting ground reached by tule boat through Raccoon Strait. AUTUMN: Intensive acorn harvest from managed groves of coast live oak, black oak, and tan oak — the Miwok New Year. Nelson (1909) documented numerous shellmounds in Huimen territory, most destroyed by development. The Strawberry Point area was considered important fishing grounds. Schneider (2013) showed that even during the mission period, Coast Miwok continued returning to ancestral shellmound sites as 'places of refuge' — maintaining seasonal patterns as acts of cultural resistance.",
    villages: ["Liwanelowa (Sausalito)","Richardson Bay villages (MRN-5, MRN-14, MRN-27)","Strawberry Point (5 shellmounds: MRN-17 to MRN-21)","Angel Island (seasonal camps at Ayala Cove, Camp Reynolds)","Mill Valley area villages","Muir Beach coastal camps"],
    keyDates: "~6000 BP: Earliest known occupation in territory • ~2800 BP: Major shellmound building at Richardson Bay • 1579: Francis Drake contact with Coast Miwok at Drakes Bay • 1775: Spanish ship San Carlos enters SF Bay — first European contact in Huimen waters • 1783: First Huimen enter Mission San Francisco • 1817: Chief Marin (Huicmuse) leads resistance against Spanish • 1834: Mission secularization • 1838: William Richardson granted Rancho Sausalito (19,571 acres of Huimen territory) • 1909: Nelson documents shellmounds around Richardson Bay • 1950s-60s: Strawberry Spit and Aramburu Island created from dredge spoils, destroying marsh habitat • 2000: Federated Indians of Graton Rancheria federally recognized",
    sources: "Milliken (1995) 'A Time of Little Choice'; Nelson (1909); Barrow (2009) Marin Synthesis; Schneider (2013) 'Placing Refuge'; Barrett (1908); Kroeber (1908); Sausalito Historical Society; Angel Island Conservancy; Pestrong (1972) USGS"
  }
,
  {
    name: "Sierra Miwok",
    altNames: "Northern, Central, and Southern Sierra Miwok; Me-Wuk",
    language: "Sierra Miwok (Utian/Penutian)",
    dialect: "Three dialects — Northern (Cosumnes-Mokelumne), Central (Stanislaus-Tuolumne), Southern (Merced — Yosemite Valley)",
    timeStart: -3000, timeEnd: 2026,
    occupation: "~3,000+ years — present (11 federally recognized tribes)",
    territory: "Western Sierra Nevada foothills from El Dorado County south to Madera County, including Yosemite Valley. Villages on ridges and stream terraces below the line of heavy winter snows, from foothill oak woodland to Transition zone forests.",
    population: "~9,000-17,800 at contact (Kroeber/Levy estimates); 670 by 1910 census; ~3,500+ today across 11 federally recognized tribes",
    centerLat: 38.35, centerLng: -120.65, zoom: 9,
    color: "#D35400",
    description: "The Sierra Miwok inhabited the western slope of the Sierra Nevada in three dialect groups whose territories ran like parallel bands from north to south. Their villages sat on ridges and stream terraces, never in the deep canyons — springs, not rivers, supplied drinking water. Indian Grinding Rock (Chaw\'se) near Jackson preserves 1,185 mortar cups in a single marbleized limestone outcrop — the largest concentration of bedrock mortars in North America — along with 363 petroglyphs up to 3,000 years old. The Southern Sierra Miwok of Yosemite Valley (Ahwah\'nee) used prescribed fire to manage 250+ plant species, maintaining the Valley\'s open meadow landscape. Lucy Telles, a master basket weaver based in Yosemite, created works now in the Smithsonian. The Gold Rush of 1848 devastated Sierra Miwok — the principal gold-bearing regions lay directly in their territory. Population crashed from thousands to just 670 by 1910. Today 11 federally recognized tribes maintain cultural continuity, with annual Big Time celebrations at Chaw\'se drawing Miwok from across the state.",
    villages: ["Chaw\'se (Indian Grinding Rock, Pine Grove)", "Akankau-nchi (Sonora)", "Kuluti (Sonora)", "Awani/Ahwah\'nee (Yosemite Valley)", "Ktiniisti (Mokelumne River)", "Uptistini (Mokelumne River)", "Seweu-sii (Jackson Creek)", "Pota (Tuolumne area)"],
    keyDates: "~3000+ BP: Earliest foothill settlements • ~2000-3000 BP: Petroglyphs carved at Chaw\'se • 1848: Gold discovered in Miwok territory at Coloma • 1849-1855: Population devastated by Gold Rush violence/disease • 1851: Mariposa Battalion enters Yosemite Valley • 1962: Indian Grinding Rock State Park established",
    sources: "Barrett & Gifford (1933) Miwok Material Culture; Kroeber (1925) Handbook; Moratto (1984); Gassaway (2009); CA State Parks; Chaw\'se Association"
  },
  {
    name: "Yokuts",
    altNames: "Mariposan, Tulareño (Spanish term)",
    language: "Yokutsan (Penutian)",
    dialect: "~60 tribal dialects across Northern Valley, Southern Valley, and Foothill divisions",
    timeStart: -7000, timeEnd: 2026,
    occupation: "~7,000+ years — present (Tachi Yokut Tribe, Tule River Indian Tribe, and others)",
    territory: "San Joaquin Valley from the Sacramento-San Joaquin Delta south to Bakersfield, and the adjacent Sierra Nevada foothills. A 250-mile strip including Tulare Lake — once the largest freshwater lake west of the Mississippi.",
    population: "~17,000-70,000 at contact (estimates vary widely); ~4,500 descendants in early 21st century",
    centerLat: 36.20, centerLng: -119.30, zoom: 7,
    color: "#8D6E63",
    description: "The Yokuts were the most populous native group in the San Joaquin Valley, comprising up to 60 distinct tribes each with its own dialect, territory, and chief. Tulare Lake — once 690 square miles in wet years, the largest freshwater lake west of the Mississippi — was their population center until settlers began draining it in the 1860s. The Northern Valley Yokuts built mat-covered communal houses for 10+ families and navigated the Delta in tule boats. The Foothill Yokuts made pottery — rare for California tribes. Chief Estanislao (Cucunuchi) of the Lakisamni led the largest native resistance in California history, defeating a Spanish force in 1829 before General Vallejo burned his fortifications. The Stanislaus River bears his name. Settlers ethnically cleansed the Tulare Lake region in the 1850s-60s, and by the 1870s the last autonomous Yokuts were driven from the lake islands. Today the Tachi Yokut operate the Santa Rosa Rancheria, and the Tule River Indian Tribe maintains a reservation in the Sierra foothills.",
    villages: ["Orestimba (San Joaquin River)", "Lakisamni (Stanislaus River)", "Tachi (Tulare Lake shore)", "Chunut (Tulare Lake NE shore)", "Wimilche (Kings River)", "Choinumne (Kings River)", "Pitkache (San Joaquin at Mendota)"],
    keyDates: "~7000+ BP: San Joaquin Valley occupation • 1772: Fages expedition first Spanish contact • 1811: Yokuts begin entering missions • 1829: Estanislao\'s rebellion defeats Spanish force • 1850s: Gold Rush devastation and ethnic cleansing at Tulare Lake • 1858-59: Settlers forcibly remove Yokuts from Tulare Lake • 1873: Last autonomous Yokuts driven from lake islands",
    sources: "Kroeber (1907/1925); Cook (1955); Wallace (1978); Tachi Yokut Tribe; Tule River Indian Tribe; Latta (1977)"
  },
  {
    name: "Patwin",
    altNames: "Southern Wintun; includes River Patwin, Hill Patwin, and Suisun",
    language: "Patwin (Southern Wintuan/Penutian)",
    dialect: "River Patwin (Sacramento River, Colusa County) and Hill Patwin (Coast Range foothills and plains to the west)",
    timeStart: -1400, timeEnd: 2026,
    occupation: "~1400 BCE — present (Yocha Dehe Wintun Nation, Cachil DeHe Band, Kletsel Dehe Band)",
    territory: "Western Sacramento Valley from Princeton south to San Pablo and Suisun bays. River Patwin along the Sacramento River; Hill Patwin in the Coast Range foothills, Capay Valley, and Berryessa Valley. Southern Patwin tribelets included the Suisunes, Ululatos (Vacaville), Labaytos (Putah Creek), Malacas, and Tolenas.",
    population: "~3,300-5,000 Southern Patwin at contact (Cook estimates); ~12,000 for all Wintun combined; ~2,500 Wintun descendants today",
    centerLat: 38.55, centerLng: -122.00, zoom: 9,
    color: "#5D4037",
    description: "The Patwin — meaning \'people\' in their own language — occupied the western Sacramento Valley, with River Patwin in large villages near the Sacramento and Hill Patwin in the Coast Range valleys. They built fish weirs of posts and willow sticks across the river to catch salmon and sturgeon, and owned family seed-gathering tracts. The Suisun tribelet\'s tragic history exemplifies colonial violence: in 1810, after 125 Suisun warriors were killed in battle with Spanish soldiers, Chief Malica and his people chose mass self-immolation rather than surrender. The village of Yo\'doi at Knight\'s Landing gave its name to Yolo County. In 1948, an archaeological survey found 150 prehistoric villages in Berryessa Valley — all drowned when the reservoir was built. Patwin remains were discovered during construction of UC Davis\' Mondavi Center in 1999, leading to a Native American Contemplative Garden in the Arboretum. Today the Yocha Dehe Wintun Nation (\'\'home by the spring water\'\' in Patwin) maintains the tribe\'s heritage from Capay Valley in Yolo County.",
    villages: ["Yulyul (Rockville/Fairfield — Suisun main village)", "Yo\'doi (Knight\'s Landing — origin of \'Yolo\')", "Suskol (southern Cache Creek)", "Ula-to (Vacaville area)", "Koru\' (Colusa)", "Moso (Capay)", "Sāka (Eddy\'s Ferry)"],
    keyDates: "~1400 BCE: Patwin ancestors arrive in Central Valley • 1810: Spanish kill 125 Suisun men; Chief Malica\'s mass self-immolation • 1811: Remaining Suisun enter Mission Dolores • 1817: Chief Sem-Yeto (Solano) emerges as next leader • 1837: Smallpox epidemic • 1832-33: Malaria via Hudson\'s Bay Company trappers • 1999: Patwin remains found at UC Davis Mondavi Center site • 2009: Rumsey Band renamed Yocha Dehe Wintun Nation",
    sources: "Kroeber (1932); Powers (1877); Cook (1976); Milliken (1995); Yocha Dehe Wintun Nation; UC Davis"
  },
  {
    name: "Lake Miwok",
    altNames: "Hotsa-ho (suggested endonym meaning \'people\')",
    language: "Lake Miwok (Utian/Penutian)",
    dialect: "Lake Miwok — distinct from Coast Miwok and Sierra Miwok, though in the same Utian family",
    timeStart: -3000, timeEnd: 2026,
    occupation: "~3,000+ years — present (Middletown Rancheria)",
    territory: "Southern Lake County: creeks south of Clear Lake, Lower Lake area, Pope Valley, and Coyote Valley. Neighbors with Eastern Pomo, Southeastern Pomo, Wappo, and Southern Patwin.",
    population: "~400-500 at contact (1770); estimated 200 by 1848; dropped to 100 by 1850",
    centerLat: 38.85, centerLng: -122.60, zoom: 11,
    color: "#00695C",
    description: "The Lake Miwok occupied the southern Clear Lake basin, a landscape they shared with Eastern Pomo, Southeastern Pomo, and Wappo — four different language groups living around one lake. Their villages clustered along creeks south of Clear Lake near Lower Lake and Pope Valley. They made seasonal trips to Bodega Bay in Coast Miwok territory for ocean resources, and traded extensively with neighboring groups using clamshell bead currency. Like other Central California groups, they practiced the Kuksu religion with elaborate dances in semi-subterranean ceremonial roundhouses. The 1837 smallpox epidemic from Fort Ross virtually decimated the Clear Lake native population. By 1835, Spanish mission records show penetration to the shores of Clear Lake from Mission San Francisco Solano in Sonoma. Barrett & Gifford (1933) noted that Lake Miwok culture more closely resembled Pomo culture than that of the Plains and Sierra Miwok — reflecting centuries of close contact with Pomo neighbors. Today the Middletown Rancheria represents Lake Miwok descendants.",
    villages: ["Tuleyome (near Lower Lake)", "Oleyome (near Lower Lake)", "Kado\'-yomi-pukut (Cookman Ranch)", "Tu\'bud (near Lower Lake)", "Tule\'-yomi (south of Lower Lake)", "Wi\'lok-yomi (near present rancheria)"],
    keyDates: "~3000+ BP: Established occupation of southern Clear Lake • 1835: Mission records show penetration to Clear Lake • 1837: Smallpox epidemic from Fort Ross devastates population • 1850: Population drops to ~100 • 1958: Federal termination of rancheria rights • Today: Middletown Rancheria maintains cultural heritage",
    sources: "Barrett & Gifford (1933); Kroeber (1925); Callaghan (1970); Lake County Historical Society"
  },
  {
    name: "Wappo",
    altNames: "Onasatis (\'Outspoken People\'); Mishewal (\'Warrior People\'); Guapo (Spanish, meaning \'brave\')",
    language: "Wappo (Yukian — isolated language family, not related to neighboring Penutian/Hokan groups)",
    dialect: "Three subgroups: Mishewal (Alexander Valley/southern Lake County), Mutistul (Knights Valley/eastern Sonoma), Mayakmah (southern Napa/Sonoma tidal areas)",
    timeStart: -8000, timeEnd: 2026,
    occupation: "~10,000 years of uninterrupted habitation in Napa Valley — present (Mishewal-Wappo seeking re-recognition)",
    territory: "Napa Valley from Napa City to Mt. St. Helena, Alexander Valley, southern Middletown, Knights Valley, and portions of the Russian River near Geyserville. The Wappo called Napa Valley \'Talahalusi\' — \'Beautiful Land.\'",
    population: "~1,000 in Napa Valley at contact (Kroeber); population across all Wappo groups likely higher",
    centerLat: 38.55, centerLng: -122.50, zoom: 10,
    color: "#FF7043",
    description: "The Wappo are linguistically unique — their Yukian language family is an isolate, unrelated to the Penutian and Hokan languages spoken by all their neighbors. Yukian speakers may have controlled the north Coast Ranges 8,000+ years ago before being compressed by Miwok and Pomo expansion. The Wappo re-established control of Napa Valley about 1,500 years ago. Archaeological surveys indicate 10,000 years of uninterrupted habitation. They lived near Calistoga\'s hot springs and the Old Faithful Geyser, lands they held sacred for thousands of years. Their baskets — made of sedge with redbud and bulrush decoration — were so precisely woven they could hold water. They processed obsidian from nearby Mt. Konocti and Napa Valley sources into tools and export goods. The Spanish name \'Guapo\' (brave/handsome) recognized their fierce resistance to missionization. In 1958, Congress terminated their federal recognition along with 41 other rancherias. Laura Somersal, the last fluent Wappo speaker, believed \'co-noma\' was the origin of Sonoma — meaning \'abandoned camp.\' The Mishewal-Wappo are currently seeking federal re-recognition.",
    villages: ["Calistoga area villages (near hot springs)", "Yountville area villages", "St. Helena area villages", "Alexander Valley villages (near Geyserville)", "Knights Valley villages", "Pope Valley (Catahoula band)"],
    keyDates: "~10,000 BP: Archaeological evidence of Napa Valley habitation • ~1500 BP: Wappo re-establish control of Napa Valley • 1823: Spanish/Mexican invasion begins • 1823-1834: Many Wappo forced to Mission Sonoma • 1841: Edward Bale granted Upper Napa Valley by Mexico • 1851-56: US troops forcibly relocate 500 Onasatis • 1915: Dry Creek Rancheria blends Pomo, Onasatis, Mishewal-Wappo • 1958: Federal termination • 1990s+: Mishewal-Wappo reorganize and seek re-recognition",
    sources: "Kroeber (1925); Moratto (1984); Suscol Intertribal Council; Barrett (1908); Laura Somersal oral histories; CA State Parks"
  },
  {
    name: "Olompali (Coast Miwok tribelet)",
    altNames: "Olompolli, Olompoli — meaning \'southern village\' or \'southern people\'",
    language: "Coast Miwok (Hookooeko dialect, Utian/Penutian)",
    dialect: "Hookooeko — Marin County dialect",
    timeStart: -6000, timeEnd: 2026,
    occupation: "~8,000+ years — present (Federated Indians of Graton Rancheria)",
    territory: "~25 square miles around present-day Novato, including San Antonio Creek drainage, eastern slopes of Mt. Burdell, and the Petaluma River estuary overlooking San Pablo Bay.",
    population: "500-700 at the village site; Camilo Ynitia was the last hoipu (headman)",
    centerLat: 38.16, centerLng: -122.57, zoom: 13,
    color: "#43A047",
    description: "The Olompali tribelet controlled 25 square miles of territory around present-day Novato, centered on one of the largest and most affluent Coast Miwok villages in Marin County. The main village site (CA-MRN-193) is an enormous six-acre continuous deposit with satellite deposits clustered around it — excavations from 1972 to 1997 recovered approximately 50,000 artifacts confirming it as a high-status permanent hub. An Elizabethan silver sixpence minted in 1567, found at the site, suggests possible contact with Sir Francis Drake\'s 1579 expedition. The most populated villages were along San Antonio Creek. Camilo Ynitia, the last hoipu, was the only Native American in Northern California to confirm a large Mexican-era land grant in the American period — 8,877 acres of his ancestral lands, granted in 1843 with General Vallejo\'s help. The 1846 Battle of Olompali during the Bear Flag Revolt took place at Ynitia\'s adobe. He was forced to sell most of his land for a fraction of its value. His daughters Maria and Maxima were told: \'Tell them never to forget our People.\' Olompali State Historic Park now preserves the site.",
    villages: ["Olompali main village (CA-MRN-193)", "San Antonio Creek villages", "Seasonal hunting/gathering camps in territory"],
    keyDates: "~6000+ BP: Earliest occupation evidence • ~500 CE: Village established as major center • ~1200 CE: Becomes possibly largest Miwok village in Marin • 1567: English sixpence (found at site) minted • 1579: Possible Drake contact • 1776: Adobe house built — oldest surviving house north of SF Bay • 1843: Camilo Ynitia granted Rancho Olompali (8,877 acres) • 1846: Battle of Olompali during Bear Flag Revolt • 1852: Ynitia forced to sell land • 1909: Nelson records site as MRN-193 • 1972-1997: Slaymaker excavations yield 50,000 artifacts • 1977: State purchases land for park",
    sources: "Friends of Olompali; Nelson (1909); Slaymaker (1972-1997); Milliken (1995); Barrow (2009); CA State Parks; MarinCoastMiwok.com"
  },
  {
    name: "Volvon (Bay Miwok)",
    territory: "Mt. Diablo, Clayton, Marsh Creek watershed — eastern Contra Costa County",
    language: "Bay Miwok (Saclan) · Miwokan · Utian · Penutian",
    population: "~108 baptized at the missions; pre-contact population unknown but the 715+ mortar village suggests hundreds",
    centerLat: 37.882, centerLng: -121.914, zoom: 12,
    color: "#5C6BC0",
    description: "The Volvon (also Wolwon, Bolbon, Bolgon) held the most sacred mountain in central California — Mt. Diablo, which they knew as Oo'-yum-bel'-le. In their creation story, the condor Mol'-luk lived on the north side of the mountain; his wife, the rock on which he roosted, gave birth to Wek'-wek (Prairie Falcon-man). With his grandfather Coyote-man, Wek-wek created all Indian people, providing them 'everything, everywhere so they can live.' The main Volvon Village in the Black Hills had 715+ bedrock mortars and countless housepits spread over half a mile — one of the largest settlements in the prehistoric Bay Area, yet apparently unknown to early archaeologists. Green's Village in Fig Pig Gulch had 75+ mortars. The Los Vaqueros rock art complex (CCo-434) with its polychrome pictographs is attributed to the Volvon. The mountain held ceremonies for nations across California — Wintun, Nisenan, Pomo, Central Sierra Miwok all held the mountain sacred. The Spanish called it 'Cerro Alto de los Bolbones' (High Point of the Volvon). After missionization (1803-08), Volvon descendants may have returned to John Marsh's ranch as laborers.",
    villages: ["Main Volvon Village — 715+ bedrock mortars (Black Hills)", "Green's Village — 75+ mortars (Fig Pig Gulch)", "Mallory Creek Village — 45 mortars", "Canyon Milling Site — 29 mortars", "Fig Pig Gulch Meadow — 19 mortars", "Upper Pond Village Creek — 10 mortars + 10 cupules", "Curry Point — 28 mortars + pictograph cave", "Dozens more sites documented by East Bay Hill People"],
    keyDates: "~8000+ BP: PCN rock art tradition begins in region • ~2500 BP: Proto-Miwok language develops • ~1000 CE: Bay Miwok dialects diversify • 1772: Fages-Crespí expedition first Europeans to see Mt. Diablo • 1805: Chupcan escape — 'Monte del Diablo' naming incident • 1805-06: 44 Volvon baptized at Mission San Jose, 54 at Mission San Francisco • 1811: Cerro Alto de los Bolbones first written reference • 1834: Rancho Los Meganos granted over Volvon/Julpun lands • 1930s: Gifford shown annual gathering site below summit",
    sources: "East Bay Hill People; Bev Ortiz (News from Native California 1989); Milliken 1995; Bennyhoff 1961; EBRPD; Save Mount Diablo; Museum of the San Ramon Valley"
  },
  {
    name: "Northern Valley Yokuts",
    territory: "San Joaquin Valley from the Delta south to Bakersfield — 250 miles of Central Valley",
    language: "Yokutsan · Penutian — up to 60 tribes with related dialects",
    population: "18,000-50,000+ pre-contact (one of the highest regional densities in North America)",
    centerLat: 37.870, centerLng: -121.300, zoom: 9,
    color: "#FFB74D",
    description: "The Yokuts were the dominant people of the San Joaquin Valley and the largest ethnic group in pre-contact California. Their territory stretched 250 miles from the Sacramento-San Joaquin Delta south to Bakersfield. The Northern (Delta) Yokuts — including the Tamcan, Cholvon, Passasimi, and Yatchikumne — inhabited the tule marshes where the San Joaquin and Sacramento rivers converge, using tule boats and managing the landscape through controlled burns. Villages were spaced every 3-5 miles along waterways. The Altamont Pass trade route connected Yokuts territory to the Bay Area — furs went west, coastal shells (used as currency) went east. Tulare Lake, one of the largest freshwater lakes west of the Mississippi, was the population center for Southern Valley tribes until settlers drained it in the 1860s. Chief Estanislao (born Cucunuchi, a Lakisamni Yokuts) led one of the most significant indigenous resistance movements in California history (1828-29), rallying multi-tribal forces against Mexican authorities. The Stanislaus River and County are named for him. The Tachi Yokut Tribe at Santa Rosa Rancheria near Lemoore maintains the federally recognized presence today.",
    villages: ["Tamcan villages along Old River (lower San Joaquin)", "Cholvon villages in the Delta", "Yatchikumne villages near Delta confluence", "Lakisamni villages along Stanislaus River", "Passasimi villages in interior valleys", "Orestimba village on San Joaquin near Newman", "Tulare Lake island settlements (Southern Yokuts)"],
    keyDates: "~4000-2000 BP: Penutian speakers expand into Central Valley • ~1000 CE: Yokuts dialect diversity fully developed • 1772: Fages expedition first European contact with Delta Yokuts • 1806-1811: Tamcan and Cholvon baptized at Mission San Jose • 1828-29: Chief Estanislao's resistance movement • 1848: Gold Rush devastates Yokuts territories • 1850-51: Mariposa Indian War • 1858-59: Ethnic cleansing of Tulare Lake • 1873: Tule River Reservation established • 1921: Santa Rosa Rancheria established • 2023: Tulare Lake briefly reappears during flooding",
    sources: "Kroeber 1925; Cook 1955; Milliken 1995; Wallace (eHRAF); Latta 1978; Bennyhoff 1961; Oakdale Leader; Muwekma Ohlone Tribe"
  },
  {
    name: "Saclan (Bay Miwok)",
    territory: "Moraga, Orinda, Lafayette, Briones Regional Park, Walnut Creek — inland valleys east of East Bay hills",
    language: "Bay Miwok (Saclan) · Miwokan · Utian · Penutian",
    population: "~171 baptized at the missions; first Bay Miwok identified by linguistics",
    centerLat: 37.895, centerLng: -122.100, zoom: 13,
    color: "#29B6F6",
    description: "The Saclan are historically the most significant Bay Miwok group because they were the first to be linguistically identified as a distinct Miwok-speaking people. In 1821, Father Arroyo de la Cuesta recorded a Saclan vocabulary at Mission San Francisco that was 'demonstrably different' from the Costanoan languages spoken in the rest of the East Bay. But it wasn't until 1955 that linguist Madison Beeler recognized it as a Miwok language — overturning Kroeber's assumption that the Saclan were Ohlone. The Saclan were also leaders of the greatest Bay Miwok resistance. After entering Mission San Francisco during a drought in 1794-95, hundreds fled within months. When Christian Indians were sent to retrieve them, the Saclan killed them. Their leader Potroy was arrested in 1797, tried, and sentenced to whippings and a year in shackles at the San Francisco Presidio. The Spanish sent troops in force in 1795, 1797, 1800, 1803, 1804, and 1805 — a tremendous effort given their limited manpower. Saclan territory became Rancho Acalanes (Lafayette, granted 1834) and Rancho Laguna de los Colorados (Moraga/Orinda, granted 1835).",
    villages: ["Villages in Lafayette area", "Villages in Walnut Creek area", "Briones hills seasonal camps", "Moraga/Orinda valley settlements"],
    keyDates: "1794-95: First Saclan enter Mission San Francisco during drought • 1795: Saclan flee mission, kill Christian Indian emissaries • 1797: Leader Potroy arrested, sentenced to whippings and shackles • 1795-1805: Five Spanish military expeditions to Saclan territory • 1821: Father Arroyo de la Cuesta records Saclan vocabulary • 1834: Rancho Acalanes granted over Saclan land • 1955: Beeler identifies Saclan vocabulary as Miwok (not Ohlone) • 1961: Bennyhoff identifies additional Bay Miwok groups",
    sources: "Milliken 1995; Bennyhoff 1961; Beeler 1955; Museum of the San Ramon Valley; Bev Ortiz; EBRPD Bay Miwok curriculum"
  },
  {
    name: "Great Basin Rock Art Traditions",
    altNames: "Heizer & Baumhoff Sites, Nevada/Eastern California Petroglyphs",
    language: "Multiple (Northern Paiute, Western Shoshone, Owens Valley Paiute, Kawaiisu, Coso Shoshone, Southern Paiute, Mohave)",
    territory: "The western Great Basin from far NW Nevada to the Mojave Desert, and east of the Sierra Nevada in California. 99 sites documented in Heizer & Baumhoff's 1962 survey across 16 counties. Major concentrations: Coso Range (100,000+ petroglyphs), Lagomarsino Canyon (2,229 panels), Grimes Point (150+ boulders), Valley of Fire, Owens Valley Volcanic Tablelands, Winnemucca Lake (oldest in North America: 10,500-14,800 years old).",
    population: "Diverse peoples over 14,000+ years. The Great Basin supported Northern Paiute, Western Shoshone, Owens Valley Paiute, Kawaiisu, and earlier populations. The Coso Range rock art may have been created by Coso Shoshone peoples, but spans multiple cultural periods from Paleoindian through historic contact.",
    culture: "Heizer & Baumhoff (1962) classified Great Basin rock art into styles: Basin Curvilinear (flowing, meandering lines), Basin Rectilinear (straight lines, grids, crosshatching), Basin Representational (recognizable animals/humans), Pit-and-Groove (oldest, deepest engravings), Scratched (fine incised lines), and Painted (pictographs). Their controversial hunting magic hypothesis argued petroglyphs were ritually placed at game trails and ambush sites to ensure successful hunts. Later scholars proposed shamanic vision quest interpretations (Whitley) and increase rite/world renewal ceremonies (Garfinkel). Key motifs: bighorn sheep, deer, atlatl hunters, pattern-bodied anthropomorphs, concentric circles, entoptic designs. Coso obsidian from the Coso Range was one of the most widely traded materials in pre-contact California, linking the rock art sites to continental-scale trade networks.",
    keyDates: "14,800-10,500 years ago: Winnemucca Lake petroglyphs carved (oldest in North America) • 13,000+ years ago: Earliest Coso Range petroglyphs possible • ~10,000 BCE: Hickison Summit area occupied • ~5,000 BCE: Grimes Point petroglyphs begin • ~2,000 BCE: Atlatl Rock petroglyphs (Valley of Fire) • ~1,500 years ago: Bow and arrow replaces atlatl • 1929: Julian Steward publishes first systematic recording of Great Basin petroglyphs • 1962: Heizer & Baumhoff publish Prehistoric Rock Art of Nevada and Eastern California (99 sites, 16 counties, UC Press) • 1964: Big and Little Petroglyph Canyons designated National Historic Landmark • 1998: Whitley proposes shamanic interpretation of Coso rock art • 2001: Coso Rock Art District NHL expanded • 2013: Benson et al. date Winnemucca Lake petroglyphs as oldest in North America • 2023: Avi Kwa Ame (Spirit Mountain) designated National Monument, protecting Grapevine Canyon petroglyphs",
    sources: "Heizer & Baumhoff 1962; Steward 1929; Grant et al. 1968; Whitley 1998; Garfinkel 2007; Benson et al. 2013; NRAF; BLM; Maturango Museum; NV State Parks"
  },
  {
    name: "Northern Paiute (Numu)",
    altNames: "Paviotso, Numa",
    language: "Western Numic (Uto-Aztecan family)",
    territory: "Western Nevada, eastern California, southeastern Oregon. Major communities at Pyramid Lake, Walker River, Stillwater Marsh, Honey Lake, and numerous valleys. Bands organized around primary food sources.",
    population: "Multiple bands across the western Great Basin. Self-name 'Numu' meaning 'The People.' Band names reflected diet: Kuyuidokado (cui-ui eaters, Pyramid Lake), Toidokado (cattail eaters, Stillwater), Agai Dicutta (trout eaters, Walker Lake).",
    culture: "Fishing, duck hunting (with tule decoys), pine nut harvesting, seed gathering, rabbit drives. Annual seasonal round across ecological zones. No centralized political authority before contact. Famous for the Ghost Dance movement founded by Wovoka (1889). Sarah Winnemucca wrote 'Life Among the Piutes' (1883), the first autobiography by a Native American woman. Relations with neighboring Western Shoshone were generally peaceful; relations with Washoe were often tense.",
    keyDates: "~1000 CE: Northern Paiute arrive in western Nevada during the Numic Spread, replacing/absorbing Lovelock Culture • 1844: John C. Fremont maps Pyramid Lake, guided by Truckee (Paiute leader) • 1859-60: Paiute War (Battles of Pyramid Lake) • 1874: Last Paiute lands appropriated by U.S. government • 1883: Sarah Winnemucca publishes 'Life Among the Piutes' • 1889: Wovoka founds the Ghost Dance at Walker River • 1934: Indian Reorganization Act enables formal tribal governments",
    sources: "Fowler & Liljeblad 1978 (Handbook of North American Indians); d'Azevedo 1986; Stewart 1941; Britannica; Online Nevada Encyclopedia"
  },
  {
    name: "Western Shoshone (Newe)",
    altNames: "Sosoni, Shoshoni",
    language: "Central Numic (Uto-Aztecan family)",
    territory: "Central and eastern Nevada, parts of Idaho, Utah, and California. The largest territory of any Great Basin people. Includes Death Valley (Timbisha Shoshone). Bands: Te-Moak, Ruby Valley, Elko, Battle Mountain, Duckwater, Yomba, Deep Creek (Gosiute).",
    population: "Diverse bands spread across a vast territory. Self-name 'Newe' meaning 'The People.' The Comanche split from the Shoshone ~1700 CE and migrated to the southern Plains.",
    culture: "Pine nut harvesting (most important food), root digging, seed gathering, rabbit drives, antelope hunting. Some bands practiced limited irrigation. Family groups dispersed during lean seasons, gathered for communal hunts. Made distinctive Brownware pottery. The Treaty of Ruby Valley (1863) is central to their identity — Western Shoshone maintain their land was never ceded.",
    keyDates: "~1000 CE: Western Shoshone arrive in central Nevada during the Numic Spread • ~1700 CE: Comanche separate from Shoshone, migrate to southern Plains • 1863: Treaty of Ruby Valley signed (peace and passage, not land cession) • 1938: Te-Moak Tribe federally recognized • 1962-2004: Longest-running land case in U.S. history (Western Shoshone vs. U.S.) • 2004: $145 million award distributed — many Shoshone refused, insisting land not for sale",
    sources: "Crum 1994; Steward 1938; Thomas 1983; Handbook of North American Indians vol. 11"
  },
  {
    name: "Southern Paiute (Nuwuvi)",
    altNames: "Nuwuvi, Chemehuevi (western band)",
    language: "Southern Numic (Uto-Aztecan family), closely related to Ute",
    territory: "Southern Nevada, southern Utah, northwestern Arizona, southeastern California. The Chemehuevi are the westernmost band along the Colorado River. Key areas: Las Vegas Valley, Moapa Valley, Pahrump, Virgin River, Kaibab Plateau.",
    population: "Multiple bands across the southern Great Basin and western Colorado Plateau. Self-name Nuwuvi meaning 'The People.'",
    culture: "Desert-adapted foragers who also practiced limited horticulture along the Colorado and Virgin Rivers. Harvested mesquite beans, agave, pine nuts, yucca. Expert basket weavers. Their creation story centers on Avi Kwa Ame (Spirit Mountain near Laughlin, NV) — sacred place where the Creator made all peoples. Rock art at Valley of Fire, Grapevine Canyon, and Sloan Canyon is in their territory.",
    keyDates: "~1000 CE: Southern Paiute expand across southern Great Basin • 1776: Dominguez-Escalante Expedition encounters Southern Paiute in Utah • 1829-1848: Spanish Trail cuts through territory, devastating slave raids • 1855: Mormon missionaries establish Las Vegas Mission • 1873: Moapa River Reservation established • 2023: Avi Kwa Ame (Spirit Mountain) designated National Monument",
    sources: "Kelly 1964; Fowler & Fowler 1971; Handbook of North American Indians vol. 11; NPS; UNLV historians"
  },
  {
    name: "Washoe (Washshiw)",
    altNames: "Washo, Wa She Shu",
    language: "Hokan isolate (NOT Numic, NOT Uto-Aztecan). The only Great Basin language outside the Numic family. Distantly related to scattered Hokan languages in California, Arizona, and Baja California.",
    territory: "Centered on Da ow aga (Lake Tahoe). Bounded by Honey Lake (north), Sonora Pass (south), Sierra Nevada crest (west), Pine Nut and Virginia Ranges (east). Three bands: Welmelti (Northern), Paw La Lu (Carson Valley), Hung a let ti (Southern).",
    population: "Aboriginal population estimated ~1,500-3,000. Declined to ~300 by early 1900s. Currently ~1,550 enrolled members. The Washoe are believed to have inhabited the Lake Tahoe area for 6,000-9,000+ years — far longer than any neighboring tribe.",
    culture: "The only Great Basin tribe not speaking Numic, suggesting pre-Numic origins. Seasonal round: summer at Lake Tahoe (fishing, hunting), fall in eastern ranges (pine nut harvest — the most important social/spiritual event), winter/spring in Carson, Washoe, Eagle Valleys. World-famous basket weaving — Dat So La Lee (Louisa Keyser, 1829-1925) created masterpieces valued at $1 million+. Sacred site: Cave Rock (De ek wadapush). Linguistic isolation suggests Washoe may represent remnants of an ancient Hokan-speaking population predating all Numic peoples.",
    keyDates: "~4000 BCE: Possible origin date per scholars • ~500 CE: Kings Beach Complex emerges (early Washoe culture) • 1844: Fremont encounters Washoe • 1848-1863: Gold/silver rush devastates Washoe territory • 1857: Potato War — last armed conflict • 1917: Small land parcels purchased near Carson City • 1934: Washoe Tribe of Nevada and California recognized under Indian Reorganization Act • 2002: Custody of Lake Tahoe lands granted for cultural purposes",
    sources: "d'Azevedo 1986 (Handbook of North American Indians); Nevers 1976; Price 1980; Washoe Tribe; Tallac Historic Site; Palisades Tahoe"
  },
  {
    name: "Lovelock Culture (Pre-Numic)",
    altNames: "Pre-Numic Marsh Dwellers, Lahontan Basin Culture",
    language: "Unknown — possibly Hokan or an entirely lost language family",
    territory: "Western Nevada lakeshores and marshes — remnants of Pleistocene Lake Lahontan. Principal settlements: Pyramid Lake basin, Winnemucca Lake basin, Carson Desert, Humboldt Sink. Type site: Lovelock Cave.",
    population: "Unknown. Occupied the Lahontan Basin from ~2000 BCE to ~1000 CE. Replaced by Northern Paiute during the Numic Spread. DNA from Spirit Cave (2018) suggests genetic continuity from Paleoindian times through Lovelock Culture to modern Paiute-Shoshone.",
    culture: "Marsh-adapted specialists: 90% of diet from wetland resources. Lahontan cutthroat trout, ducks (hunted with tule decoys — oldest known in the world), mudhens, bulrush, cattail. Extensive trade with California: marine shell beads, obsidian. Buried dead in caves along ancient lake shorelines. Made distinctive twined basketry. Paiute oral tradition describes them as the Saiduka (Si-Te-Cah) — enemies living within the marshes who were defeated at Lovelock Cave.",
    keyDates: "~2000 BCE: Lovelock Culture emerges as marshes expand • ~400 BCE-100 CE: Duck decoys deposited in Lovelock Cave • ~1000 CE: Culture disappears, replaced by Northern Paiute • 1911-1924: Lovelock Cave excavated by Harrington and Loud • 1940: Spirit Cave mummy discovered (10,600 years old) • 1965-69: Heizer and Napton excavations at Lovelock Cave • 2018: DNA proves Spirit Cave ancestor linked to modern Fallon Paiute-Shoshone",
    sources: "Loud & Harrington 1929; Heizer & Napton 1970; Online Nevada Encyclopedia; Thomas 2025 (American Antiquity); Moreno-Mayar et al. 2018 (Science)"
  },
  {
    name: "The Numic Spread",
    altNames: "Numic Expansion, Plateau Shoshonean Migration",
    language: "Numic (Uto-Aztecan family) — three branches: Western Numic (Northern Paiute, Owens Valley Paiute), Central Numic (Western Shoshone, Timbisha, Comanche), Southern Numic (Southern Paiute, Ute, Chemehuevi, Kawaiisu)",
    territory: "Origin: southeastern California (Owens Valley/Death Valley). Spread across the entire Great Basin — from southern Oregon to southern Nevada, from the Sierra Nevada to the Wasatch Range. All three branches fan outward from the origin point in a distinctive wedge pattern.",
    population: "By European contact (~1800), Numic speakers occupied nearly the entire Great Basin — ~400,000 square miles. Only the Washoe near Lake Tahoe remained non-Numic.",
    culture: "Key competitive advantage: efficient seed-processing technology. Numic peoples invested in grinding small seeds — lower return per item but more sustainable. This gave them a caloric advantage over pre-Numic peoples who focused on large game hunting. The Medieval Climatic Anomaly (900-1350 CE) created droughts that may have weakened pre-Numic populations. DNA evidence (2018) complicates the simple replacement model — suggesting absorption and cultural transmission alongside population movement.",
    keyDates: "1958: Sydney Lamb proposes the Numic Spread hypothesis based on linguistic convergence • 1982: Bettinger & Baumhoff propose the seed-processing advantage mechanism • 1992: Young & Bettinger publish computer simulation of the spread • 2001: Kaestle & Smith find mtDNA discontinuity supporting population replacement • 2018: Spirit Cave DNA shows 10,000-year genetic continuity — complicating the replacement narrative",
    sources: "Lamb 1958; Bettinger & Baumhoff 1982; Young & Bettinger 1992; Kaestle & Smith 2001; Moreno-Mayar et al. 2018"
  },
  {
    name: "Pleistocene Great Basin",
    altNames: "Ice Age Nevada, Pluvial Lakes Era, Western Pluvial Lakes Tradition",
    language: "Unknown — the languages of Ice Age Great Basin peoples are entirely lost. They may have spoken ancestors of Hokan, or languages with no living descendants.",
    territory: "The entire Great Basin during the last Ice Age (25,000-9,000 years ago). Major pluvial lakes: Lake Lahontan (8,500 sq mi, NW Nevada), Lake Bonneville (20,000 sq mi, Utah), Lake Manly (Death Valley), Lake Russell (Mono Basin), plus dozens of smaller lakes in every closed basin.",
    population: "Small bands of hunter-gatherers. The Western Pluvial Lakes Tradition (11,000-8,000 years ago) represents lakeside foragers who lived along the retreating lake margins. They used distinctive Western Stemmed projectile points — different from the Clovis tradition, suggesting an independent Pacific coast migration route.",
    culture: "Paleoindian peoples hunted mammoths, giant ground sloths, ancient horses, and camels along the lakeshore margins. As lakes dried, they transitioned to the Desert Archaic pattern of broad-spectrum foraging. Key sites: Spirit Cave (10,600 yr old mummy), Wizards Beach (9,200+ yr old remains), Winnemucca Lake (14,800 yr old petroglyphs), Lovelock Cave, Hidden Cave (storage), Paisley Caves (Oregon, 14,300 yr old human DNA). The Pit-and-Groove rock art at Grimes Point may be among the oldest art in the Americas.",
    keyDates: "~15,000+ BP: First humans arrive along Lahontan lakeshores • ~14,800-10,500 BP: Winnemucca Lake petroglyphs carved • ~12,700 BP: Lake Lahontan at peak (Sehoo Highstand) • ~10,600 BP: Spirit Cave man buried • ~9,200 BP: Wizards Beach man dies at Pyramid Lake • ~9,000 BP: Lake Lahontan breaks apart into remnants • ~8,000-4,000 BP: Middle Holocene drought (lakes shrink, populations decline) • ~4,000 BP: Climate ameliorates, Lovelock Culture emerges",
    sources: "USGS; Reheis 1999; Benson et al. 2013; Moreno-Mayar et al. 2018; Thomas 2025; Beck & Jones 2010"
  },
  // ===== ROCK ART ENCYCLOPEDIA ENTRIES =====
  {
    name: "South-Central California Rock Art Tradition",
    altNames: "Geometric Polychrome Painting, Chumash-Yokuts Art Complex, Datura Vision Art",
    occupation: "~2000 BCE – 1800 CE",
    timeStart: -2000, timeEnd: 1800,
    color: "#FF5722",
    language: "Multilingual creation — artists from three language families: Penutian (Yokuts), Hokan (Chumash), and Uto-Aztecan (Kawaiisu, Tübatulabal, Kitanemuk, Tataviam). The shared art tradition crossed all linguistic boundaries.",
    territory: "The convergence zone of south-central California where six ethnic groups met: Chumash territory (Santa Barbara coast to Carrizo Plain), Yokuts (San Joaquin Valley and Sierra foothills), Kawaiisu (Tehachapi Mountains), Tübatulabal (Kern River/Lake Isabella), Tataviam (Santa Clarita/Vasquez Rocks), Kitanemuk (western Tehachapi/Antelope Valley). The Temblor Range and Carrizo Plain formed a permeable borderland.",
    population: "Tens of thousands across six groups. These were not isolated artists — the rock art reflects intense cultural interaction through trade, intermarriage, and shared ceremonies. Southern Yokuts intermarried with Kawaiisu and Tübatulabal to such an extent that Kroeber called it 'impossible to assign an exact habitat to any of them.'",
    culture: "A 'spectacular geometric polychrome painting tradition' shared across six ethnic groups. Rock art was created by shamans or ritual specialists during vision quests, often induced by Datura (Jimsonweed/toloache). Mandala forms and tiny surrounding dots may mirror phosphenic images from drug-induced altered states. Paint pigments: RED from hematite (iron oxide/red ochre), BLACK from charcoal or manganese oxide, WHITE from gypsum or diatomaceous earth, YELLOW from limonite (ocherous clay — extensively used by Yokuts), GREEN from unique earth pigment (Kawaiisu only), BLUE-GREEN possibly from azurite/malachite copper minerals (Chumash only). Pigments ground to powder, mixed with binders (water, animal fat, plant juices), applied with rodent-tail hair brushes, yucca-fiber brushes, or fingers. Painted on sandstone (Chumash, Tataviam) and granite (Yokuts, Kawaiisu, Tübatulabal) surfaces in caves, shelters, and rock faces. Lee & Hyder (1991) demonstrated that style functioned as active cultural communication — ethnic identification, territorial signaling, and reinforcement of intergroup ties. Where groups were friendly (Yokuts-Kawaiisu-Tübatulabal), styles blended. Where hostile (Kitanemuk-Tataviam), styles diverged.",
    keyDates: "~2000 BCE: Earliest pictographs in the region (est.) • ~500 BCE-500 CE: Chumash polychrome tradition develops • ~1-1200 CE: Yokuts Hairy Man pictographs at Tule River • ~500-1500 CE: Peak of the polychrome painting tradition • ~1600s: Chumash Painted Cave latest known paintings (possibly depicting 1677 solar eclipse) • 1797: Spanish Mission San Fernando established in Tataviam territory • 1882: Hoffman first documents Tule River pictographs • 1925: Kroeber publishes Handbook with extensive rock art notes • 1965: Grant publishes 'Rock Paintings of the Chumash' • 1977: Latta documents Yokuts rock art traditions • 1991: Lee & Hyder publish their interaction/boundary analysis • 2001: Carrizo Plain National Monument established, protecting Painted Rock",
    villages: ["Painted Rock (CA-SLO-79) Carrizo Plain","Chumash Painted Cave (Alaxuluxen)","Tule River Painted Rock (CA-Tul-19)","Rocky Hill (CA-Tul-63)","Vasquez Rocks (CA-LAn-363/375)","Tomo-Kahni (Kawaiisu winter village)","Teddy Bear Cave (CA-Ker-508)","Lake Isabella (CA-Ker-17)","Hurricane Deck (CA-SBa-1632)","Mt Piños (CA-Ker-77)","Temblor Range (CA-Ker-160) borderline site"],
    sources: "Lee & Hyder 1991 (JCGBA Vol.13 No.1); Grant 1965, 1967, 1978, 1981; Whitley 1992, 1998; Latta 1949, 1977; Strain 2012; Sutton 1982; Kroeber 1925; Applegate 1978; Hyder 1989; Moratto 1984; SB Museum of Natural History; BLM; CA State Parks"
  },
  {
    name: "Chumash Rock Art",
    altNames: "Santa Barbara Painted Style, Barbareño Pictographs, Ventureño Rock Paintings",
    occupation: "~2000 BCE – 1800 CE",
    timeStart: -2000, timeEnd: 1800,
    color: "#E040FB",
    language: "Chumash (Hokan language family isolate). Six related languages: Barbareño, Ineseño, Ventureño, Purisimeño, Obispeño, and Island Chumash.",
    territory: "Coastal Southern California from Malibu to San Luis Obispo, Channel Islands, and interior valleys to the Carrizo Plain. Rock art concentrated in mountain caves and shelters — over 80 painted sites documented by Grant in the Santa Barbara/Ventura/San Luis Obispo region. Most sites are near water sources in the highest mountain territory.",
    population: "15,000-22,000 at contact. The Chumash were one of California's most complex hunter-gatherer societies with hereditary chiefs, craft specialization, shell-bead currency, and plank canoe (tomol) technology.",
    culture: "The most elaborate and complex rock art tradition in California, possibly in all of North America. STYLE: Bilateral symmetry, meticulous detail, fine-line precision, delicate rendering. Tiny dots are a hallmark — designs are often 'formed by, or embellished with' them. Designs are frequently 'free-floating' without reference to each other, placed in small cavities in rock. UNIQUE ELEMENTS: The 'aquatic motif' (unique to Chumash), blue-green pigment, mandalas, 'I-beam' form, elaborate bug-like forms with antennae and fancy tails. COLORS: Red, black, white dominant. Yellow rare. One site has blue-green (possibly azurite/malachite copper minerals). SCALE: Typically small — delicate and detailed. MAKERS: Shamans/priests ('antap cult initiates) created paintings to influence supernatural beings. Paint itself was sacred — only allowed to be traded by shamans. MEANING: Religious/astronomical. May represent vision quest imagery from Datura (toloache) ceremonies, mythic figures, solstice/equinox markers, cosmological concepts. Centipede-like figures may illustrate cause of death. Circular mandalas may represent tomols carrying souls to Shimilaqsha (afterworld). ROCK: Painted in sandstone caves and shelters in the Santa Ynez, San Rafael, and Sierra Madre Mountains. Four evolutionary styles identified at Painted Cave: I (charcoal cross-hatching, oldest), II (thick red ochre geometrics), III (complex polychrome, majority), IV (finest detail, most recent).",
    keyDates: "~3550 BP: Earliest occupation at Swordfish Cave • ~2000 BP: Radiocarbon on Santa Barbara pictograph pigment — 'not over 2,000 years old' (Grant) • ~1000-1500 CE: Peak of polychrome tradition • ~1677: Possible solar eclipse recorded at Painted Cave • ~1700s: Ceremonial use of Painted Cave discontinued with Spanish contact • 1787-1804: Final Chumash use of Swordfish Cave • 1870s: Mary Brumley Noyes sketches Painted Rock pictographs • 1965: Grant publishes 'Rock Paintings of the Chumash' • 1976: Painted Cave State Historic Park established • 2001: Carrizo Plain National Monument designated",
    villages: ["Painted Rock (CA-SLO-79)","Sierra Madre Ridge (CA-SLO-100)","Painted Cave (Alaxuluxen)","Hurricane Deck (CA-SBa-1632)","San Emigdio/Mt Piños (CA-Ker-77)","Condor Cave (San Rafael Mtns)","Swordfish Cave (Vandenberg)","Burro Flats (Simi Hills — winter solstice)","Indian Caves (San Marcos Pass)"],
    sources: "Lee & Hyder 1991; Grant 1965, 1978; Lee 1979, 1984; Hyder 1989; Hyder et al. 1986; SB Museum of Natural History; CyArk; Archaeology Magazine 2024"
  },
  {
    name: "Yokuts Rock Art",
    altNames: "Tulare Painted Style, Great Central Valley Pictographs, Hairy Man Tradition",
    occupation: "~1 CE – 1800 CE",
    timeStart: 1, timeEnd: 1800,
    color: "#FFB74D",
    language: "Yokuts (Penutian language family). Dozens of distinct tribes and dialects across the San Joaquin Valley and Sierra foothills.",
    territory: "San Joaquin Valley foothills from the Tule River to the Carrizo Plain. Rock art sites concentrated in Sierra Nevada foothill granite shelters (Tulare County) and extending west to the Temblor Range border with Chumash territory.",
    population: "The Yokuts were California's largest ethnic group — estimated 50,000-70,000 at contact. Many distinct tribal groups each with their own territory, but sharing a common rock art tradition.",
    culture: "SCALE: The most distinctive Yokuts feature — some paintings are ENORMOUS, with nothing comparable in other tribal areas. The Hairy Man at CA-Tul-19 stands 2.6 meters (8.5 feet) tall. STYLE: Broad outlines, vivid polychrome panels, color outlining. UNIQUE ELEMENTS: Abstract multiple-line forms with split heads, 'Big Foot' anthropomorph, beaver-with-paddle(?) motif, pinwheels, chevrons, checkerboard patterns. The Hairy Man (Mayak Datat) pictograph family is the only known Bigfoot rock art in western North America. COLORS: Red (hematite), black (charcoal), white, YELLOW — Yokuts used yellow (limonite/ocherous clay) more extensively than any other group. At CA-Tul-93, yellow and red dashes nearly cover an entire panel. MOTIFS: Snakes (crossing entire panels), lizards, coyotes, beavers, centipedes, ghost-like figures, split-headed humans, pelt forms, grids, linked circles. ROCK: Painted on granite rock shelters in the Sierra Nevada foothills — immense boulders naturally broken to create passages and overhangs, often adjacent to rivers with bedrock mortars and village midden. MEANING: Creation story imagery (Hairy Man), shamanic vision quests, hunting magic, territorial markers. Sites situated at major villages along well-traveled trails.",
    keyDates: "~1-1200 CE: Clewlow's date range for Tule River pictographs • ~500 CE: Estimated date for main Hairy Man paintings • ~500 years ago: Village at Painted Rock archaeologically occupied • 1882: Hoffman describes Tule River pictographs • 1903: Merriam visits and documents site • 1949: Latta publishes Handbook of Yokuts Indians • 1965/1987: CA-Ker-160 declared Chumash (Grant) vs Yokuts (Sanger) — the great debate • 1977: Latta documents rock art traditions • 1991: Lee & Hyder show Yokuts influence reaching Carrizo Plain",
    villages: ["Tule River Painted Rock (CA-Tul-19)","Rocky Hill (CA-Tul-63)","CA-Tul-32 Snake Panel","CA-Tul-93 Polychrome Panel","CA-Tul-172","Painted Rock Carrizo Plain (shared)","Temblor Range (CA-Ker-160 disputed)"],
    sources: "Lee & Hyder 1991; Grant 1981; Strain 2012 (ISU); Latta 1949, 1977; Clewlow 1978; Hoffman 1882; Merriam 1903; Sanger 1987"
  },
  {
    name: "Tulare Lake (Pa'ashi) — Lost Heartland",
    altNames: "Pa'ashi, Pah-áh-su, Chentache, Chataqui, Tache Lake",
    language: "Yokuts (Penutian). Three primary nations at contact: Tachi, Chunut, Wowol — each with their own dialect.",
    dialect: "Tachi Yokuts survives. The Tachi creation story says they were made from the bottom of the lake itself.",
    timeStart: -600000, timeEnd: 2023,
    occupation: "~600,000 years (remnant of Lake Corcoran) — present (2023 flooding)",
    territory: "Southern San Joaquin Valley: up to 100 miles long, 30 miles wide at peak (1852). Fed by Kings, Kaweah, Tule, and Kern Rivers. Overflow north via Summit Lake and Fresno Slough to San Joaquin River.",
    population: "Possibly the largest population of Native Americans north of Mexico. Three Yokuts nations: Tachi (north/west shore), Chunut (NE, Kaweah Delta), Wowol (SE, Atwell Island). Thousands of people in dozens of villages.",
    centerLat: 35.88, centerLng: -119.68, zoom: 9,
    color: "#4FC3F7",
    description: "The largest freshwater lake west of the Mississippi by surface area — up to 690 square miles, 46 feet deep at peak in 1852. Pedro Fages called the valley 'a labyrinth of lakes and tulares' in 1773. The Yokuts thrived here for millennia — Atwell's Island (Sand Ridge) contains artifacts spanning the entire California cultural horizon. The Tachi used clamshell disk currency (keha) and the more valuable clamshell cylinders (humna). The lake was engineered out of existence by the early 1900s as rivers were dammed and flows diverted. It briefly and dramatically reappeared in 2023 when atmospheric rivers produced 400% snowpack — a ghost returning to remind California of what was stolen. The Tachi Yokut Tribe (Santa Rosa Rancheria near Lemoore) remains the most prominent surviving Yokuts tribal entity.",
    villages: ["Udjiu (near Coalinga)","Walna (near Lemoore)","Chawlowin (Atwell Island/Alpaugh)","Miketsiu (Kaweah Delta)","Sukuwutnu (Wowol, eastern shore island)","Colon (near Huron)","Waiu (on Mussel Slough)","Summit Lake (overflow point)"],
    keyDates: "~600,000 BP: Forms as remnant of Lake Corcoran • 1772: Fages first Spanish visit • 1850-1878: Overflow to San Joaquin 19 of 29 years • 1878: Last natural overflow • 1858-59: Ethnic cleansing of Yokuts begins • 1890s: Nearly dry from diversions • 1942, 1969, 1983, 1997: Brief reappearances • 2023: Dramatic return from atmospheric rivers (400% snowpack)",
    sources: "Kroeber 1925; Latta 1949/1978; Cook 1955; Austin 2013; NASA Earth Observatory 2023; Open Rivers Journal 2023; Blunt & Negrini 2015"
  },
  {
    name: "Lake Corcoran — California's Inland Sea",
    altNames: "Great Valley Lake, Central Valley Inland Sea",
    language: "Pre-human: Lake Corcoran existed ~758,000–665,000 years ago. No human inhabitants — it predates human arrival in the Americas by hundreds of thousands of years.",
    timeStart: -758000, timeEnd: -600000,
    occupation: "~758,000–665,000 years ago (~100,000 years with 15 dry-wet cycles)",
    territory: "Most or all of the Central Valley: Tehachapi Mountains (south) possibly to the Sutter Buttes (north). Comparable in size to Lake Michigan. ~30,000+ sq mi.",
    population: "Pre-human. Wildlife: mammoths, camels, dire wolves, giant ground sloths, short-faced bears, early horses, saber-toothed cats.",
    centerLat: 37.2, centerLng: -120.3, zoom: 7,
    color: "#1565C0",
    description: "An enormous freshwater lake covering most of California's Central Valley — potentially the size of Lake Michigan. Generally shallow (~7 ft average, up to 30 ft deep), with a high water mark ~210 ft above sea level. Formed when tectonic uplift of the Coast Ranges blocked the valley from the Pacific. Originally drained south into Monterey Bay via the Salinas River. Then, ~600,000 years ago, rising waters catastrophically breached the Coast Ranges — carving the Carquinez Strait 100+ feet deep and literally creating San Francisco Bay. This single event simultaneously drained the inland sea and birthed the Bay. The Corcoran Clay — 50 to 120 feet thick, 200-800 feet below the surface — is its geological legacy, and the foundation of the Central Valley's agricultural fertility. Three remnant lakes survived: Tulare, Buena Vista, and Kern — all later drained by humans.",
    villages: [],
    keyDates: "~758,000 BP: Lake forms as Coast Range uplift seals Central Valley • ~665,000 BP: Lake level stabilizes • ~600,000 BP: Catastrophic breach carves Carquinez Strait, creates San Francisco Bay, drains inland sea • Remnant lakes persist: Tulare, Buena Vista, Kern",
    sources: "Frink & Kues 1954 (AAPG Bulletin); USGS Professional Papers; KVPR 'Central Valley Roots' 2024"
  },
  {
    name: "The Owens River Cascade",
    altNames: "Owens River Chain, Seven Lakes of the Eastern Sierra, Sierra-to-Death Valley Hydrological Chain",
    language: "Multiple peoples along the cascade: Kutzadika'a Paiute (Mono Lake), Nüümü/Owens Valley Paiute (Owens Valley), Timbisha Shoshone (Death Valley). All Numic (Uto-Aztecan) speakers.",
    timeStart: -760000, timeEnd: 1913,
    occupation: "Lakes: ~760,000 years to present (shrinking). Human use: ~15,000 years to present.",
    territory: "A chain of 7 interconnected lakes stretching hundreds of miles from near Yosemite to Death Valley: Lake Russell (Mono) → Adobe Lake → Owens Lake (Patsiata) → China Lake → Searles Lake → Lake Panamint → Lake Manly (Death Valley). During wet periods, Sierra Nevada glacial melt cascaded through the chain — overflow from each lake feeding the next.",
    population: "Owens Valley Paiute bands: multiple communities of irrigators. Timbisha Shoshone at Death Valley: continuous 1,000+ year occupation.",
    centerLat: 36.5, centerLng: -117.5, zoom: 8,
    color: "#29B6F6",
    description: "One of the most remarkable hydrological systems in western North America. During the Pleistocene, seven lakes were linked by overflow — Sierra Nevada glacial melt cascading from Mono Lake (760,000+ years old, one of the oldest in North America) all the way to Lake Manly in Death Valley (the lowest point in the Western Hemisphere). Mono Lake drained south through the Adobe Hills spillway to Owens Lake, which overflowed south to China Lake, then Searles Lake (where the famous Trona Pinnacles formed underwater), and in the wettest periods continued through Panamint Valley to fill Death Valley to 600+ feet deep. The cascade was severed by the Los Angeles Aqueduct in 1913, which diverted the Owens River and dried Owens Lake by 1926. The Mono Basin extension (1941) further damaged the chain. Today the physical connections remain but the water that once flowed through them is in Los Angeles.",
    villages: ["Kutzadika'a camps (Mono Lake shore)","Nüümü irrigation channels (Owens Valley)","China Lake Paleoindian sites","Timbisha villages (Death Valley)"],
    keyDates: "~760,000 BP: Mono Lake (Lake Russell) begins forming • ~600,000 BP: Lake Manly deepest (Blackwelder stand, 600+ ft) • ~15,000 BP: First humans along cascade • ~12,900 BP: Widespread occupation at China Lake (Younger Dryas) • ~10,000 BP: Trona Pinnacles fully formed • 1913: LA Aqueduct severs chain at Owens Valley • 1926: Owens Lake completely dry • 1941: Mono Basin extension further damages system",
    sources: "Smith & Street-Perrott 1983; Reheis et al. 2014; Benson et al. 1990/1996; Russell 1885; USGS"
  },
  {
    name: "Nüümü Water Rights — Payahuunadü",
    altNames: "Owens Valley Paiute, Eastern Mono, Payahuunadü (Land of Flowing Water)",
    language: "Western Numic (Uto-Aztecan). Owens Valley Paiute dialect — closely related to Northern Paiute but considered a separate language by linguists.",
    dialect: "Owens Valley Paiute — the language of America's oldest known irrigators",
    timeStart: -400, timeEnd: 2026,
    occupation: "400+ years of documented irrigation (radiocarbon-dated) — likely much longer. Continuous inhabitation >10,000 years.",
    territory: "Payahuunadü — the 'Land of Flowing Water.' Owens Valley from Bishop south to Owens Lake. The most watered valley east of the Sierra, fed by snowmelt from the highest peaks in the Lower 48.",
    population: "Pre-contact: ~2,000+ in multiple bands. Each band managed its own irrigation systems.",
    centerLat: 36.8, centerLng: -118.2, zoom: 9,
    color: "#EF5350",
    description: "The Nüümü (Owens Valley Paiute) practiced irrigation agriculture in their valley — Payahuunadü, the 'Land of Flowing Water' — for at least 400 years before European contact, confirmed by radiocarbon dating (Haverstock et al. 2022). They diverted streams through earthen channels to expand wild seed plots, particularly taboose (a wild grain). This makes them among the oldest known irrigators in North America. In 1863, the U.S. Cavalry drove 30+ Nüümü into Owens Lake and shot them as they swam. Nearly 1,000 were then force-marched to Fort El Tejon. Those who survived and returned home found settlers occupying their lands. In 1913, William Mulholland's 233-mile Los Angeles Aqueduct diverted the Owens River. By 1924, Owens Lake was completely dry and 50 miles of river were gone. Ranchers dynamited the aqueduct 17 times in protest. By the 1930s, LA owned 95% of all valley farmland. The dry lakebed became the nation's worst dust pollution source — 4 million tons of noxious alkali dust per year, costing LA $2.5 billion in dust control. The theft of Owens Valley water is the story behind the film Chinatown. Today the Big Pine Paiute Tribe, Bishop Paiute Tribe, Fort Independence Indian Community, and Lone Pine Paiute-Shoshone Reservation maintain their presence in Payahuunadü.",
    villages: ["Big Pine Paiute (Payahuunadü center)","Bishop Paiute (northern Owens Valley)","Fort Independence (central Owens Valley)","Lone Pine Paiute-Shoshone (southern Owens Valley)","Irrigation channels (multiple sites, radiocarbon-dated)"],
    keyDates: "~1600 CE: Earliest radiocarbon-dated irrigation channels • 1863: U.S. Cavalry massacre at Owens Lake • 1863: Force march of ~1,000 Nüümü to Fort El Tejon • 1905-07: Fred Eaton & William Mulholland acquire water rights through deception • 1913: LA Aqueduct opens ('There it is. Take it.') • 1924: Owens Lake completely dry • 1924-27: Farmers dynamite aqueduct 17 times • 1930s: LA owns 95% of valley farmland • 1994: Mono Lake Committee wins partial flow restoration • 2001: Great Basin Unified APCD orders dust mitigation • Today: $2.5 billion spent on dust control",
    sources: "Haverstock et al. 2022 (radiocarbon dating); Reisner 1986 'Cadillac Desert'; Walton 1992 'Western Times and Water Wars'; Sierra Club; EPA dust records"
  },
  {
    name: "Kutzadika'a — Mono Lake Paiute",
    altNames: "Kutzadika, Mono Lake Paiute, Fly Pupae Eaters",
    language: "Western Numic (Uto-Aztecan). Northern Paiute dialect. Kutzadika'a = 'brine fly pupae eaters'",
    timeStart: -3000, timeEnd: 2026,
    occupation: "At least 5,000 years (estimated). Mono Lake itself is 760,000+ years old.",
    territory: "Mono Basin — one of the oldest continuously occupied landscapes in the Great Basin. Mono Lake (now ~65 sq miles) is fed by Rush, Lee Vining, Walker, and Parker Creeks from the eastern Sierra.",
    population: "~200-300 at contact (small bands rotating seasonally around the lake).",
    centerLat: 38.0, centerLng: -119.0, zoom: 10,
    color: "#42A5F5",
    description: "The Kutzadika'a harvested the pupae of the alkali fly (Ephydra hians) from Mono Lake's alkaline shallows — a protein-rich food source unique in all of North America. Mark Twain described the flies as a 'miracle' food. The lake's tufa towers — calcium carbonate spires formed underwater — became exposed landmarks after LA diverted tributary streams in 1941. The lake dropped dramatically, exposing 14,700 acres of lakebed and creating a land bridge that threatened nesting colonies of California gulls on Negit Island. The Mono Lake Committee, founded 1978, won a landmark legal victory in 1994 requiring LA to partially restore lake levels to 6,391 feet. As of October 2025, the lake sits at 6,382.4 ft — still 9.6 feet below the mandated target, thirty years later. Mono Lake is one of the oldest lakes in North America (760,000+ years), a remnant of ancient Lake Russell which was even larger during the Pleistocene.",
    villages: ["Seasonal camps around Mono Lake shore","Lee Vining Creek gathering area","Rush Creek camps","Paoha Island (sacred site)"],
    keyDates: "~760,000 BP: Mono Lake begins forming • ~3000 BCE: Evidence of human use • 1941: LA diverts four tributary streams • 1978: Mono Lake Committee founded • 1994: Court orders lake restoration to 6,391 ft • 2025: Lake at 6,382 ft (still 9.6 ft below target)",
    sources: "Russell 1885; Mono Lake Committee; LADWP monitoring data; Mark Twain 'Roughing It' 1872"
  },
  {
    name: "Lake Cahuilla — Salton Basin",
    altNames: "Ancient Lake Cahuilla, Blake Sea, Salton Sea predecessor",
    language: "Cahuilla (Uto-Aztecan), also Kumeyaay, Quechan, Cocopah territories bordered the lake.",
    timeStart: -20000, timeEnd: 1700,
    occupation: "Periodic fillings over 20,000+ years. Last filling: a few hundred years ago.",
    territory: "Salton Basin, SE California: 2,000+ sq mi, 300+ feet deep, ~100 miles long × 35 miles wide — 6× the modern Salton Sea. Formed when the Colorado River delta dammed the Gulf of California and the river periodically shifted north.",
    population: "Cahuilla and neighboring peoples relied on the lake for fish and waterfowl. Wave-cut shorelines mark high water at multiple elevations.",
    centerLat: 33.3, centerLng: -115.8, zoom: 9,
    color: "#1E88E5",
    description: "A massive lake that periodically filled the Salton Basin when the Colorado River shifted its course northward instead of flowing into the Gulf of California. At full extent, Lake Cahuilla was six times larger than the modern Salton Sea — 100 miles long, 35 miles wide, and over 300 feet deep. The lake filled and receded at least four times in the last 1,300 years. Ancient fish traps and wave-cut shorelines at various elevations prove that the Cahuilla and neighboring peoples adapted their settlements to track the lake's changing levels. The modern Salton Sea (created accidentally in 1905 when a Colorado River irrigation canal breached) sits in the same basin — a tiny echo of the ancient lake. Lake Cahuilla was last full only a few centuries ago.",
    villages: ["Cahuilla fish trap sites (ancient shorelines)","Torres Martinez Desert Cahuilla (modern reservation)","Ancient Village sites at multiple elevations"],
    keyDates: "~20,000 BP: Early lake fillings • ~AD 700-1700: Multiple filling/drying cycles • ~AD 1700: Last natural filling drains • 1853: William Blake surveys dry basin • 1905: Accidental creation of modern Salton Sea • 2024: Salton Sea shrinking, exposing toxic dust",
    sources: "Wilke 1978; Waters 1983; Laylander 1997; Wikipedia 'Lake Cahuilla'"
  },
  {
    name: "Lahontan Remnants — Pyramid, Walker & the Sinks",
    altNames: "Pyramid Lake (Kuyuidokado homeland), Walker Lake (Agai Dicutta), Humboldt Sink, Carson Sink, Black Rock Desert",
    language: "Northern Paiute (Western Numic, Uto-Aztecan). Band names reflect food sources: Kuyuidokado = 'cui-ui eaters' (Pyramid Lake), Agai Dicutta = 'trout eaters' (Walker Lake), Toituked = 'cattail eaters' (Carson River).",
    timeStart: -12000, timeEnd: 2026,
    occupation: "15,000+ years (Winnemucca Lake petroglyphs ~14,800 BP). Continuous habitation since.",
    territory: "Fragments of ancient Lake Lahontan across NW Nevada: Pyramid Lake (188 sq mi, never dried), Walker Lake (dropping fast from diversions), Humboldt Sink (Humboldt River terminus), Carson Sink (Carson River terminus), Black Rock Desert (vast playa).",
    population: "Pyramid Lake: Kuyuidokado band, several hundred at contact. Pyramid Lake Paiute Tribe today: 2,800+ enrolled members.",
    centerLat: 40.03, centerLng: -119.0, zoom: 7,
    color: "#42A5F5",
    description: "When Lake Lahontan fragmented ~9,000 years ago, it left behind the modern landscape of northern Nevada: Pyramid Lake (which has never dried up), Walker Lake (dying from irrigation diversions), the Humboldt and Carson Sinks (terminal basins of Nevada's interior rivers), and the vast Black Rock Desert playa. Each remnant supported distinct Northern Paiute bands. Pyramid Lake's Kuyuidokado harvested the endangered cui-ui fish — found nowhere else on Earth. The 1905 Derby Dam diverted the Truckee River for irrigation, devastating Pyramid Lake's water supply. Walker Lake has dropped 160 feet since 1882 from Walker River diversions; its Lahontan cutthroat trout population collapsed (last confirmed catch 2009). The Humboldt Sink — terminus of the 330-mile Humboldt River — was the site of Lovelock Cave, where 2,000-year-old duck decoys were found. The Forty Mile Desert between the Humboldt and Carson Sinks was the most dreaded stretch of the California Trail. 10,000 years ago, you could sail from Hawthorne to Winnemucca without touching land.",
    villages: ["Pyramid Lake Paiute Reservation","Lovelock Cave (duck decoys, 2000+ years old)","Walker River Paiute Colony","Stillwater Marsh (Carson Sink)","Fallon Paiute-Shoshone Colony"],
    keyDates: "~14,800 BP: Winnemucca Lake petroglyphs carved at lake's edge • ~12,000 BP: Last time all Lake Lahontan basins connected • ~9,000 BP: Lake fragments into modern remnants • ~AD 700-1350: Late Holocene lakes in Carson Sink • 1905: Derby Dam diverts Truckee River (Pyramid Lake impact) • 1882-2010: Walker Lake drops 160 ft from diversions • 2009: Last Lahontan cutthroat caught in Walker Lake",
    sources: "Morrison 1964; Benson et al. 2013; USGS; Pyramid Lake Paiute Tribe; Heizer & Baumhoff 1962; Dansie 1997"
  },
  {
    name: "Martis Complex",
    altNames: "Martis Culture, Martis People, Martis Tribe",
    language: "Unknown — possibly ancestral to Washo (Hokan isolate) or Maidu (Penutian)",
    dialect: "No linguistic data survives — culture identified solely through archaeology",
    timeStart: -2000, timeEnd: 500,
    occupation: "~4,000–1,500 BP (2000 BCE – 500 CE) — Middle Archaic period",
    territory: "Northern Sierra Nevada, approximately 10,000 square miles spanning the mid-to-high elevations of the Transition Zone. From Plumas County south to the Stanislaus River, concentrated along the Sierra crest west of Lake Tahoe. Encompasses the upper watersheds of the Yuba, American, Bear, Feather, and Truckee rivers across Nevada, Placer, Plumas, and Sierra counties.",
    population: "Unknown — seasonal camps suggest dispersed bands rather than large permanent settlements",
    centerLat: 39.35, centerLng: -120.45, zoom: 9,
    color: "#FFB300",
    description: "The Martis Archaeological Complex is a Middle Archaic culture of the northern Sierra Nevada, first defined by Heizer and Elsasser (1953) and expanded by Elsasser (1960). Named for Martis Valley near Truckee, it is characterized by a distinctive basalt chipped-stone industry of large, heavy projectile points, spokeshave-notched scrapers, large biface blades, and a general lack of obsidian. The Martis people followed a seasonal round: permanent winter camps below 4,000 feet near streams or lakes with acorn groves and fishing; summer encampments at higher elevations (up to 7,640 ft) near springs, meadows, and forest openings with milling slicks and bedrock mortars for seed processing. Their most distinctive cultural expression is Style 7 rock art — 'High Sierra Abstract-Representational' petroglyphs pecked into glacially polished bedrock surfaces (primarily granite). 92 confirmed Style 7 sites have been documented with over 5,253 petroglyph elements. Common motifs include concentric circles, wavy lines, zigzags, bear tracks (found at 51 sites), and occasional anthropomorphic figures. The four largest sites — Meadow Lake, Soda Springs, Lakes Basin, and Hawley Lake — each contain 500+ elements. Elsasser and Gortner (1991) reaffirmed the Martis Complex as a legitimate archaeological concept, with Style 7 petroglyphs now recognized as an additional diagnostic trait alongside the basalt tool industry. The Martis Complex boundaries overlap the ethnographic territories of both the Maidu and Washo peoples, suggesting a deep cultural stratum that predates the modern tribal landscape.",
    villages: ["Martis Valley (type site, near Truckee)", "Donner Pass (CA-NEV-4, 205 petroglyphs)", "Meadow Lake (CA-NEV-3, 500+ elements, NRHP)", "Soda Springs (CA-PLA-26, 750 elements)", "Hawley Lake (CA-SIE-1, 547+ elements, NRHP)", "Lakes Basin (CA-PLU-88, 578+ elements, NRHP)", "Snow Mountain (CA-PLA-825, highest site at 7,640 ft)", "Wabena Point (CA-PLA-591, Royal Gorge overlook)", "Long Lake (CA-PLU-4, 200+ elements)", "Bear Valley (CA-PLA-504, lowest site at 4,620 ft)"],
    keyDates: "~4000 BP: Martis Complex established in northern Sierra Nevada • ~3000 BP: Peak florescence — most intensive period of site utilization and Style 7 rock art creation • ~1770 BCE–950 BCE: Radiocarbon dates for North Fork American River petroglyph sites • 1860s: Alfred Hart photographs petroglyphs during railroad construction at Cisco Grove • 1929: Steward publishes first descriptions of Meadow Lake and Donner Pass sites • 1953: Heizer and Elsasser define the Martis Complex • 1966: Payen identifies 7 rock art styles — Style 7 becomes the high-Sierra designation • 1984: Gortner publishes 'Ancient Rock Carvings of the Central Sierra' — discovers 50+ new sites along American River • 1991: Elsasser & Gortner reaffirm Martis Complex validity • 1994: Lakes Basin excavation (CA-PLU-88) provides first major stratigraphic evidence linking Style 7 rock art and Martis artifacts • 1999: Foster, Betts & Sandelin document 92 Style 7 sites with 5,253+ elements",
    sources: "Heizer & Elsasser 1953; Elsasser 1960; Payen 1966; Gortner 1984/1986; Elsasser & Gortner 1991; Neuenschwander 1994; Foster, Betts & Sandelin 1999"
  },
  {
    name: "Chumash",
    altNames: "Obispeño, Purisimeño, Ineseño/Samala, Barbareño, Ventureño, Emigdiano, Cuyama, Island Chumash (Isleño)",
    language: "Chumashan (isolate language family — 6+ distinct languages, not closely related to any other California language family)",
    dialect: "Six mutually unintelligible languages: Obispeño, Purisimeño, Ineseño (Samala), Barbareño, Ventureño, and Island Chumash. Emigdiano and Cuyama are considered dialects of Barbareño or separate varieties. Once classified as Hokan, now treated as an isolate family.",
    timeStart: -11000, timeEnd: 1850,
    occupation: "13,000+ years (Arlington Springs, Santa Rosa Island: 13,000 BP) — Spanish missionization began 1772",
    territory: "7,000 square miles of coastal and interior southern California — from Morro Bay in the north to Malibu Canyon in the south, east to Mount Piños and the western San Joaquin Valley. Three Channel Islands: Santa Cruz (Limuw), Santa Rosa, San Miguel. Encompassing present-day San Luis Obispo, Santa Barbara, Ventura, and parts of Kern and Los Angeles counties.",
    population: "15,000–20,000 at contact (1770). Collapsed to ~200 by 1900. Today estimated 2,000–7,000 descendants.",
    centerLat: 34.65, centerLng: -119.70, zoom: 8,
    color: "#E65100",
    description: "The Chumash were among the most complex hunter-gatherer societies in North America. Their territory spanned 7,000 square miles of California's central and southern coast, from Morro Bay to Malibu, inland to the San Joaquin Valley, and across three Channel Islands. The name 'Chumash' derives from Michumash — 'makers of shell bead money' — the term mainland people used for the islanders. Their creation story places the first Chumash on the island of Limuw (Santa Cruz Island), where Earth Mother Hutash built a rainbow bridge (wishtoyo) to the mainland; those who fell became dolphins. The tomol, a sewn-plank canoe up to 30 feet long built from driftwood redwood, enabled a maritime trade network spanning the Santa Barbara Channel. Shell bead money ('achum) minted on the islands circulated throughout the region. Five Spanish missions were established in Chumash territory (San Luis Obispo 1772, San Buenaventura 1782, Santa Barbara 1786, La Purísima 1787, Santa Ynez 1804) — more than in any other California indigenous group. The 1824 Chumash Revolt saw warriors attack missions at Santa Ynez, La Purísima, and Santa Barbara before some fled to the interior mountains. Chumash rock art is among the most elaborate in North America — polychrome pictographs in red, black, white, yellow, green, and rare blue pigments. Key sites include Chumash Painted Cave (Alaxuluxen), the Carrizo Plain Painted Rock, Sapaksi (House of the Sun) on the Sierra Madre Ridge, the Pleito site with its extraordinary blue pigments, and Burro Flats (a globally significant solstice marker). Robinson (2010, 2011) demonstrated through GIS analysis that rock art sites were not isolated in remote sacred spaces but embedded within daily movement corridors and territorial claims. The Santa Ynez River — once supporting the largest steelhead run south of San Francisco (25,000+ adults) — has been devastated by three dams. The Santa Ynez Band of Chumash Indians is the only federally recognized Chumash tribe, maintaining the 127-acre Santa Ynez Reservation where Zanja de Cota Creek still flows through tribal lands.",
    villages: ["Syukhtun (Santa Barbara — capital village)", "Shisholop (Ventura)", "Humaliwo (Malibu — 'the surf sounds loudly')", "Soxtonocmu' (SBa-167, Santa Ynez Valley)", "Hawamiw (SBa-1460, inland from Soxtonocmu')", "Matapuan (San Emigdio Hills)", "Tashlipun (San Emigdio Hills)", "Tecuya (San Emigdio Hills)", "K'o'owhsup (interior network center)", "Mishopshno (Carpinteria)", "Sapaksi (House of the Sun — seasonal ceremonial site, Sierra Madre Ridge)"],
    keyDates: "~13,000 BP: Arlington Springs human remains on Santa Rosa Island • ~3,000-4,000 BP: Carrizo Plain Painted Rock pictographs begin • ~1,500 BP: Tomol tradition well established • 1542: Cabrillo expedition — first European contact • 1772: Mission San Luis Obispo founded (first in Chumash territory) • 1782-1804: Four more missions established • 1824: Chumash Revolt — attacks on three missions, flight to interior • 1850s: Reservation era begins • 1901: Santa Ynez Reservation established (127 acres) • 1920: Gibraltar Dam blocks steelhead on Santa Ynez River • 1953: Bradbury Dam/Lake Cachuma — 99% steelhead decline, Chumash cultural sites inundated • 1978: Lee & Horne identify Sapaksi as the House of the Sun • 2010: Robinson GIS analysis reveals rock art embedded in Chumash landscape • 2024: Chumash Heritage National Marine Sanctuary designated",
    sources: "Kroeber 1925; Grant 1965, 1978; Lee & Horne 1978; Lee & Hyder 1991; Johnson 1978, 1988; Hudson & Underhay 1978; Robinson 2010, 2011; Reeves, Bury & Robinson 2009; NPS; Santa Ynez Band of Chumash Indians; Applegate 2007 (Samala dictionary)"
  },
  {
    name: "Eastern Pomo (Clear Lake Pomo)",
    altNames: "Xa-bati'n people, Kūla'napō, Kabē'napō, Big Valley Pomo",
    language: "Eastern Pomo (Pomoan/Hokan)",
    dialect: "Eastern Pomo — one of 7 mutually unintelligible Pomoan languages. Also called 'Clear Lake Pomo'",
    timeStart: -12000, timeEnd: 2026,
    occupation: "~14,000 years — present (continuous occupation, among oldest in California)",
    territory: "Big Valley and the main shores of Clear Lake, Lake County, California. Boundaries extended south to Cobb Mountain and east to Putah Creek. The Kūla'napō and Kabē'napō were two distinct political groups within Big Valley.",
    population: "~8,000 total Pomo (all groups) at contact (1770). By 1851 est. 3,500-5,000. Barrett counted 747 in 1908. Today ~10,300 Pomo in the US (2010 Census).",
    centerLat: 39.00, centerLng: -122.75, zoom: 11,
    color: "#8D6E63",
    description: "The Eastern Pomo occupied the shores of Clear Lake — the oldest lake site in North America (~2.5 million years of continuous lakes). The word 'Pomo' derives from their language: pʰoːmoː meaning 'those who live at red earth hole,' referencing red magnesite deposits mined for bead-making. Barrett (1908) recorded dozens of named village and camp locations from elder informants, revealing a seasonal settlement pattern — high ground in winter, lakeshores in summer during fish spawning season. The lake teemed with blackfish, carp, suckers, bass, and the endemic Clear Lake hitch (chi) found nowhere else on Earth. Acorns from seven oak species supplemented fish as dietary staples. The Eastern Pomo practiced the Kuksu religion — elaborate ceremonies in subterranean roundhouses where dancers impersonated Guksu, a red-nosed healing spirit from the south. Pomo basketry is considered the finest in California, using both coiled and twined techniques with feathers, shells, and beads. William Ralganal Benson and Mary Knight Benson became famous basket-makers in the early 1900s. Mount Konocti (4,305 ft), the sacred volcano on the lake's south shore, was never inhabited — too holy — but its obsidian was traded across Northern California. In 1847, Andrew Kelsey and Charles Stone bought land at the lake and enslaved the Pomo. Chief Augustine's wife sabotaged their gunpowder, warriors killed both men, and the U.S. Cavalry responded with the Bloody Island Massacre (1850), killing women, children, and elderly at the spring fish spawn. Today, the Big Valley Band of Pomo Indians, Elem Indian Colony, Habematolel Pomo, and Robinson Rancheria maintain communities around Clear Lake. The Elem Pomo live on a 50-acre reservation surrounded on three sides by mercury-contaminated lake water from the Sulphur Bank Mine Superfund site. Since European settlement, 84% of Clear Lake's original wetlands have been destroyed.",
    villages: ["Kūla'napō (Big Valley — 'Water-Lily Village')", "Kabē'napō (Big Valley — 'Rock Village')", "Xa-be'l (Lakeport area)", "Shigom (Lucerne area)", "Soda Bay Village", "Clearlake Oaks Villages"],
    keyDates: "~14,000 BP: Earliest occupation at Anderson Marsh • ~8,500 BP: Mostin culture — acorn economy begins • ~5,000 BP: Shell bead currency manufactured • 1821: Spanish contact • 1847: Kelsey & Stone enslave Pomo • 1849: Chief Augustine's revolt • 1850: Bloody Island Massacre (May 15) • 1856: Forced removal to Mendocino Reservation • 1872: Ghost Dance adopted • 1908: Barrett documents 747 remaining Pomo • 1914: Clear Lake Dam built • 1927: Middle Creek wetlands destroyed • 2005: Bloody Island memorial plaque placed",
    sources: "Barrett 1908; Kroeber 1925; Loeb 1926; Stewart 1940; Heizer 1953, 1963, 1973; Parker 1994; Richerson 2008; McLendon & Lowy 1978"
  },
  {
    name: "Southeastern Pomo (Elem Pomo)",
    altNames: "Elem, Kaogoma, Koi, Kamdot, Makh'el-chel, Lower Lake Pomo, Sulfur Bank Pomo",
    language: "Southeastern Pomo (Pomoan/Hokan)",
    dialect: "Southeastern Pomo — distinct from Eastern Pomo. Called the lake xa-bīte'n (dialectic variant of Eastern Pomo xa-bati'n)",
    timeStart: -12000, timeEnd: 2026,
    occupation: "~14,000 years — present (Rattlesnake Island occupied 5,000+ years)",
    territory: "Eastern arm of Clear Lake — centered on three island communities: Rattlesnake Island (Elem), Indian Island (Koi), and Anderson Island (Kamdot). The southeastern shore and Anderson Marsh.",
    population: "Among the largest groups in prehistoric California (per Anderson Marsh SHP). Exact pre-contact figures unknown. Today the Elem Indian Colony has ~100 enrolled members.",
    centerLat: 38.96, centerLng: -122.64, zoom: 12,
    color: "#A1887F",
    description: "The Southeastern Pomo were the economic powerhouse of Northern California for 5,000 years. The Kaogoma people of Rattlesnake Island controlled two extraordinary resources: the Borax Lake obsidian flow — one of the richest obsidian sources in the region, prized for tool-making — and shell bead currency. Washington clams gathered at Bodega Bay were traded inland to Clear Lake where Elem artisans cut, ground, and drilled the shells into small disks. Strings of these beads were the medium of exchange throughout the state for millennia. Rattlesnake Island (CA-LAK-76/89) contains 6 archaeological sites spanning 5,000 years. Gibbs (1853) first published the Southeastern Pomo village name Elem (?lem). Powers (1877) visited and wrote about the Makh'el-chel. The three Southeastern Pomo communities — Elem on Rattlesnake Island, Koi on Indian Island (a political/religious center for 8,000 years, housing 300 people), and Kamdot on Anderson Island — lived on the water itself, building tule houses and using tule reed boats for fishing and transport. Anderson Marsh State Historic Park now protects 24 prehistoric Koi sites. A 6-year-old survivor of the Bloody Island Massacre, Ni'ka (Lucy Moore), hid underwater breathing through a tule reed — her descendants formed the Lucy Moore Foundation. Today the Elem Pomo live in environmental injustice: their 50-acre reservation abuts the Sulphur Bank Mercury Mine Superfund site, where mine waste was bulldozed directly into the lake in the 1920s.",
    villages: ["Elem (Rattlesnake Island — political/religious center)", "Koi Village (Indian Island — 300+ people, 8,000+ years)", "Kamdot (Anderson Island)", "Anderson Marsh settlements"],
    keyDates: "~14,000 BP: Earliest occupation at Anderson Marsh • ~5,000 BP: Elem community established, shell bead economy • 1832-33: Hudson's Bay Company trappers visit • 1851: Gibbs documents Elem; McKee treaty negotiations • 1856: Most Pomo forced to Mendocino Reservation; Koi allowed to stay as cheap labor • 1870-72: Koi attend Ghost Dance — return to find island stolen • 1872: Elem Indian Colony established • 1920s: Mercury mine waste bulldozed into lake • 2005: Bloody Island memorial",
    sources: "Barrett 1908; Gibbs 1853; Powers 1877; Praetzellis 1981; Parker 1994; Harrington 1948; White et al. 1994; Wolf Creek Archeology"
  },
  {
    name: "Kashaya Pomo (Southwestern Pomo)",
    altNames: "Kashia, 'People From the Top of the Land', 'Expert Gamblers'",
    language: "Kashaya (Pomoan/Hokan)",
    dialect: "Kashaya — the most viable of the seven Pomoan languages, with 10+ fluent speakers as of 2011",
    timeStart: -12500, timeEnd: 2026, occupation: "12,500+ years",
    territory: "Sonoma Coast — Gualala River to Duncan's Point, inland to Dry Creek confluence (~30 mi coast, ~30 mi inland)",
    population: "~1,500 pre-contact; ~1,000 enrolled members today (Stewarts Point Rancheria)",
    centerLat: 38.55, centerLng: -123.25, zoom: 11,
    color: "#E57373",
    description: "The Kashaya — 'People From the Top of the Land' — are the only Pomo group to live on the Pacific coast. The name 'Kashaya' ('expert gamblers') was given by a neighboring Pomo group. Their principal village Metini, near what became Fort Ross, was the site of a ceremonial assembly house. The Kashaya lived a sophisticated seasonal round: coastal camps in summer for shellfish, abalone, seaweed, and sea mammals; inland ridgetop villages in winter for acorns and game. The Kashaya's first prolonged contact with outsiders came in 1812 when Russian traders built Fort Ross — the Kashaya called the Russians 'undersea people' because their ships appeared to rise from the horizon. For 30 years, a tri-cultural community (Russian, Aleut, Kashaya) coexisted. UC Berkeley archaeologist Kent Lightfoot's 20-year excavation of Metini Village revealed how the Kashaya adapted Russian materials (working bottle glass with obsidian-knapping techniques) while maintaining their cultural landscape and dance house traditions. After the Russians left in 1841, the Kashaya fared better than many Pomo groups — their coastal remoteness spared them the worst of the Gold Rush violence. From the 1870s they lived on Charles Haupt's ranch near Stewarts Point (Haupt had married a Kashaya woman). In 2015, rancher Bill Richardson gifted his 700-acre farm to the tribe — the first coastal land the Kashaya had owned since 1915. Their roundhouse at Stewarts Point is still used for ceremonies.",
    villages: ["Metini (Fort Ross area — principal village)", "Danaga (Salt Point coast)", "Gualala River villages", "Jenner area — river mouth seasonal camps", "Haupt Ranch villages (1870s–1915)", "Stewarts Point Rancheria"],
    keyDates: "~12,500 BP: Earliest Kashaya presence on Sonoma Coast • 1812: Fort Ross established — Kashaya-Russian coexistence begins • 1841: Russians depart • 1870s: Kashaya settle at Haupt Ranch • 1915: Stewarts Point Rancheria established (41.5 acres inland) • 1983: Tillie Hardwick lawsuit restores terminated rancherias • 1998–2018: Lightfoot/UC Berkeley excavates Metini Village • 2015: 700-acre Kashia Coastal Reserve returned to tribe",
    sources: "Barrett 1908; Lightfoot 2005/2018; Oswalt 1964; Fort Ross SHP; Kashia Band; Trust for Public Land"
  },
  {
    name: "Southern Pomo",
    altNames: "Gallinomero, Mihilakawna, Makahmo, Cainameros",
    language: "Southern Pomo (Pomoan/Hokan)",
    dialect: "Southern Pomo — preserves the greatest number of Proto-Pomo syllables. Critically endangered: 1 fluent speaker as of 2012",
    timeStart: -5000, timeEnd: 2026, occupation: "7,000+ years",
    territory: "Lower Russian River valley — Santa Rosa and Sebastopol north to Cloverdale, Dry Creek and Alexander Valleys",
    population: "Several thousand pre-contact; today: Dry Creek (~900), Cloverdale, Lytton, Graton Rancheria members",
    centerLat: 38.60, centerLng: -122.85, zoom: 10,
    color: "#FFB74D",
    description: "The Southern Pomo — also called Gallinomero — occupied the heart of the Russian River valley, the richest and most densely settled part of Pomo territory. They called the river Ashokawna ('east water place') or Bidapte ('big river'). The Laguna de Santa Rosa — a 30,000-acre freshwater wetland — was their ecological treasure, and the village of Batiklechawi at Sebastopol was its gateway. The Mihilakawna and Makahmo peoples of the Dry Creek area had settled by 500 CE. As the southernmost Pomo, they were the first to suffer European invasion. Spanish missionaries enslaved many Southern Pomo from the Santa Rosa Plain to Mission San Rafael (1821–1828). The Gold Rush brought devastating American settlement. The federal government forced relocation — remembered as the 'Death March.' The Dry Creek habitation area was flooded by Warm Springs Dam (1983) creating Lake Sonoma. Today, the Dry Creek Rancheria Band operates River Rock Casino and runs an active Southern Pomo language restoration program directed by Dr. Neil Alexander Walker (hired 2011). Elsie Allen (1899–1990), born at Cloverdale Rancheria, became one of the most celebrated Pomo basket weavers by defying the tradition of burying baskets with the dead — publishing 'Pomo Basketmaking' (1972) to preserve the art for future generations.",
    villages: ["Batiklechawi (Sebastopol — head of Laguna)", "Hukabetawi (Santa Rosa)", "Ossokowi (Russian River near Geyserville)", "Makahmo (Dry Creek/Sulphur Creek)", "Kale (Cloverdale)", "Kalme (Russian River drainage)"],
    keyDates: "~500 CE: Mihilakawna/Makahmo settlement at Dry Creek • 1821–1828: Spanish enslave Southern Pomo to Mission San Rafael • 1850s: American settlers claim 86,000 acres; forced relocations • 1899: Elsie Allen born at Cloverdale • 1915: Dry Creek Rancheria established (75 acres) • 1958: Rancheria terminated • 1983: Tillie Hardwick lawsuit; Lake Sonoma floods ancestral lands • 2011: Southern Pomo language program begins • 2013: Tribe secures cultural lease at Lake Sonoma",
    sources: "Barrett 1908; Kroeber 1925; Oswalt field notes; Dry Creek Rancheria; Cloverdale Rancheria; Walker 2020"
  }
];

function openTribePanel() {
  document.getElementById('tribe-panel').classList.add('open');
  renderTribes(tribalData);
}
function closeTribePanel() {
  document.getElementById('tribe-panel').classList.remove('open');
}
function filterTribes(q) {
  q = q.toLowerCase();
  const filtered = tribalData.filter(t => 
    (t.name||'').toLowerCase().includes(q) || (t.altNames||'').toLowerCase().includes(q) ||
    (t.territory||'').toLowerCase().includes(q) || (t.language||'').toLowerCase().includes(q) ||
    (t.culture||'').toLowerCase().includes(q) || (t.description||'').toLowerCase().includes(q)
  );
  renderTribes(filtered);
}
function renderTribes(data) {
  const list = document.getElementById('tribe-list');
  list.innerHTML = data.map((t, i) => {
    const span = 10000;
    const ts = t.timeStart || -2000;
    const te = t.timeEnd || 1900;
    const startPct = Math.max(0, ((ts + 8000) / span) * 100);
    const endPct = Math.min(100, ((te + 8000) / span) * 100);
    const widthPct = endPct - startPct;
    const desc = t.description || t.culture || '';
    const occ = t.occupation || ((ts < 0 ? Math.abs(ts) + ' BCE' : ts + ' CE') + ' — ' + (te < 0 ? Math.abs(te) + ' BCE' : te + ' CE'));
    const col = t.color || '#40E0D0';
    const villageChips = (t.villages || []).map(v => '<span>' + v + '</span>').join('') || '<span style="color:#666">Not documented</span>';
    return '<div class="tribe-card" id="tc-' + i + '" onclick="toggleTribeCard(' + i + ')">' +
      '<div class="tribe-card-header"><h3>' + t.name + '</h3>' +
      '<span class="tribe-dates">' + occ + '</span></div>' +
      '<div class="tribe-card-body"><div class="tribe-card-content">' +
      '<div class="tribe-territory-map" id="tmap-' + i + '"></div>' +
      '<div class="tribe-info-grid">' +
      '<div class="tribe-info-item"><div class="label">Language</div><div class="value">' + (t.language || 'Unknown') + '</div></div>' +
      '<div class="tribe-info-item"><div class="label">Population</div><div class="value">' + (t.population || 'Unknown') + '</div></div>' +
      '<div class="tribe-info-item" style="grid-column:span 2"><div class="label">Territory</div><div class="value">' + (t.territory || 'See description') + '</div></div>' +
      '</div>' +
      '<div class="tribe-timeline-bar"><div class="tribe-timeline-fill" style="left:' + startPct + '%;width:' + widthPct + '%;background:' + col + '"></div></div>' +
      '<div class="tribe-timeline-labels"><span>8000 BCE</span><span>4000 BCE</span><span>0 CE</span><span>2000 CE</span></div>' +
      '<div class="tribe-desc">' + desc + '</div>' +
      '<div class="tribe-desc"><strong>Key dates:</strong> ' + (t.keyDates || 'Not documented') + '</div>' +
      '<div class="tribe-villages"><h4>Named Villages & Sites</h4><div class="tribe-village-list">' + villageChips + '</div></div>' +
      '<div class="tribe-sources">Sources: ' + (t.sources || 'Various') + '</div>' +
      '<button class="tribe-btn-locate" onclick="event.stopPropagation();locateTribe(' + i + ')">\u{1F50D} Locate territory & linked sites</button>' +
      '</div></div></div>';
  }).join('');
}
function toggleTribeCard(i) {
  const card = document.getElementById('tc-' + i);
  const wasExpanded = card.classList.contains('expanded');
  document.querySelectorAll('.tribe-card').forEach(c => c.classList.remove('expanded'));
  if (!wasExpanded) {
    card.classList.add('expanded');
    // Create mini territory map
    setTimeout(() => {
      const el = document.getElementById('tmap-' + i);
      if (el && !el._leaflet_id) {
        const t = tribalData[i];
        const mini = L.map(el, {zoomControl:false, attributionControl:false, dragging:true, scrollWheelZoom:false});
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(mini);
        const poly = territoryPolygons[t.name];
        if (poly) {
          const territoryShape = L.polygon(poly, {
            color: t.color, weight: 2.5, opacity: 0.9,
            fillColor: t.color, fillOpacity: 0.18,
            dashArray: '6,4'
          }).addTo(mini);
          mini.fitBounds(territoryShape.getBounds().pad(0.3));
          // Add subtle glow border
          L.polygon(poly, {
            color: t.color, weight: 5, opacity: 0.2,
            fillColor: 'transparent', fillOpacity: 0
          }).addTo(mini);
        } else {
          mini.setView([t.centerLat, t.centerLng], t.zoom);
          L.circle([t.centerLat, t.centerLng], {
            radius: t.zoom > 11 ? 12000 : t.zoom > 9 ? 40000 : 120000,
            color: t.color, weight: 2, opacity: 0.6, fillColor: t.color, fillOpacity: 0.15,
            dashArray: '6,4'
          }).addTo(mini);
        }
        L.marker([t.centerLat, t.centerLng], {
          icon: L.divIcon({className:'', html:'<div style="font-size:10px;color:' + t.color + ';text-shadow:0 0 6px #000;white-space:nowrap;font-family:Cinzel,serif;letter-spacing:1px">' + t.name.toUpperCase() + '</div>', iconSize:[140,20], iconAnchor:[70,10]})
        }).addTo(mini);
      }
    }, 300);
  }
}
// Territory polygon data for each tribe (approximate boundaries)
const territoryPolygons = {
  "Coast Miwok": [[38.35,-123.05],[38.35,-122.45],[38.15,-122.45],[37.85,-122.55],[37.83,-122.60],[37.85,-122.65],[38.05,-122.95],[38.20,-123.05],[38.35,-123.05]],
  "Bay Miwok (Volvon)": [[37.95,-122.05],[37.95,-121.65],[37.72,-121.65],[37.72,-121.85],[37.82,-122.05],[37.95,-122.05]],
  "Plains Miwok": [[38.55,-121.70],[38.55,-121.10],[37.90,-121.10],[37.90,-121.70],[38.55,-121.70]],
  "Ramaytush Ohlone": [[37.82,-122.52],[37.82,-122.35],[37.60,-122.35],[37.60,-122.52],[37.82,-122.52]],
  "Chochenyo Ohlone": [[37.95,-122.35],[37.95,-122.10],[37.50,-122.10],[37.50,-122.35],[37.95,-122.35]],
  "Karkin Ohlone": [[38.10,-122.35],[38.10,-122.15],[38.00,-122.15],[38.00,-122.35],[38.10,-122.35]],
  "Tamyen Ohlone": [[37.50,-122.10],[37.50,-121.75],[37.20,-121.75],[37.20,-122.10],[37.50,-122.10]],
  "Ancestral Puebloans": [[37.50,-111.50],[37.50,-106.50],[35.50,-106.50],[35.50,-111.50],[37.50,-111.50]],
  "Hohokam": [[34.00,-112.80],[34.00,-111.00],[32.50,-111.00],[32.50,-112.80],[34.00,-112.80]],
  "Kashaya Pomo": [[38.70,-123.50],[38.70,-123.05],[38.30,-123.05],[38.30,-123.50],[38.70,-123.50]],
  "Huimen (Coast Miwok tribelet)": [[37.93,-122.58],[37.93,-122.43],[37.84,-122.43],[37.84,-122.58],[37.93,-122.58]],
  "Sierra Miwok": [[38.70,-121.10],[38.70,-119.80],[37.30,-119.80],[37.30,-121.10],[38.70,-121.10]],
  "Yokuts": [[38.00,-121.00],[38.00,-118.50],[35.00,-118.50],[35.00,-121.00],[38.00,-121.00]],
  "Patwin": [[39.40,-122.50],[39.40,-121.50],[38.05,-121.50],[38.05,-122.50],[39.40,-122.50]],
  "Lake Miwok": [[39.00,-122.80],[39.00,-122.40],[38.70,-122.40],[38.70,-122.80],[39.00,-122.80]],
  "Wappo": [[38.80,-122.80],[38.80,-122.30],[38.30,-122.30],[38.30,-122.80],[38.80,-122.80]],
  "Olompali (Coast Miwok tribelet)": [[38.20,-122.65],[38.20,-122.50],[38.10,-122.50],[38.10,-122.65],[38.20,-122.65]]
};

// Keywords to match archaeological sites to tribes
const tribeSiteKeywords = {
  "Coast Miwok": ["Coast Miwok","Marin","MRN-","Olompali","Echa-tamal","Gualen","Huimen","Nicasio","Tomales","Point Reyes","Strawberry","Richardson Bay"],
  "Bay Miwok (Volvon)": ["Volvon","Bay Miwok","Los Vaqueros","CCo-","Morgan Territory","Mt. Diablo","Brushy Peak","Round Valley"],
  "Plains Miwok": ["Plains Miwok","Mokelumni","Cosomne","Gualacomne","Hulpu","Ochejamne","Anizumne","Chucumne","Wilton"],
  "Ramaytush Ohlone": ["Ramaytush","Yelamu","Transbay","Mission Dolores","San Francisco Peninsula","Lands End","Crissy Field"],
  "Chochenyo Ohlone": ["Chochenyo","Huchiun","Emeryville","West Berkeley","ALA-","Coyote Hills","Ryan Mound","Muwekma"],
  "Karkin Ohlone": ["Karkin","Sogorea","Glen Cove","Carquinez","SOL-326"],
  "Tamyen Ohlone": ["Tamyen","Tamien","Santa Clara Valley","Mission Santa Clara"],
  "Ancestral Puebloans": ["Puebloan","Pueblo Bonito","Chaco","Mesa Verde","Betatakin","Keet Seel","Aztec Ruins","cliff dwelling"],
  "Hohokam": ["Hohokam","Snaketown","Pueblo Grande","Casa Grande","Los Muertos","canal","Salt River","Phoenix"],
  "Kashaya Pomo": ["Kashaya","Fort Ross","Colony Ross","Metini","Port Rumiantsev","Bodega","Stewarts Point"],
  "Huimen (Coast Miwok tribelet)": ["Huimen","Liwanelowa","Sausalito","MRN-5","MRN-14","MRN-27","MRN-17","MRN-18","MRN-19","MRN-20","MRN-21","Richardson Bay","Strawberry Point"],
  "Sierra Miwok": ["Sierra Miwok","Chaw\'se","Grinding Rock","Yosemite","Ahwah","Pine Grove","Me-Wuk","Miwuk"],
  "Yokuts": ["Yokut","Tulare","Estanislao","Tachi","San Joaquin Valley","Orestimba","Chunut"],
  "Patwin": ["Patwin","Suisun","Ulatis","Wintun","Yocha Dehe","Rush Ranch","Mondavi","Peña Adobe","Vacaville"],
  "Lake Miwok": ["Lake Miwok","Tuleyome","Oleyome","Lower Lake","Clear Lake Miwok"],
  "Wappo": ["Wappo","Onasatis","Mishewal","Calistoga","Napa Valley Wappo","Mayakmah"],
  "Olompali (Coast Miwok tribelet)": ["Olompali","MRN-193","Camilo Ynitia","San Antonio Creek Miwok"]
};

// Active territory overlay layer group
let activeTerritoryLayer = null;
let activeTerritoryPulse = null;

function clearTerritoryOverlay() {
  if (activeTerritoryLayer) { map.removeLayer(activeTerritoryLayer); activeTerritoryLayer = null; }
  if (activeTerritoryPulse) { clearInterval(activeTerritoryPulse); activeTerritoryPulse = null; }
  document.querySelectorAll('.territory-label-overlay').forEach(el => el.remove());
}

function findRelatedSites(tribeName) {
  const keywords = tribeSiteKeywords[tribeName] || [];
  if (!keywords.length) return [];
  const found = [];
  // Search through all map layers for matching popups
  map.eachLayer(layer => {
    if (layer.getPopup) {
      const popup = layer.getPopup();
      if (popup) {
        const html = popup.getContent();
        if (typeof html === 'string') {
          for (const kw of keywords) {
            if (html.includes(kw)) {
              const latlng = layer.getLatLng ? layer.getLatLng() : null;
              if (latlng) {
                // Extract site name from popup
                const nameMatch = html.match(/<h4>([^<]+)<\/h4>/);
                found.push({ name: nameMatch ? nameMatch[1] : 'Site', latlng: latlng });
              }
              break;
            }
          }
        }
      }
    }
  });
  return found;
}

function locateTribe(i) {
  const t = tribalData[i];
  const col = t.color || '#40E0D0';
  clearTerritoryOverlay();
  closeTribePanel();
  
  const poly = territoryPolygons[t.name];
  activeTerritoryLayer = L.layerGroup().addTo(map);
  
  if (poly) {
    // Draw territory polygon
    const territoryPoly = L.polygon(poly, {
      color: t.color, weight: 2.5, opacity: 0.9,
      fillColor: t.color, fillOpacity: 0.12,
      dashArray: '8,6',
      className: 'territory-poly-anim'
    }).addTo(activeTerritoryLayer);
    
    // Add glowing border effect
    L.polygon(poly, {
      color: t.color, weight: 6, opacity: 0.25,
      fillColor: 'transparent', fillOpacity: 0,
      dashArray: '8,6'
    }).addTo(activeTerritoryLayer);
    
    // Fly to fit the polygon bounds
    map.flyToBounds(territoryPoly.getBounds().pad(0.15), {duration: 1.5, maxZoom: t.zoom});
    
    // Add territory label
    const center = territoryPoly.getBounds().getCenter();
    L.marker(center, {
      icon: L.divIcon({
        className: 'territory-label-overlay',
        html: '<div style="font-family:Cinzel,serif;font-size:14px;font-weight:700;color:' + t.color + ';text-shadow:0 0 10px rgba(0,0,0,0.9),0 0 20px rgba(0,0,0,0.7);white-space:nowrap;letter-spacing:2px;text-align:center;pointer-events:none">' + t.name.toUpperCase() + ' TERRITORY</div>',
        iconSize: [300, 30], iconAnchor: [150, 15]
      })
    }).addTo(activeTerritoryLayer);
  } else {
    map.flyTo([t.centerLat, t.centerLng], t.zoom, {duration: 1.5});
  }
  
  // Find and highlight related archaeological sites
  setTimeout(() => {
    const sites = findRelatedSites(t.name);
    sites.forEach(s => {
      L.circleMarker(s.latlng, {
        radius: 8, color: t.color, weight: 2, opacity: 1,
        fillColor: t.color, fillOpacity: 0.4
      }).addTo(activeTerritoryLayer);
    });
    
    // Show site count badge
    if (sites.length > 0) {
      const bounds = activeTerritoryLayer.getLayers()[0] && activeTerritoryLayer.getLayers()[0].getBounds ? 
        activeTerritoryLayer.getLayers()[0].getBounds() : null;
      const labelPos = bounds ? bounds.getSouthWest() : L.latLng(t.centerLat - 0.05, t.centerLng);
      L.marker(labelPos, {
        icon: L.divIcon({
          className: 'territory-label-overlay',
          html: '<div style="background:rgba(0,0,0,0.8);border:1px solid ' + t.color + ';border-radius:12px;padding:4px 10px;font-size:11px;color:' + t.color + ';font-family:Inconsolata,monospace;white-space:nowrap;pointer-events:none">' + sites.length + ' linked archaeological sites</div>',
          iconSize: [200, 24], iconAnchor: [100, -5]
        })
      }).addTo(activeTerritoryLayer);
    }
  }, 800);
  
  // Auto-clear after 30 seconds
  setTimeout(() => clearTerritoryOverlay(), 30000);
}

// Clear territory overlay on map click
map.on('click', function() { clearTerritoryOverlay(); });

