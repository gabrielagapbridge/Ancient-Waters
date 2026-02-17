// ============================================================
// MOHICAN (STOCKBRIDGE-MUNSEE) — Archaeological Sites & Territory
// Hudson Valley, Berkshires, Connecticut River Valley
// ============================================================
// People: Mohican / Mahican (self: Muhheaconneok — "People of
//         the Waters that Are Never Still")
// Language: Mohican (Eastern Algonquian)
// Territory: Hudson Valley (Kingston–Lake Champlain), west to
//            Schoharie Valley, east into MA/CT/VT
// Time depth: 10,000–12,000 years in Hudson Valley
// Sources: Lavin et al. 1996; Huey 1996; Parker 1924;
//   Stockbridge-Munsee THPO (Bonney Hartley); NPS; NYSM;
//   Upper Housatonic Valley NHA; Morton Archaeological Research
// ============================================================

// Color constants per build guide Section 6
const MAS = {
  mohican:  '#8B4513',   // saddle brown — Mohican territory
  ancient:  '#FFD700',   // gold — deep time (5000+ BP)
  arch:     '#DAA520',   // goldenrod — archaeological (general)
  petro:    '#FF8C00',   // dark orange — rock art (unused here but standard)
  water:    '#1E90FF',   // dodger blue — waterways
  sacred:   '#DC143C',   // crimson — sacred/ceremonial
  village:  '#DEB887',   // burlywood — villages/habitation
  lost:     '#B22222',   // firebrick — lost/destroyed
  historic: '#8A2BE2',   // blue-violet — contact period
  modern:   '#2E8B57',   // sea green — preservation/modern
  urban:    '#FF6F61',   // coral — urban archaeology
  cultural: '#C19A6B'    // sand/camel — cultural regions
};

// ==================== MOHICAN TERRITORY POLYGON ====================
// Per build guide Section 7 — interactive with collapsible popup

