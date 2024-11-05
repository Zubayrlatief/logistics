<template>
  <div>
    <h2>My Trackings</h2>
    <TrackingForm @trackingAdded="handleTrackingAdded" />
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
      const response = await axios.get(
        'https://logistics-api-sl3u.onrender.com/trackings', 
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      this.trackings = response.data;
    },
    async updateStatus(id) {
      const token = localStorage.getItem('token');
      await axios.patch(
        `https://logistics-api-sl3u.onrender.com/trackings/${id}`,
        { status: 'Delivered' },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      this.fetchTrackings();
    },
    handleTrackingAdded(newTracking) {
      // Add the new tracking data to the list
      this.trackings.unshift(newTracking);
    }
  },
  mounted() {
    this.fetchTrackings();
  }
};
</script>
