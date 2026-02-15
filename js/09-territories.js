const langTerritories = [
  {name:'Coast Miwok',family:'Penutian',color:'#2196F3',opacity:0.08,
   desc:'Penutian (Miwokan/Utian) — spoken throughout Marin County and southern Sonoma County, from the Golden Gate to Bodega Bay. Coast Miwok names survive in Tamalpais ("coast hill"), Tomales ("west coast"), Olompali, Novato, and Nicasio. The Federated Indians of Graton Rancheria represent Coast Miwok people today.',
   coords:[[37.835,-122.530],[37.870,-122.590],[37.920,-122.630],[37.960,-122.690],[38.000,-122.770],[38.050,-122.860],[38.080,-122.900],[38.100,-122.870],[38.120,-122.840],[38.150,-122.760],[38.170,-122.690],[38.190,-122.640],[38.200,-122.580],[38.180,-122.520],[38.140,-122.480],[38.100,-122.470],[38.060,-122.460],[38.020,-122.450],[37.990,-122.440],[37.960,-122.440],[37.930,-122.440],[37.900,-122.440],[37.870,-122.460],[37.845,-122.490]]},
  {name:'Chochenyo Ohlone',family:'Penutian',color:'#1565C0',opacity:0.08,
   desc:'Penutian (Ohlone/Costanoan > Utian) — spoken across the East Bay from Richmond south through Oakland and Alameda to the foothills of the Diablo Range. The Muwekma Ohlone Tribe leads Chochenyo language revitalization today.',
   coords:[[37.930,-122.380],[37.930,-122.340],[37.920,-122.280],[37.900,-122.220],[37.870,-122.180],[37.840,-122.150],[37.800,-122.120],[37.770,-122.090],[37.740,-122.060],[37.710,-122.050],[37.680,-122.050],[37.650,-122.080],[37.650,-122.140],[37.660,-122.200],[37.680,-122.250],[37.700,-122.280],[37.730,-122.300],[37.760,-122.310],[37.790,-122.310],[37.820,-122.310],[37.850,-122.320],[37.880,-122.330],[37.910,-122.350]]},
  {name:'Ramaytush Ohlone',family:'Penutian',color:'#1565C0',opacity:0.08,
   desc:'Penutian (Ohlone/Costanoan > Utian) — spoken on the San Francisco Peninsula from the Golden Gate south to Pacifica. The least documented Ohlone language — no fluent speakers survived into the recording era. The Association of Ramaytush Ohlone maintains cultural connections.',
   coords:[[37.810,-122.520],[37.810,-122.470],[37.810,-122.420],[37.790,-122.400],[37.770,-122.390],[37.750,-122.380],[37.730,-122.370],[37.710,-122.360],[37.690,-122.370],[37.670,-122.390],[37.650,-122.420],[37.640,-122.450],[37.640,-122.490],[37.660,-122.520],[37.680,-122.530],[37.710,-122.530],[37.740,-122.520],[37.770,-122.510],[37.790,-122.510]]},
  {name:'Bay Miwok (Saclan)',family:'Penutian',color:'#2196F3',opacity:0.08,
   desc:'Penutian (Miwokan/Utian) — spoken in central and eastern Contra Costa County by the Volvon, Ssaoam, Tatcan, Chupcan, and Julpun peoples. The Volvon held Mt. Diablo itself — the Spanish called it "Cerro Alto de los Bolbones" (High Point of the Volvon). Language went extinct in the mission period.',
   coords:[[37.960,-122.100],[37.960,-122.020],[37.950,-121.950],[37.930,-121.880],[37.900,-121.830],[37.870,-121.810],[37.840,-121.810],[37.810,-121.830],[37.800,-121.900],[37.800,-121.960],[37.810,-122.020],[37.830,-122.080],[37.860,-122.120],[37.890,-122.140],[37.920,-122.130]]},
  {name:'Patwin (Suisun)',family:'Penutian',color:'#42A5F5',opacity:0.08,
   desc:'Penutian (Wintuan) — spoken from Suisun Bay north through the western Sacramento Valley. The Suisun Patwin controlled the critical marshlands north of Carquinez Strait. Their name survives in Suisun Bay, Suisun City, and the Suisun Marsh — the largest contiguous brackish marsh in the western US.',
   coords:[[38.030,-122.280],[38.050,-122.200],[38.080,-122.120],[38.120,-122.050],[38.160,-122.000],[38.200,-121.950],[38.240,-121.930],[38.260,-121.980],[38.260,-122.050],[38.240,-122.130],[38.210,-122.200],[38.170,-122.260],[38.130,-122.300],[38.090,-122.320],[38.050,-122.310]]},
  {name:'Wappo',family:'Yukian',color:'#FF9800',opacity:0.08,
   desc:'Yukian family — no known relatives anywhere on Earth. Spoken in Napa Valley and Alexander Valley. Possibly the oldest language lineage in California, predating even Hokan. Laura Fish Somersal, last fluent speaker, died 1990.',
   coords:[[38.250,-122.500],[38.280,-122.440],[38.320,-122.380],[38.360,-122.340],[38.400,-122.360],[38.430,-122.410],[38.450,-122.470],[38.430,-122.540],[38.390,-122.580],[38.350,-122.590],[38.310,-122.570],[38.270,-122.540]]},
  {name:'Southern Pomo',family:'Hokan',color:'#E91E63',opacity:0.08,
   desc:'Hokan (Pomoan) — spoken in northern Sonoma County, including the Santa Rosa Plain and the Russian River valley. One of seven Pomo languages, representing the Hokan presence that once extended much further south before the Penutian expansion.',
   coords:[[38.350,-122.590],[38.380,-122.650],[38.420,-122.720],[38.460,-122.780],[38.510,-122.800],[38.550,-122.750],[38.570,-122.680],[38.560,-122.600],[38.530,-122.540],[38.490,-122.500],[38.450,-122.480],[38.410,-122.510],[38.380,-122.550]]}
];

langTerritories.forEach(t => {
  const poly = L.polygon(t.coords, {
    color: t.color, weight: 1.5, opacity: 0.4,
    fillColor: t.color, fillOpacity: t.opacity,
    dashArray: '4,4'
  }).addTo(L_groups.langTerritories);
  const familyBadge = t.family === 'Hokan' ? '<span style="display:inline-block;background:#E91E63;color:#fff;font-size:9px;font-weight:700;padding:1px 5px;border-radius:8px">HOKAN (oldest)</span>'
    : t.family === 'Yukian' ? '<span style="display:inline-block;background:#FF9800;color:#fff;font-size:9px;font-weight:700;padding:1px 5px;border-radius:8px">YUKIAN (ancient isolate)</span>'
    : '<span style="display:inline-block;background:#2196F3;color:#fff;font-size:9px;font-weight:700;padding:1px 5px;border-radius:8px">PENUTIAN (later expansion)</span>';
  poly.bindPopup(`<h4>${t.name}</h4>${familyBadge}<div style="margin-top:6px;font-size:12px;color:#ccc">${t.desc}</div><div style="margin-top:6px;font-size:10px;color:#888">Click 🗣️ Language Encyclopedia for full details</div>`);
  // Label at centroid
  const cLat = t.coords.reduce((s,c) => s+c[0], 0) / t.coords.length;
  const cLng = t.coords.reduce((s,c) => s+c[1], 0) / t.coords.length;
  L.marker([cLat, cLng], {
    icon: L.divIcon({
      className: '',
      html: `<div style="color:${t.color};font-size:11px;font-weight:600;text-align:center;text-shadow:0 0 4px #000,0 0 8px #000;white-space:nowrap;pointer-events:none">${t.name}</div>`,
      iconSize: [120, 20], iconAnchor: [60, 10]
    }),
    interactive: false
  }).addTo(L_groups.langTerritories);
});

