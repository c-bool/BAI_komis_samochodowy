  
<template>
  <Chart v-bind:chartData="chartData" :chartOptions="chartOptions" />
</template>

<script>
import Chart from "./Chart.vue";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    cars: {
      type: undefined,
      required: true,
    },
  },

  components: {
    Chart,
  },
  data() {
    return {
      chartOptions: {
        height: 10
      },
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "GitHub Commits",
            backgroundColor: "#f87979",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          },
        ],
      },
    };
  },
});
</script>