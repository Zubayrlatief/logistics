<template>
    <div class="Landing">
      <div class="image">
      <img class="img-fluid" :src="LandingImage"/>
      <h1 class="heading">ZAR<h1 class="heading-1">LOGISTICS</h1></h1>
      <p class="heading-3">Delivering efficient, reliable logistics solutions through innovation<br>Ensuring seamless transportation and supply chain management<br> </p>
      <button @click="goToContactPage" class="button">Recieve a Quotation</button>
    </div> 
    <AboutUs/>
    <FooterPage/>
    </div>
  </template>
  
  <script>
import AboutUs from '@/components/AboutUs.vue';
import FooterPage from '@/components/FooterPage.vue';
  export default {
    components: {
        AboutUs,
        FooterPage
    },
  data (){
      return{
          LandingImage: "https://zubayrlatief.github.io/Images-/truck.png"
      };
  },
  methods: {
    goToContactPage(){
      this.$router.push({ name: 'ContactPage'})
    },
  }
  }
  </script>
  
  <style scoped>
  .Landing{
  position: relative;
  height: 100vh;
  }
  .Landing::before{
      content: '';
      position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark semi-transparent layer */
    backdrop-filter: blur(1px); /* Apply the blur effect */
    clip-path: polygon(0 100%, 100% 0%, 100% 20%); /* Create a triangle shape */
    z-index: 1; /* Make sure this stays on top */
  }
  
  .image{
      position: relative;
      max-width: 100%
  
  }
  .heading{
      flex: 0 0 auto;
      margin-right: 20px;
      color: white;
  }
  
  .heading-1{
      color: yellow;
  }
  .img-fluid{
      max-width: 100%;
      width: 100%;
      max-height: 730px;
      height: auto;
  }
  
  .heading{
      position: absolute;
      top: 30%;
      left: 10%;
    font-family: "Jersey 25", sans-serif;
    font-weight: 400;
    font-style: normal;
  
  }
  
  .heading-3{
      position: absolute;
      top: 45%;
      left: 10%;
    font-family: "Jersey 25", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: white;
  }
  
  .button{
      position: absolute;
      left: 10%;
      top: 60%;
      padding: 10px 20px;
      background: rgb(236, 236, 32);
      cursor: pointer;
      transition: background 0.6s ease;
  
  }
  
  .button:hover{
      background: rgb(169, 169, 68);
  }
  
  </style>