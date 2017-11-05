<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from './components/common/appHeader'
export default {
  name: 'app',
  components: {
    appHeader: appHeader
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

h1, h2, h3, h4, h5, h6, p {
  font-family: "Roboto";
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
 }

body {
  width: 100%;
  margin: 0px;
  padding: 0px;
  background-color: rgba(74, 71, 71, 0.06);
}
</style>