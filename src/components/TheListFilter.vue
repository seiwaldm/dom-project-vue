//legt den Filter im this.$store.state fest //verwendet get() und set(value) für
die Kombination von v-model mit vuex
//(https://next.vuex.vuejs.org/guide/forms.html#two-way-computed-property)

<template>
  <input
    type="text"
    class="form-control"
    v-model="filter"
    placeholder="Search Items..."
  />
</template>

<script>
export default {
  computed: {
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(value) {
        this.$store.dispatch("updateFilter", value);
      },
    },
  },
};
</script>

<style scoped></style>
