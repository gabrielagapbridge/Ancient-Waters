// ============================================================
// 63 — Nevada Waterways
// All major river systems, springs, sinks, dams & diversions
// The lifeblood of Great Basin peoples for 15,000+ years
// Sources: USGS; NV Div. Water Resources; Humboldt River
//   Chronology; Bureau of Reclamation; tribal sources
// ============================================================

(function(){
  'use strict';

  // ============================================================
  // COLORS
  // ============================================================
  const W = {
    river:     '#29B6F6',  // living rivers
    riverDark: '#0288D1',  // major rivers
    trib:      '#4FC3F7',  // tributaries
    spring:    '#00E5FF',  // springs
    sink:      '#1565C0',  // terminal sinks
    dam:       '#EF5350',  // dams & diversions
    trail:     '#A1887F',  // emigrant trails
    dried:     '#546E7A',  // dried/diverted reaches
    ancient:   '#7986CB',  // Pleistocene connections
  };

  // ============================================================
  // LAYER GROUPS
  // ============================================================
  if(!window.L_groups) window.L_groups = {};

  L_groups.nvRivers       = L.layerGroup().addTo(map);
  L_groups.nvTributaries  = L.layerGroup().addTo(map);
  L_groups.nvSprings      = L.layerGroup().addTo(map);
  L_groups.nvSinks        = L.layerGroup().addTo(map);
  L_groups.nvDams         = L.layerGroup().addTo(map);

  // ============================================================
  // POPUP HELPER
  // ============================================================
  function wp(title, color, sub, desc, src) {
    return `<div style="max-width:420px">
      <h4 style="color:${color};margin:0 0 2px">${title}</h4>
      <div style="font-size:10px;color:#aaa;margin-bottom:6px">${sub}</div>
      <div style="font-size:12px;color:#ccc;line-height:1.5">${desc}</div>
      <div style="margin-top:6px;font-size:10px;color:#888">Sources: ${src}</div></div>`;
  }

  // ============================================================
  //  🏔️ HUMBOLDT RIVER — Nevada's longest river
  //  ~330 mi · Wells → Humboldt Sink · entirely within NV
  //  The backbone of the California Trail
  // ============================================================

  // Main stem: Wells → Elko → Carlin → Battle Mountain → Winnemucca → Lovelock → Humboldt Sink
  L.polyline([
    [41.09,-115.00],[40.96,-115.18],[40.89,-115.35],[40.84,-115.57],
    [40.83,-115.76],[40.75,-115.90],[40.68,-116.05],[40.63,-116.20],
    [40.60,-116.45],[40.62,-116.70],[40.63,-116.87],[40.65,-117.00],
    [40.72,-117.10],[40.80,-117.30],[40.85,-117.45],[40.92,-117.55],
    [40.97,-117.63],[40.97,-117.73],[40.90,-117.83],[40.83,-117.93],
    [40.78,-118.02],[40.68,-118.10],[40.55,-118.18],[40.45,-118.30],
    [40.38,-118.42],[40.25,-118.52],[40.15,-118.60],[40.05,-118.70],
    [39.95,-118.72],[39.88,-118.78]
  ], {color:W.riverDark, weight:3.5, opacity:0.8}).addTo(L_groups.nvRivers)
  .bindPopup(wp('🏔️ Humboldt River', W.riverDark,
    '~330 mi · Longest river entirely within Nevada · Wells to Humboldt Sink',
    'The <b>Humboldt River</b> is the <b>only major river system wholly contained within Nevada</b> and the backbone of the state\'s geography. Rising from springs near <b>Wells</b> at the foot of the East Humboldt Range, it flows ~330 miles west through Elko, Carlin, Battle Mountain, Winnemucca, and Lovelock before vanishing into the <b>Humboldt Sink</b> — a classic Great Basin terminal lake with no outlet.<br><br>For <b>Western Shoshone</b> and <b>Northern Paiute</b> peoples, the Humboldt was life itself — fish, waterfowl, tule, willow, and the riparian corridor supporting deer and antelope. Bands were named for the foods they gathered along its course. For emigrants on the <b>California Trail</b> (1840s-1860s), the Humboldt was the essential — if hated — highway across the Great Basin. Mark Twain called it <i>"the most villainous river"</i> in America. The final stretch from Lovelock to the Sink, followed by the <b>Forty Mile Desert</b> to the Carson River, was the deadliest section of the entire California Trail.<br><br>The Humboldt River Basin covers <b>16,840 square miles</b> — the largest sub-basin in the entire Great Basin. Today I-80 follows the same corridor.',
    'USGS; Humboldt River Chronology (NV Water Resources); Cline 1963; Britannica'));

  // --- South Fork Humboldt ---
  L.polyline([
    [40.45,-115.55],[40.50,-115.65],[40.55,-115.78],[40.62,-115.88],
    [40.68,-116.05]
  ], {color:W.trib, weight:2, opacity:0.6, dashArray:'6,4'}).addTo(L_groups.nvTributaries)
  .bindPopup(wp('South Fork Humboldt River', W.trib,
    '~70 mi · Ruby Mountains headwaters · joins Humboldt below Elko',
    'Rises on the western slopes of the <b>Ruby Mountains</b> — Nevada\'s "Alps" — and flows northwest to join the Humboldt ~7 miles below Elko. South Fork Reservoir (1988) impounds part of the river. The <b>South Fork Band of Te-Moak Shoshone</b> takes its name from this waterway. The canyon section inspired John Bidwell (1841) to write of camping where he could <i>"see nothing but the sky."</i>',
    'USGS; NV Dept. Wildlife; Humboldt River Chronology'));

  // --- North Fork Humboldt ---
  L.polyline([
    [41.45,-116.00],[41.30,-115.90],[41.15,-115.80],[41.00,-115.70],
    [40.89,-115.60],[40.84,-115.57]
  ], {color:W.trib, weight:2, opacity:0.6, dashArray:'6,4'}).addTo(L_groups.nvTributaries)
  .bindPopup(wp('North Fork Humboldt River', W.trib,
    '~70 mi · Independence Mountains · joins Humboldt above Elko',
    'Rises on the northern slopes of <b>McAfee Peak</b> in the Independence Mountains, flowing south ~70 miles through remote north-central Elko County. Often reduced to a trickle by the time it reaches the main Humboldt. The North Fork watershed is extremely remote — home to mining activity in the 1870s, then cattle and sheep ranching. Lahontan cutthroat trout survive in upper reaches.',
    'USGS; Wikipedia; Humboldt River Chronology'));

  // --- Reese River ---
  L.polyline([
    [39.00,-117.40],[39.15,-117.30],[39.30,-117.20],[39.50,-117.10],
    [39.70,-117.05],[39.90,-117.00],[40.10,-116.98],[40.30,-116.95],
    [40.50,-116.92],[40.63,-116.87]
  ], {color:W.trib, weight:2, opacity:0.6, dashArray:'6,4'}).addTo(L_groups.nvTributaries)
  .bindPopup(wp('Reese River', W.trib,
    '~175 mi · Arc Dome → Battle Mountain · "shortest river" legend',
    'The <b>Reese River</b> flows ~175 miles from <b>Arc Dome</b> (11,773 ft, highest peak in the Toiyabe Range) northward through the Reese River Valley to join the Humboldt near Battle Mountain. For most of its length it\'s intermittent — dry for months at a time — earning the local joke that it\'s "the shortest river in the world" (visible only at road crossings). But this understates its importance: the <b>Yomba Shoshone</b> lived along the Reese River for centuries. The mining town of <b>Austin</b> sits along its course. The river corridor connects the central Nevada mountain ranges — Toiyabe, Shoshone, and Battle Mountain — and was a major north-south travel route for both indigenous peoples and settlers.',
    'USGS; Yomba Shoshone Tribe; NV Water Resources'));

  // --- Little Humboldt River ---
  L.polyline([
    [41.55,-117.25],[41.40,-117.30],[41.25,-117.40],[41.15,-117.50],
    [41.05,-117.60],[40.98,-117.68],[40.92,-117.72]
  ], {color:W.trib, weight:1.5, opacity:0.5, dashArray:'6,4'}).addTo(L_groups.nvTributaries)
  .bindPopup(wp('Little Humboldt River', W.trib,
    'Northern tributary · joins Humboldt above Winnemucca',
    'Flows southward from the mountains of northern Humboldt County to join the main Humboldt ~5 miles above Winnemucca. <b>Peter Skene Ogden</b> — the first European to see the Humboldt — came south along the Little Humboldt in 1828, encountering the main river at this confluence. He named it the "Unknown River."',
    'USGS; Humboldt River Chronology; Ogden journals'));

  // ============================================================
  //  🏔️ TRUCKEE RIVER — Sierra Nevada to Pyramid Lake
  //  ~121 mi · Lake Tahoe → Pyramid Lake
  // ============================================================
  L.polyline([
    [39.17,-120.14],[39.19,-120.10],[39.21,-120.05],[39.24,-120.00],
    [39.28,-119.95],[39.33,-119.90],[39.37,-119.85],[39.42,-119.82],
    [39.48,-119.80],[39.52,-119.78],[39.54,-119.74],[39.53,-119.68],
    [39.52,-119.60],[39.55,-119.50],[39.60,-119.45],[39.65,-119.42],
    [39.72,-119.42],[39.78,-119.45],[39.85,-119.48],[39.90,-119.52],
    [39.95,-119.54],[40.00,-119.55],[40.05,-119.55]
  ], {color:W.riverDark, weight:3, opacity:0.8}).addTo(L_groups.nvRivers)
  .bindPopup(wp('🏔️ Truckee River', W.riverDark,
    '~121 mi · Lake Tahoe → Pyramid Lake · Washoe & Northern Paiute lifeline',
    'The <b>Truckee River</b> is the sole outlet of <b>Lake Tahoe</b> (Da ow aga), flowing east through the Sierra Nevada, through the Truckee Meadows (Reno-Sparks), and north into <b>Pyramid Lake</b> — a journey of ~121 miles. For the <b>Washoe</b>, the upper Truckee and Lake Tahoe were the center of their world. For the <b>Kuyuidokado</b> (Pyramid Lake Paiute), the lower Truckee was the highway for <b>cui-ui</b> and <b>Lahontan cutthroat trout</b> spawning runs — the most important food events of the year.<br><br>The Truckee is named for Chief <b>Truckee</b> (Tru-ki-zo), who guided Frémont\'s party across the Forty Mile Desert to the river in 1844. During the Pleistocene, the Truckee was a far mightier river, feeding Lake Lahontan — the vast inland sea covering most of northwestern Nevada. Today the river is the most contested waterway in Nevada: the <b>1903 Newlands Reclamation Act</b> and <b>Derby Dam</b> (1905) diverted water to the Carson Sink for irrigation, devastating Pyramid Lake\'s fishery and reducing the lake by 87 feet.',
    'USGS; Pyramid Lake Paiute Tribe; NV Water Resources; Townley 1998'));

  // ============================================================
  //  🏔️ CARSON RIVER — Sierra Nevada to Carson Sink
  //  ~184 mi total (East + West forks) · Washoe & Toidokado
  // ============================================================
  // West Fork
  L.polyline([
    [38.70,-119.85],[38.78,-119.78],[38.85,-119.72],[38.90,-119.65],
    [38.95,-119.60],[39.00,-119.55],[39.05,-119.50],[39.10,-119.48],
    [39.15,-119.50]
  ], {color:W.river, weight:2.5, opacity:0.7}).addTo(L_groups.nvRivers)
  .bindPopup(wp('Carson River — West Fork', W.river,
    'Sierra headwaters → joins East Fork near Genoa',
    'Rises in Alpine County, CA on the Sierra Nevada crest and flows northeast into Carson Valley — the first settled area of Nevada (Genoa, 1851). The West Fork meets the East Fork near Genoa.',
    'USGS; NV Water Resources'));

  // East Fork
  L.polyline([
    [38.55,-119.45],[38.65,-119.50],[38.75,-119.55],[38.85,-119.58],
    [38.95,-119.57],[39.05,-119.52],[39.15,-119.50]
  ], {color:W.river, weight:2.5, opacity:0.7}).addTo(L_groups.nvRivers)
  .bindPopup(wp('Carson River — East Fork', W.river,
    'Sweetwater Mountains → joins West Fork near Genoa',
    'Rises near the Sweetwater Mountains on the CA-NV border and flows north through Mason and Smith Valleys — heart of <b>Washoe</b> and <b>Northern Paiute</b> territory. Rich riparian habitat supported dense populations.',
    'USGS; NV Water Resources'));

  // Main stem: merged → Carson Sink
  L.polyline([
    [39.15,-119.50],[39.20,-119.42],[39.25,-119.35],[39.30,-119.25],
    [39.35,-119.15],[39.38,-119.05],[39.40,-118.95],[39.42,-118.85],
    [39.45,-118.75],[39.50,-118.65],[39.52,-118.55],[39.55,-118.45],
    [39.58,-118.35],[39.60,-118.25]
  ], {color:W.riverDark, weight:3, opacity:0.8}).addTo(L_groups.nvRivers)
  .bindPopup(wp('🏔️ Carson River — Main Stem', W.riverDark,
    '~184 mi total · Sierra Nevada → Carson Sink · Washoe / Toidokado lifeline',
    'After the East and West Forks merge near Genoa, the <b>Carson River</b> flows east through Carson City and Dayton, then northeast through the Lahontan Reservoir (created by Lahontan Dam, 1915) and into the <b>Carson Sink</b> — where it terminates in the Stillwater Marsh. This was the heart of <b>Toidokado</b> (Northern Paiute) territory. The Carson Sink/Stillwater wetlands were among the richest ecosystems in the Great Basin, supporting ducks, fish, tule, and cattail.<br><br>The Carson River played a dual role in Nevada history. For indigenous peoples, it was a lifeline for millennia — the Stillwater Marsh supported the <b>Lovelock Culture</b> (2000 BCE–1000 CE) and then the Northern Paiute. For emigrants, the lower Carson was the desperately sought <b>end of the Forty Mile Desert</b> — the deadliest stretch of the California Trail. The <b>Newlands Reclamation Project</b> (1903) diverted Truckee River water into the Carson system via Derby Dam, transforming the desert near Fallon into farmland but devastating Pyramid Lake.',
    'USGS; Bureau of Reclamation; Fallon Paiute-Shoshone; Townley 1998'));

  // ============================================================
  //  🏔️ WALKER RIVER — Sierra Nevada to Walker Lake
  //  ~160 mi · East + West Forks · Agai Dicutta
  // ============================================================
  // West Walker
  L.polyline([
    [38.35,-119.55],[38.40,-119.45],[38.48,-119.38],[38.55,-119.32],
    [38.62,-119.28],[38.68,-119.22],[38.72,-119.15]
  ], {color:W.river, weight:2.5, opacity:0.7}).addTo(L_groups.nvRivers)
  .bindPopup(wp('Walker River — West Fork', W.river,
    'Sierra Nevada → joins East Fork near Yerington',
    'Rises in the Sierra Nevada near Sonora Pass and flows northeast into Nevada through <b>Antelope Valley</b> — southern Washoe territory — and Mason Valley. Rich cottonwood riparian corridor.',
    'USGS; NV Water Resources'));

  // East Walker
  L.polyline([
    [38.25,-119.20],[38.35,-119.18],[38.45,-119.12],[38.55,-119.05],
    [38.65,-119.00],[38.72,-119.00],[38.72,-119.15]
  ], {color:W.river, weight:2.5, opacity:0.7}).addTo(L_groups.nvRivers)
  .bindPopup(wp('Walker River — East Fork', W.river,
    'Bridgeport Valley → joins West Fork · Kucadikadi territory',
    'Rises in the Sweetwater Mountains and Bridgeport Valley — <b>Kucadikadi</b> (Northern Paiute) territory. Flows through Smith Valley past important petroglyph sites documented by Heizer & Baumhoff.',
    'USGS; Heizer & Baumhoff 1962'));

  // Main stem to Walker Lake
  L.polyline([
    [38.72,-119.15],[38.75,-119.08],[38.78,-119.00],[38.80,-118.92],
    [38.78,-118.82],[38.75,-118.72],[38.70,-118.70]
  ], {color:W.riverDark, weight:3, opacity:0.8}).addTo(L_groups.nvRivers)
  .bindPopup(wp('🏔️ Walker River → Walker Lake', W.riverDark,
    '~160 mi total · Sierra Nevada → Walker Lake · Agai Dicutta heartland',
    'After the forks merge near Yerington, the Walker River flows southeast to <b>Walker Lake</b> — a terminal lake that has been shrinking dramatically since upstream diversions began. The <b>Agai Dicutta</b> ("trout eaters") Paiute centered their lives on Walker Lake and the river\'s Lahontan cutthroat trout runs. <b>Wovoka</b>, founder of the Ghost Dance, was born near Walker Lake (~1856). The Walker River Paiute Reservation (est. 1874) encompasses much of the lower river.<br><br>Walker Lake has dropped over <b>150 feet</b> since 1882 due to upstream irrigation diversions. The total dissolved solids have increased to levels that threaten fish survival. The lake, once teeming with Lahontan cutthroat trout, lost its fishery. Efforts to restore minimum flows continue.',
    'USGS; Walker River Paiute Tribe; NV Water Resources; Hittman 1990'));

  // ============================================================
  //  🏔️ MUDDY RIVER & VIRGIN RIVER — Southern Nevada
  //  Moapa Band territory · Ancestral Puebloan corridor
  // ============================================================
  // Muddy River (Moapa)
  L.polyline([
    [36.75,-114.72],[36.70,-114.68],[36.65,-114.63],[36.60,-114.60],
    [36.55,-114.58],[36.48,-114.55],[36.42,-114.52],[36.38,-114.48]
  ], {color:W.river, weight:2.5, opacity:0.7}).addTo(L_groups.nvRivers)
  .bindPopup(wp('Muddy River (Moapa River)', W.river,
    '~40 mi · warm springs origin · Moapa Band heartland',
    'The <b>Muddy River</b> — called <b>Moapa</b> by the Southern Paiute — rises from the <b>Muddy Springs</b> (warm springs at ~90°F) near the town of Moapa and flows south to join the former Virgin River/Colorado River confluence (now under Lake Mead). This warm-water, spring-fed river created an oasis in the Mojave Desert. The <b>Moapa Band of Paiutes</b> farmed its floodplain for centuries. Before them, <b>Ancestral Puebloans</b> built the "Lost City" (Pueblo Grande de Nevada) near Overton (300-1150 CE). The Muddy Springs support the critically endangered <b>Moapa dace</b> — a tiny fish found nowhere else on Earth, surviving since the Pleistocene in these thermal waters.',
    'USGS; Moapa Band of Paiutes; Lost City Museum; USFWS'));

  // Virgin River (brief NV reach)
  L.polyline([
    [36.85,-114.10],[36.78,-114.15],[36.70,-114.20],[36.62,-114.25],
    [36.52,-114.30],[36.42,-114.38],[36.38,-114.48]
  ], {color:W.river, weight:2, opacity:0.6}).addTo(L_groups.nvRivers)
  .bindPopup(wp('Virgin River (Nevada reach)', W.river,
    'Zion NP origin → Lake Mead · Southern Paiute corridor',
    'The <b>Virgin River</b> rises near Zion National Park in Utah and flows southwest through the Arizona Strip before briefly entering Nevada near Mesquite. It joins the Muddy River before entering what is now <b>Lake Mead</b>. The Virgin River corridor was a major Southern Paiute travel and farming route connecting Utah communities to the Colorado River. The river\'s name comes from the Spanish explorer Jedediah Smith\'s "Virgin" — possibly from Thomas Virgin, a member of his party.',
    'USGS; NPS; Southern Paiute ethnographies'));

  // ============================================================
  //  🏔️ OWYHEE RIVER — Duck Valley / NV-ID border
  // ============================================================
  L.polyline([
    [41.95,-116.25],[41.85,-116.15],[41.75,-116.05],[41.65,-115.95],
    [41.55,-115.90],[41.45,-115.85]
  ], {color:W.river, weight:2, opacity:0.6}).addTo(L_groups.nvRivers)
  .bindPopup(wp('Owyhee River (Nevada headwaters)', W.river,
    'Duck Valley → Oregon → Columbia River · Shoshone-Paiute territory',
    'The <b>Owyhee River</b> rises in the mountains of northeastern Nevada and flows through the <b>Duck Valley Reservation</b> before crossing into Idaho and Oregon, eventually reaching the Snake River and Columbia. The name comes from Hawaiians ("Owyhee" = Hawaii) who were killed along its banks during a fur-trapping expedition in 1819. The Owyhee provides irrigation for the Duck Valley community and supports one of the most important riparian corridors in the northern Great Basin.',
    'USGS; Shoshone-Paiute Tribes of Duck Valley'));

  // ============================================================
  //  🏔️ QUINN RIVER — northwest Nevada
  // ============================================================
  L.polyline([
    [41.80,-117.70],[41.65,-117.65],[41.50,-117.60],[41.35,-117.55],
    [41.20,-117.55],[41.05,-117.60],[40.95,-117.65],[40.85,-117.70],
    [40.78,-117.78]
  ], {color:W.river, weight:2, opacity:0.6}).addTo(L_groups.nvRivers)
  .bindPopup(wp('Quinn River', W.river,
    '~100 mi · OR border → Black Rock Desert · terminates in playa',
    'The <b>Quinn River</b> rises near the Oregon border and flows south ~100 miles to disappear into the <b>Black Rock Desert</b> playa — one of the flattest surfaces on Earth (home of Burning Man and land speed records). During the Pleistocene, the Quinn fed into <b>Lake Lahontan</b>. The river corridor was important for Northern Paiute seasonal movements and for the <b>Fort McDermitt</b> Paiute-Shoshone community. The Quinn is intermittent — flowing in spring and drying to disconnected pools by late summer.',
    'USGS; NV Water Resources; Fort McDermitt Paiute-Shoshone'));

  // ============================================================
  //  💧 SPRINGS — life-giving oases
  // ============================================================
  const springs = [
    {name:'Muddy Springs (Moapa)', lat:36.72, lng:-114.72, temp:'90°F',
     desc:'Warm springs feeding the Muddy River. <b>Moapa dace</b> — a Pleistocene relict fish — survives only here. Sacred to the Moapa Band. Moapa Reservation was established around these springs.'},
    {name:'Ash Springs', lat:37.46, lng:-115.19, temp:'95°F',
     desc:'One of the largest warm springs in southern Nevada. Volume: 1,100 gallons/minute. Located along the White River corridor in <b>Pahranagat Valley</b> — a desert oasis used by Southern Paiute and earlier peoples for millennia. Nearby Pahranagat NWR preserves a rare desert wetland.'},
    {name:'Big Spring (Duckwater)', lat:38.84, lng:-115.69, temp:'85°F',
     desc:'Warm spring in Railroad Valley that gives <b>Duckwater</b> its name — wild ducks flocked to these springs. The <b>Duckwater Shoshone</b> reservation was established here. Nearby thermal springs support the endangered <b>Railroad Valley springfish</b>.'},
    {name:'Hot Creek Springs', lat:38.33, lng:-116.28, temp:'180°F',
     desc:'One of the largest hot spring systems in Nevada, discharging 5,800 gallons/minute into Hot Creek. Located in the remote <b>Hot Creek Valley</b> in Nye County. Springs like this were critical waystations for Western Shoshone seasonal rounds.'},
    {name:'Ruby Valley Springs', lat:40.50, lng:-115.40, temp:'varies',
     desc:'Springs along the base of the <b>Ruby Mountains</b> that create the lush Ruby Valley. The <b>Treaty of Ruby Valley</b> (1863) was signed here — the foundational document of Western Shoshone land rights. Ruby Marshes (now a NWR) support major waterfowl populations.'},
    {name:'Tule Springs (Las Vegas)', lat:36.32, lng:-115.27, temp:'ambient',
     desc:'Ancient springs that created a lush marshland in the Las Vegas Valley during the Pleistocene. Mammoth, horse, camel, and giant ground sloth fossils found here. Now <b>Tule Springs Fossil Beds National Monument</b> (2014). Human presence dates to ~10,000 years ago. "Las Vegas" ("The Meadows") was named for these springs.'},
    {name:'Rogers Spring (Lake Mead)', lat:36.42, lng:-114.52, temp:'80°F',
     desc:'Warm spring flowing into Lake Mead near Overton. Created a desert oasis that attracted Ancestral Puebloans and later Southern Paiute peoples. One of the warmest springs in the Lake Mead NRA. The endangered <b>Moapa White River springfish</b> was once found here.'},
    {name:'Spencer Hot Springs', lat:39.33, lng:-116.85, temp:'160°F',
     desc:'Natural hot springs in Big Smoky Valley on the edge of Western Shoshone territory. Free soaking pools along Highway 376. These thermal waters were used by indigenous peoples for centuries — hot springs throughout the Great Basin were considered places of power (pooha).'},
    {name:'Kyle Springs (Mt. Charleston)', lat:36.28, lng:-115.68, temp:'cool',
     desc:'Springs on the flanks of <b>Mt. Charleston</b> (11,916 ft) in the Spring Mountains — highest point in the Las Vegas Range. These springs sustained <b>Tudinu</b> (Las Vegas Paiute) during summer when they retreated from the desert heat to the cool mountains. Endemic species: <b>Mt. Charleston blue butterfly</b>.'},
    {name:'Soldier Meadows Hot Springs', lat:41.38, lng:-119.18, temp:'100-120°F',
     desc:'Remote hot springs in the <b>Black Rock Desert</b> area. The <b>desert dace</b> — a Pleistocene relict fish — survives only in the thermal springs here. Soldier Meadows was an 1860s military station. The springs create an oasis supporting unexpected lush vegetation in one of the most barren landscapes in North America.'}
  ];

  springs.forEach(s => {
    L.circleMarker([s.lat, s.lng], {
      radius: 5, color: W.spring, fillColor: W.spring,
      fillOpacity: 0.8, weight: 1.5
    }).addTo(L_groups.nvSprings)
    .bindPopup(wp(`💧 ${s.name}`, W.spring,
      `Spring · ${s.temp}`,
      s.desc,
      'USGS; NV Water Resources; BLM; tribal sources'));
  });

  // ============================================================
  //  🌊 TERMINAL SINKS — where rivers go to die
  // ============================================================
  const sinks = [
    {name:'Humboldt Sink', lat:39.88, lng:-118.65, size:'varies',
     desc:'The terminal basin of the <b>Humboldt River</b> — Nevada\'s longest river dies here in a broad, marshy depression. During wet years it forms a shallow lake; in dry years it\'s a dusty playa. Connected to the <b>Carson Sink</b> to the south during extreme floods. The <b>Forty Mile Desert</b> between the Humboldt Sink and the Carson River was the deadliest stretch of the California Trail — scattered with the bones of oxen and abandoned wagons. During the Pleistocene, this was all underwater as part of <b>Lake Lahontan</b>.'},
    {name:'Carson Sink / Stillwater Marsh', lat:39.55, lng:-118.35, size:'~34,000 acres',
     desc:'Where the Carson River terminates in one of the most important wetland ecosystems in the Great Basin. <b>Stillwater Marsh</b> — now a National Wildlife Refuge — supported the <b>Toidokado</b> (Northern Paiute) and before them the <b>Lovelock Culture</b> for thousands of years. Cattail, tule, ducks, fish — the richest resources in the western Great Basin. The Stillwater Mummy and Spirit Cave mummy (10,600 years old) were found nearby. Today the marsh depends on agricultural return flows and Newlands Project water.'},
    {name:'Black Rock Desert', lat:40.85, lng:-119.00, size:'~1,000 sq mi',
     desc:'A vast, flat playa — the bed of the northern arm of <b>Lake Lahontan</b>. One of the flattest surfaces on Earth, used for land speed records (763 mph, 1997) and <b>Burning Man</b>. The <b>Quinn River</b> terminates here. During the Pleistocene, this was a deep arm of Lake Lahontan. Hot springs along its edges (Soldier Meadows, Black Rock Hot Springs) were used by Northern Paiute bands. The <b>Applegate Trail</b> cut across its edges.'},
    {name:'Smoke Creek Desert', lat:40.60, lng:-119.75, size:'~200 sq mi',
     desc:'A dry playa west of the Pyramid Lake basin, part of the <b>Kamodokado</b> (Northern Paiute) territory. Fed by Smoke Creek, which rises in the Skedaddle Mountains. During the Pleistocene, connected to Lake Lahontan. The <b>Smoke Creek Desert</b> was one of the most barren sections of the Nobles Trail (emigrant route).'},
    {name:'Walker Lake', lat:38.68, lng:-118.72, size:'~38,000 acres (declining)',
     desc:'A terminal lake that has been <b>shrinking dramatically</b> since upstream irrigation diversions began in the 1920s. The lake has dropped <b>over 150 feet</b> and salinity has increased to levels lethal to Lahontan cutthroat trout. Once a thriving fishery that sustained the <b>Agai Dicutta</b> Paiute for centuries. The Walker River Paiute Tribe has fought for decades to restore minimum inflows. One of the great environmental tragedies of the American West.'},
    {name:'Pyramid Lake', lat:40.02, lng:-119.53, size:'~188 sq mi · never dried',
     desc:'The largest remnant of <b>Pleistocene Lake Lahontan</b> and one of the few terminal lakes in the Great Basin that has never completely dried. Named by Frémont (1844) for its pyramidal tufa formations. Sacred to the <b>Kuyuidokado</b> (Pyramid Lake Paiute). Home of the <b>cui-ui</b> (found nowhere else on Earth) and once-massive <b>Lahontan cutthroat trout</b> runs. The lake dropped 87 feet after Derby Dam (1905) diverted the Truckee River. Slow recovery ongoing since water rights settlements.'}
  ];

  sinks.forEach(s => {
    L.circleMarker([s.lat, s.lng], {
      radius: 8, color: W.sink, fillColor: W.sink,
      fillOpacity: 0.25, weight: 2, dashArray: '4,4'
    }).addTo(L_groups.nvSinks)
    .bindPopup(wp(`🌊 ${s.name}`, W.sink,
      `Terminal sink/lake · ${s.size}`,
      s.desc,
      'USGS; NV Water Resources; Bureau of Reclamation; tribal sources'));
  });

  // ============================================================
  //  🚫 DAMS & DIVERSIONS — the remaking of Nevada's waters
  // ============================================================
  const dams = [
    {name:'Derby Dam', lat:39.57, lng:-119.45, year:1905, river:'Truckee River',
     desc:'The <b>first dam built under the Newlands Reclamation Act of 1902</b> — and one of the most consequential. Derby Dam diverts Truckee River water into the <b>Truckee Canal</b> to irrigate farms near Fallon, channeling water meant for <b>Pyramid Lake</b> into the <b>Carson Sink</b> instead. The result: Pyramid Lake dropped <b>87 feet</b>, severing the Truckee River\'s connection to Winnemucca Lake (which dried up entirely by 1938). The cui-ui spawning run was devastated. Lahontan cutthroat trout were extirpated from the lake by 1943. The <b>Pyramid Lake Paiute Tribe</b> fought for decades for water rights. Partial restoration ongoing but the lake has never recovered.'},
    {name:'Lahontan Dam', lat:39.47, lng:-119.07, year:1915, river:'Carson River',
     desc:'Part of the <b>Newlands Reclamation Project</b>. Impounds the Carson River to create Lahontan Reservoir (capacity: 295,000 acre-feet), storing water for irrigation of the Fallon area. Combined with Derby Dam\'s Truckee River diversion, these two dams remade the hydrology of western Nevada. The dam flooded a stretch of the Carson River used by Northern Paiute for millennia. Downstream, the Stillwater wetlands became dependent on agricultural return flows rather than natural river flow.'},
    {name:'Rye Patch Dam', lat:40.47, lng:-118.30, year:1936, river:'Humboldt River',
     desc:'Impounds the Humboldt River in Pershing County, creating <b>Rye Patch Reservoir</b> — the largest storage reservoir in the Humboldt River Basin. Stores spring runoff for irrigation in the Lovelock Valley. The dam fundamentally altered the Humboldt\'s natural flow regime, which historically included spring floods that sustained downstream wetlands. Located near the <b>Lovelock Culture</b> archaeological sites.'},
    {name:'South Fork Dam', lat:40.52, lng:-115.75, year:1988, river:'South Fork Humboldt',
     desc:'Creates South Fork Reservoir on the South Fork of the Humboldt River in Elko County. Stores water for irrigation and recreation. Located within the <b>South Fork Band</b> (Te-Moak Western Shoshone) territory. The reservoir has improved some downstream habitat but also altered the natural flow patterns of the South Fork.'},
    {name:'Hoover Dam', lat:36.02, lng:-114.74, year:1936, river:'Colorado River',
     desc:'While not in Nevada\'s interior, <b>Hoover Dam</b> profoundly affected southern Nevada. It created <b>Lake Mead</b>, which flooded the confluence of the Virgin and Muddy Rivers — inundating hundreds of <b>Ancestral Puebloan</b> and <b>Southern Paiute</b> sites including much of the "Lost City." The dam also made Las Vegas possible by providing water and electricity. Before the dam, the Colorado River corridor was Southern Paiute, Chemehuevi, and Mohave territory.'}
  ];

  dams.forEach(d => {
    const icon = L.divIcon({
      className: '',
      html: `<div style="font-size:14px;cursor:pointer" title="${d.name} (${d.year})">🚫</div>`,
      iconSize: [16,16], iconAnchor: [8,8]
    });
    L.marker([d.lat, d.lng], {icon}).addTo(L_groups.nvDams)
    .bindPopup(wp(`🚫 ${d.name} (${d.year})`, W.dam,
      `${d.river} · Built ${d.year}`,
      d.desc,
      'Bureau of Reclamation; USGS; NV Water Resources; tribal sources'));
  });

  // --- Derby Dam diversion canal (Truckee Canal) ---
  L.polyline([
    [39.57,-119.45],[39.55,-119.35],[39.52,-119.22],[39.50,-119.10],
    [39.48,-118.95],[39.47,-118.80]
  ], {color:W.dam, weight:2, opacity:0.6, dashArray:'8,6'}).addTo(L_groups.nvDams)
  .bindPopup(wp('🔴 Truckee Canal (Diversion)', W.dam,
    'Derby Dam → Lahontan Reservoir · est. 1905',
    'The <b>Truckee Canal</b> carries diverted Truckee River water ~31 miles to <b>Lahontan Reservoir</b> on the Carson River. This artificial transfer — moving water from one river basin to another — is the central hydrological intervention in western Nevada. It simultaneously drained <b>Pyramid Lake</b> (Paiute homeland) and flooded the <b>Carson Sink</b> (creating farmland at Fallon). One of the most controversial water diversions in western U.S. history.',
    'Bureau of Reclamation; Pyramid Lake Paiute Tribe; Townley 1998'));

  // --- Forty Mile Desert trail marker ---
  L.polyline([
    [39.88,-118.65],[39.80,-118.75],[39.70,-118.90],[39.60,-119.05],
    [39.55,-119.20]
  ], {color:W.trail, weight:2, opacity:0.5, dashArray:'4,8'}).addTo(L_groups.nvSinks)
  .bindPopup(wp('💀 Forty Mile Desert', W.trail,
    'Humboldt Sink → Carson River · deadliest stretch of California Trail',
    'The <b>Forty Mile Desert</b> — the waterless gap between the Humboldt Sink and the Carson River — was the most feared section of the entire <b>California Trail</b>. Emigrants crossed at night to avoid the heat. The desert was littered with dead oxen, abandoned wagons, and scattered goods. Thousands made this crossing during the Gold Rush (1849-1860s). For indigenous peoples, this was simply part of the landscape — Northern Paiute bands knew the springs and water sources that emigrants could not find.',
    'California Trail Center; Cline 1963; NV Historical Society'));

  // ============================================================
  //  SIDEBAR REGISTRATION
  // ============================================================
  if(window.registerLayer) {
    registerLayer('nvRivers', 'NV Rivers (Humboldt, Truckee, Carson, Walker +)', 'greatbasin');
    registerLayer('nvTributaries', 'NV Tributaries (forks & smaller rivers)', 'greatbasin');
    registerLayer('nvSprings', 'NV Springs & Oases', 'greatbasin');
    registerLayer('nvSinks', 'NV Terminal Sinks & Desert Crossings', 'greatbasin');
    registerLayer('nvDams', 'NV Dams & Water Diversions', 'greatbasin');
  }

  console.log('✅ 63-nevada-waterways.js loaded — 10 rivers, 4 tributaries, 10 springs, 6 sinks, 5 dams');
})();
