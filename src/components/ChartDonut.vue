<script>
import { defineComponent } from 'vue'
import { Doughnut } from 'vue3-chart-v2'

export default defineComponent({
  name: 'MonthlyChart',
  extends: Doughnut,
  props:{
    fuelType:{
      type: Array,
      default: null
    },
    quantity:{
      type: Array,
      default: null
    },
    options:{
      type: Object
    }
  },
  mounted () {
    this.renderChart({
      labels: this.fuelType,
      datasets: [
        {
          label: 'Fuel Type',
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(153, 102, 255)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
          data: this.quantity
        }
      ]

    }, this.options)
  }
})
</script>