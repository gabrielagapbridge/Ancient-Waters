// ============================================================
// HULKUHKU (EMIGDIANO CHUMASH) LANDSCAPE ARCHAEOLOGY
// Wind Wolves Preserve, San Emigdio Hills, Kern County
// Based on Robinson 2010 "Land Use, Land Ideology" (American Antiquity 75:4)
// + Whitley 1982 "Coso Petroglyphs" (JCGBA 4:2) — Coso reinterpretation
//
// This file adds:
//   1. Hulkuhku K-locale pictograph sites with GIS/viewshed data
//   2. Ethnohistoric Hulkuhku villages (Matapuan, Tashlipun, Tecuya)
//   3. Seasonal round model & landscape movement corridors
//   4. Updated Coso entry with competing interpretations
//   5. Hulkuhku territory polygon
// ============================================================

// ========== COLORS ==========
const HULK_COLOR = '#FF6F00';
const HULK_VILLAGE = '#FFD54F';
const HULK_CORRIDOR = '#FFAB40';

// ========== ICONS ==========
const hulkVillageIcon = L.divIcon({className:'', iconSize:[14,14], iconAnchor:[7,7],
  html:'<div style="width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:14px solid #FFD54F;filter:drop-shadow(0 0 4px #FFD54F66);"></div>'});

// ================================================================
// 1. HULKUHKU K-LOCALE PICTOGRAPH SITES (Robinson 2010)
// ================================================================

