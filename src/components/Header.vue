<template>
<div class="back">
  <div class="jumbotron text-center" id="header">
    <h1 id="title"></h1>
    
  </div>
    <p id="desc">Place, where you can buy your dream car</p>
  </div>
</template>

<style scoped>
#header {
  margin-bottom: 0;
  background-image: url("../assets/homepage.jpg");
  background-size: cover;
  color: white;
  margin-left: 25%;
}

h1#title{
    margin-top: -85px;
    padding: 95px;
}
.back {
    background-color: black;
}
p#desc{
    position: absolute;
    top: 70px;
    left: 7%;
    color: #a65c6d;
    font-size: 27px;
    font-family: fantasy;
}
</style>