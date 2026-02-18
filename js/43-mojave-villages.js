// ============================================================
// MOJAVE DESERT — Village & Habitation Sites
// Archaeological sites organized by cultural period
// Paleoindian through Contact period + ceremonial sites
// ============================================================

// ========== PERIOD-SPECIFIC ICONS ==========
const paleoIcon = mkIcon('#D32F2F', 9);       // Deep red — Paleoindian
const paleoLgIcon = mkIcon('#D32F2F', 12);
const pintoIcon = mkIcon('#E65100', 9);        // Orange — Pinto/Early Archaic
const pintoLgIcon = mkIcon('#E65100', 12);
const gypsumIcon = mkIcon('#F9A825', 9);       // Gold — Gypsum/Middle Archaic
const gypsumLgIcon = mkIcon('#F9A825', 12);
const roseIcon = mkIcon('#2E7D32', 9);         // Green — Rose Spring/Late Archaic
const roseLgIcon = mkIcon('#2E7D32', 12);
const latePreIcon = mkIcon('#00838F', 9);      // Teal — Late Prehistoric
const latePreLgIcon = mkIcon('#00838F', 12);
const ethnoIcon = mkIcon('#7B1FA2', 9);        // Purple — Ethnohistoric
const ethnoLgIcon = mkIcon('#7B1FA2', 12);
const multiIcon = L.divIcon({className:'', iconSize:[10,10], iconAnchor:[5,5],
  html:'<div style="width:10px;height:10px;background:#FAFAFA;border:2.5px solid #FF8F00;border-radius:50%;box-shadow:0 0 5px #FF8F0044;"></div>'});
const multiLgIcon = L.divIcon({className:'', iconSize:[13,13], iconAnchor:[6.5,6.5],
  html:'<div style="width:13px;height:13px;background:#FAFAFA;border:3px solid #FF8F00;border-radius:50%;box-shadow:0 0 6px #FF8F0066;"></div>'});
const ceremonialIcon = L.divIcon({className:'', iconSize:[12,12], iconAnchor:[6,6],
  html:'<div style="width:12px;height:12px;background:#E040FB;border:2px solid #1A1208;border-radius:2px;transform:rotate(45deg);box-shadow:0 0 6px #E040FB66;"></div>'});

// ========== 1. PALEOINDIAN / LAKE MOJAVE COMPLEX (~13,000–8,000 BCE) ==========

// Silver Lake shoreline sites
L.marker([35.3300,-116.0800], {icon:paleoIcon}).addTo(L_groups.mojavePaleo).bindPopup(`<h4 style="color:#EF5350">Silver Lake Shoreline Sites</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Lake Mojave Complex · ~13,000–8,000 BCE · Lakeside camps & lithic scatters</div><div style="font-size:12px;color:#ccc;line-height:1.5">Lake Mojave and Silver Lake projectile points extensively collected around Silver Lake shorelines. Stone features — circular, oval, and linear — constructed of local cobbles extend from late Holocene shorelines onto the playa. Ring-shaped or arc-shaped features on talus slopes may have been <b>temporary dwellings, windbreaks, or storage units</b>.<br><br><b>Key artifacts:</b> Lake Mojave points, Silver Lake points, crescents</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Campbell et al. 1937, "The Archaeology of Pleistocene Lake Mojave," Southwest Museum Papers No. 11</div>`, {maxWidth:400});

// Soda Lake shoreline sites
L.marker([35.1652,-116.0714], {icon:paleoIcon}).addTo(L_groups.mojavePaleo).bindPopup(`<h4 style="color:#EF5350">Soda Lake Shoreline Sites</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Lake Mojave Complex · ~13,000–8,000 BCE · Lakeside camps</div><div style="font-size:12px;color:#ccc;line-height:1.5">Extensive shoreline camps around ancient Soda Lake. Paleoindians employed both <b>"wetland transient"</b> (moving between lake basins) and <b>"wetland stable"</b> strategies depending on lake productivity.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Campbell et al. 1937; Warren, BLM</div>`, {maxWidth:380});

