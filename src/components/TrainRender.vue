<template>
  <div id="TrainRender">
    <draggable v-model="wagons" @start="drag=true" @end="drag=false">
      <div class="dragItem" v-for="(trains, index) in wagons" :key="index" :value="index">{{ index + 1 }}. {{ trains }}
        <button class="deleteWagon" :value="index" v-on:click.prevent="deleteWagon">Delete</button>
      </div>
    </draggable>
  </div>
</template>


<script>
import draggable from 'vuedraggable';
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
  components: {
    draggable,
  },
};


</script>

<style scoped>

.dragItem:hover {
  cursor: pointer;
}

</style>
