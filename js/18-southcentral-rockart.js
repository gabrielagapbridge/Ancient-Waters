// ===== SOUTH-CENTRAL CALIFORNIA ROCK ART (Lee & Hyder 1991) =====
const scRockArtSites = [
  // --- TATAVIAM ---
  {name:"Vasquez Rocks (CA-LAn-363/375)", tribe:"Tataviam", lat:34.487, lng:-118.321,
   style:"Incised petroglyphs on red-ochred sandstone surfaces AND painted pictographs. Two distinct techniques at the same site. Paintings in small cavities in tilted sandstone sheets.",
   motifs:"Sun disks, centipedes, snakes, bug-like motifs very similar to Chumash. Bilaterally symmetrical designs outlined with contrasting colors. Tiny dots. Round-headed anthropomorphs with headdresses, forked-stick figures. Plant-like form possibly representing Datura blossom.",
   colors:"Red (hematite ochre), black (charcoal/manganese), white (gypsum/clay). Small-scale paintings.",
   rockType:"Vasquez Formation sandstone — tilted alluvial sedimentary beds uplifted by San Andreas Fault activity. Sheets and slabs of varying thickness provide natural cavities for sheltered painting.",
   dating:"Tataviam occupation from ~450 CE to Spanish missionization (~1797). Pictographs likely 500-1200 CE.",
   makers:"Tataviam (Alliklik) — Takic Uto-Aztecan speakers. Named 'people facing the sun' by Kitanemuk neighbors. Some paintings could be mistaken for Chumash if seen out of geographic context (King 1981:41).",
   meaning:"Shamanic/ceremonial. The Datura blossom motif suggests vision quest imagery from Jimsonweed ceremonies shared with Chumash. The site is near the major Tataviam village of Mapipinga.",
   correlates:"Closest to Chumash (especially Ventureño Chumash) style and scale; also Kawaiisu.",
   sources:"Lee & Hyder 1991; King 1981; Hudson 1982; Knight (PCAS)"},

  // --- KAWAIISU ---
  {name:"Kawaiisu Monolith Site (CA-Ker-93)", tribe:"Kawaiisu", lat:35.13, lng:-118.45,
   style:"Small-scale paintings on very rough granite boulder surfaces. Designs feature outlining of one color with another. Unique shade of green pigment not found at any other sites in region.",
   motifs:"Split-headed figures, pelts, snake with dots, bear(?) paw, figure made with dashes, pectoral/lunate design, linked circles, bug-like forms. One motif resembles Chumash paintings at Hurricane Deck (CA-SBa-1632).",
   colors:"Red, black, white, yellow, PLUS unique earth-green pigment. Five-color palette is exceptional.",
   rockType:"Granite boulders and bedrock shelters in the Tehachapi Mountains — crystalline igneous rock with rough surfaces that may explain small painting scale.",
   dating:"Kawaiisu occupation 2,000+ years. Tomo-Kahni village site nearby occupied for millennia. Pictographs likely 500-1500 CE. Rock carvings at some sites may predate Kawaiisu presence.",
   makers:"Kawaiisu (Nuwä) — Southern Numic Uto-Aztecan speakers. 'The People.' Peaceful hunter-gatherers of the Tehachapi Mountains between the Mojave Desert and San Joaquin Valley.",
   meaning:"Shamanic vision quest imagery. Kawaiisu legend says touching pictographs can cause blindness. The 'Teddy Bear' figure at CA-Ker-508 is linked to mythological stories. Pictographs seen as living and constantly changing by Kawaiisu people.",
   correlates:"Shares elements with Yokuts (linked circles, split-heads, lunate forms), Chumash (bug-like forms, outlining), AND Tübatulabal (rainbow/curved lines, bear paws).",
   sources:"Lee & Hyder 1991; Sutton 1982; Zigmond 1980; CA State Parks Tomo-Kahni"},

  {name:"Teddy Bear Cave (CA-Ker-508)", tribe:"Kawaiisu", lat:35.10, lng:-118.55,
   style:"Small shelter with paintings on ceiling and walls. Red snake figure on ceiling, anthropomorphic 'Teddy Bear' figure, bighorn sheep, bug-like elements.",
   motifs:"Long red snake, 'Teddy Bear' anthropomorph (possibly supernatural being from Kawaiisu mythology), devil anthropomorph, turtle/bug element, bighorn sheep — one of few representational sheep in the region.",
   colors:"Red, black, white.",
   rockType:"Granite rock shelter in the Tehachapi Mountains.",
   dating:"Estimated 500-1500 CE based on artifact associations.",
   makers:"Kawaiisu (Nuwä). Mark Q. Sutton (1982) connected the Teddy Bear motif to specific Kawaiisu mythological narratives.",
   meaning:"Linked to Kawaiisu creation/mythological stories. Sutton documented connections between the 'Teddy Bear' image and stories about supernatural beings. Site also used for storage (storage pits found archaeologically).",
   correlates:"Snake and bug elements connect to broader south-central California pictograph tradition.",
   sources:"Sutton 1982 (JCGBA); Lee & Hyder 1991"},

  // --- TÜBATULABAL ---
  {name:"Tübatulabal Site, Lake Isabella (CA-Ker-17)", tribe:"Tübatulabal", lat:35.65, lng:-118.48,
   style:"Large-scale paintings approaching Yokuts size. Mostly abstract with few representational forms. Red and white colors dominant. Sites more than 5 km west of Sierra Nevada crest conform to Tübatulabal pattern.",
   motifs:"Pelts, sun disk, split-headed figures, bear(?) paw, vertical snake(?), curved rainbow-like lines similar to Kawaiisu and Vasquez Rocks. Possible ring-tailed cat shown in profile — the most unusual motif. Fork-headed figures. Possible solstice ceremony markers.",
   colors:"Red (hematite), white (gypsum/clay). Black less common. Large-scale application.",
   rockType:"Granite boulders and rock shelters in the southern Sierra Nevada foothills near Lake Isabella. The Kern River canyon provided abundant granite surfaces.",
   dating:"Tübatulabal territory occupied for thousands of years. Rock art sites estimated 500-1500 CE. Harper-Slaboszewicz (1982) suggests some motifs at CA-Ker-17 may indicate winter solstice observance.",
   makers:"Tübatulabal — a language isolate within the Uto-Aztecan family (its own branch). The only people who spoke this unique language. Lived along the Kern River from Lake Isabella to the crest of the southern Sierra.",
   meaning:"Ceremonial/astronomical. The possible solstice markers suggest calendrical use alongside shamanic imagery. Correlations with Western Mono paintings noted beyond the study area.",
   correlates:"Closest to Yokuts (large scale, pelts, fork-headed figures) and Kawaiisu (rainbow curves, bear paws). Also shares snake motifs and outlined anthropomorphic heads with Tataviam.",
   sources:"Lee & Hyder 1991; Moratto 1984; Schiffman 1977; Harper-Slaboszewicz 1982"},

  // --- YOKUTS ---
  {name:"Tule River Painted Rock (CA-Tul-19)", tribe:"Yokuts", lat:36.032, lng:-118.715,
   style:"ENORMOUS paintings — some of the largest pictographs in California. Broad outlines, vivid polychrome panels. Yellow and red dashes nearly cover one panel. Painted on ceiling and walls of granite rock shelter.",
   motifs:"The famous Hairy Man (Mayak Datat) — a 2.6m tall red/black/white figure with long hair and weeping eyes, part of a family group with mother and child. Also: coyote, beaver, bear, frog, caterpillar, centipede, eagle, condor, lizard, split-headed humans, 'Big Foot' anthropomorph, concentric circles, grids, parallel lines.",
   colors:"Red (hematite ochre from valley deposits), black (charcoal/clay mix), white (earthy mineral), yellow (ocherous clay). Four-color polychrome palette.",
   rockType:"Granite rock shelter — an immense boulder (20 feet thick, 30 feet long) naturally broken to create a passage. Adjacent to the Tule River with bedrock mortars, pitted boulders, and village midden. Sierra Nevada foothill granite.",
   dating:"Clewlow (1978) estimated paintings ~500 CE, possibly as old as 1 CE or as young as 1200 CE. Village archaeologically occupied ~500 years ago. Pictographs likely 500-1000 years old.",
   makers:"Yokuts — Wukchumni or Yowlumne bands, Penutian language speakers. The Tule River Tribe today is a mix of Yokuts, Monache (Mono), and Tübatulabal ancestry. The Hairy Man tradition is shared across Penutian-speaking groups.",
   meaning:"Creation story imagery. The Hairy Man pictograph illustrates Yokuts creation narratives where various animals (including Hairy Man) created People. Hairy Man is sad because he was told to leave humans alone. Yokuts stories describe Hairy Man as a nocturnal forest creature who whistles to lure people. Site is both sacred ceremonial space and village center.",
   correlates:"Animal figures frequently outlined with white — almost identical to Santa Barbara/Chumash figures. Insect figures same type as Chumash. Ghost-like figures, large scale, and yellow pigment are distinctively Yokuts.",
   sources:"Lee & Hyder 1991; Strain 2012 (ISU); Latta 1949; Clewlow 1978; Hoffman 1882; Merriam 1903"},

  {name:"Rocky Hill Site (CA-Tul-63)", tribe:"Yokuts", lat:36.18, lng:-119.05,
   style:"Large-scale polychrome paintings. Pelt-like figures, multi-legged creatures, centipedes. Features similar to both Tübatulabal and Chumash elements.",
   motifs:"Pelt-like figures, centipedes, lizards, concentric circles, parallel lines, multi-legged creatures, split-headed humans. Large snake forms.",
   colors:"Red, black, white, yellow.",
   rockType:"Granite boulders in the Sierra Nevada foothills of Tulare County.",
   dating:"Estimated 500-1500 CE. Grant (1981:22) noted affinity with Tübatulabal paintings.",
   makers:"Yokuts — Southern Valley or Foothill Yokuts bands. Grant described these as 'featureless pelt forms, abstracts similar to Great Basin styles, centipedes, concentric circles, and grids.'",
   meaning:"Ceremonial/shamanic. Large sites near major Yokuts villages and along well-traveled trails.",
   correlates:"Affinity with Tübatulabal patterns. Abstracts similar to Great Basin styles.",
   sources:"Lee & Hyder 1991; Grant 1981"},

  {name:"Yokuts Snake Panel (CA-Tul-32)", tribe:"Yokuts", lat:36.10, lng:-118.95,
   style:"Large snake forms crossing entire panels, ghost-like figures, and a curious abstract form that may be anthropomorphic.",
   motifs:"Large snakes, ghost-like figures, abstract multi-line forms with split-head elements. Possible beaver-with-paddle motif (unique to Yokuts).",
   colors:"Red, black, white, yellow.",
   rockType:"Granite rock surfaces in the Sierra Nevada foothills.",
   dating:"Estimated 500-1500 CE.",
   makers:"Yokuts — Foothill Yokuts bands.",
   meaning:"Shamanic imagery. The snake is a universal motif across all six tribal groups in the region, suggesting shared symbolic significance possibly related to Datura visions.",
   correlates:"Snake motifs shared with all five other tribal traditions in the region.",
   sources:"Lee & Hyder 1991"},

  {name:"Tule River Polychrome Panel (CA-Tul-93)", tribe:"Yokuts", lat:36.05, lng:-118.68,
   style:"Notable for yellow and red dashes of color that nearly cover one entire panel — creating a dense, vibrant visual effect unique among all sites.",
   motifs:"Dense fields of yellow and red dashes, overlaid with figures. One of the most colorful panels in the region.",
   colors:"Predominantly yellow and red dashes — extensive use of yellow pigment is distinctly Yokuts.",
   rockType:"Granite rock shelter along the Tule River.",
   dating:"Estimated 500-1500 CE.",
   makers:"Yokuts — Wukchumni or Yowlumne bands.",
   meaning:"The intensive use of color may represent Datura-vision imagery — hallucinogenic experiences often described as involving brilliant colors and geometric patterns.",
   correlates:"Yellow pigment intensity is distinctly Yokuts — no other group in the study used yellow so extensively.",
   sources:"Lee & Hyder 1991"},

  // --- CHUMASH ---
  {name:"Painted Rock, Carrizo Plain (CA-SLO-79)", tribe:"Chumash/Yokuts shared", lat:35.154, lng:-119.866,
   style:"THE BORDERLINE SITE — both Chumash and Yokuts artists painted here, each maintaining their own distinct style. Horseshoe-shaped marine sandstone formation, 250 feet across and 45 feet tall. Interior alcove covered with pictographs spanning 3,000-4,000 years.",
   motifs:"CHUMASH panels: small scale, fine lines, tiny dots, mandalas, bifurcated forms, elaborate polychrome. YOKUTS panels: large scale, broad outlines, pelt-like figures resembling those from Tulare area. In some cases, Chumash-style panels sit directly adjacent to Yokuts-style panels. A Chumash painting high in a notch: small, fine lines, tiny dots, mandala. Nearby Yokuts figures: broad lines, larger, shapes typical of Tulare.",
   colors:"Red (hematite), black (charcoal), white (yucca-based pigments), some yellow, green, and blue. Applied with rodent-tail hair brushes or finger painting.",
   rockType:"Marine sandstone — a smooth horseshoe-shaped formation of Miocene-age marine sedimentary rock rising from the Carrizo Plain. The protected interior alcove provides ideal conditions for paint preservation. Elevation 1,900 feet.",
   dating:"3,000-4,000+ years of use. Pictographs span multiple periods. Still used for ceremonies by indigenous communities today.",
   makers:"Chumash, Yokuts, and possibly Salinan peoples. Lee & Hyder reject the idea that painting originated among Yokuts and diffused to Chumash. Instead, both traditions developed independently and converged here because the Carrizo Plain was open territory.",
   meaning:"Sacred ceremonial site used by multiple peoples. The Temblor Range along the Chumash-Yokuts border was open territory where people traded, intermarried, and shared group ceremonials and hunts. Shamanic/Datura ritual imagery. Still actively used for ceremonies — site closed March-May except guided tours.",
   correlates:"The proof case for Lee & Hyder's thesis: rock art style as cultural communication. Two strong painting styles came together, overlapped, but each maintained its own identity.",
   sources:"Lee & Hyder 1991; Grant 1965, 1978; Hyder et al. 1986; BLM Carrizo Plain"},

  {name:"Sierra Madre Ridge Sites (CA-SLO-100)", tribe:"Chumash", lat:35.05, lng:-119.95,
   style:"Purely Chumash style — no intrusive elements. Paintings range from simple to complex, from plain red or black to polychrome. Tiny figures with dot embellishments, mandalas, bifurcated elements. Free-floating, little superposition.",
   motifs:"Mandalas, sun disks, pelts, bug-like forms with antennae and fancy tails, dots, lizards, split-headed figures. The 'aquatic motif' is unique to Chumash. Designs placed in small cavities in rock.",
   colors:"Red, black, white. Yellow rare. One site (CA-Ker-77) has blue-green pigment (possibly azurite/malachite or Mission-era introduced pigment).",
   rockType:"Sandstone formations in the Sierra Madre Mountains south of the Carrizo Plain. The Santa Barbara region's Chumash sites are primarily in sandstone caves and shelters in the mountains.",
   dating:"Radiocarbon on Santa Barbara area pictograph pigment: 'not over 2,000 years old' (Grant). Most elaborate paintings likely 500-1500 CE. Swordfish Cave: three periods including ~3,550 years ago.",
   makers:"Chumash — the most complex body of rock art of any group in the study. Shamans (priests/ritual specialists) are thought to have created paintings to influence supernatural beings. Chumash paint was only allowed to be traded by shamans.",
   meaning:"Religious/astronomical. Chumash rock art may depict cosmological concepts, vision quest imagery, solstice/equinox markers, mythic figures, and abstract concepts. Painted Cave near Santa Barbara may record a 1677 solar eclipse. Pedro Ygnacio learned from elders that circular designs represented tomols (canoes) taking souls to Shimilaqsha (afterworld), and centipede-like figures illustrated the cause of death.",
   correlates:"Closest correlate is Yokuts — the only other group with similar cultural complexity. Chumash style is the most distinctive: bilateral symmetry, meticulous detail, fine-line precision, tiny dots.",
   sources:"Lee & Hyder 1991; Grant 1965; Lee 1979, 1984; Hyder 1989; SB Museum of Natural History"},

  {name:"Chumash Painted Cave (Alaxuluxen)", tribe:"Chumash", lat:34.541, lng:-119.787,
   style:"Among the finest Chumash rock art. Small sandstone cave with ceiling covered in elaborate polychrome paintings. Four identified painting styles showing evolution over centuries.",
   motifs:"Circular mandalas (possibly representing tomols/canoes to afterworld), anthropomorphs with outstretched arms, black-and-white banded centipedes, cross-hatching, celestial symbols. Possible 1677 solar eclipse depiction.",
   colors:"Red ochre, black charcoal, glistening white, with multiple layered styles: Style I (charcoal only, narrow lines); Style II (thick red ochre geometrics); Style III (complex polychrome imagery — majority); Style IV (most recent, fine detail).",
   rockType:"Sandstone cave — towering sandstone boulders in the Santa Ynez Mountains. Miocene-age marine sandstone with smooth interior surfaces ideal for painting.",
   dating:"Ceremonies from at least 1600s, but paintings span centuries and possibly millennia. Four styles identified from oldest (charcoal cross-hatching) to newest (elaborate polychrome). Ceremonial use discontinued ~1700s with Spanish contact.",
   makers:"Barbareño Chumash. Population over 15,000 before European contact. The cave sits along a major trail from the capital city Syukhtun (Santa Barbara) over San Marcos Pass. Named 'Alaxuluxen' by Chumash elder Ernestine Ygnacio-De Soto's great-great grandmother Maria Ygnacio.",
   meaning:"Sacred ceremonial site. Meanings passed down through generations but largely disrupted by 300 years of colonization. Elder Ernestine Ygnacio-De Soto says the culture and language are 'sleeping, not lost.' Great-uncle Pedro Ygnacio learned that paintings represented tomols carrying souls to the afterworld, with centipedes illustrating cause of death. Now a State Historic Park (est. 1976) — NRHP listed 1972.",
   correlates:"Quintessential Chumash style — the benchmark against which other traditions are compared.",
   sources:"CyArk 3D documentation; CA State Parks; Archaeology Magazine 2024; Grant 1965"},

  {name:"Hurricane Deck (CA-SBa-1632)", tribe:"Chumash", lat:34.78, lng:-119.80,
   style:"Remote Chumash site in the San Rafael Mountains. Features dashes-formed designs that share similarities with Kawaiisu paintings at CA-Ker-93.",
   motifs:"Designs formed by red dashes, elaborate geometric forms. One of the sites showing connections between Chumash and Kawaiisu artistic traditions.",
   colors:"Red, black, white.",
   rockType:"Sandstone formations in the San Rafael Mountains, Cuyama Valley region.",
   dating:"Likely 500-1500 CE.",
   makers:"Chumash — interior mountain bands. Grant recorded 41 painted rock art sites in the Cuyama Valley region where the Sisquoc River flows between the San Rafael and Sierra Madre Mountains.",
   meaning:"Shamanic/ceremonial. Located in the highest parts of mountainous Chumash territory.",
   correlates:"Dash-formed designs connect to both Kawaiisu (CA-Ker-93) and Yokuts techniques.",
   sources:"Lee & Hyder 1991; Grant 1965"},

  {name:"Mount Piños / San Emigdio (CA-Ker-77)", tribe:"Chumash", lat:34.84, lng:-119.13,
   style:"Chumash site near Mount Piños with unique blue-green pigment. This site sits at the intersection of Chumash, Kawaiisu, and Yokuts territories.",
   motifs:"Chumash-style designs with rare blue-green coloring. Designs formed by red dashes that resemble those at Hurricane Deck and Kawaiisu CA-Ker-93.",
   colors:"Red, black, white, plus rare light-green or blue-green pigment (possibly azurite/malachite copper carbonates, or possibly Mission-era introduced pigment — not scientifically analyzed).",
   rockType:"Sandstone formations near the Mount Piños area.",
   dating:"Possibly pre-contact, though blue-green pigment origin debated.",
   makers:"Chumash — possibly Ventureño Chumash bands occupying the highest mountain territory.",
   meaning:"Ceremonial. Located near the sacred mountain Iwihinmu (Mount Piños), the highest point in Chumash territory at 8,831 feet. A place of great spiritual significance.",
   correlates:"Bridge site connecting Chumash to Kawaiisu territory. Blue-green pigment unique in region.",
   sources:"Lee & Hyder 1991; Lee 1979; Grant 1965"},

  // --- KITANEMUK ---
  {name:"Kitanemuk Village Site (CA-Ker-129)", tribe:"Kitanemuk", lat:34.92, lng:-118.52,
   style:"The least documented tradition. Only four elements, two possibly anthropomorphic. Much smaller site than others. Assigned to 'Southern California Rectilinear Abstract' style (Hedges 1973).",
   motifs:"Four recorded elements — two possibly anthropomorphic. Very limited corpus. Sutton (1982a:31) surveyed the sites briefly.",
   colors:"Not well documented — likely red, black, white based on regional patterns.",
   rockType:"Granite boulders in the western Tehachapi/Liebre Mountains area. Possibly near a major Kitanemuk village.",
   dating:"Kitanemuk occupation estimated several thousand years. Rock art poorly dated.",
   makers:"Kitanemuk — Takic Uto-Aztecan speakers. Their social organization resembled southern neighbors but mythology aligned with northern/western neighbors (Blackburn & Bean 1978). Fought with Tataviam, unfriendly toward Yokuts.",
   meaning:"Unknown due to limited documentation. Kitanemuk rock art stands apart as the least studied tradition in the region.",
   correlates:"Assigned to Southern California Rectilinear Abstract style — distinct from the 'spectacular geometric polychrome' tradition shared by the other five groups.",
   sources:"Lee & Hyder 1991; Sutton 1982a; Hedges 1973; Blackburn & Bean 1978"},

  // --- BORDERLINE DISPUTED SITE ---
  {name:"Temblor Range Disputed Site (CA-Ker-160)", tribe:"Chumash/Yokuts disputed", lat:35.22, lng:-119.65,
   style:"A 'borderline' site declared Chumash by Grant (1965) and Yokuts by Sanger (1987). Illustrates the impossibility of assigning borderland sites to a single culture based on rock art alone.",
   motifs:"Mixed elements — some art closely resembles Chumash, but the site is within Yokuts territory. Likely used by both groups, as were other sites in the Carrizo Plain region.",
   colors:"Polychrome — Chumash and Yokuts color palettes both represented.",
   rockType:"Temblor Range formation — sedimentary rocks along the Chumash-Yokuts boundary.",
   dating:"Likely 500-1500 CE.",
   makers:"Both Chumash and Yokuts. Lee & Hyder argue the site was used by both groups — the Temblor Range was the ethnographic boundary but also open territory for interaction.",
   meaning:"The debate over this site is itself evidence of the cultural blending Lee & Hyder document. The boundary was permeable, with people trading, intermarrying, and sharing ceremonies.",
   correlates:"Shares features of both Chumash (scale, technique) and Yokuts (motifs, placement).",
   sources:"Lee & Hyder 1991; Grant 1965; Sanger 1987"}
];

