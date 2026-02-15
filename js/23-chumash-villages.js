// ===== CHUMASH VILLAGES — 150+ INDEPENDENT TOWNS =====
// "Before the Mission Period, the Chumash lived in 150 independent towns
//  and villages with a total population of at least 25,000 people."
//  — Santa Barbara Museum of Natural History
//
// Villages were constructed on high ground near lagoons, creek mouths,
// lakes, or springs. The largest towns were built along the mainland
// coast near the Santa Barbara Channel.
//
// Sources: Johnson 1988; King 1969; Applegate 1974/1975; Brown 1967;
//          Harrington field notes; NPS Channel Islands; Access Genealogy;
//          Goleta History; internationalphoneticalphabet.org;
//          SB Museum of Natural History

const CV_COLOR = '#FFAB40'; // Village marker color (warm amber)

const chumashVillages = [

  // ===========================
  // BARBAREÑO — SANTA BARBARA COAST
  // ===========================
  {name:"Syukhtun", modern:"Santa Barbara", lat:34.4150, lng:-119.6900,
   division:"Barbareño", pop:"~1,000",
   water:"Coastal — Mission Creek, lagoons",
   desc:"The <b>capital village</b> of the Chumash world — one of the largest settlements on the Pacific Coast. Population up to 1,000. " +
     "Located where downtown Santa Barbara stands today. The name lives on as the Chumash name for the Santa Barbara area. " +
     "A political center with hereditary chief (<i>wot</i>) who had authority over several surrounding settlements. " +
     "Each large village had a ceremonial dance ground enclosed by a tule-mat windbreak, a sweathouse (<i>'apa'yik</i>), and a sacred enclosure (<i>siliyik</i>) where priests conducted rituals. " +
     "Mission Santa Barbara (1786) was built facing the Channel Islands from this village's territory."},

  {name:"Mishopshno", modern:"Carpinteria", lat:34.3975, lng:-119.5180,
   division:"Barbareño", pop:"~600-800",
   water:"Carpinteria Salt Marsh, tar seeps",
   desc:"Major coastal village at present-day Carpinteria. In the creation story, the <b>rainbow bridge</b> (wishtoyo) from Limuw (Santa Cruz Island) landed at <b>Tzchimoos</b>, the tall mountain near Mishopshno. " +
     "The Carpinteria tar seeps were essential to Chumash life — <b>asphaltum</b> (bitumen) was used to waterproof tomol canoes, baskets, and tools. Spanish soldiers named the area 'La Carpinteria' (the carpentry shop) after watching Chumash build tomol canoes here. " +
     "The salt marsh provided rich habitat for shorebirds, fish, and shellfish."},

  {name:"Helo", modern:"Goleta / UCSB area", lat:34.4300, lng:-119.8300,
   division:"Barbareño", pop:"~500",
   water:"Goleta Slough / coastal lagoon",
   desc:"Village on the coast south of Goleta, near present-day UCSB. The Goleta Slough was a major food source — rich in fish, shellfish, and waterfowl. " +
     "One of several villages around the productive Goleta marshlands. Related villages: <b>Elhiman</b> and <b>Alwatalam</b> (in the Goleta marsh), <b>Sahpilil</b> (coast SW of Goleta)."},

  {name:"Mikiw", modern:"Dos Pueblos (western village)", lat:34.4450, lng:-119.9250,
   division:"Barbareño", pop:"~800",
   water:"Coastal — Naples Reef offshore",
   desc:"One of the 'Two Pueblos' — two Chumash villages side by side that Cabrillo documented in 1542, giving us the oldest European place name in Goleta. " +
     "Portolá's 1769 expedition estimated 60 houses and 800 people. <b>Mikiw</b> and neighboring <b>Kuyamu</b> thrived because of the abundant Naples Reef just offshore. " +
     "The people of Mikiw were said to be tall, slender, and light-complexioned — though modern historians question this oral tradition from Rosa Den Welch (1875). " +
     "227 years passed between Cabrillo's visit and the next European contact (Portolá 1769)."},

  {name:"Kuyamu", modern:"Dos Pueblos (eastern village)", lat:34.4440, lng:-119.9200,
   division:"Barbareño", pop:"~600",
   water:"Coastal — Naples Reef offshore",
   desc:"The second of the 'Two Pueblos.' Fr. Crespi described 'an Indian settlement of no less than 600 souls.' The Portolá expedition camped near Kuyamu and was immediately greeted with gifts of fresh fish. " +
     "The Chumash 'had been welcomed at most every village since Malibu and were growing weary of the all-night parties.'"},

  {name:"Amolomol", modern:"near Montecito", lat:34.4220, lng:-119.6200,
   division:"Barbareño", pop:"unknown",
   water:"Coastal — near Montecito Creek",
   desc:"Coastal village between Syukhtun and Mishopshno. One of the many settlements that lined the Santa Barbara Channel coast, spaced every 1-2 miles."},

  {name:"Onomyo", modern:"Gaviota", lat:34.4710, lng:-120.2280,
   division:"Barbareño/Purisimeño border", pop:"unknown",
   water:"Gaviota Creek, Gaviota Hot Springs",
   desc:"Village at Gaviota. An important village not mentioned by Cabrillo but archaeologically confirmed. Nearby <b>Anawupu</b> was on a small stream emptying into the Pacific at Gaviota. " +
     "Gaviota Hot Springs were sacred waters used for healing."},

  {name:"Elhelel", modern:"East of Santa Barbara", lat:34.4100, lng:-119.6500,
   division:"Barbareño", pop:"unknown",
   water:"Coastal",
   desc:"Coastal village east of Santa Barbara. Part of the dense chain of settlements lining the Channel coast."},

  {name:"Mismatuk", modern:"Arroyo Burro / Santa Barbara", lat:34.4050, lng:-119.7400,
   division:"Barbareño", pop:"unknown",
   water:"Arroyo Burro creek",
   desc:"Village in Arroyo Burro near Santa Barbara Mission. Located on one of the many small creeks draining the Santa Ynez Mountains to the coast."},

  // ===========================
  // VENTUREÑO — VENTURA COAST & SANTA CLARA RIVER
  // ===========================
  {name:"Shisholop", modern:"Ventura (San Buenaventura)", lat:34.2750, lng:-119.2930,
   division:"Ventureño", pop:"~500-800",
   water:"Ventura River mouth, coastal",
   desc:"Major village at the mouth of the <b>Ventura River</b>. The Chumash name for the river system. " +
     "Mission San Buenaventura (1782) was established here — the last mission founded personally by Fr. Serra. " +
     "Related village: <b>Chikachkach</b> at the actual river mouth."},

  {name:"Saticoy (Saaqtikoy)", modern:"Saticoy", lat:34.2830, lng:-119.1520,
   division:"Ventureño", pop:"unknown",
   water:"Santa Clara River",
   desc:"Village on the Santa Clara River. The name means <b>'it is sheltered from the wind'</b> in Ventureño. " +
     "Harrington's informants described beaver at Saticoy: '<i>The beaver builds its house in the river or the cienegas in the time of our ancestors. There were beavers at Ventura and also at Saticoy.</i>'"},

  {name:"Sespe (Seqpe)", modern:"near Fillmore", lat:34.4100, lng:-118.9200,
   division:"Ventureño", pop:"unknown",
   water:"Sespe Creek — free-flowing wild trout stream",
   desc:"Village on <b>Sespe Creek</b>, near Camulos. The name means <b>'kneecap'</b> in Ventureño. " +
     "Sespe Creek remains one of the last free-flowing significant streams in southern California. " +
     "The Sespe Wilderness (1992) protects condor habitat in the headwaters."},

  {name:"Piru (Piru)", modern:"Piru", lat:34.4150, lng:-118.7900,
   division:"Ventureño", pop:"unknown",
   water:"Piru Creek (Santa Clara tributary)",
   desc:"Village on Piru Creek. Santa Felicia Dam (1955) forms Lake Piru, blocking steelhead. " +
     "During the Gold Rush, miners used routes through Chumash territory from Santa Barbara to gold diggings on Piru Creek."},

  {name:"Castaic (Katq)", modern:"Castaic", lat:34.4890, lng:-118.6280,
   division:"Ventureño", pop:"unknown",
   water:"Castaic Creek (Santa Clara tributary)",
   desc:"Village at present-day Castaic Lake area. The name means <b>'the eye, the face'</b> in Ventureño. " +
     "Castaic Creek is a major Santa Clara River tributary draining the Liebre Mountains."},

  {name:"Camulos (Kamulus)", modern:"Camulos Ranch", lat:34.3880, lng:-118.8600,
   division:"Ventureño", pop:"unknown",
   water:"Santa Clara River",
   desc:"Village on the Santa Clara River. The name means <b>'the juniper'</b> in Ventureño. " +
     "Rancho Camulos, a National Historic Landmark, preserves the site. The ranch was the inspiration for Helen Hunt Jackson's novel <i>Ramona</i> (1884)."},

  {name:"Humaliwo", modern:"Malibu", lat:34.0360, lng:-118.6815,
   division:"Ventureño", pop:"large",
   water:"Malibu Creek / Malibu Lagoon",
   desc:"The village that gives us <b>Malibu</b> — meaning <b>'where the surf sounds loudly'</b> in Ventureño. " +
     "Cultural remains date to <b>7,000 years old</b>. Listed on the National Register (1976). " +
     "Cabrillo anchored here in 1542 and named it 'Pueblo de las Canoas' (Town of the Canoes). " +
     "Neighboring villages: <b>ta'lopop</b> (Malibu Canyon), <b>Sumo</b> (Point Dume/Zuma — 'abundance'), <b>Loxostox'ni</b> (Lechuza Canyon), <b>Hipuk</b> (Westlake Village). " +
     "Humaliwo was a landing site for ti'at plank canoes from Catalina Island (Tongva territory). " +
     "Point Mugu (<b>Muwu</b> — 'beach') was a tomol launching site for the half-day crossing to Santa Cruz Island."},

  {name:"Muwu", modern:"Point Mugu", lat:34.1070, lng:-119.0850,
   division:"Ventureño", pop:"unknown",
   water:"Mugu Lagoon — rich tidelands",
   desc:"Village at the mouth of Mugu Lagoon. The name means <b>'beach'</b> in Ventureño. " +
     "A launching site for <b>tomol</b> canoes making the half-day passage to Santa Cruz Island. " +
     "Trails connected the lagoon tidelands to villages in La Jolla Valley. " +
     "Now within Naval Air Weapons Station Point Mugu."},

  {name:"Hueneme (Wenemu)", modern:"Port Hueneme", lat:34.1480, lng:-119.1950,
   division:"Ventureño", pop:"unknown",
   water:"Coastal",
   desc:"Village at present-day Port Hueneme. The name means <b>'sleeping place'</b> in Ventureño. " +
     "One of the coastal villages between Mugu and Ventura."},

  {name:"Simi (Imiyi)", modern:"Simi Valley", lat:34.2690, lng:-118.7810,
   division:"Ventureño", pop:"unknown",
   water:"Arroyo Simi / Simi Hills springs",
   desc:"Inland village in the Simi Valley. The meaning of the name is uncertain. " +
     "Burro Flats Painted Cave, the globally significant solstice-marking rock art site, is in the Simi Hills nearby."},

  {name:"Ojai (Awhay)", modern:"Ojai", lat:34.4480, lng:-119.2430,
   division:"Ventureño", pop:"unknown",
   water:"Ventura River / San Antonio Creek",
   desc:"Village in the Ojai Valley. The name means <b>'moon'</b> in Ventureño. " +
     "The Ojai Valley sits at the heart of the Ventura River watershed — 100% dependent on local water, no imports. " +
     "Matilija Creek, the main Ventura River tributary, drains from the Matilija Wilderness through this valley."},

  {name:"Matilija (Matilha)", modern:"Matilija Canyon", lat:34.4850, lng:-119.3400,
   division:"Ventureño", pop:"unknown",
   water:"Matilija Creek — dammed (1947)",
   desc:"Village on Matilija Creek. The name may mean <b>'division'</b> in the Ojai dialect of Ventureño. " +
     "A ranchería under Mission San Buenaventura. Chumash collected dogbane (<i>Apocynum cannabinum</i>) from these canyons for fiber, and harvested pitch and nuts from pine trees. " +
     "Matilija Dam (1947) — built against Army Corps advice — is now slated for removal."},

  {name:"Nupu", modern:"Santa Paula", lat:34.3540, lng:-119.0590,
   division:"Ventureño", pop:"unknown",
   water:"Santa Paula Creek / Santa Clara River",
   desc:"Village at present-day Santa Paula, on the Santa Clara River."},

  {name:"Somis (Soms)", modern:"Somis", lat:34.2900, lng:-119.0000,
   division:"Ventureño", pop:"unknown",
   water:"springs",
   desc:"Village near Ojai. The name means <b>'scrub-oak spring'</b> in Ventureño. " +
     "The spring-fed water source encoded in the name itself tells us why this village was here."},

  // ===========================
  // INESEÑO / SAMALA — SANTA YNEZ VALLEY
  // ===========================
  {name:"Soxtonocmu'", modern:"Santa Ynez Valley", lat:34.6300, lng:-119.9800,
   division:"Ineseño (Samala)", pop:"large",
   water:"Santa Ynez River / Zanja de Cota Creek",
   desc:"Dominant polity of the inland Chumash network (Santa Ynez Valley). The political center that controlled subsidiary villages including <b>Hawamiw</b>. " +
     "Located near the modern town of Santa Ynez, where the <b>Santa Ynez Reservation</b> (127 acres) is the homeland of the only federally recognized Chumash tribe."},

  {name:"Cachuma (Aqicum)", modern:"Cachuma area (now under Lake Cachuma)", lat:34.5850, lng:-119.9500,
   division:"Ineseño (Samala)", pop:"unknown",
   water:"Santa Ynez River / Cachuma Creek — NOW INUNDATED",
   desc:"Village in Cachuma Canyon. The name is said to mean <b>'a constant sign'</b> in Ineseño. " +
     "<b>This village site is now under Lake Cachuma</b>, inundated when Bradbury Dam was completed in 1953. " +
     "The dam 'obliterated thousands of years of Chumash culture.' The modern lake and county park bear the village's name."},

  {name:"Jonata (Xonxoni'ata)", modern:"near Los Olivos", lat:34.6700, lng:-119.9400,
   division:"Ineseño/Purisimeño", pop:"unknown",
   water:"Santa Ynez River tributaries",
   desc:"Village near present-day Los Olivos. The name means <b>'tall oak'</b> in Purisimeño. " +
     "Modern Rancho San Fernando Rey (Jonata Ranch) preserves the name."},

  {name:"Stuke (Stuk)", modern:"Stuke Canyon, E of Santa Ynez", lat:34.6200, lng:-119.9300,
   division:"Ineseño (Samala)", pop:"unknown",
   water:"Santa Ynez River tributary",
   desc:"Village in a canyon east of Santa Ynez. The name means <b>'wooden bowl'</b> in Ineseño."},

  {name:"Tequepis (Teqeq)", modern:"Tequepis Canyon / Lake Cachuma", lat:34.5900, lng:-120.0100,
   division:"Ineseño (Samala)", pop:"unknown",
   water:"Tequepis Creek / Santa Ynez River",
   desc:"Village in Tequepis Canyon, south of Lake Cachuma. Meaning uncertain. " +
     "Cachuma County Park is located near Tequepis Point today."},

  {name:"Onohwi", modern:"near Nojoqui Falls", lat:34.5900, lng:-120.1700,
   division:"Ineseño (Samala)", pop:"unknown",
   water:"Nojoqui Creek (Santa Ynez tributary)",
   desc:"Village on Nojoqui Creek, a branch of the Santa Ynez River. Nojoqui Falls, a 164-foot waterfall, is one of the most beautiful water features in Chumash territory."},

  // ===========================
  // PURISIMEÑO — LOMPOC / SANTA MARIA
  // ===========================
  {name:"Lompoc (Lompo)", modern:"Lompoc", lat:34.6390, lng:-120.4580,
   division:"Purisimeño", pop:"unknown",
   water:"Santa Ynez River (lower)",
   desc:"Village near present-day Lompoc. The name may mean <b>'in the cheeks'</b> or <b>'stagnant water / lagoon'</b> in Purisimeño. " +
     "Mission La Purísima Concepción (1787) was established nearby. Site of the <b>1824 Chumash Revolt</b> — warriors occupied the mission for a month before Mexican soldiers retook it."},

  {name:"Nipomo (Nipumu)", modern:"Nipomo", lat:35.0430, lng:-120.4760,
   division:"Purisimeño/Obispeño", pop:"unknown",
   water:"Nipomo Creek",
   desc:"Village at present-day Nipomo. May mean <b>'village'</b> in Obispeño or <b>'at the promontory'</b> in Purisimeño."},

  {name:"Sisquoc (Asuskwa)", modern:"Sisquoc River", lat:34.8700, lng:-120.0100,
   division:"Purisimeño", pop:"unknown",
   water:"Sisquoc River — free-flowing",
   desc:"Village or campsite on the <b>Sisquoc River</b>. The name is said to mean <b>'stopping place'</b> in Purisimeño. " +
     "The modern name applies to the river itself — 50 miles, free-flowing, one of the wildest rivers in southern California."},

  {name:"Halam", modern:"Jalama Beach", lat:34.5100, lng:-120.5000,
   division:"Purisimeño", pop:"unknown",
   water:"Jalama Creek — coastal",
   desc:"Village on Jalama Creek near the coast. The name means <b>'bundle'</b> in Purisimeño. " +
     "Jalama Beach remains one of the most remote and undeveloped beaches in Santa Barbara County."},

  {name:"Zaca (Asaka)", modern:"Zaca Station / Los Olivos", lat:34.7200, lng:-119.8600,
   division:"Purisimeño", pop:"unknown",
   water:"Zaca Creek (Santa Ynez tributary)",
   desc:"Village at Zaca Station. The name means <b>'in the bed'</b> in Purisimeño. " +
     "Zaca Creek joins the Santa Ynez River north of Buellton. The wine country of the Santa Ynez Valley occupies this ancient Chumash landscape."},

  {name:"Pedernales ('Anokio)", modern:"Point Pedernales", lat:34.5700, lng:-120.6400,
   division:"Purisimeño", pop:"unknown",
   water:"Coastal",
   desc:"Village at Point Pedernales on the coast. Now within Vandenberg Space Force Base. " +
     "The Kagismuwas Chumash had their historical lands in this area."},

  // ===========================
  // OBISPEÑO — SAN LUIS OBISPO
  // ===========================
  {name:"Pismu", modern:"Pismo Beach", lat:35.1430, lng:-120.6410,
   division:"Obispeño", pop:"unknown",
   water:"Pismo Creek / coastal",
   desc:"Village near present-day Pismo Beach. The name means <b>'tar'</b> in Obispeño — referring to the natural asphaltum seeps that were vital to Chumash technology."},

  {name:"Kasmali", modern:"Casmalia", lat:34.8300, lng:-120.5300,
   division:"Purisimeño", pop:"unknown",
   water:"near San Antonio Creek",
   desc:"Village near present-day Casmalia. The name means <b>'it is the last'</b> in Purisimeño — suggesting it was the last village in a chain along the coast or a route."},

  // ===========================
  // EMIGDIANO — INTERIOR / SAN EMIGDIO
  // ===========================
  {name:"Tecuya (Takuy)", modern:"Tecuya Creek", lat:34.8300, lng:-118.9800,
   division:"Emigdiano", pop:"unknown",
   water:"Tecuya Creek",
   desc:"Village on Tecuya Creek, west of Tejon. The name may mean <b>'holding'</b> in Ventureño. " +
     "One of three Emigdiano villages at canyon apertures with marriage ties connecting the interior network. " +
     "The Tecuya Chumash were established as an anti-colonial group during the mission period."},

  {name:"Matapuan", modern:"San Emigdio Hills", lat:34.9100, lng:-119.1500,
   division:"Emigdiano", pop:"unknown",
   water:"San Emigdio Creek",
   desc:"Emigdiano village at a canyon aperture in the San Emigdio Hills. " +
     "Marriage ties connected Matapuan, Tashlipun, and Tecuya to the larger Emigdiano network centered on K'o'owhsup. " +
     "Located near the Wind Wolves Preserve, home to the Pleito and Three Springs rock art sites with their extraordinary blue pigments."},

  {name:"Tashlipun", modern:"San Emigdio Hills", lat:34.9000, lng:-119.1200,
   division:"Emigdiano", pop:"unknown",
   water:"San Emigdio area creeks",
   desc:"Emigdiano village adjacent to Matapuan. Part of the interior network of villages at canyon apertures controlling access between the San Joaquin Valley and the mountain passes."},

  // ===========================
  // CUYAMA — SIERRA MADRE RIDGE
  // ===========================
  {name:"Kuyam", modern:"Cuyama Valley", lat:34.9500, lng:-119.6200,
   division:"Cuyama", pop:"unknown",
   water:"Cuyama River",
   desc:"Village on the Cuyama River. The word may relate to <b>'to rest, wait'</b> in Ineseño — perhaps a resting place on the route between the coast and interior. " +
     "Gives us the modern name <b>Cuyama</b>. Grant recorded 41 painted rock art sites in the Cuyama Valley region."},

  // ===========================
  // ISLAND CHUMASH — CHANNEL ISLANDS
  // ===========================
  {name:"Limuw villages (11 sites)", modern:"Santa Cruz Island", lat:34.0100, lng:-119.7500,
   division:"Island Chumash", pop:"~2,000+ total",
   water:"Island springs and seasonal creeks",
   desc:"<b>Limuw</b> — 'in the sea' — Santa Cruz Island, the largest of the Channel Islands. 11 village sites identified. " +
     "In the creation story, <b>Hutash</b> (Earth Mother) created the first Chumash people here. When the island grew crowded, she built a rainbow bridge to the mainland. " +
     "Key villages: <b>Ch'oloshush</b> (west end — 'a group of sea birds'), <b>Xaxas</b> (major village — NPS documented), <b>Liyam</b> ('to descend' — where creeks funneled together), <b>Nanawani</b> ('sky/up/above'), <b>Lu'upsh</b> ('put it in' — a canoe landing place). " +
     "Shell bead money (<b>'achum</b>) was minted here using olivella shells and Santa Cruz Island chert drills — the currency of the Chumash economy."},

  {name:"Wima villages (8 sites)", modern:"Santa Rosa Island (Wimaɬ)", lat:33.9600, lng:-120.1000,
   division:"Island Chumash", pop:"~1,000+",
   water:"Limited springs — seasonal",
   desc:"<b>Wimaɬ</b> — Santa Rosa Island. 8 village sites identified. " +
     "Key villages: <b>Nawani</b> (west coast), <b>Niakla</b> (north coast), <b>Nila'Ihuyu</b> (south coast), <b>Niimkulkiil</b> (near west end). " +
     "<b>Arlington Springs</b> on this island yielded human remains dating to <b>13,000+ years</b> — among the oldest in North America. " +
     "Phil Orr's pioneering radiocarbon dating work in the 1940s-60s established the deep antiquity of Channel Islands occupation."},

  {name:"Tuqan villages (2 sites)", modern:"San Miguel Island", lat:34.0400, lng:-120.3600,
   division:"Island Chumash", pop:"small",
   water:"Very limited — harsh conditions",
   desc:"<b>Tuqan</b> — San Miguel Island. 2 village sites identified. The most remote and windswept of the Channel Islands. " +
     "Continuous occupation from 8,000-11,000 years ago documented by archaeological sites. " +
     "Cabrillo died here in 1543 and was buried on the island — making it also a site of the first European death in Alta California."},

  {name:"Anyapax", modern:"Anacapa Island", lat:34.0150, lng:-119.3700,
   division:"Island Chumash", pop:"seasonal only",
   water:"NO consistent water source",
   desc:"<b>Anyapax</b> — said to mean <b>'mirage, illusion'</b> in Ventureño. The smallest inhabited island. " +
     "Likely used seasonally due to lack of a consistent water source — the Chumash understood that water determined where you could live. " +
     "The modern spelling 'Anacapa' is due to an early cartographer's error."}
];


