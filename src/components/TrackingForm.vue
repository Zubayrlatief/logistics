<template>
    <form @submit.prevent="addTracking">
      <input v-model="description" placeholder="Tracking Description" required />
      <input v-model="location" placeholder="Location" required />
      <button type="submit">Add Tracking</button>
    </form>
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
        await axios.post('http://localhost:5000/trackings', {
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
  