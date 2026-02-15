// ===== CHUMASH TRADE NETWORK — THE FIRST MONEY IN THE AMERICAS =====
// "The Chumash Indians produced, used, and traded shell beads for
//  approximately 8,000–10,000 years. Their exchange network included
//  an extensive portion of Western North America."
//  — Gamble 2025, Frontiers in Human Dynamics
//
// "This may be the first example of the use of money anywhere in the
//  Americas at this time." — Lynn Gamble, UCSB (on 2,000-year-old beads)
//
// "94% of obsidian artifacts on the Channel Islands comes from the
//  Coso Volcanic Field located ~300 km or more from the islands."
//  — Hughes et al., Journal of Island and Coastal Archaeology
//
// Sources: Gamble 2008, 2020, 2025; King 1976, 2011; Hughes 2011;
//          Arnold 2001; NPS Channel Islands; Encyclopedia.com (Tomol);
//          Ericson & Singer 1971; Brown & Poister (asphaltum)

const TN_GOLD = '#FFD54F';     // Shell bead / money routes
const TN_OBSIDIAN = '#7E57C2'; // Obsidian trade
const TN_TAR = '#5D4037';      // Asphaltum
const TN_BLUE = '#42A5F5';     // Tomol sea routes
const TN_HUB = '#FF8F00';      // Trade hubs

// ===== TOMOL CHANNEL CROSSING ROUTES =====
const tomolRoutes = [
  {name:"Syukhtun → Limuw (Santa Barbara → Santa Cruz Island)",
   coords:[[34.4100, -119.6900],[34.0500, -119.7200],[34.0100, -119.7500]],
   desc:"The primary <b>tomol crossing</b> — a full day's paddle across the Santa Barbara Channel from Syukhtun to Limuw. " +
     "The tomol, a sewn redwood plank canoe, required an estimated <b>180-540 person-days of labor</b> to build. " +
     "Raw materials: redwood driftwood from northern California, one mile of dogbane/milkweed cordage (cultivated stands), asphaltum + pine pitch (yop) for caulking, sharkskin for sanding, red ochre for staining, abalone for inlay. " +
     "The <b>Brotherhood of the Tomol</b> was the most powerful guild in Chumash society — its members held high social status and close ties to both religious ('antap) and political leadership. " +
     "In 2001, the Chumash Maritime Association paddled the tomol <i>Elye'wun</i> (Swordfish) from mainland to Santa Cruz Island — the first crossing since the mid-1800s."},

  {name:"Muwu → Limuw (Point Mugu → Santa Cruz Island)",
   coords:[[34.1070, -119.0850],[34.0600, -119.2500],[34.0300, -119.5000],[34.0100, -119.7500]],
   desc:"The <b>southern crossing route</b> — from Mugu Lagoon to Santa Cruz Island, with possible stops at Anacapa. " +
     "Muwu ('beach') was a major tomol launching site. The trail from La Jolla Valley to the lagoon connected interior villages to the sea route."},

  {name:"Mishopshno → Wima (Carpinteria → Santa Rosa Island)",
   coords:[[34.3975, -119.5180],[34.1500, -119.7000],[33.9600, -120.1000]],
   desc:"Crossing from <b>Mishopshno</b> (Carpinteria) to <b>Wimaɬ</b> (Santa Rosa Island). " +
     "In the creation story, Hutash built a <b>rainbow bridge</b> (wishtoyo) from the tallest mountain on Limuw to Tzchimoos near Mishopshno — the mythological equivalent of this crossing route."},

  {name:"Coastal Canoe Route — Humaliwo to Syukhtun",
   coords:[[34.0360, -118.6815],[34.1070, -119.0850],[34.1480, -119.1950],
           [34.2750, -119.2930],[34.3975, -119.5180],[34.4100, -119.6900],
           [34.4300, -119.8300],[34.4450, -119.9250]],
   desc:"The <b>coastal canoe highway</b> — connecting villages from Humaliwo (Malibu) to Dos Pueblos and beyond. " +
     "Portolá's 1769 expedition was welcomed at 'most every village since Malibu and were growing weary of the all-night parties.' " +
     "This route connected: Humaliwo → Muwu → Wenemu → Shisholop → Mishopshno → Syukhtun → Helo → Mikiw/Kuyamu. " +
     "Every village was a node in the trade network, with hereditary chiefs (wot) managing regional exchange."},

  {name:"Inter-Island Route — San Miguel to Santa Cruz",
   coords:[[34.0400, -120.3600],[33.9600, -120.1000],[34.0100, -119.7500]],
   desc:"The <b>inter-island route</b> connecting Tuqan (San Miguel), Wimaɬ (Santa Rosa), and Limuw (Santa Cruz). " +
     "During the Late Pleistocene, these three islands were connected as one large island called <b>Santarosae</b>. " +
     "Even after sea level rise separated them, the island Chumash maintained close ties through regular canoe travel."}
];


