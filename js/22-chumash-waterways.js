// ===== CHUMASH WATERWAYS — THE WATER STORY =====
// Rivers, dams, springs, estuaries, and creeks across Chumash territory
//
// Three categories visualized:
//   🔵 FLOWING: Rivers/creeks still intact or partly natural
//   🔴 DAMMED: Dams and diversions that altered the waterscape
//   🟢 SACRED: Springs, estuaries, lagoons — water features with cultural significance
//
// Sources: USGS; CA Water Resources; CalTrout; Wikipedia;
//          Harrington field notes; Santa Ynez Band of Chumash Indians;
//          Ventura River Watershed Council; NOAA

const CW_BLUE = '#42A5F5';   // Flowing rivers
const CW_RED  = '#EF5350';   // Dams / altered
const CW_GREEN = '#66BB6A';  // Sacred springs / estuaries
const CW_TEAL = '#26C6DA';   // River polylines


// ===== RIVER POLYLINES =====
// Simplified centerline coordinates for each major river

const chumashRivers = [

  // ---- SANTA YNEZ RIVER (92 mi) ----
  {name:"Santa Ynez River", color:CW_TEAL, weight:3, dashArray:null,
   status:"dammed",
   desc:"The heartland river of Chumash civilization — 92 miles from the Los Padres headwaters to the Pacific at Surf/Lompoc. Drains 896 square miles. " +
     "Once supported the <b>largest steelhead run south of San Francisco Bay</b> — estimated 25,000+ adults before Gibraltar Dam (1920) blocked the upper third. " +
     "Bradbury Dam (1953) ended migration entirely. <b>99% steelhead decline.</b> " +
     "Three dams now impound the river: Juncal (1930), Gibraltar (1920), Bradbury/Cachuma (1953). " +
     "Water is diverted through tunnels under the Santa Ynez Mountains to Santa Barbara — taking water from the Chumash watershed to feed the colonial city. " +
     "Zanja de Cota Creek, a year-round tributary, still flows through the Santa Ynez Reservation. " +
     "Beaver were historically present — Harrington recorded them on Zanja de Cota Creek before 1900. A Chumash pictograph of a beaver exists at Painted Rock. The Chumash word for beaver is <i>Chipik</i>.",
   coords:[[34.535,-119.495],[34.555,-119.535],[34.570,-119.570],[34.580,-119.610],[34.585,-119.655],
           [34.590,-119.700],[34.600,-119.745],[34.605,-119.780],[34.610,-119.830],[34.615,-119.870],
           [34.618,-119.920],[34.625,-119.960],[34.630,-120.010],[34.638,-120.060],[34.645,-120.110],
           [34.650,-120.160],[34.660,-120.210],[34.668,-120.260],[34.672,-120.310],[34.678,-120.360],
           [34.683,-120.400],[34.690,-120.440],[34.695,-120.480],[34.700,-120.520],[34.705,-120.560]]},

  // ---- CUYAMA RIVER ----
  {name:"Cuyama River", color:CW_TEAL, weight:2.5, dashArray:null,
   status:"dammed",
   desc:"Headwaters in the <b>Chumash Wilderness</b> at 8,000+ feet in the San Emigdio Mountains. The sacred river connecting Emigdiano interior to the coast. " +
     "Flows northwest through the Cuyama Valley — the Chumash word <i>kuyam</i> gives us 'Cuyama.' " +
     "Trade routes along the Cuyama and Santa Maria rivers connected coastal Chumash to Yokuts peoples in the San Joaquin Valley. " +
     "Grant (1965) recorded 41 painted rock art sites in the Cuyama Valley region. " +
     "<b>Twitchell Dam</b> on the lower Cuyama blocks steelhead access to 66 miles of spawning habitat. " +
     "Joins the Sisquoc River to form the Santa Maria River.",
   coords:[[34.830,-119.100],[34.850,-119.150],[34.870,-119.200],[34.890,-119.280],[34.910,-119.350],
           [34.930,-119.430],[34.940,-119.500],[34.950,-119.560],[34.960,-119.620],[34.970,-119.680],
           [34.975,-119.740],[34.980,-119.800],[34.985,-119.860]]},

  // ---- SISQUOC RIVER (50 mi) ----
  {name:"Sisquoc River", color:'#4DD0E1', weight:2, dashArray:null,
   status:"free",
   desc:"A 50-mile free-flowing river from headwaters in the <b>San Rafael Mountains</b> (Los Padres National Forest). " +
     "Drains the south slope of the Sierra Madre Ridge — below Sapaksi (House of the Sun). " +
     "Joins the Cuyama River to form the <b>Santa Maria River</b>. " +
     "One of the wildest rivers remaining in southern California — no dams on its course. " +
     "The Sweetwater and Jackson Trails descend from the sacred potreros on Sierra Madre Ridge to the Sisquoc, dropping 2,500 feet through some of the most remote terrain in Chumash territory.",
   coords:[[34.780,-119.620],[34.800,-119.680],[34.820,-119.740],[34.850,-119.800],[34.870,-119.840],
           [34.890,-119.870],[34.920,-119.900],[34.950,-119.930],[34.975,-119.960]]},

  // ---- SANTA MARIA RIVER ----
  {name:"Santa Maria River", color:CW_TEAL, weight:2.5, dashArray:null,
   status:"dammed",
   desc:"Formed at the confluence of the Sisquoc and Cuyama Rivers. Flows ~20 miles to the Pacific Ocean. " +
     "A major Chumash trade corridor — routes along the Santa Maria and Cuyama rivers connected coastal Chumash to Yokuts peoples in the southern San Joaquin Valley. " +
     "La Purísima Mission (1787) was established near the river.",
   coords:[[34.975,-119.960],[34.980,-120.020],[34.985,-120.080],[34.950,-120.150],[34.940,-120.220],
           [34.935,-120.290],[34.930,-120.360],[34.925,-120.420],[34.920,-120.480]]},

  // ---- VENTURA RIVER ----
  {name:"Ventura River (Shisholop)", color:CW_TEAL, weight:2.5, dashArray:null,
   status:"dammed",
   desc:"Called <b>Shisholop</b> by the Ventureño Chumash. 226 square miles of watershed, 100% locally supplied — no imported water. " +
     "The Chumash village of <b>Matilija</b> was a ranchería under Mission San Buenaventura. 'Matilija' is a Ventureño Chumash name whose meaning is now lost. " +
     "Major tributaries: Matilija Creek, North Fork Matilija Creek, San Antonio Creek, Coyote Creek, Cañada Larga. " +
     "<b>Matilija Dam</b> (1947) blocks steelhead to 10+ miles of spawning habitat — built against Army Corps advice that it would silt up. It did. Capacity reduced 90% by sediment. " +
     "A major project is underway to <b>remove Matilija Dam</b> — one of the largest dam removal projects in the West. Activists painted a dotted line and scissors on the dam face in 2011, featured in the film <i>DamNation</i>. " +
     "Robles Diversion Dam (1958) diverts river water to Lake Casitas. A $6 million fish ladder was built in 2006. " +
     "Historically, 5,000 steelhead spawned here. The Matilija Wilderness protects much of the headwaters.",
   coords:[[34.490,-119.430],[34.480,-119.390],[34.470,-119.355],[34.460,-119.330],[34.445,-119.310],
           [34.430,-119.300],[34.410,-119.290],[34.390,-119.285],[34.370,-119.280],[34.350,-119.275],
           [34.330,-119.280],[34.310,-119.285],[34.290,-119.295]]},

  // ---- SANTA CLARA RIVER (83 mi) ----
  {name:"Santa Clara River", color:CW_TEAL, weight:3, dashArray:null,
   status:"partly altered",
   desc:"83 miles — <b>one of the least altered rivers in southern California</b>. Drains 1,600 square miles across Ventura and Los Angeles counties. " +
     "The southern watershed was Chumash territory (Ventureño); the northern was Tataviam. " +
     "Major tributaries: Sespe Creek, Piru Creek, Santa Paula Creek, Castaic Creek. " +
     "Beaver were historically present — Harrington's Ventureño informants described beaver at Ventura and Saticoy: " +
     "'<i>The beaver comes and gnaws the tree on the side towards which it leans… The beaver builds its house in the river or the cienegas in the time of our ancestors.</i>' " +
     "A beaver skull collected in 1906 on Sespe Creek confirms the oral history. " +
     "Chumash village names survive as modern places: <b>Saticoy, Piru, Castaic, Sespe, Camulos</b>. " +
     "The estuary at McGrath State Beach still functions, though modified since 1855.",
   coords:[[34.390,-118.310],[34.395,-118.370],[34.400,-118.430],[34.405,-118.490],[34.400,-118.550],
           [34.395,-118.610],[34.385,-118.670],[34.375,-118.730],[34.360,-118.790],[34.345,-118.850],
           [34.330,-118.910],[34.315,-118.960],[34.300,-119.020],[34.290,-119.080],[34.280,-119.140],
           [34.270,-119.200],[34.265,-119.260]]},

  // ---- MALIBU CREEK ----
  {name:"Malibu Creek (Humaliwo)", color:CW_TEAL, weight:2, dashArray:null,
   status:"dammed",
   desc:"The river of <b>Humaliwo</b> — 'where the surf sounds loudly' — the Chumash village that gives us the name <b>Malibu</b>. " +
     "14 miles from Malibou Lake to Malibu Lagoon. Largest watershed in the Santa Monica Mountains (109 sq mi). " +
     "The only stream to bisect the entire Santa Monica Mountains. " +
     "Malibu Creek marks the <b>boundary between Chumash and Tongva (Gabrieliño) territories</b>. " +
     "The village of <b>ta'lopop</b> in what is now Malibu Creek State Park is one of the oldest known in the Santa Monica Mountains — home to Ventureño Chumash, Fernandeño Tataviam, and Tongva. " +
     "Humaliwo was a major village with remains dating to 7,000 years — listed on the National Register (1976). Cabrillo anchored here in 1542 and named it 'Pueblo de las Canoas' (Town of the Canoes). " +
     "<b>Rindge Dam</b> (1926) — 100 feet tall, completely silted up, blocks 70+ miles of historic steelhead habitat. " +
     "The <b>Malibu Creek Ecosystem Restoration Project</b> will remove Rindge Dam and reconnect 15 miles of critical habitat for endangered steelhead. Malibu Lagoon was restored in 2012 after severe pollution.",
   coords:[[34.095,-118.735],[34.085,-118.730],[34.078,-118.720],[34.068,-118.715],[34.058,-118.705],
           [34.048,-118.695],[34.040,-118.688],[34.035,-118.682]]},

  // ---- SESPE CREEK ----
  {name:"Sespe Creek", color:'#4DD0E1', weight:2, dashArray:null,
   status:"free",
   desc:"A major tributary of the Santa Clara River — <b>free-flowing</b> and designated a California Wild Trout Stream. " +
     "Flows through the Sespe Wilderness, established in 1992 to protect California condor habitat. " +
     "The Chumash village of <b>Sespe</b> gives us the name. " +
     "One of the last undammed significant streams in southern California. " +
     "Supports native steelhead populations. A beaver skull was collected here in 1906 by Dr. John Hornung.",
   coords:[[34.595,-119.100],[34.570,-119.050],[34.550,-119.000],[34.520,-118.950],[34.490,-118.900],
           [34.460,-118.850],[34.430,-118.800],[34.400,-118.750]]},

  // ---- PIRU CREEK ----
  {name:"Piru Creek", color:CW_TEAL, weight:2, dashArray:'6,4',
   status:"dammed",
   desc:"Major Santa Clara River tributary. The Chumash village of <b>Piru</b> gives us the name. " +
     "Santa Felicia Dam (1955) forms Lake Piru, blocking steelhead migration. " +
     "During the Gold Rush, Murrieta Canyon in the Matilija Wilderness was a route for miners traveling from Santa Barbara to gold diggings on Piru Creek.",
   coords:[[34.620,-118.770],[34.580,-118.740],[34.540,-118.720],[34.500,-118.700],[34.460,-118.680],
           [34.420,-118.650]]},

  // ---- ZANJA DE COTA CREEK ----
  {name:"Zanja de Cota Creek (Santa Ynez Reservation)", color:CW_GREEN, weight:2, dashArray:null,
   status:"flowing - tribal",
   desc:"A year-round flowing stream that meanders through the <b>Santa Ynez Chumash Reservation</b> — the only federally recognized Chumash tribal land. " +
     "Monitored monthly by the <b>Santa Ynez Chumash Environmental Office (SYCEO)</b> since 2008 for water quality, ecosystem health, and pollution sources. " +
     "Groundwater wells on the reservation are also monitored. Changes in the groundwater basin affect baseflow in the creek. " +
     "Harrington recorded beaver on Zanja de Cota Creek on or before 1900. " +
     "A tributary of the Santa Ynez River — joins near the town of Santa Ynez.",
   coords:[[34.630,-119.990],[34.628,-119.980],[34.625,-119.965],[34.622,-119.950],[34.620,-119.935]]}
];

