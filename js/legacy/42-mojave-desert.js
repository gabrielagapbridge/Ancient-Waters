// ============================================================
// MOJAVE DESERT — Water History & Indigenous Archaeology
// Ancient pluvial lakes, Mojave River system, springs & oases,
// Colorado River corridor, village sites, sacred sites, trade routes
// ============================================================

// ========== ICONS ==========
const mojaveSpringIcon = mkIcon('#00ACC1', 10);
const mojaveVillageIcon = mkIcon('#FF8F00', 10);
const mojaveSacredIcon = mkIcon('#AB47BC', 11);
const mojaveArchIcon = mkIcon('#EF5350', 9);

// ========== MOJAVE PLUVIAL LAKES ==========
// These are the ancient interconnected lakes of the Mojave Desert,
// distinct from the Owens Chain lakes already in 10-greatbasin.js

// Lake Harper — upstream-most lake on Mojave River system
L.circle([35.0150, -117.4000], {radius:8000, color:'#1565C0', fillColor:'#1E88E5', fillOpacity:0.20, weight:1.5, opacity:0.5, dashArray:'6,4'
}).addTo(L_groups.mojaveLakes).bindPopup(`<h4 style="color:#42A5F5">🌊 Lake Harper</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Western Mojave · ~45,000–40,000 BP · Harper Dry Lake</div><div style="font-size:12px;color:#ccc;line-height:1.5">The <b>upstream-most pluvial lake</b> on the Mojave River system. First basin to receive flow after Victorville — the river reached Harper Lake ~575,000–475,000 years ago. Highstand sediments date to ~45,000–40,000 BP. Part of the chain of interconnected pluvial lakes that defined Paleoindian settlement patterns across the Mojave.<br><br>Today: Harper Dry Lake playa.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: USGS; Reheis et al. 2007</div>`, {maxWidth:380});

// Lake Manix — the great cloverleaf lake near Barstow
const lakeManixCoords = [
  [35.12,-116.82],[35.10,-116.65],[35.05,-116.50],[35.00,-116.38],
  [34.95,-116.30],[34.90,-116.35],[34.88,-116.48],[34.90,-116.60],
  [34.93,-116.72],[34.98,-116.80],[35.05,-116.85],[35.12,-116.82]
];
L.polygon(lakeManixCoords, {
  color:'#1565C0', fillColor:'#1E88E5', fillOpacity:0.22, weight:1.5, opacity:0.55, dashArray:'6,4'
}).addTo(L_groups.mojaveLakes).bindPopup(`<h4 style="color:#42A5F5">🌊 Lake Manix</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Near Barstow · ~500,000–18,000 BP · 236 km² (91 sq mi) · 4 sub-basins</div><div style="font-size:12px;color:#ccc;line-height:1.5">A massive <b>cloverleaf-shaped pluvial lake</b> covering four sub-basins: <b>Coyote, Troy, Afton,</b> and <b>Cady/Manix</b>. For nearly half a million years, this lake dominated the central Mojave landscape. At highstands it reached 543 meters (1,781 ft) elevation.<br><br><b>Lithic artifacts</b> found along its ancient shorelines — bifaces, disks, flakes, and hammerstones — are grouped as the <b>"Lake Manix Industry."</b> Some artifacts may be of late Pleistocene age. The controversial <b>Calico Early Man Site</b> sits nearby.<br><br>The lake <b>drained catastrophically</b> when a sill along the Manix fault zone failed, carving <b>Afton Canyon</b> and sending a wall of water downstream to fill Lake Mojave. Today Interstate 40 and Interstate 15 cross the former lake bed.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Reheis et al. "USGS Open-File Report 2007-1281"; Sutton 1996; Warren, BLM Cultural Resource Overview</div>`, {maxWidth:420});
L.marker([35.00, -116.55], {icon:L.divIcon({className:'',html:'<div style="font-family:Cinzel,serif;font-size:9px;color:#42A5F5;text-shadow:0 0 5px #000;white-space:nowrap;letter-spacing:1px;opacity:0.7">LAKE MANIX</div>',iconSize:[100,14],iconAnchor:[50,7]})}).addTo(L_groups.mojaveLakes);

// Lake Manix sub-basin markers
[
  [35.0700,-116.7550,"Coyote Basin","Northern sub-basin of Lake Manix. The Mojave River may have continued draining into Coyote Basin until ~9,000–7,500 years ago — long after the main lake drained."],
  [34.9200,-116.5000,"Troy Basin","Southern sub-basin of ancient Lake Manix."],
  [35.0400,-116.3800,"Afton Basin","Eastern sub-basin where the catastrophic drainage began, carving Afton Canyon."]
].forEach(b => L.circleMarker([b[0],b[1]], {radius:4, color:'#42A5F5', fillColor:'#1E88E5', fillOpacity:0.5, weight:1}).addTo(L_groups.mojaveLakes).bindPopup(`<h4 style="color:#42A5F5">${b[2]}</h4><div style="font-size:12px;color:#ccc">${b[3]}</div><div style="font-size:10px;color:#888;margin-top:4px">Sources: Reheis et al. 2007; USGS</div>`));

