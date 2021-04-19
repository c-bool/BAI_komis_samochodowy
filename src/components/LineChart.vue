<script>
import { defineComponent } from 'vue'
import { Line } from 'vue3-chart-v2'

export default defineComponent({
  name: 'LineChart',
  extends: Line,
  props:{
    labels:{
      type: Array,
      default: null
    },
    data:{
      type: Array,
      default: null
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'Number of electric cars bought over years',
          backgroundColor: '#d142f5',
          data: this.data
        }
      ]

    }, this.options)
  }
})
</script>