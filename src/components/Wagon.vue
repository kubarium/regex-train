<template>
  <v-container class="node my-2">
    <v-row>
      <v-col lg="2">
        <h3>Controls</h3>
        <v-divider />
        <v-container>
          <v-row>
            <v-col class="d-flex align-center justify-space-between">
              <v-btn x-small fab color="green" onClick="createNode">
                <v-icon>fas fa-plus</v-icon>
              </v-btn>
              <v-btn x-small fab color="red" onClick="deleteNode" :disabled="first">
                <v-icon>fas fa-minus</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn x-small fab color="primary--text" onClick="moveNode" :disabled="first">
                <v-icon>fas fa-chevron-up</v-icon>
              </v-btn>
              <v-btn x-small fab color="primary--text" onClick="moveNode" :disabled="last">
                <v-icon>fas fa-chevron-down</v-icon>
              </v-btn>
              <v-btn icon onClick="toggleNode">
                <v-icon v-if="regexNode.active">fas fa-check-square</v-icon>
                <v-icon v-else>fas fa-square</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="flags d-flex align-center justify-space-between"> </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col>
        <h3>Pattern</h3>
        <v-divider />
        <v-container>
          <v-row class="align-start">
            <span class="headline">/</span>
            <v-text-field
              dense
              full-width
              clearable
              hide-details
              placeholder="put your pattern here: \d"
              :disabled="!regexNode.active"
              :value="regexNode.pattern !== null && patternStringify(decodeURI(regexNode.pattern))"
            />
            <span class="headline">/</span>
            <label v-for="flag in ['g', 'i', 'm']" :key="flag">
              <v-checkbox
                dense
                hide-details
                class="mx-1 my-0"
                :disabled="!regexNode.active"
                :checked="regexNode.flags[flag]"
                :label="`(${flag})`"
              />
            </label>
          </v-row>
        </v-container>
        <h3>Replace</h3>
        <v-divider />
        <v-container>
          <v-row>
            <v-text-field
              dense
              full-width
              clearable
              hide-details
              placeholder="place the text you want to use as replacement: $1, some other text or leave empty"
              :disabled="!regexNode.active"
              :value="regexNode.replace"
            />
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "wagon",
  props: { regexNode: { type: Object }, index: Number },
  data: () => ({}),
  created() {
    this.first = this.index === 0;
    this.last = this.index === this.$store.state.wagons.length - 1;
  },
  methods: {
    patternStringify() {},
    deleteNode() {},
    createNode() {},
    toggleNode() {},
    toggleFlag() {
      console.log("sikerler");
    },
    updatePattern() {},
    updateReplace() {}
  }
};
</script>

<style>
.node {
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  /* display: grid;
  grid-gap: 0.5%;
  position: relative; */
}
/* .buttons {
  align-content: center;
  justify-content: space-between;
} */
/* 
.controls {
  border-radius: 3px;
  border-width: 1px solid #d0d0d0;
  background: #e2e4e6;
  position: relative;
}

.patternFieldset {
  width: inherit;
  outline: 1px solid red;
}

.pattern {
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
  border: 0;
  outline: 0;
  height: 32px;
}
.replace1 {
  width: 96%;
}

.controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}


:disabled {
  opacity: 0.3;
} */
</style>
