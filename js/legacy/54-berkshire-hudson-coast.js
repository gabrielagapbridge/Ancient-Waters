// ============================================================
// MUHHEKUNNEUW TO MISSITUK — Berkshires, Hudson Valley &
// Connecticut Coast Indigenous Archaeological Landscape
// Mohican, Lenape/Munsee, Wappinger, Pequot, Mohegan
// ============================================================
// SOURCES:
//   Bonney Hartley / Nathan Allison — Stockbridge-Munsee THPO
//   Eric S. Johnson, "Discovering the Ancient Past at Kampoosa Bog" (1996)
//   Housatonic Heritage — Native American Heritage Trail
//   Open Space Institute — Papscanee Island "Long Journey Home"
//   Scenic Hudson — "Five Indigenous History Sites" (2025)
//   Edward J. Lenik, "Making Pictures in Stone" (2009)
//   Mohegan Tribe — Fort Shantok history
//   Denison Pequotsepos Nature Center — Gungywamp
//   Louis Brennan — Croton Point shell midden excavations
//   Daria Merwin — underwater archaeology, Croton Bay
//   NY State Museum — McVaugh Collection
//   Paul R. Huey, "Mahicans, Dutch & Schodack Islands" (1993)
//
// CULTURAL CONTEXT:
//   This layer extends the Ancient Waters map from the CT River
//   westward into the Berkshire Hills (Mohican heartland), down
//   the Hudson corridor (Muhhekunnewtuk, "river that flows both
//   ways"), and south along the CT coast to Long Island Sound
//   (Pequot and Mohegan territory). Together these landscapes
//   form the homeland of the Muhhekunneuw — "people of the
//   waters that are never still."
//
// SITES NOT DUPLICATED (already in 38-mohican-hudson.js):
//   Mohican glacial lakes, Champlain Sea, Hudson dams, wetlands
//   etc. from the existing Mohican/Hudson layer
// ============================================================

// Background pane
if (!map.getPane('berkPane')) {
  map.createPane('berkPane');
  map.getPane('berkPane').style.zIndex = 375;
}

const BHC = {
  arch:     '#C17817',   // amber — archaeological sites
  village:  '#2D6A4F',   // forest green — villages & settlements
  sacred:   '#8B4513',   // saddle brown — sacred / ceremonial
  rockart:  '#E6A817',   // deep gold — rock art / petroglyphs
  returned: '#1B7340',   // bright green — returned lands
  massacre: '#8B0000',   // dark red — massacre / conflict sites
  trail:    '#4682B4',   // steel blue — trails & paths
  museum:   '#708090',   // slate gray — museums & interpretation
};

// ── Marker factories ──────────────────────────────────────────
function bhcCircle(lat, lng, color, radius) {
  return L.circleMarker([lat, lng], {
    radius: radius || 7, fillColor: color, color: '#222',
    weight: 1.5, opacity: 0.9, fillOpacity: 0.85, pane: 'berkPane'
  });
}

function bhcDiamond(lat, lng, color) {
  return L.marker([lat, lng], { pane: 'berkPane',
    icon: L.divIcon({ className: '', iconSize: [16, 16], iconAnchor: [8, 8],
      html: `<svg width="16" height="16"><polygon points="8,1 15,8 8,15 1,8" fill="${color}" stroke="#222" stroke-width="1.5"/></svg>` }) });
}

function bhcTriangle(lat, lng, color) {
  return L.marker([lat, lng], { pane: 'berkPane',
    icon: L.divIcon({ className: '', iconSize: [16, 16], iconAnchor: [8, 14],
      html: `<svg width="16" height="16"><polygon points="8,1 15,15 1,15" fill="${color}" stroke="#222" stroke-width="1.5"/></svg>` }) });
}

function bhcSquare(lat, lng, color) {
  return L.marker([lat, lng], { pane: 'berkPane',
    icon: L.divIcon({ className: '', iconSize: [14, 14], iconAnchor: [7, 7],
      html: `<svg width="14" height="14"><rect x="1" y="1" width="12" height="12" fill="${color}" stroke="#222" stroke-width="1.5"/></svg>` }) });
}

