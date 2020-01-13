<template>
  <v-container class="node">
    <v-col>
      <fieldset class="controlsFieldset">
        <legend>Controls</legend>
        <div class="controls">
          <button color="green" onClick="createNode">
            <v-icon>fas fa-plus</v-icon>
          </button>
          <button color="red" onClick="deleteNode" :disabled="first">
            <v-icon>fas fa-minus</v-icon>
          </button>
          <button onClick="moveNode" :disabled="first">
            <v-icon>fas fa-arrow-up</v-icon>
          </button>
          <button onClick="moveNode" :disabled="last">
            <v-icon>fas fa-arrow-down</v-icon>
          </button>
          <button onClick="toggleNode">
            <v-icon v-if="regexNode.active">fas fa-check-square</v-icon>
            <v-icon v-else>fas fa-square</v-icon>
          </button>
        </div>
      </fieldset>
      <div class="flags">
        <label v-for="flag in ['g', 'i', 'm']" :key="flag">
          <v-checkbox
            name="flag"
            :disabled="!regexNode.active"
            :checked="regexNode.flags[flag]"
            onChange="toggleFlag"
          />
          ({{ flag }})
        </label>
      </div>
    </v-col>
    <v-col>
      <v-row>
        <fieldset class="patternFieldset">
          <legend>Pattern</legend>
          <div class="pattern">
            /
            <v-text-field
              name="pattern"
              placeholder="put your pattern here: \d"
              :disabled="!regexNode.active"
              :value="regexNode.pattern !== null && patternStringify(decodeURI(regexNode.pattern))"
              onChange="updatePattern"
            />
            /
          </div>
        </fieldset>
      </v-row>
      <v-row>
        <fieldset class="replaceFieldset">
          <legend>Replace</legend>
          <v-text-field
            class="replace"
            :disabled="!regexNode.active"
            :value="regexNode.replace"
            onChange="updateReplace"
          />
        </fieldset>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "wagon",
  props: { regexNode: { type: Object }, index: Number },
  data: () => ({ first: this.index === 0, last: this.index === this.$store.state.wagons.length - 1 }),
  methods: {
    patternStringify() {},
    deleteNode() {},
    createNode() {},
    toggleNode() {},
    toggleFlag() {},
    updatePattern() {},
    updateReplace() {}
  }
};
</script>

<style>
.node {
  border-radius: 3px;
  background-color: #666;
  /* border: 1px solid rgba(173, 65, 61, .4); */
  text-align: center;
  padding: 8px;
  display: grid;
  grid-gap: 0.5%;
  grid-template-columns: 8% 66% 25%;
  position: relative;
  margin: 10px 0;
  z-index: 0;
  width: 98%;
}
legend {
  font-size: 1.4em;
  border-radius: 3px;
  background: #e2e4e6;
  padding: 2px 6px;
  text-align: left;
}
fieldset {
  padding: 1% 2%;
  border-color: #d0d0d0;
  border-style: solid;
  border-radius: 3px;
  border-width: 1px;
  background: #e2e4e6;
}

.controlsFieldset {
  /* grid-area: 2 / 1 / 2 / 3; */
  /*   */
}
label {
  margin: 0 5px;
  font-size: 1.4em;
}

.pattern {
  font-size: 3.6em;
  display: grid;
  grid-template-columns: 2% 92% 2%;
  grid-gap: 2%;
  margin-bottom: 10px;
}

.pattern input,
.replace {
  color: #444444;
  border-radius: 3px;
  padding: 4px;
  font-size: 2rem;
  border: 0;
  outline: 0;
  height: 32px;
}
.replace {
  width: 96%;
}

.controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  padding: 0;
  border: 0;
  margin: 2px 3px;
  background: transparent;
  color: #007fff;
  outline: 0;
}
button svg {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
.move-up,
.move-down {
  background: white;
}
.clone {
  background: #59ac44;
  color: white;
}
.disable {
  color: #444444;
}
.delete {
  background: rgba(173, 65, 61);
  color: white;
}

:disabled {
  opacity: 0.3;
}
</style>
