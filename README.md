# Ancient Waters & Lost Landscapes

Interactive archaeological map of pre-contact indigenous territories, waterways, and cultural sites across California and the Southwest.

## How to Run

Since the map loads JS files via `<script>` tags, you need a local server:

### Option 1: Launch script (Mac/Linux)
```bash
cd ancient-waters
./start.sh
```
Then open http://localhost:8000

### Option 2: Python (any platform)
```bash
cd ancient-waters
python3 -m http.server 8000
```

### Option 3: VS Code
Install the "Live Server" extension, open this folder, and click "Go Live"

## File Structure

```
ancient-waters/
├── index.html          — App shell (UI elements, panels)
├── css/styles.css      — All styling
├── js/
│   ├── 01-core.js              — Map init, layer groups, toggle
│   ├── 02-icons.js             — Marker icon factories
│   ├── 03-water-features.js    — Rivers, lakes, dams, Hohokam canals
│   ├── 04-southwest-sites.js   — Spanish colonial, SW pueblos, Joshua Tree
│   ├── 05-eastbay-sites.js     — 289 East Bay Hills archaeological sites
│   ├── 06-rockart-pcn.js       — PCN tradition rock art across CA
│   ├── 07-springs-trade.js     — Springs, ciénegas, trade routes
│   ├── 08-bayarea-shellmounds.js — Shellmounds, buried creeks
│   ├── 09-territories.js       — Language zones, Bay Miwok, Yokuts
│   ├── 10-greatbasin.js        — Great Basin, pluvial lakes, Numic
│   ├── 11-marin-waterways.js   — Marin County waterways
│   ├── 12-lang-encyclopedia.js — Language encyclopedia panel
│   ├── 13-bayfill-history.js   — Bay fill, missions, historic shoreline
│   ├── 14-richardson-bay.js    — Richardson Bay deep dive
│   ├── 15-land-grants.js       — Mexican land grants (1873 Austin)
│   ├── 16-timeline.js          — Era slider + timeline logic
│   ├── 17-region-nav.js        — Region fly-to navigation
│   ├── 18-southcentral-rockart.js — Lee & Hyder 1991 rock art
│   └── 19-tribal-encyclopedia.js  — Tribal encyclopedia data + UI
├── start.sh            — Quick-launch script
└── README.md           — This file
```

## Working with Claude

When starting a new Claude session to expand the map, tell Claude which specific JS file to edit. For example:
- "Add new rock art sites to `js/06-rockart-pcn.js`"
- "Add a new tribal encyclopedia entry to `js/19-tribal-encyclopedia.js`"
- "Create a new layer file `js/20-new-region.js` for Northern California sites"

This keeps sessions fast because Claude only needs to read/write small files instead of the entire 4000+ line monolith.
