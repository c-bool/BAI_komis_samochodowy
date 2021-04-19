  
<template>
    <Chart />

</template>

<script>


import Chart from './Chart.vue'
export default {
    components: {
    Chart
  },
 props: { 
    cars: {
      type: undefined,
      required: true,
    },
  },
}
</script>