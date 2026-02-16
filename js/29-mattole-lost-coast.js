// ============================================================
// PHASE 4: MATTOLE / BEAR RIVER / WIYOT — THE LOST COAST
// Southern Humboldt County & northern Mendocino coast
// ============================================================
// Peoples: Mattole (Mattóal/Ni'ekeni'), Bear River, Sinkyone (northern/Lolangkok),
// Wiyot (Algonquian speakers of Humboldt Bay)
// Sources: Kroeber 1925, Goddard 1929, Nomland 1938, Baumhoff 1958, Elsasser 1978,
// Golla 2011, Li 1930 (Mattole grammar), Bear River Band, Wiyot Tribe
// ============================================================

// Background pane
if (!map.getPane('mattoleBackgroundPane')) {
  map.createPane('mattoleBackgroundPane');
  map.getPane('mattoleBackgroundPane').style.zIndex = 350;
}

const MC = {
  mattole: '#8B4513',    // saddle brown — Mattole/Bear River
  wiyot: '#4169E1',      // royal blue — Wiyot (Algonquian)
  sinkyone: '#556B2F',   // dark olive — Sinkyone
  water: '#1E90FF',
  sacred: '#DC143C',
  lost: '#B22222',
  modern: '#228B22'
};

// ==================== TERRITORY POLYGONS ====================

// Mattole territory — Mattole River valley to coast
L.polygon([
  [40.35, -124.35],[40.28, -124.30],[40.22, -124.18],[40.18, -124.10],
  [40.12, -124.08],[40.05, -124.10],[40.00, -124.15],[40.00, -124.25],
  [40.05, -124.32],[40.10, -124.38],[40.18, -124.40],[40.28, -124.38]
], {
  color: MC.mattole, weight: 2, fillColor: MC.mattole,
  fillOpacity: 0.06, dashArray: '6,4', pane: 'mattoleBackgroundPane'
}).bindPopup(`<b>Mattole Territory (Mattóal)</b><br>
  Mattole River valley from coast to Upper North Fork<br>
  ~60 villages along the river (Baumhoff 1958)<br>
  Self-name: Ni'ekeni' (shared with Bear River)<br>
  Pre-contact population: ~2,500 (Mattole + Bear River combined)<br>
  Language: Mattole (Athabaskan), extinct ~1950s. Grammar by Fang-Kuei Li (1930)<br>
  Unique: men tattooed their foreheads (women in all other local groups)<br>
  Houses with vertical walls & pitched roofs — unusual among Southern Athabaskans`
).addTo(L_groups.mattoleVillages);

// Bear River territory — coast and lower Bear River near Cape Mendocino
L.polygon([
  [40.45, -124.30],[40.40, -124.22],[40.35, -124.15],[40.33, -124.12],
  [40.35, -124.08],[40.38, -124.06],[40.42, -124.10],[40.48, -124.15],
  [40.50, -124.22],[40.48, -124.30]
], {
  color: MC.mattole, weight: 2, fillColor: MC.mattole,
  fillOpacity: 0.06, dashArray: '6,4', pane: 'mattoleBackgroundPane'
}).bindPopup(`<b>Bear River Territory (Ni'ekeni')</b><br>
  Coast near Cape Mendocino & lower Bear River<br>
  7+ villages: Tcalko', Chilsheck, Chilenche, Selsche'ech, Tlanko, Estakana, Sehtla<br>
  Very closely related to Mattole — same self-name, similar dialect<br>
  Bear River dialect documented by Goddard (1929)<br>
  Nomland (1938) ethnography from surviving elders<br>
  <i>Wailaki name for them: Tul'bush ("foreigners")</i>`
).addTo(L_groups.mattoleVillages);

// Wiyot territory — Humboldt Bay, lower Eel River, Bear River to Little River
L.polygon([
  [40.90, -124.05],[40.85, -124.00],[40.78, -123.95],[40.72, -123.90],
  [40.65, -123.95],[40.58, -124.00],[40.50, -124.05],[40.48, -124.15],
  [40.50, -124.25],[40.55, -124.30],[40.60, -124.35],[40.68, -124.38],
  [40.75, -124.30],[40.82, -124.25],[40.88, -124.15]
], {
  color: MC.wiyot, weight: 2, fillColor: MC.wiyot,
  fillOpacity: 0.06, dashArray: '6,4', pane: 'mattoleBackgroundPane'
}).bindPopup(`<b>Wiyot Territory (Wiyot/Sulateluk)</b><br>
  <b>Algonquian language speakers — surrounded by Athabaskans</b><br>
  Humboldt Bay, Eel River delta, Mad River to Bear River Ridge<br>
  ~3,000–5,000 pre-contact → ~200 after 1860 massacre → ~100 by 1910<br>
  Center of world: Tuluwat Island in Humboldt Bay<br>
  Annual World Renewal Ceremony — healers and ceremonial leaders mostly women<br>
  Language: Wiyot (Algonquian family — related to distant Yurok & eastern Algonquians)<br>
  Last native speaker died 1962. Active language revitalization underway.<br>
  Canoe people — carved long log canoes for bay travel<br>
  Diet: clams, acorns, salmon, seaweed`
).addTo(L_groups.mattoleVillages);

