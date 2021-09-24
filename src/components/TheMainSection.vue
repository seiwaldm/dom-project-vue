<template>
  <main class="card card-body main-section">
    <TheAddItemForm></TheAddItemForm>
    <ItemList></ItemList>
  </main>
</template>

<script>
import ItemList from "./ItemList.vue";
import TheAddItemForm from "./TheAddItemForm.vue";

export default {
  components: { ItemList, TheAddItemForm },
};
</script>

<style scoped>
.main-section {
  grid-area: 2 / 2;
  display: grid;
  grid-row-gap: 5px;
}
</style>
