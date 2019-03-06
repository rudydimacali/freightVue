<template>
  <div id="TrainRender">
    <ol>
      <li v-for="(trains, index) in wagons" :key="index">{{ trains }}</li>
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