// Lake Mojave (Soda Lake + Silver Lake)
const lakeMojaveCoords = [
  [35.38,-116.12],[35.35,-116.05],[35.28,-116.00],[35.20,-116.02],
  [35.15,-116.00],[35.10,-116.02],[35.08,-116.08],[35.10,-116.15],
  [35.15,-116.18],[35.22,-116.15],[35.28,-116.12],[35.33,-116.10],
  [35.38,-116.12]
];
L.polygon(lakeMojaveCoords, {
  color:'#1565C0', fillColor:'#1E88E5', fillOpacity:0.22, weight:1.5, opacity:0.55, dashArray:'6,4'
}).addTo(L_groups.mojaveLakes).bindPopup(`<h4 style="color:#42A5F5">🌊 Lake Mojave</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Baker/Zzyzx area · ~22,000–9,000 BP · 300 km² (120 sq mi) · Two basins</div><div style="font-size:12px;color:#ccc;line-height:1.5">The <b>namesake lake of the entire Mojave Desert</b>, covering the Soda Lake (south) and Silver Lake (north) basins. Formed when Lake Manix catastrophically drained downstream through Afton Canyon.<br><br>The <b>Lake Mojave Complex</b> — the <b>earliest defined cultural tradition in the Mojave</b> — is named for these lake-dwelling people. <b>Lake Mojave</b> and <b>Silver Lake</b> projectile points have been extensively collected around these shorelines. Paleoindians employed both <b>"wetland transient"</b> and <b>"wetland stable"</b> strategies depending on lake productivity. An ancient cornfield was documented south of Soda Springs (Rasor Ranch area).<br><br>At maximum extent: 300 km² with a volume of 7 cubic km. Rarely fills today — historical lake events occurred in 1916–17, 1938–39, and 1969.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Warren, BLM; Sutton 1996; Earle, UC eScholarship</div>`, {maxWidth:420});
L.marker([35.22, -116.07], {icon:L.divIcon({className:'',html:'<div style="font-family:Cinzel,serif;font-size:9px;color:#42A5F5;text-shadow:0 0 5px #000;white-space:nowrap;letter-spacing:1px;opacity:0.7">LAKE MOJAVE</div>',iconSize:[100,14],iconAnchor:[50,7]})}).addTo(L_groups.mojaveLakes);

// Lake Ivanpah
L.circle([35.5600, -115.3900], {radius:10000, color:'#1565C0', fillColor:'#1E88E5', fillOpacity:0.18, weight:1.5, opacity:0.5, dashArray:'6,4'
}).addTo(L_groups.mojaveLakes).bindPopup(`<h4 style="color:#42A5F5">🌊 Lake Ivanpah</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Eastern Mojave · Pleistocene–middle Holocene · Unusually long-lived</div><div style="font-size:12px;color:#ccc;line-height:1.5">Unlike most Mojave pluvial lakes, Lake Ivanpah <b>persisted well into the Holocene</b> under monsoon influence, maintaining water for decades to centuries during high stands. This made it a <b>reliable water source long after other lakes dried</b>.<br><br>Chemehuevi elder <b>Phil Smith</b> described the Ivanpah Valley as containing ancient trails, worship sites, and a <b>triangular stone structure</b> believed to be a centuries-old altar for prayer and offerings.<br><br>Today: Ivanpah Dry Lake. The <b>Ivanpah solar facility</b> nearby has been controversial among tribal groups concerned about cultural site impacts.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 1996; Chemehuevi Cultural Committee; Warren, BLM</div>`, {maxWidth:400});

// Cronese Lakes
L.circle([35.1200, -116.3250], {radius:6000, color:'#1565C0', fillColor:'#1E88E5', fillOpacity:0.15, weight:1, opacity:0.4, dashArray:'6,4'
}).addTo(L_groups.mojaveLakes).bindPopup(`<h4 style="color:#42A5F5">🌊 Cronese Lakes (East & West)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Between Barstow & Baker · Seasonal/intermittent · Mojave River overflow</div><div style="font-size:12px;color:#ccc;line-height:1.5">Seasonal lakes that received Mojave River overflow during wet periods. The <b>Vanyume (Desert Serrano)</b> had documented archaeological sites at Cronese Lakes. Part of the broader Mojave River drainage system that sustained human habitation for millennia.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Earle, "The Desert Serrano"; Warren, BLM</div>`, {maxWidth:360});

// Lake Thompson (Antelope Valley)
const lakeThompsonCoords = [
  [34.92,-118.10],[34.90,-117.92],[34.85,-117.85],[34.78,-117.88],
  [34.75,-117.95],[34.78,-118.08],[34.82,-118.12],[34.88,-118.13],
  [34.92,-118.10]
];
L.polygon(lakeThompsonCoords, {
  color:'#1565C0', fillColor:'#1E88E5', fillOpacity:0.18, weight:1.5, opacity:0.5, dashArray:'6,4'
}).addTo(L_groups.mojaveLakes).bindPopup(`<h4 style="color:#42A5F5">🌊 Lake Thompson</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Western Mojave / Antelope Valley · Pleistocene–early Holocene · Rosamond Dry Lake area</div><div style="font-size:12px;color:#ccc;line-height:1.5">A pluvial lake in the western Mojave's Antelope Valley. Home to <b>12,000+ years of habitation</b> — peoples camped around lake shores from ~8,000–6,000 BCE. Related to Great Basin peoples, with evidence of the <b>"Shoshonean Wedge" migration ~CE 1000</b>. Extensive projectile points, petroglyphs, pictographs, and bedrock mortars documented around ancient shorelines.<br><br>Today: Rosamond Dry Lake and Rogers Dry Lake (Edwards AFB).</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: CA State Parks "Native American Peoples of the Antelope Valley"; Stickel 1980, BLM</div>`, {maxWidth:400});
L.marker([34.85, -118.00], {icon:L.divIcon({className:'',html:'<div style="font-family:Cinzel,serif;font-size:8px;color:#42A5F5;text-shadow:0 0 5px #000;white-space:nowrap;letter-spacing:1px;opacity:0.6">LAKE THOMPSON</div>',iconSize:[110,12],iconAnchor:[55,6]})}).addTo(L_groups.mojaveLakes);

// ========== MOJAVE RIVER SYSTEM ==========

