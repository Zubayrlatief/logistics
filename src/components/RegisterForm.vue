<template>
    <form @submit.prevent="register">
      <input v-model="name" placeholder="Name" required />
      <input v-model="email" placeholder="Email" type="email" required />
      <input v-model="password" placeholder="Password" type="password" required />
      <button type="submit">Register</button>
      <p v-if="error">{{ error }}</p>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return { name: '', email: '', password: '', error: null };
    },
    methods: {
      async register() {
        try {
          await axios.post('http://localhost:5000/auth/register', { name: this.name, email: this.email, password: this.password });
          this.$router.push({ name: 'Login' });
        } catch (err) {
          this.error = 'Registration failed';
        }
      }
    }
  };
  </script>
  