// ===== OBSIDIAN TRADE ROUTES =====
const obsidianRoutes = [
  {name:"Coso Obsidian → Channel Coast (primary route, ~300 km)",
   coords:[[36.0500, -117.7500],[35.7500, -118.2000],[35.3000, -118.7000],
           [34.9100, -119.1500],[34.6300, -119.5000],[34.4100, -119.6900]],
   desc:"The <b>primary obsidian trade route</b> from the Coso Volcanic Field to the Santa Barbara coast. " +
     "94% of obsidian found on the Channel Islands originated at Coso — over <b>300 km</b> away. " +
     "Obsidian moved through <b>down-the-line exchange</b>: passed from group to group, increasing in value with each transaction. " +
     "The route crossed through Yokuts territory in the San Joaquin Valley and Emigdiano Chumash territory at the Tehachapi/Sierra Madre passes. " +
     "Trade began at least <b>11,750 years ago</b> and continued until European contact collapsed the network. " +
     "At the Castaic Chumash site (CA-LAn-324), Coso obsidian was replaced by local Grimes Canyon fused shale around 800 years ago."},

  {name:"Coso Obsidian → Channel Islands (maritime extension)",
   coords:[[34.4100, -119.6900],[34.0100, -119.7500]],
   desc:"The <b>maritime extension</b> of the obsidian route — from the coast to the Channel Islands via tomol. " +
     "Island Chumash obtained obsidian from at least <b>5 source areas</b>: Coso, Casa Diablo, Obsidian Butte, Mt. Hicks, and Massacre Lake/Guano Valley. " +
     "Some sources were over <b>850 km</b> from the islands. " +
     "Obsidian was exchanged for shell bead money, chert microdrills, dried fish, and sea otter pelts."},

  {name:"Casa Diablo Obsidian → Chumash (secondary route)",
   coords:[[37.6300, -118.8500],[37.0000, -118.9000],[36.3000, -119.2000],
           [35.5000, -119.5000],[34.9500, -119.6200],[34.6300, -119.9800]],
   desc:"A <b>secondary obsidian source</b> — Casa Diablo (Mammoth Lakes area) in the Eastern Sierra. " +
     "About 5% of obsidian in Chumash sites came from Casa Diablo. " +
     "This route ran through the Central Valley, connecting Yokuts and Salinan peoples to the Chumash network."}
];


