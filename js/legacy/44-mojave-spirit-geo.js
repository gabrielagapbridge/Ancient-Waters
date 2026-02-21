// ============================================================
// MOJAVE DESERT — SPIRITUAL GEOGRAPHY OVERLAY
// Connecting sacred sites, dream religion, geoglyphs, cremation
// practices, pilgrimage corridors, and water-spirit relationships
// into a unified "sacred landscape" layer
// ============================================================
//
// RESEARCH TRENDS:
// 1. Water type = identity (River People, Mountain People, Spring People)
// 2. Sacred sites cluster where water meets geological drama
// 3. Geoglyphs form a linear corridor along the Colorado River
// 4. Dream religion = landscape IS the temple
// 5. Trade routes double as pilgrimage routes, spring-to-spring
// 6. Shared resources, approximate boundaries, welcomed passage
// ============================================================

// ========== ICONS ==========
const spiritSiteIcon = L.divIcon({className:'', iconSize:[14,14], iconAnchor:[7,7],
  html:'<div style="width:14px;height:14px;background:radial-gradient(circle,#E040FB 30%,#AB47BC 70%);border:2px solid #1A1208;border-radius:50%;box-shadow:0 0 8px #E040FB88;"></div>'});
const dreamIcon = L.divIcon({className:'', iconSize:[14,14], iconAnchor:[7,7],
  html:'<div style="width:14px;height:14px;background:radial-gradient(circle,#7C4DFF 30%,#651FFF 70%);border:2px solid #1A1208;border-radius:50%;box-shadow:0 0 8px #7C4DFF88;"></div>'});
const geoglyphIcon = L.divIcon({className:'', iconSize:[13,13], iconAnchor:[6.5,6.5],
  html:'<div style="width:13px;height:13px;background:#FF6D00;border:2.5px solid #1A1208;border-radius:2px;transform:rotate(45deg);box-shadow:0 0 7px #FF6D0066;"></div>'});
const cremationIcon = L.divIcon({className:'', iconSize:[12,12], iconAnchor:[6,6],
  html:'<div style="width:12px;height:12px;background:#D50000;border:2px solid #1A1208;border-radius:50%;box-shadow:0 0 6px #D5000066;"></div>'});
const waterSpiritIcon = L.divIcon({className:'', iconSize:[12,12], iconAnchor:[6,6],
  html:'<div style="width:12px;height:12px;background:radial-gradient(circle,#00E5FF 30%,#00B8D4 70%);border:2px solid #1A1208;border-radius:50%;box-shadow:0 0 7px #00E5FF88;"></div>'});

// ============================================================
// 1. CREATION GEOGRAPHY — The Axis Mundi
// The spiritual backbone: Spirit Mountain → Colorado River
// ============================================================