// ===== RENDER VILLAGE MARKERS =====
chumashVillages.forEach(v => {
  const isCapital = v.name.includes('Syukhtun') || v.name.includes('Limuw');
  const isInundated = v.desc.includes('under Lake Cachuma');
  const size = isCapital ? 12 : (v.pop && v.pop.includes('1,000') ? 10 : 8);

  const markerColor = isInundated ? '#EF5350' : CV_COLOR;

  const icon = L.divIcon({
    className:'',
    html:`<div style="width:${size}px;height:${size}px;border-radius:50%;background:${markerColor};border:2px solid rgba(255,255,255,0.7);opacity:0.9;${isCapital?'box-shadow:0 0 6px rgba(255,171,64,0.6);':''}"></div>`,
    iconSize:[size,size], iconAnchor:[size/2,size/2]
  });

  const popup = `
    <div style="max-width:420px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:${CV_COLOR};margin:0 0 2px;font-size:15px;">🏘️ ${v.name}</h4>
      <div style="font-size:11px;color:#aaa;margin-bottom:4px;">
        <b>Modern:</b> ${v.modern} · <b>Division:</b> ${v.division}${v.pop ? ' · <b>Pop:</b> ' + v.pop : ''}
      </div>
      <div style="font-size:10px;color:#26C6DA;margin-bottom:4px;">💧 ${v.water}</div>
      <div style="font-size:12px;color:#ccc;line-height:1.55;">${v.desc}</div>
      <div style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(255,171,64,0.15);padding-top:4px;">
        Sources: Johnson 1988; Applegate 1974; King 1969; Harrington; NPS
      </div>
    </div>`;

  L.marker([v.lat, v.lng], {icon}).addTo(L_groups.chumashVillages).bindPopup(popup, {maxWidth:440});
});


