<script setup>
  import { Button, Toolbar } from "primevue";
</script>

<template>
  <Toolbar class="flex m-4">
    <template #start>
      <h1 class="text-xl font-bold">Regex Train</h1>
    </template>

    <template #center> </template>

    <template #end>
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
    </template>
  </Toolbar>
</template>

<style scoped></style>
