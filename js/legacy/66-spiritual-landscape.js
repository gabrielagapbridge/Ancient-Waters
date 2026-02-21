// ============================================================
// 66 — Spiritual Landscape: Water, Rock & Power
// Washoe spirituality · sacred water sites · rock art in the
// Tahoe/Western Nevada region · archaeological sites
// Sources: Washoe Tribe of NV & CA; d'Azevedo 1986 (HNAI 11);
//   Handelman 1967; Nevers 1976; Benson et al. 2013; NRAF;
//   Heizer & Baumhoff 1962; Gortner 1988; Sagehen Creek Field
//   Station; BLM Carson City; USFS Tahoe NF; Friends of Sierra
//   Rock Art; Lindström 1990; Encyclopedia.com/Washoe; Sacred
//   Land Film Project; Tallac Historic Site
// ============================================================

(function(){
  'use strict';

  // ============================================================
  // COLORS
  // ============================================================
  const S = {
    spirit:  '#FF80AB',   // spiritual/sacred — pink
    water:   '#00E5FF',   // sacred water — cyan
    rockArt: '#FFD600',   // rock art — gold
    martis:  '#A1887F',   // Martis culture — brown
    archeo:  '#B0BEC5',   // archaeology — grey
    washoe:  '#CE93D8',   // Washoe — purple
    connect: '#FF80AB',   // connection lines — pink
  };

  // ============================================================
  // LAYER GROUPS
  // ============================================================
  if(!window.L_groups) window.L_groups = {};
  L_groups.sacredWater    = L.layerGroup().addTo(map);
  L_groups.spiritRockArt  = L.layerGroup().addTo(map);
  L_groups.spiritArchaeo  = L.layerGroup().addTo(map);

  // ============================================================
  // HELPERS
  // ============================================================
  function sp(title, color, sub, desc, src) {
    return `<div style="max-width:460px">
      <h4 style="color:${color};margin:0 0 2px">${title}</h4>
      <div style="font-size:10px;color:#aaa;margin-bottom:6px">${sub}</div>
      <div style="font-size:12px;color:#ccc;line-height:1.5">${desc}</div>
      <div style="margin-top:6px;font-size:10px;color:#888">Sources: ${src}</div></div>`;
  }

  function mkI(emoji, sz) {
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="font-size:${sz||14}px;cursor:pointer">${emoji}</div>`,
      iconSize: [sz||14,sz||14], iconAnchor: [(sz||14)/2,(sz||14)/2]
    });
  }

  // ============================================================
  //  💧 SACRED WATER SITES
  //  "Water sources are traditionally seen as spiritual places"
  //  — Great Basin Native spirituality
  // ============================================================

  // --- Steamboat Hot Springs ---
  L.marker([39.3855,-119.7455], {icon:mkI('♨️',15)})
    .addTo(L_groups.sacredWater)
    .bindPopup(sp('♨️ Steamboat Hot Springs — Sacred Geothermal Ground',
      S.water,
      'Washoe County, NV · sacred to Washoe, N. Paiute & W. Shoshone · south of Reno',
      'The Washoe, Northern Paiute, and Western Shoshone all <b>revered Nevada hot springs as sacred ground</b>, and Steamboat was among the most powerful. In precontact times, Steamboat featured a <b>70-foot geyser</b> and roughly 20 smaller ones — one of the largest geyser fields in the world. Pioneer journals noted <b>60-70 columns of steam</b> visible from miles away.<br><br>For all Great Basin peoples, hot springs were <b>places of healing</b> — the heated water and mineral mud could relieve pain and illness. But they were not recreational: it was essential to <b>leave offerings and prayers</b>. To misuse sacred springs was to risk spiritual consequences.<br><br>After Euro-Americans arrived, Steamboat was converted into a luxury bathhouse, severing its spiritual purpose. Early photographs show Washoe and Paiute women doing laundry at the springs — pushed to the margins of their own sacred site. The geothermal field remains active today, though the great geyser is long gone.',
      'Travel Nevada; UNR Special Collections; Finding Nevada Wild; d\'Azevedo 1986'));

  // --- The Needles, Pyramid Lake ---
  L.marker([40.0570,-119.5200], {icon:mkI('🌋',14)})
    .addTo(L_groups.sacredWater)
    .bindPopup(sp('🌋 The Needles — Pyramid Lake Sacred Geysers',
      S.water,
      'Pyramid Lake Paiute Reservation · closed since 1980s · tufa spires & geysers',
      'Dramatic <b>tufa spire formations and geysers</b> on the shores of Pyramid Lake, sacred to the Pyramid Lake Paiute Tribe. Like all hot springs in the Great Basin, The Needles were used as <b>a natural place to offer prayer</b> — fostering the same spiritual qualities to the tribe as a church.<br><br>The geyser that once erupted within the tufa formations was a powerful spiritual site. The entire area has been <b>closed to non-tribal members since the 1980s</b> due to vandalism. Trespassers are ticketed and fined.<br><br>The Needles are part of the extraordinary tufa landscape of Pyramid Lake — calcium carbonate formations deposited by the slow percolation of hot springs over thousands of years. The Pyramid itself (the pyramid-shaped tufa island that gives the lake its English name) and the <b>Stone Mother</b> formation are also culturally significant. The Stone Mother, in Paiute tradition, is a woman weeping — her tears formed Pyramid Lake.',
      'Finding Nevada Wild; Pyramid Lake Paiute Tribe; Travel Nevada'));

  // --- Water Baby sites conceptual marker ---
  L.marker([39.04,-119.97], {icon:mkI('🌊',15)})
    .addTo(L_groups.sacredWater)
    .bindPopup(sp('🌊 Metsunge — The Water Babies',
      S.spirit,
      'Spiritual beings · inhabit all bodies of water · center of Washoe cosmology',
      'The <b>Metsunge</b> (Water Babies) are among the most powerful supernatural beings in Washoe cosmology. They <b>inhabit all bodies of water</b> — lakes, rivers, springs, and streams. The Washoe believe the Water Babies <b>created all the lakes and streams</b> of the region.<br><br>Water Babies use the caves at <b>De\'ek Wadapush (Cave Rock)</b> as a passageway from their homes in the depths of Lake Tahoe to travel through the streams and lands inhabited by humans. Their powers are so immense that <b>utmost care must be taken not to offend them</b>. Traditionally, any person passing a body of water spoke a prayer and left an offering.<br><br>Water Babies can cause illness or death — but can also be a powerful force for good. Only a great <b>Damomliw</b> (shaman/doctor) blessed with a Water Baby as a <b>guardian spirit</b> could dare to enter Cave Rock\'s caves to commune with them. The renowned shaman <b>Willikushkush</b> reportedly could travel from Cave Rock to Carson Valley through an underground path connecting the Water Baby realm.<br><br>When Highway 50\'s tunnels were blasted through Cave Rock in 1931 and 1957, <b>flooding occurred in Carson Valley</b> — attributed by the Washoe to angered Water Babies retaliating against the desecration of their home.',
      'Dance For All People/NCPC; Washoe Tribe; Tallac Historic Site; d\'Azevedo 1986'));

  // --- Walley's Hot Springs (Carson Valley) ---
  L.marker([38.9580,-119.8310], {icon:mkI('♨️',13)})
    .addTo(L_groups.sacredWater)
    .bindPopup(sp('♨️ Walley\'s Hot Springs — Pau Wa Lu Sacred Waters',
      S.water,
      'Carson Valley · Washoe winter camp area · healing waters',
      'The hot springs that dot the eastern slope of the Sierra — including <b>Walley\'s Hot Springs</b> near Genoa — were part of the sacred landscape where the <b>Pau Wa Lu</b> (Carson Valley Washoe) spent winters. These springs provided <b>warmth, healing water, and spiritual connection</b> during the coldest months.<br><br>The Washoe positioned their <b>galais dungal</b> (conical winter houses) near hot springs wherever possible. The healing properties of the mineral waters were understood and used for millennia before Euro-Americans \"discovered\" them. Today, Walley\'s operates as a commercial resort — but the thermal waters still flow from the same fault-line sources the Washoe prayed beside for thousands of years.<br><br>Genoa (est. 1851), Nevada\'s oldest settlement, was built directly atop Washoe winter camping grounds in Carson Valley.',
      'Nevers 1976; d\'Azevedo 1986; Tallac Historic Site'));

  // ============================================================
  //  🪨 ROCK ART IN THE SPIRITUAL LANDSCAPE
  //  "Rock art sites are places of great spiritual power"
  //  — Great Basin peoples
  // ============================================================

  // --- Pah Rah Range High Basins ACEC ---
  L.marker([39.6700,-119.5800], {icon:mkI('🪨',14)})
    .addTo(L_groups.spiritRockArt)
    .bindPopup(sp('🪨 Pah Rah Range — High Basin Petroglyph ACEC',
      S.rockArt,
      '3,881 acres · NE of Sparks · Washoe & N. Paiute · 3,500+ years of use',
      'A <b>3,881-acre Area of Critical Environmental Concern</b> in the Pah Rah Range northeast of Sparks — one of the most significant rock art concentrations near the Reno/Tahoe area. Contains <b>18+ documented rock art sites</b> with petroglyphs, stone tool artifacts, rock rings, and both seasonal and residential camps.<br><br><b>Culturally significant to both the Southern Washoe and Northern Paiute Tribes.</b> Evidence shows over 3,500 years of continuous use. The rock art follows all three main Great Basin styles: <b>curvilinear</b> (oldest), <b>rectilinear</b>, and <b>representational</b> (newest) — confirming a long progression of peoples using this landscape.<br><br>A 2004-2005 recording project by Murray documented the full range of motifs: rakes, dots, lines, vulviform and burden-basket designs, hunters, archers, and deeply abraded \"old\" engravings. Ground stone tools (metates, manos) confirm extensive plant processing alongside ritual activity.<br><br>The ACEC was designated to protect the site from <b>urban expansion, OHV damage, and vandalism</b> — threats that grow as Reno/Sparks sprawls northeast.',
      'BLM Carson City 2013 RMP; Murray 2005; Delacorte 1997; McLane 1999'));

  // --- Chickering Petroglyph Site (North Fork American River) ---
  L.marker([39.3060,-120.3440], {icon:mkI('🐻',14)})
    .addTo(L_groups.spiritRockArt)
    .bindPopup(sp('🐻 Chickering Petroglyphs — Shamanic Rock Art',
      S.rockArt,
      'N. Fork American River · Martis Complex · 1700–950 BCE · 1,600+ petroglyphs in 46 sites',
      'The <b>largest Martis Complex petroglyph concentration</b> in the Sierra Nevada. The Chickering site alone has hundreds of petroglyphs, and 46 total sites along the upper North Fork of the American River contain <b>1,600+ petroglyphs</b> with over 1,000 individual symbols — all pecked into horizontal granite bedrock.<br><br><b>Spiritual interpretation:</b> The art\'s purpose was almost certainly <b>religious, magical, or ceremonial</b>. Key evidence:<br>• A unique <b>grizzly bear paw</b> and a <b>6-foot rattlesnake</b> are interpreted as <b>bear shaman and rattlesnake shaman symbols</b> — the bear shaman, rattlesnake shaman, and weather shaman held powerful ritual roles<br>• Human stick figures, one wearing a robe and one holding an object, suggest ceremonial activity<br>• <b>Cross-hatched (mating) designs</b> indicate the site was used for <b>puberty or fertility rites</b><br>• Paw and rake symbols are likely <b>family totems</b> — clan emblems of hunters<br><br>All sites are near game trails, and petroglyphs are placed on bedrock offering <b>panoramic views of Sierra crest peaks</b> (Anderson Peak, Tinkers Knob) — suggesting spiritual alignment with the mountain landscape.',
      'Sagehen Creek Field Station; Gortner 1986/1988; Friends of Sierra Rock Art'));

  // --- Kyburz Flat Cupules ---
  L.marker([39.5540,-120.2150], {icon:mkI('🪨',13)})
    .addTo(L_groups.spiritRockArt)
    .bindPopup(sp('🪨 Kyburz Flat — Cupule Petroglyphs',
      S.rockArt,
      '16 mi N of Truckee on Hwy 89 · 2,000+ years old · Washoe sacred ancestral site',
      'A USFS interpretive site preserving <b>cupule petroglyphs</b> on a large rock slab (now cracked into three pieces), estimated to be <b>over 2,000 years old</b>. Cupules — small rounded pits patiently ground into rock surfaces — are among the most ancient and widespread rock art forms in California and the Great Basin.<br><br>Cupules are linked to <b>fertility ceremonies and ritual offerings</b>. In ethnographic accounts, they were created during puberty rites and used as places to leave sacred offerings — grinding plant material, seeds, or minerals into the rock as prayer. Some scholars believe the pits accumulated sacred substances over generations.<br><br>The <b>Washoe Tribe considers Kyburz Flat and nearby sites as sacred ancestral locations</b> to be treated with respect. Photography is allowed, but no rubbings or castings. Whether the Martis people or Washoe ancestors made these specific cupules is debated, but the Washoe\'s ancestral connection to this land stretches back millennia regardless.',
      'USFS Tahoe NF; Calexplornia; Tahoe Guide; Washoe Tribe'));

  // --- Meadow Lake Petroglyphs ---
  L.marker([39.4430,-120.5060], {icon:mkI('🪨',12)})
    .addTo(L_groups.spiritRockArt)
    .bindPopup(sp('🪨 Meadow Lake Petroglyphs — NRHP Listed',
      S.rockArt,
      'Sierra County, CA · Tahoe National Forest · Martis attribution · restricted access',
      'One of the <b>most prolific petroglyph sites in the northern Sierra</b>, located in a restricted area near French Lake in the Tahoe National Forest. Attributed to the <b>Martis people</b> and listed on the <b>National Register of Historic Places</b>.<br><br>Features <b>animals, spirals, and other shapes</b> etched into volcanic rocks — designs believed to have <b>spiritual and ceremonial importance</b>. Some scholars interpret them as ritual markers or records of tribal events. The Meadow Lake and nearby <b>Hawley Lake</b> (Nevada County) sites together represent some of the densest rock art concentrations in the high Sierra.<br><br>Access is restricted to protect the site. The Sierra Nevada\'s harsh freeze-thaw cycles cause <b>exfoliation</b> — layers of granite peeling away — making these petroglyphs fragile and slowly disappearing. Every century, some are lost forever.',
      'Sierra Rock Art; Gortner; USFS Tahoe NF; Visit California'));

  // --- Sagehen Creek / North Fork sites overview ---
  L.marker([39.4320,-120.2430], {icon:mkI('🗺️',12)})
    .addTo(L_groups.spiritRockArt)
    .bindPopup(sp('🗺️ North Fork American River — Rock Art Corridor',
      S.martis,
      '46 petroglyph sites · 10-mile stretch · Martis Complex heartland',
      'The upper <b>North Fork of the American River</b> — from its source at Mountain Meadow Lake downstream through Royal Gorge — contains <b>46 documented petroglyph sites</b> forming a remarkable concentration of ancient rock art. The vast majority cluster within a 3-mile stretch downstream from the Chickering site.<br><br>What makes these sites distinctive: the petroglyphs appear <b>only on horizontal bedrock</b> (not boulders or cliffs like Southwest sites), and they are consistently placed at locations <b>offering panoramic views of Sierra peaks</b>. Archaeologist Willis Gortner demonstrated that some wavy-line petroglyphs may be <b>trail maps</b> — their contours matching actual topographic routes when overlaid on contour maps.<br><br>The <b>Sagehen Creek Field Station</b> (UC Natural Reserve) sits within this rock art landscape. Most petroglyph sites on the Tahoe National Forest were made by <b>ancestors of the Washoe tribe</b>, though Nisenan and Northern Maidu also visited, potentially adding images of their own. This gives many sites spiritual and cultural relevance to <b>multiple tribal nations</b>.',
      'Sagehen Creek Field Station; Gortner 1986a/1988; Friends of Sierra Rock Art; USFS'));

  // ============================================================
  //  🦴 ARCHAEOLOGICAL SITES — Expanding the Deep Time Story
  // ============================================================

  // --- Spirit Cave enhanced (spiritual context) ---
  L.marker([39.4850,-118.7230], {icon:mkI('🕯️',14)})
    .addTo(L_groups.spiritArchaeo)
    .bindPopup(sp('🕯️ Spirit Cave — Repatriation & Healing',
      S.archeo,
      'Churchill County, NV · 10,600 BP · repatriated 2016 · reburied 2018',
      'Spirit Cave\'s story is not just archaeological — it is a story of <b>spiritual reckoning and justice</b>. When the Fallon Paiute-Shoshone Tribe claimed the 10,600-year-old remains under NAGPRA, they were denied for 20 years. Scientists argued the skull shape was \"Caucasoid\" — a claim debunked by DNA in 2016.<br><br>Eske Willerslev\'s DNA study proved the Spirit Cave man <b>was an ancestor of the Fallon Paiute-Shoshone</b>, confirming what the tribe always knew. He was repatriated and given a proper burial in 2018. Willerslev said: <i>\"The tribe have real feelings for Spirit Cave... it would be very much like burying our mother, father, sister or brother.\"</i><br><br>The tribe\'s statement: <i>\"This confirms what we have always known from our oral tradition — that the man taken from his final resting place in Spirit Cave is our Native American ancestor.\"</i><br><br>Spirit Cave sits in the <b>Stillwater Mountains foothills</b> overlooking what was once rich Lahontan wetland. The man, aged 45-55, wore moccasins and was wrapped in finely woven tule matting with a rabbit-skin blanket. Fish bones in his intestines confirm the marsh-based diet. His woven textiles were more sophisticated than anything previously known for that age — <b>requiring looms</b>.',
      'Moreno-Mayar et al. 2018 (Science); Fallon Paiute-Shoshone Tribe; All Around Nevada'));

  // --- Lovelock Cave enhanced (duck decoys) ---
  L.marker([40.0190,-118.4850], {icon:mkI('🦆',14)})
    .addTo(L_groups.spiritArchaeo)
    .bindPopup(sp('🦆 Lovelock Cave — World\'s Oldest Duck Decoys',
      S.archeo,
      'Churchill County, NV · 4,000–600 BP · Lovelock Culture · NRHP 1984',
      'Beyond its fame as one of North America\'s most important archaeological sites, Lovelock Cave reveals a <b>2,000+ year relationship between humans and the Humboldt Sink marshes</b> — a microcosm of the sacred water-human bond central to Great Basin spirituality.<br><br>The <b>duck decoys</b> found here — the <b>oldest known decoys in the world</b> (~2,000 years old) — are masterworks of ecological knowledge: tule-reed bodies, real feathers, painted details. They demonstrate an <b>intimate understanding of waterfowl behavior</b> that could only come from generations of careful observation and spiritual relationship with the marsh.<br><br>The Lovelock Culture people (<b>Toidokado</b> in Northern Paiute tradition) drew 90% of their diet from the marsh: Lahontan cutthroat trout, ducks, mudhens, bulrush, cattail. They traded with Pacific coast peoples — marine shell beads are abundant. Human coprolites (preserved feces) provide extraordinary dietary detail.<br><br>The Paiute oral tradition of the <b>Saiduka (Si-Te-Cah)</b> describes enemies who lived in the marshes and a great battle at this cave — potentially a cultural memory of the Lovelock-to-Numic transition ~1,000 years ago.',
      'Loud & Harrington 1929; Heizer & Napton 1970; Thomas 1985'));

  // --- Washoe Meadows State Park ---
  L.marker([38.8900,-120.0250], {icon:mkI('🌿',13)})
    .addTo(L_groups.spiritArchaeo)
    .bindPopup(sp('🌿 Washoe Meadows State Park',
      S.washoe,
      '620 acres · South Lake Tahoe · meadow & woodland · named for the Washoe',
      '<b>Washoe Meadows State Park</b> occupies 620 acres of meadow and woodland at the base of the escarpment leading to Echo Summit — named for the Washoe people who <b>inhabited this area for thousands of years</b>.<br><br>This area was part of the <b>summer gathering territory</b> around the south shore of Lake Tahoe. The meadows provided seeds, roots, berries, and medicinal plants. The Upper Truckee River and its tributaries flowing through the park supported fishing. The elevation (~6,200 ft) and open meadows made it an ideal campsite.<br><br>The park preserves a landscape that the Washoe would have recognized — unlike most of the Tahoe Basin, which has been heavily developed. It is one of the few remaining places where the relationship between <b>meadow, water, and forest</b> echoes the precontact ecosystem.',
      'California State Parks; Washoe Tribe'));

  // --- Indian Grinding Rock (Chaw'se) ---
  L.marker([38.4250,-120.6410], {icon:mkI('🏺',14)})
    .addTo(L_groups.spiritArchaeo)
    .bindPopup(sp('🏺 Indian Grinding Rock (Chaw\'se) — 1,185 Mortars',
      S.archeo,
      'Amador County, CA · largest mortar collection in N. America · Miwok/Washoe artifacts',
      '<b>Chaw\'se</b> (Miwok: \"grinding place\") preserves the <b>largest collection of bedrock mortars in North America</b> — 1,185 mortar cups carved into a massive limestone outcrop, along with 363 petroglyphs. Primarily a Northern Sierra Miwok site, the museum also holds significant <b>Washoe artifacts</b> — reflecting the overlapping territories and trade relationships between the Miwok (west slope) and Washoe (east slope) peoples.<br><br>The mortars were used to process acorns, pine nuts, seeds, and medicinal plants — the same food-processing technology found at Washoe sites like <b>Lam Watah</b> at Lake Tahoe. A reconstructed Miwok village with roundhouse stands on the grounds.<br><br>This site demonstrates the <b>shared material culture of the Sierra peoples</b>: Miwok, Maidu, Washoe, Nisenan, and Yokut all used similar grinding technology, traded across the Sierra crest, and maintained complex relationships despite speaking unrelated languages.',
      'California State Parks; Chaw\'se Museum'));

  // ============================================================
  //  🔗 SPIRITUAL CONNECTION LINES
  //  Showing the web of water-rock-power across the landscape
  // ============================================================

  // Cave Rock → Steamboat Hot Springs (shamanic travel path)
  L.polyline([
    [39.04,-119.95],[39.00,-119.90],[38.97,-119.86],[38.96,-119.83],
    [39.10,-119.80],[39.25,-119.76],[39.39,-119.75]
  ], {color:S.connect, weight:1.5, opacity:0.3, dashArray:'4,8'})
  .addTo(L_groups.sacredWater)
  .bindPopup(sp('🔗 Sacred Waters Connection', S.spirit,
    'Cave Rock → Carson Valley hot springs → Steamboat Springs',
    'The Washoe spiritual landscape connects water features across their territory. <b>Shamans with Water Baby guardian spirits</b> could travel the underground waterways linking Lake Tahoe to Carson Valley. The hot springs along the eastern Sierra front — from Walley\'s to Steamboat — all carry the same <b>spiritual charge</b>: places where the power of the earth emerges through water.<br><br>This is not metaphorical. The same geothermal fault system that heats Steamboat Hot Springs connects through the Carson Range to the hot springs near Genoa and Minden. The Washoe understood this underground connection through spiritual knowledge thousands of years before geologists mapped the fault lines.',
    'd\'Azevedo 1986; Dance For All People; Finding Nevada Wild'));

  // Winnemucca Lake → Spirit Cave → Grimes Point (oldest sites corridor)
  L.polyline([
    [40.07,-119.34],[39.90,-119.14],[39.70,-118.90],
    [39.49,-118.72],[39.41,-118.65]
  ], {color:S.rockArt, weight:1.5, opacity:0.25, dashArray:'4,8'})
  .addTo(L_groups.spiritArchaeo)
  .bindPopup(sp('🔗 15,000 Years of Presence — Lahontan Basin Corridor', S.archeo,
    'Winnemucca Lake (14,800 BP) → Spirit Cave (10,600 BP) → Grimes Point (8,000+ BP)',
    'A corridor of the <b>oldest human evidence in western North America</b> runs through the Lahontan Basin. The <b>Winnemucca Lake petroglyphs</b> (up to 14,800 years old), the <b>Spirit Cave mummy</b> (10,600 years old), the <b>Grimes Point petroglyphs</b> (8,000+ years old), and <b>Hidden Cave</b> (3,800 years old) form a continuous record of human presence spanning 15 millennia — all connected by the waters of ancient <b>Lake Lahontan</b>.<br><br>These sites cluster around the <b>marshes, springs, and lake margins</b> that sustained human life as the great Pleistocene lake receded. The pattern is clear: <b>where water persisted, people persisted</b>. Rock art, burial sites, and cache caves all concentrate at water sources — the same places that Water Babies inhabit in Washoe and Paiute cosmology.<br><br>DNA analysis of the Spirit Cave man links him genetically to <b>modern Fallon Paiute-Shoshone</b> — a 10,600-year chain of continuity in this landscape.',
    'Benson et al. 2013; Moreno-Mayar et al. 2018; BLM; NV State Museum'));

  // Donner Summit → Chickering → Meadow Lake (Martis rock art corridor)
  L.polyline([
    [39.32,-120.33],[39.31,-120.30],[39.30,-120.28],
    [39.30,-120.34],[39.35,-120.40],[39.40,-120.45],[39.44,-120.51]
  ], {color:S.martis, weight:1.5, opacity:0.25, dashArray:'4,8'})
  .addTo(L_groups.spiritRockArt)
  .bindPopup(sp('🔗 Martis Rock Art Corridor — High Sierra Spirit Trail', S.martis,
    'Donner Summit → Chickering → Kyburz Flat → Meadow Lake · 92+ sites',
    'The <b>Martis Complex</b> (~2000 BCE–500 CE) left <b>92+ known rock art sites</b> across the northern Sierra — the most concentrated body of prehistoric art in the region. The sites cluster along <b>travel corridors between Lake Tahoe and the western slope</b>, especially along the North Fork of the American River and over Donner Pass.<br><br>The Martis were likely <b>ancestors of the Washoe</b>. Around 1,500 years ago, they appear to have concentrated eastward toward the Reno-Carson City area and evolved into the historic Washoe people. Though the Martis have not lived in the high Sierra for centuries, <b>the Washoe Tribe considers these sites sacred ancestral locations</b>.<br><br>The rock art\'s consistent placement at <b>panoramic viewpoints overlooking Sierra peaks</b> suggests these were not casual markings but deliberately chosen spiritual locations where the relationship between <b>humans, mountains, and sky</b> could be expressed in stone.',
    'Gortner 1988; Friends of Sierra Rock Art; USFS Tahoe NF; Payen 1966'));

  // ============================================================
  //  🔮 WASHOE SPIRITUAL OVERVIEW MARKER
  //  A conceptual popup explaining the spiritual worldview
  // ============================================================
  L.marker([39.10,-119.95], {icon:mkI('🔮',16)})
    .addTo(L_groups.sacredWater)
    .bindPopup(sp('🔮 Washoe Spirituality — The Living Landscape', S.spirit,
      'Waší∙šiw worldview · all nature is sentient · power pervades the land',
      '<i>\"It is difficult to separate the sacred from the everyday life of the Washoe. The Washoe see every aspect of the environment as sentient beings that are deserving of respect and cooperation if humans are to survive.\"</i> — Tallac Historic Site<br><br><b>Core beliefs:</b><br>• All natural phenomena are imbued with <b>sentient spirit power</b> — earth, water, rocks, animals, plants<br>• <b>Prayers and offerings</b> were essential for any successful human endeavor — hunting, fishing, gathering, travel<br>• Animals were never hunted for sport; before a kill, hunters performed sacred rituals and asked forgiveness<br>• <b>Shamans (Damomliw)</b> were called to power by spirit-beings who came unsought — resisting the call could be fatal<br>• Both men and women could become shamans, apprenticing under experienced practitioners<br>• The dead\'s spirits were feared; houses where death occurred were abandoned or burned<br><br><b>Sacred beings:</b><br>• <b>Metsunge (Water Babies)</b> — created all lakes and streams, dwell in water, travel through Cave Rock<br>• <b>Ong</b> — giant man-eating bird nesting in Lake Tahoe, wingbeats bending trees<br>• A man-eating giant in a cave near Cave Rock who preyed on those neglecting duty<br><br><b>Sacred places:</b> Hot springs, rock art sites, mountain peaks, water sources — all connected by the spiritual force that flows through water and stone.',
      'Tallac Historic Site; d\'Azevedo 1986 (HNAI 11); Handelman 1967; Encyclopedia.com/Washoe; Britannica'));

  // ============================================================
  //  SIDEBAR REGISTRATION
  // ============================================================
  if(window.registerLayer) {
    registerLayer('sacredWater', 'Sacred waters & spiritual sites', 'greatbasin');
    registerLayer('spiritRockArt', 'Sierra/Western NV rock art sites', 'greatbasin');
    registerLayer('spiritArchaeo', 'Archaeological deep time sites', 'greatbasin');
  }

  console.log('✅ 66-spiritual-landscape.js loaded — Sacred waters, rock art, archaeology, Washoe spirituality');
})();