// Sinkyone northern (Lolangkok) — lower Eel from Scotia to S. Fork mouth
L.polygon([
  [40.48, -124.05],[40.42, -124.02],[40.35, -123.95],[40.28, -123.88],
  [40.22, -123.85],[40.15, -123.88],[40.10, -123.95],[40.12, -124.05],
  [40.18, -124.12],[40.25, -124.15],[40.35, -124.12],[40.42, -124.10]
], {
  color: MC.sinkyone, weight: 2, fillColor: MC.sinkyone,
  fillOpacity: 0.06, dashArray: '6,4', pane: 'mattoleBackgroundPane'
}).bindPopup(`<b>Sinkyone (Northern / Lolangkok)</b><br>
  Lower Eel River from Scotia to above South Fork mouth<br>
  "Sinkikok" = their name for the Eel River watershed<br>
  Northern dialect distinct from Shelter Cove Sinkyone to the south<br>
  The redwood (Kahstcho) was considered especially sacred<br>
  Rotational burning of coastal prairies and woodlands<br>
  ~70 villages total (both northern & southern groups)<br>
  Boundary with Mattole marked by Kings Peak & Ettersberg<br>
  <i>Baumhoff 1958, Merriam notes, Goddard village lists</i>`
).addTo(L_groups.mattoleVillages);

// ==================== VILLAGES ====================

// Mattole villages — along the Mattole River
const mattoleVillages = [
  {lat:40.29, lng:-124.35, name:'Mattole River Mouth Village', desc:'Principal Mattole settlement near mouth of the Mattole River at the Pacific. Petrolia area. Bear River Band performed Salmon Return Ceremony here Nov 2020 — first tribal ceremony in over a century.'},
  {lat:40.24, lng:-124.27, name:'Petrolia Villages', desc:'Multiple Mattole village sites near present-day Petrolia. Winter villages in the valley.'},
  {lat:40.20, lng:-124.18, name:'Honeydew Creek Villages', desc:'Villages near confluence of Honeydew Creek and Mattole River. Rich salmon habitat.'},
  {lat:40.15, lng:-124.12, name:'Upper Mattole Villages', desc:'Mattole settlements in the upper valley. Ettersburg area — boundary with Sinkyone.'},
  {lat:40.10, lng:-124.08, name:'Upper North Fork Villages', desc:'Mattole territory extended to the Upper North Fork. Eastern boundary of their homeland.'}
];
mattoleVillages.forEach(v => {
  L.circleMarker([v.lat, v.lng], {
    radius: 5, color: MC.mattole, fillColor: MC.mattole, fillOpacity: 0.7,
    weight: 1, pane: 'markerPane'
  }).bindPopup(`<b>${v.name}</b> (Mattole)<br>${v.desc}`).addTo(L_groups.mattoleVillages);
});

// Bear River villages — named villages from Nomland 1938 / Goddard 1929
const bearRiverVillages = [
  {lat:40.44, lng:-124.28, name:"Tcalko'", desc:'Bear River village near the river mouth. One of 7 named Bear River settlements.'},
  {lat:40.43, lng:-124.25, name:'Chilsheck', desc:'Bear River village along the lower Bear River.'},
  {lat:40.42, lng:-124.22, name:'Chilenche', desc:'Bear River village. Nomland 1938 ethnography.'},
  {lat:40.41, lng:-124.19, name:"Selsche'ech", desc:'Bear River village on the middle reaches.'},
  {lat:40.40, lng:-124.16, name:'Tlanko', desc:'Bear River village upstream.'},
  {lat:40.39, lng:-124.13, name:'Estakana', desc:'Bear River village. Goddard 1929.'},
  {lat:40.38, lng:-124.10, name:'Sehtla', desc:'Uppermost Bear River village. Near Mattole boundary.'}
];
bearRiverVillages.forEach(v => {
  L.circleMarker([v.lat, v.lng], {
    radius: 4, color: MC.mattole, fillColor: MC.mattole, fillOpacity: 0.7,
    weight: 1, pane: 'markerPane'
  }).bindPopup(`<b>${v.name}</b> (Bear River / Ni'ekeni')<br>${v.desc}`).addTo(L_groups.mattoleVillages);
});

