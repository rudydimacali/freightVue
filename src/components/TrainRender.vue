<template>
  <div id="TrainRender">
    <ol>
      <li v-for="(trains, index) in wagons" :key="index">{{ trains }}
        <button class="deleteWagon" :value="index" v-on:click.prevent="deleteWagon">Delete</button>
      </li>
      </ol>
  </div>
</template>


<script>
import serverBus from '../app';

export default {
  name: 'TrainRender',
  props: {
    wagons: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteWagon(e) {
      serverBus.$emit('deleteWagon', e.target.value);
    },
  },
};


</script>

<style scoped>
</style>
