// ============================================================
// TRIBE TERRITORY INFO POPUPS — Part 1
// Rich expandable popups on territory polygon clicks
// ============================================================

function tribePopup(o) {
  const sects = (o.sections||[]).map(s => `
    <div style="margin-top:8px;">
      <div onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none';this.querySelector('span').textContent=this.nextElementSibling.style.display==='none'?'▸':'▾'"
           style="cursor:pointer;font-size:12px;font-weight:bold;color:${o.color};user-select:none;">
        <span>▸</span> ${s.title}
      </div>
      <div style="display:none;font-size:11.5px;color:#ddd;line-height:1.5;padding:4px 0 4px 12px;">${s.content}</div>
    </div>`).join('');
  const mod = o.modernStatus ? `
    <div style="margin-top:8px;padding:6px 8px;background:rgba(34,139,34,0.15);border-left:3px solid #228B22;border-radius:3px;">
      <div style="font-size:10px;font-weight:bold;color:#228B22;text-transform:uppercase;letter-spacing:1px;">Today</div>
      <div style="font-size:11.5px;color:#ddd;line-height:1.4;margin-top:3px;">${o.modernStatus}</div>
    </div>` : '';
  return `<div style="max-width:380px;max-height:500px;overflow-y:auto;">
    <h3 style="color:${o.color};margin:0;font-size:16px;">${o.name}</h3>
    ${o.altName?`<div style="font-size:11px;color:#aaa;font-style:italic;margin-bottom:2px;">${o.altName}</div>`:''}
    <div style="font-size:10px;color:#888;margin-bottom:6px;">
      ${o.language?`Language: <span style="color:#ccc">${o.language}</span> · `:''}
      ${o.family?`Family: <span style="color:#ccc">${o.family}</span>`:''}
      ${o.population?` · Pop.: <span style="color:#ccc">${o.population}</span>`:''}
    </div>
    ${o.territory?`<div style="font-size:10px;color:#999;margin-bottom:8px;">Territory: ${o.territory}</div>`:''}
    <p style="font-size:12px;color:#eee;line-height:1.5;margin:0 0 4px;">${o.summary}</p>
    ${sects}${mod}
    ${o.sources?`<div style="font-size:9px;color:#666;margin-top:8px;border-top:1px solid #333;padding-top:4px;">${o.sources}</div>`:''}
  </div>`;
}