function bhcStar(lat, lng, color) {
  return L.marker([lat, lng], { pane: 'berkPane',
    icon: L.divIcon({ className: '', iconSize: [18, 18], iconAnchor: [9, 9],
      html: `<svg width="18" height="18"><polygon points="9,1 11.5,6.5 17,7 13,11 14,17 9,14 4,17 5,11 1,7 6.5,6.5" fill="${color}" stroke="#222" stroke-width="1"/></svg>` }) });
}

// ── Popup builder ─────────────────────────────────────────────
function bhcPopup(title, fields) {
  let html = `<div style="font-family:Georgia,serif;max-width:320px;">
    <div style="font-size:15px;font-weight:bold;color:#2D4A3E;border-bottom:2px solid #4A7C59;padding-bottom:4px;margin-bottom:6px;">${title}</div>`;
  fields.forEach(([label, value]) => {
    if (value) html += `<div style="margin-bottom:4px;"><span style="font-weight:bold;color:#4A7C59;font-size:11px;">${label}:</span> <span style="font-size:12px;color:#333;">${value}</span></div>`;
  });
  html += '</div>';
  return html;
}

// ====================================================================
// BERKSHIRE ARCHAEOLOGICAL SITES
// ====================================================================

// -- Kampoosa Bog --
bhcDiamond(42.305, -73.300, BHC.arch).bindPopup(bhcPopup('Kampoosa Bog', [
  ['People', 'Mohican ancestors'],
  ['Period', '7,000+ years continuous use'],
  ['Designation', 'Area of Critical Environmental Concern (1995)'],
  ['Excavation', 'UMass 1993 (Eric Johnson) — Tennessee Gas Pipeline salvage dig'],
  ['Findings', '95% of tools from Hudson Valley chert (not local quartz) proving extensive trade networks. Buried cache of 9 unsharpened blades = planned seasonal returns. Large-scale butchering site 3,000-4,000 BP. Fire management evidence in sediment cores.'],
  ['Name', 'Kampoosa = "dangerous place" in Mohican — treacherous quaking sphagnum at water\'s edge'],
  ['Source', 'Johnson 1996; Housatonic Heritage Trail']
])).addTo(L_groups.bhcArch);

// -- Stockbridge Meetinghouse Dig --
bhcDiamond(42.284, -73.320, BHC.arch).bindPopup(bhcPopup('Stockbridge Meetinghouse Dig', [
  ['People', 'Stockbridge-Munsee Band of Mohican Indians'],
  ['Period', 'Pre-contact living floors (6,000-8,000 years); 1739 meetinghouse layer above'],
  ['Excavation', 'July 2021 — Bonney Hartley, Nathan Allison, Ann Morton'],
  ['Funding', 'NPS Underrepresented Community Grant + Town of Stockbridge matching grant'],
  ['Findings', 'Pre-contact hearths (burnt earth & charcoal), quartz thinning flake dating 1600-8000 BP, builder\'s trench for 1739 meetinghouse. "Our ancestors showed us what they wanted us to find."'],
  ['Significance', 'Meetinghouse = where Mohican sachems and English colonists governed Indiantown together. Center of politics and religion as colonial influence grew.'],
  ['Source', 'NEPM 2021; Berkshire Eagle']
])).addTo(L_groups.bhcArch);

// -- Stockbridge Ox Roast Site --
bhcDiamond(42.280, -73.318, BHC.arch).bindPopup(bhcPopup('Ox Roast Site / Pre-Contact Homesites', [
  ['People', 'Mohican'],
  ['Period', 'Pre-contact (5,000+ years); 1783 George Washington celebration layer'],
  ['Excavation', 'August 2021 — Stockbridge-Munsee THPO team'],
  ['Findings', 'Second pre-contact homesite with living floors beneath 1783 layer. Stone flakes, fire-cracked rock. "Two digs, two for two" — Bonney Hartley'],
  ['Historical Context', '1783: George Washington provided ox roast to thank Mohican veterans of the Revolutionary War. Mohicans fought alongside patriots at Bunker Hill.'],
  ['Source', 'NEPM Aug 2021; BTW Berkshires']
])).addTo(L_groups.bhcArch);

