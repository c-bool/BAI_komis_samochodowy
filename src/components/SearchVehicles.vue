<template>
  <div id="searchTool">
    <h2>Wyszukaj swoj nowy samochod</h2>
    <div class="form">
      <p>
        Marka samochodu:<br />
        <select v-model="search.Make">
          <option disabled value="">Wybierz:</option>
          <option v-for="item in brand_list" :key="item.id">{{ item }}</option>
        </select>
      </p>
      <p>
        Stan:<br />
        <input type="checkbox" id="s1" value="New" v-model="search.Status" />
        <label for="s1">Nowy</label><br />
        <input type="checkbox" id="s2" value="Used" v-model="search.Status" />
        <label for="s2">Uzywany</label><br />
      </p>
      <p>
        Rodzaj paliwa:<br />
        <input
          type="checkbox"
          id="f1"
          value="Gasoline"
          v-model="search.FuelType"
        />
        <label for="f1">Benzyna</label><br />
        <input
          type="checkbox"
          id="f2"
          value="Hybrid"
          v-model="search.FuelType"
        />
        <label for="f2">Hybryda</label><br />
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
        <label for="f4">Elektryczny</label><br />
        <input
          type="checkbox"
          id="f5"
          value="Gasoline + LPG"
          v-model="search.FuelType"
        />
        <label for="f5">Benzyna + LPG</label><br />
      </p>
      <p>
        Naped:<br />
        <input type="checkbox" id="d1" value="Front" v-model="search.Drive" />
        <label for="d1">Na przod</label><br />
        <input type="checkbox" id="d2" value="Rear" v-model="search.Drive" />
        <label for="d2">Na tyl</label><br />
        <input type="checkbox" id="d3" value="4x4" v-model="search.Drive" />
        <label for="d3">Na 4 kola</label><br />
      </p>
      <p>
        Skrzynia biegow:<br />
        <input
          type="checkbox"
          id="g1"
          value="Automatic"
          v-model="search.Gearbox"
        />
        <label for="g1">Automatyczna</label><br />
        <input
          type="checkbox"
          id="g2"
          value="Manual"
          v-model="search.Gearbox"
        />
        <label for="g2">Manualna</label><br />
      </p>
      <button v-on:click="filter()">Szukaj</button>
    </div>
      <table class="table">
        <thead>
          <tr>
            <td><b>Marka</b></td>
            <td><b>Model</b></td>
            <td><b>Rocznik</b></td>
            <td><b>VIN</b></td>
            <td><b>Rodzaj paliwa</b></td>
            <td><b>Pojemnosc</b></td>
            <td><b>Stan</b></td>
            <td><b>Rodzaj napedu</b></td>
            <td><b>Skrzynia biegow</b></td>
            <td><b>Cena</b></td>
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
        console.log(element);
        this.brand_list.indexOf(element.Make) === -1
          ? this.brand_list.push(element.Make)
          : null;
      }
    },
    filter: function() {
      this.filteredCars = []
      for (var element of this.cars){
        if ((this.search.Make === element.Make || this.search.Make === "") && (this.search.Status.indexOf(element.Status) > -1 || this.search.Status.length === 0) && (this.search.FuelType.indexOf(element.FuelType) > -1 || this.search.FuelType.length === 0) && (this.search.Drive.indexOf(element.Drive) > -1 || this.search.Drive.length === 0) && (this.search.Gearbox.indexOf(element.Gearbox) > -1 || this.search.Status.length === 0) ){
          this.filteredCars.push(element)
        }
      }
    }
  },
  created() {
    this.make_list();
  },
};
</script>