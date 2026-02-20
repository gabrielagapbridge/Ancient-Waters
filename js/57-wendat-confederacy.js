// ============================================================
// 57-wendat-confederacy.js
// The Wendat (Huron) Confederacy — Ontario, Canada
// Villages, Ossuaries, Feast of the Dead, Jesuit Missions,
// Beaver Wars Destruction, Dispersal & Survival
// ============================================================

const WDT = {
  bear: '#8B4513',      // Attignawantan (Bear Nation) — brown
  cord: '#DAA520',      // Atingeennonniahak (Cord) — goldenrod
  rock: '#696969',      // Arendarhonon (Rock) — dim gray
  deer: '#CD853F',      // Tahontaenrat (Deer) — peru
  bog: '#556B2F',       // Ataronchronon (Bog/Swamp) — dark olive
  petun: '#8B008B',     // Tionontati (Petun/Tobacco) — dark magenta
  ossuary: '#800000',   // Ossuaries/burials — maroon
  mission: '#B8860B',   // Jesuit missions — dark goldenrod
  village: '#228B22',   // Villages — forest green
  lost: '#B22222',      // Destroyed/dispersed — firebrick
  water: '#1E90FF',     // Waterways
  toronto: '#FF6347',   // Toronto-area sites — tomato
  sacred: '#DC143C'     // Sacred sites
};


// ==================== WENDAKE (HURONIA) TERRITORY ====================
// "One of the most densely populated territories north of Mexico"
// ~30,000 people in ~2,100 sq km between Georgian Bay and Lake Simcoe

L.polygon([
  [44.90, -80.10], [44.85, -79.70], [44.70, -79.40],
  [44.50, -79.30], [44.35, -79.35], [44.20, -79.55],
  [44.25, -79.80], [44.40, -80.00], [44.60, -80.15],
  [44.75, -80.20]
], {color: WDT.bear, weight: 2, fillColor: WDT.bear, fillOpacity: 0.08, dashArray: '8,4'})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${WDT.bear}">🏠 Wendake (Huronia) — Homeland of the Wendat Confederacy</h3>
    <p><b>Location:</b> Between Georgian Bay, Lake Simcoe, and Lake Ontario, southern Ontario, Canada</p>
    <p><b>Name:</b> Wendake — "the peninsula country" or "island dwellers." The French called them "Huron" (from "hure" — boar's head, mocking their hairstyle, or "lout/ruffian"). The Wendat consider "Huron" pejorative.</p>
    <p><b>Population:</b> ~30,000–35,000 before the 1634 epidemics — one of the most densely populated territories north of Mexico</p>
    <p><b>The Five Nations of the Wendat:</b></p>
    <p>• <b>Attignawantan</b> (Bear Nation) — largest, northernmost, oldest member</p>
    <p>• <b>Atingeennonniahak</b> (Cord/Net-Makers) — allied with Bear</p>
    <p>• <b>Arendarhonon</b> (Rock Nation) — easternmost, hosted Champlain</p>
    <p>• <b>Tahontaenrat</b> (Deer Nation) — joined later</p>
    <p>• <b>Ataronchronon</b> (Bog/Swamp People) — division of the Bear</p>
    <p><b>Economy:</b> Corn-based agriculture (60%+ of diet), beans, squash, sunflowers, tobacco. Produced enormous surpluses traded to Algonquian neighbors for furs, copper, wampum. Trade networks reached the Gulf of Mexico and Hudson Bay.</p>
    <p><b>Society:</b> Matrilineal descent. Longhouses up to 90m long. Villages of 20-35 longhouses relocated every 10-15 years as soil/timber depleted. Estimated 600 village sites across the region.</p>
    <p><b>Destruction:</b> Epidemics 1634-1640 reduced population to ~12,000. Haudenosaunee attacks 1648-1649 destroyed the Confederacy. By May 1649, the Wendat burned 15 of their own villages to prevent stores from being taken and fled.</p>
    <p><b>Survival:</b> ~10,000 fled to Christian Island (Gahoendoe). Most starved over winter 1649-50. Survivors relocated to Quebec (Wendake, near Quebec City) where descendants form the present-day Huron-Wendat Nation (~7,000 people, 2021 census).</p>
    <p><b>Sources:</b> Trigger 1976, 1985; Warrick 2008; Birch 2015; Canadian Encyclopedia; Williamson 2014</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.wdtTerritory);


// ==================== WENDAKE SOUTH — LAKE ONTARIO SHORE ====================
// Ancestral Wendat territory along north shore of Lake Ontario
// before migration north to Georgian Bay area

