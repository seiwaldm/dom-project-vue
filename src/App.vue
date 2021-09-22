<template>
  <TheHeader></TheHeader>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css");

body {
}

#app {
  display: grid;
  grid-template-columns: 10vw 80vw 10vw;
  grid-template-rows: 10vh;
  grid-row-gap: 20px;
}
</style>
