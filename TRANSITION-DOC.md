# Ancient Waters & Lost Landscapes — Transition Document
## For continuing development in a new Claude session
### Created: Feb 15, 2026

---

## PROJECT OVERVIEW

**Ancient Waters & Lost Landscapes** is an interactive archaeological map visualizing pre-contact indigenous territories, waterways, cultural sites, and lost landscapes across California and the American Southwest. It's a static site hosted on GitHub Pages.

- **Live site**: https://gabrielagapbridge.github.io/Ancient-Waters/
- **Repo**: https://github.com/gabrielagapbridge/Ancient-Waters
- **Tech stack**: Vanilla HTML/CSS/JS, Leaflet.js maps, GitHub Pages hosting
- **Scale**: ~7,600 lines of code, 541+ mapped features, 25 JS modules, 4 HTML pages
- **Creator**: Gaby — entrepreneur, hiker, passionate about Native American archaeology

---

## ARCHITECTURE

### File Structure
```
Ancient-Waters/
├── index.html              # Main map page (289 lines)
├── pcn.html                # Dedicated PCN Rock Art page (564 lines)
├── tribes.html             # Tribal Encyclopedia page (296 lines)
├── languages.html          # Language Encyclopedia page (197 lines)
├── css/
│   └── styles.css          # All styles (~400 lines)
├── js/
│   ├── 01-core.js          # Map init, layer groups, toggle(), base maps
│   ├── 02-icons.js         # Icon factories (mkIcon, mkPetroIcon, mkPictoIcon, mkPCNIcon, raIcon)
│   ├── 03-water-features.js # Ancient rivers, lakes, dams, reservoirs, lost rivers
│   ├── 04-southwest-sites.js # Puebloan, Hohokam, Sinagua sites + Joshua Tree
│   ├── 05-eastbay-sites.js  # 289 East Bay Hills archaeological sites (MarkerCluster)
│   ├── 06-rockart-pcn.js    # PCN + Bay Area rock art (40+ sites)
│   ├── 07-springs-trade.js  # Sacred springs, ciénegas, trade routes
│   ├── 08-bayarea-shellmounds.js # 75 shellmounds & villages
│   ├── 09-territories.js    # Bay Miwok tribelets, Yokuts territories
│   ├── 10-greatbasin.js     # Great Basin rock art, pluvial lakes, Owens River, diversions
│   ├── 11-marin-waterways.js # Marin County creeks and waterways
│   ├── 12-lang-encyclopedia.js # Language encyclopedia data (21 entries)
│   ├── 13-bayfill-history.js # Bay fill, construction finds, historic shoreline
│   ├── 14-richardson-bay.js  # Richardson Bay marshes and shellmound connections
│   ├── 15-land-grants.js     # 1873 land grants
│   ├── 16-timeline.js        # Timeline slider (10,000 BCE → Today)
│   ├── 17-region-nav.js      # Region navigation tabs + culture auto-expand
│   ├── 18-southcentral-rockart.js # South-Central CA rock art (Lee & Hyder)
│   ├── 19-tribal-encyclopedia.js  # Tribal encyclopedia data (41 entries)
│   ├── 20-martis-rockart.js  # Martis Complex Style 7 petroglyphs (41 sites)
│   ├── 21-chumash-rockart.js # Chumash sacred landscapes & rock art
│   ├── 22-chumash-waterways.js # Chumash rivers, dams, sacred springs
│   ├── 23-chumash-villages.js # 45+ Chumash named settlements
│   ├── 24-lost-chumash-waters.js # Destroyed/degraded Chumash wetlands
│   └── 25-chumash-trade-network.js # Tomol sea routes, shell bead economy
├── TRIBAL-AUDIT.md          # Complete inventory of all cultures & features
└── UI-REDESIGN-PROPOSAL.md  # Design decisions for culture-based UI
```

### Key Patterns

**Layer System**: All map features live in Leaflet LayerGroups stored in `L_groups` object. Toggle with `toggle('layerName')`. Layers created in `01-core.js`, populated by individual JS files.

**Layer Groups** (36 total):
```
ancientRivers, ancientLakes, modernDams, modernReservoirs, lostRivers,
hohokamCanals, swSites, jtreeSites, eastBaySites, spanishSites, rockArt,
marinCreeks, langTerritories, languageZones, bayMiwokTribelets, yokutsTerr,
sValleyYokuts, foothillYokuts, yokutsNeighbors, greatBasinRockArt,
pluvialLakes, numicTerritories, preNumicSites, scRockArt, centralValleyLakes,
owensChain, waterDiversions, lakeCorcoran, springs, cienegas, tradeRoutes,
modernInfra, shellmounds, buriedCreeks, bayFill, constructionFinds,
bayMissions, historicShoreline, martisRockArt, chumashSacred, chumashWaterways,
chumashVillages, lostWaters, tradeNetwork
```

