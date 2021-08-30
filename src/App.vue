<template>
  <header>
    <div id="logo">
      <div class="container">
        <div class="logo-content">
          <h4>Logo!</h4>
        </div>
      </div>
    </div>
    <div id="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Great Parks of California</h1>
        </div>
      </div>
    </div>
  </header>
  <section id="parks">
      <Card v-for="park of parks" :key="park.id" :park="park"/>
  </section>
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