L.polygon([
  // Kingston north to Lake Champlain, east into MA/CT/VT
  [41.93, -74.10], [42.05, -74.20], [42.30, -74.35], [42.60, -74.30],
  [42.85, -74.20], [43.10, -74.00], [43.40, -73.80], [43.80, -73.60],
  [44.20, -73.40], [44.50, -73.30], [44.50, -73.10], [44.20, -72.90],
  [43.80, -72.50], [43.40, -72.30], [43.10, -72.20], [42.85, -72.30],
  [42.60, -72.40], [42.30, -72.50], [42.05, -72.80], [41.93, -73.00],
  [41.80, -73.20], [41.70, -73.40], [41.60, -73.50], [41.50, -73.60],
  [41.50, -73.80], [41.60, -73.95], [41.75, -74.05], [41.93, -74.10]
], {
  color: MAS.mohican, fillColor: MAS.mohican,
  fillOpacity: 0.07, weight: 2, dashArray: '8,6',
  pane: 'mohicanBackgroundPane', interactive: true
}).bindPopup(`<div class="popup-content" style="min-width:280px;max-width:350px;">
  <h3 style="color:${MAS.mohican};margin:0 0 4px 0;font-size:16px;">Mohican (Stockbridge-Munsee)</h3>
  <div style="color:#aaa;font-size:11px;margin-bottom:8px;">
    Muhheaconneok · Eastern Algonquian · ~1,500 enrolled
  </div>
  <div style="font-size:12px;line-height:1.6;">
    <p style="margin:4px 0;"><b>Territory:</b> Hudson Valley (Kingston–Lake Champlain), Berkshires, Housatonic Valley, east to CT River</p>
    <p style="margin:4px 0;"><b>Language:</b> Mohican (Eastern Algonquian)</p>
    <p style="margin:4px 0;"><b>Reservation:</b> Stockbridge-Munsee Community, Shawano County, Wisconsin</p>
  </div>

  <details style="margin-top:8px;">
    <summary style="cursor:pointer;color:#C19A6B;font-weight:bold;font-size:12px;">▸ Culture & Identity</summary>
    <div style="font-size:11px;padding:6px 0 0 8px;line-height:1.5;">
      <b>Self-name:</b> Muhheaconneok — "People of the Waters that Are Never Still." Named after the Muhheacannituck (Hudson River) which flows with the tide in both directions. In 1604, Sachem John Waunaucon Quinney recounted the nation numbered approximately 25,000 people. Subsistence centered on the Hudson's annual flooding (rich agricultural soils), spring fish runs (salmon, shad, sturgeon, herring), shellfish, wetland gathering, and controlled burning of forests near waterways to improve habitats. Seasonal rounds moved between river floodplain camps (spring/summer) and inland hunting grounds (fall/winter). Place names survive: Housatonic, Schaghticoke, Pontoosuc, Taconic.
    </div>
  </details>

  <details style="margin-top:4px;">
    <summary style="cursor:pointer;color:#C19A6B;font-weight:bold;font-size:12px;">▸ History / Wars / Treaties</summary>
    <div style="font-size:11px;padding:6px 0 0 8px;line-height:1.5;">
      <b>1609:</b> Henry Hudson received at Schodack Island. <b>1630s–1660s:</b> Beaver Wars devastated population; alliance with Dutch then English. <b>1736:</b> Stockbridge Mission established — Mohicans invited English missionaries, built meetinghouse as dual-governance space. <b>1775–1783:</b> Mohicans fought in Revolutionary War; Washington hosted ox roast to thank Mohican veterans. <b>1783–1830s:</b> Progressive dispossession from Stockbridge. <b>1830s–1856:</b> Forced removal westward — Oneida territory → Fox River, WI → Stockbridge, WI. Today: Stockbridge-Munsee Community maintains THPO with NE extension office at Williams College, Williamstown MA.
    </div>
  </details>

  <details style="margin-top:4px;">
    <summary style="cursor:pointer;color:#C19A6B;font-weight:bold;font-size:12px;">▸ Archaeological Evidence</summary>
    <div style="font-size:11px;padding:6px 0 0 8px;line-height:1.5;">
      12,000+ years in the Hudson Valley. Key sites: Papscanee Island/Goldkrest Site (Late Woodland village, corn production ~AD 1000); Schodack Island ("Place of the Fire" — principal chief's residence); Flint Mine Hill (largest flint quarry in NY, 10,000+ years of use); Stockbridge 1739 Meetinghouse (two Mohican homesites beneath); 1783 Ox Roast / King Solomon homesite (cultural layers 3 ft deep, predating 1700s); Stockbridge Bog (7,000+ years habitation, controlled burns); Columbia County McVaugh collection (9,000 years of projectile points).
    </div>
  </details>

  <details style="margin-top:4px;">
    <summary style="cursor:pointer;color:#C19A6B;font-weight:bold;font-size:12px;">▸ Sources</summary>
    <div style="font-size:10px;padding:6px 0 0 8px;color:#888;line-height:1.4;">
      Lavin et al. 1996, "The Goldkrest Site" (J. Middle Atlantic Archaeology 12); Huey 1996 (J. Middle Atlantic Archaeology 12); Parker 1924 (Flint Mine Hill excavation); Wheeler 2013 "To Live Upon Hope" (Cornell); Stockbridge-Munsee THPO (Bonney Hartley); NPS; NYSM; Upper Housatonic Valley NHA
    </div>
  </details>
</div>`, {maxWidth: 350}).addTo(L_groups.mohicanTerritory);

// --- Territory label ---
L.marker([42.50, -73.40], {
  icon: L.divIcon({
    className: '', iconSize: [200, 30], iconAnchor: [100, 15],
    html: '<div style="font:bold 13px Georgia,serif;color:#8B4513;text-shadow:1px 1px 3px #000,0 0 8px #000;letter-spacing:3px;text-align:center;opacity:0.8;">M O H I C A N</div>'
  }),
  interactive: false
}).addTo(L_groups.mohicanTerritory);

// ==================== ARCHAEOLOGICAL SITES ====================
// Per build guide Section 8 — proper icons, sizes, colors

