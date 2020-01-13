<template>
  <v-container>
    <v-row>
      <locomotive />
    </v-row>
    <v-row>
      <wagons />
    </v-row>
    <v-row>
      <caboose />
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
  data: () => ({})
};
</script>
