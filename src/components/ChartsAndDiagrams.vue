  
<template>
  <div>
    <Chart :labels="brand_list" :data="quantity_list" :options="options" />
    <ChartDonut :labels="fuel_brand_list" :data="fuel_quantity_list" :options="options"/>
  </div>
</template>

<script>
import Chart from "./Chart.vue";
import ChartDonut from "./ChartDonut.vue";
export default {
  components: {
    Chart,
    ChartDonut,
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

      fuel_brand_list: [],
      fuel_quantity_list: [],
      fuel_type_list: [],
      fuel_dict: {},

      options: {
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 0,
              },
            },
          ],
        },
      },
    };
  },
  methods: {
    make_list() {
      for (var x of this.cars) {
        this.list.push(x.Make);
      }
      for (var e of this.cars) {
        this.fuel_type_list.push(e.FuelType);
      }
      var initialCarsDict = {};
      var initialFuelDict = {};
      var reducer = function (currentTotalCarsDict, currentCarMark) {
        if (!currentTotalCarsDict[currentCarMark]) {
          currentTotalCarsDict[currentCarMark] = 1;
        } else {
          currentTotalCarsDict[currentCarMark] = currentTotalCarsDict[currentCarMark] + 1;
        }
        return currentTotalCarsDict;
      };

      //DAta for car cahrt
      this.cars_dict = this.list.reduce(reducer, initialCarsDict);
      this.brand_list = Object.keys(this.cars_dict);
      this.quantity_list = Object.values(this.cars_dict);
      //Data for Fuel chart
      this.fuel_dict = this.fuel_type_list.reduce(reducer, initialFuelDict);
      this.fuel_brand_list = Object.keys(this.fuel_dict);
      this.fuel_quantity_list = Object.values(this.fuel_dict);
    },
  },
  created() {
    this.make_list();
  },
};
</script>