// ===== SURVIVING PLACENAMES INFO MARKER =====
// A special marker noting the 40+ Chumash placenames still in use
const placenamesMarker = L.marker([34.55, -119.30], {
  icon: L.divIcon({
    className:'',
    html:'<div style="background:rgba(255,171,64,0.15);border:1px dashed rgba(255,171,64,0.5);border-radius:4px;padding:2px 6px;font:10px \'Source Sans Pro\',sans-serif;color:#FFAB40;white-space:nowrap;">40+ surviving Chumash placenames</div>',
    iconSize:[170,18], iconAnchor:[85,9]
  })
}).addTo(L_groups.chumashVillages);

placenamesMarker.bindPopup(`
  <div style="max-width:400px;font-family:'Source Sans Pro',sans-serif;">
    <h4 style="color:${CV_COLOR};margin:0 0 6px;">🗣️ Chumash Placenames Still Surviving</h4>
    <div style="font-size:12px;color:#ccc;line-height:1.55;">
      Over <b>40 Chumash placenames</b> survive as the names of rivers, creeks, canyons, mountains, and towns across their territory. The correspondence between the original name and its modern equivalent is seldom exact, but the linguistic DNA of the Chumash world persists in the landscape:<br><br>
      <b>Malibu</b> (Humaliwo) — 'where the surf sounds loudly'<br>
      <b>Ojai</b> (Awhay) — 'moon'<br>
      <b>Cuyama</b> (Kuyam) — 'to rest, wait'<br>
      <b>Pismo</b> (Pismu) — 'tar'<br>
      <b>Lompoc</b> (Lompo) — 'stagnant water / lagoon'<br>
      <b>Castaic</b> (Katq) — 'the eye, the face'<br>
      <b>Saticoy</b> (Saaqtikoy) — 'sheltered from the wind'<br>
      <b>Sespe</b> (Seqpe) — 'kneecap'<br>
      <b>Simi</b> (Imiyi) — meaning unknown<br>
      <b>Anacapa</b> (Anyapax) — 'mirage, illusion'<br>
      <b>Port Hueneme</b> (Wenemu) — 'sleeping place'<br>
      <b>Point Mugu</b> (Muwu) — 'beach'<br>
      <b>Nipomo</b> (Nipumu) — 'village'<br>
      <b>Somis</b> (Soms) — 'scrub-oak spring'<br>
      <b>Camulos</b> (Kamulus) — 'the juniper'<br>
      <b>Jalama</b> (Xalam) — 'bundle'<br>
      <b>Matilija</b> (Matilha) — 'division'
    </div>
    <div style="font-size:10px;color:#888;margin-top:6px;">Sources: Applegate 1974, 1975; internationalphoneticalphabet.org</div>
  </div>`, {maxWidth:420});
