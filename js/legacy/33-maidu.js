// ============================================================
// MAIDU PEOPLES — Valley Maidu, Konkow & Mountain Maidu
// Butte, Plumas, Sierra, Yuba Counties
// ============================================================
// Valley Maidu (Penutian > Maiduan) — Sacramento Valley, Chico to Oroville
// Konkow / Northwestern Maidu — Feather River canyons
// Mountain Maidu — Indian Valley, Greenville, Sierra foothills
// Nisenan / Southern Maidu — covered partly by existing Martis layer
// Sources: Kowta 1988, Kroeber 1925, Dixon 1905, Riddell 1978,
//          Chico State archaeology, FSRA, Sagehen Creek Field Station
// ============================================================

if (!map.getPane('maiduBackgroundPane')) {
  map.createPane('maiduBackgroundPane');
  map.getPane('maiduBackgroundPane').style.zIndex = 350;
}

const MD = {
  maidu: '#DAA520',     // goldenrod — Maidu
  konkow: '#CD8500',    // dark gold — Konkow
  mountain: '#B8860B',  // dark goldenrod — Mountain Maidu
  petro: '#FFB347',     // pastel orange — rock art
  water: '#1E90FF',
  village: '#DEB887',
  lost: '#B22222'
};

// ==================== TERRITORY POLYGONS ====================

// Valley Maidu territory
L.polygon([
  [40.10, -122.10], [40.10, -121.50], [39.60, -121.20],
  [39.30, -121.30], [39.30, -121.80], [39.60, -122.00],
  [39.80, -122.10]
], {
  color: MD.maidu, fillColor: MD.maidu, fillOpacity: 0.07,
  weight: 2, dashArray: '8,6', pane: 'maiduBackgroundPane', interactive: false
}).addTo(L_groups.maiduVillages);

L.marker([39.70, -121.65], {
  icon: L.divIcon({
    className: '', iconSize: [200, 30], iconAnchor: [100, 15],
    html: '<div style="font:bold 12px Georgia,serif;color:#DAA520;text-shadow:1px 1px 3px #000,0 0 8px #000;letter-spacing:3px;text-align:center;opacity:0.8;">V A L L E Y &nbsp; M A I D U</div>'
  }), interactive: false
}).addTo(L_groups.maiduVillages);

// Konkow territory — Feather River canyons
L.polygon([
  [40.00, -121.60], [40.00, -121.20], [39.70, -121.00],
  [39.50, -121.10], [39.50, -121.40], [39.70, -121.55]
], {
  color: MD.konkow, fillColor: MD.konkow, fillOpacity: 0.06,
  weight: 2, dashArray: '8,6', pane: 'maiduBackgroundPane', interactive: false
}).addTo(L_groups.maiduVillages);

L.marker([39.75, -121.30], {
  icon: L.divIcon({
    className: '', iconSize: [140, 30], iconAnchor: [70, 15],
    html: '<div style="font:bold 11px Georgia,serif;color:#CD8500;text-shadow:1px 1px 3px #000,0 0 8px #000;letter-spacing:2px;text-align:center;opacity:0.8;">K O N K O W</div>'
  }), interactive: false
}).addTo(L_groups.maiduVillages);

// Mountain Maidu territory — Indian Valley, Plumas
L.polygon([
  [40.20, -121.30], [40.20, -120.80], [39.90, -120.50],
  [39.60, -120.60], [39.60, -121.00], [39.90, -121.20]
], {
  color: MD.mountain, fillColor: MD.mountain, fillOpacity: 0.06,
  weight: 2, dashArray: '8,6', pane: 'maiduBackgroundPane', interactive: false
}).addTo(L_groups.maiduVillages);

L.marker([39.95, -120.90], {
  icon: L.divIcon({
    className: '', iconSize: [180, 30], iconAnchor: [90, 15],
    html: '<div style="font:bold 11px Georgia,serif;color:#B8860B;text-shadow:1px 1px 3px #000,0 0 8px #000;letter-spacing:2px;text-align:center;opacity:0.8;">M T N. &nbsp; M A I D U</div>'
  }), interactive: false
}).addTo(L_groups.maiduVillages);


// ==================== SIERRA PETROGLYPH SITES ====================
// (Mountain Maidu / Washoe / Martis overlap — these extend existing Martis coverage)

