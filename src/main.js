import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'

import AllVehicles from "./components/AllVehicles.vue";
import ChartsAndDiagrams from "./components/ChartsAndDiagrams.vue";
import SearchVehicles from "./components/SearchVehicles.vue";
import Contact from "./components/Contact.vue";
import Home from "./components/Home.vue";
import OneMark from "./components/OneMark.vue";


async function fetchData() {
  // let response = await fetch('https://my.api.mockaroo.com/cars/123?key=e9aed950&fbclid=IwAR2trX5Bxz7hcFwBSGtIXlXRsibznOZhlqPG5onX4ccNeOWlbcZ-EpDj_x0')
  let response = await fetch('https://raw.githubusercontent.com/c-bool/BAI_komis_samochodowy/main/dane.json')
  const cars = await response.json()
  console.log(cars)
  
  
  const routes = [
    {path: '/BAI_komis_samochodowy/AllVehicles', component: AllVehicles,  props: {
      cars: cars,
    }},
    {path: '/BAI_komis_samochodowy/AllVehicles/:markName', name: 'vehicle-mark', props: true, component: OneMark},
    {path: '/BAI_komis_samochodowy/ChartsAndDiagrams', component: ChartsAndDiagrams,props: {
      cars: cars,
    }},
    {path: '/BAI_komis_samochodowy/SearchVehicles', component: SearchVehicles, props: {
      cars: cars,
    }},
    {path: '/BAI_komis_samochodowy/Contact', component: Contact},
    {path: '/BAI_komis_samochodowy/', component: Home}
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes
  });

  createApp(App).use(router).mount('#app')
}


fetchData() 

