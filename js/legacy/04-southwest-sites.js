const spanish = [
  [32.22,-110.97,'San Xavier del Bac',1692,'Established near Tohono O\'odham water sources along the Santa Cruz River. The "White Dove of the Desert."'],
  [33.75,-112.07,'Hohokam Canal Reuse',1694,'Father Kino documented Pima Indians still using Hohokam canals for irrigation on the Gila River.'],
  [31.95,-110.95,'Presidio San Agustín del Tucson',1775,'Founded at the confluence of the Santa Cruz River and Rillito Creek — a natural indigenous gathering point.'],
  [31.34,-110.05,'Presidio Santa Cruz de Terrenate',1776,'Built on the San Pedro River near indigenous water sources. Abandoned after Apache attacks.'],
  [35.69,-105.94,'Santa Fe',1610,'Capital established near Pueblo water management systems. Santa Fe River was diverted into acequias.'],
  [36.79,-105.97,'Taos Pueblo Encounter',1540,'Coronado expedition reached Taos Pueblo, continuously inhabited 1000+ years along the Rio Pueblo de Taos.']
];
spanish.forEach(s => L.marker([s[0],s[1]],{icon:spanishIcon}).addTo(L_groups.spanishSites).bindPopup(`<h4>${s[2]}</h4><span class="ptype pt-spanish">Spanish Colonial — ${s[3]}</span><div class="popup-what">Historic colonial site — location from NPS/state records</div>${s[4]}<div class="popup-src">📖 Bolton, "Rim of Christendom" (1936); NPS National Register; Kessell, "Kiva, Cross, and Crown" (1979)</div>`));

// ========== SW INDIGENOUS SITES ==========
const swSites = [
  [36.06,-112.14,'Grand Canyon Puebloan Sites','4,300+ sites spanning 12,000 years. Pictographs, granaries, seasonal camps near springs and the river.'],
  [36.06,-107.97,'Chaco Canyon','Center of Ancestral Puebloan civilization ~850-1150 CE. Water management was central — check dams, irrigation channels, collection basins.'],
  [36.43,-108.5,'Aztec Ruins','Great house on the Animas River connected to Chaco by ancient road. ~1100-1300 CE.'],
  [37.19,-108.49,'Mesa Verde','600+ cliff dwellings built ~1190-1300 CE near springs seeping from sandstone. Left ~1300 CE, likely drought.'],
  [33.45,-111.95,'Pueblo Grande','Platform mound on Hohokam canals. Park of Four Waters preserves visible canal remnants. Museum in Phoenix.'],
  [32.99,-111.53,'Casa Grande Ruins','4-story Hohokam structure ~1350 CE on the Gila River. Largest pre-contact structure in the SW.'],
  [34.61,-111.84,'Montezuma Castle','Sinagua cliff dwelling above Beaver Creek. 20 rooms, 5 stories. ~1100-1425 CE.'],
  [34.65,-111.75,'Montezuma Well','Natural sinkhole fed by 1.5M gallons/day from springs. Sinagua irrigation ditches still carry water today.'],
  [34.84,-111.76,'Tuzigoot','Large Sinagua pueblo, 110 rooms overlooking Verde River. ~1125-1400 CE.'],
  [35.3,-109.08,'Puerco Pueblo','100-room pueblo on the Puerco River with solar calendar petroglyphs. ~1250-1380 CE.'],
  [36.8,-111.5,'Navajo National Monument','Betatakin & Keet Seel cliff dwellings near springs. ~1250-1300 CE.'],
  [35.15,-109.93,'Homolovi','Ancestral Hopi pueblos on the Little Colorado River. ~1260-1400 CE.'],
  [35.08,-108.05,'El Morro','Permanent pool at base of sandstone mesa attracted indigenous peoples then Spanish. Atsinna Pueblo ~1275-1350 CE.'],
  [36.79,-105.97,'Taos Pueblo','Continuously inhabited 1000+ years. Rio Pueblo flows through center. UNESCO World Heritage Site.'],
  [35.04,-107.54,'Acoma Pueblo (Sky City)','Atop 367-ft mesa since ~1100 CE. Water cisterns carved into rock. One of oldest continuously inhabited settlements in North America.'],
  [36.95,-110.1,'Monument Valley','Sacred Navajo landscape. Seasonal washes and springs in sandstone. Petroglyphs in sheltered alcoves.'],
  [35.98,-106.97,'Bandelier','Frijoles Canyon year-round stream supported large community ~1150-1550 CE. Cavate dwellings in volcanic tuff.'],
  [33.35,-111.73,'Snaketown','Largest Hohokam village ~300 BCE-1100 CE. 100+ pit houses, ball courts. On Gila River Indian Reservation (closed to public).'],
  [35.67,-108.65,'El Malpais','Lava tubes & natural cisterns provided water/shelter. Multi-era petroglyphs throughout.'],
  [33.45,-111.43,'Park of the Canals','One of few places to see remnants of Hohokam canals dug before the time of Christ. Mesa, AZ.']
];
swSites.forEach(s => L.marker([s[0],s[1]],{icon:swIcon}).addTo(L_groups.swSites).bindPopup(`<h4>${s[2]}</h4><span class="ptype pt-site">Indigenous Site — Southwest</span><div class="popup-what">Archaeological/cultural site — location from NPS, BLM, or tribal records</div>${s[3]}<div class="popup-src">📖 NPS site documentation; Archaeology Southwest; Lekson, "A History of the Ancient Southwest" (2009)</div>`));