// Render south-central rock art sites
scRockArtSites.forEach(s => {
  // Determine petro/picto from style text
  const icon = raIcon(s.style + ' ' + s.motifs, RA_COLORS.scCal, 10);
  const popupContent = `
    <div style="max-width:440px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:#FF5722;margin:0 0 4px;font-size:15px;">${s.name}</h4>
      <div style="font-size:10px;color:#aaa;margin-bottom:6px;">${s.tribe} · ${s.dating}</div>
      <div style="font-size:12px;color:#ccc;line-height:1.55;">
        <div style="margin-bottom:6px;"><b style="color:#FF8A65;">Rock Surface:</b> ${s.rockType}</div>
        <div style="margin-bottom:6px;"><b style="color:#FFB74D;">Colors & Pigments:</b> ${s.colors}</div>
        <div style="margin-bottom:6px;"><b style="color:#FFCC80;">Style:</b> ${s.style}</div>
        <div style="margin-bottom:6px;"><b style="color:#FFF176;">Motifs:</b> ${s.motifs}</div>
        <div style="margin-bottom:6px;"><b style="color:#A5D6A7;">Who Made It:</b> ${s.makers}</div>
        <div style="margin-bottom:6px;"><b style="color:#81D4FA;">Meaning:</b> ${s.meaning}</div>
        <div style="margin-bottom:6px;"><b style="color:#CE93D8;">Style Correlates:</b> ${s.correlates}</div>
      </div>
      <div style="margin-top:6px;font-size:10px;color:#888;">Sources: ${s.sources}</div>
    </div>`;
  L.marker([s.lat, s.lng], {icon}).addTo(L_groups.scRockArt).bindPopup(popupContent, {maxWidth:460});
});

