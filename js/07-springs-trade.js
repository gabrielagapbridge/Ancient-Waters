const springIcon = mkIcon('#008B8B', 10);
const shellmoundIcon = mkIcon('#FF4500', 11);
const constructionIcon = mkIcon('#FFD600', 9);
const bayMissionIcon = mkIcon('#CE93D8', 10);
const springsData = [
  // Arizona
  [36.254, -112.698, 'Havasu Springs (Havasupai)', 'Sacred — Havasupai', 'The turquoise waterfalls of Havasu Creek emerge from springs deep in the Grand Canyon. The Havasupai people ("People of the Blue-Green Water") have lived here for over 800 years. The springs produce ~38 million gallons/day of calcium-carbonate-rich water that creates the famous blue-green travertine pools.'],
  [34.649, -111.752, 'Montezuma Well', 'Sacred Spring — Yavapai', 'A collapsed limestone sinkhole fed by underground springs, producing 1.5 million gallons daily. Sacred to the Yavapai as their place of emergence into the world. The Sinagua built irrigation ditches from the outflow over 1,000 years ago — some still carry water. Contains 5 endemic species found nowhere else on Earth.'],
  [36.843, -112.749, 'Pipe Spring', 'Sacred — Kaibab Paiute', 'The only perennial water for 62 miles across the Arizona Strip. The Kaibab Paiute (who call it Matungwa\'vu) depended on this spring for millennia before Mormon settlers built Winsor Castle over it in 1872, cutting off Paiute access. Now a National Monument co-managed with the Kaibab Band.'],
  [34.328, -111.213, 'Fossil Springs', 'Sacred — Yavapai-Apache', 'One of only two wild and scenic rivers in Arizona. Springs discharge 20,000 gallons/minute of 72°F water rich in calcium carbonate. The Yavapai and Apache peoples used these springs for millennia. Travertine formations create natural dams and pools.'],
  [35.069, -111.393, 'Blue Spring (Little Colorado)', 'Sacred — Hopi/Navajo', 'Massive travertine spring near the Little Colorado River confluence with the Grand Canyon. Sacred to both Hopi and Navajo peoples. Produces startling turquoise-blue water loaded with calcium carbonate. The Hopi call this area the Sipapu — the place of emergence.'],
  // New Mexico Springs
  [36.312, -105.808, 'Ojo Caliente Hot Springs', 'Sacred — Tewa Pueblo', 'Sacred hot springs used by ancestral Pueblo peoples for generations. The Tewa hero P\'oseyemu accessed the underworld here. The original village of P\'oseuinge (1,000+ people) stood nearby. One of the oldest health resorts in the US (est. 1868). Contains iron, arsenic, soda, and lithia mineral springs.'],
  [35.659, -105.964, 'Montezuma Hot Springs', 'Sacred — Pueblo peoples', 'Hot springs considered sacred neutral healing ground by multiple tribes. Warriors from warring nations would come here peacefully to heal. Temperatures range 95–120°F. Later became the Montezuma Hotel resort; now on United World College grounds, still free to soak.'],
  [33.188, -108.212, 'Gila Hot Springs', 'Sacred — Mogollon/Apache', 'Hot springs along the Gila River near the ancient Mogollon cliff dwellings. Ancestral Puebloan and Mogollon peoples considered these waters sacred for thousands of years. The springs bubble directly from the earth to mix with the cool Gila River.'],
  [33.143, -107.252, 'Truth or Consequences Hot Springs', 'Sacred — Mimbres/Apache', 'A 50-million-year-old rift along the Rio Grande allows geothermally heated groundwater to surface. The Mimbres people lived here; Apache leader Geronimo\'s people soaked here. Considered a sacred neutral healing ground where no weapons were allowed.'],
  [35.793, -106.688, 'Jemez Hot Springs', 'Sacred — Jemez Pueblo', 'Geothermal springs in the Jemez Mountains volcanic caldera. The Jemez people (Walatowa) have used these springs since time immemorial. Multiple springs dot the canyon — Soda Dam, Spence Hot Spring, San Antonio Hot Spring. The caldera is one of the largest volcanic features in North America.'],
  // Grand Canyon springs
  [36.098, -112.192, 'Indian Garden Springs', 'Water Source — Grand Canyon', 'A critical oasis halfway down the Bright Angel Trail. A natural spring that has supported human habitation for thousands of years. The Havasupai farmed here using spring-fed irrigation until removed by the Park Service in 1928. Recently renamed Havasupai Gardens.'],
  [36.107, -111.843, 'Vasey\'s Paradise', 'Spring — Grand Canyon', 'A spectacular spring bursting from the Redwall Limestone 100 feet above the Colorado River in Marble Canyon. Creates a lush hanging garden of maidenhair fern, monkey flowers, and cardinal flowers in the desert canyon walls. Ancient granaries nearby.']
];
springsData.forEach(s => {
  L.marker([s[0],s[1]], {icon:springIcon}).addTo(L_groups.springs)
    .bindPopup(`<h4>${s[2]}</h4><span class="ptype pt-spring">${s[3]}</span><div class="popup-what">Spring/sacred water source — coordinates from USGS/NPS records</div>${s[4]}<div class="popup-src">📖 USGS National Water Information System; NPS site records; Arizona Heritage Waters (NAU); Wikipedia geographic data</div>`);
});