// ========== MODOC ==========
L.polygon([[42.20,-122.20],[42.20,-121.50],[42.20,-120.80],[42.10,-120.30],[41.90,-120.10],[41.70,-120.20],[41.50,-120.40],[41.30,-120.80],[41.10,-121.10],[41.00,-121.40],[41.20,-121.60],[41.40,-121.80],[41.60,-122.00],[41.80,-122.10],[42.00,-122.20]],
{color:'transparent',fillColor:'#CD853F',fillOpacity:0.03,weight:0,interactive:true})
.bindPopup(tribePopup({
  name:'Modoc', altName:'Moatokni Maklaks — "People of the South"', color:'#CD853F',
  language:'Klamath-Modoc (Lutuamian)', family:'Plateau Penutian',
  population:'~500 pre-contact; ~5,500 Modoc & Klamath descendants today',
  territory:'Tule Lake, Lost River, Clear Lake (Modoc Co.), Lava Beds, Modoc Plateau',
  summary:'Lake-dwelling people of the volcanic plateau. Master fishers, waterfowl hunters, and tule weavers who thrived in the rich wetlands of Tule Lake and the Klamath Basin for at least 6,000 years. Their name for themselves was simply <i>maklaks</i> — "people."',
  sections:[
    {title:'Way of Life', content:'The Modoc lived in semi-subterranean earth lodges in winter — some up to 50 feet across, entered through a roof smoke-hole via a notched log ladder. In summer they used lighter tule-mat shelters. They fished for salmon, suckers, and mullet using weirs and spears, hunted waterfowl in vast marshes, gathered wocas (water lily) seeds ground into flour, and made nearly everything from tule reeds — baskets, mats, shoes, leggings, hats, and lightweight canoes. Organized into three bands: Gumbatwas ("people of the west"), Kokiwas ("people of the far country"), and Paskanwas ("river people").'},
    {title:'Rock Art & Creation Story', content:'Petroglyph Point — a former island in Tule Lake — contains <b>5,000+ petroglyphs</b>, one of the largest concentrations in North America. Predominantly geometric and abstract — uniquely different from most western rock art. This is the center of the Modoc creation story: Kumush, the creator, climbed out of the underworld here carrying a basket of bones, which he threw to the ground shouting "Indian bones!" — creating the Modoc and all other tribes. Artists may have paddled out in canoes to carve the soft volcanic tuff over thousands of years.'},
    {title:'The Modoc War (1872–73)', content:'The only major Indian war fought on California soil. Forced onto the Klamath Reservation with their enemies, Kintpuash (Captain Jack) and 53 warriors retreated to the Lava Beds, holding off 600+ U.S. Army troops for months in the natural lava fortifications. After General Canby was killed during peace talks, the army prosecuted the war aggressively. Captain Jack was executed; survivors exiled to Oklahoma. The war was the most costly per-capita Indian war the U.S. military ever fought.'},
    {title:'Tule Lake — Lost Wetland', content:'Once a vast lake teeming with waterfowl, fish, and wocas, Tule Lake was drained in the early 1900s for agriculture. During WWII, the Tule Lake War Relocation Center interned 18,700 Japanese Americans on the drained lakebed — on Modoc ancestral land. Some internees carved Japanese characters into boulders at Petroglyph Point. In 1924, Forest Service officers found the former lakebed "literally covered with human bones for several hundred yards" — remains of generations of Modoc who had lived along the shore.'}
  ],
  modernStatus:'Two federally recognized tribes: the Klamath Tribes (Oregon, ~5,500 members, recognition restored 1986) and the Modoc Nation (Oklahoma, ~200 members). In 2021, the Modoc Nation launched a Homelands Program, purchasing ~4,000 acres in Siskiyou/Modoc counties to reconnect with ancestral lands.',
  sources:'Kroeber 1925; Stern 1998; NPS; Oregon Encyclopedia; Clewlow 1968; Britannica; Modoc NF'
})).addTo(L_groups.modocVillages);