// --- STYLE INTERACTION ZONES (polygons showing where traditions overlap) ---
const interactionZones = [
  {name: "Carrizo Plain Borderland", color: "#FF5722", opacity: 0.10,
   desc: "Chumash-Yokuts interaction zone — where both traditions painted side by side at Painted Rock. Open territory for trade, intermarriage, and shared ceremonies.",
   coords: [[35.35,-120.15],[35.35,-119.55],[34.95,-119.55],[34.95,-120.15]]},
  {name: "Tehachapi Crossroads", color: "#4CAF50", opacity: 0.08,
   desc: "Kawaiisu-Kitanemuk-Tübatulabal convergence. Kawaiisu rock art shows elements borrowed from all neighboring traditions — the most eclectic style in the region.",
   coords: [[35.35,-118.75],[35.35,-118.20],[34.85,-118.20],[34.85,-118.75]]},
  {name: "Southern Sierra Blend", color: "#FFC107", opacity: 0.08,
   desc: "Yokuts-Tübatulabal-Kawaiisu zone. Intermarriage was so extensive that Kroeber said it was 'impossible to assign an exact habitat' to any group here.",
   coords: [[36.20,-119.10],[36.20,-118.40],[35.60,-118.40],[35.60,-119.10]]},
  {name: "Ventureño Corridor", color: "#9C27B0", opacity: 0.08,
   desc: "Tataviam-Chumash-Yokuts borderland. Tataviam rock art is so similar to Chumash that experts debate attribution. Vasquez Rocks sit along this cultural corridor.",
   coords: [[34.65,-118.80],[34.65,-118.10],[34.35,-118.10],[34.35,-118.80]]}
];

