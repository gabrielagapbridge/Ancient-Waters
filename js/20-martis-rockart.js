// ===== MARTIS COMPLEX / STYLE 7 ROCK ART — NORTHERN SIERRA NEVADA =====
// Source: Foster, Betts & Sandelin (1999) "Style 7 Rock Art and the Martis Complex"
// USFS publication documenting 92 confirmed Style 7 petroglyph sites
// Martis Complex: ~4,000–1,500 BP (Middle Archaic)
// Style 7 = "High Sierra Abstract-Representational" (Payen 1966)
//
// Coordinates derived from: watershed descriptions, USGS quad references,
// GNIS data, NRHP listings, county/elevation cross-referencing, and
// publicly documented site locations (Donner Pass, Lakes Basin, etc.)

const martisStyle7Sites = [
  // ===== NEVADA COUNTY (South Yuba River watershed) =====
  {name:"Meadow Lake", tri:"CA-NEV-3", lat:39.4452, lng:-120.4847, elev:7280,
   watershed:"SY", side:"W", elements:500, bearTracks:5, anthropomorphs:"?",
   pond:true, waterfall:false, brm:false, millingSlick:false, lithicScatter:false,
   desc:"One of the most extensive petroglyph sites in the northern Sierra Nevada, with at least 75 panels and over 500 elements on glaciated granitic bed-rock and boulders. Listed on the National Register of Historic Places (1971). Located near French Lake in the Tahoe National Forest. Mentioned in Mallery (1893) — one of the earliest published references to northern Sierra rock art. A Martis-type projectile point was found half a mile away.",
   src:"Mallery 1893; Steward 1929; Payen 1966; Pilling 1949; Foster, Betts & Sandelin 1999"},

  {name:"Donner Pass", tri:"CA-NEV-4", lat:39.3176, lng:-120.3205, elev:6860,
   watershed:"T", side:"E", elements:205, bearTracks:1, anthropomorphs:0,
   pond:true, waterfall:false, brm:false, millingSlick:false, lithicScatter:true,
   desc:"The best known and most frequently visited Style 7 site in the northern Sierra Nevada. 25 panels with approximately 205 elements on a large glaciated granite bench, including Donner Lake, Martis Valley, and Mount Rose views. Contains a sparse lithic scatter. First documented with stereographs by Alfred Hart during the 1860s. Included in numerous rock art studies. Public interpretive kiosk at site. Historical marker at 39°19.056'N, 120°19.232'W on Old Highway 40.",
   src:"Payen 1966; Heizer & Clewlow 1973; Steward 1929; Betts 1998; Foster, Betts & Sandelin 1999"},

  {name:"Grouse Ridge", tri:"CA-NEV-84", lat:39.3710, lng:-120.6210, elev:6180,
   watershed:"SY", side:"W", elements:228, bearTracks:8, anthropomorphs:1,
   pond:true, waterfall:false, brm:false, millingSlick:false, lithicScatter:true,
   desc:"Two glaciated granite benches midway up the south face of Grouse Ridge with extensive petroglyphs. First bench: ~20 panels. Second bench: 4 panels with ~28 elements. Two basalt Martis-series projectile points found. Dramatic view of Old Man Mountain and South Yuba River drainage. Originally recorded by F.A. Riddell in 1961.",
   src:"Payen 1966; Gortner 1984; Foster, Betts & Sandelin 1999"},

  {name:"Spaulding Ridge", tri:"CA-NEV-426", lat:39.3200, lng:-120.6050, elev:5140,
   watershed:"SY", side:"W", elements:45, bearTracks:1, anthropomorphs:0,
   pond:true, waterfall:false, brm:false, millingSlick:true, lithicScatter:true,
   desc:"Along the western edge of a prominent ridge — a glaciated granite outcrop with 6 petroglyph panels containing 45 elements. An incipient bedrock mortar is on this outcrop. Basalt lithic scatter and sandy bench nearby. Features include multiple zigzag lines, simple crosses, and a distinctive stick-figure anthropomorph possibly wielding an atlatl — the only recognized example at a Style 7 site with possible temporal implications.",
   src:"Claytor 1973; Foster, Betts & Sandelin 1999"},

  {name:"Rattlesnake Creek No. 1", tri:"CA-NEV-504", lat:39.3600, lng:-120.5200, elev:6280,
   watershed:"SY", side:"W", elements:3, bearTracks:0, anthropomorphs:0,
   pond:false, waterfall:false, brm:false, millingSlick:false, lithicScatter:false,
   desc:"A metamorphic outcrop group on the slope of a canyon containing a single petroglyph panel with 3 elements. Vandalized since D. Foster and R. Jenkins recorded it in 1985.",
   src:"Foster, Betts & Sandelin 1999"},

  {name:"Rattlesnake Creek No. 2", tri:"CA-NEV-505", lat:39.3550, lng:-120.5150, elev:6220,
   watershed:"SY", side:"W", elements:50, bearTracks:2, anthropomorphs:0,
   pond:false, waterfall:false, brm:false, millingSlick:true, lithicScatter:false,
   desc:"Extensive site on sloping glaciated metamorphic outcrops with at least 5 petroglyph panels and approximately 50 elements. A mano and bedrock milling slick are also located here. Recorded by Foster, Jenkins, and Scatena in 1985.",
   src:"Foster, Betts & Sandelin 1999"},

  {name:"Cisco Grove No. 1", tri:"CA-NEV-506", lat:39.3150, lng:-120.5500, elev:5560,
   watershed:"SY", side:"W", elements:175, bearTracks:35, anthropomorphs:"?",
   pond:false, waterfall:true, brm:false, millingSlick:false, lithicScatter:false,
   desc:"An extensive petroglyph site on the bank of the South Yuba River, on a sloping glaciated outcrop. At least 20 panels with at least 175 elements. First documented with stereographs by Alfred Hart during the 1860s. The site was largely destroyed by the construction of the Central Pacific Railroad and later Interstate 80. This is the most tragic loss sustained so far for Sierra rock art. Redesignated CA-NEV-506.",
   src:"Payen 1966; Kibbey 1996; Foster, Betts & Sandelin 1999"},

  {name:"Cisco Grove No. 2", tri:"CA-NEV-507", lat:39.3100, lng:-120.5550, elev:5560,
   watershed:"SY", side:"W", elements:45, bearTracks:1, anthropomorphs:"?",
   pond:true, waterfall:false, brm:false, millingSlick:false, lithicScatter:false,
   desc:"In the saddle at the top of a large glacially rounded rock outcrop — approximately 10 petroglyph panels containing at least 45 elements. Several bedrock milling slicks found on this outcrop. Payen prepared a record for this site in 1986.",
   src:"Gortner 1984; Payen 1966; Foster, Betts & Sandelin 1999"},

  {name:"Canyon Creek", tri:"CA-NEV-582", lat:39.3050, lng:-120.5900, elev:5440,
   watershed:"SY", side:"W", elements:45, bearTracks:7, anthropomorphs:0,
   pond:true, waterfall:false, brm:false, millingSlick:true, lithicScatter:false,
   desc:"On the north slope of a large rock dome — a petroglyph site with 11 panels containing approximately 60 elements. No artifacts observed. First recorded by Betts in 1996.",
   src:"Foster, Betts & Sandelin 1999"},

  {name:"Gregory Pex", tri:"CA-NEV-585", lat:39.2900, lng:-120.5800, elev:6560,
   watershed:"MY", side:"W", elements:60, bearTracks:0, anthropomorphs:0,
   pond:true, waterfall:false, brm:false, millingSlick:false, lithicScatter:false,
   desc:"On a low finger ridge in a forested area — a group of glaciated metamorphic rock outcrops with 4 petroglyph panels containing approximately 20 indistinct elements. First recorded by Forest Service personnel in 1988, updated by Betts in 1994. No artifacts observed.",
   src:"Foster, Betts & Sandelin 1999"},

  // ===== PLACER COUNTY (North Fork American River watershed) =====
  {name:"Soda Springs", tri:"CA-PLA-26", lat:39.3285, lng:-120.3765, elev:6060,
   watershed:"NA", side:"W", elements:750, bearTracks:80, anthropomorphs:0,
   pond:false, waterfall:true, brm:false, millingSlick:false, lithicScatter:true,
   desc:"A large sloping ledge of glacially polished granite bedrock containing a great profusion of petroglyphs — one of the largest petroglyph sites in the northern Sierra Nevada with approximately 750 elements. Not easily segregated into individual panels. A lithic scatter is located adjacent to the panel and many artifacts have been collected over the years. Both Martis and Kings Beach occupations indicated. First described in Mallery (1893) and Avery (1873). The North Fork American River's Soda Springs, near The Cedars resort community.",
   src:"Mallery 1893; Avery 1873; Gortner 1984; Payen 1966; Foster, Betts & Sandelin 1999"},

  {name:"Bear Valley", tri:"CA-PLA-504", lat:39.1600, lng:-120.6800, elev:4620,
   watershed:"B", side:"W", elements:100, bearTracks:2, anthropomorphs:0,
   pond:false, waterfall:false, brm:true, millingSlick:false, lithicScatter:true,
   desc:"A large glaciated metasedimentary rock outcrop in a forested portion of Bear Valley containing 13 petroglyph panels with over 100 widely distributed elements. At least 40 bedrock mortars also on this outcrop. Lowest-elevation Style 7 site (4,620 ft) and the only one in the Bear River drainage. Initially reported by Claytor (1973). A Desert Side-Notched projectile point was found in a crevice adjacent to a rock art panel.",
   src:"Claytor 1973; Foster, Betts & Sandelin 1999"},

  {name:"Skaters Pond", tri:"CA-PLA-517", lat:39.1950, lng:-120.4500, elev:5760,
   watershed:"NA", side:"W", elements:8, bearTracks:0, anthropomorphs:0,
   pond:true, waterfall:false, brm:false, millingSlick:true, lithicScatter:true,
   desc:"A glaciated granite bench near a small pond contains an unusual assortment of rock art elements — a series of extremely faint curvilinear elements and 14 cupule petroglyphs. One of the few known examples of cupules in association with Style 7 petroglyphs. Bedrock grinding slicks and a basalt lithic scatter present. First reported by Claytor (1973).",
   src:"Claytor 1973; Foster, Betts & Sandelin 1999"},

  {name:"Lake Valley Reservoir", tri:"CA-PLA-546", lat:39.2250, lng:-120.4750, elev:5840,
   watershed:"NA", side:"W", elements:10, bearTracks:1, anthropomorphs:0,
   pond:false, waterfall:false, brm:false, millingSlick:false, lithicScatter:false,
   desc:"A glaciated granite outcrop in a forested area at the crest of a low ridge containing a single panel of petroglyphs with 10 elements. Initially reported by Claytor (1973).",
   src:"Claytor 1973; Foster, Betts & Sandelin 1999"},

  {name:"Walter Freeman", tri:"CA-PLA-550", lat:39.2200, lng:-120.4600, elev:6260,
   watershed:"MA", side:"W", elements:1, bearTracks:0, anthropomorphs:1,
   pond:false, waterfall:false, brm:false, millingSlick:false, lithicScatter:false,
   desc:"A glaciated rock outcrop in a forested area at the foot of a canyon wall with 14 petroglyph panels of 43 elements. First recorded by Foster in 1986, updated by Betts in 1992.",
   src:"Foster, Betts & Sandelin 1999"},

  {name:"Willis Gortner", tri:"CA-PLA-551", lat:39.2150, lng:-120.4650, elev:6140,
   watershed:"MA", side:"W", elements:260, bearTracks:10, anthropomorphs:0,
   pond:false, waterfall:true, brm:false, millingSlick:false, lithicScatter:false,
   desc:"On a glaciated rock bench along a creek — an extensive and elaborate petroglyph site. Heavily fractured and fragmented rock outcrops contain 55 petroglyph panels with approximately 260 elements. Downstream from the site area is a dramatic waterfall. First recorded by Gortner (1986a), supplemented by D. Foster in 1986, and updated by Betts in 1992. Several small basalt flakes observed in gravel areas between the petroglyph panels.",
   src:"Gortner 1986a; Foster, Betts & Sandelin 1999"},

  {name:"Big Pine", tri:"CA-PLA-554", lat:39.2350, lng:-120.4550, elev:5840,
   watershed:"NA", side:"W", elements:30, bearTracks:0, anthropomorphs:0,
   pond:false, waterfall:false, brm:false, millingSlick:true, lithicScatter:false,
   desc:"Three adjacent glaciated granite outcrops each have petroglyph panels. All three outcrops together contain approximately 30 elements. A possible milling slick is located on one of these outcrops.",
   src:"Gortner 1984; Foster, Betts & Sandelin 1999"},

  {name:"Log Cabin Creek", tri:"CA-PLA-555", lat:39.2400, lng:-120.4200, elev:5840,
   watershed:"NA", side:"W", elements:187, bearTracks:24, anthropomorphs:2,
   pond:false, waterfall:false, brm:false, millingSlick:false, lithicScatter:true,
   desc:"A major petroglyph site on two large glaciated granite outcrops. The largest panel has sustained extensive exfoliation, and many of the motifs are extremely faint. A prehistoric campsite with bedrock mortars and numerous basalt projectile points is located to the east. 187 elements total.",
   src:"Gortner 1984; Foster, Betts & Sandelin 1999"},

  {name:"Swimming Hole", tri:"CA-PLA-557", lat:39.2250, lng:-120.4350, elev:5820,
   watershed:"NA", side:"W", elements:104, bearTracks:4, anthropomorphs:1,
   pond:false, waterfall:false, brm:false, millingSlick:false, lithicScatter:true,
   desc:"A steep granite slope rising from the edge of a river has a pink crusted outcrop with an extensive petroglyph panel containing approximately 95 elements. Two other distant panels with 9 additional elements included. Several basalt projectile points and chert scrapers also found.",
   src:"Gortner 1984; Foster, Betts & Sandelin 1999"},

  {name:"Pinehurst", tri:"CA-PLA-571", lat:39.2700, lng:-120.4100, elev:6040,
   watershed:"NA", side:"W", elements:125, bearTracks:1, anthropomorphs:0,
   pond:false, waterfall:false, brm:false, millingSlick:true, lithicScatter:false,
   desc:"On a forested slope — a glaciated granite shelf with an extensive panel of petroglyphs; at least 100 elements. One of the most complex and highly integrated petroglyph panels in the northern Sierra Nevada. A possible milling slick is also located on this outcrop. East of the main exposure are two panels with 25 more elements.",
   src:"Gortner 1984; Payen 1966; Foster, Betts & Sandelin 1999"},

  {name:"Wabena", tri:"CA-PLA-591", lat:39.2050, lng:-120.4800, elev:6560,
   watershed:"NA", side:"W", elements:40, bearTracks:11, anthropomorphs:0,
   pond:false, waterfall:true, brm:false, millingSlick:false, lithicScatter:false,
   desc:"At the crest of a narrow ridge separating Royal Gorge from the canyon of Wabena Creek — one of the most spectacular petroglyph sites in the Sierra Nevada. A sloping ground-level outcrop of metavolcanic rock contains an elaborate petroglyph panel with at least 40 elements. The panel is highly integrated and complex. A dramatic precipice drops 2500 feet into Royal Gorge. Two basalt projectile points and one obsidian biface fragment found. Conservation project undertaken in 1990 to stabilize block fracture deterioration.",
   src:"Gortner 1984; Payen 1966; Foster & Betts 1990; Foster, Betts & Sandelin 1999"},

  {name:"Palisade Creek", tri:"CA-PLA-823", lat:39.2350, lng:-120.3950, elev:6520,
   watershed:"NA", side:"W", elements:130, bearTracks:16, anthropomorphs:1,
   pond:false, waterfall:false, brm:true, millingSlick:false, lithicScatter:true,
   desc:"An extensive petroglyph site on several glaciated granite outcrops forming a low ridge at the edge of a grassy meadow. 19 panels containing approximately 130 elements. A bedrock milling feature and basalt lithic scatter borders the petroglyph panels. A bedrock mortar on a separate outcrop adjacent to the lithic scatter area. Basalt tools including bifaces and two basalt contracting stem projectile points recovered.",
   src:"Gortner 1984; Foster, Betts & Sandelin 1999"},

  {name:"Devils Peak", tri:"CA-PLA-822", lat:39.2350, lng:-120.4300, elev:6480,
   watershed:"NA", side:"W", elements:50, bearTracks:8, anthropomorphs:0,
   pond:false, waterfall:false, brm:false, millingSlick:false, lithicScatter:true,
   desc:"On a long sloping exposure of glaciated granite bedrock — 12 petroglyph panels of approximately 50 elements. A sparse lithic scatter of basalt flakes and tool fragments is on gravel terraces adjacent to the petroglyph panels. First recorded by Gortner (1984).",
   src:"Gortner 1984; Foster, Betts & Sandelin 1999"},

  {name:"Snow Mountain", tri:"CA-PLA-825", lat:39.2500, lng:-120.4550, elev:7640,
   watershed:"NA", side:"W", elements:50, bearTracks:4, anthropomorphs:1,
   pond:false, waterfall:false, brm:false, millingSlick:true, lithicScatter:true,
   desc:"The highest-elevation rock art site so far discovered in the northern Sierra Nevada at 7,640 feet. A series of metavolcanic outcrops on a rocky bench just below the summit of a massive Sierra peak. Seven petroglyph panels containing approximately 50 elements. Two bedrock grinding slicks and a lithic scatter of basalt and chert. Thirteen basalt tools found. Betts and L. Gillett recorded this site in 1994.",
   src:"Foster, Betts & Sandelin 1999"},

  // ===== PLACER COUNTY — Middle Fork American River =====
  {name:"MF-B,P,Q", tri:"CA-PLA-790", lat:39.1150, lng:-120.4900, elev:5880,
   watershed:"MA", side:"W", elements:43, bearTracks:3, anthropomorphs:0,
   pond:false, waterfall:true, brm:false, millingSlick:true, lithicScatter:true,
   desc:"A series of glaciated rock benches and outcrops on a stream terrace containing 15 petroglyph panels with at least 43 elements that are widely distributed over an extensive site area. Two separate lithic scatters. A rich assortment of flaked stone artifacts including two small chalcedony projectile points, one obsidian projectile point, 13 points of basalt or slate, and various point fragments.",
   src:"Gortner 1988; Foster, Betts & Sandelin 1999"},

  // ===== PLUMAS COUNTY =====
  {name:"Long Lake", tri:"CA-PLU-4", lat:39.8950, lng:-121.2800, elev:5960,
   watershed:"NF", side:"W", elements:200, bearTracks:2, anthropomorphs:0,
   pond:false, waterfall:false, brm:false, millingSlick:false, lithicScatter:false,
   desc:"An expanse of glaciated granite containing a large group of petroglyph panels with at least 200 elements. First recorded by G.C. Herron in 1947. Included in several rock art studies. A recent volunteer recording project hosted by the Lassen National Forest. A detailed record is in preparation.",
   src:"Heizer & Clewlow 1973; Payen 1966; Ritter & Parkman 1992; Foster, Betts & Sandelin 1999"},

  {name:"Lakes Basin", tri:"CA-PLU-88", lat:39.6870, lng:-120.6450, elev:6300,
   watershed:"SF", side:"W", elements:578, bearTracks:4, anthropomorphs:3,
   pond:false, waterfall:false, brm:false, millingSlick:false, lithicScatter:true,
   desc:"On a forested bench near Grassy Lake — many widely scattered outcrops of glaciated metamorphic rocks. At least 12 of these outcrops contain petroglyph panels. Some panels are very elaborate and integrated compositions that are not easily segregated into individual elements. Extensive lithic scatter and midden deposit with numerous basalt projectile points, bifaces, drills, and debitage. A panel of cupule petroglyphs was also revealed. Recent excavations have provided significant information for Sierra Nevada rock art research. 578+ elements total. Listed on the National Register of Historic Places.",
   src:"Payen 1966; Neuenschwander 1994; Peak & Associates 1993; Foster, Betts & Sandelin 1999"},

  {name:"Jamison Creek", tri:"05-11-51-01", lat:39.7350, lng:-120.7100, elev:5640,
   watershed:"SF", side:"W", elements:1, bearTracks:0, anthropomorphs:0,
   pond:false, waterfall:false, brm:false, millingSlick:false, lithicScatter:false,
   desc:"A granitic boulder or outcrop with a panel of pecked petroglyphs containing a single design element — a combination of simple lines. Similar designs have been observed at Style 7 sites in the area such as Lakes Basin. J. Johnston recorded this Plumas County site in 1975.",
   src:"Foster, Betts & Sandelin 1999"},

  {name:"Bear Paw Falls", tri:"CA-PLU-*", lat:39.8800, lng:-121.2600, elev:5940,
   watershed:"NF", side:"W", elements:30, bearTracks:0, anthropomorphs:0,
   pond:false, waterfall:true, brm:false, millingSlick:false, lithicScatter:true,
   desc:"A prehistoric petroglyph site on granite outcrops along a perennial creek at a small waterfall. Contains at least six panels with approximately 30 elements. A basalt lithic scatter and two basalt projectile points are also located here. Located during a recent volunteer rock art recording project hosted by the Lassen National Forest at the Long Lake site (CA-PLU-4).",
   src:"Foster, Betts & Sandelin 1999"},

  // ===== SIERRA COUNTY =====
  {name:"Hawley Lake", tri:"CA-SIE-1", lat:39.6700, lng:-120.6050, elev:6460,
   watershed:"NY", side:"W", elements:547, bearTracks:56, anthropomorphs:15,
   pond:true, waterfall:true, brm:true, millingSlick:false, lithicScatter:true,
   desc:"A large outcrop of glacially polished magnetite, a high-grade iron ore, containing what is probably the most elaborate display of rock art in the northern Sierra Nevada. Almost the entire outcrop is intensively carved with a bewildering profusion of petroglyphs. An initial recording attempt has inventoried 547 elements but this represents only about half of the elements actually present. Superimposition is rare but abundant — with many elements carved one on top of another in a multiplicity of layers. The site has been extensively vandalized with an array of names, dates, and other inscriptions carved over the prehistoric rock art. Reports of this site go back to the nineteenth century. Listed on the National Register of Historic Places (1971).",
   src:"Heizer & Clewlow 1973; Payen 1966; Payen & Scott 1982; Steward 1929; Wellmann 1979; Foster, Betts & Sandelin 1999"},

  {name:"Lacey Valley", tri:"CA-SIE-166", lat:39.6050, lng:-120.3200, elev:6840,
   watershed:"T", side:"E", elements:25, bearTracks:6, anthropomorphs:0,
   pond:true, waterfall:false, brm:true, millingSlick:false, lithicScatter:true,
   desc:"A glaciated granite dome in a forested area with at least 6 petroglyph panels with approximately 25 elements. Three bedrock mortars and a lithic scatter of basalt and chert are also present. Artifacts include cobble pestles and 4 projectile points, a scraper, and a drill — all of basalt. One of only two Style 7 sites on the east side of the Sierra crest (along with Donner Pass).",
   src:"Payen 1976; Foster, Betts & Sandelin 1999"},

  {name:"Spencer Lakes", tri:"CA-SIE-524", lat:39.6400, lng:-120.5800, elev:6320,
   watershed:"NY", side:"W", elements:25, bearTracks:0, anthropomorphs:0,
   pond:true, waterfall:false, brm:false, millingSlick:false, lithicScatter:true,
   desc:"On the top and sloping surface of a glaciated metamorphic outcrop — a petroglyph panel containing approximately 30 elements. This panel also contains a historic inscription from 1851.",
   src:"Payen & Scott 1982; Foster, Betts & Sandelin 1999"},

  {name:"Hawley Lake No. 29", tri:"CA-SIE-543", lat:39.6650, lng:-120.6000, elev:6400,
   watershed:"NY", side:"W", elements:30, bearTracks:2, anthropomorphs:2,
   pond:false, waterfall:false, brm:false, millingSlick:false, lithicScatter:false,
   desc:"A steeply sloping outcrop of glaciated magnetite, hidden in a forested area, with a petroglyph panel with approximately 35 elements.",
   src:"Payen 1966; Payen & Scott 1982; Foster, Betts & Sandelin 1999"},

  {name:"Hawley Lake No. 30", tri:"CA-SIE-544", lat:39.6680, lng:-120.5950, elev:6400,
   watershed:"NY", side:"W", elements:35, bearTracks:1, anthropomorphs:0,
   pond:false, waterfall:false, brm:false, millingSlick:false, lithicScatter:false,
   desc:"A glaciated outcrop of magnetite with several petroglyph elements distributed over the sloping sides of the rounded rock mass.",
   src:"Payen & Scott 1982; Foster, Betts & Sandelin 1999"},

  {name:"Hawley Meadow", tri:"CA-SIE-548", lat:39.6720, lng:-120.5900, elev:6640,
   watershed:"NY", side:"W", elements:3, bearTracks:0, anthropomorphs:0,
   pond:false, waterfall:false, brm:false, millingSlick:false, lithicScatter:true,
   desc:"A glaciated metamorphic outcrop with three very faint petroglyph elements. A small basalt lithic scatter also present.",
   src:"Foster, Betts & Sandelin 1999"},

  {name:"Gold Valley", tri:"CA-SIE-558", lat:39.6500, lng:-120.6100, elev:5840,
   watershed:"NY", side:"W", elements:25, bearTracks:1, anthropomorphs:0,
   pond:false, waterfall:false, brm:false, millingSlick:false, lithicScatter:false,
   desc:"On a horizontal outcrop of glaciated metamorphic bedrock — a petroglyph panel with approximately 25 elements. Two cobble pestles were located on this outcrop.",
   src:"Payen & Scott 1982; Foster, Betts & Sandelin 1999"},

  {name:"Prehistoric Empire", tri:"CA-SIE-560", lat:39.6550, lng:-120.6200, elev:5840,
   watershed:"NY", side:"W", elements:6, bearTracks:0, anthropomorphs:0,
   pond:false, waterfall:false, brm:false, millingSlick:false, lithicScatter:true,
   desc:"A narrow ledge on the west side of a large glaciated metamorphic rock dome containing six scattered petroglyph elements. A basalt lithic scatter is located on the stream terrace at the foot of this rock dome.",
   src:"Payen & Scott 1982; Foster, Betts & Sandelin 1999"},

  {name:"Frazier Creek", tri:"CA-SIE-*", lat:39.7600, lng:-120.7200, elev:6200,
   watershed:"SF", side:"W", elements:22, bearTracks:0, anthropomorphs:0,
   pond:true, waterfall:false, brm:false, millingSlick:false, lithicScatter:true,
   desc:"An outcrop of gently sloping granite with five petroglyph panels containing approximately 22 elements. A basalt lithic scatter is also located here. First recorded by J. Johnston in 1975, updated by M. Baldrica and L. Ashley in 1977. Both records incorrectly place the site in Plumas County — its actual location is in Sierra County.",
   src:"Foster, Betts & Sandelin 1999"},

  {name:"Sunnyside Meadow", tri:"05-17-53-560", lat:39.6200, lng:-120.6800, elev:6280,
   watershed:"NY", side:"W", elements:6, bearTracks:0, anthropomorphs:1,
   pond:false, waterfall:false, brm:true, millingSlick:true, lithicScatter:true,
   desc:"On a rock bluff with a panoramic view — a series of low glaciated metamorphic rock outcrops. One of these outcrops contains three petroglyph panels with six elements. Also contains 12 bedrock mortars and three grinding slicks. A basalt Martis stemmed-leaf projectile point, five basalt flakes, and five pestles found. This Sierra County site was recorded by USFS personnel in 1990.",
   src:"Foster, Betts & Sandelin 1999"},

  {name:"Salmon Lake", tri:"CA-SIE-*", lat:39.6300, lng:-120.5950, elev:6600,
   watershed:"NY", side:"W", elements:4, bearTracks:0, anthropomorphs:0,
   pond:true, waterfall:false, brm:false, millingSlick:false, lithicScatter:false,
   desc:"A rock bench with a panoramic view of Salmon Lake contains four petroglyph elements. Recently discovered site has not yet been formally recorded.",
   src:"Rhode 1996; Foster, Betts & Sandelin 1999"},

  // ===== NEVADA COUNTY — Lots-O-Granite (assigned differently) =====
  {name:"Lots-O-Granite", tri:"05-17-55-230", lat:39.2000, lng:-120.4000, elev:6820,
   watershed:"SY", side:"W", elements:14, bearTracks:5, anthropomorphs:0,
   pond:true, waterfall:false, brm:false, millingSlick:false, lithicScatter:true,
   desc:"Nevada County — an area with numerous granite outcrops containing a petroglyph site with approximately 14 elements. An extensive basalt lithic scatter extends north across a creek from the petroglyph area. At least 20 basalt projectile points have been found at this site including several Martis-series types. One obsidian projectile point, a basalt spokeshave, and a quartzite scraper also documented. Recorded by Forest Service personnel in 1982 with an update in 1990.",
   src:"Foster, Betts & Sandelin 1999"}
];


