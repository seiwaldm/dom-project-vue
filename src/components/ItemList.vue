// quasi eine generische Liste von Items - keine extra Logik/Funktion // lädt
Strings/Daten aus dem vuex-store (this.$store.state) und zeigt sie als Liste an

<template>
  <ul v-if="visible" class="tabcontent list-group active">
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
  props: ["name", "list"],
  components: { SingleItem },
  computed: {
    visible() {
      return this.name === this.$store.state.activeList;
    },
  },
};
</script>

<style scoped></style>
