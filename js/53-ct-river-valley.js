// ============================================================
// KWINITEKW — Connecticut River Valley Indigenous Landscape
// Abenaki, Pocumtuck, Nonotuck, Agawam, Woronoco, Sokoki,
// Wangunk, Podunk & Related Peoples
// ============================================================
// SOURCES:
//   Margaret M. Bruchac, "Nonotuck Histories" (Historic Northampton)
//   Nolumbeka Project (nolumbekaproject.org)
//   NPS Battlefield Protection Program — Battle of Great Falls/
//     Wissatinnewag-Peskeompskut Technical Report (2016)
//   Edward J. Lenik, "Picture Rocks" (2002)
//   Rich Holschuh / Elnu Abenaki — Kchi Pôntegok Project
//   Annette Spaulding — Brattleboro petroglyph rediscovery
//   Springfield-Agawam Indigenous Land Acknowledgement
//   Lucianne Lavin, "Pre-colonial History of the Wangunk"
//
// CULTURAL CONTEXT:
//   The Connecticut River — Kwinitekw ("the long river") — is
//   New England's longest river (410 miles), flowing from the
//   Quebec border to Long Island Sound. For 12,000+ years since
//   the retreat of the Laurentide Ice Sheet and draining of
//   glacial Lake Hitchcock, Indigenous peoples have lived, fished,
//   farmed, traded, and created sacred art along its banks.
//   The river was not a border but a highway — the central artery
//   connecting dozens of tribal communities across 5 states.
//   An estimated 3,000–5,000 people lived in the middle valley
//   alone in the early 1600s.
//
// SITES NOT DUPLICATED (already in other files):
//   - Brattleboro submerged petroglyphs (38-mohican-hudson.js / mohicanLost)
// ============================================================

// Background pane
if (!map.getPane('ctRiverPane')) {
  map.createPane('ctRiverPane');
  map.getPane('ctRiverPane').style.zIndex = 370;
}

const CTR = {
  rockart:  '#E6A817',   // deep gold — rock art / petroglyphs
  village:  '#2D6A4F',   // forest green — villages & settlements
  sacred:   '#8B4513',   // saddle brown — sacred/ceremonial sites
  lost:     '#B22222',   // firebrick — submerged/destroyed sites
  dam:      '#4A4A4A',   // dark gray — dams that drowned sites
  museum:   '#708090',   // slate gray — museums & interpretation
  massacre: '#8B0000',   // dark red — massacre / conflict sites
};

// ── Marker factories ──────────────────────────────────────────
function ctrCircle(lat, lng, color, radius) {
  return L.circleMarker([lat, lng], {
    radius: radius || 7, fillColor: color, color: '#222', weight: 1.5,
    opacity: 1, fillOpacity: 0.85, pane: 'ctRiverPane'
  });
}

function ctrDiamond(lat, lng, color) {
  return L.marker([lat, lng], {
    icon: L.divIcon({
      className: '', iconSize: [16, 16], iconAnchor: [8, 8],
      html: `<div style="width:11px;height:11px;transform:rotate(45deg);background:${color};border:1.5px solid #222;"></div>`
    }), pane: 'ctRiverPane'
  });
}

function ctrLostMarker(lat, lng) {
  return L.marker([lat, lng], {
    icon: L.divIcon({
      className: '', iconSize: [18, 18], iconAnchor: [9, 9],
      html: '<div style="font-size:15px;color:#B22222;text-shadow:0 0 3px #fff;font-weight:bold;">✖</div>'
    }), pane: 'ctRiverPane'
  });
}

function ctrDamMarker(lat, lng) {
  return L.marker([lat, lng], {
    icon: L.divIcon({
      className: '', iconSize: [18, 18], iconAnchor: [9, 9],
      html: '<div style="font-size:14px;color:#4A4A4A;text-shadow:0 0 2px #fff;">⬛</div>'
    }), pane: 'ctRiverPane'
  });
}

function ctrSquare(lat, lng, color) {
  return L.marker([lat, lng], {
    icon: L.divIcon({
      className: '', iconSize: [14, 14], iconAnchor: [7, 7],
      html: `<div style="width:10px;height:10px;background:${color};border:1.5px solid #222;border-radius:2px;"></div>`
    }), pane: 'ctRiverPane'
  });
}

function ctrTriangle(lat, lng, color) {
  return L.marker([lat, lng], {
    icon: L.divIcon({
      className: '', iconSize: [16, 16], iconAnchor: [8, 13],
      html: `<div style="width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:12px solid ${color};filter:drop-shadow(0 0 1px #222);"></div>`
    }), pane: 'ctRiverPane'
  });
}