const hulkuhkuPictoSites = [

  {name:"Pleito (CA-KER-77) — Polychrome Masterwork",
   lat:34.8840, lng:-119.1300,
   type:"Polychrome Pictographs — K-locale",
   brms:"61 BRMs across 9 stations · 100+ cupules · 2 well-developed middens",
   viewshed:"37 BRMs intervisible with pictographs · Both middens within visual envelope · Paths to creek pass directly through pictograph viewsheds",
   desc:"The crown jewel of Hulkuhku rock art and one of the <b>most elaborate polychrome pictograph sites in North America</b>. " +
     "Bisected by a perennial creek in rich oak woodland, the site has 6 pictograph locales with extraordinary multi-colored paintings. " +
     "Grasse's (2003) excavations revealed deep midden deposits of <b>Late Period and Historical date</b> immediately adjacent to and in view of the pictographs. " +
     "Robinson's (2010) GIS viewshed analysis showed that 3 stations with 37 BRMs, both middens, and the vast majority of the site were intervisible with the paintings and shelter apertures. " +
     "Critically, the <b>paths from BRM stations to the creek</b> — essential for water leeching of acorn meal — route directly past and through the pictograph viewsheds. " +
     "There was no way to do the daily work of acorn processing without repeatedly encountering the painted surfaces. " +
     "Reeves, Bury & Robinson (2009) demonstrated that the rare <b>blue and green pigments</b> came from locally available copper carbonate minerals (azurite/malachite) — suggesting the polychrome tradition <b>predates European contact</b>.",
   src:"Robinson 2010; Grasse 2003, 2005; Reeves, Bury & Robinson 2009; Bury et al. 2003, 2004",
   culture:"Hulkuhku / Emigdiano Chumash", size:14},

  {name:"Pond — Largest K-locale on the Preserve",
   lat:34.9180, lng:-119.1450,
   type:"Red Linear & Curvilinear Pictographs — K-locale",
   brms:"Up to 132 BRMs across 16 stations · Dozens of cupules · Extensive midden",
   viewshed:"128 BRMs and majority of midden intervisible with pictographs across 15 stations",
   desc:"The <b>largest site on the Wind Wolves Preserve</b>, covering approximately 300 × 270 meters within impressive linear sandstone formations overlooking a wide bowl-like valley containing a seasonal sag-pond. " +
     "Five pictograph locales, all in red linear and curvilinear styles. " +
     "Robinson's viewshed analysis demonstrated that <b>15 of 16 BRM stations with 128 individual BRMs</b> are intervisible with the pictograph locations — the strongest visual integration of any mapped site. " +
     "At the core of the site, the 'Window Box' outcrop with pictographs is visually prominent from the site boundaries, growing larger as people approached. " +
     "Women returning to the same boulder throughout their lives to pound acorn would have worked under the constant visual presence of the paintings.",
   src:"Robinson 2010; Robinson 2006",
   culture:"Hulkuhku / Emigdiano Chumash", size:14},

  {name:"Three Springs — Polychrome Cave with Blue Pigment",
   lat:34.9400, lng:-119.1200,
   type:"Polychrome Pictographs — K-locale",
   brms:"36 BRMs across 5 stations · Well-developed midden",
   viewshed:"27 BRMs and 3 stations within visual envelope · Wetland area intervisible",
   desc:"Located next to a wetland area with <b>three springs and a flowing stream</b>. " +
     "Two pictograph locales: one on the largest BRM station, the other a main cave containing <b>complex polychrome compositions</b>. " +
     "Robinson's viewshed analysis showed almost all of the wetlands, 3 stations, and 27 BRMs are within the visual envelope. " +
     "Notable for rare <b>blue pigment</b> — Reeves, Bury & Robinson (2009) used portable X-ray fluorescence to demonstrate the pigments derived from locally available copper carbonates. " +
     "Chumash mythology specifically mentions 'blue-rock paint' in association with the Emigdiano people.",
   src:"Robinson 2010; Reeves, Bury & Robinson 2009",
   culture:"Hulkuhku / Emigdiano Chumash", size:12},

  {name:"Santiago — The Monolith & Spring",
   lat:34.9050, lng:-119.1700,
   type:"Faded Red Curvilinear Pictographs — K-locale",
   brms:"49 BRMs across 13 stations · 16 cupules",
   viewshed:"7 stations with 30 BRMs intervisible with pictographs",
   desc:"On an elevated terrace between a perennial creek and oak woodland. " +
     "The core is a natural <b>'monolith'</b> peppered with cupules, a BRM station, and three pictograph panels — all in faded red curvilinear — overlooking a spring and Santiago Creek. " +
     "Sprague & Grasse (1999) documented large quantities of lithic flakes and debitage surrounding the Monolith. " +
     "Robinson's viewshed analysis showed <b>7 stations with 30 BRMs intervisible</b> with the pictographs. " +
     "At Santiago, pictographs were painted <b>directly on the same host-rock</b> as the largest BRM station — food processing occurred literally on top of the art.",
   src:"Robinson 2010; Sprague & Grasse 1999",
   culture:"Hulkuhku / Emigdiano Chumash", size:11},

  {name:"Los Lobos — Polychrome Shelters on the Ridge",
   lat:34.9120, lng:-119.1550,
   type:"Polychrome Pictographs — K-locale",
   brms:"26 BRMs across 11 stations · 29+ cupules · Surface midden with burnt bone & imported Temblor chert",
   viewshed:"4 stations with 5 BRMs intervisible with pictograph shelters",
   desc:"Well into the oak zone, on a mid-ridge slope near a spring. " +
     "BRM stations are dispersed across level <b>sandstone-shelf terraces</b>. Surface midden with burnt bone and imported <b>Temblor chert</b> (Late Period point). " +
     "Below the midden, sandstone formations contain <b>two shelters with polychrome pictographs</b>. " +
     "The pounding of acorns at Station 3 would have <b>thumped audibly into Shelter A beneath</b> — a visceral connection between daily labor and the painted surfaces.",
   src:"Robinson 2010; Robinson 2006",
   culture:"Hulkuhku / Emigdiano Chumash", size:11},

  {name:"Chimney Springs — Oak Terrace Monolith",
   lat:34.9250, lng:-119.1350,
   type:"Red Curvilinear Pictographs — K-locale",
   brms:"18 BRMs across 7 stations · 3 cupules",
   viewshed:"6 stations with 17 BRMs within cumulative viewshed · Entire central area visible",
   desc:"A grassy terrace surrounded by oaks, above a creek and near a spring. " +
     "Two pictograph panels in red curvilinear style on a <b>central sandstone monolith</b>. " +
     "The <b>entire central area</b> is within the cumulative viewshed of both panels — 6 stations with 17 BRMs intervisible. " +
     "Asphaltum-covered rocks suggest basketry-making on-site; bunchgrasses and reeds provided raw material. Cooking activity also documented.",
   src:"Robinson 2010",
   culture:"Hulkuhku / Emigdiano Chumash", size:11},

  {name:"Pinwheel Cave — Ridge-Crest Complex",
   lat:34.8950, lng:-119.0900,
   type:"Red Pictographs — K-locale",
   brms:"19 BRMs across 8 stations · 12+ cupules",
   viewshed:"6 stations with 12 BRMs intervisible with outcrop and Shelter 1",
   desc:"The site with the <b>greatest physical separation between BRMs and rock art</b> of all K-locales mapped. " +
     "BRM complex lines a ridge-crest with expansive views northwest. Oak woodland surrounds <b>Pinwheel Cave</b> to the south. " +
     "Despite the distance, 6 stations with 12 BRMs remain intervisible. " +
     "Robinson & Sturt (2008) confirmed <b>Late Period and Historical occupation</b> from midden directly under the pictographs.",
   src:"Robinson 2010; Robinson & Sturt 2008",
   culture:"Hulkuhku / Emigdiano Chumash", size:11},

  {name:"Pebble — BRM K-locale with Pictographs",
   lat:34.9100, lng:-119.1480,
   type:"Pictographs — K-locale",
   brms:"18+ BRMs in immediate vicinity",
   viewshed:"Pictographs and BRMs share host-rock at largest station",
   desc:"One of the named K-locales where pictographs and BRM stations share the same host-rock. " +
     "Robinson documented that at 5 of 7 intensively mapped sites, paintings were on the <b>same rock as the largest BRM station</b> — the most-used food processing feature bearing the art.",
   src:"Robinson 2010",
   culture:"Hulkuhku / Emigdiano Chumash", size:10},

  // === CORRIDOR SITES (without large BRM concentrations) ===
  {name:"Salt Creek Pictographs",
   lat:34.9300, lng:-119.1500,
   type:"Pictographs — Corridor Site",
   brms:"Near 8 BRM stations (18 BRMs + grinding slick)",
   viewshed:"Along major internal corridor of central Pleitito drainage",
   desc:"Close to a number of BRM sites but not an independent K-locale. Positioned on a <b>major internal corridor</b>. " +
     "Part of Robinson's finding that <b>15 of 17 pictograph sites</b> are prominently positioned within the experienced Hulkuhku landscape.",
   src:"Robinson 2010",
   culture:"Hulkuhku / Emigdiano Chumash", size:9},

  {name:"San Emigdio Isolate — Canyon Conduit",
   lat:34.9000, lng:-119.1500,
   type:"Single-Element Pictograph — Canyon Conduit",
   brms:"None in immediate vicinity",
   viewshed:"On conspicuous boulder along major conduit of San Emigdio Canyon",
   desc:"A <b>single-element pictograph</b> on a conspicuous boulder along San Emigdio Canyon — one of three primary routes into Hulkuhku territory. " +
     "Visible to anyone traveling the canyon, but isolated from the main K-locale network.",
   src:"Robinson 2010",
   culture:"Hulkuhku / Emigdiano Chumash", size:9},

  {name:"Letter Cave", lat:34.9170, lng:-119.1420,
   type:"Pictographs — Near Pond K-locale",
   brms:"Within 1.5–3 km of Pond (largest BRM concentration)",
   viewshed:"Heart of highest site density · On central Pleitito corridor",
   desc:"One of three pictograph sites (with Lizard Cave and Echo) clustered near <b>Pond</b>. Together they sit in the <b>densest archaeological zone</b> on the Preserve.",
   src:"Robinson 2010", culture:"Hulkuhku / Emigdiano Chumash", size:9},

  {name:"Lizard Cave", lat:34.9175, lng:-119.1440,
   type:"Pictographs — Near Pond K-locale",
   brms:"Within 1.5–3 km of Pond",
   viewshed:"Clustered with Letter Cave and Echo",
   desc:"Part of the Letter–Lizard–Echo cluster, demonstrating rock art was <b>positioned within the normal orbit of Hulkuhku land-use</b>.",
   src:"Robinson 2010", culture:"Hulkuhku / Emigdiano Chumash", size:9},

  {name:"Echo", lat:34.9160, lng:-119.1380,
   type:"Pictographs — Near K-locale",
   brms:"~1 km downstream from K-locale with 30 BRMs",
   viewshed:"Within dense site network of central Pleitito",
   desc:"Less than a kilometer from a K-locale with 30 BRMs. Part of the Letter–Lizard–Echo cluster.",
   src:"Robinson 2010", culture:"Hulkuhku / Emigdiano Chumash", size:9},

  // === BLACK-LINEAR OUTLIERS ===
  {name:"Lost Canyon — Black-Linear Outlier",
   lat:34.8900, lng:-119.1800,
   type:"Black-Linear Pictographs — Outlier",
   brms:"Outside primary areas of usage",
   viewshed:"May represent different land-use practices or time periods",
   desc:"One of two sites <b>outside the primary Hulkuhku land-use pattern</b>. Exclusively <b>black-linear pictographs</b> — distinct from the red/polychrome styles. " +
     "Robinson suggested these may be associated with different land-use practices and possibly different time periods.",
   src:"Robinson 2010", culture:"Hulkuhku / Emigdiano Chumash (or earlier)", size:9},

  {name:"Lonely Pine — Black-Linear Outlier",
   lat:34.8880, lng:-119.0800,
   type:"Black-Linear Pictographs — Outlier",
   brms:"Outside primary areas of usage",
   viewshed:"Difficult access area",
   desc:"The second outlier site with exclusively black-linear pictographs. In more difficult terrain. " +
     "Their exclusion from the main pattern actually strengthens Robinson's argument: the 15 sites within the normal pattern are all at K-locales, corridors, or pathways.",
   src:"Robinson 2010", culture:"Hulkuhku / Emigdiano Chumash (or earlier)", size:9}
];

