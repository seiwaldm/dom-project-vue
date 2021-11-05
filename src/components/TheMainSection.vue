<template>
  <main class="card card-body main-section">
    <TheControlSection></TheControlSection>

    <div class="list-info" v-if="lists.length > 0">
      <div class="tab">
        <TheListTabs
          v-for="item in lists"
          :key="item.name"
          :name="item.name"
        ></TheListTabs>
      </div>
      <ItemList
        v-for="item in lists"
        :key="item.name"
        :name="item.name"
        :list="item.list"
      ></ItemList>
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
      return this.$store.state.activeList;
    },
  },
  mounted() {
    this.$store.dispatch("loadLists");
  },
};
</script>

<style scoped>
.main-section {
  grid-area: 2 / 2;
  display: grid;
}
.btn {
  border-radius: 0;
}
</style>
