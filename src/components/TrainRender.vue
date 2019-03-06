<template>
  <div id="TrainRender">
    <ol>
      <li v-for="trains in wagons">{{ trains }}</li>
      </ol>
  </div>
</template>


<script>
export default {
  name: 'TrainRender',
  props: {
    wagons: {
      type: Array,
      required: true,
    },
  },
  methods: {
  },
};


</script>

<style scoped>
</style>
