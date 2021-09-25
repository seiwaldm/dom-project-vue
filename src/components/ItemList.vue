// quasi eine generische Liste von Items - keine extra Logik/Funktion // lädt
Strings/Daten aus dem vuex-store (this.$store.state) und zeigt sie als Liste an

<template>
  <ul class="tabcontent list-group active">
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
  props: ["name"],
  components: { SingleItem },
  computed: {
    list() {
      return this.$store.getters.getListByName(this.name).list;
    },
  },
};
</script>

<style scoped></style>
