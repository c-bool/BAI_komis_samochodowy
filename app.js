var app = new Vue({
    el: '#app',
    data: {
      currency: null,
      error_occured: false,
      loading_page: true
    },
    mounted () {
      axios
      .get('https://my.api.mockaroo.com/cars/123?key=e9aed950&fbclid=IwAR2trX5Bxz7hcFwBSGtIXlXRsibznOZhlqPG5onX4ccNeOWlbcZ-EpDj_x0')
      .then(response => (this.currency = response.data))
      .catch(error => {
          console.log(error),
          this.error_occured = true
      })
      .finally(() => this.loading_page = false)
    }
  });
  app.mount('#app');