// ============================================================
// HULKUHKU (EMIGDIANO CHUMASH) LANDSCAPE ARCHAEOLOGY
// Wind Wolves Preserve — San Emigdio Hills, Kern County
// Based on Robinson 2010 "Land Use, Land Ideology" (American Antiquity)
// + Whitley 1982 Coso Reinterpretation (J. of CA & Great Basin Anthro)
//
// This file adds:
//   1. Hulkuhku ethnohistoric villages (Matapuan, Tashlipun, Tecuya)
//   2. Wind Wolves Preserve K-locales with rock art (7 intensively mapped)
//   3. Additional pictograph sites along internal corridors
//   4. Hulkuhku territorial polygon
//   5. Seasonal movement corridors (Santiago, San Emigdio, Grapevine canyons)
//   6. Updated Coso entry with both interpretations (Whitley 1982)
//
// Sources: Robinson 2010; Robinson 2006, 2007; Whitley 1982, 2000a;
//          Grasse 2003; Jackson 1984, 1991; Heizer & Baumhoff 1962;
//          Grant 1968; Pendergraft 2007; Bury et al. 2003, 2004;
//          Robinson & Sturt 2008; Merriam 1967; Johnson 1978, 2005
// ============================================================

// ========== COLORS & ICONS ==========
const HULK_VILLAGE = '#AB47BC';   // Purple — ethnohistoric villages
const HULK_KLOCALE = '#FF7043';   // Burnt orange — K-locales with rock art
const HULK_PICTO = '#E65100';     // Deep orange — pictograph-only sites
const HULK_CORRIDOR = '#26C6DA';  // Teal — movement corridors
const HULK_TERR = '#CE93D8';      // Light purple — territory fill

const hulkVillageIcon = mkIcon(HULK_VILLAGE, 11);
const hulkKIcon = L.divIcon({className:'', iconSize:[13,13], iconAnchor:[6.5,6.5],
  html:'<div style="width:13px;height:13px;background:#FF7043;border:2.5px solid #BF360C;border-radius:50%;box-shadow:0 0 6px #FF704366;"></div>'});
const hulkPictoIcon = mkIcon(HULK_PICTO, 9);
const hulkCorridorSmall = mkIcon(HULK_CORRIDOR, 7);

