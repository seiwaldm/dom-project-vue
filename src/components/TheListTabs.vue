<template>
  <button
    class="tablinks btn"
    :class="{ 'btn-dark': active, 'btn-outline-dark': !active }"
    @click="setActive"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  props: ["name", "active"],
  methods: {
    setActive() {
      this.$store.dispatch("setActive", this.name);
    },
  },
};
</script>

<style scoped>
.btn {
  border-radius: 0;
}
</style>