// ── Popup builder ─────────────────────────────────────────────
function ctrPopup(title, culture, fields) {
  let html = `<div style="max-width:340px;font-family:'Georgia',serif;">`;
  html += `<div style="font-size:15px;font-weight:bold;color:#1B4332;margin-bottom:3px;">${title}</div>`;
  html += `<div style="font-size:11px;color:#2D6A4F;margin-bottom:8px;font-style:italic;">${culture}</div>`;
  fields.forEach(([k, v]) => {
    html += `<div style="margin-bottom:4px;"><span style="font-weight:bold;font-size:11px;color:#555;">${k}:</span> <span style="font-size:12px;">${v}</span></div>`;
  });
  html += '</div>';
  return html;
}

// ================================================================
//  ROCK ART SITES (ctrRockArt layer — gold diamonds)
// ================================================================

// Bellows Falls Petroglyphs
ctrDiamond(43.1335, -72.4440, CTR.rockart)
  .bindPopup(ctrPopup('Kchi Pôntegok — Bellows Falls Petroglyphs', 'Abenaki · 300–3,000 years old · NRHP 1990', [
    ['Location', 'West bank of Connecticut River at Great Falls, south of Vilas Bridge, Bellows Falls (Rockingham), Vermont'],
    ['Description', '~24 deeply carved anthropomorphic faces on bedrock at the narrowest point of the Connecticut River. Two groups of carvings 35 and 55 feet south of the bridge. Faces have eyes, mouths, and radiating projections (feathers/horns/spiritual emanations). North group resembles Abenaki & Iroquois corn masks.'],
    ['Spiritual significance', 'Westward orientation may guide souls to the afterlife — Abenaki burial ground found nearby. Medicine people carved these to "balance the power, the spirits, the energies" (Rich Holschuh, Elnu Abenaki).'],
    ['Condition', '⚠️ COMPROMISED — DAR hired stone carver to deepen carvings (1930s). Painted bright yellow (1961). Another bank permanently covered by railroad rip-rap (~1890). Original appearance uncertain.'],
    ['Current efforts', 'Kchi Pôntegok Project ($37K NPS grant, 2022) — Town of Rockingham & Elnu Abenaki collaborative study. Archaeologist Gail Golec, diver Annette Spaulding, Rich Holschuh. Results presented May 2024.'],
    ['Access', 'Visible from south side of Vilas Bridge (Bridge Street, Bellows Falls). Binoculars recommended. Rough trail descends to water. Bridge closed to traffic.'],
  ])).addTo(L_groups.ctrRockArt);

// Guilford Petroglyphs
ctrDiamond(42.77, -72.67, CTR.rockart)
  .bindPopup(ctrPopup('Guilford Petroglyphs', 'Abenaki · Date unknown · Location protected', [
    ['Location', 'Guilford, VT — exact location restricted'],
    ['Description', 'Possible Abenaki petroglyphs in a remote location. "Way off the beaten path" (Rich Holschuh). Combined with Bellows Falls and Brattleboro sites, points to a significant Abenaki presence in southern Vermont.'],
    ['Access', '⚠️ Location deliberately protected. Not publicly accessible.'],
  ])).addTo(L_groups.ctrRockArt);

// ================================================================
//  LOST / SUBMERGED SITES (ctrLost layer — red ✖)
// ================================================================

// Brattleboro Petroglyphs (Wantastegok) — submerged
ctrLostMarker(42.8551, -72.5617)
  .bindPopup(ctrPopup('Wantastegok — Brattleboro Petroglyphs', 'Abenaki · SUBMERGED since 1909', [
    ['Location', 'Confluence of West River & Connecticut River, Brattleboro, VT'],
    ['Status', '🔴 SUBMERGED ~15 feet below river surface under 2.5 feet of silt, drowned by Vernon Dam (1909)'],
    ['Description', 'First recorded 1794 by Samuel Williams. 1860s drawing by Larkin G. Mead shows "Indian Rock" with 6 birds, 3 snakes, and a dog/wolf. Rich Holschuh: "Wantastegok means at the river where something is lost — a place where people returned to be buried with their ancestors."'],
    ['Rediscovery', 'Diver Annette Spaulding searched 30+ years. Found face carving (2015), then eagle figure + 9 carvings on underwater ledge (2017), confirming the 1860s drawing. Westminster West fault zone passes directly through site — possible historic whirlpool (underwater serpent/panther in Abenaki cosmology).'],
    ['Conservation', 'Atowi Project (nonprofit) negotiated purchase of ~2 acres at Wantastegok Sacred Site. Elnu Abenaki work with Vermont Land Trust to ensure tribal access.'],
  ])).addTo(L_groups.ctrLost);

