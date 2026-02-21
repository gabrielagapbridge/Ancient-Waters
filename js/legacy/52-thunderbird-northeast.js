// ============================================================
// THUNDERBIRD MOTIF — Northeastern Rock Art & Artifact Sites
// Algonkian, Iroquoian, Lenape, and Related Peoples
// ============================================================
// SOURCE: Edward J. Lenik (2012). "The Thunderbird Motif in 
//   Northeastern Indian Art." Archaeology of Eastern North America 
//   40: 163–185.
//
// CULTURAL CONTEXT:
//   The thunderbird is an extremely powerful spirit in Algonkian and
//   Iroquoian cosmology — a giant eagle-like being that causes lightning
//   by flashing its eyes, thunder by beating its wings, and wind by 
//   its rapid flight. It protects people against the Great Horned Serpent
//   of the underworld. The thunderbird motif spans from ~3000 B.P. 
//   through the Historic Contact period (A.D. 1500–1800) and beyond.
//
// NAMING ACROSS CULTURES:
//   Algonkian: Pinasiwuk (Ojibwe: Animikii)
//   Iroquois: Thunders / Thunderers (He-no at Niagara)
//   Lenape/Delaware: Thunder Beings
//   Lakota/Dakota: Wakinyan ("winged one")
//   Mi'kmaq: Kaktoogwak
//   Menominee: Enaemaehkiw
//   Passamaquoddy: connected to Pamola (at Mt. Katahdin)
//
// SITES NOT DUPLICATED (already in other files):
//   - Brattleboro petroglyphs (38-mohican-hudson.js / mohicanLost)
//   - Machias Bay sites (49-maine-petroglyphs.js / mainePetro)
//   - Embden petroglyphs (49-maine-petroglyphs.js / mainePetro)
//   - Grand Lake Stream (49-maine-petroglyphs.js / mainePetro)
//   - SW Maine pictographs (49-maine-petroglyphs.js / mainePickto)
//   - Nemasket village (50-wampanoag.js)
//   - Assawompset Pond hand petroglyphs (50-wampanoag.js)
//   - Wapanucket site (50-wampanoag.js)
// ============================================================

// Background pane
if (!map.getPane('thunderbirdPane')) {
  map.createPane('thunderbirdPane');
  map.getPane('thunderbirdPane').style.zIndex = 360;
}

const TBD = {
  rockart: '#FFD700',      // gold — rock art sites (active/visitable)
  lost: '#B22222',          // firebrick — submerged/destroyed sites
  artifact: '#9370DB',      // medium purple — portable artifact findspots
  sacred: '#DC143C',        // crimson — sacred/cultural sites
  territory: '#4A148C',     // deep purple — territory polygons
  museum: '#708090',        // slate gray — museum collections
  canada: '#006D6F',        // teal — Canadian sites
};

// ==================== CANADIAN SITES ====================