// ================================================================
// 1. HULKUHKU TERRITORY POLYGON
// ================================================================
L.polygon([
  [35.05, -119.35], [35.02, -119.20], [34.98, -119.05],
  [34.93, -118.95], [34.88, -118.90], [34.82, -118.95],
  [34.78, -119.05], [34.80, -119.20], [34.83, -119.30],
  [34.88, -119.40], [34.95, -119.42], [35.00, -119.40]
], {
  color: HULK_TERR, weight:2, opacity:0.6,
  fillColor: HULK_TERR, fillOpacity:0.08,
  dashArray:'6,4'
}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#CE93D8">Hulkuhku / Emigdiano Chumash Territory</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">San Emigdio Hills · Interior Chumash · Wind Wolves Preserve (100,000 acres)</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
The interior Chumash group known linguistically as the <b>Emigdiano</b> were documented as being called 
<b><i>hulkuhku</i></b> or <i>Hool'-koo-koo</i> by Merriam (1967). The term <i>kuhku</i> (or <i>koo-koo</i>) means 
"people" in some Chumash dialects. <i>Hulkuhku</i> is probably an external designation meaning roughly 
"over there people" (Applegate 2008). Robinson (2010) prefers this Indigenous term over the Spanish-derived "Emigdiano."
<br><br>
Their territory occupied the <b>San Emigdio Hills</b> rising from the southwestern San Joaquin Valley — a unique geological 
interface at the convergence of the Transverse Ranges, Coast Ranges, Sierra Mountains, and Western Mojave. 
This was borderland between Chumash and Valley Yokuts territories.
<br><br>
<b>Land-use pattern:</b> Robinson's survey of 106 sites found 70 (66%) had bedrock mortars (BRMs) for acorn processing, 
while only 16 (15%) had surface lithics or midden — showing the landscape was heavily oriented toward 
<b>acorn preparation as the central subsistence activity</b>.
<br><br>
The Hulkuhku were linked to southerly Chumash communities through marriages, alliances, and trade, 
and maintained complex relationships with neighboring Valley Yokuts groups to the north around 
Buena Vista and Kern Lakes.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010; Merriam 1967; Johnson 2005; Bury et al. 2003</div>
`, {maxWidth:480});


// ================================================================
// 2. ETHNOHISTORIC VILLAGES — Canyon Mouth Wintering Sites
// ================================================================

L.marker([34.965, -119.295], {icon:hulkVillageIcon}).addTo(L_groups.chumashVillages).bindPopup(`
<h4 style="color:#AB47BC">Matapuan — Hulkuhku Village</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Ethnohistoric village · Canyon mouth · Western Wind Wolves Preserve</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
One of three ethnohistorically documented <b>Hulkuhku winter villages</b>, located at a major canyon mouth 
on the northern edge of the San Emigdio Hills. Canyon mouth villages served as <b>primary residential bases</b> — 
wintering locations where the population assembled in the largest numbers, lived in houses, and engaged 
in the widest variety of activities.
<br><br>
<b>Key finding from Robinson (2010):</b> The closest pictograph site is almost <b>0.5 km away</b> from Matapuan. 
Despite the presence of suitable rock formations at the canyon mouth, no pictographs were placed here. 
This is significant — it demonstrates that rock art was <b>not positioned at villages</b> but rather at 
backcountry acorn-processing sites where multiple families aggregated seasonally.
<br><br>
High BRM concentrations near the village suggest it functioned as a <b>political village center</b> 
rather than an acorn-gathering site — the BRMs here were for daily domestic use, not large-scale seasonal processing.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010; Johnson 1978, 2005; Merriam 1967</div>
`, {maxWidth:460});

L.marker([34.980, -119.240], {icon:hulkVillageIcon}).addTo(L_groups.chumashVillages).bindPopup(`
<h4 style="color:#AB47BC">Tashlipun — Hulkuhku Village</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Ethnohistoric village · Canyon mouth · Near San Emigdio Canyon · Wind Wolves Preserve</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
The north-central <b>Hulkuhku winter village</b>, situated near the mouth of San Emigdio Canyon. 
Like Matapuan and Tecuya, it was a <b>primary residential base</b> at a canyon mouth where the hills 
open onto the San Joaquin Valley floor — the boundary with Valley Yokuts territory.
<br><br>
Robinson's GIS cost-surface analysis showed that the <b>path from Tashlipun to the Chimney rock art site</b> 
passes through or near <b>nine other archaeological sites</b>, including the extensive K-locale at Pond 
(with up to 132 BRMs). This demonstrates pictographs were tightly embedded within the network 
of pathways connecting villages to backcountry resource sites.
<br><br>
Canyon mouth villages like Tashlipun effectively formed the <b>boundary between Chumash and Valley Yokuts</b> territories. 
Yet the absence of pictographs at these boundary locations suggests rock art was <b>not functioning as 
territorial markers directed at the Yokuts</b>.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010; Johnson 1978, 2005</div>
`, {maxWidth:460});

L.marker([34.960, -119.135], {icon:hulkVillageIcon}).addTo(L_groups.chumashVillages).bindPopup(`
<h4 style="color:#AB47BC">Tecuya — Hulkuhku Village</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Ethnohistoric village · Canyon mouth · Eastern Wind Wolves Preserve · Grapevine Canyon</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
The easternmost of the three documented <b>Hulkuhku winter villages</b>, located near Grapevine Canyon — 
one of the three major conduits through the landscape. Tecuya had especially <b>high BRM concentrations</b> 
nearby and appears to have been a <b>political village center</b>.
<br><br>
The Tecuya pictograph site is located on a pathway immediately south of the village, toward two K-locales. 
Robinson notes this is one of the few pictograph sites near a village location, but it is positioned 
<b>away from the village itself</b>, on the route leading into the backcountry.
<br><br>
Ethnohistoric sources indicate definable territories between Chumash and Yokuts, 
with the risk of confrontation when boundaries were crossed. Tecuya sat at this critical interface, 
yet the rock art strategy focused inward, on the seasonally occupied interior landscape.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010; Johnson 2005; Gayton 1936</div>
`, {maxWidth:460});


// ================================================================
// 3. K-LOCALES WITH ROCK ART — The Economic Heart of the Landscape
//    (7 sites intensively mapped by Robinson with viewshed analysis)
// ================================================================

// --- PLEITO (CA-KER-77) — The Crown Jewel ---
// Note: Updates the existing "Mount Piños / San Emigdio" entry in 18-southcentral-rockart.js
// This adds the Robinson 2010 landscape/taskscape data
L.marker([34.870, -119.130], {icon:hulkKIcon}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#FF7043">Pleito (CA-KER-77) — K-Locale & Polychrome Masterwork</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Wind Wolves Preserve · 61 BRMs · 100+ cupules · 6 pictograph locales · Late Period–Historical</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
The most spectacular site on the Wind Wolves Preserve and home to some of the <b>most elaborate polychrome 
rock art paintings found anywhere in North America</b>. Bisected by a perennial creek in rich oak woodland.
<br><br>
<b>Site components:</b> Two well-developed middens, 9 BRM stations with 61 individual BRMs, over 100 cupules, 
and 6 pictograph locales featuring complex polychrome compositions including rare <b>blue and green pigments</b> 
from locally sourced copper carbonates (azurite/malachite).
<br><br>
<b>Robinson's viewshed analysis (2010):</b> 3 BRM stations with <b>37 BRMs</b>, both middens, and the vast majority 
of the site are <b>intervisible with the pictographs and shelter apertures</b>. Grasse's (2003) excavations 
identified deep midden deposits of Late Period and Historical date immediately adjacent and in view of the paintings.
<br><br>
<b>The paths-to-water finding:</b> Robinson's detailed mapping shows that movement from BRM stations to the creek 
(essential for acorn leeching) required walking <b>directly past the pictograph shelters</b>. There was no way 
to perform the daily cycle of acorn processing — pounding, carrying meal to water, returning — without 
repeatedly passing the painted surfaces. The art was embedded in the very movement patterns of daily labor.
<br><br>
At 5 of 7 intensively mapped sites, pictographs were painted on the <b>same host-rock as the largest BRM station</b>. 
At Pleito, this means the most elaborate paintings in the region were literally at the spot where the most 
acorn pounding occurred — a visceral integration of subsistence and symbolic practice.
<br><br>
<b>Thomas's (2003) vegetation survey</b> found the riparian and oak zones were rich in economically important 
plant species, capable of producing practical and ceremonial goods. The site was not just about acorns — 
it was a complete resource hub.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010; Grasse 2003, 2005; Bury et al. 2003; Thomas 2003; Reeves, Bury & Robinson 2009</div>
`, {maxWidth:500});