// Full ancient course of the Mojave River
const mojaveRiverCoords = [
  [34.2900,-117.2800], // headwaters
  [34.3500,-117.2900],
  [34.4200,-117.3000],
  [34.5400,-117.3100], // Upper Narrows
  [34.5900,-117.2700], // Lower Narrows
  [34.6800,-117.1500],
  [34.7800,-117.0200],
  [34.8600,-116.8900], // Daggett
  [34.9000,-116.7800],
  [34.9500,-116.6500],
  [35.0000,-116.5000],
  [35.0427,-116.3097], // Afton Canyon
  [35.0800,-116.2000],
  [35.1200,-116.1500],
  [35.1500,-116.0900]  // mouth at Soda Lake
];
L.polyline(mojaveRiverCoords, {
  color:'#2196F3', weight:3, opacity:0.7, dashArray:'8,4'
}).addTo(L_groups.mojaveRiver).bindPopup(`<h4 style="color:#42A5F5">🌊 Mojave River</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">201 km (125 mi) · San Bernardino Mtns to Soda Lake · Mostly underground</div><div style="font-size:12px;color:#ccc;line-height:1.5">The <b>single most important waterway for indigenous habitation in the Mojave Desert</b>. Rising in the San Bernardino Mountains, it flows northeast through the desert, terminating at Soda Lake. Most flow is <b>underground</b> — surface water appears only at bedrock narrows and gorges.<br><br>The <b>Vanyume (Desert Serrano / Beñemé)</b> lived along this river for up to <b>8,000 years</b> in a series of permanent villages. They depended on mesquite groves and riparian resources, exported food downriver, and hosted long-distance traders. Father Garcés called it <b>"Arroyo de los Mártires"</b> (River of the Martyrs) in 1776; later Spaniards named it <b>"Río de las Ánimas"</b> (Spirit River / River of Lost Souls).<br><br>In the late 18th century, the Vanyume were displaced by Chemehuevi moving westward, and devastated by <b>Spanish missionization (1811–1814)</b>.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Earle, "The Desert Serrano of the Mojave River"; Earle, UC eScholarship; NPS</div>`, {maxWidth:440});
L.marker([34.75, -117.05], {icon:L.divIcon({className:'',html:'<div style="font-family:Cinzel,serif;font-size:10px;color:#2196F3;text-shadow:0 0 6px #000;white-space:nowrap;letter-spacing:1.5px;opacity:0.8">MOJAVE RIVER</div>',iconSize:[130,14],iconAnchor:[65,7]})}).addTo(L_groups.mojaveRiver);

// Key points along the river
L.circleMarker([34.5400,-117.3100], {radius:5, color:'#29B6F6', fillColor:'#03A9F4', fillOpacity:0.8, weight:1.5}).addTo(L_groups.mojaveRiver).bindPopup(`<h4 style="color:#29B6F6">Upper Narrows</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Victorville area · Bedrock narrows · Perennial surface water</div><div style="font-size:12px;color:#ccc;line-height:1.5">Where shallow bedrock forces the underground Mojave River to the surface, creating a <b>critical habitation zone</b>. The narrows were a gathering point for indigenous peoples who depended on the river — one of the few places where water reliably appeared year-round.</div><div style="font-size:10px;color:#888;margin-top:4px">Sources: Earle, UC eScholarship</div>`);

L.circleMarker([34.5900,-117.2700], {radius:5, color:'#29B6F6', fillColor:'#03A9F4', fillOpacity:0.8, weight:1.5}).addTo(L_groups.mojaveRiver).bindPopup(`<h4 style="color:#29B6F6">Lower Narrows</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">North of Victorville · Bedrock constriction</div><div style="font-size:12px;color:#ccc;line-height:1.5">Another bedrock constriction where the Mojave River surfaces. Together with the Upper Narrows, these points created a corridor of reliable surface water that anchored indigenous settlement.</div>`);

L.marker([35.0427,-116.3097], {icon:mkIcon('#00BCD4', 12)}).addTo(L_groups.mojaveRiver).bindPopup(`<h4 style="color:#00BCD4">🏜️ Afton Canyon — "Grand Canyon of the Mojave"</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">BLM Area of Critical Environmental Concern · Perennial surface water</div><div style="font-size:12px;color:#ccc;line-height:1.5">Where the Mojave River is <b>forced to the surface by shallow bedrock</b>, creating a year-round riparian corridor of extraordinary importance. The canyon was formed ~25,000 years ago when <b>Lake Manix catastrophically drained</b>, sending a wall of water that carved this gorge through the bedrock.<br><br>One of the only places in the Mojave Desert with <b>permanent surface water</b> — sustaining cottonwoods, willows, and wildlife. For indigenous peoples, Afton Canyon was a critical waypoint between the Mojave River villages and the Colorado River corridor.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: BLM; Reheis et al. 2007; NPS "The Mojave Road"</div>`, {maxWidth:400});

L.circleMarker([35.1500,-116.0900], {radius:5, color:'#29B6F6', fillColor:'#03A9F4', fillOpacity:0.8, weight:1.5}).addTo(L_groups.mojaveRiver).bindPopup(`<h4 style="color:#29B6F6">Mojave River Mouth at Soda Lake</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Terminus of the river · Junction with Mojave Trail</div><div style="font-size:12px;color:#ccc;line-height:1.5">Where the Mojave River terminates at Soda Lake — and where the <b>Mojave Trail from the Colorado River</b> connected with the river corridor. This was the <b>"Fork of the Road"</b> where the Mojave Road split from the Old Spanish Trail. A critical crossroads for indigenous trade and travel.</div>`);

// ========== MOJAVE SPRINGS & OASES ==========

