// quasi eine generische Liste von Items - keine extra Logik/Funktion // lädt
Strings/Daten aus dem vuex-store (this.$store.state) und zeigt sie als Liste an

<template>
  <ul class="tabcontent list-group">
    <h2>Items</h2>
    <SingleItem
      v-for="item in list"
      :key="item.name"
      :name="item.name"
    ></SingleItem>
  </ul>
</template>

<script>
import SingleItem from "./SingleItem.vue";

export default {
  components: { SingleItem },
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
};
</script>

<style scoped></style>