// --- Kejimkujik Lake, Nova Scotia ---
L.circleMarker([44.3833, -65.2167], {radius: 8, color: TBD.canada, fillColor: TBD.canada, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.canada}">◆ Kejimkujik Lake Petroglyphs — Mi'kmaq</h3>
    <p><b>Location:</b> Kejimkujik National Park & National Historic Site, SW Nova Scotia, Canada</p>
    <p><b>Coordinates:</b> 44.3833°N, 65.2167°W</p>
    <p><b>Culture:</b> Mi'kmaq (Kespukwitk district)</p>
    <p><b>Rock art:</b> 500+ individual petroglyphs on reddish-brown slate outcrops along lakeshores. Four petroglyph sites around Kejimkujik Lake and George Lake. Fine-line engravings recording Mi'kmaq culture and lifeways over several centuries (primarily 17th–19th centuries).</p>
    <p><b>Thunderbird:</b> A "Micmac thunderbird" was drawn by local postmaster George Creed (1887–1888) — an unusual portrayal of two triangles joined at their apex forming the body. Long neck, parallel horizontal lines, no arms or feet. 9.5 cm (3¾ inches). Robertson (1973) identifies it as the supernatural being "Kaktoogwak" or "Thunder."</p>
    <p><b>Serpent association:</b> 33 snake and snake-like images plus 2 figures of Jipijka'm, a horned serpent said to live underwater. The thunderbird glyph was carved as protection against these feared underworld spirits.</p>
    <p><b>First recorded:</b> 1873 by Joseph More; detailed recording by George Creed 1887–1888. Garrick Mallery of the Smithsonian published some of Creed's work in 1893.</p>
    <p><b>Status:</b> Protected within National Park & National Historic Site. Guided tours available July–August (walking & canoe). Petroglyph areas require advance booking. Canada's only dual-designated National Park/National Historic Site.</p>
    <p><b>Source:</b> Lenik 2012: 165–166; Robertson 1973; Mallery 1893:487</p>
  </div>`).addTo(L_groups.tbdRockArt);

// --- Peterborough Petroglyphs, Ontario ---
L.circleMarker([44.6206, -78.0461], {radius: 8, color: TBD.canada, fillColor: TBD.canada, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.canada}">◆ Peterborough Petroglyphs — Kinoomaagewaabkong</h3>
    <p><b>Location:</b> Petroglyphs Provincial Park, 2249 Northeys Bay Rd, Woodview, Ontario, Canada</p>
    <p><b>Coordinates:</b> 44.6206°N, 78.0461°W</p>
    <p><b>Culture:</b> Algonkian-speaking peoples (900–1400 CE)</p>
    <p><b>Known as:</b> Kinoomaagewaabkong — "the rocks that teach" (Ojibwe/Nishnaabe)</p>
    <p><b>Rock art:</b> ~900–1,200 carvings on a white crystalline limestone (marble) outcrop — the largest known concentration of pre-contact rock carvings in Canada. Pecked with gneiss hammers into a rectangular area roughly 60m × 35m. Depicts humans, animals, birds, reptiles, snakes, boats, supernatural beings, and abstract designs.</p>
    <p><b>Thunderbirds:</b> 6 thunderbird glyphs. Three are simple, legless images with outstretched wings. Three appear as human-like figures with wings (Vastokas & Vastokas 1973:93). The juxtaposition of thunderbird and serpent images suggests the spiritual battle between sky and underworld.</p>
    <p><b>Serpent association:</b> 29 serpent glyphs including one Great Horned Serpent and four horned snakes. These serpentine creatures appear to emerge from crevices in the limestone — suggesting they came from the underworld via an underground stream once present beneath the rock.</p>
    <p><b>Protected:</b> Enclosed in a protective building since 1984 (cost $800,000 CDN) to shield from acid rain, frost, algae, and vandalism. Day-use only, open May–October. Photography prohibited for cultural reasons.</p>
    <p><b>Source:</b> Lenik 2012: 166; Vastokas & Vastokas 1973; 2004</p>
  </div>`).addTo(L_groups.tbdRockArt);

// --- Peace Bridge site, Fort Erie, Ontario (artifact) ---
L.circleMarker([42.905, -78.930], {radius: 5, color: TBD.artifact, fillColor: TBD.artifact, fillOpacity: 0.7, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.artifact}">⬡ Peace Bridge Site — Thunderbird Slate Bar</h3>
    <p><b>Location:</b> Fort Erie, Ontario, Canada</p>
    <p><b>Culture:</b> Late Woodland / early Historic Contact (late 1600s, radiocarbon dated)</p>
    <p><b>Artifact:</b> A tabular fragment of black slate containing two incised thunderbird images. One is complete with outstretched drooping wings, a "fan shaped tail," and a head turned to the side represented by two parallel lines. Below it is a second opposing thunderbird, upper half missing — visible is a forked tail and one downward-slanting wing.</p>
    <p><b>Context:</b> Found in association with a cultural feature containing maize. The artifact represents one of the earliest directly-dated thunderbird images from an archaeological context in the Northeast.</p>
    <p><b>Source:</b> Lenik 2012: 172–173; Cooper 2005:65; Wintemberg 1924</p>
  </div>`).addTo(L_groups.tbdArtifacts);

// ==================== PENNSYLVANIA — SUSQUEHANNA RIVER ====================

// --- Safe Harbor: Big Indian Rock ---
L.circleMarker([39.920, -76.390], {radius: 8, color: TBD.rockart, fillColor: TBD.rockart, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.rockart}">◆ Big Indian Rock — Safe Harbor Petroglyphs</h3>
    <p><b>Location:</b> Susquehanna River below Safe Harbor Dam, Lancaster County, Pennsylvania</p>
    <p><b>Coordinates:</b> ~39.920°N, 76.390°W</p>
    <p><b>Culture:</b> Shenks Ferry / Algonkian peoples (~800–1,200 years old)</p>
    <p><b>Thunderbirds:</b> 8 thunderbird images — the largest single-rock concentration of thunderbird petroglyphs in the Northeast. Depicted with heads turned to the side, wings extended, and legs spread apart. One thunderbird has power lines extending down from its wings. Another has a cupule just below its left wing.</p>
    <p><b>Associated imagery:</b> Anthropomorphic figures (possibly depicting spiritual communication), bird tracks, animal tracks, and human figures. Paul Nevin (2010) speculates Big Indian Rock was a "public place" where people "sent messages to the Creator."</p>
    <p><b>Access:</b> By boat/kayak ONLY. Launch from Safe Harbor Park on Conestoga River. Guided tours available through Paul Nevin (safeharborpetroglyphs.com). Best viewed at sunrise/sunset when low sun angles reveal the pecked images.</p>
    <p><b>Source:</b> Lenik 2012: 171–172; Nevin 2004:250; Cadzow 1934</p>
  </div>`).addTo(L_groups.tbdRockArt);

