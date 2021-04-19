<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <body>
      <Header />
      <router-view></router-view>
      <Footer />
    </body>
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
/* @import url("../node_modules/bootstrap/dist/css/bootstrap.min.css"); */
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 60px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color: #000000ad;
  background-color: 	#D8D8D8;
}
button {
  color: #000000ad;
}

.component-container {
  margin: auto;
  text-align: center;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  width: 100vw;
  background-color: #222;
  margin-top: -15px;
}
.jumbotron {
    background-color: #000000;
    border-radius: .0!important;
}
</style>