// -- Bidwell House Grounds --
bhcDiamond(42.195, -73.188, BHC.arch).bindPopup(bhcPopup('Bidwell House Museum Grounds', [
  ['People', 'Mohican (potential)'],
  ['Period', 'Unknown — unstudied'],
  ['Status', '192-acre grounds with cellar holes and stone structures that "might be Mohican"'],
  ['Note', 'Museum curator invited UMass archaeologist Eric Johnson to speak about Kampoosa Bog findings. Hope to study Bidwell grounds someday.'],
  ['Source', 'Berkshire Eagle 2013; Bidwell House Museum']
])).addTo(L_groups.bhcArch);

// -- Kinderhook/McVaugh Collection --
bhcDiamond(42.395, -73.700, BHC.arch).bindPopup(bhcPopup('McVaugh Collection Site (Kinderhook)', [
  ['People', 'Mohican'],
  ['Period', '9,000 years of continuous presence'],
  ['Artifacts', '~50 projectile points collected by Roger McVaugh in 1920s while plowing family farm. Percussion-flaked fine-grained stone points spanning 9 millennia.'],
  ['Location', 'Columbia County, east of Hudson River — ancestral Mohican territory'],
  ['Repository', 'New York State Museum (donated by Michael McVaugh)'],
  ['Significance', 'One of few NYSM archaeological collections from east of the Hudson. Documents deep Indigenous presence in Mohican homeland.'],
  ['Source', 'NY State Museum accession documentation']
])).addTo(L_groups.bhcArch);

// -- Claverack Rock Shelter --
bhcDiamond(42.230, -73.730, BHC.arch).bindPopup(bhcPopup('Claverack Rock Shelter', [
  ['People', 'Mohican'],
  ['Period', 'Multi-period occupation'],
  ['Excavation', 'Ken Mynter (vocational archaeologist)'],
  ['Published', 'Results included in Robert Funk\'s "Recent Contributions to Hudson Valley Prehistory"'],
  ['Context', 'Ted Filli continues research on Contact Period Mohican sites along waterways flowing to/from Hudson in Columbia County'],
  ['Source', '10th Annual Algonquian Peoples Seminar, NYS Museum 2010']
])).addTo(L_groups.bhcArch);

// ====================================================================
// VILLAGES & SETTLEMENTS
// ====================================================================

// -- Papscanee Island --
bhcStar(42.575, -73.750, BHC.returned).bindPopup(bhcPopup('Papscanee Island — RETURNED 2021', [
  ['People', 'Stockbridge-Munsee Band of Mohican Indians'],
  ['Period', '12,000 years of continuous use'],
  ['Status', '★ RETURNED TO MOHICANS May 9, 2021 — after 384 years of colonial/American ownership'],
  ['History', 'Named for Sachem Papsickene. April 13, 1637: heirs signed deed to Dutch merchant Kiliaen Van Rensselaer (payment: duffels, axes, knives, wampum). Open Space Institute purchased 1990s to prevent port expansion. Donated to tribe 2021.'],
  ['Significance', '"Perhaps the best preserved known late woodland Native village site in New York." NRHP eligible. Rich marine resources + most productive agricultural fields in Mohican homeland.'],
  ['Quote', '"Our land is intrinsic to who we are, it\'s our identity. The greatest gift is to have our land back." — Bonney Hartley'],
  ['Today', '156 acres, 3 miles trails, conservation easement, open to public. Turtles in ponds (important in Mohican cosmology).'],
  ['Source', 'Open Space Institute; Albany Times Union 5/9/2021']
])).addTo(L_groups.bhcReturned);

// -- Schodack Islands --
bhcCircle(42.510, -73.745, BHC.village, 8).bindPopup(bhcPopup('Schodack Islands — Mohican Capital', [
  ['People', 'Mohican Confederacy'],
  ['Period', 'Pre-contact through 18th century'],
  ['Significance', 'Major Mohican political center — capital of the confederacy. "Moenemin\'s Castle" at Van Schaick Mansion site (confluence of Mohawk & Hudson Rivers).'],
  ['Context', 'Schodack and Papscanee Islands were the two major Mohican village sites in the upper Hudson Valley.'],
  ['Source', 'Paul R. Huey 1993; Shirley W. Dunn']
])).addTo(L_groups.bhcVillages);

// -- Great Barrington --
bhcCircle(42.196, -73.362, BHC.village, 7).bindPopup(bhcPopup('Great Barrington — "Great Wigwam"', [
  ['People', 'Mohican'],
  ['Period', 'Pre-contact through Contact'],
  ['Description', 'One of two Housatonic villages at European contact. Known as the "Great Wigwam" — southern anchor of Mohican territory in the Berkshires.'],
  ['Source', 'Southern Berkshire Chamber of Commerce; Housatonic Heritage']
])).addTo(L_groups.bhcVillages);

