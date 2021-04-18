<template>
    <h1>Display all vehicles...</h1>
    <div>
        {{ cars }}
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
}
</script>

