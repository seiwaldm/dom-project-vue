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
  props: ["name"],

  computed: {
    active() {
      return this.$store.state.activeList === this.name;
    },
  },
  methods: {
    setActive(event) {
      this.$store.dispatch("setActiveList", event.target.innerText);
    },
  },
};
</script>

<style scoped>
.btn {
  border-radius: 0;
}
</style>
