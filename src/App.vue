<template>
  <header id="header">
    <h1 class="logo">The Great Parks Project <span class="logo-icon"><i class="fas fa-leaf"></i></span></h1>
  </header>
  <header id="hero">
    <div class="hero-content">
      <h1 class="hero-title">Explore California Beauty</h1>
      <p class="hero-lead">Venture into the great outdoors and see the natural sights of California</p>
    </div>
  </header>
  <section id="parks">
      <Card v-for="park of parks" :key="park.id" :park="park"/>
  </section>
  <footer id="footer">
    <div class="footer-sitename">
      <h3>The Great Parks Project <span class="logo-icon"><i class="fas fa-leaf"></i></span></h3>
              <p>Copyright &copy; 2021, All Rights Reserved</p>
        <a href="#" class="footer-link">Privacy Policy</a> <a href="#" class="footer-link">Terms and Conditions</a>
    </div>
    <div class="footer-socialmedia">
      <a href="https://www.twitter.com/natlparkservice" target="_blank"><i class="fab fa-twitter fa-3x"></i></a>
    </div>
  </footer>
</template>

<script>
import Card from "./components/Card.vue"
import {ParkService} from "./services/park-service.js";
export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      parks: []
    }
  },
  async created () {
    this.parks = await ParkService.getParks();
  },
}
</script>

<style lang="scss">
  @import "./app.scss";
</style>

