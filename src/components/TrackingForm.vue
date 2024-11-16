<template>
  <div class="tracking-form">
    <form @submit.prevent="addTracking">
      <input v-model="description" placeholder="Type Of Truck" required />
      <input v-model="freightload" placeholder="Freight Load" required />
      <input v-model="destination" placeholder="Destination" required />
      <input v-model="location" placeholder="Current Location" required />
      <button type="submit">Add Tracking</button>
    </form>
    
    <div v-if="recentTracking" class="tracking-info">
      <h3>Recently Added Tracking</h3>
      <img src="https://example.com/truck-image.png" alt="Truck" class="truck-image" />
      
      <div class="tracking-details">
        <p><strong>Description:</strong> {{ recentTracking.description }}</p>
        <p><strong>Freight Load:</strong> {{ recentTracking.freightload }}</p>
        <p><strong>Destination:</strong> {{ recentTracking.destination }}</p>
        <p><strong>Location:</strong> {{ recentTracking.location }}</p>
        <p><strong>Status:</strong> {{ recentTracking.status }}</p>
      </div>
      
      <!-- Mark as Delivered Button with correct class -->
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
      
      console.log("API response:", response.data); // Check if the response has the expected data
      
      this.recentTracking = response.data;
      
      // Emit the event to parent if needed
      this.$emit('trackingAdded', response.data);
      
      // Clear the input fields
      this.description = '';
      this.freightload = '';
      this.destination = '';
      this.location = '';
    } catch (error) {
      console.error('Error adding tracking:', error.response?.data || error.message);
      alert('Failed to add tracking. Please try again.');
    }
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

/* Styles for recently added tracking info */
.tracking-info {
  margin-top: 20px;
  color: yellow;
  background-color: rgb(14, 14, 27);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid yellow;
}

.tracking-info h3 {
  text-align: center;
  margin-bottom: 15px;
  color: yellow;
}

.truck-image {
  display: block;
  width: 100%;
  max-width: 150px;
  margin: 0 auto 10px;
}

.tracking-details {
  display: flex;
  flex-direction: column;
  background-color: rgb(20, 20, 35);
  padding: 15px;
  border-radius: 8px;
  color: white;
}

.tracking-details p {
  margin: 5px 0;
}

.tracking-details strong {
  color: yellow;
}

/* Style for the Mark as Delivered button */
.delivered-button {
  margin-top: 15px;
  padding: 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.delivered-button:hover {
  background-color: darkgreen;
}
</style>
