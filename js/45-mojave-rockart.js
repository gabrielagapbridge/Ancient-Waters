// ============================================================
// MOJAVE DESERT — ROCK ART DEEP DIVE
// Petroglyphs, pictographs, cupules, and painted caves
// organized by sub-region across the Mojave Desert
// ============================================================
// NOTE: Coso Rock Art District already covered in 10-greatbasin.js
// and as summary in 43-mojave-villages.js (mojaveCeremonial).
// Black Mountain / Inscription Canyon also in 43.
// This file adds NEW sites not yet on the map.
// ============================================================

// ========== ROCK ART ICONS ==========
const mojRockIcon = L.divIcon({className:'', iconSize:[11,11], iconAnchor:[5.5,5.5],
  html:'<div style="width:11px;height:11px;background:#FF7043;border:2px solid #BF360C;border-radius:50%;box-shadow:0 0 5px #FF704366;"></div>'});
const mojRockLgIcon = L.divIcon({className:'', iconSize:[14,14], iconAnchor:[7,7],
  html:'<div style="width:14px;height:14px;background:#FF7043;border:2.5px solid #BF360C;border-radius:50%;box-shadow:0 0 6px #FF704388;"></div>'});
const mojPictoIcon = L.divIcon({className:'', iconSize:[11,11], iconAnchor:[5.5,5.5],
  html:'<div style="width:11px;height:11px;background:#F44336;border:2px solid #B71C1C;border-radius:2px;box-shadow:0 0 5px #F4433666;"></div>'});
const mojCupuleIcon = L.divIcon({className:'', iconSize:[9,9], iconAnchor:[4.5,4.5],
  html:'<div style="width:9px;height:9px;background:#FFAB91;border:2px solid #D84315;border-radius:50%;box-shadow:0 0 4px #FFAB9166;"></div>'});
const mojCaveIcon = L.divIcon({className:'', iconSize:[12,12], iconAnchor:[6,6],
  html:'<div style="width:12px;height:12px;background:#E91E63;border:2px solid #880E4F;border-radius:2px;transform:rotate(45deg);box-shadow:0 0 6px #E91E6366;"></div>'});

// ==========================================================================
//  I. MOJAVE NATIONAL PRESERVE — Rock Art Sites
//  Eastern Mojave · Chemehuevi & Mojave peoples · 1,000+ years
// ==========================================================================