// Fort Irwin Clovis Sites
L.marker([35.2600,-116.6800], {icon:paleoLgIcon}).addTo(L_groups.mojavePaleo).bindPopup(`<h4 style="color:#EF5350">Fort Irwin Clovis Sites</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">~13,000–8,000 BCE · Fort Irwin Military Reservation · Restricted access</div><div style="font-size:12px;color:#ccc;line-height:1.5">At least <b>four recorded sites</b> with Clovis and Great Basin Concave Base projectile points, plus several isolated Clovis point finds. Two large multi-component sites re-recorded in 2014, including <b>Bitter Spring (CA-SBR-2659/H)</b>, which is on the National Register of Historic Places.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Burnett et al. 2016; Fort Irwin Cultural Resources Program</div>`, {maxWidth:400});

// Rogers Dry Lake / Edwards AFB
L.marker([34.9000,-117.8800], {icon:paleoIcon}).addTo(L_groups.mojavePaleo).bindPopup(`<h4 style="color:#EF5350">Rogers Dry Lake / Edwards AFB Sites</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Lake Thompson shorelines · Paleoindian through Late Prehistoric · Western Mojave</div><div style="font-size:12px;color:#ccc;line-height:1.5">Prehistoric settlement along the eastern margin of Rogers Dry Lake. Sites dating from <b>Paleoindian through Late Prehistoric</b> periods documented along ancient lakeshore terraces of Lake Thompson.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Byrd et al. 1994, "Prehistoric Settlement Along the Eastern Margin of Rogers Dry Lake"</div>`, {maxWidth:380});

// Deadman Lake Basin (MCAGCC Twentynine Palms)
L.marker([34.2500,-116.1000], {icon:paleoIcon}).addTo(L_groups.mojavePaleo).bindPopup(`<h4 style="color:#EF5350">Deadman Lake Basin Sites</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">MCAGCC Twentynine Palms · Clovis through Middle Holocene</div><div style="font-size:12px;color:#ccc;line-height:1.5">Clovis biface documented along with terminal Pleistocene geological deposits. Multiple archaeological assessments have identified significant early sites within the Marine Corps base.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton et al. 2015, "Late Pleistocene to Middle Holocene Archaeology in the Mojave Desert"</div>`, {maxWidth:380});

// ========== 2. PINTO PERIOD / EARLY ARCHAIC (~8,000–4,000 BCE) ==========

// Pinto Basin — type site
L.marker([33.9000,-115.7500], {icon:pintoLgIcon}).addTo(L_groups.mojavePinto).bindPopup(`<h4 style="color:#FF6D00">🏺 Pinto Basin (CA-RIV-52) — Type Site</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Joshua Tree NP · ~8,000–4,000 BCE · Type site for the Pinto Complex</div><div style="font-size:12px;color:#ccc;line-height:1.5"><b>Type site for the Pinto Complex</b> — the cultural period following dramatic post-Pleistocene drying. Elizabeth and William Campbell surveyed this basin in the early 1930s, finding camps with distinctive artifacts for nearly <b>six miles along an extinct river channel</b>.<br><br>Artifacts: Pinto points, drills, knives, manos, pestles, metates, hammerstones, scrapers. Inhabitants had a predisposition toward <b>quartz for crafting Pinto points</b>. Diagnostic points from Lake Mojave, Pinto, Gypsum, Rose Spring, and Late Prehistoric complexes all present — indicating <b>continuous use over millennia</b>.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Campbell & Campbell 1935; Renteria 2020 (CSUSB thesis); NPS Joshua Tree</div>`, {maxWidth:420});

// Rogers Ridge
L.marker([35.3000,-116.5500], {icon:pintoIcon}).addTo(L_groups.mojavePinto).bindPopup(`<h4 style="color:#FF6D00">Rogers Ridge</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Fort Irwin · Pinto Complex · Fossil spring site</div><div style="font-size:12px;color:#ccc;line-height:1.5">Dated Pinto occupation at a <b>fossil spring</b>. Obsidian hydration dating applied to establish Pinto chronology in the Mojave Desert.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Jenkins 1987; Jenkins & Warren 1984</div>`, {maxWidth:360});

// Little Lake Pinto site
L.marker([35.9400,-117.9100], {icon:pintoIcon}).addTo(L_groups.mojavePinto).bindPopup(`<h4 style="color:#FF6D00">Little Lake Pinto Site</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Inyo County · Pinto Complex · Permanent water source</div><div style="font-size:12px;color:#ccc;line-height:1.5">A Pinto-period site at Little Lake — a rare <b>permanent water source</b> in the northwestern Mojave/Owens Valley transition zone. This spring-fed area attracted human habitation over thousands of years.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Harrington, "A Pinto Site at Little Lake," Southwest Museum Papers No. 17</div>`, {maxWidth:380});

