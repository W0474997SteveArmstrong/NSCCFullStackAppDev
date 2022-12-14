// First, define the GeoJSON data for the city and its parks
var city = {
    "type": "Feature",
    "properties": {
      "name": "New York City"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [-74.04728, 40.68392],
          [-73.91058, 40.87617],
          [-73.85673, 40.59173],
          [-74.04728, 40.68392]
        ]
      ]
    }
  };
  
  var centralPark = {
    "type": "Feature",
    "properties": {
      "name": "Central Park"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-73.96366, 40.77892]
    }
  };
  
  var prospectPark = {
    "type": "Feature",
    "properties": {
      "name": "Prospect Park"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-73.96598, 40.66146]
    }
  };
  
  // Next, create the GeoJSON object that contains all of the data
  var geojson = {
    "type": "FeatureCollection",
    "features": [city, centralPark, prospectPark]
  };
  

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
  
//   L.geoJSON(geojson).addTo(map);