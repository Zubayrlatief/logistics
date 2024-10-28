<template>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" type="email" required />
      <input v-model="password" placeholder="Password" type="password" required />
      <button type="submit">Login</button>
      <p v-if="error">{{ error }}</p>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return { email: '', password: '', error: null };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:5000/auth/login', { email: this.email, password: this.password });
          localStorage.setItem('token', response.data.token);
          this.$router.push({ name: 'Trackings' });
        } catch (err) {
          this.error = 'Invalid login credentials';
        }
      }
    }
  };
  </script>
  