<template>
  <div class="register-page">
    <form class="register-form" @submit.prevent="register">
      <input v-model="name" placeholder="Name" required />
      <input v-model="email" placeholder="Email" type="email" required />
      <input v-model="password" placeholder="Password" type="password" required />
      <button type="submit">Register</button>
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
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
        await axios.post('https://logistics-api-sl3u.onrender.com/auth/register', {
          name: this.name,
          email: this.email,
          password: this.password
        });
        this.$router.push({ name: 'Login' });
      } catch (err) {
        this.error = 'Registration failed';
      }
    }
  }
};
</script>

<style scoped>
.register-page {
  background-color: rgb(14, 14, 27);
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-form {
  

  background-color: rgb(14, 14, 27);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.register-form input {
  margin-bottom: 15px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}

.register-form button {
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: yellow;
  color: rgb(128, 128, 121);
  font-size: 16px;
  cursor: pointer;
}

.register-form button:hover {
  background-color: yellow;
  color: rgb(14, 14, 27);
}

.register-form p {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}
</style>