// --- Safe Harbor: Little Indian Rock ---
L.circleMarker([39.918, -76.388], {radius: 7, color: TBD.rockart, fillColor: TBD.rockart, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.rockart}">◆ Little Indian Rock — Safe Harbor Petroglyphs</h3>
    <p><b>Location:</b> Susquehanna River, just upstream from Big Indian Rock</p>
    <p><b>Thunderbirds:</b> 7 thunderbird images on a rock containing 150+ total petroglyphs — one of the densest concentrations in the state. One thunderbird is associated with a pecked serpent that is 75 cm (2½ feet) long.</p>
    <p><b>Bird tracks:</b> 58 bird tracks on Little Indian Rock alone (78 total at Safe Harbor). These may represent the thunderbird's footprints — a Dakota tradition in South Dakota describes a "Thunder Bird's Track" boulder.</p>
    <p><b>Nevin's interpretation:</b> Little Indian Rock was "more of a private place where people 'received messages from the Creator.'"</p>
    <p><b>Source:</b> Lenik 2012: 171–172; Nevin 2004:250</p>
  </div>`).addTo(L_groups.tbdRockArt);

// --- Safe Harbor: Other Rocks (Footprint, Circle, Eagle) ---
L.circleMarker([39.919, -76.392], {radius: 5, color: TBD.rockart, fillColor: TBD.rockart, fillOpacity: 0.7, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.rockart}">◆ Safe Harbor — Footprint, Circle & Eagle Rocks</h3>
    <p><b>Location:</b> Additional rock outcrops in the Susquehanna River near Big & Little Indian Rock</p>
    <p><b>Thunderbirds:</b> 6 additional thunderbird images: 1 on Footprint Rock, 1 on Circle Rock, 4 on Eagle Rock. 3 Eagle Rock thunderbirds are associated with a serpent that also measures 75 cm, along with a human figure and bird track.</p>
    <p><b>Total at Safe Harbor:</b> 21 thunderbird images across 5 rock outcrops — the largest concentration of thunderbird glyphs on non-portable rock in the entire Northeast.</p>
    <p><b>400+ petroglyphs</b> across 7 bedrock exposures in a half-mile stretch of river — the most outstanding accessible Native American rock art in the northeastern United States.</p>
    <p><b>Source:</b> Lenik 2012: 171–172; Nevin 2004</p>
  </div>`).addTo(L_groups.tbdRockArt);