**Hidden by default**: `lakeCorcoran` (too large for overview)

**Icon System** (in `02-icons.js`):
- `mkIcon(color, size)` — basic circle
- `mkPetroIcon(color, size)` — solid filled (petroglyph)
- `mkPictoIcon(color, size)` — ring/hollow (pictograph)
- `mkBothIcon(color, size)` — half-fill (both)
- `mkPCNIcon(size)` — concentric circles (PCN tradition)
- `raIcon(typeStr, color, size)` — auto-classifies from description text
- `RA_COLORS` — color palette by tradition

**UI Structure** (index.html):
- **Top**: Title bar + region navigation tabs (Overview, Southwest, Joshua Tree, Bay Area, Central Valley, Owens Valley, East Bay Hills, Chumash Coast)
- **Left**: Visible Features count panel (collapsible)
- **Right**: Map Layers dropdown (collapsible) → contains **culture-based accordion sections**
- **Bottom**: Toolbar buttons (PCN Rock Art, Language Encyclopedia, Tribal Encyclopedia, Richardson Bay Deep Dive)
- **Bottom**: Timeline slider + All Eras toggle

### Culture-Based UI Panel (Map Layers dropdown)

The layer panel is organized into 7 culture sections (collapsible accordions) + a Landscape section:

1. **Chumash** — villages, waterways, sacred landscapes, lost waters, trade network, south-central rock art
2. **Coast Miwok & North Bay** — villages/shellmounds, waterways, Richardson Bay, land grants, territories, missions
3. **Bay Miwok & Ohlone** — East Bay Hills 289 sites, shellmounds, bay fill, construction finds, buried creeks, tribelets
4. **Yokuts & Neighbors** — lost lakes, three Yokuts territories, neighbors
5. **Southwest Peoples** — pueblos, Hohokam canals, sacred springs, ciénegas, Spanish colonial, Joshua Tree
6. **Great Basin Peoples** — rock art, Owens River cascade, water diversions, pluvial lakes
7. **Northern Sierra** — Martis Complex Style 7 petroglyphs

**Landscape & Environment** — pre-dam rivers, ancient lakes, Lake Corcoran, modern dams/reservoirs, dried rivers, CAP canal, trade routes, language territories, PCN rock art

JS functions for culture sections:
- `toggleCulture(id)` — expand/collapse
- `toggleCultureAll(id, checked)` — master checkbox
- `expandCulturesForRegion(regionId)` — auto-expand when region nav clicked

### Dedicated Pages

**pcn.html** — PCN Rock Art deep dive. 7 sections: Mystery, Map (focused Leaflet map with concentric circle markers + corridor line), What Makes Them Unique (6 feature cards), Deep Time (visual timeline), Geology Connection (blueschist/chlorite schist), Site-by-Site (14 expandable cards), Open Questions (7 unsolved puzzles).

**tribes.html** — Tribal Encyclopedia. Loads data dynamically from `js/19-tribal-encyclopedia.js` via fetch+eval. 41 entries with search, expandable cards, mini Leaflet territory maps, info grids, timeline bars, village lists.

**languages.html** — Language Encyclopedia. Loads from `js/12-lang-encyclopedia.js`. 21 entries with search, filter by type (Superstock/Family/Language/Special), expandable details with Bay Area connections.

---

## RECENT SESSION WORK (Feb 15, 2026)

### Session 1: Martis Complex & Rock Art
- Added Martis Complex / Style 7 petroglyphs (41 sites in Northern Sierra)
- Added Chumash Sacred Landscapes, Waterways, Villages, Lost Waters, Trade Network layers
- Replaced emoji markers with geometric CSS shapes throughout Chumash layers

### Session 2: UI Reorganization
- **Major change**: Reorganized entire layer panel from 6 data-type sections to 7 culture-based accordion sections
- Created TRIBAL-AUDIT.md (complete culture inventory)
- Created UI-REDESIGN-PROPOSAL.md (design decisions)
- Region nav now auto-expands relevant culture sections
- Added "Chumash Coast" region nav button

### Session 3: PCN & Encyclopedias
- Created dedicated PCN Rock Art page (pcn.html) with focused map, narrative, geology
- Created distinctive concentric-circle PCN markers (echo actual carving motif)
- Removed 4 floating legends (Chumash Waterways, Lost Waters, Trade Network, Rock Art)
- Converted Tribal & Language Encyclopedias from overlay panels to dedicated pages
- Moved Lake Corcoran to Landscape section, hidden by default

---

## KNOWN ISSUES & PENDING WORK

