<template>
  <main class="card card-body main-section">
    <TheControlSection></TheControlSection>

    <div class="list-info" v-if="lists.length > 0">
      <div class="tab">
        <TheListTabs
          v-for="item in lists"
          :key="item.name"
          :name="item.name"
          :active="item.active"
        ></TheListTabs>
      </div>
      <ItemList :name="activeList"></ItemList>
    </div>
  </main>
</template>

<script>
import ItemList from "./ItemList.vue";
import TheListTabs from "./TheListTabs.vue";
import TheControlSection from "./TheControlSection.vue";

export default {
  components: { ItemList, TheControlSection, TheListTabs },
  computed: {
    lists() {
      return this.$store.state.lists;
    },
    activeList() {
      return this.$store.getters.getActiveList.name;
    },
  },
};
</script>

<style scoped>
.main-section {
  grid-area: 2 / 2;
  display: grid;
}
</style>