const mojaveSpringsData = [
  [35.1150, -114.9853, 'Piute Spring / Piute Creek', 'Perennial spring · Desert oasis', 'Nüwüwü (Chemehuevi), Pipa Aha Macav (Mohave), Nuwuvi (Southern Paiute)',
   'The <b>first major water stop on the Mojave Trail</b> from the Colorado River. A desert oasis with year-round trees and plants, used by Mojave, Chemehuevi, and Paiute peoples for millennia. Fort Piute was built here in <b>1867</b> by US infantry to control the spring — military control of springs effectively controlled indigenous movement.'],
  [35.1350, -115.2100, 'Rock Spring', 'Natural spring · Mojave Trail waypoint', 'Mojave, Chemehuevi',
   'Key waypoint on the <b>Mojave Trail</b>. Water flows down large boulders in the Mid Hills area of Mojave National Preserve. The military established an outpost here to secure this water source.'],
  [35.1400, -115.2400, 'Government Holes', 'Natural spring/well · Round Valley', 'Mojave Trail travelers',
   'Vital water supply along the Mojave Road in Round Valley, west of Rock Spring. Noted by <b>Father Garcés in 1776</b> during his journey along the Mojave Trail.'],
  [35.1707, -115.6476, 'Marl Spring', 'Natural spring · Ancient oasis', 'Nüwüwü (Chemehuevi), Pipa Aha Macav (Mohave)',
   'An ancient watering hole used by indigenous peoples for millennia. Named by Army Lt. <b>Whipple in 1854</b>. A military outpost operated here 1867–1868. Described as a <b>"beautiful high desert oasis"</b> in the Kelso Mountains area of Mojave National Preserve.'],
  [35.1431, -116.1028, 'Soda Spring (Zzyzx)', 'Natural spring · Soda Lake edge', 'Nuwuvi (Southern Paiute), Nüwüwü (Chemehuevi)',
   'Spring at the edge of Soda Lake. Small settlements and temporary rancherias were established here. An <b>ancient cornfield</b> was documented south of Soda Springs (Rasor Ranch). Noted by <b>Father Garcés in 1776</b>. Now the <b>Desert Studies Center</b> (Cal State system).'],
  [34.7700, -115.5500, 'Bonanza Spring / Lower Bonanza Springs', 'Major spring complex · Fenner Valley', 'Multiple groups',
   'One of the <b>largest spring complexes in the Mojave Desert</b>, between the Marble/Providence Mountains and Clipper Mountains. A significant water resource in an otherwise dry landscape. Currently threatened by the proposed <b>Cadiz Groundwater Project</b>.'],
  [36.4400, -116.3200, 'Ash Meadows', 'Major spring complex · Deep groundwater', 'Nuwuvi (Southern Paiute)',
   'One of the two most notable springs in the Mojave, fed from deep underground aquifers. Sacred to <b>Southern Paiute</b> peoples. Now <b>Ash Meadows National Wildlife Refuge</b> — one of the most biodiverse places in the desert with multiple endemic species.'],
  [34.1347, -116.0547, 'Oasis of Mara (Twentynine Palms)', 'Natural oasis with springs', 'Yahaaviatam Marranga\'yam (Serrano), later Nüwüwü (Chemehuevi)',
   'In the Serrano language, <b>Mara</b> means "the place of little springs and much grass." According to traditional songs, this is <b>the first place where the Serrano lived on Earth</b>. They used deer grass for basket weaving and palm fronds as building material. The Chemehuevi arrived later (~1860s). Today\'s <b>Twenty-Nine Palms Band of Mission Indians</b> are descendants of the Chemehuevi. Near Joshua Tree NP.'],
  [34.5800, -117.4300, 'Topiabit / Adelanto Springs', 'Natural springs · Permanent village', 'Yahaaviatam Marranga\'yam (Serrano-Vanyume)',
   'Site of a <b>permanent village</b> occupied for the last ~1,000 years. ~25 structures (circular huts). Artifacts: shell pendants, beads, bone awls, metates, manos, clay pipe, mortar, bone whistle, abalone shell, arrow straightener. Located on the ancient <b>Mohave-Chemehuevi trade trail</b> from the Colorado River to the Pacific Coast.'],
  [35.0900, -115.1600, 'Indian Well', 'Old well · Mojave Trail waypoint', 'Mojave Trail travelers',
   'Waypoint on the Mojave Trail between Piute Spring and Rock Spring, near Indian Hill in Lanfair Valley, Mojave National Preserve.'],
  [35.4000, -117.6000, 'Squaw Spring / Blackwater Well', 'Desert springs · Red Mountain area', 'Multiple groups',
   'Archaeological sites documented by Kaldenberg (1978, 1981). <b>Squaw Spring Well Archaeological District.</b> Multiple periods of occupation in the western Mojave near Red Mountain.']
];
mojaveSpringsData.forEach(s => {
  L.marker([s[0],s[1]], {icon:mojaveSpringIcon}).addTo(L_groups.mojaveSprings)
    .bindPopup(`<h4 style="color:#00ACC1">💧 ${s[2]}</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">${s[3]}</div><div style="font-size:11px;color:#80DEEA;margin-bottom:4px"><b>Homelands of:</b> ${s[4]}</div><div style="font-size:12px;color:#ccc;line-height:1.5">${s[5]}</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: NPS Mojave National Preserve; BLM; Earle, "The Mojave River and the Central Mojave Desert"; Warren, BLM</div>`, {maxWidth:400});
});

// ========== COLORADO RIVER CORRIDOR ==========