// --- Walnut Island (LOST — submerged by Safe Harbor Dam) ---
L.circleMarker([39.950, -76.420], {radius: 7, color: TBD.lost, fillColor: TBD.lost, fillOpacity: 0.6, weight: 2, dashArray: '5 5'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.lost}">✖ Walnut Island Petroglyphs (SUBMERGED)</h3>
    <p><b>Original location:</b> Susquehanna River near Washington Boro, Lancaster County, PA</p>
    <p><b>Status:</b> SUBMERGED by Safe Harbor Dam (constructed early 1930s). Now impounded below water.</p>
    <p><b>Rock art:</b> 21 groups of petroglyphs totaling 200+ individual glyphs and cupules. Two thunderbird images with outstretched drooping wings, a spiral, and cup marks were pecked into the rock surface.</p>
    <p><b>Salvage:</b> In 1931, archaeologist Donald A. Cadzow of the Pennsylvania Historical Commission removed many carvings by drilling them out with pneumatic drills — extracting individual or grouped figures for safekeeping.</p>
    <p><b>Where to see them:</b> Salvaged petroglyphs are now at the State Museum of Pennsylvania in Harrisburg. Additional specimens at Blue Rock Heritage Center, Washington Boro, and petroglyph designs are incorporated into the mosaic floor of the Pennsylvania State Capitol Building.</p>
    <p><b>Source:</b> Lenik 2012: 170; Cadzow 1934</p>
  </div>`).addTo(L_groups.tbdLost);

// --- Cresswell Rock & Bald Friar (LOST — submerged) ---
L.circleMarker([39.945, -76.415], {radius: 5, color: TBD.lost, fillColor: TBD.lost, fillOpacity: 0.5, weight: 2, dashArray: '5 5'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.lost}">✖ Cresswell Rock & Bald Friar (SUBMERGED)</h3>
    <p><b>Original location:</b> Susquehanna River near Washington Boro, PA and Havre de Grace, MD</p>
    <p><b>Status:</b> SUBMERGED below the water impounded by hydroelectric power dams on the lower Susquehanna.</p>
    <p><b>Context:</b> Cresswell Rock, Walnut Island, and the Bald Friar site were three of four major petroglyph concentrations on the Susquehanna. With Safe Harbor, they formed the densest concentration of rock art in the entire Northeast — more than 1,000 separate carvings across a 23-mile stretch.</p>
    <p><b>Source:</b> Lenik 2012: 170</p>
  </div>`).addTo(L_groups.tbdLost);

// ==================== MASSACHUSETTS — THUNDERBIRD SPECIFIC ====================

// --- Nemasket River Thunderbird Boulder (Lakeville) ---
L.circleMarker([41.840, -70.950], {radius: 6, color: TBD.rockart, fillColor: TBD.rockart, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.rockart}">◆ Nemasket River Thunderbird Boulder</h3>
    <p><b>Location:</b> Along the Nemasket River, Lakeville, Massachusetts</p>
    <p><b>Coordinates:</b> ~41.840°N, 70.950°W</p>
    <p><b>Discovered:</b> 2007 (Taylor 2008)</p>
    <p><b>Culture:</b> Wampanoag / Historic Contact period</p>
    <p><b>Description:</b> A carved thunderbird image on a large glacially deposited boulder. The figure was cut deeply into the east vertical face of the boulder, which faces the river. It is a stick-figure style image with its head turned to the right, wings widespread and down-turned near each end, a somewhat enlarged body, and widespread feet. An incised straight line is present below the glyph along with another line to the bird's right — possibly framing lines.</p>
    <p><b>Interpretation:</b> Lenik suggests this figure was carved with metal tools and dates to the Historic Contact period. The thunderbird represents a shaman's attempt to communicate with spiritual beings and marks the location as a sacred place consistent with Algonkian ideology and spiritual flight concepts.</p>
    <p><b>Source:</b> Lenik 2012: 169; Taylor 2008 69(2):65–66</p>
  </div>`).addTo(L_groups.tbdRockArt);

// --- Assawompset Lake Thunderbird Boulder (Middleborough) ---
L.circleMarker([41.870, -70.920], {radius: 6, color: TBD.rockart, fillColor: TBD.rockart, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.rockart}">◆ Assawompset Lake Thunderbird</h3>
    <p><b>Location:</b> North shore of Assawompset Lake, Middleborough, Massachusetts</p>
    <p><b>Culture:</b> Wampanoag</p>
    <p><b>Description:</b> A large boulder partially covered by drifting sand, low-lying with a vertical face on its southerly side. A thunderbird figure is pecked into the vertical face of the rock. Its head is turned to its right, wings are widespread with a long rounded tail, and legs are not depicted. Lenik interprets the figure as a thunderbird in flight — consistent with Algonkian shamanistic concepts of spiritual flight.</p>
    <p><b>Source:</b> Lenik 2012: 169</p>
  </div>`).addTo(L_groups.tbdRockArt);

