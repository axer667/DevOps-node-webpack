<template>
  <div id="home">
    <img class="logo" src="../../img/grass.png" alt="logo" width="100" />
    <h1>👋{{greeting}}🌎</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      greeting: 'Hello world'
    }
  }
}
</script>
<style lang="scss">
  @import "src/styles/main";
</style>