// ========== 3. GYPSUM PERIOD / MIDDLE ARCHAIC (~4,000–1,500 BCE) ==========

// Newberry Cave — the ceremonial heart
L.marker([34.7900,-116.6600], {icon:ceremonialIcon}).addTo(L_groups.mojaveGypsum).bindPopup(`<h4 style="color:#F9A825">✦ Newberry Cave (CA-SBR-199)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Newberry Mountains · ~2000 BCE–600 CE · Ceremonial cave · Split-twig figurines</div><div style="font-size:12px;color:#ccc;line-height:1.5">Discovered 1933, excavated 1953, reexamined 1981. Over <b>3,000 artifacts</b> recovered, including <b>1,049 split-twig figurine fragments</b> (primarily representing deer or bighorn sheep). The <b>only cave in California</b> to contain split-twig figures — all other such caves (15 total) are near the Grand Canyon.<br><br>Contains <b>66 rock art panels</b>, predominantly using <b>green pigment</b> (symbolizing life and renewal). Numerous dart points and decorated dart shafts. Interpreted as an <b>exclusively male ceremonial site</b> focused on bighorn sheep increase rituals.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Smith et al. 1957; Whitley et al., "Ritual, Ceremony and Symbolism of Archaic Bighorn Hunters"; Leska 2009</div>`, {maxWidth:440});

// Gypsum Cave — type site
L.marker([36.2700,-114.9700], {icon:gypsumLgIcon}).addTo(L_groups.mojaveGypsum).bindPopup(`<h4 style="color:#F9A825">🏺 Gypsum Cave — Type Site</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Near Las Vegas, NV · ~4,000–1,500 BCE · Type site for Gypsum period</div><div style="font-size:12px;color:#ccc;line-height:1.5"><b>Type site for the Gypsum period.</b> Excavated by M.R. Harrington (1930). Contained atlatl dart shafts, painted dart foreshafts, and Gypsum points. Also found remains of <b>extinct giant ground sloth</b>. Foundational for establishing the Middle Archaic chronology of the greater Mojave region.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Harrington 1933</div>`, {maxWidth:400});

// Surprise Spring
L.marker([34.1600,-115.9500], {icon:gypsumIcon}).addTo(L_groups.mojaveGypsum).bindPopup(`<h4 style="color:#F9A825">Surprise Spring (CA-SBR-424/H)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Near Twentynine Palms · Gypsum through Late Prehistoric · Perennial spring</div><div style="font-size:12px;color:#ccc;line-height:1.5">Major desert spring site with deep midden deposits. One of the <b>"perpetual resource patches"</b> — a perennial spring that attracted long-term seasonal habitation with domestic refuse. Occupied across multiple time periods.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Altschul 1990, "Prehistoric Adaptation to a Desert Spring Environment"; Sutton 2019</div>`, {maxWidth:380});

// Soda Springs Rockshelter
L.marker([35.1480,-116.1080], {icon:gypsumIcon}).addTo(L_groups.mojaveGypsum).bindPopup(`<h4 style="color:#F9A825">Soda Springs Rockshelter (CA-SBR-363b)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Near Zzyzx · Multicomponent · Rockshelter habitation</div><div style="font-size:12px;color:#ccc;line-height:1.5">Excavated rockshelter near Soda Springs/Zzyzx. Part of a cluster of archaeological sites in the Soda Lake/Baker area showing continuous human use of this water source.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Cameron 1984, "The West Pond Report"; Sutton 1996</div>`, {maxWidth:360});

// ========== 4. ROSE SPRING / LATE ARCHAIC (~1,500 BCE–CE 1000) ==========

// Koehn Lake Village — major site
L.marker([35.1500,-117.8700], {icon:roseLgIcon}).addTo(L_groups.mojaveRoseSpring).bindPopup(`<h4 style="color:#43A047">🏘️ Koehn Lake Village (CA-KER-875)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Western Mojave · ~1,500 BCE–CE 1000 · Major permanent village</div><div style="font-size:12px;color:#ccc;line-height:1.5"><b>Major Rose Spring-era village</b> excavated by Dr. Mark Sutton. Rests above a shoreline of ancient Koehn Dry Lake. The village abutted aeolian dunes crested by a sizeable mesquite community (now decimated by agricultural water drawdown).<br><br>A <b>collapsed circular, semi-subterranean juniper structure</b> was found during excavations. Cornerstone site for Sutton's western Mojave settlement model. Linked to the <b>Coso obsidian trade network</b>; El Paso Mountain quarries supported this village. <b>Abandoned when the lake desiccated ~1000 BP.</b></div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 1986, 1988a, 1990, 1991, 1996; Faull 2006</div>`, {maxWidth:420});