// CA-PLU-88 — Lakes Basin Campground petroglyphs
L.marker([39.6900, -120.6300], {
  icon: mkPetroIcon(MD.petro, 11),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${MD.petro};margin:0 0 6px;">◆ Lakes Basin Campground (CA-PLU-88)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Plumas County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Style 7 / Martis Complex petroglyphs — geometric designs pecked into
      glaciated bedrock. Part of FSRA monitoring program. Located in the
      Lakes Basin Recreation Area at ~6,000 ft elevation.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Mountain Maidu, Washoe, and Nisenan all used this high Sierra zone
      seasonally. The petroglyphs may have been created by ancestors of
      the Washoe (~4,000–1,500 BP) but have spiritual significance for
      multiple tribal groups.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">FSRA; Tahoe NF</div>
  </div>
`).addTo(L_groups.maiduRockArt);

// Jamison Creek petroglyphs
L.marker([39.7500, -120.6800], {
  icon: mkPetroIcon(MD.petro, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:260px;">
    <h3 style="color:${MD.petro};margin:0 0 6px;">◆ Jamison Creek Petroglyphs</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Plumas County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Martis Complex petroglyph sites near Jamison Creek in the Lakes Basin.
      Documented by Pete Rhode for FSRA.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">FSRA field trips</div>
  </div>
`).addTo(L_groups.maiduRockArt);

// CA-SIE-391 — Badenough Canyon
L.marker([39.5800, -120.3500], {
  icon: mkPetroIcon(MD.petro, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:260px;">
    <h3 style="color:${MD.petro};margin:0 0 6px;">◆ Badenough Canyon (CA-SIE-391)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Sierra County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Style 7 Martis petroglyph site in Sierra County.
      Documented by FSRA 1996 field trip.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">FSRA</div>
  </div>
`).addTo(L_groups.maiduRockArt);

// Salmon Lake petroglyphs
L.marker([39.6200, -120.5800], {
  icon: mkPetroIcon(MD.petro, 9),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:260px;">
    <h3 style="color:${MD.petro};margin:0 0 6px;">◆ Salmon Lake Petroglyphs</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Sierra County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Martis petroglyphs near Salmon Lake. Pete Rhode documentation.
      Washoe / Mountain Maidu zone.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">FSRA</div>
  </div>
`).addTo(L_groups.maiduRockArt);

// Frazier Creek petroglyphs
L.marker([39.6500, -120.6100], {
  icon: mkPetroIcon(MD.petro, 9),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:260px;">
    <h3 style="color:${MD.petro};margin:0 0 6px;">◆ Frazier Creek Petroglyphs</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Sierra County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Martis petroglyphs near Frazier Creek. Pete Rhode documentation.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">FSRA</div>
  </div>
`).addTo(L_groups.maiduRockArt);

// Upper North Fork American River — 46 petroglyph sites
L.marker([39.2500, -120.3500], {
  icon: mkPetroIcon(MD.petro, 13),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:320px;">
    <h3 style="color:${MD.petro};margin:0 0 6px;">◆ North Fork American River Petroglyphs</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Placer County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      <b>46 petroglyph sites</b> identified along the upper North Fork of the
      American River and its tributaries. Martis Culture, dated by associated
      cultural materials and radiocarbon to <b>~1700–950 BCE</b> —
      the period when Martis culture flourished most.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      This cluster represents the densest concentration of Martis petroglyphs
      in the central Sierra. Nisenan (Southern Maidu) territory.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Sagehen Creek Field Station; Gortner</div>
  </div>
`).addTo(L_groups.maiduRockArt);

// Wabena Creek (CA-PLA-591)
L.marker([39.2200, -120.4000], {
  icon: mkPetroIcon(MD.petro, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:260px;">
    <h3 style="color:${MD.petro};margin:0 0 6px;">◆ Wabena Creek (CA-PLA-591)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Placer County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Style 7 Martis petroglyph site at Wabena Creek.
      Nisenan / Southern Maidu territory.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">FSRA</div>
  </div>
`).addTo(L_groups.maiduRockArt);

// Rattlesnake Creek (CA-NEV-504)
L.marker([39.3100, -120.5400], {
  icon: mkPetroIcon(MD.petro, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:260px;">
    <h3 style="color:${MD.petro};margin:0 0 6px;">◆ Rattlesnake Creek (CA-NEV-504)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Nevada County, CA</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Martis petroglyph site on Tahoe National Forest.
      Part of the 92 identified Style 7 sites in the northern Sierra.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">FSRA; USFS Tahoe NF</div>
  </div>
`).addTo(L_groups.maiduRockArt);

// Cisco Grove Rock (CA-NEV-506)
L.marker([39.3100, -120.5700], {
  icon: mkPetroIcon(MD.petro, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:260px;">
    <h3 style="color:${MD.petro};margin:0 0 6px;">◆ Cisco Grove Rock (CA-NEV-506)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Nevada County, CA</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Martis petroglyphs at Cisco Grove. Part of the Style 7 tradition.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">FSRA</div>
  </div>
`).addTo(L_groups.maiduRockArt);

// Picayune Valley cluster
L.marker([39.1800, -120.4500], {
  icon: mkPetroIcon(MD.petro, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:280px;">
    <h3 style="color:${MD.petro};margin:0 0 6px;">◆ Picayune Valley Petroglyphs</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Placer County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Cluster of Martis petroglyph sites — Sonin 61, 63, and John Betts sites.
      Documented during 1996 FSRA field trip.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">FSRA 1996</div>
  </div>
`).addTo(L_groups.maiduRockArt);


// ==================== VALLEY MAIDU VILLAGE SITES ====================

// Llano Seco (CA-BUT-233) — oldest in Chico area
L.marker([39.6800, -121.9800], {
  icon: mkIcon(MD.maidu, 12),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:320px;">
    <h3 style="color:${MD.maidu};margin:0 0 6px;">◆ Llano Seco (CA-BUT-233)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Sacramento River, Butte County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      <b>Earliest C14-dated habitation in the Chico area</b> — occupation dating back
      <b>4,000+ years</b>. 12-foot deep midden buried under 14–18 inches of alluvial
      soil on a Sacramento River levee.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Excavated by Chico State archaeologists. Reveals deep time depth of
      Valley Maidu presence in the Sacramento Valley.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Chico State; Kowta 1988</div>
  </div>
`).addTo(L_groups.maiduVillages);

// Michoopda villages — Chico area
L.marker([39.7300, -121.8300], {
  icon: mkIcon(MD.maidu, 11),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${MD.maidu};margin:0 0 6px;">◆ Michoopda Village Sites</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Chico area, Butte County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Five Maidu (Michoopda band) village sites identified in the Chico area.
      The Michoopda were the Valley Maidu band centered near present-day Chico.
      <b>Block mortars</b> are the diagnostic tool of Valley Maidu (vs. slab hopper mortars
      used by Nomlaki to the west).
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Archaeological Identification of the Valley Maidu</div>
  </div>
`).addTo(L_groups.maiduVillages);

// Oroville / Konkow area
L.marker([39.5200, -121.5500], {
  icon: mkIcon(MD.konkow, 11),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${MD.konkow};margin:0 0 6px;">◆ Oroville — Konkow Villages</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Feather River, Butte County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Konkow (Northwestern Maidu) villages along the Feather River.
      Multiple sites documented during Oroville Dam construction.
      Martis and later period materials found.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      In 1863, Konkow people were force-marched to Round Valley Reservation
      in the <b>Konkow Trail of Tears</b> — 461 people started the 100-mile march;
      many died along the way.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Kowta 1988; Kroeber 1925</div>
  </div>
`).addTo(L_groups.maiduVillages);

// Indian Valley — Mountain Maidu
L.marker([40.0800, -120.9500], {
  icon: mkIcon(MD.mountain, 11),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${MD.mountain};margin:0 0 6px;">◆ Indian Valley — Mountain Maidu</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Greenville area, Plumas County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Heart of Mountain Maidu territory. Permanent villages in
      Indian Valley near present-day Greenville. Bedrock milling features
      used for acorn processing are common throughout the Plumas NF.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The Mountain Maidu, Paiute, and Washoe all used the high Sierra
      zone seasonally — their territories overlapping in the mountains.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Plumas NF; Kowta 1988</div>
  </div>
`).addTo(L_groups.maiduVillages);

// Bucks Lake area
L.marker([39.8700, -121.1800], {
  icon: mkIcon(MD.mountain, 9),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:260px;">
    <h3 style="color:${MD.mountain};margin:0 0 6px;">◆ Bucks Lake Sites</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Plumas County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Multiple sites with Martis and later materials. Wide-stemmed projectile
      points. Summer camps at higher elevations.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Kowta 1988</div>
  </div>
`).addTo(L_groups.maiduVillages);