// ========== KARUK ==========
L.polygon([[41.85,-123.70],[41.90,-123.40],[41.85,-123.10],[41.70,-122.90],[41.50,-123.00],[41.40,-123.20],[41.45,-123.40],[41.55,-123.55],[41.70,-123.70]],
{color:'transparent',fillColor:'#B8860B',fillOpacity:0.03,weight:0,interactive:true})
.bindPopup(tribePopup({
  name:'Karuk', altName:'Káruk Va\'áraaras — "Upriver People" · "Middle of the World People"', color:'#B8860B',
  language:'Karuk (isolate, possibly Hokan)', family:'Hokan (debated)',
  population:'~1,500 pre-contact; 6,000+ enrolled today (2nd largest tribe in CA)',
  territory:'Middle Klamath River, Happy Camp to Bluff Creek, Salmon River (~1M acres)',
  summary:'The "fix the world" people of the middle Klamath. Master salmon fishers, fire managers, and basket weavers who maintained 100+ villages along a 40-mile stretch of river. Their World Renewal ceremonies (Pikyávish) are among the most elaborate in California.',
  sections:[
    {title:'Way of Life', content:'Permanent villages of redwood plank houses lined the Klamath River. Salmon and acorns were the dietary foundations. The Karuk developed sophisticated dip-net fishing at falls and rapids, managed forests with prescribed burns (one of the few California tribes to sow tobacco), and traded obsidian and dentalium shells. Villages were family-based and politically autonomous — there were no chiefs or centralized government — connected through marriage, seasonal gatherings, and ceremony.'},
    {title:'World Renewal Ceremonies', content:'The Pikyávish ceremonies — White Deerskin Dance, Jump Dance, Brush Dance, and First Salmon Ceremony — are performed at sacred sites along the river. Katimin (Katimiîn), where the Salmon and Klamath rivers meet, is the "Center of the World." These ceremonies literally "fix the earth," renewing the world for another year. The Jump Dance was lost for nearly a century before being revived in the 1990s. In a 1996 ceremony, nine Karuk men in deerskin skirts and woodpecker-scalp headdresses performed the Jump Dance at the ancestral site for the first time in living memory.'},
    {title:'Gold Rush & Colonization', content:'Among the last California tribes contacted, the Karuk lived in remote Klamath canyons. The 1849 Gold Rush brought devastating floods of miners. California\'s 1850 legislature legalized enslavement of Native people. An estimated 9,000–16,000 Native people were killed statewide. In 1905, President Roosevelt seized Karuk lands for the Klamath Forest Reserve. The tribe was never given a reservation — receiving federal recognition only in 1979.'},
    {title:'Klamath Dam Removal (2024)', content:'After decades of advocacy by the Karuk, Yurok, Klamath, and Modoc tribes, the <b>largest dam removal in U.S. history</b> was completed on the Klamath River in October 2024. Four dams were demolished to restore salmon runs blocked for over a century. Salmon are now swimming freely in reaches of the river unseen in generations — a profound moment for tribes whose cultures are inseparable from the fish.'}
  ],
  modernStatus:'Federally recognized since 1979 (no reservation). Since the 1970s, the tribe has repurchased ~1,660 acres including sacred Katimin (recovered 1990s). The 2024 KASL Act re-establishes the tribe as steward of sacred ceremonial landscapes. Fewer than 10 fluent first-language Karuk speakers remain; active language programs continue.',
  sources:'Kroeber 1925; Karuk Tribe; ACTA; NCIDC; LA Times 1996; USFS Klamath NF'
})).addTo(L_groups.klamathVillages);

// ========== HUPA ==========
L.polygon([[41.15,-123.80],[41.20,-123.55],[41.10,-123.35],[40.95,-123.35],[40.85,-123.50],[40.90,-123.75]],
{color:'transparent',fillColor:'#2E8B57',fillOpacity:0.03,weight:0,interactive:true})
.bindPopup(tribePopup({
  name:'Hupa (Hoopa)', altName:'Na:tinixwe — "People of the Place Where the Trails Return"', color:'#2E8B57',
  language:'Hupa (Na-Dené > Athabaskan)', family:'Athabaskan (related to Navajo & Apache)',
  population:'~1,000 pre-contact; ~3,000 enrolled today',
  territory:'Hoopa Valley along Trinity River, ~12 miles of fertile alluvial flat',
  summary:'Builders of the largest redwood plank houses in California. The Hupa thrived in the fertile Hoopa Valley — a wide, flat river terrace surrounded by mountains. They held the most elaborate ceremonial complex in California, sharing the White Deerskin Dance and Jump Dance with the Karuk and Yurok.',
  sections:[
    {title:'Way of Life', content:'Large rectangular houses of split redwood planks with round entrance holes and sunken floors. Men slept and worked in separate sweathouses heated by wood fires (not steam). Master woodworkers — carving canoes, storage boxes, and spoons from redwood and elk horn. Diet centered on salmon, sturgeon, eel, acorns, deer, and elk. A sophisticated wealth system based on dentalium shells, woodpecker scalps, and large obsidian blades governed social relations.'},
    {title:'Ceremonies', content:'The White Deerskin Dance and Jump Dance are World Renewal ceremonies — the most elaborate in California. Dancers display albino deerskins, obsidian blades up to 2 feet long, and headdresses of red woodpecker scalps representing generations of accumulated family wealth. The Brush Dance heals sick children. These ceremonies have been performed continuously for thousands of years at the same locations.'},
    {title:'Reservation History', content:'The Hoopa Valley Reservation (est. 1864) is the largest in California at ~144 sq miles. Unlike most California tribes, the Hupa were able to remain on their ancestral land. The remote location of Hoopa Valley helped preserve cultural continuity through the worst years of colonization.'}
  ],
  modernStatus:'The Hoopa Valley Tribe manages the largest reservation in California (92,000 acres) with tribal forestry, fisheries, and courts. Active language programs preserve Hupa — an Athabaskan language linking these California river people to the Navajo and Apache far to the south.',
  sources:'Goddard 1903; Kroeber 1925; NCIDC; Hoopa Valley Tribe'
})).addTo(L_groups.klamathVillages);

