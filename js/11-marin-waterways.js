const marinCreekStyle = {color:'#26C6DA', weight:2.5, opacity:0.8, dashArray:null};
const marinCreekHitStyle = {color:'#26C6DA', weight:16, opacity:0.01, fillOpacity:0, dashArray:null, interactive:true};
const marinSalmonStyle = {color:'#4CAF50', weight:3.5, opacity:0.9, dashArray:null}; // salmon-bearing creeks get green + thicker
const marinCreeks = [
  {name:'Lagunitas Creek',salmon:true,
   desc:'The largest creek system in Marin County (103 sq mi watershed) and home to the last significant wild run of endangered Central California Coast coho salmon — roughly 20% of the remaining wild coho between Monterey Bay and Fort Bragg. The Coast Miwok knew it as <em>Tokelalume</em>; the Spanish called it Arroyo de San Geronimo. Samuel P. Taylor built California\'s first paper mill on its banks in 1856. Today the upper 8 miles are dammed by Marin Water (Lake Lagunitas → Bon Tempe → Alpine → Kent Lake). Below Peters Dam, the creek runs through old-growth redwoods in Samuel P. Taylor State Park, is joined by Nicasio Creek, turns west through Point Reyes Station, meets Olema Creek, and empties into the Giacomini Wetlands at the head of Tomales Bay. Historically 5,000-10,000 coho and steelhead returned annually; today ~500. In 2017, pink salmon and chum salmon appeared — species not normally found this far south.',
   src:'NOAA Fisheries SHaRP; Marin Water; Wikipedia; SPAWN; Marin Independent Journal',
   pts:[[37.935,-122.620],[37.938,-122.633],[37.943,-122.645],[37.950,-122.657],[37.955,-122.670],[37.960,-122.683],[37.968,-122.695],[37.975,-122.710],[37.980,-122.725],[37.985,-122.738],[37.990,-122.748],[37.997,-122.760],[38.003,-122.774],[38.010,-122.788],[38.018,-122.800],[38.025,-122.810],[38.030,-122.818],[38.037,-122.825],[38.045,-122.830],[38.050,-122.837],[38.055,-122.843],[38.063,-122.852],[38.068,-122.858],[38.075,-122.862],[38.080,-122.865],[38.085,-122.870],[38.092,-122.875],[38.098,-122.880],[38.103,-122.882],[38.108,-122.880],[38.112,-122.875],[38.117,-122.870]]},
  {name:'San Geronimo Creek',salmon:true,
   desc:'The most critical salmon spawning tributary of Lagunitas Creek — up to 40% of the watershed\'s coho spawn here each year. Flows east to west through the San Geronimo Valley (Woodacre, San Geronimo, Forest Knolls, Lagunitas) before joining Lagunitas Creek at Shafter Bridge, where the famous "Inkwells" — natural waterfalls — challenge migrating salmon. Major sub-tributaries include Woodacre Creek, Montezuma Creek, Larsen Creek, Evans Canyon, and Arroyo Creek. Roy\'s Dam, built in the 1920s, was lowered to reopen upstream spawning habitat. SPAWN leads winter tours here to view spawning salmon.',
   src:'SPAWN; Marin Water salmonid monitoring; NOAA SHaRP',
   pts:[[37.935,-122.620],[37.932,-122.612],[37.930,-122.600],[37.928,-122.588],[37.926,-122.575],[37.924,-122.563],[37.923,-122.550],[37.921,-122.540],[37.918,-122.530],[37.915,-122.520]]},
  {name:'Olema Creek',salmon:true,
   desc:'The largest tributary of Lagunitas Creek (14.5 sq mi catchment), flowing 9 miles northwest along the San Andreas Fault zone through the Olema Valley. Receives Bear Valley Creek from Point Reyes National Seashore. Important steelhead and coho spawning habitat — in 2018-19, 107 adult coho and 51 redds were counted. The creek\'s alignment along the fault creates a remarkably straight valley visible from the air, marking the boundary between the Pacific and North American tectonic plates.',
   src:'NPS Point Reyes; Marin Water adult salmonid monitoring; CDFW',
   pts:[[38.045,-122.830],[38.037,-122.815],[38.030,-122.804],[38.022,-122.793],[38.015,-122.783],[38.008,-122.773],[38.000,-122.763],[37.993,-122.755],[37.985,-122.748],[37.978,-122.742],[37.970,-122.737],[37.962,-122.733],[37.955,-122.730]]},
  {name:'Nicasio Creek',salmon:true,
   desc:'Flows from Nicasio Reservoir (built 1960, Seeger Dam) southeast to join Lagunitas Creek in Samuel P. Taylor State Park. Before the dam, Nicasio Creek supported half of all steelhead and coho spawning in the Lagunitas watershed. The reservoir flooded the valley floor of the historic Nicasio ranching community. The creek passes through rolling grasslands and oak woodland characteristic of inland Marin.',
   src:'Marin Water; Wikipedia Lagunitas Creek',
   pts:[[38.073,-122.720],[38.065,-122.715],[38.058,-122.710],[38.050,-122.705],[38.043,-122.700],[38.037,-122.697],[38.030,-122.695],[38.025,-122.694],[38.018,-122.695]]},
  {name:'Corte Madera Creek (Ross Valley)',salmon:false,
   desc:'The principal creek of the Ross Valley, draining a 27 sq mi watershed through Fairfax, San Anselmo, Ross, Kentfield, and Corte Madera to San Francisco Bay. The watershed includes nine jurisdictions and is one of the most flood-prone areas in Marin. Phoenix Lake sits at the upper watershed. Major tributaries: San Anselmo Creek, Sleepy Hollow Creek, Fairfax Creek. The lower creek is tidally influenced and channelized. Before European settlement, the valley floor was a broad wetland; a relief map by Dewey Livingston shows the original landscape. Historical steelhead habitat, though now degraded by urbanization. Friends of Corte Madera Creek lead restoration efforts.',
   src:'Friends of Corte Madera Creek; Marin County Flood Control District; Stetson Engineers watershed map',
   pts:[[37.972,-122.589],[37.966,-122.580],[37.960,-122.570],[37.956,-122.558],[37.953,-122.548],[37.950,-122.538],[37.947,-122.528],[37.945,-122.518],[37.943,-122.510],[37.941,-122.500],[37.938,-122.492],[37.935,-122.483],[37.932,-122.475],[37.930,-122.467],[37.928,-122.460],[37.926,-122.452],[37.924,-122.445],[37.923,-122.435]]},
  {name:'San Anselmo Creek',salmon:false,
   desc:'A major tributary of Corte Madera Creek flowing through the town of San Anselmo. Notorious for flooding — the 2005 New Year\'s flood caused over $100M in damage to downtown San Anselmo. The Army Corps of Engineers\' Corte Madera Creek Flood Risk Management Project aims to reduce flood risk while enhancing habitat. Headwaters on the slopes below Pine Mountain.',
   src:'Marin County Flood Control; USACE',
   pts:[[37.985,-122.580],[37.980,-122.575],[37.975,-122.570],[37.970,-122.565],[37.966,-122.560],[37.963,-122.555],[37.960,-122.548],[37.958,-122.540],[37.956,-122.534],[37.953,-122.528]]},
  {name:'Miller Creek',salmon:false,
   desc:'Flows through Lucas Valley and the community of Terra Linda to San Pablo Bay. The watershed includes St. Vincent\'s/Silveira Ranch, one of the largest undeveloped properties in eastern Marin. The creek supports habitat for California red-legged frog (marginal) and various native fish. The upper watershed passes through oak-bay woodland and grassland.',
   src:'Marin County Flood Control District',
   pts:[[38.030,-122.600],[38.025,-122.590],[38.020,-122.580],[38.015,-122.570],[38.012,-122.558],[38.010,-122.545],[38.008,-122.533],[38.006,-122.520],[38.005,-122.508],[38.004,-122.495]]},
  {name:'Novato Creek',salmon:true,
   desc:'A 17-mile creek flowing through the city of Novato to extensive salt marshes and baylands along San Pablo Bay. Despite being in the driest watershed in Marin County, it supports both rearing and spawning steelhead. Six major tributaries: Arroyo San Jose, Warner Creek, Vineyard Creek, Bowman Canyon Creek, Novato Creek South Fork, and Rush Creek. The lower watershed\'s tidal marshes are among the largest remnant wetlands remaining on the bay — critical habitat for migratory ducks and shorebirds. The upper watershed features serpentine outcroppings with specialized plant communities. O\'Hare Park contains one of the best riparian communities in the watershed.',
   src:'Marin County Flood Control District; Novato Creek watershed assessment',
   pts:[[38.128,-122.620],[38.120,-122.610],[38.115,-122.598],[38.110,-122.585],[38.107,-122.573],[38.105,-122.560],[38.103,-122.548],[38.101,-122.535],[38.098,-122.523],[38.095,-122.510],[38.093,-122.498],[38.090,-122.485],[38.088,-122.470],[38.085,-122.458],[38.082,-122.445],[38.080,-122.430]]},
  {name:'Gallinas Creek',salmon:false,
   desc:'A tidal slough system in central Marin draining the Santa Margarita Valley and San Rafael Hills. The North Fork flows from the western ridgeline through Terra Linda to McInnis Park. The South Fork originates near the Marin County Civic Center (Frank Lloyd Wright\'s last public commission) and wraps around Santa Venetia. Before urbanization and 1900s-era levee construction, Gallinas Creek was an extensive tidal marsh system. It has lost most of its riparian vegetation to development and creek incision from cattle grazing.',
   src:'Marin County Flood Control District; Gallinas Creek watershed assessment',
   pts:[[38.005,-122.535],[38.003,-122.525],[38.002,-122.515],[38.000,-122.505],[37.998,-122.495],[37.997,-122.488],[37.996,-122.478],[37.995,-122.468],[37.994,-122.458]]},
  {name:'San Rafael Creek',salmon:false,
   desc:'Flows through downtown San Rafael, Marin\'s county seat and largest city. The lower reaches are tidally influenced, forming a small-boat harbor and canal district. The creek\'s watershed drains the hills of San Rafael and open space on San Pedro Ridge. Mission San Rafael Arcángel (1817) was sited near this creek — water access was essential for mission agriculture.',
   src:'Marin County Flood Control District',
   pts:[[37.987,-122.560],[37.983,-122.548],[37.980,-122.538],[37.977,-122.528],[37.975,-122.518],[37.973,-122.508],[37.972,-122.498],[37.971,-122.488],[37.970,-122.478]]},
  {name:'Arroyo Corte Madera del Presidio (Mill Valley)',salmon:false,
   desc:'The main creek of Mill Valley, flowing from the southern slopes of Mt. Tamalpais through downtown Mill Valley to Richardson Bay. The creek\'s name references the original Corte Madera del Presidio land grant — "the place where they cut wood for the Presidio." John Reed built the first sawmill here in 1834, making this the oldest industrial site in Marin. Old Mill Park preserves the site. The creek passes through redwood groves, residential neighborhoods, and a brief stretch of salt marsh before reaching the bay.',
   src:'Marin County historical records; Mill Valley Historical Society',
   pts:[[37.912,-122.557],[37.910,-122.550],[37.908,-122.543],[37.907,-122.535],[37.906,-122.528],[37.905,-122.520],[37.904,-122.513],[37.903,-122.505],[37.902,-122.498],[37.901,-122.490]]},
  {name:'Redwood Creek (Muir Woods)',salmon:true,
   desc:'Flows through Muir Woods National Monument — one of the last uncut old-growth coast redwood forests on the bay — to Muir Beach on the Pacific. Previously considered the southernmost stable population of coho salmon in the Bay Area, though no returning adults were recorded in winter 2007-08 for the first time since the 1940s. An 80% decline in spawning salmon that year was attributed to the lack of local coastal upwelling in 2006. A large intermittent tidal lagoon once covered ~25 acres at the creek\'s mouth before European-era land use changes reduced it to a remnant. NPS manages ongoing restoration.',
   src:'NPS Golden Gate NRA; Marin County Flood Control; CDFW',
   pts:[[37.897,-122.580],[37.893,-122.575],[37.889,-122.572],[37.885,-122.569],[37.881,-122.568],[37.877,-122.570],[37.873,-122.572],[37.870,-122.575],[37.867,-122.577],[37.864,-122.579],[37.860,-122.581]]},
  {name:'Walker Creek',salmon:false,
   desc:'Drains the northern Marin hills and empties into the western shore of Tomales Bay. The watershed includes rolling grasslands and dairy ranching country. Walker Creek estuary provides important habitat for shorebirds and waterfowl. The Gambonini Mercury Mine — a Superfund cleanup site — sits in the upper watershed, where mercury-laden sediment was remediated in 2000 by the EPA.',
   src:'Marin County Flood Control; SF Bay Regional Water Quality Control Board',
   pts:[[38.140,-122.740],[38.145,-122.750],[38.150,-122.760],[38.155,-122.770],[38.160,-122.778],[38.165,-122.785],[38.170,-122.792],[38.175,-122.800],[38.180,-122.808]]},
  {name:'Pine Gulch Creek (Bolinas)',salmon:true,
   desc:'A small but ecologically significant creek draining into Bolinas Lagoon. Supports steelhead and historically coho salmon. Bolinas Lagoon itself is one of the most pristine tidal lagoons on the California coast — a critical stopover for migrating shorebirds on the Pacific Flyway. The lagoon is slowly filling with sediment from the surrounding steep watersheds.',
   src:'Marin County; Bolinas Lagoon Technical Advisory Committee',
   pts:[[37.925,-122.690],[37.920,-122.688],[37.916,-122.686],[37.912,-122.684],[37.908,-122.682],[37.905,-122.680]]},
  {name:'Easkoot Creek (Stinson Beach)',salmon:false,
   desc:'A small coastal creek flowing through the community of Stinson Beach to Bolinas Lagoon. One of the initial watersheds in Marin County\'s Watershed Program. The creek passes through Douglas fir forest and coastal scrub before reaching the lagoon.',
   src:'Marin County Watershed Program',
   pts:[[37.902,-122.645],[37.899,-122.648],[37.897,-122.651],[37.895,-122.655],[37.893,-122.660]]}
];