// ===== TRADE RESOURCE NODES =====
const tradeNodes = [
  // SHELL BEAD MINTING
  {name:"Limuw — Shell Bead Mint", lat:34.0100, lng:-119.7500,
   type:"mint", color:TN_GOLD,
   desc:"<b>The mint of the Chumash economy.</b> " +
     "Island Chumash on Limuw (Santa Cruz Island) produced <b>'achum</b> — shell bead money — from olivella shells using chert microdrills. " +
     "The word <b>Michumash</b>, from which 'Chumash' derives, means <b>'makers of shell bead money'</b>. " +
     "Eastern Santa Cruz Island had the highest density of <b>microdrill production in North America</b>. " +
     "Chumash beads have been found as far as the Mississippi River region — the currency of a continental trade network. " +
     "Lynn Gamble (UCSB) argues shell bead money was used as currency <b>2,000 years ago</b> — possibly the earliest money in the Americas. " +
     "Standardized saucer beads were produced south of Point Conception and on the islands — tens of thousands found with single burials in the San Francisco Bay Area."},

  // OBSIDIAN SOURCE
  {name:"Coso Volcanic Field — Obsidian Source", lat:36.0500, lng:-117.7500,
   type:"obsidian", color:TN_OBSIDIAN,
   desc:"The <b>primary obsidian source</b> for the entire Chumash world — and much of southern California. " +
     "Located in the Coso Range east of the Sierra Nevada (now within Naval Air Weapons Station China Lake). " +
     "38 rhyolite domes produced high-quality obsidian (77% SiO₂) — razor-sharp volcanic glass for projectile points, knives, and scrapers. " +
     "Peak exploitation: <b>3,000-1,000 years ago</b>. Miners constructed benches in hillsides and dug deep pits. " +
     "4 geochemical subsources identified: Sugarloaf, West Sugarloaf, Joshua Ridge, West Cactus Peak. " +
     "Obsidian traded to San Diego, San Luis Obispo, Santa Barbara, the Channel Islands, the Mojave Desert, and the Great Basin. " +
     "Also home to the <b>Coso Rock Art District</b> — over 100,000 petroglyphs, one of the largest concentrations in North America."},

  {name:"Casa Diablo — Secondary Obsidian Source", lat:37.6300, lng:-118.8500,
   type:"obsidian", color:TN_OBSIDIAN,
   desc:"Secondary obsidian source near Mammoth Lakes in the Eastern Sierra. " +
     "About 5% of obsidian in Chumash territory came from Casa Diablo, entering through the Central Valley. " +
     "Other minor sources: Obsidian Butte (Salton Sea), Mt. Hicks, and Massacre Lake/Guano Valley (Oregon/Nevada border — <b>850+ km</b> from the islands)."},

  // ASPHALTUM SOURCES
  {name:"Carpinteria Tar Seeps — Asphaltum Source", lat:34.3950, lng:-119.5250,
   type:"asphaltum", color:TN_TAR,
   desc:"The <b>primary asphaltum (tar) source</b> for the Chumash trade network. " +
     "Natural petroleum seeps along the Carpinteria coast provided bitumen essential for: waterproofing tomol canoes (mixed with pine pitch as <b>yop</b>), hafting projectile points to shafts, repairing broken tools, appliquéing shell beads to effigies, and body paint for ceremonies. " +
     "Spanish soldiers named the area 'La Carpinteria' (the carpentry shop) after watching Chumash build tomol canoes with asphaltum here. " +
     "Asphaltum was traded along the coast and to interior villages that lacked natural seeps."},

  {name:"Coal Oil Point — Offshore Seeps", lat:34.4070, lng:-119.8780,
   type:"asphaltum", color:TN_TAR,
   desc:"Over <b>1,200 documented natural oil seeps</b> in the Santa Barbara Channel — roughly half within 2-3 miles of Coal Oil Point. " +
     "Asphaltum washes ashore as tar balls and congeals on rocks. " +
     "The Chumash collected this offshore-sourced tar for tomol construction and trade. " +
     "The offshore seeps also created a unique marine environment — bacteria that feed on the petroleum support a distinctive food web."},

  {name:"Santa Barbara Channel Seeps", lat:34.3500, lng:-119.8000,
   type:"asphaltum", color:TN_TAR,
   desc:"The <b>Santa Barbara Channel floor</b> has extensive natural petroleum seeps — the source of the asphaltum that was vital to Chumash maritime technology. " +
     "Yop (asphaltum + pine pitch) was the 'glue that held the Chumash world together' — literally, since they 'fastened everything from houses to tools together with string and glue.' " +
     "Without asphaltum, there would be no waterproof tomol. Without the tomol, the cross-channel trade network collapses."},

  // CHERT SOURCE
  {name:"Eastern Santa Cruz Island — Chert Quarries", lat:34.0200, lng:-119.6000,
   type:"chert", color:'#8D6E63',
   desc:"Eastern Santa Cruz Island contained <b>chert of the proper type and quality for microdrill construction</b>. " +
     "This was the center for manufacturing chert microdrills — the <b>highest density of microdrill production in North America</b>. " +
     "The drills were used to bore holes in olivella shells to create shell bead money. " +
     "Chert from Santa Cruz Island was itself a trade item — exported to mainland villages and other islands."},

  // REDWOOD DRIFTWOOD
  {name:"Redwood Driftwood Collection Points", lat:34.4500, lng:-120.1000,
   type:"redwood", color:'#A1887F',
   desc:"Redwood driftwood — washed down from <b>northern California forests</b> hundreds of miles away — was the most prized wood for tomol construction. " +
     "Driftwood collection was itself a managed resource. Certain beaches and coves were known for accumulating quality logs. " +
     "The wood had to be cured and planked before construction could begin — months or years of preparation. " +
     "This made the tomol not just a boat but an investment of enormous community resources — each one representing the interconnection of the entire trade system."},

  // TRADE HUBS
  {name:"Syukhtun — Political & Trade Capital", lat:34.4150, lng:-119.6900,
   type:"hub", color:TN_HUB,
   desc:"The <b>capital of the Chumash trade world</b>. Population ~1,000. " +
     "As the largest coastal village directly facing the Channel Islands, Syukhtun was the primary hub connecting island shell bead production with mainland resource networks. " +
     "The hereditary chief (wot) had authority over surrounding settlements and managed trade relationships. " +
     "Regular <b>ceremonial gatherings</b> served as open marketplaces where 'people were expected to bring money, food, and additional resources.' " +
     "The paxa (ceremonial leader) oversaw these events — trade and religion were inseparable."},

  {name:"Muwu — Southern Gateway", lat:34.1070, lng:-119.0850,
   type:"hub", color:TN_HUB,
   desc:"<b>Mugu Lagoon</b> — the <b>southern gateway</b> to the Channel Islands and the connecting point between the Ventureño coastal network and the island trade system. " +
     "Tomol launching site for the half-day crossing to Santa Cruz Island. " +
     "Connected interior Simi Valley villages (including Burro Flats rock art site) to the maritime economy."},

  {name:"Emigdiano Villages — Interior Gateway", lat:34.9100, lng:-119.1500,
   type:"hub", color:TN_HUB,
   desc:"The <b>Emigdiano Chumash villages</b> at canyon apertures (Matapuan, Tashlipun, Tecuya) controlled access between the San Joaquin Valley and the coastal Chumash world. " +
     "Marriage ties linked these gateway villages to both Yokuts groups to the north and coastal Chumash to the south. " +
     "Obsidian from Coso passed through this corridor. Interior goods (pinyon nuts, acorns, deer hides, medicinal plants) moved toward the coast. " +
     "Shell bead money and marine resources flowed inland."},

  {name:"Humaliwo — Chumash/Tongva Border Market", lat:34.0360, lng:-118.6815,
   type:"hub", color:TN_HUB,
   desc:"<b>Humaliwo</b> (Malibu) sat at the <b>Chumash-Tongva border</b> — a natural cross-cultural trade zone. " +
     "The Tongva (Gabrieliño) also built plank canoes (ti'at) and traded across the Channel to Santa Catalina Island. " +
     "Both groups used shell bead money. The border zone meant goods from the Tongva network (steatite from Catalina, Coso obsidian via different routes) intersected with the Chumash system."}
];


