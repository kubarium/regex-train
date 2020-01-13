<template>
  <v-container>
    <h2>
      Add wagons
    </h2>
    <wagon v-for="(wagon, index) in $store.state.wagons" :key="index" :index="index" :regexNode="wagon" />
  </v-container>
</template>

<script>
import Wagon from "./Wagon";
export default { name: "wagons", components: { Wagon } };
</script>
