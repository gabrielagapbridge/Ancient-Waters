// Pre-1850 tidal marsh extent, seasonal round info, shellmound context
// Based on Pestrong (1972), Atwater (1977/1979), USGS boreholes, 1873 Austin map

// --- Pre-1850 tidal marsh polygons around Richardson Bay ---
const rbMarshStyle = {color:'#2E7D32', fillColor:'#4CAF50', fillOpacity:0.25, weight:1.5, dashArray:'6,4'};

// NW Richardson Bay marshes (Bothin Marsh area — now mostly under Hwy 101)
const rbMarshNW = [
  [37.904,-122.523],[37.906,-122.518],[37.908,-122.513],[37.910,-122.508],
  [37.912,-122.503],[37.910,-122.498],[37.907,-122.495],[37.904,-122.492],
  [37.901,-122.490],[37.898,-122.492],[37.896,-122.496],[37.895,-122.500],
  [37.896,-122.505],[37.898,-122.510],[37.900,-122.515],[37.902,-122.520],
  [37.904,-122.523]
];

// Strawberry Point marshes (west side — where 5 shellmounds were)
const rbMarshStrawberry = [
  [37.892,-122.510],[37.888,-122.507],[37.884,-122.503],[37.880,-122.500],
  [37.876,-122.497],[37.873,-122.494],[37.876,-122.490],[37.880,-122.488],
  [37.884,-122.490],[37.888,-122.493],[37.891,-122.497],[37.893,-122.502],
  [37.894,-122.507],[37.892,-122.510]
];

// Tiburon/Belvedere marshes (east side — now Paradise Cay)
const rbMarshEast = [
  [37.888,-122.455],[37.885,-122.458],[37.882,-122.461],[37.879,-122.463],
  [37.876,-122.461],[37.874,-122.457],[37.876,-122.453],[37.879,-122.450],
  [37.882,-122.448],[37.885,-122.450],[37.888,-122.453],[37.888,-122.455]
];

// South Richardson Bay (Sausalito waterfront — filled for marinas/houseboats)
const rbMarshSouth = [
  [37.865,-122.500],[37.862,-122.498],[37.859,-122.495],[37.857,-122.490],
  [37.860,-122.486],[37.863,-122.484],[37.866,-122.487],[37.868,-122.491],
  [37.869,-122.496],[37.867,-122.499],[37.865,-122.500]
];

const rbMarshPopup = '<h4>🌿 Pre-1850 Tidal Marsh</h4><span class=\"ptype pt-ancient\">THIS WAS MARSH before development</span><div class=\"popup-what\">Approximate extent of tidal marsh, seasonal wetlands, and mudflats that once fringed Richardson Bay</div>Before 1850, Richardson Bay was surrounded by vast salt marshes, wet meadows, and willow thickets. The Bothin Marsh preserve is the last remnant. Strawberry Spit and Aramburu Island didn\'t exist — created from 1950s-60s dredge spoils. Paradise Cay was open marsh. The tidal-to-woodland transition zone was the richest ecological zone: shellfish beds, waterfowl nesting, and shore access for Coast Miwok villages.<div class=\"popup-src\">📖 Pestrong (1972) USGS; Atwater (1977); SFEI; Alameda Native History Project</div>';

[rbMarshNW, rbMarshStrawberry, rbMarshEast, rbMarshSouth].forEach(m => {
  L.polygon(m, rbMarshStyle).addTo(L_groups.historicShoreline).bindPopup(rbMarshPopup);
});

