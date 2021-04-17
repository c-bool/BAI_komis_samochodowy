<template>
  <div class="component-container">

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Homepage",

  data() {
    return {
      cars: null,
      error_occured: false,
      loading_page: true,
      // mockaroo_data: 'https://my.api.mockaroo.com/cars/123?key=e9aed950&fbclid=IwAR2trX5Bxz7hcFwBSGtIXlXRsibznOZhlqPG5onX4ccNeOWlbcZ-EpDj_x0',
      mockaroo_data: 'https://raw.githubusercontent.com/c-bool/BAI_komis_samochodowy/main/dane.json',
    };
  },
  mounted() {
    axios
      .get(this.mockaroo_data)
      .then(response => (this.cars = response.data))
      .catch(error => {
        console.log(error);
        this.error_occured = true;
      })
      .finally(() => (this.loading_page = false));
  }
};
</script>