// --- 1. Papscanee Island / Goldkrest Site (Nanosech) ---
// Major/significant site — radius 8
L.circleMarker([42.53, -73.73], {
  radius: 8, color: MAS.arch, fillColor: MAS.arch, fillOpacity: 0.7, weight: 2.5
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.arch}">⬢ Papscanee Island / Goldkrest Site (Nanosech)</h3>
  <p><b>Location:</b> Hudson River, south of Albany, Rensselaer County, NY (Towns of East Greenbush & Schodack)</p>
  <p><b>Date:</b> ~AD 1000 — Contact period (Late Woodland). Multi-component — earlier occupations present.</p>
  <p><b>Culture:</b> Mohican (Muhheaconneok)</p>
  <p><b>Indigenous name:</b> Nanosech — may refer to warm-season fishing at this location</p>
  <p><b>Discovery & excavation:</b> Excavated by archaeologist Lucianne Lavin. Goldkrest Site revealed forest clearing through controlled burning dating to ~AD 1000.</p>
  <p><b>Key findings:</b> Radiocarbon-dated burned soil patches with charcoal indicate the transition from seasonal use to permanent agricultural settlement. By the 1400s, a small Mohican settlement was established with ample evidence of corn production. The site shows the island was used as the Hudson River floodplain stabilized and became suitable for gardening.</p>
  <p><b>Significance:</b> Considered perhaps the best-preserved known Late Woodland Native village site in New York State. Nominated for the National Register of Historic Places.</p>
  <p><b>Current status:</b> Threatened by installation of the National Grid E-37 Pipeline.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> Lavin et al. 1996, "The Goldkrest Site" (J. Middle Atlantic Archaeology 12:113-129); Morton Archaeological Research Services; Curtin Archaeological Consulting
  </p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanArchSites);

// --- 2. Schodack Island ---
L.circleMarker([42.50, -73.75], {
  radius: 8, color: MAS.village, fillColor: MAS.village, fillOpacity: 0.7, weight: 2.5
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.village}">● Schodack Island — "Place of the Fire"</h3>
  <p><b>Location:</b> East side of Hudson River below Albany, NY</p>
  <p><b>Date:</b> Multi-period — primary use during Late Woodland and Contact periods</p>
  <p><b>Culture:</b> Mohican — major center of political and cultural life</p>
  <p><b>Indigenous name:</b> Schodack — Mohican for "Place of the Fire" (suffix "-ik" means "place of")</p>
  <p><b>Significance:</b> Residence of the principal Mohican chief. Part of a cluster of islands that served as a hub for the Mohican confederacy. Possibly where Henry Hudson was first formally received in 1609.</p>
  <p><b>Current status:</b> Schodack Island State Park — publicly accessible.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> Huey 1996, "A Short History of Cuyper Island" (J. Middle Atlantic Archaeology 12:131-147); N'DahAhki/Mohicans
  </p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanArchSites);

