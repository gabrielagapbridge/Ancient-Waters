// ========== DIABLO RANGE CUPULE PETROGLYPHS ==========
// Source: E. Breck Parkman (1986) "Cupule Petroglyphs in the Diablo Range, California"
// Journal of California and Great Basin Anthropology, Vol. 8, No. 2, pp. 246-259
// Full text retrieved via Firecrawl from UC eScholarship Open Access:
// https://escholarship.org/uc/item/2gj7b7gz
//
// 76+ recorded cupule petroglyph sites across the Diablo Range
// Territories: Bay Miwok, Northern Valley Yokuts, Ohlone (and earlier Hokan peoples)
// The Diablo Range extends ~300 km from Mt. Diablo south to the Temblor Range
// Ethnographic interpretations: rain rocks, baby rocks, fertility, boundary markers, clan symbols

// Register layer groups
const diabloLayerNames = ['diabloCupules','diabloTerritory'];
diabloLayerNames.forEach(n => {
  if (!L_groups[n]) {
    L_groups[n] = L.layerGroup();
    L_groups[n].addTo(map);
  }
});

// ========== DIABLO RANGE TERRITORY OUTLINE ==========
const diabloRangePoly = [
  [37.882, -121.914],  // Mt. Diablo summit area
  [37.80, -121.75],    // East slopes toward Marsh Creek
  [37.65, -121.55],    // Toward Mt. Hamilton
  [37.45, -121.45],    // Southern Santa Clara County hills
  [37.20, -121.40],    // Henry Coe State Park
  [37.05, -121.35],    // Pacheco Pass area
  [36.85, -121.20],    // San Benito County
  [36.65, -121.00],    // Southern Diablo Range
  [36.45, -120.80],    // Approaching Temblor Range
  [36.35, -120.65],    // Southern extent
  [36.45, -120.50],    // Eastern edge
  [36.65, -120.65],    
  [36.85, -120.85],    
  [37.05, -121.05],    // Eastern foothills
  [37.20, -121.15],    
  [37.35, -121.25],    
  [37.55, -121.35],    
  [37.70, -121.50],    
  [37.80, -121.65],    
  [37.882, -121.914]   // Back to Mt. Diablo
];

L.polygon(diabloRangePoly, {
  color: '#8D6E63',
  weight: 2,
  dashArray: '6,4',
  fillColor: '#795548',
  fillOpacity: 0.06,
  interactive: true
}).addTo(L_groups.diabloTerritory)
.bindPopup(`<h4>Diablo Range — Cupule Petroglyph Province</h4>
<div style="font-size:11px;color:#ccc;margin:4px 0"><strong>Cultural affiliation:</strong> Bay Miwok · Northern Valley Yokuts · Ohlone (earlier Hokan peoples)</div>
<p style="font-size:12px;line-height:1.5">The Diablo Range extends ~300 km from Mt. Diablo to the Temblor Range, forming a portion of the central Coast Ranges. Characterized by Franciscan Formation rocks and oak woodland, grassland, and riparian communities. At least <strong>76 recorded cupule petroglyph sites</strong> occur here — one of the densest concentrations in all of California.</p>
<p style="font-size:12px;line-height:1.5">In early historic times, this area was the territory of <strong>Bay Miwok</strong> (Mt. Diablo area), <strong>Northern Valley Yokuts</strong>, and <strong>Ohlone</strong> peoples. The boundary between Yokuts and Ohlone may have been the crest of the Diablo Range (Kroeber 1925), though Milliken (1982) showed that Ohlone territory likely extended east beyond the crest to the western edge of the Central Valley — based on women's name patterns in mission records. Earlier <strong>Hokan-speaking groups</strong> are thought to have inhabited the range before successive waves of Penutian groups (Levy 1978).</p>
<p style="font-size:12px;line-height:1.5"><strong>Ethnographic interpretations of cupules:</strong> The Pomo associated cupules with fertility and "baby rocks." The Yuki used "rain rocks" — drilling depressions while praying for rain. The Karok made cupules at Amaikiaram, a sacred village, as part of First Salmon ceremonies. Globally, cupule-like designs are linked to concepts of fertility and water (Grieder 1982).</p>
<div class="popup-src">📖 Parkman (1986) J. California & Great Basin Anthropology 8(2):246-259; Kroeber (1925); Milliken (1982); Levy (1978); Grieder (1982)</div>`);

// ========== CUPULE PETROGLYPH SITES ==========
// Data from Table 1 in Parkman (1986), plus narrative descriptions
// Coordinates estimated from county, elevation, topography, and water feature descriptions
// Site trinomials: ALA=Alameda, CCO=Contra Costa, KIN=Kings, MER=Merced,
// SBN=San Benito, SCL=Santa Clara, STA=Stanislaus

