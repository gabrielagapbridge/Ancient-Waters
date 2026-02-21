// ===== CHUMASH SACRED LANDSCAPES & ROCK ART =====
// Focused on sites and features NOT already in js/18-southcentral-rockart.js
// (which already covers: Carrizo Plain Painted Rock, Chumash Painted Cave,
//  Hurricane Deck, Mount Piños/San Emigdio/Pleito, Sierra Madre Ridge generic)
//
// This file adds:
//   1. Sapaksi / Painted Rock (SBa-502/526) — House of the Sun (Lee & Horne 1978)
//   2. Additional Chumash rock art sites not in Lee & Hyder 1991 coverage
//   3. The sacred landscape of Sierra Madre Ridge (potreros, whale rocks, springs)
//   4. Chumash linguistic/territorial division polygons
//   5. Tribal encyclopedia entry is in js/19-tribal-encyclopedia.js
//
// Sources: Lee & Horne 1978; Robinson 2010, 2011; Grant 1965; McCaslin 2016;
//          Hudson & Underhay 1978; Harrington field notes; NPS; BLM; USFS

// ===== COLOR =====
const CHUMASH_COLOR = '#E65100'; // Deep burnt orange — Chumash sacred

// ===== ROCK ART SITES =====
const chumashSacredSites = [

  // ========== THE CENTERPIECE: SAPAKSI — HOUSE OF THE SUN ==========
  {name:"Sapaksi — The Painted Rock (SBa-502 / SBa-526)", lat:34.8910, lng:-119.6530,
   type:"Polychrome Pictographs — Sacred Ceremonial Site",
   desc:"<b>S'apaqsi</b> — 'House of the Sun' in the Samala (Ineseño) Chumash language. This is the site that Georgia Lee and Stephen Horne identified in 1978 as the place described in Chumash mythology by María Solares to anthropologist J.P. Harrington in the 1920s. " +
     "Solares described a sacred place near the Cuyama Valley with a spring or pond of water, painted depictions of mythic beings, and a cave where Coyote turned to stone after the Great Flood. " +
     "The site consists of two rockshelters (SBa-502 upper cave; SBa-526 lower/adjacent). A <b>prominent disc shape</b> painted on the ceiling of the upper cave gave the entire site its name — it represents <b>Qsi, the Sun</b>. " +
     "Nearby is a smaller black circle with a red rim that may be an <b>eclipse symbol</b>. Other circular designs on cave walls and rock faces represent celestial bodies. " +
     "Fernando Librado, another Harrington informant, remembered a painted sun symbol as a circle and rays. The circular shape of the sanddollar was linked to the sun in Chumash cosmology.<br><br>" +
     "The site sits at ~5,000 feet on the <b>Sierra Madre Ridge</b> at the edge of <b>Montgomery Potrero</b>. Five named springs surround the site (Montgomery Springs), and in most years a large pond formed from spring overflow. " +
     "Chumash visited for specific rituals and ceremonies between May and November, when highland foraging, hunting, and solstice rituals drew tribelets — some on their way to the Tejon over the mountains to Yokuts territory. " +
     "This was never a permanent village — at this elevation it was strictly a seasonal ceremonial destination.<br><br>" +
     "The entire nine-mile Sierra Madre Ridge is considered sacred ground. Scattered across three conjoined potreros (Montgomery, Pine Corral, Salisbury) are enormous <b>'whale rocks'</b> — massive sandstone formations understood as the petrified remains of the <b>First People</b> who turned to stone after the mythological Great Flood. " +
     "Animals like Golden Eagle (Slo'w) and the Sun (Qsi) were among these First People.",
   src:"Lee & Horne 1978; Hudson & Underhay 1978; Harrington field notes; McCaslin 2016; Robinson 2011",
   culture:"Cuyama / Ineseño (Samala) Chumash"},

  // ========== ADDITIONAL ROCK ART SITES NOT IN scRockArt ==========
  {name:"Burro Flats Painted Cave", lat:34.2310, lng:-118.7060,
   type:"Polychrome Pictographs — Solstice Marker",
   desc:"A globally significant rock art site in the Simi Hills, Ventura County. Features elaborate geometric pictographs that function as a <b>winter solstice marker</b> — sunlight interacts with the paintings during the December solstice in a precise alignment. " +
     "The cave has been protected from public access since 1947 by the Rocketdyne Santa Susana Field Laboratory (SSFL), which inadvertently preserved it from vandalism. " +
     "Contains some of the most elaborate and well-preserved pictographs south of the Santa Clara River. Still used as a ceremonial site by Chumash descendants. " +
     "The SSFL is now closed and undergoing toxic cleanup by Boeing, DOE, and NASA. Chumash cultural resources must be protected during the extensive remediation work.",
   src:"Lee & Hyder 1991; NPS; CA State Parks",
   culture:"Ventureño Chumash"},

  {name:"Pool Rock (SBa-1632)", lat:34.8750, lng:-119.6700,
   type:"Polychrome Pictographs with Bedrock Mortars",
   desc:"A significant pictograph site on the Sierra Madre Ridge where <b>bedrock mortars (BRMs) are directly in view and less than 2 meters from pictograph panels</b> — demonstrating that rock art was integrated into daily subsistence activities, not isolated in remote sacred spaces. " +
     "This spatial relationship between paintings and food-processing features is central to Robinson's (2010, 2011) argument that Chumash rock art served as visual claims to land rights and resource control. " +
     "Located within the catchment area of the Chumash village network radiating from the Santa Ynez Valley.",
   src:"Robinson 2011; Grant 1965; Lee & Hyder 1991",
   culture:"Cuyama / Ineseño Chumash"},

  {name:"Bear Track Cave (SBa-1627)", lat:34.8680, lng:-119.6550,
   type:"Polychrome Pictographs with Bedrock Mortars",
   desc:"Named for its bear track motifs, this Sierra Madre Ridge site also features <b>BRMs directly adjacent to pictograph panels</b>. Part of the dense concentration of rock art sites along the ridge that Robinson documented in his GIS landscape analysis. " +
     "The co-occurrence of BRMs and pictographs at multiple Sierra Madre sites suggests that the paintings were not created in seclusion by isolated shamans but were part of a public, community-oriented practice tied to resource management and territorial claims.",
   src:"Robinson 2011; Grant 1965",
   culture:"Cuyama Chumash"},

  {name:"Condor Cave (SBa-1633)", lat:34.8820, lng:-119.6800,
   type:"Polychrome Pictographs — Condor Imagery",
   desc:"Features imagery of the California Condor — one of the most sacred animals in Chumash cosmology. The condor appears in the creation story: when Condor flew too close to the fire that Sky Snake (the Milky Way) gave to the Chumash people, his feathers were scorched black. " +
     "Like Pool Rock and Bear Track Cave, <b>BRMs are within 2 meters of the pictograph panels</b>. " +
     "The Sierra Madre Ridge is one of the most important undeveloped habitats for the endangered California condor today — a continuity of the condor's sacred presence spanning thousands of years.",
   src:"Robinson 2011; Grant 1965; NPS condor program",
   culture:"Cuyama Chumash"},

  {name:"Three Springs — Wind Wolves Preserve", lat:34.9400, lng:-119.1200,
   type:"Polychrome Pictographs — Rare Blue Pigment",
   desc:"An Emigdiano Chumash pictograph site in the Wind Wolves Preserve (Kern County) notable for its <b>rare blue pigment</b>. Reeves, Bury, and Robinson (2009) conducted experimental pigment processing to determine whether the exotic colors at nearby Pleito (CA-KER-77) came from Spanish mission sources or local minerals. " +
     "Their experiments demonstrated that locally available copper carbonate minerals (azurite/malachite) from a quarry northeast of San Emigdio Mountain could produce the blue and green pigments — suggesting the polychrome tradition predates European contact. " +
     "Chumash mythology specifically mentions 'blue-rock paint' in association with the Emigdiano people. The mineral quarry was known to exist within Emigdiano territory. " +
     "Five Chumash rock art sites in the Wind Wolves Preserve were examined using portable X-ray fluorescence, revealing multiple pigments and painting episodes at each panel — indicating the art was created by multiple artists or retouched over long periods.",
   src:"Reeves, Bury & Robinson 2009; Robinson 2006, 2010",
   culture:"Emigdiano Chumash"},

  {name:"House of the Two Suns", lat:34.7300, lng:-119.6100,
   type:"Red & Black Pictographs — Possible Solstice Marker",
   desc:"First described by historian and naturalist Dick Smith, this site is located in what is now the <b>Dick Smith Wilderness</b> in the San Rafael Mountains. Several cave shelters are stacked one above another in a rock outcrop. " +
     "The pictographs are painted in red and black and may represent the sun during the <b>summer and winter solstice</b> — the 'two suns' of the site's name. " +
     "Dick Smith spent decades documenting the backcountry of Santa Barbara County and this site was among his most significant discoveries.",
   src:"Dick Smith; Grant 1965; signalscv.com 2025",
   culture:"Interior Chumash"},

  {name:"Indian Caves — San Marcos Pass", lat:34.5800, lng:-119.8200,
   type:"Petroglyphs & Pictographs — Zoomorphic",
   desc:"Located west of San Marcos Pass near <b>San Jose Creek</b>. First described by John V. Frederick, who partnered with Julian Steward to publish drawings in <i>Petroglyphs of California and Adjoining States</i>. " +
     "Contains elaborate zoomorphic style glyphs — animal figures rendered in the distinctive Chumash artistic vocabulary. " +
     "The site is near a miniature gorge where seasonal water carves through sandstone bedrock, forming pools that hold water even through years of drought. The reliable water source explains the long attraction of this location.",
   src:"Frederick; Steward 1929; Grant 1965; yankeebarbareno.com",
   culture:"Barbareño Chumash"},

  {name:"Mutau Flat Complex", lat:34.7500, lng:-119.0500,
   type:"Polychrome Pictographs — Village-Associated",
   desc:"A complex site within the catchment of the Chumash village of <b>Matapxaw</b>. Documented by Eberhart and Babcock (1963), it represents a 'K-locale' — Robinson's term for locations with 18+ bedrock mortar stations that served as key nodes in the Chumash landscape. " +
     "The pictographs here are firmly embedded within the patterns of daily life and seasonal movement, not isolated in remote sacred spaces. " +
     "Located in the Sespe/Piru Creek drainage area near the Emigdiano-Ventureño boundary.",
   src:"Eberhart & Babcock 1963; Robinson 2010, 2011",
   culture:"Emigdiano / Ventureño Chumash"},

  {name:"Tule River Painted Rock", lat:36.0450, lng:-118.7800,
   type:"Polychrome Pictographs",
   desc:"Located on the <b>Tule River Indian Reservation</b> (Yokuts territory, but with strong Chumash artistic influence). Features stunning pictographs depicting hunting scenes and spiritual rituals. " +
     "The site sits at a cultural crossroads where Yokuts and Chumash artistic traditions intersect. Guided tours available through the reservation. " +
     "The paintings demonstrate the extensive cultural exchange networks between Chumash and Yokuts peoples across the southern Sierra Nevada foothills.",
   src:"Lee & Hyder 1991; Tule River Reservation",
   culture:"Yokuts (Chumash-influenced)"}
];