// --- Hand Rock / Great Rock / Chestnut Street (Middleborough) ---
// NOTE: These are already in 50-wampanoag.js but adding thunderbird context
L.circleMarker([41.889, -70.906], {radius: 5, color: TBD.artifact, fillColor: TBD.artifact, fillOpacity: 0.6, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.artifact}">⬡ Middleborough — Petroglyph Cluster Context</h3>
    <p><b>Location:</b> Three petroglyph sites recorded along the Nemasket River in Middleborough: Hand Rock, Chestnut Street, and Great Rock (Lenik 2002:114–120).</p>
    <p><b>Thunderbird connection:</b> Along with the 2007 Nemasket River thunderbird boulder and the Assawompset Lake thunderbird, these sites form a cluster of rock art in the Wampanoag heartland — concentrated around the intersection of the Nemasket River and Assawompset Pond, one of the most important interior waterways in southeastern New England.</p>
    <p><b>Source:</b> Lenik 2002; 2012:169</p>
  </div>`).addTo(L_groups.tbdArtifacts);

// ==================== PORTABLE ARTIFACTS ====================

// --- Smyth Site, Amoskeag Falls, Manchester, NH ---
L.circleMarker([42.985, -71.465], {radius: 6, color: TBD.artifact, fillColor: TBD.artifact, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.artifact}">⬡ Smyth Site — Copper Thunderbird Gorgets</h3>
    <p><b>Location:</b> Amoskeag Falls, Manchester, New Hampshire</p>
    <p><b>Culture:</b> Historic Contact period (early 1600s – early 1700s)</p>
    <p><b>Artifacts:</b> TWO copper thunderbird pendants/gorgets recovered from archaeological excavations.</p>
    <p><b>Large gorget (Figure 22):</b> 25.4 cm (10 inches) with two suspension holes below the head. Triangular head, excurvate sides, prominent shoulders, wings extending downward, legs spread apart. Probably made from a copper kettle. First quarter of the 17th century.</p>
    <p><b>Smaller pendant (Figure 23):</b> 8.7 cm (3.45 inches), found 1967–1969 from topsoil layer. Slim body, long narrow wings, short spread-apart legs forming an inverted V. Decorated with fine cross-hatched lines. Also Historic Contact period.</p>
    <p><b>Ojibwa connection:</b> Among Algonkian tribes of the upper Great Lakes, copper was considered a sacred and powerful mineral. Lenik suggests these copper thunderbirds drew their meaning and power from this traditional belief.</p>
    <p><b>Source:</b> Lenik 2012: 175–176; Bouck & Richardson 2007; Foster et al. 1981</p>
  </div>`).addTo(L_groups.tbdArtifacts);

// --- Pahaquarra Site, Warren County, NJ ---
L.circleMarker([41.020, -75.080], {radius: 5, color: TBD.artifact, fillColor: TBD.artifact, fillOpacity: 0.7, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.artifact}">⬡ Pahaquarra — Pewter Thunderbird</h3>
    <p><b>Location:</b> Delaware Water Gap National Recreation Area, Warren County, New Jersey</p>
    <p><b>Culture:</b> Lenape (Delaware) — Paleoindian through Historic Contact</p>
    <p><b>Artifact:</b> A thunderbird figure cast from pewter, found by a private collector. Measures 8 cm (3⅛ inches) wing tip to wing tip and 6 cm (2⅜ inches) in height. Exact provenience not reported.</p>
    <p><b>Site significance:</b> The Pahaquarra site has extensive evidence of Indian occupation from the Paleoindian period through the Historic Contact period, including pits, hearths, house patterns, burials, and European trade goods.</p>
    <p><b>Source:</b> Lenik 2012: 177; Kraft 2001:380; 1976</p>
  </div>`).addTo(L_groups.tbdArtifacts);

// --- Minisink Site, Sussex County, NJ ---
L.circleMarker([41.220, -74.780], {radius: 5, color: TBD.artifact, fillColor: TBD.artifact, fillOpacity: 0.7, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.artifact}">⬡ Minisink Site — Shell Thunderbird Pendants</h3>
    <p><b>Location:</b> Upper Delaware River Valley, Sussex County, New Jersey (National Historic Landmark)</p>
    <p><b>Culture:</b> Lenape — Late Woodland / early Historic Contact</p>
    <p><b>Artifacts:</b> Four shell pendants carved to represent birds, found in children's burials. In 1915, archaeologist Max Schrabisch reported "two exquisitely carved ornaments of an immaculate white color representing hawks or eagles" found with pieces of mica, zinc, a jasper scraper, and 12 glass beads. Lenik believes these represent thunderbirds.</p>
    <p><b>Site:</b> The most intensively occupied site in the upper Delaware Valley during the Late Woodland and early Historic Contact periods. 300+ human burials excavated. 66 specimens of portable art recovered.</p>
    <p><b>Source:</b> Lenik 2012: 178–179; Heye & Pepper 1915:37–40; Schrabisch 1915</p>
  </div>`).addTo(L_groups.tbdArtifacts);

