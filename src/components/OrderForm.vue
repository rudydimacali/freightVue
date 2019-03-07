<template>
  <div id="OrderFormContainer">
    <h1>Rudy's Train Wholesale</h1>
    <form id="OrderForm" v-if="!completed">
      <div>
        <label for='parentWagonType'>Wagon Type:</label>
        <select v-model="parentWagonType" @change="changeWagon">
          <option v-for="(type, index) in wagonTypes" :value="type" :key="index">{{ type }}</option>
        </select>
      </div>
      <div v-if="parentWagonType === 'Covered'">
        <label for='subWagonType'>Type of Covered Wagon:</label>
        <select v-model="subWagonType">
          <option v-for="(type, index) in coveredTypes" :value="type" :key="index">{{ type }}</option>
        </select>
      </div>
      <div v-if="parentWagonType === 'Tank'">
        <label for='subWagonType'>Type of Tank Wagon:</label>
        <select v-model="subWagonType">
          <option v-for="(type, index) in tankTypes" :value="type" :key="index">{{ type }}</option>
        </select>
      </div>
      <button class="addWagon" v-on:click.prevent="addWagon">Add Wagon</button>
    </form>
    <TrainRender :wagons="wagons" :completed="completed"/>
    <button v-if="!completed" class="completeOrder" v-on:click.prevent="completeOrder">
      Complete Order
    </button>
    <button v-if="completed" class="orderAgain" v-on:click.prevent="orderAgain">
      Create New Order
    </button>
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
      if (this.parentWagonType === this.subWagonType) {
        this.wagons.push(this.subWagonType);
      } else {
        this.wagons.push(`${this.parentWagonType} - ${this.subWagonType}`);
      }
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

form {
  box-shadow: 10px 10px 34px 7px rgba(0,0,0,0.16);
  max-width: 75%;
  margin: 0 auto;
  border-radius: 7px;
}

div {
  margin-bottom: 1rem;
  padding: 15px;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}


select {
  display: block;
  width: 50%;
  height: calc(2.8125rem + 0);
  padding: 0.75rem 2rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
  background-color: #00f7ff41;
  background-clip: padding-box;
  border: 0 solid #ced4da;
  border-radius: 0;
  margin: 0 auto;
}

button {
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.4rem;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  font-weight: 400;
  background-color: rgba(86, 204, 157, 0.582);
  border-color: rgba(86, 204, 157, 0.582);
  margin-bottom: 0.5rem;
}

</style>
