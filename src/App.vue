<script setup>
  import MissionControl from "./components/MissionControl.vue";
  import Sandbox from "./components/Sandbox.vue";
  import Wagon from "./components/Wagon.vue";
</script>

<template>
  <MissionControl />
  <Sandbox>
    <Wagon />
  </Sandbox>
</template>

<style scoped></style>
