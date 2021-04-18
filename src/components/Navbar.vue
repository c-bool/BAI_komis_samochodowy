<template>
  <nav>
    <div class="menu-item"><a href="#"><router-link to="/">Home</router-link></a></div>
    <div class="menu-item"><a href="#"><router-link to="/AllVehicles">All Vehicles</router-link></a></div>
    <div class="menu-item"><a href="#"><router-link to="/SearchVehicles">Search Vehicles</router-link></a></div>
    <div class="menu-item"><a href="#"><router-link to="/ChartsAndDiagrams">Charts and diagrams</router-link></a></div>
    <div class="menu-item"><a href="#"><router-link to="/Contact">Contact</router-link></a></div>
  </nav>
</template>

<style>
nav {
  display: inline-block;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  display: inline-block;
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;

  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #a32424;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>