// Turners Falls / Barton Cove — probable lost rock art
ctrLostMarker(42.6050, -72.5530)
  .bindPopup(ctrPopup('Barton Cove — Probable Lost Petroglyphs', 'Pocumtuck + multi-tribal · PROBABLE LOST', [
    ['Location', 'Between Millers & Deerfield River outflows, Gill / Turners Falls, MA'],
    ['Status', '🔴 PROBABLE LOST — submerged by Turners Falls Dam impoundment (Barton Cove). Ledge blasted for construction 1860s–1960s.'],
    ['Evidence', 'Local historian Gary Sanderson: "There was at one time, without question, rock art somewhere near Burnham\'s Rock and the Flume on the Riverside Gill side." Edward Lenik notes petroglyphs cluster near waterfalls and river mouths. Rock art scholar Duncan Caldwell investigated shelf-caves on nearby Sugarloaf.'],
    ['What was lost', 'The section of Connecticut River between Millers and Deerfield outflows was a place of "high spirit" — now inundated behind the dam.'],
  ])).addTo(L_groups.ctrLost);

// South Hadley Falls — probable lost site
ctrLostMarker(42.2080, -72.6090)
  .bindPopup(ctrPopup('South Hadley Falls — Probable Lost Fishing Site', 'Nonotuck + multi-tribal · DAMMED', [
    ['Location', 'Holyoke, MA — now Holyoke Dam site'],
    ['Status', '🔴 DAMMED — 58-foot drop, largest falls on the Connecticut. Buried under Holyoke Dam. Fish elevator installed.'],
    ['Significance', 'Major falls were THE gathering places for millennia. Every major falls on the Connecticut has been dammed. This was likely a significant fishing and ceremonial site comparable to Peskeompskut.'],
  ])).addTo(L_groups.ctrLost);

// Enfield Falls — probable lost site
ctrLostMarker(41.9780, -72.6220)
  .bindPopup(ctrPopup('Enfield Falls — Lost Canoe Transfer Point', 'Multi-tribal · DAMMED / CANALED', [
    ['Location', 'Enfield, CT — first unnavigable falls from the ocean'],
    ['Status', '🔴 DAMMED — Enfield Falls Canal opened 1829. Dam built over site.'],
    ['Significance', 'The first barrier to ocean-going canoe travel — a natural transfer point where travelers would portage. Dutch explorer Adriaen Block turned back here in 1614, reporting thousands of Native Americans in villages upstream. Probable fishing and trading site for millennia.'],
  ])).addTo(L_groups.ctrLost);

// Mt. Sugarloaf shelf-caves — possible lost rock art
ctrLostMarker(42.4770, -72.5970)
  .bindPopup(ctrPopup('Mt. Sugarloaf (Wequamps) — Possible Rock Art', 'Pocumtuck · SACRED SITE · Investigated', [
    ['Location', 'South Deerfield, MA'],
    ['Significance', 'Sacred in Pocumtuck tradition as the "beaver-tail hill" (Amiskwôlowôkoiak) — an oral history encoding the geological reality of glacial Lake Hitchcock (12,000+ years ago). One of the oldest verified geological oral traditions in North America.'],
    ['Rock art search', 'Rock art scholar Duncan Caldwell investigated the North Sugarloaf shelf-cave — potential seclusion chamber for medicine people on spirit quests. No confirmed finds, but landscape strongly suggests past use.'],
    ['Access', 'Mt. Sugarloaf State Reservation — public trails with panoramic views of the valley.'],
  ])).addTo(L_groups.ctrLost);

// ================================================================
//  VILLAGES & SETTLEMENTS (ctrVillages layer — green circles)
// ================================================================

// Peskeompskut / Wissatinnewag
ctrCircle(42.6020, -72.5570, CTR.village, 9)
  .bindPopup(ctrPopup('Peskeompskut / Wissatinnewag', 'Multi-tribal gathering · 10,000+ years · Riverside Arch. District (NRHP)', [
    ['Location', 'Turners Falls / Gill, MA — Great Falls of the Connecticut River'],
    ['Time depth', '10,000+ years of human occupation — evidence from Paleo times through Historic Contact'],
    ['Description', 'One of the most important fishing sites in New England for thousands of years. At least twice yearly, peoples from hundreds of miles converged for salmon/shad/herring runs, planting, trade, ceremony, and kinship renewal. 300 acres of cleared land with wetus (domed huts). Wissatinnewag was the adjacent Pocumtuck village.'],
    ['Gathering peoples', 'Nipmuc paddled down the Millers River. Abenaki & Sokoki streamed south. Mohican arrived from the west. Narragansett from the southeast. Pocumtuck Confederation villages moved upriver.'],
    ['Interpretation', 'Great Falls Discovery Center (state park, Turners Falls) — life-size dioramas, exhibits on watershed natural and cultural history. Free admission.'],
  ])).addTo(L_groups.ctrVillages);

