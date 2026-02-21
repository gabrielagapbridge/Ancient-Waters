// ============================================================
// 56-haudenosaunee-expansion.js
// PART 2: Mohawk Village Sequence, Seneca Sites,
// Onondaga/Cayuga/Oneida Sites, Northern NY Iroquoians,
// St. Lawrence Iroquoians, Waterway Network, Sullivan-Clinton Path
// ============================================================

// Re-use color palette from Part 1
const HDN2 = {
  mohawk: '#8B0000',
  oneida: '#2E8B57',
  onondaga: '#4B0082',
  cayuga: '#B8860B',
  seneca: '#FF4500',
  tuscarora: '#008B8B',
  sacred: '#DC143C',
  village: '#228B22',
  lost: '#B22222',
  water: '#1E90FF',
  nnyi: '#FF69B4',
  stlaw: '#9932CC',
  paleo: '#4682B4',
  sullivan: '#8B0000'
};


// ==================== MOHAWK VILLAGE SEQUENCE ====================
// Villages relocated every 10-25 years as timber/soil exhausted.
// Sequence spans ~AD 1350-1780 across the Mohawk Valley.
// Cornell Tree-Ring Lab (2021) revised key dates.

// --- Oak Hill No. 1 (earliest Mohawk Iroquoian) ---
L.circleMarker([42.99, -74.50], {radius: 4, color: HDN2.mohawk, fillColor: '#FFB6C1', fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Oak Hill No. 1 — Earliest Mohawk</h3>
    <p><b>Date:</b> ~AD 1350–1400</p>
    <p><b>Location:</b> Fulton County, NY</p>
    <p><b>Significance:</b> One of the earliest sites identified as distinctly Mohawk Iroquoian (as opposed to Owasco/proto-Iroquoian). Marks the emergence of recognizable Mohawk material culture.</p>
    <p><b>Sources:</b> Ritchie & Funk 1973; Snow 1995</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnMohawkSeq);

// --- Jackson-Everson ---
L.circleMarker([42.98, -74.48], {radius: 3, color: HDN2.mohawk, fillColor: '#FFB6C1', fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Jackson-Everson</h3>
    <p><b>Date:</b> ~AD 1400–1450</p><p><b>Location:</b> Fulton County</p>
    <p>Early Mohawk village in the pre-contact sequence.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnMohawkSeq);

// --- Galligan ---
L.circleMarker([42.97, -74.46], {radius: 3, color: HDN2.mohawk, fillColor: '#FFB6C1', fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Galligan</h3>
    <p><b>Date:</b> ~AD 1400–1450</p><p><b>Location:</b> Fulton County</p>
    <p>Early Mohawk village, pre-contact settlement cluster.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnMohawkSeq);

// --- Wormuth ---
L.circleMarker([42.96, -74.44], {radius: 3, color: HDN2.mohawk, fillColor: '#FFB6C1', fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Wormuth</h3>
    <p><b>Date:</b> ~AD 1420–1470</p><p><b>Location:</b> Fulton/Montgomery County</p>
    <p>Mid-sequence Mohawk village.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnMohawkSeq);

// --- Swart-Farley ---
L.circleMarker([42.97, -74.42], {radius: 3, color: HDN2.mohawk, fillColor: '#FFB6C1', fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Swart-Farley</h3>
    <p><b>Date:</b> ~AD 1440–1480</p><p><b>Location:</b> Fulton/Montgomery County</p>
    <p>Mid-sequence Mohawk village. Villages growing larger, more palisaded.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnMohawkSeq);

// --- Second Woods (Failing site) ---
L.circleMarker([42.94, -74.60], {radius: 3, color: HDN2.mohawk, fillColor: '#FFB6C1', fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Second Woods (Failing Site)</h3>
    <p><b>Date:</b> ~AD 1400s</p>
    <p><b>Location:</b> Wooded ridge, Fort Plain area, Montgomery County</p>
    <p><b>Discovery:</b> Found 1921. A fragment of freshwater clam shell on the surface led to excavation. Charcoal-blackened earth marked fireplace locations.</p>
    <p><b>Pottery:</b> Distinctive — Iroquoian but lacking the characteristic rim incisions found at Otstungo and Garoga. Features corn-cob impressions, cord impressions, and porcupine quill imitation stitching.</p>
    <p><b>Sources:</b> Douglas Ayres Jr.; Mohawk Valley history</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnMohawkSeq);

// --- Wagner's Hollow ---
L.circleMarker([42.95, -74.57], {radius: 3, color: HDN2.mohawk, fillColor: '#FFB6C1', fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Wagner's Hollow</h3>
    <p><b>Date:</b> ~AD 1500s</p>
    <p><b>Location:</b> On Garoga Creek, Montgomery County</p>
    <p>Fine bone implements and many arrowheads recovered. Located along the creek connecting multiple Mohawk village sites.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnMohawkSeq);

// --- Elwood ---
L.circleMarker([42.97, -74.40], {radius: 3, color: HDN2.mohawk, fillColor: '#FFB6C1', fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Elwood</h3>
    <p><b>Date:</b> ~AD 1450–1500</p><p><b>Location:</b> Montgomery County</p>
    <p>Mohawk village in the pre-contact sequence.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnMohawkSeq);

// --- Fox Lair ---
L.circleMarker([42.96, -74.53], {radius: 3, color: HDN2.mohawk, fillColor: '#FFB6C1', fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Fox Lair</h3>
    <p><b>Date:</b> ~AD 1450–1500</p><p><b>Location:</b> Fulton County</p>
    <p>Mohawk village.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnMohawkSeq);

// --- Smith-Pagerie (~1478-1498, Cornell revised) ---
L.circleMarker([43.01, -74.56], {radius: 5, color: HDN2.mohawk, fillColor: '#FF6B6B', fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${HDN2.mohawk}">⏳ Smith-Pagerie — Cornell Revised Dating</h3>
    <p><b>Revised Date:</b> ~AD 1478–1498 (Cornell Tree-Ring Lab 2021)</p>
    <p><b>Previous Date:</b> Thought to be ~1520s</p>
    <p><b>Location:</b> Caroga Creek drainage, Ephratah, Fulton County</p>
    <p><b>Significance:</b> Earliest of the three major Caroga Creek Mohawk villages. Cornell's 2021 revision used tree-ring dating of wooden structural posts — pushing dates back decades. European metalwork found here was deposited <i>earlier than previously thought</i>, predating Jacques Cartier's arrival at the St. Lawrence (1534).</p>
    <p><b>Implication:</b> European goods reached Mohawk villages through trade networks <i>before</i> any documented European explorer visited the region.</p>
    <p><b>30-Year Gap:</b> Cornell found a ~30-year gap between Klock and Garoga occupation, suggesting different communities — overturning the assumption they were sequential occupations of the same group.</p>
    <p><b>Sources:</b> Funk & Kuhn 2003; Manning et al. 2021 (Cornell); NYSM Bulletin 503</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.hdnMohawkSeq);

// --- Kilts ---
L.circleMarker([43.03, -74.63], {radius: 3, color: HDN2.mohawk, fillColor: '#FF6B6B', fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Kilts</h3>
    <p><b>Date:</b> ~AD 1500s</p><p><b>Location:</b> Montgomery County</p>
    <p>Mohawk village in the contact-era sequence.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnMohawkSeq);

// --- Getman ---
L.circleMarker([43.04, -74.65], {radius: 3, color: HDN2.mohawk, fillColor: '#FF6B6B', fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Getman</h3>
    <p><b>Date:</b> ~AD 1500s</p><p><b>Location:</b> Montgomery County</p>
    <p>Mohawk village.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnMohawkSeq);

// --- Briggs Run (one of first 4 Mohawk Valley sites) ---
L.circleMarker([42.97, -74.33], {radius: 4, color: HDN2.mohawk, fillColor: '#FF6B6B', fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Briggs Run — First Mohawk Valley Settlement</h3>
    <p><b>Date:</b> ~AD 1580s–1600s</p>
    <p><b>Location:</b> North shore of Mohawk River, 4 miles west of Fonda</p>
    <p><b>Significance:</b> One of the first four Mohawk sites in the valley after migration from the St. Lawrence (~1580-1590). The four founding sites (west to east): Otstungo, Garoga, Briggs Run, Cayadutta.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnMohawkSeq);

// --- Cayadutta ---
L.circleMarker([42.98, -74.30], {radius: 4, color: HDN2.mohawk, fillColor: '#FF6B6B', fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Cayadutta — First Mohawk Valley Settlement</h3>
    <p><b>Date:</b> ~AD 1580s–1600s</p>
    <p><b>Location:</b> North shore, 2 miles NW of Fonda, Montgomery County</p>
    <p><b>Significance:</b> Easternmost of the four founding Mohawk valley settlements. Named for Cayadutta Creek.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnMohawkSeq);

// --- Ganada No. 2 ---
L.circleMarker([43.01, -74.36], {radius: 3, color: HDN2.mohawk, fillColor: '#FF6B6B', fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Ganada No. 2</h3>
    <p><b>Date:</b> Early contact period</p><p><b>Location:</b> Montgomery County</p>
    <p>Early contact Mohawk village.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnMohawkSeq);

// --- Fox Farm (predecessor to Caughnawaga) ---
L.circleMarker([42.96, -74.40], {radius: 4, color: HDN2.mohawk, fillColor: '#FF4444', fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Fox Farm Site — Pre-Caughnawaga</h3>
    <p><b>Date:</b> ~1650s–1679</p>
    <p><b>Location:</b> Upstream of Caughnawaga, Montgomery County</p>
    <p><b>Description:</b> Predecessor to the Caughnawaga village. Community moved downstream ~1679. Had larger population than its successor — some Catholic Mohawk had already migrated north to Kahnawake near Montreal.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnMohawkSeq);

// --- Fort Hunter / Lower Castle (Tiononderoge) ---
L.circleMarker([42.83, -74.27], {radius: 4, color: HDN2.mohawk, fillColor: '#FF4444', fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Fort Hunter / Tiononderoge — Lower Mohawk Castle</h3>
    <p><b>Date:</b> 18th century</p>
    <p><b>Location:</b> Confluence of Mohawk River and Schoharie Creek</p>
    <p><b>Description:</b> Strategic river junction. One of the last principal Mohawk settlements before the Revolution forced evacuation. Queen Anne's Chapel (1712) built here — one of the oldest surviving churches in NY.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnMohawkSeq);

// --- Canajoharie / Upper Castle ---
L.circleMarker([42.91, -74.57], {radius: 5, color: HDN2.mohawk, fillColor: '#FF4444', fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${HDN2.mohawk}">⏳ Canajoharie — Upper Mohawk Castle</h3>
    <p><b>Date:</b> 18th century</p>
    <p><b>Location:</b> Canajoharie, Montgomery County</p>
    <p><b>Significance:</b> Home of <b>Thayendanegea (Joseph Brant)</b>, the Mohawk war chief who led pro-British Mohawk during the Revolution. Also home to <b>Molly Brant (Konwatsi'tsiaienni)</b>, Joseph's sister, consort of Sir William Johnson and one of the most politically influential Haudenosaunee women of the colonial era.</p>
    <p><b>Tenotoge (Oak Hill):</b> Nearby site combining aboriginal and European trade goods. A French fleur-de-lis pipe stem was found in 1923. From this hilltop, the junction of the Canadian Trail from Lake George with the river trail could be seen — a surveillance point for monitoring approaches.</p>
    <p><b>Sources:</b> Douglas Ayres Jr.; Schenectady History; Snow 1994</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnMohawkSeq);

// --- Niska Isle ---
L.circleMarker([42.87, -73.88], {radius: 3, color: HDN2.mohawk, fillColor: '#FF4444', fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Niska Isle — River Island Village</h3>
    <p><b>Location:</b> Island in the Mohawk River, near Niskayuna</p>
    <p>Connected by Indian trail crossing the Lisha Kill to Helderberg Escarpment chert quarries — raw material for stone tools.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnMohawkSeq);

// --- Schoharie Mohawk cluster ---
L.circleMarker([42.66, -74.30], {radius: 4, color: HDN2.mohawk, fillColor: '#FF4444', fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.mohawk}">⏳ Schoharie Mohawk Sites</h3>
    <p><b>Location:</b> Schoharie County, NY</p>
    <p><b>Description:</b> Cluster of Mohawk sites documented by the Iroquois Indian Museum. Jim Peck (NYSAA) mapped all known sites using topographic maps. The Enders and Cider Mill sites are key excavated locations.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnMohawkSeq);


// ==================== SENECA VILLAGE SITES ====================

// --- Little Beard's Town / Geneseo (destroyed 1779) ---
L.circleMarker([42.80, -77.81], {radius: 5, color: HDN2.seneca, fillColor: HDN2.lost, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${HDN2.seneca}">🔥 Little Beard's Town (Geneseo) — Destroyed 1779</h3>
    <p><b>Date:</b> 18th century — one of the largest Seneca settlements</p>
    <p><b>Location:</b> Present-day Geneseo, Livingston County (Genesee River)</p>
    <p><b>Named for:</b> Chief Little Beard (Sequidongquee)</p>
    <p><b>Size:</b> 128 houses destroyed by Sullivan's troops, September 1779</p>
    <p><b>Boyd-Parker Incident:</b> Near here, Seneca warriors captured American scouts Lt. Thomas Boyd and Sgt. Michael Parker, who were tortured and killed — one of the most documented incidents of the Sullivan campaign.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnSenecaSeq);

// --- Honeoye ---
L.circleMarker([42.79, -77.51], {radius: 4, color: HDN2.seneca, fillColor: HDN2.village, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.seneca}">🏠 Honeoye — Seneca Town</h3>
    <p><b>Location:</b> Honeoye Lake, Ontario County</p>
    <p><b>Name:</b> "Finger lying" — refers to the lake's shape</p>
    <p><b>Destroyed:</b> Sullivan-Clinton Campaign, 1779</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnSenecaSeq);

// --- Canandaigua (Seneca town + Treaty site) ---
L.circleMarker([42.87, -77.28], {radius: 5, color: HDN2.seneca, fillColor: HDN2.sacred, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${HDN2.seneca}">🏠 Canandaigua — Seneca Town & Treaty Site</h3>
    <p><b>Location:</b> North end of Canandaigua Lake, Ontario County</p>
    <p><b>Name:</b> "The chosen spot"</p>
    <p><b>1794 Treaty of Canandaigua:</b> Still legally binding treaty between the United States and the Six Nations. Recognized Haudenosaunee land rights. Referenced in current disputes (2025). Every November, the US government sends cloth to the Six Nations to honor the treaty — a commitment that has been maintained for 230+ years.</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnSenecaSeq);

// --- Dann site ---
L.circleMarker([42.90, -77.50], {radius: 4, color: HDN2.seneca, fillColor: HDN2.village, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.seneca}">🏠 Dann Site — Seneca Village</h3>
    <p><b>Location:</b> Ontario/Livingston County area</p>
    <p>Major Seneca village in the pre-contact/early contact period.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnSenecaSeq);

// --- Factory Hollow ---
L.circleMarker([42.85, -77.38], {radius: 3, color: HDN2.seneca, fillColor: HDN2.village, fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.seneca}">🏠 Factory Hollow — Seneca Village</h3>
    <p><b>Location:</b> Ontario County area</p>
    <p>Seneca village in the Finger Lakes cluster.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnSenecaSeq);

// --- Gathtsegwarohare / Cuneseraga (destroyed 1779) ---
L.circleMarker([42.73, -77.70], {radius: 4, color: HDN2.seneca, fillColor: HDN2.lost, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.seneca}">🔥 Gathtsegwarohare (Cuneseraga) — Destroyed 1779</h3>
    <p><b>Location:</b> Genesee River area, Livingston County</p>
    <p>Sullivan campaign. Near the Boyd-Parker capture site.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnSenecaSeq);

// --- Rochester Junction ---
L.circleMarker([42.88, -77.43], {radius: 3, color: HDN2.seneca, fillColor: HDN2.village, fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.seneca}">🏠 Rochester Junction — Seneca Site</h3>
    <p><b>Location:</b> Ontario County area</p>
    <p>Shell thunderbird pendant found here — connecting to Haudenosaunee cosmology of He-no, the Thunder Spirit.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnSenecaSeq);

// --- Boughton Hill / Fort Hill (Ganondagan granary) ---
L.circleMarker([42.86, -77.42], {radius: 5, color: HDN2.seneca, fillColor: HDN2.sacred, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.seneca}">🏠 Boughton Hill / Fort Hill — Ganondagan Granary</h3>
    <p><b>Location:</b> Victor, Ontario County</p>
    <p><b>Size:</b> 33 acres (NRHP listed)</p>
    <p><b>Description:</b> Fortified granary complex associated with the great Seneca town of Ganondagan. The centralized food storage here was a key target of Denonville's 1687 French attack — destroying it threatened not just Ganondagan but the entire Seneca winter food supply.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnSenecaSeq);


// ==================== ONONDAGA SITES ====================

// --- Pompey Center cluster ---
L.circleMarker([42.90, -75.98], {radius: 4, color: HDN2.onondaga, fillColor: HDN2.village, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.onondaga}">🏠 Pompey Center — Onondaga Village Cluster</h3>
    <p><b>Location:</b> Pompey Hills, south of Syracuse</p>
    <p>Cluster of Onondaga villages. The Onondaga preferred hilltop positions with views of approaching visitors — fitting for the nation hosting all Confederacy meetings.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnOnondagaSites);

// --- Indian Hill ---
L.circleMarker([42.88, -76.05], {radius: 3, color: HDN2.onondaga, fillColor: HDN2.village, fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.onondaga}">🏠 Indian Hill — Onondaga Village</h3>
    <p><b>Location:</b> Onondaga County</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnOnondagaSites);

// --- Indian Fort / Nichols Pond ---
L.circleMarker([42.85, -76.00], {radius: 4, color: HDN2.onondaga, fillColor: HDN2.village, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.onondaga}">🏠 Indian Fort (Nichols Pond) — Fortified Onondaga</h3>
    <p><b>Location:</b> Onondaga County</p>
    <p>Fortified Onondaga village. Palisaded settlements were common during the pre-Confederacy warfare period.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnOnondagaSites);

// --- Onondaga Nation Territory (modern) ---
L.circleMarker([42.95, -76.10], {radius: 6, color: HDN2.onondaga, fillColor: HDN2.onondaga, fillOpacity: 0.3, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${HDN2.onondaga}">🔥 Onondaga Nation Territory (Present Day)</h3>
    <p><b>Location:</b> 7,300 acres south of Syracuse</p>
    <p><b>Sovereignty:</b> The <i>only</i> Haudenosaunee territory that has never been a reservation — continuous sovereignty maintained. Grand Council of the Haudenosaunee Confederacy still meets here.</p>
    <p><b>Governance:</b> The Tadodaho (currently Sid Hill) presides. Clan Mothers select chiefs. Consensus-based decision-making as prescribed by the Great Law of Peace for 900+ years.</p>
    <p><b>Longhouse Religion:</b> Still practiced. Passports issued. The Confederacy considers itself a sovereign nation under international law.</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnOnondagaSites);


// ==================== CAYUGA SITES ====================

// --- Cayuga Castle / Goiogouen ---
L.circleMarker([42.75, -76.65], {radius: 4, color: HDN2.cayuga, fillColor: HDN2.lost, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.cayuga}">🔥 Cayuga Castle (Goiogouen) — Destroyed 1779</h3>
    <p><b>Location:</b> East side of Cayuga Lake, Cayuga County</p>
    <p>Principal Cayuga town. Major political center. Destroyed by Sullivan-Clinton, September 1779.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnCayugaSites);

// --- Peachtown ---
L.circleMarker([42.70, -76.60], {radius: 3, color: HDN2.cayuga, fillColor: HDN2.lost, fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.cayuga}">🔥 Peachtown — Cayuga, Destroyed 1779</h3>
    <p><b>Location:</b> Near Cayuga Lake</p>
    <p>Named for extensive peach orchards — evidence of sophisticated Cayuga horticulture. Destroyed by Sullivan's troops.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnCayugaSites);

// --- Great Gully ---
L.circleMarker([42.80, -76.62], {radius: 3, color: HDN2.cayuga, fillColor: HDN2.village, fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.cayuga}">🏠 Great Gully — Cayuga Village</h3>
    <p><b>Location:</b> West side of Cayuga Lake</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnCayugaSites);


// ==================== ONEIDA SITES ====================

// --- Oneida Castle ---
L.circleMarker([43.08, -75.63], {radius: 5, color: HDN2.oneida, fillColor: HDN2.village, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${HDN2.oneida}">🏠 Oneida Castle — Principal Oneida Village</h3>
    <p><b>Location:</b> Near Oneida Lake, Madison/Oneida County</p>
    <p><b>Name Origin:</b> The distinctive large standing stone near the village — the "stone that stands" from which the Oneida take their name (Onyota'a:ka, "People of the Standing Stone").</p>
    <p><b>Revolutionary War:</b> The Oneida, uniquely among the Six Nations, supported the Americans. Despite this sacrifice, New York systematically stripped their land in the decades that followed.</p>
    <p><b>Legacy:</b> Today the Oneida Indian Nation has reacquired ~18,000 acres in their homeland and operate significant enterprises, but this represents a fraction of their original 6-million-acre territory.</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnOneidaSites);

// --- Primes Hill ---
L.circleMarker([43.05, -75.55], {radius: 3, color: HDN2.oneida, fillColor: HDN2.village, fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.oneida}">🏠 Primes Hill — Early Oneida</h3>
    <p><b>Location:</b> Madison County area</p>
    <p>Early Oneida village site.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnOneidaSites);

// --- Dungham site ---
L.circleMarker([43.07, -75.58], {radius: 3, color: HDN2.oneida, fillColor: HDN2.village, fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.oneida}">🏠 Dungham — Oneida Village</h3>
    <p><b>Location:</b> Madison County</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnOneidaSites);

// --- Cameron site ---
L.circleMarker([43.06, -75.60], {radius: 3, color: HDN2.oneida, fillColor: HDN2.village, fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.oneida}">🏠 Cameron — Oneida Village</h3>
    <p><b>Location:</b> Madison County</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnOneidaSites);


// ==================== NORTHERN NY IROQUOIANS (NNYI) — MYSTERY PEOPLE ====================

// --- Durfee site ---
L.circleMarker([43.96, -75.90], {radius: 5, color: HDN2.nnyi, fillColor: HDN2.nnyi, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:500px;overflow-y:auto;">
    <h3 style="color:${HDN2.nnyi}">❓ Durfee Site — Northern NY Iroquoians</h3>
    <p><b>Date:</b> ~AD 1300s–1500s</p>
    <p><b>Location:</b> Jefferson County, NY</p>
    <p><b>Excavation:</b> M.R. Harrington for Harvard's Peabody Museum, 1906</p>
    <p><b>Culture:</b> Northern New York Iroquoians (NNYI) — a <i>separate Iroquoian population</i> NOT part of the Five Nations</p>
    <p><b>THE MYSTERY:</b> These people occupied the transitional zone between the Haudenosaunee homeland and the St. Lawrence Iroquoians to the north. They served as <b>liaison brokers</b> between the two groups without formal affiliation with either.</p>
    <p><b>Disappearance:</b> They dispersed sometime in the first half of the 16th century. No other Iroquoian group replaced them as intermediaries. When this diplomatic bridge collapsed, it may have contributed to the escalation of violence that eventually destroyed the St. Lawrence Iroquoian populations.</p>
    <p><b>Identity:</b> Unknown. Possibly ancestral to one of the Five Nations, possibly absorbed into the Haudenosaunee or Wendat, or possibly a separate people entirely. Pottery shows Owasco-like characteristics.</p>
    <p><b>Sources:</b> Abel 2020; Hart et al. 2019; SAA Archaeological Record 2020</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.hdnNNYI);

// --- Heath site ---
L.circleMarker([43.92, -75.85], {radius: 4, color: HDN2.nnyi, fillColor: HDN2.nnyi, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.nnyi}">❓ Heath Site — NNYI</h3>
    <p><b>Date:</b> ~AD 1300s–1500s</p>
    <p><b>Location:</b> Jefferson County</p>
    <p>Northern NY Iroquoian — mystery population.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnNNYI);

// --- Putnam-Gardner ---
L.circleMarker([43.98, -75.82], {radius: 4, color: HDN2.nnyi, fillColor: HDN2.nnyi, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.nnyi}">❓ Putnam-Gardner — NNYI</h3>
    <p><b>Date:</b> ~AD 1400s</p>
    <p><b>Location:</b> Northeast of Watertown, Jefferson County</p>
    <p><b>Excavation:</b> Alanson Skinner for Heye Foundation, 1916</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnNNYI);

// --- Black Lake Cluster ---
L.circleMarker([44.28, -75.70], {radius: 5, color: HDN2.nnyi, fillColor: HDN2.nnyi, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${HDN2.nnyi}">❓ Black Lake Cluster — NNYI</h3>
    <p><b>Date:</b> Appeared ~AD 1400, occupied into 1500s</p>
    <p><b>Location:</b> Black Lake area, St. Lawrence County</p>
    <p><b>Description:</b> Iroquoian sites at a physiographic divide — the transitional zone between St. Lawrence lowlands and Adirondack uplands. This position was key to their role as intermediaries.</p>
    <p><b>Significance:</b> When the NNYI dispersed, the diplomatic bridge between Haudenosaunee and St. Lawrence Iroquoians collapsed — potentially contributing to the violence that destroyed the St. Lawrence populations.</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnNNYI);

// --- Nohle, Morse, Durham, Talcott Falls ---
L.circleMarker([43.95, -75.95], {radius: 3, color: HDN2.nnyi, fillColor: HDN2.nnyi, fillOpacity: 0.6, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.nnyi}">❓ Nohle, Morse, Durham, Talcott Falls — NNYI</h3>
    <p><b>Location:</b> Jefferson County area</p>
    <p>Sites tested by M.R. Harrington during his 1906 Peabody Museum expedition. Part of the enigmatic Northern NY Iroquoian complex.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnNNYI);


// ==================== ST. LAWRENCE IROQUOIANS — THE VANISHED PEOPLE ====================

// --- Hochelaga (Montreal) ---
L.circleMarker([45.50, -73.57], {radius: 7, color: HDN2.stlaw, fillColor: HDN2.stlaw, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:550px;overflow-y:auto;">
    <h3 style="color:${HDN2.stlaw}">👻 Hochelaga — The Vanished City</h3>
    <p><b>Date:</b> Visited by Jacques Cartier, October 2, 1535</p>
    <p><b>Location:</b> Present-day Montreal, Quebec (foot of Mount Royal)</p>
    <p><b>Culture:</b> St. Lawrence Iroquoians — a distinct people, NOT Mohawk or Huron</p>
    <p><b>Description:</b> Fortified town of ~50 longhouses, triple palisades, ~1,500+ people. Extensive cornfields. Spoke an Iroquoian language related to but distinct from the Five Nations.</p>
    <p><b>THE MYSTERY:</b> When Champlain arrived in 1603–1608, the <b>entire St. Lawrence Iroquoian population had vanished</b>. Every settlement from Quebec City to eastern Lake Ontario — abandoned. No one knows exactly what happened.</p>
    <p><b>Theories:</b></p>
    <p>• <b>Warfare:</b> Destroyed by Haudenosaunee, Wendat, or both</p>
    <p>• <b>Epidemic:</b> European diseases from Cartier's visits (1534–42)</p>
    <p>• <b>Absorption:</b> Survivors adopted into other nations</p>
    <p>• <b>Most likely:</b> Disease weakened them, warfare finished them, survivors absorbed</p>
    <p><b>Linguistic Evidence:</b> St. Lawrence Iroquoian words survive in Haudenosaunee and Wendat vocabularies. "Canada" itself may be St. Lawrence Iroquoian for "village."</p>
    <p><b>Archaeological Evidence:</b> St. Lawrence Iroquoian pottery styles appear in later Haudenosaunee sites, suggesting captives or refugees were incorporated.</p>
    <p><b>Connection to NNYI:</b> The disappearance of the Northern NY Iroquoian intermediaries may have removed the diplomatic buffer that protected the St. Lawrence populations.</p>
    <p><b>Sources:</b> Cartier 1535; Trigger 1985; Snow 1994; Engelbrecht 2003; Steckley 2007</p>
  </div>`, {maxWidth: 420}).addTo(L_groups.hdnStLawrence);

// --- Stadacona (Quebec City area) ---
L.circleMarker([46.82, -71.22], {radius: 5, color: HDN2.stlaw, fillColor: HDN2.stlaw, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${HDN2.stlaw}">👻 Stadacona — St. Lawrence Iroquoian Town</h3>
    <p><b>Date:</b> Contacted by Cartier 1534–1535</p>
    <p><b>Location:</b> Present-day Quebec City area</p>
    <p><b>Chief:</b> Donnacona — kidnapped by Cartier in 1536, taken to France, died there</p>
    <p><b>Description:</b> Major settlement near the narrows of the St. Lawrence. Donnacona told Cartier about the "Kingdom of the Saguenay" further inland.</p>
    <p><b>Status:</b> Vanished by ~1580. No trace when Champlain arrived.</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnStLawrence);

// --- St. Lawrence corridor (vanished zone) ---
L.polyline([
  [46.82, -71.22], [46.40, -72.10], [45.90, -72.80],
  [45.50, -73.57], [44.70, -75.30], [44.20, -76.00]
], {color: HDN2.stlaw, weight: 2, opacity: 0.4, dashArray: '8,8'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.stlaw}">👻 The Vanished Corridor</h3>
    <p>Approximate extent of St. Lawrence Iroquoian settlement. From Stadacona (Quebec City) to eastern Lake Ontario — all abandoned between ~1535 and ~1580.</p>
    <p>An entire civilization erased from one of North America's most important waterways in less than two generations.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnStLawrence);


// ==================== COMPLETE WATERWAY NETWORK ====================

// --- Susquehanna River (northern branch) ---
L.polyline([
  [42.70, -74.92], [42.55, -75.00], [42.40, -75.20],
  [42.25, -75.55], [42.10, -75.90], [42.00, -76.10]
], {color: HDN2.water, weight: 2.5, opacity: 0.6, dashArray: '5,5'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.water}">💧 Susquehanna River (Northern Branch)</h3>
    <p><b>Headwaters:</b> Otsego Lake, Cooperstown, NY</p>
    <p><b>Length:</b> 444 miles — longest East Coast river draining to the Atlantic</p>
    <p><b>Haudenosaunee Use:</b> Major trade and war corridor connecting the Confederacy to the Chesapeake Bay. Sullivan's army followed it upstream in 1779.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnWaterways);

// --- Oswego River ---
L.polyline([
  [43.10, -76.18], [43.20, -76.30], [43.30, -76.40],
  [43.46, -76.51]
], {color: HDN2.water, weight: 2.5, opacity: 0.6, dashArray: '5,5'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.water}">💧 Oswego River</h3>
    <p><b>Route:</b> Connects Oneida Lake to Lake Ontario</p>
    <p><b>Major trade route.</b> Part of the water highway linking Atlantic drainage to the Great Lakes via the Oneida Carry → Oneida Lake → Oswego → Lake Ontario path.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnWaterways);

// --- Oneida Lake ---
L.circle([43.20, -75.90], {radius: 12000,
  color: HDN2.water, weight: 1.5, fillColor: HDN2.water, fillOpacity: 0.15, dashArray: '3,3'
}).bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.water}">💧 Oneida Lake</h3>
    <p><b>Size:</b> ~21 miles long, 5 miles wide</p>
    <p><b>Control:</b> Oneida Nation — critical link in the water highway. Connects (via the Oneida Carry/Mohawk River) to the Atlantic, and (via Oswego River) to Lake Ontario and the Great Lakes.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnWaterways);

// --- Seneca River ---
L.polyline([
  [42.90, -76.90], [42.95, -76.70], [43.00, -76.50],
  [43.05, -76.30], [43.10, -76.18]
], {color: HDN2.water, weight: 2, opacity: 0.5, dashArray: '5,5'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.water}">💧 Seneca River</h3>
    <p>Connects Finger Lakes to Oswego River / Lake Ontario. Delegations traveled this route to reach Onondaga for Confederacy meetings.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnWaterways);

// --- Canandaigua Lake ---
L.circle([42.77, -77.28], {radius: 10000,
  color: HDN2.water, weight: 1.5, fillColor: HDN2.water, fillOpacity: 0.15, dashArray: '3,3'
}).bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.water}">💧 Canandaigua Lake</h3>
    <p><b>Name:</b> "The chosen spot"</p>
    <p>Seneca territory. Site of the 1794 Treaty of Canandaigua — still legally binding. Referenced in current disputes.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnWaterways);

// --- Skaneateles Lake ---
L.circle([42.87, -76.38], {radius: 8000,
  color: HDN2.water, weight: 1.5, fillColor: HDN2.water, fillOpacity: 0.15, dashArray: '3,3'
}).bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.water}">💧 Skaneateles Lake</h3>
    <p>Between Onondaga and Cayuga territory. One of the smaller Finger Lakes.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnWaterways);

// --- Owasco Lake ---
L.circle([42.80, -76.45], {radius: 8000,
  color: HDN2.water, weight: 1.5, fillColor: HDN2.water, fillOpacity: 0.15, dashArray: '3,3'
}).bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.water}">💧 Owasco Lake</h3>
    <p>Named for the Owasco culture — proto-Iroquoian people (~AD 1000–1300) who preceded the Haudenosaunee in this region. The name connects modern geography to deep prehistory.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnWaterways);

// --- Keuka Lake ---
L.circle([42.55, -77.10], {radius: 10000,
  color: HDN2.water, weight: 1.5, fillColor: HDN2.water, fillOpacity: 0.15, dashArray: '3,3'
}).bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.water}">💧 Keuka Lake</h3>
    <p>Seneca territory. Distinctive Y-shape. "Canoe landing" in Iroquoian.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnWaterways);

// --- Niagara Falls ---
L.circleMarker([43.08, -79.07], {radius: 6, color: HDN2.sacred, fillColor: HDN2.sacred, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${HDN2.sacred}">⚡ Niagara Falls — Home of He-no, the Thunder Spirit</h3>
    <p><b>Location:</b> Border of NY and Ontario, Niagara River</p>
    <p><b>Haudenosaunee Name:</b> "Thundering Waters"</p>
    <p><b>Cosmology:</b> In Haudenosaunee tradition, Niagara Falls is the home of <b>He-no</b>, the Thunder Spirit — the Iroquois equivalent of the Thunderbird found across Indigenous North American traditions. He-no lives behind the falls and protects the people from the Great Serpent who lurks in the water.</p>
    <p><b>The Maid of the Mist:</b> The Seneca tell of a woman who went over the falls in a canoe and was rescued by He-no, who revealed the serpent's weakness and saved her people.</p>
    <p><b>Territory:</b> Western boundary of Seneca territory — the Keepers of the Western Door guarded the approach to the falls and the passage to the Great Lakes beyond.</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.hdnWaterways);

// --- Allegany River ---
L.polyline([
  [42.08, -78.73], [42.00, -78.85], [41.90, -79.00]
], {color: HDN2.water, weight: 2, opacity: 0.5, dashArray: '5,5'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.water}">💧 Allegany River</h3>
    <p>Southwestern Seneca territory. Site of the Allegany Reservation — one of two remaining Seneca Nation territories in New York.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnWaterways);

// --- Tonawanda Creek ---
L.polyline([
  [43.02, -78.86], [43.05, -78.60], [43.07, -78.40]
], {color: HDN2.water, weight: 2, opacity: 0.5, dashArray: '5,5'})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.water}">💧 Tonawanda Creek</h3>
    <p>Territory of the Tonawanda Band of Seneca — the most traditional of the three Seneca governing bodies. The Tonawanda Reservation (7,549 acres) is home to the Tonawanda Longhouse.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnWaterways);


// ==================== SULLIVAN-CLINTON CAMPAIGN PATH (1779) ====================

// --- Newtown Battlefield (the only pitched battle) ---
L.circleMarker([42.04, -76.78], {radius: 6, color: HDN2.sullivan, fillColor: HDN2.sullivan, fillOpacity: 0.8, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:450px;overflow-y:auto;">
    <h3 style="color:${HDN2.sullivan}">⚔️ Battle of Newtown — August 29, 1779</h3>
    <p><b>Location:</b> Near present-day Elmira, Chemung County</p>
    <p><b>Significance:</b> The <b>only pitched battle</b> of the entire Sullivan-Clinton Campaign. Haudenosaunee and British forces (under Joseph Brant and Mohawk/Seneca warriors with Loyalist Rangers) attempted to stop Sullivan's 4,000-man army here.</p>
    <p><b>Outcome:</b> After a flanking maneuver, the Haudenosaunee-British force was routed. This opened the path for the systematic destruction of 40+ towns that followed.</p>
    <p><b>Aftermath:</b> Having failed to stop the army in open battle, Haudenosaunee warriors shifted to guerrilla tactics, but the sheer size of Sullivan's force made ambush difficult.</p>
    <p><b>Today:</b> Newtown Battlefield State Park. The site is preserved.</p>
    <p><b>Sources:</b> NPS; Sullivan-Clinton Campaign Historical Record</p>
  </div>`, {maxWidth: 380}).addTo(L_groups.hdnSullivanPath);

// --- Catherine's Town (destroyed) ---
L.circleMarker([42.38, -76.87], {radius: 4, color: HDN2.sullivan, fillColor: HDN2.lost, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.sullivan}">🔥 Catherine's Town — Destroyed 1779</h3>
    <p><b>Location:</b> Near present-day Montour Falls, Schuyler County (head of Seneca Lake)</p>
    <p><b>Named for:</b> Queen Catherine Montour, a mixed-race (French-Haudenosaunee) woman of great political influence among the Seneca</p>
    <p><b>Destroyed:</b> Sullivan's troops burned the town en route to the Finger Lakes heartland.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnSullivanPath);

// --- Cherry Valley (1778 — precipitating event) ---
L.circleMarker([42.73, -74.73], {radius: 4, color: HDN2.sullivan, fillColor: '#FFD700', fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:${HDN2.sullivan}">⚔️ Cherry Valley — November 11, 1778</h3>
    <p><b>Location:</b> Cherry Valley, Otsego County</p>
    <p><b>Significance:</b> One of the key events that precipitated the Sullivan-Clinton Campaign. Mohawk and Seneca warriors under Joseph Brant and Loyalist Rangers attacked this frontier settlement, killing soldiers and civilians.</p>
    <p><b>Context:</b> Cherry Valley and the Wyoming Valley Massacre (July 1778 in Pennsylvania) convinced George Washington that the Haudenosaunee pro-British alliance required a massive military response — leading directly to his orders for "total destruction."</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnSullivanPath);

// --- Sullivan's March Route (approximate) ---
L.polyline([
  [41.07, -75.00], // Easton PA (starting point)
  [41.45, -75.50], [41.80, -76.20],
  [42.04, -76.78], // Newtown battlefield
  [42.38, -76.87], // Catherine's Town
  [42.55, -76.88], // Seneca Lake west
  [42.75, -76.65], // Cayuga Castle
  [42.80, -77.28], // Canandaigua area
  [42.80, -77.81]  // Little Beard's Town / Geneseo
], {color: HDN2.sullivan, weight: 3, opacity: 0.5, dashArray: '10,6'})
  .bindPopup(`<div class="popup-content" style="max-height:450px;overflow-y:auto;">
    <h3 style="color:${HDN2.sullivan}">🔥 Sullivan's March Route — Summer/Fall 1779</h3>
    <p><b>Commander:</b> Major General John Sullivan, on orders from George Washington</p>
    <p><b>Force:</b> ~4,000 Continental troops</p>
    <p><b>Route:</b> From Easton, PA north through the Susquehanna Valley, then west through the Finger Lakes to the Genesee River</p>
    <p><b>Destruction:</b> 40+ towns destroyed, 160,000+ bushels of corn burned, orchards of hundreds of trees girdled (killed by cutting bark rings)</p>
    <p><b>Washington's Orders:</b> "The immediate objects are the total destruction and devastation of their settlements... it will be essential to ruin their crops now in the ground and prevent their planting more."</p>
    <p><b>Seneca Response:</b> They named Washington <b>"Town Destroyer" (Hanödaga:nyas)</b> — a name passed to every subsequent US president in Haudenosaunee tradition.</p>
    <p><b>Winter 1779-80:</b> Thousands of refugees crowded around Fort Niagara in one of the coldest winters on record. Mass starvation and disease. The Confederacy never recovered its pre-war territory.</p>
  </div>`, {maxWidth: 400}).addTo(L_groups.hdnSullivanPath);

// --- Clinton's Route (northern prong) ---
L.polyline([
  [42.70, -74.92], // Otsego Lake / Cooperstown
  [42.55, -75.00], [42.40, -75.30],
  [42.25, -75.55], [42.10, -76.20],
  [42.04, -76.78]  // Joins Sullivan at Newtown
], {color: '#AA0000', weight: 2.5, opacity: 0.4, dashArray: '10,6'})
  .bindPopup(`<div class="popup-content" style="max-height:400px;overflow-y:auto;">
    <h3 style="color:#AA0000">🔥 Clinton's Route — Northern Prong</h3>
    <p><b>Commander:</b> Brigadier General James Clinton</p>
    <p><b>Starting Point:</b> Otsego Lake (Cooperstown) — Clinton dammed the lake's outlet, then breached the dam to create a flood that carried his 200+ boats down the Susquehanna to the rendezvous with Sullivan at Tioga.</p>
    <p><b>Innovation:</b> This dam-and-flood technique was an unprecedented military engineering feat — using the waterway itself as a weapon of logistics.</p>
    <p><b>Route:</b> Down the Susquehanna from Otsego Lake to Tioga (present-day Athens, PA), then joined Sullivan's main force.</p>
  </div>`, {maxWidth: 360}).addTo(L_groups.hdnSullivanPath);

// --- Oil Spring Reservation (condemned) ---
L.circleMarker([42.23, -78.27], {radius: 4, color: HDN2.sullivan, fillColor: '#FF8C00', fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.sullivan}">⛏️ Oil Spring Reservation — Condemned</h3>
    <p><b>Location:</b> Cuba, Allegany County</p>
    <p><b>History:</b> Small Seneca reservation centered on a sacred oil spring — petroleum seeping naturally from the ground, used for medicine and ceremony.</p>
    <p><b>Loss:</b> Condemned by New York State 1858–1871 to build Cuba Lake reservoir for the Genesee Valley Canal. One of the most clear-cut examples of infrastructure destroying Indigenous sacred sites — the same pattern seen at Onondaga Lake.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnSullivanPath);


// ==================== PRE-IROQUOIAN PALEOINDIAN ADDITIONS ====================

// --- Arc site (Lake Ontario) ---
L.circleMarker([43.35, -77.80], {radius: 4, color: HDN2.paleo, fillColor: HDN2.paleo, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.paleo}">🦴 Arc Site — Possible Clovis</h3>
    <p><b>Date:</b> ~12,000+ BP</p>
    <p><b>Location:</b> South shore of Lake Ontario</p>
    <p><b>Significance:</b> Fluted preforms with possible Clovis-era overshot flake scars. Evidence of the earliest human presence along the Ontario lakeshore after glacial retreat.</p>
  </div>`, {maxWidth: 320}).addTo(L_groups.hdnArchSites);

// --- Kings Road site ---
L.circleMarker([42.28, -74.00], {radius: 3, color: HDN2.paleo, fillColor: HDN2.paleo, fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.paleo}">🦴 Kings Road — Paleoindian</h3>
    <p><b>Date:</b> ~11,000+ BP</p><p><b>Location:</b> Greene County, NY</p>
    <p>Paleoindian site in the Hudson Valley corridor.</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnArchSites);

// --- Swale site ---
L.circleMarker([42.30, -74.05], {radius: 3, color: HDN2.paleo, fillColor: HDN2.paleo, fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.paleo}">🦴 Swale Site — Paleoindian</h3>
    <p><b>Date:</b> ~11,000+ BP</p><p><b>Location:</b> Greene County, NY</p>
  </div>`, {maxWidth: 280}).addTo(L_groups.hdnArchSites);

// --- Thurman bifaces ---
L.circleMarker([43.50, -73.83], {radius: 3, color: HDN2.paleo, fillColor: HDN2.paleo, fillOpacity: 0.7, weight: 1.5})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.paleo}">🦴 Thurman Bifaces — Late Paleoindian</h3>
    <p><b>Date:</b> ~10,000 BP</p>
    <p><b>Location:</b> Warren County, NY (Adirondack foothills)</p>
    <p>Three exceptional Late Paleoindian bifaces found during 1930s road construction. Evidence of early human penetration into the Adirondack region.</p>
  </div>`, {maxWidth: 300}).addTo(L_groups.hdnArchSites);

// --- Eaton site (multi-period) ---
L.circleMarker([42.78, -78.70], {radius: 4, color: HDN2.paleo, fillColor: HDN2.paleo, fillOpacity: 0.7, weight: 2})
  .bindPopup(`<div class="popup-content">
    <h3 style="color:${HDN2.paleo}">🦴 Eaton Site — 12,000 Years of Occupation</h3>
    <p><b>Location:</b> Erie County, NY</p>
    <p><b>Significance:</b> Late precontact Erie village with Late Paleoindian projectile points mixed into the deposits — proving the same location was used across 12,000+ years, from the first post-glacial hunters to the historic-period Erie people.</p>
    <p><b>Note:</b> The Erie (Erielhonan) were an Iroquoian people destroyed by the Haudenosaunee during the Beaver Wars (~1654). Their territory became the westernmost extension of Seneca control.</p>
  </div>`, {maxWidth: 340}).addTo(L_groups.hdnArchSites);
