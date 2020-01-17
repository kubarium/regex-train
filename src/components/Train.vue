<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <locomotive />
      </v-col>
      <v-col>
        <wagons />
      </v-col>
      <v-col cols="2">
        <caboose />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Locomotive from "./Locomotive";
import Wagons from "./Wagons";
import Caboose from "./Caboose";
export default {
  name: "train",
  components: { Locomotive, Wagons, Caboose },
  data: () => ({}),
  created() {
    this.$store.commit("updateCaboose");
  }
};
</script>