// --- Add pictograph sites to layer ---
hulkuhkuPictoSites.forEach(s => {
  const sz = s.size || 10;
  const icon = sz >= 12 ? L.divIcon({className:'', iconSize:[sz+1,sz+1], iconAnchor:[(sz+1)/2,(sz+1)/2],
    html:`<div style="width:${sz+1}px;height:${sz+1}px;border-radius:50%;background:rgba(255,111,0,0.3);border:2.5px solid ${HULK_COLOR};box-shadow:0 0 7px ${HULK_COLOR}66;"></div>`})
    : L.divIcon({className:'', iconSize:[10,10], iconAnchor:[5,5],
    html:`<div style="width:10px;height:10px;border-radius:50%;background:rgba(255,111,0,0.25);border:2px solid ${HULK_COLOR};"></div>`});

  const popup = `
    <div style="max-width:440px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:${HULK_COLOR};margin:0 0 2px;font-size:14px;">\u{1F3A8} ${s.name}</h4>
      <div style="font-size:10px;color:#aaa;margin-bottom:6px;">${s.type} \u00B7 ${s.culture}</div>
      <div style="font-size:12px;color:#ccc;line-height:1.55;">${s.desc}</div>
      <div style="margin-top:8px;padding:8px;background:rgba(255,111,0,0.08);border-left:3px solid ${HULK_COLOR};border-radius:0 4px 4px 0;">
        <div style="font-size:11px;color:#FFAB40;font-weight:600;margin-bottom:3px;">\u{1F4CA} GIS Landscape Data (Robinson 2010)</div>
        <div style="font-size:11px;color:#bbb;line-height:1.5;">
          <b>BRMs:</b> ${s.brms}<br>
          <b>Viewshed:</b> ${s.viewshed}
        </div>
      </div>
      <div style="margin-top:6px;font-size:10px;color:#888;">Sources: ${s.src}</div>
    </div>`;

  L.marker([s.lat, s.lng], {icon}).addTo(L_groups.hulkuhkuPicto).bindPopup(popup, {maxWidth:460});
});