// ========== CIÉNEGAS (LOST DESERT WETLANDS) ==========
const cienegaStyle = {color:'#1B8C4E', weight:2, opacity:0.65, fillColor:'#1B8C4E', fillOpacity:0.15, dashArray:'4,4'};
const cienegas = [
  {coords:[[31.5,-110.3],[31.45,-110.15],[31.35,-110.1],[31.25,-110.2],[31.3,-110.35],[31.4,-110.35],[31.5,-110.3]], name:'San Pedro River Ciénegas', desc:'Once extensive marshlands along the upper San Pedro River supported Hohokam and Sobaipuri settlements. Spanish accounts described vast wetlands with beaver, otters, and waterfowl. Groundwater pumping by copper mines and agriculture dried most by the 1940s. The San Pedro Riparian NCA preserves a remnant.'},
  {coords:[[32.25,-110.95],[32.2,-110.85],[32.1,-110.85],[32.05,-110.95],[32.1,-111.05],[32.2,-111.05],[32.25,-110.95]], name:'Tucson Basin Ciénegas', desc:'Before Tucson, the Santa Cruz River supported extensive ciénegas — year-round marshlands with cattails, cottonwoods, and mesquite bosques. The Hohokam and later Tohono O\'odham depended on them. Spanish missionaries described "a paradise of water." Now completely dry.'},
  {coords:[[31.75,-109.35],[31.7,-109.2],[31.6,-109.2],[31.55,-109.3],[31.6,-109.4],[31.7,-109.4],[31.75,-109.35]], name:'Willcox Playa/Chiricahua Ciénegas', desc:'The Willcox Playa was once surrounded by ciénegas that supported Chiricahua Apache camps. Springs emerging from the Chiricahua and Dragoon Mountains created oasis wetlands in the Sulphur Springs Valley. Most dried when ranching lowered the water table.'},
  {coords:[[34.65,-112.0],[34.6,-111.9],[34.5,-111.9],[34.45,-112.0],[34.5,-112.1],[34.6,-112.1],[34.65,-112.0]], name:'Verde Valley Ciénegas', desc:'The Verde River\'s wide floodplain once supported extensive ciénegas that fed Sinagua agriculture. Montezuma Well, nearby springs, and riverside marshes created one of the richest environments in pre-contact Arizona. Irrigation diversions reduced most wetlands.'}
];
cienegas.forEach(c => {
  L.polygon(c.coords, cienegaStyle).addTo(L_groups.cienegas)
    .bindPopup(`<h4>${c.name}</h4><span class="ptype pt-cienega">Lost Ciénega / Desert Wetland</span><div class="popup-what">Approximate historical wetland extent from geological/historical records</div>${c.desc}<div class="popup-src">📖 Hendrickson & Minckley, "Ciénegas" (1984); USGS; Tellman et al., "Arizona\'s Changing Rivers" (1997); Spanish colonial accounts</div>`);
});