L.polygon([
  [44.20, -79.55], [44.10, -79.20], [43.90, -78.80],
  [43.75, -79.00], [43.65, -79.30], [43.70, -79.70],
  [43.80, -79.90], [44.00, -80.00], [44.10, -79.80]
], {color: WDT.village, weight: 1.5, fillColor: WDT.village, fillOpacity: 0.05, dashArray: '5,5'})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${WDT.village}">🏠 Wendake South — Ancestral Lake Ontario Shore</h3>
    <p><b>Period:</b> AD 1300–1600</p>
    <p><b>Description:</b> Ancestral Wendat communities along the north shore of Lake Ontario, from the Credit River to Prince Edward County. From the 13th century, communities began migrating ~100 km northward to the historic Huronia area near Georgian Bay. The consolidation was complete by ~1600.</p>
    <p><b>Why move north?</b> Possibly to distance from Haudenosaunee, and to access trade routes via Lake Nipissing to French traders on the St. Lawrence. Also to trade with Algonquian peoples for beaver pelts.</p>
    <p><b>Toronto:</b> The word likely comes from Mohawk "Tkarón:to" (tree in the water), referring to ancient fishing weirs at the narrows between Lakes Simcoe and Couchiching. Wendat called these narrows "Karonto" (log lying in the water). Archaeological stakes at the fish weirs date to 2610 BCE — 4,500 years old.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.wdtTerritory);


// ==================== MAJOR VILLAGE SITES ====================

