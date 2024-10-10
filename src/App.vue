<template>
  <div>
  <NavBar/>
  <LandingPage/>
  <HomePage/>
</div>
</template>

<script> 
import NavBar from './components/NavBar.vue';
import LandingPage from './components/LandingPage.vue';
import HomePage from './components/HomePage.vue';
export default {
  components: {
    NavBar,
    LandingPage,
    HomePage,
  }
}
</script>
<style>
</style>
