<template>
  <div id="app">
    <OrderForm/>
  </div>
</template>
<script>

import OrderForm from './components/OrderForm.vue';

export default {
  name: 'App',
  components: {
    OrderForm,
  },
};

</script>
<style>
#app {
  font-family: "myriad-pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #13a7a0;
  margin: 10%;
}
</style>