// --- Swanton, Vermont — Steatite Pipe (2,000–3,000 years old) ---
L.circleMarker([44.913, -73.130], {radius: 5, color: TBD.artifact, fillColor: TBD.artifact, fillOpacity: 0.7, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.artifact}">⬡ Swanton — Thunderbird Steatite Pipe</h3>
    <p><b>Location:</b> Swanton, Vermont (Early Woodland cemetery)</p>
    <p><b>Age:</b> 2,000–3,000 years old — one of the oldest thunderbird representations in the Northeast</p>
    <p><b>Artifact:</b> A blocked-end tubular pipe made from steatite containing an incised figure of a thunderbird, with three abstract symbols below the image. Found in an Early Woodland period cemetery with approximately 25 graves along with exotic artifacts and red ochre.</p>
    <p><b>Source:</b> Lenik 2012: 174; Lenik 2002:111–112; Willoughby 1935</p>
  </div>`).addTo(L_groups.tbdArtifacts);

// --- Pond Island, Blue Hill Bay, Maine ---
L.circleMarker([44.260, -68.520], {radius: 4, color: TBD.artifact, fillColor: TBD.artifact, fillOpacity: 0.7, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.artifact}">⬡ Pond Island — Thunderbird Slate Fragment</h3>
    <p><b>Location:</b> Pond Island beach, Blue Hill Bay, Maine</p>
    <p><b>Artifact:</b> A flat piece of slate with an incised thunderbird fragment, found in a shell midden. Triangular body outline with interior parallel lines joined by short oblique lines and chevrons. Three parallel lines form a V-shaped decoration in the chest area. Rock art researcher Mark Hedden (1991) concluded it was "an unusually elaborate version of a triangular torso anthropomorph with birdlike attributes."</p>
    <p><b>Connection:</b> The birdlike attributes are consistent with shamanistic beliefs in Algonkian ideology — representing shamans or thunderbirds as intermediaries between the spirit world and humans.</p>
    <p><b>Source:</b> Lenik 2012: 173; Hedden 1991 31(1):42; Lenik 2002:71–72</p>
  </div>`).addTo(L_groups.tbdArtifacts);

// --- Hammond Petroglyph Pendant, SE Massachusetts ---
L.circleMarker([41.850, -71.050], {radius: 4, color: TBD.artifact, fillColor: TBD.artifact, fillOpacity: 0.7, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.artifact}">⬡ Hammond Petroglyph Pendant</h3>
    <p><b>Location:</b> Found along the Taunton River, southeastern Massachusetts</p>
    <p><b>Culture:</b> Wampanoag</p>
    <p><b>Artifact:</b> A pentagonal-shaped pendant of reddish brown slate, found by a relic collector. Single suspension hole near upper end. On the obverse: a vertically oriented fine-line incised thunderbird with head turned to the side, wings outstretched downward, and a forked tail. On the reverse: a triangular, somewhat ladder-like geometric motif.</p>
    <p><b>Source:</b> Lenik 2012: 174; Taylor 2008 69(2):64–65</p>
  </div>`).addTo(L_groups.tbdArtifacts);

// --- Sebonac Creek / Shinnecock Village, Long Island ---
L.circleMarker([40.880, -72.375], {radius: 4, color: TBD.artifact, fillColor: TBD.artifact, fillOpacity: 0.7, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.artifact}">⬡ Sebonac Creek — Thunderbird Pottery Shard</h3>
    <p><b>Location:</b> Sebonac Creek site, Long Island, New York</p>
    <p><b>Culture:</b> Shinnecock (Late Woodland-Ceramic period)</p>
    <p><b>Artifact:</b> Fragment of Indian pottery with an incised figure: triangular body, thin waist, broad shoulders, small oval-shaped head projection, and a curved tail. Mark E. Harrington (1977 [1924]) interpreted this as a thunderbird. It has both human and bird-like attributes — possibly representing a shaman with a special relationship to thunderbirds and the spiritual ability of out-of-body flight.</p>
    <p><b>Source:</b> Lenik 2012: 178; Harrington 1977 [1924]:40</p>
  </div>`).addTo(L_groups.tbdArtifacts);