// ========== BAY MIWOK TRIBELET TERRITORIES ==========
// Based on Milliken 1995 "A Time of Little Choice", Bennyhoff 1961, EBRPD Bay Miwok curriculum
const bayMiwokTribes = [
  {name:'Volvon (Bolbon)',pop:'~108 baptized',center:[37.855,-121.815],color:'#5C6BC0',
   desc:'Held Mt. Diablo itself — the summit, Marsh Creek watershed to the east, and Clayton. Spanish: "Cerro Alto de los Bolbones" (High Point of the Volvon). The main Volvon village had 715+ bedrock mortars and extensive housepits spread over half a mile — one of the largest settlements in the prehistoric Bay Area. Bay Miwok name for the mountain: <b>Oo\'-yum-bel\'-le</b>. In the creation story, the condor Mol\'-luk lived on the north side; his wife, the rock, gave birth to Wek\'-wek (Prairie Falcon). With grandfather Coyote-man, Wek-wek created all Indian people. Volvon went to Missions San Jose & San Francisco 1803-1808.',
   coords:[[37.920,-121.930],[37.920,-121.870],[37.910,-121.810],[37.890,-121.760],[37.860,-121.720],[37.830,-121.720],[37.800,-121.740],[37.790,-121.780],[37.790,-121.830],[37.800,-121.880],[37.820,-121.920],[37.850,-121.940],[37.880,-121.950],[37.910,-121.940]]},
  {name:'Chupcan',pop:'~146 baptized',center:[37.975,-122.015],color:'#42A5F5',
   desc:'Occupied the Concord area. The 1805 "Monte del Diablo" naming incident: Spanish soldiers tried to force Chupcan into the mission, camped near a willow thicket on Pacheco Creek (near today\'s Buchanan Field). At night, the Chupcan escaped across the Carquinez Straits in tule boats. A mysterious figure — "Puy" — appeared, turning the battle in the Chupcan\'s favor. The Spanish named the thicket "Monte del Diablo" (Thicket of the Devil). In 1810, 146 Chupcan were baptized at Mission San Francisco.',
   coords:[[37.950,-122.070],[37.960,-122.020],[37.970,-121.960],[37.960,-121.930],[37.940,-121.930],[37.920,-121.950],[37.920,-122.000],[37.930,-122.050],[37.940,-122.070]]},
  {name:'Saclan',pop:'~171 baptized',center:[37.895,-122.100],color:'#29B6F6',
   desc:'Occupied the inland valleys east of the East Bay hills — present-day Moraga, Orinda, Lafayette, Briones Regional Park, and Walnut Creek. The Saclan were the first Bay Miwok to enter the missions (1794-95). They were also leaders of the major East Bay rebellion — killing Christian Indians sent to retrieve them and resisting five Spanish military expeditions from 1795 to 1805. Their leader <b>Potroy</b> was arrested in 1797, tried, and sentenced to whippings and a year in shackles at the San Francisco Presidio.',
   coords:[[37.930,-122.180],[37.930,-122.130],[37.920,-122.070],[37.900,-122.030],[37.880,-122.020],[37.860,-122.040],[37.855,-122.080],[37.860,-122.130],[37.870,-122.170],[37.890,-122.190],[37.910,-122.190]]},
  {name:'Tatcan',pop:'~161 baptized',center:[37.840,-122.000],color:'#26C6DA',
   desc:'Lived on the west side of Mt. Diablo in the San Ramon Creek watershed — modern Danville, Alamo, and parts of San Ramon. Controlled the southern and western reaches of Mount Diablo where annual autumn Indian gatherings took place below the summit. First large group of 127 went to Mission San Francisco in 1804. Their territory became Rancho San Ramon (1833), granted to Bartolo Pacheco and Mariano Castro.',
   coords:[[37.880,-122.020],[37.870,-121.960],[37.855,-121.940],[37.840,-121.930],[37.820,-121.940],[37.800,-121.960],[37.790,-122.000],[37.800,-122.040],[37.820,-122.060],[37.840,-122.060],[37.860,-122.040]]},
  {name:'Julpun (Hoolpoon)',pop:'~103 baptized',center:[37.870,-121.730],color:'#7E57C2',
   desc:'Occupied lower Marsh Creek east of Mt. Diablo — present-day Brentwood and Byron area. C. Hart Merriam\'s creation story "The Birth of Wek-Wek and the Creation of Man" was told by a Hool-poom\'-ne (Julpun) Miwok, perhaps a descendant of this people. Their territory became Rancho Los Meganos (Mt. Diablo to Brentwood), granted to Jose Noriega in 1834. John Marsh later operated a cattle ranch using Volvon and Julpun laborers. They were among the last Bay Miwok to enter the missions (1811).',
   coords:[[37.910,-121.810],[37.910,-121.760],[37.900,-121.710],[37.880,-121.680],[37.860,-121.670],[37.840,-121.690],[37.830,-121.720],[37.840,-121.760],[37.860,-121.790],[37.880,-121.810],[37.900,-121.810]]},
  {name:'Ompin',pop:'~95 baptized',center:[38.010,-121.860],color:'#AB47BC',
   desc:'Occupied the area around present-day Pittsburg and north to rural south Solano County, including the islands in the Sacramento-San Joaquin confluence. In this strategic position they controlled the entrance to both great rivers. Most went to Mission San Jose with the Julpun — 78 in 1811 and 15 in 1812. Their territory became Rancho Los Medanos (Clayton to Antioch), granted to Jose Mesa in 1839.',
   coords:[[37.990,-121.940],[38.000,-121.890],[38.010,-121.840],[38.020,-121.800],[38.030,-121.810],[38.040,-121.850],[38.040,-121.900],[38.030,-121.940],[38.010,-121.960],[37.995,-121.950]]},
  {name:'Jalquin / Yrgin',pop:'~77 + ~152 baptized',center:[37.755,-122.120],color:'#66BB6A',
   desc:'The Jalquin occupied the southern portion of present-day Oakland, San Leandro, and San Leandro Creek to the east. The Yrgin of Hayward and Castro Valley had Chochenyo Ohlone name endings but were so highly intermarried with the Jalquin that they may have been a single bilingual tribe — straddling the Bay Miwok/Ohlone linguistic boundary. Jalquin were baptized at Mission San Francisco 1801-1803. Liberato Culpecse (born Jalquin, baptized 1801) is one of the main ancestors of the present-day Muwekma Ohlone Tribe.',
   coords:[[37.800,-122.180],[37.800,-122.130],[37.790,-122.080],[37.770,-122.060],[37.740,-122.050],[37.720,-122.060],[37.710,-122.090],[37.720,-122.130],[37.740,-122.160],[37.770,-122.180]]}
];

