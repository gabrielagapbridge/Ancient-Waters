# Ancient Waters — Proposed Culture-Based UI Structure

## Design Philosophy
Instead of organizing by data type (water, rock art, villages, modern changes), 
organize by **people/culture** so a user can explore one culture's full story — 
their water, their art, their villages, what was lost — as a unified narrative.

Keep a small "Landscape & Environment" section for cross-cultural geographic features 
that don't belong to any single people.

---

## PANEL LAYOUT (right sidebar)

```
┌─────────────────────────────────────┐
│  MAP LAYERS                      ▼  │
├─────────────────────────────────────┤
│                                     │
│  BASEMAP                            │
│  [Terrain] [Satellite] [Dark]       │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  ▸ CHUMASH                          │  ← collapsed by default
│    (Channel Coast & Islands)        │     click to expand
│    ~13,000 BP – contact             │
│                                     │
│  ▸ COAST MIWOK                      │
│    (Marin & Sonoma Coast)           │
│    ~6000 BCE – present              │
│                                     │
│  ▸ BAY MIWOK & OHLONE              │
│    (East Bay & SF Peninsula)        │
│    ~9800 BP – present               │
│                                     │
│  ▸ YOKUTS & NEIGHBORS              │
│    (Central Valley & Sierra         │
│     Foothills)                      │
│    ~10,000 BP – present             │
│                                     │
│  ▸ SOUTHWEST PEOPLES               │
│    (Puebloan, Hohokam, Sinagua,    │
│     Pueblo peoples)                 │
│    ~1500 BCE – present              │
│                                     │
│  ▸ GREAT BASIN PEOPLES             │
│    (Paiute, Shoshone, Washoe)      │
│    ~14,800 BP – present             │
│                                     │
│  ▸ NORTHERN SIERRA                 │
│    (Martis Complex / Style 7)       │
│    ~4000–1500 BP                    │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  LANDSCAPE & ENVIRONMENT            │
│  ☑ Pre-dam rivers                   │
│  ☑ Ancient/pluvial lakes            │
│  ☑ Pleistocene lakes                │
│  ☑ Lake Corcoran (~600,000 BP)      │
│  ☑ Water diversions & aqueducts     │
│  ☑ Modern dams & reservoirs         │
│  ☑ Language territories             │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  DEEP TIME                          │
│  ☑ PCN Rock Art (3,000–8,000 BP)    │
│  ☑ Winnemucca Lake (oldest in NA)   │
│  ☑ Spanish colonial encounters      │
│                                     │
└─────────────────────────────────────┘
```

---

## EXPANDED CULTURE SECTIONS

When user clicks a culture header, it expands to show sub-layers:

### ▾ CHUMASH (Channel Coast & Islands) — ~13,000 BP – contact
```
  ☑ Sacred Landscapes & Rock Art     (10 sites, 4 sacred places)
  ☑ Villages — 45+ Settlements       (organized by linguistic division)
  ☑ Waterways — Rivers & Dams        (10 rivers, 9 dams, 8 sacred waters)
  ☑ Lost Waters — What Was Taken     (16 sites, 3 ghost polygons)
  ☑ Trade Network — Shell Money      (8 routes, 13 resource nodes)
  ☑ Territorial Divisions            (8 linguistic divisions, 5 missions)
```

### ▾ COAST MIWOK (Marin & Sonoma Coast) — ~6000 BCE – present
```
  ☑ Villages & Shellmounds           (33 sites — tribelets, Olompali, etc.)
  ☑ Waterways — Marin Creeks         (12+ salmon/steelhead streams)
  ☑ Richardson Bay — Pre-1850        (tidal marshes, shellmound context)
  ☑ Land Grants — What Was Taken     (7 grants carved from Miwok territory)
  ☑ Territories                      (Coast Miwok polygon)
  ☑ Kashaya Pomo & Neighbors         (Fort Ross, Metini, Patwin, Wappo)
```

### ▾ BAY MIWOK & OHLONE (East Bay & SF Peninsula) — ~9800 BP – present
```
  ☑ East Bay Hills Sites — 289       (bedrock mortars, villages, cupules)
  ☑ Ohlone Shellmounds               (Emeryville, West Berkeley, etc.)
  ☑ Bay Fill — Lost Shoreline        (5 fill zones, construction finds)
  ☑ Bay Miwok Tribelets              (Volvon, Ssaoam, Tatcan, etc.)
  ☑ Territories                      (Chochenyo, Ramaytush, Bay Miwok)
```

