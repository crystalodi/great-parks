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
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      parks: []
    }
  },
  created () {
    console.log(axios)
  },
}
</script>

<style lang="scss">
  #logo {
    background: $primary; //style later
  }

  #hero {
    background: url("./assets/img/hero-bg.jpg") no-repeat center center/cover;
    height: 400px;
    .hero-content {
      text-align: center;
      color: white;
      vertical-align: middle;
      h1 {
        padding-top: 140px !important;
        font-size: 60px;
        line-height: 1.2em;
      }
    }
  }
</style>

