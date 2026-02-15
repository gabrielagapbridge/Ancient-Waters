// ===== LOST CHUMASH WATERS — WHAT WAS TAKEN FROM THE LAND =====
// "California has lost more than 90% of the estimated 4 million acres of
//  wetlands that once spread across the state... the nation's highest loss rate."
//  — Defenders of Wildlife
//
// "Since ca. 1850 there has been an overall loss of 9,317 hectares, or 48%
//  of historical estuarine habitat types along the Southern California Bight."
//  — San Francisco Estuary Institute, 2014
//
// "Santa Barbara County: 62% total estuarine loss — the highest of any county."
//
// "Over the past 200 years, California has lost 97% of its wetland habitat.
//  The Carpinteria Salt Marsh Reserve represents about 3% of what remains."
//  — U.S. Fish & Wildlife Service
//
// Sources: SFEI Historical Wetlands Atlas; NOAA; USFWS; SB Museum of Natural
//          History; Goleta History; SCWRP; UCLA Coastal Wetlands Study;
//          McCaslin 2016; Harrington field notes

const LW_RED = '#EF5350';      // Lost/destroyed
const LW_ORANGE = '#FF7043';   // Severely degraded
const LW_GHOST = '#78909C';    // Ghost outline — what was
const LW_GREEN = '#66BB6A';    // Restored or restoring

