// ============================================================
// WAPPO, SHASTA & ADDITIONAL NOR-CAL ROCK ART
// Napa, Siskiyou, Mendocino Counties
// ============================================================
// Wappo (Yukian isolate) — Napa Valley, Pope Valley, south of Clear Lake
// Shasta (Hokan) — Upper Klamath, Mt. Shasta, Shasta Valley
// Additional PCN / baby rock sites extending Pomo coverage
// Sources: Sawyer 1978, Elmendorf 1963, Kroeber 1925, Heizer 1953,
//          Whatford 2005, FSRA, Napa Watersheds report
// ============================================================

if (!map.getPane('wappoBackgroundPane')) {
  map.createPane('wappoBackgroundPane');
  map.getPane('wappoBackgroundPane').style.zIndex = 350;
}

const WP = {
  wappo: '#8B008B',     // dark magenta — Wappo
  shasta: '#CD5C5C',    // indian red — Shasta
  petro: '#FF69B4',     // hot pink — rock art
  water: '#1E90FF',
  village: '#DEB887',
  sacred: '#DC143C'
};


// ==================== WAPPO TERRITORY ====================

L.polygon([
  [38.85, -122.70], [38.85, -122.30], [38.65, -122.15],
  [38.30, -122.20], [38.30, -122.50], [38.45, -122.65],
  [38.65, -122.75]
], {
  color: WP.wappo, fillColor: WP.wappo, fillOpacity: 0.07,
  weight: 2, dashArray: '8,6', pane: 'wappoBackgroundPane', interactive: false
}).addTo(L_groups.wappoVillages);

L.marker([38.55, -122.45], {
  icon: L.divIcon({
    className: '', iconSize: [140, 30], iconAnchor: [70, 15],
    html: '<div style="font:bold 12px Georgia,serif;color:#8B008B;text-shadow:1px 1px 3px #000,0 0 8px #000;letter-spacing:3px;text-align:center;opacity:0.8;">W A P P O</div>'
  }), interactive: false
}).addTo(L_groups.wappoVillages);


// ==================== WAPPO VILLAGE & OBSIDIAN SITES ====================

