<template>
  <div>
    <LineChart :labels="years" :data="amount" />
  </div>
</template>
<script>
import LineChart from "./LineChart.vue";
export default {
  components: {
    LineChart,
  },
  props: {
    amountYear: {
      type: undefined,
      required: true,
    },
  },
  data() {
    return {
      years: [],
      amount: [],
    };
  },
  methods: {
    make_list() {
      for (var element of this.amountYear) {
        this.years.push(element.year);
        this.amount.push(element.amount);
      }
    },
  },
  created() {
    this.make_list();
  },
};
</script>
