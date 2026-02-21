// ============================================================
// 59-inland-nw-expansion.js
// Deeper Expansion: Eastern Washington & Northern Idaho
// Coeur d'Alene (Schitsu'umsh), Spokane, Nez Perce (Nimiipuu),
// Kalispel/Pend d'Oreille — Villages, Sacred Sites, Missions,
// Rock Art, Waterways, Archaeological Sites
// ============================================================

const INW = {
  cda: '#1B4F72',     // Coeur d'Alene
  spk: '#E74C3C',     // Spokane
  nez: '#F39C12',     // Nez Perce
  kal: '#27AE60',     // Kalispel
  arch: '#8E44AD',    // Archaeological
  rock: '#FF8C00',    // Rock art
  mission: '#C0392B', // Missions
  water: '#2980B9',   // Waterways
  sacred: '#DC143C',  // Sacred
  war: '#555555'      // Conflict
};


// ==================== COEUR D'ALENE / SCHITSU'UMSH ====================

// --- Lake Coeur d'Alene — Heart of the Schitsu'umsh ---
L.circleMarker([47.55, -116.77], {radius: 7, color: INW.cda, fillColor: INW.water, fillOpacity: 0.5, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${INW.cda}">💧 Lake Coeur d'Alene — Heart of the Schitsu'umsh</h3>
    <p><b>The People:</b> The Coeur d'Alene call themselves <b>Schitsu'umsh</b> — "Those Who Were Found Here" — a name that says they have been part of this land since time immemorial.</p>
    <p><b>Homeland:</b> Nearly 5 million acres of forested mountains, rivers, lakes, marshlands, and rolling hills across what is now northern Idaho, eastern Washington, and western Montana. Lake Coeur d'Alene sat at its center — a 25-mile-long, 3-mile-wide body of water fed by the St. Joe and Coeur d'Alene Rivers.</p>
    <p><b>Villages:</b> Permanent villages lined the shores of the lake and its tributary rivers — the Coeur d'Alene, St. Joe, Clark Fork, and Spokane Rivers, as well as Hayden Lake and Lake Pend Oreille. Unlike Plains tribes, the Schitsu'umsh were not nomadic.</p>
    <p><b>Subsistence:</b> Salmon, trout, whitefish, sturgeon. Camas root was a dietary staple — blue camas flowers carpeted the prairies so thickly the meadows appeared as water. The Upper Columbia tribes (Coeur d'Alene, Kalispel, Kootenai, Spokane) harvested an estimated <b>644,469 salmon annually</b> totaling 6.8 million pounds.</p>
    <p><b>"Heart of an Awl":</b> French fur traders named them "Coeur d'Alene" — meaning sharp-hearted, shrewd — because they were the finest traders in the region.</p>
    <p><b>Supreme Court Victory:</b> In <b>Idaho v. United States (2001)</b>, the U.S. Supreme Court ruled the Coeur d'Alene Tribe holds rightful ownership of the lower third of Lake Coeur d'Alene and related waters — affirming their sovereignty over the sacred lake.</p>
    <p><b>Superfund Crisis:</b> 72 million tons of mine waste were dumped into the Coeur d'Alene watershed over 100 years of silver mining. The Silver Valley became the nation's second-largest Superfund site. In 1991 the tribe filed a landmark environmental lawsuit — one of the largest natural resource damage cases in American history.</p>
    <p><b>~200 archaeological sites</b> have been documented around the lake, many kept confidential to prevent looting.</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.coeurTerr);

// --- Cataldo Mission / Mission of the Sacred Heart ---
L.circleMarker([47.55, -116.33], {radius: 6, color: INW.mission, fillColor: INW.mission, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${INW.mission}">⛪ Cataldo Mission — Idaho's Oldest Building (1850-53)</h3>
    <p><b>Location:</b> Old Mission State Park, Cataldo, Shoshone County, Idaho</p>
    <p><b>The Invitation:</b> In the early 1800s, the Coeur d'Alene heard of neighboring tribes with powerful medicine men in "black robes." They traveled to St. Louis to invite the Jesuits. Father Pierre-Jean De Smet arrived in 1842.</p>
    <p><b>First Mission:</b> The St. Joe Mission was built along the St. Joe River in 1842 but abandoned due to seasonal flooding. A new site was chosen in 1846 on a grassy hill above the Coeur d'Alene River — the present location.</p>
    <p><b>Construction:</b> Built 1850-53 by Jesuits and Coeur d'Alene tribal members using only a broad-axe, auger, rope & pulleys, pen-knife, and improvised whipsaw. "Wattle and daub" technique — hand-hewn logs latticed with saplings, woven with grass, caked with mud.</p>
    <p><b>The Ceiling:</b> Stained blue with <b>huckleberries</b> hand-picked and pressed into the wood. Walls decorated with fabric from Hudson's Bay Company and hand-painted newspaper from Philadelphia. Father Ravalli carved wooden statues by hand with nothing but a knife, painted to resemble marble.</p>
    <p><b>Architect:</b> Father Anthony Ravalli, a Jesuit from Ferrara, Italy. The style is "simplified Baroque" — Greek Revival portico with modified Tuscan columns and Baroque pediment.</p>
    <p><b>Mullan Road:</b> Captain John Mullan used the mission as headquarters while building the 624-mile military road from Fort Walla Walla to Fort Benton (completed 1862). Tens of thousands of gold seekers passed within feet of the mission.</p>
    <p><b>Today:</b> National Historic Landmark (1961). National Register of Historic Places (1966). Over 100,000 visitors annually — most-visited heritage park in Idaho. The Coeur d'Alene Tribe makes an annual pilgrimage every August 15 for the Feast of the Assumption, setting up teepees on the mission grounds. A mural of the mission adorns the Brumidi Corridors at the U.S. Capitol — the only landscape there showing a building that still exists.</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.coeurTerr);

// --- Latah Creek / Hangman Creek Confluence ---
L.circleMarker([47.64, -117.43], {radius: 5, color: INW.arch, fillColor: INW.arch, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:450px;overflow-y:auto;">
    <h3 style="color:${INW.arch}">🏛️ Latah Creek Confluence — 8,000 Years of Continuous Occupation</h3>
    <p><b>Location:</b> Confluence of Spokane River and Latah (Hangman) Creek, downtown Spokane</p>
    <p><b>Excavation:</b> A 2005-2006 archaeological dig uncovered <b>60,000 artifacts</b> — points, tools, weapons, bone chips — dating back <b>8,000 years</b>. This is the <b>oldest continuously occupied site in Washington State</b>.</p>
    <p><b>Name:</b> "Latah" derives from a Nez Perce word meaning "place to fish." The creek was renamed "Hangman" on federal maps after Colonel George Wright hanged Yakama Chief Qualchan and other Native leaders without trial in 1858.</p>
    <p><b>Trade Center:</b> The confluence was a major encampment and trade hub for Spokane, Coeur d'Alene, Nez Perce, and Palouse peoples. Dried salmon was the portable commodity that drove trade. An oven hearth lined with shells was uncovered in the dig.</p>
    <p><b>Context:</b> The excavation was mandated by the state Antiquities Act before the city could install a stormwater retention tank.</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.plateauArchSites);

// --- Steptoe Butte (already exists but enhancing with CDA context) ---
// Existing marker covers Steptoe Butte — no duplicate needed

// --- Spokane River origin (Lake CdA outlet) ---
L.polyline([[47.68, -116.78], [47.66, -117.05], [47.65, -117.35], [47.65, -117.42],
  [47.69, -117.55], [47.76, -117.72], [47.85, -117.95], [47.90, -118.15],
  [47.92, -118.31]], {color: INW.water, weight: 2, opacity: 0.5, dashArray: '6,4'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW.water}">🌊 Spokane River — Stl'pul ("Swift Water")</h3>
    <p>111 miles from Lake Coeur d'Alene to the Columbia River. Called "a pathway of life for many, many generations." Three bands of the Spokane lived along its length. 11 primary fishing sites existed before 7 dams were built (1890-1922).</p>
    <p>Once home to "June Hogs" — Chinook salmon weighing over 100 pounds. Salmon chief regulated harvests with a club, oversaw the First Salmon Feast ceremony, and ensured fair sharing and enough fish released for spawning.</p>
  </div>`, {maxWidth: 350}).addTo(L_groups.spokaneTerr);


// ==================== SPOKANE TRIBE ====================

// --- Little Falls Fishery ---
L.circleMarker([47.82, -117.93], {radius: 5, color: INW.spk, fillColor: INW.spk, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${INW.spk}">🐟 Little Falls — Most Important Spokane River Fishery</h3>
    <p><b>Location:</b> Lower Spokane River (Lower Spokane Band territory)</p>
    <p>Before Little Falls Dam was completed (1911, no fish ladders), this was perhaps the most important fishing site on the river. Over 1,000 people gathered, harvesting up to <b>800 fish per day</b>. Indians from Coeur d'Alene, Colville, and other tribes also participated.</p>
    <p>Alex Sherwood, former Spokane Tribal Council Chair, testified in 1973: "When Little Falls went in, it stopped the fish."</p>
    <p>The dam destroyed the fishery and severed the salmon runs that had sustained the Spokane for millennia.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.spokaneTerr);

// --- Spokane House (first non-Indian settlement in WA) ---
L.circleMarker([47.79, -117.55], {radius: 4, color: INW.spk, fillColor: '#DAA520', fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW.spk}">🏠 Spokane House (1810) — First Non-Indian Settlement in Washington</h3>
    <p><b>Location:</b> Confluence of Spokane and Little Spokane Rivers</p>
    <p>Trading post established 1810 at the confluence — the first long-term non-Indian settlement in what is now Washington State. Three Spokane men had first encountered Europeans during the Lewis & Clark expedition on May 6, 1806.</p>
    <p>The name "Spokane" is often translated as "children of the sun," likely from Chief Illim-Spokanee ("Son of the Sun").</p>
  </div>`, {maxWidth: 350}).addTo(L_groups.spokaneTerr);


// ==================== NEZ PERCE / NIMIIPUU ====================

// --- Heart of the Monster ---
L.circleMarker([46.23, -115.98], {radius: 7, color: INW.nez, fillColor: INW.sacred, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${INW.sacred}">❤️ Heart of the Monster — Birthplace of the Nimiipuu</h3>
    <p><b>Location:</b> US-12 near Kamiah, Idaho (Nez Perce NHP — 53 acres)</p>
    <p><b>The Creation Story:</b> A monster lived in the Clearwater River valley and devoured all the animals for miles around. <b>Coyote</b> decided it must be killed. He armed himself with a flint knife, jumped down the monster's throat, and stabbed it in the heart.</p>
    <p>Then Coyote cut the body into pieces and fashioned tribes from each piece — sending them to occupy the mountains and plains. Finally, he discovered he had no tribe for this beautiful valley. So he squeezed a few drops of blood from the heart, and from this made the <b>Nez Perce</b> — "Thus from the lifeblood of this strange animal came a tribe having many of the most admirable qualities possessed by human beings."</p>
    <p><b>The Site:</b> A rock formation near the Clearwater River marks the heart. A walking trail and audio tour tell the story in both Nez Perce and English.</p>
    <p><b>The Nimiipuu</b> (meaning "The People") have lived in the valleys, prairies, and plateaus of north-central Idaho for at least <b>10,000 years</b>. Archaeological sites near Lewiston date to 10,800 years ago.</p>
    <p><b>Nez Perce NHP:</b> One of 38 sites across Idaho, Montana, Oregon, and Washington that make up the Nez Perce National Historical Park.</p>
  </div>`, {maxWidth: 420}).addTo(L_groups.nezperceTerr);

// --- Weippe Prairie — Lewis & Clark meeting + camas grounds ---
L.circleMarker([46.37, -115.93], {radius: 5, color: INW.nez, fillColor: INW.nez, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:450px;overflow-y:auto;">
    <h3 style="color:${INW.nez}">🌸 Weippe Prairie — Camas Grounds & Lewis & Clark First Contact</h3>
    <p><b>Location:</b> Near Weippe, Clearwater County, Idaho (National Historic Landmark)</p>
    <p><b>Sacred Camas Meadow:</b> A vast prairie where the Nez Perce gathered to dig camas bulbs, worship, and socialize for millennia. Between May and June, huge swaths of blue camas flowers bloom — the Nez Perce still gather here for the same reasons today.</p>
    <p><b>September 20, 1805:</b> William Clark and hunters, starving after crossing the Bitterroots, stumbled into a Nez Perce camp at the edge of the camas-digging ground. This was the <b>first contact between the Nez Perce and Anglo-Americans</b>. The Nez Perce fed them, likely saving the Corps of Discovery.</p>
    <p>The expedition entrusted their horses to Nez Perce caretakers and returned the following spring to recover them.</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.nezperceTerr);

// --- Ant and Yellowjacket ---
L.circleMarker([46.45, -116.82], {radius: 3, color: INW.nez, fillColor: INW.sacred, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW.sacred}">🐜 Ant and Yellowjacket — Nez Perce Story Site</h3>
    <p><b>Location:</b> Hwy 95, near Spalding, Idaho (Nez Perce NHP)</p>
    <p>One of three Coyote story sites interpreted by the NPS. The landscape formations tell the story of Coyote and other spirits. Interpretive signage recounts the Nez Perce legends that use the Idaho landscape as their setting.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.nezperceTerr);

// --- Coyote's Fishnet ---
L.circleMarker([46.44, -116.83], {radius: 3, color: INW.nez, fillColor: INW.sacred, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW.sacred}">🪝 Coyote's Fishnet — Nez Perce Story Site</h3>
    <p><b>Location:</b> Hwy 95, near Spalding, Idaho (Nez Perce NHP)</p>
    <p>Another landscape feature embodying a Coyote legend. These story sites are sacred to the Nimiipuu — the land itself is the text of their spiritual narratives.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.nezperceTerr);

// --- White Bird Battlefield ---
L.circleMarker([45.75, -116.32], {radius: 5, color: INW.war, fillColor: INW.war, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${INW.war}">⚔️ White Bird Battlefield — First Battle of the Nez Perce War (1877)</h3>
    <p><b>Location:</b> White Bird, Idaho County (Nez Perce NHP)</p>
    <p><b>June 17, 1877:</b> The Nez Perce were sheltering in their winter village of Lahmotta when U.S. Army civilian volunteers fired on a Nez Perce peace party. A battle ensued — the Nez Perce routed the cavalry, inflicting heavy losses.</p>
    <p>This forced the non-treaty Nez Perce bands under Chief Joseph, Looking Glass, and others to begin their epic <b>1,170-mile fighting retreat</b> toward Canada — one of the most remarkable military campaigns in American history.</p>
    <p>The flight ended 40 miles from the Canadian border at Bear Paw, Montana, where Chief Joseph spoke: "From where the sun now stands, I will fight no more forever."</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.nezperceTerr);

// --- Spalding / Lapwai Mission ---
L.circleMarker([46.45, -116.82], {radius: 4, color: INW.mission, fillColor: INW.mission, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW.mission}">⛪ Spalding Mission (1836) — Nez Perce NHP Visitor Center</h3>
    <p><b>Location:</b> Spalding, Nez Perce County, Idaho</p>
    <p>In 1831, a Nez Perce delegation traveled to St. Louis seeking "black-robes." In 1836, Henry and Eliza Spalding established a mission near Lapwai — the main NPS visitor center for Nez Perce NHP now occupies this site.</p>
    <p>The park interprets 38 sites across four states telling the story of the Nimiipuu.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.nezperceTerr);

// --- Tolo Lake (1877 gathering place) ---
L.circleMarker([46.05, -116.05], {radius: 3, color: INW.nez, fillColor: INW.nez, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW.nez}">🏕️ Tolo Lake — Gathering Place</h3>
    <p><b>Location:</b> Near Grangeville, Idaho County</p>
    <p>Traditional Nez Perce gathering and camping site at the edge of the Camas Prairie. Played a role during the Nez Perce War of 1877 — a meeting place where bands debated whether to fight or submit to the reservation.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.nezperceTerr);

// --- Canoe Camp (Lewis & Clark) ---
L.circleMarker([46.33, -116.28], {radius: 3, color: INW.nez, fillColor: '#4682B4', fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:#4682B4">🛶 Canoe Camp — Lewis & Clark + Nez Perce</h3>
    <p><b>Location:</b> Near Orofino, Clearwater County, Idaho (Nez Perce NHP)</p>
    <p>The Nez Perce helped Lewis and Clark build dugout canoes for their journey down the Clearwater and Snake Rivers to the Columbia. This cooperation was central to the expedition's survival and success.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.nezperceTerr);

// --- Clearwater Battlefield ---
L.circleMarker([46.25, -116.07], {radius: 4, color: INW.war, fillColor: INW.war, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW.war}">⚔️ Clearwater Battlefield (July 11-12, 1877)</h3>
    <p><b>Location:</b> Near Kamiah, Idaho (Nez Perce NHP)</p>
    <p>Second major battle of the Nez Perce War. After fierce fighting, the Nez Perce withdrew across the Clearwater and began their flight over the Lolo Trail — following the same route Lewis & Clark had used 72 years earlier.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.nezperceTerr);


// ==================== KALISPEL / PEND D'OREILLE ====================

// --- Lake Pend Oreille ---
L.circleMarker([48.10, -116.55], {radius: 6, color: INW.kal, fillColor: INW.water, fillOpacity: 0.4, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
    <h3 style="color:${INW.kal}">💧 Lake Pend Oreille — Kalispel Sacred Waters</h3>
    <p><b>The Kalispel</b> (Ql̓ispé — "Camas People") were "lake and river paddlers" who navigated in distinctive <b>sturgeon-nosed canoes</b> — blunt on each end, made from white pine bark turned inside out. The design cut through cattails and held straight in wind.</p>
    <p><b>Homeland:</b> 200 miles from Lake Pend Oreille through Idaho, NE Washington, into Montana and British Columbia. The Pend Oreille River ("ntxwe" — a word that reduces all other rivers to inferior status) bound one end to the other.</p>
    <p><b>Camas People:</b> In the floodplains, camas grew so abundantly the blue flowers made meadows look like water. Women dug the thumb-sized bulbs in early summer, roasted them underground with hot stones, made them into loaves and cakes for winter.</p>
    <p><b>Bear Paw Rock:</b> On the east shore, petroglyphs include <b>28 bear paws</b>, a deer or goat, and abstract circles with slashes. Sacred to the Kootenai and Kalispel. The creation legend says when Creator brought the first animals to earth in his canoe and Bear left tracks on still-hardening rock, the bond between the Kalispel and earth was forged.</p>
    <p><b>Albeni Falls Dam:</b> Lake levels now fluctuate 11 feet annually, threatening archaeological sites. ~200 known sites kept confidential. The Corps and tribe have identified 15 sites being excavated with Bonneville Power Administration funding.</p>
    <p><b>Priest Lake:</b> An arrowhead was carbon-dated at 5,000 years old. A pictograph site near Kalispell Bay shows a red stick figure and geometric designs.</p>
  </div>`, {maxWidth: 430}).addTo(L_groups.kalispelTerr);

// --- Denton Slough / Indian Meadows ---
L.circleMarker([48.16, -116.57], {radius: 4, color: INW.kal, fillColor: INW.kal, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${INW.kal}">🏕️ Denton Slough / Indian Meadows — Kalispel Gathering Ground</h3>
    <p><b>Location:</b> Near Ellisport Bay, Lake Pend Oreille, Idaho (28 acres, only 5 above water year-round)</p>
    <p>Also known as "Indian Meadows." Frequented by the Kalispel (as hosts), Coeur d'Alene, and Kootenai for summer celebrations, food collection, gambling, and trading. The "Buffalo Trail" into Montana departed from here — a natural gathering point for families returning from year-long buffalo hunting expeditions.</p>
    <p>Across the now-flooded meadow sits <b>Bear Paw Rock</b> — a rock art site memorializing one of the genesis stories of the Kalispel people.</p>
    <p>The assumed location of <b>Kullyspell House</b> (David Thompson, 1809) — the first non-Indian building in Idaho — is nearby.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.kalispelTerr);

// --- Priest River Ancient Encampment (9,000+ years) ---
L.circleMarker([48.18, -116.85], {radius: 4, color: INW.arch, fillColor: INW.arch, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW.arch}">🏛️ Priest River Ancient Encampment — 9,000+ Years</h3>
    <p><b>Location:</b> North and east of Priest River, Idaho</p>
    <p>Remnants of an ancient encampment with the earliest dates exceeding <b>9,000 years</b>. By the historical period it became a winter village under Chief Victor's older brother. Nearby Carey Creek provided camas, game, and fishing.</p>
    <p>Today used by tribal members for annual canoe trips reconnecting families with traditional gathering sites.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.kalispelTerr);

// --- St. Ignatius Mission (first Kalispel mission, 1842) ---
L.circleMarker([48.20, -117.28], {radius: 3, color: INW.mission, fillColor: INW.mission, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW.mission}">⛪ First St. Ignatius Mission (1842)</h3>
    <p><b>Location:</b> Near Cusick, WA (current Kalispel Reservation)</p>
    <p>Father De Smet established the first mission near the Kalispel's main camp in 1842. Due to harsh winters — ice blocking the river, only 6-8 inches of topsoil over 10 feet of clay — the mission was moved to St. Ignatius, Montana in 1852.</p>
    <p>When urged to move to Montana's Jocko Reservation, the Kalispel chief refused: "We have people buried here."</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.kalispelTerr);

// --- Cocolalla Trail ---
L.polyline([[47.45, -116.77], [47.65, -116.80], [47.90, -116.85], [48.10, -116.55]],
  {color: INW.kal, weight: 2, opacity: 0.5, dashArray: '8,4'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW.kal}">🛤️ Cocolalla Trail</h3>
    <p>Ancient trail connecting the Pend Oreille and Coeur d'Alene basins, portions now overlain by I-95. A vital through-route for early historical economic development between Fort Walla Walla and the northern interior (Montana). Used by Kalispel, Coeur d'Alene, and other tribes for millennia before European contact.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.kalispelTerr);


// ==================== ADDITIONAL ROCK ART ====================

// --- Lake Pend Oreille Petroglyphs (Bear Paw Rock) ---
L.circleMarker([48.08, -116.45], {radius: 5, color: INW.rock, fillColor: INW.rock, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${INW.rock}">🪨 Lake Pend Oreille Petroglyphs — Bear Paw Rock</h3>
    <p><b>Location:</b> East shore of Lake Pend Oreille, Idaho (exact location kept secret)</p>
    <p><b>Carvings:</b> 28 bear paws, a deer or goat, and abstract circles with slashes through them. Age unknown — cannot be carbon-dated due to campfire residue on the rock.</p>
    <p>First discovered by white settlers in 1896. Before 1945, chunks of rock containing petroglyphs were removed — a loss that prompted stricter protection. The Kootenai Indians consider the petroglyphs sacred and object to photography.</p>
    <p>The site was <b>removed from Forest Service maps</b> to protect it from vandalism. Locations of ~200 archaeological sites around the lake are kept confidential.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.plateauRockArt);

// --- Priest Lake Pictograph ---
L.circleMarker([48.50, -116.85], {radius: 3, color: INW.rock, fillColor: INW.rock, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW.rock}">🎨 Priest Lake Pictograph — Kalispell Bay</h3>
    <p><b>Location:</b> Rock near Kalispell Bay, Priest Lake, Idaho</p>
    <p>Red stick figure and geometric designs painted on rock. An arrowhead from Priest Lake was carbon-dated at 5,000 years old. Part of the broader tradition of pictograph and petroglyph sites across the Kalispel homeland.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.plateauRockArt);


// ==================== ADDITIONAL ARCHAEOLOGICAL SITES ====================

// --- Cooper's Ferry / Nipéhe (oldest site in North America) ---
L.circleMarker([45.75, -116.40], {radius: 7, color: INW.arch, fillColor: '#FFD700', fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
    <h3 style="color:${INW.arch}">⭐ Cooper's Ferry / Nipéhe — Among the Oldest Sites in North America</h3>
    <p><b>Location:</b> Lower Salmon River canyon, Idaho County, Idaho</p>
    <p><b>Age:</b> Radiocarbon dates of <b>~16,000 years ago</b> — making it one of the oldest archaeological sites in North America and among the earliest evidence of human habitation in the Americas.</p>
    <p><b>Nipéhe</b> is the Nez Perce name for this place — "we walked out" — remarkably consistent with a story of first arrival.</p>
    <p><b>Discovery:</b> Oregon State University-led excavation (Davis et al., published in Science, 2019). Found stemmed stone tools, fire-cracked rock, and animal bone fragments in sealed sediments well below the Clovis horizon.</p>
    <p><b>Significance:</b> The tool technology resembles artifacts from Late Pleistocene sites in northeastern Asia (Japan) more than Clovis points — supporting a Pacific coastal migration route rather than an ice-free corridor through Alberta. This challenges the "Clovis First" model of peopling the Americas.</p>
    <p><b>Interpretive Site:</b> The Nez Perce NHP has an interpretive display at the Cooper's Ferry-Nipéhe site.</p>
  </div>`, {maxWidth: 430}).addTo(L_groups.plateauArchSites);

// --- Lenore Archaeological Sites ---
L.circleMarker([46.40, -116.55], {radius: 3, color: INW.arch, fillColor: INW.arch, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW.arch}">🏛️ Lenore Archaeological Sites</h3>
    <p><b>Location:</b> Clearwater River near Lenore, Idaho</p>
    <p>Multiple pre-contact sites along the Clearwater documenting the Nez Perce seasonal round — winter villages along rivers, spring/summer camas gathering in prairies, fall salmon runs. Material evidence spans thousands of years of continuous habitation.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.plateauArchSites);


// ==================== COLVILLE / DAM LOSSES ====================

// --- Grand Coulee Dam fishery destruction ---
L.circleMarker([47.95, -118.98], {radius: 5, color: '#555', fillColor: '#555', fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:#555">🚫 Grand Coulee Dam — Death of the Upper Columbia Salmon</h3>
    <p><b>Completed:</b> 1942 (no fish ladders)</p>
    <p>The dam permanently blocked salmon from reaching over 1,000 miles of spawning habitat in the upper Columbia, Spokane, and tributary rivers. The Spokane, Colville, Kalispel, and Coeur d'Alene tribes lost their primary food source — salmon that had sustained them for over 10,000 years.</p>
    <p>Combined with Little Falls Dam (1911) and six other Spokane River dams, every major fishery on the Spokane was destroyed within a generation. The "June Hogs" — 100-pound Chinook that spawned in the Spokane — went extinct.</p>
    <p>The Columbia Basin once supported <b>16 million salmon and steelhead</b> returning each spring. Today the runs are a fraction of that.</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.plateauDams);

// --- Albeni Falls Dam (Kalispel impact) ---
L.circleMarker([48.18, -116.98], {radius: 4, color: '#555', fillColor: '#555', fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:#555">🚫 Albeni Falls Dam — Kalispel Homeland Flooded</h3>
    <p><b>Completed:</b> 1955 (U.S. Army Corps of Engineers)</p>
    <p>Raised Lake Pend Oreille levels, flooding traditional Kalispel gathering grounds, camas meadows, and archaeological sites. The 11-foot annual water fluctuation continues to erode sites. The Kalispel lost their annual pow wow grounds at Sandpoint City Beach, which had been used since time immemorial.</p>
    <p>Bonneville Power Administration provided mitigation funds — the tribe has used them to acquire habitat lands and fund archaeological protection.</p>
  </div>`, {maxWidth: 350}).addTo(L_groups.plateauDams);


// ==================== NEZ PERCE TRAIL (1877 FLIGHT) ====================

L.polyline([
  [45.75, -116.32],  // White Bird
  [46.25, -116.07],  // Clearwater
  [46.73, -115.55],  // Lolo Trail
  [46.64, -114.05],  // Big Hole (MT)
  [44.67, -111.58],  // Camas Meadows (MT)
  [44.73, -110.40],  // Yellowstone
  [45.88, -108.76],  // Canyon Creek (MT)
  [48.30, -109.87]   // Bear Paw (surrender)
], {color: INW.nez, weight: 3, opacity: 0.6, dashArray: '10,5'})
  .bindPopup(`<div class="popup-content" style="max-height:350px;overflow-y:auto;">
    <h3 style="color:${INW.nez}">🏃 Nez Perce Flight of 1877 — 1,170 Miles</h3>
    <p>From White Bird, Idaho to Bear Paw, Montana — 800 Nez Perce men, women, and children (only 200 warriors) fought and outmaneuvered the U.S. Army across 1,170 miles over 4 months through Idaho, Montana, and Wyoming.</p>
    <p>They crossed the Lolo Trail, fought at Big Hole (where women and children were killed in a dawn attack), raided through Yellowstone, and were finally surrounded 40 miles from Canada.</p>
    <p><b>Chief Joseph:</b> "Hear me, my chiefs! I am tired. My heart is sick and sad. From where the sun now stands, I will fight no more forever." (October 5, 1877)</p>
    <p>Nez Perce National Historic Trail (NPNHT) follows this route.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.nezperceTerr);