// ========== ANCIENT TRADE ROUTES ==========
const tradeStyle = {color:'#D4760A', weight:2.5, opacity:0.75, dashArray:'8,6'};
// Chaco Road System
L.polyline([[36.06,-107.97],[36.2,-107.85],[36.43,-108.00],[36.55,-107.95],[36.80,-107.97]], {...tradeStyle,color:'#E67E22',weight:2.5}).addTo(L_groups.tradeRoutes)
  .bindPopup('<h4>Chaco Great North Road</h4><span class="ptype pt-trade">Ceremonial/Trade Road — ~900-1150 CE</span><div class="popup-what">Approximate trade/road corridor based on archaeological evidence</div>A 50+ km road running due north from Pueblo Alto in Chaco Canyon to Kutz Canyon. Built 8-10 meters wide with masonry ramps over cliffs. The straightness suggests ceremonial rather than purely economic purpose — aligned with cosmological directions.<div class="popup-src">📖 Kantner (2004); Roney (1992); NPS Chaco Culture NHP</div>');
L.polyline([[36.06,-107.97],[35.8,-107.85],[35.5,-107.9],[35.3,-108.0]], {...tradeStyle,color:'#E67E22',weight:2.5}).addTo(L_groups.tradeRoutes)
  .bindPopup('<h4>Chaco South Road</h4><span class="ptype pt-trade">Ceremonial/Trade Road — ~900 CE</span><div class="popup-what">Approximate trade/road corridor based on archaeological evidence</div>The counterpart to the North Road, extending ~50 km south from Chaco Canyon to Hosta Butte. Together they form an axis of cosmographic significance.<div class="popup-src">📖 Kincaid et al. (1983); NPS Chaco Culture NHP</div>');
L.polyline([[36.06,-107.97],[36.15,-108.15],[36.25,-108.4],[36.43,-108.5]], {...tradeStyle,color:'#E67E22'}).addTo(L_groups.tradeRoutes)
  .bindPopup('<h4>Chaco–Aztec Road</h4><span class="ptype pt-trade">Regional Road — ~1100 CE</span><div class="popup-what">Approximate trade/road corridor based on archaeological evidence</div>Connected Chaco Canyon to Aztec Ruins, its successor center on the Animas River. Part of the network of roads radiating from Chaco.<div class="popup-src">📖 NPS Aztec Ruins NM; Stein & McKenna (1988)</div>');

// Turquoise Trail
L.polyline([[36.06,-107.97],[35.7,-106.9],[35.4,-106.2],[35.2,-106.1]], tradeStyle).addTo(L_groups.tradeRoutes)
  .bindPopup('<h4>Turquoise Trail to Cerrillos</h4><span class="ptype pt-trade">Trade Route — Turquoise</span><div class="popup-what">Approximate trade/road corridor based on archaeological evidence</div>The primary turquoise supply route from the Cerrillos Hills mines (near Santa Fe) to Chaco Canyon. Over 200,000 pieces of turquoise recovered from Chaco came primarily from this source 200+ km away. The Cerrillos mines were among the most important in the pre-contact Americas.<div class="popup-src">📖 Hull et al., J. Archaeol. Science (2014); Mathien (2001)</div>');

// Shell trade from Gulf of California
L.polyline([[31.8,-114.5],[32.1,-113.5],[32.5,-112.5],[33.0,-111.8],[33.45,-111.95]], tradeStyle).addTo(L_groups.tradeRoutes)
  .bindPopup('<h4>Shell Trade Route — Gulf of California</h4><span class="ptype pt-trade">Long-Distance Trade</span><div class="popup-what">Approximate trade/road corridor based on archaeological evidence</div>Pacific and Gulf of California shells were traded northward to Hohokam centers. Shells were fashioned into bracelets, pendants, and beads at workshops in Pueblo Bonito and Hohokam villages. Trade continued into the 1800s.<div class="popup-src">📖 Toll (1991); NPS Chaco Canyon museum collections</div>');
L.polyline([[33.45,-111.95],[34.0,-110.5],[35.0,-109.0],[36.06,-107.97]], tradeStyle).addTo(L_groups.tradeRoutes)
  .bindPopup('<h4>Hohokam–Chaco Connection</h4><span class="ptype pt-trade">Inter-Regional Trade</span><div class="popup-what">Approximate trade/road corridor based on archaeological evidence</div>Trade goods including shell, copper bells, macaws, cacao, and cotton moved between Hohokam territory in the Salt River valley and Chaco Canyon. This corridor connected the two most powerful pre-contact civilizations of the Southwest.<div class="popup-src">📖 Crown et al. (2009); Cameron (2001); Archaeology Southwest</div>');