bayMiwokTribes.forEach(t => {
  const poly = L.polygon(t.coords, {
    color: t.color, weight: 1.5, opacity: 0.5,
    fillColor: t.color, fillOpacity: 0.10,
    dashArray: '3,3'
  }).addTo(L_groups.bayMiwokTribelets);
  poly.bindPopup(`<h4 style="color:${t.color}">${t.name}</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Bay Miwok tribelet · ${t.pop}</div><div style="font-size:12px;color:#ccc">${t.desc}</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Milliken 1995; Bennyhoff 1961; EBRPD Bay Miwok Resources; Bev Ortiz</div>`);
  L.marker(t.center, {
    icon: L.divIcon({
      className: '',
      html: `<div style="color:${t.color};font-size:10px;font-weight:600;text-align:center;text-shadow:0 0 4px #000,0 0 8px #000;white-space:nowrap;pointer-events:none">${t.name}</div>`,
      iconSize: [100, 16], iconAnchor: [50, 8]
    }), interactive: false
  }).addTo(L_groups.bayMiwokTribelets);
});

// === MT. DIABLO — SACRED MOUNTAIN MARKER ===
const diabloIcon = L.divIcon({
  className: '',
  html: '<div style="font-size:22px;text-shadow:0 0 8px #000,0 0 16px rgba(255,215,0,0.5);cursor:pointer" title="Mt. Diablo — Sacred Mountain">⛰️</div>',
  iconSize: [28, 28], iconAnchor: [14, 14]
});
L.marker([37.8816, -121.9142], {icon: diabloIcon}).addTo(L_groups.bayMiwokTribelets).bindPopup(`
<h3 style="color:#FFD54F;margin:0">⛰️ Mount Diablo — Tuyshtak / Oo'-yum-bel'-le</h3>
<div style="color:#aaa;font-size:10px;margin:3px 0 8px">3,849 ft · Contra Costa County · The Center of the World</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
<b>Multiple creation stories converge on this mountain:</b><br>
• <b>Bay Miwok (Oo'-yum-bel'-le):</b> The condor Mol'-luk lived on the north side. His wife, the rock, gave birth to Wek'-wek (Prairie Falcon-man). With Coyote-man, Wek-wek created all Indian people, giving them "everything, everywhere so they can live."<br>
• <b>Chochenyo Ohlone (Tuyshtak = "at the dawn of time"):</b> Maria Colos (1920s) said spirits still danced and whistled at cemetery sites on its lower slopes.<br>
• <b>Great Flood narrative:</b> Mt. Diablo and Mt. Tamalpais were the only two islands above the waters. From these peaks, Coyote and Eagle-man created the world.<br>
• <b>Wintun (Kinchiiwi = "Medicine Mountain"):</b> Religious leaders went up to pray for health, food, and talk to the spirits.<br>
• <b>Nisenan (Sukku Jaman):</b> "well known with religious significance"<br>
• <b>Pomo:</b> Mabel McKay — medicine people would go up and hold ceremonies.<br><br>
<b>25 independent tribal groups</b> surrounded this mountain, speaking <b>3 distinct languages</b> (Ohlone, Bay Miwok, Northern Valley Yokuts). The mountain was visible from Mt. Lassen to Loma Prieta to Yosemite.<br><br>
<b>Archaeology:</b> 715+ bedrock mortars at main Volvon Village. Extensive housepits. The Los Vaqueros rock art complex (CCo-434) nearby contains polychrome pictographs, obsidian tools from Napa Valley sources (~60 miles). Annual autumn gatherings drew people from across the region to an area below the summit.</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Bev Ortiz (News from Native California, 1989); Merriam 1910; Gifford 1955; Milliken 1995; EBRPD; Save Mount Diablo; East Bay Hill People</div>
`, {maxWidth: 420});

// === NORTHERN VALLEY YOKUTS TERRITORY ===
const yokutsTribelets = [
  {name:'Tamcan (Delta Yokuts)',color:'#FF8F00',
   desc:'Occupied the lower San Joaquin River — present-day eastern Contra Costa County and western San Joaquin County. Spoke Delta Yokuts, a unique dialect with possible substratal influence from a pre-Yokuts language. Territory along Old River was probably ~12 miles in circumference. Baptized at Mission San Jose mixed with their Cholvon neighbors, 1806-1811. The Muwekma Ohlone Tribe traces ancestral lines to the Tamcan.',
   coords:[[37.870,-121.670],[37.880,-121.620],[37.890,-121.570],[37.900,-121.530],[37.910,-121.540],[37.920,-121.580],[37.920,-121.630],[37.910,-121.680],[37.890,-121.700],[37.875,-121.690]]},
  {name:'Cholvon (Delta Yokuts)',color:'#FFA726',
   desc:'Near neighbors of the Tamcan along the Delta. Cholvon individuals appear in Mission San Jose baptismal records alongside the Tamcan from 1806-1811. The Delta Yokuts language was first delineated in 1959; Alphonse Pinart recorded the first vocabulary at Pleasanton in 1880, calling it "Tcholovones." Place names from Cholvon territory survive in the Delta landscape.',
   coords:[[37.910,-121.540],[37.920,-121.490],[37.935,-121.450],[37.950,-121.440],[37.960,-121.470],[37.960,-121.520],[37.950,-121.560],[37.935,-121.570],[37.920,-121.570]]},
  {name:'Passasimi (Yokuts)',color:'#FFB74D',
   desc:'Inhabited the area south and east of the Delta, in the interior valleys. The Muwekma Ohlone Tribe traces ancestral heritage to the Passasimi North Valley Yokuts. Their territory abutted the Julpun Bay Miwok to the west — a linguistic frontier between Miwokan and Yokutsan peoples.',
   coords:[[37.870,-121.570],[37.860,-121.520],[37.850,-121.470],[37.840,-121.430],[37.830,-121.440],[37.820,-121.480],[37.830,-121.530],[37.845,-121.570],[37.860,-121.580]]},
  {name:'Yatchikumne (Yokuts)',color:'#FFCC80',
   desc:'A Northern Valley Yokuts group near the San Joaquin River\'s Delta confluence. Their dialect (also called Chulamni or Tauquimne) is documented among the Far Northern / Delta Yokuts subgroup. Muwekma Ohlone ancestry includes Yatchikumne lineages from the Stockton region. Pre-contact population of the entire Delta Yokuts zone: 7,200-12,800 people across 12-16 groups.',
   coords:[[37.960,-121.440],[37.970,-121.390],[37.985,-121.350],[38.000,-121.340],[38.010,-121.370],[38.010,-121.420],[38.000,-121.460],[37.985,-121.470],[37.970,-121.460]]},
  {name:'Lakisamni (Yokuts)',color:'#FFE0B2',
   desc:'Linked to villages along the Stanislaus River. Chief Estanislao (born Cucunuchi, ~1798), the famous Yokuts resistance leader, was born along its banks. Baptized "Estanislao" at Mission San Jose — the river itself was renamed for him. He led one of the largest indigenous resistance movements in California history against the Mexican authorities in 1828-29. The Lakisamni were Penutian (Yokutsan) speakers.',
   coords:[[37.830,-121.430],[37.820,-121.380],[37.810,-121.330],[37.800,-121.290],[37.790,-121.300],[37.785,-121.350],[37.795,-121.400],[37.810,-121.440],[37.825,-121.450]]}
];