// ===== RENDER ROCK ART MARKERS =====
chumashSacredSites.forEach(s => {
  const icon = raIcon(s.type, CHUMASH_COLOR, s.name.includes('Sapaksi') ? 12 : 10);

  const popup = `
    <div style="max-width:460px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:${CHUMASH_COLOR};margin:0 0 4px;font-size:15px;">🌞 ${s.name}</h4>
      <div style="font-size:10px;color:${CHUMASH_COLOR};margin-bottom:6px;font-weight:600;">${s.type}</div>
      <div style="font-size:12px;color:#ccc;line-height:1.55;margin-bottom:6px;">${s.desc}</div>
      <div style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(230,81,0,0.2);padding-top:4px;">
        <b>Culture:</b> ${s.culture}<br>
        <b>Sources:</b> ${s.src}
      </div>
    </div>`;

  L.marker([s.lat, s.lng], {icon}).addTo(L_groups.chumashSacred).bindPopup(popup, {maxWidth:480});
});


// ===== SACRED LANDSCAPE MARKERS — SIERRA MADRE RIDGE =====
const sacredLandscape = [
  {name:"Montgomery Potrero — Sapaksi Sacred Grounds", lat:34.8920, lng:-119.6500,
   desc:"The wide mountain meadow (potrero) at ~5,000 feet where the Painted Rock / Sapaksi site sits. Five named springs (Montgomery Springs) once fed a large seasonal pond here. " +
     "The USFS Painted Rock Campground sits at the edge of this potrero — McCaslin (2016) advocates relocating it because it is too close to sacred pictographs, the shading oak has died, the springs have dried, and the outhouse is disrespectful on hallowed ground. " +
     "Access is via Sierra Madre Ridge Road (7 miles from locked gate at McPherson Peak). 4WD essential."},
  {name:"Pine Corral Potrero — The Whale Rocks (First People)", lat:34.8850, lng:-119.6200,
   desc:"East of Montgomery Potrero along Sierra Madre Ridge Road. Scattered across this meadow are enormous <b>'whale rocks'</b> — massive sandstone formations that are the <b>petrified remains of the First People</b> in Chumash cosmology. " +
     "Before the Great Flood, animals were people — Golden Eagle (Slo'w), the Sun (Qsi), Coyote, and others lived here. When this world perished in the flood, they turned to stone. " +
     "María Solares told Harrington in 1927 that 'nearly the entire environment was personified and was often interpreted in a supernatural manner.' These rocks are alive in Chumash understanding. " +
     "Ceremonies must have taken place near them. The entire nine-mile ridge is sacred ground, not just the pictograph shelters."},
  {name:"Salisbury Potrero — Sweetwater Trail to the Sisquoc", lat:34.8780, lng:-119.6000,
   desc:"The easternmost of the three connected potreros. More whale rock formations amid rolling grassland. The Sweetwater Trail descends 7 miles from here to South Fork Cabin on the wild and scenic <b>Sisquoc River</b>. " +
     "The Jackson Trail descends from Montgomery Potrero to the Sisquoc — a 4.8-mile steep route with ~2,500 feet of relief. " +
     "The Sierra Madre Ridge forms the drainage divide: north to the <b>Cuyama River</b>, south to the <b>Sisquoc River</b>. Both rivers were vital to Chumash life — the Cuyama connected the interior to the coast, while the Sisquoc flowed through the wildest heart of Chumash mountain territory."},
  {name:"McPherson Peak — Sierra Madre Ridge Gateway", lat:34.8950, lng:-119.7600,
   desc:"At 5,747 feet, McPherson Peak anchors the western end of the Sierra Madre Ridge. The locked gate and horse corral here mark the trailhead for the 7-mile hike to Sapaksi / Painted Rock Camp. " +
     "The peak's antenna arrays are visible for miles. From here, the closed Sierra Madre Ridge Road winds east through the three sacred potreros. " +
     "Ranchers still graze cattle on these meadows under USDA lease — in spring the grass is extraordinarily rich. Chumash, and before them older peoples, were drawn to these highland meadows for the same abundance."}
];

