//das Formular zum Hinzufügen von Items //zusätzlich zur Verbindung mit vuex
lokales Datenfeld

<template>
  <section class="form-section">
    <h2>Add Item</h2>
    <form action="" class="form-inline">
      <input
        type="text"
        name="newItem"
        class="form-control new-item"
        v-model="newItem"
      />
      <input
        type="submit"
        value="Submit"
        class="btn btn-dark"
        @click.prevent="addItem"
      />
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
    };
  },
  methods: {
    addItem() {
      if (this.newItem !== "") {
        this.$store.dispatch("addItem", this.newItem);
        this.newItem = "";
      }
    },
  },
};
</script>

<style scoped>
.form-section {
  margin-bottom: 20px;
}
.new-item {
  margin-right: 20px;
}
</style>
