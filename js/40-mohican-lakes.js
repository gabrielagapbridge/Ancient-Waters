// ============================================================
// MOHICAN TERRITORY — Lakes: What Changed, What Was Created
// Original ponds vs. modern dam-enlarged lakes,
// NYC reservoirs, Housatonic River dams
// ============================================================
// CORE MESSAGE: Most "lakes" in the Berkshires and Hudson Valley
// are artificial or dramatically enlarged. Mohicans lived in a
// landscape of streams, wetlands, small ponds, and the Housatonic
// corridor — NOT a landscape of large lakes.
//
// Sources: Berkshire Eagle historical archives; MA DEP dam records;
//   Stockbridge-Munsee Band of Mohican Indians; NYC DEP watershed
//   records; CT DEEP dam inventory; EPA Housatonic River Superfund;
//   USGS lake bathymetry surveys
// ============================================================

const LKS = {
  before:    '#87CEEB',  // light sky blue — original (pre-dam) water
  after:     '#4169E1',  // royal blue — modern (post-dam) water
  reservoir: '#1565C0',  // dark blue — NYC reservoirs
  dam:       '#A52A2A',  // brown — dams
  pcb:       '#8B0000',  // dark red — PCB contamination
  wetland:   '#90EE90',  // light green — original wetlands
  mohican:   '#8B4513'   // saddle brown — Mohican sites
};

// ==================== PONTOOSUC LAKE — The 25x Expansion ====================