// Wiyot villages — Humboldt Bay area
const wiyotVillages = [
  {lat:40.81, lng:-124.17, name:'Tuluwat (Indian Island)', desc:'<b>Center of the Wiyot world.</b> Site of annual World Renewal Ceremony lasting 7-10 days. 1,000-year-old clamshell midden (6+ acres). Massacre site Feb 26, 1860. <b>Returned to Wiyot Tribe by City of Eureka, Oct 2019.</b> World Renewal Ceremony revived.'},
  {lat:40.78, lng:-124.18, name:'Eureka Area Villages', desc:'Multiple Wiyot villages around the shores of Humboldt Bay. Some survivors found refuge in Eureka after the 1860 massacre.'},
  {lat:40.70, lng:-124.22, name:'Table Bluff Villages', desc:'Wiyot settlements at Table Bluff, south of Humboldt Bay entrance. Attacked same night as Tuluwat. Now site of Table Bluff Reservation (88 acres, ~350 enrolled).'},
  {lat:40.55, lng:-124.18, name:'Eel River Delta Villages', desc:'Wiyot villages at the mouth of the Eel River. Wiyot headman Ki-we-lat-tah greeted Josiah Gregg\'s party here in 1849 with a feast of clams.'},
  {lat:40.62, lng:-124.28, name:'South Spit / King Salmon', desc:'Wiyot villages along the south spit of Humboldt Bay. Fishing and shellfish gathering.'},
  {lat:40.87, lng:-124.10, name:'Mad River Villages', desc:'Wiyot villages along the lower Mad River. Northern extent of Wiyot territory.'}
];
wiyotVillages.forEach(v => {
  L.circleMarker([v.lat, v.lng], {
    radius: 5, color: MC.wiyot, fillColor: MC.wiyot, fillOpacity: 0.7,
    weight: 1, pane: 'markerPane'
  }).bindPopup(`<b>${v.name}</b> (Wiyot)<br>${v.desc}`).addTo(L_groups.mattoleVillages);
});

// Sinkyone northern villages
const sinkyoneNorthVillages = [
  {lat:40.35, lng:-124.05, name:'Scotia Area Villages (Lolangkok)', desc:'Northern Sinkyone (Lolangkok) villages near present-day Scotia on the lower Eel River.'},
  {lat:40.25, lng:-124.00, name:'South Fork Mouth Villages', desc:'Sinkyone villages near the confluence of the South Fork and main Eel River.'},
  {lat:40.02, lng:-124.03, name:'Shelter Cove Villages', desc:'Southern Sinkyone (Shelter Cove group) — Sally Bell, Tom Bell, Jack Woodman were Nomland\'s informants. Remote coastal settlements.'},
  {lat:40.08, lng:-124.20, name:'Needle Rock Villages', desc:'Sinkyone coastal settlements near present-day Needle Rock Visitor Center. Calvin Cooper Stewart family ranch house now serves as park visitor center.'}
];
sinkyoneNorthVillages.forEach(v => {
  L.circleMarker([v.lat, v.lng], {
    radius: 4, color: MC.sinkyone, fillColor: MC.sinkyone, fillOpacity: 0.7,
    weight: 1, pane: 'markerPane'
  }).bindPopup(`<b>${v.name}</b><br>${v.desc}`).addTo(L_groups.mattoleVillages);
});

// ==================== WATERWAYS ====================

// Mattole River — 62 miles, 74 tributaries, "clear water"
L.polyline([
  [40.10, -124.08],[40.13, -124.12],[40.16, -124.16],[40.19, -124.20],
  [40.22, -124.24],[40.24, -124.28],[40.27, -124.32],[40.29, -124.35]
], {
  color: MC.water, weight: 3, opacity: 0.7, pane: 'mattoleBackgroundPane'
}).bindPopup(`<b>Mattole River (Mattóal = "clear water" in Sinkyone)</b><br>
  62 miles, 74 tributaries, 194,560-acre watershed<br>
  Drains the King Range — sea level to 4,000 ft in 3 miles<br>
  100+ inches of rain annually — among highest in continental US<br>
  <b>Salmon collapse:</b> 10,000 chinook + 4,000 coho (1959) → 100 each by 1990-91<br>
  Only 9% of original old-growth coniferous forest remained by 1987<br>
  <b>First community-based watershed restoration in California</b> (1980)<br>
  Mattole Restoration Council (1983), Mattole Salmon Group, Sanctuary Forest<br>
  BLM: $3M decade-long estuary restoration completed 2021<br>
  Bear River Band salmon ceremony at mouth, Nov 2020 — first in over a century<br>
  Listed as impaired waterbody (EPA 1992) — still flowing, actively restoring`
).addTo(L_groups.mattoleWater);