// Napa Glass Mountain obsidian source
L.marker([38.7100, -122.3800], {
  icon: mkIcon(WP.wappo, 12),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:320px;">
    <h3 style="color:${WP.wappo};margin:0 0 6px;">◆ Glass Mountain — Wappo Obsidian Source</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Napa County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Major obsidian source used since <b>~2000 BCE</b>. Both ethnographic and
      archaeological evidence suggest the Wappo were among the first to utilize
      this area — making it one of the earliest documented Wappo sites.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Glass Mountain obsidian was a critical trade commodity — found at sites
      throughout Northern California. The Wappo spoke a <b>Yukian language</b>
      (related to Yuki and Coast Yuki), a linguistic isolate unrelated to
      any neighboring language family.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Elmendorf 1963; Heizer; Napa Watersheds report</div>
  </div>
`).addTo(L_groups.wappoVillages);

// Caymus village
L.marker([38.4600, -122.3600], {
  icon: mkIcon(WP.wappo, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${WP.wappo};margin:0 0 6px;">◆ Caymus — Wappo Village</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Napa Valley, Napa County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      One of several documented Wappo villages in Napa Valley. Others include
      Canijolmano, Huiluc, Locnoma, Mayacama, and Napa.
      Many were recorded through Mission Sonoma records (1823–1834).
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The name "Wappo" derives from Spanish <i>guapo</i> ("brave") — given for
      their fierce resistance to European colonization.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Milliken 1995; Sawyer 1978</div>
  </div>
`).addTo(L_groups.wappoVillages);

// Pope Valley — Lake Miwok / Wappo overlap
L.marker([38.6200, -122.4300], {
  icon: mkIcon(WP.wappo, 9),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:280px;">
    <h3 style="color:${WP.wappo};margin:0 0 6px;">◆ Pope Valley Villages</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Pope Valley, Napa County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Wappo and Lake Miwok overlap zone. The Lake Miwok inhabited areas
      south of Clear Lake extending into Pope Valley. Annual summer trips
      brought Wappo to Clear Lake and the Pacific coast.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Sawyer 1978</div>
  </div>
`).addTo(L_groups.wappoVillages);

// Napa village
L.marker([38.3000, -122.3000], {
  icon: mkIcon(WP.wappo, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:280px;">
    <h3 style="color:${WP.wappo};margin:0 0 6px;">◆ Napa — Southern Wappo</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Napa, Napa County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Southern extent of Wappo territory — bordered by Patwin to the east
      and Coast Miwok to the south. The name "Napa" may derive from a
      Patwin or Wappo word.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      By 1855, only ~500 Wappo remained in Napa Valley. In 1854, Wappo
      from the Russian River were moved to a Mendocino reservation where
      nearly half died within two years.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Sawyer 1978</div>
  </div>
`).addTo(L_groups.wappoVillages);


// ==================== SHASTA PEOPLE ====================

// Shasta territory
L.polygon([
  [42.00, -122.80], [42.00, -122.20], [41.80, -122.00],
  [41.50, -122.10], [41.30, -122.20], [41.30, -122.60],
  [41.50, -122.70], [41.75, -122.80]
], {
  color: WP.shasta, fillColor: WP.shasta, fillOpacity: 0.06,
  weight: 2, dashArray: '8,6', pane: 'wappoBackgroundPane', interactive: false
}).addTo(L_groups.wappoVillages);

L.marker([41.65, -122.45], {
  icon: L.divIcon({
    className: '', iconSize: [140, 30], iconAnchor: [70, 15],
    html: '<div style="font:bold 12px Georgia,serif;color:#CD5C5C;text-shadow:1px 1px 3px #000,0 0 8px #000;letter-spacing:3px;text-align:center;opacity:0.8;">S H A S T A</div>'
  }), interactive: false
}).addTo(L_groups.wappoVillages);

// Mt. Shasta — sacred site
L.marker([41.4090, -122.1948], {
  icon: mkIcon(WP.sacred, 12),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:320px;">
    <h3 style="color:${WP.sacred};margin:0 0 6px;">◆ Úytaahkoo (Mt. Shasta)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Siskiyou County — 14,179 ft</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Sacred mountain for the Shasta, Wintu, Karuk, Modoc, and many other
      Northern California peoples. The Shasta people took their English name
      from the mountain (their own name was <i>Kahosadi</i>).
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The Wintu name <i>Bohem Puyuq</i> ("Great Mountain") reflects its spiritual
      centrality. Mt. Shasta features in creation stories across multiple tribes
      and is considered a living spiritual being.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Kroeber 1925; Silver 1978</div>
  </div>
`).addTo(L_groups.wappoVillages);

// Shasta Valley villages
L.marker([41.6500, -122.4000], {
  icon: mkIcon(WP.shasta, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${WP.shasta};margin:0 0 6px;">◆ Shasta Valley Villages</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Shasta Valley, Siskiyou County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The Shasta people occupied the upper Klamath River drainage and
      Shasta Valley. They spoke a Hokan language. Multiple village and
      camp sites documented in archaeological investigations.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The Shasta were closely related culturally to the Karuk but linguistically
      distinct. They served as important intermediaries in the
      obsidian and dentalium shell trade.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Kroeber 1925; Holt 1946</div>
  </div>
`).addTo(L_groups.wappoVillages);


// ==================== ADDITIONAL POMO / MENDOCINO PCN ROCK ART ====================
// (extending existing Pomo rock art coverage)

// Yorkville petroglyphs — possibly pre-Pomo
L.marker([38.7900, -123.0800], {
  icon: mkPetroIcon('#D32F2F', 12),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:320px;">
    <h3 style="color:#D32F2F;margin:0 0 6px;">◆ Yorkville Petroglyphs</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Anderson Valley, Mendocino County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Large boulder covered with ancient petroglyphs. These are
      <b>distinctly different from known Pomo petroglyphs</b> in Willits and
      Lake County, suggesting a <b>much earlier origin</b> — possibly pre-Pomo.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Anderson Valley was a boundary zone between Northern and Central Pomo.
      The petroglyphs may date to a period before Pomo peoples occupied the area,
      making them among the oldest cultural markers in the region.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Anderson Valley Advertiser; First People article</div>
  </div>
`).addTo(L_groups.pomoRockArt);

// Mendocino Coast PCN petroglyphs
L.marker([38.8300, -123.6300], {
  icon: mkPCNIcon(12),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:#D32F2F;margin:0 0 6px;">◎ Mendocino Coast PCN Petroglyphs</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Anchor Bay area, Mendocino County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      <b>Pecked Curvilinear Nucleated (PCN)</b> petroglyphs recorded on sandstone
      boulders in a coastal redwood forest setting. Significant discovery that
      extends the PCN tradition to the Mendocino coast.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      PCN sites have been recorded since 1907 across Northern California's
      coastal ranges. Central Pomo mythology connects PCN glyphs to
      <b>fertility rituals</b>, attributed to supernatural Bird People.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Whatford 2005 (SCA Newsletter)</div>
  </div>
`).addTo(L_groups.pomoRockArt);

// UC Hopland Research Station PCN sites
L.marker([39.0100, -123.0800], {
  icon: mkPCNIcon(11),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:320px;">
    <h3 style="color:#D32F2F;margin:0 0 6px;">◎ UC Hopland — PCN Cupule Sites</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Hopland Research Station, Mendocino County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Five boulders or boulder clusters with cultural markings including cupules
      on the 2,150-hectare UC property. 30+ identified prehistoric sites with
      <b>3,000+ catalogued artifacts</b>.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Obsidian hydration dating, chemical sourcing, AMS dates, and soil testing
      have been conducted. A doctoral dissertation applied landscape archaeology
      and ritual theory frameworks to these sites.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">UC Hopland; FSRA 1999</div>
  </div>
`).addTo(L_groups.pomoRockArt);

// Glitter Rock (CA-MEN-2300)
L.marker([39.0500, -123.1200], {
  icon: mkPetroIcon('#D32F2F', 9),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:240px;">
    <h3 style="color:#D32F2F;margin:0 0 6px;">◆ Glitter Rock (CA-MEN-2300)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Mendocino County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Petroglyph site documented on 1999 FSRA Mendocino-Lake Counties field trip.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">FSRA 1999</div>
  </div>
`).addTo(L_groups.pomoRockArt);

// Keystone (CA-MEN-2200)
L.marker([39.0300, -123.0500], {
  icon: mkPetroIcon('#D32F2F', 9),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:240px;">
    <h3 style="color:#D32F2F;margin:0 0 6px;">◆ Keystone (CA-MEN-2200)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Mendocino County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Petroglyph site documented on 1999 FSRA field trip.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">FSRA 1999</div>
  </div>
`).addTo(L_groups.pomoRockArt);

// Borax Lake (CA-LAK-36) — Paleo-Indian
L.marker([39.0100, -122.7600], {
  icon: mkIcon('#E0E0E0', 12),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:320px;">
    <h3 style="color:#E0E0E0;margin:0 0 6px;">◇ Borax Lake (CA-LAK-36)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Lake County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      <b>One of the oldest archaeological sites in California</b> — Paleo-Indian
      occupation dating to <b>12,000+ years ago</b>. Fluted projectile points
      found here predate all known tribal affiliations in the region.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Located near Clear Lake, providing evidence of human presence in
      the Lake County area since the end of the last Ice Age.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Harrington 1948</div>
  </div>
`).addTo(L_groups.pomoSacred);

