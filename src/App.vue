<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>


<style>
@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 60px;
  color: #000000ad;
}
button {
  color: #000000ad;
}
</style>
