<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";


export default {
  name: "App",
  components: {
    Header,
    Footer,
    Navbar,
  },
};
</script>


<style>
@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 60px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color: #000000ad;
}
button {
  color: #000000ad;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}
</style>
