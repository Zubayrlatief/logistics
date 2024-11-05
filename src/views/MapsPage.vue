<template>
  <div class="container">
    
  <div class="heading d-flex justify-content-center">
    <h1 class="heading"> TRUSTED ROUTES</h1>
    <h4 class="text">We are determined to make logistics safe</h4>
    <h5 class="text-2">These are our highest ROI routes. Saftey and consistensy is garenteed on these routes with highly expreiences drivers</h5>
  </div>
    <div class="row">
      <!-- Map 1: Namibia to Cape Town -->
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h2 class="d-flex justify-content-center">NAMABIA->CAPE TOWN</h2>
            <div id="map1" class="map-container"></div>
          </div>
        </div>
      </div>
      
      <!-- Map 2: Botswana to Cape Town -->
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            
            <h2 class="d-flex justify-content-center">BOTSWANA->CAPE TOWN</h2>
            <div id="map2" class="map-container"></div>
          </div>
        </div>
      </div>
      
      <!-- Map 3: Mozambique to Cape Town -->
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">

            <h2 class="d-flex justify-content-center">MOZAMBIQUE->CAPE TOWN</h2>
            <div id="map3" class="map-container"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

export default {
  components: { name: "MapsPage" },
  mounted() {
    // Function to create a map with a line between two points
    const createMapWithLine = (mapId, startCoords, endCoords) => {
      const map = L.map(mapId).setView(startCoords, 6); // Set view centered at start coordinates

      // Add the OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      // Draw a polyline (simple line) between start and end points
      const line = L.polyline([startCoords, endCoords], { color: 'blue' }).addTo(map);

      // Fit the map to the polyline bounds
      map.fitBounds(line.getBounds());
    };

    // Map 1: Namibia to Cape Town
    createMapWithLine('map1', [-22.559722, 17.083611], [-33.9249, 18.4241]); // Start: Namibia, End: Cape Town

    // Map 2: Botswana to Cape Town
    createMapWithLine('map2', [-24.658056, 25.912222], [-33.9249, 18.4241]); // Start: Botswana, End: Cape Town

    // Map 3: Mozambique to Cape Town
    createMapWithLine('map3', [-25.96553, 32.58322], [-33.9249, 18.4241]); // Start: Mozambique, End: Cape Town
  },
};
</script>

<style>
.container{
   
  padding: 1rem;
}
.text,.text-2{
    color: rgb(255, 255, 255);
    
    padding: 1rem;
}
.heading{
    display: flex;
    justify-content: center;
    align-items: center;
  padding-bottom: 3rem;
  flex-direction: column;
  color: yellow;
}
.map-container {
  height: 300px; /* Set height of each map */
  width: 100%; /* Ensure map takes full card width */
}
.col{
  padding: 50px;
}

.card-body{
  
  background-color: black;
}
.card {
}
</style>
