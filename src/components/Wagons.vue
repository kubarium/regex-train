<template>
  <v-container>
    <h2>
      Add wagons
    </h2>
    <div class="wagons">
      <wagon
        v-for="(wagon, index) in $store.state.wagons"
        :key="index"
        :index="index"
        :first="index === 0"
        :last="index === $store.state.wagons.length - 1"
        :regexNode="wagon"
      />
    </div>
  </v-container>
</template>

<script>
import Wagon from "./Wagon";
export default { name: "wagons", components: { Wagon } };
</script>

<style>
.wagons {
  max-height: 80vh;
  overflow: auto;
}
</style>
