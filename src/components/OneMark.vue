<template>
  <div v-if="filteredMark === null">No results</div>
  <div v-else>
    <table class="table">
      <thead>
        <tr>
          <td><b>Brand</b></td>
          <td><b>Model</b></td>
          <td><b>Year</b></td>
          <td><b>VIN</b></td>
          <td><b>Fuel type</b></td>
          <td><b>Capacity</b></td>
          <td><b>Condition</b></td>
          <td><b>Drive</b></td>
          <td><b>Gearbox</b></td>
          <td><b>Price</b></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredMark" :key="item.id">
          <td>{{ item.Make }}</td>
          <td>{{ item.Model }}</td>
          <td>{{ item.Year }}</td>
          <td>{{ item.VIN }}</td>
          <td>{{ item.FuelType }}</td>
          <td>{{ item.Capacity }}</td>
          <td>{{ item.Status }}</td>
          <td>{{ item.Drive }}</td>
          <td>{{ item.Gearbox }}</td>
          <td>{{ item.Price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    markName: {
      type: undefined,
      required: true,
    },
    carsdata: {
      type: undefined,
      required: true,
    },
  },
  data() {
    return {
      filteredMark: [],
    };
  },
  methods: {
    filter() {
      for (var element of JSON.parse(this.carsdata)) {
        // console.log(element)
        if (this.markName === element.Make) {
          this.filteredMark.push(element);
        }
      }
    },
  },
  created() {
    this.filter();
  },
};
</script>

<style>
table.table {
    margin-left: 30px;
    margin-right: auto;
    margin-top: 10px;
    background-color: #dddddd;
}

</style>