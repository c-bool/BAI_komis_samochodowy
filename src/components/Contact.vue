<template>
  <body>
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
      <div>
        <p class="text">
        by:  Daniel Drużkowski | Paweł Cebula | Michał Antos | Jakub Abramczyk<br />
        </p>
      </div>
  </body>
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
* {
  margin: 0;
  padding: 0;
}

.text {
      display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(14, 13, 13);
  margin-top: 70px;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}
</style>