// ===== RENDER TOMOL ROUTES =====
tomolRoutes.forEach(tr => {
  const line = L.polyline(tr.coords, {
    color: TN_BLUE, weight: 3, opacity: 0.7,
    dashArray: '10, 8'
  }).addTo(L_groups.tradeNetwork);

  line.bindPopup(`
    <div style="max-width:440px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:${TN_BLUE};margin:0 0 4px;font-size:14px;">${tr.name}</h4>
      <div style="display:inline-block;padding:1px 8px;border-radius:3px;background:${TN_BLUE}22;color:${TN_BLUE};font-size:10px;font-weight:600;margin-bottom:6px;">TOMOL SEA ROUTE</div>
      <div style="font-size:12px;color:#ccc;line-height:1.55;">${tr.desc}</div>
    </div>`, {maxWidth:460});
});


// ===== RENDER OBSIDIAN ROUTES =====
obsidianRoutes.forEach(or => {
  const line = L.polyline(or.coords, {
    color: TN_OBSIDIAN, weight: 3, opacity: 0.6,
    dashArray: '12, 6'
  }).addTo(L_groups.tradeNetwork);

  line.bindPopup(`
    <div style="max-width:440px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:${TN_OBSIDIAN};margin:0 0 4px;font-size:14px;">${or.name}</h4>
      <div style="display:inline-block;padding:1px 8px;border-radius:3px;background:${TN_OBSIDIAN}22;color:${TN_OBSIDIAN};font-size:10px;font-weight:600;margin-bottom:6px;">OBSIDIAN TRADE ROUTE</div>
      <div style="font-size:12px;color:#ccc;line-height:1.55;">${or.desc}</div>
    </div>`, {maxWidth:460});
});


