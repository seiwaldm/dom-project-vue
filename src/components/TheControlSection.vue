//das Formular zum Hinzufügen von Items //zusätzlich zur Verbindung mit vuex
lokales Datenfeld

<template>
  <section class="control-section">
    <div class="addItems">
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
    </div>
    <div class="addLists">
      <button id="newList" class="btn btn-dark" @click="addList">
        + New List
      </button>
      <button id="deleteList" class="btn btn-dark" @click="deleteList">
        Delete List
      </button>
    </div>
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
    deleteList() {
      if (confirm("Liste wirklich löschen?")) {
        this.$store.dispatch("deleteList");
      }
    },
    addList() {
      const listName = prompt("Name der Liste:");
      this.$store.dispatch("addList", listName);
    },
  },
};
</script>

<style scoped>
.control-section {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.new-item {
  margin-right: 20px;
}

.addLists {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
