<template>
  <div id="TrainRender">
    <draggable v-if="!completed" v-model="wagons" @start="drag=true" @end="drag=false">
      <h4 v-if="wagons.length > 0">Click and Drag to Reorder Carts</h4>
      <div class="dragItem" v-for="(trains, index) in wagons" :key="index" :value="index">{{ index + 1 }}. {{ trains }}
        <button class="deleteWagon" :value="index" v-on:click.prevent="deleteWagon">Delete</button>
      </div>
    </draggable>
    <div id="orderContainer" v-if="completed">
      <img id="train" alt="Train Head Clip Art" class="orderedWagon" v-bind:src="'./src/img/' + train" />
      <div class="orderedWagon" v-for="(trains, index) in wagons" :key="index" :value="index">
        <img class="wagon" alt="Train Wagon Clip Art" v-bind:src="'./src/img/' + wagon" />
        <div class="wagonText">{{ index + 1 }}. {{ trains }}</div>
      </div>
    </div>
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
    completed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      train: 'train.png',
      wagon: 'wagon.png',
    };
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

.wagonText {
  margin-top: -70%;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
}

.wagon {
  margin-top: 50%;
  width: 100%;
  height: 50%;
}

.orderedWagon {
  width: 150px;
  height: 300px;
  z-index: -1;
}

#train {
  width: 300px;
  height: 300px;
}

#orderContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
}

.dragItem:hover {
  cursor: pointer;
}

</style>