// Draw large Yokuts background zone
const yokutsBgCoords = [[37.950,-121.450],[37.980,-121.350],[38.020,-121.280],[38.060,-121.220],[38.070,-121.180],[38.050,-121.140],[38.020,-121.120],[37.980,-121.100],[37.940,-121.080],[37.900,-121.060],[37.860,-121.060],[37.820,-121.080],[37.780,-121.120],[37.750,-121.160],[37.730,-121.220],[37.720,-121.300],[37.730,-121.380],[37.750,-121.440],[37.780,-121.500],[37.810,-121.540],[37.840,-121.560],[37.870,-121.570],[37.900,-121.540],[37.930,-121.500]];
L.polygon(yokutsBgCoords, {
  color: '#FF9800', weight: 1, opacity: 0.3,
  fillColor: '#FF9800', fillOpacity: 0.05,
  dashArray: '6,4'
}).addTo(L_groups.yokutsTerr).bindPopup(`<h4 style="color:#FFB74D">Northern Valley Yokuts</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Penutian (Yokutsan) · up to 60 tribes · 18,000-50,000+ people pre-contact</div><div style="font-size:12px;color:#ccc">The Yokuts were the dominant people of the San Joaquin Valley — the largest ethnic group in pre-contact California. Villages were spaced every 3-5 miles along waterways. Their territory extended 250 miles from the Delta south to Bakersfield. The Northern (Delta) Yokuts inhabited the marshy tule lands where the San Joaquin and Sacramento rivers converge, using tule boats and managing the landscape through controlled burns. Trade flowed over the Altamont Pass to the Bay Area — Yokuts brought furs and inland goods, receiving coastal shells (used as currency) in return.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Cook 1955; Milliken 1995; Wallace (eHRAF)</div>`);

yokutsTribelets.forEach(t => {
  const poly = L.polygon(t.coords, {
    color: t.color, weight: 1.5, opacity: 0.5,
    fillColor: t.color, fillOpacity: 0.12,
    dashArray: '3,3'
  }).addTo(L_groups.yokutsTerr);
  poly.bindPopup(`<h4 style="color:${t.color}">${t.name}</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Northern Valley Yokuts · Penutian</div><div style="font-size:12px;color:#ccc">${t.desc}</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Milliken 1995; Bennyhoff 1961; Muwekma Ohlone Tribe</div>`);
  const cLat = t.coords.reduce((s,c) => s+c[0], 0) / t.coords.length;
  const cLng = t.coords.reduce((s,c) => s+c[1], 0) / t.coords.length;
  L.marker([cLat, cLng], {
    icon: L.divIcon({
      className: '',
      html: `<div style="color:${t.color};font-size:9px;font-weight:600;text-align:center;text-shadow:0 0 4px #000,0 0 8px #000;white-space:nowrap;pointer-events:none">${t.name}</div>`,
      iconSize: [110, 14], iconAnchor: [55, 7]
    }), interactive: false
  }).addTo(L_groups.yokutsTerr);
});

// Yokuts zone label
L.marker([37.870, -121.280], {
  icon: L.divIcon({
    className: '',
    html: '<div style="color:#FFB74D;font-size:13px;font-weight:700;text-align:center;text-shadow:0 0 6px #000,0 0 12px #000;white-space:nowrap;pointer-events:none">Northern Valley<br>Yokuts</div>',
    iconSize: [140, 30], iconAnchor: [70, 15]
  }), interactive: false
}).addTo(L_groups.yokutsTerr);

// Chief Estanislao marker
L.marker([37.810, -121.260], {
  icon: L.divIcon({
    className: '',
    html: '<div style="font-size:16px;cursor:pointer" title="Estanislao\'s homeland — Stanislaus River">⚔️</div>',
    iconSize: [20, 20], iconAnchor: [10, 10]
  })
}).addTo(L_groups.yokutsTerr).bindPopup(`<h4 style="color:#FFB74D">⚔️ Chief Estanislao — Yokuts Resistance Leader</h4><div style="font-size:12px;color:#ccc;line-height:1.5">Born <b>Cucunuchi</b> (~1798) along the Stanislaus River among the Lakisamni Yokuts. Baptized "Estanislao" at Mission San Jose. In 1828-29, he led one of the largest indigenous resistance movements in California history — rallying Yokuts, Miwok, and other valley peoples against the Mexican military. His forces fortified positions along the Stanislaus River and twice repelled military expeditions before being defeated by Mariano Vallejo's forces. The Stanislaus River and Stanislaus County are named for him. He is one of the most significant Native resistance leaders in California history.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Milliken 1995; Escalon Times; Oakdale Leader</div>`, {maxWidth: 380});

// === ALTAMONT PASS TRADE ROUTE ===
const altamontRoute = [
  [37.680,-122.080],[37.690,-122.020],[37.700,-121.960],[37.710,-121.900],[37.715,-121.850],[37.720,-121.800],[37.730,-121.750],[37.740,-121.700],[37.750,-121.650],[37.760,-121.600],[37.775,-121.550],[37.790,-121.510]
];
L.polyline(altamontRoute, {
  color: '#FFD54F', weight: 2.5, opacity: 0.7,
  dashArray: '8,6'
}).addTo(L_groups.yokutsTerr).bindPopup(`<h4 style="color:#FFD54F">🛤️ Altamont Pass Trade Route</h4><div style="font-size:12px;color:#ccc;line-height:1.5">The major trade route connecting the Bay Area to the San Joaquin Valley, crossing through the Livermore Valley and over the Altamont Pass. Yokuts peoples brought furs, obsidian, and inland goods west; coastal peoples sent clams, abalone, and other shells east — shells served as currency throughout central California. This route connected Chochenyo Ohlone territory (Hayward/Fremont) through Bay Miwok lands (Livermore/Dublin) to Northern Valley Yokuts territory (Tracy/Stockton). The route followed natural water corridors and was used for thousands of years.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Oakdale Leader; Milliken 1995</div>`, {maxWidth: 380});
// Route label
L.marker([37.720, -121.800], {
  icon: L.divIcon({
    className: '',
    html: '<div style="color:#FFD54F;font-size:9px;font-style:italic;text-align:center;text-shadow:0 0 4px #000,0 0 8px #000;white-space:nowrap;pointer-events:none;transform:rotate(-15deg)">← Altamont Trade Route →</div>',
    iconSize: [130, 14], iconAnchor: [65, 7]
  }), interactive: false
}).addTo(L_groups.yokutsTerr);

// === TULARE LAKE — lost population center ===
L.marker([36.050, -119.750], {
  icon: L.divIcon({
    className: '',
    html: '<div style="font-size:16px;cursor:pointer" title="Tulare Lake — Yokuts population center (drained)">🌊</div>',
    iconSize: [20, 20], iconAnchor: [10, 10]
  })
}).addTo(L_groups.yokutsTerr).bindPopup(`<h4 style="color:#FFB74D">🌊 Tulare Lake — Lost Yokuts Heartland</h4><div style="font-size:12px;color:#ccc;line-height:1.5">Once one of the largest freshwater lakes west of the Mississippi — fed by the Kings, Kaweah, Tule, and Kern Rivers. Tulare Lake was the population center for Southern Valley Yokuts tribes including the Tachi, Chunut, Wowol, and others. In 1858-59, settlers began ethnically cleansing the lake, killing or forcibly relocating the Yokuts population. The lake was subsequently drained for agriculture. The Tachi Yokut Tribe (Santa Rosa Rancheria near Lemoore) maintains their connection to this lost landscape. The lake briefly reappeared during 2023 flooding.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Wikipedia; Latta 1978 "Handbook of Yokuts Indians"</div>`, {maxWidth: 380});

