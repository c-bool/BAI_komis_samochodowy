import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'

import AllVehicles from "./components/AllVehicles.vue";
import ChartsAndDiagrams from "./components/ChartsAndDiagrams.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Home from "./components/Home.vue";


const routes = [
  {path: '/AllVehicles', component: AllVehicles},
  {path: '/ChartsAndDiagrams', component: ChartsAndDiagrams},
  {path: '/About', component: About},
  {path: '/Contact', component: Contact},
  {path: '/', component: Home}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app')
