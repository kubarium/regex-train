<script setup>
  import { computed } from "vue";
  import { Position, Handle } from "@vue-flow/core";
  import { Checkbox, IconField } from "primevue";
  import { NodeResizer } from "@vue-flow/node-resizer";

  import "@vue-flow/node-resizer/dist/style.css";

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
  <div class="">
    <div>{{ props.data.label }} Yebebo</div>
    <IconField>
      <InputIcon>
        <i class="pi pi-pencil" />
      </InputIcon>
      <FloatLabel variant="in">
        <InputText :id="'wagon_' + props.id" placeholder="" />
        <label>Write your pattern here:</label>
      </FloatLabel>
    </IconField>
    <div>
      {{ props.id }}
    </div>
    <div class="flex items-center" v-for="(value, key) of props.data.flags" :key="key">
      <h3>{{ value }} - {{ key }}</h3>
      <Checkbox :inputId="props.id + '-' + key" name="flag" :value="value" v-model="props.data.flags[key]" binary />
      <label :for="props.id + '-' + key"> {{ value }} </label>
      <!-- <Checkbox inputId="i" name="flag" value="i" />
      <label for="i"> i </label>
      <Checkbox inputId="m" name="flag" value="m" />
      <label for="m"> m </label> -->
    </div>
  </div>
  <Handle type="target" :position="Position.Top" />
  <Handle type="source" :position="Position.Bottom" />
  <NodeResizer min-width="300" min-height="300" />
</template>

<style>
  .vue-flow__node-wagon {
    border: 1px solid red;
  }
</style>