// Mesoamerican Long-Distance Trade
L.polyline([[30.4,-108.1],[31.0,-108.5],[32.0,-109.5],[33.45,-111.95]], {...tradeStyle,weight:2.5,dashArray:'12,8'}).addTo(L_groups.tradeRoutes)
  .bindPopup('<h4>Paquimé–Hohokam Trade Corridor</h4><span class="ptype pt-trade">Mesoamerican Long-Distance Trade — ~700-1450 CE</span><div class="popup-what">Approximate trade/road corridor based on archaeological evidence</div>Copper bells, macaws, cacao, and shell traded north from Paquimé (Casas Grandes) in Chihuahua. In return, turquoise and other minerals flowed south. This corridor connected the Greater Southwest to Mesoamerican civilizations over 1,000+ miles away.<div class="popup-src">📖 Lekson, "The Chaco Meridian" (2015); Di Peso (1974)</div>');

// Obsidian from Jemez
L.polyline([[35.8,-106.6],[35.9,-107.2],[36.06,-107.97]], {...tradeStyle,color:'#8E44AD'}).addTo(L_groups.tradeRoutes)
  .bindPopup('<h4>Obsidian Route — Jemez Mountains</h4><span class="ptype pt-trade">Raw Material Trade</span><div class="popup-what">Approximate trade/road corridor based on archaeological evidence</div>Obsidian from the Jemez Mountain volcanic fields was a primary source for cutting tools and projectile points throughout the region. Obsidian hydration dating has helped establish trade chronologies.<div class="popup-src">📖 Cameron & Sappington (1984); Duff et al. (2012)</div>');

// Western turquoise route
L.polyline([[36.6,-114.8],[36.3,-113.5],[36.1,-112.0],[36.06,-107.97]], {...tradeStyle,color:'#3498DB'}).addTo(L_groups.tradeRoutes)
  .bindPopup('<h4>Western Turquoise Route</h4><span class="ptype pt-trade">Long-Distance Trade — Nevada/California sources</span><div class="popup-what">Approximate trade/road corridor based on archaeological evidence</div>Turquoise from deposits in Nevada and southeastern California was traded east through the Virgin Puebloan region to Chaco Canyon. The Virgin Puebloan people may have served as intermediaries in this vast trade network.<div class="popup-src">📖 Hull et al. (2014); Virgin Puebloan site surveys</div>');

// ========== ROCK ART STYLE REGIONS ==========
const rockArtRegions = [
  {coords:[[39.5,-111.5],[39.5,-109.5],[38.0,-109.0],[37.5,-110.0],[38.0,-111.5]], name:'Barrier Canyon Style Region', color:'#E74C3C', period:'~2000 BCE – 500 CE (possibly earlier)',
   desc:'Among the oldest and most haunting rock art in the Americas. Tall, ghostly anthropomorphic figures — often life-sized, lacking arms or legs, with hollow eyes. Found primarily in southern Utah canyon country around the San Rafael Swell and Canyonlands. Key sites: the Great Gallery in Horseshoe Canyon (7-mile hike), Sego Canyon, Head of Sinbad, Buckhorn Wash.'},
  {coords:[[41.5,-114.0],[41.5,-109.5],[38.5,-109.5],[38.5,-111.5],[39.5,-112.5],[40.5,-114.0]], name:'Fremont Rock Art Region', color:'#9B59B6', period:'~400 – 1300 CE',
   desc:'Created by the Fremont culture across Utah. Distinctive trapezoidal human figures, often with elaborate headdresses, necklaces, and earrings. Bighorn sheep are the most common animal motif. Key sites: Nine Mile Canyon ("the world\'s longest art gallery"), Fremont Indian State Park, Capitol Reef, Dry Fork Canyon.'},
  {coords:[[34.0,-109.0],[34.0,-104.5],[30.5,-104.5],[30.5,-106.5],[32.5,-109.0]], name:'Jornada Mogollon Rock Art', color:'#E67E22', period:'~600 – 1400 CE',
   desc:'Extraordinary masks, goggle-eyed deities resembling Mesoamerican Tlaloc, horned serpents, and elaborate ceremonial scenes. Over 3,000 pictographs at Hueco Tanks alone. Key sites: Three Rivers Petroglyphs (21,000+ images), Hueco Tanks State Historic Site, Alamo Mountain.'},
  {coords:[[37.5,-112.5],[37.5,-108.0],[34.5,-107.0],[34.5,-112.0]], name:'Ancestral Puebloan Rock Art', color:'#2980B9', period:'~500 – 1400 CE',
   desc:'Spirals, handprints, bighorn sheep, flute players (Kokopelli), kachina-like figures, and astronomical markers. Often found near water sources, trails, and village sites. Key sites: Petrified Forest, Sand Island (near Bluff, UT), Canyon de Chelly, Petroglyph National Monument (Albuquerque).'}
];
rockArtRegions.forEach(r => {
  L.polygon(r.coords, {
    color:r.color, weight:2, opacity:0.6, fillColor:r.color, fillOpacity:0.08, dashArray:'6,4'
  }).addTo(L_groups.rockArt)
    .bindPopup(`<h4>${r.name}</h4><span class="ptype" style="color:${r.color}">${r.period}</span><div class="popup-what">Approximate cultural region boundary based on site distribution</div>${r.desc}<div class="popup-src">📖 Schaafsma, "Indian Rock Art of the Southwest" (1980); Cole, "Legacy on Stone" (1990); Archaeology Southwest Magazine</div>`);
});

