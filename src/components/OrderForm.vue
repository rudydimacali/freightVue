<template>
  <div id="OrderFormContainer">
    <h1>Freight Train Order Form</h1>
    <form id="OrderForm">
      <select v-model="parentWagonType" @change="subWagonType = parentWagonType">
        <option v-for="(type, index) in wagonTypes" :value="type" :key="index">{{ type }}</option>
      </select>
      <select v-model="subWagonType" v-if="parentWagonType === 'Covered'">
        <option v-for="(type, index) in coveredTypes" :value="type" :key="index">{{ type }}</option>
      </select>
      <select v-model="subWagonType" v-if="parentWagonType === 'Tank'">
        <option v-for="(type, index) in tankTypes" :value="type" :key="index">{{ type }}</option>
      </select>
    </form>
    <TrainRender :wagons="wagons"/>
  </div>
</template>


<script>
import TrainRender from './TrainRender.vue';

export default {
  name: 'OrderForm',
  data() {
    return {
      wagons: ['Test'],
      wagonTypes: ['Open', 'Covered', 'Flat', 'Tank'],
      coveredTypes: ['Regular', 'Refrigerated', 'Livestock'],
      tankTypes: ['Liquid', 'Gas', 'Refrigerated Liquid', 'Refrigerated Gas'],
      parentWagonType: 'Open',
      subWagonType: 'Open',
    };
  },
  methods: {
  },
  components: {
    TrainRender,
  },
};


</script>

<style scoped>
</style>