// ================================================================
// 2. ETHNOHISTORIC HULKUHKU VILLAGES
// ================================================================

const hulkuhkuVillages = [
  {name:"Matapuan", lat:34.9350, lng:-119.1900,
   desc:"Western village near a major canyon mouth. Robinson found the <b>closest pictograph site was almost 0.5 km away</b> despite rock formations being present. " +
     "This absence of art at villages is key: rock art was positioned at seasonal backcountry K-locales, not permanent settlements."},
  {name:"Tashlipun", lat:34.9450, lng:-119.1500,
   desc:"Central village near San Emigdio Canyon mouth. The cost-surface path from Tashlipun to Chimney rock art site passes through or near <b>nine archaeological sites</b>, " +
     "including Pond — showing how tightly pictographs were integrated into internal movement networks."},
  {name:"Tecuya", lat:34.9200, lng:-119.0650,
   desc:"Eastern village at Grapevine Canyon. Especially high BRM concentrations nearby, but Robinson identified it as a <b>political center rather than acorn gathering site</b>. " +
     "Anchored the southeast approach connecting Hulkuhku to southerly Chumash communities."}
];

hulkuhkuVillages.forEach(v => {
  L.marker([v.lat, v.lng], {icon:hulkVillageIcon}).addTo(L_groups.hulkuhkuVillages).bindPopup(`
    <div style="max-width:400px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:${HULK_VILLAGE};margin:0 0 2px;font-size:14px;">\u{1F3D8}\u{FE0F} ${v.name}</h4>
      <div style="font-size:10px;color:#aaa;margin-bottom:6px;">Ethnohistoric Hulkuhku Village \u00B7 Wind Wolves Preserve</div>
      <div style="font-size:12px;color:#ccc;line-height:1.55;">${v.desc}</div>
      <div style="margin-top:6px;font-size:10px;color:#888;">Sources: Robinson 2010; Merriam 1967; Kroeber 1925</div>
    </div>`, {maxWidth:420});
});