// Rose Spring — type site
L.marker([36.0400,-117.9400], {icon:roseLgIcon}).addTo(L_groups.mojaveRoseSpring).bindPopup(`<h4 style="color:#43A047">🏺 Rose Spring (CA-INY-372) — Type Site</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Near Little Lake, Inyo County · Type site for Rose Spring Complex</div><div style="font-size:12px;color:#ccc;line-height:1.5"><b>Type site for the Rose Spring cultural period</b> and the Rose Spring projectile point series. Located in the western Mojave/Owens Valley transition zone near permanent water. The Rose Spring period marks the introduction of the <b>bow and arrow</b> and increasing population density.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Lanning 1963</div>`, {maxWidth:380});

// Lovejoy Springs — one of the most significant
L.marker([34.6300,-117.8500], {icon:roseLgIcon}).addTo(L_groups.mojaveRoseSpring).bindPopup(`<h4 style="color:#43A047">🏘️ Lovejoy Springs (CA-LAN-192)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Western Antelope Valley · 5,000+ years of occupation · Major village</div><div style="font-size:12px;color:#ccc;line-height:1.5"><b>One of the most significant village sites in the western Mojave.</b> Occupied for at least 5,000 years. Key findings:<br><br>• <b>Mass grave</b> of at least 9 individuals dated to ~2,720 BP — one youth draped in over <b>3,000 Olivella shell beads</b> and a Coso obsidian Elko point, demonstrating early coast-to-desert trade<br>• Ground stone artifacts dominate (intense plant processing)<br>• Ceramics show intermingling of local and distant wares<br>• Heavy reliance on jackrabbits and small mammals<br>• <b>Genetic data (mtDNA)</b> confirm minimum 1,000-year in-situ development of the Vanyume Serrano lineage<br>• Multiple <b>cupule rock art</b> loci nearby<br>• ~85% of the site's cultural resources damaged or destroyed by modern construction</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Price et al. 2009; Love 1992, 1996; Toney 1968; Earle 2015</div>`, {maxWidth:440});

// Cottonwood Creek Village
L.marker([34.8500,-118.2000], {icon:roseIcon}).addTo(L_groups.mojaveRoseSpring).bindPopup(`<h4 style="color:#43A047">Cottonwood Creek Village (CA-KER-303)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">West of Rosamond · ~2,400–2,100 BP · Major village complex</div><div style="font-size:12px;color:#ccc;line-height:1.5">Excavated residential structure (probably juniper) dated to <b>2370 BP and 2140 BP</b>, with nearly 1 meter of underlying midden. Coso obsidian present. Burials with shell beads documented. Part of the network of Antelope Valley villages linked to the <b>Coso obsidian trade system</b>.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 1988a; Sutton & Robinson 1982; Faull 2006</div>`, {maxWidth:400});

// Coso Junction Ranch
L.marker([36.0300,-117.9500], {icon:roseIcon}).addTo(L_groups.mojaveRoseSpring).bindPopup(`<h4 style="color:#43A047">Coso Junction Ranch (CA-INY-2284)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Coso Junction area · Gypsum through Late Prehistoric</div><div style="font-size:12px;color:#ccc;line-height:1.5">Multi-component site near the Coso Range, closely linked to the <b>Coso obsidian trade system</b>. Evidence of sustained occupation during peak obsidian production and distribution.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 2019 (PCAS Quarterly)</div>`, {maxWidth:360});

// Cantil / Honda Test Track
L.marker([35.1300,-117.8400], {icon:roseIcon}).addTo(L_groups.mojaveRoseSpring).bindPopup(`<h4 style="color:#43A047">Cantil / Honda Test Track (CA-KER-2211)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">3 km west of Koehn Lake · Rose Spring through Late Prehistoric</div><div style="font-size:12px;color:#ccc;line-height:1.5">Located 3 km west of the Koehn Lake village. Part of the interconnected settlement system in the western Mojave linked to Coso obsidian distribution.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 1990, 1991</div>`, {maxWidth:360});

