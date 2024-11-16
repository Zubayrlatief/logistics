<template>
    <div class="contact-container">
      <h1>Contact Us</h1>
      <form @submit.prevent="submitForm" class="contact-form">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
  
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
  
        <label for="message">Message</label>
        <textarea id="message" v-model="message" rows="5" required></textarea>
  
        <button type="submit">Send Message</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        message: ""
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here, such as sending the form data to an API.
        console.log("Form submitted", this.name, this.email, this.message);
        // Clear form after submission
        this.name = "";
        this.email = "";
        this.message = "";
      }
    }
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  
  body {
    background-color: rgb(14, 14, 27);
    color: yellow;
  }
  
  .contact-container {
    text-align: center;
    width: 80%;
    max-width: 500px;
    padding: 20px;
    border-radius: 8px;
    background-color: rgb(14, 14, 27);
    color: yellow;
    margin: auto;
  }
  
  .contact-container h1 {
    padding-top: 80px;
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
  }
  
  .contact-form label {
    margin-top: 15px;
    color: yellow;
  }
  
  .contact-form input,
  .contact-form textarea {
    padding: 10px;
    margin-top: 5px;
    border: 1px solid yellow;
    border-radius: 4px;
    background-color: rgb(14, 14, 27);
    color: yellow;
  }
  
  .contact-form button {
    margin-top: 20px;
    padding: 10px;
    background-color: yellow;
    color: rgb(14, 14, 27);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .contact-form button:hover {
    background-color: #ffd700;
  }
  </style>
  