// --- Hole-in-the-Wall / Rings Trail Rock Art ---
L.marker([35.0498, -115.3990], {icon:mojRockLgIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#FF7043">🪨 Hole-in-the-Wall Rock Art</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Mojave National Preserve · Rings Trail · Petroglyphs on volcanic tuff</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Petroglyphs cover large boulders along the first section of the <b>Rings Trail</b>, near the Hole-in-the-Wall Information Center. The rock art is pecked into volcanic tuff — the same wind-carved formation that gives Banshee Canyon its Swiss-cheese appearance.<br><br>
The tuff was created millions of years ago from volcanic eruptions; wind and water carved the distinctive holes. Legend holds that <b>Native Americans eluded pursuers by scurrying down these cliffs</b>, disappearing into the maze of passages.<br><br>
Motifs include abstract geometric designs and animal figures. The surrounding area was used by <b>Chemehuevi and Mojave</b> peoples for centuries.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: NPS Mojave National Preserve; Road Trip Ryan; ADV Pulse</div>
`, {maxWidth:400});

// --- Cow Cove Petroglyphs ---
L.marker([35.1100, -115.5600], {icon:mojRockLgIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#FF7043">🪨 Cow Cove Petroglyphs</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Mojave National Preserve · NE of Aiken Cinder Cones · Basalt boulder field</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
A significant petroglyph site on the northeast fringes of the <b>Aiken Cinder Cone field</b>. Petroglyphs are scattered across a wide basalt boulder field, with designs pecked into the dark volcanic rock.<br><br>
The site requires a <b>~1.5-mile hike</b> across open desert to reach the main boulder outcrop. Visitors consistently report finding more and more petroglyphs the longer they look — designs are spread across many boulders in the area.<br><br>
Vehicle access to the site was restricted; visitors now must walk in, which has helped preserve the rock art.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Tales from the Desert; ADVENTR.co; Backroads West</div>
`, {maxWidth:400});

// --- Indian Well / Eagle Well Petroglyphs ---
L.marker([35.0700, -115.1800], {icon:mojRockLgIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#FF7043">🪨 Indian Well / Eagle Well Petroglyphs</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Mojave National Preserve · Lanfair Valley · 500–600 petroglyphs · 1,500+ years old</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
One of the <b>most significant rock art concentrations in the Mojave National Preserve</b>. A natural well along the prehistoric <b>Mojave Trail</b> offered a reliable water source, and on virtually every rock within a 100-foot radius, <b>500–600 petroglyphs</b> were carved.<br><br>
Carvings attributed to <b>Chemehuevi and Mohave</b> peoples, and possibly older cultures before them. Some petroglyphs are thought to be <b>at least 1,500 years old</b>. A few inscriptions from early Euro-American settlers are also found among the indigenous rock art.<br><br>
Water still trickles from the rocks today.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: ADV Pulse; NPS; BLM Mojave Road documentation</div>
`, {maxWidth:400});

// --- Black Tank Wash / Aiken Arch Rock Art ---
L.marker([35.0200, -115.6200], {icon:mojRockIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#FF7043">🪨 Black Tank Wash / Aiken Arch Rock Art</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Mojave National Preserve · Cinder Cone Lava Beds area · Petroglyphs & pictographs</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Along Black Tank Wash in the Cinder Cone Lava Beds area, petroglyphs are found on canyon walls, and <b>pictographs survive underneath Aiken Arch</b> — a natural rock shelter that has protected the painted images from weathering.<br><br>
The surrounding volcanic landscape includes petrified trees, cinder cones, and a visitable <b>lava tube</b> nearby. Part of the broader <b>Aiken Mine area</b> archaeological complex.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: ADVENTR.co; Mojave National Preserve; Discovery Channel "Nature in Focus"</div>
`, {maxWidth:380});

// --- Council Rocks (CA-SBR-291) — already in 43 as multi-component, adding rock art detail ---
// (Skipped — already covered in mojaveCeremonial)

// --- Mary's Cave ---
L.marker([35.0800, -115.4500], {icon:mojCaveIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#E91E63">🕳️ Mary's Cave</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Mojave National Preserve · Rock shelter · Cupules, pictographs & petroglyphs</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
A heavily sheltered rock overhang located above a spring with fresh water — ideal habitation. The shelter is covered with <b>many different sized cupules and grinding holes</b>, both on the floor and ceiling. Several old, faded <b>pictographs</b> survive throughout.<br><br>
Likely created by <b>Chemehuevi or Mojave</b> peoples based on geography. Enhanced photography using <b>DStretch</b> software has revealed details invisible to the naked eye.<br><br>
<i>Exact location withheld to protect the pristine condition of this site.</i>
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Tales from the Desert; Jon Harman DStretch analysis</div>
`, {maxWidth:380});

// ==========================================================================
//  II. GRAPEVINE CANYON / SPIRIT MOUNTAIN — Colorado River corridor
//  Near Laughlin, NV · 700+ petroglyphs · NRHP listed · Creation mythology
// ==========================================================================

L.marker([35.2200, -114.7300], {icon:mojRockLgIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#FF7043">🪨 Grapevine Canyon Petroglyphs</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Spirit Mountain / Avi Kwa Ame · Laughlin, NV · 700+ petroglyphs · NRHP 1984 · ~250 panels</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
One of the <b>finest petroglyph sites in southern Nevada</b>, located at the base of <b>Spirit Mountain (Avi Kwa Ame)</b> — the Mojave people's sacred place of creation.<br><br>
Over <b>700 petroglyphs</b> across approximately <b>250 mapped panels</b> (documented 2009). Created between <b>~CE 1100–1900</b>. Designs include bighorn sheep, human figures, spirals, zigzags, hunting equipment, and geometric forms. Many are concentrated at the canyon entrance, with additional petroglyphs deeper inside.<br><br>
The Mojave people interpret the rock art as depicting <b>Creation Mythology</b> — the stories of powerful gods <b>Matavilya</b> and <b>Mastamho</b> who shaped the world and taught humans survival. Shamans entered trance states to access the spirit realm and recreated the visions they encountered on the surrounding rocks.<br><br>
<b>Glyph categories:</b> geometric (circle permutations, line extensions), representational (humanoids, therianthropes, animals). Some identifiable with specific phases of creation: early creation, god-people, animal-people, and human-people.<br><br>
<b>Tragic note:</b> In March 2010, <b>30 areas of petroglyphs were defaced</b> by paintball gun vandalism. Sacred to all 12 <b>Yuman-speaking peoples</b> of the lower Colorado region.<br><br>
Seasonal spring water flows in the canyon, supporting wild grapes, willows, and cottonwoods — a lush oasis in otherwise arid terrain.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Wikipedia; NRHP; Nevada Humanities (ONE); Atlas Obscura; Las Vegas Review-Journal</div>
`, {maxWidth:440});

// ==========================================================================
//  III. RODMAN MOUNTAINS WILDERNESS
//  Central Mojave · 34,264 acres · BLM · Heavily petroglyphed lava flows
// ==========================================================================

L.marker([34.6800, -116.6200], {icon:mojRockLgIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#FF7043">🪨 Rodman Mountains Petroglyph Canyons</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Central Mojave · BLM Wilderness · 34,264 acres · Extensive petroglyph-filled canyons</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
One of the <b>most archaeologically vital areas in the Mojave</b>. Protected under the <b>1994 California Desert Protection Act</b>, this wilderness contains mountains, bajadas, lava flows, deep canyons, and springs — all heavily marked with petroglyphs.<br><br>
Petroglyph-filled canyons wind through the lava flows. Designs are predominantly abstract, with some bighorn sheep and anthropomorphs. Likely created by <b>Desert Serrano (Vanyume)</b> and earlier Desert Archaic cultures.<br><br>
Also home to bighorn sheep, golden eagles, and prairie falcons — one of the <b>few core raptor breeding areas</b> in the California Desert.<br><br>
<b>Conservation crisis:</b> Many petroglyphs have been <b>stolen, shot at, or scratched up</b>. BLM installed roadblock fences at canyon entrances, but vandals have destroyed them and driven vehicles into protected areas. The less accessible sites remain better preserved.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: CalWild; BLM; California Desert Protection Act 1994</div>
`, {maxWidth:420});

// --- Surprise Tank ---
L.marker([34.6773, -116.6218], {icon:mojRockIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#FF7043">🪨 Surprise Tank Petroglyphs</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Rodman Mountains Wilderness · Lava flow dry waterfall · Possibly 10,000 years old</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
A <b>100-foot-high dry waterfall</b> dropping off the edge of a lava flow, covered with <b>hundreds of well-preserved petroglyphs</b>. A small natural tank (pool) of water several feet deep sits at the base — a vital resource in this arid landscape.<br><br>
Most designs are abstract, with some bighorn sheep and anthropomorphs. Likely made by <b>Desert Serrano and Desert Archaic</b> cultures. Some petroglyphs may be <b>up to 10,000 years old</b>.<br><br>
The remote location has kept this site remarkably <b>undisturbed</b> compared to more accessible Rodman Mountains canyons. Bighorn sheep droppings and hoof prints confirm the animals still visit the tank.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: CalWild; Starbuck.org field documentation (1998–2020)</div>
`, {maxWidth:400});

// ==========================================================================
//  IV. JOSHUA TREE NATIONAL PARK — Rock Art
//  Serrano & Chemehuevi · Petroglyphs, pictographs & painted caves
// ==========================================================================

// --- Barker Dam Petroglyph Cave ---
L.marker([34.0192, -116.1587], {icon:mojCaveIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#E91E63">🕳️ Barker Dam Petroglyph Cave</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Joshua Tree NP · Barker Dam Trail · ~2,000 years old · Petroglyphs & pictographs</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
A natural cave formed by weathered granite boulders along the <b>Barker Dam Trail</b>. Contains both <b>petroglyphs</b> (carved) and <b>pictographs</b> (painted with mineral pigments), including bighorn sheep, snakes, and geometric symbols. The art dates to approximately <b>2,000 years ago</b>.<br><br>
<b>Hollywood damage:</b> In the 1940s–50s, a film crew <b>painted over the original petroglyphs</b> with bright colors to make them show up better on camera — an act that would be illegal today. The enhanced paint remains visible, making it hard to distinguish original from modified art.<br><br>
The site is associated with <b>Serrano</b> and possibly <b>Chemehuevi</b> peoples who used the Barker Dam area seasonally. The nearby dam (built 1900 by ranchers) now provides one of the park's few persistent water sources for wildlife.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: USGS; NPS Joshua Tree; Weekend Sherpa; Flickr documentation</div>
`, {maxWidth:420});

// --- Rattlesnake Canyon Rock Art ---
L.marker([34.0700, -116.1400], {icon:mojRockIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#FF7043">🪨 Rattlesnake Canyon Rock Art</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Joshua Tree NP · Indian Cove area · Petroglyphs in granite boulders</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Rock art site accessible from the <b>Indian Cove Campground</b> area of Joshua Tree. Petroglyphs are found among the granite boulder formations in and around the canyon.<br><br>
Part of a broader network of seasonal habitation sites used by <b>Serrano (Yahaaviatam Marranga'yam)</b> peoples who followed resources between the mountains and desert floor.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: NPS; Nature Impacts Us field guide</div>
`, {maxWidth:360});

// --- "Hidden Cave" Pictographs ---
L.marker([34.0300, -116.1800], {icon:mojPictoIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#F44336">🎨 "Hidden Cave" Pictographs</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Joshua Tree NP · Wonderland of Rocks area · Painted cave · Possible puberty ritual site</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
A small painted cave deep in the <b>Wonderland of Rocks</b>. Contains elaborate pictographs including <b>diamond chain motifs, bisected circles, rectilinear elements</b>, and a spidery black element in a fire-blackened alcove.<br><br>
The diamond motifs may indicate <b>female puberty rites</b> — a practice documented throughout southern and central California. The cave would have been dramatically lit by a small fire in the interior alcove, out of direct sight of the entrance.<br><br>
Associated with <b>Southern California Rectilinear Abstract Painted Style</b>. Serrano cultural context.<br><br>
<i>Exact location withheld to protect this fragile site.</i>
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Peregriff.com field documentation; Whitley 1996; Death Valley Jim "Hidden Joshua Tree"</div>
`, {maxWidth:400});

// --- Slab Rock Shelter & Red Lady Pictograph ---
L.marker([34.0250, -116.1650], {icon:mojPictoIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#F44336">🎨 Slab Rock Shelter & "Red Lady" Pictograph</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Joshua Tree NP · Barker Dam area · Pictographs in rock shelters</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Multiple pictograph sites in the <b>Barker Dam / Hidden Valley area</b>, including the distinctive <b>"Red Lady"</b> — a red-painted anthropomorphic figure — and additional painted panels in granite rock shelters.<br><br>
Part of a cluster of rock art sites in the Wonderland of Rocks zone that together demonstrate sustained ceremonial use of this landscape over centuries.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: AllTrails field logs; Death Valley Jim "Hidden Joshua Tree"</div>
`, {maxWidth:380});

// ==========================================================================
//  V. WESTERN MOJAVE / ANTELOPE VALLEY — Pictographs, Cupules & Petroglyphs
//  Kitanemuk, Tataviam, Serrano-Vanyume & Kawaiisu peoples
// ==========================================================================

// --- Burham Canyon Polychrome Pictographs (CA-KER-273) ---
L.marker([34.9700, -118.5200], {icon:mojPictoIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#F44336">🎨 Burham Canyon Polychrome Pictographs (CA-KER-273)</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">NW Mojave / Tehachapi foothills · Kitanemuk · "Birthing Cave" · Southern Sierra Style</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Described as <b>"one of the most elaborate and well-preserved pictograph panels in southern California"</b> (Knight 1993). Located in a rock shelter overlooking a secondary site (KER-1193).<br><br>
The main panel features a large, fantastic <b>polychrome abstract image in red, white, black, orange, and blue</b>. Smaller associated pictographs include a distinctive red <b>"teddy bear" motif</b> (paralleled at CA-KER-508 in the Tehachapi Valley).<br><br>
Assigned to the <b>Southern Sierra Style</b>, most likely associated with <b>Kitanemuk</b> habitation. Mortar-like depressions and <b>cupule rock art</b> also present. Ethnographic sources suggest the cave may have been associated with <b>women's birthing or puberty ceremonies</b> — Kitanemuk, Kawaiisu, and Tataviam women are documented using such sites.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Knight 1993; Sutton 1982, 1988; SCVHistory.com</div>
`, {maxWidth:440});

// --- Ritter Ranch Pictograph Site (CA-LAN-947) ---
L.marker([34.5600, -118.2200], {icon:mojPictoIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#F44336">🎨 Ritter Ranch Pictograph Site (CA-LAN-947)</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Anaverde Valley · San Andreas Fault Rift Zone · Springs present · Red pictographs</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Located west of Palmdale along the <b>San Andreas Fault Rift Zone</b> in the Anaverde Valley. Springs present at the site and in the surrounding area provided reliable water.<br><br>
Contains faded <b>red pictographs</b> on a vertical basalt outcrop face, including a <b>diamond net, zigzag lines, a large dot surrounded by nine additional dots and three lines</b>, and areas of smeared red pigment (some over 1 meter in size).<br><br>
Representative of the <b>Southern California Rectilinear Abstract Painted Style</b>. Located in territory shared by <b>Kitanemuk and Tataviam</b> peoples. Nearby <b>cupule loci</b> have also been recorded.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 1982, 1988; Knight 1993; Knight, Milburn & Tejada 2008</div>
`, {maxWidth:420});

// --- Big Rock Creek (CA-LAN-447/723) ---
L.marker([34.4400, -117.8700], {icon:mojRockIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#FF7043">🪨 Big Rock Creek Rock Art (CA-LAN-447/723)</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">SW Antelope Valley · San Gabriel Mountains foothills · Petroglyphs & pictographs</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Rock art site in the foothills where the San Gabriel Mountains meet the southwestern Antelope Valley. Contains both <b>petroglyph and pictograph</b> elements. Cupules are also present in association with the painted art.<br><br>
Located in territory controlled by <b>Serrano-Vanyume</b> peoples who occupied the desert foothills of the eastern San Gabriel Mountains, including Sheep, Deadman, Big Rock, and Littlerock Canyons.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Knight, Milburn & Tejada 2008; Earle 1990</div>
`, {maxWidth:380});

// --- Temet Osraniek / Shea's Castle Site (CA-LAN-721) ---
L.marker([34.5100, -118.0700], {icon:mojPictoIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#F44336">🎨 Temet Osraniek / Shea's Castle (CA-LAN-721)</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Western Antelope Valley · Pictographs · Kitanemuk or Tataviam</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Pictograph site in the western Antelope Valley. The site contains painted rock art and is situated in an area where <b>Kitanemuk and Tataviam</b> territories overlapped.<br><br>
Earle (2004) suggests inhabitants were probably from one or both of these culture groups. The site is named for Shea's Castle, a historic structure built nearby.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Knight 1993; Earle 2004</div>
`, {maxWidth:360});

// --- Anaverde Hills Cupule Sites (CA-LAN-1767/1768/3343) ---
L.marker([34.5500, -118.1800], {icon:mojCupuleIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#FFAB91">⊙ Anaverde Hills Cupule Complex (CA-LAN-1767/1768/3343)</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">San Andreas Fault Rift Zone · Cupule boulders · Age uncertain</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Three pitted <b>cupule sites</b> along the northern edge of the San Andreas Fault Rift Zone in the Anaverde Hills. Cupules — shallow hemispherical pits ground into rock surfaces — are <b>ubiquitous throughout the western Mojave</b> and represent one of the oldest rock art traditions in southern California.<br><br>
Found predominantly on <b>schist and metamorphic boulders</b> along the southern flanks of the Antelope Valley. Cultural associations remain unclear — cupule-making may be an <b>older tradition</b> that was partly or completely replaced by painted rock art over time.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Knight, Milburn & Tejada 2008; Whitley 1996</div>
`, {maxWidth:400});

// --- LAN-540 Cupule/Petroglyph Boulder (Sierra Pelona) ---
L.marker([34.5900, -118.4000], {icon:mojCupuleIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#FFAB91">⊙ Sierra Pelona Cupule Complex (CA-LAN-540)</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Sierra Pelona Ridge · Largest cupule concentration in south-central California</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Reportedly contains the <b>largest concentration of cupule pits in south-central California</b>. Uniquely, the site also encompasses a few <b>pecked petroglyphs</b> — including a hollow circle, a zigzag, a "rake" terminating in cupules, an inverted "U" with a bisecting line, and parallel lines.<br><br>
This association of cupules with petroglyphs challenges the traditional distinction between these rock art traditions, suggesting they may have been <b>produced contemporaneously</b> by the same peoples.<br><br>
Located in <b>Tataviam territory</b> along the southern foothills of the Sierra Pelona Ridge.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Whitley 1996, 2003; Knight, Milburn & Tejada 2008</div>
`, {maxWidth:420});

// --- Grandview Canyon Rock Art (San Gabriel Mountains) ---
L.marker([34.3700, -117.9500], {icon:mojRockIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#FF7043">🪨 Grandview Canyon Rock Art</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">San Gabriel Mountains · Cupule/petroglyph boulders · Serrano-Vanyume</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Rock art sites in Grandview Canyon (FS No. 05-01-54-0236 and 0237) at the interface between the San Gabriel Mountains and the Antelope Valley.<br><br>
Contains both <b>cupule pits and pecked linear petroglyphs</b>, including a motif where cupules are integrated with pecked geometric designs. Demonstrates the overlap between cupule and petroglyph traditions in the western Mojave.<br><br>
Located in <b>Serrano-Vanyume</b> territory.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Knight, Milburn & Tejada 2008; Robinson 1987</div>
`, {maxWidth:380});

// --- Piute Butte Pictographs & "Yoni" Petroglyph (CA-LAN-1731/2096) ---
// Already in file 43 as village site, adding rock art note
L.marker([34.7600, -117.9200], {icon:mojPictoIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#F44336">🎨 Piute Butte Rock Art Complex (CA-LAN-1731 & 2096)</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Antelope Valley · Pictographs & vulva-form petroglyphs · Currently closed to public</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
<b>Multiple rock art traditions</b> converge at Piute Butte. The site contains <b>pictograph panels</b> — stylistically complex and not easily classified into existing regional styles.<br><br>
Nearby, a <b>"vulva"-form petroglyph</b> (LAN-2096) is recorded. Former curator of the Antelope Valley Indian Museum, <b>Edra Moore</b>, reports other vulva-like petroglyph images in the general area — possibly associated with <b>fertility or puberty ceremonies</b>.<br><br>
<b>Currently closed to public access</b> pending an assessment of significance by the California Department of Parks and Recreation.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Knight, Milburn & Tejada 2008; CA Dept. of Parks & Recreation; Edra Moore personal comm. 2008</div>
`, {maxWidth:420});

// --- Wolf's Rock Pile (CA-LAN-2368) ---
L.marker([34.6000, -117.9800], {icon:mojRockIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#FF7043">🪨 Wolf's Rock Pile (CA-LAN-2368)</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Antelope Valley · Cupules with pecked petroglyphs</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
A cupule concentration with associated <b>pecked petroglyphs</b> in the Antelope Valley. One of the western Mojave sites where cupule rock art and petroglyph traditions are found together, suggesting <b>contemporaneous production</b> or long-term reuse of sacred sites.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Knight, Milburn & Tejada 2008</div>
`, {maxWidth:360});

// ==========================================================================
//  VI. AFTON CANYON — "Grand Canyon of the Mojave"
//  Mojave River corridor · Desert Archaic through Late Prehistoric
// ==========================================================================

L.marker([35.0427, -116.3800], {icon:mojRockIcon}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#FF7043">🪨 Afton Canyon Rock Art</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Mojave River corridor · "Grand Canyon of the Mojave" · BLM · Petroglyphs on canyon walls</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Petroglyphs within <b>Afton Canyon</b> — the dramatic gorge where the Mojave River surfaces and cuts through volcanic rock before reaching Soda Lake. Known as the <b>"Grand Canyon of the Mojave"</b> for its 500-foot walls.<br><br>
The canyon was a critical <b>water corridor</b> — one of the few places where the Mojave River runs on the surface year-round. This made it a focal point for <b>thousands of years of human habitation</b>. Rock art here is part of a broader archaeological landscape including camps, milling stations, and trail markers along the ancient river route.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: BLM Afton Canyon ACEC; Bill Mann Vol. 1; Warren & Crabtree</div>
`, {maxWidth:400});

// ==========================================================================
//  VII. OVERVIEW — Rock Art Traditions of the Mojave Desert
//  Interpretive context marker
// ==========================================================================

L.marker([35.00, -116.50], {icon:L.divIcon({className:'', iconSize:[18,18], iconAnchor:[9,9],
  html:'<div style="width:18px;height:18px;background:linear-gradient(135deg,#FF7043,#E91E63);border:2px solid #fff;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:11px;box-shadow:0 0 8px #FF704488;">🎨</div>'
})}).addTo(L_groups.mojaveRockArt).bindPopup(`
<h4 style="color:#FF7043">🎨 Rock Art Traditions of the Mojave Desert</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Overview — Multiple traditions spanning 10,000+ years</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
The Mojave Desert preserves one of the <b>richest and most diverse rock art landscapes in North America</b>, encompassing multiple traditions:<br><br>

<b style="color:#FFAB91">⊙ Cupules (Pitted Boulders)</b><br>
The <b>oldest tradition</b> — shallow hemispherical pits ground into rock. Ubiquitous along the southern Antelope Valley on schist and metamorphic boulders. Age and cultural associations debated; may predate other rock art forms by millennia. Possibly associated with <b>fertility or increase rites</b>.<br><br>

<b style="color:#FF7043">🪨 Petroglyphs (Pecked/Carved)</b><br>
The most common form. Dark <b>desert varnish</b> on lighter rock provides the perfect medium. The <b>Coso Range</b> alone contains 100,000+ petroglyphs — the largest concentration in the Western Hemisphere. Bighorn sheep dominate (~50% of Coso images). Linked to <b>hunting magic, shamanic vision quests, and increase rites</b>.<br><br>

<b style="color:#F44336">🎨 Pictographs (Painted)</b><br>
Less common but often more elaborate. Styles include the <b>Southern Sierra Style</b> (polychrome, Kitanemuk), <b>Southern California Rectilinear Abstract</b>, and cave paintings associated with <b>puberty ceremonies</b>. Found in rock shelters, overhangs, and caves where paint is protected from weathering.<br><br>

<b style="color:#CE93D8">◆ Geoglyphs & Intaglios</b><br>
Large-scale ground drawings visible from above. The <b>Blythe Intaglios</b> and other Colorado River corridor geoglyphs are part of Yuman <b>Creation Mythology</b> — depicting gods, animals, and spirit beings.<br><br>

<b>Key scholars:</b> David Whitley, Albert Knight, Mark Q. Sutton, Alan Garfinkel, Campbell Grant
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Whitley 1994, 2000; Sutton 1982; Knight 1993; Knight, Milburn & Tejada 2008; Garfinkel</div>
`, {maxWidth:460});
