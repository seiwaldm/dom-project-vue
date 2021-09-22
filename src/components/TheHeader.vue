<template>
  <header class="bg-success text-white">
    <h1>Item Lister</h1>

    <input type="text" class="form-control" placeholder="Search Items..." />
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  grid-column: span 3;
  display: grid;
  grid-template-columns: 40vw 40vw;
  justify-content: center;
  align-items: center;
}
</style>