// ================================================================
// 3. HULKUHKU TERRITORY POLYGON
// ================================================================
L.polygon([
  [35.00,-119.25],[35.00,-119.05],[34.95,-118.95],[34.90,-118.95],
  [34.85,-119.00],[34.83,-119.10],[34.85,-119.20],[34.90,-119.25],[35.00,-119.25]
], {
  color: HULK_COLOR, weight:2, opacity:0.6,
  fillColor: HULK_COLOR, fillOpacity:0.06, dashArray:'6,4'
}).addTo(L_groups.hulkuhkuTerritory).bindPopup(`
  <div style="max-width:460px;font-family:'Source Sans Pro',sans-serif;">
    <h4 style="color:${HULK_COLOR};margin:0 0 4px;font-size:14px;">Hulkuhku / Emigdiano Chumash Territory</h4>
    <div style="font-size:10px;color:#aaa;margin-bottom:6px;">San Emigdio Hills \u00B7 Wind Wolves Preserve \u00B7 Kern County, CA</div>
    <div style="font-size:12px;color:#ccc;line-height:1.55;">
      The interior Chumash group documented as <b><i>hulkuhku</i></b> or <b><i>Hool'-koo-koo</i></b> by Merriam (1967). 
      The term <i>kuhku</i> means "people" in some Chumash dialects; <i>Hulkuhku</i> is an external designation meaning roughly "over there people." 
      "Emigdiano" is a Spanish appellation — Robinson uses the Indigenous term.<br><br>
      Territory at the convergence of the <b>Transverse Ranges, Coast Ranges, Sierra Mountains, and Western Mojave</b>. 
      Robinson's survey documented <b>106 sites</b>: 70 (66%) had bedrock mortars. 17 pictograph sites found.<br><br>
      <b>Key finding:</b> Pictographs were not at villages, not on external routes, but integrated into the internal seasonal landscape — 
      at K-locales where the most important subsistence activity of the yearly round took place.
    </div>
    <div style="margin-top:8px;padding:8px;background:rgba(255,111,0,0.08);border-left:3px solid ${HULK_COLOR};border-radius:0 4px 4px 0;">
      <div style="font-size:11px;color:#FFAB40;font-weight:600;margin-bottom:3px;">\u{1F52C} Robinson's Three-Scale Analysis</div>
      <div style="font-size:11px;color:#bbb;line-height:1.5;">
        <b>1. At villages?</b> No \u2014 no pictographs at Matapuan, Tashlipun, or Tecuya<br>
        <b>2. On external routes?</b> Only 2 of 17 on major conduits \u2014 not boundary markers<br>
        <b>3. In internal movement?</b> Yes \u2014 15 of 17 integrated into daily landscape<br><br>
        <b>Seasonal round:</b> Winter villages \u2192 dispersal \u2192 acorn harvest \u2192 K-locale aggregation \u2192 return
      </div>
    </div>
    <div style="margin-top:6px;font-size:10px;color:#888;">Sources: Robinson 2010; Merriam 1967; Kroeber 1925</div>
  </div>`, {maxWidth:460});


