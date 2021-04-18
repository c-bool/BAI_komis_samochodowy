<template>
  <h1>Display all vehicles...</h1>
  <div>
    {{ brand_list }}
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
        }
    },
    methods:{ 
        make_list(){
            for (var element of this.cars){
                console.log(element)
                this.brand_list.indexOf(element.Make) === -1 ? this.brand_list.push(element.Make) : null;
            }
        }
    },
    created() {
        this.make_list();
    }
};
</script>

