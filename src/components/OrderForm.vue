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
  </div>
</template>

<script>
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
    };
  },
  methods: {
  },
};


</script>

<style scoped>
</style>