// ===== RENDER MARKERS =====
// Use a warm amber/gold color to distinguish from other rock art layers
const MARTIS_COLOR = '#FFB300'; // Amber gold for Martis

martisStyle7Sites.forEach(s => {
  const icon = raIcon('petroglyph', MARTIS_COLOR, 9);

  // Size category
  let sizeLabel = 'Small';
  if (s.elements >= 500) sizeLabel = '★ Major site (500+ elements)';
  else if (s.elements >= 100) sizeLabel = 'Large site (100+ elements)';
  else if (s.elements >= 30) sizeLabel = 'Medium site';

  // Environmental attributes
  const envAttrs = [];
  if (s.pond) envAttrs.push('🌊 Near pond/lake');
  if (s.waterfall) envAttrs.push('💧 Near waterfall');

  // Archaeological associations
  const archAttrs = [];
  if (s.brm) archAttrs.push('Bedrock mortars');
  if (s.millingSlick) archAttrs.push('Milling slicks');
  if (s.lithicScatter) archAttrs.push('Lithic scatter');

  // Petroglyph attributes
  const petroAttrs = [];
  petroAttrs.push(`${s.elements} elements`);
  if (s.bearTracks > 0) petroAttrs.push(`${s.bearTracks} bear tracks`);
  if (s.anthropomorphs && s.anthropomorphs !== 0 && s.anthropomorphs !== '?')
    petroAttrs.push(`${s.anthropomorphs} anthropomorphs`);

  const watershedNames = {
    SY:'South Yuba River', T:'Truckee River', MY:'Middle Yuba River',
    NA:'North Fork American River', MA:'Middle Fork American River',
    B:'Bear River', NF:'North Fork Feather River', SF:'South Fork Feather River',
    NY:'North Yuba River', R:'Rubicon River'
  };

  const popup = `
    <div style="max-width:420px;font-family:'Source Sans Pro',sans-serif;">
      <h4 style="color:#FFB300;margin:0 0 4px;font-size:15px;">🪨 ${s.name}</h4>
      <div style="font-size:10px;color:#FFB300;margin-bottom:6px;font-weight:600;">${sizeLabel} — Martis Style 7 Petroglyph</div>
      <div style="font-size:11px;color:#aaa;margin-bottom:6px;">
        <b>Trinomial:</b> ${s.tri} &nbsp;|&nbsp; <b>Elevation:</b> ${s.elev} ft<br>
        <b>Watershed:</b> ${watershedNames[s.watershed] || s.watershed} (${s.side === 'W' ? 'West slope' : 'East slope'} of Sierra crest)
      </div>
      <div style="font-size:12px;color:#ccc;line-height:1.5;margin-bottom:6px;">${s.desc}</div>
      ${envAttrs.length ? `<div style="font-size:11px;color:#4FC3F7;margin-bottom:4px;">${envAttrs.join(' &nbsp;•&nbsp; ')}</div>` : ''}
      <div style="font-size:11px;color:#E0E0E0;margin-bottom:4px;">
        <b>Petroglyphs:</b> ${petroAttrs.join(', ')}
      </div>
      ${archAttrs.length ? `<div style="font-size:11px;color:#A5D6A7;margin-bottom:4px;"><b>Archaeology:</b> ${archAttrs.join(', ')}</div>` : ''}
      <div style="font-size:10px;color:#888;margin-top:6px;border-top:1px solid rgba(255,179,0,0.2);padding-top:4px;">
        <b>Culture:</b> Martis Complex (~4,000–1,500 BP) / Style 7 "High Sierra Abstract-Representational"<br>
        <b>Motifs:</b> Concentric circles, wavy lines, zigzags, bear tracks, occasional anthropomorphs. Pecked into glacially polished bedrock.<br>
        <b>Sources:</b> ${s.src}
      </div>
    </div>`;

  L.marker([s.lat, s.lng], {icon}).addTo(L_groups.martisRockArt).bindPopup(popup, {maxWidth:440});
});