// Saratoga Springs
L.marker([35.6800,-116.4200], {icon:roseIcon}).addTo(L_groups.mojaveRoseSpring).bindPopup(`<h4 style="color:#43A047">Saratoga Springs (CA-SBR-5547)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Southern Death Valley area · Rose Spring through Late Prehistoric · Major oasis</div><div style="font-size:12px;color:#ccc;line-height:1.5">A large oasis fed by deep springs. Occupied intermittently over thousands of years. Named in Sutton's major site list for Rose Spring and Late Prehistoric periods.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 1996</div>`, {maxWidth:360});

// ========== 5. LATE PREHISTORIC (CE 1000–Contact) ==========

// Oro Grande
L.marker([34.5900,-117.3300], {icon:latePreIcon}).addTo(L_groups.mojaveLatePre).bindPopup(`<h4 style="color:#00ACC1">Oro Grande (CA-SBR-72)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Mojave River · Late Prehistoric · Vanyume (Desert Serrano)</div><div style="font-size:12px;color:#ccc;line-height:1.5">Significant habitation site on the Mojave River in the Victorville area. One of the key Late Prehistoric settlements along the river corridor.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Rector et al. 1983, "Archaeological Studies at Oro Grande"</div>`, {maxWidth:360});

// Hinkley
L.marker([34.9400,-117.2000], {icon:latePreIcon}).addTo(L_groups.mojaveLatePre).bindPopup(`<h4 style="color:#00ACC1">Hinkley (CA-SBR-189)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Mojave River · Late Prehistoric · Vanyume (Desert Serrano)</div><div style="font-size:12px;color:#ccc;line-height:1.5">River corridor habitation site near Hinkley, along the Mojave River between Barstow and Victorville.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 2019; Smith 1963</div>`, {maxWidth:340});

// Harvard Hill
L.marker([34.9500,-116.6700], {icon:latePreIcon}).addTo(L_groups.mojaveLatePre).bindPopup(`<h4 style="color:#00ACC1">Harvard Hill (CA-SBR-11787)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Near Barstow · Late Prehistoric</div><div style="font-size:12px;color:#ccc;line-height:1.5">Habitation site in the central Mojave near the Mojave River corridor.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 2019</div>`, {maxWidth:320});

// Lenwood
L.marker([34.8800,-117.1000], {icon:latePreIcon}).addTo(L_groups.mojaveLatePre).bindPopup(`<h4 style="color:#00ACC1">Lenwood (CA-SBR-1549)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Near Barstow · Late Prehistoric · Mojave River</div><div style="font-size:12px;color:#ccc;line-height:1.5">Archaeological site near the Mojave River at Lenwood, near Barstow.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 2019</div>`, {maxWidth:320});

// Fairmont Butte
L.marker([34.7800,-118.2800], {icon:latePreLgIcon}).addTo(L_groups.mojaveLatePre).bindPopup(`<h4 style="color:#00ACC1">🏘️ Fairmont Butte / Antelope Buttes Village (CA-LAN-898)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Antelope Valley · Late Prehistoric · Serrano-affiliated</div><div style="font-size:12px;color:#ccc;line-height:1.5">Large village complex consolidated from multiple site recordings. Contains <b>red pigment pictograph</b>. Part of the network of Antelope Valley settlements.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Knight et al. 2008 (Kern County Archaeological Society Journal)</div>`, {maxWidth:380});

// Piute Butte
L.marker([34.7500,-117.9000], {icon:latePreIcon}).addTo(L_groups.mojaveLatePre).bindPopup(`<h4 style="color:#00ACC1">Piute Butte (CA-LAN-1731)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Eastern Antelope Valley · Late Prehistoric · Pictograph panels</div><div style="font-size:12px;color:#ccc;line-height:1.5">Site contains pictograph panels and associated habitation features.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Knight et al. 2008</div>`, {maxWidth:340});

// ========== 6. ETHNOHISTORIC NAMED VILLAGES (1776+) ==========

// Guapiabit
L.marker([34.4000,-117.3500], {icon:ethnoLgIcon}).addTo(L_groups.mojaveEthno).bindPopup(`<h4 style="color:#AB47BC">🏘️ Guapiabit (CA-SBR-93/1913)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Summit Valley / Hesperia · Serrano · Major ethnohistoric village complex</div><div style="font-size:12px;color:#ccc;line-height:1.5">Named Serrano village at the Mojave River Forks area. When interviewed by <b>John P. Harrington</b> in the early 1900s, Serrano tribal leader <b>Santos Manuel</b> called this area of Summit Valley <b>"wa'peat"</b> (a Serrano space). Multiple archaeological sites within this village complex. NAGPRA repatriation efforts have identified human remains from the Las Flores Ranch area.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Altschul et al.; Federal Register 2021 NAGPRA; Sutton & Schneider 1996</div>`, {maxWidth:420});

