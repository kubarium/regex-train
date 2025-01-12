<script setup>
  import { computed } from "vue";
  import { Position, Handle } from "@vue-flow/core";
  import { Checkbox } from "primevue";

  const props = defineProps({
    // position: {
    //   type: Object,
    //   required: true,
    // },
    id: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  });

  // const x = computed(() => `${Math.round(props.position.x)}px`);
  // const y = computed(() => `${Math.round(props.position.y)}px`);
</script>

<template>
  <div class="vue-flow__node-default">
    <div>{{ props.data.label }} Yebebo</div>
    <div>
      {{ props.data.flags }}
    </div>
    <div class="flex items-center" v-for="flag of props.data.flags" :key="flag.key">
      {{ props.data.flags[flag.key] }}
      {{ flag }}
      <Checkbox :inputId="flag" name="flag" :value="flag.value" />
      <label :for="flag.key"> {{ flag.value }} </label>
      <!-- <Checkbox inputId="i" name="flag" value="i" />
      <label for="i"> i </label>
      <Checkbox inputId="m" name="flag" value="m" />
      <label for="m"> m </label> -->
    </div>
  </div>
  <Handle type="target" :position="Position.Top" />
  <Handle type="source" :position="Position.Bottom" />
</template>