// ========== JOSHUA TREE ROCK ART (from your CSV) ==========
const jtData = [
[34.031886,-116.149947,"Alisters Cave","Pictograph","Possibly above old riverbed","Cahuilla"],
[34.03175,-116.149433,"Bloody Hands","Pictograph","Near Alisters Cave","Cahuilla"],
[34.065558,-116.113514,"Butchers Cave","Artifacts","Big horn sheep skulls found","Chemehuevi"],
[34.032228,-116.102336,"Diamond Shelter","Pictograph","Tally marks and diamonds and sun",""],
[34.026178,-116.146978,"Disney","Pictograph","Real pictographs with other ones painted over by Disney",""],
[34.023228,-116.1652,"Hidden Valley Camp Ground","Pictograph","",""],
[34.031889,-116.107058,"High Noon","Pictographs in orange ink","Pictographs and one petroglyph; room to stand up inside",""],
[33.926883,-116.075278,"Pleasant Valley","Petroglyphs","Near Serrano village of Squaw Tank",""],
[34.048031,-116.121539,"Queen Mountain","Pictographs","Big horn sheep skulls found near here",""],
[34.042064,-116.091706,"Queen Valley Boulder","Pictographs","",""],
[34.026717,-116.141064,"Red Lady","Pictographs","","Chemehuevi"],
[34.024111,-116.155278,"Brunette Lady","Pictographs","","Chemehuevi"],
[33.983536,-116.151108,"Ryan Ranch Habitation Area","Village site","",""],
[34.028503,-116.150881,"Slab Rock","Shelter Pictographs","",""],
[34.042786,-116.1457,"Surprise Rock","Pictographs","",""],
[33.987692,-116.037425,"Twin Tanks","Cupules","","Chemehuevi"],
[33.739928,-115.684361,"Careys Castle","Pictographs","",""],
[33.959128,-116.016372,"Stirrup Tank","Habitation Area","",""],
[33.982542,-116.011906,"Arch","Petroglyphs","",""],
[33.707042,-115.608097,"Hayfield","Petroglyphs","","Mojave (?)"],
[33.708478,-115.595792,"Hayfield 2","Petroglyphs","","Mojave (?)"]
];
jtData.forEach(s => {
  const tribe = s[5] ? ` — ${s[5]}` : '';
  const notes = s[4] ? `<br><em>${s[4]}</em>` : '';
  const icon = raIcon(s[3], RA_COLORS.jtree, 8);
  L.marker([s[0],s[1]],{icon}).addTo(L_groups.jtreeSites)
    .bindPopup(`<h4>${s[2]}</h4><span class="ptype pt-jtree">${s[3]}${tribe} — Joshua Tree NP</span><div class="popup-what">Rock art site — GPS from field survey data</div>${notes}<div class="popup-src">📖 User-provided CSV dataset (California Petroglyphs); NPS Joshua Tree NP cultural resources</div>`);
});

// ========== EAST BAY HILLS (from your KMZ — 289 sites) ==========
