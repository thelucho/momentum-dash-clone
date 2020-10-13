<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import "remixicon/fonts/remixicon.css";

export default {
  name: "App",
  components: {
    Dashboard,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>