### ▾ YOKUTS & NEIGHBORS (Central Valley & Foothills) — ~10,000 BP – present
```
  ☑ Rock Art (Tule River, Rocky Hill) (5+ sites)
  ☑ Central Valley Lost Lakes         (Tulare, Buena Vista, Kern)
  ☑ Yokuts Territories               (Northern, Southern, Foothill)
  ☑ Neighbors                        (Kawaiisu, Tataviam, Kitanemuk, 
                                       Tübatulabal, Mono)
```

### ▾ SOUTHWEST PEOPLES (Puebloans, Hohokam, Sinagua) — ~1500 BCE – present
```
  ☑ Pueblos & Villages               (Chaco, Mesa Verde, Taos, etc.)
  ☑ Hohokam Canals                   (pre-Columbian irrigation)
  ☑ Sacred Springs                   (Havasu, Montezuma Well, etc.)
  ☑ Pre-Dam Rivers                   (Colorado, Salt, Gila, Rio Grande)
  ☑ Ciénegas — Lost Desert Wetlands  
  ☑ Spanish Colonial Sites           
```

### ▾ GREAT BASIN PEOPLES (Paiute, Shoshone, Washoe) — ~14,800 BP – present
```
  ☑ Rock Art — 15+ Sites             (Coso, Lagomarsino, Valley of Fire)
  ☑ Owens River Cascade              (7-lake chain to Death Valley)
  ☑ Joshua Tree Sites                
  ☑ Pluvial Lakes                    (Lahontan, Bonneville remnants)
```

### ▾ NORTHERN SIERRA (Martis Complex) — ~4000–1500 BP
```
  ☑ Style 7 Petroglyphs — 41 Sites  (Donner Pass, Meadow Lake, etc.)
  ☑ Martis Territory                 
```

---

## INTERACTION DESIGN

### Culture Header Behavior
- **Click header** → expands/collapses sub-layers
- **Master checkbox** on the header → toggle ALL sub-layers for that culture on/off
- Each sub-layer has its own checkbox for granular control
- Small text under culture name shows time period + region

### Visual Treatment
- Each culture gets a **signature color** (already exist for most):
  - Chumash: #E65100 (burnt orange)
  - Coast Miwok: #FF6B35 (orange)
  - Bay Miwok/Ohlone: #9B59B6 / #1565C0 (purple / dark blue)
  - Yokuts: #FFB74D (amber)
  - Southwest: #D84315 (pueblo red)
  - Great Basin: #FF7043 (warm orange)
  - Martis: #FFB300 (gold)
- Color bar on left edge of each expanded section

### "Show All / Hide All" at top
Quick toggles to show everything or start fresh

### Encyclopedia Integration
- Small "📖" icon next to culture header → opens Tribal Encyclopedia filtered to that culture
- Language Encyclopedia stays as bottom toolbar button

---

## WHAT CHANGES IN THE CODE

### index.html
- Replace the 6 current `layer-section` divs with 7 culture sections + 2 cross-cultural sections
- Add collapsible accordion behavior (CSS + minimal JS)
- Add master toggle per culture section

### JS files — NO CHANGES NEEDED
- All existing L_groups and toggle() calls stay the same
- The layer group names don't change
- We're just reorganizing which checkboxes appear where in the HTML

### CSS additions
- Collapsible section styling
- Color bar accents per culture
- Nested indent for sub-layers
- Smooth expand/collapse animation

---

## THINGS TO DECIDE

1. **Should all cultures start collapsed or expanded?**
   - Suggestion: All collapsed, user opens what interests them
   - Or: Expand the culture(s) visible in current map view

2. **Should clicking a culture header also zoom to its territory?**
   - Could be nice — but might be annoying if user just wants to toggle layers
   - Suggestion: Zoom only on encyclopedia icon click, not on expand

3. **What about the region nav tabs at top (OVERVIEW, SOUTHWEST, JOSHUA TREE, BAY AREA, etc.)?**
   - These could auto-expand the relevant culture section when clicked
   - e.g., clicking "BAY AREA" expands Coast Miwok + Bay Miwok/Ohlone

4. **Should "South-Central CA Rock Art" be split across cultures?**
   - Currently one layer with Chumash, Yokuts, Kawaiisu, Tataviam, Kitanemuk, Tübatulabal sites
   - Could split markers into respective culture sections
   - Or keep as shared layer under Yokuts & Neighbors since that's the overlap zone

5. **Mobile considerations?**
   - Collapsed sections work great on mobile — less scrolling
   - Culture headers as large tap targets