// --- Menemsha Pond, Martha's Vineyard ---
L.circleMarker([41.340, -70.760], {radius: 4, color: TBD.artifact, fillColor: TBD.artifact, fillOpacity: 0.7, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.artifact}">⬡ Menemsha Pond — Thunderbird Pottery Fragment</h3>
    <p><b>Location:</b> East shore of Menemsha Pond, Martha's Vineyard, Massachusetts</p>
    <p><b>Culture:</b> Wampanoag (800–1300 AD)</p>
    <p><b>Artifact:</b> An incised anthropomorph/bird-like figure on a pottery fragment recovered from archaeological excavations (1912–13). Headless, lacking shoulders. Body and drooping arms represented by parallel lines. Five horizontal or ladder-like lines present within the lower interior body. Shell-tempered pottery with cord-wrapped stick impressed decorative pattern.</p>
    <p><b>Source:</b> Lenik 2012: 178; Hedden 1991 31(1):44–45; Bouck & Richardson 2007 35:17</p>
  </div>`).addTo(L_groups.tbdArtifacts);

// --- Sylvester Manor, Shelter Island, Long Island ---
// (Martha's Vineyard daybook connection too)
L.circleMarker([41.075, -72.335], {radius: 4, color: TBD.artifact, fillColor: TBD.artifact, fillOpacity: 0.6, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.artifact}">⬡ Shelter Island & Martha's Vineyard — Thunderbird on Hide & Daybook</h3>
    <p><b>Martha's Vineyard:</b> A thunderbird figure was "impressed" into the animal hide cover of a daybook kept by Matthew Mayhew (1780–1785), a boat builder and descendant of missionaries to the Wampanoag. The image measures 32 cm (12½ inches) wing tip to wing tip. Now at Martha's Vineyard Museum.</p>
    <p><b>Shelter Island:</b> Sylvester Manor, a 17th-century Dutch provisioning plantation (est. 1652). Nine seasons of excavation (1998–2006) recovered numerous Native American artifacts from this multi-cultural site where Dutch, English, Native Americans, and enslaved Africans lived together.</p>
    <p><b>Source:</b> Lenik 2012: 180; Bouck & Richardson 2007 35:11–19; Gary 2007</p>
  </div>`).addTo(L_groups.tbdArtifacts);

// --- Skokloster Castle, Sweden (Lenape war club) ---
L.circleMarker([41.000, -75.300], {radius: 4, color: TBD.artifact, fillColor: TBD.artifact, fillOpacity: 0.6, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.artifact}">⬡ Delaware Bay — Thunderbird War Club (now in Sweden)</h3>
    <p><b>Origin:</b> New Sweden Colony, Delaware Bay (1638–1655)</p>
    <p><b>Culture:</b> Lenape and/or Susquehannock</p>
    <p><b>Artifact:</b> A ball-headed war club with brass or copper wedges inserted into the wood forming a thunderbird image, a rhomboid figure, and parallel zig-zag rows. Now in the collection of Skokloster Castle near Uppsala, Sweden, where it was brought from the New Sweden Colony.</p>
    <p><b>Marker placed at:</b> approximate origin area (upper Delaware Valley)</p>
    <p><b>Source:</b> Lenik 2012: 177; Kraft 1995 50:1–17</p>
  </div>`).addTo(L_groups.tbdArtifacts);

// --- Lansingburgh, NY — Cast lead thunderbird ---
L.circleMarker([42.745, -73.680], {radius: 4, color: TBD.artifact, fillColor: TBD.artifact, fillOpacity: 0.6, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.artifact}">⬡ Lansingburgh — Cast Lead Thunderbird</h3>
    <p><b>Location:</b> Lansingburgh, New York (archaeological excavation of an Indian site)</p>
    <p><b>Artifact:</b> A "lead figure of a swallow-tailed bird or thunderbird," described as "tiny" and measuring under one inch. Broken specimen — head missing, one wing and legs spread apart are extant. Found in 1894.</p>
    <p><b>Source:</b> Lenik 2012: 177–178; Dunn 2000:120</p>
  </div>`).addTo(L_groups.tbdArtifacts);