// ========== SOUTHERN VALLEY YOKUTS TRIBES ==========
// Tachi — North and west shores of Tulare Lake
L.polygon([
  [36.15,-120.10],[36.20,-119.95],[36.22,-119.80],[36.18,-119.65],
  [36.10,-119.55],[36.00,-119.55],[35.90,-119.65],[35.85,-119.80],
  [35.88,-119.95],[35.95,-120.05],[36.05,-120.10],[36.15,-120.10]
],{color:'#FF8F00',fillColor:'#FF8F00',fillOpacity:0.12,weight:1.5,dashArray:'6,4',
}).addTo(L_groups.sValleyYokuts).bindPopup(`<h4 style="color:#FF8F00">Tachi (Tache)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Southern Valley Yokuts · Tulare Lake north/west shore</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Tachi held the north and west shores of <b>Pa'ashi</b> (Tulare Lake) — including the Kettleman Hills and plains west to the Coast Range. Their creation story says they were made from the bottom of the lake itself. Villages included <b>Udjiu</b> (near Coalinga), <b>Walna</b>, <b>Colon</b> (Huron), <b>Chi</b>, and <b>Waiu</b> (on Mussel Slough). The Tachi used clamshell disk currency (<b>keha</b>) and the more valuable clamshell cylinders (<b>humna</b>). Today the <b>Tachi Yokut Tribe</b> operates the Santa Rosa Rancheria near Lemoore — the most prominent surviving Yokuts tribal entity.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Latta 1978; Tachi Yokut Tribe</div>`, {maxWidth:380});

// Chunut — NE shore of Tulare Lake, Kaweah Delta
L.polygon([
  [36.22,-119.65],[36.28,-119.50],[36.30,-119.35],[36.25,-119.20],
  [36.15,-119.15],[36.05,-119.20],[36.00,-119.35],[36.05,-119.50],
  [36.10,-119.55],[36.18,-119.65],[36.22,-119.65]
],{color:'#FFB300',fillColor:'#FFB300',fillOpacity:0.12,weight:1.5,dashArray:'6,4',
}).addTo(L_groups.sValleyYokuts).bindPopup(`<h4 style="color:#FFB300">Chunut</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Southern Valley Yokuts · NE Tulare Lake / Kaweah Delta</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Chunut occupied the northeastern shore of Tulare Lake and the Kaweah River delta region. Villages included <b>Miketsiu</b> and <b>Chuntau</b>. The Kaweah Delta — where the river spread into multiple channels before reaching the lake — created rich marshlands ideal for fishing and waterfowl hunting. The Chunut lived in close proximity to the Wowol and Tachi, sharing the lake's resources.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Latta 1978; Cook 1955</div>`, {maxWidth:350});

// Wowol — SE shore of Tulare Lake, including Atwell Island
L.polygon([
  [36.05,-119.50],[36.10,-119.35],[36.10,-119.20],[36.05,-119.10],
  [35.95,-119.05],[35.85,-119.10],[35.80,-119.25],[35.82,-119.40],
  [35.90,-119.50],[36.00,-119.55],[36.05,-119.50]
],{color:'#FFC107',fillColor:'#FFC107',fillOpacity:0.12,weight:1.5,dashArray:'6,4',
}).addTo(L_groups.sValleyYokuts).bindPopup(`<h4 style="color:#FFC107">Wowol</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Southern Valley Yokuts · SE Tulare Lake / Atwell Island (Alpaugh)</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Wowol held the southeastern shore of Tulare Lake, including <b>Atwell Island</b> (near modern Alpaugh). Their main village <b>Sukuwutnu</b> (also called Dulau) sat on an island off the eastern shore. The Wowol, along with the Tachi and Chunut, were among the last autonomous indigenous peoples in the San Joaquin Valley — living on lake islands into the 1870s before settlers introduced cattle and burned the tule marshes to force them out.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Latta 1978; Open Rivers Journal 2023</div>`, {maxWidth:350});

// Yowlumne — Lower Kern River / Bakersfield area
L.polygon([
  [35.55,-119.20],[35.60,-119.05],[35.55,-118.85],[35.45,-118.75],
  [35.30,-118.80],[35.25,-118.95],[35.30,-119.10],[35.40,-119.20],[35.55,-119.20]
],{color:'#E65100',fillColor:'#E65100',fillOpacity:0.10,weight:1.5,dashArray:'6,4',
}).addTo(L_groups.sValleyYokuts).bindPopup(`<h4 style="color:#E65100">Yowlumne (Yauelmani)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Southern Valley Yokuts · Lower Kern River / Bakersfield</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Yowlumne occupied the lower Kern River area around modern Bakersfield, extending to Caliente Creek and the Tehachapi foothills. Their dialect (<b>Yawelmani</b>) is one of only three surviving Yokuts languages, kept alive through the work of teachers like <b>Denise Hunter</b> and <b>Nicola Larsen</b> on the Tule River Reservation — a tradition carried on from Nicola's great-grandmother <b>Mary Santiago</b>.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Tule River Indian Tribe; Latta 1978</div>`, {maxWidth:350});

// Tulumne — Buena Vista Lake
L.polygon([
  [35.20,-119.50],[35.25,-119.35],[35.22,-119.20],[35.15,-119.10],
  [35.05,-119.10],[35.00,-119.25],[35.05,-119.40],[35.12,-119.50],[35.20,-119.50]
],{color:'#BF360C',fillColor:'#BF360C',fillOpacity:0.10,weight:1.5,dashArray:'6,4',
}).addTo(L_groups.sValleyYokuts).bindPopup(`<h4 style="color:#BF360C">Tulumne</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Southern Valley Yokuts · Buena Vista Lake (Taft/McKittrick)</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Tulumne held the south, west, and north sides of <b>Buena Vista Lake</b>, extending west to the Taft and McKittrick areas. Villages included <b>Tulamniu</b> (west/northwest shore) and <b>Wogitiu</b> (at McKittrick). Buena Vista Lake — like Tulare Lake to the north — was a major freshwater body fed by the Kern River, now completely drained for agriculture.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Latta 1978</div>`, {maxWidth:350});

// Wimilche and Nutunutu — Kings River tribes  
L.polygon([
  [36.45,-119.70],[36.50,-119.55],[36.48,-119.40],[36.42,-119.30],
  [36.35,-119.30],[36.30,-119.40],[36.32,-119.55],[36.38,-119.65],[36.45,-119.70]
],{color:'#FF6F00',fillColor:'#FF6F00',fillOpacity:0.10,weight:1.5,dashArray:'6,4',
}).addTo(L_groups.sValleyYokuts).bindPopup(`<h4 style="color:#FF6F00">Kings River Yokuts</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Southern Valley Yokuts · Kings River drainage</div><div style="font-size:12px;color:#ccc;line-height:1.5">Multiple Yokuts tribes occupied the Kings River drainage — the <b>Wimilche</b> (north bank near Laton), <b>Nutunutu</b> (south bank near Laton), <b>Itecha/Aitecha</b> (south bank near Sanger), <b>Wechikit</b> (north bank east of Sanger to Reedley), and <b>Apiachi</b> (north of Murphy Slough). The Kings River was one of the most important waterways in Yokuts territory, providing salmon, steelhead, and connecting the valley floor to the Sierra foothills where Foothill Yokuts lived.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Latta 1978; Cook 1955</div>`, {maxWidth:350});

