<template>
  <v-container class="fill-height justify-center">
    <v-row class="fill-height">
      <v-col class="d-flex flex-column">
        <h2>
          Start here
        </h2>
        <v-textarea outlined :value="$store.state.locomotive" @input="updateLocomotive" />
        <v-btn small @click="updateLocomotive('')"><v-icon left>fas fa-trash</v-icon> Clear</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "locomotive",
  methods: {
    updateLocomotive(value) {
      this.$store.dispatch("updateLocomotive", value);
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
