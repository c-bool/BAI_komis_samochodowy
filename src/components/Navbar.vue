<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <div class="elo">
    <a class="navbar-brand" href="#"><router-link to="/">CAR DEALER</router-link></a>
    </div>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/AllVehicles">All Vehicles</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/SearchVehicles">Search Vehicles</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/ChartsAndDiagrams">Charts and diagrams</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/About">Stats</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/Contact">Contact</router-link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style>

nav {
  display: inline-block;
  align-items: center;
  justify-content: center;
}
nav .nav-item {
  display: inline-block;
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;

  transition: 0.4s;
}
nav .elo {
  display: inline-block;
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;

  transition: 0.4s;
}
nav .elo.active,
nav .elo:hover a{
  color: rgb(214, 35, 35);
}
nav .container-fluid a {
  color: inherit;
  text-decoration: none;
}
nav .nav-item.active,
nav .nav-item:hover {
  background-color: rgba(121, 121, 121, 0.315);
  color:#fff;
  border-bottom-color: #a32424;
}
nav .nav-item a {
  color: inherit;
  text-decoration: none;
}
nav.navbar.navbar-expand-lg.navbar-dark.bg-dark {
    background-color: #0000!important;
}.navbar-expand-lg .navbar-collapse {
    display: flex!important;
    flex-basis: auto;
    background: #0000!important;
}

</style>