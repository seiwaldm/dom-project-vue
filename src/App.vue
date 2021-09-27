<template>
  <TheHeader></TheHeader>
  <TheMainSection></TheMainSection>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheMainSection from "./components/TheMainSection.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMainSection,
  },
  beforeCreate() {
    this.$store.dispatch("bindListsRef");
  },
};
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css");

#app {
  display: grid;
  grid-template-columns: 10vw 80vw 10vw;
  grid-template-rows: 10vh;
  grid-row-gap: 20px;
}
</style>