const lostWaters = [

  // ===========================
  // DESTROYED WETLANDS & ISLANDS
  // ===========================
  {name:"Mescaltitlan Island (Quwa') — DESTROYED",
   lat:34.4260, lng:-119.8420,
   type:"destroyed",
   desc:"A <b>sacred Chumash island</b> in the middle of Goleta Bay — the most densely populated area in all of aboriginal California. " +
     "Nine mountain streams fed the surrounding slough. The Portolá expedition (1769) described 'a very grand spot' with a 'large town' on the island. " +
     "In <b>1941</b>, the U.S. military <b>bulldozed Mescaltitlan Island</b> to use as fill dirt for the Santa Barbara Airport runways. " +
     "Construction crews unearthed Chumash remains. In 1943, Phil Orr found a woman buried on a whalebone, decorated with beads and abalone pressed into tar — a person of great importance. " +
     "'Many other valuable artifacts were undoubtedly destroyed in the rush to complete the airport.' " +
     "Today a small dirt mound is all that remains. A gas company owns it. A UCSB student film, <i>Quwa'</i> (2024), documented the loss."},

  {name:"Goleta Bay — FROM BAY TO SLOUGH",
   lat:34.4200, lng:-119.8500,
   type:"severely_degraded",
   desc:"What is now the Goleta Slough was once a <b>large navigable bay</b> — ships anchored here until the 1860s. " +
     "In Chumash times, water reached past present-day Hollister Avenue and connected to Devereux Slough, making the UCSB campus an island. " +
     "Chumash villages lined the shore: <b>Helo'</b>, <b>S'axpilil</b>, <b>Elhiman</b>, <b>Alwatalam</b>. " +
     "Two catastrophes transformed the bay: (1) the <b>1861-62 storms</b> eroded deforested hillsides and deposited massive sediment, filling the bay into marsh. " +
     "(2) The <b>WWII military airbase</b> (1942-43) filled remaining wetlands with dirt from the bulldozed Mescaltitlan Island. " +
     "Only about <b>one-third of the original wetland area remains</b>. The 440-acre Goleta Slough Ecological Reserve (1986) protects what's left."},

  {name:"Upper Devereux Slough — GOLF COURSE TO WETLAND",
   lat:34.4350, lng:-119.8800,
   type:"restoring",
   desc:"In the 1960s, the northern half of Devereux Slough was filled for the <b>Ocean Meadows Golf Course</b>, destroying roughly half the slough's estuarine habitat. " +
     "Devereux once connected to Goleta Slough, forming a single vast wetland system. " +
     "In 2017-2018, contractors <b>removed 350,000 cubic yards of fill dirt</b> to restore the slough's natural connection. " +
     "A 2022 Chumash blessing marked the reopening. The restoration increased Santa Barbara County's coastal wetlands by <b>10%</b> — 45 acres of coastal wetlands and 90 acres of uplands restored. " +
     "One of California's greatest wetland restoration success stories."},

  // ===========================
  // DEGRADED ESTUARIES & LAGOONS
  // ===========================
  {name:"Carpinteria Salt Marsh — 97% OF CA WETLANDS GONE",
   lat:34.3940, lng:-119.5300,
   type:"severely_degraded",
   desc:"Once extensive tidal wetlands surrounding the village of <b>Mishopshno</b>. " +
     "A century of draining for development has shrunk the marsh to <b>230 acres</b>. " +
     "The asphaltum (tar) seeps that Chumash used to waterproof tomol canoes still bubble here. " +
     "'Over the past 200 years, California has lost <b>97% of its wetland habitat</b>. The Carpinteria Salt Marsh Reserve represents about 3% of what remains.' — U.S. Fish & Wildlife Service. " +
     "Only <b>10% of southern California's coastal wetlands</b> survive. " +
     "Restoration ongoing — Ridgway's rail reintroduction, Basin 1 enhancement, native habitat recovery."},

  {name:"Santa Ynez Estuary — DIMINISHED",
   lat:34.6850, lng:-120.6100,
   type:"severely_degraded",
   desc:"The mouth of the Santa Ynez River once supported a thriving estuary with tidewater goby, steelhead, and likely beaver-created pools. " +
     "Three upstream dams (Gibraltar 1920, Juncal 1930, Bradbury/Cachuma 1953) reduced freshwater flows dramatically. " +
     "The estuary still functions but is a shadow of its historical self — diminished flows, reduced sediment, fewer fish. " +
     "Tidewater goby still cling to survival here. Beaver dams historically created the calm backwater habitat the gobies depend on."},

  {name:"Malibu Lagoon / Humaliwo — DEGRADED & RESTORED",
   lat:34.0340, lng:-118.6800,
   type:"restoring",
   desc:"The lagoon at the mouth of Malibu Creek, site of the <b>7,000-year-old village Humaliwo</b>. " +
     "Rindge Dam (1926) upstream blocks all steelhead and 70+ miles of habitat. The lagoon was severely degraded by parking lot runoff, septic systems, and channelization. " +
     "A controversial <b>$6M restoration in 2012</b> removed fill, restored tidal channels, and replanted native vegetation. " +
     "A <b>Chumash blessing ceremony</b> opened the restoration. " +
     "Steelhead still cannot reach the lagoon's full potential until Rindge Dam is removed."},

  {name:"Ormond Beach Wetlands — DRAINED & POLLUTED",
   lat:34.1300, lng:-119.1800,
   type:"severely_degraded",
   desc:"Over <b>1,000 acres</b> of historic wetlands between Point Mugu and Port Hueneme — once part of the Chumash coastal world between Muwu and Wenemu villages. " +
     "Most wetlands were <b>drained and converted to agriculture</b>. The site became a dumping ground for polluting industries — a power plant and the <b>EPA Halaco Superfund Site</b>. " +
     "South Oxnard, a poorer community, bears the environmental burden. " +
     "Roads and levees hydrologically disconnected Ormond from the 2,100 acres of Mugu Lagoon wetlands. " +
     "Restoration planning underway — could become the <b>largest continuous coastal wetland in Southern California</b> (9 miles from Mugu to Hueneme)."},

  {name:"Mission Creek Lagoon — CHANNELIZED",
   lat:34.4070, lng:-119.6830,
   type:"severely_degraded",
   desc:"Mission Creek flows 7.5 miles from Los Padres National Forest through downtown Santa Barbara to a lagoon at East Beach. " +
     "The village of <b>Syukhtun</b> (pop ~1,000) stood at this creek's outflow. " +
     "The lower creek was <b>channelized into concrete flood control</b>. Three major fish passage barriers blocked endangered steelhead. " +
     "Barriers removed in recent years — opening 5 miles of new steelhead habitat. " +
     "The Mission Lagoon restoration plan calls for removing 700+ feet of channelized creek and recovering historical wetlands."},

  {name:"McGrath State Beach / Santa Clara Estuary — SEWAGE & FLOODS",
   lat:34.2230, lng:-119.2640,
   type:"severely_degraded",
   desc:"The estuary at the mouth of the <b>Santa Clara River</b> — Southern California's second-largest river and the least altered in the region. " +
     "Historically, the estuary supported tidewater goby, steelhead, and vast shorebird populations. " +
     "Ventura's <b>wastewater discharges</b> have caused repeated flooding, closing the McGrath campground multiple times. " +
     "The 133-acre Natural Preserve protects what remains. A plan to move the campground would free 35 acres for wetland restoration. " +
     "Harrington's informants described <b>beaver</b> at Saticoy and Ventura — the beaver-created backwater pools were part of this river's ecology."},

  // ===========================
  // DRIED SPRINGS & LOST WATER SOURCES
  // ===========================
  {name:"Montgomery Springs (Sapaksi) — NOW DRY",
   lat:34.8830, lng:-119.6670,
   type:"destroyed",
   desc:"The <b>five springs of Montgomery Potrero</b> at the foot of Sapaksi (Painted Rock). " +
     "These springs sustained the Emigdiano Chumash for millennia — the 'House of the Sun' ceremony site at 5,000 feet depended on this water. " +
     "The springs are <b>now dry</b> (McCaslin 2016). Groundwater pumping and climate change have eliminated them. " +
     "Without water, the ceremonial landscape of Sapaksi is fundamentally altered — the relationship between sacred art and living springs is broken."},

  {name:"Matilija Hot Springs — BURIED BY SEDIMENT",
   lat:34.4980, lng:-119.3250,
   type:"severely_degraded",
   desc:"Hot springs on Matilija Creek, upstream of the dam. A place of healing for the Chumash of the Ojai Valley. " +
     "Matilija Dam (1947) has lost <b>90% of its reservoir capacity to sediment</b>. " +
     "The dam was built <b>against Army Corps advice</b>. It blocks all steelhead migration and has buried upstream habitat under silt. " +
     "The <b>$111M removal project</b> would drill holes in the dam's base and let the river reclaim its channel — but millions of cubic yards of trapped sediment must be managed."},

  // ===========================
  // INUNDATED VILLAGE SITES
  // ===========================
  {name:"Cachuma Village — DROWNED BY DAM",
   lat:34.5850, lng:-119.9500,
   type:"destroyed",
   desc:"The Ineseño Chumash village of <b>Aqicum</b> ('a constant sign') stood in Cachuma Canyon for thousands of years. " +
     "When <b>Bradbury Dam was completed in 1953</b>, Lake Cachuma rose and <b>inundated the village site</b>. " +
     "The dam obliterated thousands of years of Chumash culture beneath reservoir waters. " +
     "The modern lake and county park bear the village's name — but the village itself is gone. " +
     "25,000 steelhead once spawned in the Santa Ynez River above this point. Now 99% are gone."},

  {name:"Twitchell Reservoir — INUNDATED CUYAMA HABITAT",
   lat:34.9600, lng:-120.2600,
   type:"destroyed",
   desc:"<b>Twitchell Dam</b> (1958) inundated the confluence area of the Cuyama and Sisquoc Rivers, blocking <b>66 miles of steelhead habitat</b>. " +
     "The Cuyama River was a sacred Chumash interior corridor — its headwaters in the Chumash Wilderness at 8,000 feet. " +
     "The dam severed the connection between the coastal Santa Maria River and the interior Cuyama watershed."},

  // ===========================
  // CHANNELIZED & ALTERED CREEKS
  // ===========================
  {name:"San Jose Creek — CHANNELIZED STEELHEAD STREAM",
   lat:34.4400, lng:-119.8100,
   type:"severely_degraded",
   desc:"The largest sub-watershed within the Goleta Slough system. Designated a <b>Core 1 steelhead watershed</b> by NMFS. " +
     "Upper reaches have perennial flows and high-quality spawning habitat, but access is impeded by channelization and barriers. " +
     "This creek once flowed freely through Chumash village territory to the great bay of Goleta."},

  {name:"Ventura River — Rice Creek Rerouted",
   lat:34.3500, lng:-119.3100,
   type:"severely_degraded",
   desc:"Historical ecology analysis by CRC revealed that a <b>channelized section of Rice Creek on the Ventura River Preserve was not the historic alignment</b>. " +
     "The creek was physically moved from its natural course. The Ventura River system — Chumash <b>Shisholop</b> — is 100% dependent on local water, no imports. " +
     "Matilija Dam (1947) and Robles Diversion (1958) fragment the system. A $6M fish ladder (2006) at Robles was required to pass steelhead."},

  {name:"Arroyo Burro — VILLAGE CREEK URBANIZED",
   lat:34.4020, lng:-119.7450,
   type:"severely_degraded",
   desc:"The creek where the Chumash village of <b>Mismatuk</b> stood, near Santa Barbara Mission. " +
     "Now flows through developed urban landscape. The connection between village site and living creek is severed by roads, buildings, and culverts."}
];