// --- 3. Flint Mine Hill — ICONIC SITE (★) ---
L.circleMarker([42.35, -73.80], {
  radius: 10, color: MAS.ancient, fillColor: MAS.ancient, fillOpacity: 0.9, weight: 3
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.ancient}">★ Flint Mine Hill Archaeological District</h3>
  <p><b>Location:</b> Town of Coxsackie, Greene County, NY</p>
  <p><b>Date:</b> 10,000+ years of continuous use — earliest Paleoindians through Mohican era</p>
  <p><b>Culture:</b> Multi-cultural — used by successive peoples across all cultural periods</p>
  <p><b>Discovery & excavation:</b> First excavated in 1924 by Dr. Arthur Parker, renowned NY archaeologist. Thousands of flint points catalogued.</p>
  <p><b>Key findings:</b> Largest and most important flint quarry site in all of New York State. One of the few major sources of flint (Deepkill and Normanskill Shale and Chert) in the Northeast, located deep in Mohican territory. Points found at various levels of refinement demonstrate technological development over thousands of years. At one Middle Archaic site (6,000–8,000 BP), three adjacent artifact depositions may indicate three households or band groups.</p>
  <p><b>Significance:</b> 10,000+ years of continuous use — one of the longest-utilized resource sites in the eastern US. A shared resource in the heart of Mohican territory.</p>
  <p><b>Current status:</b> <span style="color:${MAS.modern};font-weight:bold;">PRESERVED:</span> Purchased and donated by Flint Mine Solar, LLC to The Archaeological Conservancy in 2021 for ongoing preservation.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> Parker 1924 (excavation records); The Archaeological Conservancy; Clio historical marker database
  </p>
</div>`, {maxWidth: 420}).addTo(L_groups.mohicanArchSites);

// --- 4. Stockbridge 1739 Meetinghouse Site ---
L.circleMarker([42.2840, -73.3200], {
  radius: 7, color: MAS.historic, fillColor: MAS.historic, fillOpacity: 0.7, weight: 2
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.historic}">◈ Stockbridge 1739 Meetinghouse Site (Wnahktukook)</h3>
  <p><b>Location:</b> Stockbridge, MA — in the area known as Wnahktukook, "the Great Meadow"</p>
  <p><b>Date:</b> Meetinghouse 1736–1739; archaeological layers well before European contact</p>
  <p><b>Culture:</b> Mohican — dual governance space between Mohican sachems and English settlers</p>
  <p><b>Discovery & excavation:</b> Active excavation summer 2021, led by Tribal Historic Preservation Manager Bonney Hartley (Stockbridge-Munsee). Uses innovative non-ground-disturbing technology including ground-penetrating radar and magnetometer.</p>
  <p><b>Key findings:</b> Dig found <b>two Mohican homesites in two distinct layers beneath the meetinghouse</b>, dating well before European contact. The project aims to uncover the original building footprint and develop interpretive materials. Political petitions from tribal leaders here have been digitized by Harvard University.</p>
  <p><b>Significance:</b> Built through Mohican initiative — not imposed by colonists. A site of agency where Mohican leaders negotiated their future. The pre-contact layers prove long Mohican presence before the mission period.</p>
  <p><b>Current status:</b> Active archaeological research by THPO. Funded by $40,000 NPS Under-Represented Communities grant (Historic Preservation Fund).</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> NPS "Innovative Archaeology Project Focuses on Mohican Tribal Heritage"; New England Public Media 2021; BTW Berkshires; Stockbridge-Munsee THPO
  </p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanHistoric);

// --- 5. 1783 Ox Roast / King Solomon Homesite ---
L.circleMarker([42.2870, -73.3150], {
  radius: 7, color: MAS.historic, fillColor: MAS.historic, fillOpacity: 0.7, weight: 2
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.historic}">◈ 1783 Ox Roast / King Solomon Homesite</h3>
  <p><b>Location:</b> Along the Housatonic River, Stockbridge, MA</p>
  <p><b>Date:</b> 1783 feast event; cultural layers predating 1700s, three feet below surface</p>
  <p><b>Culture:</b> Mohican — long-term residential presence</p>
  <p><b>Discovery & excavation:</b> August 2021, led by Bonney Hartley with Morton Archaeological Research Services. Funded by Town of Stockbridge through the Massachusetts Community Preservation Act.</p>
  <p><b>Key findings:</b> Site extends far deeper than the 1783 event — two distinct habitation layers from different time periods discovered, one below the other. Artifacts predate the 1700s. Evidence of long-term Mohican residential presence, contradicting narratives that minimized their settlement here.</p>
  <p><b>Significance:</b> In 1783, George Washington sponsored a feast here to thank Mohican veterans for service in the Revolutionary War. Washington wrote that the Mohicans "fought and bled by our side." But the archaeology proves people lived here long before that — the feast was just one moment in a much longer story.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> BTW Berkshires; Housatonic Heritage / Native American Heritage Trail; Morton Archaeological Research Services
  </p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanHistoric);

// --- 6. Stockbridge Bog Area Sites ---
L.circleMarker([42.3100, -73.3150], {
  radius: 6, color: MAS.ancient, fillColor: MAS.ancient, fillOpacity: 0.7, weight: 2
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.ancient}">⬢ Stockbridge Bog Area Sites</h3>
  <p><b>Location:</b> Route 7, north of Stockbridge, MA</p>
  <p><b>Date:</b> 7,000+ years of habitation at bog edges</p>
  <p><b>Culture:</b> Mohican ancestors — multi-period</p>
  <p><b>Key findings:</b> One site used for large-scale skinning and butchering, 3,000–4,000 years ago. Another habitation site dates to ~2,000 years ago. Evidence of deliberate wildfires set to improve habitat for hunted animals.</p>
  <p><b>Environment:</b> The bog originally contained clear water surrounded by thick forest with abundant plant and animal life. Seasonal use likely in fall/winter for gathering wild plant foods (hickory nuts) and hunting.</p>
  <p><b>Significance:</b> 7,000+ years of documented use demonstrates deep-time continuity. Controlled burning practices reveal sophisticated landscape management thousands of years before European contact.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> Housatonic Heritage / Native American Heritage Trail
  </p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanArchSites);

// --- 7. Shekomeko Mission Site ---
L.circleMarker([41.9800, -73.6600], {
  radius: 6, color: MAS.historic, fillColor: MAS.historic, fillOpacity: 0.7, weight: 2
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.historic}">◈ Shekomeko — Mohican Village & Moravian Mission</h3>
  <p><b>Location:</b> Present-day Pine Plains, Dutchess County, NY</p>
  <p><b>Date:</b> Mohican village (pre-contact); Moravian mission 1740–1746</p>
  <p><b>Culture:</b> Mohican — major village site</p>
  <p><b>Key findings:</b> The Moravian Church established a mission here in 1740 under Christian Henry Rauch — one of the first Christian congregations of Native Americans in what is now the United States.</p>
  <p><b>Significance:</b> The Mohican leader Tschoop, baptized here in 1742, was advisor to Sachem Shabash and is believed to be the model for <b>Chingachgook</b> in James Fenimore Cooper's <i>The Last of the Mohicans</i>. The mission was abandoned 1745–1746 due to settler hostility; families dispersed to Bethlehem PA, Stockbridge MA, and other missions.</p>
  <p><b>Current status:</b> Monument at Pine Plains marks the site.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> Little Nine Partners Historical Society; Wheeler 2013 "To Live Upon Hope" (Cornell); Dally-Starna & Starna 2009
  </p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanHistoric);

// --- 8. Bethlehem, NY Archaeological Sites ---
L.circleMarker([42.59, -73.82], {
  radius: 6, color: MAS.arch, fillColor: MAS.arch, fillOpacity: 0.7, weight: 2
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.arch}">⬢ Bethlehem, NY — Mohican Habitation Sites</h3>
  <p><b>Location:</b> Town of Bethlehem, Albany County, NY (approximate — exact locations confidential)</p>
  <p><b>Date:</b> ~1600 BCE onwards — "River Indians" artifacts</p>
  <p><b>Culture:</b> Mohican</p>
  <p><b>Discovery & excavation:</b> 1980s — Floyd Brewer and the Bethlehem Archaeology Group unearthed Mohican artifacts at multiple sites along the Hudson in what is now suburban Bethlehem.</p>
  <p><b>Key findings:</b> Evidence of habitation from ~1600 BCE, including unusually shaped projectile points and tools for grinding acorns and seeds.</p>
  <p><b>Current status:</b> The Stockbridge-Munsee Community has purchased some of these ancestral lands where human remains were found. <b>Exact locations kept confidential at the tribe's request to prevent disturbance.</b></p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> The Altamont Enterprise 2018; Stockbridge-Munsee Community
  </p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanArchSites);

// --- 9. Wechquadnach Village Site ---
L.circleMarker([41.9100, -73.4300], {
  radius: 5, color: MAS.historic, fillColor: MAS.historic, fillOpacity: 0.7, weight: 1.5
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.historic}">◈ Wechquadnach — Mohican Village & Moravian Mission</h3>
  <p><b>Location:</b> East shore of Indian Pond, Sharon, CT</p>
  <p><b>Date:</b> Mohican village (pre-contact); Moravian mission (1740s)</p>
  <p><b>Culture:</b> Mohican — part of interconnected network across Housatonic Valley</p>
  <p><b>Significance:</b> Connected to the broader network of Mohican settlements including Shekomeko and Schaghticoke. A Moravian monument was raised in Sharon in 1859 honoring missionaries who worked among the Mohican community here.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> Native American Heritage Trail; Bidwell House Museum
  </p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanHistoric);

// --- 10. Schaghticoke — Three Locations ---
// 10a. Connecticut Schaghticoke (oldest reservation in the US)
L.circleMarker([41.6900, -73.4800], {
  radius: 7, color: MAS.historic, fillColor: MAS.historic, fillOpacity: 0.7, weight: 2
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.historic}">◈ Schaghticoke — CT (Oldest Reservation in the US)</h3>
  <p><b>Location:</b> Along the Housatonic River, Kent, CT</p>
  <p><b>Indigenous name:</b> Schaghticoke — from Algonkian "pishgoch-ti-goch," meaning "confluence of two rivers"</p>
  <p><b>Date:</b> Reservation established 1736 — oldest in the United States</p>
  <p><b>Culture:</b> Multi-tribal community including Mohican people — center of refuge, resistance, and alliance-building for displaced Native peoples.</p>
  <p><b>Significance:</b> Important political center. Relationships between Mohican sachems and Schaghticoke communities were central to regional diplomacy.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> Schaghticoke First Nations; Deerfield History Museum
  </p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanHistoric);

// 10b. New York Schaghticoke (Hoosic-Hudson confluence)
L.circleMarker([42.8050, -73.5800], {
  radius: 6, color: MAS.village, fillColor: MAS.village, fillOpacity: 0.7, weight: 2
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.village}">● Schaghticoke — NY (Hoosic-Hudson Confluence)</h3>
  <p><b>Location:</b> Confluence of the Hoosic River and Hudson River, Rensselaer County, NY</p>
  <p><b>Culture:</b> Originally an exclusively Mohican site — named for the "confluence of two rivers"</p>
  <p><b>Significance:</b> Strategic location where two major river systems meet — controlling this confluence meant controlling trade and movement through the valley.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> Schaghticoke First Nations; NYSM
  </p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanArchSites);

// 10c. Massachusetts Schaghticoke (Sheffield)
L.circleMarker([42.1100, -73.3550], {
  radius: 5, color: MAS.village, fillColor: MAS.village, fillOpacity: 0.7, weight: 1.5
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.village}">● Schaghticoke — MA (Sheffield)</h3>
  <p><b>Location:</b> Present-day Sheffield, MA</p>
  <p><b>Culture:</b> Mohican community, later absorbed into Stockbridge</p>
  <p><b>Significance:</b> Part of the network of Mohican settlement nodes across the Housatonic Valley.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> Deerfield History Museum; Schaghticoke First Nations
  </p>
</div>`, {maxWidth: 360}).addTo(L_groups.mohicanArchSites);