// ===== RENDER TRADE NODES =====
tradeNodes.forEach(tn => {
  const labels = {
    mint:'SHELL BEAD MINT', obsidian:'OBSIDIAN SOURCE', asphaltum:'ASPHALTUM SOURCE',
    chert:'CHERT QUARRY', redwood:'REDWOOD DRIFTWOOD', hub:'TRADE HUB'
  };
  const shapeHtml = {
    mint: `<div style="width:12px;height:12px;border-radius:50%;background:${TN_GOLD};border:2px solid rgba(255,255,255,0.6);box-shadow:0 0 4px rgba(255,213,79,0.4);"></div>`,
    obsidian: `<div style="width:10px;height:10px;background:${TN_OBSIDIAN};transform:rotate(45deg);border:1.5px solid rgba(255,255,255,0.5);"></div>`,
    asphaltum: `<div style="width:10px;height:10px;border-radius:2px;background:${TN_TAR};border:1.5px solid rgba(255,255,255,0.4);"></div>`,
    chert: `<div style="width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:11px solid #8D6E63;opacity:0.9;"></div>`,
    redwood: `<div style="width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:11px solid #A1887F;opacity:0.9;"></div>`,
    hub: `<div style="width:14px;height:14px;border-radius:50%;background:${TN_HUB};border:2px solid rgba(255,255,255,0.7);box-shadow:0 0 6px rgba(255,143,0,0.5);"></div>`
  };
  const symbolChar = {mint:'●', obsidian:'◆', asphaltum:'■', chert:'▲', redwood:'▲', hub:'●'}[tn.type] || '•';

  const markerHtml = shapeHtml[tn.type] || `<div style="width:8px;height:8px;border-radius:50%;background:${tn.color};"></div>`;
  const size = tn.type === 'hub' ? 18 : (tn.type === 'mint' || tn.type === 'obsidian' ? 14 : 12);

  const icon = L.divIcon({
    className:'',
    html: markerHtml,
    iconSize:[size,size], iconAnchor:[size/2,size/2]
  });

  const popup = `
    <div style="max-width:440px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:${tn.color};margin:0 0 4px;font-size:14px;"><span style="font-size:11px;">${symbolChar}</span> ${tn.name}</h4>
      <div style="display:inline-block;padding:1px 8px;border-radius:3px;background:${tn.color}22;color:${tn.color};font-size:10px;font-weight:600;margin-bottom:6px;">${labels[tn.type]}</div>
      <div style="font-size:12px;color:#ccc;line-height:1.55;">${tn.desc}</div>
      <div style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid ${tn.color}33;padding-top:4px;">
        Sources: Gamble 2008/2020/2025; King 1976/2011; Hughes et al.; NPS; Arnold 2001
      </div>
    </div>`;

  L.marker([tn.lat, tn.lng], {icon}).addTo(L_groups.tradeNetwork).bindPopup(popup, {maxWidth:460});
});