// ===== GHOST POLYGONS — HISTORICAL WETLAND EXTENTS =====
const ghostWetlands = [
  {name:"Goleta Bay — Historical Extent (pre-1862)",
   coords:[
     [34.4350, -119.8650], [34.4380, -119.8550], [34.4400, -119.8420],
     [34.4350, -119.8300], [34.4280, -119.8200], [34.4220, -119.8150],
     [34.4180, -119.8200], [34.4150, -119.8350], [34.4130, -119.8500],
     [34.4160, -119.8600], [34.4200, -119.8680], [34.4280, -119.8700],
     [34.4350, -119.8650]
   ],
   desc:"In Chumash times, Goleta Bay was a <b>large navigable body of water</b> fed by nine mountain streams. " +
     "Water reached past present-day Hollister Avenue and Highway 101. " +
     "The most densely populated area in all of Chumash territory — and likely all of aboriginal California. " +
     "This ghost polygon shows the approximate historical water extent before the 1862 storms and airport construction destroyed it."},

  {name:"Devereux-Goleta Connection (Historical)",
   coords:[
     [34.4300, -119.8700], [34.4330, -119.8750], [34.4350, -119.8820],
     [34.4360, -119.8900], [34.4340, -119.8950], [34.4310, -119.8920],
     [34.4280, -119.8850], [34.4270, -119.8770], [34.4300, -119.8700]
   ],
   desc:"Devereux Slough once <b>connected to Goleta Slough</b>, forming a single vast wetland system. " +
     "When water was high, this connection made the present-day UCSB campus an island. " +
     "The connection was severed by sedimentation, development, and the airport."},

  {name:"Ormond Beach Historical Wetlands",
   coords:[
     [34.1450, -119.2050], [34.1450, -119.1750], [34.1350, -119.1550],
     [34.1200, -119.1500], [34.1100, -119.1600], [34.1100, -119.1800],
     [34.1150, -119.2000], [34.1300, -119.2100], [34.1450, -119.2050]
   ],
   desc:"Over <b>1,000 acres of historic wetlands</b> between Mugu Lagoon and Port Hueneme. " +
     "Once part of a continuous 9-mile coastal wetland system. " +
     "Drained for agriculture, disconnected by roads and levees, polluted by industry. " +
     "The EPA Halaco Superfund Site sits on former Chumash wetlands."}
];


