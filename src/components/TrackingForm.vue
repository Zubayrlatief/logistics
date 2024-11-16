<template>
  <div class="tracking-form">
    <form @submit.prevent="addTracking">
      <input v-model="description" placeholder="Type of Truck" required />
      <input v-model="freightload" placeholder="Freight Load" required />
      <input v-model="destination" placeholder="Destination" required />
      <input v-model="location" placeholder="Current Location" required />
      <button type="submit">Add Tracking</button>
    </form>
    
    <div v-if="recentTracking" class="tracking-info">
      <h3>Recently Added Tracking</h3>
      <div class="truck-card">
        <img src="https://example.com/truck-image.png" alt="Truck" class="truck-image" />
        <div class="tracking-details">
          <p><strong>Description:</strong> {{ recentTracking.description }}</p>
          <p><strong>Freight Load:</strong> {{ recentTracking.freightload }}</p>
          <p><strong>Destination:</strong> {{ recentTracking.destination }}</p>
          <p><strong>Location:</strong> {{ recentTracking.location }}</p>
          <p><strong>Status:</strong> {{ recentTracking.status }}</p>
        </div>
      </div>
      
      <button @click="markAsDelivered" class="delivered-button">Mark as Delivered</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      description: '',
      freightload: '',
      destination: '',
      location: '',
      recentTracking: null
    };
  },
  methods: {
    async addTracking() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          'https://logistics-api-sl3u.onrender.com/trackings',
          {
            description: this.description,
            freightload: this.freightload,
            destination: this.destination,
            location: this.location,
            status: 'In Transit'
          },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        
        this.recentTracking = response.data;
        this.description = '';
        this.freightload = '';
        this.destination = '';
        this.location = '';
      } catch (error) {
        console.error('Error adding tracking:', error.response?.data || error.message);
        alert('Failed to add tracking. Please try again.');
      }
    },
    
    async markAsDelivered() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.put(
          `https://logistics-api-sl3u.onrender.com/trackings/${this.recentTracking.id}`,
          { status: 'Delivered' },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        this.recentTracking.status = response.data.status;
      } catch (error) {
        console.error('Error marking as delivered:', error.response?.data || error.message);
        alert('Failed to mark as delivered. Please try again.');
      }
    }
  }
};
</script>

<style scoped>
.tracking-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(14, 14, 27);
  border-radius: 8px;
  color: white;
}

.tracking-form input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.tracking-form button {
  padding: 10px 15px;
  background-color: yellow;
  color: rgb(14, 14, 27);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.tracking-info {
  margin-top: 20px;
  padding: 20px;
  background-color: rgb(14, 14, 27);
  border-radius: 8px;
  color: white;
}

.truck-card {
  display: flex;
  justify-content: space-between;
  background-color: rgb(10, 15, 45);
  padding: 15px;
  border-radius: 8px;
  color: rgb(14, 14, 27);
}

.truck-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.tracking-details {
  flex-grow: 1;
  padding-left: 20px;
}

.tracking-details p {
  margin: 5px 0;
}

.delivered-button {
  background-color: yellow;
  color: rgb(14, 14, 27);
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.delivered-button:hover {
  background-color: rgb(14, 14, 27);
  color: yellow;
}
</style>
