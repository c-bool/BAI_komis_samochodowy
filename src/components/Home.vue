<template>
  <div>
    <h1>Global office locations</h1>
    <table class="table">
      <thead>
        <tr>
          <td><b>City | Street</b></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cityStreet" :key="item.id">
          <td>{{ item.city }} | {{ item.street }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    cityStreet: {
      type: undefined,
      required: true,
    },
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