// Pitkachi — San Joaquin River at Mendota/Herndon
L.polygon([
  [36.70,-120.45],[36.75,-120.30],[36.73,-120.15],[36.68,-120.05],
  [36.60,-120.05],[36.55,-120.15],[36.57,-120.30],[36.62,-120.40],[36.70,-120.45]
],{color:'#FF9100',fillColor:'#FF9100',fillOpacity:0.10,weight:1.5,dashArray:'6,4',
}).addTo(L_groups.sValleyYokuts).bindPopup(`<h4 style="color:#FF9100">Pitkachi</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Southern Valley Yokuts · San Joaquin River (Mendota to Herndon)</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Pitkachi occupied the south side of the San Joaquin River from the Mendota Pool upstream to Herndon (modern northwest Fresno). Villages included <b>Kohuou</b> (near Herndon), <b>Weshiu</b> (on a slough), and <b>Gawachiu</b> (farther downstream). Adam Johnston estimated about 125 people per village in the area during the early 1850s.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Cook 1955</div>`, {maxWidth:350});

// Buena Vista Lake marker
L.marker([35.10,-119.30],{icon:L.divIcon({className:'custom-marker',
    html:'<div style="font-size:16px;cursor:pointer" title="Buena Vista Lake — lost southern lake">🌊</div>',
    iconSize:[24,24],iconAnchor:[12,12]})
}).addTo(L_groups.sValleyYokuts).bindPopup(`<h4 style="color:#FFA726">🌊 Buena Vista Lake — Lost Southern Lake</h4><div style="font-size:12px;color:#ccc;line-height:1.5">The second great lake of the southern San Joaquin Valley, fed by the Kern River. Home to the <b>Tulumne</b> and <b>Hometwoli</b> (Humetwadi) Yokuts tribes. Kern Lake sat just to the east, connected by a channel. Together with Tulare Lake to the north, these formed a chain of freshwater bodies that sustained tens of thousands of Yokuts people. All were drained for agriculture by the early 1900s. The surrounding area — Taft, McKittrick, Bakersfield — is now oil country and farmland.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Latta 1978; Cook 1955</div>`, {maxWidth:380});

// Kern Lake marker
L.marker([35.25,-118.95],{icon:L.divIcon({className:'custom-marker',
    html:'<div style="font-size:16px;cursor:pointer" title="Kern Lake — lost Yokuts lake">🌊</div>',
    iconSize:[24,24],iconAnchor:[12,12]})
}).addTo(L_groups.sValleyYokuts).bindPopup(`<h4 style="color:#FFA726">🌊 Kern Lake — Lost Yokuts Lake</h4><div style="font-size:12px;color:#ccc;line-height:1.5">A smaller lake east of Buena Vista Lake, connected by a channel from the Kern River. Home to the <b>Hometwoli</b> (Humetwadi) tribe, whose villages included <b>Halau</b> (near the entrance of Kern River), <b>Loasau</b> (north side), and <b>Sihetal Daal</b> (south shore). The Kern River system — now completely diverted — once created a chain of wetlands stretching from the Sierra foothills to these valley lakes.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Latta 1978</div>`, {maxWidth:380});

// Tulare Lake ghost outline (approximate historical extent in wet years)
L.polygon([
  [36.05,-119.90],[36.12,-119.75],[36.15,-119.55],[36.12,-119.35],
  [36.05,-119.25],[35.95,-119.20],[35.85,-119.25],[35.80,-119.40],
  [35.82,-119.60],[35.88,-119.75],[35.95,-119.85],[36.05,-119.90]
],{color:'#4FC3F7',fillColor:'#4FC3F7',fillOpacity:0.08,weight:1,dashArray:'4,6',
}).addTo(L_groups.sValleyYokuts).bindPopup(`<h4 style="color:#4FC3F7">Pa'ashi (Tulare Lake) — Historical Extent</h4><div style="font-size:12px;color:#ccc">Approximate footprint of the lake in wet years. Up to 100 miles long and 30 miles wide — the largest freshwater lake west of the Mississippi. Fed by the Kings, Kaweah, Tule, and Kern Rivers. Frank Latta wrote in the 1930s that it never stayed still long enough to know how big it really was. Completely drained by 1898. Briefly returned in 2023.</div>`, {maxWidth:350});

// ========== FOOTHILL YOKUTS TRIBES ==========
// Chukchansi — Fresno River foothills (Coarsegold, Oakhurst, O'Neals)
L.polygon([
  [37.25,-119.80],[37.30,-119.65],[37.28,-119.50],[37.20,-119.40],
  [37.10,-119.40],[37.05,-119.50],[37.08,-119.65],[37.15,-119.75],[37.25,-119.80]
],{color:'#795548',fillColor:'#795548',fillOpacity:0.12,weight:1.5,dashArray:'6,4',
}).addTo(L_groups.foothillYokuts).bindPopup(`<h4 style="color:#A1887F">Chukchansi</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Foothill Yokuts · Fresno River foothills (Coarsegold / Oakhurst / O'Neals)</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Chukchansi (spelled "Chuck Chance" by early settlers) lived in the Fresno River foothills above the Heuche. Their <b>Chukchansi dialect</b> is one of only three surviving Yokuts languages, actively taught to tribal members. The <b>Picayune Rancheria of Chukchansi Indians</b> was founded in 1912, terminated, then re-established in 1984. Women were renowned for acorn processing — a ca.1920 photograph shows a Chukchansi woman grinding acorns at bedrock mortars, one of the most iconic images of California indigenous life.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Picayune Rancheria; Latta 1978</div>`, {maxWidth:380});

// Choinimni — Kings River in foothills
L.polygon([
  [36.85,-119.35],[36.90,-119.20],[36.88,-119.05],[36.80,-118.95],
  [36.70,-118.95],[36.65,-119.08],[36.68,-119.22],[36.75,-119.32],[36.85,-119.35]
],{color:'#6D4C41',fillColor:'#6D4C41',fillOpacity:0.12,weight:1.5,dashArray:'6,4',
}).addTo(L_groups.foothillYokuts).bindPopup(`<h4 style="color:#A1887F">Choinimni</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Foothill Yokuts · Kings River foothills</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Choinimni lived along the Kings River in the Sierra foothills. Their main village <b>Tishechu</b> sat on the south side of Kings River at the mouth of Mill Creek. Their dialect (<b>Choinimni</b>) is one of the three surviving Yokuts languages. The <b>Choinumni Tribe</b> (~250 members as of 1990) is governed by a tribal council affiliated with the Choinumni Cultural Association, but has not yet received federal recognition. They celebrate a traditional harvest gathering.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Choinumni Cultural Association</div>`, {maxWidth:350});

// Wukchumni — Kaweah River foothills
L.polygon([
  [36.50,-119.15],[36.55,-119.00],[36.52,-118.85],[36.45,-118.75],
  [36.35,-118.75],[36.30,-118.88],[36.33,-119.02],[36.40,-119.12],[36.50,-119.15]
],{color:'#5D4037',fillColor:'#5D4037',fillOpacity:0.12,weight:1.5,dashArray:'6,4',
}).addTo(L_groups.foothillYokuts).bindPopup(`<h4 style="color:#A1887F">Wukchumni (Wikchamni)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Foothill Yokuts · Kaweah River foothills</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Wukchumni occupied the Kaweah River and adjacent hills in the Sierra foothills. Their territory included areas near modern Exeter and Three Rivers. The <b>Wukchumni Tribe</b> (~300 members as of 1990) holds a spring dance ceremony and is working toward federal recognition. The last fluent speaker of the Wukchumni language, <b>Marie Wilcox</b>, spent years creating a comprehensive Wukchumni dictionary before her passing. The neighboring <b>Yokod</b> tribe held territory south of the Kaweah near Exeter.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Wukchumni Tribe; Latta 1978</div>`, {maxWidth:380});