// Muscupiabit / Camp Cajon
L.marker([34.3200,-117.4300], {icon:ethnoLgIcon}).addTo(L_groups.mojaveEthno).bindPopup(`<h4 style="color:#AB47BC">🏘️ Muscupiabit / Camp Cajon (CA-SBR-425/H)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Cajon Pass · Serrano · Major named village</div><div style="font-size:12px;color:#ccc;line-height:1.5">Named Serrano village at Cajon Pass. Santos Manuel called this area <b>"amutskupiat."</b> The Camp Cajon Site was owned by the San Bernardino County Museum Association until 2019, when it was <b>transferred to the San Manuel Band of Mission Indians</b>. Multiple NAGPRA repatriations associated.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Federal Register 2021; Harrington field notes; San Bernardino County Museum</div>`, {maxWidth:400});

// Wá'peat
L.marker([34.4200,-117.3200], {icon:ethnoLgIcon}).addTo(L_groups.mojaveEthno).bindPopup(`<h4 style="color:#AB47BC">🏘️ Wá'peat</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Summit Valley / Las Flores Ranch · Vanyume (Desert Serrano) · Major village</div><div style="font-size:12px;color:#ccc;line-height:1.5">Major village of the <b>Vanyume people</b> along the upper Mojave River. Santos Manuel identified the Summit Valley area as <b>"wa'peat."</b> Multiple archaeological sites (CA-SBR-66/182 — Turner Ranch, and others) are associated with this village complex.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Earle 2015; Harrington 1986; Federal Register 2021</div>`, {maxWidth:400});

// Turner Ranch
L.marker([34.4500,-117.3000], {icon:ethnoIcon}).addTo(L_groups.mojaveEthno).bindPopup(`<h4 style="color:#AB47BC">Turner Ranch (CA-SBR-66/182)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Victor Valley · Vanyume · Part of Wá'peat village complex</div><div style="font-size:12px;color:#ccc;line-height:1.5">Archaeological site within the broader Wá'peat village complex.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 2019; Smith 1963</div>`, {maxWidth:340});

// Atongaibit
L.marker([34.3900,-117.3300], {icon:ethnoIcon}).addTo(L_groups.mojaveEthno).bindPopup(`<h4 style="color:#AB47BC">Atongaibit</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Victor Valley · Serrano · Named village</div><div style="font-size:12px;color:#ccc;line-height:1.5">Identified by Santos Manuel as a named Serrano village north of Muscupiabit. CA-SBR-177 is located between Guapiabit and Atongaibit.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Federal Register 2021; Harrington field notes</div>`, {maxWidth:360});

// Yucaipat
L.marker([34.0300,-117.0400], {icon:ethnoIcon}).addTo(L_groups.mojaveEthno).bindPopup(`<h4 style="color:#AB47BC">Yucaipat (CA-SBR-1000)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Town of Yucaipa · Serrano · Named village</div><div style="font-size:12px;color:#ccc;line-height:1.5">In 1918, Serrano consultants identified the town of Yucaipa as the site of the Serrano village of <b>Yucaipat</b>. NAGPRA repatriation of human remains from this site.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Federal Register 2021</div>`, {maxWidth:360});

// Chemehuevi band territories
L.marker([34.9500,-115.5000], {icon:ethnoIcon}).addTo(L_groups.mojaveEthno).bindPopup(`<h4 style="color:#AB47BC">Tümplsagavatsits — Providence Mountain Group</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Providence Mountains · Chemehuevi band</div><div style="font-size:12px;color:#ccc;line-height:1.5">Chemehuevi band living in the Providence Mountains. Used <b>Mitchell Caverns</b> as habitation and storage — calling them the <b>"Eyes of the Mountain."</b></div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Laird 1976, "The Chemehuevis"</div>`, {maxWidth:360});

L.marker([35.9000,-116.2000], {icon:ethnoIcon}).addTo(L_groups.mojaveEthno).bindPopup(`<h4 style="color:#AB47BC">Yagats — Amargosa River Group</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Amargosa Valley · Chemehuevi band</div><div style="font-size:12px;color:#ccc;line-height:1.5">Chemehuevi band living in the Amargosa Valley and along the Amargosa River.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Laird 1976, "The Chemehuevis"</div>`, {maxWidth:340});