// Bear River
L.polyline([
  [40.38, -124.08],[40.40, -124.14],[40.42, -124.20],[40.44, -124.26],[40.45, -124.30]
], {
  color: MC.water, weight: 2, opacity: 0.6, pane: 'mattoleBackgroundPane'
}).bindPopup(`<b>Bear River</b><br>
  Flows west to Pacific near Cape Mendocino<br>
  7 named villages along its course (Goddard 1929, Nomland 1938)<br>
  Bear River Band territory — boundary between Mattole and Wiyot<br>
  Salmon and steelhead habitat — impacted by logging and floods`
).addTo(L_groups.mattoleWater);

// Eel River — lower stretch through Wiyot/Sinkyone territory to ocean
L.polyline([
  [40.25, -123.95],[40.30, -124.00],[40.35, -124.05],[40.40, -124.10],
  [40.45, -124.15],[40.50, -124.18],[40.55, -124.22],[40.60, -124.28],
  [40.63, -124.30]
], {
  color: MC.water, weight: 4, opacity: 0.7, pane: 'mattoleBackgroundPane'
}).bindPopup(`<b>Eel River — Lower Reach (Sinkikok)</b><br>
  From South Fork confluence through Scotia to Pacific at Fernbridge<br>
  "Sinkikok" = Sinkyone name for the Eel River watershed<br>
  Northern Sinkyone (Lolangkok) territory on west bank<br>
  Wiyot territory at the delta and mouth<br>
  Goddard documented village names on both sides from Garberville to Scotia<br>
  <i>Continues from Phase 3 Eel River coverage upstream</i>`
).addTo(L_groups.mattoleWater);

// Humboldt Bay — Wiyot heartland
L.polygon([
  [40.88, -124.18],[40.85, -124.22],[40.80, -124.22],[40.76, -124.20],
  [40.72, -124.22],[40.68, -124.24],[40.67, -124.19],[40.70, -124.16],
  [40.75, -124.14],[40.80, -124.14],[40.85, -124.15]
], {
  color: MC.wiyot, weight: 2, fillColor: MC.water,
  fillOpacity: 0.15, pane: 'mattoleBackgroundPane'
}).bindPopup(`<b>Humboldt Bay (Wiyot: Wiki / Goudi'ni)</b><br>
  Largest enclosed bay between San Francisco and Coos Bay, Oregon<br>
  <b>Center of Wiyot world</b> — Tuluwat Island at its heart<br>
  Wiyot villages ringed the entire bay for thousands of years<br>
  Shell middens, ancient village sites on terraces above waterways<br>
  1,000-year-old clamshell midden beneath Tuluwat (6+ acres)<br>
  First European contact 1806 (Capt. Jonathan Winship)<br>
  Sustained contact began 1849 — Josiah Gregg party met by headman Ki-we-lat-tah<br>
  Gold discovery brought white settlement and destruction of Wiyot culture<br>
  <i>Three federally recognized tribes now share this territory</i>`
).addTo(L_groups.mattoleWater);

// Mad River — northern Wiyot boundary
L.polyline([
  [40.88, -124.08],[40.89, -124.12],[40.90, -124.16],[40.93, -124.10]
], {
  color: MC.water, weight: 2, opacity: 0.5, pane: 'mattoleBackgroundPane'
}).bindPopup(`<b>Mad River</b><br>
  Northern boundary of Wiyot territory<br>
  Flows to Pacific north of Arcata / Humboldt Bay<br>
  Wiyot, Nongatl, and Whilkut territories converge here`
).addTo(L_groups.mattoleWater);

// Honeydew Creek
L.polyline([
  [40.24, -124.12],[40.22, -124.16],[40.20, -124.20]
], {
  color: MC.water, weight: 1.5, opacity: 0.4, pane: 'mattoleBackgroundPane'
}).bindPopup(`<b>Honeydew Creek</b><br>
  Major Mattole River tributary near Honeydew village<br>
  Honeydew Creek Wildlife Preserve: 2,980 acres protecting bald eagle,<br>
  spotted owl, mink, and anadromous fish habitat`
).addTo(L_groups.mattoleWater);

// ==================== SACRED / MASSACRE SITES ====================

