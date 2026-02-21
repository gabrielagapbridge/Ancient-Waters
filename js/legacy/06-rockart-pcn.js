// ========== ROCK ART SITES (PCN / Petroglyphs / Pictographs / Cupule complexes) ==========
// A dedicated layer consolidating all significant rock art across the map.
// PCN (Pecked Curvilinear Nucleated) sites are flagged as a pre-contact tradition (est. 3,000-8,000 BP)
// that spans the entire California Coast Range and crosses later tribal boundaries.
const rockArtData = [
  // === BAY AREA PCN SITES (pre-tribal tradition, 3000-8000 BP) ===
  {lat:37.9105,lng:-122.4931,name:'Ring Mountain — Petroglyph Rock',type:'PCN Petroglyphs',pcn:true,
   desc:'The most famous Bay Area rock art site. ~30 boulders with PCN carvings on chlorite blueschist — metamorphic rock from an ancient subduction zone. Circular and ovoid grooves with raised nucleated centers, estimated 5,000-8,000 years old. CA-MRN-442. The only known rock art in Marin County. BARARA conservation effort (1993-1997) installed barriers against vandalism. Mortar holes and artifacts dated to ~2,400 years BP confirm long habitation.',
   src:'Anderson (2006); Gillette (2011) UC Berkeley dissertation; Bay Nature; BARARA; Marin County Open Space',
   culture:'Pre-contact PCN tradition (predates Coast Miwok) — found on Coast Miwok ancestral land'},
  {lat:37.9086,lng:-122.4882,name:'Ring Mountain #2',type:'PCN Petroglyphs',pcn:true,
   desc:'Additional PCN elements on a second boulder cluster at lower elevation (488 ft). Same tradition as Petroglyph Rock above.',
   src:'East Bay Hill People; Gillette (2011)',
   culture:'Pre-contact PCN tradition — found on Coast Miwok (Huimen) ancestral land'},
  {lat:38.1233,lng:-122.6012,name:'San Marin PCN Site',type:'PCN Petroglyphs',pcn:true,
   desc:'PCN petroglyphs survive in the San Marin area of Novato. Part of the Coast Range PCN tradition extending from Oregon border to Santa Barbara.',
   src:'East Bay Hill People; Gillette (2011)',
   culture:'Pre-contact PCN tradition — found on Coast Miwok (Omiomi) ancestral land'},
  {lat:37.9313,lng:-122.3174,name:'Canyon Trail Park — El Cerrito',type:'PCN Petroglyphs & Cupules',pcn:true,
   desc:'~200 individual petroglyph elements including PCNs, cupules, and grooves on a chlorite blueschist boulder beside Baxter Creek. CA-CCO-152. First recorded 1949 by Squire. 20+ bedrock mortars and 175+ cupules. Excavations by Cal State Hayward/BARARA recovered cultural materials. City of El Cerrito approved conservation proposal to create a Native American Interpretive Park. Estimated 4,000-5,000 years old.',
   src:'O\'Brien et al. (2005) SCA Proceedings; Marymor (2003) ARARA; Gillette (1998); East Bay Hill People',
   culture:'Pre-contact PCN tradition — found on Ohlone (Huchiun) ancestral land'},
  {lat:37.9373,lng:-122.3214,name:'Mira Vista Park — Richmond',type:'Cupule Complex (possible PCN)',pcn:false,
   desc:'10 bedrock mortars and 60+ cupules on a chlorite blueschist boulder near Baxter Creek. Same geological substrate as Canyon Trail Park PCN site 0.4 miles south.',
   src:'East Bay Hill People; Parkman (1986)',
   culture:'Pre-contact tradition — found on Ohlone (Huchiun) ancestral land'},
  {lat:37.9522,lng:-122.3224,name:'Alvarado Park — Richmond',type:'PCN Petroglyphs & Cupules',pcn:true,
   desc:'2 bedrock mortars, 275+ cupules, and 2 confirmed PCNs on a chlorite blueschist outcropping on Wildcat Creek. The highest cupule density of any known Bay Area site.',
   src:'East Bay Hill People; Gillette (2011)',
   culture:'Pre-contact PCN tradition — found on Ohlone (Huchiun) ancestral land'},
  {lat:37.9415,lng:-122.3042,name:'Wildcat Creek Cupule Rock',type:'Cupule Complex',pcn:false,
   desc:'20+ cupules and incising on a blueschist boulder in the middle of Wildcat Creek. Possible association with fishing rituals — the boulder\'s position in the creek at a narrow point mirrors Pomo rock art placement patterns.',
   src:'East Bay Hill People; Bardell photographs',
   culture:'Pre-contact tradition — found on Ohlone (Huchiun) ancestral land'},
  {lat:37.5624,lng:-121.7059,name:'Stromer Spring — Ohlone Wilderness',type:'PCN Petroglyphs & Cupules',pcn:true,
   desc:'25 bedrock mortars, numerous cupules, and PCN-style petroglyphs at 2,023 ft elevation above Lake Del Valle. Requires a 2-mile hike with 1,200-ft climb from Del Valle\'s western shore. A major rock art site in the Ohlone backcountry.',
   src:'East Bay Hill People; Gillette (2011)',
   culture:'Pre-contact PCN tradition — found on Ohlone (Taunan) ancestral land'},
  {lat:37.7678,lng:-122.0352,name:'Upper Crow Creek PCN',type:'PCN Petroglyph (confirmed)',pcn:true,
   desc:'3 bedrock mortars and a confirmed PCN element. "This sure looks like a Pecked Curvilinear Nucleated petroglyph to us."',
   src:'East Bay Hill People',
   culture:'Pre-contact PCN tradition — found on Ohlone (Seunen) ancestral land'},
  {lat:37.7848,lng:-121.7616,name:'Black Hills Trail — possible PCN',type:'Possible PCN',pcn:true,
   desc:'Three bedrock mortars, a possible PCN, and a grinding slick at 1,520 ft. "Pecked curvilinear nucleated petroglyphs are not supposed to occur in Contra Costa County. We\'re not so sure."',
   src:'East Bay Hill People',
   culture:'Pre-contact PCN tradition (possible) — found on Bay Miwok (Volvon) ancestral land'},
  {lat:37.7600,lng:-121.7073,name:'Possible PCN — Brushy Peak area',type:'Possible PCN',pcn:true,
   desc:'Possible PCN element at 1,045 ft. Unusual because most Bay Area PCNs occur on schist, but this one appears on sandstone.',
   src:'East Bay Hill People',
   culture:'Pre-contact PCN tradition (possible) — found on Bay Miwok (Ssaoam) ancestral land'},
  {lat:37.2772,lng:-121.7493,name:'Evergreen Valley Cupule Rock',type:'Cupules & possible PCN',pcn:true,
   desc:'32+ cupules on Silver Creek. CA-SCL-63. "There are PCNs on this rock too, but we didn\'t notice any" — later confirmed by stylistic analysis.',
   src:'East Bay Hill People; A Stylistic Analysis of the Rock Art of Santa Clara County',
   culture:'Pre-contact PCN tradition — found on Ohlone (Santa Ysabel) ancestral land'},

  // === BAY AREA PICTOGRAPH / PETROGLYPH SITES (tribal-era) ===
  {lat:37.785,lng:-121.720,name:'CCo-434 — Los Vaqueros Rock Art Complex',type:'Polychrome Pictographs',pcn:false,
   desc:'Nearly 50 separate prehistoric loci within a 3km-long series of massive sandstone outcrops containing caves, rockshelters, and overhanging ledges. Polychrome pictographs, bedrock mortars, dietary remains, obsidian/chert/quartzite tools, quartz crystals, and hematite loaves (pigment for pictographs). Obsidian hydration shows bimodal occupation. Virtually all obsidian from Napa Valley source (~60 miles).',
   src:'Bramlette (1988); Eidsness (1986); SSU Anthropological Studies Center',
   culture:'Bay Miwok (Volvon)'},
  {lat:37.8502,lng:-121.9374,name:'Live Oak Campground — Mt. Diablo pictograph cave',type:'Pictograph Cave',pcn:false,
   desc:'28 bedrock mortar milling station with a nearby pictograph cave of probable historic origin. One of the highest habitation sites in Volvon territory. Ancient trails converge near Curry Point.',
   src:'East Bay Hill People; Mt. Diablo Interpretive Association',
   culture:'Bay Miwok (Volvon)'},
  {lat:37.8493,lng:-121.9343,name:'Elephant Rock — Mt. Diablo',type:'Cupule Petroglyphs',pcn:false,
   desc:'One bedrock mortar, cupules, and carved markings. May have been a "prayer" site. See Parkman (1986) "Cupule Petroglyphs in the Diablo Range."',
   src:'Parkman (1986) J. California & Great Basin Anthropology; East Bay Hill People',
   culture:'Bay Miwok (Volvon)'},
  {lat:37.8495,lng:-121.9325,name:'Rock City — Mt. Diablo',type:'Cupule Petroglyphs & Incisions',pcn:false,
   desc:'13 bedrock mortars, grinding slick, cupules, and incisions. Deep, well-worn mortars indicating long habitation.',
   src:'East Bay Hill People; Mt. Diablo State Park',
   culture:'Bay Miwok (Volvon)'},
  {lat:37.0307,lng:-121.6573,name:'Chitactac-Adams Heritage County Park',type:'Petroglyphs & Bedrock Mortars',pcn:false,
   desc:'75 bedrock mortars and a petroglyph at a restored Ohlone village site. BARARA members participate in conservation. Interpretive park with pathways. "Stay on the pathway and no daylighting!"',
   src:'Santa Clara County Parks; BARARA',
   culture:'Ohlone (Mutsun)'},
  {lat:37.1741,lng:-121.7361,name:'Circle of Circles — Morgan Hill',type:'Ceremonial Rock Circles & Cupules',pcn:false,
   desc:'Two bedrock mortars, five cupules, and at least eight rock circles atop a small hill. Archaeological evidence suggests 6,000 years old. Likely a ceremonial site.',
   src:'East Bay Hill People; Bardell photographs',
   culture:'Ohlone (Matalan)'},
  {lat:38.1939,lng:-122.2011,name:'Lynch Canyon Rancher Petroglyph Rock',type:'Petroglyphs (some modern)',pcn:false,
   desc:'13 bedrock mortars and a petroglyph panel on mortar rock. Includes both ancient and modern (rancher-era) carvings. Near headwaters of North Fork of Lynch Creek.',
   src:'East Bay Hill People; Solano Land Trust',
   culture:'Patwin (Suisun)'},

  // === NORTH BAY / WINE COUNTRY ===
  {lat:38.812,lng:-123.017,name:'Cloverdale Petroglyph Boulder',type:'PCN Petroglyphs & Cupules',pcn:true,
   desc:'PCN elements and cupules on a boulder along the Russian River near Cloverdale. Part of the Coast Range PCN tradition. Exact location not publicized to protect the site.',
   src:'East Bay Hill People; Hedges (1983) "The Cloverdale Petroglyphs" Rock Art Papers; Gillette (2011)',
   culture:'Pre-contact PCN tradition — found on Southern Pomo ancestral land'},
  {lat:38.624,lng:-123.268,name:'Yorkville Petroglyphs',type:'Petroglyphs (pre-Pomo)',pcn:false,
   desc:'Large boulder near Yorkville covered with ancient petroglyphs that are distinctly different from known Pomo petroglyphs in Willits and Lake County, suggesting a much earlier origin predating the Pomo occupation of Anderson Valley.',
   src:'Anderson Valley Advertiser; Mendocino County Historical Society',
   culture:'Unknown pre-Pomo people'},

  // === MENDOCINO / LAKE COUNTY ===
  {lat:38.972,lng:-123.115,name:'UC Hopland Research & Extension Center',type:'PCN Petroglyphs & Cupules',pcn:true,
   desc:'Five boulders or clusters of boulders with PCN markings and cupules across 5,300 acres of the HREC. The subject of Donna Lee Gillette\'s seminal UC Berkeley dissertation on the PCN tradition. Over 30 identified prehistoric sites with 3,000+ catalogued artifacts. On Shóqowa and Hopland Pomo ancestral land.',
   src:'Gillette (2011) UC Berkeley dissertation; UC ANR Hopland REC',
   culture:'Pre-contact PCN tradition — found on Hopland Pomo (Shóqowa) ancestral land'},
  {lat:39.067,lng:-123.189,name:'Frog Woman Rock — Hopland',type:'Sacred Monolith (Pomo)',pcn:false,
   desc:'California Registered Historical Landmark No. 549. Sacred monolith revered by Pomo people as the home of Frog Woman, consort of Coyote. "A solemn witness that will forever be a local symbol of our indigenous collective conscience, strength, and perseverance." Plaque placed 2023 by Tribal Historic Preservation Office of the Hopland Band of Pomo Indians.',
   src:'CalTrans Historical Landmark; Hopland Band of Pomo Indians THPO',
   culture:'Pomo (Hopland Band)'},
  {lat:39.07,lng:-122.92,name:'Lakeport area PCN / Baby Rocks',type:'PCN Petroglyphs — "Baby Rocks"',pcn:true,
   desc:'Ethnographically documented PCN/cupule boulders known as "Baby Rocks" in Pomo territory. Used in fertility rituals: a childless woman would fast for four days then visit the rock alone to commune with spirits of unborn children believed to dwell within. Deep grooves, cups, and PCNs present on horizontal and sloping surfaces. Part of the broader Coast Range PCN tradition.',
   src:'Heizer (1953) "Sacred Baby-Rocks"; Loeb (1926) Pomo Folkways; Hedges (1983); Gillette (2011)',
   culture:'Pre-contact PCN tradition — documented in Pomo ethnographic context (Eastern Pomo)'},
  {lat:38.94,lng:-123.30,name:'Knight\'s Valley Petroglyph Site',type:'PCN / Baby Rock',pcn:true,
   desc:'PCN/cupule boulder in Knight\'s Valley, Sonoma County. Referenced in Loeb and Barrett ethnographies as one of the Pomo "baby rock" localities with deep grooves, cups, and PCN elements.',
   src:'Barrett (1952); Loeb (1926); Gillette (2011)',
   culture:'Pre-contact PCN tradition — found on Wappo / Southern Pomo border'},

  // === NORTH COAST / EEL RIVER ===
  {lat:39.86,lng:-123.61,name:'Spyrock Petroglyph Site — Eel River Canyon',type:'Complex Petroglyphs (6 styles)',pcn:false,
   desc:'Rediscovered in 1982 by a state forester after being first found in 1913 by a US Government engineer. Provided the first evidence of complex rock art boulders in the western United States. Two panels with elaborate, multiple superimposed elements representing six discrete styles. Associated with a major village: three housepits, midden, abundant lithics. CA-TRI-1.',
   src:'Spyrock, California Wikipedia; Mendocino/Trinity County archaeological records',
   culture:'Eel River Athapaskan (Wailaki) / earlier peoples'},

  // === FAR NORTHERN CALIFORNIA ===
  {lat:41.848,lng:-121.389,name:'Petroglyph Point — Lava Beds NM',type:'Petroglyphs & Pictographs (5,000+)',pcn:false,
   desc:'One of the largest panels of Native American rock art in the United States. Over 5,000 individual carvings on a tuff cliff face that was once an island in Tule Lake. Both carved petroglyphs and painted pictographs. Predominantly geometric/abstract patterns rather than figurative — unusual for western rock art. Center of a Modoc creation story. Geometric patterns match household items from nearby Nightfire Island dated to 5,000 years ago. Listed on the National Register of Historic Places (1975). Some images may be 6,000+ years old.',
   src:'NPS Lava Beds National Monument; Petroglyph Point Arch. Site NRHP (1975); Lee & Hyder, UCLA/UCSB',
   culture:'Modoc people and predecessors'},

  // === SOUTH BAY CUPULE COMPLEXES ===
  {lat:37.3250,lng:-122.1819,name:'Monte Bello — headwaters of Stevens Creek',type:'Cupule Complex',pcn:false,
   desc:'12 bedrock mortars and 64+ cupules (14 on one rock, 50+ on another) at 2,240 ft elevation. The proximity of cupule rocks to water sources is well-documented throughout the region.',
   src:'East Bay Hill People; Joel\'s South Bay discoveries',
   culture:'Ohlone (Olpen)'},
  {lat:37.6947,lng:-122.0580,name:'ALA-60 — Castro Valley',type:'Cupule Complex (ancient)',pcn:false,
   desc:'44 bedrock mortars and 182 cupules. CA-ALA-60. E. Breck Parkman suggests this may be one of the oldest acorn processing sites in the Bay Area — cultural material here has been dated to ~4,000 years BP.',
   src:'Parkman; East Bay Hill People',
   culture:'Ohlone (Yrgin)'},
  {lat:37.7561,lng:-121.7074,name:'Sulphur Spring — 18 cupule rock',type:'Cupule Complex',pcn:false,
   desc:'18 cupule rock, 5 bedrock mortars, and a grinding slick. See Parkman (1986) "Cupule Petroglyphs in the Diablo Range."',
   src:'Parkman (1986); East Bay Hill People',
   culture:'Bay Miwok (Ssaoam)'},

  // === YOKUTS / SAN JOAQUIN VALLEY ROCK ART ===
  {lat:35.154,lng:-119.866,name:'Painted Rock — Carrizo Plain (La Piedra Pintada)',type:'Polychrome Pictographs (3,000+ years)',pcn:false,
   desc:'Massive horseshoe-shaped marine sandstone formation, 250 feet across and 45 feet high, within the Carrizo Plain National Monument near Soda Lake. Interior adorned with pictographs by Chumash, Yokuts, AND Salinan peoples over millennia. Red, black, white, yellow, green, and blue pigments applied with rodent-tail hair brushes and finger painting. Chumash occupied the plain from ~2000 BCE until drought ~600 CE; Yokuts then moved in from the San Joaquin Valley. Yokuts motifs tend toward large colorful figures; Chumash toward small circular mandalas and complex panels. Bedrock mortars and cupules also present. Still used for ceremonies today by Native communities. Severely damaged by vandalism: a shotgun blast in the 1920s destroyed a major pictograph; settler names carved over art since 1908. Now protected within the National Monument (2001). Access by reservation only, seasonal closures March-May.',
   src:'BLM Carrizo Plain NM; Cal Poly San Luis Obispo Special Collections; Wikipedia; Atlas Obscura; Clewlow 1978',
   culture:'Chumash / Yokuts / Salinan (shared use over millennia)'},
  {lat:36.032,lng:-118.715,name:'Painted Rock — Tule River Reservation (CA-TUL-19)',type:'Polychrome Pictographs — "Hairy Man" site',pcn:false,
   desc:'Sacred Yokuts rockshelter on the Tule River Indian Reservation near Porterville, immediately adjacent to the Tule River. Contains the only known "Bigfoot" pictograph in all of western North America. The dominant image is <b>Mayak datat</b> ("Hairy Man") — a 2.6m × 1.9m polychrome figure in red, black, and white, representing an 8.5-foot creature with long hair and large eyes with tear lines (because Hairy Man is sad, per the creation story). Uniquely, an entire Bigfoot FAMILY is depicted: male, female (1.8m, red), and child (1.2m, red). Additional pictographs: coyote, beaver, bear, frog, caterpillar, centipede, eagle, condor, lizard, humans. Also includes bedrock mortars, pitted boulders, and village midden. Archaeologist David Whitley proposed a "man in bear costume" interpretation; Yokuts elders firmly disagreed, maintaining it depicts a real creature from their creation stories. Paintings estimated 500-1,000 years old (Clewlow 1978 estimates ~500 CE to 1200 CE). First recorded by Hoffman (1882) and Merriam (1903).',
   src:'Kathy Moskowitz Strain (2012) "Mayak Datat" in Relict Hominoid Inquiry, ISU; Tule River Indian Tribe; Hoffman 1882; Merriam 1903; Clewlow 1978; Latta 1949',
   culture:'Yokuts (Wukchumni / Yowlumne) — Tule River Indian Tribe'},
  {lat:36.320,lng:-119.110,name:'Rocky Hill Pictographs — Exeter (CA-TUL-326/998)',type:'Pictographs + Bedrock Mortars',pcn:false,
   desc:'Extensive pictograph panels with bedrock mortars directly beneath — a repeated association at Yokuts sites. Located near a Yokuts village. At least 100+ deep bedrock mortars. Recent archaeoacoustics research (Alarcón-Jiménez et al., 2024) examined the sound properties of this site and other south-central California rock art locations, finding that pictograph placement may be connected to acoustic landscapes — sites with unusual echo or resonance properties. Some Yokuts cupule petroglyphs here were also painted (Hector 2009).',
   src:'Whitley 2006; Gorden 2009; Hector 2009; Robinson 2011; Alarcón-Jiménez et al. 2024',
   culture:'Yokuts (Foothill Yokuts — Wukchumni)'},
  {lat:36.210,lng:-118.950,name:'Rocky Hill Pictographs — Porterville (CA-TUL-326)',type:'Pictographs + BRM Village',pcn:false,
   desc:'Yokuts pictograph site associated with a large village. Similar to the Exeter Rocky Hill in having bedrock mortars in close proximity to painted panels. Part of a pattern of foothill Yokuts sites combining domestic (milling) and ceremonial (rock art) functions in the same location — comparable to Tomo Kahni in the Tehachapis. Suggests rock art was integrated into daily village life, not separate from it.',
   src:'Whitley 2006; Clewlow 1978; Hector 2009',
   culture:'Yokuts (Foothill Yokuts — Wukchumni/Koyeti)'},
  {lat:35.130,lng:-118.510,name:'Tomo Kahni — Kawaiisu/Yokuts Ceremonial Site',type:'Pictographs + Village Complex (CA-KER-508)',pcn:false,
   desc:'Major rock art and village complex in the Tehachapi Mountains. Multiple site numbers (CA-KER-508, -230, -4445H). Repeat the association between bedrock mortar stations and pictograph panels seen at Yokuts sites throughout the southern Sierra foothills. Associated with the Kawaiisu people (Numic speakers) who traded extensively with Yokuts of the valley floor. Now a State Historic Park with guided tours only. Contains pictographs in red, black, and white in sandstone rockshelters overlooking the Tehachapi Valley.',
   src:'Whitley 2006; CA State Parks Tomo Kahni; Robinson 2011',
   culture:'Kawaiisu (Numic) / Yokuts trade connections'},
  {lat:36.700,lng:-119.500,name:'Southern Sierra Pictograph Caves — Foothill Yokuts',type:'Pictographs (scattered caves)',pcn:false,
   desc:'In remote areas of the southern Sierra Nevada foothills on the southeast side of the San Joaquin Valley, pictograph galleries are found in sandstone caves and beneath rock overhangs. Created by the Patwisha (Balwisha) Monache, Wukchumni Yokuts, and Kawaiisu, who traded with Tulumne and Yowlumne Yokuts of the valley floor. Art ranges from simple geometric petroglyphs to complex multicolor images of animals and daily life. Some researchers attribute the imagery to shamanic practice; others see artisans expressing creativity. The foothills between 2,000-4,000 ft elevation contain many undocumented sites.',
   src:'BSA High Adventure Indian Lore; Southern Sierra pictograph surveys',
   culture:'Foothill Yokuts (Wukchumni) / Monache / Kawaiisu'}
];