// -- Stockbridge Main Street --
bhcCircle(42.284, -73.322, BHC.village, 7).bindPopup(bhcPopup('Stockbridge — Indiantown', [
  ['People', 'Mohican'],
  ['Period', 'Pre-contact through 1780s'],
  ['History', 'Township negotiated 1730: Mohicans secured 6 miles square on ancestral land. Indian Burial Ground with obelisk still visited (feathers, beads left). Konkapot home site. Old Berkshire Path (Route 7) = major Mohican trail.'],
  ['Departure', '1780s: Returning Revolutionary War veterans found land taken. Oneida offered land in western NY. Began "trail of tears" westward to Wisconsin.'],
  ['Source', 'Housatonic Heritage Trail; Bidwell House Museum']
])).addTo(L_groups.bhcVillages);

// -- Williams College / Williamstown THPO --
bhcSquare(42.713, -73.203, BHC.museum).bindPopup(bhcPopup('Stockbridge-Munsee THPO Office', [
  ['People', 'Stockbridge-Munsee Band of Mohican Indians'],
  ['Established', '2020 (moved from Troy, NY)'],
  ['Staff', 'Bonney Hartley (Historic Preservation Manager), Nathan Allison (Historic Preservation Officer)'],
  ['Mission', 'Coordinate archaeological projects, historical preservation, and tribal reconnection to Berkshire homelands from satellite office in Williamstown.'],
  ['Source', 'BTW Berkshires 2021; Williams College collaboration']
])).addTo(L_groups.bhcMuseums);

// ====================================================================
// SACRED / CEREMONIAL SITES
// ====================================================================

// -- Monument Mountain --
bhcTriangle(42.245, -73.330, BHC.sacred).bindPopup(bhcPopup('Monument Mountain — Wa\'thatinik', [
  ['People', 'Mohican'],
  ['Mohican Name', 'Wa\'thatinik = "The Land Beyond the Mountains"'],
  ['Significance', 'Wawanaquasick (offering place) — Mohican practice of leaving stones to commemorate significant events. Remnants of Mohican pathways survive. Tribal members still make pilgrimages.'],
  ['Land Return', 'Tribe working to purchase north face (Fenn Farm, 351 acres, $3M). "We\'re not the Last of the Mohicans."'],
  ['Public Access', '503-acre Trustees of Reservations property. Summit views of Upper Housatonic Valley.'],
  ['Source', 'Housatonic Heritage Trail; Berkshire Eagle']
])).addTo(L_groups.bhcSacred);

// ====================================================================
// HUDSON VALLEY ROCK ART
// ====================================================================

// -- Harriman Bear Petroglyph --
bhcDiamond(41.260, -74.020, BHC.rockart).bindPopup(bhcPopup('Harriman State Park Bear Petroglyph', [
  ['People', 'Lenape / Munsee'],
  ['Period', 'Unknown — bear veneration spans millennia in Northeast'],
  ['Description', 'Black bear looking over its shoulder, incised into boulder along Rocks Trail. "One of the finest examples of Indigenous rock art in the state." 4,300-acre park.'],
  ['Context', 'Northeast Indigenous peoples have revered the bear for millennia. The bear is a central figure in Lenape cosmology and ceremonial life.'],
  ['Source', 'Scenic Hudson 2025']
])).addTo(L_groups.bhcRockArt);

// -- Wilderstein Petroglyph --
bhcDiamond(41.917, -73.912, BHC.rockart).bindPopup(bhcPopup('Wilderstein Petroglyph', [
  ['People', 'Sepasco / Esopus'],
  ['Period', 'Pre-contact'],
  ['Description', 'Figure with headdress believed to represent a shaman. Hard to see on the boulders today. Property named "Wilderstein" (German: "wild man\'s stone") in 1852 because of this carving.'],
  ['Sepasco People', 'Sepasco/Sepascot from sepuus ("little river") — watershed of Landsman Kill in Rhinebeck area.'],
  ['Location', 'Wilderstein Historic Site, 330 Morton Rd, Rhinebeck NY'],
  ['Source', 'Mike Adamovic / Hudson Valley History; Wikipedia']
])).addTo(L_groups.bhcRockArt);

