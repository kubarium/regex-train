<template>
  <v-container>
    <h2>
      You've arrived!
    </h2>
    <v-textarea filled :value="$store.state.caboose" />
    <v-btn @click="copyToClipboard"><v-icon left>far fa-copy</v-icon> Copy</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "caboose",
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.$store.state.caboose);
    }
  }
};
</script>

<style></style>
