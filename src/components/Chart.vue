<script>
import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'Chart',
  extends: Bar,
  props:{
    labels:{
      type: Array,
      default: null
    },
    data:{
      type: Array,
      default: null
    },
    options:{
      type: Object
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'Number of cars from each brand',
          backgroundColor: '#f87979',
          data: this.data
        }
      ]

    }, this.options)
  }
})
</script>