// Tuluwat Island — 1860 massacre site, now returned
L.circleMarker([40.81, -124.17], {
  radius: 10, color: MC.sacred, fillColor: MC.sacred, fillOpacity: 0.5,
  weight: 3, dashArray: '5,3', pane: 'markerPane'
}).bindPopup(`<b>Tuluwat Island — 1860 Wiyot Massacre</b><br>
  <i>Center of the Wiyot spiritual universe</i><br>
  Feb 26, 1860: coordinated attacks at dawn during World Renewal Ceremony<br>
  <b>80–250 Wiyot killed</b> — mostly women, children, and elders<br>
  Murdered with axes, knives, and clubs while sleeping (guns avoided to stay quiet)<br>
  Able-bodied men were away gathering supplies for the ceremony<br>
  Same night: attacks on Table Bluff (~40 killed), South Fork Eel (~40),<br>
  Eagle Prairie (~35), Bear River, and Mattole Valley<br>
  At least a dozen Wiyot villages attacked — possibly half the Wiyot killed<br>
  Bret Harte editorialized against it — was threatened and forced to flee<br>
  <b>No one was ever prosecuted</b><br>
  Robert Gunther bought the island the day before the massacre<br>
  Survivors confined to Fort Humboldt, then sent to Klamath Reservation<br>
  <b>Land returned:</b> Wiyot began repurchasing in 1998.<br>
  City of Eureka formally returned the island Oct 2019 — first voluntary municipal<br>
  land return to a tribe in US history. World Renewal Ceremony revived 2014.`
).addTo(L_groups.mattoleSacred);

