<template>
  <div>
  <NavBar/>
  <router-view></router-view>
  <FooterPage/>
</div>
</template>

<script> 
import NavBar from './components/NavBar.vue';
import FooterPage from './components/FooterPage.vue';
import 'mdb-ui-kit/css/mdb.min.css'; // Importing the MDB CSS
import 'mdb-ui-kit'; // Importing the MDB JS

export default {
  components: {
    NavBar,
    FooterPage
  }
}
</script>
<style>
#app{
  background-color: rgb(14, 14, 27);
}
h1,h2,p,.text,.text-2{
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