// ===== MARTIS COMPLEX TERRITORY POLYGON =====
// ~10,000 sq mi area along Sierra crest — Plumas County south to Stanislaus River
// Western slope of Sierra Nevada, mid-to-high elevations (Transition Zone)
// Boundaries incorporate present ethnographic areas of both Maidu and Washo
const martisTerritory = [
  [40.10, -121.60], // Northern boundary — Plumas County
  [40.05, -121.30],
  [39.95, -121.10],
  [39.85, -120.90],
  [39.75, -120.75],
  [39.70, -120.60],
  [39.60, -120.45],
  [39.55, -120.35],
  [39.45, -120.25],
  [39.35, -120.15], // Near Donner Pass / Lake Tahoe
  [39.25, -120.10],
  [39.15, -120.05],
  [39.05, -120.00],
  [38.95, -119.95],
  [38.85, -119.95],
  [38.70, -120.00],
  [38.50, -120.05],
  [38.30, -120.10],
  [38.10, -120.15], // Southern limit — near Stanislaus River
  [38.00, -120.25],
  // Western boundary — foothills (~4000 ft)
  [38.10, -120.55],
  [38.30, -120.65],
  [38.50, -120.70],
  [38.70, -120.75],
  [38.85, -120.80],
  [39.00, -120.85],
  [39.15, -120.90],
  [39.30, -120.85],
  [39.45, -120.80],
  [39.55, -120.75],
  [39.65, -120.80],
  [39.75, -120.90],
  [39.85, -121.10],
  [39.95, -121.30],
  [40.05, -121.50],
  [40.10, -121.60]
];

