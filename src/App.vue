<template>
  <v-app>
    <v-app-bar app color="primary" dark class="text-center">
      <div class="d-flex align-center">
        <h1>
          RegEx Train
        </h1>
      </div>

      <v-spacer></v-spacer>

      <instructions />
    </v-app-bar>

    <v-content>
      <train />
    </v-content>
  </v-app>
</template>

<script>
  import Train from "./components/Train";
  import Instructions from "./components/Instructions";

  export default {
    name: "App",

    components: {
      Train,
      Instructions
    },

    mounted() {
      this.$store.commit("fetchWagons");
    }
  };
</script>