// Mojave territory along Colorado River — highlighted corridor
const coloradoCorridorCoords = [
  [35.30,-114.70],[35.20,-114.55],[35.05,-114.55],[34.95,-114.58],
  [34.85,-114.55],[34.70,-114.50],[34.55,-114.48],[34.40,-114.45],
  [34.25,-114.42],[34.10,-114.40],[34.10,-114.55],[34.25,-114.58],
  [34.40,-114.60],[34.55,-114.62],[34.70,-114.65],[34.85,-114.68],
  [35.05,-114.70],[35.20,-114.72],[35.30,-114.70]
];
L.polygon(coloradoCorridorCoords, {
  color:'#1565C0', fillColor:'#0D47A1', fillOpacity:0.12, weight:2, opacity:0.5
}).addTo(L_groups.mojaveColorado).bindPopup(`<h4 style="color:#42A5F5">🌊 Mojave Territory — Colorado River Corridor</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">~120 miles along both banks · 4,000+ years of floodplain agriculture</div><div style="font-size:12px;color:#ccc;line-height:1.5">The <b>agricultural heartland</b> of the Mojave Desert's indigenous peoples. The name "Mojave" derives from the Mohave people's self-designation: <b>Pipa Aha Macav — "The People By The River."</b> Their spirit mentor <b>Mutavilya</b> is said to have created the Colorado River, its plants and animals.<br><br>Pre-dam, the Colorado was wide and braided with annual spring floods from Rocky Mountain snowmelt that deposited rich silt on floodplains. The Mojave practiced <b>floodplain farming for 4,000+ years</b> — corn, melons, pumpkins, beans, sunflowers, squash, gourds, tobacco, cotton. ~3,000 people at Spanish contact — the <b>largest concentration of people in the Southwest</b>.<br><br>Settlement pattern: <b>"Line villages"</b> — sprawling settlements scattered in clusters along bottomlands.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Fort Mojave Indian Tribe; Colorado River Indian Tribes; Sutton 1996</div>`, {maxWidth:440});

// Colorado River line
L.polyline([
  [35.40,-114.68],[35.20,-114.62],[35.05,-114.60],[34.95,-114.62],
  [34.85,-114.60],[34.70,-114.55],[34.55,-114.52],[34.40,-114.50],
  [34.25,-114.48],[34.10,-114.45],[33.97,-114.43],[33.80,-114.50],
  [33.62,-114.55]
], {color:'#1565C0', weight:3.5, opacity:0.6}).addTo(L_groups.mojaveColorado);

// Fort Mojave Reservation
L.circleMarker([34.8700,-114.6000], {radius:7, color:'#FF8F00', fillColor:'#FFA726', fillOpacity:0.7, weight:2}).addTo(L_groups.mojaveColorado).bindPopup(`<h4 style="color:#FFA726">🏘️ Fort Mojave Reservation</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Needles area · ~32,713 acres · AZ/CA/NV</div><div style="font-size:12px;color:#ccc;line-height:1.5">Located in the <b>first floodplain valley on the Lower Colorado River</b>. The dominant feature is the Colorado River, and most of the reservation is in the historic floodplain. The Fort was established in <b>1859</b>; closed in 1891 and converted to a boarding school — one of many tools of forced assimilation. Modern archaeological interpretations indicate the <b>Mohave have lived along the Colorado River for 12,000+ years</b>.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Fort Mojave Indian Tribe; mojaveindiantribe.com</div>`, {maxWidth:400});

// Colorado River Indian Reservation
L.circleMarker([33.9700,-114.4300], {radius:7, color:'#FF8F00', fillColor:'#FFA726', fillOpacity:0.7, weight:2}).addTo(L_groups.mojaveColorado).bindPopup(`<h4 style="color:#FFA726">🏘️ Colorado River Indian Reservation</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">~300,000 acres · AZ & CA · Est. 1865</div><div style="font-size:12px;color:#ccc;line-height:1.5">Established <b>1865</b> for "Indians of the Colorado River and its tributaries." Originally occupied by <b>Mohave and Chemehuevi</b>. Villages and significant cultural sites are evident along river trails, marked by petroglyphs and geoglyphs.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Colorado River Indian Tribes; tentribespartnership.org</div>`, {maxWidth:380});

// ========== VILLAGE SITES ==========

const mojaveVillageData = [
  [34.5800, -117.4300, 'Topiabit (Topipabit) Rancheria', 'Serrano-Vanyume · Adelanto Springs', '~25 circular hut structures on the <b>Mohave-Chemehuevi trade trail</b>. Artifacts indicate trade with distant regions — Nevada "Lost Cities" pottery parallels. Shell pendants, bone awls, metates, clay pipe, abalone shell, arrow straightener.'],
  [34.9500, -114.6200, 'Mojave Villages (Center)', 'Pipa Aha Macav (Mohave) · Colorado River', '<b>Line villages</b> stretching ~120 miles along both banks of the Colorado. 4,000+ years of floodplain agriculture. Starting point of the <b>Mojave Trail</b> to the Pacific coast. Housing: brush and mesquite log structures, flat-topped shade ramadas for most of year.'],
  [34.1347, -116.0547, 'Oasis of Mara Village', 'Serrano (original), later Chemehuevi', 'According to Serrano traditional songs, <b>the first place where the Serrano lived on Earth</b>. In Serrano language, <b>Mara</b> = "the place of little springs and much grass."'],
  [35.1431, -116.1028, 'Soda Springs Rancherias', 'Paiute, Chemehuevi · Soda Spring', 'Temporary rancherias and small settlements at Soda Spring. An <b>ancient cornfield</b> documented nearby (Rasor Ranch area).'],
  [34.8000, -118.1000, 'Antelope Valley Lake Shore Camps', 'Multiple peoples · 12,000+ years', '<b>12,000+ years of habitation.</b> Peoples camped around ancient lake shores from ~8,000–6,000 BCE. Earliest peoples from the Hokan linguistic family, later Uto-Aztecan groups. Extensive projectile points, petroglyphs, pictographs, bedrock mortars.']
];
mojaveVillageData.forEach(v => {
  L.marker([v[0],v[1]], {icon:mojaveVillageIcon}).addTo(L_groups.mojaveVillages)
    .bindPopup(`<h4 style="color:#FF8F00">🏘️ ${v[2]}</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">${v[3]}</div><div style="font-size:12px;color:#ccc;line-height:1.5">${v[4]}</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Earle, "The Desert Serrano"; Warren, BLM; Fort Mojave Indian Tribe; CA State Parks</div>`, {maxWidth:400});
});