L.polygon(martisTerritory, {
  color: '#FFB300',
  weight: 2,
  opacity: 0.6,
  fillColor: '#FFB300',
  fillOpacity: 0.06,
  dashArray: '6,4'
}).addTo(L_groups.martisRockArt).bindPopup(`
  <div style="max-width:380px;font-family:'Source Sans Pro',sans-serif;">
    <h4 style="color:#FFB300;margin:0 0 6px;">Martis Archaeological Complex — Territory</h4>
    <div style="font-size:12px;color:#ccc;line-height:1.5;">
      The Martis Complex occupied approximately 10,000 square miles in the mid-to-high elevations of the northern Sierra Nevada Transition Zone, on both sides of the Sierra crest. Its boundaries incorporate the present ethnographic areas of both the Maidu and Washo peoples.<br><br>
      <b>Temporal range:</b> ~4,000–1,500 BP (2000 BCE – 500 CE)<br>
      <b>Elevation range:</b> Permanent winter camps below 4,000 ft; summer camps and rock art sites at 4,600–7,640 ft<br>
      <b>Defining traits:</b> Large basalt projectile points, spokeshave-notched scrapers, biface blades, bedrock mortars, milling slicks, and Style 7 abstract petroglyphs<br>
      <b>Economy:</b> Hunting and seed gathering oriented toward seasonal movement between foothill winter camps and high-elevation summer camps<br><br>
      <i>92 confirmed Style 7 petroglyph sites with 5,253+ documented elements.</i>
    </div>
    <div style="font-size:10px;color:#888;margin-top:6px;">Source: Elsasser & Gortner 1991; Foster, Betts & Sandelin 1999</div>
  </div>`, {maxWidth:400});