// ====================================================================
// HUDSON VALLEY ARCHAEOLOGICAL SITES
// ====================================================================

// -- Croton Point --
bhcDiamond(41.188, -73.895, BHC.arch).bindPopup(bhcPopup('Croton Point Shell Midden', [
  ['People', 'Kitchawank (Wappinger Confederacy)'],
  ['Period', '7,000+ years — oldest shell midden on North Atlantic coast'],
  ['Description', 'Massive oyster shell refuse heap indicates continuous Indigenous presence. Giant oysters (170mm valves) dated to 5,780 BP during "optimum salinity."'],
  ['Village', 'Fortified village "Navish" on high flat at neck of peninsula — "one of the most ancient and formidable Indian fortresses south of the Hudson Highlands."'],
  ['Name', 'Croton from sachem Kenoten = "wild wind"'],
  ['Underwater', 'Daria Merwin (SUNY/NYSM) found stone tools in submerged riverbed — landscapes inundated ~2,500 years ago by sea level rise. "Archaeology is really good at making the invisible visible."'],
  ['Source', 'Louis Brennan excavations; Westchester County Parks; Croton Chronicle 2023']
])).addTo(L_groups.bhcArch);

// -- Monsey Glen --
bhcDiamond(41.118, -74.073, BHC.arch).bindPopup(bhcPopup('Monsey Glen Rock Shelters', [
  ['People', 'Lenape / Munsee'],
  ['Period', '3,000 years — two distinct occupation periods'],
  ['Description', 'Mini-canyon with steep sandstone walls containing shallow caves carved by stream erosion. Two eras of Algonquin occupation documented.'],
  ['Artifacts', 'Tools and other artifacts from both periods. Viewable at Trailside Museums, Bear Mountain State Park.'],
  ['Location', 'Monsey Glen County Park, Monsey, Rockland County'],
  ['Source', 'Scenic Hudson 2025']
])).addTo(L_groups.bhcArch);

// -- Indian Ladder Trail --
bhcTriangle(42.654, -74.037, BHC.trail).bindPopup(bhcPopup('Indian Ladder Trail', [
  ['People', 'Mohawk (Haudenosaunee)'],
  ['Period', 'Pre-contact through Contact'],
  ['Description', 'Helderberg escarpment west of Albany. Indigenous travelers placed trees against limestone cliff wall and trimmed branches as rungs to ascend the steep cliff. Modern staircase replicates the route.'],
  ['Geology', '300-million-year-old fossils visible in limestone walls'],
  ['Location', 'John Boyd Thacher State Park, near Voorheesville NY'],
  ['Source', 'Scenic Hudson 2025']
])).addTo(L_groups.bhcTrails);

// -- Shongum Path / Split Rock --
bhcTriangle(41.738, -74.193, BHC.trail).bindPopup(bhcPopup('Shongum Path / Split Rock', [
  ['People', 'Lenape'],
  ['Period', 'Pre-contact'],
  ['Description', 'Documented ancient Lenape route across Shawangunk Ridge. 0.8-mile trail follows original path along small stream. "Shawangunk" from Lenape phrase = "in the smoky air."'],
  ['Landmark', 'Split Rock at trail terminus — iconic natural formation'],
  ['Location', 'Mohonk Preserve, near West Trapps parking area, Routes 44/55'],
  ['Source', 'Scenic Hudson 2025']
])).addTo(L_groups.bhcTrails);

// ====================================================================
// CONNECTICUT COAST — PEQUOT & MOHEGAN COUNTRY
// ====================================================================

// -- Fort Shantok --
bhcStar(41.448, -72.100, BHC.returned).bindPopup(bhcPopup('Fort Shantok — Village of Uncas — RETURNED 1995', [
  ['People', 'Mohegan Tribe'],
  ['Period', '1636-1682 (principal settlement); pre-contact layers beneath'],
  ['Status', '★ National Historic Landmark 1993 — RETURNED TO MOHEGAN TRIBE 1995 ($3M)'],
  ['Significance', 'Principal Mohegan settlement under Sachem Uncas. Triangular promontory overlooking Thames River. Intensive wampum manufacturing from quahog clams fueled political rise. Unique Shantok Incised pottery with corn ear and fertility designs.'],
  ['Archaeology', 'NYU excavations 1960s-70s (Dr. Bert Salwen). One of few places where Native American ceramics survived southern New England\'s acidic soil.'],
  ['Today', '160 acres. Burial ground with 100+ identified graves. Annual Tribal Homecoming, Cultural Week, Wigwam Festival. Free and open to public.'],
  ['Address', '75 Gallivan Ln, Uncasville CT'],
  ['Source', 'Mohegan Tribe; Wikipedia; CTMQ']
])).addTo(L_groups.bhcReturned);

