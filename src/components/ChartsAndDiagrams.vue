  
<template>
  <Chart :brands="brand_list" :quantity="quantity_list"/>
</template>

<script>
import Chart from "./Chart.vue";
export default {
  components: {
    Chart,
  },
  props: {
    cars: {
      type: undefined,
      required: true,
    },
  },
  data() {
    return {
      brand_list: [],
      quantity_list: [],
      list: [],
      cars_dict: {},
    };
  },
  methods: {
    make_list() {
      for (var element of this.cars) {
        this.list.push(element.Make);
      }
      var initialValue = {};
      var reducer = function (tally, vote) {
        if (!tally[vote]) {
          tally[vote] = 1;
        } else {
          tally[vote] = tally[vote] + 1;
        }
        return tally;
      };
      this.cars_dict = this.list.reduce(reducer, initialValue);
      this.brand_list = Object.keys(this.cars_dict);
      this.quantity_list = Object.values(this.cars_dict);
    },
  },
  created() {
    this.make_list();
  },
};
</script>
