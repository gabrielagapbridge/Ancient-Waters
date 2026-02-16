// ============================================================
// KARUK, HUPA & YUROK — The Klamath-Trinity River Peoples
// Far northwestern California (Humboldt, Del Norte, Siskiyou Counties)
// ============================================================
// Karuk (Hokan) — Middle Klamath River, Siskiyou County
// Hupa / Hoopa (Athabaskan) — Trinity River, Hoopa Valley
// Yurok (Algic) — Lower Klamath River & coast
// Tolowa (Athabaskan) — Smith River, Del Norte County
// Chilula (Athabaskan) — Redwood Creek
// Sources: Kroeber 1925, Goddard 1903, Waterman 1920, Gould 1966,
//          NCIC (2,040 documented sites in Humboldt Co.),
//          NPS, Yurok Tribe, Karuk Tribe, Hoopa Valley Tribe
// ============================================================

if (!map.getPane('klamathBackgroundPane')) {
  map.createPane('klamathBackgroundPane');
  map.getPane('klamathBackgroundPane').style.zIndex = 350;
}

const KL = {
  karuk: '#B8860B',     // dark goldenrod — Karuk
  hupa: '#2E8B57',      // sea green — Hupa/Hoopa
  yurok: '#4682B4',     // steel blue — Yurok
  tolowa: '#708090',    // slate gray — Tolowa
  water: '#1E90FF',
  sacred: '#DC143C',
  village: '#DEB887',
  lost: '#B22222'
};

// ==================== TERRITORY POLYGONS ====================

// Karuk territory — Middle Klamath River
L.polygon([
  [41.85, -123.70], [41.90, -123.40], [41.85, -123.10],
  [41.70, -122.90], [41.50, -123.00], [41.40, -123.20],
  [41.45, -123.40], [41.55, -123.55], [41.70, -123.70]
], {
  color: KL.karuk, fillColor: KL.karuk, fillOpacity: 0.07,
  weight: 2, dashArray: '8,6', pane: 'klamathBackgroundPane', interactive: false
}).addTo(L_groups.klamathVillages);

L.marker([41.65, -123.35], {
  icon: L.divIcon({
    className: '', iconSize: [160, 30], iconAnchor: [80, 15],
    html: '<div style="font:bold 12px Georgia,serif;color:#B8860B;text-shadow:1px 1px 3px #000,0 0 8px #000;letter-spacing:3px;text-align:center;opacity:0.8;">K A R U K</div>'
  }), interactive: false
}).addTo(L_groups.klamathVillages);

// Hupa territory — Trinity River / Hoopa Valley
L.polygon([
  [41.15, -123.80], [41.20, -123.55], [41.10, -123.35],
  [40.95, -123.35], [40.85, -123.50], [40.90, -123.75]
], {
  color: KL.hupa, fillColor: KL.hupa, fillOpacity: 0.07,
  weight: 2, dashArray: '8,6', pane: 'klamathBackgroundPane', interactive: false
}).addTo(L_groups.klamathVillages);

L.marker([41.05, -123.60], {
  icon: L.divIcon({
    className: '', iconSize: [120, 30], iconAnchor: [60, 15],
    html: '<div style="font:bold 12px Georgia,serif;color:#2E8B57;text-shadow:1px 1px 3px #000,0 0 8px #000;letter-spacing:3px;text-align:center;opacity:0.8;">H U P A</div>'
  }), interactive: false
}).addTo(L_groups.klamathVillages);

// Yurok territory — Lower Klamath & coast
L.polygon([
  [41.65, -124.20], [41.70, -123.90], [41.55, -123.70],
  [41.35, -123.70], [41.20, -123.85], [41.15, -124.05],
  [41.05, -124.15], [41.15, -124.20], [41.40, -124.15]
], {
  color: KL.yurok, fillColor: KL.yurok, fillOpacity: 0.07,
  weight: 2, dashArray: '8,6', pane: 'klamathBackgroundPane', interactive: false
}).addTo(L_groups.klamathVillages);

L.marker([41.40, -124.00], {
  icon: L.divIcon({
    className: '', iconSize: [120, 30], iconAnchor: [60, 15],
    html: '<div style="font:bold 12px Georgia,serif;color:#4682B4;text-shadow:1px 1px 3px #000,0 0 8px #000;letter-spacing:3px;text-align:center;opacity:0.8;">Y U R O K</div>'
  }), interactive: false
}).addTo(L_groups.klamathVillages);

// Tolowa territory — Smith River, Del Norte
L.polygon([
  [41.95, -124.30], [42.00, -124.10], [41.95, -123.85],
  [41.80, -123.80], [41.70, -124.00], [41.75, -124.20]
], {
  color: KL.tolowa, fillColor: KL.tolowa, fillOpacity: 0.07,
  weight: 2, dashArray: '8,6', pane: 'klamathBackgroundPane', interactive: false
}).addTo(L_groups.klamathVillages);