// ========== YUROK ==========
L.polygon([[41.65,-124.20],[41.70,-123.90],[41.55,-123.70],[41.35,-123.70],[41.20,-123.85],[41.15,-124.05],[41.05,-124.15],[41.15,-124.20],[41.40,-124.15]],
{color:'transparent',fillColor:'#4682B4',fillOpacity:0.03,weight:0,interactive:true})
.bindPopup(tribePopup({
  name:'Yurok', altName:'Oohl — from Karuk yúruk "downriver"', color:'#4682B4',
  language:'Yurok (Algic)', family:'Algic (distantly related to Algonquian of eastern N. America)',
  population:'~2,500 pre-contact; 6,500+ enrolled today (largest tribe in CA)',
  territory:'Lower Klamath River (45 miles) & coast from Trinidad to Wilson Creek',
  summary:'The largest tribe in California. Sophisticated fishers, redwood canoe builders, and holders of one of the most complex wealth and legal systems among any non-agricultural people in North America. Their Algic language is a linguistic mystery — suggesting ancient migration from the East.',
  sections:[
    {title:'Way of Life', content:'Villages of redwood plank houses lined the lower Klamath and the coast. Ocean-going redwood canoes — hollowed from single logs — were used for fishing and coastal travel. Elaborate weir systems spanned the Klamath for salmon runs. The Yurok had a remarkable system of personal property, inheritance law, and dispute resolution — every injury had a monetary value in dentalium shells. This proto-legal system was virtually unique in pre-contact North America.'},
    {title:'Ceremonies & Spirituality', content:'World Renewal ceremonies including the White Deerskin Dance and Jump Dance, shared with Karuk and Hupa neighbors. Sweat lodges (wood-fire heated) were centers of male spiritual practice. Carved stone "slave killer" clubs and large obsidian blades were prestige objects. The Brush Dance heals sick children with singing, chanting, and rhythmic dancing around a medicine fire.'},
    {title:'Resilience & Revival', content:'Despite Gold Rush violence, the Yurok maintained cultural continuity. Sue-meg Village at Patrick\'s Point (now Sue-meg State Park) is a reconstructed Yurok settlement built by tribal members using traditional methods — active ceremony continues there. The Yurok Tribe played a central role in the historic Klamath dam removal of 2024.'}
  ],
  modernStatus:'The largest tribe in California with 6,500+ enrolled members. The Yurok Reservation stretches along the lower Klamath. The tribe manages the North Coastal Information Center (2,040+ documented cultural sites). Active Yurok language programs continue — an Algic language with no close relatives in California, a linguistic puzzle suggesting deep-time migration from eastern North America.',
  sources:'Kroeber 1925; Waterman 1920; Yurok Tribe; NCIC; NCIDC'
})).addTo(L_groups.klamathVillages);