// Pocumtuck Fort & Village
ctrCircle(42.5440, -72.6080, CTR.village, 8)
  .bindPopup(ctrPopup('Pocumtuck Village & Fort', 'Pocumtuck · 13th–17th century · Active archaeology', [
    ['Location', 'Old Deerfield / Pocumtuck Ridge, Deerfield, MA'],
    ['Description', 'Principal Pocumtuck village on the alluvial plain at the confluence of the Pocumtuck (Deerfield) River and Connecticut River — topsoil as deep as 20 feet. Fort was a fortified hilltop settlement on the ridge above.'],
    ['Archaeology', 'UMass Amherst excavations since the 1990s using "poly-communal" approaches integrating Indigenous knowledge. Found palisades, strategic defensive architecture, stone tools, ceramics, faunal remains — evidence of mixed economy (maize agriculture, hunting, riverine resources).'],
    ['Colonial impact', 'The 5,000-acre English land grant was superimposed directly on Pocumtuck homelands. 1704 Deerfield Raid — French & Indigenous forces killed 56 colonists, took 112 captives on a 300-mile march to Canada.'],
    ['Access', 'Historic Deerfield — museum campus. Pocumtuck Valley Memorial Association (founded 1870).'],
  ])).addTo(L_groups.ctrVillages);

// Squakheag / Fort Hill
ctrCircle(42.6960, -72.4530, CTR.village, 7)
  .bindPopup(ctrPopup('Squakheag (Northfield) / Fort Hill', 'Sokoki (Western Abenaki)', [
    ['Location', 'Northfield, MA and Fort Hill, Hinsdale, NH'],
    ['Culture', 'Sokoki — "People who separated" — southernmost band of Western Abenaki'],
    ['Description', 'Principal Sokoki settlement in the middle Connecticut River Valley. Fort Hill (Hinsdale, NH) was a fortified site on the New Hampshire side. ~500 people (based on ~100 warriors counted in 1663). Created "fictive kinship" communities by gathering refugees from Iroquois raids and disease.'],
    ['King Philip\'s War', 'Captain Beers ambushed on the trail to Squakheag, September 1675. One of the first engagements in the war in the valley.'],
  ])).addTo(L_groups.ctrVillages);

// Nonotuck
ctrCircle(42.3250, -72.6310, CTR.village, 7)
  .bindPopup(ctrPopup('Nonotuck', 'Nonotuck · "In the midst of the river"', [
    ['Location', 'Northampton / Hadley, MA'],
    ['Description', '"In the midst of the river" — between the Holyoke Range and Mt. Tom Range. Closely allied through kinship, trade, and diplomacy with Agawam, Woronoco, Pocumtuck, and Sokoki. Fort Hills dotted the landscape — elevated palisaded sites for caching supplies and diplomacy.'],
    ['Colonial impact', 'English town of Northampton established on Nonotuck land. Scalp bounties later imposed — anyone found within 5 miles of the Connecticut River could be considered hostile.'],
    ['Interpretation', 'Historic Northampton — Margaret Bruchac\'s "Nonotuck Histories" essay provides detailed ethnohistory.'],
  ])).addTo(L_groups.ctrVillages);

// Agawam / Springfield
ctrCircle(42.1015, -72.5898, CTR.village, 8)
  .bindPopup(ctrPopup('Agawam — "Low-Lying Marshy Lands"', 'Agawam · 10,000+ years', [
    ['Location', 'Metro Center Springfield, MA'],
    ['Description', 'At the crossing of the Bay Path trade route and Connecticut River, near mouths of Chicopee and Westfield Rivers. 10,000+ years of continuous habitation since glaciation. Agawam leaders invited William Pynchon\'s settlement in 1636. Located at the first unnavigable falls (Enfield Falls) — a natural transfer point for canoe travelers.'],
    ['Kinship network', 'Traded and allied with Quaboag (east), Podunk (south), Woronoco (west), Nonotuck, Pocumtuck & Sokoki (north). Population ~500+ in the 1630s.'],
    ['Enslavement', 'After King Philip\'s War, "Pocumtuck Indians" were sold into slavery through New England ports or shipped to the Caribbean and Bermuda — mortality rates exceeded 50%.'],
  ])).addTo(L_groups.ctrVillages);

// Woronoco
ctrCircle(42.1690, -72.8200, CTR.village, 7)
  .bindPopup(ctrPopup('Woronoco — "Where the River Winds"', 'Woronoco · Pop. ~1,000 (1634)', [
    ['Location', 'Russell / Westfield, MA — along the Westfield River'],
    ['Description', 'A palisaded fort community of ~1,000 people in 1634 — one of the largest in the valley. Located where the Westfield River winds through the landscape. Connected to Agawam and Nonotuck by river routes.'],
    ['Gray Lock', 'War chief Wawanolewat ("one who fools the others") fought in King Philip\'s War, then led surprise raids from Missisquoi (Swanton, VT) on Northfield, Deerfield, Sunderland, Northampton & Westfield from 1712–1726. Mt. Greylock may be named for him. Descendants now bear the names Wawanolet and Nolet at Odanak, Quebec.'],
    ['Enslavement deed', 'Spanesa and Poxonock were forced to sign a mortgage for Woronoco land offering their ~4-year-old daughter to be enslaved if they defaulted.'],
  ])).addTo(L_groups.ctrVillages);