// -- Gungywamp --
bhcDiamond(41.363, -72.020, BHC.arch).bindPopup(bhcPopup('Gungywamp Archaeological Preserve', [
  ['People', 'Indigenous (specific people unknown) + colonial layers'],
  ['Period', '4,000+ years of human presence'],
  ['Status', 'Connecticut State Archaeological Preserve (2023); State Register of Historic Places'],
  ['Features', 'Stone circles, beehive chambers, eagle petroglyph, equinox-aligned "calendar chamber" — sunlight illuminates interior only at equinoxes. Double stone circle of 21 quarried slabs. Lithic pounding tool dated to 1500+ BCE.'],
  ['Debate', 'Stones not dressed with metal tools (suggests pre-colonial). State Archaeologist: "root cellars." Others: astronomical/ceremonial Indigenous site. Not a typical Euro-American colonial landscape.'],
  ['Access', '270 acres. Tours via Denison Pequotsepos Nature Center (especially at equinox).'],
  ['Source', 'Atlas Obscura; Legends of America; DPNC 2023']
])).addTo(L_groups.bhcArch);

// -- Mystic Fort (Massacre Site) --
bhcCircle(41.356, -71.968, BHC.massacre, 9).bindPopup(bhcPopup('Mystic Fort Massacre Site (1637)', [
  ['People', 'Pequot'],
  ['Date', 'May 26, 1637'],
  ['Event', 'English forces (Mason & Underhill) + Mohegan (Uncas) + Narragansett attacked Pequot fort at Mystic (Missituk). Fort set ablaze. 400-700 Pequot killed — mostly women, children, elderly.'],
  ['Aftermath', 'Treaty of Hartford (1638): survivors enslaved, distributed to allied tribes, sent to West Indies. Speaking Pequot language made capital offense. Name "Pequot" outlawed.'],
  ['Context', 'Pequot numbered ~16,000 pre-war — most densely populated Native people in southern New England. War was first large-scale English-Native conflict in New England.'],
  ['Legacy', 'Despite attempted erasure, Pequot families endured. Mashantucket Pequot gained federal recognition 1983.'],
  ['Source', 'Society of Colonial Wars CT; Wikipedia']
])).addTo(L_groups.bhcMassacre);

// -- Mashantucket Pequot Reservation --
bhcSquare(41.477, -71.969, BHC.museum).bindPopup(bhcPopup('Mashantucket Pequot Reservation & Museum', [
  ['People', 'Mashantucket Pequot Tribal Nation'],
  ['Recognized', '1983 (federal); reservation since 1666'],
  ['Museum', 'Mashantucket Pequot Museum & Research Center — largest Native American museum in the United States'],
  ['Economy', 'Foxwoods Resort Casino (among largest in world)'],
  ['Population', '1,100+ enrolled members'],
  ['Source', 'Wikipedia; MPMRC']
])).addTo(L_groups.bhcMuseums);

// -- Mohegan Reservation & Tantaquidgeon Museum --
bhcSquare(41.448, -72.105, BHC.museum).bindPopup(bhcPopup('Mohegan Reservation & Tantaquidgeon Museum', [
  ['People', 'Mohegan Tribe'],
  ['Recognized', '1994 (federal)'],
  ['Museum', 'Tantaquidgeon Museum (est. 1931) — oldest Native American-owned museum in the United States. Founded by Gladys Tantaquidgeon.'],
  ['Reservation', '240 acres in Uncasville; Mohegan Sun casino'],
  ['Culture', 'Annual Wigwam Festival, Green Corn ceremony tradition maintained'],
  ['Source', 'Mohegan Tribe; Wikipedia']
])).addTo(L_groups.bhcMuseums);