// --- Seasonal Round info card (floating, appears at Richardson Bay zoom) ---
const seasonalRoundDiv = document.createElement('div');
seasonalRoundDiv.id = 'seasonal-round-card';
seasonalRoundDiv.innerHTML = `
<div style="position:fixed;bottom:80px;left:50%;transform:translateX(-50%);
  background:rgba(20,20,30,0.95);border:2px solid #4CAF50;border-radius:16px;
  padding:18px 22px;max-width:680px;width:90vw;z-index:1200;
  font-family:'Georgia',serif;color:#e0e0e0;display:none;
  box-shadow:0 8px 32px rgba(0,0,0,0.6);backdrop-filter:blur(8px);">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
    <h3 style="margin:0;color:#4CAF50;font-size:17px;">🔄 Huimen Seasonal Round — Richardson Bay</h3>
    <span onclick="document.getElementById('seasonal-round-card').querySelector('div').style.display='none'" 
      style="cursor:pointer;color:#888;font-size:20px;padding:0 6px;">✕</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:13px;line-height:1.5;">
    <div style="background:rgba(33,150,243,0.15);border-radius:10px;padding:10px 12px;border-left:3px solid #2196F3;">
      <b style="color:#64B5F6;">❄️ WINTER (Nov–Feb)</b><br>
      Permanent bayshore villages like MRN-27. Stored acorns, shellfish from mudflats (clams, mussels, oysters), 
      waterfowl (mudhens, geese), steelhead & salmon runs. <em>Shellmounds grew here over millennia.</em>
    </div>
    <div style="background:rgba(76,175,80,0.15);border-radius:10px;padding:10px 12px;border-left:3px solid #4CAF50;">
      <b style="color:#81C784;">🌱 SPRING (Mar–May)</b><br>
      Coastal camps for herring spawning, tide pools, seaweed. First fresh greens: miner's lettuce 
      (dressed with ant "vinegar"!), clover, nettle. Prescribed burns to clear dead growth.
    </div>
    <div style="background:rgba(255,193,7,0.15);border-radius:10px;padding:10px 12px;border-left:3px solid #FFC107;">
      <b style="color:#FFD54F;">☀️ SUMMER (Jun–Aug)</b><br>
      Upland camps on Mt. Tamalpais flanks & ridgetops. Seed gathering (wildflower pinole), 
      deer hunting, controlled burns. Angel Island: seasonal hunting ground by tule boat.
    </div>
    <div style="background:rgba(255,87,34,0.15);border-radius:10px;padding:10px 12px;border-left:3px solid #FF5722;">
      <b style="color:#FF8A65;">🍂 AUTUMN (Sep–Nov)</b><br>
      The critical season — hundreds of pounds of acorns harvested from managed oak groves. 
      Stored in raised granaries lined with bay laurel. <em>Acorn harvest = Miwok New Year.</em> 
      Inter-tribelet gatherings for dances, ceremonies, trade, marriage.
    </div>
  </div>
  <div style="margin-top:10px;font-size:11px;color:#888;text-align:center;">
    Green marsh zones show pre-1850 tidal wetlands that once surrounded the bay · All shellmound sites sat at the marsh-woodland edge<br>
    Sources: Pestrong (1972); Atwater (1977); Schneider (2013); Angel Island Conservancy; California Frontier Project
  </div>
</div>`;
document.body.appendChild(seasonalRoundDiv);

// Show/hide seasonal round card based on zoom + location
map.on('zoomend moveend', function() {
  const z = map.getZoom();
  const c = map.getCenter();
  const card = document.getElementById('seasonal-round-card').querySelector('div');
  // Show when zoomed into Richardson Bay area
  if (z >= 13 && c.lat > 37.85 && c.lat < 37.92 && c.lng > -122.55 && c.lng < -122.44) {
    card.style.display = 'block';
  } else {
    card.style.display = 'none';
  }
});

// --- "Explore Richardson Bay" button next to encyclopedia ---
const rbBtn = document.createElement('div');
rbBtn.innerHTML = '<div id="rb-explore-btn" style="cursor:pointer;' +
  'background:linear-gradient(135deg,#1B5E20,#2E7D32);border:1.5px solid #4CAF50;border-radius:20px;' +
  'padding:6px 12px;font-family:Cinzel,serif;font-size:10px;color:#C8E6C9;letter-spacing:0.8px;' +
  'box-shadow:0 2px 8px rgba(0,0,0,0.3);transition:all 0.3s;white-space:nowrap;display:flex;align-items:center;gap:5px;"' +
  'onclick="map.flyTo([37.890,-122.490],14,{duration:1.5})" ' +
  'title="Fly to Richardson Bay to see pre-1850 tidal marshes and the Huimen seasonal round">' +
  '🌿 Richardson Bay Deep Dive</div>';
// Append to the bottom toolbar instead of body
const toolbar = document.getElementById('bottom-toolbar');
if (toolbar) toolbar.appendChild(rbBtn.firstChild);

// Add green glow animation
const greenGlow = document.createElement('style');
greenGlow.textContent = '@keyframes glow-green{0%{box-shadow:0 0 8px rgba(76,175,80,0.3)}100%{box-shadow:0 0 18px rgba(76,175,80,0.6)}}';
document.head.appendChild(greenGlow);

// --- Dashed lines connecting shellmound sites to marsh edge ---
const shellToMarshStyle = {color:'#81C784', weight:1.5, opacity:0.6, dashArray:'4,6'};
// MRN-27 to nearest marsh
L.polyline([[37.900,-122.398],[37.901,-122.490]], shellToMarshStyle).addTo(L_groups.historicShoreline)
  .bindPopup('<h4>MRN-27 → Historic Marsh Edge</h4>This dashed line shows how far the tidal marsh once extended from the site. Before fill and development, CA-MRN-27 sat directly at the marsh-woodland interface — not 1,500 feet from water as it appears today.');
// MRN-5 to marsh
L.polyline([[37.878,-122.505],[37.880,-122.500]], shellToMarshStyle).addTo(L_groups.historicShoreline);
// MRN-14 to marsh
L.polyline([[37.882,-122.500],[37.884,-122.497]], shellToMarshStyle).addTo(L_groups.historicShoreline);



// ========== MEXICAN LAND GRANTS (from 1873 Austin map) ==========
