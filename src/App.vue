<script setup>
  import Footer from "./components/Footer.vue";
  import MissionControl from "./components/MissionControl.vue";
  import Sandbox from "./components/Sandbox.vue";
</script>

<template>
  <!-- <div class="grid grid-rows-3 grid-flow-col gap-3"> -->
  <div class="min-h-screen flex flex-col p-3">
    <MissionControl class="" />
    <!-- <div class="">    </div> -->
    <div class="flex-grow grid grid-cols-12 gap-3 my-3">
      <div class="bg-gray-900 p-4 col-span-2">Column 1</div>
      <div class="bg-gray-100 p-4 col-span-10">
        <Sandbox class="w-full h-full" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