// Render river polylines
chumashRivers.forEach(r => {
  const line = L.polyline(r.coords, {
    color: r.color,
    weight: r.weight,
    opacity: 0.75,
    dashArray: r.dashArray
  }).addTo(L_groups.chumashWaterways);

  const statusColor = r.status.includes('free') ? CW_GREEN :
                      r.status.includes('tribal') ? CW_GREEN :
                      r.status.includes('dammed') ? CW_RED : CW_BLUE;

  line.bindPopup(`
    <div style="max-width:440px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:${CW_TEAL};margin:0 0 4px;font-size:15px;">🌊 ${r.name}</h4>
      <div style="font-size:10px;color:${statusColor};margin-bottom:6px;font-weight:600;text-transform:uppercase;">${r.status}</div>
      <div style="font-size:12px;color:#ccc;line-height:1.55;">${r.desc}</div>
    </div>`, {maxWidth:460});
});


// ===== DAMS — THE COLONIAL WATER INFRASTRUCTURE =====
const chumashDams = [
  // Santa Ynez River dams
  {name:"Gibraltar Dam (1920)", lat:34.5580, lng:-119.5800,
   river:"Santa Ynez River",
   desc:"The first dam on the Santa Ynez River. Built by the City of Santa Barbara despite a 1916 recommendation from the California Fish and Game Commission to include a fish ladder — <b>none was ever built</b>. " +
     "Completely blocked steelhead migration to the upper third of the river. " +
     "Raised 23 feet in 1948 during drought emergency. As of 2019, sedimentation has reduced capacity to just <b>19% of original design</b>. " +
     "Water diverted through the Santa Barbara Water Tunnel under the Santa Ynez Mountains to serve the city. " +
     "The Bureau of Reclamation predicts the reservoir will stabilize at ~2,000 acre-feet due to flushing action, reaching that level around 2031.",
   type:"dam"},
  {name:"Juncal Dam / Jameson Lake (1930)", lat:34.5250, lng:-119.4800,
   river:"Upper Santa Ynez River",
   desc:"Built by Montecito Water District on the upper Santa Ynez River. Forms Jameson Lake. " +
     "Supplies water to Montecito via a tunnel under the Santa Ynez Mountains. " +
     "Did not further hinder ocean steelhead migration (already blocked by Gibraltar), but created a barrier to resident rainbow trout movement in the upper watershed.",
   type:"dam"},
  {name:"Bradbury Dam / Lake Cachuma (1953)", lat:34.5850, lng:-119.9850,
   river:"Santa Ynez River",
   desc:"The dam that killed the steelhead run. Built by the US Bureau of Reclamation. Lake Cachuma is 5 miles long, the largest reservoir on the river. " +
     "Before Bradbury Dam, the Santa Ynez had the <b>largest steelhead run south of San Francisco</b> — 25,000+ adults. After: <b>99% decline</b>. " +
     "Water diverted through the <b>Tecolote Tunnel</b> under the Santa Ynez Mountains to Santa Barbara, Goleta, Carpinteria, and Montecito. " +
     "'The Cachuma Project probably could not be built today since it destroyed thousands of acres of critical habitat, ruined a fishery, and <b>obliterated thousands of years of Chumash culture</b>.' " +
     "In 2023, the State Water Resources Control Board ordered improved flows and fish passage studies after 20 years of advocacy by CalTrout and the Environmental Defense Center.",
   type:"dam"},
  {name:"Twitchell Dam (1958)", lat:34.9600, lng:-120.2300,
   river:"Cuyama River (lower)",
   desc:"Built on the lower Cuyama River by the Army Corps of Engineers for flood control and groundwater recharge. " +
     "Blocks steelhead access to <b>66 miles of habitat and spawning grounds</b> in the Cuyama River system. " +
     "The Cuyama River headwaters in the Chumash Wilderness are among the most sacred waters in Chumash territory.",
   type:"dam"},

  // Ventura River dams
  {name:"Matilija Dam (1947) — SLATED FOR REMOVAL", lat:34.4850, lng:-119.3300,
   river:"Matilija Creek / Ventura River",
   desc:"Built on Matilija Creek against Army Corps advice that steep terrain would cause rapid siltation. <b>They were right — capacity reduced 90% by sediment.</b> " +
     "Built without a fish ladder. Historically 5,000 steelhead spawned in the Ventura River — dropped to a few hundred after the dam. " +
     "'Matilija' is a Ventureño Chumash village name under Mission San Buenaventura. " +
     "A <b>major removal project</b> has been underway since the late 1990s. In 2011, activists painted a dotted line and scissors on the dam face — featured in the film <i>DamNation</i>. " +
     "The latest plan ($111 million) would drill two 12-foot diameter holes in the dam base and let floods flush sediment naturally. " +
     "780,000 cubic yards of trapped sediment must be managed during removal.",
   type:"dam-removal"},
  {name:"Robles Diversion Dam (1958)", lat:34.4400, lng:-119.3150,
   river:"Ventura River",
   desc:"Diverts up to 107,800 acre-feet per year from the Ventura River through a 4.5-mile canal to <b>Lake Casitas</b>. " +
     "~40% of Lake Casitas water comes from Ventura River high flows. " +
     "A <b>$6 million fish ladder</b> was built in 2006, partially restoring fish passage past the diversion.",
   type:"diversion"},
  {name:"Casitas Dam / Lake Casitas (1959)", lat:34.3830, lng:-119.3320,
   river:"Coyote Creek (Ventura River tributary)",
   desc:"On Coyote Creek, a Ventura River tributary. Primary surface water supply for the Ojai Valley and surrounding communities. " +
     "The Ventura River watershed is <b>100% dependent on local water</b> — no imported water. Lake Casitas and groundwater are it.",
   type:"dam"},

  // Malibu Creek dam
  {name:"Rindge Dam (1926) — REMOVAL PLANNED", lat:34.0580, lng:-118.7000,
   river:"Malibu Creek",
   desc:"100-foot concrete arch dam built by the Rindge family on their vast ranch. <b>Completely silted up</b> — reservoir holds zero functional water. " +
     "Blocks steelhead from 70+ miles of historic habitat, restricting them to the lowest 2 miles of creek. " +
     "The <b>Malibu Creek Ecosystem Restoration Project</b> will remove the dam and reconnect 15 miles of aquatic habitat. " +
     "780,000 cubic yards of trapped sediment must be removed. " +
     "A Chumash elder conducted a blessing ceremony of the lagoon waters before the 2012 restoration began. " +
     "The village of <b>Humaliwo</b> at the creek's mouth gives us the name Malibu.",
   type:"dam-removal"},

  // Santa Clara River dam
  {name:"Santa Felicia Dam / Lake Piru (1955)", lat:34.5100, lng:-118.7500,
   river:"Piru Creek (Santa Clara tributary)",
   desc:"On Piru Creek, a major Santa Clara River tributary. The Chumash village of <b>Piru</b> was located nearby. " +
     "Blocks steelhead migration on Piru Creek. Lake Piru provides water storage and recreation.",
   type:"dam"}
];

