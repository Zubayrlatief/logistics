<template>
  <div>
  <NavBar/>
  <LandingPage/>
  <AboutUs/>
  <router-view></router-view>
  
  <FooterPage/>
</div>
</template>

<script> 
import NavBar from './components/NavBar.vue';
import LandingPage from './components/LandingPage.vue';
import AboutUs from './components/AboutUs.vue';
import FooterPage from './components/FooterPage.vue';

// In your main.js or App.vue
import 'mdb-ui-kit/css/mdb.min.css'; // Importing the MDB CSS
import 'mdb-ui-kit'; // Importing the MDB JS

export default {
  components: {
    NavBar,
    LandingPage,
    AboutUs,
    FooterPage
  }
}
</script>
<style>
#app{
  background-color: rgb(14, 14, 27);
}
h1,h2,p{
  font-family: "Jersey 25", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.button{
  background-color: yellow;
    color: black;
    border-radius: 2rem;
  font-family: "Jersey 25", sans-serif;
  font-weight: 400;
  font-style: normal;
  transition: background 0.6s ease;
  background: rgb(236, 236, 32);
    cursor: pointer;
}
.button:hover{
    background: rgb(169, 169, 68);
}


</style>
