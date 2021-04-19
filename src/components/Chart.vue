<script>
import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'MonthlyChart',
  extends: Bar,
  props:{
    brands:{
      type: Array,
      default: null
    },
    quantity:{
      type: Array,
      default: null
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.brands,
      datasets: [
        {
          label: 'Number of cars from each brand',
          backgroundColor: '#f87979',
          data: this.quantity
        }
      ],
      options: {
        scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
      }
    })
  }
})
</script>