// -- Connecticut College Thames Sites --
bhcDiamond(41.379, -72.106, BHC.arch).bindPopup(bhcPopup('Connecticut College Thames River Sites', [
  ['People', 'Pequot / Mohegan'],
  ['Period', 'Pre-contact through Contact'],
  ['Description', '50+ known Indigenous and settler-colonist burials near Thames River waterfront. Valuable archaeological site accidentally disturbed 2022 when dead ash trees removed.'],
  ['Response', 'College created archaeologist position (Anthony Graesch). Repatriation of ancestor to Mohegan & Mashantucket Pequot tribes (Nov 2023) after 40 years in URI repository.'],
  ['Collaboration', 'First summit May 2024 with Mohegan, Mashantucket Pequot, and Eastern Pequot ambassadors'],
  ['Source', 'Connecticut College News 2024']
])).addTo(L_groups.bhcArch);

// -- Norwich / Yantic confluence --
bhcCircle(41.535, -72.075, BHC.village, 7).bindPopup(bhcPopup('Norwich — Yantic / Thames Confluence', [
  ['People', 'Mohegan'],
  ['Period', 'Pre-contact through Contact'],
  ['Description', 'Ancient Mohegan village at mouth of Yantic River where it joins Shetucket to form the Thames (Massapequotuck). Uncas is buried in Norwich. Leffingwell House Museum nearby.'],
  ['Context', 'Thames River originally called Pequot River. Renamed 1658 by colonial government to erase Pequot identity.'],
  ['Source', 'Mohegan Tribe; Thames River Heritage Park']
])).addTo(L_groups.bhcVillages);

// ====================================================================
// HOUSATONIC RIVER PATH (connecting line)
// ====================================================================
const housatonicPath = [
  [42.71, -73.21],   // Williamstown area
  [42.63, -73.18],   // North Adams
  [42.45, -73.25],   // Pittsfield
  [42.30, -73.30],   // Stockbridge / Kampoosa
  [42.24, -73.33],   // Monument Mountain
  [42.20, -73.36],   // Great Barrington
  [42.08, -73.35],   // Sheffield
  [41.97, -73.36],   // Salisbury CT
  [41.82, -73.30],   // Kent CT
  [41.63, -73.24],   // New Milford
  [41.47, -73.21],   // Bridgewater
  [41.33, -73.18],   // Shelton/Derby area
  [41.17, -73.12],   // Milford / mouth
];

L.polyline(housatonicPath, {
  color: '#4A7C59', weight: 3, opacity: 0.5, dashArray: '8,6',
  pane: 'berkPane'
}).bindPopup(bhcPopup('Housatonic River — "Beyond the Mountain Place"', [
  ['Mohican Name', 'Housatonic = "beyond the mountain place"'],
  ['Length', '~149 miles from Pittsfield MA to Long Island Sound'],
  ['Significance', 'Central artery of Mohican homeland. "The Housatonic River has the Mohicans\' footprints along the whole length of it."'],
  ['Threat', 'GE PCB contamination from Pittsfield plant (1932-1977). EPA Rest of River cleanup ongoing. Tribal THPO working with EPA to protect burial sites.']
])).addTo(L_groups.bhcRiverPath);

// ====================================================================
// THAMES RIVER PATH (Pequot River)
// ====================================================================
const thamesPath = [
  [41.535, -72.075],  // Norwich (confluence)
  [41.505, -72.080],  // Taftville
  [41.470, -72.095],  // Uncasville / Fort Shantok
  [41.440, -72.100],  // Mohegan Sun area
  [41.400, -72.100],  // Montville
  [41.365, -72.100],  // Groton/New London
  [41.340, -72.095],  // Mouth at Long Island Sound
];

L.polyline(thamesPath, {
  color: '#2563EB', weight: 3, opacity: 0.5, dashArray: '8,6',
  pane: 'berkPane'
}).bindPopup(bhcPopup('Thames River — Massapequotuck', [
  ['Original Name', 'Pequot River / Massapequotuck'],
  ['Renamed', '1658 by Connecticut General Court to erase Pequot identity'],
  ['Length', '15 miles from Norwich to Long Island Sound'],
  ['Significance', 'Central corridor of Pequot and Mohegan territory. Wampum manufacturing along brackish waters. "Highway" for dugout canoes and prime fishing ground.']
])).addTo(L_groups.bhcRiverPath);