// Gashowu — Big Dry Creek foothills between San Joaquin and Kings Rivers (Fresno/Clovis)
L.polygon([
  [36.95,-119.65],[37.00,-119.50],[36.98,-119.35],[36.90,-119.25],
  [36.82,-119.28],[36.78,-119.40],[36.82,-119.55],[36.88,-119.62],[36.95,-119.65]
],{color:'#8D6E63',fillColor:'#8D6E63',fillOpacity:0.10,weight:1.5,dashArray:'6,4',
}).addTo(L_groups.foothillYokuts).bindPopup(`<h4 style="color:#A1887F">Gashowu</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Foothill Yokuts · Big Dry Creek (Fresno/Clovis foothills)</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Gashowu held the foothills between the San Joaquin and Kings Rivers, centered around Big Dry Creek — the modern Fresno/Clovis area. Villages included <b>Pohoniu</b> (below Letcher on Big Dry Creek), <b>Yokau</b> (Auberry Valley on Little Dry Creek), and <b>Ochopou</b>. This was transitional territory between the valley floor and the higher foothills.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Latta 1978</div>`, {maxWidth:350});

// Koyete — Tule River (Highway 99 to Porterville)
L.polygon([
  [36.15,-119.10],[36.20,-118.95],[36.18,-118.80],[36.10,-118.72],
  [36.00,-118.72],[35.95,-118.85],[35.98,-119.00],[36.05,-119.08],[36.15,-119.10]
],{color:'#4E342E',fillColor:'#4E342E',fillOpacity:0.10,weight:1.5,dashArray:'6,4',
}).addTo(L_groups.foothillYokuts).bindPopup(`<h4 style="color:#A1887F">Koyete</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Foothill Yokuts · Tule River (Porterville area)</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Koyete occupied the Tule River from roughly Highway 99 to Porterville. Eight villages were recorded by Kroeber, Gayton, and Latta. The <b>Tule River Indian Reservation</b> (est. 1873, 55,356 acres) was established in their territory and today is home to multiple Yokuts and neighboring tribal members. The reservation contains the famous <b>Painted Rock</b> site with the Hairy Man (Mayak datat) pictographs — the only known Bigfoot-family pictograph in western North America.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Tule River Indian Tribe; Latta 1978</div>`, {maxWidth:380});

// ========== YOKUTS NEIGHBOR TERRITORIES ==========
// Interior Miwok — Sierra western slopes, north of Yokuts
L.polygon([
  [38.30,-121.50],[38.35,-121.20],[38.30,-120.80],[38.10,-120.40],
  [37.80,-120.10],[37.50,-119.80],[37.30,-119.60],[37.20,-119.60],
  [37.25,-119.90],[37.35,-120.20],[37.50,-120.50],[37.70,-120.80],
  [37.90,-121.10],[38.10,-121.30],[38.30,-121.50]
],{color:'#66BB6A',fillColor:'#66BB6A',fillOpacity:0.06,weight:1.5,dashArray:'8,6',
}).addTo(L_groups.yokutsNeighbors).bindPopup(`<h4 style="color:#66BB6A">Interior Miwok</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Penutian (Utian-Miwokan) · Sierra Nevada western slopes · north of Yokuts</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Interior Miwok — the largest Miwok group — lived on the western slope of the Sierra Nevada from the Cosumnes River south to the Fresno River. They shared the Yokuts moiety system and mythology. Kroeber noted their myths were essentially Yokuts in character. The <b>Plains Miwok</b> occupied the Delta between the San Joaquin and Sacramento rivers; the <b>Sierra Miwok</b> (Northern, Central, Southern dialects) held the foothills. Clamshell disk currency flowed through Miwok territory, possibly from both the Chumash (via Yokuts) and the Pomo to the north.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Levy 1978</div>`, {maxWidth:380});

// Western Mono (Monache) — upper river reaches in Sierra
L.polygon([
  [37.50,-119.60],[37.55,-119.35],[37.50,-119.10],[37.35,-118.90],
  [37.15,-118.85],[36.95,-118.90],[36.75,-118.95],[36.60,-118.80],
  [36.50,-118.75],[36.45,-118.80],[36.50,-118.95],[36.60,-119.00],
  [36.75,-119.05],[36.95,-119.10],[37.15,-119.15],[37.30,-119.30],
  [37.40,-119.45],[37.50,-119.60]
],{color:'#AB47BC',fillColor:'#AB47BC',fillOpacity:0.06,weight:1.5,dashArray:'8,6',
}).addTo(L_groups.yokutsNeighbors).bindPopup(`<h4 style="color:#AB47BC">Western Mono (Monache)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Uto-Aztecan (Numic) · Upper Sierra river reaches · east of Yokuts</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Western Mono (called <b>Monachi</b> by the Yokuts, meaning unknown) came over the Sierra from the Great Basin. They settled the upper reaches of the San Joaquin, Kings, and other rivers — from Millerton Lake up to Fullers Meadow. Notable for their flexibility: they intermarried freely with Yokuts, adopted the moiety system (but without exogamy — you could marry within your own moiety), and one subgroup (the <b>Entimbich</b>) essentially blended with Yokuts culture. The Yokuts called them <b>Nuta'a</b> ("uplanders"). Their basketry reached extraordinary sophistication, comparable to any in California.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Gifford 1932; ValleyHistory.org</div>`, {maxWidth:380});

// Tubatulabal — Kern River Valley
L.polygon([
  [36.10,-118.70],[36.15,-118.50],[36.10,-118.25],[35.95,-118.10],
  [35.80,-118.05],[35.65,-118.15],[35.55,-118.30],[35.60,-118.50],
  [35.70,-118.60],[35.85,-118.68],[36.00,-118.70],[36.10,-118.70]
],{color:'#EC407A',fillColor:'#EC407A',fillOpacity:0.06,weight:1.5,dashArray:'8,6',
}).addTo(L_groups.yokutsNeighbors).bindPopup(`<h4 style="color:#EC407A">Tubatulabal</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Uto-Aztecan (Tubatulabal isolate) · Kern River Valley · "pine-nut eaters"</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Tubatulabal ("pine-nut eaters") occupied 1,300 square miles of the Kern River Valley in the Sierra Nevada. Three bands: <b>Palagewan</b> (Little Kern/North Fork), <b>Pahkanapul</b> (South Fork to Lake Isabella), and <b>Bankalachi/Toloim</b> (Greenhorn Mountains). Culturally very similar to the Yokuts — acorns, pinon nuts, game. Famous for <b>red pottery</b> and coiled baskets. They participated in cooperative antelope drives with Yokuts and Kawaiisu across the valley floor. In <b>1863</b>, the Keyesville massacre killed 35 Tubatulabal and Mono men. In <b>2023</b>, the tribe received 1,200 acres of ancestral land back in Weldon. They are pursuing federal recognition.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Voegelin 1938; Tubatulabal Tribe website; KGET News 2023</div>`, {maxWidth:400});