// ===== RENDER LOST WATERS =====
lostWaters.forEach(lw => {
  const colors = {
    destroyed: LW_RED,
    severely_degraded: LW_ORANGE,
    restoring: LW_GREEN
  };
  const color = colors[lw.type] || LW_GHOST;
  const statusLabel = {
    destroyed: 'DESTROYED / GONE',
    severely_degraded: 'SEVERELY DEGRADED',
    restoring: 'RESTORING'
  }[lw.type] || 'ALTERED';

  // Geometric shapes: × for destroyed, ◆ for degraded, ○ for restoring
  const shapeHtml = {
    destroyed: `<div style="width:12px;height:12px;position:relative;"><div style="position:absolute;top:5px;left:0;width:12px;height:2px;background:${LW_RED};transform:rotate(45deg);border-radius:1px;"></div><div style="position:absolute;top:5px;left:0;width:12px;height:2px;background:${LW_RED};transform:rotate(-45deg);border-radius:1px;"></div></div>`,
    severely_degraded: `<div style="width:10px;height:10px;background:${LW_ORANGE};transform:rotate(45deg);border:1.5px solid rgba(255,255,255,0.5);opacity:0.9;"></div>`,
    restoring: `<div style="width:10px;height:10px;border-radius:50%;border:2px solid ${LW_GREEN};background:transparent;opacity:0.9;"></div>`
  }[lw.type] || `<div style="width:8px;height:8px;border-radius:50%;background:${LW_GHOST};"></div>`;

  const symbolChar = {destroyed:'✕', severely_degraded:'◆', restoring:'○'}[lw.type] || '•';

  const icon = L.divIcon({
    className:'',
    html: shapeHtml,
    iconSize:[14,14], iconAnchor:[7,7]
  });

  const popup = `
    <div style="max-width:440px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:${color};margin:0 0 4px;font-size:14px;"><span style="font-size:12px;">${symbolChar}</span> ${lw.name}</h4>
      <div style="display:inline-block;padding:1px 8px;border-radius:3px;background:${color}22;color:${color};font-size:10px;font-weight:600;margin-bottom:6px;">${statusLabel}</div>
      <div style="font-size:12px;color:#ccc;line-height:1.55;">${lw.desc}</div>
      <div style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid ${color}33;padding-top:4px;">
        Sources: SFEI; USFWS; NOAA; Goleta History; SCWRP; McCaslin 2016
      </div>
    </div>`;

  L.marker([lw.lat, lw.lng], {icon}).addTo(L_groups.lostWaters).bindPopup(popup, {maxWidth:460});
});


