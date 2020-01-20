<template>
  <v-container class="fill-height justify-center">
    <v-row class="fill-height">
      <v-col class="d-flex flex-column">
        <h2>
          You've arrived!
        </h2>
        <v-textarea outlined :value="$store.state.caboose" />
        <v-btn small @click="copyToClipboard"><v-icon left>far fa-copy</v-icon> Copy</v-btn>
      </v-col>
    </v-row>
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

<style scoped>
/deep/ textarea {
  align-self: stretch;
  display: flex;
}
/deep/ .v-input__slot {
  height: 100%;
}
/deep/ .v-input__control {
  align-self: stretch;
}
</style>