interactionZones.forEach(z => {
  L.polygon(z.coords, {
    color: z.color, weight: 2, opacity: 0.5, fillColor: z.color, fillOpacity: z.opacity, dashArray: '8,4'
  }).addTo(L_groups.scRockArt).bindPopup(`<div style="max-width:320px;"><h4 style="color:${z.color};margin:0 0 6px;">🎭 ${z.name}</h4><div style="font-size:12px;color:#ccc;line-height:1.5;">${z.desc}</div><div style="font-size:10px;color:#888;margin-top:4px;">Source: Lee & Hyder 1991</div></div>`, {maxWidth:340});
});

// --- ROCK ART PIGMENT LEGEND (as a map control) ---
const pigmentLegendControl = L.control({position: 'bottomleft'});
pigmentLegendControl.onAdd = function() {
  const div = L.DomUtil.create('div', '');
  div.id = 'pigment-legend';
  div.style.cssText = 'background:rgba(20,20,40,0.92);padding:8px 12px;border-radius:8px;border:1px solid rgba(255,87,34,0.3);font-family:Source Sans Pro,sans-serif;display:none;max-width:200px;margin-bottom:8px;';
  div.innerHTML = '<div style="color:#FF5722;font-weight:700;font-size:11px;margin-bottom:4px;cursor:pointer;user-select:none;" onclick="var b=this.nextElementSibling;b.style.display=b.style.display===\'none\'?\'block\':\'none\';this.querySelector(\'span\').textContent=b.style.display===\'none\'?\'▶\':\'▼\'">Pigment Sources <span style="float:right;font-size:9px;">▶</span></div>' +
    '<div style="font-size:9px;color:#ccc;line-height:1.6;display:none;">' +
    '<span style="color:#E53935;">■</span> <b>Red:</b> Hematite (iron oxide/red ochre)<br>' +
    '<span style="color:#212121;">■</span> <b>Black:</b> Charcoal or manganese oxide<br>' +
    '<span style="color:#EEEEEE;">■</span> <b>White:</b> Gypsum, clay, or diatomaceous earth<br>' +
    '<span style="color:#FDD835;">■</span> <b>Yellow:</b> Limonite (yellow ochre) — extensive Yokuts use<br>' +
    '<span style="color:#4CAF50;">■</span> <b>Green:</b> Unique earth pigment — Kawaiisu only<br>' +
    '<span style="color:#00ACC1;">■</span> <b>Blue-green:</b> Azurite/malachite? — Chumash only<br>' +
    '<div style="margin-top:4px;border-top:1px solid rgba(255,255,255,0.1);padding-top:4px;">' +
    '<b>Binders:</b> Water, animal fat, plant juices<br>' +
    '<b>Brushes:</b> Rodent-tail hair, yucca fiber, fingers<br>' +
    '<b>Applied to:</b> Sandstone, granite shelters</div></div>';
  return div;
};
pigmentLegendControl.addTo(map);