// --- POND — Largest BRM Concentration ---
L.marker([34.910, -119.185], {icon:hulkKIcon}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#FF7043">Pond — Largest K-Locale on the Preserve</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Wind Wolves Preserve · Up to 132 BRMs · 16 stations · 5 pictograph locales · ~300 × 270 m</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
The <b>largest site on the Wind Wolves Preserve</b>, interspersed within impressive linear sandstone formations 
overlooking a wide bowl-like valley containing a seasonal sag-pond. Covers approximately 300 × 270 meters.
<br><br>
<b>Site components:</b> 5 pictograph locales (all red linear and curvilinear), extensive midden, 
16 BRM stations with up to <b>132 individual BRMs</b>, and dozens of cupules.
<br><br>
<b>Robinson's viewshed analysis:</b> A total of <b>15 stations with 128 BRMs</b> and the majority of the midden 
are intervisible with the pictographs. The detailed core map shows the midden area firmly within the 
viewshed — women pounding acorns at any BRM station within the visible zone (distances of 4-16 meters) 
would have been working under direct visual presence of the paintings.
<br><br>
<b>Women's work spaces:</b> California ethnography overwhelmingly associates BRM stations with women's labor 
(Jackson 1991). Individual women may have returned to the same boulder throughout their lives to pound 
acorn and engage in social activity. At Pond, the scale of BRM concentration suggests 
<b>multiple family groups</b> congregating for the most important sustenance activity of the yearly round.
<br><br>
Three nearby pictograph sites — <b>Letter Cave, Lizard Cave, and Echo</b> — are only 1.5–3 km away, 
placing Pond at the heart of the densest cluster of rock art and archaeological sites on the Preserve.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010; Jackson 1991</div>
`, {maxWidth:500});

// --- SANTIAGO ---
L.marker([34.905, -119.210], {icon:hulkKIcon}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#FF7043">Santiago — Monolith K-Locale</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Wind Wolves Preserve · 49 BRMs · 16 cupules · 3 pictograph panels · Perennial creek</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Located on an elevated terrace between a perennial creek and oak woodland. The core of the site 
is adjacent to a spring: a natural <b>"monolith" peppered with cupules</b>, a BRM station, 
and three pictograph panels (all in faded red curvilinear) overlooking the spring and Santiago creek.
<br><br>
<b>Site components:</b> 16 cupules, 13 BRM stations with 49 BRMs. Sprague & Grasse (1999) report 
large quantities of lithic flakes and debitage surrounding the monolith.
<br><br>
<b>Viewshed analysis:</b> <b>7 stations with 30 BRMs</b> are intervisible with the pictographs. 
The monolith is visually prominent from the boundaries of the site environs — 
as people approached Santiago up canyon, it could be seen from the draw.
<br><br>
At Santiago, the pictographs are painted on the <b>same host-rock as the largest BRM station</b> — 
the monolith itself. This means acorn pounding occurred literally on top of or immediately 
adjacent to the paintings, the most intimate possible integration of subsistence and art.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010; Sprague & Grasse 1999</div>
`, {maxWidth:480});

