// ========== COASTAL POMO & RUSSIAN RIVER — Phase 2 ==========
// Sources: Barrett (1908), Kroeber (1925), Stewart (1940), Lightfoot (2005/2018),
// Walker (2020), Oswalt (1964), McLendon & Oswalt (1978), Dry Creek Rancheria,
// Kashia Band, Cloverdale Rancheria, Federated Indians of Graton Rancheria

(function(){

// Reuse background pane from Phase 1 if available, else create
if (!map.getPane('pomoBackgroundPane')) {
  map.createPane('pomoBackgroundPane');
  map.getPane('pomoBackgroundPane').style.zIndex = 350;
}

const COLORS = {
  kashaya: '#E57373',    // coastal red
  southern: '#FFB74D',   // warm amber
  central: '#81C784',    // green
  northern: '#64B5F6',   // blue
  water: '#26C6DA',      // cyan
  lost: '#EF5350',       // red
  sacred: '#CE93D8',     // lavender
  rancheria: '#A5D6A7',  // green
  russian: '#BCAAA4'     // muted taupe — colonial context
};

// ========== RUSSIAN RIVER — THE GREAT WATERWAY ==========
// Southern Pomo: Ashokawna (ʔaš:oʔkʰawna) = "east water place" or Bidapte = "big river"
// Also called Shabaikai = "long snake"
const russianRiver = [
  [39.35, -123.34],[39.30, -123.30],[39.25, -123.22],[39.20, -123.20],
  [39.17, -123.20],[39.14, -123.20],[39.10, -123.20],[39.05, -123.21],
  [39.00, -123.18],[38.95, -123.14],[38.90, -123.10],[38.87, -123.05],
  [38.82, -122.95],[38.78, -122.90],[38.74, -122.87],[38.72, -122.85],
  [38.70, -122.87],[38.66, -122.88],[38.62, -122.90],[38.57, -122.93],
  [38.52, -122.97],[38.50, -123.00],[38.48, -123.04],[38.46, -123.06],
  [38.45, -123.10],[38.44, -123.13]
];
L.polyline(russianRiver, {
  color: COLORS.water, weight: 4, opacity: 0.85, dashArray: '10,5',
  pane:'pomoBackgroundPane'
}).bindPopup(`<div style="max-width:360px;font-family:'Crimson Text',serif">
  <h3 style="color:#26C6DA;margin:0 0 8px">Russian River — Ashokawna / Bidapte</h3>
  <p style="font-size:13px;color:#B0BEC5"><strong>"East Water Place"</strong> / <strong>"Big River"</strong> (Southern Pomo)</p>
  <p style="font-size:13px;color:#CFD8DC">The 110-mile lifeline of the Pomo world. Rising near Willits, flowing south through Ukiah and Hopland, turning west past Healdsburg to meet the Pacific at Jenner. The <strong>heart of Pomo territory</strong> — more villages lined this river than any other feature in their world. Barrett (1908) recorded dozens of named settlements along its banks.</p>
  <p style="font-size:13px;color:#CFD8DC">The Pomo called it <strong>Shabaikai</strong> ("long snake") and <strong>Ashokawna</strong> ("east water place"). Before European contact, the river was seasonal — drying to pools in summer where salmon survived until the rains. Settlers described it as "swamplike with many side riverlets, bounded by wetlands and riparian forest."</p>
  <p style="font-size:13px;color:#EF5350">In <strong>1908</strong>, the Eel River was diverted into the Russian River headwaters via the Potter Valley Project, fundamentally altering its hydrology. The river now flows year-round — ecologically transformed.</p>
  <p style="font-size:11px;color:#78909C;margin-top:8px">Sources: Barrett 1908; Russian Riverkeeper; Wikipedia</p>
</div>`).addTo(L_groups.pomoCoastalWater);

// Major tributaries
const tributaries = [
  {coords:[[38.72,-122.92],[38.68,-122.92],[38.64,-122.90],[38.60,-122.90]], name:"Dry Creek", desc:"Major Russian River tributary flowing from NW Sonoma County through the Alexander Valley. <strong>Dry Creek Rancheria</strong> (Mihilakawna & Makahmo Southern Pomo) sits near its confluence with the Russian River. <strong>Warm Springs Dam</strong> (1983) created Lake Sonoma, flooding 86,000 acres of ancestral Pomo lands including the original Dry Creek habitation area.", color:COLORS.water},
  {coords:[[38.50,-122.90],[38.48,-122.88],[38.46,-122.82],[38.44,-122.78],[38.42,-122.75]], name:"Laguna de Santa Rosa", desc:"A 22-mile wetland channel covering <strong>30,000+ acres</strong> from Cotati to Forestville — the largest freshwater wetland complex on the Northern California coast. Home to 200+ bird species, rare salmon, and a mosaic of marshes, riparian forest, oak woodland, and grasslands. The Southern Pomo village of <strong>Batiklechawi</strong> (Sebastopol) sat at its head. Much of the Laguna's wetlands have been degraded by agriculture and urban development.", color:'#80DEEA'},
  {coords:[[38.62,-122.78],[38.60,-122.82],[38.58,-122.86],[38.56,-122.90]], name:"Mark West Creek", desc:"Where the Russian River turns west. Mark West Creek and the Laguna de Santa Rosa form the major southern tributary system. The confluence area was Southern Pomo territory — villages sat along both waterways.", color:COLORS.water},
  {coords:[[38.94,-123.28],[38.90,-123.22],[38.86,-123.15],[38.82,-123.08],[38.78,-122.98]], name:"Navarro River", desc:"Flows through Anderson Valley — Northern Pomo territory. Villages of <strong>Lemkolil</strong> (near Boonville), <strong>Tabate</strong> (near Philo), and <strong>Katuli</strong> (near Navarro) lined its banks. Anderson Valley has been occupied for 5,000+ years (Mill Creek archaeological site).", color:COLORS.water},
  {coords:[[38.82,-123.46],[38.80,-123.40],[38.76,-123.35],[38.72,-123.28]], name:"Gualala River", desc:"Northern boundary of Kashaya Pomo territory. The name 'Gualala' derives from the Kashaya Pomo word <strong>awalali</strong> meaning 'where the waters meet.' Kashaya and Central Pomo villages sat along its banks. The river flows to the Pacific through a dramatic coastal canyon.", color:COLORS.water}
];
tributaries.forEach(t => {
  L.polyline(t.coords, {
    color: t.color, weight: 2.5, opacity: 0.7, dashArray: '6,4',
    pane:'pomoBackgroundPane'
  }).bindPopup(`<div style="max-width:320px;font-family:'Crimson Text',serif">
    <h3 style="color:${t.color};margin:0 0 6px">${t.name}</h3>
    <p style="font-size:13px;color:#CFD8DC">${t.desc}</p>
  </div>`).addTo(L_groups.pomoCoastalWater);
});


// ========== VILLAGES — Russian River & Coast ==========
const villages = [
  // === KASHAYA POMO (Southwestern) — Sonoma Coast ===
  {lat:38.514, lng:-123.244, name:"Metini", sub:"Kashaya Pomo — Principal Village", desc:"The central village of the Kashaya Pomo, located near what became Fort Ross. Metini was the site of an <strong>assembly house</strong> where the Kashaya gathered for ceremonial and social events. Archaeological excavations by UC Berkeley (Kent Lightfoot, 1998–2018) revealed a dance house pit, extensive middens with obsidian, chert, shell, and glass artifacts. The Kashaya called the site <strong>Mad shui nui</strong>. In 1812, the Russians negotiated for a parcel of land here to build Fort Ross — beginning 30 years of Kashaya-Russian coexistence.", color:COLORS.kashaya, src:"Barrett 1908; Lightfoot 2005/2018; Fort Ross SHP"},
  {lat:38.440, lng:-123.117, name:"Jenner — River Mouth Villages", sub:"Kashaya/Southern Pomo — Seasonal", desc:"The Russian River mouth at Jenner was a critical <strong>seasonal gathering area</strong> where Kashaya from the coast met Southern Pomo from upriver. Rich in salmon, shellfish, marine mammals, and seaweed. The estuary formed a lagoon in summer — a natural fish trap. Dried seaweed and kelp were highly prized trade goods carried inland.", color:COLORS.kashaya, src:"Barrett 1908; Kroeber 1925"},
  {lat:38.568, lng:-123.318, name:"Danaga", sub:"Kashaya Pomo — Coastal", desc:"A Kashaya coastal village near what is now Salt Point State Park. The Sonoma coastline was the Kashaya's summer territory — families moved to the coast for shellfish, abalone, seaweed, and sea mammal hunting, returning inland for acorn season in fall.", color:COLORS.kashaya, src:"Barrett 1908; Kashia Coastal Reserve"},
  {lat:38.670, lng:-123.410, name:"Gualala River Villages", sub:"Kashaya Pomo — Northern Boundary", desc:"Kashaya settlements near the Gualala River — the northern extent of their territory. The name <strong>Gualala</strong> derives from the Kashaya word <strong>awalali</strong> ('where the waters meet'). Trade with Central Pomo neighbors to the north occurred here.", color:COLORS.kashaya, src:"Barrett 1908; Stewart 1940"},

  // === SOUTHERN POMO — Santa Rosa Plain, Russian River lower valley ===
  {lat:38.420, lng:-122.720, name:"Batiklechawi", sub:"Southern Pomo — Head Village", desc:"Located at Sebastopol, at the head of the <strong>Laguna de Santa Rosa</strong>. An important village and probably the head of a political district. The Laguna — a 30,000-acre wetland — was the richest resource area in Southern Pomo territory. Southern Pomo women gathered sedge root along its banks for basket weaving.", color:COLORS.southern, src:"Barrett 1908; Oswalt field notes"},
  {lat:38.448, lng:-122.712, name:"Hukabetawi", sub:"Southern Pomo — Santa Rosa", desc:"A village near present-day Santa Rosa city and probably the head of a community. The Santa Rosa Plain was densely settled by Southern Pomo — open grasslands with abundant seed plants and easy access to oak woodlands for acorn gathering.", color:COLORS.southern, src:"Barrett 1908"},
  {lat:38.612, lng:-122.878, name:"Ossokowi", sub:"Southern Pomo — Russian River", desc:"A village and center of a community on the Russian River extending from the mouth of Elk Creek halfway up to Geyserville. The Southern Pomo name for the Russian River — <strong>Ashokawna</strong> ('east water place') — reflects the river's importance in their world.", color:COLORS.southern, src:"Barrett 1908"},
  {lat:38.680, lng:-122.905, name:"Makahmo", sub:"Southern Pomo — Dry Creek/Sulphur Creek", desc:"A village on the Russian River drainage at the mouth of Sulphur Creek. The <strong>Makahmo</strong> and <strong>Mihilakawna</strong> peoples of the Dry Creek area are the ancestors of today's <strong>Dry Creek Rancheria Band of Pomo Indians</strong>. Settlement here was evident by 500 CE.", color:COLORS.southern, src:"Barrett 1908; Dry Creek Rancheria"},
  {lat:38.730, lng:-122.920, name:"Kale (Cloverdale)", sub:"Southern Pomo", desc:"Southern Pomo settlements in the Cloverdale area, at the upper end of Southern Pomo territory where the language zone merged with Central Pomo to the north. <strong>Elsie Allen</strong> (1899–1990), the great Pomo basket weaver who defied the tradition of burying baskets with the dead to preserve the art for future generations, was born here. A school in Santa Rosa bears her name.", color:COLORS.southern, src:"Barrett 1908; Cloverdale Rancheria Wikipedia"},

  // === CENTRAL POMO — Ukiah Valley, Hopland, coast ===
  {lat:39.000, lng:-123.175, name:"Yokaia (Yō'kaia)", sub:"Central Pomo — Ukiah Valley", desc:"From <strong>yō</strong> (south) + <strong>ka'ia</strong> (valley). The principal Central Pomo community of the Ukiah Valley — the name 'Ukiah' itself derives from <strong>Yokaia</strong>. Barrett (1908) recorded this as the Beatty/Cox Rancheria, about 6 miles south of Ukiah, with 19 houses and ~80 inhabitants who had acquired 145 acres of land. The <strong>Yokayo Rancho</strong>, an old Mexican grant of 8 square leagues, took its name from this village.", color:COLORS.central, src:"Barrett 1908; Kroeber 1925"},
  {lat:38.975, lng:-123.115, name:"Shanel (Sho-Ka-Wah)", sub:"Central Pomo — Hopland Valley", desc:"The main village of the Hopland Band of Pomo Indians, with a pre-contact population of <strong>~1,500</strong>. Located near the mouth of McDowell and Feliz Creeks in the Sanel (Hopland) Valley. The people called themselves <strong>Sho-Ka-Wah</strong>. Barrett recorded the Hopland Rancheria in 1908 with 16 houses and ~100 inhabitants, including refugees from other villages. The <strong>Rancho de Senel</strong> was a Mexican land grant obtained by Fernando Feliz in 1844.", color:COLORS.central, src:"Barrett 1908; Hopland Band of Pomo Indians"},
  {lat:38.910, lng:-123.580, name:"Point Arena Villages (Bokeya)", sub:"Central Pomo — Coastal", desc:"Coastal Central Pomo settlements near Point Arena and Manchester. The <strong>Bokeya</strong> ('people of the west') lived here, maintaining seasonal camps along the coast for marine resources. The <strong>Manchester Band of Pomo Indians</strong> (federally recognized) descends from these coastal communities. Point Arena was a major seaweed and abalone gathering area.", color:COLORS.central, src:"Barrett 1908; Manchester Band; Stewart 1940"},

  // === NORTHERN POMO — Potter Valley, Redwood Valley, Anderson Valley, coast ===
  {lat:39.150, lng:-123.200, name:"Katca (Redwood Valley)", sub:"Northern Pomo", desc:"Northern Pomo village in Redwood Valley, north of Calpella. The <strong>Redwood Valley Little River Band of Pomo Indians</strong> traces ancestry to peoples who lived along the West Fork of the Russian River for thousands of years. The rancheria was established in 1908 for 'Homeless Indians,' terminated in 1958 under the California Rancheria Termination Act, then restored in 1983 after the <strong>Tillie Hardwick</strong> lawsuit.", color:COLORS.northern, src:"Barrett 1908; Redwood Valley Rancheria"},
  {lat:39.15, lng:-123.09, name:"Ballo Kai Pomo (Potter Valley)", sub:"Northern Pomo — 'Oat Valley People'", desc:"<strong>'Oat Valley People'</strong> — Northern Pomo of Potter Valley, where the Eel River diversion enters the Russian River watershed. The <strong>Potter Valley Tribe</strong> (federally recognized) participates actively in decisions about the Potter Valley Project decommissioning. Their water quality monitoring protects both the Eel and Russian River systems.", color:COLORS.northern, src:"Powell 1891; Barrett 1908; Potter Valley Tribe"},
  {lat:39.028, lng:-123.475, name:"Komli (Ukiah Coast)", sub:"Northern Pomo — Big River/Fort Bragg", desc:"Northern Pomo villages near the Mendocino coast. <strong>Buldam</strong> sat at the mouth of Big River, <strong>Kadiu</strong> at the mouth of the Noyo River (Fort Bragg). These coastal Northern Pomo gathered abalone, mussels, seaweed, and dried fish for trade with inland communities. The <strong>Noyo River Indian Community</strong> maintains presence near Fort Bragg.", color:COLORS.northern, src:"Barrett 1908; Noyo River Indian Community"},
  {lat:39.000, lng:-123.370, name:"Lemkolil (Anderson Valley)", sub:"Northern Pomo — Boonville", desc:"On the northeast bank of Anderson Creek, 1 mile downstream from Boonville. Barrett recorded Northern Pomo villages throughout Anderson Valley: <strong>Tabate</strong> near Philo, <strong>Katuuli</strong> near Navarro. The Mill Creek archaeological site shows continuous occupation for nearly 5,000 years. Anderson Valley was an important route connecting the Russian River interior to the Mendocino coast.", color:COLORS.northern, src:"Barrett 1908; Anderson Valley Historical Society"}
];

villages.forEach(v => {
  L.circleMarker([v.lat, v.lng], {
    radius: 7, fillColor: v.color, color: '#3E2723', weight: 1.5,
    fillOpacity: 0.85, pane:'markerPane'
  }).bindPopup(`<div style="max-width:320px;font-family:'Crimson Text',serif">
    <h3 style="color:${v.color};margin:0 0 4px">${v.name}</h3>
    <p style="font-size:12px;color:#FFAB91;margin:0 0 6px">${v.sub}</p>
    <p style="font-size:13px;color:#CFD8DC">${v.desc}</p>
    <p style="font-size:11px;color:#78909C;margin-top:8px">Sources: ${v.src}</p>
  </div>`).addTo(L_groups.pomoCoastalVillages);
});


// ========== SACRED & SIGNIFICANT SITES ==========
const sacred = [
  {lat:38.515, lng:-123.243, name:"Fort Ross — Metini Crossing", sub:"Russian-Kashaya Contact Site (1812–1841)", desc:"The Kashaya called the Russians <strong>'undersea people'</strong> because their ships appeared to rise from the horizon. In 1812, Ivan Kuskov negotiated with the Kashaya for a 1×2 mile parcel. For 30 years, a tri-cultural community — Russian, Aleut, and Kashaya — coexisted here. The Kashaya adapted Russian glass into their chipped-stone toolkit, creating flake tools from bottle glass using techniques honed over centuries on obsidian. The Russians departed in 1841. Fort Ross State Historic Park now preserves this remarkable story of cultural encounter.", color:COLORS.russian, src:"Lightfoot 2005; Fort Ross SHP; Kashia Band"},
  {lat:38.347, lng:-122.570, name:"Tolay Lake", sub:"Coast Miwok / Southern Pomo — Ceremonial Gathering Place", desc:"A sacred <strong>ceremonial gathering and healing place</strong> shared by Coast Miwok and Southern Pomo peoples. Over 1,000 charmstones and numerous arrowheads have been found here. The 'broken bridge' site was dated to <strong>~3280 BCE</strong> — the oldest documented habitation in the valley (Skaggs Phase). Now Tolay Lake Regional Park (Petaluma). Obsidian from Mount Konocti in Lake County has been found here — evidence of long-distance Pomo trade networks.", color:COLORS.sacred, src:"Pomo Wikipedia; Sonoma County Parks; Greg Sarris"},
  {lat:38.510, lng:-123.250, name:"Kashia Coastal Reserve", sub:"700 Acres Returned (2015)", desc:"In 2015, rancher Bill Richardson gifted his 700-acre family farm to the Kashaya Pomo — the first coastal land the tribe had owned since being displaced in 1915. Tribal chairman Reno Franklin said: <em>'We have not had unrestricted coastal access since, being forced to ask others for permission to access a coast that we had used for 12,500 years. Today, we righted that wrong.'</em> The reserve was funded by Sonoma County ($2.9M), the State of California, and private foundations.", color:'#A5D6A7', src:"Kashia Coastal Reserve; Trust for Public Land 2015"}
];
sacred.forEach(s => {
  L.circleMarker([s.lat, s.lng], {
    radius: 9, fillColor: s.color, color: '#4A148C', weight: 2,
    fillOpacity: 0.75, pane:'markerPane'
  }).bindPopup(`<div style="max-width:340px;font-family:'Crimson Text',serif">
    <h3 style="color:${s.color};margin:0 0 6px">${s.name}</h3>
    <p style="font-size:12px;color:#FFAB91;margin:0 0 6px">${s.sub}</p>
    <p style="font-size:13px;color:#CFD8DC">${s.desc}</p>
    <p style="font-size:11px;color:#78909C;margin-top:8px">Sources: ${s.src}</p>
  </div>`).addTo(L_groups.pomoCoastalSacred);
});


// ========== LOST WATERS & ENVIRONMENTAL DESTRUCTION ==========
const lostWaters = [
  {lat:38.78, lng:-122.90, name:"Lake Sonoma — Flooded Pomo Homeland", desc:"<strong>Warm Springs Dam</strong> (1983) created Lake Sonoma, flooding the original Dry Creek Pomo habitation area — <strong>86,000 acres</strong> of ancestral lands lost. Army Corps of Engineers reports document the scale of displacement. The original Dry Creek village sites now lie beneath the reservoir. Cultural mitigation efforts in 2013 granted the tribe a 27-acre lease for cultural activities downstream of the dam.", color:COLORS.lost, src:"Dry Creek Rancheria; Army Corps of Engineers"},
  {lat:39.20, lng:-123.18, name:"Potter Valley Diversion — Eel River Captured", desc:"Since <strong>1908</strong>, the Potter Valley Project has diverted water from the Eel River into the Russian River headwaters. Scott Dam (1922) created Lake Pillsbury, blocking salmon migration. The diversion fundamentally altered both river systems — the Russian River now flows year-round (it was naturally seasonal), while the Eel River lost critical summer flows. In <strong>2025</strong>, a landmark MOU transferred PG&E's water rights to the <strong>Round Valley Indian Tribes</strong> — an extraordinary case of indigenous water sovereignty.", color:COLORS.lost, src:"Potter Valley Project Wikipedia; PG&E; Round Valley Indian Tribes"},
  {lat:38.44, lng:-122.75, name:"Laguna de Santa Rosa — Degraded Wetlands", desc:"Once a pristine 30,000-acre wetland mosaic — the largest freshwater wetland on the Northern California coast. The Southern Pomo village of <strong>Batiklechawi</strong> sat at its head. Urban development from Santa Rosa, agricultural runoff, and invasive species have severely degraded this ecosystem. The Laguna still supports 200+ bird species but is a fraction of its former ecological richness.", color:COLORS.lost, src:"Laguna de Santa Rosa Foundation; SFEI Historical Ecology"},
  {lat:38.68, lng:-122.92, name:"Dry Creek — Original Pomo Lands Inundated", desc:"The Dry Creek valley was <strong>Mihilakawna and Makahmo</strong> Southern Pomo territory for 5,000+ years. In the mid-1800s, 40 new settlers claimed 86,000 acres of Pomo land. The tribe was left with 75 steep acres of rancheria. Then Warm Springs Dam flooded even their original habitation areas. The tribe now operates cultural programs on leased land downstream.", color:COLORS.lost, src:"Dry Creek Rancheria; Army Corps of Engineers"},
  {lat:38.83, lng:-122.77, name:"The Geysers — Sacred Springs Industrialized", desc:"<strong>Big Sulphur Creek</strong> feeds into the world's largest complex of geothermal power plants — <strong>The Geysers</strong>. This area was sacred to both Southern Pomo and Wappo peoples. Hot springs and fumaroles were places of spiritual power and healing. Now 22 geothermal plants generate ~725 MW of electricity. Treated wastewater from Santa Rosa and Lake County is injected underground to maintain steam production.", color:COLORS.lost, src:"The Geysers; Sonoma County"}
];
lostWaters.forEach(lw => {
  L.circleMarker([lw.lat, lw.lng], {
    radius: 8, fillColor: lw.color, color: '#B71C1C', weight: 2,
    fillOpacity: 0.7, dashArray: '4,3', pane:'markerPane'
  }).bindPopup(`<div style="max-width:340px;font-family:'Crimson Text',serif">
    <h3 style="color:${lw.color};margin:0 0 6px">${lw.name}</h3>
    <p style="font-size:13px;color:#CFD8DC">${lw.desc}</p>
    <p style="font-size:11px;color:#78909C;margin-top:8px">Sources: ${lw.src}</p>
  </div>`).addTo(L_groups.pomoCoastalLost);
});


// ========== MODERN RANCHERIAS ==========
const rancherias = [
  {lat:38.534, lng:-123.170, name:"Stewarts Point Rancheria (Kashia Band)", desc:"Home of the <strong>Kashia Band of Pomo Indians</strong> — the only Pomo group to live on the coast. ~1,000 members. Established on the property of Charles Haupt, who married a Kashaya woman, in the 1870s. The <strong>Kashaya language</strong> has more speakers than any other Pomo language (10+ fluent as of 2011). The roundhouse at Stewarts Point is still used for ceremonies."},
  {lat:38.498, lng:-122.780, name:"Federated Indians of Graton Rancheria", desc:"A combined tribe of <strong>Coast Miwok and Southern Pomo</strong> peoples. ~1,300 members. Restored to federal recognition in 2000 after termination. The name honors the town of Graton in west Sonoma County. Operates cultural and language programs for both Coast Miwok and Southern Pomo traditions."},
  {lat:38.690, lng:-122.907, name:"Dry Creek Rancheria", desc:"<strong>Dry Creek Rancheria Band of Pomo Indians</strong> — descendants of the Mihilakawna and Makahmo Southern Pomo. 900+ members. 75 acres near Geyserville — a remnant of 86,000 acres. Operates River Rock Casino. Active <strong>Southern Pomo language restoration</strong> program with Dr. Neil Alexander Walker (hired 2011). In 2013, secured 27-acre cultural lease at Lake Sonoma."},
  {lat:38.795, lng:-123.015, name:"Cloverdale Rancheria", desc:"Community of Southern Pomo Indians. Birthplace of <strong>Elsie Allen</strong> (1899–1990), one of the most celebrated Pomo basket weavers. Her mother Annie Burke was Cloverdale Pomo. Elsie Allen High School in Santa Rosa bears her name. In 1994, Caltrans forced the tribe to sell land for a US-101 bypass that ran through the middle of their reservation."},
  {lat:38.760, lng:-122.830, name:"Lytton Rancheria", desc:"Located near Windsor. <strong>Lytton Rancheria of California</strong> — Pomo Indians. Terminated in 1961, restored in 1991. One of the tribes whose federal recognition was restored by the landmark <strong>Tillie Hardwick v. United States</strong> (1983) lawsuit."},
  {lat:38.975, lng:-123.120, name:"Hopland Rancheria (Sho-Ka-Wah)", desc:"<strong>Hopland Band of Pomo Indians</strong> — Central Pomo. Their ancestral village Shanel had ~1,500 people. The Sho-Ka-Wah people have lived in Hopland Valley 'since the beginning of time.' The rancheria sits on land where Barrett recorded 16 houses and ~100 people in 1908."},
  {lat:39.045, lng:-123.195, name:"Guidiville Rancheria", desc:"Near Talmage, outside Ukiah. Central Pomo. One of the small rancherias established in the early 1900s for displaced Pomo families."},
  {lat:39.000, lng:-123.215, name:"Pinoleville Pomo Nation", desc:"<strong>Pinoleville Pomo Nation</strong> — located in Ukiah. Central/Northern Pomo. 500+ members. Active in environmental and cultural preservation, including Russian River watershed protection."},
  {lat:39.160, lng:-123.205, name:"Redwood Valley Rancheria", desc:"<strong>Redwood Valley Little River Band of Pomo Indians</strong> — Northern Pomo. 159 acres in trust. Ancestors lived along the West Fork of the Russian River for thousands of years. Terminated 1958, restored 1983 (Tillie Hardwick). Building an Inter-Tribal Elder Village in Ukiah."},
  {lat:38.918, lng:-123.573, name:"Manchester-Point Arena Rancheria", desc:"<strong>Manchester Band of Pomo Indians</strong> — coastal Central Pomo. Near Point Arena on the Mendocino coast. Maintains connection to ancestral coastal gathering areas."}
];
rancherias.forEach(r => {
  L.circleMarker([r.lat, r.lng], {
    radius: 5, fillColor: COLORS.rancheria, color: '#2E7D32', weight: 1.5,
    fillOpacity: 0.8, pane:'markerPane'
  }).bindPopup(`<div style="max-width:280px;font-family:'Crimson Text',serif">
    <h3 style="color:#A5D6A7;margin:0 0 6px">${r.name}</h3>
    <p style="font-size:12px;color:#81C784;margin:0 0 4px">Modern Rancheria (present day)</p>
    <p style="font-size:13px;color:#CFD8DC">${r.desc}</p>
  </div>`).addTo(L_groups.pomoCoastalVillages);
});


// ========== TERRITORY POLYGONS ==========
// Kashaya territory — Gualala to Duncan's Point, coast to Dry Creek confluence
L.polygon([
  [38.77, -123.55],[38.70, -123.48],[38.55, -123.35],[38.44, -123.15],
  [38.42, -123.00],[38.45, -122.90],[38.55, -122.85],[38.65, -122.90],
  [38.72, -123.00],[38.77, -123.15],[38.82, -123.45],[38.77, -123.55]
], {
  color: COLORS.kashaya, weight: 2, opacity: 0.5, fillColor: COLORS.kashaya,
  fillOpacity: 0.06, dashArray: '6,4', pane:'pomoBackgroundPane'
}).bindPopup(`<div style="max-width:300px;font-family:'Crimson Text',serif">
  <h3 style="color:${COLORS.kashaya};margin:0 0 6px">Kashaya Pomo Territory</h3>
  <p style="font-size:13px;color:#CFD8DC">"People From the Top of the Land" — the only Pomo group to live on the coast. Territory from the Gualala River south to Duncan's Point, inland to the Dry Creek confluence. ~1,500 people pre-contact. The Kashaya experienced less acculturation pressure than other Pomo groups due to their relatively cooperative relationship with the Russians (1812–1841).</p>
</div>`).addTo(L_groups.pomoCoastalVillages);

// Southern Pomo territory — Santa Rosa Plain to Cloverdale
L.polygon([
  [38.82, -123.00],[38.78, -122.82],[38.72, -122.68],[38.60, -122.65],
  [38.42, -122.68],[38.35, -122.80],[38.38, -122.95],[38.45, -123.10],
  [38.55, -123.10],[38.65, -123.05],[38.75, -123.00],[38.82, -123.00]
], {
  color: COLORS.southern, weight: 2, opacity: 0.5, fillColor: COLORS.southern,
  fillOpacity: 0.06, dashArray: '6,4', pane:'pomoBackgroundPane'
}).bindPopup(`<div style="max-width:300px;font-family:'Crimson Text',serif">
  <h3 style="color:${COLORS.southern};margin:0 0 6px">Southern Pomo Territory</h3>
  <p style="font-size:13px;color:#CFD8DC">Also called <strong>Gallinomero</strong>. Occupied the lower Russian River from Santa Rosa and Sebastopol north to Cloverdale, including the Dry Creek and Alexander Valleys. The Southern Pomo were the first Pomo to suffer Spanish and then American invasion — many were enslaved at Mission San Rafael (1821–1828). Southern Pomo preserves the greatest number of Proto-Pomo syllables of any Pomo language.</p>
</div>`).addTo(L_groups.pomoCoastalVillages);

// Central Pomo territory — Ukiah to coast
L.polygon([
  [39.10, -123.50],[38.92, -123.60],[38.82, -123.40],[38.82, -123.10],
  [38.88, -122.98],[38.94, -122.95],[39.05, -123.05],[39.12, -123.15],
  [39.15, -123.30],[39.10, -123.50]
], {
  color: COLORS.central, weight: 2, opacity: 0.5, fillColor: COLORS.central,
  fillOpacity: 0.06, dashArray: '6,4', pane:'pomoBackgroundPane'
}).bindPopup(`<div style="max-width:300px;font-family:'Crimson Text',serif">
  <h3 style="color:${COLORS.central};margin:0 0 6px">Central Pomo Territory</h3>
  <p style="font-size:13px;color:#CFD8DC">Settlements along the Russian River (Ukiah Valley, Hopland Valley), coastal (Manchester, Point Arena, Gualala), and between (Yorkville, Anderson Valley). The <strong>Sho-Ka-Wah</strong> of Hopland were the largest Central Pomo community (~1,500 at Shanel village). Central Pomo has several fluent speakers and active language revitalization programs.</p>
</div>`).addTo(L_groups.pomoCoastalVillages);

// Northern Pomo territory — Redwood Valley to coast
L.polygon([
  [39.30, -123.50],[39.25, -123.20],[39.15, -123.00],[39.05, -123.00],
  [39.00, -123.10],[38.95, -123.30],[38.95, -123.50],[39.10, -123.55],
  [39.20, -123.55],[39.30, -123.50]
], {
  color: COLORS.northern, weight: 2, opacity: 0.5, fillColor: COLORS.northern,
  fillOpacity: 0.06, dashArray: '6,4', pane:'pomoBackgroundPane'
}).bindPopup(`<div style="max-width:300px;font-family:'Crimson Text',serif">
  <h3 style="color:${COLORS.northern};margin:0 0 6px">Northern Pomo Territory</h3>
  <p style="font-size:13px;color:#CFD8DC">Redwood Valley, Potter Valley, coast near Fort Bragg and the Noyo River, and Anderson Valley (Boonville, Philo, Navarro). The <strong>'Oat Valley People'</strong> (Ballo Kai Pomo) of Potter Valley are now central to decisions about the Eel River diversion. Northern Pomo is critically endangered — last fluent speakers as of 2011.</p>
</div>`).addTo(L_groups.pomoCoastalVillages);


})();