// ========== SACRED SITES & GEOGLYPHS ==========

// Blythe Intaglios
L.marker([33.8000, -114.5300], {icon:mojaveSacredIcon}).addTo(L_groups.mojaveSacred).bindPopup(`<h4 style="color:#CE93D8">✦ Blythe Intaglios</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Giant geoglyphs · Colorado River · 450–2,000 years old · NRHP 1982</div><div style="font-size:12px;color:#ccc;line-height:1.5">Giant geoglyphs on the desert floor near the Colorado River — <b>six figures in three locations</b>, the largest human figure <b>171 feet long</b>. Radiocarbon dates range 900 BCE to 1200 CE.<br><br>According to <b>Mohave and Quechan</b> oral tradition, the human figures represent <b>Mastamho, the Creator of all life</b>. Animal figures represent <b>Hatakulya</b>, a mountain lion being who helped in Creation. Ceremonial dances were held in the area to honor creation. The river was central to their spiritual and everyday life.<br><br>BLM fenced the site in 1974 after vehicle damage. Listed on the <b>National Register of Historic Places</b> in 1982.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: BLM "Blythe Intaglios"; NPS; Fort Mojave Indian Tribe</div>`, {maxWidth:420});

// Spirit Mountain (Avi Kwa Ame)
L.marker([35.4200, -114.7400], {icon:mojaveSacredIcon}).addTo(L_groups.mojaveSacred).bindPopup(`<h4 style="color:#CE93D8">✦ Spirit Mountain (Avi Kwa Ame)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Sacred mountain · Newberry Mtns · CA-NV border · Origin place of the Mojave</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Mojave <b>trace their earthly origins to Spirit Mountain</b>. The Mojave, Hopi, and Chemehuevi still sing ancient songs that help spirits of deceased loved ones navigate the landscape around this mountain.<br><br>Active effort to establish as <b>national monument (443,671 acres proposed)</b>. One of the most spiritually significant sites in the southwestern desert — a place of creation, passage, and ongoing cultural practice.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Fort Mojave Indian Tribe; NPS; Honor Avi Kwa Ame coalition</div>`, {maxWidth:400});

// Topock Maze / Mojave Maze
L.marker([34.7100, -114.5100], {icon:mojaveSacredIcon}).addTo(L_groups.mojaveSacred).bindPopup(`<h4 style="color:#CE93D8">✦ Topock Maze / Mojave Maze</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Geoglyph (debated) · Colorado River near Topock</div><div style="font-size:12px;color:#ccc;line-height:1.5">A complex arrangement of cleared pathways and rock alignments near the Colorado River at Topock. The site's function is debated — interpretations range from ceremonial maze to astronomical alignment to trail marker. Sacred to the <b>Mojave people</b>.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: BLM; Fort Mojave Indian Tribe</div>`, {maxWidth:380});

// Seventeen Mile Point petroglyphs
L.marker([35.2056, -115.8721], {icon:mkPetroIcon('#EF5350', 10)}).addTo(L_groups.mojaveSacred).bindPopup(`<h4 style="color:#EF5350">Seventeen Mile Point Petroglyphs</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Mojave National Preserve · 1,000+ years · Rock art</div><div style="font-size:12px;color:#ccc;line-height:1.5">Petroglyph panels in the Mojave National Preserve, documenting over 1,000 years of indigenous spiritual and cultural expression in the desert landscape.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: NPS; BLM</div>`, {maxWidth:360});

// ========== ARCHAEOLOGICAL SITES ==========

// Calico Early Man Site
L.marker([34.9500, -116.7800], {icon:mojaveArchIcon}).addTo(L_groups.mojaveArch).bindPopup(`<h4 style="color:#EF5350">🔬 Calico Early Man Site</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Near Lake Manix · Controversial · Possibly 100,000+ BP</div><div style="font-size:12px;color:#ccc;line-height:1.5">One of the most <b>controversial archaeological sites in North America</b>. Located near the ancient shores of Lake Manix, the site was championed by famed archaeologist <b>Louis Leakey</b> who believed lithic artifacts here were human-made tools dating to over 100,000 years ago — far earlier than any accepted evidence of humans in the Americas.<br><br>Most archaeologists consider the "artifacts" to be naturally fractured stones (<b>geofacts</b>). The debate continues, but Calico remains important for the questions it raises about earliest human presence in the New World.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 1996; Warren, BLM; Wikipedia "Calico Early Man Site"</div>`, {maxWidth:400});

// ========== MOJAVE TRAIL (Trade Route) ==========
// The great trail connecting the Colorado River to the Pacific Coast via springs
const mojaveTrailCoords = [
  [34.9500,-114.6200],  // Colorado River (Mojave Villages / Needles)
  [35.0000,-114.7500],
  [35.1150,-114.9853],  // Piute Spring
  [35.0900,-115.1600],  // Indian Well
  [35.1350,-115.2100],  // Rock Spring
  [35.1400,-115.2400],  // Government Holes
  [35.1707,-115.6476],  // Marl Spring
  [35.2056,-115.8721],  // Seventeen Mile Point
  [35.1431,-116.1028],  // Soda Spring (Zzyzx)
  [35.1500,-116.0900],  // Fork of the Road / Mojave River mouth
  [35.0427,-116.3097],  // Afton Canyon
  [34.8600,-116.8900],  // Daggett
  [34.5400,-117.3100],  // Upper Narrows / Victorville
  [34.2900,-117.2800]   // San Bernardino Mtns → Pacific Coast
];
L.polyline(mojaveTrailCoords, {
  color:'#D4760A', weight:2.5, opacity:0.7, dashArray:'10,6'
}).addTo(L_groups.mojaveTrail).bindPopup(`<h4 style="color:#FFB74D">🛤️ The Mojave Trail</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Colorado River to Pacific Coast · ~200 miles · Spring-to-spring route</div><div style="font-size:12px;color:#ccc;line-height:1.5">The great <b>indigenous trade route</b> connecting the Colorado River Mojave villages to the Pacific Coast, traveling spring-to-spring across the desert. Used for <b>thousands of years</b> by Mojave, Chemehuevi, and other peoples for trade, warfare, and cultural exchange.<br><br>Key waypoints: <b>Piute Spring → Indian Well → Rock Spring → Government Holes → Marl Spring → Soda Spring → Afton Canyon → Mojave River corridor → San Bernardino Mountains → Coast</b>.<br><br>Father <b>Garcés</b> traveled this trail in 1776; <b>Jedediah Smith</b> followed it in 1826. The US military built forts at springs along the route (1859+) — controlling water to control indigenous movement. Later became the <b>Mojave Road</b>.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: NPS "The Mojave Road & The Old Spanish Trail"; Earle, UC eScholarship; BLM</div>`, {maxWidth:440});