// ================================================================
// 4. SEASONAL MOVEMENT CORRIDORS
// ================================================================
const corridors = [
  {name:"Santiago Canyon Corridor",
   coords:[[34.93,-119.17],[34.91,-119.18],[34.89,-119.20],[34.87,-119.22]],
   desc:"Western approach. GIS cost-surface routes from the southwest (Quatal Canyon) converge through Santiago. Modern Preserve roads follow this traditional corridor."},
  {name:"San Emigdio Canyon Corridor",
   coords:[[34.94,-119.15],[34.92,-119.15],[34.90,-119.15],[34.88,-119.16]],
   desc:"Central approach. The San Emigdio isolate pictograph sits conspicuously along this route. Routes from the south (Lockwood Valley) converge here."},
  {name:"Grapevine Canyon Corridor",
   coords:[[34.92,-119.07],[34.90,-119.05],[34.88,-119.03],[34.86,-119.02]],
   desc:"Southeast approach connecting to the Tejon area and Ventureño Chumash territories beyond."}
];

corridors.forEach(c => {
  L.polyline(c.coords, {color:HULK_CORRIDOR, weight:3, opacity:0.5, dashArray:'8,6'
  }).addTo(L_groups.hulkuhkuCorridors).bindPopup(`
    <div style="max-width:360px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:${HULK_CORRIDOR};margin:0 0 4px;">\u{1F6E4}\u{FE0F} ${c.name}</h4>
      <div style="font-size:12px;color:#ccc;line-height:1.5;">${c.desc}</div>
      <div style="margin-top:6px;font-size:10px;color:#888;">Sources: Robinson 2010; Horne 1981; Johnson 1978, 2000</div>
    </div>`, {maxWidth:380});
});


