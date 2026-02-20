// ============================================================
// 60-inland-nw-expansion-2.js
// Deeper Expansion #2: Eastern Washington & Northern Idaho
// Kootenai (Ktunaxa), Palouse, Lolo Trail Sacred Sites,
// Marmes Rockshelter enhancement, Battle sites, Trade routes
// ============================================================

const INW2 = {
  koo: '#2C3E50',     // Kootenai
  pal: '#D35400',     // Palouse
  nez: '#F39C12',     // Nez Perce
  spk: '#E74C3C',     // Spokane
  cda: '#1B4F72',     // Coeur d'Alene
  arch: '#8E44AD',    // Archaeological
  sacred: '#DC143C',  // Sacred
  trail: '#8B4513',   // Trail
  water: '#2980B9',   // Water
  war: '#555555',     // Conflict
  mission: '#C0392B'  // Missions
};


// ==================== KOOTENAI / KTUNAXA NATION ====================

// --- Kootenai homeland overview ---
L.circleMarker([48.70, -116.32], {radius: 6, color: INW2.koo, fillColor: INW2.koo, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${INW2.koo}">🦌 Kootenai Tribe of Idaho — Ktunaxa ("Those Who Guard the Land")</h3>
    <p><b>Self-name:</b> ʔaq̓anqmi (Idaho Ksanka). Part of the broader <b>Ktunaxa Nation</b> — seven bands spanning Idaho, Montana, Washington, British Columbia, and Alberta.</p>
    <p><b>Language:</b> Kutenai — a <b>language isolate</b>, unrelated to any other known language in the world. It has a distinctly musical quality.</p>
    <p><b>Creation:</b> Oral history says they were created by <b>Kwiǂqa Nupika</b> (Quilxka Nupita), the Creator-Spirit, with a sacred duty to safeguard the land forever.</p>
    <p><b>Territory:</b> Centered on the Kootenai River from Idaho through Montana to the falls in Montana. Broad-spectrum hunter-gatherers — white-tailed deer, elk, caribou, bear, bull trout, whitefish, camas, bitterroot, huckleberries, serviceberries. Occasional buffalo-hunting trips to Montana and salmon harvest at Kettle Falls on the Columbia.</p>
    <p><b>Sturgeon-Nose Canoe:</b> Like the Kalispel canoe but with a sharper point — shaped like the nose of a sturgeon. Unique to this region.</p>
    <p><b>Non-Treaty Tribe:</b> In 1855, Governor Stevens wanted to place them on a shared Montana reservation. The Idaho Kootenai <b>never signed the treaty</b> — "none from our band went over to sign it. We never left but stayed in our homeland here."</p>
    <p><b>Sun Worship:</b> The Kootenai worshipped the sun and believed in reincarnation. They believed the dead resided in the sun and would one day return to the shores of Lake Pend Oreille.</p>
    <p><b>Declaration of War (1974):</b> When the tribe numbered only 67 people, they formally <b>declared war on the United States</b> on September 20, 1974 — a peaceful act of desperation seeking federal recognition and a land base. It worked: they were deeded 12.5 acres. Since then they've expanded and built the Kootenai River Inn Casino.</p>
    <p><b>Sturgeon Recovery:</b> In 1991, the tribe built the first sturgeon hatchery in Indian Country, leading a groundbreaking effort to save the endangered Kootenai River white sturgeon — a species central to Ktunaxa identity.</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.plateauArchSites);

// --- Kootenai Falls (Sacred Site, Montana) ---
L.circleMarker([48.45, -115.75], {radius: 5, color: INW2.sacred, fillColor: INW2.sacred, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${INW2.sacred}">⛩️ Kootenai Falls — Sacred Site of the Ktunaxa</h3>
    <p><b>Location:</b> Kootenai River, ~20 miles east of Bonners Ferry, near Troy, Montana</p>
    <p>One of the <b>largest undammed waterfalls in the Northwest</b>. Sacred to the Kootenai for millennia — a place of prayer, ceremony, and spiritual power. Dance ceremonies on the shores of Lake Pend Oreille paid homage to the sun in accordance with the belief that the dead resided there.</p>
    <p>The Kootenai's sacred covenant with Kwiǂqa Nupika is tied to this place — they were placed on earth to be guardians of the land forever.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.plateauArchSites);

// --- St. Michael's Mission (Kootenai) ---
L.circleMarker([48.70, -116.33], {radius: 3, color: INW2.mission, fillColor: INW2.mission, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW2.mission}">⛪ St. Michael's Mission — Kootenai</h3>
    <p><b>Location:</b> Bonners Ferry, Idaho</p>
    <p>One of several island encampment sites used by the Kootenai. Jesuit missionaries from DeSmet visited yearly. After allotment-era losses, the mission grounds became one of the few remaining Kootenai spaces. Chief Blind established a village three miles below Bonners Ferry on the Kootenai River. When he passed in 1869, his son Abraham moved the village — following the Kootenai custom of relocating when a chief dies.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.plateauArchSites);


// ==================== PALOUSE TRIBE ====================

// --- Palouse Falls — Aputapat ("Falling Water") ---
L.circleMarker([46.66, -118.23], {radius: 7, color: INW2.pal, fillColor: INW2.sacred, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${INW2.sacred}">🌊 Palouse Falls — Aputapat ("Falling Water")</h3>
    <p><b>Location:</b> Palouse Falls State Park Heritage Site, Franklin County, WA — 198-foot waterfall</p>
    <p><b>Sacred Site:</b> The Palouse (Palúšpam — "People of Palús") considered the falls a sacred place possessing <b>healing powers</b>. It was a community gathering place for ceremonies and rituals. They are also known as Naha'u'umpu'u — "People of the River."</p>
    <p><b>Creation Story — The Great Beaver:</b> During the time of the Animal People, Beaver lived peacefully at his lodge near Rock Lake. The five Wolf Brothers killed him with spears, but not before an epic battle that shaped the entire Palouse landscape. Beaver was mortally wounded at the falls. In his death agony, he thrashed and flailed, gouging the rocks with his mighty claws and teeth, carving the sheer cliffs that surround the falls.</p>
    <p>Beaver died at the Snake River confluence, where his giant <b>heart transformed to stone</b> — the large rock on the west side of the Palouse River still visible today. The Palus are said to have "sprung from his heart."</p>
    <p><b>Geology:</b> Created ~13,000 years ago by the catastrophic Missoula Floods — ice-dammed glacial Lake Missoula burst repeatedly, sending walls of water across eastern Washington. The floods overtopped the ancient Palouse River channel, diverting it and carving the 200-foot canyon through columnar basalt. One of the few remaining active waterfalls from this massive flood path.</p>
    <p><b>Palouse Village:</b> The tribe's largest and oldest village (Palús) stood near the confluence of the Palouse and Snake Rivers. Lewis and Clark noted the village in 1805. The Palouse were renowned horsemen who developed the spotted <b>Appaloosa</b> horse breed.</p>
    <p><b>Today:</b> Washington's official state waterfall (designated 2014, championed by Washtucna elementary school students). 10,000+ years of archaeological evidence.</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.palouseTerr);

// --- Palús Village site (Snake-Palouse confluence) ---
L.circleMarker([46.59, -118.22], {radius: 4, color: INW2.pal, fillColor: INW2.pal, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:350px;overflow-y:auto;">
    <h3 style="color:${INW2.pal}">🏘️ Palús Village — Confluence of Snake & Palouse Rivers</h3>
    <p><b>Location:</b> Near Lyons Ferry State Park, Franklin County, WA</p>
    <p>The Palouse tribe's largest and oldest village, noted by Lewis and Clark in 1805. Neighboring people called them <b>Palúšpam</b> — "People of Palús." The Sahaptin-speaking Palouse were master horsemen whose spotted horses became the Appaloosa breed.</p>
    <p>Human remains from the village, disturbed by later construction, were reburied on a nearby hillside beneath a marker reading "The last resting place of the Palouse Indians."</p>
    <p>Local tribes ceded ownership under duress in the Yakima Treaty of Camp Stevens (1855), retaining rights to harvest at "usual and accustomed places."</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.palouseTerr);

// --- Marmes Rockshelter (ENHANCED — already in file 37 as basic, this adds depth) ---
L.circleMarker([46.60, -118.19], {radius: 6, color: INW2.arch, fillColor: '#FFD700', fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:600px;overflow-y:auto;">
    <h3 style="color:${INW2.arch}">⭐ Marmes Rockshelter — 11,000+ Years (INUNDATED 1969)</h3>
    <p><b>Location:</b> Palouse River Canyon, near Lyons Ferry, Franklin County, WA</p>
    <p><b>Discovery:</b> Rancher John McGregor showed WSU anthropologist Richard Daugherty the site in 1952. Excavation began in 1962 under Daugherty and geologist Roald Fryxell.</p>
    <p><b>Finds:</b> Thousands of Stone Age artifacts — the oldest human remains in Washington State, radiocarbon-dated to <b>over 11,000 years before present</b>. At the time, the oldest in North America. The alcove was 40 feet wide and 25 feet deep. Continuous habitation for ~8,000 years documented in stratified deposits.</p>
    <p><b>Mortuary practices</b> of early Plateau inhabitants confirmed from at least 12,000 years ago — ceremonial burial pits, bone tools, animal remains.</p>
    <p><b>The Race Against the Dam:</b> Lower Monumental Dam construction was already underway. In 1965, rancher Marmes bulldozed a trench that exposed human and elk bones dated to 10,000 years. Senator Magnuson secured a presidential executive order from LBJ — <b>$1.5 million</b> for a protective cofferdam.</p>
    <p><b>The Failure:</b> In February 1969, the reservoir filled. Water seeped through gravel beneath the cofferdam, flooding the site under <b>40 feet of water</b>. Scientists frantically covered what they could with plastic and sand, then watched helplessly.</p>
    <p><b>Legacy:</b> The loss galvanized public opinion, leading to stronger archaeological protection laws. National Historic Landmark (1966) — one of the first in Washington. Today only the crumbling top of the cofferdam is visible from Lyons Ferry State Park. If the dams are ever breached, archaeologists plan to return.</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.plateauArchSites);


// ==================== LOLO TRAIL — NEZ PERCE SACRED CORRIDOR ====================

// --- Lolo Trail overview polyline ---
L.polyline([
  [46.73, -115.55],  // Lolo Pass
  [46.63, -115.45],  // Packer Meadow
  [46.55, -115.35],  // Indian Post Office
  [46.45, -115.32],  // Smoking Place
  [46.42, -115.31],  // Sinque Hole
  [46.38, -115.28],  // Spirit Revival Ridge
  [46.37, -115.93]   // Weippe Prairie
], {color: INW2.trail, weight: 3, opacity: 0.7, dashArray: '10,5'})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${INW2.trail}">🛤️ K'useyneiskit — The Lolo Trail (National Historic Landmark)</h3>
    <p>The Nez Perce name for this ancient ridgeline route across the Bitterroot Mountains is <b>K'useyneiskit</b>. Used for thousands of years — Nez Perce traveling east to the Great Plains for buffalo, Flathead and Salish peoples trading west.</p>
    <p>Lewis and Clark crossed it in September 1805 (nearly starving) and June 1806 (guided by Nez Perce). The 1877 Nez Perce under Chief Joseph fled along it. The CCC built the Lolo Motorway along the corridor in the 1930s.</p>
    <p>Contains multiple sacred Nez Perce sites: Smoking Place, Indian Post Office, Spirit Revival Ridge, Sinque Hole.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.nezperceTerr);

// --- Indian Post Office ---
L.circleMarker([46.55, -115.35], {radius: 4, color: INW2.sacred, fillColor: INW2.sacred, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW2.sacred}">🗿 Indian Post Office — Nez Perce Cairn Site</h3>
    <p><b>Location:</b> Highest point on the Lolo Trail, Idaho</p>
    <p>A series of stone cairns traditionally used by the Nez Perce for communication and ceremonial purposes. The "post office" name reflects the trail-marker function — travelers left and received messages through cairn arrangements. Incredible 360° views of the Bitterroot Mountains.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.nezperceTerr);

// --- Smoking Place ---
L.circleMarker([46.45, -115.32], {radius: 5, color: INW2.sacred, fillColor: INW2.sacred, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${INW2.sacred}">🌿 The Smoking Place — Sacred Nez Perce Site</h3>
    <p><b>Location:</b> Lolo Trail, Nez Perce-Clearwater National Forest, Idaho</p>
    <p>A sacred Nimiipuu site with <b>ceremonial stone cairns</b> — a conic mound of stones 6-8 feet high with a 15-foot pine pole erected on top. Used for prayer and ceremony for centuries before European contact.</p>
    <p><b>Lewis & Clark (June 1806):</b> "We halted by the request of the [Nez Perce] Guides a fiew minits on an ellevated point and Smoked a pipe... the nativs have raised a conic mound of Stons of 6 or 8 feet high and erected a pine pole of 15 feet long. From this place we had an extencive view of these Stupendeous Mountains principally Covered with Snow" — Meriwether Lewis</p>
    <p>Please respect this sacred site. Protected by federal law.</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.nezperceTerr);

// --- Sinque Hole Camp ---
L.circleMarker([46.42, -115.31], {radius: 3, color: INW2.trail, fillColor: INW2.trail, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW2.trail}">🕳️ Sinque Hole — Lewis & Clark Camp (Sept 17, 1805)</h3>
    <p><b>Location:</b> Grave Creek meadow, Lolo Trail, Idaho</p>
    <p>"Camped at a Small branch on the mountain near a round deep Sinque hole full of water" — Private Whitehouse. A waterlogged meadow used as a camping area by Nez Perce, trappers, road builders, and hunters for centuries.</p>
    <p>Contains the grave of a teenage Nez Perce boy who died here around 1895.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.nezperceTerr);

// --- Spirit Revival Ridge ---
L.circleMarker([46.38, -115.28], {radius: 4, color: INW2.sacred, fillColor: INW2.nez, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW2.nez}">🌄 Spirit Revival Ridge — "Inexpressible Joy"</h3>
    <p><b>Location:</b> Lolo Trail near Sherman Peak, Idaho</p>
    <p>The ridge where the starving Corps of Discovery first glimpsed the western plains and Camas Prairie below. Lewis wrote: "the ridge terminated and we to our inexpressable joy discovered a large tract of Prairie... the appearance of this country, our only hope for subsistance greately revived the sperits of the party."</p>
    <p>After days of near-starvation crossing the Bitterroots, this sight meant survival — the Nez Perce villages and food were below.</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.nezperceTerr);

// --- Lolo Pass ---
L.circleMarker([46.63, -115.55], {radius: 4, color: INW2.trail, fillColor: INW2.trail, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW2.trail}">⛰️ Lolo Pass — Gateway to the Bitterroots</h3>
    <p><b>Location:</b> Idaho-Montana border (5,235 ft elevation)</p>
    <p>The Nez Perce used this pass for thousands of years to cross to Montana buffalo grounds. Lewis and Clark crossed here in both directions. In 1877, the fleeing Nez Perce crossed under pursuit by the U.S. Army. Today a visitor center tells the story.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.nezperceTerr);


// ==================== SPOKANE DEEP SITES ====================

// --- Spokane Garry's Camp ---
L.circleMarker([47.66, -117.41], {radius: 3, color: INW2.spk, fillColor: INW2.spk, fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW2.spk}">🏠 Spokan Garry's Camp — Spokane River Gorge</h3>
    <p><b>Chief Spokan Garry</b> (~1811-1892), leader of the Middle Spokane, served as liaison between settlers and tribes. In his later years he lived in and near the Spokane River Gorge — the area now called Kendall Yards. Today the Spokane Tribe's Gathering at the Falls Powwow draws representatives from over 200 tribes annually.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.spokaneTerr);

// --- Chamokane Creek / Tshimikain Mission ---
L.circleMarker([47.90, -117.80], {radius: 3, color: INW2.mission, fillColor: INW2.mission, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW2.mission}">⛪ Tshimikain Mission (1838) — Walker & Eells</h3>
    <p><b>Location:</b> Chamokane Creek (Tshimikain), lower Spokane River basin</p>
    <p>Protestant mission established 1838 by Elkanah Walker and Cushing Eells among the Spokane people — one of several missions across the Plateau. Chamokane Creek was an important Spokane fishing site. The creek later became contaminated by uranium mine effluent.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.spokaneTerr);


// ==================== BATTLE SITES ====================

// --- Battle of Four Lakes / Spokane Plains (1858) ---
L.circleMarker([47.57, -117.55], {radius: 5, color: INW2.war, fillColor: INW2.war, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${INW2.war}">⚔️ Battle of Four Lakes / Spokane Plains (1858)</h3>
    <p><b>Location:</b> Near present-day Cheney, WA (Four Lakes) and Spokane Plains</p>
    <p>Colonel George Wright's campaign against the Spokane, Coeur d'Alene, and Palouse tribes. On September 1, 1858, Wright's forces defeated a coalition of ~500 warriors at Four Lakes using new long-range rifles. On September 5, another engagement at Spokane Plains.</p>
    <p><b>Aftermath:</b> Wright captured 800-900 Palouse horses and <b>ordered them all slaughtered</b> at a place now called "Horse Slaughter Camp" near Liberty Lake — destroying the tribes' wealth and mobility. He then hanged Yakama Chief Qualchan and others without trial at Latah Creek.</p>
    <p>These acts ended organized military resistance by Plateau tribes. The Spokane and Coeur d'Alene were forced onto reservations.</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.plateauArchSites);

// --- Horse Slaughter Camp ---
L.circleMarker([47.65, -117.10], {radius: 4, color: INW2.war, fillColor: '#8B0000', fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:#8B0000">💀 Horse Slaughter Camp (September 1858)</h3>
    <p><b>Location:</b> Near Liberty Lake, WA</p>
    <p>Colonel Wright ordered the slaughter of <b>800-900 captured Palouse horses</b> — the Palouse tribe's greatest wealth and pride. The Palouse had developed the Appaloosa breed over generations. Destroying these animals was a calculated act to break the tribes' power, mobility, and spirit.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.palouseTerr);


// ==================== COEUR D'ALENE DEEP SITES ====================

// --- Heyburn State Park (oldest in Idaho) ---
L.circleMarker([47.35, -116.76], {radius: 4, color: INW2.cda, fillColor: INW2.cda, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW2.cda}">🌲 Heyburn State Park — Idaho's Oldest (1908)</h3>
    <p><b>Location:</b> Southern end of Lake Chatcolet / Lake Coeur d'Alene, Benewah County</p>
    <p>Idaho's oldest state park (1908), on land that was part of the original Coeur d'Alene Reservation. The Schitsu'umsh gathered here for centuries — the lakes and rivers provided fish, the prairies provided camas. Today it sits at the ecological and cultural heart of Coeur d'Alene country.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.coeurTerr);

// --- St. Joe River — First CdA Mission Site ---
L.circleMarker([47.32, -116.57], {radius: 3, color: INW2.cda, fillColor: INW2.water, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW2.water}">🌊 St. Joe River — First Mission Site (1842)</h3>
    <p>Father De Smet's first mission to the Coeur d'Alene was built along the St. Joe River in 1842 — but abandoned due to seasonal flooding. The St. Joe was a primary waterway for the Schitsu'umsh, supporting villages, fishing, and transportation by canoe.</p>
    <p>The Supreme Court's 2001 ruling confirmed Coeur d'Alene tribal ownership of related St. Joe River waters.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.coeurTerr);

// --- Silver Valley / Bunker Hill Superfund ---
L.circleMarker([47.52, -116.10], {radius: 4, color: '#555', fillColor: '#8B0000', fillOpacity: 0.6, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:#8B0000">☠️ Silver Valley — Bunker Hill Superfund Site</h3>
    <p><b>Location:</b> Coeur d'Alene River basin, Shoshone County, Idaho</p>
    <p>Over 100 years of silver, lead, and zinc mining produced billions of dollars in minerals while dumping <b>72 million tons of mine waste</b> into the Coeur d'Alene watershed. A 1929 newspaper described a river trip: "Up the River of Muck and into the Valley of Death."</p>
    <p>Designated 1983 as the nation's <b>second-largest Superfund site</b>. In 1991, the Coeur d'Alene Tribe filed a landmark natural resource damage lawsuit — one of the largest in American history. The U.S. (1996) and Idaho (2011) joined. Settlements in 2008 and 2011 funded cleanup.</p>
    <p>Tribal elder Henry SiJohn: "If we control the lake, we can clean it up. We do what we do not just for the Coeur d'Alene Tribe, but for everybody."</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.coeurTerr);

// --- 1858 Coeur d'Alene War ---
L.circleMarker([47.40, -116.85], {radius: 4, color: INW2.war, fillColor: INW2.war, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW2.war}">⚔️ Coeur d'Alene War / Skitswish War (1858)</h3>
    <p><b>May-September 1858:</b> Also called the Spokane-Coeur d'Alene-Palouse War. Coeur d'Alene, Spokane, and Palouse warriors fought U.S. forces in response to settler encroachment and treaty violations. After initial victories, the tribes were defeated by Colonel Wright's superior weapons.</p>
    <p>The discovery of silver in 1863 brought floods of miners and settlers, accelerating dispossession of Coeur d'Alene lands.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.coeurTerr);


// ==================== TRADE ROUTES & WATERWAYS ====================

// --- Buffalo Trail (Idaho to Montana) ---
L.polyline([
  [48.16, -116.55],  // Denton Slough / Lake Pend Oreille
  [48.00, -116.20],  // Clark Fork area
  [47.80, -115.80],  // Over Bitterroots
  [47.50, -115.30],  // Into Montana
  [47.20, -114.50]   // Flathead / buffalo country
], {color: INW2.trail, weight: 2, opacity: 0.5, dashArray: '6,4'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW2.trail}">🦬 Buffalo Trail — Idaho to Montana</h3>
    <p>Ancient route used by Kalispel, Coeur d'Alene, Kootenai, and Spokane families for year-long buffalo-hunting expeditions to the Montana plains. The trail departed from Lake Pend Oreille area and crossed the Bitterroot Range. Young men made the journey as rites of passage into leadership. Families gathered at Denton Slough upon return.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.plateauArchSites);

// --- Pend Oreille River (Kalispel lifeline) ---
L.polyline([
  [48.10, -116.55],  // Lake Pend Oreille outlet
  [48.20, -117.10],  // Mid-course
  [48.40, -117.25],  // Cusick area (reservation)
  [48.75, -117.35],  // Metaline Falls area
  [49.00, -117.55]   // Into BC
], {color: INW2.water, weight: 2, opacity: 0.5, dashArray: '6,4'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW2.water}">🌊 Pend Oreille River — Ntxwe ("The River")</h3>
    <p>The Kalispel name "ntxwe" symbolically reduces all other streams to inferior status. 200 miles binding together the entire Kalispel homeland from Lake Pend Oreille through NE Washington into British Columbia. The river provided fish, transportation, camas meadows in its floodplains, and the cultural identity of the "People of the Oreille."</p>
    <p>Today the river is controlled by multiple dams, but the Kalispel Tribe has set its own water quality standards under EPA authorization.</p>
  </div>`, {maxWidth: 350}).addTo(L_groups.kalispelTerr);

// --- Kootenai River ---
L.polyline([
  [48.75, -116.32],  // Bonners Ferry
  [48.65, -116.10],  // Upstream
  [48.50, -115.90],  // Canyon
  [48.45, -115.75]   // Kootenai Falls
], {color: INW2.water, weight: 2, opacity: 0.5, dashArray: '6,4'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW2.water}">🌊 Kootenai River — Lifeline of the Ktunaxa</h3>
    <p>The Idaho section includes 66 river miles — 47 miles of wide, slow meanders from Porthill to Bonners Ferry, then 19 canyon miles to Montana. The river sustained the Kootenai with bull trout, whitefish, white sturgeon, and burbot. Libby Dam (Montana) now controls flow, while the tribe fights to restore endangered sturgeon.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.plateauArchSites);


// ==================== PALOUSE LANDSCAPE ====================

// --- Steptoe Butte creation story ---
// (already exists in file 37, but linking Palouse perspective)

// --- Rock Lake (Beaver's Lodge) ---
L.circleMarker([47.15, -117.65], {radius: 3, color: INW2.pal, fillColor: INW2.sacred, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW2.pal}">🦫 Rock Lake — Beaver's Lodge (Palouse Creation)</h3>
    <p><b>Location:</b> Whitman County, WA</p>
    <p>In the Palouse creation story, this is "Hole-in-the-Ground" where Beaver lived peacefully before the five Wolf Brothers attacked. The battle between Beaver and the Wolves created the rocky, undulating geography of the entire Palouse country. Rock Lake itself is the remains of Beaver's lodge.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.palouseTerr);

// --- Appaloosa Heritage ---
L.circleMarker([46.40, -117.00], {radius: 3, color: INW2.pal, fillColor: INW2.pal, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${INW2.pal}">🐴 Appaloosa Heritage — Palouse Horse Country</h3>
    <p><b>Location:</b> Palouse Prairie region, SE Washington / N Idaho</p>
    <p>The Palouse people were renowned horsemen who selectively bred the spotted <b>Appaloosa</b> — named after the "Palouse River country." The breed was developed over generations for endurance, speed, and sure-footedness on the hilly Palouse terrain. Colonel Wright's 1858 slaughter of 800-900 Palouse horses was a direct assault on this breeding legacy.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.palouseTerr);