// ========== 7. MULTI-COMPONENT SITES ==========

// Bitter Spring (NRHP)
L.marker([35.2272,-116.4317], {icon:multiLgIcon}).addTo(L_groups.mojaveMulti).bindPopup(`<h4 style="color:#FF8F00">⬡ Bitter Spring (CA-SBR-2659/H)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Fort Irwin · NRHP-listed · Multiple periods through Contact</div><div style="font-size:12px;color:#ccc;line-height:1.5"><b>National Register of Historic Places</b> listed site within Fort Irwin. Major spring along the Salt Lake Trail. Indigenous peoples occupied this spring for millennia before it was militarized. Clovis-age artifacts documented during 2014 re-recording.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Fort Irwin Cultural Resources Program; Burnett et al. 2016</div>`, {maxWidth:380});

// Cronese Lakes sites
L.marker([35.1200,-116.3000], {icon:multiIcon}).addTo(L_groups.mojaveMulti).bindPopup(`<h4 style="color:#FF8F00">⬡ Cronese Lakes Sites</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">CA-SBR-259, -260, -128, -6017, -6018, -4198 · Multiple periods</div><div style="font-size:12px;color:#ccc;line-height:1.5">Cluster of archaeological sites around the East and West Cronese Lakes. Received Mojave River overflow. <b>Vanyume (Desert Serrano)</b> sites documented in Late Prehistoric period.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 2019; Earle, "The Desert Serrano"</div>`, {maxWidth:360});

// Deep Creek
L.marker([34.2900,-117.2800], {icon:multiIcon}).addTo(L_groups.mojaveMulti).bindPopup(`<h4 style="color:#FF8F00">⬡ Deep Creek (CA-SBR-176)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Mojave River Forks · Late Prehistoric base camp · Serrano</div><div style="font-size:12px;color:#ccc;line-height:1.5">Deep Creek site in the Mojave River Forks Region. Described as a Late Prehistoric base camp with evidence of earlier occupations. Part of the <b>Serrano seasonal round</b>.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Altschul et al. 1989</div>`, {maxWidth:360});

// Mitchell Caverns
L.marker([34.9400,-115.5300], {icon:multiLgIcon}).addTo(L_groups.mojaveMulti).bindPopup(`<h4 style="color:#FF8F00">⬡ Mitchell Caverns (CA-SBR-117)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Providence Mountains · Cave habitation/storage · Chemehuevi: "Eyes of the Mountain"</div><div style="font-size:12px;color:#ccc;line-height:1.5">Three solutional limestone caves at 4,300 ft elevation on the east side of the Providence Mountains. Chemehuevi tools and fire pits found inside. <b>Shasta ground sloth remains</b> also recovered.<br><br>The Chemehuevi regarded these caves as the <b>"Eyes of the Mountain"</b> — used for habitation and piñon nut storage. Named <b>"El Pakiva"</b> (Devil's House) and <b>"Tecopa"</b> (for a Shoshone chief).</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Pinto 1989; Mitchell Caverns State Park; Mojave Project</div>`, {maxWidth:400});

// Vontrigger Spring
L.marker([35.4000,-115.3000], {icon:multiIcon}).addTo(L_groups.mojaveMulti).bindPopup(`<h4 style="color:#FF8F00">⬡ Vontrigger Spring (CA-SBR-413)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Eastern Mojave · Spring-based habitation · Multicomponent</div><div style="font-size:12px;color:#ccc;line-height:1.5">Archaeological investigations at this eastern Mojave spring site, showing multiple periods of occupation.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton & Novickas (manuscript)</div>`, {maxWidth:340});

// Council Rocks
L.marker([34.8500,-116.9000], {icon:multiIcon}).addTo(L_groups.mojaveMulti).bindPopup(`<h4 style="color:#FF8F00">⬡ Council Rocks (CA-SBR-291)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Central Mojave · Ceremonial/gathering site with rock art</div><div style="font-size:12px;color:#ccc;line-height:1.5">Test unit excavations documented. A gathering and ceremonial site with rock art in the central Mojave.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Cameron & Rafter 1983</div>`, {maxWidth:340});