sacredLandscape.forEach(s => {
  const icon = L.divIcon({
    className:'',
    html:`<div style="width:14px;height:14px;border-radius:50%;background:rgba(230,81,0,0.25);border:2px solid ${CHUMASH_COLOR};"></div>`,
    iconSize:[14,14], iconAnchor:[7,7]
  });

  const popup = `
    <div style="max-width:400px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:${CHUMASH_COLOR};margin:0 0 6px;font-size:14px;">⛰️ ${s.name}</h4>
      <div style="font-size:12px;color:#ccc;line-height:1.55;">${s.desc}</div>
      <div style="font-size:10px;color:#888;margin-top:6px;">Sources: McCaslin 2016; Lee & Horne 1978; Harrington/Solares</div>
    </div>`;

  L.marker([s.lat, s.lng], {icon}).addTo(L_groups.chumashSacred).bindPopup(popup, {maxWidth:420});
});


// ===== CHUMASH LINGUISTIC DIVISIONS (Territory Polygons) =====
const chumashDivisions = [
  {name:"Obispeño Chumash", color:"#FF7043",
   territory:[[35.45,-120.95],[35.45,-120.65],[35.25,-120.55],[35.10,-120.55],[35.05,-120.70],[35.15,-120.90],[35.25,-120.98],[35.45,-120.95]],
   desc:"Northernmost Chumash division. Coast from Morro Bay to the northern Santa Maria River. Five missions established among the Chumash, with <b>Mission San Luis Obispo</b> (1772) being the first in Chumash territory. Language: Obispeño — extinct, poorly documented."},
  {name:"Purisimeño Chumash", color:"#FF8A65",
   territory:[[35.05,-120.70],[35.10,-120.55],[34.90,-120.30],[34.75,-120.25],[34.70,-120.45],[34.80,-120.65],[35.05,-120.70]],
   desc:"Coast between Obispeño and Barbareño divisions. Centered on <b>Mission La Purísima Concepción</b> (1787) near Lompoc. The lower Santa Ynez River flows through their territory. Language: Purisimeño — extinct by early 20th century."},
  {name:"Ineseño / Samala (Santa Ynez) Chumash", color:"#EF6C00",
   territory:[[34.90,-120.30],[34.85,-120.05],[34.80,-119.85],[34.70,-119.75],[34.65,-119.90],[34.70,-120.10],[34.75,-120.25],[34.90,-120.30]],
   desc:"The inland Santa Ynez Valley. <b>Mission Santa Ynez</b> (1804). The <b>Santa Ynez Band of Chumash Indians</b> — the only federally recognized Chumash tribe — maintains the 127-acre Santa Ynez Reservation here. " +
     "Language: <b>Samala</b> — the most documented Chumash language, with a published dictionary (Applegate 2007). <b>Zanja de Cota Creek</b> flows through the reservation and is monitored by the tribal environmental office. " +
     "The sacred site of <b>Sapaksi</b> (House of the Sun) on the Sierra Madre Ridge lies within ancestral Ineseño territory. The Samala word <i>kuyam</i> gives us 'Cuyama.'"},
  {name:"Barbareño Chumash", color:"#E65100",
   territory:[[34.70,-119.75],[34.65,-119.55],[34.55,-119.45],[34.40,-119.55],[34.40,-119.75],[34.50,-119.85],[34.55,-119.95],[34.65,-119.90],[34.70,-119.75]],
   desc:"The Santa Barbara coastal region — the heartland of Chumash civilization. <b>Mission Santa Barbara</b> (1786). The capital village of <b>Syukhtun</b> (modern Santa Barbara) was one of the largest settlements on the Pacific Coast. " +
     "The famous <b>Chumash Painted Cave</b> (Alaxuluxen) sits along the trail from Syukhtun over San Marcos Pass. " +
     "Population estimated at 15,000+ before European contact. Language: Barbareño — nearly extinct, but documentation exists from Harrington's work with Fernando Librado and other elders."},
  {name:"Ventureño Chumash", color:"#BF360C",
   territory:[[34.55,-119.45],[34.50,-119.25],[34.40,-119.00],[34.25,-118.80],[34.15,-118.70],[34.10,-118.85],[34.20,-119.10],[34.30,-119.25],[34.40,-119.45],[34.40,-119.55],[34.55,-119.45]],
   desc:"Ventura coast to the Santa Clara River. <b>Mission San Buenaventura</b> (1782). Territory encompassed the <b>Ventura River</b> (Chumash: Shisholop), the southern <b>Santa Clara River</b>, and coastal areas to Malibu Canyon. " +
     "The <b>tomol</b> (plank canoe) tradition was strongest here and among the Barbareño — enabling trade with the Channel Islands. " +
     "Beaver were historically present in the Ventura River and Santa Clara River — oral history records from Harrington describe beaver at Ventura and Saticoy. " +
     "Language: Ventureño — extensive documentation from Harrington's work with Fernando Librado."},
  {name:"Emigdiano Chumash", color:"#D84315",
   territory:[[34.95,-119.40],[34.95,-119.10],[34.90,-118.90],[34.75,-118.85],[34.65,-119.00],[34.55,-119.10],[34.60,-119.25],[34.75,-119.40],[34.95,-119.40]],
   desc:"Interior mountain bands beyond the Coast Range, in the southernmost San Joaquin Valley. Territory centered on the <b>San Emigdio Hills</b> and <b>Wind Wolves Preserve</b>. " +
     "The most prolific rock art producers among Chumash subgroups — Robinson (2010) used GIS to demonstrate that their polychrome paintings were positioned along well-used internal trails, not in isolated sacred spaces. " +
     "Sites include <b>Pleito (CA-KER-77)</b> with its extraordinary blue and green pigments, and <b>Three Springs</b>. " +
     "A mineral quarry for blue-black pigment existed northeast of San Emigdio Mountain — 'blue-rock paint' was associated with the Emigdiano in their mythology. " +
     "Ethnohistoric villages at canyon apertures: <b>Matapuan</b>, <b>Tashlipun</b>, <b>Tecuya</b>. Marriage ties connected these villages to the interior network centered on K'o'owhsup."},
  {name:"Cuyama Chumash", color:"#FF5722",
   territory:[[35.05,-119.80],[35.00,-119.55],[34.95,-119.40],[34.75,-119.40],[34.70,-119.55],[34.75,-119.70],[34.85,-119.85],[35.05,-119.80]],
   desc:"The <b>Cuyama Valley</b> and upper Santa Maria River watershed. The <b>Sierra Madre Ridge</b> — including Sapaksi and the three sacred potreros — sits within or at the boundary of Cuyama territory. " +
     "The <b>Cuyama River</b> headwaters are in the Chumash Wilderness area of Los Padres National Forest. Trade routes along the Santa Maria and Cuyama rivers connected coastal Chumash to Yokuts peoples in the southern San Joaquin Valley. " +
     "Grant (1965) recorded 41 painted rock art sites in the Cuyama Valley region alone."},
  {name:"Island Chumash (Isleño)", color:"#FF8A80",
   territory:[[34.10,-120.40],[34.10,-119.50],[33.90,-119.50],[33.90,-120.40],[34.10,-120.40]],
   desc:"The Channel Islands: <b>Santa Cruz</b> (Limuw — 'in the sea'), <b>Santa Rosa</b>, and <b>San Miguel</b>. Anacapa was used seasonally due to lack of fresh water. " +
     "The word <b>Michumash</b> ('makers of shell bead money') was the term mainland Chumash used for the islanders — giving us the name 'Chumash.' " +
     "The creation story places the first Chumash people on Limuw (Santa Cruz Island). When the island grew crowded, Earth Mother Hutash built a <b>rainbow bridge</b> (wishtoyo) from the island's tallest peak to Tzchimoos (the tall mountain near Carpinteria). " +
     "Those who looked down while crossing fell into the sea and became dolphins — which is why Chumash do not harm dolphins. " +
     "Human remains from <b>Arlington Springs</b> on Santa Rosa Island date to over 13,000 years — among the oldest in North America. " +
     "21 village sites identified across three main islands. The <b>tomol</b> tradition enabled an elaborate trade network in shell bead money ('achum) between islands and mainland."}
];