// ========== TOLOWA ==========
L.polygon([[41.95,-124.30],[42.00,-124.10],[41.95,-123.85],[41.80,-123.80],[41.70,-124.00],[41.75,-124.20]],
{color:'transparent',fillColor:'#708090',fillOpacity:0.03,weight:0,interactive:true})
.bindPopup(tribePopup({
  name:'Tolowa', altName:'Tolowa Dee-ni\'', color:'#708090',
  language:'Tolowa (Athabaskan)', family:'Na-Dené > Athabaskan',
  population:'~1,000 pre-contact; ~2,000 enrolled today',
  territory:'Smith River, Lake Earl, Crescent City coast — northernmost California',
  summary:'Athabaskan-speaking people of the Smith River — the last major undammed river in California. Culturally aligned with the Northwest California ceremonial complex, the Tolowa centered their spiritual life on the Nee-Dash (Feather Dance) World Renewal ceremony.',
  sections:[
    {title:'Way of Life', content:'Large redwood plank houses and dugout canoes. Fishing for salmon, smelt, candlefish, and sea mammals along coast and rivers. Dense shell midden sites document thousands of years of coastal occupation. Despite speaking an Athabaskan language (related to Navajo far to the south), the Tolowa participated fully in the Northwest California wealth-display ceremonial complex.'},
    {title:'The Yontocket Massacre (1853)', content:'During a Nee-Dash ceremony at Yontocket — their most sacred site near Lake Earl — American settlers attacked and burned the village, killing an estimated <b>450 Tolowa</b>, one of the deadliest massacres in California history. Additional massacres followed, reducing the Tolowa population by an estimated 95% within a decade. The site is now a memorial.'}
  ],
  modernStatus:'The Tolowa Dee-ni\' Nation (formerly Smith River Rancheria) and Elk Valley Rancheria are federally recognized. Salmon habitat restoration on the Smith River continues. The Nee-Dash ceremony is still performed.',
  sources:'Gould 1966; Kroeber 1925; Tolowa Dee-ni\' Nation'
})).addTo(L_groups.klamathVillages);

// ========== WINTU ==========
L.polygon([[41.30,-122.80],[41.30,-122.30],[41.10,-121.80],[40.80,-121.70],[40.50,-122.00],[40.40,-122.30],[40.50,-122.60],[40.80,-122.80],[41.10,-122.90]],
{color:'transparent',fillColor:'#8B6914',fillOpacity:0.03,weight:0,interactive:true})
.bindPopup(tribePopup({
  name:'Wintu', altName:'"People" (win = "person")', color:'#8B6914',
  language:'Wintu', family:'Penutian > Wintuan',
  population:'~14,000 across all Wintun groups pre-contact; ~2,500 Wintu today',
  territory:'Upper Sacramento River, McCloud River, Pit River tributaries',
  summary:'River people of the Sacramento headwaters who maintained <b>239+ named villages</b> in Shasta County alone. The Wintu world was defined by the Sacramento, McCloud, and Pit rivers — all permanently transformed by Shasta Dam.',
  sections:[
    {title:'Way of Life', content:'Conical bark houses and semi-subterranean earth lodges. Expert salmon fishers using weirs, harpoons, and dip-nets. The Wintu language distinguished four cardinal directions: north, south, uphill, and downhill — reflecting their mountain river world. Villages organized along waterways with complex fishing rights systems. Acorns, deer, and plant foods supplemented salmon.'},
    {title:'Shasta Dam & Cultural Loss', content:'Completed 1945, Shasta Dam created a 30,000-acre reservoir that permanently flooded dozens of Wintu villages, fishing stations, sacred places including Puberty Rock, and burial grounds. It blocked salmon runs on the McCloud, Pit, and upper Sacramento — destroying the ecological foundation of Wintu life. The Winnemem Wintu ("Middle Water People") of the McCloud were most impacted and fight against proposed dam raising.'}
  ],
  modernStatus:'The Winnemem Wintu remain <b>not federally recognized</b> — a legacy of their 1851 treaty never being ratified. The Redding Rancheria (Wintu, Yana, Pit River) is recognized. Winnemem continue ceremonies on the McCloud River and advocate for salmon and sacred site restoration.',
  sources:'DuBois 1935; Kroeber 1925; Winnemem Wintu Tribe'
})).addTo(L_groups.wintuVillages);

