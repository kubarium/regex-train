<template>
  <v-app>
    <v-app-bar app color="primary" dark class="text-center">
      <div class="d-flex align-center">
        <h1>
          Regex Train
        </h1>
      </div>

      <v-spacer></v-spacer>

      <instructions />
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Instructions from "./components/Instructions";

export default {
  name: "App",

  components: {
    HelloWorld,
    Instructions
  },

  data: () => ({})
};
</script>
