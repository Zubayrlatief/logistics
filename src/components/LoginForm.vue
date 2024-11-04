<template>
  <div class="login-page">
    <form class="login-form" @submit.prevent="login">
      <input v-model="email" placeholder="Email" type="email" required />
      <input v-model="password" placeholder="Password" type="password" required />
      <button type="submit">Login</button>
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
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
        const response = await axios.post('https://logistics-api-sl3u.onrender.com/auth/login', {
          email: this.email,
          password: this.password
        });
        localStorage.setItem('token', response.data.token);
        this.$router.push({ name: 'Trackings' });
      } catch (err) {
        this.error = 'Invalid login credentials';
      }
    }
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(14, 14, 27);
  color: yellow;
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: rgb(20, 20, 35);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.login-form input {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid yellow;
  border-radius: 4px;
  color: rgb(14, 14, 27);
}

.login-form button {
  padding: 10px;
  background-color: yellow;
  color: rgb(14, 14, 27);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.login-form button:hover {
  background-color: rgb(255, 223, 0);
}

.login-form p {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