// --- 11. Magdalene Island ---
L.circleMarker([41.8000, -73.9400], {
  radius: 5, color: MAS.arch, fillColor: MAS.arch, fillOpacity: 0.7, weight: 1.5
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.arch}">⬢ Magdalene Island</h3>
  <p><b>Location:</b> Middle reach of the Hudson River, Dutchess County, NY</p>
  <p><b>Date:</b> Multi-period — ancient indigenous occupation</p>
  <p><b>Key findings:</b> Long known to archaeologists as a location visited by ancient indigenous peoples. Stone tools and other artifacts curated at the New York State Museum.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> New York State Museum, Archaeology Department
  </p>
</div>`, {maxWidth: 360}).addTo(L_groups.mohicanArchSites);

// --- 12. Columbia County Sites (McVaugh Collection) ---
L.circleMarker([42.4200, -73.7000], {
  radius: 6, color: MAS.ancient, fillColor: MAS.ancient, fillOpacity: 0.7, weight: 2
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.ancient}">⬢ Columbia County Sites (McVaugh Collection)</h3>
  <p><b>Location:</b> North of Kinderhook, Columbia County, NY</p>
  <p><b>Date:</b> 10,000–1,000 years BP — 9,000 years of indigenous history</p>
  <p><b>Culture:</b> Multi-period — records continuous habitation east of the Hudson</p>
  <p><b>Discovery:</b> ~50 stone tools (mostly projectile points) collected by Roger McVaugh in the 1920s while plowing farmland. Donated to the New York State Museum.</p>
  <p><b>Key findings:</b> Points range from notched and stemmed forms (10,000–7,500 BP) to triangular forms (4,000–1,000 BP). One of few archaeological collections from east of the Hudson in the NYSM.</p>
  <p><b>Significance:</b> 9,000-year continuous sequence of toolmaking — evidence of human presence through virtually every cultural period in the Northeast.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> New York State Museum, "McVaugh Donation: Insights into Hudson Valley Archaeology"
  </p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanArchSites);

// --- Additional: Indian Ladder Trail ---
L.circleMarker([42.6600, -74.0200], {
  radius: 5, color: MAS.arch, fillColor: MAS.arch, fillOpacity: 0.7, weight: 1.5
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.arch}">⬢ Indian Ladder Trail</h3>
  <p><b>Location:</b> Thacher State Park, Albany County, NY</p>
  <p><b>Date:</b> Multi-period — ancient trail route (cliff face fossils date back 300 million years)</p>
  <p><b>Description:</b> Indigenous peoples used the cliff face route along the Helderberg Escarpment. The trail provided a critical passage through otherwise impassable terrain.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> Scenic Hudson; NYS Parks
  </p>
</div>`, {maxWidth: 360}).addTo(L_groups.mohicanArchSites);