// Mattabesett / Middletown (Wangunk)
ctrCircle(41.5540, -72.6510, CTR.village, 7)
  .bindPopup(ctrPopup('Mattabesett / Middletown — Wangunk', 'Wangunk · "River People" · Paleo-Indian to Contact', [
    ['Location', 'Middletown and Portland, CT — great oxbow bend of the Connecticut River'],
    ['Description', 'Primary Wangunk settlement. Over a dozen Paleo-Indian fluted points recovered. Grand sachem Sowheage presided over all Wangunk territory. Cooking pots embellished with incised designs of the spirits of the four (or six) directions. Before English settlement, at least half a dozen villages on both sides of the river.'],
    ['Reservation', 'Connecticut established three reservations at Middletown and Chatham. By 1767, reduced Wangunk sold remaining rights and joined the Tunxis at Farmington — some later relocated to Wisconsin and Oklahoma.'],
    ['Indian Hill', 'Indian Hill Cemetery (1850) developed on the former 50-acre reservation parcel. Wangunk Meadows (Portland) was part of the east-bank reservation.'],
  ])).addTo(L_groups.ctrVillages);

// Pyquag / Wethersfield
ctrCircle(41.7137, -72.6526, CTR.village, 6)
  .bindPopup(ctrPopup('Pyquag / Wethersfield', 'Wangunk · Sowheage\'s original seat', [
    ['Location', 'Wethersfield, CT'],
    ['Description', 'Sachem Sowheage\'s original seat of power before English displacement to Mattabesett. Wethersfield settled by English in 1634. Sowheage\'s animosity toward the English led to the Pequot War attack on Wethersfield in 1637 that killed several colonists and captured two girls.'],
  ])).addTo(L_groups.ctrVillages);

// Suckiog / Hartford
ctrCircle(41.7658, -72.6734, CTR.village, 7)
  .bindPopup(ctrPopup('Suckiog / Hartford', 'Suckiag · Dutch & English colonial nexus', [
    ['Location', 'Hartford, CT'],
    ['Description', 'Site of the Dutch "House of Good Hope" fortified trading post (1633) — first permanent European presence on the Connecticut River. English settlement of Hartford followed in 1636. Sequassen was sachem of Suckiog, challenging Mohegan leader Uncas for regional power.'],
  ])).addTo(L_groups.ctrVillages);

// Nowashe / South Windsor (Podunk)
ctrCircle(41.8330, -72.5780, CTR.village, 7)
  .bindPopup(ctrPopup('Nowashe / South Windsor — Podunk', 'Podunk (Nowaas) · Thousands of years', [
    ['Location', 'South Windsor meadows, CT — east side of the Connecticut River'],
    ['Description', 'Seasonal agricultural settlement on the fertile flood-prone meadows. Over 20,000 Indigenous artifacts collected (displayed at Wood Memorial Library & Museum). Archaeological record shows repeated habitation spanning thousands of years. The meadows remain a fertile agricultural location today.'],
    ['Wahginnacut', 'The Wangunk sachem Wahginnacut sought English support from Massachusetts Bay Colony in the 1630s. Plymouth Colony\'s Governor Winslow sent settlers to Windsor in 1633.'],
  ])).addTo(L_groups.ctrVillages);

// ================================================================
//  SACRED / CEREMONIAL SITES (ctrSacred layer — brown triangles)
// ================================================================

// Mt. Sugarloaf — Wequamps
ctrTriangle(42.4770, -72.5970, CTR.sacred)
  .bindPopup(ctrPopup('Mt. Sugarloaf — Wequamps', 'Pocumtuck · Sacred · Deep-time oral history', [
    ['Location', 'South Deerfield, MA — Mt. Sugarloaf State Reservation'],
    ['Significance', 'Central image of the Wôbanaki Pocumtuck story of the Amiskwôlowôkoiak — "people of the beaver-tail hill." The giant beaver created Lake Hitchcock, and Sugarloaf is its tail. This oral tradition encodes the geological reality of a glacial lake that existed 12,000+ years ago — among the oldest verified geological oral traditions in North America.'],
    ['Landscape learning', '"Oral narratives about the landscape formed part of a larger body of knowledge that enabled Native people to efficiently hunt, fish, gather and plant, make climate predictions, and situate homesites."'],
    ['Access', 'Public trails with panoramic views. Mt. Sugarloaf State Reservation.'],
  ])).addTo(L_groups.ctrSacred);