// --- Jean-Baptiste Lainé / Mantle Site (largest excavated) ---
L.circleMarker([43.97, -79.25], {radius: 7, color: WDT.village, fillColor: WDT.village, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${WDT.village}">🏠 Jean-Baptiste Lainé (Mantle) Site — Largest Excavated Wendat Village</h3>
    <p><b>Revised Date:</b> AD 1587–1623 (radiocarbon/Bayesian — was thought 1500-1530)</p>
    <p><b>Location:</b> Whitchurch-Stouffville, NE of Toronto, on Stouffville Creek</p>
    <p><b>Discovery:</b> 2002 — found during suburban subdivision construction</p>
    <p><b>Size:</b> 70+ multifamily longhouses, ~2,000 people. The largest and most complex ancestral Wendat village excavated in the Lower Great Lakes region.</p>
    <p><b>Unique:</b> This community had already coalesced from several smaller villages — it represents the process of <b>aggregation</b> that defined late precontact Iroquoian society. It was the only village near the eastern Rouge Trail linking Lake Ontario and Lake Simcoe.</p>
    <p><b>Trade:</b> Artifacts indicate interaction with distant nations to the north, east, south, and west. Despite being partially contemporary with the Warminster/Cahiagué site, only 3 European-manufactured artifacts were found here (vs. hundreds at Warminster) — showing the uneven spread of European goods.</p>
    <p><b>Naming:</b> Renamed from "Mantle" to "Jean-Baptiste Lainé" in 2011 in honor of a decorated WWII Huron-Wendat veteran, during a Wendat ceremony at the site.</p>
    <p><b>Legacy:</b> Town Council named adjacent school "Wendat Village Public School." Ontario Heritage Trust provincial plaques installed 2017.</p>
    <p><b>Sources:</b> ASI 2012; Birch 2010, 2013; Manning et al. 2018; Ontario Heritage Trust</p>
  </div>`, {maxWidth: 420}).addTo(L_groups.wdtVillages);

// --- Draper Site (predecessor to Mantle) ---
L.circleMarker([43.93, -79.15], {radius: 5, color: WDT.village, fillColor: WDT.village, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${WDT.village}">🏠 Draper Site — Wendat Village Expansion</h3>
    <p><b>Date:</b> Late 15th century (~1525, expanded 5+ times over ~30 years)</p>
    <p><b>Location:</b> Pickering, Ontario, on tributary of West Duffins Creek, ~35 km NE of Toronto</p>
    <p><b>Size at peak:</b> 35 longhouses, up to 2,000 people, 4 hectares, multiple palisade rows</p>
    <p><b>Significance:</b> The expansion of Draper coincided with the abandonment of smaller surrounding villages — demonstrating the <b>aggregation process</b> where communities merged for defense during a period of increasing warfare. After a generation here, the entire community moved 5 km NW to establish the Mantle/Jean-Baptiste Lainé site.</p>
    <p><b>Duffins Creek Sequence:</b> Draper → Spang → Jean-Baptiste Lainé represents the same community's successive relocations over ~100 years.</p>
    <p><b>Sources:</b> Birch 2010; Manning et al. 2018; Williamson 2014</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.wdtVillages);

// --- Warminster / Cahiagué (Champlain's village) ---
L.circleMarker([44.60, -79.38], {radius: 6, color: WDT.rock, fillColor: WDT.rock, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${WDT.rock}">🏠 Warminster / Cahiagué — Champlain's Village, 1615</h3>
    <p><b>Date:</b> Confirmed occupied 1615-1616 (Manning et al. 2019, Cornell/Bayesian dating)</p>
    <p><b>Location:</b> Near Warminster, Orillia area, Simcoe County</p>
    <p><b>Nation:</b> Arendarhonon (Rock Nation) — easternmost Wendat nation</p>
    <p><b>Champlain's Visit:</b> August 17, 1615 — Samuel de Champlain arrived and described it as "the principal village of the country, which contains 200 large lodges." He spent the winter of 1615-16 here recovering from arrow wounds sustained in a failed attack on an Onondaga fort in New York.</p>
    <p><b>The Failed Raid:</b> Champlain and 400-500 Wendat warriors traveled SE via the Trent River system, crossed Lake Ontario, and attacked a fortified Onondaga town (Oct 10, 1615). Champlain was wounded, the assault failed, and they retreated to Cahiagué.</p>
    <p><b>Étienne Brûlé:</b> Before the attack, 12 Wendat warriors and the French explorer Brûlé traveled south to enlist Susquehannock allies — possibly the first European to pass through what is now Toronto, via the Humber River.</p>
    <p><b>Dating Debate:</b> For decades, scholars debated whether Ball or Warminster was Cahiagué. Manning's 2019 Bayesian analysis of radiocarbon dates confirmed Warminster was occupied in 1615-16, while Ball dated earlier.</p>
    <p><b>Sources:</b> Manning et al. 2019; Champlain 1615; Trigger 1976; Heidenreich 2014</p>
  </div>`, {maxWidth: 420}).addTo(L_groups.wdtVillages);

// --- Ball Site (predecessor to Warminster) ---
L.circleMarker([44.55, -79.42], {radius: 4, color: WDT.rock, fillColor: WDT.rock, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WDT.rock}">🏠 Ball Site — Arendarhonon Village</h3>
    <p><b>Date:</b> Pre-1615 (earlier than Warminster per Manning 2019)</p>
    <p><b>Location:</b> Simcoe County, near Warminster</p>
    <p><b>Significance:</b> Once considered a candidate for Cahiagué, but Bayesian radiocarbon dating showed it was occupied earlier. Ball and Warminster are believed to be successive iterations of the same community.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.wdtVillages);

// --- Ossossané (Capital, Feast of the Dead 1636) ---
L.circleMarker([44.72, -80.05], {radius: 7, color: WDT.bear, fillColor: WDT.sacred, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:600px;overflow-y:auto;">
    <h3 style="color:${WDT.sacred}">💀 Ossossané — Capital of the Wendat & The Feast of the Dead</h3>
    <p><b>Date:</b> 1632–1636 (village); ossuary created 1636</p>
    <p><b>Location:</b> Shore of Nottawasaga Bay, Georgian Bay, Simcoe County (National Historic Site)</p>
    <p><b>Nation:</b> Attignawantan (Bear Nation) — principal village</p>
    <p><b>Description:</b> Capital of the Wendat Confederacy. Defensible peninsula protected on three sides by steep topography. Connected to the main trail between Huronia and the Petun (Tobacco) nation.</p>
    <p><b>THE FEAST OF THE DEAD (1636):</b></p>
    <p>Jesuit missionary Jean de Brébeuf was invited to witness the most sacred Wendat ceremony. Over 10 days:</p>
    <p>1. Relatives exhumed their dead from temporary graves</p>
    <p>2. Corpses in various states of decay were cleaned and dressed in beaver robes</p>
    <p>3. Flesh and skin removed, bones individually cleaned</p>
    <p>4. Community gathered at a pit 7 meters wide, 2 meters deep</p>
    <p>5. A scaffold 55 feet in diameter surrounded the pit</p>
    <p>6. Hundreds climbed the platform to hang bone bundles wrapped in beaver fur</p>
    <p>7. Leaders announced each deceased person and their offerings</p>
    <p>8. The pit was lined with beaver pelts</p>
    <p>9. Recent dead placed first, then bone bundles lowered in</p>
    <p>10. Brébeuf recorded that as the feast commenced, people carried their loved ones' bones to the edge, unwrapped them with tears, and said final farewells</p>
    <p><b>Purpose:</b> Not just mourning — the Feast of the Dead was a <i>diplomatic</i> event that united different Wendat villages, renewed alliances, and redistributed wealth through gifts to the dead.</p>
    <p><b>Archaeological Confirmation:</b> Kenneth E. Kidd (ROM) excavated the ossuary 1947-48. Found 600+ bodies. Brébeuf's estimates of pit size and contents proved remarkably accurate.</p>
    <p><b>Disease Evidence:</b> Average age of death declined from 30 to 21 — evidence of the catastrophic epidemics of 1634-1640.</p>
    <p><b>Repatriation:</b> In 1999, the ROM returned the remains to the Huron-Wendat for reburial at Midland. Cement was poured over the burial to ensure the remains were never disturbed again.</p>
    <p><b>Ownership:</b> The ossuary is now owned by the Huron-Wendat of Wendake First Nation.</p>
    <p><b>Sources:</b> Brébeuf 1636 (Jesuit Relations); Kidd 1947-48; Seeman 2011; Parks Canada NHSC</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.wdtOssuaries);

// --- Ellery / Scanonaenrat (Deer Nation capital) ---
L.circleMarker([44.65, -79.72], {radius: 4, color: WDT.deer, fillColor: WDT.deer, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WDT.deer}">🏠 Ellery / Scanonaenrat — Deer Nation Capital</h3>
    <p><b>Date:</b> Multi-component — 17th century village built on same location as a site ~100 years older</p>
    <p><b>Location:</b> North of Orr Lake, Simcoe County</p>
    <p><b>Nation:</b> Tahontaenrat (Deer Nation)</p>
    <p><b>Description:</b> Tentatively identified as Scanonaenrat, the principal village of the Deer Nation. Laurentian University field school excavations revealed two overlapping occupation periods.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.wdtVillages);

// --- Carhagouha / Ahatsistari (Le Caron's mission) ---
L.circleMarker([44.68, -79.85], {radius: 4, color: WDT.mission, fillColor: WDT.mission, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WDT.mission}">🏠 Carhagouha (Ahatsistari) — First European Mass in Ontario</h3>
    <p><b>Date:</b> 1615-1616</p>
    <p><b>Location:</b> Near modern Elmvale, Simcoe County</p>
    <p><b>Significance:</b> Recollet priest Joseph Le Caron celebrated the first European Mass in Ontario here, August 12, 1615, in the presence of Samuel de Champlain. May have been the capital of the Attignawantan (Bear) when Champlain visited.</p>
    <p><b>Glass Beads:</b> Assemblage characteristic of Glass Bead Period 2 (~1600-1625), confirming contemporaneity with Warminster/Cahiagué.</p>
    <p><b>Sources:</b> Manning et al. 2025; Ontario Heritage Trust; Heidenreich 2014</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.wdtVillages);


// ==================== OSSUARIES & FEAST OF THE DEAD ====================

// --- Taber Hill (Toronto — 500+ burials) ---
L.circleMarker([43.72, -79.26], {radius: 5, color: WDT.ossuary, fillColor: WDT.ossuary, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:450px;overflow-y:auto;">
    <h3 style="color:${WDT.ossuary}">💀 Taber Hill — Wendat Ossuary in Toronto</h3>
    <p><b>Date:</b> ~14th century</p>
    <p><b>Location:</b> Lawrence Ave & Bellamy Rd, Scarborough, Toronto</p>
    <p><b>Discovery:</b> August 17, 1956 — a steam shovel demolishing a 60-foot hill struck human remains</p>
    <p><b>Size:</b> 523 individuals — buried in ritual manner consistent with the Feast of the Dead</p>
    <p><b>Excavation:</b> ROM assistant curator Walter Kenyon called it "the deepest ossuary I have ever seen or heard of" and "the most significant ethnological discovery in Canada's history." Pit was 50 feet long, 7 feet wide, 1 foot deep.</p>
    <p><b>Reburial:</b> Oct 19-21, 1956. Six Nations Chief Joseph Logan supervised an Iroquois Feast of the Dead reburial ceremony attended by 200+ Indigenous people. Annual ceremonies continued 1957-1966.</p>
    <p><b>Status:</b> Believed to be the only First Nations ossuary protected as a cemetery in Canada. Ontario purchased the 35-acre site.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.wdtOssuaries);

// --- Thonnakona / Kleinburg Ossuary (largest reburial in North America) ---
L.circleMarker([43.85, -79.60], {radius: 6, color: WDT.ossuary, fillColor: WDT.sacred, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
    <h3 style="color:${WDT.sacred}">💀 Thonnakona Ossuary — Largest Reburial in North America</h3>
    <p><b>Original Excavation:</b> 1970, University of Toronto — 561 individuals from the Kleinburg ossuary</p>
    <p><b>Location:</b> Kleinburg, NW outskirts of Toronto (now Vaughan)</p>
    <p><b>Associated Village:</b> Skandatut — largest village along the Humber River, ~2,000 people, late 16th century</p>
    <p><b>The Reburial (September 14, 2013):</b> The remains of <b>1,760 ancestors from 12 separate archaeological sites</b> were reburied in a single new ossuary — the largest reburial of Indigenous ancestral remains ever undertaken in North America.</p>
    <p><b>Remains:</b> Dating from 13th to mid-17th century, excavated without consent by U of T throughout the mid-late 20th century.</p>
    <p><b>Process:</b> 2010-2013 — Huron-Wendat Nation, University of Toronto, and Ontario Heritage Trust collaborated. 100+ people attended from Wendake; representatives of 15 First Nations traveled from across North America.</p>
    <p><b>Grand Chief Konrad Sioui:</b> "Decades later, we finally gave our ancestors a respectful burial."</p>
    <p><b>Legacy:</b> The site, owned by Ontario Heritage Trust, is conserved as sacred landscape in perpetuity. Cement poured over burial to prevent future disturbance.</p>
    <p><b>Sources:</b> Pfeiffer & Lesage 2014 (Canadian J of Archaeology); U of T; Heritage Matters</p>
  </div>`, {maxWidth: 420}).addTo(L_groups.wdtOssuaries);

// --- Withrow Site (Toronto — 2024 discovery) ---
L.circleMarker([43.67, -79.35], {radius: 4, color: WDT.ossuary, fillColor: WDT.toronto, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${WDT.toronto}">💀 Withrow Site — Ongoing Discovery Under Toronto</h3>
    <p><b>Location:</b> Broadview & Withrow Ave, North Riverdale, Toronto</p>
    <p><b>Known since:</b> 1884 — but new human remains discovered January 2024 by construction workers repairing a water line</p>
    <p><b>Description:</b> Potential Huron-Wendat ossuary. Forensic anthropologist Greg Olsen identified remains of at least 3 people. Shovel-shaped incisors and maize-worn molars confirmed Indigenous origin.</p>
    <p><b>Context:</b> As one researcher noted, "There's hundreds and hundreds of Wendat sites in the Toronto area alone." The city sits directly on ancestral Wendat territory.</p>
    <p><b>Sources:</b> CBC News Jan 2024; Art Newspaper Jan 2024</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.wdtOssuaries);


// ==================== TORONTO-AREA WENDAT SITES ====================

// --- Parsons Site ---
L.circleMarker([43.75, -79.47], {radius: 3, color: WDT.toronto, fillColor: WDT.toronto, fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WDT.toronto}">🏠 Parsons Site</h3>
    <p><b>Date:</b> Mid-15th century</p>
    <p><b>Location:</b> Keele St & Finch Ave, Toronto</p>
    <p>10 longhouses, subterranean sweat lodges, midden areas, ossuaries. Trade items from long distances, stone and copper tools, ceramic pots, rolled tubular beads.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.wdtVillages);

// --- Alexandra Site ---
L.circleMarker([43.79, -79.28], {radius: 3, color: WDT.toronto, fillColor: WDT.toronto, fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WDT.toronto}">🏠 Alexandra Site (Highland Creek)</h3>
    <p><b>Date:</b> First half of 15th century</p>
    <p><b>Location:</b> North of L'Amoreaux Park, Toronto</p>
    <p>Two overlapping occupation phases — possibly a union of two villages during duress. 29 semi-subterranean sweat lodges. Estimated 800-1,000 residents.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.wdtVillages);

// --- Jackes Site ---
L.circleMarker([43.71, -79.41], {radius: 3, color: WDT.toronto, fillColor: WDT.toronto, fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WDT.toronto}">🏠 Jackes Site</h3>
    <p><b>Date:</b> Late 14th / early-mid 15th century</p>
    <p><b>Location:</b> Avenue Rd & Roselawn Ave, Toronto</p>
    <p>Pipes, pottery from multiple decorative traditions, worked bone tools. Evidence of multiple cultural interactions.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.wdtVillages);

// --- Skandatut (largest Humber village) ---
L.circleMarker([43.86, -79.59], {radius: 5, color: WDT.toronto, fillColor: WDT.toronto, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WDT.toronto}">🏠 Skandatut — Largest Humber River Village</h3>
    <p><b>Date:</b> Late 16th century</p>
    <p><b>Location:</b> East branch of Humber River, near Kleinburg</p>
    <p><b>Size:</b> ~2,000 people — the largest Wendat village along the Humber</p>
    <p><b>Associated Ossuary:</b> The Kleinburg/Thonnakona Ossuary (561 individuals) was created when this village moved.</p>
    <p><b>Status:</b> Protected by Huron-Wendat Nation of Wendake, Quebec</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.wdtVillages);


// ==================== JESUIT MISSIONS & CONTACT ====================

// --- Sainte-Marie among the Hurons (Midland) ---
L.circleMarker([44.74, -79.84], {radius: 7, color: WDT.mission, fillColor: WDT.mission, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:600px;overflow-y:auto;">
    <h3 style="color:${WDT.mission}">⛪ Sainte-Marie among the Hurons — Ontario's First European Community</h3>
    <p><b>Date:</b> 1639–1649</p>
    <p><b>Location:</b> Banks of the Wye River, near Midland, Ontario (National Historic Site)</p>
    <p><b>Founded by:</b> Jesuits Jérôme Lalemant and Jean de Brébeuf</p>
    <p><b>Size by 1648:</b> 66 French men — one-fifth of the entire population of New France. 19 priests, 4 lay brothers, 23 donnés, 4 boys, 7 domestics, 8 soldiers. Barracks, church, workshops, smithy, residences, and sheltered area for Indigenous visitors.</p>
    <p><b>The Huron Carol:</b> Jean de Brébeuf wrote the famous "Jesous Ahatonhia" Christmas hymn here — adapted to Wendat customs and symbols. Still sung in Canadian churches.</p>
    <p><b>Epidemics:</b> Smallpox raged 1634-1640, brought by European children emigrating with families. Wendat population dropped from 20,000-25,000 to 9,500 by 1642.</p>
    <p><b>Division:</b> The mission split the Wendat between Christian converts and traditionalists, weakening the Confederacy from within.</p>
    <p><b>THE END (1649):</b></p>
    <p>March 16, 1649 — Haudenosaunee attacked the village of St. Louis. Brébeuf and Gabriel Lalemant captured, tortured, killed. The Jesuits recovered their bodies.</p>
    <p>June 16, 1649 — the missionaries burned Sainte-Marie themselves rather than let it be desecrated. Father Paul Ragueneau wrote: <i>"We ourselves set fire to it, and beheld burn before our eyes and in less than one hour, our work of nine or ten years."</i></p>
    <p><b>Canadian Martyrs:</b> 8 missionaries killed 1642-1649 — canonized as saints by Pope Pius XI in 1930.</p>
    <p><b>Archaeology:</b> First digs 1855. Scientific excavation by Kenneth Kidd (ROM) 1941-43. Wilfrid Jury completed excavations 1947-51. Brébeuf and Lalemant's graves found by Fr. Hegarty in 1954. Reconstructed 1964 as living history museum on original site.</p>
    <p><b>Sources:</b> Jesuit Relations; Trigger 1976; Kidd 1941-43; Canadian Encyclopedia; Parks Canada</p>
  </div>`, {maxWidth: 450}).addTo(L_groups.wdtMissions);


// ==================== THE DESTRUCTION (1648-1650) ====================

// --- Christian Island / Gahoendoe (refugee island) ---
L.circleMarker([44.85, -80.18], {radius: 6, color: WDT.lost, fillColor: WDT.lost, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
    <h3 style="color:${WDT.lost}">🔥 Christian Island (Gahoendoe) — Refuge & Starvation</h3>
    <p><b>Date:</b> 1649–1650</p>
    <p><b>Location:</b> Christian Island (Gahoendoe), Georgian Bay</p>
    <p><b>Fort Sainte Marie II:</b> After burning Sainte-Marie, the Jesuits and ~300 Wendat fled to this island and built a new fortified mission — 4-meter stone walls, moat, church, well. The Wendat built a village adjacent to the fort.</p>
    <p><b>THE WINTER OF STARVATION (1649-50):</b> ~10,000 Wendat refugees crowded onto the island. It was an unproductive settlement that could not support them. Mass starvation and disease through the winter. An unused burial pit was prepared but never filled — the survivors were too few and too weak.</p>
    <p><b>Dispersal (June 1650):</b> Father Ragueneau led ~300 survivors via Lake Nipissing and the Ottawa River to Quebec. They settled at what is now Wendake (Old Lorette), north of Quebec City — where their descendants remain today.</p>
    <p><b>Last Stand (1651):</b> Some Wendat who stayed behind made a final stand against the Haudenosaunee from the fort, then fled to join the others in Quebec.</p>
    <p><b>Sources:</b> Jesuit Relations; Parks Canada (Fort Sainte Marie II NHSC); Trigger 1976</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.wdtDestruction);

// --- St. Ignace (first attack, 1649) ---
L.circleMarker([44.70, -79.75], {radius: 4, color: WDT.lost, fillColor: WDT.lost, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WDT.lost}">🔥 St. Ignace — First Haudenosaunee Attack, March 16, 1649</h3>
    <p><b>Location:</b> Near Midland, Simcoe County</p>
    <p>The Haudenosaunee attacked at dawn. 400 warriors captured the town. From here they moved to St. Louis, where Brébeuf and Lalemant were captured.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.wdtDestruction);

// --- St. Louis (Brébeuf & Lalemant captured) ---
L.circleMarker([44.72, -79.78], {radius: 4, color: WDT.lost, fillColor: WDT.lost, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WDT.lost}">🔥 St. Louis — Brébeuf & Lalemant Captured</h3>
    <p><b>Date:</b> March 16, 1649</p>
    <p>Wendat village attacked by Haudenosaunee. Jesuits Jean de Brébeuf and Gabriel Lalemant captured, tortured, and killed. Brébeuf reportedly endured hours of torture without crying out — earning even his captors' respect.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.wdtDestruction);

// --- The Burning of 15 Villages (general marker) ---
L.circleMarker([44.60, -79.80], {radius: 5, color: WDT.lost, fillColor: WDT.lost, fillOpacity: 0.6, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${WDT.lost}">🔥 The Wendat Burn Their Own Country (May 1649)</h3>
    <p>By May 1, 1649, the Wendat had burned <b>15 of their own villages</b> to prevent their stores from being taken by the advancing Haudenosaunee.</p>
    <p>This was the end of Wendake as a living civilization. A territory that had been one of the most densely populated north of Mexico was emptied in months.</p>
    <p><b>Context:</b> The Haudenosaunee attacks were driven by the Beaver Wars — competition for control of the fur trade. The Haudenosaunee, armed with Dutch and English firearms, overwhelmed the Wendat whose French allies provided far fewer weapons.</p>
    <p><b>Parallels:</b> Like the Sullivan-Clinton Campaign against the Haudenosaunee 130 years later, the destruction of Wendake was systematic, targeting food supplies, infrastructure, and the ability to survive winter.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.wdtDestruction);


// ==================== TIONONTATI (PETUN / TOBACCO NATION) ====================

// --- Petun territory marker ---
L.circleMarker([44.40, -80.30], {radius: 5, color: WDT.petun, fillColor: WDT.petun, fillOpacity: 0.6, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${WDT.petun}">🌿 Tionontati (Petun) — The Tobacco Nation</h3>
    <p><b>Location:</b> SW of Wendake, Blue Mountains area, Simcoe/Grey Counties</p>
    <p><b>Name:</b> Tionontati = "People among the Hills." French called them "Petun" (tobacco) for their chief crop.</p>
    <p><b>Relationship:</b> Closely related to the Wendat — may have originally been a splinter group. Divided into Deer and Wolf moieties.</p>
    <p><b>Destruction:</b> Haudenosaunee attacked Petun villages in fall 1649, shortly after destroying Wendake.</p>
    <p><b>Survival:</b> Petun survivors merged with Wendat refugees to form the <b>Wyandot</b> — who migrated to Green Bay, Mackinac, Detroit, Ohio, Kansas, and Oklahoma. The Wyandotte Nation of Oklahoma descends from this fusion.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.wdtVillages);


// ==================== WATERWAYS ====================

// --- Toronto Passage (Humber River route) ---
L.polyline([
  [43.63, -79.47], [43.70, -79.50], [43.80, -79.55],
  [43.90, -79.58], [44.00, -79.55], [44.10, -79.50],
  [44.20, -79.42], [44.35, -79.38]
], {color: WDT.water, weight: 2.5, opacity: 0.5, dashArray: '5,5'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WDT.water}">💧 Toronto Passage (Humber River Route)</h3>
    <p>The "Carrying Place" — a series of waterways and portages connecting Lake Ontario to Lake Simcoe and Georgian Bay, via the Humber River and Holland River.</p>
    <p>Étienne Brûlé likely traveled this route in 1615 — possibly the first European through what is now Toronto.</p>
    <p>Used for thousands of years by Wendat and their predecessors.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.wdtWaterways);

// --- Trent-Severn Waterway corridor ---
L.polyline([
  [44.35, -79.38], [44.45, -79.20], [44.50, -78.90],
  [44.40, -78.50], [44.30, -78.20], [44.20, -77.90],
  [44.10, -77.60]
], {color: WDT.water, weight: 2.5, opacity: 0.5, dashArray: '5,5'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WDT.water}">💧 Trent-Severn Corridor</h3>
    <p>Water route from Lake Simcoe SE to Lake Ontario via the Trent River system. Champlain and 400-500 Wendat warriors traveled this route in 1615 to attack the Onondaga in New York.</p>
    <p>Today's Trent-Severn Waterway follows this ancient corridor.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.wdtWaterways);

// --- Fish Weirs at The Narrows (4,500 years old) ---
L.circleMarker([44.62, -79.37], {radius: 5, color: WDT.sacred, fillColor: WDT.sacred, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${WDT.sacred}">💧 The Narrows — 4,500-Year-Old Fish Weirs</h3>
    <p><b>Location:</b> Atherley Narrows, between Lakes Simcoe and Couchiching, near Orillia</p>
    <p><b>Age:</b> Stakes dated to 2610 BCE — ~4,500 years old</p>
    <p><b>Description:</b> Ancient fishing weirs — stakes driven into the water to block channels and create narrow openings to catch fish. Indigenous nations met here in Council, fished, and traded as allies for millennia. The abundance of food allowed hosting of large, extended gatherings.</p>
    <p><b>Names:</b></p>
    <p>Mohawk: <b>Tkarón:to</b> ("tree in the water") — likely origin of "Toronto"</p>
    <p>Wendat: <b>Karonto</b> ("log lying in the water")</p>
    <p>Anishinaabemowin: <b>Mnjikaning</b> ("fish fence")</p>
    <p>Champlain described these weirs in use by the Wendat in 1615.</p>
    <p><b>Council Fire:</b> A Council Fire was maintained here for centuries — host to many meetings confirming the alliance between the Wendat and Anishinaabek.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.wdtWaterways);

// --- Ottawa River Trade Route ---
L.polyline([
  [44.85, -80.18], [45.20, -79.80], [45.50, -79.40],
  [45.80, -79.00], [46.10, -78.40], [46.30, -77.80],
  [46.40, -77.00], [46.30, -76.30], [46.10, -75.70],
  [45.60, -75.30], [45.50, -75.00]
], {color: WDT.water, weight: 2, opacity: 0.4, dashArray: '8,4'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${WDT.water}">💧 Ottawa River — Wendat Trade & Escape Route</h3>
    <p>The primary route connecting Wendake to the St. Lawrence and French traders. Traveled via Lake Nipissing and the Mattawa River to the Ottawa River and down to the St. Lawrence.</p>
    <p>In June 1650, this was the route Father Ragueneau and ~300 Wendat survivors took to reach Quebec — their final journey from their homeland.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.wdtWaterways);


// ==================== WENDAKE TODAY (QUEBEC) ====================

// --- Wendake, Quebec (modern Huron-Wendat Nation) ---
L.circleMarker([46.86, -71.35], {radius: 6, color: WDT.bear, fillColor: WDT.bear, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:450px;overflow-y:auto;">
    <h3 style="color:${WDT.bear}">🏠 Wendake — The Huron-Wendat Nation Today</h3>
    <p><b>Location:</b> Just north of Quebec City, Quebec</p>
    <p><b>Population:</b> ~7,000 (2021 census)</p>
    <p><b>History:</b> After the destruction of 1649 and the starvation winter on Christian Island, survivors relocated here in 1650. Originally at L'Ancienne-Lorette, then moved to what is now Wendake. The chapel Notre-Dame-de-Lorette was built in 1674 by Father Chaumonot on the model of the Loretto church in Italy.</p>
    <p><b>Status:</b> The Huron-Wendat Nation maintains sovereignty, a Grand Chief (currently elected), and has led major repatriation efforts to reclaim ancestral remains from museums and universities.</p>
    <p><b>Nionwentsïo:</b> The Wendat name for their traditional territory — they have never relinquished their claim to their Ontario homeland.</p>
    <p><b>Language:</b> The Wendat language nearly went extinct but is being revitalized through educational programs, a dictionary, and community initiatives.</p>
    <p><b>Old Wendake Historic District:</b> National Historic Site of Canada.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.wdtVillages);