L.marker([41.85, -124.05], {
  icon: L.divIcon({
    className: '', iconSize: [140, 30], iconAnchor: [70, 15],
    html: '<div style="font:bold 11px Georgia,serif;color:#708090;text-shadow:1px 1px 3px #000,0 0 8px #000;letter-spacing:3px;text-align:center;opacity:0.8;">T O L O W A</div>'
  }), interactive: false
}).addTo(L_groups.klamathVillages);


// ==================== KARUK VILLAGE & CEREMONIAL SITES ====================

// Katimin — Karuk spiritual center
L.marker([41.5349, -123.4607], {
  icon: mkIcon(KL.karuk, 12),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${KL.karuk};margin:0 0 6px;">◆ Katimin (Katimiîn)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Confluence of Salmon & Klamath Rivers, Siskiyou Co.</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Spiritual center of the Karuk world — the "Center of the World" in Karuk cosmology.
      Site of the annual <b>Pikyávish (World Renewal) ceremony</b>, one of the most important
      ceremonial complexes in California. Salmon River joins Klamath here.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The Karuk maintained <b>100+ named villages</b> along the middle Klamath.
      They were (and are) master salmon fishers, using intricate weir and dip-net systems.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Kroeber 1925; Karuk Tribe</div>
  </div>
`).addTo(L_groups.klamathVillages);

// Ishi Pishi Falls — major fishing site
L.marker([41.5100, -123.4900], {
  icon: mkIcon(KL.karuk, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${KL.karuk};margin:0 0 6px;">◆ Ishi Pishi Falls</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Klamath River, Siskiyou County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Ancient and ongoing Karuk fishing station. One of the few places where
      Karuk people continue to fish for salmon using traditional dip-net methods.
      Site of World Renewal ceremonies.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Kroeber 1925; Karuk Tribe</div>
  </div>
`).addTo(L_groups.klamathVillages);

// Panamenik (Orleans)
L.marker([41.3050, -123.5350], {
  icon: mkIcon(KL.karuk, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${KL.karuk};margin:0 0 6px;">◆ Panamenik (Orleans area)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Klamath River at Orleans, Humboldt County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Major Karuk village at the downstream end of Karuk territory, near the
      boundary with Yurok territory. Important gathering and trade location.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Kroeber 1925</div>
  </div>
`).addTo(L_groups.klamathVillages);


// ==================== HUPA / HOOPA SITES ====================

// Takimilding — principal Hupa village
L.marker([41.0510, -123.6740], {
  icon: mkIcon(KL.hupa, 12),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${KL.hupa};margin:0 0 6px;">◆ Hoopa Valley — Takimilding & Villages</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Trinity River, Hoopa Valley, Humboldt County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The Hoopa Valley was the heart of Hupa territory — a wide alluvial flat along the
      Trinity River surrounded by mountains. Multiple permanent villages of
      <b>redwood plank houses</b> and sweathouses clustered here.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The Hupa held major <b>World Renewal ceremonies</b> including the Jump Dance and
      White Deerskin Dance — among the most elaborate in California.
      Today the <b>Hoopa Valley Reservation</b> (est. 1864) is the largest in California.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Goddard 1903; Kroeber 1925</div>
  </div>
`).addTo(L_groups.klamathVillages);

// Weitchpec — Hupa/Yurok confluence
L.marker([41.1880, -123.7100], {
  icon: mkIcon(KL.hupa, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${KL.hupa};margin:0 0 6px;">◆ Weitchpec</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Trinity-Klamath Confluence, Humboldt County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Strategic location where the Trinity River meets the Klamath.
      Border area between Hupa, Yurok, and Karuk territories.
      Major trade and ceremonial gathering point.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Kroeber 1925</div>
  </div>
`).addTo(L_groups.klamathVillages);


// ==================== YUROK SITES ====================

// Sue-meg Village (Patrick's Point)
L.marker([41.1300, -124.1580], {
  icon: mkIcon(KL.yurok, 12),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:320px;">
    <h3 style="color:${KL.yurok};margin:0 0 6px;">◆ Sue-meg Village</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Sue-meg State Park (Patrick's Point), Humboldt County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      <b>Reconstructed Yurok village</b> built by local Yurok people using traditional
      materials — redwood plank houses, sweat lodge, dance house, and a
      dugout redwood canoe. Active ceremonial use by Yurok people today.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Yurok people did not merely "inhabit" this coast — they shaped it.
      Redwood plank architecture, sophisticated fisheries, a complex wealth system,
      and elaborate ceremonial life made the Yurok one of the most culturally
      complex societies in pre-contact California.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Sue-meg State Park; Yurok Tribe</div>
  </div>
`).addTo(L_groups.klamathVillages);

// Requa — Yurok village at Klamath mouth
L.marker([41.5450, -124.0650], {
  icon: mkIcon(KL.yurok, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${KL.yurok};margin:0 0 6px;">◆ Requa (Rek'woi)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Klamath River mouth, Del Norte County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Major Yurok village at the mouth of the Klamath River. One of the wealthiest
      and most important Yurok settlements. Controlled access to ocean and river
      resources. Redwood plank houses with sunken floors.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Waterman 1920; Kroeber 1925</div>
  </div>
`).addTo(L_groups.klamathVillages);

// Trinidad — Tsurai
L.marker([41.0590, -124.1430], {
  icon: mkIcon(KL.yurok, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${KL.yurok};margin:0 0 6px;">◆ Tsurai (Trinidad)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Trinidad Head, Humboldt County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Yurok village at Trinidad Head. One of the first contact points with
      Spanish explorers (1775). Archaeological deposits document
      2,000+ years of occupation. Lithic scatters around Trinidad.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Kroeber 1925; NCIC</div>
  </div>
`).addTo(L_groups.klamathVillages);


// ==================== TOLOWA SITES ====================

// Yontocket — Tolowa spiritual center
L.marker([41.8650, -124.1600], {
  icon: mkIcon(KL.tolowa, 12),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:320px;">
    <h3 style="color:${KL.tolowa};margin:0 0 6px;">◆ Yontocket (Yan'-daa-k'vt)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Lake Earl / Smith River, Del Norte County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Spiritual capital of the Tolowa people and their most sacred site.
      Location of the <b>Nee-Dash (Feather Dance)</b> ceremony — the Tolowa's
      most important world renewal rite.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      In 1853, American settlers attacked and burned Yontocket during a
      Nee-Dash ceremony, killing an estimated <b>450 Tolowa</b> — one of the
      deadliest massacres in California history. The site is now a memorial.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Gould 1966; Tolowa Dee-ni' Nation</div>
  </div>
`).addTo(L_groups.klamathVillages);

// Smith River villages
L.marker([41.9300, -124.1000], {
  icon: mkIcon(KL.tolowa, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${KL.tolowa};margin:0 0 6px;">◆ Smith River Tolowa Villages</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Smith River, Del Norte County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Multiple permanent Tolowa villages along the Smith River — the last
      major undammed river in California. Dense shell midden sites along
      the coast document thousands of years of occupation.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The Tolowa spoke an Athabaskan language related to Navajo and Apache
      but were culturally aligned with their Northwest California neighbors
      (Yurok, Karuk), sharing the wealth-display ceremonial complex.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Gould 1966; Kroeber 1925</div>
  </div>
`).addTo(L_groups.klamathVillages);


// ==================== KLAMATH RIVER (waterway) ====================

// Klamath River — pre-dam course through tribal territories
L.polyline([
  [42.20, -121.85], [42.10, -121.90], [41.95, -122.00],
  [41.85, -122.30], [41.80, -122.60], [41.75, -122.85],
  [41.70, -123.10], [41.60, -123.30], [41.53, -123.46],
  [41.45, -123.55], [41.30, -123.55], [41.20, -123.70],
  [41.25, -123.85], [41.35, -123.95], [41.50, -124.05],
  [41.55, -124.08]
], {
  color: KL.water, weight: 3, opacity: 0.7, dashArray: '10,5'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${KL.water};margin:0 0 6px;">~ Klamath River</h3>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The lifeblood of Karuk, Yurok, and Hupa peoples. 263 miles long, draining
      a 15,700 sq mi basin. The river defined tribal territories — Karuk held the
      middle canyon, Yurok the lower reaches, Hupa the Trinity tributary.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      In 2024, the <b>largest dam removal in U.S. history</b> began on the Klamath,
      with four dams being demolished to restore salmon runs — a major
      victory for tribal nations who fought for decades to free the river.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Klamath River Renewal Corporation</div>
  </div>
`).addTo(L_groups.klamathWater);

// Trinity River
L.polyline([
  [41.05, -123.55], [41.10, -123.60], [41.15, -123.65],
  [41.19, -123.71]
], {
  color: KL.water, weight: 2.5, opacity: 0.6, dashArray: '8,5'
}).bindPopup(`
  <div style="max-width:260px;">
    <h3 style="color:${KL.water};margin:0 0 6px;">~ Trinity River</h3>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Flows through Hoopa Valley — heart of Hupa territory.
      Meets the Klamath at Weitchpec. Major salmon and steelhead river.
    </p>
  </div>
`).addTo(L_groups.klamathWater);

// Smith River
L.polyline([
  [41.80, -123.85], [41.85, -123.95], [41.88, -124.05],
  [41.92, -124.10], [41.93, -124.15]
], {
  color: KL.water, weight: 2.5, opacity: 0.6, dashArray: '8,5'
}).bindPopup(`
  <div style="max-width:260px;">
    <h3 style="color:${KL.water};margin:0 0 6px;">~ Smith River</h3>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Tolowa homeland. Last major undammed river in California.
      Wild salmon runs still intact.
    </p>
  </div>
`).addTo(L_groups.klamathWater);