// Rock Dam — sacred fishing site
ctrTriangle(42.5930, -72.5510, CTR.sacred)
  .bindPopup(ctrPopup('Rock Dam', 'Pocumtuck · Ancient fishing site', [
    ['Location', 'Gill, MA — downstream of Great Falls on the Connecticut River'],
    ['Description', 'An important sacred fishing site. Local tradition and archaeological evidence suggest deep-history use. One of the most likely places for undiscovered rock art, according to local historians.'],
  ])).addTo(L_groups.ctrSacred);

// Cockaponset (Haddam)
ctrTriangle(41.4560, -72.5110, CTR.sacred)
  .bindPopup(ctrPopup('Cockaponset / Machamoodus', 'Wangunk · "Place of noises"', [
    ['Location', 'Haddam / Moodus, CT'],
    ['Description', 'Machamoodus (Moodus) means "place of noises" — referring to the Moodus noises, underground rumblings caused by micro-earthquakes along the Higganum Dike fault zone. This natural phenomenon gave the place deep spiritual significance. Wangunk village site.'],
  ])).addTo(L_groups.ctrSacred);

// Lake Pocotopaug
ctrTriangle(41.5660, -72.5130, CTR.sacred)
  .bindPopup(ctrPopup('Lake Pocotopaug', 'Wangunk · Fishing & hunting ground', [
    ['Location', 'East Hampton, CT — ~9 miles in circumference'],
    ['Description', 'Frequently used by Wangunk people for fishing and hunting. Many arrowheads found along the banks. Located in what may have been a satellite of the Mattabesett community.'],
  ])).addTo(L_groups.ctrSacred);

// Schaghticoke on the Connecticut
ctrTriangle(42.7250, -73.5820, CTR.sacred)
  .bindPopup(ctrPopup('Schaghticoke (Refuge Village)', 'Multi-tribal · Refugee community', [
    ['Location', 'Schaghticoke, NY — at confluence of Hoosic & Hudson Rivers'],
    ['Description', 'After King Philip\'s War (1676), Governor Andros invited all displaced Indians to settle at Schaghticoke. Pocumtuck, Nonotuck, Woronoco, Sokoki, and others created a refuge community under colonial oversight. The name derives from pishgachtigok — "a site at the confluence of two rivers." Not to be confused with the Schaghticoke on the Housatonic in CT.'],
    ['Significance for CT River', 'Key node in the refugee diaspora corridor — peoples moved between the Connecticut River, Schaghticoke, Missisquoi (VT), and Odanak/St. Francis (Quebec). Family names trace this movement across generations.'],
  ])).addTo(L_groups.ctrSacred);

// ================================================================
//  MASSACRE / CONFLICT SITES (ctrMassacre layer — dark red)
// ================================================================

// Peskeompskut Massacre (1676)
ctrCircle(42.6030, -72.5560, CTR.massacre, 10)
  .bindPopup(ctrPopup('Peskeompskut Massacre — May 19, 1676', 'Multi-tribal · King Philip\'s War · NPS Battlefield Study', [
    ['Location', 'Turners Falls / Gill, MA — Riverside Archaeological District (NRHP)'],
    ['Event', 'Dawn raid by Captain William Turner\'s 150 militia on the non-combatant camp. 100–200+ women, children, and elderly killed — shot in their wetus or driven into the river to drown. Warriors were camped separately ~½ mile away for wartime security.'],
    ['Counterattack', 'Native warriors from surrounding camps rushed the scene and routed the English. A devastating series of ambushes along the 20-mile retreat through White Ash Swamp, Cherry Rum Brook, the Green River ford, and down to Deerfield killed ~38 English including Captain Turner.'],
    ['Aftermath', 'Within one month, the English offensive in the valley ended. Survivors lost critical fish stores and blacksmithing tools. The massacre and counterattack are often viewed as a turning point in King Philip\'s War.'],
    ['Current study', 'NPS American Battlefield Protection Program study ongoing since 2014 — coalition of 5 historical commissions + THPOs from Nipmuck, Abenaki, Narragansett, and Wampanoag. Dr. Kevin McBride & David Naumec, lead archaeologists.'],
    ['2004 Reconciliation', 'Town of Montague held a Reconciliation Day ceremony with representatives of various Native American tribes on May 19, 2004 — the 328th anniversary.'],
  ])).addTo(L_groups.ctrMassacre);

// Bloody Brook (1675)
ctrCircle(42.4740, -72.5870, CTR.massacre, 7)
  .bindPopup(ctrPopup('Bloody Brook Ambush — September 12, 1675', 'Pocumtuck / Nipmuc · King Philip\'s War', [
    ['Location', 'South Deerfield, MA'],
    ['Event', 'English grain convoy ambushed at a small brook while soldiers paused to pick wild grapes — "dear and deadly grapes they proved to them." 64 English killed, including Captain Lathrop. One of the deadliest English losses in King Philip\'s War.'],
  ])).addTo(L_groups.ctrMassacre);

