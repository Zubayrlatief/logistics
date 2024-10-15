<template>
    
    <div id="map" style="height: 500px;">
        <h1>waht we do</h1>
    </div>
  </template>
  
  <script>
  import L from 'leaflet';
  import 'leaflet-routing-machine';
  import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
  
  export default {
    mounted() {
      // Initialize the map and center it at a given location (latitude, longitude)
      const map = L.map('map').setView([40.7128, -74.0060], 13); // Example: New York City
  
      // Add OpenStreetMap tiles as the base layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);
  
      // Add route with start and end locations
      L.Routing.control({
        waypoints: [
          L.latLng(40.7128, -74.0060), // Start: New York City
          L.latLng(40.730610, -73.935242), // End: Example destination in NYC
        ],
        routeWhileDragging: true, // Allow users to drag and modify the route
      }).addTo(map);
    },
  };
  </script>
  
  <style>
  #map {
    height: 500px;
    width: 100%;
  }
  </style>
  