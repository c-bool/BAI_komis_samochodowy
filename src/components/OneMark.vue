<template>
    {{ filteredMark }}
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
        }
    },
    data() {
        return {
            filteredMark: [],
        };
    },
    methods: {
        filter() {
            for (var element of JSON.parse(this.carsdata)){
                // console.log(element)
                if (this.markName === element.Make) {
                    this.filteredMark.push(element)
                }
            }
        }
    },
    created() {
        this.filter();
    }
}
</script>
