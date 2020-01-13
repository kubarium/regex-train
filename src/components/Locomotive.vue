<template>
  <v-container>
    <h2>
      Start your journey here
    </h2>
    <v-textarea filled :value="$store.state.locomotive" />
  </v-container>
</template>

<script>
export default { name: "locomotive" };
</script>

<style></style>