// ========== TRIBAL TERRITORY OVERLAYS ==========

// Mojave (Pipa Aha Macav) territory
const mojaveTerritoryCoords = [
  [35.40,-114.90],[35.30,-114.50],[35.10,-114.40],[34.90,-114.45],
  [34.70,-114.40],[34.50,-114.35],[34.30,-114.35],[34.10,-114.35],
  [34.10,-114.80],[34.30,-114.85],[34.50,-114.90],[34.70,-114.95],
  [34.90,-115.00],[35.10,-115.00],[35.30,-114.95],[35.40,-114.90]
];
L.polygon(mojaveTerritoryCoords, {
  color:'#E65100', fillColor:'#E65100', fillOpacity:0.08, weight:1.5, opacity:0.4, dashArray:'8,4'
}).addTo(L_groups.mojaveTerritories).bindPopup(`<h4 style="color:#FF8F00">Mojave (Pipa Aha Macav) Territory</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">"The People By The River" · Colorado River · Both banks, ~120 miles</div><div style="font-size:12px;color:#ccc;line-height:1.5"><b>Primary Water:</b> Colorado River<br><b>Water Use:</b> Floodplain agriculture (4,000+ years), fishing, reed raft travel<br><b>Sacred Water Site:</b> Spirit Mountain (Avi Kwa Ame) — origin place<br><br>Their spirit mentor <b>Mutavilya</b> is said to have created the Colorado River, its plants and animals. The cultural ancestor is the <b>Hakatayan / Lowland Patayan</b> archaeological culture.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Fort Mojave Indian Tribe; Sutton 1996</div>`, {maxWidth:400});
L.marker([34.80, -114.65], {icon:L.divIcon({className:'',html:'<div style="font-family:Cinzel,serif;font-size:10px;color:#FF8F00;text-shadow:0 0 6px #000;white-space:nowrap;letter-spacing:1.5px;opacity:0.6">PIPA AHA MACAV</div>',iconSize:[150,14],iconAnchor:[75,7]})}).addTo(L_groups.mojaveTerritories);

// Chemehuevi (Nüwüwü) territory
const chemehueviTerritoryCoords = [
  [35.80,-115.80],[35.70,-115.10],[35.50,-114.90],[35.20,-115.00],
  [34.90,-115.10],[34.60,-115.50],[34.40,-115.80],[34.40,-116.50],
  [34.60,-116.80],[34.90,-116.90],[35.20,-116.50],[35.50,-116.10],
  [35.80,-115.80]
];
L.polygon(chemehueviTerritoryCoords, {
  color:'#00897B', fillColor:'#00897B', fillOpacity:0.06, weight:1.5, opacity:0.35, dashArray:'8,4'
}).addTo(L_groups.mojaveTerritories).bindPopup(`<h4 style="color:#4DB6AC">Chemehuevi (Nüwüwü) Territory</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Eastern Mojave desert interior · Between Colorado & Mojave rivers</div><div style="font-size:12px;color:#ccc;line-height:1.5"><b>Primary Water:</b> Desert springs, seasonal water sources, later Colorado River shoreline<br><b>Water Use:</b> Hunter-gatherer adaptation to springs; later farming at Colorado River<br><br>Considered an <b>endangered people</b> — language nearly extinct. The <b>Twenty-Nine Palms Band</b> and <b>Chemehuevi Indian Tribe at Lake Havasu</b> preserve culture. Expanded westward in the late 18th century, displacing the Vanyume along the Mojave River.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Chemehuevi Cultural Committee; Sutton 1996; Earle</div>`, {maxWidth:400});
L.marker([35.10, -115.80], {icon:L.divIcon({className:'',html:'<div style="font-family:Cinzel,serif;font-size:9px;color:#4DB6AC;text-shadow:0 0 5px #000;white-space:nowrap;letter-spacing:1px;opacity:0.5">NÜWÜWÜ</div>',iconSize:[100,14],iconAnchor:[50,7]})}).addTo(L_groups.mojaveTerritories);

