<template>
  <div class="trackings-view">
    <h2>My Trackings</h2>
    <TrackingForm @trackingAdded="handleTrackingAdded" />
    
    <div v-if="isLoading">Loading...</div>

    <ul v-if="trackings.length">
      <li v-for="tracking in trackings" :key="tracking.id" class="tracking-item">
        <div class="tracking-card">
          <h3>{{ tracking.description }}</h3>
          <p><strong>Status:</strong> {{ tracking.status }}</p>
          <p><strong>Freight Load:</strong> {{ tracking.freightload }}</p>
          <p><strong>Destination:</strong> {{ tracking.destination }}</p>
          <p><strong>Location:</strong> {{ tracking.location }}</p>
          <button 
            v-if="tracking.status !== 'Delivered'" 
            @click="updateStatus(tracking.id)">
            Mark as Delivered
          </button>
        </div>
      </li>
    </ul>

    <div v-if="!trackings.length && !isLoading">No trackings available</div>
  </div>
</template>

<script>
import axios from 'axios';
import TrackingForm from '../components/TrackingForm.vue';

export default {
  components: { TrackingForm },
  data() {
    return {
      trackings: [],
      isLoading: false
    };
  },
  methods: {
    async fetchTrackings() {
      this.isLoading = true;
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          'https://logistics-api-sl3u.onrender.com/trackings', 
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        this.trackings = response.data;
      } catch (error) {
        console.error("Error fetching trackings:", error.message);
        alert('Failed to load trackings.');
      } finally {
        this.isLoading = false;
      }
    },
    async updateStatus(id) {
      try {
        const token = localStorage.getItem('token');
        await axios.patch(
          `https://logistics-api-sl3u.onrender.com/trackings/${id}`,
          { status: 'Delivered' },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        this.fetchTrackings();
      } catch (error) {
        console.error("Error updating tracking status:", error.message);
        alert('Failed to update status.');
      }
    },
    handleTrackingAdded(newTracking) {
      this.trackings.unshift(newTracking);
    }
  },
  mounted() {
    this.fetchTrackings();
  }
};
</script>

<style scoped>
.trackings-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(14, 14, 27);
  color: rgb(255, 255, 255);
}

h3{
  display: flex;
  justify-content: center;
  
  font-family: "Jersey 25", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.tracking-item {
  margin-bottom: 20px;
}

.tracking-card {
  background-color: rgb(180, 183, 192);
  padding: 15px;
  border-radius: 8px;
  color: rgb(14, 14, 27);
  
}

.tracking-card h3 {
  margin-bottom: 10px;
}

.tracking-card p {
  margin: 5px 0;
}

button {
  padding: 10px 15px;
  background-color: yellow;
  color: rgb(14, 14, 27);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(14, 14, 27);
  color: yellow;
}
</style>
