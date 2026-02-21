// ============================================================
// MOHICAN TERRITORY — Shoreline Changes & Artificial Fill
// Manhattan fill zones, buried streams, lost islands,
// Hudson River dredging, contamination, archaeological finds
// ============================================================
// The shorelines indigenous peoples knew are almost entirely gone.
// Artificial fill, dredging, railroad construction, and landfilling
// have fundamentally reshaped every major waterfront.
//
// KEY STATS:
//   Manhattan: ~29% artificial fill; 66 miles of streams buried
//   Hudson: 85%+ of islands eliminated; 71 miles of shoreline lost
//   ~50% of Hudson shoreline Troy–Tappan Zee is engineered
//   ~4,000 acres of aquatic habitat lost in upper estuary alone
//   ~1,600 dams and thousands of culverts in 90 tributaries
//
// Sources: Mannahatta/Welikia Project (Sanderson, WCS);
//   Egbert Viele 1865 Sanitary Map; NYSDEC Hudson River Estuary
//   Habitat Restoration Plan; NOAA NERR; AKRF WTC archaeology;
//   Riverfront Recapture (Hartford)
// ============================================================

// Colors for fill/shoreline features
const FILL = {
  origShore:  '#FF8C00',  // dark orange — original shoreline
  fill:       '#A0522D',  // sienna — artificial fill zones
  buried:     '#6495ED',  // cornflower blue — buried water
  lostIsland: '#CD853F',  // peru — lost islands
  archFind:   '#DAA520',  // goldenrod — archaeological finds in fill
  contam:     '#8B0000',  // dark red — contamination
  railroad:   '#4A4A4A',  // dark gray — railroad causeways
  landfill:   '#5C4033',  // dark brown — landfills
  lenape:     '#DEB887'   // burlewood — Lenape sites
};

// ==================== MANHATTAN ORIGINAL SHORELINE ====================
// Pearl St / Cherry St (east), Greenwich St (west)
// Everything beyond these lines is artificial fill