// Vanyume / Desert Serrano (Beñemé) territory
const vanyumeTerritoryCoords = [
  [35.20,-116.50],[35.10,-116.00],[34.90,-116.20],[34.70,-116.70],
  [34.50,-117.00],[34.35,-117.30],[34.45,-117.50],[34.65,-117.40],
  [34.85,-117.20],[35.00,-116.90],[35.20,-116.50]
];
L.polygon(vanyumeTerritoryCoords, {
  color:'#795548', fillColor:'#795548', fillOpacity:0.06, weight:1.5, opacity:0.35, dashArray:'8,4'
}).addTo(L_groups.mojaveTerritories).bindPopup(`<h4 style="color:#A1887F">Vanyume / Desert Serrano (Beñemé) Territory</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Mojave River corridor · Barstow to Victorville</div><div style="font-size:12px;color:#ccc;line-height:1.5"><b>Primary Water:</b> Mojave River<br><b>Water Use:</b> Mesquite exploitation, riparian resources, hosting trade<br><br>Lived along the Mojave River for up to <b>8,000 years</b> in permanent villages. <b>Devastated by Spanish missionization (1811–1814)</b> and displaced by Chemehuevi in the 1820s. <b>Language extinct.</b> One of the least documented peoples of California — their story is one of almost complete erasure.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Earle, "The Desert Serrano of the Mojave River"; Pacific Coast Archaeological Society Quarterly</div>`, {maxWidth:400});
L.marker([34.75, -116.85], {icon:L.divIcon({className:'',html:'<div style="font-family:Cinzel,serif;font-size:9px;color:#A1887F;text-shadow:0 0 5px #000;white-space:nowrap;letter-spacing:1px;opacity:0.5">BEÑEMÉ</div>',iconSize:[80,14],iconAnchor:[40,7]})}).addTo(L_groups.mojaveTerritories);

// Serrano (Yahaaviatam Marranga'yam) territory — portion in Mojave
const serranoTerritoryCoords = [
  [34.45,-117.50],[34.35,-117.30],[34.20,-117.10],[34.05,-116.80],
  [34.00,-116.50],[34.00,-116.10],[34.15,-116.00],[34.30,-116.20],
  [34.35,-116.60],[34.40,-117.00],[34.45,-117.50]
];
L.polygon(serranoTerritoryCoords, {
  color:'#558B2F', fillColor:'#558B2F', fillOpacity:0.06, weight:1.5, opacity:0.35, dashArray:'8,4'
}).addTo(L_groups.mojaveTerritories).bindPopup(`<h4 style="color:#8BC34A">Serrano (Yahaaviatam Marranga'yam) Territory</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">"Mountain Dwellers" · San Bernardino Mtns & adjacent desert</div><div style="font-size:12px;color:#ccc;line-height:1.5"><b>Primary Water:</b> Mountain streams, upper Mojave River, desert springs<br><b>Water Use:</b> Village sweathouses near streams; acorn/piñon processing<br><b>Sacred Water Site:</b> Oasis of Mara — "the first place the Serrano lived on Earth"<br><br>The Serrano occupied the higher elevations of the San Bernardino Mountains and extended into the desert at key spring sites like the Oasis of Mara at Twentynine Palms.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: NPS Joshua Tree; Bean 1978; Kroeber 1925</div>`, {maxWidth:400});
L.marker([34.22, -116.65], {icon:L.divIcon({className:'',html:'<div style="font-family:Cinzel,serif;font-size:9px;color:#8BC34A;text-shadow:0 0 5px #000;white-space:nowrap;letter-spacing:1px;opacity:0.5">YAHAAVIATAM</div>',iconSize:[110,14],iconAnchor:[55,7]})}).addTo(L_groups.mojaveTerritories);

// Kitanemuk territory — Western Mojave
const kitanemukTerritoryCoords = [
  [35.00,-118.50],[34.95,-118.00],[34.80,-117.80],[34.65,-117.80],
  [34.55,-118.00],[34.55,-118.30],[34.65,-118.50],[34.80,-118.60],
  [35.00,-118.50]
];
L.polygon(kitanemukTerritoryCoords, {
  color:'#6D4C41', fillColor:'#6D4C41', fillOpacity:0.06, weight:1.5, opacity:0.35, dashArray:'8,4'
}).addTo(L_groups.mojaveTerritories).bindPopup(`<h4 style="color:#BCAAA4">Kitanemuk Territory</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Western Mojave · Antelope Valley</div><div style="font-size:12px;color:#ccc;line-height:1.5">Occupied the western Mojave Desert including much of <b>Antelope Valley</b>. Related to the Serrano language family. Lived around the ancient lake shores of Lake Thompson and relied on piñon nuts, acorns, and small game.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; CA State Parks</div>`, {maxWidth:360});

// Kawaiisu territory — Northwestern Mojave
L.circle([35.35, -118.20], {radius:30000, color:'#5D4037', fillColor:'#5D4037', fillOpacity:0.05, weight:1, opacity:0.3, dashArray:'8,4'
}).addTo(L_groups.mojaveTerritories).bindPopup(`<h4 style="color:#A1887F">Kawaiisu Territory</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Northwestern Mojave · Tehachapi & Piute Mtns</div><div style="font-size:12px;color:#ccc;line-height:1.5"><b>Primary Water:</b> Springs in the Tehachapi and Piute Mountains<br>Hunter-gatherers of the northwestern Mojave Desert, speaking a Numic language related to Southern Paiute.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Kroeber 1925; Zigmond 1986</div>`, {maxWidth:350});

// Southern Paiute (Nuwuvi) territory — portion in Mojave
L.circle([35.80, -115.50], {radius:45000, color:'#3E2723', fillColor:'#3E2723', fillOpacity:0.05, weight:1, opacity:0.3, dashArray:'8,4'
}).addTo(L_groups.mojaveTerritories).bindPopup(`<h4 style="color:#BCAAA4">Southern Paiute (Nuwuvi) Territory</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Eastern/northeastern Mojave · Into Nevada & Utah</div><div style="font-size:12px;color:#ccc;line-height:1.5">The Southern Paiute (<b>Nuwuvi</b>) occupied the eastern and northeastern Mojave Desert extending deep into Nevada, Utah, and Arizona. They maintained sacred connections to <b>Ash Meadows</b> and other spring complexes in the eastern Mojave. The Nuwuvi environmental stewardship tradition emphasizes caring for springs, mountains, and trails.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: NPS; Nuwuvi Working Group; Stoffle et al.</div>`, {maxWidth:380});
