<script setup>
  import { Panel, useVueFlow, VueFlow } from "@vue-flow/core";
  import { Button, Card } from "primevue";
  import { ref } from "vue";
  import SpecialNode from "./SpecialNode.vue";
  import SpecialEdge from "./SpecialEdge.vue";

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
  const { addNodes } = useVueFlow();

  function generateRandomNode() {
    nodes.value.push({
      id: Date.now().toString(),
      position: { x: Math.random() * 500, y: Math.random() * 500 },
      label: "Random Node",
    });
  }

  function onAddNode() {
    // add a single node to the graph
    addNodes(generateRandomNode());
  }
</script>
<template>
  <div class="w-screen h-screen">
    <VueFlow :nodes="nodes" :edges="edges">
      <!-- <template #node-special="specialNodeProps">
        <SpecialNode v-bind="specialNodeProps" />
      </template>

      <template #edge-special="specialEdgeProps">
        <SpecialEdge v-bind="specialEdgeProps" />
      </template> -->
      <Panel>
        <button type="button" @click="onAddNode">Add a node</button>
      </Panel>
    </VueFlow>
  </div>
</template>

<style></style>
