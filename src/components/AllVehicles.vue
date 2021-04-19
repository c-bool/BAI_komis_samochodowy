<template>
  <div class="component-container">
    <h1>List of available cars:</h1>
    <div class="row" v-for="i in Math.ceil(brand_list.length / 5)" :key="i.id">
      <span v-for="item in brand_list.slice((i - 1) * 5, i * 5)" :key="item.id">
        
          <a class="list-group-item list-group-item-action" href="#"
            ><div  class="list-group"><router-link
              :to="{
                name: 'vehicle-mark',
                params: { markName: item, carsdata: JSON.stringify(cars) },
              }"
              >{{ item }}</router-link
            >  </div></a
          >
      
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
  padding: 10px;
}

.row {
  padding: 10px;
  text-align: left; 
  display: table-cell;
}
.component-container {
    margin: auto;
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
}
/* a.list-group-item.list-group-item-action {
    background-color: rgb(59, 59, 59);
} */
.list-group a {
    color: #272727;
    text-decoration: auto;
}
</style>