// --- THREE SPRINGS (enhanced from existing entry in 21-chumash-rockart.js) ---
L.marker([34.920, -119.155], {icon:hulkKIcon}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#FF7043">Three Springs — Wetland K-Locale</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Wind Wolves Preserve · 36 BRMs · Polychrome pictographs · 3 springs + flowing stream</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Located next to a wetland area with three springs and a flowing stream. On the terrace: 
5 BRM stations with 36 BRMs and well-developed midden. Two pictograph locales — one on the largest 
BRM station, the other a <b>main cave containing complex polychrome compositions</b>.
<br><br>
<b>Viewshed analysis:</b> Almost all the wetlands, <b>3 stations with 27 BRMs</b>, and a portion of the midden 
are within the visual envelope of the pictograph shelters.
<br><br>
<b>Rare blue pigment:</b> Reeves, Bury & Robinson (2009) used portable X-ray fluorescence to analyze pigments 
at this and other Hulkuhku sites. Their experiments demonstrated that locally available copper carbonate 
minerals (azurite/malachite) from a quarry northeast of San Emigdio Mountain could produce the blue 
and green pigments — proving the polychrome tradition <b>predates European contact</b>.
<br><br>
At Three Springs, the pictographs are painted on the <b>same host-rock as the largest BRM station</b> — 
another example of art and acorn processing sharing the same physical feature.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010; Reeves, Bury & Robinson 2009</div>
`, {maxWidth:480});

// --- CHIMNEY SPRINGS ---
L.marker([34.915, -119.195], {icon:hulkKIcon}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#FF7043">Chimney Springs — Monolith K-Locale</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Wind Wolves Preserve · 18 BRMs · Red curvilinear pictographs · Grassy terrace with oaks</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
A grassy terrace surrounded by oaks, above a creek and near a spring. The locale contains 
two pictograph panels in red curvilinear on a <b>central sandstone monolith</b>, three cupules, 
and 7 BRM stations with 18 BRMs.
<br><br>
<b>Viewshed analysis:</b> <b>6 stations with 17 BRMs</b> and the entire central area of the site 
are within the cumulative viewshed of both panels. The monolith is visually prominent 
from the boundaries of the site — one of six sites where the rock art feature is the 
most conspicuous natural element.
<br><br>
<b>Evidence of diverse activities:</b> Asphaltum-covered rocks suggest basketry-making occurred on site 
(bunchgrasses and reeds were raw material for basketry). Cooking activity also documented. 
This was not just an acorn-processing station — it was a complete living space where 
multiple family groups worked, socialized, and dwelt seasonally.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010</div>
`, {maxWidth:480});

// --- LOS LOBOS ---
L.marker([34.900, -119.200], {icon:hulkKIcon}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#FF7043">Los Lobos — Ridge-Slope K-Locale</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Wind Wolves Preserve · 26 BRMs · 29+ cupules · Polychrome pictographs · Late Period point</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Located well into the oak zone, on a mid-ridge slope near a spring, before a steep drop to a creek. 
11 BRM stations with 26 BRMs and at least 29 cupules dispersed across level sandstone-shelf terraces.
<br><br>
<b>Surface midden:</b> Composed of burnt bone and imported <b>Temblor chert</b> with a Late Period projectile point — 
evidence of both food processing and long-distance lithic trade. On the slopes immediately below 
the midden area, sandstone formations contain two shelters with <b>polychrome pictographs</b>.
<br><br>
<b>Viewshed analysis:</b> <b>4 stations with 5 BRMs</b> are intervisible with the pictograph shelters. 
Robinson notes that at Los Lobos, unlike the other sites, the area between BRMs and the nearest 
water source was <b>not easily within the visual envelope</b> of the paintings — 
making it the one site where the path-to-water finding is less pronounced.
<br><br>
<b>Embodied experience:</b> Robinson evocatively describes how the pounding of acorns in the BRM at 
Station 3 at Los Lobos "would have thumped audibly in Shelter A beneath" — 
the rhythmic sound of women's labor reverberating through the painted shelter below.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010</div>
`, {maxWidth:480});

// --- PINWHEEL ---
L.marker([34.875, -119.110], {icon:hulkKIcon}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#FF7043">Pinwheel Cave — Ridge-Crest K-Locale</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Wind Wolves Preserve · 19 BRMs · 12+ cupules · Red pictographs · Confirmed Late Period occupation</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Has the <b>greatest separation between BRMs and rock art</b> of all K-locales mapped. 
A BRM complex with 8 stations, 19 BRMs, and at least 12 cupules lines a ridge-crest 
with expansive views northwest. Oak woodland lines the ridge top and surrounds Pinwheel Cave 
toward the south.
<br><br>
<b>Rock art:</b> A conglomerate rock formation contains two pictograph locales with both fragmentary 
and well-preserved <b>red pictographs</b>. The Pinwheel motif is distinctive.
<br><br>
<b>Viewshed analysis:</b> <b>6 stations with 12 BRMs</b> are intervisible with both the outcrop and Shelter 1. 
Despite the greater separation, the Pinwheel outcrop <b>pokes above its oaks, growing larger 
as you approach</b> from the spring and BRM stations.
<br><br>
<b>Excavations:</b> Robinson & Sturt (2008) confirmed <b>Late Period and Historical occupation</b> 
within Pinwheel Cave from midden directly under the pictographs — demonstrating that 
people were actively living and working at the site during the period when the art 
was being created and viewed.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010; Robinson & Sturt 2008</div>
`, {maxWidth:480});