// ===== RENDER GHOST POLYGONS =====
ghostWetlands.forEach(gw => {
  const polygon = L.polygon(gw.coords, {
    color: LW_GHOST,
    weight: 2,
    dashArray: '8, 6',
    fillColor: LW_GHOST,
    fillOpacity: 0.08,
    opacity: 0.5
  }).addTo(L_groups.lostWaters);

  polygon.bindPopup(`
    <div style="max-width:400px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:${LW_GHOST};margin:0 0 4px;font-size:14px;">${gw.name}</h4>
      <div style="display:inline-block;padding:1px 8px;border-radius:3px;background:${LW_GHOST}22;color:${LW_GHOST};font-size:10px;font-weight:600;margin-bottom:6px;">GHOST — HISTORICAL EXTENT</div>
      <div style="font-size:12px;color:#ccc;line-height:1.55;">${gw.desc}</div>
    </div>`, {maxWidth:420});
});


// ===== STATISTICS MARKER =====
const statsMarker = L.marker([34.30, -119.50], {
  icon: L.divIcon({
    className:'',
    html:'<div style="background:rgba(239,83,80,0.12);border:1px dashed rgba(239,83,80,0.4);border-radius:4px;padding:3px 8px;font:10px \'Source Sans Pro\',sans-serif;color:#EF5350;white-space:nowrap;line-height:1.4;">' +
         'CA wetland loss: 90%+ statewide<br>' +
         '&nbsp;&nbsp;&nbsp;SB County: 62% estuarine loss<br>' +
         '&nbsp;&nbsp;&nbsp;SoCal coast: 48% since 1850<br>' +
         '&nbsp;&nbsp;&nbsp;Vegetated marsh: 75% gone</div>',
    iconSize:[210,55], iconAnchor:[105,28]
  })
}).addTo(L_groups.lostWaters);

statsMarker.bindPopup(`
  <div style="max-width:440px;font-family:'Source Sans Pro',sans-serif;">
    <h4 style="color:${LW_RED};margin:0 0 6px;">The Numbers of Loss</h4>
    <div style="font-size:12px;color:#ccc;line-height:1.7;">
      <b style="color:${LW_RED};">90%+</b> — California's total wetland loss (highest in the nation)<br>
      <b style="color:${LW_RED};">62%</b> — Santa Barbara County estuarine loss (highest of any SoCal county)<br>
      <b style="color:${LW_RED};">48%</b> — Total Southern California Bight coastal wetland loss since 1850<br>
      <b style="color:${LW_RED};">75%</b> — Vegetated wetland loss (salt marsh) across SoCal coast<br>
      <b style="color:${LW_RED};">78%</b> — Unvegetated wetland loss (mudflats, salt flats)<br>
      <b style="color:${LW_RED};">85%</b> — Historical tidal wetland loss across CA, OR, WA combined<br>
      <b style="color:${LW_RED};">97%</b> — California coastal wetland habitat loss per USFWS<br>
      <b style="color:${LW_RED};">99%</b> — Steelhead decline in the Santa Ynez River (25,000 → <500)<br><br>
      <b style="color:${LW_ORANGE};">49,000 acres</b> — Historical SoCal coast estuarine habitat<br>
      <b style="color:${LW_ORANGE};">33,400 acres</b> — Historical SoCal coastal wetlands total<br>
      <b style="color:${LW_ORANGE};">9,317 hectares</b> — Total area lost since 1850<br><br>
      <span style="color:#66BB6A;">Hope:</span> With sea level rise management, SoCal could gain <b>7,700 acres</b> of new wetlands by 2100 — but only with immediate action.
    </div>
    <div style="font-size:10px;color:#888;margin-top:6px;">
      Sources: SFEI 2014; SCCWRP #826; NOAA; USFWS; Defenders of Wildlife; UCLA; CA Water Board
    </div>
  </div>`, {maxWidth:460});


// ===== LEGEND =====
const lwLegend = L.control({position:'bottomleft'});
lwLegend.onAdd = function(){
  const d = L.DomUtil.create('div','legend');
  d.style.cssText = 'background:rgba(30,30,30,0.92);padding:10px 14px;border-radius:6px;color:#ccc;font:11px "Source Sans Pro",sans-serif;border:1px solid rgba(239,83,80,0.25);';
  d.innerHTML = '<div style="font-weight:700;color:#EF5350;margin-bottom:5px;">Lost Chumash Waters</div>' +
    '<div style="margin:3px 0;"><span style="color:'+LW_RED+'">✕</span> Destroyed / Gone</div>' +
    '<div style="margin:3px 0;"><span style="color:'+LW_ORANGE+'">◆</span> Severely Degraded</div>' +
    '<div style="margin:3px 0;"><span style="color:'+LW_GREEN+'">○</span> Restoring</div>' +
    '<div style="margin:3px 0;"><span style="color:'+LW_GHOST+'">- - -</span> Ghost — Historical Extent</div>';
  return d;
};
lwLegend.addTo(map);