marinCreeks.forEach(c => {
  const style = c.salmon ? marinSalmonStyle : marinCreekStyle;
  const salmonTag = c.salmon ? ' <span style="display:inline-block;background:#4CAF50;color:#fff;font-size:9px;font-weight:700;padding:1px 5px;border-radius:8px;margin-left:4px">🐟 SALMON/STEELHEAD HABITAT</span>' : '';
  const popupContent = `<h4>${c.name}</h4><span class="ptype" style="color:#26C6DA">Current Waterway — Marin County</span>${salmonTag}<div class="popup-what">Living creek system — approximate course from watershed maps & USGS data</div>${c.desc}<div class="popup-src">📖 ${c.src}</div>`;
  const line = L.polyline(c.pts, style).addTo(L_groups.marinCreeks).bindPopup(popupContent);
  const hitLine = L.polyline(c.pts, marinCreekHitStyle).addTo(L_groups.marinCreeks).bindPopup(popupContent)
    .on('mouseover', function(){ line.setStyle({weight: c.salmon ? 5 : 4, opacity:1}); })
    .on('mouseout', function(){ line.setStyle({weight: c.salmon ? 3.5 : 2.5, opacity: c.salmon ? 0.9 : 0.8}); });
  // Creek name label
  const mid = c.pts[Math.floor(c.pts.length / 2)];
  const shortName = c.name.replace(/ \(.*\)/, '');
  const labelColor = c.salmon ? '#4CAF50' : '#26C6DA';
  L.marker(mid, {
    icon: L.divIcon({
      className: 'creek-label',
      html: '<div class="creek-name-pill creek-name-clickable" style="color:'+labelColor+';border-color:'+labelColor+'44">' + shortName + '</div>',
      iconSize: [200, 22], iconAnchor: [100, 11]
    }),
    interactive: true
  }).addTo(L_groups.marinCreeks).bindPopup(popupContent);
});