// --- Original: Two small ponds (~10 acres each, ~20 total) ---
// Northern pond
L.circle([42.4840, -73.2510], {
  radius: 140, color: LKS.before, weight: 2, opacity: 0.9,
  fillColor: LKS.before, fillOpacity: 0.5, dashArray: '5,3'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${LKS.before}">💧 Pontoosuc — Original Northern Pond</h3>
  <p><b>Size:</b> ~10 acres</p>
  <p><b>Type:</b> Small glacial kettle or spring-fed pond</p>
  <p><b>Mohican name:</b> <i>Pontoosuck</i> — "a field or haven for winter deer." Also <i>Moonkeek-Shoonkeek</i> — after two legendary lovers who drowned together.</p>
  <p><b>Use:</b> Fishing (perch, sunfish, eel), water source. A modest feature in a landscape dominated by the Housatonic River, wetlands, and hardwood forest.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;">One of two original ponds that were merged and expanded 25x by mill dams.</p>
</div>`, {maxWidth: 360}).addTo(L_groups.mohicanLakesBefore);

// Southern pond
L.circle([42.4720, -73.2530], {
  radius: 140, color: LKS.before, weight: 2, opacity: 0.9,
  fillColor: LKS.before, fillOpacity: 0.5, dashArray: '5,3'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${LKS.before}">💧 Pontoosuc — Original Southern Pond</h3>
  <p><b>Size:</b> ~10 acres</p>
  <p>Second of two small natural ponds that existed before mill dams merged and enlarged them. Each was roughly 600–700 feet across.</p>
</div>`, {maxWidth: 340}).addTo(L_groups.mohicanLakesBefore);

// --- Modern: Full Pontoosuc Lake (~500 acres) ---
L.polygon([
  [42.4920, -73.2560], [42.4900, -73.2480], [42.4860, -73.2440],
  [42.4810, -73.2420], [42.4760, -73.2430], [42.4710, -73.2450],
  [42.4660, -73.2480], [42.4630, -73.2520], [42.4640, -73.2570],
  [42.4670, -73.2600], [42.4720, -73.2610], [42.4780, -73.2600],
  [42.4830, -73.2580], [42.4880, -73.2570], [42.4920, -73.2560]
], {
  color: LKS.after, weight: 2, opacity: 0.7,
  fillColor: LKS.after, fillOpacity: 0.2
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${LKS.after}">🏗️ Pontoosuc Lake — Modern (25x Original Size)</h3>
  <p><b>Modern size:</b> ~480–511 acres, max depth 35 ft</p>
  <p><b>Original:</b> Two small ponds, ~20 acres total</p>
  <p><b>Expansion:</b> <span style="color:${LKS.dam};font-weight:bold;">25x larger</span> than what any Mohican ever saw</p>
  <p><b>How:</b> Mill dams on outlet streams raised water levels and merged the two ponds into one large lake (19th century, updated/reinforced 2005).</p>
  <p><b>Problems:</b> Now plagued by Eurasian milfoil, curly-leaf pondweed, and cyanobacteria blooms — problems that didn't exist when it was two small ponds with balanced ecosystems.</p>
  <p><b>Seasonal drawdowns:</b> 3–5 ft each winter for dam safety and invasive species control.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> MA DEP; Berkshire Regional Planning Commission; "Pontoosuc Lake" diagnostic/feasibility study</p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanLakesAfter);

// ==================== ONOTA LAKE — The Two-Basins Story ====================

// --- Original: South basin (natural glacial lake, ~350-400 acres) ---
L.polygon([
  [42.4640, -73.2870], [42.4610, -73.2810], [42.4560, -73.2780],
  [42.4500, -73.2790], [42.4450, -73.2820], [42.4420, -73.2870],
  [42.4440, -73.2920], [42.4490, -73.2950], [42.4550, -73.2950],
  [42.4610, -73.2930], [42.4640, -73.2870]
], {
  color: LKS.before, weight: 2, opacity: 0.9,
  fillColor: LKS.before, fillOpacity: 0.4, dashArray: '5,3'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${LKS.before}">💧 Onota — Original South Basin (Natural Glacial Lake)</h3>
  <p><b>Size:</b> ~350–400 acres (estimated)</p>
  <p><b>Depth:</b> Up to 72 feet — classic glacial lake depth</p>
  <p><b>Type:</b> Natural glacial lake — the deeper, larger basin</p>
  <p><b>Context:</b> An old roadway marked the north end of the original lake before the dam was built. The north basin was a separate, shallower wetland/pond area.</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanLakesBefore);

// --- Original: North basin area (wetland/shallow pond) ---
L.polygon([
  [42.4780, -73.2860], [42.4760, -73.2820], [42.4720, -73.2800],
  [42.4680, -73.2810], [42.4660, -73.2850], [42.4680, -73.2890],
  [42.4720, -73.2900], [42.4760, -73.2890], [42.4780, -73.2860]
], {
  color: LKS.wetland, weight: 2, opacity: 0.8,
  fillColor: LKS.wetland, fillOpacity: 0.3, dashArray: '4,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${LKS.wetland}">🌿 Onota — Original North Basin (Wetland/Shallow Pond)</h3>
  <p><b>Before the dam:</b> A separate, shallower wetland/pond area connected to but distinct from the south basin glacial lake. Dense aquatic vegetation in areas less than 10 feet deep.</p>
  <p><b>Land bridge:</b> An old roadway marked where land separated the two basins — now submerged under the expanded lake.</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanLakesBefore);

// --- Modern: Full Onota Lake (~617-653 acres) ---
L.polygon([
  [42.4810, -73.2880], [42.4790, -73.2810], [42.4740, -73.2770],
  [42.4680, -73.2760], [42.4620, -73.2770], [42.4560, -73.2780],
  [42.4500, -73.2790], [42.4440, -73.2810], [42.4400, -73.2850],
  [42.4410, -73.2910], [42.4450, -73.2950], [42.4510, -73.2970],
  [42.4570, -73.2970], [42.4640, -73.2960], [42.4700, -73.2940],
  [42.4760, -73.2920], [42.4810, -73.2880]
], {
  color: LKS.after, weight: 2, opacity: 0.7,
  fillColor: LKS.after, fillOpacity: 0.2
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${LKS.after}">🏗️ Onota Lake — Modern (Dam Merged Two Water Bodies)</h3>
  <p><b>Modern size:</b> 617–653 acres, max depth 72 ft, 7.4 miles shoreline</p>
  <p><b>Largest body of water</b> in the Upper Housatonic Watershed</p>
  <p><b>How:</b> 19th-century dam raised water levels and merged a natural glacial lake (south basin) with a separate wetland/shallow pond (north basin) into one lake.</p>
  <p><b>Evidence:</b> An old roadway marks the former land bridge between basins — the north and south basins still have minimal water exchange, behaving as "two lakes in one."</p>
  <p><b>Threats:</b> Zebra mussels (detected in nearby Laurel Lake), invasive species, nutrient loading.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> MA DEP; Berkshire Regional Planning Commission; USGS</p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanLakesAfter);

// ==================== STOCKBRIDGE BOWL (Lake Mahkeenac) — The Mohican Dam ====================

// --- Original: Wetland complex with small pond ---
L.polygon([
  [42.3510, -73.3270], [42.3500, -73.3250], [42.3485, -73.3240],
  [42.3470, -73.3250], [42.3465, -73.3270], [42.3475, -73.3290],
  [42.3490, -73.3295], [42.3505, -73.3285], [42.3510, -73.3270]
], {
  color: LKS.wetland, weight: 2, opacity: 0.8,
  fillColor: LKS.wetland, fillOpacity: 0.35, dashArray: '4,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${LKS.wetland}">🌿 Mahkeenac — Original Wetland Complex</h3>
  <p><b>Mohican name:</b> <i>Mahkeenac</i> — "home of the Mahekanus" (home of the Mohicans)</p>
  <p><b>Before damming:</b> A wetland complex, likely with a small natural pond at its core. The Berkshire Eagle reports the area "was a wetlands most likely frequented by the town's original settlers."</p>
  <p><b>Mohican life:</b> Native Americans lived on a plain above the wetland that became the site of Tanglewood.</p>
  <p><b>Mohican dam (c. 1750):</b> Remarkably, the Mohicans were FIRST to dam this water. Oral tradition holds they raised the water to flood a coal mine so white settlers couldn't work it. When the town dug under a gas pipeline, they unearthed an old wooden dam, circa 1750 — potentially Mohican-era.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Berkshire Eagle; NYT 1926 report; Stockbridge-Munsee Band</p>
</div>`, {maxWidth: 420}).addTo(L_groups.mohicanLakesBefore);

// --- Modern: Full Stockbridge Bowl (372 acres) ---
L.polygon([
  [42.3580, -73.3310], [42.3560, -73.3250], [42.3530, -73.3210],
  [42.3490, -73.3190], [42.3450, -73.3200], [42.3410, -73.3220],
  [42.3380, -73.3260], [42.3370, -73.3300], [42.3385, -73.3340],
  [42.3410, -73.3360], [42.3450, -73.3370], [42.3500, -73.3360],
  [42.3540, -73.3340], [42.3570, -73.3320], [42.3580, -73.3310]
], {
  color: LKS.after, weight: 2, opacity: 0.7,
  fillColor: LKS.after, fillOpacity: 0.2
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${LKS.after}">🏗️ Stockbridge Bowl — 372 Acres (Entirely Artificial)</h3>
  <p><b>Modern size:</b> 372 acres — described as "a 372-acre artificially impounded body of water"</p>
  <p><b>Was:</b> A wetland complex. The entire lake is essentially a creation of damming.</p>
  <p><b>Dam history — remarkably layered:</b></p>
  <p>• <b>c. 1750:</b> Mohicans built the first dam (oral tradition + archaeological evidence of wooden dam)</p>
  <p>• <b>1840:</b> Dam rebuilt, raised 1.5 ft for Curtisville Cotton Manufacturing</p>
  <p>• <b>1868:</b> Barker family raised Newton dam to merge two water privileges</p>
  <p>• <b>1880:</b> Current 340-foot-long earthen dam completed</p>
  <p>• <b>1915:</b> Dan Hanna added flashboards, raised lake to "abnormal height" — sued</p>
  <p>• Dam eventually <b>blown up</b> after lawsuit; lake dropped to lowest level in 100 years</p>
  <p>• <b>1930s:</b> Water level raised again after public demand</p>
  <p><b>Today:</b> Home to Tanglewood (Boston Symphony), Kripalu, Camp Mah-Kee-Nac, 400+ homes. Suffers from eutrophication.</p>
  <p><b>Kwuniikwat Island:</b> The 2-acre island was named by Stockbridge-Munsee tribal council — Mohican for "appearing long."</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Berkshire Eagle; NYT 1926; Stockbridge-Munsee Band; MA DEP</p>
</div>`, {maxWidth: 420}).addTo(L_groups.mohicanLakesAfter);

// --- Kwuniikwat Island marker ---
L.circleMarker([42.3490, -73.3270], {radius: 4, color: LKS.mohican, fillColor: LKS.mohican, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${LKS.mohican}">🏝️ Kwuniikwat Island</h3>
    <p><b>Meaning:</b> "Appearing long" (Mohican)</p>
    <p><b>Named:</b> 2018 by the Stockbridge-Munsee tribal council</p>
    <p><b>Size:</b> 2 acres, in the center of Stockbridge Bowl (Lake Mahkeenac)</p>
    <p>A living act of Mohican naming in a landscape that was reshaped by damming but never forgotten.</p>
  </div>`).addTo(L_groups.mohicanLakesAfter);

// ==================== WOODS POND — The PCB Trap ====================

L.polygon([
  [42.3250, -73.2900], [42.3230, -73.2860], [42.3200, -73.2850],
  [42.3170, -73.2870], [42.3165, -73.2910], [42.3185, -73.2940],
  [42.3210, -73.2950], [42.3240, -73.2930], [42.3250, -73.2900]
], {
  color: LKS.pcb, weight: 2.5, opacity: 0.8,
  fillColor: LKS.pcb, fillOpacity: 0.3
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${LKS.pcb}">☠️ Woods Pond — The PCB Trap</h3>
  <p><b>Location:</b> Lenox, MA — dam-created impoundment on the Housatonic River</p>
  <p><b>Contains:</b> <span style="color:${LKS.pcb};font-weight:bold;">~11,000 pounds of PCBs</span> — approximately <b>50% of all the PCBs in the entire Housatonic River</b></p>
  <p><b>Concentrations:</b> Up to 110 mg/kg in sediment</p>
  <p><b>How:</b> The Woods Pond Dam acts as a sediment trap, catching PCB-laden sediment washing downstream from GE's Pittsfield facilities. Without the dam, the poison would have been more dispersed. The dam concentrated it into one horrific hot spot.</p>
  <p><b>Before:</b> This was a free-flowing section of the Housatonic River — no impoundment, no dam, no trapped poison.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> EPA Housatonic River Superfund; MA DEP; Weston & Sampson 2004</p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanLakesAfter);

// ==================== RICHMOND POND — Headwater Lake ====================

L.circleMarker([42.3830, -73.3580], {radius: 4, color: LKS.before, fillColor: LKS.before, fillOpacity: 0.6, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${LKS.before}">💧 Richmond Pond — Housatonic Headwater</h3>
    <p><b>Location:</b> Richmond, MA</p>
    <p><b>Description:</b> Feeds the West Branch of the Housatonic River. Drops 140 feet in ~5 miles before joining the East Branch to form the Housatonic mainstem. One of the headwater lakes of the entire Housatonic system.</p>
  </div>`).addTo(L_groups.mohicanLakesBefore);

// ==================== HOUSATONIC RIVER DAMS (30 in Pittsfield by 1900) ====================

const housatonicDams = [
  // Berkshire County (MA)
  {pos:[42.3200, -73.2870], name:'Woods Pond Dam', town:'Lenox', note:'PCB trap — 11,000 lbs of PCBs trapped behind dam'},
  {pos:[42.3050, -73.2480], name:'Columbia Mill Dam', town:'Lee', note:'Mill dam on mainstem'},
  {pos:[42.2920, -73.2630], name:'Willow Mill Dam', town:'South Lee', note:'Historic mill dam'},
  {pos:[42.2830, -73.3220], name:'Glendale Dam', town:'Stockbridge', note:'Impounds river in Glendale section'},
  {pos:[42.1960, -73.3620], name:'Rising Pond Dam', town:'Great Barrington', note:'Impounds Rising Pond on mainstem'},
  // Connecticut
  {pos:[41.9530, -73.3610], name:'Falls Village Dam', town:'Falls Village, CT', note:'Hydroelectric; blocks fish passage'},
  {pos:[41.7390, -73.4850], name:'Bulls Bridge Dam', town:'Kent, CT', note:'Hydroelectric dam'},
  {pos:[41.4650, -73.2730], name:'Shepaug Dam', town:'Southbury, CT', note:'Creates Lake Lillinonah — 1,900 acres'},
  {pos:[41.3800, -73.2300], name:'Stevenson Dam', town:'Monroe, CT', note:'Creates Lake Zoar — 975 acres'},
  {pos:[41.3250, -73.0850], name:'Derby Dam', town:'Shelton, CT', note:'Creates Lake Housatonic — 328 acres'}
];

housatonicDams.forEach(d => {
  L.circleMarker(d.pos, {radius: 4, color: LKS.dam, fillColor: LKS.dam, fillOpacity: 0.7, weight: 2})
    .bindPopup(`<div class="popup-content">
      <h3 style="color:${LKS.dam}">⬛ ${d.name}</h3>
      <p><b>Location:</b> ${d.town}</p>
      <p><b>River:</b> Housatonic</p>
      <p>${d.note}</p>
      <p><b>Context:</b> By 1900, there were 30 dams on the Housatonic in Pittsfield alone. The Mohicans knew this as <i>Usi-a-di-en-uk</i> — a free-flowing 149-mile river from Pittsfield to Long Island Sound.</p>
      <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> CT DEEP dam inventory; MA DEP; EPA Housatonic Superfund</p>
    </div>`).addTo(L_groups.mohicanHousatonicDams);
});

// --- Candlewood Lake (CT's largest — entirely artificial) ---
L.polygon([
  [41.5100, -73.4750], [41.5000, -73.4600], [41.4850, -73.4500],
  [41.4700, -73.4450], [41.4550, -73.4400], [41.4400, -73.4420],
  [41.4300, -73.4500], [41.4250, -73.4600], [41.4300, -73.4700],
  [41.4400, -73.4750], [41.4550, -73.4780], [41.4700, -73.4800],
  [41.4850, -73.4790], [41.5000, -73.4770], [41.5100, -73.4750]
], {
  color: LKS.reservoir, weight: 2, opacity: 0.7,
  fillColor: LKS.reservoir, fillOpacity: 0.2
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${LKS.reservoir}">🏗️ Candlewood Lake — CT's Largest (Entirely Artificial)</h3>
  <p><b>Size:</b> 5,400 acres</p>
  <p><b>Created:</b> 1926 — pump-storage reservoir, entirely artificial</p>
  <p><b>Connecticut's largest lake</b> is a man-made reservoir. There was no lake here before 1926.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> CT DEEP; CL&P/Eversource records</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanLakesAfter);

// --- CT Housatonic impoundments ---
const ctImpoundments = [
  {name:'Lake Lillinonah', pos:[41.4650, -73.2600], acres:1900, dam:'Shepaug Dam'},
  {name:'Lake Zoar', pos:[41.3800, -73.2200], acres:975, dam:'Stevenson Dam'},
  {name:'Lake Housatonic', pos:[41.3250, -73.0750], acres:328, dam:'Derby Dam'}
];

ctImpoundments.forEach(l => {
  L.circleMarker(l.pos, {radius: 5, color: LKS.reservoir, fillColor: LKS.reservoir, fillOpacity: 0.5, weight: 2})
    .bindPopup(`<div class="popup-content">
      <h3 style="color:${LKS.reservoir}">🏗️ ${l.name} (${l.acres} acres)</h3>
      <p><b>Created by:</b> ${l.dam}</p>
      <p><b>Type:</b> Hydroelectric impoundment on the Housatonic River</p>
      <p><b>Before:</b> Free-flowing section of the Housatonic — <i>Usi-a-di-en-uk</i>. Fish (salmon, shad, herring, eel, sturgeon) traveled the entire 149-mile length.</p>
      <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> CT DEEP; FERC hydroelectric records</p>
    </div>`).addTo(L_groups.mohicanLakesAfter);
});

// ==================== NYC RESERVOIRS — Drowned Towns ====================

const nycReservoirs = [
  {
    name: 'Ashokan Reservoir', pos: [41.9350, -74.2200], year: 1915, acres: 8315,
    lost: 'Flooded the towns of Olive and Shokan, displacing 2,000+ people. Entire communities — homes, churches, cemeteries, farms — submerged.',
    src: 'NYC DEP; Galusha 1999 "Liquid Assets"'
  },
  {
    name: 'Pepacton Reservoir', pos: [42.0700, -74.8700], year: 1955, acres: 5700,
    lost: 'Largest in the NYC system. Flooded the towns of Arena, Pepacton, Shavertown, and Union Grove. Entire communities erased.',
    src: 'NYC DEP; Delaware County Historical Association'
  },
  {
    name: 'Cannonsville Reservoir', pos: [42.0800, -75.3200], year: 1964, acres: 4800,
    lost: 'Flooded the town of Cannonsville and surrounding communities. One of the last major NYC reservoir projects.',
    src: 'NYC DEP; Delaware County Historical Association'
  },
  {
    name: 'Rondout Reservoir', pos: [41.8400, -74.4200], year: 1950, acres: 2100,
    lost: 'Part of the Delaware System connecting western Catskills water to NYC.',
    src: 'NYC DEP'
  },
  {
    name: 'Neversink Reservoir', pos: [41.8200, -74.6400], year: 1954, acres: 1500,
    lost: 'Flooded the town of Neversink. Waters from here travel through the Neversink Tunnel to the Rondout Reservoir.',
    src: 'NYC DEP; Sullivan County Historical Society'
  },
  {
    name: 'Schoharie Reservoir', pos: [42.3800, -74.4500], year: 1926, acres: 1100,
    lost: 'Part of the Catskill System. Waters diverted through the Shandaken Tunnel to the Esopus Creek and then to Ashokan.',
    src: 'NYC DEP'
  }
];

nycReservoirs.forEach(r => {
  L.circleMarker(r.pos, {radius: 6, color: LKS.reservoir, fillColor: LKS.reservoir, fillOpacity: 0.6, weight: 2})
    .bindPopup(`<div class="popup-content">
      <h3 style="color:${LKS.reservoir}">🏗️ ${r.name} (${r.year})</h3>
      <p><b>Size:</b> ${r.acres.toLocaleString()} acres</p>
      <p style="color:#B22222;font-weight:bold;">${r.lost}</p>
      <p><b>Context:</b> NYC's water supply system dammed virtually every significant Hudson Valley tributary. These reservoirs drowned entire towns, villages, and landscapes that were part of the indigenous and colonial heritage of the region.</p>
      <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> ${r.src}</p>
    </div>`).addTo(L_groups.mohicanReservoirs);
});

// ==================== NATURAL GLACIAL LAKES (Unchanged) ====================

// --- Twin Lakes (Salisbury, CT — 5,000+ years of use, natural) ---
L.circleMarker([42.0200, -73.4300], {radius: 4, color: LKS.before, fillColor: LKS.before, fillOpacity: 0.6, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${LKS.before}">💧 Twin Lakes — Natural Glacial Lake (Relatively Unchanged)</h3>
    <p><b>Location:</b> Salisbury, CT</p>
    <p><b>Evidence of human use:</b> 5,000+ years</p>
    <p><b>Status:</b> One of the few natural glacial lakes in the region that remains relatively close to its original size. A rare window into what the pre-dam landscape actually looked like.</p>
  </div>`).addTo(L_groups.mohicanLakesBefore);

// --- Lake Champlain (natural, formed ~10,000 BP) ---
L.circleMarker([44.5300, -73.2800], {radius: 5, color: LKS.before, fillColor: LKS.before, fillOpacity: 0.5, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${LKS.before}">💧 Lake Champlain — Natural (Essentially Unchanged in Size)</h3>
    <p><b>Formed:</b> ~10,000 BP from the freshening of the Champlain Sea</p>
    <p><b>Status:</b> Essentially unchanged in size in modern times, though affected by pollution and invasive species.</p>
    <p><b>Names:</b></p>
    <p>• <i>Caniaderi Guarunte</i> (Iroquois) — "Door of the country"</p>
    <p>• <i>Pitawbagw</i> (Abenaki) — "Double lake"</p>
  </div>`).addTo(L_groups.mohicanLakesBefore);

// ==================== INDIGENOUS LAKE NAMES — Info Marker ====================

L.circleMarker([42.40, -73.30], {radius: 3, color: '#FFF', fillColor: '#333', fillOpacity: 0.8, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${LKS.mohican}">📖 Indigenous Lake & Water Names</h3>
    <table style="width:100%;border-collapse:collapse;font-size:11px;margin-top:8px;">
      <tr style="border-bottom:1px solid rgba(193,154,107,0.3);">
        <td style="padding:4px;font-weight:bold;">Modern Name</td>
        <td style="padding:4px;font-weight:bold;">Indigenous Name</td>
        <td style="padding:4px;font-weight:bold;">Meaning</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.15);">
        <td style="padding:4px;">Pontoosuc Lake</td>
        <td style="padding:4px;font-style:italic;">Pontoosuck</td>
        <td style="padding:4px;">Field/haven for winter deer</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.15);">
        <td style="padding:4px;">(same)</td>
        <td style="padding:4px;font-style:italic;">Moonkeek-Shoonkeek</td>
        <td style="padding:4px;">Legendary lovers who drowned</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.15);">
        <td style="padding:4px;">Stockbridge Bowl</td>
        <td style="padding:4px;font-style:italic;">Mahkeenac</td>
        <td style="padding:4px;">Home of the Mohicans</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.15);">
        <td style="padding:4px;">Bowl island</td>
        <td style="padding:4px;font-style:italic;">Kwuniikwat</td>
        <td style="padding:4px;">Appearing long (named 2018)</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.15);">
        <td style="padding:4px;">Housatonic River</td>
        <td style="padding:4px;font-style:italic;">Usi-a-di-en-uk</td>
        <td style="padding:4px;">Beyond the mountain place</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.15);">
        <td style="padding:4px;">Pittsfield area</td>
        <td style="padding:4px;font-style:italic;">Pontoosuck</td>
        <td style="padding:4px;">Field/haven for winter deer</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.15);">
        <td style="padding:4px;">Lake Champlain</td>
        <td style="padding:4px;font-style:italic;">Caniaderi Guarunte</td>
        <td style="padding:4px;">Door of the country (Iroquois)</td>
      </tr>
      <tr>
        <td style="padding:4px;">(same)</td>
        <td style="padding:4px;font-style:italic;">Pitawbagw</td>
        <td style="padding:4px;">Double lake (Abenaki)</td>
      </tr>
    </table>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Stockbridge-Munsee Band; historical colonial records; Calloway 1990</p>
  </div>`, {maxWidth: 420}).addTo(L_groups.mohicanLakesBefore);
