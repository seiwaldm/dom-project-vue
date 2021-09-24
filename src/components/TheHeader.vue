//Ein simpler Header. //verwendet die Klasse .app-header für das Styling,
anstatt dem Typ header -> bessere Performance
(https://vuejs.org/v2/style-guide/#Element-selectors-with-scoped-use-with-caution)

<template>
  <header class="app-header bg-success text-white">
    <h1>Item Lister</h1>
    <TheListFilter></TheListFilter>
  </header>
</template>

<script>
import TheListFilter from "./TheListFilter.vue";

export default {
  components: { TheListFilter },
};
</script>

<style scoped>
.app-header {
  grid-column: span 3;
  display: grid;
  grid-template-columns: 40vw 40vw;
  justify-content: center;
  align-items: center;
}
</style>
