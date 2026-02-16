// ============================================================
// MODOC PEOPLE — Tule Lake & the Modoc Plateau
// Far northeastern California (Modoc & Siskiyou Counties)
// ============================================================
// People: Modoc (Moatokni — "people of the south")
// Language: Klamath–Modoc (Penutian isolate, shared with Klamath of Oregon)
// Territory: Tule Lake, Lost River, Clear Lake (Modoc), Lava Beds,
//            Modoc Plateau south to Pit River
// Time depth: 6,000+ years documented at Petroglyph Point,
//             possibly 10,000+ years in the basin
// Sources: NPS Lava Beds NM, Clewlow 1968, Heizer & Clewlow 1973,
//          Kroeber 1925, Ray 1963, Stern 1998
// ============================================================

// Background pane for territory polygons
if (!map.getPane('modocBackgroundPane')) {
  map.createPane('modocBackgroundPane');
  map.getPane('modocBackgroundPane').style.zIndex = 350;
}

const MOD = {
  modoc: '#CD853F',      // peru — Modoc people
  petro: '#FFD700',      // gold — petroglyphs (signature color for this massive site)
  picto: '#FF6347',      // tomato — pictographs
  village: '#DEB887',    // burlewood — village/habitation sites
  water: '#1E90FF',
  sacred: '#DC143C',
  lost: '#B22222',
  historic: '#8A2BE2'    // blue-violet — Modoc War sites
};

// ==================== TERRITORY POLYGON ====================

// Modoc traditional territory — Tule Lake basin to Goose Lake, Lost River
L.polygon([
  [42.20, -122.20], // NW — near Upper Klamath Lake (shared with Klamath)
  [42.20, -121.50],
  [42.20, -120.80],
  [42.10, -120.30], // NE — toward Goose Lake
  [41.90, -120.10],
  [41.70, -120.20], // Goose Lake east side
  [41.50, -120.40],
  [41.30, -120.80], // SE — toward Pit River
  [41.10, -121.10],
  [41.00, -121.40], // S — Pit River boundary (Achomawi territory south)
  [41.20, -121.60],
  [41.40, -121.80],
  [41.60, -122.00],
  [41.80, -122.10],
  [42.00, -122.20]  // back to NW
], {
  color: MOD.modoc, fillColor: MOD.modoc, fillOpacity: 0.08,
  weight: 2, dashArray: '8,6', pane: 'modocBackgroundPane',
  interactive: false
}).addTo(L_groups.modocVillages);

// Territory label
L.marker([41.65, -121.20], {
  icon: L.divIcon({
    className: '', iconSize: [200, 30], iconAnchor: [100, 15],
    html: '<div style="font:bold 13px Georgia,serif;color:#CD853F;text-shadow:1px 1px 3px #000,0 0 8px #000;letter-spacing:3px;text-align:center;opacity:0.8;">M O D O C</div>'
  }),
  interactive: false
}).addTo(L_groups.modocVillages);


// ==================== PETROGLYPH POINT ====================
// The crown jewel — one of the largest petroglyph concentrations in North America

