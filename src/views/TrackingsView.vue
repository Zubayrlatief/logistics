<template>
    <div>
      <h2>My Trackings</h2>
      <TrackingForm @trackingAdded="fetchTrackings" />
      <ul v-if="trackings.length">
        <li v-for="tracking in trackings" :key="tracking.id">
          {{ tracking.description }} - Status: {{ tracking.status }}
          <button @click="updateStatus(tracking.id)">Mark as Delivered</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import TrackingForm from '../components/TrackingForm.vue';
  
  export default {
    components: { TrackingForm },
    data() {
      return { trackings: [] };
    },
    methods: {
      async fetchTrackings() {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/trackings', {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.trackings = response.data;
      },
      async updateStatus(id) {
        const token = localStorage.getItem('token');
        await axios.patch(`http://localhost:5000/trackings/${id}`, { status: 'Delivered' }, {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.fetchTrackings();
      }
    },
    mounted() {
      this.fetchTrackings();
    }
  };
  </script>
  