// Rock Art Classification Legend
const rockArtLegendControl = L.control({position: 'bottomright'});
rockArtLegendControl.onAdd = function() {
  const div = L.DomUtil.create('div', '');
  div.id = 'rockart-legend';
  div.style.cssText = 'background:rgba(20,20,40,0.92);padding:8px 12px;border-radius:8px;border:1px solid rgba(255,107,53,0.3);font-family:Source Sans Pro,sans-serif;max-width:220px;margin-bottom:8px;';
  div.innerHTML =
    '<div style="color:#FF6B35;font-weight:700;font-size:11px;margin-bottom:4px;cursor:pointer;user-select:none;" onclick="var b=this.nextElementSibling;b.style.display=b.style.display===\'none\'?\'block\':\'none\';this.querySelector(\'span\').textContent=b.style.display===\'none\'?\'▶\':\'▼\'">Rock Art Legend <span style="float:right;font-size:9px;">▼</span></div>' +
    '<div style="font-size:9px;color:#ccc;line-height:1.7;">' +
    '<div style="margin-bottom:2px;font-weight:600;color:#aaa;">By Tradition:</div>' +
    '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#D32F2F;margin-right:4px;vertical-align:middle;"></span> PCN (pre-contact, 3k–8k BP)<br>' +
    '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#FF6B35;margin-right:4px;vertical-align:middle;"></span> Bay Area (tribal-era)<br>' +
    '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#FF7043;margin-right:4px;vertical-align:middle;"></span> Great Basin (Heizer & Baumhoff)<br>' +
    '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#FF5722;margin-right:4px;vertical-align:middle;"></span> South-Central CA (Lee & Hyder)<br>' +
    '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#FF6B9D;margin-right:4px;vertical-align:middle;"></span> Joshua Tree<br>' +
    '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#FFD600;margin-right:4px;vertical-align:middle;"></span> Winnemucca (oldest in N. Am.)<br>' +
    '<div style="margin:4px 0 2px;border-top:1px solid rgba(255,255,255,0.1);padding-top:4px;font-weight:600;color:#aaa;">By Type:</div>' +
    '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#FF6B35;margin-right:4px;vertical-align:middle;"></span> Petroglyph (carved) — solid<br>' +
    '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:transparent;border:2px solid #FF6B35;margin-right:4px;vertical-align:middle;"></span> Pictograph (painted) — ring<br>' +
    '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:linear-gradient(135deg,#FF6B35 50%,transparent 50%);border:2px solid #FF6B35;margin-right:4px;vertical-align:middle;"></span> Both — half<br>' +
    '</div>';
  return div;
};
rockArtLegendControl.addTo(map);

// Show/hide pigment legend with scRockArt layer
map.on('overlayadd overlayremove layeradd layerremove', function() {
  const el = document.getElementById('pigment-legend');
  if (el) el.style.display = map.hasLayer(L_groups.scRockArt) ? 'block' : 'none';
});
document.getElementById('pigment-legend').style.display = 'block';


