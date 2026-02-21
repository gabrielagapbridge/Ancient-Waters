// ============================================================
// WINTU, YANA/YAHI & NOMLAKI — Sacramento Headwaters Peoples
// Shasta, Tehama, Butte, Trinity Counties
// ============================================================
// Wintu (Penutian > Wintuan) — Upper Sacramento River, McCloud, Pit
// Yana / Yahi (Hokan) — Eastern foothills, Mill & Deer Creeks (Ishi's people)
// Nomlaki / Hill Wintun (Penutian > Wintuan) — West Sacramento Valley foothills
// Chimariko (Hokan isolate) — New River, Trinity River canyon (tiny group)
// Sources: Kroeber 1925, DuBois 1935, Waterman 1918, Sapir & Spier 1943,
//          Chico State archaeology, Foster & Foster 1994 (Slakaiya Rock)
// ============================================================

if (!map.getPane('wintuBackgroundPane')) {
  map.createPane('wintuBackgroundPane');
  map.getPane('wintuBackgroundPane').style.zIndex = 350;
}

const WN = {
  wintu: '#8B6914',     // dark goldenrod — Wintu
  yana: '#A0522D',      // sienna — Yana/Yahi
  nomlaki: '#6B8E23',   // olive drab — Nomlaki
  chimariko: '#9370DB', // medium purple — Chimariko
  petro: '#FF8C00',     // dark orange — rock art
  water: '#1E90FF',
  sacred: '#DC143C',
  village: '#DEB887',
  lost: '#B22222'
};

// ==================== TERRITORY POLYGONS ====================

// Wintu territory — Sacramento headwaters
L.polygon([
  [41.30, -122.80], [41.30, -122.30], [41.10, -121.80],
  [40.80, -121.70], [40.50, -122.00], [40.40, -122.30],
  [40.50, -122.60], [40.80, -122.80], [41.10, -122.90]
], {
  color: WN.wintu, fillColor: WN.wintu, fillOpacity: 0.07,
  weight: 2, dashArray: '8,6', pane: 'wintuBackgroundPane', interactive: false
}).addTo(L_groups.wintuVillages);

L.marker([40.85, -122.40], {
  icon: L.divIcon({
    className: '', iconSize: [160, 30], iconAnchor: [80, 15],
    html: '<div style="font:bold 13px Georgia,serif;color:#8B6914;text-shadow:1px 1px 3px #000,0 0 8px #000;letter-spacing:3px;text-align:center;opacity:0.8;">W I N T U</div>'
  }), interactive: false
}).addTo(L_groups.wintuVillages);

// Yana / Yahi territory — eastern foothills
L.polygon([
  [40.50, -122.00], [40.50, -121.60], [40.20, -121.40],
  [39.90, -121.50], [39.90, -121.80], [40.10, -122.00],
  [40.30, -122.10]
], {
  color: WN.yana, fillColor: WN.yana, fillOpacity: 0.07,
  weight: 2, dashArray: '8,6', pane: 'wintuBackgroundPane', interactive: false
}).addTo(L_groups.wintuVillages);

L.marker([40.20, -121.70], {
  icon: L.divIcon({
    className: '', iconSize: [160, 30], iconAnchor: [80, 15],
    html: '<div style="font:bold 12px Georgia,serif;color:#A0522D;text-shadow:1px 1px 3px #000,0 0 8px #000;letter-spacing:3px;text-align:center;opacity:0.8;">Y A N A / Y A H I</div>'
  }), interactive: false
}).addTo(L_groups.wintuVillages);

// Nomlaki territory — west valley foothills
L.polygon([
  [40.10, -122.70], [40.10, -122.20], [39.80, -122.00],
  [39.60, -122.10], [39.60, -122.50], [39.80, -122.70]
], {
  color: WN.nomlaki, fillColor: WN.nomlaki, fillOpacity: 0.06,
  weight: 2, dashArray: '8,6', pane: 'wintuBackgroundPane', interactive: false
}).addTo(L_groups.wintuVillages);