// ========== LANGUAGE FAMILY TERRITORIES ==========
const langFamilyData = [
  {name:'Hokan (Pomoan branch)',family:'Hokan',color:'#E91E63',opacity:0.12,
   territory:[[38.85,-123.35],[38.85,-122.85],[38.60,-122.55],[38.30,-122.60],[38.30,-122.85],[38.50,-123.10],[38.70,-123.35]],
   desc:'The Pomoan languages — seven distinct languages spoken by the Pomo peoples — are classified within the hypothetical Hokan superstock. Pomo territory extended from the Pacific coast through the Russian River valley, Clear Lake basin, and inland valleys of present-day Mendocino, Lake, and Sonoma counties. The Pomo are one of the few Hokan-speaking groups to have maintained a large, contiguous territory into the contact era, suggesting strong cultural continuity in this region. Several PCN rock art sites fall within Pomo territory, including the Hopland "Baby Rocks" used in fertility rituals and the UC Hopland Research Center boulders studied by Donna Gillette.',
   languages:'Eastern Pomo, Southeastern Pomo, Northern Pomo, Central Pomo, Southern Pomo, Kashaya (Southwestern Pomo), Northeastern Pomo',
   status:'Kashaya has the most active speakers (~50 as of recent counts); most other Pomo languages are critically endangered with fewer than a dozen fluent elders. Language revitalization programs are underway.',
   timeDepth:'Pomoan languages diverged ~2,000-3,000 years ago; Hokan roots in California may extend 8,000+ years.',
   src:'Kroeber 1925; Moratto 1984; UC Berkeley Survey of California Indian Languages; Gillette 2011'},
  {name:'Hokan (Esselen isolate)',family:'Hokan',color:'#E91E63',opacity:0.12,
   territory:[[36.60,-121.90],[36.55,-121.55],[36.25,-121.45],[36.10,-121.70],[36.30,-121.95]],
   desc:'The Esselen language is a Hokan isolate — meaning it has no close relatives even within the Hokan family. The Esselen people occupied the rugged Big Sur coast and Santa Lucia Mountains, one of the most geographically isolated regions on the California coast. Linguistic and archaeological evidence suggests the Esselen represent a population that was in place before the Penutian-speaking Ohlone expanded southward. Breschini (1983) and Moratto (1984) both model the Esselen as a Hokan remnant population that survived by being pushed into the remote coast ranges.',
   languages:'Esselen (single language, no known dialects)',
   status:'Last known fluent speaker died in the early 1800s. The Ohlone/Costanoan Esselen Nation is working to reconstruct the language from mission-era wordlists and J.P. Harrington notes.',
   timeDepth:'Esselen\'s deep isolation within Hokan suggests it diverged very early, possibly 5,000+ years ago.',
   src:'Breschini 1983; Moratto 1984; Kroeber 1925; Ohlone/Costanoan Esselen Nation'},
  {name:'Penutian (Utian: Miwokan)',family:'Penutian',color:'#2196F3',opacity:0.12,
   territory:[[38.35,-123.05],[38.35,-122.45],[38.05,-122.35],[37.85,-122.10],[37.80,-121.60],[37.85,-121.20],[38.10,-120.50],[38.40,-120.20],[38.55,-121.00],[38.50,-121.60],[38.45,-122.10]],
   desc:'The Miwokan language family — part of the Utian branch of the Penutian superstock — includes seven languages: Coast Miwok, Lake Miwok, Bay Miwok (Saclan), Plains Miwok, and three Sierra Miwok languages. Miwokan speakers occupied a vast territory from the Marin/Sonoma coast through the Sacramento-San Joaquin Delta to the western Sierra Nevada foothills. The standard model (Moratto 1984) holds that Penutian speakers migrated into California from the Great Basin or Columbia Plateau, gradually displacing or absorbing earlier Hokan populations. However, a 2022 PNAS genomics study on Ohlone populations found that genetic and linguistic histories don\'t always align neatly, suggesting the process was more complex than simple population replacement.',
   languages:'Coast Miwok, Lake Miwok, Bay Miwok (Saclan), Plains Miwok, Northern Sierra Miwok, Central Sierra Miwok, Southern Sierra Miwok',
   status:'All Miwokan languages are severely endangered. Coast Miwok has active revitalization through the Federated Indians of Graton Rancheria. Sierra Miwok languages have small numbers of elderly speakers.',
   timeDepth:'Utian (Miwok + Ohlone) may have entered California 4,000-2,000 years ago per Moratto; Levy suggests more recently.',
   src:'Moratto 1984; Kroeber 1925; UC Berkeley Survey; PNAS 2022 Ohlone genomics study; Breschini 1983'},
  {name:'Penutian (Utian: Ohlone/Costanoan)',family:'Penutian',color:'#1565C0',opacity:0.12,
   territory:[[37.85,-122.52],[37.80,-122.10],[37.60,-121.80],[37.20,-121.60],[36.85,-121.50],[36.60,-121.90],[36.80,-122.05],[37.10,-122.10],[37.45,-122.20],[37.70,-122.40]],
   desc:'The Ohlone (Costanoan) languages form the other branch of the Utian family alongside Miwokan, within the Penutian superstock. Eight Ohlone languages are documented: Ramaytush (San Francisco Peninsula), Tamyen (Santa Clara Valley), Chochenyo (East Bay), Karkin (Carquinez Strait), Awaswas (Santa Cruz coast), Mutsun (San Juan Bautista), Chalon (Soledad), and Rumsen (Monterey). The Ohlone are believed to have displaced an earlier Hokan-speaking population — the Esselen being the surviving remnant of that earlier group. Recent proposals group Ohlone, Miwok, and Yokuts into a single "Yok-Utian" family.',
   languages:'Ramaytush, Tamyen, Chochenyo, Karkin, Awaswas, Mutsun, Chalon, Rumsen',
   status:'Three languages seeing active revival: Chochenyo (Muwekma Ohlone Tribe), Mutsun (Amah Mutsun, with Quirina Luna-Costillas and others), and Rumsen. Last fluent Rumsen speaker, Isabel Meadows, died 1939.',
   timeDepth:'Ohlone language diversification suggests 1,500-2,500 years of separation between the eight languages.',
   src:'Kroeber 1925; Milliken 1995; UC Berkeley Costanoan materials; Ohlone Wikipedia; Mutsun Language Foundation'},
  {name:'Penutian (Wintuan: Patwin)',family:'Penutian',color:'#42A5F5',opacity:0.12,
   territory:[[38.75,-122.40],[38.75,-121.80],[38.35,-121.60],[38.05,-121.80],[38.05,-122.15],[38.20,-122.40]],
   desc:'The Patwin languages — part of the Wintuan family within Penutian — were spoken in the southern Sacramento Valley and Suisun Bay marshlands. Hill Patwin occupied the inner Coast Range valleys (Capay Valley, Cortina Valley) while River Patwin lived along the Sacramento River. Southern Patwin (Suisun) occupied the marshes north of the Carquinez Strait. Patwin territory bordered Pomo (Hokan) to the west and Miwok (Penutian) to the south.',
   languages:'Hill Patwin, River Patwin, Southern Patwin (Suisun)',
   status:'Critically endangered. Language revitalization efforts underway through Yocha Dehe Wintun Nation.',
   timeDepth:'Wintuan languages diversified ~1,500-2,000 years ago.',
   src:'Kroeber 1925; Moratto 1984; Johnson 1978'},
  {name:'Yukian (Wappo)',family:'Yukian',color:'#FF9800',opacity:0.12,
   territory:[[38.65,-122.65],[38.65,-122.35],[38.45,-122.25],[38.35,-122.40],[38.35,-122.65]],
   desc:'The Wappo language is part of the Yukian family — one of the most mysterious language families in California. Yukian has NO demonstrated relationship to any other language family in the world. Some linguists believe Yukian-speaking peoples may represent an even older population layer than Hokan, possibly among the very earliest inhabitants of California. The Wappo occupied the Napa Valley, Alexander Valley, and areas around the geysers of present-day Sonoma and Lake counties. Their territory sat between Pomo (Hokan) to the west and Patwin (Penutian) to the east.',
   languages:'Wappo (single language with dialectal variation)',
   status:'Last fluent speaker, Laura Fish Somersal, died in 1990. The language was documented extensively by Jesse Sawyer and later by linguists at UC Berkeley. Some revitalization work continues.',
   timeDepth:'Yukian has no demonstrated external relationships. If it represents a pre-Hokan population, it could have roots going back 10,000+ years in California — though this is speculative.',
   src:'Kroeber 1925; Sawyer 1965; UC Berkeley Survey; Thompson et al. 2006'},
  {name:'Hokan (Salinan isolate)',family:'Hokan',color:'#E91E63',opacity:0.12,
   territory:[[36.10,-121.70],[36.10,-121.10],[35.70,-120.80],[35.50,-121.00],[35.50,-121.40],[35.80,-121.60]],
   desc:'The Salinan language, a Hokan isolate, was spoken in the Salinas Valley and surrounding mountains of present-day San Luis Obispo and Monterey counties. Like Esselen to the north, Salinan represents a remnant Hokan population that survived in relatively isolated terrain as Penutian speakers expanded through the coast and valleys.',
   languages:'Salinan (Antoniaño and Migueleño dialects, associated with Missions San Antonio and San Miguel)',
   status:'No fluent speakers since mid-20th century. Documentation from J.P. Harrington and A.L. Kroeber survives.',
   timeDepth:'Deep Hokan isolate, diverged thousands of years ago from other Hokan branches.',
   src:'Kroeber 1925; Mason 1918; Harrington notes at Smithsonian'}
];