// ===== SHELL BEAD DISTRIBUTION RANGE INDICATOR =====
const beadRange = L.marker([35.50, -118.50], {
  icon: L.divIcon({
    className:'',
    html:'<div style="background:rgba(255,213,79,0.1);border:1px dashed rgba(255,213,79,0.4);border-radius:4px;padding:3px 8px;font:10px \'Source Sans Pro\',sans-serif;color:#FFD54F;line-height:1.4;">' +
         'Shell beads found: Great Basin,<br>' +
         '&nbsp;&nbsp;&nbsp;Columbia Plateau, Southwest,<br>' +
         '&nbsp;&nbsp;&nbsp;as far as Mississippi River</div>',
    iconSize:[195,45], iconAnchor:[97,22]
  })
}).addTo(L_groups.tradeNetwork);

beadRange.bindPopup(`
  <div style="max-width:440px;font-family:'Source Sans Pro',sans-serif;">
    <h4 style="color:${TN_GOLD};margin:0 0 6px;">The Reach of Chumash Money</h4>
    <div style="font-size:12px;color:#ccc;line-height:1.55;">
      Shell beads originating from the Santa Barbara Channel region have been found across an enormous area of Western North America:<br><br>
      <b>Throughout California</b> — tens of thousands of beads in single burials (San Francisco Bay Area)<br>
      <b>The Great Basin</b> — Nevada, Utah, eastern Oregon<br>
      <b>The Columbia River Plateau</b> — Washington, Oregon<br>
      <b>The Southwest</b> — Arizona, New Mexico<br>
      <b>As far as the Mississippi River</b><br><br>
      The earliest evidence of long-distance bead exchange: <b>olivella shell beads dated 11,200-7,860 years ago</b> found 250-365 km inland — 'some of the earliest unequivocal evidence of long-distance trade in Western North America.'<br><br>
      The Chumash used money for <b>purchasing food, ceremonial paraphernalia, and other items at open marketplaces during ritual gatherings</b> with groups from diverse cultural and linguistic backgrounds.<br><br>
      Chiefs practiced polygyny and had 'an extensive network of marriage partners and other kin in settlements that were often situated in different environmental zones.'
    </div>
  </div>`, {maxWidth:460});


// ===== LEGEND =====
const tnLegend = L.control({position:'bottomleft'});
tnLegend.onAdd = function(){
  const d = L.DomUtil.create('div','legend');
  d.style.cssText = 'background:rgba(30,30,30,0.92);padding:10px 14px;border-radius:6px;color:#ccc;font:11px "Source Sans Pro",sans-serif;border:1px solid rgba(255,213,79,0.25);';
  d.innerHTML = '<div style="font-weight:700;color:#FFD54F;margin-bottom:5px;">Chumash Trade Network</div>' +
    '<div style="margin:3px 0;"><span style="color:'+TN_BLUE+'">- - -</span> Tomol Sea Routes</div>' +
    '<div style="margin:3px 0;"><span style="color:'+TN_OBSIDIAN+'">- - -</span> Obsidian Trade (~300 km)</div>' +
    '<div style="margin:3px 0;"><span style="color:'+TN_GOLD+'">●</span> Shell Bead Mint / Money</div>' +
    '<div style="margin:3px 0;"><span style="color:'+TN_OBSIDIAN+'">◆</span> Obsidian Sources</div>' +
    '<div style="margin:3px 0;"><span style="color:'+TN_TAR+'">■</span> Asphaltum Sources</div>' +
    '<div style="margin:3px 0;"><span style="color:'+TN_HUB+'">●</span> Trade Hubs</div>';
  return d;
};
tnLegend.addTo(map);
