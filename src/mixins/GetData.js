const axios = require("axios");
// const baseURL = 'https://my.api.mockaroo.com/cars/123?key=e9aed950&fbclid=IwAR2trX5Bxz7hcFwBSGtIXlXRsibznOZhlqPG5onX4ccNeOWlbcZ-EpDj_x0',
const baseURL = 'https://raw.githubusercontent.com/c-bool/BAI_komis_samochodowy/main/dane.json';

export const LoadCars = {
    methods: {
      loadCars() {
        axios
            .get(baseURL)
            .then(response => (this.cars = response.data))
            .catch(error => {
                console.log(error);
                this.error_occured = true;
            })
            .finally(() => (this.loading_page = false));
      }
    }
  };