// ================================================================
// 4. PICTOGRAPH-ONLY SITES (on corridors, without major BRM concentrations)
// ================================================================

L.marker([34.908, -119.172], {icon:hulkPictoIcon}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#E65100">Letter Cave — Corridor Pictograph Site</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Wind Wolves Preserve · 1.5–3 km from Pond · Central Pleitito drainage</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
One of three pictograph sites (with Lizard Cave and Echo) situated in the heart of the 
<b>highest density of archaeological sites on the Preserve</b>, directly on or around the corner 
from the major internal corridor of the central Pleitito drainage. Although it lacks a major 
BRM concentration, it is only <b>1.5–3 km from Pond</b> — the largest BRM site on the Preserve.
<br><br>
Robinson argues these corridor sites demonstrate that pictographs were encountered 
<b>during normal movement between resource sites</b>, not as isolated destinations requiring 
special pilgrimages.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010</div>
`, {maxWidth:420});

L.marker([34.912, -119.168], {icon:hulkPictoIcon}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#E65100">Lizard Cave — Corridor Pictograph Site</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Wind Wolves Preserve · Near Pond K-locale · Internal pathway</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Named for its lizard motif, this site sits along the internal corridor near Pond, within the densest 
cluster of sites on the Preserve. Part of the triad with Letter Cave and Echo that demonstrates 
pictographs were <b>positioned along habitual movement paths</b> through the landscape.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010</div>
`, {maxWidth:400});

L.marker([34.916, -119.158], {icon:hulkPictoIcon}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#E65100">Echo — Corridor Pictograph Site</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Wind Wolves Preserve · ~1 km from 30-BRM K-locale · On internal corridor</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Little more than a kilometer downstream from two sites that together form a K-locale 
with <b>30 BRMs</b>. Part of the Letter–Lizard–Echo triad in the heart of the Preserve's 
densest archaeological zone.
<br><br>
Robinson's cost-surface analyses show that the path from Tashlipun village to Chimney rock art site 
passes through or near <b>nine sites including Echo</b> — demonstrating how deeply 
the pictograph sites are embedded within the matrix of daily movement.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010</div>
`, {maxWidth:420});

L.marker([34.895, -119.220], {icon:hulkPictoIcon}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#E65100">San Emigdio — Single-Element Isolate</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Wind Wolves Preserve · San Emigdio Canyon conduit · Conspicuous boulder</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
A single-element pictograph site that appears to be an <b>isolate on the major conduit of San Emigdio Canyon</b>, 
painted on a conspicuous boulder. San Emigdio Canyon was one of three major corridors linking 
Hulkuhku villages to southern Chumash communities and the coast.
<br><br>
This is one of only <b>2 of 17 pictograph sites</b> located on the major external travel routes — 
evidence that the art primarily communicated to the <b>internal community</b> 
rather than serving as territorial markers for outsiders.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010</div>
`, {maxWidth:420});

// --- BLACK-LINEAR OUTLIERS ---
L.marker([34.860, -119.150], {icon:hulkPictoIcon}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#E65100">Lost Canyon — Black-Linear Outlier</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Wind Wolves Preserve · Outside primary use area · Exclusively black-linear pictographs</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
One of two "curiosities" on the Preserve — sites with exclusively <b>black-linear pictographs</b> 
located <b>outside the primary areas of usage</b>. Robinson suggests these may be associated 
with different land-use practices and possibly different time periods than the red/polychrome 
sites at K-locales.
<br><br>
These outlier sites are the exception that proves the rule: while 15 of 17 pictograph sites 
are prominently positioned within the experienced landscape, these two black-linear sites 
sit outside the normal orbit of habitation.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010</div>
`, {maxWidth:420});

L.marker([34.855, -119.140], {icon:hulkPictoIcon}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#E65100">Lonely Pine — Black-Linear Outlier</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Wind Wolves Preserve · Outside primary use area · Exclusively black-linear pictographs</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
The second black-linear outlier site. Together with Lost Canyon, these exclusively 
black-linear pictograph sites may represent <b>an earlier or different tradition</b> 
from the red curvilinear and polychrome art at the K-locales.
<br><br>
Their position outside the normal land-use pattern and their distinctive black-only pigment 
raise questions about chronological change in Hulkuhku rock art practices 
that only absolute dating can resolve.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010</div>
`, {maxWidth:420});


