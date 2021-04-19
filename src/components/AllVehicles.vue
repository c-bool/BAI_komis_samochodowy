<template>
  <div class="component-container">
    <h1>List of available cars:</h1>
    <div class="row" v-for="i in Math.ceil(brand_list.length / 5)" :key="i.id">
      <span v-for="item in brand_list.slice((i - 1) * 5, i * 5)" :key="item.id">
        <div class="menu-item">
          <a href="#"
            ><router-link
              :to="{
                name: 'vehicle-mark',
                params: { markName: item, carsdata: JSON.stringify(cars) },
              }"
              >{{ item }}</router-link
            ></a
          >
        </div>
      </span>
    </div>
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
    };
  },
  methods: {
    make_list() {
      for (var element of this.cars) {
        // console.log(element)
        this.brand_list.indexOf(element.Make) === -1
          ? this.brand_list.push(element.Make)
          : null;
      }
    },
  },
  created() {
    this.make_list();
  },
};
</script>

<style scoped>
span {
  display: table;
  margin: 0 auto;
}

.row {
  border: solid 1px #404040;
  padding: 10px;
    text-align: left; 

}
</style>
