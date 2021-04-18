<template>
    <h1>I love potatoes :)</h1>
    {{ cars }}
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