### Bugs / Issues
1. **GitHub Pages caching** — after pushes, sometimes old versions serve for a few minutes. Hard refresh (Cmd+Shift+R) or clear cache helps.
2. **Encyclopedia page data loading** — `tribes.html` and `languages.html` use `fetch()` + `eval()` to load data from JS files. This works on GitHub Pages but the regex extraction could be fragile if data format changes. Consider extracting data to JSON files in future.
3. **Old panel code still in JS files** — `openTribePanel()`, `closeTribePanel()`, `openLangPanel()` functions still exist in `js/19-tribal-encyclopedia.js` and `js/12-lang-encyclopedia.js`. They're harmless (panel HTML was removed from index.html) but could be cleaned up.
4. **PCN icon CSS** — the concentric circle icon in `02-icons.js` has `border-radius:50` (missing `%`) on the middle ring. Works in most browsers but should be `border-radius:50%`.

### Feature Ideas Gaby Has Mentioned
- More cultures to add (Pomo, Salinan, Esselen, Tongva, Kumeyaay, etc.)
- Expand each culture section with more sub-layers over time
- The framework is designed for this — adding a new culture = add accordion section in HTML + new JS file

### Suggested Improvements
- **Responsive design** — mobile experience could be better, especially the culture accordion panel
- **Data extraction** — move tribal/language encyclopedia data to JSON files for cleaner loading
- **PCN page photos** — the page has space for images but none yet
- **Search on main map** — no global search across all sites yet
- **Permalink/sharing** — no way to link to a specific site or view
- **Performance** — 541+ features load fine but could use lazy loading for distant regions

---

## HOW TO CONTINUE DEVELOPMENT

### Adding a New Layer
1. Create `js/XX-newlayer.js`
2. Add layer name(s) to `layerNames` array in `js/01-core.js`
3. In new JS file, add features to `L_groups.newLayerName`
4. Add toggle checkbox to appropriate culture section in `index.html`
5. Add `<script src="js/XX-newlayer.js"></script>` to index.html

### Adding a New Culture Section
1. Add new accordion HTML block in index.html (follow existing pattern)
2. Set `data-regions` attribute for region nav integration
3. Add toggles for sub-layers within the section
4. Create JS file(s) for the culture's data

### Modifying Existing Data
- Each JS file is self-contained with its data and rendering
- Popup content is inline HTML strings in the JS files
- Territory polygons are coordinate arrays in `js/19-tribal-encyclopedia.js`

### Deploying
```bash
cd Ancient-Waters
git add -A
git commit -m "description"
git push origin main
```
GitHub Pages auto-deploys from `main` branch. Takes 1-2 minutes.

---

## GIT LOG (recent commits)
```
e1d8157 Hide Lake Corcoran by default — opt-in via Map Layers panel
9fe2cf2 Move Lake Corcoran to Landscape section — predates all human habitation
f90fddf Cache bust: confirm panel HTML fully removed from index.html
e12f231 Convert encyclopedias from overlay panels to dedicated pages
7e6e26b Remove floating legends — layer context now lives in culture-based panel
a70e331 Add dedicated PCN Rock Art page + distinctive concentric circle markers
1055264 Move PCN rock art to Landscape section — pre-tribal, crosses all boundaries
ca98467 Reorganize UI: culture-based layer panel replacing data-type categories
d74fc4a Replace emojis with geometric symbols across Chumash layers
123ea86 Add Chumash Trade Network layer
528c53a Add Lost Chumash Waters layer
b044fab Add Chumash Villages layer
7b04bf1 Fix Safari scrolling on Map Layers panel
4fc621e Fix Map Layers panel inner max-height
46d2500 Fix layer panel overflow
69e7132 Add Chumash Waterways layer
f6198c8 Add Chumash Sacred Landscapes & Rock Art layer
d766c0d Add Martis Complex / Style 7 Rock Art — 41 sites
c85af30 Initial commit: modular Ancient Waters map
```

---

## DESIGN PHILOSOPHY

- **Culture-first organization**: Features grouped by the people who created them, not by data type
- **Respect for indigenous knowledge**: Cultural notes on PCN pre-dating tribal boundaries, Yokuts elders disagreeing with academic interpretations, etc.
- **Rich popups**: Every marker has detailed popup with description, sources, cultural affiliation
- **Academic sourcing**: Real archaeological papers cited (Gillette 2011, Miller 1977, Heizer & Baumhoff 1962, etc.)
- **Dark aesthetic**: Dark map tiles + earth-tone UI inspired by the landscape itself
- **Progressive disclosure**: Sections collapse, layers toggle, details expand on click
- **No external dependencies** beyond Leaflet.js and Google Fonts — designed to last

---

*This document was created to facilitate continuity between Claude sessions working on the Ancient Waters project.*