chumashDams.forEach(d => {
  const isRemoval = d.type.includes('removal');
  const isDiversion = d.type === 'diversion';
  const markerColor = isRemoval ? '#FFA726' : isDiversion ? '#AB47BC' : CW_RED;
  const icon = L.divIcon({
    className:'',
    html:`<div style="width:${isRemoval?14:12}px;height:${isRemoval?14:12}px;background:${markerColor};border:2px solid #fff;border-radius:${isDiversion?'50%':'2px'};opacity:0.9;"></div>`,
    iconSize:[isRemoval?14:12,isRemoval?14:12], iconAnchor:[isRemoval?7:6,isRemoval?7:6]
  });

  const popup = `
    <div style="max-width:440px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:${markerColor};margin:0 0 4px;font-size:14px;">${isRemoval?'🔨':'🚫'} ${d.name}</h4>
      <div style="font-size:10px;color:${CW_TEAL};margin-bottom:4px;">${d.river}</div>
      <div style="font-size:12px;color:#ccc;line-height:1.55;">${d.desc}</div>
    </div>`;

  L.marker([d.lat, d.lng], {icon}).addTo(L_groups.chumashWaterways).bindPopup(popup, {maxWidth:460});
});


// ===== SPRINGS, ESTUARIES & SACRED WATERS =====
const sacredWaters = [
  {name:"Montgomery Springs — Sapaksi Sacred Waters", lat:34.8900, lng:-119.6480,
   type:"sacred spring",
   desc:"Five named springs surrounding the Painted Rock / Sapaksi site on Sierra Madre Ridge. In most years, the largest spring (Montgomery Spring No. 1) overflowed to form a <b>large seasonal pond</b>. " +
     "María Solares described a 'spring or pond of water' at the sacred site. " +
     "McCaslin (2016) reports the springs have now <b>dried</b> — one of his four reasons for relocating the campground. " +
     "The loss of these springs severs a living connection to the sacred landscape that Chumash people knew for millennia."},

  {name:"Gaviota Hot Springs", lat:34.5170, lng:-120.2280,
   type:"sacred spring",
   desc:"Natural hot springs in Gaviota State Park. Sacred thermal waters used by the Purisimeño Chumash. " +
     "A short trail leads to the springs in a small canyon. Water temperature averages ~100°F. " +
     "The Chumash understood hot springs as places of healing and spiritual power."},

  {name:"Matilija Hot Springs", lat:34.4950, lng:-119.3400,
   type:"sacred spring",
   desc:"Historic hot springs resort on Matilija Creek, below Matilija Dam. The Ventureño Chumash village of <b>Matilija</b> was located in this canyon. " +
     "The springs emerge from folded marine sedimentary rocks uplifted by tectonic compression. " +
     "Now within the Matilija Dam removal planning area."},

  {name:"Santa Ynez River Estuary", lat:34.6880, lng:-120.5700,
   type:"estuary",
   desc:"Where the Santa Ynez River meets the Pacific at Surf, near Lompoc and Vandenberg Space Force Base. " +
     "Significantly altered over the last 150 years — dam construction has reduced sediment and water reaching the coast. " +
     "Habitat for the endangered <b>tidewater goby</b>. Beaver dams in the lower river create slow-water habitat for gobies. " +
     "A 2010 restoration study found severe impacts from dam construction and upstream diversions."},

  {name:"Santa Clara River Estuary", lat:34.2350, lng:-119.2660,
   type:"estuary",
   desc:"At McGrath State Beach in Oxnard. A sand bar usually stands across the mouth. " +
     "Modified since at least 1855 — roads and agricultural fields established by the 1920s. The Ventura Water Reclamation Facility now occupies the former delta. " +
     "Designated a Natural Preserve within McGrath State Beach. Despite alterations, still provides critical habitat."},

  {name:"Malibu Lagoon — Humaliwo", lat:34.0355, lng:-118.6810,
   type:"estuary",
   desc:"The 13-acre lagoon at the mouth of Malibu Creek — site of the Chumash village <b>Humaliwo</b> ('where the surf sounds loudly'). " +
     "Cultural remains date to <b>7,000 years</b>. Listed on the National Register of Historic Places (1976). " +
     "Cabrillo anchored here in 1542 and named it 'Pueblo de las Canoas' — referring to the many Chumash tomol canoes. " +
     "Neighboring Chumash villages included ta'lopop (Malibu Canyon), Loxostox'ni (Lechuza Canyon), and Sumo (Point Dume). " +
     "The lagoon became severely polluted — UCLA found fecal contamination, Giardia, and Cryptosporidium. " +
     "A <b>major restoration in 2012</b> recontoured channels and removed pollutants, with a Chumash elder blessing the waters. Now a World Surfing Reserve."},

  {name:"Mugu Lagoon", lat:34.1070, lng:-119.0850,
   type:"estuary",
   desc:"Rich tidelands at Point Mugu — <b>Muwu</b> in Chumash, meaning 'beach.' " +
     "A launching site for <b>tomol</b> canoes making the half-day passage to Santa Cruz Island. " +
     "Trails connected the lagoon to Chumash villages in La Jolla Valley. " +
     "Now within the Naval Air Weapons Station Point Mugu / Pacific Missile Range Facility."},

  {name:"Carpinteria Salt Marsh", lat:34.3950, lng:-119.5280,
   type:"estuary",
   desc:"Near the Chumash village of <b>Mishopshno</b> (Carpinteria). One of the few remaining coastal salt marshes in southern California. " +
     "In Chumash cosmology, the rainbow bridge (wishtoyo) from Limuw (Santa Cruz Island) landed at <b>Tzchimoos</b>, the tall mountain near Mishopshno. " +
     "The tar seeps at Carpinteria were essential to Chumash life — asphaltum (bitumen) was used to waterproof tomol canoes, baskets, and tools."},

  {name:"Santa Barbara Channel — Tomol Crossing", lat:34.2000, lng:-119.7000,
   type:"channel crossing",
   desc:"The <b>Santa Barbara Channel</b> — the water highway of Chumash civilization. " +
     "Crossed by <b>tomol</b> plank canoes up to 30 feet long, built from driftwood redwood with asphaltum caulking. " +
     "The tomol enabled an elaborate trade network between the Channel Islands and mainland. " +
     "Shell bead money (<b>'achum</b>) minted by Island Chumash using olivella shells circulated throughout the region — the first currency system in California. " +
     "Today the <b>Chumash Maritime Association</b> continues the tradition of tomol crossings in partnership with Channel Islands National Marine Sanctuary and National Park. " +
     "In 2024, the <b>Chumash Heritage National Marine Sanctuary</b> was designated — protecting 4,543 square miles of ocean from Gaviota to Cambria."}
];