// ========== CENTRAL ARIZONA PROJECT CANAL ==========
const capStyle = {color:'#1A5276', weight:3.5, opacity:0.8, dashArray:'10,5'};
const capRoute = [
  [34.29,-114.14],[34.2,-113.6],[34.0,-113.0],[33.85,-112.6],
  [33.8,-112.3],[33.7,-112.1],[33.65,-111.9],[33.6,-111.7],
  [33.5,-111.5],[33.4,-111.4],[33.3,-111.3],[33.1,-111.2],
  [33.0,-111.2],[32.8,-111.1],[32.6,-111.1],[32.4,-111.0],
  [32.2,-111.0],[32.1,-111.1]
];
L.polyline(capRoute, capStyle).addTo(L_groups.modernInfra)
  .bindPopup('<h4>Central Arizona Project Canal</h4><span class="ptype pt-modern">Modern Infrastructure — 1973-1993</span><div class="popup-what">Canal centerline — approximate route from CAP/USBR maps</div>A 336-mile aqueduct moving Colorado River water from Lake Havasu across the desert to Phoenix and Tucson. The largest and most expensive aqueduct ever built in the US ($4.4 billion). Lifts water up to 2,900 feet using 14 pumping plants. Crosses ancient Hohokam territory — a modern echo of the same civilization-sustaining impulse to move water through the desert.<div class="popup-src">📖 Central Arizona Water Conservation District; Bureau of Reclamation CAP project records; Wikipedia</div>');

