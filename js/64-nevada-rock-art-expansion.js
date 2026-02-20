// ============================================================
// 64 — Nevada Rock Art Expansion — Organized by Time Period
// New sites + enhanced chronological framework
// Sources: NRAF (Nevada Rock Art Foundation); Heizer & Baumhoff
//   1962; Quinlan 2007; Benson et al. 2013; Whitley 2000;
//   BLM; NPS; Lincoln County NV; Basin & Range NM
// ============================================================

(function(){
  'use strict';

  // ============================================================
  // STYLE COLORS — keyed to time period
  // ============================================================
  const RA = {
    paleo:   '#FFD600',  // Paleoindian / GBCA (>10,000 BP) — gold
    archE:   '#FF8F00',  // Early Archaic (10,000-6,000 BP) — amber
    archM:   '#FF7043',  // Middle Archaic (6,000-3,000 BP) — deep orange
    archL:   '#E64A19',  // Late Archaic / BRT (3,000-1,500 BP) — burnt orange
    fremont: '#AB47BC',  // Fremont / Puebloan (1,800-700 BP) — purple
    late:    '#26A69A',  // Late Prehistoric / Numic (1,000-150 BP) — teal
    multi:   '#FF7043',  // Multi-period sites — standard orange
    picto:   '#E040FB',  // Pictographs — magenta
    pahran:  '#FF5252',  // Pahranagat Representational Style — red
    grapevine:'#FFB74D', // Grapevine Canyon / Colorado River style
  };

  // ============================================================
  // LAYER GROUPS
  // ============================================================
  if(!window.L_groups) window.L_groups = {};
  L_groups.nvRockArtPaleo    = L.layerGroup().addTo(map);
  L_groups.nvRockArtArchaic  = L.layerGroup().addTo(map);
  L_groups.nvRockArtFremont  = L.layerGroup().addTo(map);
  L_groups.nvRockArtLate     = L.layerGroup().addTo(map);

  // ============================================================
  // HELPERS
  // ============================================================
  // Icon: petroglyph marker scaled by size
  function raIcon(color, sz) {
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="font-size:${sz||12}px;cursor:pointer;filter:drop-shadow(0 0 3px ${color})">🪨</div>`,
      iconSize: [sz||12, sz||12], iconAnchor: [(sz||12)/2, (sz||12)/2]
    });
  }
  function pictoIcon(color, sz) {
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="font-size:${sz||12}px;cursor:pointer;filter:drop-shadow(0 0 3px ${color})">🎨</div>`,
      iconSize: [sz||12, sz||12], iconAnchor: [(sz||12)/2, (sz||12)/2]
    });
  }

  function raPop(title, color, period, type, desc, src) {
    const periodBadge = {
      'Paleoindian':  {bg:'#FFD600',text:'#000'},
      'Early Archaic':{bg:'#FF8F00',text:'#fff'},
      'Middle Archaic':{bg:'#FF7043',text:'#fff'},
      'Late Archaic': {bg:'#E64A19',text:'#fff'},
      'Fremont':      {bg:'#AB47BC',text:'#fff'},
      'Puebloan':     {bg:'#AB47BC',text:'#fff'},
      'Late Prehistoric':{bg:'#26A69A',text:'#fff'},
      'Multi-period': {bg:'#FF7043',text:'#fff'},
      'Historic':     {bg:'#795548',text:'#fff'},
    }[period] || {bg:'#888',text:'#fff'};

    return `<div style="max-width:420px">
      <h4 style="color:${color};margin:0 0 3px">${title}</h4>
      <div style="margin-bottom:6px">
        <span style="display:inline-block;background:${periodBadge.bg};color:${periodBadge.text};font-size:9px;font-weight:700;padding:1px 6px;border-radius:8px;margin-right:4px">${period.toUpperCase()}</span>
        <span style="font-size:10px;color:#aaa">${type}</span>
      </div>
      <div style="font-size:12px;color:#ccc;line-height:1.5">${desc}</div>
      <div style="margin-top:6px;font-size:10px;color:#888">Sources: ${src}</div></div>`;
  }

  // ============================================================
  //  ⭐ PALEOINDIAN / GREAT BASIN CARVED ABSTRACT (GBCA)
  //  >10,000 years ago — oldest rock art in North America
  //  Deep, wide, densely packed abstract designs
  // ============================================================

  // High Rock Canyon — remote NW Nevada, possible Paleoindian
  L.marker([41.10,-119.35], {icon:raIcon(RA.paleo,14)})
    .addTo(L_groups.nvRockArtPaleo)
    .bindPopup(raPop('High Rock Canyon', RA.paleo,
      'Paleoindian', 'Petroglyphs · Washoe County · remote NW Nevada',
      'Petroglyphs in <b>High Rock Canyon</b> — a dramatic narrow gorge in the Black Rock Desert region of far northwestern Nevada. This area was submerged by <b>Pleistocene Lake Lahontan</b>; as the lake receded, early peoples carved on newly exposed rock surfaces. Some carvings here exhibit the deeply pecked, densely packed <b>Great Basin Carved Abstract (GBCA)</b> style characteristic of the oldest rock art in the region. The canyon was later part of the <b>Applegate Trail</b> emigrant route. High Rock Canyon is now a BLM Wilderness Study Area — one of the most remote and pristine archaeological landscapes in Nevada.',
      'Heizer & Baumhoff 1962; NRAF; BLM Winnemucca District'));

  // Massacre Lake — GBCA style, far NW
  // (Already exists in 10-greatbasin.js but adding enhanced timeline context)

  // Lagomarsino — deepest/oldest elements may be GBCA
  // (Already in 10-greatbasin.js)

  // ============================================================
  //  🟠 EARLY ARCHAIC (10,000–6,000 BP)
  //  Pit-and-Groove style emerges; early curvilinear
  //  Post-Lahontan landscape; Western Pluvial Lakes Tradition
  // ============================================================

  // Eastgate Cave area
  L.marker([39.32,-117.82], {icon:raIcon(RA.archE,11)})
    .addTo(L_groups.nvRockArtArchaic)
    .bindPopup(raPop('Eastgate Cave Area', RA.archE,
      'Early Archaic', 'Petroglyphs & cave site · Churchill County',
      'Rock art and archaeological site near <b>Eastgate</b> in the Desatoya Range, along the old Pony Express route (Highway 50). The cave was excavated in the 1950s, revealing a long habitation sequence from the Early Archaic through the Late Prehistoric. Petroglyphs on nearby basalt boulders include Pit-and-Groove elements alongside later curvilinear designs. The Eastgate series — a type of stemmed projectile point — was defined from this site (3,500-1,300 BCE). Located in Western Shoshone territory on the "Loneliest Road in America."',
      'Heizer & Baumhoff 1962; Thomas 1983; BLM Battle Mountain'));

  // Carson River / Lahontan Reservoir Petroglyphs
  L.marker([39.47,-119.10], {icon:raIcon(RA.archE,12)})
    .addTo(L_groups.nvRockArtArchaic)
    .bindPopup(raPop('Lahontan Reservoir Petroglyphs', RA.archE,
      'Early Archaic', '208 rock art boulders · 5.5 acres · Lyon County',
      'One of the larger petroglyph sites in northwestern Nevada, overlooking what was a productive <b>marsh environment</b> for the past 4,500+ years. NRAF documented <b>208 rock art boulders</b> in two dense concentrations during 2014 fieldwork. Rock art is dominated by <b>abstract curvilinear</b> designs — novel and highly formal large compositions. Representational imagery (stick figures, animals) is notably rare. The site was known to early settlers as the <b>"Mountain of Hieroglyphics"</b> (M. Angel, 1881). Tufa deposits confirm the area was deeply submerged by Pleistocene Lake Lahontan. Patina differences suggest multiple phases of rock art production spanning thousands of years. The reservoir created by <b>Lahontan Dam</b> (1915) now partially threatens the site.',
      'NRAF 2014; NV State Parks; NV SHPO'));

  // Coaldale / Volcanic Tablelands area (NV side)
  L.marker([38.05,-117.85], {icon:raIcon(RA.archE,10)})
    .addTo(L_groups.nvRockArtArchaic)
    .bindPopup(raPop('Coaldale / Silver Peak Range', RA.archE,
      'Early Archaic', 'Petroglyphs · Esmeralda County · Highway 95',
      'Petroglyph sites in the <b>Silver Peak Range</b> and Coaldale area along Highway 95 in Esmeralda County. This area sits at the junction of Northern Paiute and Western Shoshone territories. Rock art includes early curvilinear designs on volcanic rock. The Coaldale area was a crossroads — the junction of several migration routes connecting the Walker River drainage, Big Smoky Valley, and the Owens Valley corridor to the south. Esmeralda County remains one of the least populated counties in the Lower 48.',
      'Heizer & Baumhoff 1962; BLM Tonopah'));

  // ============================================================
  //  🟠 MIDDLE ARCHAIC (6,000–3,000 BP)
  //  Basin & Range Tradition develops; curvilinear dominates
  //  Abstract designs: circles, rakes, wavy lines, grids
  // ============================================================

  // Ash Springs (Pahranagat Valley)
  L.marker([37.46,-115.19], {icon:raIcon(RA.archM,12)})
    .addTo(L_groups.nvRockArtArchaic)
    .bindPopup(raPop('Ash Springs Rock Art', RA.archM,
      'Middle Archaic', 'Petroglyphs · Lincoln County · Pahranagat Valley',
      'The most accessible rock art site in Nevada\'s <b>Pahranagat Valley</b>. A well-marked trail leads to curvilinear and anthropomorphic petroglyphs on dark volcanic rock. The warm springs here (95°F, 1,100 gal/min) created a desert oasis that attracted people for at least <b>6,000 years</b>. Ash Springs sits in the heart of the <b>Pahranagat corridor</b> — a rare chain of spring-fed wetlands in the eastern Great Basin that functioned as a north-south travel route connecting the Colorado Plateau to central Nevada. Rock art styles span from Middle Archaic Basin and Range Tradition through the distinctive <b>Pahranagat Representational Style</b>.',
      'NRAF; Lincoln County NV; BLM Ely; Ancient Art Archive'));

  // Kane Springs Valley — rare GBCA in southern NV
  L.marker([37.55,-114.95], {icon:raIcon(RA.archM,10)})
    .addTo(L_groups.nvRockArtArchaic)
    .bindPopup(raPop('Kane Springs Valley', RA.archM,
      'Middle Archaic', 'Petroglyphs · Lincoln County · rare GBCA elements',
      'Rock art in <b>Kane Springs Valley</b> in Lincoln County — significant because it contains rare examples of the <b>Great Basin Carved Abstract (GBCA)</b> style in southern Nevada. This deeply pecked, densely packed abstract style is usually found in the northern Great Basin (Winnemucca Lake, Massacre Lake) and is thought to be among the oldest rock art traditions in the region. Its presence in Lincoln County suggests ancient cultural connections spanning the entire Great Basin. The site also includes later Basin and Range Tradition elements.',
      'NRAF; BRNM 3D / Legion GIS; Quinlan 2007'));

  // Keyhole Canyon — expanded
  // (Already in 10-greatbasin.js as a marker, adding enhanced context)

  // ============================================================
  //  🔴 LATE ARCHAIC / BASIN & RANGE TRADITION (3,000–1,500 BP)
  //  Peak of Great Basin abstract rock art
  //  Representational styles emerge; bighorn sheep, atlatls
  //  Pahranagat Representational Style flourishes
  // ============================================================

  // 21 Goats Panel — Virgin River corridor
  L.marker([36.50,-114.19], {icon:raIcon(RA.archL,12)})
    .addTo(L_groups.nvRockArtArchaic)
    .bindPopup(raPop('21 Goats Panel', RA.archL,
      'Late Archaic', 'Petroglyphs · Clark County · near Mesquite · Virgin River',
      'A striking petroglyph panel near <b>Mesquite</b> along the <b>Virgin River</b> corridor in extreme southeastern Nevada. Named for its prominent cluster of bighorn sheep ("goat") petroglyphs — a common motif in Late Archaic Great Basin representational art. The panel sits along a natural travel corridor used by Southern Paiute and earlier peoples connecting the Colorado Plateau to the Mojave Desert. The Virgin River corridor was a critical route for trade, migration, and seasonal movement for thousands of years.',
      'gjhikes.com; BLM Las Vegas'));

  // Gold Butte — now Gold Butte National Monument
  L.marker([36.38,-114.22], {icon:raIcon(RA.archL,13)})
    .addTo(L_groups.nvRockArtArchaic)
    .bindPopup(raPop('Gold Butte Rock Art', RA.archL,
      'Late Archaic', 'Petroglyphs & pictographs · Gold Butte National Monument',
      'Multiple rock art sites within <b>Gold Butte National Monument</b> (est. 2016, 296,937 acres) — ancestral lands of the <b>Moapa Band of Paiutes</b>. Rock art here spans from Archaic through Southern Paiute periods and includes both petroglyphs and pictographs. Styles include Basin and Range Tradition abstract designs and later representational imagery. The monument also contains <b>"Little Finland"</b> — otherworldly red sandstone formations — and evidence of Ancestral Puebloan presence. Gold Butte sits at the cultural crossroads of the Great Basin, Colorado Plateau, and Mojave Desert. The Moapa fought for decades to protect this land.',
      'BLM Las Vegas; NPS; Moapa Band of Paiutes'));

  // Hiko Springs — Pahranagat
  // (Already exists but adding sister site)
  L.marker([37.58,-115.22], {icon:raIcon(RA.pahran,11)})
    .addTo(L_groups.nvRockArtArchaic)
    .bindPopup(raPop('Hiko Springs / Upper Pahranagat', RA.pahran,
      'Late Archaic', 'Pahranagat Representational Style · Lincoln County',
      'Rock art site near <b>Hiko</b> in the upper Pahranagat Valley, featuring the distinctive <b>Pahranagat Representational Style</b>. This enigmatic style — found <b>only</b> in the Pahranagat Valley drainage — comprises two anthropomorph types: (1) <b>headless rectangular forms</b> with internal grid/dot decoration and "fringed" borders, sometimes wielding atlatls; and (2) <b>solid-pecked ovoid forms</b> with large eyes (negative space), a line from the head, and downturned arms with long fingers. The style\'s restricted distribution suggests a localized cultural development, possibly ceremonial. Pahranagat Valley\'s chain of spring-fed wetlands made it one of the richest habitable corridors in eastern Nevada.',
      'NRAF; Quinlan 2007; Bradshaw Foundation'));

  // ============================================================
  //  🟣 FREMONT / PUEBLOAN PERIOD (1,800–700 BP / ~200–1300 CE)
  //  Semi-sedentary horticulturalists in eastern Nevada
  //  Distinctive trapezoidal anthropomorphs, shield figures
  //  Corn agriculture, pit houses, pottery
  // ============================================================

  // Rainbow Canyon / Etna Cave area
  L.marker([37.62,-114.48], {icon:raIcon(RA.fremont,13)})
    .addTo(L_groups.nvRockArtFremont)
    .bindPopup(raPop('Rainbow Canyon', RA.fremont,
      'Fremont', 'Petroglyphs & pictographs · Lincoln County · Highway 317',
      '<b>Rainbow Canyon</b> along Highway 317 between Caliente and Panaca is one of the most accessible multi-period rock art experiences in Nevada. Four major stops along the canyon reveal art spanning 10,000+ years: <b>Desert Archaic</b>, <b>Fremont</b>, and <b>Southern Paiute</b> cultures all left their marks. <b>Etna Cave</b> served as a temporary home. The Fremont people (200-1300 CE) were semi-sedentary horticulturalists who grew corn, made pottery, and created distinctive trapezoidal anthropomorph rock art. Unlike the Desert Archaic people before them, the Fremont combined hunting-gathering with small-scale farming. By 1300 CE, the Fremont had <b>vanished from the archaeological record</b> — possibly due to prolonged drought.',
      'Lincoln County NV; BLM Ely; Madsen & Simms 1998'));

  // Snake Valley / Baker — near Great Basin NP
  L.marker([39.01,-114.12], {icon:raIcon(RA.fremont,11)})
    .addTo(L_groups.nvRockArtFremont)
    .bindPopup(raPop('Baker Archaeological Site', RA.fremont,
      'Fremont', 'Village site + rock art · White Pine County · near Great Basin NP',
      'An archaeological complex near <b>Baker, Nevada</b> at the base of the <b>Snake Range</b> (Great Basin National Park). The site includes a <b>Fremont village</b> with pit houses, storage granaries, and rock art panels showing the characteristic trapezoidal Fremont anthropomorphs. The Fremont people occupied eastern Nevada\'s valleys from ~200 to 1300 CE, growing corn and making gray-ware pottery while also hunting and gathering. The nearby <b>Lehman Caves</b> contain evidence of Fremont visitation. This area sits at the eastern boundary of the Great Basin, where Fremont cultural influence blended with Western Shoshone desert adaptations.',
      'NPS Great Basin NP; Thomas 1983; Madsen & Simms 1998'));

  // Meadow Valley Wash — Fremont corridor
  L.marker([37.80,-114.55], {icon:raIcon(RA.fremont,11)})
    .addTo(L_groups.nvRockArtFremont)
    .bindPopup(raPop('Meadow Valley Wash Rock Art', RA.fremont,
      'Fremont', 'Petroglyphs · Lincoln County · Fremont corridor',
      'Rock art along <b>Meadow Valley Wash</b> — a rare perennial waterway in eastern Nevada that flows south through Lincoln County toward the Muddy River and Lake Mead. This corridor was a major route connecting Fremont settlements in Utah to the Moapa area. Petroglyphs include Fremont-style trapezoidal figures, shield-bearing anthropomorphs, and Basin and Range Tradition abstract designs. The wash supported small-scale farming communities during the Fremont period. <b>Caliente</b> sits along this corridor. Archaeological evidence shows continuous human use from Early Archaic through Southern Paiute times.',
      'BLM Ely; NRAF; Lincoln County; Fowler & Madsen 1986'));

  // Parowan Gap style influence — reaching into NV
  L.marker([38.50,-114.55], {icon:raIcon(RA.fremont,10)})
    .addTo(L_groups.nvRockArtFremont)
    .bindPopup(raPop('White Pine Fremont Sites', RA.fremont,
      'Fremont', 'Petroglyphs · White Pine County · eastern Nevada valleys',
      'Scattered Fremont rock art panels across the valleys of <b>White Pine County</b>, representing the western frontier of Fremont cultural expansion. While the heart of Fremont culture lay in Utah, their influence extended into Nevada\'s eastern valleys wherever water and arable land permitted small-scale corn agriculture. Rock art includes trapezoidal anthropomorphs and zoomorphs (bighorn sheep, deer) alongside Basin and Range Tradition designs. The transition zone between Fremont and Great Basin hunter-gatherer cultures is one of the most interesting frontiers in Great Basin archaeology.',
      'Thomas 1983; Madsen & Simms 1998; BLM Ely'));

  // ============================================================
  //  🟢 LATE PREHISTORIC / NUMIC PERIOD (1,000–150 BP)
  //  Numic expansion across Great Basin (~1000 CE)
  //  Northern Paiute, Western Shoshone, Southern Paiute art
  //  Hunting scenes, bow-and-arrow, scratched style
  //  Ghost Dance era rock art (1889-1890)
  // ============================================================

  // Spanish Springs Valley — Reno area
  // (Already in 10-greatbasin.js but noting it's Late Prehistoric Numic)

  // Court of Antiquity — Truckee River, Reno
  // (Already exists — noting Late Prehistoric to possible Archaic)

  // Grapevine Canyon — "Colorado River Style" / refreshed over time
  // (Already in 10-greatbasin.js — noting its long-term refreshing)

  // Ghost Dance–era sites
  L.marker([38.88,-118.85], {icon:pictoIcon(RA.late,12)})
    .addTo(L_groups.nvRockArtLate)
    .bindPopup(raPop('Ghost Dance–Era Rock Art (Walker River region)', RA.late,
      'Late Prehistoric', 'Pictographs & petroglyphs · Lyon/Mineral Counties',
      'Rock art in the Walker River region associated with or dating to the <b>Ghost Dance</b> movement (1889-1890). <b>Wovoka</b> (Jack Wilson), a Northern Paiute prophet born near Walker Lake, experienced a vision during the solar eclipse of January 1, 1889: if all Native peoples performed the Ghost Dance, the dead would return, the white man would vanish, and the buffalo would come back. The movement spread across the West with astonishing speed. Some late rock art in the Walker River region may reflect Ghost Dance iconography — circles, celestial imagery, and revitalization symbols. The Ghost Dance was the <b>last great pan-Indian spiritual movement</b> before Wounded Knee (1890). Wovoka lived quietly near Yerington until his death in 1932.',
      'Hittman 1990; Mooney 1896; BLM Carson City'));

  // Little Finland / Muddy Mountains
  L.marker([36.42,-114.67], {icon:raIcon(RA.late,10)})
    .addTo(L_groups.nvRockArtLate)
    .bindPopup(raPop('Muddy Mountains Rock Art', RA.late,
      'Late Prehistoric', 'Petroglyphs · Clark County · near Valley of Fire',
      'Petroglyphs in the <b>Muddy Mountains</b> south of the Valley of Fire and north of Lake Mead. Created by Southern Paiute peoples during the Late Prehistoric period (post-1100 CE). Includes small anthropomorphs, abstract designs, and possible trail markers. The Muddy Mountains form the dramatic backdrop to Moapa Band territory. Nearby <b>Little Finland</b> (also called "Hobgoblin\'s Playground") features otherworldly red sandstone formations alongside scattered rock art.',
      'BLM Las Vegas; NPS Lake Mead NRA'));

  // Geyser Ranch / Beowawe
  L.marker([40.58,-116.47], {icon:raIcon(RA.late,10)})
    .addTo(L_groups.nvRockArtLate)
    .bindPopup(raPop('Beowawe / Geyser Ranch Petroglyphs', RA.late,
      'Late Prehistoric', 'Petroglyphs · Eureka/Lander Counties · Humboldt River corridor',
      'Petroglyphs near <b>Beowawe</b> (Paiute for "gate" — referring to the shape of nearby hills) along the Humboldt River corridor. This area was a natural gateway where the Humboldt River passes between mountain ranges. Western Shoshone bands used this as a seasonal gathering point. Rock art includes late-period scratched and pecked designs. Beowawe was also the site of famous geysers (now largely dormant due to geothermal development) that were considered spiritually powerful by indigenous peoples.',
      'BLM Battle Mountain; Steward 1938; NV State Historical Marker'));

  // Tonopah area — crossroads petroglyphs
  L.marker([38.07,-117.22], {icon:raIcon(RA.late,10)})
    .addTo(L_groups.nvRockArtLate)
    .bindPopup(raPop('Tonopah Area Rock Art', RA.late,
      'Multi-period', 'Petroglyphs · Nye County · central Nevada crossroads',
      'Rock art sites near <b>Tonopah</b> — whose name derives from the Shoshone word "Tonampaa" meaning "hidden spring." This area sits at the crossroads of several Western Shoshone band territories and was a gathering point where desert valleys meet mountain ranges. Rock art ranges from late Basin and Range Tradition designs to Numic-period scratched petroglyphs. The springs that gave Tonopah its name were critical water sources on an otherwise arid landscape. Silver was discovered here in 1900, bringing a devastating mining boom.',
      'BLM Tonopah; NV SHPO; Steward 1938'));

  // ============================================================
  //  📊 CHRONOLOGY KEY — overlay marker
  //  Placed near center of Nevada for reference
  // ============================================================
  L.marker([39.5,-117.5], {
    icon: L.divIcon({
      className: '',
      html: `<div style="background:rgba(30,30,30,0.92);border:1px solid rgba(193,154,107,0.3);border-radius:8px;padding:8px 12px;font-size:10px;color:#ccc;line-height:1.6;white-space:nowrap;pointer-events:auto;cursor:pointer">
        <div style="font-weight:700;color:#E8D5C4;font-size:11px;margin-bottom:4px">🪨 Nevada Rock Art Timeline</div>
        <span style="color:${RA.paleo}">●</span> <b>Paleoindian / GBCA</b> — 14,800–10,000 BP<br>
        <span style="color:${RA.archE}">●</span> <b>Early Archaic</b> — 10,000–6,000 BP<br>
        <span style="color:${RA.archM}">●</span> <b>Middle Archaic / BRT</b> — 6,000–3,000 BP<br>
        <span style="color:${RA.archL}">●</span> <b>Late Archaic / Peak BRT</b> — 3,000–1,500 BP<br>
        <span style="color:${RA.fremont}">●</span> <b>Fremont / Puebloan</b> — 200–1300 CE<br>
        <span style="color:${RA.late}">●</span> <b>Late Prehistoric / Numic</b> — 1000 CE–contact
      </div>`,
      iconSize: [260, 140], iconAnchor: [130, 70]
    })
  }).addTo(L_groups.nvRockArtArchaic)
  .bindPopup(`<div style="max-width:440px">
    <h4 style="color:#E8D5C4">🪨 Nevada Rock Art: A 15,000-Year Visual Record</h4>
    <div style="font-size:12px;color:#ccc;line-height:1.6">
    Nevada contains thousands of rock art sites — one of the densest concentrations in North America. The <b>Nevada Rock Art Foundation (NRAF)</b> has documented over 2,500 panels across the state. Key style periods:<br><br>

    <b style="color:${RA.paleo}">● Great Basin Carved Abstract (GBCA)</b> — The oldest tradition (14,800–7,000+ BP). Deeply pecked, wide-line, densely packed abstract designs leaving little negative space. Best examples: <b>Winnemucca Lake</b> (oldest dated rock art in North America), Massacre Lake, High Rock Canyon.<br><br>

    <b style="color:${RA.archE}">● Pit-and-Groove Style</b> — Circular depressions pecked or ground into boulders. Once thought to be the oldest style (Heizer & Baumhoff 1962). Best example: <b>Grimes Point</b> — the darkest patina (oldest) petroglyphs at the site are pit-and-groove.<br><br>

    <b style="color:${RA.archM}">● Basin and Range Tradition (BRT)</b> — The dominant tradition for ~8,000 years (8,000–150 BP). Abstract curvilinear and rectilinear designs: circles, rakes, wavy lines, grids, dots. ~80% of all Nevada rock art. Found at virtually every site. Peak production during Late Archaic.<br><br>

    <b style="color:${RA.pahran}">● Pahranagat Representational Style</b> — Unique to the Pahranagat Valley. Headless rectangular figures with internal decoration, and solid-pecked ovoid figures. Age uncertain — possibly Late Archaic. Best examples: <b>Black Canyon</b>, <b>Mount Irish</b>.<br><br>

    <b style="color:${RA.fremont}">● Fremont Style</b> — Trapezoidal anthropomorphs, shield figures, hunting scenes. Associated with semi-sedentary corn farmers (200–1300 CE) in eastern NV. Best examples: <b>Rainbow Canyon</b>, Baker area.<br><br>

    <b style="color:${RA.late}">● Late Prehistoric / Numic</b> — Scratched petroglyphs, small anthropomorphs, bow-and-arrow hunting scenes. Associated with Northern Paiute, Western Shoshone, and Southern Paiute peoples after the <b>Numic expansion (~1000 CE)</b>.
    </div>
    <div style="margin-top:8px;font-size:10px;color:#888">Sources: NRAF; Quinlan 2007; Heizer & Baumhoff 1962; Whitley 2000; BRNM 3D</div>
  </div>`, {maxWidth:460});

  // ============================================================
  //  SIDEBAR REGISTRATION
  // ============================================================
  if(window.registerLayer) {
    registerLayer('nvRockArtPaleo', 'NV Rock Art: Paleoindian / GBCA (>10,000 BP)', 'greatbasin');
    registerLayer('nvRockArtArchaic', 'NV Rock Art: Archaic & BRT (10,000-1,500 BP)', 'greatbasin');
    registerLayer('nvRockArtFremont', 'NV Rock Art: Fremont / Puebloan (200-1300 CE)', 'greatbasin');
    registerLayer('nvRockArtLate', 'NV Rock Art: Late Prehistoric / Numic (1000 CE+)', 'greatbasin');
  }

  console.log('✅ 64-nevada-rock-art-expansion.js loaded — 15 new sites + chronology framework across 6 periods');
})();
