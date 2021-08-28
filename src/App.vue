<template>
<div class="class">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  .class {
    background-color: $yellow;
  }
</style>