// Kawaiisu — Tehachapi Mountains
L.polygon([
  [35.55,-118.55],[35.60,-118.35],[35.55,-118.10],[35.40,-117.95],
  [35.25,-117.95],[35.10,-118.10],[35.08,-118.30],[35.15,-118.45],
  [35.25,-118.55],[35.40,-118.60],[35.55,-118.55]
],{color:'#7E57C2',fillColor:'#7E57C2',fillOpacity:0.06,weight:1.5,dashArray:'8,6',
}).addTo(L_groups.yokutsNeighbors).bindPopup(`<h4 style="color:#7E57C2">Kawaiisu</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Uto-Aztecan (Southern Numic) · Tehachapi Mountains · related to Southern Paiute</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Kawaiisu (self-name: <b>niwi</b>, "person") were mountain people of the Piute, Scodie, and Tehachapi Mountains, living at 1,000-7,500 feet elevation. Related to the Southern Paiute and Chemehuevi, they straddled the boundary between California and Great Basin cultures. They joined with Yokuts and Tubatulabal in massive communal <b>antelope drives</b> across the San Joaquin Valley floor. Their village site <b>Tomo Kahni</b> ("winter home") — a California State Historic Park — sits atop a ridge overlooking Tehachapi Valley. Seven kinds of oak trees grew in their territory, making acorns their primary food. The Kawaiisu are famous for their rock art — petroglyphs and pictographs throughout the southern Sierra.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; CA State Parks; Zigmond 1986</div>`, {maxWidth:400});

// Kitanemuk — Tehachapi Mountains / Tejon
L.polygon([
  [35.15,-118.60],[35.20,-118.40],[35.15,-118.20],[35.05,-118.05],
  [34.90,-118.00],[34.80,-118.10],[34.78,-118.30],[34.85,-118.48],
  [34.95,-118.58],[35.05,-118.62],[35.15,-118.60]
],{color:'#EF5350',fillColor:'#EF5350',fillOpacity:0.06,weight:1.5,dashArray:'8,6',
}).addTo(L_groups.yokutsNeighbors).bindPopup(`<h4 style="color:#EF5350">Kitanemuk</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Uto-Aztecan (Takic) · Tehachapi Mountains / Tejon Pass · 500-1,000 speakers pre-contact</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Kitanemuk lived in the Tehachapi Mountains at the very southern tip of the San Joaquin Valley, along Tejon, Paso, and Caliente Creeks. Their language was Takic — related to Serrano and Cahuilla far to the south. Notably, they did <b>not get along with the Yokuts</b> to the north, one of the few hostile neighbor relationships in this generally peaceful region. Friends with the Chumash and Tubatulabal. Smallpox hit in 1840. Many were taken to Missions San Fernando and San Gabriel by 1800. The modern <b>Tejon Indian Tribe</b> (federally recognized) descends from Kitanemuk, Yokuts, and Chumash. Their Kitanemuic language had not been spoken since 1940 but reclamation began in 2010. A Hard Rock Casino opened on their land in November 2025.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Blackburn & Bean 1978; Tejon Indian Tribe; Latta 1949</div>`, {maxWidth:400});

// Interior Chumash — San Emigdio Mountains / Carrizo Plain (western neighbors)
L.polygon([
  [35.40,-120.30],[35.45,-120.05],[35.40,-119.75],[35.30,-119.55],
  [35.15,-119.50],[35.00,-119.55],[34.90,-119.70],[34.85,-119.90],
  [34.90,-120.10],[35.00,-120.25],[35.15,-120.32],[35.30,-120.35],[35.40,-120.30]
],{color:'#26A69A',fillColor:'#26A69A',fillOpacity:0.06,weight:1.5,dashArray:'8,6',
}).addTo(L_groups.yokutsNeighbors).bindPopup(`<h4 style="color:#26A69A">Interior Chumash (Emigdiano)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Hokan (Chumashan) · San Emigdio Mountains / Carrizo Plain · western Yokuts neighbors</div><div style="font-size:12px;color:#ccc;line-height:1.5">The interior Chumash — specifically the <b>Emigdiano</b> band — occupied the San Emigdio Mountains and drainages flowing north into the San Joaquin Valley, reaching as far as Castac Lake and Grapevine Canyon. Major Yokuts trading partners: Chumash brought <b>shells, abalone, and sea products</b> east across the Coast Range; Yokuts sent <b>obsidian, salt, antelope/elk skins, and herbs</b> west. This was one of the most important trade corridors in California. The Chumash also shared the <b>Painted Rock at Carrizo Plain</b> with the Yokuts and Salinan — a sacred site with 3,000+ years of pictographs from all three groups.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Hudson & Blackburn 1984; BLM Carrizo Plain</div>`, {maxWidth:400});

// ========== YOKUTS-CHUMASH TRADE ROUTE ==========
L.polyline([
  [35.90,-119.65],[35.75,-119.80],[35.60,-119.95],[35.45,-120.10],
  [35.30,-120.20],[35.15,-120.30],[35.00,-120.35],[34.85,-120.30],
  [34.72,-120.25],[34.60,-120.10],[34.50,-119.95],[34.42,-119.72]
],{color:'#26A69A',weight:2.5,opacity:0.7,dashArray:'10,8',
}).addTo(L_groups.yokutsNeighbors).bindPopup(`<h4 style="color:#26A69A">🛤️ Yokuts–Chumash Trade Route</h4><div style="font-size:12px;color:#ccc;line-height:1.5">A major trade corridor crossing the Coast Range between the San Joaquin Valley and the Santa Barbara Channel coast. Yokuts peoples sent obsidian, salt, antelope and elk skins, herbs, and freshwater products west. Chumash sent shells (used as currency), abalone, dried sea urchins, starfish, and soapstone east. This exchange made the Yokuts central players in California's shell-bead currency economy. The route passed through Salinan and interior Chumash territory via mountain passes.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; King 1976; Encyclopedia.com</div>`, {maxWidth:380});

// ========== YOKUTS-MONO TRANS-SIERRA ROUTE ==========
L.polyline([
  [36.80,-119.20],[36.85,-119.05],[36.90,-118.85],[36.95,-118.65],
  [37.00,-118.50],[37.05,-118.35],[37.10,-118.25],[37.15,-118.15]
],{color:'#AB47BC',weight:2.5,opacity:0.7,dashArray:'10,8',
}).addTo(L_groups.yokutsNeighbors).bindPopup(`<h4 style="color:#AB47BC">🛤️ Trans-Sierra Trade Route (Yokuts–Mono–Paiute)</h4><div style="font-size:12px;color:#ccc;line-height:1.5">Trade routes crossed the Sierra Nevada through multiple passes, connecting the Yokuts of the San Joaquin Valley to the Western Mono in the foothills and ultimately to the Owens Valley Paiute on the eastern Sierra slope. The Mono served as intermediaries, carrying valley goods (shells, tule products) east and bringing obsidian, pine nuts, and Great Basin goods west. The Mono called the Yokuts <b>Lisnayu-k</b> and the Yokuts called them <b>Monachi</b> or <b>Nuta'a</b> (uplanders). Summer was the primary trading season when mountain passes were clear.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Gifford 1932</div>`, {maxWidth:380});

// =====================================================