L.marker([39.85, -122.40], {
  icon: L.divIcon({
    className: '', iconSize: [160, 30], iconAnchor: [80, 15],
    html: '<div style="font:bold 11px Georgia,serif;color:#6B8E23;text-shadow:1px 1px 3px #000,0 0 8px #000;letter-spacing:2px;text-align:center;opacity:0.8;">N O M L A K I</div>'
  }), interactive: false
}).addTo(L_groups.wintuVillages);


// ==================== SLAKAIYA ROCK — Major Petroglyph Site ====================

L.marker([40.5800, -123.4500], {
  icon: mkPetroIcon(WN.petro, 14),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:340px;">
    <h3 style="color:${WN.petro};margin:0 0 6px;">◆ Slakaiya Rock (CA-TRI-1)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Eel River Canyon, Trinity County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Extraordinary petroglyph site first discovered in 1913 by a U.S. Government engineer,
      then <b>lost for 80 years</b> until rediscovered in 1993 by a state forester in a
      remote section of the Eel River Canyon.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      <b>Two panels of petroglyphs</b> with elaborate, multiple, superimposed elements
      representing <b>six discrete styles</b> — evidence of use across thousands of years
      by different peoples. Associated features include three housepits, a midden deposit,
      and abundant chipped and ground stone artifacts.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Located at the intersection of Wintu, Chimariko, and Athabaskan territories,
      this multi-period site may record cultural transitions stretching back 3,000+ years.
    </p>
    <div style="font-size:10px;color:#999;margin-top:8px;border-top:1px solid #333;padding-top:6px;">
      Presented at SCA Annual Meeting, Ventura, March 1994<br>
      Sources: Foster & Foster 1994; CA Dept. of Forestry
    </div>
  </div>
`).addTo(L_groups.wintuRockArt);


// ==================== WINTU VILLAGE SITES ====================

// Winnemem Wintu — McCloud River
L.marker([41.0500, -122.2500], {
  icon: mkIcon(WN.wintu, 12),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${WN.wintu};margin:0 0 6px;">◆ Winnemem Wintu — McCloud River Villages</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">McCloud River, Shasta County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The Winnemem Wintu ("Middle Water People") lived along the McCloud River.
      Their villages were <b>flooded by Shasta Dam</b> (1945) and the later raising of
      the dam. Sacred sites including Puberty Rock were submerged.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The Winnemem are <b>not federally recognized</b> despite continuous cultural
      practice — a legacy of bureaucratic error when the 1851 treaty was never ratified.
      They continue to fight for recognition and the restoration of winter-run salmon.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Winnemem Wintu Tribe; DuBois 1935</div>
  </div>
`).addTo(L_groups.wintuVillages);

// Upper Sacramento villages (now under Shasta Lake)
L.marker([40.9000, -122.3500], {
  icon: mkIcon(WN.wintu, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${WN.wintu};margin:0 0 6px;">◆ Upper Sacramento Wintu Villages</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Shasta Lake area, Shasta County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      <b>239+ named Wintu villages</b> documented in Shasta County ca. 1850.
      Many were permanently flooded by Shasta Dam and Lake.
      The Wintu name translates as "people" — the river defined their world.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">DuBois; Kroeber 1925</div>
  </div>
`).addTo(L_groups.wintuVillages);

// CA-SHA-207 — Wintu fishing station
L.marker([40.6500, -122.3800], {
  icon: mkIcon(WN.wintu, 9),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:260px;">
    <h3 style="color:${WN.wintu};margin:0 0 6px;">◆ CA-SHA-207 — Wintu Fishing Station</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Sacramento River, Shasta County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Salvage-excavated Wintu fishing station on the Sacramento River.
      Salmon fishing was central to Wintu economy and spirituality.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Dotta & Hullinger</div>
  </div>
`).addTo(L_groups.wintuVillages);


// ==================== YANA / YAHI SITES ====================

// Ishi Wilderness — Yahi homeland
L.marker([40.1000, -121.6500], {
  icon: mkIcon(WN.yana, 12),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:340px;">
    <h3 style="color:${WN.yana};margin:0 0 6px;">◆ Ishi Wilderness — Yahi Homeland</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Deer Creek / Mill Creek canyons, Tehama County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The rugged canyon country where the last surviving <b>Yahi people</b>
      lived in hiding for decades after their people were hunted nearly
      to extinction in the massacres of the 1860s–1870s.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      <b>Ishi</b>, the last known Yahi, emerged from hiding in 1911 near Oroville.
      He lived at UC Berkeley's Museum of Anthropology until his death in 1916,
      working with anthropologists Kroeber and Waterman to document Yahi language,
      toolmaking, and survival skills. The wilderness area is named in his honor.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Multiple cave shelters and camp sites in these canyons. Some rock shelters
      may contain pictographs. Exact locations protected by USFS.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Waterman 1918; Kroeber 1925</div>
  </div>
`).addTo(L_groups.wintuVillages);

// Northern Yana territory
L.marker([40.4000, -121.8000], {
  icon: mkIcon(WN.yana, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${WN.yana};margin:0 0 6px;">◆ Northern Yana Villages</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Upper Yana territory, Shasta/Tehama Counties</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The Yana comprised four groups: Northern Yana, Central Yana,
      Southern Yana, and Yahi. All spoke related Hokan languages.
      Their territory was in the eastern Sacramento Valley foothills,
      between the Wintu to the west and the Maidu to the south.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Sapir & Spier 1943; Kroeber 1925</div>
  </div>
`).addTo(L_groups.wintuVillages);


// ==================== NOMLAKI / HILL WINTUN SITES ====================

// Black Butte Lake area
L.marker([39.8200, -122.3500], {
  icon: mkIcon(WN.nomlaki, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${WN.nomlaki};margin:0 0 6px;">◆ Black Butte Lake — Nomlaki Sites</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Near Orland, Glenn/Tehama Counties</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Multiple Hill Wintun (Nomlaki) sites documented during reservoir construction.
      Distinguished from neighboring Maidu by use of <b>slab hopper mortars</b>
      rather than block mortars.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">J. Johnson 1990; Treganza & Heickson 1969</div>
  </div>
`).addTo(L_groups.wintuVillages);

// Bambauer housepit village (CA-TEH-248)
L.marker([40.0500, -122.2000], {
  icon: mkIcon(WN.nomlaki, 9),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:260px;">
    <h3 style="color:${WN.nomlaki};margin:0 0 6px;">◆ Bambauer Village (CA-TEH-248)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Rice Creek, Tehama County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Nomlaki housepit village on Rice Creek. Photographed 1974.
      Excavated by Chico State archaeologists.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Chico State</div>
  </div>
`).addTo(L_groups.wintuVillages);


// ==================== PALEO-INDIAN ====================

// Thomes Creek fluted point
L.marker([39.9500, -122.1000], {
  icon: mkIcon('#E0E0E0', 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:#E0E0E0;margin:0 0 6px;">◇ Thomes Creek Fluted Point</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Tehama County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      <b>Paleo-Indian fluted point</b> found at Thomes Creek — one of the oldest
      human artifacts in the northern Sacramento Valley, dating to <b>12,000+ years ago</b>.
      Pre-dates all known tribal groups in the region.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Dillon & Murphy</div>
  </div>
`).addTo(L_groups.wintuRockArt);


// ==================== SHASTA DAM — Lost Water ====================

// Shasta Dam / Lake — flooded Wintu territory
L.marker([40.7200, -122.4200], {
  icon: mkIcon(WN.lost, 12),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:320px;">
    <h3 style="color:${WN.lost};margin:0 0 6px;">◆ Shasta Dam — Flooded Wintu Homeland</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Sacramento River, Shasta County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Completed in 1945, Shasta Dam created a 30,000-acre reservoir that
      permanently flooded dozens of Wintu village sites, fishing stations,
      and sacred places including <b>Puberty Rock</b> and burial grounds.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The dam blocked salmon runs on the McCloud, Pit, and upper Sacramento
      rivers — destroying the foundation of Wintu subsistence and ceremony.
      The Winnemem Wintu continue to advocate against proposed dam raising
      that would submerge additional sacred sites.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Bureau of Reclamation; Winnemem Wintu Tribe</div>
  </div>
`).addTo(L_groups.wintuLost);