const diabloCupuleData = [
  // ===== ALAMEDA COUNTY =====
  {lat:37.694,lng:-122.085,name:'CA-ALA-60 — Castro Valley Cupule Complex',type:'Cupule Petroglyphs & Occupation Site',
   desc:'<strong>149+ cupules</strong> on numerous boulders at a large occupation site in ethnographic Ohlone territory. Excavated by California State University, Hayward in 1979. Obsidian hydration rind measurements range from <strong>415 to 4,097 BP</strong>. A single radiocarbon date of <strong>3,295 ± 500 BP</strong> from the lower deposit. One of the most significant cupule sites in the Diablo Range — the combination of extensive cupule boulders with a deep, well-dated occupation deposit makes this a keystone site for understanding cupule chronology. Elevation 240 ft, canyon/streamside setting in oak woodland and riparian vegetation. Stream within 20 m.',
   src:'Parkman (1986) Table 1; Miller (1982) CSUH excavation report',
   culture:'Ohlone',county:'Alameda',cupules:'149+',elev:240,water:'Stream (20 m.)'},
  {lat:37.728,lng:-122.045,name:'CA-ALA-339 — Crow Creek Cupules',type:'Cupule Petroglyphs & Occupation Site',
   desc:'<strong>10+ cupules</strong> on sandstone at an occupation site. Canyon/streamside setting at 640 ft elevation in oak woodland and riparian vegetation. Stream within 10 m.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'Alameda',cupules:'10+',elev:640,water:'Stream (10 m.)'},
  {lat:37.560,lng:-121.735,name:'CA-ALA-398 — Ridge Crest Cupules',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>6+ cupules</strong> on sandstone at a possible milling station. Ridge crest setting at 1,400 ft elevation in grassland. Stream within 5 m.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'Alameda',cupules:'6+',elev:1400,water:'Stream (5 m.)'},
  {lat:37.570,lng:-121.720,name:'CA-ALA-400 — Canyon Milling Cupules',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>2 cupules</strong> on sandstone at a milling station. Canyon/streamside setting at 1,160 ft elevation in oak woodland and riparian vegetation. Stream within 5 m.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'Alameda',cupules:'2',elev:1160,water:'Stream (5 m.)'},
  {lat:37.585,lng:-121.750,name:'CA-ALA-412 — Ridge Crest Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>5 cupules</strong> on sandstone. Ridge crest setting at 325 ft elevation in oak woodland. Stream within 80 m. No associated features.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'Alameda',cupules:'5',elev:325,water:'Stream (80 m.)'},
  {lat:37.575,lng:-121.760,name:'CA-ALA-418 — Ridge Milling Cupules',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>2 cupules</strong> on sandstone at a milling station. Ridge setting at 700 ft elevation in oak woodland and grassland. Stream within 300 m.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'Alameda',cupules:'2',elev:700,water:'Stream (300 m.)'},

  // ===== CONTRA COSTA COUNTY (Mt. Diablo area) =====
  {lat:37.880,lng:-121.960,name:'CA-CCO-9 — Mt. Diablo Streamside Cupules',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>8 cupules</strong> on sandstone at a milling station near Mt. Diablo. Streamside setting at 500 ft elevation in oak woodland. Stream nearby.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok',county:'Contra Costa',cupules:'8',elev:500,water:'Stream (Nearby)'},
  {lat:37.870,lng:-121.905,name:'CA-CCO-21 — Mt. Diablo Canyon',type:'Cupule Petroglyphs',
   desc:'<strong>2 cupules</strong> on sandstone. Canyon setting at 3,200 ft elevation in oak woodland — one of the highest cupule sites in the range. Spring within 250 m. No associated features.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok',county:'Contra Costa',cupules:'2',elev:3200,water:'Spring (250 m.)'},
  {lat:37.931,lng:-122.317,name:'CA-CCO-125/353 — Major PCN & Cupule Complex',type:'PCN Petroglyphs & Cupule Complex',
   desc:'<strong>256+ cupules</strong> plus Pecked Curvilinear Nucleated (PCN) petroglyphs on chlorite schist — a massive rock art complex. Canyon/streamside setting at 160 ft elevation in riparian vegetation. Stream within 20 m. Also recorded as CCO-353. The PCN style petroglyphs are similar to those in Marin County sites (Hotz and Clewlow 1974). Associated with an occupation site.',
   src:'Parkman (1986) Table 1; Miller (1977:22, Fig. 4); Elsasser (1984); Hotz & Clewlow (1974)',
   culture:'Ohlone / Pre-contact PCN tradition',county:'Contra Costa',cupules:'256+',elev:160,water:'Stream (20 m.)'},
  {lat:37.935,lng:-122.322,name:'CA-CCO-152 — El Cerrito Cupule Complex',type:'Cupule Petroglyphs & PCN',
   desc:'<strong>200+ cupules</strong> on chlorite schist, with PCN petroglyphs. Canyon/streamside setting at 200 ft elevation in riparian vegetation. Stream within 20 m. First documented in 1933 newspaper coverage (Oakland Tribune). Associated with possible quarry. One of the most famous Diablo Range rock art sites.',
   src:'Parkman (1986) Table 1; Oakland Tribune (1933); Berkeley Gazette (1953); Heizer & Clewlow (1973:94)',
   culture:'Ohlone (Huchiun) / Pre-contact PCN tradition',county:'Contra Costa',cupules:'200+',elev:200,water:'Stream (20 m.)'},
  {lat:37.845,lng:-121.785,name:'CA-CCO-320 — Round Valley Cupules',type:'Cupule Petroglyphs & Occupation Site',
   desc:'<strong>Many cupules</strong> on sandstone at an occupation site. Canyon/streamside setting at 600 ft elevation in oak woodland and riparian vegetation. Stream within 20 m.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'Many',elev:600,water:'Stream (20 m.)'},
  {lat:37.840,lng:-121.800,name:'CA-CCO-369 — Basaltic Greenstone Cupule',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>1 possible cupule</strong> on basaltic greenstone at a milling station. Canyon/streamside setting at 720 ft elevation in riparian vegetation. Stream within 20 m. Unusual lithology — most Diablo Range cupules are on sandstone.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'1(?)',elev:720,water:'Stream (20 m.)'},
  {lat:37.852,lng:-121.870,name:'CA-CCO-375 — Canyon Milling Cupules',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>7+ cupules</strong> on sandstone at a milling station. Canyon setting at 1,400 ft elevation in oak woodland. Spring within 50 m.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'7+',elev:1400,water:'Spring (50 m.)'},
  {lat:37.855,lng:-121.865,name:'CA-CCO-382 — Spring Milling Cupules',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>5 cupules</strong> on sandstone at a milling station. Canyon setting at 1,640 ft elevation in oak woodland. Spring within 100 m.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'5',elev:1640,water:'Spring (100 m.)'},
  {lat:37.857,lng:-121.863,name:'CA-CCO-383 — Canyon Paired Cupules',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>2 cupules</strong> on sandstone at a milling station. Canyon setting at 1,600 ft elevation in oak woodland. Spring within 100 m.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'2',elev:1600,water:'Spring (100 m.)'},
  {lat:37.856,lng:-121.864,name:'CA-CCO-384 — Solitary Cupule',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>1 cupule</strong> on sandstone at a milling station. Canyon setting at 1,640 ft elevation in oak woodland. Spring within 100 m.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'1',elev:1640,water:'Spring (100 m.)'},
  {lat:37.878,lng:-121.942,name:'CA-CCO-394 — Isolated Canyon Cupule',type:'Cupule Petroglyphs',
   desc:'<strong>1 cupule</strong> on sandstone. Canyon setting at 380 ft elevation in oak woodland. Stream within 75 m. No associated features.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok',county:'Contra Costa',cupules:'1',elev:380,water:'Stream (75 m.)'},
  {lat:37.858,lng:-121.862,name:'CA-CCO-395 — Spring Milling Complex',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>5 cupules</strong> on sandstone at a milling station. Canyon setting at 1,600 ft elevation in oak woodland. Spring within 100 m.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'5',elev:1600,water:'Spring (100 m.)'},
  {lat:37.860,lng:-121.858,name:'CA-CCO-416 — Streamside Cupule Complex',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>8+ cupules</strong> on sandstone at a milling station. Canyon setting at 1,640 ft elevation in oak woodland. Stream within 35 m.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'8+',elev:1640,water:'Stream (35 m.)'},
  {lat:37.862,lng:-121.850,name:'CA-CCO-424 — Isolated Ridge Cupule',type:'Cupule Petroglyphs',
   desc:'<strong>1+ cupule</strong> on sandstone. Canyon setting at 2,050 ft elevation in oak woodland. Stream within 20 m. No associated features.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'1+',elev:2050,water:'Stream (20 m.)'},
  {lat:37.868,lng:-121.852,name:'CA-CCO-428 — Spring Ridge Cupule Complex',type:'Cupule Petroglyphs',
   desc:'<strong>20+ cupules</strong> on sandstone. Ridge crest setting at 940 ft elevation in grassland. Spring nearby. No associated features.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'20+',elev:940,water:'Spring (Nearby)'},
  {lat:37.855,lng:-121.855,name:'CA-CCO-429 — Ridge Milling Cupules',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>3 cupules</strong> on sandstone at a milling station. Ridge setting at 1,640 ft elevation in oak woodland. Stream within 100 m.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'3',elev:1640,water:'Stream (100 m.)'},
  {lat:37.863,lng:-121.845,name:'CA-CCO-430 — Ridge Crest Solitary Cupule',type:'Cupule Petroglyphs',
   desc:'<strong>1 cupule</strong> on sandstone. Ridge crest setting at 1,980 ft elevation in grassland. Stream within 400 m. No associated features.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'1',elev:1980,water:'Stream (400 m.)'},
  {lat:37.875,lng:-121.935,name:'CA-CCO-450 — Canyon Streamside Milling',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>7 cupules</strong> on sandstone at a milling station. Canyon/streamside setting at 560 ft elevation in grassland and riparian vegetation. Stream at site.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok',county:'Contra Costa',cupules:'7',elev:560,water:'Stream (at Site)'},
  {lat:37.885,lng:-121.928,name:'CA-CCO-462 — Hillside Milling Cupules',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>15+ cupules</strong> on sandstone at a milling station. Hillside setting at 580 ft elevation in oak woodland. Stream within 50 m.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok',county:'Contra Costa',cupules:'15+',elev:580,water:'Stream (50 m.)'},
  {lat:37.890,lng:-121.920,name:'CA-CCO-469 — Hillside Cupule Cluster',type:'Cupule Petroglyphs',
   desc:'<strong>6+ cupules</strong> on sandstone. Hillside setting at 410 ft elevation in savanna. Stream within 30 m. No associated features.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok',county:'Contra Costa',cupules:'6+',elev:410,water:'Stream (30 m.)'},
  {lat:37.864,lng:-121.842,name:'CA-CCO-482 — Spring Ridge Solitary Cupule',type:'Cupule Petroglyphs',
   desc:'<strong>1 cupule</strong> on sandstone. Ridge crest setting at 1,720 ft elevation in oak woodland and grassland. Spring within 150 m. No associated features.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'1',elev:1720,water:'Spring (150 m.)'},
  {lat:37.866,lng:-121.840,name:'CA-CCO-486 — Ridge Saddle Solitary Cupule',type:'Cupule Petroglyphs',
   desc:'<strong>1 cupule</strong> on sandstone. Ridge saddle setting at 1,720 ft elevation in oak woodland. Spring within 100 m. No associated features.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'1',elev:1720,water:'Spring (100 m.)'},
  {lat:37.865,lng:-121.841,name:'CA-CCO-487 — Ridge Saddle Milling Complex',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>13 cupules</strong> on sandstone at a milling station. Ridge saddle setting at 1,600 ft elevation in oak woodland. Spring within 100 m.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'13',elev:1600,water:'Spring (100 m.)'},
  {lat:37.867,lng:-121.838,name:'CA-CCO-530 — Ridge Crest Conglomerate Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong> on conglomerate — unusual lithology. Ridge crest setting at 1,560 ft elevation in oak woodland. Spring below site. No associated features.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'?',elev:1560,water:'Spring (Below Site)'},
  {lat:37.869,lng:-121.836,name:'CA-CCO-531 — Ridge Crest Sandstone Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong> on sandstone. Ridge crest setting at 1,580 ft elevation in oak woodland. Spring below site. No associated features.',
   src:'Parkman (1986) Table 1',
   culture:'Bay Miwok (Volvon)',county:'Contra Costa',cupules:'?',elev:1580,water:'Spring (Below Site)'},

  // ===== KINGS COUNTY =====
  {lat:36.075,lng:-120.130,name:'CA-KIN-15 — Kings County Streamside Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong> on sandstone. Canyon/streamside setting at 1,200 ft elevation in grassland. Stream nearby.',
   src:'Parkman (1986) Table 1',
   culture:'Yokuts',county:'Kings',cupules:'?',elev:1200,water:'Stream (Nearby)'},

  // ===== MERCED COUNTY (San Luis Reservoir / Pacheco Pass area) =====
  {lat:37.060,lng:-121.100,name:'CA-MER-14 — Valley Streamside Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong> on sandstone. Valley/streamside setting at 250 ft elevation in grassland. Stream at site.',
   src:'Parkman (1986) Table 1',
   culture:'Northern Valley Yokuts',county:'Merced',cupules:'?',elev:250,water:'Stream (at Site)'},
  {lat:37.055,lng:-121.090,name:'CA-MER-15 — Pacheco Pass Yokuts Cupule Site',type:'Cupule Petroglyphs & Occupation Site',
   desc:'<strong>Cupule boulders</strong> on sandstone close to a late protohistoric (Yokuts) occupation site. Canyon/streamside setting at 550 ft elevation in oak woodland. Spring nearby. Excavated prior to construction of San Luis Reservoir (Riddell & Olsen 1965). The geographic association between the cultural deposits and the cupule features led researchers to infer contemporaneity (Olsen & Payen 1982:21).',
   src:'Parkman (1986); Riddell & Olsen (1965); Olsen & Payen (1982:21)',
   culture:'Northern Valley Yokuts (protohistoric)',county:'Merced',cupules:'?',elev:550,water:'Spring (Nearby)'},
  {lat:37.052,lng:-121.085,name:'CA-MER-19 — Streamside Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Canyon/streamside setting at 525 ft elevation in grassland. Stream nearby.',
   src:'Parkman (1986) Table 1',
   culture:'Northern Valley Yokuts',county:'Merced',cupules:'?',elev:525,water:'Stream (Nearby)'},
  {lat:37.048,lng:-121.095,name:'CA-MER-21 — Oak Woodland Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Canyon/streamside setting at 575 ft elevation in oak woodland. Stream at site.',
   src:'Parkman (1986) Table 1',
   culture:'Northern Valley Yokuts',county:'Merced',cupules:'?',elev:575,water:'Stream (at Site)'},
  {lat:37.050,lng:-121.092,name:'CA-MER-24 — Streamside Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong> on sandstone. Canyon/streamside setting at 450 ft elevation in oak woodland. Stream at site.',
   src:'Parkman (1986) Table 1',
   culture:'Northern Valley Yokuts',county:'Merced',cupules:'?',elev:450,water:'Stream (at Site)'},
  {lat:37.046,lng:-121.110,name:'CA-MER-38 — San Luis Reservoir Yokuts Cupule Site',type:'Cupule Petroglyphs & Occupation Site',
   desc:'<strong>Cupule boulders</strong> close to a late protohistoric (Yokuts) occupation site. Often referred to incorrectly as MER-119. Rolling hills setting at 230 ft elevation in grassland. Stream within 50 m. Excavated prior to construction of San Luis Reservoir (Olsen & Payen 1969). Like MER-15, the association between cultural deposits and cupule features was cited as evidence against Baumhoff\'s (1980) proposal concerning the great antiquity of cupules (Pritchard 1982:31).',
   src:'Parkman (1986); Olsen & Payen (1969, 1982); Pritchard (1970, 1982)',
   culture:'Northern Valley Yokuts (protohistoric)',county:'Merced',cupules:'?',elev:230,water:'Stream (50 m.)'},
  {lat:37.053,lng:-121.088,name:'CA-MER-130 — Pacheco Pass Upland Cupule Site',type:'Cupule Petroglyphs & Occupation Site',
   desc:'<strong>Cupule boulders</strong> close to a late protohistoric occupation site. Canyon/streamside setting at 600 ft elevation in oak woodland and grassland. Spring at site. The final phase of archaeological field work in the San Luis Reservoir area. The investigation expanded knowledge of occupation patterns along the western edge of the San Joaquin Valley and raised questions about tribal identification.',
   src:'Parkman (1986); Olsen & Payen (1982:21); Pritchard (1982:31)',
   culture:'Northern Valley Yokuts / Ohlone (boundary area)',county:'Merced',cupules:'?',elev:600,water:'Spring (at Site)'},
  {lat:37.065,lng:-121.070,name:'CA-MER-186 — Highland Spring Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Hillside setting at 1,860 ft elevation in oak woodland. Spring at site.',
   src:'Parkman (1986) Table 1',
   culture:'Northern Valley Yokuts / Ohlone',county:'Merced',cupules:'?',elev:1860,water:'Spring (at Site)'},
  {lat:37.063,lng:-121.068,name:'CA-MER-192 — Canyon Spring Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Canyon/streamside setting at 1,900 ft elevation in oak woodland. Spring nearby.',
   src:'Parkman (1986) Table 1',
   culture:'Northern Valley Yokuts / Ohlone',county:'Merced',cupules:'?',elev:1900,water:'Spring (Nearby)'},
  {lat:37.058,lng:-121.075,name:'CA-MER-195 — Oak Woodland Streamside',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Canyon/streamside setting at 1,480 ft elevation in oak woodland and grassland. Stream at site.',
   src:'Parkman (1986) Table 1',
   culture:'Northern Valley Yokuts / Ohlone',county:'Merced',cupules:'?',elev:1480,water:'Stream (at Site)'},

  // ===== SAN BENITO COUNTY =====
  {lat:36.545,lng:-121.085,name:'CA-SBN-10 — Knoll Top Rockshelter Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Knoll top rockshelter at 2,550 ft elevation in chaparral. Stream within 600 m.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone / Yokuts boundary',county:'San Benito',cupules:'?',elev:2550,water:'Stream (600 m.)'},
  {lat:36.620,lng:-121.180,name:'CA-SBN-21 — Hillside Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Hillside setting at 960 ft elevation in oak woodland. Stream within 200 m.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'San Benito',cupules:'?',elev:960,water:'Stream (200 m.)'},
  {lat:36.590,lng:-121.150,name:'CA-SBN-29 — Rockshelter Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Rockshelter setting at 1,400 ft elevation in oak woodland. Stream nearby.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'San Benito',cupules:'?',elev:1400,water:'Stream (Nearby)'},
  {lat:36.610,lng:-121.170,name:'CA-SBN-42 — Canyon Hillside Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Canyon/hillside setting at 860 ft elevation in oak woodland. Stream at site.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'San Benito',cupules:'?',elev:860,water:'Stream (at Site)'},
  {lat:36.605,lng:-121.165,name:'CA-SBN-43 — Canyon Streamside Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Canyon/streamside setting at 770 ft elevation in oak woodland. Stream at site.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'San Benito',cupules:'?',elev:770,water:'Stream (at Site)'},
  {lat:36.530,lng:-121.070,name:'CA-SBN-47 — San Benito Mountain Area',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Meadow setting at 2,750 ft elevation in oak woodland. Stream within 75 m. Near San Benito Mountain (1,597 m), the highest peak in the Diablo Range.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone / Yokuts boundary',county:'San Benito',cupules:'?',elev:2750,water:'Stream (75 m.)'},

  // ===== SANTA CLARA COUNTY (including Henry Coe State Park) =====
  {lat:37.200,lng:-121.560,name:'CA-SCL-40 — Canyon Streamside Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Canyon/streamside setting at 1,250 ft elevation in riparian vegetation. Stream within 20 m.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'Santa Clara',cupules:'?',elev:1250,water:'Stream (20 m.)'},
  {lat:37.180,lng:-121.540,name:'CA-SCL-43 — Canyon Streamside Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Canyon/streamside setting at 2,250 ft elevation in oak woodland. Stream within 20 m.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'Santa Clara',cupules:'?',elev:2250,water:'Stream (20 m.)'},
  {lat:37.170,lng:-121.530,name:'CA-SCL-48 — Major Hillside Rock Art Site',type:'Cupule Petroglyphs & Rock Art',
   desc:'<strong>Cupules</strong> and other petroglyphs on a hillside at 2,500 ft elevation in oak woodland. Stream nearby. Subject of newspaper coverage (Berkeley Gazette 1953). One of the better-known Diablo Range rock art sites, discussed by Heizer & Clewlow (1973:115), Elsasser (1985), and Hotz (1986).',
   src:'Parkman (1986); Heizer & Clewlow (1973:115); Elsasser (1985); Hotz (1986); Berkeley Gazette (1953)',
   culture:'Ohlone',county:'Santa Clara',cupules:'?',elev:2500,water:'Stream (Nearby)'},
  {lat:37.175,lng:-121.535,name:'CA-SCL-50 — Canyon Spring Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Canyon setting at 2,000 ft elevation in oak woodland. Spring at site.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'Santa Clara',cupules:'?',elev:2000,water:'Spring (at Site)'},
  {lat:37.230,lng:-121.600,name:'CA-SCL-100 — Hillside Spring Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Hillside setting at 440 ft elevation in grassland. Spring within 100 m.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'Santa Clara',cupules:'?',elev:440,water:'Spring (100 m.)'},
  {lat:37.160,lng:-121.490,name:'CA-SCL-373 — Oak Woodland Streamside',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Hillside setting at 2,000 ft elevation in oak woodland. Stream.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'Santa Clara',cupules:'?',elev:2000,water:'Stream'},
  {lat:37.190,lng:-121.520,name:'CA-SCL-404 — Ridge Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Ridge setting at 1,340 ft elevation in oak woodland.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'Santa Clara',cupules:'?',elev:1340,water:''},
  {lat:37.215,lng:-121.550,name:'CA-SCL-408 — Canyon Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Canyon setting at 880 ft elevation in oak woodland.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'Santa Clara',cupules:'?',elev:880,water:''},
  {lat:37.165,lng:-121.485,name:'CA-SCL-451 — Canyon Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Canyon setting at 2,060 ft elevation in oak woodland.',
   src:'Parkman (1986) Table 1',
   culture:'Ohlone',county:'Santa Clara',cupules:'?',elev:2060,water:''},

  // === HENRY COE STATE PARK SITES (recorded during 1982 survey) ===
  {lat:37.195,lng:-121.510,name:'CA-SCL-496 — Henry Coe Spring Cupules',type:'Cupule Petroglyphs (Patterned)',
   desc:'<strong>6 cupules</strong> arranged in what may be a <strong>nonrandom pattern</strong> on a single Franciscan graywacke boulder, about 10 m from a major spring. Elevation ~2,280 ft in canyon/riparian setting. The patterned arrangement may represent a boundary marker, ownership mark, or clan symbol. Recorded during the 1982 archaeological survey of Henry Coe State Park (Parkman et al. 1983).',
   src:'Parkman (1986) pp. 248, Fig. 2a; Parkman et al. (1983)',
   culture:'Ohlone (Tomoi / Locobo / Cobo)',county:'Santa Clara',cupules:'6',elev:2280,water:'Spring (10 m.)'},
  {lat:37.210,lng:-121.530,name:'CA-SCL-499 — Black Oak Grove Cupules',type:'Cupule Petroglyphs (Patterned)',
   desc:'<strong>3 cupules</strong> arranged in what may be a <strong>nonrandom pattern</strong> on a single Franciscan graywacke boulder near a spring, in a grove of black oak (<em>Quercus kelloggii</em>). A sandstone bowl/mortar and an oval-shaped sandstone mano were found within 40 m. Small pieces of soapstone and serpentine littered the surface of a nearby field. Elevation ~600 ft on a hillside in oak woodland. The cupule pattern could indicate ownership of the oak grove as a food resource.',
   src:'Parkman (1986) pp. 248, Fig. 2b; Parkman et al. (1983)',
   culture:'Ohlone (Tomoi / Locobo / Cobo)',county:'Santa Clara',cupules:'3',elev:600,water:'Spring (100 m.)'},
  {lat:37.185,lng:-121.505,name:'CA-SCL-500 — Streamside Milling & Cupules',type:'Cupule Petroglyphs & Bedrock Mortars',
   desc:'<strong>3 cupules and 3 bedrock mortars</strong> on a single Franciscan graywacke boulder. 4 additional bedrock mortars on two nearby boulders. A flake scatter on the site surface. Canyon/streamside setting at ~1,950 ft elevation in oak woodland beside an intermittent stream.',
   src:'Parkman (1986) p. 248; Parkman et al. (1983)',
   culture:'Ohlone',county:'Santa Clara',cupules:'3+4 BRM',elev:1950,water:'Stream (5 m.)'},
  {lat:37.192,lng:-121.508,name:'CA-SCL-501 — Chert Quarry Spring Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>2 cupules</strong> — one on each of two Franciscan graywacke boulders. In the vicinity of a <strong>chert quarry/workshop</strong>, about 10 m from a major spring. Hillside setting at ~1,600 ft elevation in oak woodland. The association with a lithic quarry is unusual for cupule sites.',
   src:'Parkman (1986) pp. 248, Fig. 2c; Parkman et al. (1983)',
   culture:'Ohlone',county:'Santa Clara',cupules:'2',elev:1600,water:'Spring (5 m.)'},
  {lat:37.188,lng:-121.502,name:'CA-SCL-502 — Split Boulder Patterned Cupules',type:'Cupule Petroglyphs (Patterned)',
   desc:'<strong>6 cupules and 1 bedrock mortar</strong> on two Franciscan graywacke boulders near a spring. The mortar and 5 cupules are on one boulder, with a single cupule on the other. The two boulders appear to have once been a single rock, having <strong>broken apart after the manufacture of the cupules</strong>. The cupules appear to represent a <strong>nonrandom arrangement</strong>. Hillside setting at ~2,050 ft elevation in oak woodland. Spring within 150 m.',
   src:'Parkman (1986) pp. 248, Fig. 2d; Parkman et al. (1983)',
   culture:'Ohlone (Tomoi / Locobo / Cobo)',county:'Santa Clara',cupules:'6+1 BRM',elev:2050,water:'Spring (150 m.)'},
  {lat:37.183,lng:-121.498,name:'CA-SCL-503 — PCN & Schist Quarry Complex',type:'PCN Petroglyphs & Cupule Complex',
   desc:'<strong>7+ cupule-like depressions, PCN petroglyphs, and quarrying evidence</strong> on a large glaucophane schist boulder near a spring. One large vertical face is covered with numerous cupule-like depressions and angular incisions — though some may be natural, the result of tectonic emplacement processes on metamorphic rocks in the Franciscan assemblage (Bailey et al. 1964). A second, smaller schist boulder nearby. Some visitors have noted the markings may be natural (Robert Mark, pers. comm. 1983; Newman & Mark 1986). Hillside setting at ~2,070 ft elevation in oak woodland.',
   src:'Parkman (1986) pp. 248-249; Newman & Mark (1986:193, Fig. 4); Bailey et al. (1964)',
   culture:'Ohlone / Pre-contact PCN tradition',county:'Santa Clara',cupules:'7+',elev:2070,water:'Spring (Nearby)'},
  {lat:37.198,lng:-121.515,name:'CA-SCL-594 — Perennial Stream Occupation Site',type:'Cupule Petroglyphs & Occupation Site',
   desc:'<strong>17+ cupules and 5 bedrock mortars</strong> on four Franciscan graywacke boulders beside a perennial stream. A <strong>midden and possible house pit</strong> are adjacent to the boulders — making this one of the few Henry Coe cupule sites with direct evidence of residential occupation. Canyon/streamside setting at ~1,560 ft elevation in oak woodland. Recorded by State Park staff and volunteers after the 1982 survey.',
   src:'Parkman (1986) p. 249',
   culture:'Ohlone',county:'Santa Clara',cupules:'17+',elev:1560,water:'Stream (10 m.)'},
  {lat:37.193,lng:-121.500,name:'CA-SCL-595 — Blueschist Cupule & Incised Complex',type:'Cupule Petroglyphs & Incised Lines',
   desc:'<strong>40+ cupules</strong> on two blueschist boulders adjacent to an intermittent stream. At least <strong>8 incised lines and grooves</strong> on one of the boulders — an unusual combination at Diablo Range cupule sites. Hillside setting at ~1,680 ft elevation in oak woodland. The high cupule count and incised elements suggest sustained ceremonial use.',
   src:'Parkman (1986) p. 249',
   culture:'Ohlone',county:'Santa Clara',cupules:'40+',elev:1680,water:'Stream (5 m.)'},

  // ===== STANISLAUS COUNTY =====
  {lat:37.140,lng:-121.420,name:'CA-STA-33 — Canyon Occupation Cupules',type:'Cupule Petroglyphs & Occupation Site',
   desc:'<strong>Many cupules</strong> at an occupation site. Canyon setting at 1,025 ft elevation in oak woodland. Discussed by Heizer & Clewlow (1973:117, Fig. 298a, c).',
   src:'Parkman (1986) Table 1; Heizer & Clewlow (1973:117)',
   culture:'Northern Valley Yokuts / Ohlone boundary',county:'Stanislaus',cupules:'Many',elev:1025,water:''},
  {lat:37.130,lng:-121.430,name:'CA-STA-118 — Hillside Spring Occupation',type:'Cupule Petroglyphs & Occupation Site',
   desc:'<strong>Cupules</strong> on sandstone at an occupation site. Hillside setting at 344 ft elevation in grassland. Spring at site.',
   src:'Parkman (1986) Table 1',
   culture:'Northern Valley Yokuts',county:'Stanislaus',cupules:'?',elev:344,water:'Spring (at Site)'},
  {lat:37.135,lng:-121.425,name:'CA-STA-127 — Canyon Streamside Cupules',type:'Cupule Petroglyphs',
   desc:'<strong>Cupules</strong>. Canyon/streamside setting at 650 ft elevation in oak woodland. Stream nearby.',
   src:'Parkman (1986) Table 1',
   culture:'Northern Valley Yokuts / Ohlone',county:'Stanislaus',cupules:'?',elev:650,water:'Stream (Nearby)'},
  {lat:37.132,lng:-121.428,name:'CA-STA-129 — Canyon Streamside Occupation',type:'Cupule Petroglyphs & Occupation Site',
   desc:'<strong>Cupules</strong>. Canyon/streamside setting at 550 ft elevation in oak woodland. Stream nearby.',
   src:'Parkman (1986) Table 1',
   culture:'Northern Valley Yokuts / Ohlone',county:'Stanislaus',cupules:'?',elev:550,water:'Stream (Nearby)'},
  {lat:37.110,lng:-121.380,name:'CA-STA-134 — Mesa Top Milling Cupules',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>10+ cupules</strong> on sandstone at a milling station. Mesa top setting at 300 ft elevation in grassland. Stream within 700 m.',
   src:'Parkman (1986) Table 1',
   culture:'Northern Valley Yokuts',county:'Stanislaus',cupules:'10+',elev:300,water:'Stream (700 m.)'},
  {lat:37.108,lng:-121.378,name:'CA-STA-135 — Mesa Face Rockshelter Cupule',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>1+ cupules</strong> on sandstone in a mesa face rockshelter. At 300 ft elevation in grassland. Stream within 500 m.',
   src:'Parkman (1986) Table 1',
   culture:'Northern Valley Yokuts',county:'Stanislaus',cupules:'1+',elev:300,water:'Stream (500 m.)'},
  {lat:37.106,lng:-121.376,name:'CA-STA-136 — Mesa Face Rockshelter Cupules',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>3 cupules</strong> on sandstone in a mesa face rockshelter. At 300 ft elevation in grassland. Stream within 500 m.',
   src:'Parkman (1986) Table 1',
   culture:'Northern Valley Yokuts',county:'Stanislaus',cupules:'3',elev:300,water:'Stream (500 m.)'},
  {lat:37.104,lng:-121.374,name:'CA-STA-137 — Mesa Face Rockshelter Cupule',type:'Cupule Petroglyphs & Milling Station',
   desc:'<strong>1 cupule</strong> on sandstone in a mesa face rockshelter. At 300 ft elevation in grassland. Stream within 500 m.',
   src:'Parkman (1986) Table 1',
   culture:'Northern Valley Yokuts',county:'Stanislaus',cupules:'1',elev:300,water:'Stream (500 m.)'},

  // === HENRY COE STATE PARK - STANISLAUS COUNTY PORTION ===
  {lat:37.155,lng:-121.460,name:'CA-STA-195 — Graywacke Milling & Cupule Station',type:'Cupule Petroglyphs & Bedrock Mortars',
   desc:'<strong>4 cupules and 8 bedrock mortars</strong> on a large Franciscan graywacke boulder beside an intermittent stream. Canyon/streamside setting at ~1,150 ft elevation in oak woodland. The ratio of 2:1 mortars to cupules is typical of sites where milling and ceremonial activities co-occurred.',
   src:'Parkman (1986) p. 249; Parkman et al. (1983)',
   culture:'Ohlone / Northern Valley Yokuts boundary',county:'Stanislaus',cupules:'4',elev:1150,water:'Stream (5 m.)'},
  {lat:37.148,lng:-121.450,name:'CA-STA-201 — Limestone Stream Milling Complex',type:'Cupule Petroglyphs & Bedrock Mortars',
   desc:'<strong>3 cupules and 18 bedrock mortars</strong> on six limestone boulders in the bed of an intermittent stream. Canyon/streamside setting at ~960 ft elevation in oak woodland. The use of <strong>limestone</strong> is unusual — most Diablo Range cupule boulders are sandstone or Franciscan graywacke. The high ratio of mortars to cupules (6:1) suggests primarily domestic milling.',
   src:'Parkman (1986) p. 249; Parkman et al. (1983)',
   culture:'Ohlone / Northern Valley Yokuts boundary',county:'Stanislaus',cupules:'3',elev:960,water:'Stream (5 m.)'},
  {lat:37.150,lng:-121.455,name:'CA-STA-218 — Major Glaucophane Schist Cupule & Mortar Complex',type:'Cupule Petroglyphs, Bedrock Mortars & Incised Petroglyphs',
   desc:'<strong>40+ cupules, 14 bedrock mortars, and several possible incised petroglyphs</strong> on a large glaucophane schist boulder beside an intermittent stream. Canyon/streamside setting at ~1,200 ft elevation in oak woodland. A major site — the combination of high cupule count, numerous bedrock mortars, and incised elements on metamorphic rock suggests both domestic and ceremonial functions. The glaucophane schist substrate connects this site to the PCN tradition at CCO-125 and SCL-503.',
   src:'Parkman (1986) p. 249',
   culture:'Ohlone / Northern Valley Yokuts boundary',county:'Stanislaus',cupules:'40+',elev:1200,water:'Stream (5 m.)'}
];

// ========== RENDER CUPULE SITES ==========
diabloCupuleData.forEach(s => {
  const countyBadge = `<span style="display:inline-block;background:rgba(141,110,99,0.25);color:#D7CCC8;padding:2px 7px;border-radius:3px;font-size:10px;margin-left:4px;">${s.county} Co.</span>`;
  const waterInfo = s.water ? `<div style="margin:4px 0;font-size:11px;color:#4FC3F7">💧 Water source: ${s.water}</div>` : '';
  const elevInfo = s.elev ? `<div style="font-size:10px;color:#999;margin-top:2px">⛰️ Elevation: ${s.elev} ft</div>` : '';
  const cupuleCount = s.cupules ? `<div style="margin:4px 0;font-size:11px;color:#FFAB40"><strong>Cupules:</strong> ${s.cupules}</div>` : '';
  
  const icon = L.divIcon({
    className:'',
    html:`<div style="width:12px;height:12px;background:#8D6E63;border:2px solid #D7CCC8;border-radius:50%;box-shadow:0 0 4px rgba(141,110,99,0.6);"></div>`,
    iconSize:[12,12],
    iconAnchor:[6,6]
  });

  L.marker([s.lat, s.lng], {icon}).addTo(L_groups.diabloCupules)
    .bindPopup(`<h4>${s.name}</h4>
<span class="ptype pt-rock-art">${s.type}</span> ${countyBadge}
<div style="margin:4px 0;font-size:11px;color:#ccc"><strong>Cultural affiliation:</strong> ${s.culture}</div>
${cupuleCount}${waterInfo}${elevInfo}
<div style="margin:6px 0;font-size:12px;line-height:1.5">${s.desc}</div>
<div class="popup-src">📖 ${s.src}</div>`, {maxWidth:380});
});

// ========== ETHNOGRAPHIC INTERPRETATION MARKERS ==========
const ethnoData = [
  {lat:37.90,lng:-121.95,name:'Diablo Range — Ethnographic Context',type:'Ethnographic Note',
   desc:'<strong>Three ethnographic explanations for cupule petroglyphs in the Diablo Range</strong> (Parkman 1986, citing Meighan 1981):<br><br>' +
   '<strong>1. Boundary markers</strong> — representations of group symbols having territorial significance.<br>' +
   '<strong>2. Clan or personal symbols</strong> — the "I was here" message, representing ownership of a resource by an individual or group. Water sources (springs) and food resources (oak groves) might have been marked by cupule boulders. Three sites in Henry Coe State Park (SCL-496, -499, -502) show nonrandom cupule patterns suited to this explanation.<br>' +
   '<strong>3. Supplication</strong> — "rain rocks" or "baby rocks" consisting of boulders with many drilled pits, marks made by individuals to accompany a prayer or request for some benefit.<br><br>' +
   '<strong>Pomo ethnography:</strong> The Shanel (Pomo) associated cupules with fertility and population control (Aginsky 1939). "Baby rocks" were visited by those desiring children.<br>' +
   '<strong>Yuki ethnography:</strong> "Rain rocks" — depressions were drilled while praying for rain.<br>' +
   '<strong>Karok ethnography:</strong> At Amaikiaram, a sacred village, cupules may have been associated with weather control and/or the First Salmon ceremony (Winter & Heffner 1978).<br>' +
   '<strong>Wappo ethnography:</strong> Two large boulders were considered sacred — the home of spirits. Each passerby would leave an offering, usually a stone, stick, or bead (Heizer 1953b).<br><br>' +
   '<strong>Global parallels:</strong> Grieder (1982) hypothesized that "the cup mark everywhere refers to the vulva of the female earth from which all creation emerges, especially water and the souls of human babies."',
   src:'Parkman (1986) pp. 249-254; Meighan (1981:16); Aginsky (1939); Grieder (1982:43); Winter & Heffner (1978); Heizer (1953b)',
   culture:'Pan-California / Global parallels'}
];

ethnoData.forEach(s => {
  const icon = L.divIcon({
    className:'',
    html:`<div style="width:16px;height:16px;background:#FF8F00;border:2px solid #FFD54F;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff;font-weight:bold;box-shadow:0 0 6px rgba(255,143,0,0.5);">📜</div>`,
    iconSize:[16,16],
    iconAnchor:[8,8]
  });
  L.marker([s.lat, s.lng], {icon}).addTo(L_groups.diabloCupules)
    .bindPopup(`<h4>${s.name}</h4>
<span class="ptype" style="background:rgba(255,143,0,0.2);color:#FFB74D;">${s.type}</span>
<div style="margin:4px 0;font-size:11px;color:#ccc"><strong>Cultural context:</strong> ${s.culture}</div>
<div style="margin:6px 0;font-size:12px;line-height:1.5">${s.desc}</div>
<div class="popup-src">📖 ${s.src}</div>`, {maxWidth:420});
});

console.log('✅ Diablo Range cupule petroglyphs loaded:', diabloCupuleData.length, 'sites + ethnographic markers');
