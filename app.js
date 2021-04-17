var app = new Vue({
  el: '#app',
  data: {
    currency: null,
    error_occured: false,
    loading_page: true,
    toggle : false,
    brand_list : [],
    search: {
      Make: '',
      Status:  [],
      FuelType: [],
      Drive: [],
      Gearbox: [],
      toggle: false
    },
    filteredCurrency: []
  },
  methods:{ 
    fetch(){
    axios
    .get('https://my.api.mockaroo.com/cars/123?key=e9aed950&fbclid=IwAR2trX5Bxz7hcFwBSGtIXlXRsibznOZhlqPG5onX4ccNeOWlbcZ-EpDj_x0')
    .then(response => (this.currency = response.data))
    .catch(error => {
        console.log(error),
        this.error_occured = true
    })
    .finally(() => this.loading_page = false)
  },
    make_list(){
      for (var element of this.currency){
        this.brand_list.indexOf(element.Make) === -1 ? this.brand_list.push(element.Make) : null;
      }
    },
    filter: function($event) {
      for (var element of this.currency){
        if (this.search.Make === element.Make && this.search.Status.indexOf(element.Status) > -1 && this.search.FuelType.indexOf(element.FuelType) > -1 && this.search.Drive.indexOf(element.Drive) > -1 && this.search.Gearbox.indexOf(element.Gearbox) > -1 ){
          this.filteredCurrency.push(element)
        }
      }
    }
}
});