// Spirit Mountain / Avi Kwa Ame — enhanced spiritual context
L.marker([35.4597, -114.7278], {icon:spiritSiteIcon}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #E040FB;padding-left:10px;">
<h4 style="color:#E040FB;margin:0 0 4px">✦ Avi Kwa Ame — The Center of All Creation</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:6px">Spirit Mountain · 5,642 ft · National Monument (2023) · 506,814 acres</div>
<div style="font-size:12px;color:#ccc;line-height:1.6">
<b>The spiritual axis of the Mojave world.</b> For the Pipa Aha Macav and all Yuman-speaking peoples, this is where humanity was created — where the first people emerged into this world. Tribal elders called it <b>"the place where shamans dream."</b><br><br>
<b>The Dream Connection:</b> Mojave religion holds that all power, knowledge, and skill come through dreams. Avi Kwa Ame is the ultimate dreaming place — the origin point of all spiritual power. The mountain is caretaken by the Fort Mojave Tribe on behalf of <b>12 tribal nations</b>: ten Yuman-speaking tribes plus the Hopi and Southern Paiute.<br><br>
<b>Landscape as Temple:</b> The surrounding peaks, canyons, springs, and trails are all physically and spiritually connected to Avi Kwa Ame through what tribal leaders describe as a viewshed of sacred geography. The mountain doesn't stand alone — it anchors an entire network of sacred sites connected by ancient trails and song lines.<br><br>
<b>Ongoing Practice:</b> "When I walk near Spirit Mountain, I am not just a person walking towards the mountain, I am part of it." — Paul Jackson, Fort Mojave elder & artist
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Fort Mojave Indian Tribe; Honor Avi Kwa Ame; Paul Jackson, Conservation Lands Foundation; Sacred Land Film Project</div>
</div>`, {maxWidth:460});

// First House of Mutavilya — Black Canyon
L.marker([35.9800, -114.7400], {icon:spiritSiteIcon}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #E040FB;padding-left:10px;">
<h4 style="color:#E040FB;margin:0 0 4px">✦ First House of Mutavilya — Black Canyon</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:6px">Northern boundary of Mojave territory · Near Hoover Dam · Creation site</div>
<div style="font-size:12px;color:#ccc;line-height:1.6">
The tall rock pillars of Black Canyon are the <b>First House of Mutavilya</b> — the Mojave creator spirit who made the Colorado River, its plants, animals, and instructed the Pipa Aha Macav in the arts of civilization. His brother <b>Mastamho</b> taught the people how to farm the floodplains.<br><br>
This marks the <b>northern spiritual boundary</b> of Mojave territory. From here, their sacred geography extends south along the Colorado River for over 100 miles, anchored by Spirit Mountain and the river corridor.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Fort Mojave Indian Tribe; Wikipedia (Mohave people); Kroeber</div>
</div>`, {maxWidth:420});

// Huukyámpve — The Needles ("Where the Battle Took Place")
L.marker([34.7670, -114.6220], {icon:spiritSiteIcon}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #E040FB;padding-left:10px;">
<h4 style="color:#E040FB;margin:0 0 4px">✦ Huukyámpve — "Where the Battle Took Place"</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:6px">The Needles Peaks · Near Needles, CA · Mythic battlefield</div>
<div style="font-size:12px;color:#ccc;line-height:1.6">
Three sharp rock spires rising from the Colorado River landscape. The Mojave call them <b>Huukyámpve</b>, meaning "where the battle took place" — referring to the mythic battle in which the god-son <b>Mastamho slew the sea serpent</b>.<br><br>
European settlers misinterpreted the tribal name "Mohave" as deriving from "three mountains" referring to these needles. In reality, the Mojave self-identify as <b>Aha Makhav</b> — a name connected to the river itself. The needles mark a key mythic site along the sacred river corridor.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Hodge 1917; Wikipedia (Mohave people); Fort Mojave Indian Tribe</div>
</div>`, {maxWidth:420});

// ============================================================
// 2. GEOGLYPH CORRIDOR — Dream Visions Made Physical
// Over 200 giant ground figures along the Colorado River
// ============================================================

// Blythe Intaglios — Mastamho, the Creator
L.marker([33.8006, -114.5322], {icon:geoglyphIcon}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #FF6D00;padding-left:10px;">
<h4 style="color:#FF6D00;margin:0 0 4px">◆ Blythe Intaglios — Creator Figures</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:6px">16 mi N of Blythe · 3 human + 2 animal figures · Up to 171 ft long · NRHP 1982</div>
<div style="font-size:12px;color:#ccc;line-height:1.6">
The most famous geoglyphs in North America. The largest human figure — 171 feet long — is believed to represent <b>Mastamho, the Creator of all life</b> according to Mojave and Quechan oral tradition. Created by scraping away dark desert-varnished stones to reveal lighter soil beneath.<br><br>
<b>Dream-to-Landscape:</b> Among the Yuman-speaking peoples, spiritual power comes through dreaming, not formal training. Geoglyphs may represent the physical manifestation of dream visions — bringing the spiritual world into the landscape. The communal act of <b>making</b> the geoglyph may have been as important as viewing it.<br><br>
<b>Ritual Context:</b> Trails lead to the intaglios. Rock alignments and cairns are often found nearby. The figures align with ancient trails and water sources, suggesting the act of walking to and around them was part of the ceremony. Related to the <b>keruk mourning ceremony</b> — a re-enactment of the creator's death.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: BLM; Campbell et al.; Johnson (Yuman cosmology); Ancient Art Archive; recreation.gov</div>
</div>`, {maxWidth:460});