// Beers Ambush (1675)
ctrCircle(42.6800, -72.4500, CTR.massacre, 6)
  .bindPopup(ctrPopup('Captain Beers Ambush — September 1675', 'Sokoki / Pocumtuck · King Philip\'s War', [
    ['Location', 'Trail to Squakheag, near Northfield, MA'],
    ['Event', 'Captain Beers and his men ambushed on the trail to relieve Squakheag (Northfield). One of the early engagements of King Philip\'s War in the Connecticut Valley.'],
  ])).addTo(L_groups.ctrMassacre);

// ================================================================
//  DAMS (ctrDams layer — gray squares)
// ================================================================

// Turners Falls Dam
ctrDamMarker(42.6010, -72.5540)
  .bindPopup(ctrPopup('Turners Falls Dam', 'First main-stem barrier · Built 1798', [
    ['Location', 'Turners Falls (Montague), MA'],
    ['Built', '1798 — first full main-stem barrier on the Connecticut River. Current structure generates 68 MW (Cabot Station + others).'],
    ['Impact', 'Impounded the river creating Barton Cove (20 miles upstream). Drowned the Great Falls. Power canal (1866–1916) diverted flow through industrial village. Probable rock art submerged. Blocked salmon migration for over 200 years — fish ladder now installed but still a major barrier.'],
    ['Relicensing', 'FirstLight Power seeking FERC relicensing (filed ~2021). Major opportunity for environmental conditions.'],
  ])).addTo(L_groups.ctrDams);

// Vernon Dam
ctrDamMarker(42.7640, -72.5140)
  .bindPopup(ctrPopup('Vernon Dam', 'Drowned Brattleboro Petroglyphs · Built 1909', [
    ['Location', 'Vernon, VT'],
    ['Built', '1909 — Vernon hydroelectric dam'],
    ['Impact', 'Submerged the Brattleboro (Wantastegok) petroglyphs ~15 feet below the river surface. An 1860s drawing documented 6 birds, 3 snakes, and a dog/wolf carved on Indian Rock — all now buried under silt. Diver Annette Spaulding rediscovered the site 2015–2017.'],
  ])).addTo(L_groups.ctrDams);

// Bellows Falls Dam
ctrDamMarker(43.1350, -72.4460)
  .bindPopup(ctrPopup('Bellows Falls Dam', 'Adjacent to petroglyphs · Built 1907', [
    ['Location', 'Bellows Falls (Rockingham), VT'],
    ['Built', '1907 — concrete gravity dam, 48 feet, 30,000 acre-feet storage'],
    ['Impact', 'Adjacent to the Kchi Pôntegok petroglyphs. Railroad rip-rap (~1890) permanently buried some carvings. Dam altered water levels around the sacred site.'],
  ])).addTo(L_groups.ctrDams);

// Holyoke Dam
ctrDamMarker(42.2070, -72.6100)
  .bindPopup(ctrPopup('Holyoke Dam (South Hadley Falls)', 'Largest falls on the Connecticut · Built 1849', [
    ['Location', 'Holyoke / South Hadley, MA'],
    ['Built', '1849 (first dam — failed on first fill); rebuilt. 58-foot drop — largest on the Connecticut River.'],
    ['Impact', 'Buried South Hadley Falls under impoundment. Fish elevator installed. Powered the industrial city of Holyoke (450+ mills by 1848). Blocked all upstream migration for salmon, shad, herring. Probable major Indigenous fishing/ceremony site lost.'],
  ])).addTo(L_groups.ctrDams);

// Enfield Dam
ctrDamMarker(41.9780, -72.6220)
  .bindPopup(ctrPopup('Enfield Dam', 'Oldest dam on the Connecticut · Pre-1900', [
    ['Location', 'Enfield, CT'],
    ['Built', 'Pre-1900 — believed to be oldest on the Connecticut. Enfield Falls Canal opened 1829.'],
    ['Impact', 'Canalized the first unnavigable falls from the ocean — the ancient portage/transfer point. Dutch explorer Adriaen Block turned back here in 1614.'],
  ])).addTo(L_groups.ctrDams);

// ================================================================
//  MUSEUMS & INTERPRETATION (ctrMuseums layer — gray)
// ================================================================

ctrSquare(42.5950, -72.5560, CTR.museum)
  .bindPopup(ctrPopup('Great Falls Discovery Center', 'State Park · Free admission', [
    ['Location', '2 Avenue A, Turners Falls, MA'],
    ['Description', 'State park in renovated mill buildings. Life-size dioramas of watershed habitats from source to sea. Exhibits on 12,000 years of natural, cultural, and industrial history. Information on the Falls Fight and Indigenous peoples.'],
    ['Hours', 'Tue–Sun 10am–4pm (seasonal variations). Guided walks Thu 1pm.'],
  ])).addTo(L_groups.ctrMuseums);

