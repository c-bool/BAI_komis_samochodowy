<template>
  <div id="searchTool">
    <h2>Find your new car</h2>
    <div class="form">
      <p>
        <b>Brand:</b><br />
        <select v-model="search.Make">
          <option disabled value="">Choose:</option>
          <option v-for="item in brand_list" :key="item.id">{{ item }}</option>
        </select>
      </p>
      <p>
        <b>Condition:</b><br />
        <input type="checkbox" id="s1" value="New" v-model="search.Status" />
        <label for="s1">New</label><br />
        <input type="checkbox" id="s2" value="Used" v-model="search.Status" />
        <label for="s2">Used</label><br />
      </p>
      <p>
        <b>Fuel type:</b><br />
        <input
          type="checkbox"
          id="f1"
          value="Gasoline"
          v-model="search.FuelType"
        />
        <label for="f1">Gasoline</label><br />
        <input
          type="checkbox"
          id="f2"
          value="Hybrid"
          v-model="search.FuelType"
        />
        <label for="f2">Hybrid</label><br />
        <input
          type="checkbox"
          id="f3"
          value="Diesel"
          v-model="search.FuelType"
        />
        <label for="f3">Diesel</label><br />
        <input
          type="checkbox"
          id="f4"
          value="Electric"
          v-model="search.FuelType"
        />
        <label for="f4">Electric</label><br />
        <input
          type="checkbox"
          id="f5"
          value="Gasoline + LPG"
          v-model="search.FuelType"
        />
        <label for="f5">Gasoline + LPG</label><br />
      </p>
      <p>
        <b>Drive</b><br />
        <input type="checkbox" id="d1" value="Front" v-model="search.Drive" />
        <label for="d1">Front wheels</label><br />
        <input type="checkbox" id="d2" value="Back" v-model="search.Drive" />
        <label for="d2">Back wheels</label><br />
        <input type="checkbox" id="d3" value="4x4" v-model="search.Drive" />
        <label for="d3">4x4</label><br />
      </p>
      <p>
        <b>Gearbox</b><br />
        <input
          type="checkbox"
          id="g1"
          value="Automatic"
          v-model="search.Gearbox"
        />
        <label for="g1">Automatic</label><br />
        <input
          type="checkbox"
          id="g2"
          value="Manual"
          v-model="search.Gearbox"
        />
        <label for="g2">Manual</label><br />
      </p>
      <button class="but_filt" v-on:click="filter(), search.toggle = true">Search</button>
    </div>
    <div v-if="search.toggle">
      <div v-if="filteredCars === null">No results</div>
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
          <tr v-for="item in filteredCars" :key="item.id">
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
    </div>
    <div v-else>Enter conditions and click search button</div>
  </div>
</template>

<script>
export default {
  props: {
    cars: {
      type: undefined,
      required: true,
    },
  },
  data() {
    return {
      brand_list: [],
      search: {
        Make: "",
        Status: [],
        FuelType: [],
        Drive: [],
        Gearbox: [],
        toggle: false,
      },
      filteredCars: [],
    };
  },
  methods: {
    make_list() {
      for (var element of this.cars) {
        this.brand_list.indexOf(element.Make) === -1
          ? this.brand_list.push(element.Make)
          : null;
      }
    },
    filter: function() {
      this.filteredCars = []
      for (var element of this.cars){
        if ((this.search.Make === element.Make || this.search.Make === "") && (this.search.Status.indexOf(element.Status) > -1 || this.search.Status.length === 0) && (this.search.FuelType.indexOf(element.FuelType) > -1 || this.search.FuelType.length === 0) && (this.search.Drive.indexOf(element.Drive) > -1 || this.search.Drive.length === 0) && (this.search.Gearbox.indexOf(element.Gearbox) > -1 || this.search.Gearbox.length === 0) ){
          this.filteredCars.push(element)
        }
      }
      if (this.filteredCars.length === 0){
        this.filteredCars = null
      }
    }
  },
  created() {
    this.make_list();
  },
};
</script>
<style>
  .form {
    margin-left: 30px;
    margin-top: 30px;
    padding: 5px;
    background: #e1e6e2;
    border: none;
    width: 5;
}
  .but_filt {
    border: none;
    background: hotpink;
    padding: 10px;
    border: solid;
}
table.table {
    margin-left: 30px;
    margin-right: auto;
    margin-top: 10px;
    background-color: #dddddd;
}
</style>