// --- Additional: Monsey Glen ---
L.circleMarker([41.1150, -74.0700], {
  radius: 5, color: MAS.arch, fillColor: MAS.arch, fillOpacity: 0.7, weight: 1.5
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.arch}">⬢ Monsey Glen</h3>
  <p><b>Location:</b> Rockland County, NY</p>
  <p><b>Date:</b> Two occupation periods — one dating back 3,000 years</p>
  <p><b>Culture:</b> Algonquin peoples (Mohican-adjacent territory)</p>
  <p><b>Key findings:</b> Shallow caves with artifacts from two eras of Algonquin occupation. The older occupation dates to approximately 3,000 years ago.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> Scenic Hudson
  </p>
</div>`, {maxWidth: 360}).addTo(L_groups.mohicanArchSites);

// ==================== MODERN / PRESERVATION SITES ====================
// Per build guide — sea green markers

// --- Stockbridge-Munsee THPO NE Extension Office ---
L.circleMarker([42.7130, -73.2050], {
  radius: 6, color: MAS.modern, fillColor: MAS.modern, fillOpacity: 0.8, weight: 2
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.modern}">◉ Stockbridge-Munsee THPO — NE Extension Office</h3>
  <p><b>Location:</b> Williams College, Williamstown, MA</p>
  <p><b>Description:</b> The Stockbridge-Munsee Community's Tribal Historic Preservation Office maintains an extension office in the Northeast, partnering with Williams College OIDEI. Focused on protecting cultural heritage sites and conducting archaeological research across the ancestral homeland.</p>
  <p><b>Led by:</b> Bonney Hartley, Tribal Historic Preservation Manager</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> Stockbridge-Munsee Community (mohican.com); Williams College OIDEI
  </p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanModern);

// --- Upper Housatonic Valley National Heritage Area ---
L.circleMarker([42.2000, -73.3500], {
  radius: 5, color: MAS.modern, fillColor: MAS.modern, fillOpacity: 0.7, weight: 1.5
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.modern}">◉ Upper Housatonic Valley National Heritage Area</h3>
  <p><b>Location:</b> Berkshire County, MA & Litchfield County, CT</p>
  <p><b>Description:</b> Manages the Native American Heritage Trail — walking tours and interpretive sites documenting Mohican history across the Housatonic Valley. A key organization connecting living Mohican heritage to the landscape.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> housatonicheritage.org
  </p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanModern);

// --- Bidwell House Museum ---
L.circleMarker([42.2100, -73.2200], {
  radius: 4, color: MAS.modern, fillColor: MAS.modern, fillOpacity: 0.7, weight: 1.5
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.modern}">◉ Bidwell House Museum</h3>
  <p><b>Location:</b> Monterey, MA</p>
  <p><b>Description:</b> Museum focused on Mohican history in the Berkshires. Hosts lectures and programming on Mohican archaeological research and heritage.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> bidwellhousemuseum.org
  </p>
</div>`, {maxWidth: 360}).addTo(L_groups.mohicanModern);