// ================================================================
// 5. SEASONAL MOVEMENT CORRIDORS
// ================================================================

// Santiago Canyon corridor
L.polyline([
  [34.980, -119.240], [34.960, -119.230], [34.940, -119.220],
  [34.920, -119.210], [34.905, -119.210]
], {color:HULK_CORRIDOR, weight:2.5, opacity:0.5, dashArray:'8,6'
}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#26C6DA">Santiago Canyon — Internal Corridor</h4>
<div style="font-size:12px;color:#ccc;line-height:1.5">
One of three major internal corridors through Hulkuhku territory. 
Cost-surface analysis showed this canyon was part of the <b>southwest approach from Quatal Canyon</b> — 
connecting Hulkuhku villages to southerly Chumash communities.
<br><br>
The Santiago K-locale sits along this corridor, with its monolith visible from the draw as people approached.
Modern Preserve roads follow this traditional corridor.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010</div>
`, {maxWidth:380});

// San Emigdio Canyon corridor
L.polyline([
  [34.980, -119.240], [34.955, -119.225], [34.930, -119.210],
  [34.895, -119.220], [34.870, -119.230]
], {color:HULK_CORRIDOR, weight:2.5, opacity:0.5, dashArray:'8,6'
}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#26C6DA">San Emigdio Canyon — Major Conduit</h4>
<div style="font-size:12px;color:#ccc;line-height:1.5">
The central canyon providing a major conduit between village sites and the <b>southern approach from Lockwood Valley</b>. 
The single-element San Emigdio pictograph site is on a conspicuous boulder along this route.
<br><br>
Robinson's nine hypothetical primary routes from the south all converge into three major canyons: 
Santiago, San Emigdio, and Grapevine. These canyons were the arteries connecting 
inland Chumash to the coast.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010; Horne 1981; Johnson 1978</div>
`, {maxWidth:380});

// Grapevine Canyon corridor
L.polyline([
  [34.960, -119.135], [34.940, -119.120], [34.920, -119.100],
  [34.900, -119.090], [34.875, -119.110]
], {color:HULK_CORRIDOR, weight:2.5, opacity:0.5, dashArray:'8,6'
}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#26C6DA">Grapevine Canyon — Southeast Approach</h4>
<div style="font-size:12px;color:#ccc;line-height:1.5">
The southeastern corridor, approaching Hulkuhku territory from the direction of 
the Tehachapi Mountains and the interior. Leads to Tecuya village and 
the Pinwheel Cave K-locale.
<br><br>
Ethnohistoric and ethnographic literature confirms these three canyons — Santiago, San Emigdio, 
and Grapevine — as traditional route-ways into and through the landscape.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010; Johnson & Earle 1990</div>
`, {maxWidth:380});


// ================================================================
// 6. THE INTERPRETIVE DEBATE: Robinson's Key Arguments
//    (Added as an interpretive marker at the center of the territory)
// ================================================================

L.marker([34.920, -119.180], {icon: L.divIcon({className:'', iconSize:[16,16], iconAnchor:[8,8],
  html:'<div style="width:16px;height:16px;background:#FF7043;border:3px solid #BF360C;border-radius:3px;transform:rotate(45deg);box-shadow:0 0 8px #FF704366;"></div>'})
}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#FF7043">📖 Robinson 2010: Land Use, Land Ideology</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">The Debate: Public vs. Private Rock Art · GIS Landscape & Taskscape Analysis</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
<b>The Central Question:</b> Were California rock art sites private shamanic retreats, 
or public media integrated into community life?
<br><br>
<b>Whitley's Position (1987, 2000):</b> Rock art sites were shamans' private vision quest locations, 
secluded from the public, where individuals sought supernatural power in isolation. 
The art recorded personal visionary experiences and was <b>not intended for public consumption</b>.
<br><br>
<b>Robinson's Counter-Evidence (2010):</b> Using GIS analysis at landscape and site scales, 
Robinson demonstrates the opposite for the Hulkuhku:
<br><br>
<b>1. Landscape scale:</b> Pictographs are NOT at villages (0 of 3), NOT primarily on external 
travel routes (only 2 of 17), but ARE at the most economically important backcountry 
K-locales (11 of 16) and along internal movement corridors (4 sites).
<br><br>
<b>2. Site scale (viewshed):</b> At all 7 mapped K-locales, pictographs are intervisible with 
BRM stations, middens, and paths to water. Across all sites: <b>16 BRM stations (256 individual BRMs) 
directly intervisible</b> with pictograph panels. At 5 of 7 sites, art is painted on 
the <b>same rock as the largest BRM station</b>.
<br><br>
<b>3. Who saw the art:</b> Ethnography associates BRM stations with women's labor. 
During autumn acorn harvest, virtually the <b>entire Hulkuhku population</b> — 
men, women, children — would have dwelt at these K-locales. 
The art occupied a prominent position within the social dynamics of the <b>whole community</b>.
<br><br>
<b>Robinson's conclusion:</b> Hulkuhku pictographs communicated within the internal dynamics of 
an inhabited landscape. Subsistence and symbolic practices were conjoined at the most 
important economic places — suggesting an ideology persistently linked to the 
<b>control of resources and labor</b>.
<br><br>
<b>Pendergraft (2007)</b> found parallel results in Great Basin contexts, noting that 
rock art was situated within daily economic and social routines, firmly within 
female work spaces — resonating with the Hulkuhku findings.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010; Whitley 1987, 2000a; Hyder 1989; Quinlan & Woody 2003; Jackson 1991; Pendergraft 2007</div>
`, {maxWidth:520});