// Fort Mojave Twins Intaglios
L.marker([34.8100, -114.5900], {icon:geoglyphIcon}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #FF6D00;padding-left:10px;">
<h4 style="color:#FF6D00;margin:0 0 4px">◆ Fort Mojave Twins — Ground Drawings</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:6px">Fort Mohave area · ~900 BCE · Two elongated human forms</div>
<div style="font-size:12px;color:#ccc;line-height:1.6">
Two elongated anthropomorphic figures overlooking the river valley, dating as far back as <b>900 BCE</b>. Part of the only site in North America where ancient ground drawings still survive in their original landscape context. Reminiscent of Mesoamerican creation stories.<br><br>
This is the <b>northernmost major geoglyph site</b> on the Colorado River corridor, placing it closest to Spirit Mountain.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Fort Mojave Indian Tribe; Visit Arizona; BLM</div>
</div>`, {maxWidth:420});

// Parker Snake Intaglio
L.marker([34.1600, -114.2800], {icon:geoglyphIcon}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #FF6D00;padding-left:10px;">
<h4 style="color:#FF6D00;margin:0 0 4px">◆ Parker Snake Intaglio</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:6px">East of Parker, AZ · Huge rattlesnake figure · 125 ft long</div>
<div style="font-size:12px;color:#ccc;line-height:1.6">
A massive rattlesnake scraped into the desert pavement east of Parker, with eyes formed by two large granite cobbles. Snakes hold deep significance in Yuman cosmology — connected to water, the underworld, and the Colorado River itself.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: BLM; Native American Netroots</div>
</div>`, {maxWidth:400});

// Quartzsite Fisherman Intaglio
L.marker([33.6700, -114.2600], {icon:geoglyphIcon}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #FF6D00;padding-left:10px;">
<h4 style="color:#FF6D00;margin:0 0 4px">◆ Quartzsite Fisherman Intaglio</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:6px">Near Quartzsite, AZ · Human figure with spear over two fish</div>
<div style="font-size:12px;color:#ccc;line-height:1.6">
An anthropomorphic figure with a quartzite spear standing over two fish. The fish image is estimated at ~1540 CE and may be younger than the Fisherman figure itself. A group of <b>14 related intaglios</b> lies to the south, including a giant arrow pointing toward the Fisherman from miles away — evidence of an <b>interconnected ritual landscape</b>.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: BLM; Native American Netroots; Ancient Art Archive</div>
</div>`, {maxWidth:420});

// Topock Maze — Passage to the Afterlife
L.marker([34.7100, -114.5100], {icon:geoglyphIcon}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #FF6D00;padding-left:10px;">
<h4 style="color:#FF6D00;margin:0 0 4px">◆ Topock Maze — Passage to the Afterlife</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:6px">Near Needles, CA · Complex maze of cleared pathways · Debated origin</div>
<div style="font-size:12px;color:#ccc;line-height:1.6">
Parallel lines of lighter rock creating a complex maze on the desert floor near the Colorado River. BLM archaeologist George Shannon proposed the maze played a critical role in Mojave beliefs about death: <b>upon death, spirits had to navigate through the maze to reach the afterlife.</b> The maze could also serve as a <b>purification path for the living</b>.<br><br>
<b>Note:</b> The site's origin is debated — historian Ruth Musser-Lopez found evidence it may have been created by 19th-century railroad gravel harvesting, though local groups may have later danced and conducted ceremonies there. The Mojave themselves have not confirmed knowledge of its origin, which itself may reflect the deeply sacred nature of the site.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: BLM; Shannon; Musser-Lopez; RVwest; Blythe Intaglios Wikipedia</div>
</div>`, {maxWidth:460});