chumashDivisions.forEach(d => {
  L.polygon(d.territory, {
    color: d.color,
    weight: 2,
    opacity: 0.5,
    fillColor: d.color,
    fillOpacity: 0.07,
    dashArray: '5,3'
  }).addTo(L_groups.chumashSacred).bindPopup(`
    <div style="max-width:400px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:${d.color};margin:0 0 6px;">${d.name}</h4>
      <div style="font-size:12px;color:#ccc;line-height:1.55;">${d.desc}</div>
      <div style="font-size:10px;color:#888;margin-top:6px;">Sources: Kroeber 1925; Grant 1965, 1978; Johnson 1978, 1988; Robinson 2010; NPS; Santa Ynez Band of Chumash Indians</div>
    </div>`, {maxWidth:420});
});


// ===== FIVE SPANISH MISSIONS IN CHUMASH TERRITORY =====
const chumashMissions = [
  {name:"Mission San Luis Obispo de Tolosa", lat:35.2816, lng:-120.6602, year:1772,
   desc:"First mission in Chumash territory. Founded by Fr. Junípero Serra among the Obispeño Chumash. Named for the bishop of Toulouse."},
  {name:"Mission San Buenaventura", lat:34.2811, lng:-119.2948, year:1782,
   desc:"Founded among the Ventureño Chumash at the mouth of the Ventura River. Last mission founded personally by Serra."},
  {name:"Mission Santa Barbara", lat:34.4385, lng:-119.7136, year:1786,
   desc:"The 'Queen of the Missions.' Founded among the Barbareño Chumash at Syukhtun. The only California mission continuously operated by Franciscan friars since its founding. Site of the 1824 Chumash Revolt."},
  {name:"Mission La Purísima Concepción", lat:34.6730, lng:-120.4193, year:1787,
   desc:"Founded among the Purisimeño Chumash near Lompoc. Destroyed by earthquake in 1812 and rebuilt at present location. Now a State Historic Park with the most complete restoration of any California mission."},
  {name:"Mission Santa Inés (Santa Ynez)", lat:34.6121, lng:-120.0660, year:1804,
   desc:"Last mission founded in Chumash territory. Among the Ineseño / Samala Chumash in the Santa Ynez Valley. Site of the 1824 Chumash Revolt where warriors burned parts of the mission. The Santa Ynez Reservation is nearby."}
];

chumashMissions.forEach(m => {
  const icon = L.divIcon({
    className:'',
    html:`<div style="width:10px;height:10px;background:rgba(230,81,0,0.15);border:2px solid #8D6E63;border-radius:2px;"></div>`,
    iconSize:[10,10], iconAnchor:[5,5]
  });

  L.marker([m.lat, m.lng], {icon}).addTo(L_groups.chumashSacred).bindPopup(`
    <div style="max-width:340px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:#8D6E63;margin:0 0 4px;font-size:14px;">⛪ ${m.name} (${m.year})</h4>
      <div style="font-size:12px;color:#ccc;line-height:1.5;">${m.desc}</div>
      <div style="font-size:10px;color:#888;margin-top:4px;">By 1820, nearly all Chumash had been moved to these five missions. Population collapsed from ~15,000-20,000 to ~200 by 1900.</div>
    </div>`, {maxWidth:360});
});