L.marker([41.7124, -121.5102], {
  icon: mkPetroIcon(MOD.petro, 16),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:340px;">
    <h3 style="color:${MOD.petro};margin:0 0 6px;">◆ Petroglyph Point</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Lava Beds National Monument, Modoc County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      <b>5,000+ individual petroglyphs</b> carved on the face of a former island in Tule Lake —
      one of the <b>largest concentrations of Native American rock art in North America</b>.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      <b>Age:</b> Estimated 2,000–6,000+ years old. Dating is complicated by Tule Lake's
      fluctuating water levels, which repeatedly submerged and exposed the rock face.
      Geometric patterns match designs on household items from nearby Nightfire Island
      dated to 5,000+ BP.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      <b>Style:</b> Predominantly <b>geometric and abstract</b> — circles, lines, grids, spirals,
      and complex interlocking patterns. Uniquely different from most western rock art in
      its near-total absence of figurative images (animals, humans). Some experts believe
      both the petroglyph and pictograph styles at Lava Beds were unique to the region.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      <b>Cultural significance:</b> Petroglyph Point is the center of the <b>Modoc creation story</b>.
      The site was once an island — artists may have paddled out in canoes with sharp sticks
      or stones to carve the soft volcanic tuff. Possibly hundreds of generations of artists
      contributed to this wall over millennia.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      <b>Tragedy:</b> Much Modoc knowledge of the petroglyphs' meaning was lost after the
      Modoc War (1872–73) caused tribal fracturing and forced removal to Oklahoma.
      No ethnographic study was conducted before this diaspora.
    </p>
    <div style="font-size:10px;color:#999;margin-top:8px;border-top:1px solid #333;padding-top:6px;">
      NRHP listed 1975 · Lava Beds NM Archaeological District (1991)<br>
      Short interpretive trail · Accessible to public<br>
      Sources: NPS, Heizer & Clewlow 1973, Clewlow 1968
    </div>
  </div>
`).addTo(L_groups.modocRockArt);


// ==================== LAVA BEDS PICTOGRAPH CAVES ====================

// Symbol Bridge / Merrill Ice Cave area pictographs
L.marker([41.7150, -121.5200], {
  icon: mkPictoIcon(MOD.picto, 11),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${MOD.picto};margin:0 0 6px;">○ Lava Beds Cave Pictographs — West Cluster</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Lava Beds NM, Modoc County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Painted pictographs in multiple lava tube cave entrances across the monument.
      Red, white, and black pigments — charcoal base mixed with animal fat (black),
      clay base (white), mineral pigments (red).
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Most pictographs appear at <b>cave entrances</b> rather than deep interiors.
      Pictograph sites hold traditional significance for modern Modoc and Klamath people.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">NPS · Exact cave locations partially restricted for protection</div>
  </div>
`).addTo(L_groups.modocRockArt);

// Big Painted Cave area
L.marker([41.7050, -121.5400], {
  icon: mkPictoIcon(MOD.picto, 11),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${MOD.picto};margin:0 0 6px;">○ Lava Beds Cave Pictographs — South Cluster</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Lava Beds NM, Modoc County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Additional pictograph sites in lava tube caves in the southern portion of the monument.
      Part of the extensive Lava Beds NM Archaeological District, which contains both
      carved petroglyphs and painted pictographs — an unusual combination in one area.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      All rock imagery at Lava Beds is located within the traditional territory of the Modoc
      people and their ancestors or predecessors.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">NPS · Public access via monument trails</div>
  </div>
`).addTo(L_groups.modocRockArt);


// ==================== ARCHAEOLOGICAL / VILLAGE SITES ====================

// Nightfire Island (CA-MOD-2)
L.marker([41.8700, -121.5900], {
  icon: mkIcon(MOD.village, 12),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${MOD.village};margin:0 0 6px;">◆ Nightfire Island (CA-MOD-2)</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Near Tule Lake, Modoc County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Major stratified habitation site near Tule Lake with <b>7,500+ years of occupation</b>.
      Deep deposits reveal continuous use of the Tule Lake basin.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Geometric patterns on household items here <b>match motifs at Petroglyph Point</b>,
      dated to 5,000+ years old — providing key chronological evidence for the rock art.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Clewlow 1968</div>
  </div>
`).addTo(L_groups.modocVillages);

// Tule Lake village area (former lakeshore)
L.marker([41.8900, -121.4800], {
  icon: mkIcon(MOD.village, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${MOD.village};margin:0 0 6px;">◆ Tule Lake Village Sites</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Former Tule Lake shore, Modoc / Siskiyou County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Multiple Modoc village sites along the former shoreline of Tule Lake, which was
      drastically reduced by 20th-century drainage for agriculture. Winter villages
      concentrated along the lake and Lost River.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      The Modoc name <i>Moatokni</i> ("people of the south") distinguished them from
      the Klamath to the north. They were skilled waterfowl hunters and fishers
      in the rich Tule Lake wetlands.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Kroeber 1925; Ray 1963</div>
  </div>
`).addTo(L_groups.modocVillages);

// Lost River village area
L.marker([41.9700, -121.4200], {
  icon: mkIcon(MOD.village, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${MOD.village};margin:0 0 6px;">◆ Lost River Villages</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Lost River, Modoc County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Modoc villages along Lost River, which connects Tule Lake to Clear Lake (Modoc County).
      The 1872 forced removal from these villages triggered the <b>Modoc War</b> —
      the only major Indian war in California.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Kroeber 1925; Stern 1998</div>
  </div>
`).addTo(L_groups.modocVillages);

// Clear Lake (Modoc) villages
L.marker([41.8800, -121.1500], {
  icon: mkIcon(MOD.village, 10),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${MOD.village};margin:0 0 6px;">◆ Clear Lake (Modoc) Villages</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Clear Lake, Modoc County (NOT Lake County Clear Lake)</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Eastern Modoc villages around Clear Lake in Modoc County. This is a different lake
      from the Pomo's Clear Lake in Lake County. Modoc bands here included the
      Gumbatwas (the "people of the lake").
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">Kroeber 1925; Ray 1963</div>
  </div>
`).addTo(L_groups.modocVillages);


// ==================== MODOC WAR SITES ====================

// Captain Jack's Stronghold
L.marker([41.7420, -121.5750], {
  icon: mkIcon(MOD.historic, 12),
  pane: 'markerPane'
}).bindPopup(`
  <div style="max-width:320px;">
    <h3 style="color:${MOD.historic};margin:0 0 6px;">◆ Captain Jack's Stronghold</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Lava Beds NM, Modoc County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      From November 1872 to April 1873, <b>Kintpuash (Captain Jack)</b> and approximately
      53 Modoc warriors held off over 600 U.S. Army troops in this natural lava fortress.
      The <b>Modoc War</b> was the only major Indian war in California and the most costly
      per-capita Indian war the U.S. military fought.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      After the war, Captain Jack was executed and surviving Modoc were forcibly
      relocated to the Quapaw Agency in Oklahoma Territory. Much traditional knowledge
      about the petroglyphs and pictographs was lost during this diaspora.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">
      NPS · National Historic Landmark<br>
      Self-guided trail through the lava fortifications
    </div>
  </div>
`).addTo(L_groups.modocVillages);


// ==================== LOST WATER / TULE LAKE ====================

// Tule Lake — drained
L.polygon([
  [41.82, -121.60], [41.82, -121.35],
  [41.95, -121.30], [42.00, -121.35],
  [42.00, -121.55], [41.95, -121.60],
  [41.88, -121.62]
], {
  color: MOD.lost, fillColor: MOD.lost, fillOpacity: 0.12,
  weight: 2, dashArray: '6,4',
  pane: 'modocBackgroundPane', interactive: true
}).bindPopup(`
  <div style="max-width:300px;">
    <h3 style="color:${MOD.lost};margin:0 0 6px;">◆ Tule Lake — Drained Wetland</h3>
    <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Modoc / Siskiyou County</div>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      Once a vast lake and wetland system central to Modoc life and spirituality.
      Petroglyph Point was an <b>island in this lake</b> — artists paddled out to carve.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      In the early 1900s, Tule Lake was <b>drained for agricultural use</b> under the
      Klamath Reclamation Project. What was once a rich wetland teeming with waterfowl,
      fish, and wocus (water lily seeds) became irrigated farmland.
    </p>
    <p style="font-size:12px;color:#eee;line-height:1.5;">
      During WWII, the <b>Tule Lake War Relocation Center</b> was built on the drained
      lakebed — interning 18,700 Japanese Americans on Modoc ancestral land.
      Some internees carved Japanese characters into the boulders at Petroglyph Point.
    </p>
    <div style="font-size:10px;color:#999;margin-top:6px;">NPS; Klamath Reclamation Project</div>
  </div>
`).addTo(L_groups.modocLost);

// Ghost label for former Tule Lake
L.marker([41.91, -121.47], {
  icon: L.divIcon({
    className: '', iconSize: [140, 20], iconAnchor: [70, 10],
    html: '<div style="font:italic 11px Georgia,serif;color:#B22222;text-shadow:0 0 6px #000;opacity:0.7;text-align:center;">Former Tule Lake</div>'
  }), interactive: false
}).addTo(L_groups.modocLost);


// ==================== TRIBAL ENCYCLOPEDIA ENTRY ====================
// (Add to js/19-tribal-encyclopedia.js separately or check if a Modoc entry exists)