// ================================================================
// 7. COSO RANGE — UPDATED WITH BOTH INTERPRETATIONS
//    Whitley 1982 + Heizer/Baumhoff 1962 + Grant 1968
//    (This is a standalone marker that supplements the existing Coso entry)
// ================================================================

L.marker([36.020, -117.700], {icon: L.divIcon({className:'', iconSize:[14,14], iconAnchor:[7,7],
  html:'<div style="width:14px;height:14px;background:#FF7043;border:2.5px solid #BF360C;border-radius:2px;transform:rotate(45deg);box-shadow:0 0 7px #FF704388;"></div>'})
}).addTo(L_groups.greatBasinRockArt).bindPopup(`
<h4 style="color:#FF7043">📖 Coso Petroglyphs — The Interpretation Debate</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Three Competing Theories · Heizer & Baumhoff 1962 · Grant 1968 · Whitley 1982, 1998</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
The Coso Range petroglyphs — the <b>largest concentration of rock art in the Western Hemisphere</b> — 
have been at the center of one of archaeology's most heated interpretive debates. 
Three major theories have been proposed:
<br><br>
<b>═══ 1. THE HUNTING MAGIC HYPOTHESIS (Heizer & Baumhoff 1962) ═══</b><br>
Robert Heizer and Martin Baumhoff proposed that the petroglyphs functioned as 
<b>sympathetic hunting magic</b> — ritually placed near game trails and ambush sites 
to ensure successful bighorn sheep hunts. The dominance of sheep imagery 
and the location of panels along animal migration routes supported this view. 
This was the foundational interpretation of Great Basin rock art for decades.
<br><br>
<b>═══ 2. THE SHEEP CULT HYPOTHESIS (Grant 1968, 1980) ═══</b><br>
Campbell Grant expanded Heizer & Baumhoff's work into the hypothesis of a 
<b>formalized sheep-hunting cult</b> — a specific religious institution with specialized 
ceremonial practices and practitioners, active ca. A.D. 300–1000. 
Grant argued the sheer volume and elaboration of sheep imagery at Coso indicated 
organized ritual activity beyond individual hunting magic.
<br><br>
<b>═══ 3. WHITLEY'S MYTHOLOGICAL REINTERPRETATION (1982) ═══</b><br>
David Whitley challenged both prior views using <b>Western Shoshone etiological mythology</b>. 
He analyzed origin myths from <b>12 regional Great Basin groups</b> (Shivwits, Moapa, Southern Paiute, 
Northern Shoshone, Northern Paiute from Bishop/Big Pine, Western Shoshone from 
Panamint Valley, Death Valley, Beatty, Ash Meadows, Big Smoky Valley, and Skull Valley).
<br><br>
In these myths, <b>Coyote</b> — already a proven hunter who had built a home, made tools, and hunted rabbits 
and ducks — must kill a <b>bighorn sheep</b> and use its <b>neckbone as a phallic implement</b> 
to overcome a "toothed vagina" motif and successfully mate, thereby populating the world. 
Even a young, small sheep sufficed — the act was symbolic, not about the hunt itself.
<br><br>
Whitley argues the bighorn sheep was therefore a <b>generalized symbol of male virility, 
sexual success, and hunting prowess</b> — not evidence of a formal hunting cult. 
The sheep represented masculine achievement across multiple domains of life.
<br><br>
<b>Supporting evidence:</b><br>
• <b>No ceremonialism:</b> Steward found no ceremonial remnants in the Coso region ethnographic record<br>
• <b>No sheep hunting:</b> Archaeological excavations at five Coso Range sites found little or no 
sheep hunting evidence in middens<br>
• <b>Geographic match:</b> Distribution of groups with this origin myth matches the distribution 
of Great Basin Representational Style rock art sites<br>
• <b>Persistence:</b> Bighorn sheep symbolism continued into the historic period — 
horse-and-rider petroglyphs, wheeled carts, and Coso Painted Style sites post-A.D. 1500
<br><br>
Whitley later (1998, 2000) shifted to a <b>neuropsychological/shamanic interpretation</b>, 
arguing the petroglyphs recorded shamanistic trance experiences. This view has been 
contested by Quinlan (2000), who argued for community-oriented interpretations 
more in line with Robinson's (2010) landscape approach.
<br><br>
<b>Methodological note:</b> Whitley (1982) advocated an "iconographical" analysis 
(after Panofsky) relating visual motifs to broader symbolic themes in culture, 
rather than a "particularistic" approach matching specific myths to specific sites.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Whitley 1982, 1998, 2000a; Heizer & Baumhoff 1962; Grant 1968, 1980; Quinlan 2000; Steward 1929; Lowie 1909, 1924</div>
`, {maxWidth:540});


