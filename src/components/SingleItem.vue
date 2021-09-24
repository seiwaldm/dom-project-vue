//ein einfaches Item... //es erhält seinen namen über eine prop (!=computed
property) aus der ItemList //Bei einem Klick auf den X-Button löst es eine
action in vuex aus

<template>
  <li v-if="containsFilter" class="list-group-item">
    {{ name }}
    <button
      class="btn btn-danger btn-sm float-right delete"
      @click="deleteItem"
    >
      X
    </button>
  </li>
</template>

<script>
export default {
  props: ["name"],

  methods: {
    deleteItem() {
      this.$store.dispatch("deleteItem", this.name);
    },
  },

  //schönes Beispiel für computed properties (!= props) und v-if,
  //Vergleiche name des Eintrags mit filter-Variable in vuex
  computed: {
    containsFilter() {
      return this.name
        .toLowerCase()
        .includes(this.$store.state.filter.toLowerCase());
    },
  },
};
</script>

<style scoped></style>
