// ============================================================
// 65 — Da ow aga (Lake Tahoe) Deep Dive
// Washoe homeland · geological history · seasonal cycle
// archaeological sites · water changes · Comstock devastation
// Sources: Washoe Tribe of NV & CA; USFS LTBMU; NRAF;
//   d'Azevedo 1986 (HNAI Vol. 11); Nevers 1976; Lindström
//   1990; Birkeland 1964; Keep Tahoe Blue; Sacred Land Film
// ============================================================

(function(){
  'use strict';

  // ============================================================
  // COLORS
  // ============================================================
  const T = {
    washoe:   '#CE93D8',  // Washoe purple (matches 62)
    sacred:   '#FF80AB',  // sacred sites — pink
    camp:     '#FFA726',  // seasonal camps — amber
    water:    '#29B6F6',  // water features — blue
    fish:     '#4FC3F7',  // fishing sites — light blue
    geo:      '#78909C',  // geological — blue-grey
    loss:     '#EF5350',  // destruction/loss — red
    martis:   '#A1887F',  // Martis culture — brown
    modern:   '#66BB6A',  // modern reclamation — green
  };

  // ============================================================
  // LAYER GROUPS
  // ============================================================
  if(!window.L_groups) window.L_groups = {};
  L_groups.tahoeWashoe   = L.layerGroup().addTo(map);
  L_groups.tahoeLake     = L.layerGroup().addTo(map);
  L_groups.tahoeChange   = L.layerGroup().addTo(map);

  // ============================================================
  // POPUP HELPER
  // ============================================================
  function tp(title, color, sub, desc, src) {
    return `<div style="max-width:440px">
      <h4 style="color:${color};margin:0 0 2px">${title}</h4>
      <div style="font-size:10px;color:#aaa;margin-bottom:6px">${sub}</div>
      <div style="font-size:12px;color:#ccc;line-height:1.5">${desc}</div>
      <div style="margin-top:6px;font-size:10px;color:#888">Sources: ${src}</div></div>`;
  }

  function mkIcon(emoji, sz) {
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="font-size:${sz||14}px;cursor:pointer">${emoji}</div>`,
      iconSize: [sz||14,sz||14], iconAnchor: [(sz||14)/2,(sz||14)/2]
    });
  }

  // ============================================================
  //  💜 DA OW AGA — The Lake polygon
  //  Lake Tahoe outline for context
  // ============================================================
  const tahoeShore = [
    [39.245,-120.195],[39.235,-120.155],[39.225,-120.115],[39.215,-120.085],
    [39.200,-120.060],[39.180,-120.040],[39.155,-120.030],[39.130,-120.020],
    [39.108,-120.005],[39.085,-119.995],[39.060,-119.980],[39.040,-119.970],
    [39.015,-119.960],[38.995,-119.955],[38.975,-119.950],[38.955,-119.945],
    [38.935,-119.945],[38.920,-119.955],[38.905,-119.975],[38.895,-120.000],
    [38.890,-120.030],[38.895,-120.060],[38.905,-120.090],[38.920,-120.105],
    [38.940,-120.105],[38.960,-120.105],[38.975,-120.115],[38.990,-120.120],
    [39.010,-120.130],[39.030,-120.140],[39.055,-120.155],[39.080,-120.165],
    [39.100,-120.175],[39.115,-120.190],[39.130,-120.205],[39.140,-120.215],
    [39.155,-120.215],[39.170,-120.215],[39.185,-120.215],[39.200,-120.210],
    [39.215,-120.205],[39.230,-120.205],[39.245,-120.195]
  ];
  L.polygon(tahoeShore, {
    color: T.washoe, weight: 2.5, opacity: 0.8,
    fillColor: T.water, fillOpacity: 0.12, dashArray: '6,3'
  }).addTo(L_groups.tahoeLake)
  .bindPopup(tp('💜 Da ow aga — Lake Tahoe', T.washoe,
    'Dáʔaw · 6,225 ft · 1,645 ft deep · 191 sq mi · 2 million years old',
    '<b>Da ow aga</b> (Washoe: "edge of lake") is the spiritual and geographic <b>center of the Washoe world</b>. The Washoe have lived here since, in their words, "the beginning." Archaeological evidence confirms at least a <b>12,000-year presence</b>.<br><br><b>The lake itself:</b> Formed ~2 million years ago when the down-faulted block between the Sierra Nevada and Carson Range filled with water. <b>Mt. Pluto</b> erupted, creating a volcanic dam that raised ancient lake levels hundreds of feet above today. During the Pleistocene, glaciers carved Emerald Bay, Cascade Lake, and Fallen Leaf Lake, and repeatedly dammed the <b>Truckee River</b> outlet — sometimes raising the lake 170 meters above modern levels. When ice dams broke, <b>catastrophic jökulhlaups</b> (glacial outburst floods) roared down the Truckee, carrying house-sized boulders as far as Verdi.<br><br>63 streams flow in. Only one — the <b>Truckee River</b> — flows out. The water never reaches the ocean.<br><br>During the mid-Holocene (4,000-7,000 years ago), extended drought dropped the lake <b>below its natural rim</b>, cutting off the Truckee entirely. Submerged trees confirm this ancient low stand. The lake has dropped below its rim again in recent droughts — a haunting echo of that ancient cycle.',
    'USGS; Birkeland 1964; Hyne et al. 1972; Keep Tahoe Blue; Washoe Tribe'));

  // ============================================================
  //  🏔️ WASHOE SEASONAL CYCLE — Life around the lake
  //  The Washoe moved through their territory in an annual round
  //  tied to water, fish, plants, and seasons
  // ============================================================

  // --- SACRED SITES ---

  // Cave Rock (De'ek Wadapush)
  L.marker([39.04,-119.95], {icon:mkIcon('⛰️',16)})
    .addTo(L_groups.tahoeWashoe)
    .bindPopup(tp('⛰️ De\'ek Wadapush — Cave Rock', T.sacred,
      'Sacred site · "Rock Standing Gray" · Washoe spiritual center',
      '<b>Cave Rock</b> (De\'ek Wadapush) is the most sacred site in the Washoe world — described by Washoe Chairman A. Brian Wallace as <i>"one of the linchpins in the cosmology of the tribe."</i> This remnant of an ancient volcano rises dramatically from the southeastern shore. <b>Only trained Washoe medicine people (pooha\'gim) were permitted to go there</b> — it is a place of immense spiritual power where healing ceremonies, vision quests, and prayers were conducted.<br><br>The site was listed as a <b>Traditional Cultural Property</b> on the National Register of Historic Places (1996). In 2003, the Forest Service banned rock climbing after decades of Washoe advocacy. The 9th Circuit upheld the ban in 2007 — a landmark victory for sacred site protection. However, Highway 50\'s tunnel bored directly through Cave Rock in 1931 and 1957, and recreational use continues around it. The Washoe have never fully regained access to their most holy place.<br><br>Paleo-environmental deposits inside the caves record Lake Tahoe\'s changing levels over thousands of years.',
      'Sacred Land Film Project; USFS LTBMU; Washoe Tribe; 9th Circuit 2007'));

  // Meeks Bay (Magulu Watah)
  L.marker([39.04,-120.13], {icon:mkIcon('🏕️',13)})
    .addTo(L_groups.tahoeWashoe)
    .bindPopup(tp('🏕️ Magulu Watah — Meeks Bay', T.camp,
      'Major summer encampment · West shore · Welmelti territory',
      '<b>Meeks Bay</b> (Magulu Watah) was one of the most important Washoe summer gathering sites on the west shore of Lake Tahoe. Families of the <b>Welmelti</b> (northern Washoe) returned to the same campsites year after year — familiar fishing and hunting grounds waited. The bay\'s shallow, warmer waters were ideal for fish traps and spear fishing. The meadows behind the beach provided seeds, roots, and berries.<br><br>Today, the <b>Waší∙šiw Ɂitdéɂ Native American Basket and Arts Festival</b> is held at <b>Meeks Bay Resort</b> each summer — a public celebration of Washoe culture featuring basketry, music, and dance. Meeks Bay Resort is now Washoe-operated, a rare instance of the tribe regaining stewardship of ancestral land at Lake Tahoe.',
      'USFS; Washoe Tribe; Visit Lake Tahoe; d\'Azevedo 1986'));

  // Taylor Creek / Tallac
  L.marker([38.93,-120.06], {icon:mkIcon('🐟',14)})
    .addTo(L_groups.tahoeWashoe)
    .bindPopup(tp('🐟 Taylor Creek / Tallac — Summer Gathering', T.camp,
      'South shore · fishing · Wa She Shu It Deh festival site',
      'The area from <b>Taylor Creek to Camp Richardson</b> was a favorite Washoe summer encampment on the south shore. Taylor Creek — one of the 63 streams feeding Lake Tahoe — provided excellent fishing and supported a lush meadow ecosystem. The Washoe are working to develop a <b>cultural center at Taylor Creek</b>.<br><br>The <b>Tallac Historic Site</b> (National Register) houses the Baldwin Museum\'s Washoe Exhibit, created by the tribe. In autumn, <b>kokanee salmon</b> (introduced in 1944) spawn in Taylor Creek — the USFS provides a viewing area. But for thousands of years before the kokanee, it was <b>Lahontan cutthroat trout</b> and native suckers that the Washoe harvested here.<br><br>Nearby <b>Fallen Leaf Lake</b> — occupying a glacier-carved basin — was also part of the summer gathering territory.',
      'USFS LTBMU; Washoe Tribe; Tallac Historic Site'));

  // Lam Watah Heritage Site
  L.marker([38.96,-119.94], {icon:mkIcon('🪨',14)})
    .addTo(L_groups.tahoeWashoe)
    .bindPopup(tp('🪨 Lam Watah — Washoe Heritage Site', T.camp,
      'Archaeological site · grinding rocks · near Stateline · USFS managed',
      '<b>Lam Watah</b> ("grinding stones by the water") is a publicly accessible archaeological site near Stateline, NV — managed by the US Forest Service. It preserves <b>numerous boulders with grinding depressions</b> (mortars) where Washoe women prepared food during summer months — processing pine nuts, seeds, and dried foods for winter storage. Set in a meadow along a one-mile trail to Nevada Beach.<br><br>A Washoe elder visiting the site said: <i>"Yes, the lake was a sacred place. It is to us yet, even though it is so different today from what it was in our people\'s time."</i><br><br>Another <b>pounding rock</b> site exists near Trout Creek in the middle of South Shore — now surrounded by modern development.',
      'USFS LTBMU; Tahoe Mountain Culture; Chico Enterprise-Record'));

  // Truckee River outlet — fish trap / grinding rock
  L.marker([39.17,-120.14], {icon:mkIcon('🎣',13)})
    .addTo(L_groups.tahoeWashoe)
    .bindPopup(tp('🎣 Truckee River Outlet — Fishing & Grinding', T.fish,
      'Tahoe City · fish traps · grinding rock found 1924',
      'The <b>Truckee River outlet</b> at present-day Tahoe City was a critical Washoe fishing location. The sole outlet of Lake Tahoe, the river funneled fish — especially <b>Lahontan cutthroat trout</b> and suckers — past the narrow gap where the Washoe built fish traps of woven tule and willow. A <b>grinding rock</b> found at the outlet in 1924 by R.H. Watson is now displayed at Heritage Plaza in Tahoe City.<br><br>Today a dam controls the lake level and Truckee River flow. The <b>Gatekeeper\'s Museum</b> in Tahoe City houses a magnificent collection of Native baskets, including Washoe basketry. The museum occupies the site of the original gatekeeper\'s cabin — home of the water master who controlled the dam.',
      'USFS; Gatekeeper\'s Museum; Historical Marker Database'));

  // Emerald Bay
  L.marker([38.95,-120.11], {icon:mkIcon('💎',13)})
    .addTo(L_groups.tahoeLake)
    .bindPopup(tp('💎 Emerald Bay — Glacier-Carved Sacred Bay', T.water,
      'Drowned glacial valley · Fannette Island · Washoe gathering area',
      '<b>Emerald Bay</b> occupies a drowned glacial valley carved during the Ice Ages. A glacier advanced from an ice cap ~6.5 km to the southwest, scouring Eagle Creek valley and depositing lateral moraines that form the bay. <b>Fannette Island</b> — the only island in Lake Tahoe — sits within its waters.<br><br>For the Washoe, Emerald Bay was part of their summer territory. The bay\'s protected waters supported fishing, and the surrounding forests provided game, berries, and medicinal plants. In rare cold years, Emerald Bay has frozen over — the only part of Lake Tahoe that ever ices (the main lake\'s depth and constant motion prevent freezing).',
      'USGS; Earth Magazine; Keep Tahoe Blue'));

  // --- SEASONAL CAMPS (lowland winter) ---

  // Carson Valley winter camps
  L.marker([38.88,-119.75], {icon:mkIcon('🏠',13)})
    .addTo(L_groups.tahoeWashoe)
    .bindPopup(tp('🏠 Carson Valley — Pau Wa Lu Winter Camps', T.camp,
      'Washoe winter territory · lower elevation · Gardnerville/Minden',
      'The <b>Pau Wa Lu</b> (Carson Valley Washoe) spent winters in the Carson Valley east of the Sierra — at lower elevation where snow was manageable. Winter camps of 4-10 families were composed of <b>galais dungal</b> (conical winter houses) built with layers of bark, poles, and brush for insulation. A fire pit sat in the center with a smoke hole in the roof. Doors always faced east to receive the first light.<br><br>Winter camps were located near <b>hot springs</b> that occur in a chain along the eastern Sierra. The Washoe lived off stored pine nuts, seeds, dried meat, and occasionally fresh fish caught through broken ice. The final winter months before spring were the hardest — food stores dwindling, new plants not yet available.<br><br>When snow began to melt, it was time for renewal. Young adults would begin the journey back to <b>Da ow aga</b>. Eventually the majority of the tribe made its way to the sacred lake for the great <b>summer gathering</b>.',
      'Nevers 1976; d\'Azevedo 1986; Tallac Historic Site; Washoe Tribe'));

  // Pine Nut Mountains — fall harvest
  L.marker([39.10,-119.55], {icon:mkIcon('🌲',13)})
    .addTo(L_groups.tahoeWashoe)
    .bindPopup(tp('🌲 Pine Nut Mountains — Fall Harvest', T.camp,
      'Piñon pine nut gathering · sacred sustenance · storage for winter',
      'In autumn, the Washoe moved to the <b>Pine Nut Mountains</b> (Pine Nut Range) east of Carson Valley for the year\'s most critical harvest. <b>Piñon pine nuts</b> were the staple food that sustained the Washoe through winter. Cones were knocked down with long hooked poles, roasted so their sweet oily flesh wouldn\'t become rancid, then shelled and ground into flour using mortars and pestles.<br><br>The Pine Nut harvest was so important that when the <b>General Allotment Act of 1887</b> finally offered the Washoe land, the government offered only pine nut hills — not their beloved lake. The Washoe took them because the sacred Piñon Pines still provided the food that sustained them. But the allotments had no water rights and were unsuitable for homes.<br><br>Today, the <b>Pine Nut Festival</b> continues to celebrate this tradition.',
      'Nevers 1976; d\'Azevedo 1986; Tallac Historic Site'));

  // --- MARTIS CULTURE ---

  // Donner Summit Petroglyphs
  L.marker([39.32,-120.33], {icon:mkIcon('🪨',14)})
    .addTo(L_groups.tahoeWashoe)
    .bindPopup(tp('🪨 Donner Summit Petroglyphs — Martis Culture', T.martis,
      '~2000 BCE–500 CE · 200+ petroglyphs · Style 7 · Donner Pass',
      'The <b>Donner Summit petroglyphs</b> are the most publicly accessible prehistoric rock art in the Lake Tahoe region — <b>200+ images</b> pecked into glaciated granite bedrock using hammerstones, 1,500-4,000+ years ago. Created by the <b>Martis Culture</b> (~2000 BCE–500 CE), the earliest known inhabitants of the high Sierra.<br><br>The Martis left behind petroglyphs, mortars, metates, and basalt projectile points across the northern Sierra. Their rock art is classified as <b>Style 7: High Sierra Abstract-Representational</b> — circles, spirals, wavy lines, bear tracks, and deer tracks. There are 92+ known Martis petroglyph sites, but most locations are kept confidential to prevent vandalism.<br><br>The Martis hunted with <b>atlatls</b> (spear-throwers) and worked almost exclusively in basalt. When the bow-and-arrow arrived (~500 CE) and the climate grew drier, the Martis vanished. The <b>Kings Beach Complex</b> succeeded them around the lake — possibly ancestral to the Washoe, though the relationship is debated. Donner Summit was later the Washoe corridor between Lake Tahoe and Nevada, and — infamously — the site of the Donner Party\'s 1846 disaster.',
      'Gortner; Donner Summit Historical Society; USFS; Payen 1966; Sierra Rock Art'));

  // ============================================================
  //  📉 ENVIRONMENTAL CHANGES — Loss & Partial Recovery
  // ============================================================

  // Comstock Lode devastation
  L.marker([39.31,-119.65], {icon:mkIcon('⛏️',14)})
    .addTo(L_groups.tahoeChange)
    .bindPopup(tp('⛏️ Virginia City / Comstock Lode — The Devastation', T.loss,
      '1859–1890 · clear-cut entire Tahoe Basin · displaced Washoe',
      'The discovery of silver at <b>Virginia City</b> in 1859 triggered one of the most rapid environmental catastrophes in American history. The <b>entire Lake Tahoe Basin was virtually clear-cut</b> between 1860 and 1890 to fuel mining operations, shore up mine tunnels (using the "square-set timbering" method), and build the booming city. Trees were felled, sawed, and flumed or sledged down to Virginia City.<br><br>For the Washoe, the destruction was total and immediate: from 1848 to 1863, their homeland was overrun by miners, settlers, and entrepreneurs. The fish, game, and plant resources that sustained the seasonal cycle were destroyed. By 1863, the Washoe had been <b>completely driven off their ancestral land</b>. The forests that had taken centuries to grow were gone in 30 years. The land was bought cheaply and resold for hotels and mansions for the wealthy.<br><br>The forests are still recovering 160+ years later.',
      'Legends of America; USFS; Keep Tahoe Blue; Washoe Tribe'));

  // Lahontan cutthroat trout loss
  L.marker([39.17,-120.12], {icon:mkIcon('🐟',13)})
    .addTo(L_groups.tahoeChange)
    .bindPopup(tp('🐟 Lahontan Cutthroat Trout — Extirpation & Return', T.loss,
      'Native fish · up to 4 feet long · extirpated early 1900s · reintroduction 2019',
      'When Frémont reached the Truckee River in 1844, the Paiute brought him <b>Lahontan cutthroat trout</b> up to four feet long — <i>"their flavor was excellent, superior to any fish I have ever known."</i> These fish evolved in <b>Pleistocene Lake Lahontan</b> and survived in Tahoe, Pyramid Lake, and connecting rivers for thousands of years. The Washoe, Paiute, and earlier peoples built their food calendar around the spawning runs.<br><br>Commercial fishing, introduced species (lake trout, rainbow trout, brown trout), and habitat destruction <b>completely extirpated</b> the Lahontan cutthroat from Lake Tahoe in the early 1900s. The fish is now listed as federally <b>threatened</b>.<br><br>In <b>2019</b>, reintroduction efforts began — Lahontan cutthroat trout were returned to Lake Tahoe for the first time in over a century. A slow, hopeful beginning after a catastrophic loss.',
      'USFS; Truckee River Guide; Frémont 1844; USFWS; Keep Tahoe Blue'));

  // Lake Tahoe Dam (Tahoe City)
  L.marker([39.17,-120.14], {icon:mkIcon('🚫',13)})
    .addTo(L_groups.tahoeChange)
    .bindPopup(tp('🚫 Lake Tahoe Dam — Controlling the Sacred Waters', T.loss,
      'Tahoe City · controls lake level · natural rim 6,223 ft · max 6,229 ft',
      'A <b>dam at Tahoe City</b> controls the flow of the Truckee River and the height of Lake Tahoe. The natural rim is at <b>6,223 feet</b> above sea level; the dam allows the lake to rise to <b>6,229 feet</b> maximum. This infrastructure — part of the complex Truckee River water rights system — determines how much water flows to downstream users including the <b>Pyramid Lake Paiute Tribe</b>.<br><br>In recent droughts, partly fueled by climate change, the lake has dropped <b>below its natural rim</b> — meaning water ceases to flow into the Truckee River at all. This echoes a mid-Holocene drought (4,000-7,000 years ago) when the lake fell below its rim for an extended period, drowning trees that are now submerged.<br><br>The dam represents the fundamental tension of western water: one dam at Tahoe City controls whether the Truckee flows, whether Pyramid Lake rises, whether the cui-ui can spawn, and whether Reno has water.',
      'Keep Tahoe Blue; Bureau of Reclamation; USGS'));

  // 1960 Olympics
  L.marker([39.20,-120.24], {icon:mkIcon('🏔️',12)})
    .addTo(L_groups.tahoeChange)
    .bindPopup(tp('🏔️ 1960 Winter Olympics — Palisades Tahoe', T.geo,
      'Olympic Valley · held while Washoe land claims unresolved',
      'The <b>1960 Winter Olympics</b> were held at what was then called Squaw Valley (now <b>Palisades Tahoe</b>, renamed 2021 after Washoe advocacy). The Games took place while the Washoe Tribe was <b>still waiting for resolution of its Indian Claims Commission case</b> — which wasn\'t settled until 1968.<br><br>The Olympics accelerated resort development in the Tahoe Basin, further transforming Washoe ancestral land. In 2021, when the resort announced it would retire the former name, Washoe women led the dialogue about cultural respect — documented in the film <b>"Walking With My Sisters."</b><br><br>Today, Palisades Tahoe hosts Washoe cultural talks at High Camp (8,200 ft), where tribal members share stories of their deep-rooted history in Olympic Valley and the Sierra Nevada.',
      'Visit Truckee Tahoe; Washoe Tribe; Palisades Tahoe'));

  // Washoe land reclamation
  L.marker([38.94,-120.01], {icon:mkIcon('💚',13)})
    .addTo(L_groups.tahoeChange)
    .bindPopup(tp('💚 Washoe Land Stewardship & Reclamation', T.modern,
      'Ongoing · tribal land advocacy · language revitalization · cultural preservation',
      'Despite losing virtually all of their 10,000-square-mile ancestral territory, the Washoe have never abandoned their connection to Da ow aga. Current tribal efforts include:<br><br>• <b>Land stewardship advocacy</b> — the tribal government lobbies for a land base within the Tahoe Basin and works with federal/state agencies to protect sacred sites<br>• <b>Meeks Bay Resort</b> — now Washoe-operated, a rare return to ancestral land<br>• <b>Cultural center plans</b> at Taylor Creek<br>• <b>Language revitalization</b> — the Washoe language (Hokan isolate) is taught to new generations; elders are recognized as vital cultural carriers<br>• <b>Wa She Shu It Deh Festival</b> — annual celebration at Meeks Bay featuring basketry, dance, music, and food<br>• <b>Cave Rock protection</b> — climbing ban upheld by 9th Circuit (2007)<br>• <b>Dat So La Lee</b> legacy — the renowned basket weaver\'s artistry preserved in museums worldwide<br><br>The Washoe are a sovereign nation with ~1,550 enrolled members. Communities exist in Gardnerville, Carson City, Stewart (NV), and Woodfords (CA). <b>There are no Washoe reservation lands within the Tahoe Basin.</b>',
      'Washoe Tribe of NV & CA; USFS; Visit Lake Tahoe; Palisades Tahoe'));

  // ============================================================
  //  🗺️ WASHOE SEASONAL ROUND — Connecting route
  //  Approximate line showing the annual cycle of movement
  // ============================================================
  // Summer at lake → fall in Pine Nut Mtns → winter in Carson Valley → spring return
  L.polyline([
    [39.04,-120.06],[39.00,-119.98],[38.95,-119.90],[38.90,-119.82],
    [38.88,-119.75]  // Carson Valley winter
  ], {color:T.camp, weight:2, opacity:0.5, dashArray:'6,6'}).addTo(L_groups.tahoeWashoe)
  .bindPopup(tp('🔄 Washoe Seasonal Round — Summer → Winter', T.camp,
    'Lake Tahoe (summer) → Pine Nut Mtns (fall) → Carson Valley (winter)',
    'The Washoe followed a predictable <b>annual seasonal round</b> tied to water, fish, and plant cycles:<br><br><b>Spring:</b> As snow melted, young adults began the trek from Carson Valley back to Da ow aga. Bulb plants and early grasses were the first harvests.<br><br><b>Summer:</b> The majority of the tribe gathered at Lake Tahoe — the great annual gathering. Each of the three regional groups (Welmelti, Pau Wa Lu, Hung a Lel Ti) camped on their respective side of the lake at family campsites used for generations. Fishing, hunting, gathering berries, seeds, roots, and medicinal plants. Games, races, archery competitions, socializing.<br><br><b>Fall:</b> As fishing slowed, the Washoe moved to the <b>Pine Nut Mountains</b> for the critical pine nut harvest. Hunting was best in fall when animals were fattened. Deer, rabbit, marmot, sagehen, quail.<br><br><b>Winter:</b> Families retreated to <b>Carson Valley</b> and other lowland camps near hot springs. Stored foods sustained them. Ice fishing when possible. The door of the winter house always faced east.',
    'd\'Azevedo 1986; Nevers 1976; Tallac Historic Site; Washoe Tribe'));

  L.polyline([
    [38.88,-119.75],[38.95,-119.65],[39.02,-119.58],[39.10,-119.55]
    // Pine Nut Mountains fall
  ], {color:'#A1887F', weight:2, opacity:0.4, dashArray:'6,6'}).addTo(L_groups.tahoeWashoe)
  .bindPopup(tp('🔄 Fall Migration — Pine Nut Harvest', T.camp,
    'Carson Valley → Pine Nut Mountains',
    'In fall, the Washoe moved east to the <b>Pine Nut Mountains</b> for the pine nut harvest — the most important food-gathering event of the year. The piñon pine nuts, roasted and ground into flour, would sustain families through the long winter.',
    'd\'Azevedo 1986; Nevers 1976'));

  // ============================================================
  //  SIDEBAR REGISTRATION
  // ============================================================
  if(window.registerLayer) {
    registerLayer('tahoeWashoe', 'Da ow aga: Washoe sites & seasonal cycle', 'greatbasin');
    registerLayer('tahoeLake', 'Da ow aga: Lake Tahoe geology & features', 'greatbasin');
    registerLayer('tahoeChange', 'Da ow aga: Environmental changes & loss', 'greatbasin');
  }

  console.log('✅ 65-tahoe-deep-dive.js loaded — Da ow aga: Washoe sacred sites, seasonal cycle, Martis petroglyphs, environmental changes');
})();