// ===== STYLE 7 CORE DISTRIBUTION ZONE =====
// The dark-shaded area from Figure 1 — concentrated along Sierra crest
// Upper watersheds of Yuba, American, Bear, and Feather rivers
const style7CoreZone = [
  [39.95, -121.15],
  [39.85, -120.95],
  [39.75, -120.75],
  [39.65, -120.55],
  [39.55, -120.40],
  [39.45, -120.30],
  [39.35, -120.20],
  [39.25, -120.15],
  [39.15, -120.10],
  [39.05, -120.15],
  // back up western side
  [39.10, -120.55],
  [39.20, -120.65],
  [39.30, -120.70],
  [39.40, -120.65],
  [39.50, -120.60],
  [39.60, -120.65],
  [39.70, -120.75],
  [39.80, -120.90],
  [39.90, -121.05],
  [39.95, -121.15]
];

L.polygon(style7CoreZone, {
  color: '#FF8F00',
  weight: 2,
  opacity: 0.5,
  fillColor: '#FF8F00',
  fillOpacity: 0.10,
  dashArray: '3,3'
}).addTo(L_groups.martisRockArt).bindPopup(`
  <div style="max-width:340px;font-family:'Source Sans Pro',sans-serif;">
    <h4 style="color:#FF8F00;margin:0 0 6px;">Style 7 Petroglyph Core Zone</h4>
    <div style="font-size:12px;color:#ccc;line-height:1.5;">
      The core distribution of Style 7 "High Sierra Abstract-Representational" petroglyphs — concentrated along the Sierra Nevada crest in the upper watersheds of the Yuba, American, Bear, Feather, and Truckee rivers.<br><br>
      <b>Counties:</b> Nevada, Placer, Plumas, Sierra<br>
      <b>Elevation range:</b> 4,620–7,640 ft<br>
      <b>Sites:</b> 92 confirmed Style 7 sites<br>
      <b>Characteristics:</b> Pecked into glacially polished bedrock (primarily granite), featuring concentric circles, wavy lines, zigzags, bear tracks, and occasional anthropomorphic figures. The most complex rock art style in the northern Sierra Nevada.
    </div>
    <div style="font-size:10px;color:#888;margin-top:6px;">Source: Foster, Betts & Sandelin 1999 (Figure 1)</div>
  </div>`, {maxWidth:360});