// Geoglyph Corridor polyline — connecting the linear sacred landscape
L.polyline([
  [35.4597,-114.7278], // Spirit Mountain
  [34.8100,-114.5900], // Fort Mojave Twins
  [34.7670,-114.6220], // Huukyámpve (Needles)
  [34.7100,-114.5100], // Topock Maze
  [34.1600,-114.2800], // Parker Snake
  [33.8006,-114.5322], // Blythe Intaglios
  [33.6700,-114.2600]  // Quartzsite Fisherman
], {color:'#FF6D00', weight:2.5, opacity:0.5, dashArray:'12,8'
}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #FF6D00;padding-left:10px;">
<h4 style="color:#FF6D00;margin:0 0 4px">◆ Geoglyph Corridor — The Sacred River Trail</h4>
<div style="font-size:12px;color:#ccc;line-height:1.6">
Over <b>200 geoglyphs</b> along the lower Colorado River, from Spirit Mountain south past Yuma. This is the <b>only concentration of desert intaglios in North America</b>.<br><br>
The figures cluster along the 114° line of longitude — following the Colorado River corridor. They illustrate creation stories, mythic beings, and ritual journeys. Ethnographer Boma Johnson placed the figures in the context of Yuman oral history: <b>the figures portray mythic characters found where mythic events are thought to have occurred</b>.<br><br>
Six figures in three locations along a <b>ritual pilgrimage trail</b> used by Yuman-speaking peoples tell the story of creation and keep it alive. This is both a mythic trail and an actual physical trail extending along the Colorado River.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Johnson; BLM; Native American Netroots; Ancient Art Archive</div>
</div>`, {maxWidth:460});

// ============================================================
// 3. DREAM RELIGION SITES — Where Dreaming Shaped the World
// ============================================================

// Newberry Cave — Dreaming underground (enhanced)
L.marker([34.7900,-116.6600], {icon:dreamIcon}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #7C4DFF;padding-left:10px;">
<h4 style="color:#7C4DFF;margin:0 0 4px">☽ Newberry Cave — Dreaming Underground</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:6px">Newberry Mtns · ~2000 BCE–600 CE · 1,049 split-twig figurines · 66 rock art panels</div>
<div style="font-size:12px;color:#ccc;line-height:1.6">
A cave where the boundary between dreaming and waking dissolved. The <b>1,049 split-twig figurine fragments</b> — mostly representing bighorn sheep — are artifacts of <b>sympathetic hunting magic</b> connected to dream-power. The <b>green pigment</b> dominating the 66 rock art panels symbolizes life and renewal.<br><br>
<b>Dream-Religion Context:</b> The Mojave believed that all skill — hunting, healing, singing, leadership — came through dreaming. This cave was likely where specialists came to dream the power needed for successful hunts. The only California cave with split-twig figurines; all others are near the Grand Canyon, suggesting a deep spiritual network across the desert Southwest.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Smith et al. 1957; Whitley et al.; Leska 2009</div>
</div>`, {maxWidth:460});

// Eggshell Cave — Ritual hallucinogen use
L.marker([35.0000,-117.6000], {icon:dreamIcon}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #7C4DFF;padding-left:10px;">
<h4 style="color:#7C4DFF;margin:0 0 4px">☽ Eggshell Cave — Ritual Dreaming</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:6px">Western Mojave · Late Prehistoric · Hallucinogenic seed ritual</div>
<div style="font-size:12px;color:#ccc;line-height:1.6">
Archaeological evidence of a person or persons ingesting <b>Amsinckia seeds for their hallucinogenic effect</b> in a ritual context. A rare physical window into the dream-seeking practices that defined Mojave spirituality.<br><br>
The Mojave and their neighbors also used <b>Datura (jimsonweed)</b> as a sacramental hallucinogen — consumed during coming-of-age ceremonies to enter altered states of consciousness and receive dream-power.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Sutton (PCAS Quarterly); Wikipedia (Mohave people)</div>
</div>`, {maxWidth:420});

// Grapevine Canyon — Petroglyph Dreaming
L.marker([35.4900, -114.7100], {icon:dreamIcon}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #7C4DFF;padding-left:10px;">
<h4 style="color:#7C4DFF;margin:0 0 4px">☽ Grapevine Canyon — Petroglyph Dreaming</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:6px">Avi Kwa Ame National Monument · Hundreds of petroglyphs · Thousands of years old</div>
<div style="font-size:12px;color:#ccc;line-height:1.6">
Hundreds of petroglyphs etched into canyon rocks near Spirit Mountain — animals, human figures, abstract symbols spanning thousands of years. Located within the <b>sacred viewshed of Avi Kwa Ame</b>, these carvings may represent dream visions made permanent in stone.<br><br>
The canyon provides seasonal water and shade — one of those places where water and geological drama converge to create spiritual significance.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: NPS; BLM; Avi Kwa Ame National Monument; Nevada Wilderness Project</div>
</div>`, {maxWidth:420});

