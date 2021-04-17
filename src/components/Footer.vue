<template>
  <footer class="footer">
    <div class="container">
      <p class="text-muted">2021 Car Dealer</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: #222;
}

.container .text-muted {
  margin: 0 0;
  color: rgb(255, 255, 255) !important;
  text-align: center;
  font-weight: bold;
}

.footer > .container {
  padding-right: auto;
  padding-left: auto;
}
</style>