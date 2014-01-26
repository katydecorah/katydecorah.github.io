var map = L.mapbox.map('map', 'katydecorah.h3jij6mm',{zoomControl: false});
var markerLayer = L.mapbox.markerLayer()
.setGeoJSON(geoJson)
.addTo(map);

map.fitBounds(markerLayer.getBounds());

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
if (map.tap) map.tap.disable();