// ============================================================
// 4. WATER-SPIRIT CONNECTIONS — River as Living Being
// ============================================================

// Colorado River as Living Spirit
L.polyline([
  [35.98,-114.74],[35.75,-114.70],[35.46,-114.73],[35.20,-114.62],
  [35.05,-114.60],[34.77,-114.62],[34.55,-114.52],[34.16,-114.28],
  [33.80,-114.53],[33.67,-114.26]
], {color:'#00E5FF', weight:4, opacity:0.35, dashArray:'4,8'
}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #00E5FF;padding-left:10px;">
<h4 style="color:#00E5FF;margin:0 0 4px">〰 The Colorado River — A Living Spirit</h4>
<div style="font-size:12px;color:#ccc;line-height:1.6">
"Our elders say, if you sit by the river at sunset, <b>the river will talk to you</b>. If you sit by the mountain, it will talk to you, for you are one." — Paul Jackson, Fort Mojave elder<br><br>
For the Pipa Aha Macav, the river is not a resource — it is a <b>living spiritual being</b>. The creator Mutavilya made the Colorado River itself. Before dams, the river was wide and braided, flooding every spring with Rocky Mountain snowmelt to deposit rich silt on the floodplains. This annual renewal was both agricultural necessity and spiritual cycle — the river giving life, retreating, and giving again.<br><br>
<b>The river defined identity itself:</b> Aha Makhav means "The Water People." Pipa Aha Macav means "The People By The River." To be Mojave was to be of the river.<br><br>
<b>What was lost:</b> Hoover Dam (1935) and Parker Dam (1938) ended the annual floods. The wide, braided, life-giving river was reduced to a controlled channel. Villages and sacred sites along the original shoreline were inundated. The spiritual cycle of flood-and-renewal was severed.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Paul Jackson (Conservation Lands Foundation); Fort Mojave Indian Tribe; Ten Tribes Partnership</div>
</div>`, {maxWidth:460});

// Oasis of Mara — Serrano Place of Origin
L.marker([34.0710, -116.0350], {icon:waterSpiritIcon}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #00E5FF;padding-left:10px;">
<h4 style="color:#00E5FF;margin:0 0 4px">〰 Oasis of Mara — "The First Place"</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:6px">Twentynine Palms · Serrano creation site · Salt Song trail · 10,000+ years of use</div>
<div style="font-size:12px;color:#ccc;line-height:1.6">
For the Maarrênga'yam (Orthodox Serrano), this oasis is <b>the first place their people lived after coming into this world</b> — their place of origin. Also sacred to the Chemehuevi as a waypoint on the <b>Salt Songs trail</b>, an ancient ceremonial song cycle that traces a route through the landscape connecting springs, mountains, and sacred places across four states.<br><br>
<b>Water Belief:</b> Serrano tradition held that people should drink <b>water that gushed from the earth</b> (springs), not flowing stream water. Spring water was pure — it came directly from the spiritual world underground.<br><br>
Used for 10,000+ years by Serrano, Chemehuevi, Cahuilla, and Mojave peoples. The Chemehuevi farmed here until 1913, when Anglo settlers pushed them out.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Dorothy Ramon Learning Center; NPS Joshua Tree; Twenty-Nine Palms Band of Mission Indians</div>
</div>`, {maxWidth:460});