// ================================================================
// 5. COSO PETROGLYPHS — COMPETING INTERPRETATIONS (Whitley 1982)
// ================================================================
L.marker([35.95,-117.70], {icon:L.divIcon({className:'', iconSize:[16,16], iconAnchor:[8,8],
  html:'<div style="width:16px;height:16px;border-radius:50%;background:rgba(255,112,67,0.2);border:2.5px solid #FF7043;box-shadow:0 0 8px #FF704366;"></div>'})
}).addTo(L_groups.greatBasinRockArt).bindPopup(`
  <div style="max-width:460px;font-family:'Source Sans Pro',sans-serif;">
    <h4 style="color:#FF7043;margin:0 0 2px;font-size:14px;">\u{1F4D6} Coso Petroglyphs \u2014 Competing Interpretations</h4>
    <div style="font-size:10px;color:#aaa;margin-bottom:8px;">Bighorn Sheep Symbolism Debate \u00B7 Three Major Hypotheses</div>
    <div style="font-size:12px;color:#ccc;line-height:1.55;">
      The Coso Range's 100,000+ petroglyphs \u2014 dominated by <b>bighorn sheep imagery</b> \u2014 have generated one of the most important interpretive debates in North American rock art studies:
    </div>
    <div style="margin-top:10px;padding:10px;background:rgba(211,47,47,0.08);border-left:3px solid #EF5350;border-radius:0 4px 4px 0;">
      <div style="font-size:12px;color:#EF5350;font-weight:700;margin-bottom:4px;">1. Hunting Cult (Heizer & Baumhoff 1962; Grant 1968)</div>
      <div style="font-size:11px;color:#bbb;line-height:1.5;">
        Heizer & Baumhoff proposed petroglyphs were <b>rituals to ensure successful hunts</b>. 
        Grant extended this into a formalized <b>bighorn sheep hunting cult</b> (ca. A.D. 300\u20131000) with ceremonial practices and communal hunts. 
        His termination date was admittedly arbitrary.
      </div>
    </div>
    <div style="margin-top:8px;padding:10px;background:rgba(255,183,77,0.08);border-left:3px solid #FFB74D;border-radius:0 4px 4px 0;">
      <div style="font-size:12px;color:#FFB74D;font-weight:700;margin-bottom:4px;">2. Masculine Symbolism (Whitley 1982)</div>
      <div style="font-size:11px;color:#bbb;line-height:1.5;">
        Whitley analyzed <b>Western Shoshone origin myths</b> from 12 regional groups (Lowie 1909; Steward 1936, 1943). 
        In these myths, Coyote must kill a bighorn sheep and use its <b>neckbone as a phallic implement</b> to overcome a "toothed vagina" obstacle and populate the world. 
        Coyote had already proven himself a capable provider, but <b>only killing bighorn sheep</b> gave the power for male virility.<br><br>
        Whitley argued bighorn sheep = <b>generalized symbol of male success</b> in hunting and sexual domains, not a formal cult. 
        Supporting evidence: (1) Steward noted <b>no ceremonial remnants</b> in the Coso region; (2) geographic distribution of the myth matches Great Basin rock art distribution; 
        (3) sheep imagery <b>continued into the historic period</b> (horses, wheeled carts); (4) excavations at 5 Coso sites found <b>little or no sheep hunting</b> evidence.
      </div>
    </div>
    <div style="margin-top:8px;padding:10px;background:rgba(126,87,194,0.08);border-left:3px solid #9575CD;border-radius:0 4px 4px 0;">
      <div style="font-size:12px;color:#9575CD;font-weight:700;margin-bottom:4px;">3. Shamanic Vision Quest (Whitley 1998, 2000)</div>
      <div style="font-size:11px;color:#bbb;line-height:1.5;">
        In later work, Whitley proposed petroglyphs were created by shamans during <b>altered states of consciousness</b>, 
        with bighorn sheep as spirit helpers and pattern-bodied anthropomorphs as the shaman's transformed trance body. 
        Influential but contested \u2014 Quinlan (2000a, 2000b) criticized over-reliance on neuropsychological universals.
      </div>
    </div>
    <div style="margin-top:8px;padding:10px;background:rgba(0,131,143,0.08);border-left:3px solid #00838F;border-radius:0 4px 4px 0;">
      <div style="font-size:12px;color:#00838F;font-weight:700;margin-bottom:4px;">Methodological Note</div>
      <div style="font-size:11px;color:#bbb;line-height:1.5;">
        Whitley (1982) advocated an <b>"iconographical" approach</b> (following Panofsky) relating motifs to broad symbolic themes across groups, 
        rather than matching specific myths to specific sites. The persistence of oral traditions over millennia 
        and the myth's distribution across 12 Great Basin groups suggest bighorn sheep symbolism operated at a deep cultural level.
      </div>
    </div>
    <div style="margin-top:6px;font-size:10px;color:#888;">Sources: Heizer & Baumhoff 1962; Grant 1968, 1980; Whitley 1982, 1998, 2000; Lowie 1909; Steward 1936, 1943; Quinlan 2000a, 2000b</div>
  </div>`, {maxWidth:480});