ctrSquare(42.5410, -72.6070, CTR.museum)
  .bindPopup(ctrPopup('Historic Deerfield', 'Museum campus since 1940', [
    ['Location', 'Old Main Street, Deerfield, MA'],
    ['Description', 'Mile-long historic village with restored colonial houses and exhibit spaces. Focus on the frontier experience and contested landscape. Research on the Pocumtuck Fort archaeology and stewardship project.'],
  ])).addTo(L_groups.ctrMuseums);

ctrSquare(42.5430, -72.6100, CTR.museum)
  .bindPopup(ctrPopup('Pocumtuck Valley Memorial Association', 'Founded 1870', [
    ['Location', 'Memorial Hall, Deerfield, MA'],
    ['Description', 'One of the earliest local historical societies in the valley. Collections include Indigenous artifacts from the Deerfield area. Active collecting since the 19th century.'],
  ])).addTo(L_groups.ctrMuseums);

ctrSquare(42.3200, -72.6310, CTR.museum)
  .bindPopup(ctrPopup('Historic Northampton', 'Nonotuck histories', [
    ['Location', 'Northampton, MA'],
    ['Description', 'Margaret Bruchac\'s "Nonotuck Histories" essay hosted here — detailed ethnohistory of the five middle valley communities. Research on the Indigenous landscape of the Northampton area.'],
  ])).addTo(L_groups.ctrMuseums);

ctrSquare(41.8330, -72.5780, CTR.museum)
  .bindPopup(ctrPopup('Wood Memorial Library & Museum', 'Podunk artifacts collection', [
    ['Location', 'South Windsor, CT'],
    ['Description', 'Over 20,000 Indigenous artifacts from the Nowashe / Podunk village site on the South Windsor meadows. Preserved and used for educational purposes by the Friends of Wood Memorial Library & Museum.'],
  ])).addTo(L_groups.ctrMuseums);

// Nolumbeka Project (not a physical museum but important)
ctrSquare(42.5880, -72.5960, CTR.museum)
  .bindPopup(ctrPopup('Nolumbeka Project', '"The calm waters between the rapids"', [
    ['Location', 'Based in the Connecticut River Valley, MA'],
    ['Description', 'Nonprofit honoring Northeastern tribal heritage. Hosts annual gatherings with Indigenous presenters. Works to protect Wissatinnewag and other ancient multi-tribal village sites. Name means "the calm waters between the rapids" in the Pocumtuck language.'],
    ['Website', 'nolumbekaproject.org'],
  ])).addTo(L_groups.ctrMuseums);

// ================================================================
//  RIVER CORRIDOR POLYLINE (ctrRiver layer — blue path)
// ================================================================

// Simplified Connecticut River path through the study area
const ctRiverPath = [
  [41.28, -72.34],  // Old Saybrook (mouth)
  [41.45, -72.48],  // Essex
  [41.56, -72.65],  // Middletown (Wangunk)
  [41.71, -72.65],  // Wethersfield
  [41.77, -72.67],  // Hartford
  [41.83, -72.58],  // South Windsor
  [41.98, -72.62],  // Enfield Falls
  [42.10, -72.59],  // Springfield (Agawam)
  [42.21, -72.61],  // Holyoke (South Hadley Falls)
  [42.32, -72.63],  // Northampton (Nonotuck)
  [42.47, -72.59],  // South Deerfield / Sugarloaf
  [42.54, -72.60],  // Deerfield (Pocumtuck)
  [42.60, -72.56],  // Turners Falls (Peskeompskut)
  [42.70, -72.45],  // Northfield (Squakheag)
  [42.77, -72.51],  // Vernon
  [42.86, -72.56],  // Brattleboro
  [43.00, -72.47],  // Putney
  [43.13, -72.44],  // Bellows Falls
  [43.30, -72.43],  // Claremont
  [43.65, -72.30],  // White River Jct
];

L.polyline(ctRiverPath, {
  color: '#2563EB', weight: 3, opacity: 0.5, dashArray: '8,6',
  pane: 'ctRiverPane'
}).bindPopup(ctrPopup('Kwinitekw — The Long River', 'Connecticut River · 410 miles · 12,000+ years of human use', [
  ['Indigenous name', 'Kwinitekw ("the long river") — Algonkian. English name "Connecticut" from Pequot quinetucket ("long tidal river").'],
  ['Watershed', '11,260 square miles across 5 states and Quebec. 148 tributaries. Provides 70% of Long Island Sound\'s fresh water.'],
  ['Dams', '16 dams on the main stem (12 hydropower). First full barrier at Turners Falls (1798). Over 1,000 dams on tributaries.'],
  ['Fish', 'Salmon once migrated to Bellows Falls. Now blocked by dams. Fish ladders at Holyoke and Turners Falls allow limited passage.'],
])).addTo(L_groups.ctrRiver);

console.log('✅ 53-ct-river-valley.js loaded — Kwinitekw layer');
