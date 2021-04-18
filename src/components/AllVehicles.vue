<template>
    <h1>Display all vehicles...</h1>
    <div>
        <table style="width: 80%;">
            <tr>
                <th>Make</th>
                <th>Model</th>
            </tr>
            <tr v-for="item in cars" :key="item.id">
                <td>{{ item.Make }}</td>
                <td>{{ item.Model }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { LoadCars } from '../mixins/GetData.js';

export default{
    mixins: [LoadCars],
    data() {
        return {
            cars: null,
            error_occured: false,
            loading_page: true,
        }
    },
    created() {
        this.loadCars();
    }
}
</script>
