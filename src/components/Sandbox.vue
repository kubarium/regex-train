<script setup>
  import { Panel, useVueFlow, VueFlow } from "@vue-flow/core";
  import { Background } from "@vue-flow/background";
  import { MiniMap } from "@vue-flow/minimap";

  import "@vue-flow/minimap/dist/style.css";

  import { ref } from "vue";
  import Wagon from "./Wagon.vue";
  import SpecialEdge from "./SpecialEdge.vue";

  import { useStore } from "../store";

  const store = useStore();

  const nodes = ref([
    // an input node, specified by using `type: 'input'`
    {
      id: "1",
      type: "input",
      position: { x: 250, y: 5 },
      // all nodes can have a data object containing any data you want to pass to the node
      // a label can property can be used for default nodes
      data: { label: "Departure" },
    },

    // default node, you can omit `type: 'default'` as it's the fallback type
    {
      id: "2",
      position: { x: 100, y: 100 },
      data: { label: "Sikko 2" },
    },

    // An output node, specified by using `type: 'output'`
    {
      id: "3",
      type: "output",
      position: { x: 400, y: 200 },
      data: { label: "Delilo 3" },
    },
  ]);

  // these are our edges
  const edges = ref([
    // default bezier edge
    // consists of an edge id, source node id and target node id
    {
      id: "e1->2",
      source: "1",
      target: "2",
    },

    // set `animated: true` to create an animated edge path
    {
      id: "e2->3",
      source: "2",
      target: "3",
      animated: true,
    },
  ]);
  const { onInit, findNode, snapToGrid, fitView } = useVueFlow();

  snapToGrid.value = true;

  onInit((instance) => {
    // `instance` is the same type as the return of `useVueFlow` (VueFlowStore)
    // fitView();
  });
</script>
<template>
  <!-- flex w-full h-full -->
  <div class="">
    <VueFlow :nodes="store.nodes" :edges="store.edges" fit-view-on-init>
      <template #node-wagon="props">
        <Wagon :id="props.id" :data="props.data" />
      </template>
      <!--


      <template #edge-special="specialEdgeProps">
        <SpecialEdge v-bind="specialEdgeProps" />
      </template> -->
      <Background />
      <MiniMap pannable zoomable />
    </VueFlow>
  </div>
</template>

<style></style>