// Rustler Rockshelter
L.marker([35.3000,-115.5000], {icon:multiIcon}).addTo(L_groups.mojaveMulti).bindPopup(`<h4 style="color:#FF8F00">⬡ Rustler Rockshelter (CA-SBR-288)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Eastern Mojave · Rose Spring through Late Prehistoric</div><div style="font-size:12px;color:#ccc;line-height:1.5">Excavated rockshelter with multi-period occupation in the eastern Mojave.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 1996</div>`, {maxWidth:340});

// Clark Mountain
L.marker([35.5200,-115.5700], {icon:multiIcon}).addTo(L_groups.mojaveMulti).bindPopup(`<h4 style="color:#FF8F00">⬡ Clark Mountain (CA-SBR-4889)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Near CA-NV border · Late Prehistoric</div><div style="font-size:12px;color:#ccc;line-height:1.5">Archaeological site in the Clark Mountain area near the California-Nevada border.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 1996</div>`, {maxWidth:320});

// Salt Spring
L.marker([35.3500,-116.2500], {icon:multiIcon}).addTo(L_groups.mojaveMulti).bindPopup(`<h4 style="color:#FF8F00">⬡ Salt Spring (CA-SBR-8466)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Silurian Valley · Old Spanish Trail route · Multicomponent</div><div style="font-size:12px;color:#ccc;line-height:1.5">Located along the <b>Old Spanish Trail</b> route in Silurian Valley. Spring-based habitation spanning multiple periods.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 2019</div>`, {maxWidth:340});

// ========== 8. CEREMONIAL & ROCK ART SITES ==========

// Black Mountain Rock Art District
L.marker([34.9800,-117.0800], {icon:ceremonialIcon}).addTo(L_groups.mojaveCeremonial).bindPopup(`<h4 style="color:#E040FB">✦ Black Mountain Rock Art District</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">NW of Barstow · 12,000+ petroglyphs · NRHP 2000 · Up to 8,000 years old</div><div style="font-size:12px;color:#ccc;line-height:1.5"><b>12,000+ petroglyphs.</b> Inscription Canyon contains 1,000+ designs, some up to <b>8,000 years old</b>. Complex designs: humanoid figures, shields, masks, baskets, deer, bighorn sheep. Listed on the <b>National Register of Historic Places (2000)</b>.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: BLM</div>`, {maxWidth:400});

// Eggshell Cave
L.marker([35.0000,-117.6000], {icon:ceremonialIcon}).addTo(L_groups.mojaveCeremonial).bindPopup(`<h4 style="color:#E040FB">✦ Eggshell Cave (CA-KER-341)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Western Mojave · Late Prehistoric · Small ceremonial cave</div><div style="font-size:12px;color:#ccc;line-height:1.5">Excavations revealed a small ceremonial location where a person or persons ingested <b>Amsinckia seeds for their hallucinogenic effect</b>, likely for ritual purposes. A rare archaeological window into <b>indigenous ritual practice</b> in the Mojave.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton (PCAS Quarterly)</div>`, {maxWidth:380});

// California City Cave
L.marker([35.1000,-117.9000], {icon:ceremonialIcon}).addTo(L_groups.mojaveCeremonial).bindPopup(`<h4 style="color:#E040FB">✦ California City Cave (CA-KER-517)</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">Near California City · Cave site</div><div style="font-size:12px;color:#ccc;line-height:1.5">Cave site in the western Mojave near California City.</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton 1996</div>`, {maxWidth:320});

// Coso Rock Art District (if not already in another layer, add reference marker)
L.marker([36.0400,-117.8200], {icon:ceremonialIcon}).addTo(L_groups.mojaveCeremonial).bindPopup(`<h4 style="color:#E040FB">✦ Coso Rock Art District</h4><div style="font-size:10px;color:#aaa;margin-bottom:4px">NAWS China Lake · 100,000+ petroglyphs · Largest concentration in Western Hemisphere</div><div style="font-size:12px;color:#ccc;line-height:1.5"><b>100,000+ petroglyphs</b> across 90 square miles. Little Petroglyph Canyon alone has ~20,000 documented images. ~50% of carvings are bighorn sheep. Sacred to Paiute-Shoshone peoples. Associated with the <b>"Coso People"</b> and the Coso obsidian trade network.<br><br>Access: Within NAWS China Lake; limited tours through <b>Maturango Museum</b> (Ridgecrest).</div><div style="margin-top:6px;font-size:10px;color:#888">Sources: Grant 1968; Whitley 1994, 2000</div>`, {maxWidth:400});