// Agua Caliente Hot Springs — Sacred Healing Water
L.marker([33.8300, -116.5450], {icon:waterSpiritIcon}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #00E5FF;padding-left:10px;">
<h4 style="color:#00E5FF;margin:0 0 4px">〰 Agua Caliente Hot Springs — Sacred Healing Water</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:6px">Palm Springs · Cahuilla · "Pal Tingaypish! — Water is Medicine!"</div>
<div style="font-size:12px;color:#ccc;line-height:1.6">
The hot mineral springs at the heart of Cahuilla territory — the <b>Agua Caliente Band of Cahuilla Indians</b> takes its name from these waters. Cahuilla elder Tom Siva shared stories of this spring's sacred healing properties.<br><br>
<b>"Pal Tingaypish! — Water is Medicine!"</b> — For the Cahuilla, hot springs were not just water sources but active healing agents, places where the earth's spiritual power surfaced. Villages clustered around these springs for millennia.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Dorothy Ramon Learning Center; Sean Milanovich presentation; Ernest Siva</div>
</div>`, {maxWidth:440});

// Indian Wells — Kávinish ("Dug Out")
L.marker([33.7200, -116.3100], {icon:waterSpiritIcon}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #00E5FF;padding-left:10px;">
<h4 style="color:#00E5FF;margin:0 0 4px">〰 Kávinish — "Dug Out" (Indian Wells)</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:6px">Coachella Valley · Cahuilla · Indigenous engineering</div>
<div style="font-size:12px;color:#ccc;line-height:1.6">
A famous walk-in well that served as a major regional water source. As the natural spring began drying, the Cahuilla people <b>dug progressively deeper to follow the receding water table</b> — indigenous engineering driven by the spiritual imperative to maintain the water relationship. Dorothy Ramon remembered this place by its Cahuilla name, <b>Kávinish</b>, which means "dug out."<br><br>
"This is where the first palm tree grew." The first Anglo arrivals named it "Indian Well" — erasing the Cahuilla name and engineering history.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Dorothy Ramon; Sean Milanovich; Dorothy Ramon Learning Center</div>
</div>`, {maxWidth:440});

// Mojave River as Spirit River
L.marker([34.75,-117.05], {icon:waterSpiritIcon}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #00E5FF;padding-left:10px;">
<h4 style="color:#00E5FF;margin:0 0 4px">〰 "Río de las Ánimas" — Spirit River</h4>
<div style="font-size:10px;color:#aaa;margin-bottom:6px">Mojave River · Mostly underground · Named by Spanish</div>
<div style="font-size:12px;color:#ccc;line-height:1.6">
The Spanish called this river <b>"Río de las Ánimas"</b> — River of the Spirits / River of Lost Souls. Even the colonizers sensed something uncanny about a river that flows mostly underground, appearing and disappearing through the desert.<br><br>
For the <b>Vanyume (Desert Serrano)</b> who lived along it for 8,000 years, the river's underground nature may have reinforced the belief that water was most powerful when it emerged from the earth — that springs and narrows where the river surfaced were places where the underground spiritual world broke through.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Earle, UC eScholarship; Garcés 1776; Wikipedia (Mojave River)</div>
</div>`, {maxWidth:440});

// ============================================================
// 5. PILGRIMAGE & SONG ROUTES — Trails as Sacred Geography
// ============================================================

// Chemehuevi Salt Song Trail (conceptual route)
L.polyline([
  [36.20,-115.20],[35.80,-115.50],[35.46,-114.73], // from Nevada toward Spirit Mtn
  [35.20,-115.00],[34.70,-115.50],[34.30,-116.00],  // through desert springs
  [34.07,-116.04],[33.83,-116.55],                   // to Oasis of Mara, Palm Springs
  [33.50,-117.00],[33.80,-117.80]                    // toward coast
], {color:'#7C4DFF', weight:2.5, opacity:0.4, dashArray:'6,10'
}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #7C4DFF;padding-left:10px;">
<h4 style="color:#7C4DFF;margin:0 0 4px">☽ Salt Song Trail — Chemehuevi Sacred Song Route</h4>
<div style="font-size:12px;color:#ccc;line-height:1.6">
The <b>Salt Songs</b> are an ancient ceremonial song cycle shared by the Chemehuevi and all Southern Paiute peoples across California, Nevada, Arizona, and Utah. The songs trace a <b>route through the physical landscape</b> — connecting springs, mountains, and sacred places. Each song corresponds to a specific place.<br><br>
This is a <b>song map</b> — an oral geography sung into existence across generations. Walking the Salt Song trail is both a physical journey through the desert and a spiritual journey through Chemehuevi cosmology. The Oasis of Mara is one waypoint on this trail.<br><br>
<i>(Route shown is approximate/conceptual — the actual song geography is sacred knowledge)</i>
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Dorothy Ramon Learning Center; Twenty-Nine Palms Band; Chemehuevi Cultural Committee</div>
</div>`, {maxWidth:460});

