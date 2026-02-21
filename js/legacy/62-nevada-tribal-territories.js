// ============================================================
// 62 — Nevada Tribal Territories (Band-Level Detail)
// Detailed polygons for all Nevada tribes with band-level
// territories, cultural info, key dates, and reservations
// Sources: Steward 1938; Kroeber 1925; d'Azevedo 1986;
//          NV Indian Commission; Nevada's Indian Territory;
//          Stewart 1939 (Northern Paiute Bands); Inter-Tribal
//          Council of Nevada; Kelly & Fowler 1986
// ============================================================

(function(){
  'use strict';

  // ============================================================
  // COLOR PALETTE — each major tribe gets a distinct hue
  // ============================================================
  const NV = {
    // Northern Paiute (Numu) — blues
    npMain:     '#42A5F5',
    npLight:    '#64B5F6',
    npBand:     'rgba(66,165,245,0.10)',
    // Western Shoshone (Newe) — ambers/oranges
    wsMain:     '#FFA726',
    wsLight:    '#FFB74D',
    wsBand:     'rgba(255,167,38,0.10)',
    // Southern Paiute (Nuwuvi) — greens
    spMain:     '#66BB6A',
    spLight:    '#81C784',
    spBand:     'rgba(102,187,106,0.10)',
    // Washoe (Washshiw) — purples
    waMain:     '#CE93D8',
    waLight:    '#E1BEE7',
    waBand:     'rgba(206,147,216,0.10)',
    // Mojave (Pipa Aha Macav) — warm red
    moMain:     '#EF5350',
    moBand:     'rgba(239,83,80,0.10)',
    // Pre-Numic / Lovelock — silver/gray
    preMain:    '#B0BEC5',
    preBand:    'rgba(176,190,197,0.08)',
    // General
    text:       '#E8D5C4',
    border:     '#5C4033',
    reservation:'#FFD600'
  };

  // ============================================================
  // LAYER GROUPS
  // ============================================================
  if(!window.L_groups) window.L_groups = {};

  // Band-level territory polygons
  L_groups.nvNorthernPaiuteBands = L.layerGroup().addTo(map);
  L_groups.nvWesternShoshoneBands = L.layerGroup().addTo(map);
  L_groups.nvSouthernPaiuteBands = L.layerGroup().addTo(map);
  L_groups.nvWashoeBands = L.layerGroup().addTo(map);
  L_groups.nvMojaveFortMojave = L.layerGroup().addTo(map);
  // Modern reservations & colonies
  L_groups.nvReservations = L.layerGroup().addTo(map);

  // ============================================================
  // HELPER — popup builder
  // ============================================================
  function nvPopup(name, color, subtitle, desc, keyDates, sources) {
    let html = `<div style="max-width:420px">
      <h4 style="color:${color};margin:0 0 2px">${name}</h4>
      <div style="font-size:10px;color:#aaa;margin-bottom:6px">${subtitle}</div>
      <div style="font-size:12px;color:#ccc;line-height:1.5">${desc}</div>`;
    if(keyDates) {
      html += `<div style="margin-top:8px;font-size:11px;color:#b0a090;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px">
        <b>Key dates:</b> ${keyDates}</div>`;
    }
    html += `<div style="margin-top:6px;font-size:10px;color:#888">Sources: ${sources}</div></div>`;
    return html;
  }

  // ============================================================
  // HELPER — polygon + label
  // ============================================================
  function addTerritory(coords, name, color, fillColor, layer, popupHtml, labelSize) {
    const poly = L.polygon(coords, {
      color: color, weight: 1.5, opacity: 0.5,
      fillColor: fillColor, fillOpacity: 0.10,
      dashArray: '4,4'
    }).addTo(layer);
    poly.bindPopup(popupHtml, {maxWidth:440});
    // Label at centroid
    const cLat = coords.reduce((s,c) => s+c[0], 0) / coords.length;
    const cLng = coords.reduce((s,c) => s+c[1], 0) / coords.length;
    L.marker([cLat, cLng], {
      icon: L.divIcon({
        className: '',
        html: `<div style="color:${color};font-size:${labelSize||10}px;font-weight:600;text-align:center;text-shadow:0 0 4px #000,0 0 8px #000;white-space:nowrap;pointer-events:none">${name}</div>`,
        iconSize: [140, 18], iconAnchor: [70, 9]
      }), interactive: false
    }).addTo(layer);
    return poly;
  }

  // ============================================================
  //  NORTHERN PAIUTE BANDS (Numu)
  //  ~1000 CE – present · Western Numic speakers
  //  Based on Stewart 1939, Steward 1938, Fowler & Liljeblad 1986
  // ============================================================

  // --- Kuyuidokado (Cui-ui Eaters) — Pyramid Lake ---
  addTerritory(
    [[40.65,-119.90],[40.60,-119.50],[40.35,-119.35],[40.10,-119.35],
     [39.85,-119.45],[39.75,-119.55],[39.80,-119.80],[39.95,-120.00],
     [40.15,-120.05],[40.35,-120.00],[40.50,-119.95]],
    'Kuyuidokado',
    NV.npMain, NV.npBand, L_groups.nvNorthernPaiuteBands,
    nvPopup('Kuyuidokado (Cui-ui Eaters)',
      NV.npMain,
      'Northern Paiute · Pyramid Lake · Kooyooe Tukadu',
      'The <b>Kuyuidokado</b> — "those who eat cui-ui" — are the Northern Paiute band centered on <b>Pyramid Lake</b>, the largest remnant of Pleistocene Lake Lahontan. The <b>cui-ui</b> (Chasmistes cujus) is a large sucker fish found nowhere else on Earth, and its spring spawning run up the Truckee River was the most important food event of the year. Pyramid Lake also supported massive runs of <b>Lahontan cutthroat trout</b> — the largest inland trout in North America (up to 60 lbs). Their territory encompassed the Truckee River corridor from the Sierra foothills to the lake, the Lake Range, and portions of the Smoke Creek Desert. Chief <b>Truckee</b> (Tru-ki-zo) guided John C. Frémont across the desert in 1844. His grandson <b>Chief Numaga</b> ("The Generous One") initially counseled peace but led the Northern Paiute to victory at the <b>First Battle of Pyramid Lake</b> (1860) — one of the worst military defeats of settlers in the American West. His granddaughter <b>Sarah Winnemucca</b> became America\'s first published Native American woman author. The Pyramid Lake Reservation (est. 1859) is the oldest in Nevada and the tribe has never been fully relocated.',
      '1844: Chief Truckee guides Frémont • 1859: Reservation established • 1860: Pyramid Lake War — Numaga defeats Major Ormsby (76 settlers killed) • 1905: Derby Dam diverts Truckee River, devastating fishery • 1967: Cui-ui listed as endangered • 2015: Tribal water rights settlement',
      'Stewart 1939; Fowler & Liljeblad 1986 (HNAI); Pyramid Lake Paiute Tribe; NV Indian Commission'),
    11
  );

  // --- Toidokado (Cattail Eaters) — Stillwater / Carson Sink ---
  addTerritory(
    [[39.95,-118.80],[39.90,-118.40],[39.65,-118.20],[39.40,-118.15],
     [39.20,-118.30],[39.15,-118.60],[39.25,-118.85],[39.45,-119.00],
     [39.65,-119.05],[39.80,-118.95]],
    'Toidokado',
    NV.npLight, NV.npBand, L_groups.nvNorthernPaiuteBands,
    nvPopup('Toidokado (Cattail Eaters)',
      NV.npLight,
      'Northern Paiute · Carson Sink / Stillwater Marsh · Fallon area',
      'The <b>Toidokado</b> — "cattail-seed eaters" — occupied the <b>Carson Sink</b> and <b>Stillwater Marsh</b>, where the Carson River terminates in one of the richest wetland ecosystems in the Great Basin. Cattail (tule) was their primary food — seeds, pollen, shoots, and rhizomes were all consumed. The marshes also provided ducks (hunted with ingenious tule-reed decoys), fish, and other wetland resources. Their territory included the Lahontan Reservoir area, Stillwater Wildlife Refuge, and the desert playas south and east of Fallon. This area has extraordinary archaeological depth — <b>Spirit Cave</b> (10,600-year-old mummy), <b>Hidden Cave</b>, <b>Grimes Point</b> petroglyphs, and the <b>Lovelock Culture</b> type site are all in Toidokado territory. The Fallon Paiute-Shoshone Tribe represents their descendants today. In 2018, DNA analysis of the Spirit Cave mummy confirmed genetic continuity with the modern Fallon Paiute-Shoshone — <b>10,000+ years of continuous habitation</b>.',
      '~2000 BCE: Lovelock Culture flourishes in marshes • ~1000 CE: Northern Paiute arrive, absorb earlier peoples • 1908: Newlands Reclamation Project diverts Carson River, devastating marshes • 1990: Stillwater wetlands receive federal protection • 2018: Spirit Cave repatriation after DNA confirmation',
      'Stewart 1939; Fowler & Liljeblad 1986; Fallon Paiute-Shoshone Tribe; Moreno-Mayar et al. 2018'),
    10
  );

  // --- Agai Dicutta (Trout Eaters) — Walker River / Walker Lake ---
  addTerritory(
    [[39.20,-119.40],[39.15,-119.10],[38.95,-118.85],[38.75,-118.70],
     [38.55,-118.65],[38.35,-118.75],[38.30,-119.00],[38.40,-119.20],
     [38.55,-119.35],[38.75,-119.45],[39.00,-119.50]],
    'Agai Dicutta',
    NV.npMain, NV.npBand, L_groups.nvNorthernPaiuteBands,
    nvPopup('Agai Dicutta (Trout Eaters)',
      NV.npMain,
      'Northern Paiute · Walker River / Walker Lake · Schurz area',
      'The <b>Agai Dicutta</b> — "trout eaters" — centered their lives on <b>Walker Lake</b> and the Walker River, where Lahontan cutthroat trout and other fish provided the primary protein source. Their territory stretched from the Pine Grove Hills south along the Walker River to Walker Lake, including the Wassuk Range. The Walker River Paiute Reservation (est. 1874) near Schurz is their modern homeland. Every third weekend of September, the tribe hosts the <b>Pine Nut Festival</b> — a spiritual ceremony dating back over a century celebrating life and the pine nut harvest. During the pine nut dance, dancers move on sacred ground around the pine tree. <b>Wovoka</b> (Jack Wilson, c.1856–1932), founder of the <b>Ghost Dance</b> movement, was born near Walker Lake. His vision of a restored earth inspired one of the most widespread pan-Indian spiritual movements in history — and its suppression led directly to the Massacre at Wounded Knee (1890).',
      '1874: Walker River Reservation established • 1889: Wovoka\'s vision — Ghost Dance begins near Walker Lake • 1890: Ghost Dance suppressed; Wounded Knee massacre • 1926: Walker Lake begins declining due to upstream diversions • 2019: Walker Lake Paiute Restoration Act proposed',
      'Stewart 1939; Fowler & Liljeblad 1986; Walker River Paiute Tribe; Hittman 1990'),
    10
  );

  // --- Kucadikadi (Brine Fly Pupae Eaters) — Mono Lake area ---
  addTerritory(
    [[38.35,-119.45],[38.30,-119.15],[38.10,-119.00],[37.90,-118.95],
     [37.75,-119.00],[37.65,-119.15],[37.70,-119.35],[37.85,-119.50],
     [38.05,-119.55],[38.20,-119.55]],
    'Kucadikadi',
    NV.npLight, NV.npBand, L_groups.nvNorthernPaiuteBands,
    nvPopup('Kucadikadi (Brine Fly Pupae Eaters)',
      NV.npLight,
      'Northern Paiute · Mono Lake / Bridgeport · CA-NV border',
      'The <b>Kucadikadi</b> — "brine fly pupae eaters" — harvested the protein-rich larvae of the alkali fly (Ephydra hians) from the shores of <b>Mono Lake</b>, one of the oldest lakes in North America. These tiny pupae (kutsavi) were dried and traded as far as the San Joaquin Valley. Mark Twain described them in <i>Roughing It</i>. Their territory straddled the California-Nevada border, encompassing Mono Lake, Bridgeport Valley, and the eastern Sierra foothills. The Bridgeport Paiute Indian Colony represents their descendants. Mono Lake\'s ecosystem — and the Kucadikadi\'s ancestral food source — was nearly destroyed when Los Angeles diverted its feeder streams starting in 1941. A landmark 1994 court decision ordered partial restoration.',
      '1941: LA begins diverting Mono Lake tributaries • 1978: Mono Lake Committee forms • 1994: State Water Board orders lake level restoration • Bridgeport Paiute Indian Colony federally recognized',
      'Stewart 1939; Fowler & Liljeblad 1986; Steward 1933; Mono Lake Committee'),
    9
  );

  // --- Kamodokado (Hare Eaters) — Smoke Creek / Granite Creek Desert ---
  addTerritory(
    [[41.00,-119.90],[40.95,-119.50],[40.70,-119.40],[40.50,-119.50],
     [40.45,-119.70],[40.50,-119.95],[40.65,-120.10],[40.80,-120.10],
     [40.95,-120.00]],
    'Kamodokado',
    NV.npLight, NV.npBand, L_groups.nvNorthernPaiuteBands,
    nvPopup('Kamodokado (Hare Eaters)',
      NV.npLight,
      'Northern Paiute · Smoke Creek Desert / north of Pyramid Lake',
      'The <b>Kamodokado</b> — "hare eaters" — occupied the harsh terrain north of Pyramid Lake, including the <b>Smoke Creek Desert</b> and Granite Creek Desert. Jackrabbits were their primary protein source, hunted in communal drives using long nets. Their territory extended to the edge of the Black Rock Desert — one of the most barren landscapes in Nevada, yet traversed for millennia by indigenous peoples following seasonal resources. The region contains some of the most remote and undisturbed archaeological sites in the Great Basin.',
      '~1000 CE: Kamodokado band established in area • 1843-1868: Emigrant trail cuts through territory • 1860s: Conflicts with settlers and miners',
      'Stewart 1939; Fowler & Liljeblad 1986; Steward 1938'),
    9
  );

  // --- Wadatoka (Wada Seed Eaters) — Winnemucca / Humboldt Sink ---
  addTerritory(
    [[41.10,-118.30],[41.05,-117.80],[40.80,-117.50],[40.55,-117.50],
     [40.35,-117.60],[40.25,-117.80],[40.20,-118.10],[40.25,-118.40],
     [40.40,-118.60],[40.60,-118.70],[40.80,-118.60],[40.95,-118.50]],
    'Wadatoka',
    NV.npMain, NV.npBand, L_groups.nvNorthernPaiuteBands,
    nvPopup('Wadatoka (Wada Seed Eaters)',
      NV.npMain,
      'Northern Paiute · Humboldt Sink / Winnemucca / Lovelock',
      'The <b>Wadatoka</b> — "wada seed eaters" — harvested seeds of the wada plant (Suaeda depressa, seepweed) from the alkali flats around the <b>Humboldt Sink</b>, where the Humboldt River disappears into the desert. Their territory encompassed the lower Humboldt River valley, the town of Lovelock, and surrounding ranges. The <b>Lovelock Paiute Tribe</b> and <b>Winnemucca Indian Colony</b> represent their descendants. This was a critical cultural landscape — the Humboldt Sink was the terminus of the most important river in the Great Basin, and the transition from Humboldt Sink to Forty Mile Desert was the most dreaded section of the California Trail for emigrants. <b>Lovelock Cave</b>, the type site for the pre-Numic Lovelock Culture, sits in their territory.',
      '~1000 CE: Wadatoka replace/absorb Lovelock Culture peoples • 1845-1870: California Trail emigrants devastate resources • 1907: Lovelock Indian Colony established • 1917: Winnemucca Indian Colony established',
      'Stewart 1939; Fowler & Liljeblad 1986; Lovelock Paiute Tribe; Loud & Harrington 1929'),
    10
  );

  // --- Moadokado / Summit Lake Band — northern Nevada ---
  addTerritory(
    [[41.80,-119.00],[41.75,-118.60],[41.50,-118.40],[41.25,-118.45],
     [41.10,-118.60],[41.10,-118.90],[41.25,-119.10],[41.45,-119.15],
     [41.65,-119.10]],
    'Summit Lake Band',
    NV.npLight, NV.npBand, L_groups.nvNorthernPaiuteBands,
    nvPopup('Summit Lake Paiute Tribe',
      NV.npLight,
      'Northern Paiute · Summit Lake · remote north-central Nevada',
      'The <b>Summit Lake Paiute</b> occupy one of the most remote reservations in the United States, centered on <b>Summit Lake</b> — a natural lake at 5,900 feet in the high desert of Humboldt County. The lake is one of only two natural habitats for the <b>Lahontan cutthroat trout</b> (the other being Pyramid Lake). The tribe has been instrumental in preserving this species. Their territory encompasses the Jackson Mountains and surrounding desert valleys. Summit Lake is believed to have been a seasonal gathering site for Northern Paiute bands for thousands of years, situated at the crossroads of several band territories. The reservation was established in 1913 and covers about 10,800 acres. Despite its remoteness — over 60 miles of dirt road from the nearest town — the tribe maintains a strong cultural presence.',
      '1913: Summit Lake Reservation established • Tribe federally recognized • Critical habitat for Lahontan cutthroat trout preservation',
      'Stewart 1939; Summit Lake Paiute Tribe; U.S. Fish & Wildlife Service'),
    9
  );

  // --- Fort McDermitt Paiute-Shoshone — NV/OR border ---
  addTerritory(
    [[42.05,-117.90],[42.00,-117.50],[41.80,-117.30],[41.60,-117.30],
     [41.45,-117.45],[41.40,-117.70],[41.50,-117.95],[41.65,-118.10],
     [41.85,-118.10],[42.00,-118.00]],
    'Fort McDermitt',
    NV.npMain, NV.npBand, L_groups.nvNorthernPaiuteBands,
    nvPopup('Fort McDermitt Paiute-Shoshone',
      NV.npMain,
      'Northern Paiute & Western Shoshone · NV-OR border · Tagötöka & others',
      'The <b>Fort McDermitt</b> reservation straddles the Nevada-Oregon border, home to both Northern Paiute and Western Shoshone peoples. The Paiute bands here include the <b>Tagötöka</b> ("biscuitroot eaters") who lived along the Owyhee and Quinn Rivers. Fort McDermitt was originally a U.S. Army outpost (1865-1889) established during the Snake War — one of the bloodiest conflicts in the American West. After the military abandoned the fort, Paiute and Shoshone families settled on the grounds. The reservation was formally established in 1936. The area was traditionally a meeting ground where Northern Paiute and Western Shoshone territories overlapped, and both languages are still spoken. The Quinn River and its tributaries provided critical water in this arid landscape.',
      '1865: Fort McDermitt established during Snake War • 1868: Snake War ends • 1889: Fort abandoned • 1936: Reservation established • Mixed Paiute-Shoshone community',
      'Stewart 1939; Inter-Tribal Council of Nevada; Fort McDermitt Paiute-Shoshone Tribe'),
    9
  );

  // ============================================================
  //  WESTERN SHOSHONE BANDS (Newe)
  //  ~1000 CE – present · Central Numic speakers
  //  Based on Steward 1938, Thomas 1983, Crum 1994
  // ============================================================

  // --- Te-Moak Bands — Elko / Ruby Valley / northeast NV ---
  addTerritory(
    [[41.50,-116.50],[41.45,-115.70],[41.20,-115.30],[40.90,-115.10],
     [40.60,-115.20],[40.40,-115.50],[40.30,-115.90],[40.30,-116.20],
     [40.45,-116.60],[40.65,-116.80],[40.90,-117.00],[41.10,-116.90],
     [41.30,-116.70]],
    'Te-Moak Bands',
    NV.wsMain, NV.wsBand, L_groups.nvWesternShoshoneBands,
    nvPopup('Te-Moak Bands of Western Shoshone',
      NV.wsMain,
      'Western Shoshone (Newe) · Elko / Battle Mountain / Wells / South Fork',
      'The <b>Te-Moak Bands</b> are a confederation of four Western Shoshone bands in northeastern Nevada: <b>Battle Mountain Band</b> (Tonomudza/Donammuzi), <b>Elko Band</b>, <b>South Fork Band</b>, and <b>Wells Band</b> (Kuiyudika, "desert plant eaters"). Named after Chief <b>Muchach Te-Moak</b>, who negotiated with the U.S. government. Their territory encompassed the Humboldt River headwaters, Ruby Mountains, Jarbidge Mountains, and the vast valleys of northeastern Nevada — some of the most productive pine nut and game country in the Great Basin. The Te-Moak organized under the 1934 Indian Reorganization Act but traditionalists created the <b>Sacred Lands Association</b> (1974), arguing the Te-Moak council didn\'t represent them and that their land was never ceded. The <b>Treaty of Ruby Valley</b> (1863) is central to Western Shoshone identity — it granted passage rights but <b>never ceded land</b>. This became the longest-running land case in U.S. history (1962-2004).',
      '1863: Treaty of Ruby Valley — peace and passage, NOT land cession • 1877: Duck Valley Reservation established — Te-Moak refuse to relocate • 1917-1918: Battle Mountain, Elko, Wells colonies established • 1938: Te-Moak Constitution adopted under IRA • 1962-2004: Longest land case in U.S. history • 2004: $145M award — many Shoshone refuse, insisting land not for sale',
      'Steward 1938; Crum 1994; Te-Moak Tribe; Treaty of Ruby Valley 1863; ICC Docket 326-A'),
    11
  );

  // --- Battle Mountain / Reese River / Tonopah Shoshone — central NV ---
  addTerritory(
    [[40.40,-117.60],[40.35,-116.90],[40.15,-116.50],[39.85,-116.30],
     [39.55,-116.20],[39.25,-116.40],[39.00,-116.60],[38.80,-116.80],
     [38.70,-117.10],[38.75,-117.40],[38.90,-117.60],[39.10,-117.70],
     [39.35,-117.80],[39.60,-117.85],[39.85,-117.80],[40.10,-117.70]],
    'Central Newe',
    NV.wsLight, NV.wsBand, L_groups.nvWesternShoshoneBands,
    nvPopup('Central Western Shoshone (Reese River / Tonopah)',
      NV.wsLight,
      'Western Shoshone (Newe) · Central Nevada · Yomba / Austin / Tonopah',
      'The central Western Shoshone occupied the vast mountain-and-valley landscape of central Nevada — the Toiyabe, Toquima, Monitor, and Shoshone Ranges. This is the <b>"Loneliest Road in America"</b> (Highway 50) country. Band groups included the Reese River Shoshone near Austin and the Big Smoky Valley people. Their subsistence centered on <b>pine nut harvesting</b> (the most important food and social event), root digging, seed gathering, and communal rabbit and antelope drives. Family groups dispersed during lean seasons and gathered for communal hunts. The <b>Yomba Shoshone Reservation</b> (est. 1937) in Reese River Valley is the modern homeland for many of these bands. Sacred sites include <b>Toquima Cave</b> — a painted pictograph site high in the Toquima Mountains. The Western Shoshone made distinctive <b>Brownware pottery</b> and some bands practiced limited irrigation of wild seed plots.',
      '~1000 CE: Western Shoshone arrive during Numic Spread • 1862: Silver discovered in Austin — miners flood territory • 1937: Yomba Reservation established in Reese River Valley • Toquima Cave preserved as sacred site',
      'Steward 1938; Thomas 1983; Yomba Shoshone Tribe; USFS Humboldt-Toiyabe'),
    10
  );

  // --- Duckwater Shoshone — Railroad Valley ---
  addTerritory(
    [[39.25,-116.30],[39.20,-115.80],[39.00,-115.50],[38.75,-115.40],
     [38.50,-115.50],[38.40,-115.80],[38.45,-116.10],[38.60,-116.30],
     [38.80,-116.45],[39.00,-116.45]],
    'Duckwater',
    NV.wsMain, NV.wsBand, L_groups.nvWesternShoshoneBands,
    nvPopup('Duckwater Shoshone Tribe',
      NV.wsMain,
      'Western Shoshone (Newe) · Railroad Valley / Duckwater · Nye County',
      'The <b>Duckwater Shoshone</b> occupy a reservation in <b>Railroad Valley</b>, one of the most isolated inhabited valleys in Nevada. Their ancestors lived throughout the White Pine and Nye County ranges, harvesting pine nuts, hunting antelope, and gathering seeds across a vast territory. The Duckwater Reservation was established in 1940 on land with natural warm springs — "Duckwater" comes from the wild ducks attracted to these springs. The tribe gained national recognition for their environmental stewardship: they earned the <b>2010 U.S. Fish & Wildlife Endangered Species Recovery Champion Award</b> for restoring critical habitat of the <b>Railroad Valley springfish</b> — a tiny fish surviving in thermal springs since the Pleistocene, found nowhere else on Earth. The tribe has also been active in opposing nuclear waste storage at nearby <b>Yucca Mountain</b> and nuclear testing at the Nevada Test Site, which fell within traditional Shoshone territory.',
      '1940: Duckwater Reservation established • 1951: Nevada Test Site opens on Shoshone land • 2010: Recovery Champion Award for springfish restoration • Opposition to Yucca Mountain nuclear waste repository',
      'Steward 1938; Duckwater Shoshone Tribe; USFWS; Inter-Tribal Council of Nevada'),
    9
  );

  // --- Ely Shoshone — White Pine County ---
  addTerritory(
    [[39.50,-115.60],[39.45,-115.10],[39.25,-114.80],[39.00,-114.70],
     [38.80,-114.80],[38.70,-115.10],[38.75,-115.40],[38.90,-115.60],
     [39.10,-115.70],[39.30,-115.70]],
    'Ely Shoshone',
    NV.wsLight, NV.wsBand, L_groups.nvWesternShoshoneBands,
    nvPopup('Ely Shoshone Tribe',
      NV.wsLight,
      'Western Shoshone (Newe) · White Pine County · Steptoe Valley',
      'The <b>Ely Shoshone</b> are Western Shoshone people in the <b>Steptoe Valley</b> and surrounding ranges of White Pine County. Their territory is a land of wide valleys between mountain ranges — the quintessential Basin and Range landscape. Pine nut groves in the Egan, Schell Creek, and Snake Ranges provided the most important food source. The Ely Colony was established in 1931 when the federal government purchased 10 acres for Shoshone families who had been living on the edges of the mining town of Ely. The tribe hosts the annual <b>Ely Shoshone Fandango</b> each July, featuring dancing, drummers, singers, and traditional events. <b>Great Basin National Park</b> — home to 5,000-year-old bristlecone pines, Lehman Caves, and Wheeler Peak — lies within their ancestral territory.',
      '1868: White Pine mining boom brings settlers • 1931: Ely Colony established (10 acres) • Annual Ely Shoshone Fandango celebrates Newe traditions',
      'Steward 1938; Ely Shoshone Tribe; Inter-Tribal Council of Nevada'),
    9
  );

  // --- Duck Valley Shoshone-Paiute — NV/ID border ---
  addTerritory(
    [[42.10,-116.30],[42.05,-115.80],[41.80,-115.60],[41.55,-115.60],
     [41.40,-115.80],[41.40,-116.10],[41.55,-116.30],[41.75,-116.45],
     [41.95,-116.45]],
    'Duck Valley',
    NV.wsMain, NV.wsBand, L_groups.nvWesternShoshoneBands,
    nvPopup('Shoshone-Paiute Tribes of Duck Valley',
      NV.wsMain,
      'Western Shoshone & Northern Paiute · Duck Valley · NV-ID border',
      'The <b>Duck Valley Reservation</b>, straddling the Nevada-Idaho border, was the first and largest Western Shoshone reservation (est. 1877). The government intended to concentrate all Western Shoshone here, but most bands — especially the Te-Moak — refused to relocate from their ancestral territories. Northern Paiute from Oregon were then encouraged to join. Today it is a mixed <b>Shoshone-Paiute</b> community. The reservation covers 289,819 acres (453 sq mi) along the Owyhee River — one of the largest reservations in the western U.S. The Owyhee River provides irrigation for farming and ranching. Both Shoshone and Paiute languages and traditions are maintained. The annual <b>Duck Valley Festival</b> brings the community together each June.',
      '1877: Duck Valley Reservation established by executive order • 1886: Northern Paiute begin joining Western Shoshone • Te-Moak bands refuse relocation • 289,819 acres — one of the largest reservations in western U.S.',
      'Steward 1938; Crum 1994; Shoshone-Paiute Tribes of Duck Valley; BIA'),
    10
  );

  // --- Timbisha Shoshone — Death Valley (reaches into NV) ---
  addTerritory(
    [[37.20,-117.30],[37.15,-116.90],[36.90,-116.70],[36.60,-116.60],
     [36.30,-116.70],[36.15,-116.90],[36.10,-117.10],[36.20,-117.40],
     [36.40,-117.55],[36.65,-117.60],[36.90,-117.50],[37.05,-117.40]],
    'Timbisha Shoshone',
    NV.wsLight, NV.wsBand, L_groups.nvWesternShoshoneBands,
    nvPopup('Timbisha Shoshone Tribe',
      NV.wsLight,
      'Western Shoshone (Newe) · Death Valley · CA-NV border · Koso/Panamint',
      'The <b>Timbisha Shoshone</b> (also called Koso or Panamint Shoshone) have lived in <b>Death Valley</b> — the hottest, driest, lowest place in North America — for over 1,000 years. "Timbisha" means "rock paint" in their language, referring to the red ochre found in the valley. Despite the extreme environment, they thrived on a seasonal round: winter in the warm valley floor, summer in the cool Panamint Mountains gathering pine nuts. They harvested mesquite beans, hunted bighorn sheep, and managed resources across an elevation range from -282 feet (Badwater) to 11,049 feet (Telescope Peak). When Death Valley became a National Monument (1933), the Timbisha were nearly expelled from their homeland. The <b>Timbisha Homeland Act</b> (2000) finally granted them a 7,500-acre reservation within the park — making them the only tribe with a reservation inside a national park.',
      '1849: Forty-niners cross Death Valley, naming it • 1933: Death Valley National Monument — Timbisha threatened with removal • 1994: Upgraded to National Park • 2000: Timbisha Homeland Act — 7,500-acre reservation within park',
      'Steward 1938; Thomas 1983; Timbisha Shoshone Tribe; NPS Death Valley; Crum 1994'),
    10
  );

  // ============================================================
  //  SOUTHERN PAIUTE BANDS (Nuwuvi)
  //  ~1100 CE – present · Southern Numic speakers
  //  Based on Kelly & Fowler 1986, Kelly 1934, Euler 1966
  // ============================================================

  // --- Las Vegas Band (Tudinu — Desert People) ---
  addTerritory(
    [[36.60,-115.80],[36.55,-115.30],[36.30,-115.00],[36.05,-114.90],
     [35.85,-115.00],[35.80,-115.30],[35.90,-115.60],[36.05,-115.80],
     [36.25,-115.90],[36.45,-115.90]],
    'Tudinu (Las Vegas)',
    NV.spMain, NV.spBand, L_groups.nvSouthernPaiuteBands,
    nvPopup('Las Vegas Paiute Tribe (Tudinu — Desert People)',
      NV.spMain,
      'Southern Paiute (Nuwuvi) · Las Vegas Valley · Snow Mountain',
      'The <b>Tudinu</b> — "Desert People" — are the Southern Paiute band whose territory encompassed the <b>Las Vegas Valley</b>, Spring Mountains (including Mt. Charleston), and surrounding desert. "Las Vegas" is Spanish for "The Meadows," referring to the spring-fed oasis that the Tudinu had used for centuries. They practiced seasonal floodplain farming with irrigation for corn, squash, and beans — unusual among Great Basin peoples. Springs at the base of the Spring Mountains were sacred water sources. In 1911, rancher <b>Helen J. Stewart</b> sold 10 acres for $500 to be held in trust for the Paiutes — forming the original Las Vegas Colony in downtown Las Vegas. The tribe wasn\'t federally recognized until 1970. In 1983, 4,000 acres at <b>Snow Mountain</b> (between Mt. Charleston and the Sheep Range) were returned to the tribe. Today the Las Vegas Paiute operate the <b>Las Vegas Paiute Golf Resort</b> (three 18-hole courses, 4½ stars), the <b>NuWu Cannabis Marketplace</b>, and host the annual <b>Snow Mountain Powwow</b>.',
      '1829: Spanish Trail opens through territory — devastating slave raids • 1855: Mormon missionaries establish Las Vegas Mission • 1911: Helen Stewart sells 10 acres for Paiute colony • 1970: Tribe federally recognized • 1983: Snow Mountain lands returned • 2017: NuWu Cannabis Marketplace opens',
      'Kelly 1934; Kelly & Fowler 1986; Las Vegas Paiute Tribe; UNLV Nuwuvi History; NV Indian Commission'),
    10
  );

  // --- Moapa Band (Moapats) — Muddy River / Virgin River ---
  addTerritory(
    [[36.90,-115.00],[36.85,-114.50],[36.65,-114.30],[36.40,-114.20],
     [36.20,-114.30],[36.15,-114.60],[36.20,-114.90],[36.40,-115.10],
     [36.60,-115.15],[36.80,-115.10]],
    'Moapa (Moapats)',
    NV.spLight, NV.spBand, L_groups.nvSouthernPaiuteBands,
    nvPopup('Moapa Band of Paiutes (Moapats)',
      NV.spLight,
      'Southern Paiute (Nuwuvi) · Muddy River / Virgin River · Moapa Valley',
      'The <b>Moapa</b> (Moapats) occupied the confluence of the <b>Muddy River</b> (Moapa) and <b>Virgin River</b> in southeastern Nevada — one of the few areas with reliable year-round water in the southern Great Basin. They practiced <b>irrigation agriculture</b> before European contact, growing corn, squash, melons, gourds, sunflowers, beans, and wheat. This agricultural tradition connects them to the earlier <b>Ancestral Puebloan (Anasazi)</b> presence in the region — the "Lost City" (Pueblo Grande de Nevada) near Overton was occupied 300-1150 CE before being abandoned. Southern Paiute arrived ~1100 CE and may have absorbed remnant Puebloan populations. The Moapa Reservation was established in 1873 — originally intended to be the entire Moapa River watershed (39,000 sq mi), but was slashed to just 1,000 acres in 1875. Congress restored over 60,000 acres in 1980. Today the tribe operates the groundbreaking <b>Moapa Southern Paiute Solar Project</b> — 250 MW, the first large-scale solar project on tribal land in North America.',
      '~300-1150 CE: Ancestral Puebloan "Lost City" occupied • ~1100 CE: Southern Paiute arrive • 1776: Dominguez-Escalante encounters Paiute • 1873: Reservation established (39,000 sq mi promised) • 1875: Reduced to 1,000 acres • 1980: 60,000+ acres restored • 2017: 250 MW solar project completed',
      'Kelly 1934; Kelly & Fowler 1986; Moapa Band of Paiutes; Lost City Museum; Euler 1966'),
    10
  );

  // --- Pahrump Band — Pahrump Valley ---
  addTerritory(
    [[36.35,-116.30],[36.30,-115.90],[36.10,-115.80],[35.90,-115.85],
     [35.80,-116.00],[35.80,-116.25],[35.90,-116.40],[36.05,-116.45],
     [36.20,-116.40]],
    'Pahrump Band',
    NV.spMain, NV.spBand, L_groups.nvSouthernPaiuteBands,
    nvPopup('Pahrump Band of Paiutes',
      NV.spMain,
      'Southern Paiute (Nuwuvi) · Pahrump Valley · Nye County',
      'The <b>Pahrump Band</b> occupied <b>Pahrump Valley</b> west of Las Vegas, named from the Southern Paiute word <b>"Pah-Rimpi"</b> meaning "water rock" or "water place," referring to the natural springs that made the valley habitable. These springs — fed by an aquifer recharged from the Spring Mountains — supported a small but sustained community. The Pahrump people cultivated small garden plots and gathered extensively from the surrounding desert and mountains. Their territory extended into the Amargosa Desert and parts of the Spring Mountains. Unlike the Las Vegas and Moapa bands, the Pahrump Paiute do not have a large federal reservation, but maintain their cultural identity as a distinct Southern Paiute band.',
      'Traditional territory centered on Pah-Rimpi springs • ~1100 CE: Southern Paiute arrive in area • Contact period: Mormon and mining impacts • Pahrump Band maintains cultural identity',
      'Kelly 1934; Kelly & Fowler 1986; NV Indian Commission; Neon Museum Indigenous Peoples guide'),
    9
  );

  // --- Chemehuevi — southern tip of NV / Colorado River ---
  addTerritory(
    [[35.80,-115.10],[35.75,-114.70],[35.55,-114.55],[35.30,-114.55],
     [35.10,-114.65],[35.05,-114.85],[35.15,-115.05],[35.35,-115.15],
     [35.55,-115.15],[35.70,-115.15]],
    'Chemehuevi',
    NV.spLight, NV.spBand, L_groups.nvSouthernPaiuteBands,
    nvPopup('Chemehuevi (Southern Paiute)',
      NV.spLight,
      'Southern Paiute (Nuwuvi) · Colorado River corridor · southernmost Nevada',
      'The <b>Chemehuevi</b> are the westernmost band of the Southern Paiute, occupying territory along the <b>Colorado River</b> in the southernmost tip of Nevada, extending into California and Arizona. Their name may come from Mohave "Tcimiwavi" meaning "those who play with fish." They were semi-nomadic, ranging from the river to the mountains, and were expert runners — reportedly able to cover 100 miles in a day. The Chemehuevi had close (if sometimes tense) relations with the <b>Mohave</b> (Pipa Aha Macav), who lived along the Colorado River to the south. <b>Spirit Mountain</b> (Avi Kwa Ame), sacred to both peoples as a place of creation, dominates this landscape. In 2023, the surrounding 506,000 acres were designated <b>Avi Kwa Ame National Monument</b>.',
      '~1100 CE: Chemehuevi expand into Colorado River corridor • 1776: Spanish contact • 1829-1848: Old Spanish Trail devastates through slave raids • 2023: Avi Kwa Ame National Monument designated (506,000 acres)',
      'Kelly & Fowler 1986; Laird 1976; Avi Kwa Ame NM; Grapevine Canyon NRHP'),
    9
  );

  // ============================================================
  //  WASHOE BANDS (Washshiw)
  //  6,000–9,000+ years in place · Hokan language isolate
  //  Based on d'Azevedo 1986, Price 1980, Nevers 1976
  // ============================================================

  // --- Welmelti (Northern Washoe) — Honey Lake / Long Valley ---
  addTerritory(
    [[40.20,-120.30],[40.15,-119.80],[39.95,-119.65],[39.75,-119.70],
     [39.65,-119.85],[39.65,-120.10],[39.80,-120.30],[39.95,-120.40],
     [40.10,-120.40]],
    'Welmelti (Northern)',
    NV.waMain, NV.waBand, L_groups.nvWashoeBands,
    nvPopup('Welmelti — Northern Washoe',
      NV.waMain,
      'Washoe (Washshiw) · Northern band · Honey Lake / Long Valley',
      'The <b>Welmelti</b> ("northerners") were the northern division of the Washoe, ranging from <b>Honey Lake</b> and Long Valley in the north to the Truckee Meadows area. Their seasonal round took them to Lake Tahoe in summer for fishing and hunting, and east to the Pine Nut Range in fall for the pine nut harvest. The Welmelti had the most contact with Northern Paiute bands and some intermarriage occurred, though the two peoples spoke entirely different languages and had distinct cultural practices. The <b>Reno-Sparks Indian Colony</b> includes Washoe members alongside Northern Paiute and Shoshone.',
      'Ancient presence — possibly 6,000-9,000+ years • 1844: Frémont encounters Washoe • 1858: Honey Lake conflict with settlers • Reno-Sparks Indian Colony includes Welmelti descendants',
      'd\'Azevedo 1986 (HNAI); Price 1980; Nevers 1976; Washoe Tribe of NV & CA'),
    9
  );

  // --- Pau Wa Lu (Carson Valley Washoe) — heart of Washoe territory ---
  addTerritory(
    [[39.65,-120.10],[39.60,-119.60],[39.35,-119.50],[39.10,-119.55],
     [38.95,-119.65],[38.90,-119.85],[38.95,-120.10],[39.10,-120.30],
     [39.25,-120.40],[39.45,-120.30]],
    'Pau Wa Lu (Carson)',
    NV.waLight, NV.waBand, L_groups.nvWashoeBands,
    nvPopup('Pau Wa Lu — Carson Valley Washoe',
      NV.waLight,
      'Washoe (Washshiw) · Central band · Carson Valley / Eagle Valley / Lake Tahoe',
      'The <b>Pau Wa Lu</b> ("people of Carson Valley") occupied the heart of Washoe territory — <b>Carson Valley</b>, <b>Eagle Valley</b> (Carson City), <b>Washoe Valley</b>, and the eastern shores of <b>Da ow aga</b> (Lake Tahoe). "Tahoe" is an anglicization of the Washoe word <b>Da ow</b> meaning "the lake." The lake was the spiritual and physical center of Washoe life — summer fishing camps dotted its shores, and the spring spawning runs of <b>Lahontan cutthroat trout</b> up the Truckee River were a critical food event. <b>Cave Rock</b> (De ek wadapush) on the lake\'s east shore is the most sacred Washoe site — a power place where spiritual leaders sought visions. The Washoe are famous for their extraordinary <b>basket weaving</b> — <b>Dat So La Lee</b> (Louisa Keyser, 1829-1925) created masterworks now valued at over $1 million. The Washoe Tribe of Nevada and California was organized in 1934 and has offices in Gardnerville.',
      '~4000+ BCE: Washoe presence at Lake Tahoe • ~500 CE: Kings Beach Complex (early Washoe culture) • 1848-63: Gold/silver rush devastates territory • 1857: Potato War — last armed Washoe conflict • 1917: Small land purchases near Carson City • 1934: Washoe Tribe recognized under IRA • 2002: Lake Tahoe cultural lands granted',
      'd\'Azevedo 1986; Price 1980; Nevers 1976; Washoe Tribe; Palisades Tahoe; Tallac Historic Site'),
    10
  );

  // --- Hung a Lel Ti (Southern Washoe) — Topaz Lake / Antelope Valley ---
  addTerritory(
    [[38.95,-119.65],[38.90,-119.35],[38.70,-119.20],[38.50,-119.25],
     [38.35,-119.40],[38.30,-119.60],[38.40,-119.80],[38.55,-119.90],
     [38.70,-119.90],[38.85,-119.80]],
    'Hung a Lel Ti (Southern)',
    NV.waMain, NV.waBand, L_groups.nvWashoeBands,
    nvPopup('Hung a Lel Ti — Southern Washoe',
      NV.waMain,
      'Washoe (Washshiw) · Southern band · Topaz Lake / Antelope Valley',
      'The <b>Hung a Lel Ti</b> ("southerners") ranged from <b>Topaz Lake</b> and the upper West Walker River south through <b>Antelope Valley</b> to the Sonora Pass area. Their territory marked the southern boundary of the Washoe world, bordering Northern Paiute (Kucadikadi) and Miwok peoples to the south. Like all Washoe bands, they participated in the annual pine nut gathering in the Pine Nut Range — the most important social and spiritual event. The southern Washoe had more contact with trans-Sierra trade networks, exchanging goods with California peoples. Topaz Lake, one of the last reliable water bodies along the Walker River system, was a key fishing and gathering site.',
      'Ancient presence — Washoe linguistic isolation suggests 6,000+ year presence • Southern boundary of Washoe world • Contact with trans-Sierra trading networks',
      'd\'Azevedo 1986; Price 1980; Nevers 1976; Washoe Tribe of NV & CA'),
    9
  );

  // ============================================================
  //  FORT MOJAVE (Pipa Aha Macav) — southern tip of NV
  //  The fifth Nevada tribe
  // ============================================================
  addTerritory(
    [[35.20,-114.65],[35.15,-114.45],[35.00,-114.35],[34.85,-114.35],
     [34.75,-114.50],[34.80,-114.70],[34.95,-114.80],[35.10,-114.80]],
    'Pipa Aha Macav',
    NV.moMain, NV.moBand, L_groups.nvMojaveFortMojave,
    nvPopup('Fort Mojave Indian Tribe (Pipa Aha Macav)',
      NV.moMain,
      'Mojave · Colorado River · NV-AZ-CA tri-state · Yuman speakers',
      'The <b>Pipa Aha Macav</b> ("people by the river") — the Mojave — are the fifth Great Basin tribe in Nevada, though culturally they are a <b>Colorado River Yuman</b> people, entirely distinct from the Numic-speaking Paiute and Shoshone. They are powerful river farmers who grew corn, beans, squash, and melons on the Colorado River floodplain. Their territory in Nevada is small — the southernmost tip along the Colorado River near Laughlin — but their cultural influence is vast. <b>Avi Kwa Ame</b> (Spirit Mountain), visible from their territory, is central to their creation story: the creator spirit <b>Mastamho</b> led the Mojave from Spirit Mountain to the Colorado River. The Fort Mojave Reservation spans Nevada, Arizona, and California. The tribe is known for their distinctive <b>body tattooing</b>, elaborate dream narratives, and the <b>keruk</b> (mourning ceremony). Unlike most Great Basin peoples, the Mojave had a tribal chief structure and fought organized battles.',
      '~1200 CE: Mojave established on Colorado River • 1604: Spanish explorer Oñate encounters Mojave • 1858-59: Mojave War with U.S. Army • 1880: Fort Mojave Reservation established • 2023: Avi Kwa Ame National Monument designated',
      'Kroeber 1925; Stewart 1983 (HNAI); Fort Mojave Indian Tribe; Avi Kwa Ame NM'),
    9
  );

  // ============================================================
  //  MODERN RESERVATIONS & COLONIES — point markers
  //  21 federally recognized tribes, 27+ entities
  // ============================================================
  const reservations = [
    // Northern Paiute
    {name:'Pyramid Lake Reservation', lat:40.05, lng:-119.55, tribe:'Kuyuidokado (Northern Paiute)', est:'1859', acres:'475,000', color:NV.npMain,
     note:'Oldest reservation in Nevada. Encompasses all of Pyramid Lake. Home of the cui-ui and Lahontan cutthroat trout.'},
    {name:'Walker River Reservation', lat:38.80, lng:-118.85, tribe:'Agai Dicutta (Northern Paiute)', est:'1874', acres:'323,000', color:NV.npMain,
     note:'Home of Wovoka and the Ghost Dance. Pine Nut Festival every September.'},
    {name:'Fallon Paiute-Shoshone', lat:39.47, lng:-118.78, tribe:'Toidokado (Northern Paiute) & Shoshone', est:'1908', acres:'8,200', color:NV.npMain,
     note:'Near Spirit Cave, Hidden Cave, Grimes Point. 2018 DNA confirmed 10,000-year continuity.'},
    {name:'Lovelock Colony', lat:40.18, lng:-118.47, tribe:'Wadatoka (Northern Paiute)', est:'1907', acres:'20', color:NV.npLight,
     note:'Near Lovelock Cave type site. Named after George Lovelock, not the archaeological culture.'},
    {name:'Winnemucca Colony', lat:40.97, lng:-117.74, tribe:'Northern Paiute', est:'1917', acres:'340', color:NV.npLight,
     note:'Named after Chief Winnemucca. Sarah Winnemucca\'s ancestral territory.'},
    {name:'Summit Lake Reservation', lat:41.45, lng:-118.95, tribe:'Northern Paiute', est:'1913', acres:'10,800', color:NV.npMain,
     note:'One of most remote reservations in U.S. Critical Lahontan cutthroat trout habitat.'},
    {name:'Reno-Sparks Indian Colony', lat:39.55, lng:-119.85, tribe:'Paiute, Shoshone & Washoe', est:'1917', acres:'1,920', color:NV.npLight,
     note:'Multi-tribal urban colony. Hosts annual Numaga Powwow (Labor Day). Named for Chief Numaga.'},
    {name:'Yerington Colony & Reserve', lat:38.98, lng:-119.16, tribe:'Northern Paiute', est:'1917/1936', acres:'1,632', color:NV.npLight,
     note:'Mason Valley. Campbell Ranch (1936) serves as main community.'},
    // Western Shoshone
    {name:'Duck Valley Reservation', lat:41.75, lng:-115.95, tribe:'Shoshone-Paiute', est:'1877', acres:'289,819', color:NV.wsMain,
     note:'Spans NV-ID border. First and largest Western Shoshone reservation. 453 sq mi along Owyhee River.'},
    {name:'Te-Moak (Battle Mountain)', lat:40.66, lng:-116.97, tribe:'Western Shoshone (Tonomudza)', est:'1917', acres:'683', color:NV.wsMain,
     note:'Battle Mountain Band. Refused relocation to Duck Valley.'},
    {name:'Te-Moak (Elko Colony)', lat:40.85, lng:-115.77, tribe:'Western Shoshone', est:'1918', acres:'193', color:NV.wsMain,
     note:'Hosts annual Elko Te-Moak Powwow in October — one of Nevada\'s largest.'},
    {name:'Te-Moak (South Fork)', lat:40.45, lng:-115.95, tribe:'Western Shoshone', est:'1941', acres:'13,050', color:NV.wsMain,
     note:'South Fork Band. Lee, Nevada. Largest Te-Moak land area.'},
    {name:'Te-Moak (Wells Colony)', lat:41.12, lng:-114.98, tribe:'Western Shoshone (Kuiyudika)', est:'1980', acres:'80', color:NV.wsLight,
     note:'Wells Band. Kuiyudika — "desert plant eaters." Clover Valley rendezvous site.'},
    {name:'Duckwater Reservation', lat:38.85, lng:-115.70, tribe:'Western Shoshone', est:'1940', acres:'3,815', color:NV.wsMain,
     note:'Railroad Valley. 2010 Recovery Champion Award for springfish restoration.'},
    {name:'Yomba Reservation', lat:38.92, lng:-117.15, tribe:'Western Shoshone', est:'1937', acres:'4,718', color:NV.wsLight,
     note:'Reese River Valley. Central Nevada\'s most isolated reservation.'},
    {name:'Ely Colony', lat:39.25, lng:-114.87, tribe:'Western Shoshone', est:'1931', acres:'100', color:NV.wsLight,
     note:'White Pine County. Annual Ely Shoshone Fandango each July.'},
    // Southern Paiute
    {name:'Las Vegas Paiute Colony', lat:36.19, lng:-115.18, tribe:'Tudinu (Southern Paiute)', est:'1911/1970', acres:'3,850', color:NV.spMain,
     note:'Original 10 acres bought by Helen Stewart for $500. Snow Mountain (4,000 acres) returned 1983.'},
    {name:'Moapa River Reservation', lat:36.72, lng:-114.60, tribe:'Moapa Band (Southern Paiute)', est:'1873', acres:'71,954', color:NV.spMain,
     note:'First large-scale solar project on tribal land (250 MW). Originally promised 39,000 sq mi.'},
    // Washoe
    {name:'Washoe Colony (Dresslerville)', lat:38.90, lng:-119.73, tribe:'Washoe (Pau Wa Lu)', est:'1917', acres:'795', color:NV.waMain,
     note:'Gardnerville area. Washoe Tribe headquarters. Named for Bill Dressler who sold land.'},
    {name:'Washoe Colony (Stewart)', lat:39.15, lng:-119.72, tribe:'Washoe', est:'1917', acres:'63', color:NV.waLight,
     note:'Near Carson City. Stewart Indian School (1890-1980) — boarding school site, now museum.'},
    {name:'Washoe Colony (Woodfords)', lat:38.77, lng:-119.83, tribe:'Washoe (Hung a Lel Ti)', est:'1917', acres:'80', color:NV.waLight,
     note:'Alpine County, CA. Southernmost Washoe colony.'},
    // Fort Mojave
    {name:'Fort Mojave Reservation', lat:35.05, lng:-114.60, tribe:'Pipa Aha Macav (Mojave)', est:'1880', acres:'32,000', color:NV.moMain,
     note:'Spans NV-AZ-CA. Colorado River Yuman people. Creation site: Avi Kwa Ame.'}
  ];

  reservations.forEach(r => {
    const icon = L.divIcon({
      className: '',
      html: `<div style="width:8px;height:8px;border-radius:50%;background:${NV.reservation};border:1.5px solid ${r.color};cursor:pointer" title="${r.name}"></div>`,
      iconSize: [8,8], iconAnchor: [4,4]
    });
    L.marker([r.lat, r.lng], {icon:icon}).addTo(L_groups.nvReservations)
      .bindPopup(`<div style="max-width:360px">
        <h4 style="color:${NV.reservation};margin:0 0 2px">📍 ${r.name}</h4>
        <div style="font-size:10px;color:#aaa;margin-bottom:4px">${r.tribe} · Est. ${r.est} · ${r.acres} acres</div>
        <div style="font-size:12px;color:#ccc;line-height:1.5">${r.note}</div>
        <div style="margin-top:6px;font-size:10px;color:#888">Sources: NV Indian Commission; BIA; tribal websites</div>
      </div>`, {maxWidth:380});
  });

  // ============================================================
  //  SIDEBAR REGISTRATION
  // ============================================================
  if(window.registerLayer) {
    registerLayer('nvNorthernPaiuteBands', 'Northern Paiute Bands (Numu)', 'greatbasin');
    registerLayer('nvWesternShoshoneBands', 'Western Shoshone Bands (Newe)', 'greatbasin');
    registerLayer('nvSouthernPaiuteBands', 'Southern Paiute Bands (Nuwuvi)', 'greatbasin');
    registerLayer('nvWashoeBands', 'Washoe Bands (Washshiw)', 'greatbasin');
    registerLayer('nvMojaveFortMojave', 'Fort Mojave (Pipa Aha Macav)', 'greatbasin');
    registerLayer('nvReservations', 'NV Modern Reservations & Colonies', 'greatbasin');
  }

  console.log('✅ 62-nevada-tribal-territories.js loaded — 5 tribal nations, 17 band territories, 22 modern reservations');
})();
