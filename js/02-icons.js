// ========== ICON FACTORIES ==========
function mkIcon(color, size=10) {
  return L.divIcon({ className:'', iconSize:[size,size], iconAnchor:[size/2,size/2],
    html:`<div style="width:${size}px;height:${size}px;background:${color};border:2px solid #1A1208;border-radius:50%;box-shadow:0 0 5px ${color}44;"></div>` });
}
// Rock art icons: petroglyph = solid filled, pictograph = ring (hollow center), both = half ring
function mkPetroIcon(color, size=10) {
  return L.divIcon({ className:'', iconSize:[size,size], iconAnchor:[size/2,size/2],
    html:`<div style="width:${size}px;height:${size}px;background:${color};border:2px solid #1A1208;border-radius:50%;box-shadow:0 0 6px ${color}66;"></div>` });
}
function mkPictoIcon(color, size=10) {
  return L.divIcon({ className:'', iconSize:[size,size], iconAnchor:[size/2,size/2],
    html:`<div style="width:${size}px;height:${size}px;background:transparent;border:3px solid ${color};border-radius:50%;box-shadow:0 0 6px ${color}66;"></div>` });
}
function mkBothIcon(color, size=10) {
  const h = size/2;
  return L.divIcon({ className:'', iconSize:[size,size], iconAnchor:[size/2,size/2],
    html:`<div style="width:${size}px;height:${size}px;border-radius:50%;box-shadow:0 0 6px ${color}66;background:linear-gradient(135deg, ${color} 50%, transparent 50%);border:2.5px solid ${color};"></div>` });
}
// Classify rock art type from text
function raIcon(typeStr, color, size=10) {
  const t = (typeStr||'').toLowerCase();
  const hasPetro = t.includes('petroglyph') || t.includes('pcn') || t.includes('cupule') || t.includes('incis');
  const hasPicto = t.includes('pictograph') || t.includes('painted') || t.includes('polychrome');
  if (hasPetro && hasPicto) return mkBothIcon(color, size);
  if (hasPicto) return mkPictoIcon(color, size);
  return mkPetroIcon(color, size);
}
// Rock art icon colors by classification
const RA_COLORS = {
  pcn: '#D32F2F',       // Deep red — oldest tradition
  bayArea: '#FF6B35',   // Orange — Bay Area tribal-era
  greatBasin: '#FF7043',// Warm coral — Great Basin (Heizer & Baumhoff)
  scCal: '#FF5722',     // Deep orange — South-Central CA (Lee & Hyder)
  jtree: '#FF6B9D',     // Pink — Joshua Tree
  yokuts: '#FFB74D'     // Amber — Yokuts/Chumash
};
const damIcon = mkIcon('#C1440E', 12);
const swIcon = mkIcon('#E07B39', 10);
const jtIcon = mkIcon('#FF6B9D', 9);
const ebIcon = mkIcon('#7FD8BE', 7);
const spanishIcon = mkIcon('#9B59B6', 10);

// ========== ANCIENT RIVERS ==========