// Language family territory polygons
langFamilyData.forEach(lf => {
  if (!lf.territory || lf.territory.length < 3) return;
  const langBadge = lf.family === 'Hokan' ? '<span style="display:inline-block;background:#E91E63;color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px">HOKAN</span>' :
                    lf.family === 'Yukian' ? '<span style="display:inline-block;background:#FF9800;color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px">YUKIAN</span>' :
                    '<span style="display:inline-block;background:#2196F3;color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px">PENUTIAN</span>';
  const popup = `<div style="max-width:340px"><h4>${lf.name}</h4>${langBadge}<div style="margin:8px 0;font-size:12px;color:#ccc">${lf.desc}</div><div style="font-size:11px;color:#aaa;margin:4px 0"><strong>Languages:</strong> ${lf.languages}</div><div style="font-size:11px;color:#aaa;margin:4px 0"><strong>Status:</strong> ${lf.status}</div><div style="font-size:11px;color:#aaa;margin:4px 0"><strong>Time depth:</strong> ${lf.timeDepth}</div><div class="popup-src">📖 ${lf.src}</div></div>`;
  L.polygon(lf.territory, {
    color: lf.color, weight: 2, opacity: 0.6,
    fillColor: lf.color, fillOpacity: lf.opacity,
    dashArray: '8,4'
  }).addTo(L_groups.languageZones).bindPopup(popup);
  // Label
  const center = lf.territory.reduce((acc,p) => [acc[0]+p[0]/lf.territory.length, acc[1]+p[1]/lf.territory.length], [0,0]);
  L.marker(center, {
    icon: L.divIcon({
      className: 'creek-label',
      html: '<div style="color:'+lf.color+';font-size:11px;font-weight:600;text-shadow:0 0 6px #000,0 0 12px #000;white-space:nowrap;pointer-events:none">'+lf.name.replace(/ \(.*\)/,'')+'</div>',
      iconSize:[200,20], iconAnchor:[100,10]
    }), interactive:false
  }).addTo(L_groups.languageZones);
});

// ========== LANGUAGE ENCYCLOPEDIA DATA & LOGIC ==========