rockArtData.forEach(s => {
  const pcnBadge = s.pcn ? '<span class="rock-art-pcn-badge">PCN TRADITION · pre-contact · est. 3,000-8,000 BP</span>' : '';
  const pcnLink = s.pcn ? '<div style="margin-top:8px;"><a href="pcn.html" target="_blank" style="color:#D32F2F;font-size:11px;font-weight:600;text-decoration:none;border:1px solid #D32F2F44;padding:3px 8px;border-radius:4px;">Explore PCN Rock Art →</a></div>' : '';
  const cultureNote = s.pcn
    ? `<div style="margin:6px 0;padding:5px 8px;background:rgba(255,61,0,0.1);border-left:3px solid #FF3D00;font-size:11px;line-height:1.4"><strong>⚠ Cultural note:</strong> The PCN (Pecked Curvilinear Nucleated) tradition predates the tribal boundaries known from the contact era. These carvings span the entire California Coast Range from Oregon to Santa Barbara, crossing many later tribal territories. They were likely created by earlier Hokan or Penutian-speaking peoples. Attribution to any single post-contact tribe would be inaccurate.<br><strong>Found on:</strong> ${s.culture}</div>`
    : `<div style="margin:4px 0;font-size:11px;color:#ccc"><strong>Cultural affiliation:</strong> ${s.culture}</div>`;
  const ptClass = s.pcn ? 'pt-pcn' : 'pt-rock-art';
  const icon = s.pcn ? mkPCNIcon(14) : raIcon(s.type, RA_COLORS.bayArea, 9);
  L.marker([s.lat,s.lng],{icon}).addTo(L_groups.rockArt)
    .bindPopup(`<h4>${s.name}</h4><span class="ptype ${ptClass}">${s.type}</span> ${pcnBadge}${cultureNote}${s.desc}<div class="popup-src">📖 ${s.src}</div>${pcnLink}`);
});

// ========== SPRINGS & SACRED WATER SOURCES ==========