// ================================================================
// 6. ROBINSON KEY FINDING — Summary Marker
// ================================================================
L.marker([34.91,-119.13], {icon:L.divIcon({className:'', iconSize:[18,18], iconAnchor:[9,9],
  html:'<div style="width:18px;height:18px;border-radius:50%;background:rgba(255,111,0,0.15);border:3px solid #FF6F00;box-shadow:0 0 10px #FF6F0044;display:flex;align-items:center;justify-content:center;"><div style="width:6px;height:6px;background:#FF6F00;border-radius:50%;"></div></div>'})
}).addTo(L_groups.hulkuhkuPicto).bindPopup(`
  <div style="max-width:460px;font-family:'Source Sans Pro',sans-serif;">
    <h4 style="color:${HULK_COLOR};margin:0 0 2px;font-size:15px;">\u{1F52C} Robinson 2010: "Land Use, Land Ideology"</h4>
    <div style="font-size:10px;color:#aaa;margin-bottom:8px;">American Antiquity 75(4):792\u2013818 \u00B7 GIS Landscape Analysis</div>
    <div style="font-size:12px;color:#ccc;line-height:1.55;">
      Robinson's GIS analysis produced a landmark finding: pictographs were <b>not private shamanic retreats</b> but were deeply integrated into the most economically important places. 
      The art was at <b>K-locales</b> where multiple family groups reconvened for intensive acorn processing. 
      Viewshed analyses of 7 sites: <b>256 individual BRMs across 44 stations</b> intervisible with pictographs. 
      At 5 of 7 sites, paintings were on the <b>same rock as the largest BRM station</b>.
    </div>
    <div style="margin-top:10px;padding:10px;background:rgba(255,111,0,0.08);border-left:3px solid ${HULK_COLOR};border-radius:0 4px 4px 0;">
      <div style="font-size:12px;color:#FFAB40;font-weight:700;margin-bottom:4px;">\u{1F469} Women, Labor & Ideological Media</div>
      <div style="font-size:11px;color:#bbb;line-height:1.5;">
        California ethnography associates BRM stations with <b>women's labor</b> \u2014 women prepared acorns and sometimes held personal ownership of stations (Jackson 1991). 
        During the autumnal harvest, <b>virtually the entire population</b> would have been at these K-locales. 
        Robinson concluded subsistence and symbolic practices were <b>conjoined at the most important economic places</b> \u2014 
        an ideology linked to the control of resources and labor.
      </div>
    </div>
    <div style="margin-top:8px;padding:10px;background:rgba(0,131,143,0.08);border-left:3px solid #00838F;border-radius:0 4px 4px 0;">
      <div style="font-size:12px;color:#00838F;font-weight:700;margin-bottom:4px;">\u{1F5FA}\u{FE0F} Challenging Whitley's "Private Shamanic" Model</div>
      <div style="font-size:11px;color:#bbb;line-height:1.5;">
        Whitley (2000a) argued rock art sites were <b>shamans' private cache sites</b> avoided by the public. 
        Robinson's evidence directly contradicts this: the art was at the <b>most public, most frequented</b> economic sites. 
        Pendergraft (2007) found similar patterns in the Great Basin.
      </div>
    </div>
    <div style="margin-top:6px;font-size:10px;color:#888;">Sources: Robinson 2010; Jackson 1984, 1991; Whitley 2000a; Quinlan & Woody 2003; Pendergraft 2007; Ingold 1993</div>
  </div>`, {maxWidth:480});