// --- East Side Original Shoreline (Pearl Street / Cherry Street) ---
L.polyline([
  [40.7005, -74.0393], [40.7030, -74.0385], [40.7060, -74.0378],
  [40.7085, -74.0370], [40.7105, -74.0360], [40.7125, -74.0345],
  [40.7150, -74.0325], [40.7175, -74.0308], [40.7195, -74.0290],
  [40.7215, -74.0270], [40.7240, -74.0255], [40.7260, -74.0235],
  [40.7282, -74.0220], [40.7305, -74.0205], [40.7330, -74.0185],
  [40.7355, -74.0162], [40.7375, -74.0145], [40.7395, -74.0120],
  [40.7420, -74.0100], [40.7445, -74.0075], [40.7470, -74.0052],
  [40.7500, -74.0028]
], {
  color: FILL.origShore, weight: 3, opacity: 0.9, dashArray: '8,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${FILL.origShore}">📍 Manhattan East Side — Original Shoreline</h3>
  <p><b>Route:</b> Approximately modern Pearl Street / Cherry Street</p>
  <p><b>What this means:</b> Everything east of this line to the current East River waterfront is <b>artificial fill</b>. The shoreline migrated outward over centuries:</p>
  <p>• Water Street (1730) → Front Street (1780) → South Street (1800)</p>
  <p><b>"Water lots" system:</b> Colonial authorities sold strips of shoreline underwater at high tide. Buyers built retaining walls at low tide, then spent months filling behind them with ballast, sunken ships, leveled hills, rubble, and garbage.</p>
  <p><b>Lenape era:</b> The original eastern shore along Pearl Street was lined with <b>Lenape shell middens</b> — Pearl Street gets its name from the shells.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Mannahatta Project (Sanderson/WCS); Viele 1865 Sanitary Map; Bone 2009 "The New York City Draft Riots"</p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanOrigShoreline);

// --- West Side Original Shoreline (Greenwich Street) ---
L.polyline([
  [40.7005, -74.0440], [40.7030, -74.0435], [40.7060, -74.0428],
  [40.7090, -74.0422], [40.7115, -74.0418], [40.7145, -74.0415],
  [40.7175, -74.0412], [40.7205, -74.0410], [40.7235, -74.0408],
  [40.7265, -74.0406], [40.7300, -74.0404], [40.7335, -74.0402],
  [40.7370, -74.0400], [40.7405, -74.0398], [40.7440, -74.0096],
  [40.7475, -74.0094], [40.7510, -74.0092]
], {
  color: FILL.origShore, weight: 3, opacity: 0.9, dashArray: '8,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${FILL.origShore}">📍 Manhattan West Side — Original Shoreline</h3>
  <p><b>Route:</b> Approximately modern Greenwich Street</p>
  <p><b>What this means:</b> Everything west of this line to the current Hudson River waterfront is <b>artificial fill</b>. The original western shore featured sandy beaches from the Battery to approximately 34th Street.</p>
  <p><b>Scale:</b> By the 1970s, Manhattan had expanded outward by almost 1,000 feet on each side. Approximately 29% of the entire island — between 1,400 and 3,000 acres — is artificial land.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Mannahatta Project; Viele 1865; Land Reclamation in Lower Manhattan surveys</p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanOrigShoreline);

// ==================== MANHATTAN FILL ZONES ====================

// --- Battery Park City (92 acres, created from WTC excavation) ---
L.polygon([
  [40.7050, -74.0190], [40.7100, -74.0175], [40.7170, -74.0165],
  [40.7230, -74.0162], [40.7280, -74.0160], [40.7310, -74.0162],
  [40.7310, -74.0180], [40.7280, -74.0178], [40.7230, -74.0178],
  [40.7170, -74.0180], [40.7100, -74.0188], [40.7050, -74.0200],
  [40.7050, -74.0190]
], {
  color: FILL.fill, weight: 2, opacity: 0.7,
  fillColor: FILL.fill, fillOpacity: 0.25
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${FILL.fill}">🏗️ Battery Park City — 92 Acres of New Land</h3>
  <p><b>Created:</b> 1960s–1970s</p>
  <p><b>How:</b> World Trade Center excavation dug 65–70 feet to bedrock, producing <b>1.2 million cubic yards</b> of material. This was dumped into the Hudson to create 92 acres of entirely new land.</p>
  <p><b>Context:</b> The WTC site itself was already built on old fill — the original shoreline in this area was at Greenwich Street. The excavation went through centuries of earlier landfill.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Gillespie 1999 "Twin Towers"; AKRF archaeological monitoring</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanFillZones);

// --- Lower Manhattan fill zone (generalized) ---
L.polygon([
  [40.6985, -74.0420], [40.6990, -74.0375], [40.7010, -74.0340],
  [40.7060, -74.0280], [40.7120, -74.0230], [40.7180, -74.0200],
  [40.7180, -74.0165], [40.7120, -74.0180], [40.7060, -74.0210],
  [40.7010, -74.0260], [40.6985, -74.0320], [40.6975, -74.0380],
  [40.6980, -74.0420], [40.6985, -74.0420]
], {
  color: FILL.fill, weight: 1.5, opacity: 0.5,
  fillColor: FILL.fill, fillOpacity: 0.15
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${FILL.fill}">🏗️ Lower Manhattan — Centuries of Fill</h3>
  <p><b>Timeline:</b></p>
  <p>• <b>Dutch (1620s):</b> First wetland drainage; canal along Broad Street</p>
  <p>• <b>British (1686):</b> Dongan Charter authorized water lot sales 200 ft into East River</p>
  <p>• <b>British (1731):</b> Montgomerie Charter doubled allowable fill distance to 400 ft</p>
  <p>• <b>By Revolution:</b> ~500 acres added to Lower Manhattan</p>
  <p>• <b>By 1865:</b> Lower tip ~30% larger than original</p>
  <p>• <b>By 1970s:</b> 1,400–3,000 acres of Manhattan on fill (~29% of island)</p>
  <p><b>Fill materials:</b> Ship ballast, sunken vessels, leveled hills, excavation debris, rubble, household garbage.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Viele 1865; Mannahatta Project; Buttenwieser 1999 "Manhattan Water-Bound"</p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanFillZones);

// --- Castle Clinton (built 200 ft offshore, now connected) ---
L.circleMarker([40.7035, -74.0170], {radius: 4, color: FILL.fill, fillColor: FILL.origShore, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.origShore}">🏰 Castle Clinton — Once an Island</h3>
    <p><b>Built:</b> 1808–1811</p>
    <p><b>Originally:</b> Built <b>200 feet offshore</b> on an artificial island</p>
    <p><b>Today:</b> Battery Park was created by filling the gap between the fort and Manhattan, making the offshore fort part of the island. Now a national monument surrounded by parkland that didn't exist when it was built.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> NPS Castle Clinton NM; Buttenwieser 1999</p>
  </div>`).addTo(L_groups.mohicanFillZones);

// --- Ellis Island (3.3 → 27.5 acres) ---
L.circleMarker([40.6995, -74.0395], {radius: 5, color: FILL.fill, fillColor: FILL.fill, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.fill}">🏗️ Ellis Island — 724% Expansion</h3>
    <p><b>Original:</b> ~3.3 acres</p>
    <p><b>After fill:</b> ~27.5 acres</p>
    <p><b>Legal consequence:</b> In 1998, New Jersey successfully argued to the Supreme Court that all the "artificial" portions of Ellis Island belong to New Jersey, since the fill extended into NJ waters. Only the original 3.3-acre island is in New York.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> NPS; New Jersey v. New York, 523 U.S. 767 (1998)</p>
  </div>`).addTo(L_groups.mohicanFillZones);

// --- Governors Island (expanded with subway excavation fill) ---
L.circleMarker([40.6895, -74.0165], {radius: 4, color: FILL.fill, fillColor: FILL.fill, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.fill}">🏗️ Governors Island — Subway Fill</h3>
    <p><b>Expansion:</b> Expanded with fill from the Lexington Avenue subway excavation (1901–1904).</p>
    <p><b>Context:</b> The debris from digging one of NYC's first subway lines was barged to the island and used to enlarge it — connecting infrastructure buried underground with infrastructure built on artificial land.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> NPS; Trust for Governors Island</p>
  </div>`).addTo(L_groups.mohicanFillZones);

// --- Gansevoort Peninsula / Meatpacking District ---
L.circleMarker([40.7395, -74.0095], {radius: 4, color: FILL.fill, fillColor: FILL.fill, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.fill}">🏗️ Gansevoort Peninsula (Meatpacking District)</h3>
    <p><b>Originally:</b> A spit of land</p>
    <p><b>Expanded:</b> 1837+ when Thirteenth Avenue was created by landfill, extending the shoreline into the Hudson.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Buttenwieser 1999; NYC Parks</p>
  </div>`).addTo(L_groups.mohicanFillZones);

// ==================== MANHATTAN BURIED WATER FEATURES ====================

// --- Collect Pond (48–70 acres, now Foley Square) ---
L.polygon([
  [40.7145, -74.0025], [40.7155, -74.0010], [40.7165, -74.0000],
  [40.7170, -73.9988], [40.7168, -73.9975], [40.7160, -73.9965],
  [40.7148, -73.9960], [40.7135, -73.9965], [40.7125, -73.9975],
  [40.7120, -73.9990], [40.7125, -74.0005], [40.7135, -74.0020],
  [40.7145, -74.0025]
], {
  color: FILL.buried, weight: 2, opacity: 0.8,
  fillColor: FILL.buried, fillOpacity: 0.25, dashArray: '6,3'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${FILL.buried}">💧 Collect Pond — Heart of Indigenous Manhattan</h3>
  <p><b>Size:</b> 48–70 acres, up to 60 feet deep</p>
  <p><b>Type:</b> Glacial kettle pond — spring-fed freshwater</p>
  <p><b>Indigenous use:</b> Lenape settlement called <b>Werpoes</b> on the southern shore. The pond was the primary freshwater source for both Lenape and early colonists. A cross-island wetland corridor connected the pond's drainage to both the Hudson and East Rivers — essentially cutting the island in two.</p>
  <p><b>Destruction:</b> Polluted by tanneries and slaughterhouses. Canal dug to drain it (this is why <b>Canal Street</b> exists — it was a literal canal). By 1811, completely filled with earth and refuse. Poorly engineered — buried vegetation released methane, ground subsided.</p>
  <p><b>Legacy:</b> The <b>Five Points</b> — one of the most notorious slums in American history — developed directly on the former pond. Today: <b>Foley Square</b> and courthouses sit on top. Collect Pond Park marks the spot.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Sanderson 2009 "Mannahatta"; Koeppel 2000 "Water for Gotham"; Viele 1865</p>
</div>`, {maxWidth: 420}).addTo(L_groups.mohicanBuriedWater);

// --- Minetta Brook (still flows underground!) ---
L.polyline([
  [40.7390, -73.9935], [40.7370, -73.9940], [40.7345, -73.9950],
  [40.7320, -73.9960], [40.7300, -73.9972], [40.7280, -73.9985],
  [40.7260, -74.0000], [40.7240, -74.0015], [40.7225, -74.0030],
  [40.7210, -74.0048], [40.7195, -74.0065], [40.7185, -74.0085]
], {
  color: FILL.buried, weight: 2.5, opacity: 0.7, dashArray: '5,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${FILL.buried}">💧 Minetta Brook — Manhattan's Ghost Stream</h3>
  <p><b>Route:</b> Two spring-fed forks near 5th Ave/20th St and 6th Ave/17th St → merged near 11th St → flowed SW through Washington Square Park → joined Hudson between Houston and Charlton Streets.</p>
  <p><b>Before burial:</b> Known for abundant trout. The area along the brook was called "Little Africa" — freed slaves received land grants along its banks in the 1640s.</p>
  <p><b>Still flowing:</b> Minetta Brook <b>still flows underground</b> — causes mysterious flooding in Greenwich Village basements to this day. Minetta Lane and Minetta Street named for it.</p>
  <p><b>Name:</b> "Bestavaar's Kill" (Dutch)</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Sanderson 2009; Viele 1865; Waldman 2012 "Draining Gotham"</p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanBuriedWater);

// --- Canal Street (the actual canal) ---
L.polyline([
  [40.7188, -74.0005], [40.7195, -74.0020], [40.7200, -74.0040],
  [40.7205, -74.0060], [40.7208, -74.0080], [40.7210, -74.0100],
  [40.7212, -74.0115]
], {
  color: FILL.buried, weight: 2, opacity: 0.6, dashArray: '4,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${FILL.buried}">💧 Canal Street — The Actual Canal</h3>
  <p><b>What it was:</b> A literal canal dug to drain Collect Pond to the Hudson River.</p>
  <p><b>Today:</b> Buried and paved over. One of NYC's busiest streets sits directly on top of the old drainage canal. The name is all that remains.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Koeppel 2000; Viele 1865; Burrows & Wallace "Gotham"</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanBuriedWater);

// --- Sunfish Pond & Stream ---
L.circleMarker([40.7445, -73.9755], {radius: 4, color: FILL.buried, fillColor: FILL.buried, fillOpacity: 0.6, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.buried}">💧 Sunfish Pond & Stream (T'oude Wrack)</h3>
    <p><b>Location:</b> Kips Bay area</p>
    <p><b>Description:</b> Spring-fed pond and stream. Used by British during 1776 invasion of Manhattan. Now entirely buried under the city.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Sanderson 2009; Viele 1865</p>
  </div>`).addTo(L_groups.mohicanBuriedWater);

// --- Spring Street spring ---
L.circleMarker([40.7245, -74.0010], {radius: 3, color: FILL.buried, fillColor: FILL.buried, fillOpacity: 0.6, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.buried}">💧 Spring Street — The Lost Spring</h3>
    <p><b>Description:</b> Named for a spring that flowed into Lipsenard's Meadow, a swampy area near Canal Street. Both the spring and the meadow are buried.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Sanderson 2009; Burrows & Wallace "Gotham"</p>
  </div>`).addTo(L_groups.mohicanBuriedWater);

// --- Cross-island wetland corridor ---
L.polyline([
  [40.7130, -74.0095], [40.7140, -74.0055], [40.7145, -74.0020],
  [40.7148, -73.9985], [40.7150, -73.9950], [40.7148, -73.9920]
], {
  color: FILL.buried, weight: 4, opacity: 0.4, dashArray: '3,5'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${FILL.buried}">💧 Cross-Island Wetland Corridor</h3>
  <p><b>Description:</b> A marshy low ground stretched from river to river through the Collect Pond's drainage — essentially <b>cutting the island in two</b>. The wetlands surrounding the pond filtered brackish tidal water, keeping the Collect fresh despite tidal rivers on both sides.</p>
  <p><b>Today:</b> Completely filled and built over. Canal Street and Chinatown sit on this former wetland corridor.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Sanderson 2009; Viele 1865; Koeppel 2000</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanBuriedWater);

// ==================== INDIGENOUS SITES ON MANHATTAN ====================

// --- Werpoes Settlement (at Collect Pond) ---
L.circleMarker([40.7135, -73.9990], {radius: 5, color: FILL.lenape, fillColor: FILL.lenape, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.lenape}">⬢ Werpoes — Lenape Settlement at Collect Pond</h3>
    <p><b>Location:</b> Southern shore of Collect Pond (now Foley Square area)</p>
    <p><b>Description:</b> Lenape settlement subsisting on shellfish from the Collect and farming arable land around the wetlands. The Collect was the primary freshwater source on the island.</p>
    <p><b>Today:</b> Buried under 15+ feet of fill, courthouses, and city infrastructure. The Five Points slum, then Foley Square, replaced this Indigenous gathering place.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Sanderson 2009 "Mannahatta"; Grumet 1981</p>
  </div>`).addTo(L_groups.mohicanVillages);

// --- Pearl Street Shell Middens ---
L.polyline([
  [40.7050, -74.0375], [40.7090, -74.0350], [40.7130, -74.0320],
  [40.7170, -74.0290], [40.7210, -74.0260]
], {
  color: FILL.lenape, weight: 4, opacity: 0.6, dashArray: '4,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${FILL.lenape}">🦪 Pearl Street Shell Middens — Lenape Shoreline</h3>
  <p><b>Description:</b> The original eastern shore of Manhattan along modern Pearl Street was lined with <b>Lenape shell middens</b>. Pearl Street literally gets its name from the shells.</p>
  <p><b>Significance:</b> These middens mark the original shoreline — everything east of Pearl Street is artificial fill added over the following centuries.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Grumet 1981; Cantwell & Wall 2001 "Unearthing Gotham"</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanOrigShoreline);

// ==================== ARCHAEOLOGICAL FINDS IN FILL ====================

// --- WTC Ship (~1773, found 2010) ---
L.circleMarker([40.7115, -74.0130], {radius: 5, color: FILL.archFind, fillColor: FILL.archFind, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.archFind}">⚓ WTC Ship — Revolutionary War Gunboat</h3>
    <p><b>Found:</b> 2010, during World Trade Center reconstruction</p>
    <p><b>Depth:</b> 22 feet below street level — preserved in oxygen-poor landfill for 200+ years</p>
    <p><b>Date:</b> Built ~1773, near Philadelphia</p>
    <p><b>Description:</b> Revolutionary War-era gunboat. Over 600 planks and 2,000 artifacts recovered, including musket balls and buttons. The ship was buried as landfill to expand Manhattan between 1790–1818.</p>
    <p><b>Status:</b> Being reassembled at New York State Museum in Albany.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> AKRF archaeological monitoring; Huey 2010; NYS Museum</p>
  </div>`).addTo(L_groups.mohicanArchInFill);

// --- Adriaen Block's Ship *Tyger* (1613, found 1916) ---
L.circleMarker([40.7195, -74.0108], {radius: 5, color: FILL.archFind, fillColor: FILL.archFind, fillOpacity: 0.9, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.archFind}">⚓ Adriaen Block's <i>Tyger</i> — First European Ship Wreck in NY</h3>
    <p><b>Original event:</b> 1613 — Dutch explorer Adriaen Block's ship burned at the waterline at Greenwich Street (then the shoreline)</p>
    <p><b>Found:</b> 1916 — rediscovered buried under landfill when the shoreline had been extended</p>
    <p><b>Context:</b> Greenwich Street was the original western shoreline. The <i>Tyger</i> burned right at the water's edge. By 1797 fill operations had begun extending the shoreline westward, burying the wreck. Block Island (RI) is named after the same Adriaen Block.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Museum of the City of New York; Cantwell & Wall 2001</p>
  </div>`).addTo(L_groups.mohicanArchInFill);

// ==================== HUDSON RIVER — LOST ISLANDS & ENGINEERED SHORE ====================

// --- Hudson River Lost Islands & Dredging (generalized upper estuary) ---
L.polyline([
  [42.75, -73.69], [42.65, -73.74], [42.50, -73.78], [42.35, -73.80],
  [42.20, -73.82], [42.05, -73.87], [41.90, -73.92], [41.75, -73.96],
  [41.60, -73.97], [41.45, -73.98], [41.30, -73.97], [41.15, -73.95],
  [41.05, -73.95]
], {
  color: FILL.lostIsland, weight: 5, opacity: 0.35
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${FILL.lostIsland}">🏝️ Hudson River — 85% of Islands Eliminated</h3>
  <p><b>The devastation:</b></p>
  <p>• <b>85%+ of the river's islands</b> have been eliminated</p>
  <p>• <b>71 miles of shoreline</b> lost from filling side channels</p>
  <p>• <b>~50% of shoreline</b> Troy–Tappan Zee is engineered</p>
  <p>• <b>10,100+ acres</b> of engineered/hardened shoreline</p>
  <p>• <b>~4,000 acres</b> of aquatic habitat lost in upper estuary (3,300 acres filled, 700 dredged)</p>
  <p>• <b>~1,600 dams</b> and thousands of culverts in 90 tributaries</p>
  <p><b>How:</b> Starting 1797, dikes and dams channelized the river. The Army Corps took over in 1834. Dredged material was dumped between islands and into side channels. By 1965, a single 32-ft deep channel replaced the braided, island-rich, shallow-water mosaic.</p>
  <p><b>Before:</b> Multiple channels braided around dozens of islands. Extensive shallow water, tidal flats, side channels — critical fish nursery habitat. Whales seen as far north as Albany in the 1600s. The river was wider, shallower, and far more ecologically complex.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> NYSDEC Hudson River Estuary Habitat Restoration Plan; Army Corps of Engineers; "Ecological Impacts of 200 Years of Hudson River Dredging" (NY Almanack 2025)</p>
</div>`, {maxWidth: 420}).addTo(L_groups.mohicanLostIslands);

// --- Railroad Causeways (east bank — Hudson River Railroad 1849) ---
L.polyline([
  [42.75, -73.68], [42.55, -73.73], [42.35, -73.77], [42.15, -73.82],
  [41.95, -73.88], [41.75, -73.93], [41.55, -73.95], [41.35, -73.94],
  [41.15, -73.92], [40.95, -73.91], [40.80, -73.92]
], {
  color: FILL.railroad, weight: 3, opacity: 0.5, dashArray: '10,4'
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${FILL.railroad}">🚂 Hudson River Railroad — East Bank (1849)</h3>
  <p><b>Built:</b> 1849 (service Troy–NYC by 1851)</p>
  <p><b>Method:</b> Built directly along the shoreline, often on fill placed in the river or on previously underwater state-owned lands.</p>
  <p><b>Impact:</b> Railroad causeways cut off tidal wetlands from the main river. At Tivoli Bays, the 1851 causeway separated coves from the Hudson — small culverts are now the only tidal connection. At Stockport Flats, tracks front the cove, isolating wetlands.</p>
  <p><b>Nearly half</b> of all engineered shoreline on the Hudson is associated with railroad lines. The railroads created a near-continuous barrier between communities and the river, and between the river and its wetlands.</p>
  <p><b>Ironic twist:</b> Some of the most important surviving wetlands (Tivoli North Bay, Stockport Marsh) actually <b>formed in response to</b> railroad alterations — colonizing the low-energy environments behind causeways and dredge spoil. These "anthropogenic marshes" now host some of the most biodiverse freshwater tidal habitat in the Northeast.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> NYSDEC Estuary Plan; NOAA Hudson River NERR; "Rapid tidal marsh development in anthropogenic backwaters" (NOAA)</p>
</div>`, {maxWidth: 420}).addTo(L_groups.mohicanLostIslands);

// --- Troy Lock & Dam (1915 — artificial tidal head) ---
L.circleMarker([42.75, -73.69], {radius: 5, color: FILL.fill, fillColor: FILL.railroad, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.railroad}">⬛ Troy Lock & Dam (1915) — Artificial Tidal Head</h3>
    <p><b>Built:</b> 1915 by Army Corps of Engineers</p>
    <p><b>Effect:</b> Created the modern artificial head of tidal influence on the Hudson. Before this dam, tidal waters may have reached slightly further upstream.</p>
    <p><b>Context:</b> Part of the federal navigation channel project that transformed the upper Hudson from a braided, island-rich, shallow-water mosaic into a single 32-foot deep shipping channel.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Army Corps of Engineers; NYSDEC</p>
  </div>`).addTo(L_groups.mohicanLostIslands);

// ==================== CONTAMINATION ZONES ====================

// --- Hudson River PCB Zone (200 miles) ---
L.polyline([
  [43.30, -73.55], [43.10, -73.60], [42.90, -73.65], [42.75, -73.69],
  [42.55, -73.74], [42.35, -73.78], [42.15, -73.82], [41.95, -73.88],
  [41.75, -73.93], [41.55, -73.96], [41.35, -73.94]
], {
  color: FILL.contam, weight: 6, opacity: 0.3
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${FILL.contam}">☠️ Hudson River PCB Contamination (200 miles)</h3>
  <p><b>Source:</b> General Electric discharged <b>~1.3 million pounds of PCBs</b> from capacitor plants at Hudson Falls and Fort Edward (1947–1977).</p>
  <p><b>Extent:</b> PCBs contaminated a <b>200-mile stretch</b> of river sediment.</p>
  <p><b>Cleanup (2009–2015):</b> Largest environmental dredging project in U.S. history — <b>2.75 million cubic yards</b> of contaminated sediment removed from a 40-mile stretch of the upper Hudson.</p>
  <p><b>Status:</b> Significant PCBs remain despite remediation. The floodplain along the upper Hudson is also contaminated — comprehensive investigation ongoing.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> EPA Hudson River PCBs Superfund Site; NYSDEC; GE remediation records</p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanContamination);

// --- GE Hudson Falls & Fort Edward Plants ---
L.circleMarker([43.30, -73.59], {radius: 5, color: FILL.contam, fillColor: FILL.contam, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.contam}">☠️ GE Hudson Falls / Fort Edward — PCB Source</h3>
    <p><b>Location:</b> Hudson Falls & Fort Edward, Washington County, NY</p>
    <p><b>Operations:</b> GE capacitor manufacturing plants (1947–1977)</p>
    <p><b>Discharge:</b> ~1.3 million pounds of PCBs into the Hudson River</p>
    <p><b>Effect:</b> Created a 200-mile Superfund site — the longest in the eastern US.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> EPA Superfund; NYSDEC</p>
  </div>`).addTo(L_groups.mohicanContamination);

// --- Housatonic River PCBs (GE Pittsfield) ---
L.circleMarker([42.45, -73.25], {radius: 5, color: FILL.contam, fillColor: FILL.contam, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.contam}">☠️ Housatonic River PCBs — GE Pittsfield</h3>
    <p><b>Location:</b> GE Pittsfield plant, Berkshire County, MA</p>
    <p><b>Effect:</b> The Housatonic is now one of the most PCB-contaminated rivers in the country. The river that was the Mohican heartland — "Usi-a-di-en-uk" — is now a Superfund site.</p>
    <p><b>Context:</b> In addition to PCBs, the Housatonic had 28+ paper mill dams by the end of the Civil War, fundamentally altering the river that supported 7,000+ years of continuous human habitation.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> EPA GE-Pittsfield/Housatonic River Superfund; MA DEP</p>
  </div>`).addTo(L_groups.mohicanContamination);

// --- Croton Point — From Sacred Site to Garbage Dump ---
L.circleMarker([41.19, -73.89], {radius: 5, color: FILL.contam, fillColor: FILL.landfill, fillOpacity: 0.8, weight: 3})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.landfill}">🗑️ Croton Point — Sacred Site to Garbage Mountain</h3>
    <p><b>Sacred history:</b> Site of the <b>Navish shell midden</b> — largest oyster shell midden on the North Atlantic coast, 7,000+ years of continuous Indigenous occupation.</p>
    <p><b>Destruction:</b> Became <b>Westchester County's primary landfill</b> from 1927 to 1986.</p>
    <p><b>Impact:</b> By the 1970s, leaking <b>40 million gallons of leachate into the river annually</b>. Federal intervention required to close the dump.</p>
    <p><b>Today:</b> 1995 final capping completed. Now a county park — but the capped landfill is visible as a clearing on the peninsula. The ancient shell midden sits adjacent to a modern garbage mountain.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Westchester County Parks; NYSDEC; Claassen 1995</p>
  </div>`).addTo(L_groups.mohicanContamination);

// ==================== CONNECTICUT RIVER — LANDFILLS & WALLS ====================

// --- Hartford "Mount Trashmore" landfill ---
L.circleMarker([41.78, -72.66], {radius: 5, color: FILL.landfill, fillColor: FILL.landfill, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.landfill}">🗑️ Hartford Landfill ("Mount Trashmore")</h3>
    <p><b>Location:</b> Between Hartford and the Connecticut River, along I-91</p>
    <p><b>Opened:</b> 1940 as open-burning dump. Accepted trash from 60+ towns.</p>
    <p><b>Impact:</b> Grew into an enormous mound visible from I-91. Persistent odor, ash from incinerator, grey dust. Methane pipes periodically burst into flames. Literally <b>blocked public access to the river</b> for decades.</p>
    <p><b>Environmental justice:</b> High rates of asthma and cancer documented in the largely African American and Latino neighborhoods nearby. Community campaign forced closure.</p>
    <p><b>Today:</b> $30.4M capping completed. Now covered with solar panels generating electricity for 1,000 homes. But the landfill is still there — between the city and its river.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> CT DEEP; Hartford Courant; Riverfront Recapture; Environmental Justice Alliance reports</p>
  </div>`).addTo(L_groups.mohicanContamination);

// --- Hartford Flood Wall / I-91 Barrier ---
L.polyline([
  [41.80, -72.66], [41.78, -72.66], [41.76, -72.66], [41.74, -72.66]
], {
  color: FILL.railroad, weight: 4, opacity: 0.6
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${FILL.railroad}">🧱 Hartford Flood Wall & I-91 Barrier</h3>
  <p><b>Description:</b> Hartford's riverfront is walled off by flood dikes and cut off by Interstate 91. Since 1981, Riverfront Recapture has worked to reconnect the city with the Connecticut River — but the fundamental problem remains: the river is separated from the city by walls and a highway.</p>
  <p><b>Context:</b> For thousands of years, the Connecticut River was an unobstructed corridor. Now at Hartford, a highway and flood infrastructure stand between people and water.</p>
  <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Riverfront Recapture; CT DOT</p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanContamination);

// --- Old Saybrook Landfill ("Mount Saybrook") ---
L.circleMarker([41.29, -72.38], {radius: 4, color: FILL.landfill, fillColor: FILL.landfill, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.landfill}">🗑️ Old Saybrook Landfill ("Mount Saybrook")</h3>
    <p><b>Location:</b> Banks of the Connecticut River at its mouth</p>
    <p><b>Description:</b> Long-shuttered landfill blocking a wide stretch of scenic waterfront. Being converted to a park. From the top: unobstructed view from Old Lyme down the Connecticut to Long Island Sound — a view that for decades was only enjoyed by the town's garbage.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> CT DEEP; Old Saybrook Conservation Commission</p>
  </div>`).addTo(L_groups.mohicanContamination);

// ==================== MANNAHATTA — ECOLOGICAL MEMORY ====================

// --- Mannahatta overview marker (centered on Manhattan) ---
L.circleMarker([40.7580, -73.9855], {radius: 6, color: '#2E8B57', fillColor: '#2E8B57', fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:#2E8B57">🌿 Mannahatta — The Island Before Fill</h3>
    <p><b>Research:</b> Eric Sanderson's Mannahatta Project (Wildlife Conservation Society, 10 years)</p>
    <p><b>Original ecology (1609):</b></p>
    <p>• <b>66 miles of streams and rivers</b> flowed across the island</p>
    <p>• <b>54 distinct ecological communities</b> — more per acre than Yellowstone</p>
    <p>• 627 plant species, 85 fish species, 233 bird species, 24 mammal species</p>
    <p>• Wolves, black bears, mountain lions, mink, river otters</p>
    <p>• Whales, porpoises, and seals visited the harbor</p>
    <p>• Western shore: sandy beaches from Battery to ~34th St</p>
    <p>• Forests covered Times Square; meadows spread across Harlem; wetlands dominated downtown</p>
    <p><b>Today:</b> ~29% of the island is artificial fill. Every stream buried. Every wetland filled. The only trace: street names (Pearl, Water, Canal, Spring, Minetta) and the occasional flooded basement.</p>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> Sanderson 2009 "Mannahatta: A Natural History of New York City"; Welikia Project (WCS)</p>
  </div>`).addTo(L_groups.mohicanBuriedWater);

// ==================== COMPARISON TABLE MARKER ====================

// Info marker at approximate center of the region
L.circleMarker([41.50, -73.50], {radius: 3, color: '#FFF', fillColor: '#333', fillOpacity: 0.8, weight: 1})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${FILL.origShore}">📊 What Was Lost — By the Numbers</h3>
    <table style="width:100%;border-collapse:collapse;font-size:11px;margin-top:8px;">
      <tr style="border-bottom:1px solid rgba(193,154,107,0.3);">
        <td style="padding:4px;font-weight:bold;">Feature</td>
        <td style="padding:4px;color:#2E8B57;">Indigenous Era</td>
        <td style="padding:4px;color:${FILL.contam};">Modern</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.15);">
        <td style="padding:4px;">Manhattan area</td>
        <td style="padding:4px;">~5,500 acres</td>
        <td style="padding:4px;">~14,600 acres (with fill)</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.15);">
        <td style="padding:4px;">Manhattan streams</td>
        <td style="padding:4px;">66 miles</td>
        <td style="padding:4px;">0 (all buried)</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.15);">
        <td style="padding:4px;">Hudson islands</td>
        <td style="padding:4px;">Hundreds</td>
        <td style="padding:4px;">~15% remain</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.15);">
        <td style="padding:4px;">Hudson engineered shore</td>
        <td style="padding:4px;">0%</td>
        <td style="padding:4px;">~50%</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(193,154,107,0.15);">
        <td style="padding:4px;">Tidal wetlands</td>
        <td style="padding:4px;">Continuous, 153 mi</td>
        <td style="padding:4px;">Fragments at 4 sites</td>
      </tr>
      <tr>
        <td style="padding:4px;">CT River access</td>
        <td style="padding:4px;">Unobstructed, source to sea</td>
        <td style="padding:4px;">Dammed, walled off, blocked</td>
      </tr>
    </table>
    <p style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(193,154,107,0.2);padding-top:4px;"><b>Sources:</b> NYSDEC; Mannahatta Project; NOAA NERR; Army Corps</p>
  </div>`, {maxWidth: 420}).addTo(L_groups.mohicanOrigShoreline);
