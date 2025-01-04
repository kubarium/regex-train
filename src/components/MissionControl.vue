<script setup>
  import { ref } from "vue";
  import Button from "primevue/button";
  import { InputIcon, SplitButton, Toolbar } from "primevue";
  defineProps({
    msg: String,
  });

  const count = ref(2);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <Button label="Submittor" />

    <Toolbar>
      <template #start> Regex Train </template>

      <template #center>
        <Button
          icon="pi pi-plus"
          label="New Wagon"
          severity="success"
          v-tooltip.bottom="{
            value: 'Add a new wagon to your train',
            pt: {
              text: {
                style: {
                  textAlign: 'center',
                },
              },
            },
          }"
        />
        <Button
          icon="pi pi-trash"
          label="Wipe Everything"
          severity="danger"
          v-tooltip.bottom="{
            value: 'Delete all wagons to start fresh',
            pt: {
              text: {
                style: {
                  textAlign: 'center',
                },
              },
            },
          }"
          text
        />
        <Button icon="pi pi-info-circle" severity="info" text />
        <IconField>
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <InputText placeholder="Search" />
        </IconField>
      </template>

      <template #end> <SplitButton label="Save" :model="items"></SplitButton></template>
    </Toolbar>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
