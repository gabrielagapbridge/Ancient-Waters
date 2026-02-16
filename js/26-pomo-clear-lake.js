// ========== POMO & CLEAR LAKE — Phase 1: Lake Country ==========
// Sources: Barrett (1908), Kroeber (1925), Loeb (1926), Stewart (1940),
// McLendon & Lowy (1978), Heizer (1953/1973), Parker (1994), Richerson (2008)

(function(){

// Create a custom pane for background polygons (territory, lake outline)
// so they render below markers and don't intercept clicks
if (!map.getPane('pomoBackgroundPane')) {
  map.createPane('pomoBackgroundPane');
  map.getPane('pomoBackgroundPane').style.zIndex = 350; // below overlayPane (400) and markerPane (600)
}

const POMO_COLORS = {
  village: '#8D6E63',    // warm brown
  sacred: '#CE93D8',     // lavender
  water: '#4FC3F7',      // clear blue
  lost: '#EF5350',       // red — what was destroyed
  rockart: '#FFB74D',    // amber
  massacre: '#B71C1C',   // dark red
  island: '#A1887F'      // muted brown
};

// ========== CLEAR LAKE ITSELF ==========
// Clear Lake — oldest lake site in North America (~2.5 million years of lakes)
// Pomo name: xa-bati'n (Eastern Pomo) = "water big"
L.polygon([
  [39.08, -122.85],[39.08, -122.78],[39.06, -122.72],[39.04, -122.68],
  [39.02, -122.65],[39.00, -122.63],[38.98, -122.62],[38.96, -122.62],
  [38.94, -122.64],[38.93, -122.67],[38.92, -122.70],[38.93, -122.73],
  [38.94, -122.76],[38.95, -122.80],[38.97, -122.82],[39.00, -122.83],
  [39.02, -122.84],[39.05, -122.85],[39.08, -122.85]
], {
  color: '#4FC3F7', weight:2, opacity:0.7, fillColor:'#4FC3F7', fillOpacity:0.15,
  dashArray:'6,4', pane:'pomoBackgroundPane'
}).bindPopup(`<div style="max-width:340px;font-family:'Crimson Text',serif">
  <h3 style="color:#4FC3F7;margin:0 0 8px">Clear Lake — Xa-bati'n</h3>
  <p style="font-size:13px;color:#B0BEC5"><strong>"Water Big"</strong> (Eastern Pomo)</p>
  <p style="font-size:13px;color:#CFD8DC">The <strong>oldest lake site in North America</strong> — lakes have existed here continuously for ~2.5 million years. The current lake is ~480,000 years old. California's largest natural freshwater lake (68 sq mi), fed by Scotts Creek, Kelsey Creek, Middle Creek, and others. Sole outlet: Cache Creek → Sacramento River.</p>
  <p style="font-size:13px;color:#CFD8DC">Home to the <strong>Eastern Pomo, Southeastern Pomo, Lake Miwok, and Wappo</strong>. Archaeological sites here date to <strong>10,000-14,000 years</strong> of continuous human occupation — among the oldest in California. Barrett (1908) recorded dozens of named village sites along the shores.</p>
  <p style="font-size:13px;color:#EF5350">Since European settlement, <strong>84% of Clear Lake's original wetlands have been destroyed</strong> — leveed off, drained, and converted to agriculture (Richerson 2008).</p>
  <p style="font-size:11px;color:#78909C;margin-top:8px">Sources: Barrett 1908; Richerson 2008; Parker 1994; Heizer 1963</p>
</div>`).addTo(L_groups.pomoVillages);

// ========== POMO VILLAGES — Clear Lake Basin ==========
const villages = [
  // === SOUTHEASTERN POMO (Elem, Koi, Kamdot) ===
  {lat:38.983, lng:-122.633, name:"Elem (ʔlem)", sub:"Southeastern Pomo", desc:"The political and religious center of the Southeastern Pomo for 5,000+ years. Located on Rattlesnake Island in the eastern arm of Clear Lake. The Kaogoma people here controlled the Borax Lake obsidian source and were the money-makers of Northern California — cutting, grinding, and drilling Washington clam shells into bead currency traded across the state. Site CA-LAK-76/89 contains 6 archaeological sites spanning from ~5,000 BP to the historic period.", color:POMO_COLORS.village, src:"Barrett 1908; Praetzellis 1981; Parker 1994; Gibbs 1853"},
  {lat:38.960, lng:-122.640, name:"Koi Village — Indian Island", sub:"Southeastern Pomo (Koi)", desc:"The Koi tribe's main settlement on Indian Island (Dacite of Thurston Creek volcanic formation). A political and religious center for at least 8,000 years, housing up to 300 people. The Koi controlled access to the lake's southeastern fisheries. In 1856, when most Pomo were forcibly removed to the Mendocino Reservation, the Koi were allowed to stay — as cheap labor. When they left to attend the Ghost Dance on Rattlesnake Island (1870-72), settlers stole their island.", color:POMO_COLORS.village, src:"Barrett 1908; Anderson Marsh SHP; OAC Photographic Collection"},
  {lat:38.950, lng:-122.652, name:"Kamdot Village — Anderson Island", sub:"Southeastern Pomo (Kamdot)", desc:"Third major Southeastern Pomo community, centered on Anderson Island off Buckingham Point. With Elem and Koi, these three island communities formed the core of Southeastern Pomo political life. Anderson Marsh State Historic Park now protects 24 prehistoric Koi sites and 1,065 acres of tule marsh, oak woodland, and grassland — a remnant of what was once a vast wetland complex.", color:POMO_COLORS.village, src:"Barrett 1908; Anderson Marsh SHP; White et al. 1994"},

  // === EASTERN POMO — Big Valley & Clear Lake shores ===
  {lat:38.975, lng:-122.745, name:"Kūla'napō — Big Valley", sub:"Eastern Pomo", desc:"The village that gave its name to the entire Pomoan language family ('Kulanapan' in Powell 1891). From kūla' (water-lily) + napō (village) = 'Water-Lily Village'. Located on the southern shore of Clear Lake's main body, Big Valley was one of the most densely settled areas. The Kūla'napō and Kabē'napō were two distinct political groups sharing the valley — an unusual level of political organization for Pomo peoples.", color:POMO_COLORS.village, src:"Barrett 1908; Gibbs 1853; Powers 1877"},
  {lat:39.005, lng:-122.770, name:"Xa-be'l — Lakeport area", sub:"Eastern Pomo", desc:"A major village near present-day Lakeport. Barrett's (1908) informants described a seasonal settlement pattern: high ground villages for winter, shoreline camps for summer — tracking the lake's resource availability cycle. Summer = fish spawning, tule harvest, waterfowl; Fall = acorn gathering in upland oak groves; Winter = stored food in protected village sites.", color:POMO_COLORS.village, src:"Barrett 1908; Kniffen 1939"},
  {lat:39.015, lng:-122.715, name:"Shigom — Lucerne area", sub:"Eastern Pomo", desc:"Eastern Pomo settlement along the northern shore of Clear Lake near present-day Lucerne. Villages along this shore had prime access to both lake fisheries and the oak woodlands climbing into the hills to the north. The entire northern shoreline was dotted with seasonal and permanent camps.", color:POMO_COLORS.village, src:"Barrett 1908"},
  {lat:39.000, lng:-122.830, name:"Soda Bay Village", sub:"Eastern Pomo", desc:"Village near present-day Soda Bay. Clear Lake State Park preserves a Pomo village site here — the Indian Nature Trail passes through what was once a thriving community. Springs in Soda Bay fed the lake and were considered powerful places.", color:POMO_COLORS.village, src:"Barrett 1908; Clear Lake State Park"},
  {lat:38.985, lng:-122.685, name:"Clearlake Oaks Villages", sub:"Eastern Pomo", desc:"Multiple village sites along the eastern arm of Clear Lake near present-day Clearlake Oaks. This area was a transitional zone between Eastern and Southeastern Pomo territories, with shared fishing grounds and ceremonial sites.", color:POMO_COLORS.village, src:"Barrett 1908; Parker 1994"},

  // === NORTHERN POMO — Upper Lake & Scotts Valley ===
  {lat:39.170, lng:-122.910, name:"Upper Lake Villages", sub:"Northern Pomo / Habematolel", desc:"The Habematolel Pomo ('Bloater People') of Upper Lake were one of the northernmost Clear Lake communities. Upper Lake was called xa'-kaiyaū ('lake head') — the upper end of the water system. The Habematolel Pomo of Upper Lake maintain a tribal government today and operate a casino. Many of those massacred on Bloody Island were Habematolel relatives.", color:POMO_COLORS.village, src:"Barrett 1908; Habematolel Pomo of Upper Lake"},
  {lat:39.100, lng:-122.870, name:"Scotts Valley Villages", sub:"Northern Pomo", desc:"Villages in Scotts Valley, at the western edge of Clear Lake. Barrett's informants recalled this as Northern Pomo territory — those of Scotts Valley called the lake xa'-matō ('water big'). Scotts Creek was a major spawning route for the Clear Lake hitch (chi in Pomo), a fish found only in this lake system.", color:POMO_COLORS.village, src:"Barrett 1908; Kniffen 1939"}
];

villages.forEach(v => {
  L.circleMarker([v.lat, v.lng], {
    radius: 7, fillColor: v.color, color: '#3E2723', weight: 1.5,
    fillOpacity: 0.85
  }).bindPopup(`<div style="max-width:320px;font-family:'Crimson Text',serif">
    <h3 style="color:${v.color};margin:0 0 4px">${v.name}</h3>
    <p style="font-size:12px;color:#FFAB91;margin:0 0 6px">${v.sub}</p>
    <p style="font-size:13px;color:#CFD8DC">${v.desc}</p>
    <p style="font-size:11px;color:#78909C;margin-top:8px">Sources: ${v.src}</p>
  </div>`).addTo(L_groups.pomoVillages);
});


// ========== SACRED SITES ==========
const sacred = [
  {lat:38.94, lng:-122.75, name:"Mount Konocti — Sacred Volcano", desc:"<strong>'Mountain Lady'</strong> in one Pomo language. The largest volcano in the Clear Lake Volcanic Field (4,305 ft), last erupted ~10,000 years ago. <strong>Never inhabited</strong> — considered too sacred. Carved wooden pieces tossed into its crater were later found floating in the lake. The mountain is the source of vast obsidian flows used for tools and trade for thousands of years. Mt. Konocti obsidian has been found at sites throughout Northern California.", color:POMO_COLORS.sacred, src:"Barrett 1908; Kroeber 1925; CalVO/USGS"},
  {lat:39.015, lng:-122.615, name:"Borax Lake Obsidian Source", desc:"One of the richest obsidian sources in Northern California. Controlled by the Southeastern Pomo (Elem/Kaogoma), Borax Lake obsidian was <strong>highly prized</strong> throughout the region for making knives, scrapers, spear and arrow points. Combined with their shell bead manufacturing, this made the Elem people central to the Northern California trade network for 5,000+ years. Harrington (1948) documented the archaeological significance of the site.", color:POMO_COLORS.sacred, src:"Harrington 1948; Parker 1994; Pomo at Contact"},
  {lat:38.935, lng:-122.690, name:"Anderson Marsh — 10,000+ year site", desc:"Anderson Marsh State Historic Park. <strong>50+ registered archaeological sites</strong>, some over 10,000 years old — among the oldest in California. The 1,065-acre park preserves tule marsh, oak woodland, and grassland habitat. The Southeastern Pomo (Koi) lived here continuously for at least 14,000 years. Today only 8% of the original tule marsh survives — the rest was drained for agriculture.", color:POMO_COLORS.sacred, src:"Anderson Marsh SHP; Parker 1994; White et al. 1994"},
  {lat:38.922, lng:-122.620, name:"Tolay Lake — Ceremonial Gathering Place", desc:"A sacred site shared by Pomo and Coast Miwok peoples. Over 1,000 pre-contact charmstones and numerous arrowheads have been unearthed here. Used as a <strong>ceremonial gathering and healing place</strong>. The 'broken bridge' site nearby dates to ~3280 BCE — the oldest human habitation documented in this valley. Now part of Tolay Lake Regional Park (Sonoma County).", color:POMO_COLORS.sacred, src:"Sonoma County Parks; Barrett 1908; Archaeological surveys"}
];

sacred.forEach(s => {
  L.circleMarker([s.lat, s.lng], {
    radius: 9, fillColor: s.color, color: '#4A148C', weight: 2,
    fillOpacity: 0.75
  }).bindPopup(`<div style="max-width:340px;font-family:'Crimson Text',serif">
    <h3 style="color:${s.color};margin:0 0 6px">${s.name}</h3>
    <p style="font-size:13px;color:#CFD8DC">${s.desc}</p>
    <p style="font-size:11px;color:#78909C;margin-top:8px">Sources: ${s.src}</p>
  </div>`).addTo(L_groups.pomoSacred);
});


// ========== WATERWAYS — Clear Lake tributaries ==========
const waterways = [
  // Kelsey Creek — major spawning route
  {coords:[[38.90,-122.80],[38.92,-122.78],[38.94,-122.76],[38.96,-122.74],[38.97,-122.74]], name:"Kelsey Creek", desc:"Major tributary entering Clear Lake at Kelseyville. Critical spawning route for the <strong>Clear Lake hitch</strong> (Lavinia exilicauda chi) — called 'chi' by the Pomo and found nowhere else on Earth. Also supports Pacific lamprey. Dredged in 1955, altering the natural channel. Named after Andrew Kelsey, who enslaved and brutalized the Pomo — a bitter irony.", color:'#4FC3F7'},
  // Scotts Creek
  {coords:[[39.10,-122.92],[39.08,-122.88],[39.06,-122.85]], name:"Scotts Creek", desc:"Major tributary feeding Clear Lake from the west through Scotts Valley. Gravel mining in 1969 damaged the streambed. Northern Pomo villages lined its banks. Scotts Creek watershed assessment documented impacts of agricultural runoff on the lake ecosystem.", color:'#4FC3F7'},
  // Middle Creek
  {coords:[[39.16,-122.88],[39.12,-122.86],[39.08,-122.84]], name:"Middle Creek", desc:"Feeds Clear Lake from the northwest. The massive <strong>810-hectare Middle Creek wetland was destroyed in 1927</strong> by levee construction, eliminating a critical nutrient filter. A restoration project begun in 1995 aims to breach levees and restore 1,650 acres of lake and wetland. If completed, Bloody Island will be an island again.", color:'#4FC3F7'},
  // Cache Creek — the outlet
  {coords:[[38.96,-122.62],[38.96,-122.58],[38.95,-122.52],[38.94,-122.45],[38.92,-122.38],[38.90,-122.30],[38.88,-122.20],[38.86,-122.10],[38.84,-122.00],[38.80,-121.90],[38.78,-121.80],[38.73,-121.75]], name:"Cache Creek — Clear Lake outlet", desc:"The <strong>only outflow</strong> from Clear Lake, flowing 87 miles east to the Sacramento River. Pomo name not recorded but the creek was the lifeline connecting Clear Lake to the wider world. A dam 5 miles downstream now controls the lake level. Cache Creek was straightened above Grigsby Riffle in 1919 and the riffle was deepened in 1938 — part of a systematic reengineering of the lake's hydrology. Before the dam, steelhead and Pacific lamprey ascended Cache Creek to spawn in Clear Lake's tributaries.", color:'#80DEEA'},
  // Adobe Creek
  {coords:[[38.92,-122.72],[38.94,-122.70],[38.96,-122.68]], name:"Adobe Creek", desc:"Tributary of Clear Lake. Adobe Creek Reservoir was completed in 1962, impounding water that once flowed freely into the lake. The creek marks a boundary zone between Eastern Pomo and Lake Miwok territories.", color:'#4FC3F7'},
  // Cole Creek
  {coords:[[38.95,-122.78],[38.96,-122.76],[38.97,-122.75]], name:"Cole Creek", desc:"Small tributary entering Clear Lake near Clear Lake State Park. Spawning habitat for the Clear Lake hitch. Cole Creek Campground at the state park winds along its banks through a former Pomo village area.", color:'#4FC3F7'}
];

waterways.forEach(w => {
  L.polyline(w.coords, {
    color: w.color, weight: 3, opacity: 0.8, dashArray: '8,4'
  }).bindPopup(`<div style="max-width:320px;font-family:'Crimson Text',serif">
    <h3 style="color:${w.color};margin:0 0 6px">${w.name}</h3>
    <p style="font-size:13px;color:#CFD8DC">${w.desc}</p>
  </div>`).addTo(L_groups.pomoWaterways);
});


// ========== LOST WETLANDS & ENVIRONMENTAL DESTRUCTION ==========
const lostWetlands = [
  {lat:39.09, lng:-122.83, name:"Middle Creek Wetland — Destroyed 1927", desc:"An <strong>810-hectare (2,000-acre) wetland destroyed in 1927</strong> when heavy equipment leveed off the northern end of Clear Lake. This massive wetland had filtered nutrients and sediment for millennia. Its destruction removed a critical phosphorus sink, contributing to the toxic blue-green algal blooms that now plague the lake. Restoration is underway to breach levees and restore 1,650 acres.", color:POMO_COLORS.lost},
  {lat:39.06, lng:-122.85, name:"Rodman Slough Wetland — Destroyed 1959", desc:"Another major wetland <strong>reclaimed in 1959</strong>, confined to a narrow slough that conveys flood flows directly into the lake — bypassing the natural wetland filtration. Before destruction, this was prime tule marsh habitat and a gathering place for Pomo communities.", color:POMO_COLORS.lost},
  {lat:39.14, lng:-122.89, name:"Tule Lake Wetland — Destroyed early 1900s", desc:"The <strong>first major wetland destruction</strong> around Clear Lake, reclaimed for agriculture in the early 1900s. Part of the systematic elimination of 84% of Clear Lake's original wetlands. Before European settlement, these tule marshes supported vast populations of waterfowl, fish, and the Pomo communities that depended on them.", color:POMO_COLORS.lost},
  {lat:38.97, lng:-122.60, name:"Clear Lake Dam — Built 1914", desc:"Dam completed in 1914 on Cache Creek, <strong>fundamentally altering Clear Lake's hydrology</strong>. The dam controls water levels, preventing the natural seasonal fluctuations that Pomo communities had adapted to for 10,000+ years. Before the dam, steelhead and Pacific lamprey ascended Cache Creek freely. The Solano Water Decree (1978) now allocates summer lake water to Yolo County agriculture.", color:POMO_COLORS.lost},
  {lat:39.00, lng:-122.64, name:"Sulphur Bank Mercury Mine", desc:"Mercury mine on the southeastern shore whose <strong>waste rock was bulldozed directly into Clear Lake</strong> beginning in the 1920s when heavy earthmoving equipment arrived. Now a Superfund site. The mercury contamination has devastated the lake's ecosystem and concentrated in fish tissue, creating health risks for the Elem Pomo community who still live adjacent to the mine on their 50-acre reservation — surrounded on three sides by contaminated lake water.", color:POMO_COLORS.lost}
];

lostWetlands.forEach(lw => {
  L.circleMarker([lw.lat, lw.lng], {
    radius: 8, fillColor: lw.color, color: '#B71C1C', weight: 2,
    fillOpacity: 0.7, dashArray: '4,3'
  }).bindPopup(`<div style="max-width:340px;font-family:'Crimson Text',serif">
    <h3 style="color:${lw.color};margin:0 0 6px">${lw.name}</h3>
    <p style="font-size:13px;color:#CFD8DC">${lw.desc}</p>
  </div>`).addTo(L_groups.pomoLostWaters);
});


// ========== BLOODY ISLAND MASSACRE ==========
// Coordinates: 39.8974°N, 122.53288°W (from historical marker)
// Note: The island is now a hill — the lake receded and wetlands were drained
L.circleMarker([39.1475, -122.865], {
  radius: 10, fillColor: POMO_COLORS.massacre, color: '#fff', weight: 2,
  fillOpacity: 0.9
}).bindPopup(`<div style="max-width:360px;font-family:'Crimson Text',serif">
  <h3 style="color:#EF5350;margin:0 0 4px">Bo-no-po-ti (Bloody Island)</h3>
  <p style="font-size:12px;color:#FFCDD2;margin:0 0 8px">"Old Island" / "Island Village" — Badon-napo-ti</p>
  <p style="font-size:13px;color:#CFD8DC"><strong>May 15, 1850</strong> — U.S. Cavalry under Lt. Nathaniel Lyon massacred Pomo men, women, and children who had gathered on this island for the spring fish spawn. The soldiers arrived <em>"with orders to proceed against the Clear Lake Indians, and exterminate if possible the tribe."</em></p>
  <p style="font-size:13px;color:#CFD8DC">The massacre was retaliation for the killing of Andrew Kelsey and Charles Stone — two settlers who had enslaved, starved, and brutalized the Pomo. Chief <strong>Augustine's wife</strong> poured water on the settlers' gunpowder, and warriors killed both men. The army came for Augustine's band but instead found unrelated families at Bo-no-po-ti.</p>
  <p style="font-size:13px;color:#CFD8DC">Estimates range from <strong>60 to 200+ killed</strong>. Most younger men were away hunting. A 6-year-old girl named <strong>Ni'ka (Lucy Moore)</strong> survived by hiding underwater, breathing through a tule reed. Her descendants formed the Lucy Moore Foundation.</p>
  <p style="font-size:13px;color:#EF5350">The island is now a hill — the lake has receded and wetlands were drained. California Historical Landmark #427.</p>
  <p style="font-size:11px;color:#78909C;margin-top:8px">Sources: Heizer 1973; NPS; Habematolel Pomo; Lucy Moore Foundation</p>
</div>`).addTo(L_groups.pomoSacred);


// ========== ROCK ART — Baby Rocks & PCN in Pomo Territory ==========
const rockArtSites = [
  {lat:38.92, lng:-122.78, name:"Clear Lake Basin Petroglyphs", type:"petroglyph", desc:"Paul Peterson (1996) documented <strong>ethnographic rock art in the Clear Lake Basin</strong> — petroglyphs connected to Pomo ceremonial practices. Pomo cosmology views mountains as holy and powerful places; some petroglyph sites occur in elevated locations. The roundhouse symbolized the Upper, Middle, and Lower Worlds (Parkman).", src:"Peterson 1996; Parkman 1991"},
  {lat:38.87, lng:-123.00, name:"Cloverdale Boulder (CA-MEN-1800)", type:"petroglyph", desc:"PCN-style petroglyph on a schist boulder. Part of the <strong>'Baby Rocks'</strong> tradition — Pomo women visited these sites to ensure conception and fertility. Central Pomo mythology connects PCN glyphs to supernatural <strong>Bird People</strong>. Documented by Hedges (1983).", src:"Hedges 1983; Freeman 1998; Marymor 2016"},
  {lat:39.09, lng:-123.12, name:"Hopland PCN Boulders (UC Research Station)", type:"petroglyph", desc:"Five boulders with cultural markings including cupules and PCN-style elements at the UC Hopland Research and Extension Center (2,150 hectares). <strong>Donna Gillette's</strong> landscape archaeology study examined these in the context of 30+ prehistoric sites with 3,000+ catalogued artifacts. The PCN boulders sit on Franciscan schist — the same geology that hosts PCN petroglyphs across the Coast Range.", src:"Gillette 2011; Freeman 1999"},
  {lat:39.40, lng:-123.35, name:"Spyrock Road Petroglyphs (CA-MEN-1912)", type:"petroglyph", desc:"Petroglyph site in remote northern Mendocino County. Part of the broader distribution of rock art in Pomo territory, documented during multiple field trips by Paul Freeman (1998) and Bay Area Rock Art Research Association.", src:"Freeman 1998; Jordan 1995"},
  {lat:39.18, lng:-123.20, name:"Elledge Valley Baby Rock (Sonin 68)", type:"petroglyph", desc:"A <strong>'Baby Rock'</strong> in the Pomo tradition — a boulder with cupules and grooves used in fertility rituals. Loeb (1926) and Barrett recorded ethnographic accounts of Pomo women visiting these rocks. The tradition connects directly to the PCN petroglyph phenomenon documented across Northern California.", src:"Loeb 1926; Heizer 1953; Freeman 1998"}
];

rockArtSites.forEach(ra => {
  const icon = (typeof mkPetroIcon !== 'undefined') ? mkPetroIcon(POMO_COLORS.rockart, 10) : L.divIcon({
    html: `<div style="width:12px;height:12px;background:${POMO_COLORS.rockart};border:2px solid #5D4037;border-radius:50%;"></div>`,
    iconSize: [12, 12], iconAnchor: [6, 6]
  });
  L.marker([ra.lat, ra.lng], { icon: icon }).bindPopup(`<div style="max-width:320px;font-family:'Crimson Text',serif">
    <h3 style="color:${POMO_COLORS.rockart};margin:0 0 4px">${ra.name}</h3>
    <p style="font-size:12px;color:#FFCC80;margin:0 0 6px">${ra.type.charAt(0).toUpperCase() + ra.type.slice(1)} · Pomo Territory</p>
    <p style="font-size:13px;color:#CFD8DC">${ra.desc}</p>
    <p style="font-size:11px;color:#78909C;margin-top:8px">Sources: ${ra.src}</p>
  </div>`).addTo(L_groups.pomoRockArt);
});


// ========== POMO TERRITORY POLYGON ==========
L.polygon([
  // Rough boundary of Clear Lake Pomo (Eastern + Southeastern + Northern around the lake)
  [39.25, -123.00],[39.20, -122.75],[39.15, -122.55],
  [39.05, -122.50],[38.95, -122.50],[38.88, -122.55],
  [38.85, -122.60],[38.82, -122.70],[38.85, -122.85],
  [38.90, -122.95],[39.00, -123.05],[39.10, -123.05],
  [39.20, -123.00],[39.25, -123.00]
], {
  color: '#8D6E63', weight: 2, opacity: 0.6, fillColor: '#8D6E63',
  fillOpacity: 0.08, dashArray: '8,6', pane:'pomoBackgroundPane'
}).bindPopup(`<div style="max-width:320px;font-family:'Crimson Text',serif">
  <h3 style="color:#8D6E63;margin:0 0 6px">Clear Lake Pomo Territory</h3>
  <p style="font-size:13px;color:#CFD8DC">Approximate territory of the <strong>Eastern, Southeastern, and Northern Pomo</strong> groups centered on Clear Lake. Boundaries from Barrett (1908) and Stewart (1940). The Eastern Pomo occupied Big Valley and the main lake shores; the Southeastern Pomo held the eastern arm (Rattlesnake Island, Indian Island, Anderson Island); the Northern Pomo held Upper Lake and Scotts Valley.</p>
  <p style="font-size:13px;color:#CFD8DC">Population est. <strong>~8,000 total Pomo at contact (1770)</strong> across all 7 groups. By 1908, Barrett counted only 747.</p>
</div>`).addTo(L_groups.pomoVillages);


// ========== MODERN POMO RANCHERIAS ==========
const rancherias = [
  {lat:38.965, lng:-122.635, name:"Elem Indian Colony", desc:"50-acre reservation of the Elem Pomo Tribe (Southeastern Pomo), surrounded on three sides by Clear Lake — and adjacent to the Sulphur Bank Mercury Mine Superfund site. One of the most environmentally burdened tribal communities in America."},
  {lat:39.000, lng:-122.760, name:"Big Valley Rancheria", desc:"Big Valley Band of Pomo Indians, located on the south shore of Clear Lake. Signed a 2024 MOU with California State Parks for Clear Lake State Park collaboration."},
  {lat:39.155, lng:-122.920, name:"Habematolel Pomo of Upper Lake", desc:"Descendants of the people massacred at Bloody Island. The name means 'Bloater People.' Today they maintain tribal government and cultural programs."},
  {lat:39.170, lng:-122.975, name:"Robinson Rancheria", desc:"Robinson Rancheria of Pomo Indians of California, near Upper Lake. Relatives of those killed at Bloody Island."}
];

rancherias.forEach(r => {
  L.circleMarker([r.lat, r.lng], {
    radius: 5, fillColor: '#A5D6A7', color: '#2E7D32', weight: 1.5,
    fillOpacity: 0.8
  }).bindPopup(`<div style="max-width:280px;font-family:'Crimson Text',serif">
    <h3 style="color:#A5D6A7;margin:0 0 6px">${r.name}</h3>
    <p style="font-size:12px;color:#81C784;margin:0 0 4px">Modern Rancheria (present day)</p>
    <p style="font-size:13px;color:#CFD8DC">${r.desc}</p>
  </div>`).addTo(L_groups.pomoVillages);
});


})();
