<template>
  <div class="tracking-form">
    <form @submit.prevent="addTracking">
      <input v-model="description" placeholder="Tracking Description" required />
      <input v-model="load" placeholder="Load" required />
      <input v-model="destination" placeholder="Destination" required />
      <input v-model="location" placeholder="Location" required />
      <button type="submit">Add Tracking</button>
    </form>
    <!-- Truck image that displays after tracking data is registered -->
    <div v-if="recentTracking" class="tracking-info">
      <img src="https://example.com/truck-image.png" alt="Truck" class="truck-image" />
      <p><strong>Description:</strong> {{ recentTracking.description }}</p>
      <p><strong>Load:</strong> {{ recentTracking.load }}</p>
      <p><strong>Destination:</strong> {{ recentTracking.destination }}</p>
      <p><strong>Location:</strong> {{ recentTracking.location }}</p>
      <p><strong>Status:</strong> {{ recentTracking.status }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      description: '',
      load: '',
      destination: '',
      location: '',
      recentTracking: null
    };
  },
  methods: {
    async addTracking() {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'https://logistics-api-sl3u.onrender.com/trackings',
        {
          description: this.description,
          load: this.load,
          destination: this.destination,
          location: this.location,
          status: 'In Transit'
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      this.recentTracking = response.data;
      this.$emit('trackingAdded', response.data);
      this.description = '';
      this.load = '';
      this.destination = '';
      this.location = '';
    }
  }
};
</script>

<style scoped>
.tracking-form {
  background-color: rgb(14, 14, 27);
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin: auto;
  color: yellow;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid yellow;
  border-radius: 4px;
  background-color: rgb(20, 20, 35);
  color: white;
}

input::placeholder {
  color: #d3d3d3;
}

button {
  padding: 10px;
  background-color: yellow;
  color: rgb(14, 14, 27);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: rgb(255, 223, 0);
}

.tracking-info {
  margin-top: 20px;
  color: white;
}

.truck-image {
  width: 100%;
  max-width: 150px;
  margin-bottom: 10px;
}
</style>