// ================================================================
// 8. THE SEASONAL ROUND MODEL — Interpretive Overview
// ================================================================

L.marker([34.940, -119.190], {icon: L.divIcon({className:'', iconSize:[14,14], iconAnchor:[7,7],
  html:'<div style="width:14px;height:14px;background:#26C6DA;border:2.5px solid #00695C;border-radius:50%;box-shadow:0 0 7px #26C6DA66;"></div>'})
}).addTo(L_groups.chumashSacred).bindPopup(`
<h4 style="color:#26C6DA">🔄 The Hulkuhku Seasonal Round</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:4px">Jackson's Model (1984, 1991) applied to the Hulkuhku landscape by Robinson (2010)</div>
<div style="font-size:12px;color:#ccc;line-height:1.5">
Robinson reconstructs the Hulkuhku yearly cycle using Thomas Jackson's Sierra Nevada model:
<br><br>
<b>❄️ WINTER (Nov–Mar):</b> Population assembled at <b>canyon mouth villages</b> — Matapuan, Tashlipun, Tecuya. 
Largest numbers, most diverse activities. Lived in houses. <b>No pictographs at these locations.</b>
<br><br>
<b>🌱 SPRING–SUMMER (Apr–Jul):</b> Population <b>dispersed seasonally into backcountry</b> along major 
corridors and pathways — sometimes passing directly by pictograph sites along the way.
<br><br>
<b>🌰 LATE SUMMER–AUTUMN (Aug–Oct):</b> Groups dispersed into <b>oak groves</b> — perhaps individual groves 
owned by families or moieties with traditional rights-of-access. Extended family groups 
(reflecting households) gathered acorns and prepared first meals at <b>small BRM stations</b>. 
<b>Pictographs are NOT seen at these small stations.</b>
<br><br>
<b>🏕️ AUTUMN RE-AGGREGATION:</b> Groups traveled with acorn loads in carrying baskets to nearby 
<b>backcountry K-locales</b> — sites with reliable water supply and abundant BRM stations. 
More families arrived for the <b>most important sustenance activity of the yearly round</b>: 
mass preparation and storage of acorns. <b>THIS is where the greatest amount of rock art is found.</b>
<br><br>
<b>❄️ LATE AUTUMN RETURN:</b> Groups returned to main villages at canyon mouths, 
perhaps caching acorns at the K-locale but certainly carrying large amounts 
to sustain them through winter.
<br><br>
<b>The pattern:</b> Pictographs are not at sites where lone individuals occasionally visited, 
nor at places where the total population gathered all-together. They are at locales 
where <b>multiple families aggregated</b> — the K-locales that were the most important 
economic nodes in the entire territory.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Robinson 2010; Jackson 1984, 1991</div>
`, {maxWidth:500});


// ================================================================
// Console confirmation
// ================================================================
console.log('✅ 46-hulkuhku-landscape.js loaded — Hulkuhku villages, K-locales, corridors, interpretive debate');