// ========== MORE INDIGENOUS SITES (filling gaps) ==========
const moreSites = [
  [35.08,-109.93, 'Petroglyph National Monument', 'Ancestral Puebloan/Tanoan', 'Over 24,000 petroglyphs along a 17-mile volcanic escarpment on Albuquerque\'s west mesa. Created over 400+ years by Ancestral Puebloans and later peoples. Images include animals, people, crosses, spirals, and other symbols. One of the largest petroglyph sites in North America.'],
  [36.47,-109.54, 'Canyon de Chelly', 'Navajo/Ancestral Puebloan', 'A stunning canyon system continuously inhabited for 5,000 years. White House Ruin and other cliff dwellings date to 1060-1275 CE. The Navajo have lived here since the 1700s. Thousands of petroglyphs and pictographs line the canyon walls. The canyon\'s springs and seasonal streams sustain farming.'],
  [33.23,-108.27, 'Gila Cliff Dwellings', 'Mogollon/Tularosa Phase', 'Cliff dwellings built in natural caves high above the Gila River, occupied ~1275-1300 CE. The Mogollon people built 40+ rooms in five caves overlooking the canyon. Hot springs along the Gila River below the ruins were likely sacred.'],
  [31.91,-109.07, 'Chiricahua Mountains Sites', 'Apache/Mogollon', 'The Chiricahua Mountains harbored Apache camps, Mogollon village sites, and sacred springs. Cochise\'s Stronghold in the Dragoon Mountains (31.92°N, -110.01°W) was the legendary refuge of the Apache leader. The mountain "sky islands" preserved biodiversity and served as refugia for indigenous peoples.'],
  [35.67,-105.94, 'Pecos Pueblo', 'Ancestral Puebloan/Living Pueblo', 'One of the largest and most fortified pueblos, housing up to 2,000 people at its peak (~1450 CE). A critical trade center connecting Plains buffalo hunters with Pueblo farmers. Located near Glorieta Pass, it controlled access between the Great Plains and the Rio Grande valley.'],
  [35.18,-106.74, 'Petroglyph NM — Boca Negra', 'Multi-Era Indigenous', 'Volcanic boulders along the Rio Grande escarpment covered with petroglyphs from multiple eras — Ancestral Puebloan, early Pueblo, and historic. Spirals, handprints, macaw images, and geometric designs. The Pueblo peoples consider this a sacred landscape.'],
  [34.01,-109.36, 'Raven Site Ruin', 'Ancestral Puebloan/Mogollon', 'A large pueblo with over 800 rooms at the confluence of the Little Colorado River and Silver Creek. Occupied ~1000-1450 CE, it was a crossroads of Puebloan and Mogollon cultures with extensive trade connections.'],
  [36.47,-105.57, 'Picuris Pueblo', 'Living Pueblo — Tiwa', 'One of the oldest continuously occupied pueblos, with roots dating to ~1250 CE. Located in a high mountain valley with reliable springs. The pueblo once stood seven stories high and housed 3,000 people. Still an active, living community.'],
  [30.83,-104.83, 'Hueco Tanks', 'Jornada Mogollon — Sacred', 'Granite rock basins (huecos) that collect rainwater in the desert — a magnet for human habitation for 10,000+ years. Over 3,000 pictographs, the largest collection of face/mask paintings in North America. Tlaloc-like rain god images suggest Mesoamerican connections. Access restricted to preserve art.'],
  [32.54,-106.61, 'Three Rivers Petroglyphs', 'Jornada Mogollon', 'Over 21,000 petroglyphs on a basalt ridge overlooking the Tularosa Basin. Created by Jornada Mogollon people ~900-1400 CE. Images of animals, geometric designs, and human figures. The nearby Three Rivers village had 14 room blocks. The Sacramento Mountains provided spring water.']
];
moreSites.forEach(s => {
  L.marker([s[0],s[1]], {icon:swIcon}).addTo(L_groups.swSites)
    .bindPopup(`<h4>${s[2]}</h4><span class="ptype pt-site">${s[3]}</span><div class="popup-what">Archaeological/cultural site — location from NPS, BLM, or state records</div>${s[4]}<div class="popup-src">📖 NPS site records; BLM cultural resource databases; Archaeology Southwest; state historic preservation offices</div>`);
});

// ========== MORE SPANISH COLONIAL ==========
const moreSpanish = [
  [36.41,-105.57, 'Picuris Mission (San Lorenzo)', 1621, 'Built near the ancient springs of Picuris Pueblo. Part of the string of missions following Rio Grande water sources.'],
  [35.67,-105.94, 'Pecos Mission (Nuestra Señora)', 1625, 'Massive mission church built at Pecos Pueblo, near springs that made the pueblo a major trade center. Destroyed during the Pueblo Revolt of 1680, rebuilt and later abandoned.'],
  [33.49,-112.07, 'Hohokam Canal Headgates', 1867, 'Jack Swilling\'s irrigation company reopened ancient Hohokam canals to water farmland — the founding act of modern Phoenix. The city\'s canal system follows ~70% of original Hohokam routes.']
];
moreSpanish.forEach(s => {
  L.marker([s[0],s[1]], {icon:spanishIcon}).addTo(L_groups.spanishSites)
    .bindPopup(`<h4>${s[2]}</h4><span class="ptype pt-spanish">Spanish/Colonial — ${s[3]}</span><div class="popup-what">Historic colonial site — location from NPS/state records</div>${s[4]}<div class="popup-src">📖 NPS National Register; state historic preservation offices; Kessell (1979)</div>`);
});

// ========================================================================
