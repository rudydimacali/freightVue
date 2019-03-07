<template>
  <div id="OrderFormContainer">
    <h1>Freight Train Order Form</h1>
    <form id="OrderForm" v-if="!completed">
      <select v-model="parentWagonType" @change="changeWagon">
        <option v-for="(type, index) in wagonTypes" :value="type" :key="index">{{ type }}</option>
      </select>
      <select v-model="subWagonType" v-if="parentWagonType === 'Covered'">
        <option v-for="(type, index) in coveredTypes" :value="type" :key="index">{{ type }}</option>
      </select>
      <select v-model="subWagonType" v-if="parentWagonType === 'Tank'">
        <option v-for="(type, index) in tankTypes" :value="type" :key="index">{{ type }}</option>
      </select>
      <button class="addWagon" v-on:click.prevent="addWagon">Add Wagon</button>
    </form>
    <TrainRender :wagons="wagons" :completed="completed"/>
    <button v-if="!completed" class="completeOrder" v-on:click.prevent="completeOrder">Complete Order</button>
    <button v-if="completed" class="orderAgain" v-on:click.prevent="orderAgain">Create New Order</button>
  </div>
</template>

<script>
import TrainRender from './TrainRender.vue';
import serverBus from '../app';

export default {
  name: 'OrderForm',
  data() {
    return {
      wagons: [],
      wagonTypes: ['Open', 'Covered', 'Flat', 'Tank'],
      coveredTypes: ['Regular', 'Refrigerated', 'Livestock'],
      tankTypes: ['Liquid', 'Gas', 'Refrigerated Liquid', 'Refrigerated Gas'],
      parentWagonType: 'Open',
      subWagonType: 'Open',
      previousOrder: [],
      completed: false,
    };
  },
  methods: {
    addWagon() {
      this.wagons.push(this.subWagonType);
    },
    changeWagon() {
      if (this.parentWagonType === 'Covered') this.subWagonType = 'Regular';
      if (this.parentWagonType === 'Tank') this.subWagonType = 'Liquid';
      if (this.parentWagonType === 'Open' || this.parentWagonType === 'Flat') this.subWagonType = this.parentWagonType;
    },
    completeOrder() {
      this.completed = true;
    },
    orderAgain() {
      this.wagons = [];
      this.completed = false;
    },
  },
  components: {
    TrainRender,
  },
  created() {
    serverBus.$on('deleteWagon', (wagonIndex) => {
      this.wagons.splice(wagonIndex, 1);
    });
  },
};

</script>

<style scoped>
</style>