// Yuman Pilgrimage Trail along Colorado River
L.polyline([
  [35.98,-114.74],[35.46,-114.73],[34.81,-114.59],
  [34.77,-114.62],[34.71,-114.51],[34.16,-114.28],
  [33.80,-114.53],[33.38,-114.60],[32.90,-114.70]
], {color:'#E040FB', weight:2.5, opacity:0.4, dashArray:'6,10'
}).addTo(L_groups.mojaveSpiritGeo).bindPopup(`
<div style="border-left:3px solid #E040FB;padding-left:10px;">
<h4 style="color:#E040FB;margin:0 0 4px">✦ Yuman Pilgrimage Trail — Colorado River Creation Corridor</h4>
<div style="font-size:12px;color:#ccc;line-height:1.6">
A <b>ritual pilgrimage trail</b> extending along the Colorado River from Spirit Mountain (Newberry Mountains, NV) to Pilot Knob (near Yuma, AZ). Six major geoglyph groups in three locations along this trail illustrate the Yuman creation story and are actively maintained.<br><br>
This is both a mythic trail and an actual physical trail — a <b>sacred corridor</b> where the stories of creation are embedded in the landscape itself. The Mojave, Hopi, and Chemehuevi still sing ancient songs that help the spirits of deceased loved ones navigate this landscape around Spirit Mountain.<br><br>
<b>The Keruk Mourning Ceremony:</b> Practiced by multiple Colorado River tribes, the keruk re-enacted the creator's death and honored the recently deceased. The geoglyphs along this corridor served as waypoints in the spiritual geography of death and renewal.
</div>
<div style="margin-top:6px;font-size:10px;color:#888">Sources: Johnson (Yuman cosmology); Native American Netroots; Fort Mojave Indian Tribe; BLM</div>
</div>`, {maxWidth:460});

// ============================================================
// 6. TREND MARKERS — Interpretive Labels
// ============================================================

// "WATER = IDENTITY" label near Colorado River
L.marker([35.60, -114.55], {icon:L.divIcon({className:'',html:'<div style="font-family:Cinzel,serif;font-size:8px;color:#E040FB;text-shadow:0 0 6px #000;white-space:nowrap;letter-spacing:2px;opacity:0.7;font-style:italic">CREATION CORRIDOR</div>',iconSize:[140,12],iconAnchor:[70,6]})}).addTo(L_groups.mojaveSpiritGeo);

L.marker([33.90, -114.40], {icon:L.divIcon({className:'',html:'<div style="font-family:Cinzel,serif;font-size:7px;color:#FF6D00;text-shadow:0 0 5px #000;white-space:nowrap;letter-spacing:1.5px;opacity:0.6;font-style:italic">GEOGLYPH CORRIDOR</div>',iconSize:[130,10],iconAnchor:[65,5]})}).addTo(L_groups.mojaveSpiritGeo);

L.marker([34.30, -116.30], {icon:L.divIcon({className:'',html:'<div style="font-family:Cinzel,serif;font-size:7px;color:#00E5FF;text-shadow:0 0 5px #000;white-space:nowrap;letter-spacing:1.5px;opacity:0.6;font-style:italic">SPRING OASES · WATER = SPIRIT</div>',iconSize:[180,10],iconAnchor:[90,5]})}).addTo(L_groups.mojaveSpiritGeo);