// --- Rochester Junction, NY — Seneca Iroquois shell thunderbird ---
L.circleMarker([42.750, -77.170], {radius: 4, color: TBD.artifact, fillColor: TBD.artifact, fillOpacity: 0.6, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.artifact}">⬡ Rochester Junction — Seneca Shell Thunderbird</h3>
    <p><b>Location:</b> Rochester Junction site, upstate New York</p>
    <p><b>Culture:</b> Seneca Iroquois (c. 1675–1687)</p>
    <p><b>Artifact:</b> A shell pendant representing a thunderbird. Sculpted figure with head facing forward, eyes indicated by two small circular depressions, wings at rest along its body, and legs spread apart. Attributed to the Seneca Iroquois.</p>
    <p><b>Now at:</b> Rochester Museum and Science Center</p>
    <p><b>Source:</b> Lenik 2012: 179; Hayes 1988:60–61</p>
  </div>`).addTo(L_groups.tbdArtifacts);

// ==================== MUSEUM COLLECTIONS ====================

L.circleMarker([40.264, -76.886], {radius: 5, color: TBD.museum, fillColor: TBD.museum, fillOpacity: 0.5, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.museum}">🏛️ State Museum of Pennsylvania — Salvaged Petroglyphs</h3>
    <p><b>Location:</b> 300 North St, Harrisburg, PA</p>
    <p><b>Collection:</b> Petroglyphs removed from Walnut Island and Cresswell Rock before Safe Harbor Dam construction (1931). Includes thunderbird images, spirals, cupules, animal and human figures. Casts of additional petroglyphs on display.</p>
    <p><b>Also:</b> Seven petroglyph designs from Safe Harbor sites are incorporated into the mosaic floor of the Pennsylvania State Capitol Building.</p>
  </div>`).addTo(L_groups.tbdMuseums);

L.circleMarker([39.983, -76.410], {radius: 4, color: TBD.museum, fillColor: TBD.museum, fillOpacity: 0.5, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.museum}">🏛️ Blue Rock Heritage Center</h3>
    <p><b>Location:</b> Washington Boro, Lancaster County, PA</p>
    <p><b>Collection:</b> Three petroglyphs (containing four images) salvaged from Walnut Island before dam construction. On loan from the Pennsylvania Historical and Museum Commission.</p>
  </div>`).addTo(L_groups.tbdMuseums);

// ==================== FACIAL TATTOO DOCUMENTATION ====================

// These are portrait locations, not archaeological sites
L.circleMarker([42.350, -73.500], {radius: 4, color: TBD.sacred, fillColor: TBD.sacred, fillOpacity: 0.5, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.sacred}">🎨 Mohican Chief Etowaukum — Thunderbird Tattoos (1710)</h3>
    <p><b>Context:</b> Upper Hudson River Valley (Mohican territory)</p>
    <p><b>Documentation:</b> A 1710 portrait by Jan Verelst shows Mohican chief Etowaukum with four thunderbird tattoos on his face. According to ethnohistoric accounts, Iroquois and Mohican Indians in the upper Hudson River Valley of New York and New Jersey adorned their bodies with facial tattoos (Heckewelder 1881:206; Van der Donck 1968:39).</p>
    <p><b>Significance:</b> Tattooing of the body conveyed visible information about the person and their beliefs. Thunderbird tattoos likely indicated warrior status or spiritual connection.</p>
    <p><b>Source:</b> Lenik 2012: 180; Brasser 1978:202</p>
  </div>`).addTo(L_groups.tbdArtifacts);

L.circleMarker([40.050, -75.300], {radius: 4, color: TBD.sacred, fillColor: TBD.sacred, fillOpacity: 0.5, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${TBD.sacred}">🎨 Lenape Chief Lapawinsoe — Thunderbird & Serpent Tattoos (1735)</h3>
    <p><b>Context:</b> Delaware River Valley (Lenape territory)</p>
    <p><b>Documentation:</b> A 1735 portrait by Gustavus Hesselius shows Lenape elder Lapawinsoe with two thunderbirds and a snake or serpent tattooed on his forehead. This directly reflects the thunderbird-serpent cosmological duality — the sky guardian and the underworld creature together on the forehead of a spiritual leader.</p>
    <p><b>Significance:</b> The thunderbird was viewed as "an active and swift-footed warrior" (Schoolcraft 1851 I:402). Tattooing conveyed power and spiritual authority.</p>
    <p><b>Source:</b> Lenik 2012: 180</p>
  </div>`).addTo(L_groups.tbdArtifacts);