// ========== YANA / YAHI ==========
L.polygon([[40.50,-122.00],[40.50,-121.60],[40.20,-121.40],[39.90,-121.50],[39.90,-121.80],[40.10,-122.00],[40.30,-122.10]],
{color:'transparent',fillColor:'#A0522D',fillOpacity:0.03,weight:0,interactive:true})
.bindPopup(tribePopup({
  name:'Yana & Yahi', altName:'Ishi\'s People — the last uncontacted people in North America', color:'#A0522D',
  language:'Yana (4 dialects)', family:'Hokan (isolate)',
  population:'~1,500–3,000 pre-contact; near-zero by 1870s',
  territory:'Eastern Sacramento Valley foothills, Mill Creek & Deer Creek canyons',
  summary:'A small but fiercely independent people of the eastern foothills, hunted nearly to extinction in the 1860s–70s. The last surviving Yahi, <b>Ishi</b>, emerged from hiding in 1911 — the last known member of an uncontacted people in North America.',
  sections:[
    {title:'Way of Life', content:'Four groups (Northern, Central, Southern Yana, and Yahi) in foothill streams. Deer, salmon, acorns, and seeds. The rugged canyon country of Mill Creek and Deer Creek provided natural refuge. Yana was one of the few documented languages with gendered speech — women and men used distinctly different word forms.'},
    {title:'Genocide & Survival', content:'Settlers systematically massacred Yana communities beginning in the 1850s. The Three Knolls Massacre (1865) killed most remaining Southern Yana and Yahi. A tiny band of perhaps 30–50 Yahi retreated into nearly impassable canyons, living in hiding for decades. By 1908, only 4 survived.'},
    {title:'Ishi', content:'In August 1911, a starving man stumbled out of the wilderness near Oroville — the last Yahi. Named "Ishi" (simply "man" in Yana), he lived at UC Berkeley\'s Museum of Anthropology until his death from tuberculosis in 1916. Working with Kroeber and Waterman, he demonstrated Yahi toolmaking, fire-starting, and hunting. In 2000, Ishi\'s brain was repatriated from the Smithsonian for proper burial — 84 years after his death.'}
  ],
  modernStatus:'No fluent speakers of any Yana dialect remain. Descendants enrolled in Redding Rancheria and other entities. The Ishi Wilderness preserves the canyons where the last Yahi hid. Ishi\'s story remains a powerful symbol of indigenous resilience and colonial violence.',
  sources:'Kroeber 1925; Waterman 1918; Theodora Kroeber "Ishi in Two Worlds" 1961'
})).addTo(L_groups.wintuVillages);

// ========== NOMLAKI ==========
L.polygon([[40.10,-122.70],[40.10,-122.20],[39.80,-122.00],[39.60,-122.10],[39.60,-122.50],[39.80,-122.70]],
{color:'transparent',fillColor:'#6B8E23',fillOpacity:0.03,weight:0,interactive:true})
.bindPopup(tribePopup({
  name:'Nomlaki (Hill Wintun)', altName:'Part of the Wintun language continuum', color:'#6B8E23',
  language:'Nomlaki', family:'Penutian > Wintuan',
  population:'~2,000 pre-contact',
  territory:'Western Sacramento Valley foothills, Stony Creek to Elder Creek',
  summary:'Foothill people of the western Sacramento Valley, distinguished by slab hopper mortars for acorn processing (vs. block mortars of neighboring Maidu). The Black Butte Lake area preserves key evidence of Nomlaki lifeways.',
  sections:[
    {title:'Way of Life', content:'Permanent villages along streams with seasonal upland movement. Distinctive slab hopper mortars for acorn grinding. Oak-studded foothills ideal for gathering. Streams with salmon runs. Culturally intermediate between valley-floor Patwin and mountain Wintu.'},
    {title:'Colonization', content:'Devastated by disease and violence after contact. Many survivors relocated to Round Valley Reservation. The Black Butte Dam (1963) inundated archaeological sites.'}
  ],
  modernStatus:'Paskenta Band of Nomlaki Indians — federally recognized, restored in 1994 after termination. Operates cultural preservation programs and gaming enterprises.',
  sources:'Kroeber 1925; J. Johnson 1990; Treganza & Heickson 1969'
})).addTo(L_groups.wintuVillages);