// Cape Mendocino — westernmost point in California
L.circleMarker([40.44, -124.41], {
  radius: 7, color: MC.sacred, fillColor: MC.mattole, fillOpacity: 0.6,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Cape Mendocino</b><br>
  <b>Westernmost point in California</b><br>
  Heart of Bear River / Mattole territory<br>
  Named by Spanish explorer Bartolomé Ferrelo (1543) for Viceroy Mendoza<br>
  Treacherous coast — shipwrecks from Spanish galleons to steamers<br>
  King Range rises from sea level to 4,088 ft (King Peak) in just 3 miles<br>
  Punta Gorda lighthouse (1912) marks the southern approach`
).addTo(L_groups.mattoleSacred);

// King Range — sacred landscape, Lost Coast
L.circleMarker([40.12, -124.22], {
  radius: 7, color: MC.sacred, fillColor: MC.sinkyone, fillOpacity: 0.4,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>King Range — The Lost Coast</b><br>
  Greatest coastal relief in California — sea level to 4,088 ft in 3 miles<br>
  So rugged that Highway 1 was routed inland — creating the "Lost Coast"<br>
  King Range NCA established 1970 (Congressman Clem Miller's legacy)<br>
  BLM acquired 25,000+ acres in 1970s-80s from logged timberlands<br>
  Lost Coast Trail: 57+ miles from Mattole River mouth to Usal Beach<br>
  4 botanical areas of significance: old-growth Douglas-fir, dune system,<br>
  undisturbed coastal prairie, reedgrass stands<br>
  Roosevelt elk reintroduced; black bear, mountain lion, harbor seals<br>
  <i>Mattole, Sinkyone, and Bear River ancestral territory</i>`
).addTo(L_groups.mattoleSacred);

// Sally Bell Grove — Sinkyone woman who witnessed family's murder
L.circleMarker([39.96, -124.00], {
  radius: 6, color: MC.sacred, fillColor: MC.sinkyone, fillOpacity: 0.5,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Sally Bell Grove</b><br>
  Old-growth coast redwood grove in Sinkyone Wilderness State Park<br>
  Named for <b>Sally Bell</b>, a Sinkyone woman who as a child watched<br>
  American soldiers murder her family — one of few survivors<br>
  She became one of Nomland's key ethnographic informants (1930s)<br>
  <b>1986: environmentalists sued to stop Georgia-Pacific clearcutting</b><br>
  "Sally Bell lawsuit" — landmark case that helped save old-growth statewide<br>
  Georgia-Pacific sold to Trust for Public Land. 3,200 acres added to State Park.<br>
  Another 3,900 acres sold to InterTribal Sinkyone Wilderness Council (1997)<br>
  <i>One of the few remaining coastal old-growth redwood groves</i>`
).addTo(L_groups.mattoleSacred);

// ==================== LOST WATERS / DESTROYED LANDSCAPES ====================

// 1860 coordinated massacres — multiple sites
L.circleMarker([40.65, -124.15], {
  radius: 8, color: MC.lost, fillColor: MC.lost, fillOpacity: 0.3,
  weight: 2, dashArray: '5,3', pane: 'markerPane'
}).bindPopup(`<b>February 26, 1860 — Coordinated Massacres</b><br>
  Pre-planned attacks on at least 12 Wiyot villages in a single night:<br>
  • Tuluwat Island: 55-250 killed<br>
  • Table Bluff: ~40 killed<br>
  • South Fork Eel River (Rohnerville): ~40 killed<br>
  • Eagle Prairie (Rio Dell): ~35 killed<br>
  • Bear River camps: unknown killed<br>
  • Mattole Valley camps: unknown killed<br>
  Major Rains (Fort Humboldt): vigilantes "resolved to kill every peaceable<br>
  Indian — man, woman, and child"<br>
  Wiyot population: 3,000-5,000 → ~200 after 1860 → ~100 by 1910<br>
  <b>No one prosecuted. Bret Harte forced to flee for writing against it.</b>`
).addTo(L_groups.mattoleLost);

// Mattole River salmon collapse
L.circleMarker([40.22, -124.25], {
  radius: 6, color: MC.lost, fillColor: MC.lost, fillOpacity: 0.25,
  weight: 2, dashArray: '5,3', pane: 'markerPane'
}).bindPopup(`<b>Mattole River — Salmon Collapse</b><br>
  "So many salmon you could cross the river by stepping on fish"<br>
  1959 surveys: ~10,000 chinook + ~4,000 coho salmon<br>
  By 1990-91: <b>chinook dropped to 100, coho to 100</b><br>
  2009-10: only <b>3 adult coho</b> counted returning<br>
  Causes: post-WWII timber boom destroyed 91% of old-growth by 1987<br>
  Catastrophic floods of 1955 and 1964 delivered massive sediment<br>
  Road-building and logging fragmented habitat<br>
  "Mattole" means "clear water" — the river is no longer clear<br>
  EPA listed as impaired waterbody (1992)<br>
  <b>Hope:</b> First community restoration in CA (1980). 40+ years of work.<br>
  Beaver dam analogs installed 2019. 15,000 willows planted. 900 trees added.`
).addTo(L_groups.mattoleLost);

// Lost Coast logging destruction
L.circleMarker([40.08, -124.15], {
  radius: 6, color: MC.lost, fillColor: MC.lost, fillOpacity: 0.2,
  weight: 2, dashArray: '5,3', pane: 'markerPane'
}).bindPopup(`<b>Lost Coast — Old-Growth Destruction</b><br>
  Post-WWII timber boom clearcut nearly all coastal old-growth<br>
  By 1987: only 9% of original old-growth coniferous forest remained<br>
  Wire chutes built to slide lumber from cliffs to waiting schooners (1870s)<br>
  Pack mule trains carried tanoak bark to San Francisco tanneries<br>
  Wharfs and loading facilities at Bear Harbor, Needle Rock, Usal<br>
  1955 & 1964 floods devastated already-fragile logged landscape<br>
  Sinkyone people: bounties paid for scalps of men, women, and children<br>
  Survivors forced into slavery or sent to reservations<br>
  <i>Sally Bell: "I saw them kill my family"</i>`
).addTo(L_groups.mattoleLost);

// Rohnerville Rancheria termination
L.circleMarker([40.58, -124.12], {
  radius: 5, color: MC.lost, fillColor: MC.lost, fillOpacity: 0.2,
  weight: 2, dashArray: '5,3', pane: 'markerPane'
}).bindPopup(`<b>Rohnerville Rancheria — Terminated 1958</b><br>
  Established 1910 as home for homeless, landless Natives<br>
  <b>Terminated 1958</b> by the California Rancheria Act — one of 34 tribes<br>
  Federal recognition restored 1983 via Tillie-Hardwick class action lawsuit<br>
  Population at termination was just 23 people<br>
  Now: Bear River Band of Rohnerville Rancheria — 619 enrolled members`
).addTo(L_groups.mattoleLost);

// ==================== MODERN TRIBAL LANDS ====================

// Bear River Band of Rohnerville Rancheria
L.circleMarker([40.63, -124.20], {
  radius: 7, color: MC.modern, fillColor: MC.modern, fillOpacity: 0.5,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Bear River Band of Rohnerville Rancheria</b><br>
  Headquartered near Loleta, CA — two separate rancheria parcels (Fortuna & Loleta)<br>
  <b>619 enrolled tribal citizens</b> — Mattole, Wiyot, and Wailaki peoples<br>
  Self-name: Ni'ekeni'. Traditional territory: Mattole & Bear Rivers, Cape Mendocino<br>
  Terminated 1958 (Rancheria Act) — recognition restored 1983 (Tillie-Hardwick)<br>
  Operates Bear River Casino Resort, recreation center, housing programs<br>
  Natural Resources Director Hank Brenard leads salmon restoration partnership<br>
  Performed Salmon Return Ceremony at Mattole mouth, Nov 2020<br>
  <i>"The residents welcomed the Bear River Tribe back to their ancestral territory<br>
  after residents of the 1850s had committed unspeakable crimes against them"</i>`
).addTo(L_groups.mattoleModern);

// Wiyot Tribe — Table Bluff Reservation
L.circleMarker([40.69, -124.24], {
  radius: 7, color: MC.modern, fillColor: MC.modern, fillOpacity: 0.5,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Wiyot Tribe — Table Bluff Reservation</b><br>
  88 acres, 16 miles south of Eureka between Loleta and South Jetty<br>
  ~350 enrolled members. ~600+ total across three federally recognized tribes<br>
  Tuluwat Island returned Oct 2019 — first voluntary municipal land return in US<br>
  World Renewal Ceremony revived 2014 after 154-year hiatus<br>
  Dishgamu Community Land Trust — first tribally-owned land trust<br>
  Building foster youth housing on ancestral lands in Eureka<br>
  Active language revitalization program<br>
  THPO: Ted Hernandez — working to return remains from UC Berkeley<br>
  20 remains repatriated in 2022 (likely 1860 massacre victims)`
).addTo(L_groups.mattoleModern);

// Blue Lake Rancheria — Wiyot
L.circleMarker([40.88, -123.99], {
  radius: 5, color: MC.modern, fillColor: MC.modern, fillOpacity: 0.4,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Blue Lake Rancheria (Wiyot)</b><br>
  Near Blue Lake, east of Arcata<br>
  Federally recognized Wiyot tribe<br>
  Known for innovative economic development and environmental leadership<br>
  Award-winning microgrid and renewable energy programs`
).addTo(L_groups.mattoleModern);

// Mattole Restoration Council — community restoration
L.circleMarker([40.24, -124.28], {
  radius: 5, color: MC.modern, fillColor: MC.modern, fillOpacity: 0.4,
  weight: 2, pane: 'markerPane'
}).bindPopup(`<b>Mattole River and Range Partnership</b><br>
  Mattole Restoration Council (est. 1983), Mattole Salmon Group (1980),<br>
  and Sanctuary Forest — collaborative restoration partnership<br>
  <b>First community-based watershed restoration in California</b><br>
  Founded under the "Council Madrone" near Ettersburg by 30+ Mattolians<br>
  Freeman House published first Mattole Restoration Newsletter 1983<br>
  40+ years of continuous restoration work:<br>
  15,000 willows, 900 trees, 1,800 ft estuary sloughs, beaver dam analogs<br>
  Douglas fir reforestation: 70-80% survival rate<br>
  Prosper Ridge prairie restoration — 200+ acres of coastal prairie<br>
  Working with Bear River Band on co-management vision`
).addTo(L_groups.mattoleModern);

// ==================== ENCYCLOPEDIA ENTRIES ====================

// Add to tribal encyclopedia
if (typeof tribalData !== 'undefined') {
  tribalData.push({
    name: "Mattole (Mattóal / Ni'ekeni')",
    altNames: "Bear River Indians, Bettol, Medol, Me'tuul",
    language: "Mattole (Athabaskan/Dene — extinct ~1950s, grammar by Fang-Kuei Li 1930)",
    territory: "Mattole River valley, coast near Cape Mendocino, 60+ villages along river",
    population: "~2,500 pre-contact (Mattole + Bear River combined, Baumhoff 1958)",
    centerLat: 40.24, centerLng: -124.25, color: MC.mattole,
    description: "The Mattole, including the closely related Bear River people, are Athabaskan speakers whose homeland stretches along the Mattole River from the Pacific to the Upper North Fork. They called themselves Ni'ekeni'. Uniquely among California peoples, Mattole men tattooed their foreheads — in all neighboring groups, only women had facial tattoos. Their houses had vertical walls and pitched roofs, resembling northern California architecture rather than the conical bark houses of other Southern Athabaskans. Salmon was their primary food source — the Mattole River once supported 10,000+ chinook and 4,000+ coho annually. The Cahto name for them was Diidee'-kiiyaahaangn ('The North Tribe'); the Wailaki called them Tul'bush ('foreigners'). Seven Bear River villages are documented: Tcalko', Chilsheck, Chilenche, Selsche'ech, Tlanko, Estakana, and Sehtla. White settlers arrived in 1857, leading to the Mattole Valley Treaty of Peace (Sept 4, 1858) which failed by 1859. The 1860 coordinated massacres devastated the population. The Mattole language, documented in Li's 1930 grammar, went extinct by the 1950s. Today the Bear River Band of Rohnerville Rancheria (619 enrolled members) carries forward the legacy, operating from Loleta, CA. In Nov 2020, the tribe performed a Salmon Return Ceremony at the Mattole River mouth — the first tribal ceremony there in over a century. The Mattole watershed hosts California's first community-based restoration movement (1980), with 40+ years of continuous work to restore salmon habitat.",
    sources: "Li 1930 (Mattole grammar); Goddard 1929; Nomland 1938 (Bear River ethnography); Baumhoff 1958; Elsasser 1978; Golla 2011; Bear River Band"
  });

  tribalData.push({
    name: "Wiyot (Sulateluk)",
    altNames: "Wishosk, Wiki, Humboldt Bay Indians",
    language: "Wiyot (Algonquian family — last native speaker died 1962, active revitalization)",
    territory: "Humboldt Bay, lower Eel River, Mad River to Bear River Ridge",
    population: "~3,000-5,000 pre-contact → ~200 after 1860 → ~100 by 1910 → ~600+ today",
    centerLat: 40.78, centerLng: -124.18, color: MC.wiyot,
    description: "The Wiyot are Algonquian-language speakers surrounded by Athabaskan peoples — a linguistic island that connects them to the distant Yurok and eastern Algonquian nations. Their world centers on Humboldt Bay and Tuluwat Island, where the annual World Renewal Ceremony was held for thousands of years. Healers and ceremonial leaders were mostly women, who received their powers on mountaintops during the night. The Wiyot made long carved log canoes for bay travel and subsisted on clams, acorns, salmon, and seaweed. In 1849, Wiyot headman Ki-we-lat-tah greeted explorer Josiah Gregg's party with a feast of clams. Just eleven years later, on Feb 26, 1860, white settlers launched coordinated attacks on at least 12 Wiyot villages during the World Renewal Ceremony. Between 80-250 people — mostly women and children — were murdered with axes and knives at Tuluwat Island, with additional massacres at Table Bluff, South Fork Eel, Eagle Prairie, Bear River, and Mattole Valley. No one was prosecuted. Bret Harte was forced to flee for editorializing against the killings. Survivors were confined to Fort Humboldt, then sent to the Klamath Reservation. Beginning in 1998, the Wiyot Tribe started repurchasing Tuluwat Island. In Oct 2019, Eureka became the first US city to voluntarily return land to a tribe. The World Renewal Ceremony was revived in 2014. In 2022, 20 remains — likely massacre victims — were repatriated from UC Berkeley. Today three federally recognized tribes carry Wiyot heritage: the Wiyot Tribe (Table Bluff), Bear River Band (Rohnerville), and Blue Lake Rancheria.",
    sources: "Kroeber 1925; Nomland & Kroeber 1936; Wiyot Tribe website; Northwestern California Genocide Project; PBS Retro Local"
  });
}

// Add to language encyclopedia
if (typeof langData !== 'undefined') {
  langData.push({
    name: "Mattole",
    family: "Athabaskan (Dene) — Pacific Coast branch",
    status: "Extinct (~1950s, last speaker died in the 1950s per Golla 2011)",
    speakers: "0 first-language speakers remaining",
    territory: "Mattole River valley and Bear River, southern Humboldt County",
    description: "Mattole is an Athabaskan language closely related to the Bear River dialect and more distantly to the Eel River Athabaskan languages (Wailaki, Nongatl, Sinkyone, Lassik). Fang-Kuei Li published a grammar in 1930 (University of Chicago). Goddard documented the Bear River dialect in 1929. The language was distinct enough from neighboring Eel River Athabaskan that mutual intelligibility was limited. Mattole and Bear River were likely a single language with dialectal variation. The California Athabaskan languages as a group represent a southern extension of the vast Dene language family that stretches from Alaska to the American Southwest."
  });

  langData.push({
    name: "Wiyot",
    family: "Algonquian (Algic family — related to distant Yurok and eastern Algonquians)",
    status: "Dormant — last native speaker Della Prince died 1962. Active revitalization.",
    speakers: "0 native speakers; Wiyot Tribe language program creating new learners",
    territory: "Humboldt Bay, lower Eel River delta, Mad River to Bear River Ridge",
    description: "Wiyot is one of only two Algonquian-family languages in California (the other is Yurok). Together with Yurok, Wiyot forms the Algic language family — connecting these Pacific Coast peoples to the vast Algonquian language family of eastern North America. This relationship, proposed by Edward Sapir in 1913, was controversial for decades but is now accepted. The presence of Algic speakers on the California coast, surrounded by Athabaskan peoples, represents one of the most remarkable linguistic puzzles of North America. The Wiyot Tribe is actively revitalizing the language using archival recordings and field notes."
  });
}