sacredWaters.forEach(s => {
  const isEstuary = s.type === 'estuary' || s.type === 'channel crossing';
  const color = s.type === 'sacred spring' ? CW_GREEN : CW_BLUE;
  const emoji = s.type === 'sacred spring' ? '💧' :
                s.type === 'channel crossing' ? '⛵' : '🌊';

  const icon = L.divIcon({
    className:'',
    html:`<div style="width:${isEstuary?12:10}px;height:${isEstuary?12:10}px;border-radius:50%;background:${color};opacity:0.8;border:2px solid rgba(255,255,255,0.6);"></div>`,
    iconSize:[isEstuary?12:10,isEstuary?12:10], iconAnchor:[isEstuary?6:5,isEstuary?6:5]
  });

  L.marker([s.lat, s.lng], {icon}).addTo(L_groups.chumashWaterways).bindPopup(`
    <div style="max-width:420px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:${color};margin:0 0 4px;font-size:14px;">${emoji} ${s.name}</h4>
      <div style="font-size:10px;color:${color};margin-bottom:4px;text-transform:uppercase;font-weight:600;">${s.type}</div>
      <div style="font-size:12px;color:#ccc;line-height:1.55;">${s.desc}</div>
    </div>`, {maxWidth:440});
});


// ===== WATERWAYS LEGEND =====
const waterLegend = L.control({position:'bottomleft'});
waterLegend.onAdd = function(){
  const d = L.DomUtil.create('div','info legend');
  d.style.cssText = 'background:rgba(20,20,20,0.88);padding:8px 10px;border-radius:6px;color:#ccc;font:11px "Source Sans Pro",sans-serif;line-height:1.7;max-width:200px;';
  d.innerHTML =
    '<b style="color:#E65100;">Chumash Waterways</b><br>' +
    '<span style="display:inline-block;width:18px;height:3px;background:#26C6DA;margin-right:4px;vertical-align:middle;"></span> Rivers & creeks<br>' +
    '<span style="display:inline-block;width:18px;height:3px;background:#4DD0E1;margin-right:4px;vertical-align:middle;"></span> Free-flowing<br>' +
    '<span style="display:inline-block;width:8px;height:8px;background:#EF5350;margin-right:4px;vertical-align:middle;border-radius:2px;"></span> Dams<br>' +
    '<span style="display:inline-block;width:8px;height:8px;background:#FFA726;margin-right:4px;vertical-align:middle;border-radius:2px;"></span> Dams slated for removal<br>' +
    '<span style="display:inline-block;width:8px;height:8px;background:#AB47BC;margin-right:4px;vertical-align:middle;border-radius:50%;"></span> Diversions<br>' +
    '<span style="display:inline-block;width:8px;height:8px;background:#66BB6A;margin-right:4px;vertical-align:middle;border-radius:50%;"></span> Sacred springs<br>' +
    '<span style="display:inline-block;width:8px;height:8px;background:#42A5F5;margin-right:4px;vertical-align:middle;border-radius:50%;"></span> Estuaries & lagoons';
  return d;
};
waterLegend.addTo(map);

// Hide/show legend with layer
map.on('overlayremove', function(e){ if(e.name==='chumashWaterways') waterLegend.remove(); });
map.on('overlayadd', function(e){ if(e.name==='chumashWaterways') waterLegend.addTo(map); });