// --- The Archaeological Conservancy (Flint Mine Hill) ---
L.circleMarker([42.3480, -73.8020], {
  radius: 4, color: MAS.modern, fillColor: MAS.modern, fillOpacity: 0.7, weight: 1.5
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.modern}">◉ Flint Mine Hill — Archaeological Conservancy Preserve</h3>
  <p><b>Location:</b> Coxsackie, Greene County, NY</p>
  <p><b>Description:</b> The property was purchased and donated by Flint Mine Solar, LLC to The Archaeological Conservancy in 2021. One of the most important flint quarry sites in the Northeast, now permanently preserved from development.</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> The Archaeological Conservancy; Clio
  </p>
</div>`, {maxWidth: 380}).addTo(L_groups.mohicanModern);

// ==================== CULTURAL REGION OVERLAY ====================
// Flint Mine Hill shared resource zone — per build guide Section 12

L.polygon([
  [42.50, -74.00], [42.50, -73.60], [42.20, -73.60], [42.20, -74.00]
], {
  color: MAS.cultural, fillColor: MAS.cultural,
  fillOpacity: 0.03, weight: 1.5, dashArray: '3,5',
  interactive: true
}).bindPopup(`<div class="popup-content">
  <h3 style="color:${MAS.cultural}">◎ Flint Mine Resource Zone</h3>
  <p><b>Type:</b> Resource-sharing area</p>
  <p><b>Peoples involved:</b> Mohican and multiple neighboring nations over 10,000+ years</p>
  <p><b>Time period:</b> ~10,000 BP — Contact period</p>
  <p><b>Description:</b> The Deepkill and Normanskill chert outcrops in Greene County provided one of the few major sources of flint in the entire Northeast. Points made from this chert are found across a wide area, indicating this was a shared resource that attracted peoples from multiple traditions over thousands of years.</p>
  <p><b>Key sites:</b> Flint Mine Hill Archaeological District</p>
  <p style="font-size:10px;color:#888;margin-top:8px;border-top:1px solid rgba(193,154,107,0.2);padding-top:6px;">
    <b>Sources:</b> Parker 1924; The Archaeological Conservancy; NYSM
  </p>
</div>`, {maxWidth: 400}).addTo(L_groups.mohicanTerritory);

// ==================== TRIBAL ENCYCLOPEDIA ENTRY ====================

tribalData.push({
  name: "Mohican (Stockbridge-Munsee)",
  altNames: "Mahican, Muhheaconneok, Stockbridge Indians",
  language: "Mohican (Eastern Algonquian)",
  dialect: "Mohican — closely related to Munsee Lenape and other Eastern Algonquian languages",
  timeStart: -10000, timeEnd: 2026,
  occupation: "~12,000 BP — present (10,000+ years documented in Hudson Valley; living nation today)",
  territory: "Hudson Valley from Kingston to Lake Champlain; west to Schoharie Valley; east into Massachusetts (Housatonic Valley), Connecticut, and Vermont. Core territory centered on the Muhheacannituck (Hudson River).",
  population: "~25,000 at Contact (per Sachem John Waunaucon Quinney); ~1,500 enrolled today in Stockbridge-Munsee Community",
  centerLat: 42.50, centerLng: -73.40, zoom: 8,
  color: "#8B4513",
  description: "The Mohican — self-named Muhheaconneok, 'People of the Waters that Are Never Still' — are an Algonquian nation whose identity is inseparable from the Hudson River (Muhheacannituck), which flows with the tide in both directions. Archaeological evidence of Mohican ancestors stretches back 10,000–12,000 years. Their descendants, the Stockbridge-Munsee Community, maintain an active Tribal Historic Preservation Office with an NE extension office at Williams College focused on protecting cultural heritage across the ancestral homeland. Key sites include Papscanee Island (best-preserved Late Woodland village in NY), Flint Mine Hill (10,000+ years of use — largest flint quarry in NY), and the Stockbridge meetinghouse excavation revealing Mohican homesites beneath the 1739 structure.",
  villages: ["Schodack Island (Place of the Fire — principal chief)", "Papscanee Island / Nanosech (Goldkrest Site)", "Shekomeko (Pine Plains, NY)", "Wechquadnach (Sharon, CT)", "Schaghticoke (Kent, CT / Sheffield, MA / Rensselaer Co, NY)", "Wnahktukook / Stockbridge (The Great Meadow)", "Pontoosuck (Pittsfield area)"],
  keyDates: "1609: Hudson received at Schodack Island • 1736: Stockbridge Mission — Mohicans invited missionaries • 1740: Shekomeko mission (Tschoop = model for Chingachgook) • 1775-1783: Mohicans serve in Revolution • 1783: Washington's ox roast for Mohican veterans • 1830s-1856: Forced removal to Wisconsin • 2018: Kwuniikwat Island named by tribal council • 2021: THPO excavations at Stockbridge meetinghouse & Ox Roast site",
  sources: "Lavin et al. 1996 (J. Middle Atlantic Archaeology 12); Huey 1996; Parker 1924; Wheeler 2013; Stockbridge-Munsee THPO; NPS; NYSM; Upper Housatonic Valley NHA"
});

// ==================== LANGUAGE ENCYCLOPEDIA ENTRY ====================

langEncyclopediaData.push({
  name: 'Mohican (Eastern Algonquian)',
  type: 'language',
  color: '#8B4513',
  summary: 'Mohican is an Eastern Algonquian language closely related to Munsee Lenape. The self-name Muhheaconneok ("People of the Waters that Are Never Still") reflects the deep connection between language, identity, and the tidal Hudson River. The language is currently being revitalized by the Stockbridge-Munsee Community.',
  detail: 'Eastern Algonquian languages formed a continuum along the Atlantic seaboard. Mohican was intelligible with neighboring languages like Munsee and related Lenape dialects. Place names preserving Mohican/Algonquian words survive today: Housatonic (Usi-a-di-en-uk, "beyond the mountain place"), Schaghticoke ("confluence of two rivers"), Pontoosuc ("field/haven for winter deer"), Taconic (from Algonquian roots). The suffix "-ik" or "-ook" commonly meant "place of" or "people of." Language revitalization efforts are underway through the Stockbridge-Munsee Community\'s cultural programs.',
  families: 'Eastern Algonquian branch of Algic. Related to: Munsee Lenape, Unami Lenape, Narragansett, Wampanoag, Abenaki, and other Eastern Algonquian languages.',
  bayAreaConnection: '',
  src: 'Goddard 1978 (Handbook of North American Indians Vol. 15); Wheeler 2013; Stockbridge-Munsee Community'
});
