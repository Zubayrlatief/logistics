<template>
  <div class="tracking-form">
    <form @submit.prevent="addTracking">
      <input v-model="description" placeholder="Tracking Description" required />
      <input v-model="location" placeholder="Location" required />
      <button type="submit">Add Tracking</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return { description: '', location: '' };
  },
  methods: {
    async addTracking() {
      const token = localStorage.getItem('token');
      await axios.post('https://logistics-api-sl3u.onrender.com/trackings', {
        description: this.description,
        location: this.location,
        status: 'In Transit'
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      this.$emit('trackingAdded');
      this.description = '';
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
</style>
