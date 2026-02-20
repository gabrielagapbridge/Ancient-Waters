// ============================================================
// 61-submerged-sites-waterway-changes.js
// "What Lies Beneath" — Submerged & Destroyed Indigenous Sites
// Dams, Reservoir Inundation, Rock Art Lost, Villages Drowned
// Eastern Washington, Northern Idaho, Columbia Plateau
// ============================================================

const SUB = {
  drowned: '#1A237E',    // Deep blue — submerged sites
  destroyed: '#B71C1C',  // Deep red — destroyed sites
  threatened: '#FF6F00', // Orange — threatened/eroding
  saved: '#2E7D32',      // Green — rescued/relocated
  dam: '#37474F',        // Dark gray — dam infrastructure
  fishery: '#0277BD',    // Blue — lost fisheries
  rockart: '#FF8C00',    // Orange — rock art
  village: '#6A1B9A',    // Purple — village sites
  water: '#0D47A1'       // Water features
};


// =====================================================
// LOWER SNAKE RIVER — FOUR DAMS, ONE CATASTROPHE
// "one of dozens inundated by the four dams"
// =====================================================

// --- Ice Harbor Dam (1962) — First of the Four ---
L.circleMarker([46.25, -118.88], {radius: 6, color: SUB.dam, fillColor: SUB.destroyed, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${SUB.destroyed}">🔴 Ice Harbor Dam (1962) — Lake Sacajawea</h3>
    <p><b>Location:</b> Snake River, mile 9.7, Franklin County, WA</p>
    <p><b>What Was Lost:</b></p>
    <p>Lake Sacajawea (30 miles long, 9,200 acres) drowned an entire landscape of Indigenous life. The Corps acknowledged: <b>"Several Indian burial grounds were inundated by the backwater."</b></p>
    <p>The reservoir submerged the <b>Windust Caves</b> — nine caves with 10,000+ years of continuous human occupation (see below). Salvage excavation was rushed in 1959-61 before the water rose.</p>
    <p>Numerous villages, fishing sites, temporary camps, storage pits, shell middens, and <b>rock art — both pictographs and petroglyphs</b> — were drowned along the Snake River corridor. Three Archaeological Districts in this region are on the National Register.</p>
    <p>The Columbia Plateau was inhabited as early as <b>11,500 years ago</b>, with settlements established by 11,230 years ago. The four Lower Snake dams collectively destroyed one of the richest archaeological corridors in North America.</p>
    <p><b>The Pattern:</b> Congress authorized the Lower Snake River Project in 1945. Ice Harbor (1962), Lower Monumental (1969), Little Goose (1970), Lower Granite (1975) — transforming 140 miles of free-flowing river into a chain of slack-water reservoirs. Salmon runs collapsed to a fraction of historic levels. All Snake River salmon are now listed as threatened or endangered.</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.plateauDams);

// --- Windust Caves (SUBMERGED 1962) ---
L.circleMarker([46.36, -118.62], {radius: 6, color: SUB.drowned, fillColor: '#FFD700', fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${SUB.drowned}">🌊⭐ Windust Caves — 10,000+ Years (SUBMERGED 1962)</h3>
    <p><b>Location:</b> North bank of Snake River, Franklin County, WA — now under Lake Sacajawea</p>
    <p><b>Nine caves</b> eroded into basalt cliffs, excavated 1959-1961 by Harvey Rice in a desperate salvage before Ice Harbor Dam's reservoir filled.</p>
    <p><b>The Windust Phase:</b> This site was so important it gave its name to an entire archaeological era — the <b>Windust Phase</b> (13,100-7,600 cal BP), the earliest documented cultural period of the Columbia Plateau. Artifacts included stemmed projectile points of the Western Stemmed Tradition, stone chips, marine shells (evidence of long-distance trade with the coast), and animal bone fragments.</p>
    <p><b>Five distinct periods</b> of cultural occupation in unbroken succession — from the earliest human presence through the historic period. The caves had been partially disturbed by Northern Pacific Railway construction and collectors, but the deeper strata held pristine deposits.</p>
    <p><b>Submerged 1962</b> when Lake Sacajawea filled. The caves remain underwater, their basalt cliffs invisible beneath the reservoir. Some cave sites nearby had already been severely damaged by relic collectors before the professional salvage began.</p>
    <p>National Register of Historic Places (1984) — listed for a site that can no longer be visited.</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.plateauArchSites);

// --- Lower Monumental Dam (1969) — Marmes Disaster ---
L.circleMarker([46.57, -118.54], {radius: 5, color: SUB.dam, fillColor: SUB.destroyed, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${SUB.destroyed}">🔴 Lower Monumental Dam (1969) — Lake Herbert G. West</h3>
    <p><b>Location:</b> Snake River, mile 41.5, Franklin County, WA</p>
    <p>The 28-mile reservoir (named for the dam promoter, not a tribal leader) submerged the <b>Palouse Canyon Archaeological District</b> — including Marmes Rockshelter (11,000+ years), the Palús Village, and dozens of other sites.</p>
    <p>DamSense documented this was "one of dozens [of archaeological sites] inundated by the four dams." The ancient Palús village at the confluence of the Snake and Palouse Rivers — Lewis and Clark's 1805 campsite — was drowned.</p>
    <p>Tribal gravesites were inundated, making it <b>impossible for tribal people to care for these graves</b> in their normal ways.</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.plateauDams);

// --- Little Goose Dam (1970) ---
L.circleMarker([46.58, -118.03], {radius: 4, color: SUB.dam, fillColor: SUB.destroyed, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SUB.destroyed}">🔴 Little Goose Dam (1970) — Lake Bryan</h3>
    <p><b>Location:</b> Snake River, mile 70, Columbia County, WA</p>
    <p>37-mile reservoir drowned additional village sites, fishing camps, and burial grounds along the Snake River canyon. Archaeological salvage was minimal before inundation.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.plateauDams);

// --- Lower Granite Dam (1975) ---
L.circleMarker([46.66, -117.43], {radius: 4, color: SUB.dam, fillColor: SUB.destroyed, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content" style="max-height:350px;overflow-y:auto;">
    <h3 style="color:${SUB.destroyed}">🔴 Lower Granite Dam (1975) — The Last Dam</h3>
    <p><b>Location:</b> Snake River, mile 107, Whitman County, WA</p>
    <p>The fourth and final dam. Environmental groups, including the Association of Northwest Steelheaders, lobbied hard to prevent its construction. They failed. The Army Corps had planned a <b>fifth dam at Asotin</b> — which would have drowned additional Snake River canyon sites including areas near Buffalo Eddy — but it was never built.</p>
    <p>The reservoir extended navigation to Lewiston, Idaho — the farthest inland seaport on the West Coast — at the cost of 140 miles of free-flowing river habitat.</p>
    <p><b>Dam breaching debate:</b> If the four Lower Snake dams are ever removed, archaeologists plan to return to now-inundated sites. But there are concerns: erosion during drawdown could expose and damage fragile sites, and looting would be an immediate threat. Tribal cultural resources would need protection before, during, and after any removal.</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.plateauDams);


// =====================================================
// SPOKANE RIVER — SEVEN DAMS, EVERY FISHERY DESTROYED
// "For the Indians, it was a catastrophe"
// =====================================================

// --- Long Lake Dam (1915) — The Final Block ---
L.circleMarker([47.84, -117.85], {radius: 5, color: SUB.dam, fillColor: SUB.destroyed, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
    <h3 style="color:${SUB.destroyed}">🔴 Long Lake Dam (1915) — 23.5-Mile Reservoir</h3>
    <p><b>Location:</b> Spokane River, mile 34, Lincoln/Stevens County border</p>
    <p>When completed, it was the <b>"world's highest spillway dam."</b> It had <b>no fish ladder</b>. Nothing made it past Long Lake Dam. This was the death blow for Spokane River salmon.</p>
    <p><b>Submerged Sites:</b> The 23.5-mile Long Lake reservoir (also called Lake Spokane) drowned <b>many prehistoric dwelling places</b> along its length. A 2004 archaeological survey funded by Avista Utilities found that "many of the prehistoric dwelling places along present-day Long Lake were flooded after the dam was constructed in 1915. Only the upper end of the reservoir has its original landforms."</p>
    <p>Archaeologists described finding "remnants of ancient villages buried under deep layers of sediment" and sites yielding "small flecks of charcoal from prehistoric hearths." They were "extremely secretive" about locations — many sites had already been looted.</p>
    <p>An old settler recalled: "The day the river was blocked was a sad day for the pioneers who had grown to depend on the salmon." Then he added: <b>"But for the Indians, it was a catastrophe."</b></p>
  </div>`, {maxWidth: 450}).addTo(L_groups.plateauDams);

// --- Nine Mile Dam (1908) — Rock Paintings Nearby ---
L.circleMarker([47.78, -117.58], {radius: 4, color: SUB.dam, fillColor: SUB.dam, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content" style="max-height:350px;overflow-y:auto;">
    <h3 style="color:${SUB.dam}">⚙️ Nine Mile Dam (1908)</h3>
    <p><b>Location:</b> Spokane River, mile 58, near Nine Mile Falls</p>
    <p>Built by Jay P. Graves to power Spokane's streetcar system. At completion it boasted the <b>tallest spillway in the world</b> (170 feet). Relatively low, it did not entirely block fish runs — but it was the beginning of the end.</p>
    <p><b>Rock Art:</b> Ancient rock paintings exist along the Little Spokane River just upstream from its confluence with the Spokane near this dam. A 1920 photograph documents "Pictographs next to Sturman's Bridge on the Little Spokane River" — now within Riverside State Park.</p>
    <p>The salmon chief system — regulating fish harvests by net, weir, or spear — ended here. The salmon chief's ornamented clubs are now a key part of the archaeological record.</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.plateauDams);

// --- Little Spokane River Pictographs ---
L.circleMarker([47.78, -117.53], {radius: 4, color: SUB.rockart, fillColor: SUB.rockart, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${SUB.rockart}">🎨 Little Spokane River Pictographs (Surviving)</h3>
    <p><b>Location:</b> Near confluence with Spokane River, Riverside State Park</p>
    <p>Ancient Spokane rock paintings documented as early as 1920 near Sturman's Bridge. These pictographs survive because they sit above dam-pool levels. The Little Spokane River area was critical habitat for the Middle Spokane band — home of Chief Spokan Garry.</p>
    <p>The salmon runs that once brought 1,000+ people to this area are gone — killed by dams downstream.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.plateauRockArt);

// --- Q'emiln Village / Treaty Rock (Post Falls) ---
L.circleMarker([47.72, -116.95], {radius: 4, color: SUB.village, fillColor: SUB.village, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${SUB.village}">🏘️ Q'emiln Village & Treaty Rock — Post Falls</h3>
    <p><b>Location:</b> Post Falls, Idaho — Spokane River at first natural falls</p>
    <p><b>Q'emiln</b> (ka-mee'-lin) = "Throat of the River" — a Coeur d'Alene village at the natural falls where the Spokane River exits Lake Coeur d'Alene. Inhabited for thousands of years.</p>
    <p><b>Treaty Rock:</b> Within 3-acre Treaty Rock Park, a granite outcropping bears Native American <b>pictographs</b> including figures on horseback (post-1730). Rock carvings include the date "June 1, 1871" and "Frederick Post" — the town's founder. The 1891 Treaty between the U.S. Government and Coeur d'Alene Tribe references this site.</p>
    <p><b>Post Falls Dam</b> (1906) controls Lake Coeur d'Alene levels, raising summer elevation to 2,128 feet. This altered the lakeshore environment that sustained Schitsu'umsh villages for millennia, though the lake's basic shorelines remained more intact than river corridors downstream.</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.coeurTerr);


// =====================================================
// LAKE COEUR D'ALENE — POISONED WATERS
// 75 million metric tons of toxic sediment
// =====================================================

L.circleMarker([47.45, -116.78], {radius: 5, color: SUB.threatened, fillColor: SUB.threatened, fillOpacity: 0.6, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
    <h3 style="color:${SUB.threatened}">⚠️ Lake Coeur d'Alene — ~200 Archaeological Sites at Risk</h3>
    <p><b>The Unseen Threat:</b> Unlike sites drowned by dams, Lake Coeur d'Alene's ~200 known archaeological sites face a different enemy: <b>75 million metric tons of toxic metal-contaminated sediment</b> from a century of silver, lead, and zinc mining.</p>
    <p>The Schitsu'umsh lived along this lake for thousands of years — fishing for bull trout, digging water potatoes, building villages on its shores. A 2004 Avista-funded survey found "remnants of ancient villages buried under deep layers of sediment" and evidence of prehistoric lakeside dwellers going back thousands of years.</p>
    <p><b>Post Falls Dam</b> (1906) raises summer levels ~7 feet above natural winter low, altering the seasonal rhythm of lakeshore habitats that communities depended on. The higher summer pool covers some low-lying sites seasonally.</p>
    <p><b>Contamination:</b> Metal-contaminated sediment first reached the lake around 1900 and continues today. Most of the lake bed is covered. Lead, zinc, arsenic, and cadmium from the Bunker Hill Superfund site (1,500 square miles) seep through ancient village sites.</p>
    <p>Archaeologists are "extremely secretive" about locations — many sites have been looted. Site locations are specifically exempt from the Freedom of Information Act.</p>
    <p>The Coeur d'Alene Tribe: "All we're looking to do is see the sites protected."</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.coeurTerr);


// =====================================================
// COLUMBIA RIVER ROCK ART — THE GREAT DROWNING
// "Thousands of these gems were inundated"
// =====================================================

// --- Petroglyph Canyon (SUBMERGED 1957) ---
L.circleMarker([45.70, -121.13], {radius: 5, color: SUB.drowned, fillColor: SUB.rockart, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
    <h3 style="color:${SUB.drowned}">🌊🎨 Petroglyph Canyon — THOUSANDS SUBMERGED (1957)</h3>
    <p><b>Location:</b> Columbia River near The Dalles, OR/WA border — now under Lake Celilo</p>
    <p>Between Hood River, Oregon and Pasco, Washington, <b>more than 90 rock-art sites</b> were documented. The area had one of the richest deposits of tribal rock imagery in the world.</p>
    <p><b>The Dalles Dam (1957)</b> submerged Petroglyph Canyon — literally thousands of petroglyphs drowned. The dam also destroyed <b>Celilo Falls</b>, the most important Indigenous fishing site on the Columbia (used continuously for 15,000+ years), and flooded the ancient village of Wishram/Nixlúidix.</p>
    <p><b>What Was Saved:</b> Only ~43 boulders were cut from cliff faces before inundation — "a small fraction of the rock art that now lies submerged." These rescued petroglyphs sat in the Dalles Dam parking lot for <b>nearly 30 years</b>, leaning against a fish ladder wall, covered in bird droppings.</p>
    <p>In 2004, at the request of tribes, the boulders were cleaned, restored, and moved to <b>Columbia Hills State Park</b> (Temani Pesh-wa Trail). Restorers arranged them facing similar angles so sunlight hits the images as it originally did.</p>
    <p>Park rangers do not interpret the petroglyphs' meaning out of respect for the tribes: "The person who made the petroglyph is the one who had the original intent and knew the meaning."</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.plateauRockArt);

// --- Picture Rocks Bay (SUBMERGED 1964) ---
L.circleMarker([46.95, -120.10], {radius: 4, color: SUB.drowned, fillColor: SUB.rockart, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${SUB.drowned}">🌊🎨 Picture Rocks Bay — SUBMERGED 1964</h3>
    <p><b>Location:</b> Mid-Columbia River near Vantage, WA — now under Wanapum Dam reservoir</p>
    <p>In 1964, Picture Rocks Bay was flooded by the backwaters of Wanapum Dam. Those who once walked the hazardous mile-long trail to the site's <b>large hexagonal basalt columns</b> still speak of it with deep emotion.</p>
    <p>The many finely detailed petroglyphs and pictographs, combined with the remarkable natural setting, produced "an unforgettable experience." Harold Cundy's careful drawings from the 1920s-30s are all that remain.</p>
    <p><b>Total Columbia River losses:</b> 19 rock art sites were inundated by five mid-Columbia dams alone. One was flooded by Lake Chelan's rise, another by Banks Lake. Four were destroyed by road construction. One was partially destroyed by a railway. Many that survived have been vandalized.</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.plateauRockArt);


// =====================================================
// SNAKE RIVER ARCHAEOLOGICAL DISTRICT — SURVIVING
// "Several hundred pictographs" — partially threatened
// =====================================================

L.circleMarker([46.22, -116.88], {radius: 5, color: SUB.threatened, fillColor: SUB.rockart, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${SUB.threatened}">⚠️🎨 Snake River Archaeological District — 8,000 Years</h3>
    <p><b>Location:</b> Snake River, Nez Perce County ID / Asotin County WA (8,140 acres total)</p>
    <p>A massive district including village sites, winter camps, fishing grounds used by the Nez Perce from ~6000 BC to the 20th century. <b>Several hundred pictographs</b> are part of the district, usually painted at village sites. Includes the confluence of Redbird Creek and the Snake River.</p>
    <p>National Register of Historic Places (1976 WA side, later ID). This district survived because it lies above the Lower Granite Dam reservoir — but only because the planned <b>fifth dam at Asotin</b> was never built. Had it been constructed, much of this district would be underwater.</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.plateauRockArt);


// =====================================================
// SPOKANE FALLS — LOST FISHERY UNDER A CITY
// =====================================================

L.circleMarker([47.66, -117.43], {radius: 5, color: SUB.fishery, fillColor: SUB.fishery, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:450px;overflow-y:auto;">
    <h3 style="color:${SUB.fishery}">🐟 Spokane Falls — "Half a Million Salmon" (Lost)</h3>
    <p><b>Location:</b> Heart of Downtown Spokane, WA</p>
    <p>Fishing platforms beside Spokane Falls were the most important gathering place for the Upper and Middle Spokane bands. An estimated <b>half million salmon and steelhead returned each spring</b>. Coeur d'Alene, Nez Perce, Colville, and Palouse peoples also gathered here.</p>
    <p>A <b>salmon chief</b> regulated the harvest — by net, weir, or spear — ensuring fair distribution and leaving enough fish to spawn. The chief bore an ornamented club, now a key artifact of the archaeological record. The chief oversaw construction of fishing scaffolds, hand tools, and weirs formed of twin fences spanning the river.</p>
    <p><b>Seven dams</b> were built on the Spokane between 1890 and 1922. None has fish-passage facilities. Little Falls Dam (1911) stopped all upstream fish migration. Long Lake Dam (1915) — no fish ladder — ensured nothing passed. Grand Coulee Dam (1942) on the Columbia extirpated salmon from the entire basin.</p>
    <p><b>Today:</b> The falls still flow through downtown Spokane (Riverfront Park), but the salmon are gone. The Spokane Tribe is attempting to reintroduce salmon to the Little Spokane River — but they will be landlocked between dams. Signs warn fish are contaminated with PCBs.</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.spokaneTerr);


// =====================================================
// KETTLE FALLS — SUBMERGED 1942
// =====================================================

L.circleMarker([48.64, -118.07], {radius: 6, color: SUB.drowned, fillColor: SUB.fishery, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
    <h3 style="color:${SUB.drowned}">🌊🐟 Kettle Falls / Shonitkwu — 9,000+ Years (SUBMERGED 1942)</h3>
    <p><b>Location:</b> Columbia River, now under Lake Roosevelt (Grand Coulee Dam reservoir)</p>
    <p>The <b>second-largest salmon fishery on the Columbia River</b>, used continuously for at least 9,000 years. When fish migrated beginning in May, tribes from Idaho, Montana, Oregon, and Canada gathered to share in the abundance and engage in trade. It was the great intertribal marketplace of the interior Northwest.</p>
    <p><b>Grand Coulee Dam</b> (1942) — built with <b>no fish ladder</b> — blocked ALL salmon above. Lake Roosevelt (150 miles long) submerged Kettle Falls entirely. The Colville Confederated Tribes received no compensation until 1994 — <b>52 years later</b>.</p>
    <p>The dam also submerged villages, burial grounds, root-digging grounds, and berry-picking areas of the Colville, Spokane, Lakes, Sanpoil, and Nespelem tribes. Several tribes had lived along this stretch of the Columbia for <b>over 11,000 years</b>.</p>
    <p>The Ceremony of Tears is held annually at Kettle Falls to mourn the loss of the salmon.</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.plateauDams);


// =====================================================
// LIBBY DAM / KOOTENAI RIVER — Habitat Destruction
// =====================================================

L.circleMarker([48.41, -115.31], {radius: 4, color: SUB.dam, fillColor: SUB.threatened, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content" style="max-height:350px;overflow-y:auto;">
    <h3 style="color:${SUB.threatened}">⚠️ Libby Dam (1975) — Kootenai River Disruption</h3>
    <p><b>Location:</b> Kootenai River, Lincoln County, Montana</p>
    <p>Controls all flow into the Idaho Kootenai Valley. The dam disrupted the natural flood cycle that sustained the Kootenai people's fishing, gathering, and village sites for millennia. River levels can rise or lower quickly based on dam operations.</p>
    <p>The <b>Kootenai white sturgeon</b> — central to Ktunaxa identity — became endangered because the dam eliminated the spring floods that triggered spawning. The tribe's 1991 hatchery was the first sturgeon hatchery in Indian Country.</p>
    <p>Village sites along the Kootenai River that relied on natural flood-plain rhythms were disrupted. The Kootenai recognized: "the limiting factors were lack of habitat, nutrients in the water, lack of natural rearing areas, lack of flood plains, all because of dikes and dams."</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.plateauDams);


// =====================================================
// SUMMARY POLYLINE — THE CHAIN OF DESTRUCTION
// Lower Snake River Dam Chain
// =====================================================

L.polyline([
  [46.25, -118.88],  // Ice Harbor
  [46.57, -118.54],  // Lower Monumental
  [46.58, -118.03],  // Little Goose
  [46.66, -117.43]   // Lower Granite
], {color: SUB.destroyed, weight: 4, opacity: 0.6, dashArray: '12,6'})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${SUB.destroyed}">🔴 Lower Snake River Dam Chain — 140 Miles of Destruction</h3>
    <p>Four dams built 1962-1975 transformed the free-flowing lower Snake River into a chain of slack-water reservoirs. The human cost:</p>
    <p>• <b>Windust Caves</b> — 10,000+ years of habitation, submerged 1962</p>
    <p>• <b>Marmes Rockshelter</b> — 11,000+ years, oldest human remains in WA, submerged 1969</p>
    <p>• <b>Palús Village</b> — largest Palouse settlement, drowned 1969</p>
    <p>• <b>Dozens of other sites</b> — villages, fishing camps, burials, rock art, storage pits, shell middens</p>
    <p>• <b>Tribal gravesites inundated</b> — impossible for families to care for graves</p>
    <p>• All Snake River salmon now <b>threatened or endangered</b></p>
    <p>• Wild Snake River coho went <b>extinct in 1987</b></p>
    <p><b>If the dams are breached:</b> Sites currently underwater would be exposed — requiring immediate protection from erosion, looting, and vandalism. Tribes have expressed willingness to collaborate on archaeological recovery.</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.plateauDams);

// --- Spokane River Dam Chain ---
L.polyline([
  [47.72, -116.95],  // Post Falls Dam
  [47.66, -117.43],  // Spokane Falls area (3 dams)
  [47.78, -117.58],  // Nine Mile Dam
  [47.84, -117.85],  // Long Lake Dam
  [47.82, -117.93]   // Little Falls Dam
], {color: SUB.dam, weight: 3, opacity: 0.5, dashArray: '8,4'})
  .bindPopup(`<div class="popup-content" style="max-height:350px;overflow-y:auto;">
    <h3 style="color:${SUB.dam}">⚙️ Spokane River — Seven Dams, No Fish Passage</h3>
    <p>Seven dams built 1890-1922 on 111 miles of river. <b>None has fish-passage facilities.</b></p>
    <p>Post Falls (1906) → Upriver (1909) → Upper Falls (1900) → Monroe Street (1890) → Nine Mile (1908) → Long Lake (1915) → Little Falls (1911)</p>
    <p>Long Lake reservoir (23.5 miles) submerged prehistoric village sites. The June Hogs — Chinook salmon weighing 80-100+ pounds — went extinct. Five species of anadromous fish once ascended the river. Today the fish are contaminated with heavy metals from the Coeur d'Alene mining district.</p>
    <p>The Spokane Tribe's salmon-based culture was <b>systematically destroyed within a single generation</b> — from the first dam in 1890 to Grand Coulee's closure of the Columbia in 1942.</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.plateauDams);


// =====================================================
// CENTRAL WASHINGTON ROCK ART LOSSES
// Harold Cundy's drawings — sometimes the only record
// =====================================================

L.circleMarker([46.87, -119.99], {radius: 4, color: SUB.drowned, fillColor: SUB.rockart, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${SUB.drowned}">🌊 Mid-Columbia Submerged Rock Art — The Cundy Record</h3>
    <p><b>Location:</b> Columbia River between Vantage and Wenatchee, WA</p>
    <p>In the 1920s-30s, Harold Cundy — a Wenatchee resident and member of the Columbia River Archaeological Society — systematically drew and documented rock art panels along the mid-Columbia. Sites included Crescent Bar, West Bar, Spanish Castle, Columbia River Siding, Cabinet Rapids, Rock Island, and Sentinel Bluff.</p>
    <p><b>Many of these sites no longer exist.</b> They were submerged by Wanapum Dam (1964), Rock Island Dam (1933), and other hydroelectric projects. Cundy's drawings and "a few precious photographs are all that remain."</p>
    <p>At Rock Island, Cundy documented petroglyphs before coffer dams were built. He wrote hopefully: "It is hoped that they (the inundated petroglyphs not destroyed by construction) will be left for a more [thorough study]." That study never came — the water rose instead.</p>
    <p><b>Total count:</b> At least 19 rock art sites inundated by five mid-Columbia dams. Additional sites lost to road construction, railways, and vandalism.</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.plateauRockArt);


// =====================================================
// ALBENI FALLS DAM — KALISPEL HOMELAND FLOODED
// (enhances existing feature in file 59)
// =====================================================

L.circleMarker([48.19, -117.00], {radius: 4, color: SUB.drowned, fillColor: SUB.threatened, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${SUB.drowned}">🌊 Albeni Falls Dam (1955) — Kalispel Gathering Grounds Lost</h3>
    <p><b>Location:</b> Pend Oreille River, Bonner County, Idaho</p>
    <p>Flooded Kalispel gathering grounds, camas meadows, and the Buffalo Trail departure point at Denton Slough/Indian Meadows. The 11-foot annual water-level fluctuation caused by dam operations continues to threaten approximately <b>200 archaeological sites</b> kept confidential for their protection.</p>
    <p>The dam flooded the area where Kootenai, Kalispel, and Coeur d'Alene peoples gathered for summer trade. Bear Paw Rock — sacred to multiple tribes — now sits across a flooded meadow. BPA provides mitigation funds for habitat acquisition.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.plateauDams);
