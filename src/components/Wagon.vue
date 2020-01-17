<template>
  <v-container class="node my-2">
    <v-row>
      <v-col xl="1" lg="2" md="2" sm="3">
        <h3 class="text-center">Controls</h3>
        <v-divider />
        <v-container>
          <v-row class="d-flex justify-space-around mb-3">
            <v-btn x-small fab color="green" @click="$store.commit('addWagon')">
              <v-icon>fas fa-plus</v-icon>
            </v-btn>
            <v-btn x-small fab color="red" @click="$store.dispatch('removeWagon', index)" :disabled="first">
              <v-icon>fas fa-minus</v-icon>
            </v-btn>
          </v-row>
          <v-row class="d-flex justify-space-around mb-3">
            <v-btn
              x-small
              fab
              color="primary--text"
              @click="$store.dispatch('moveWagon', { direction: 'up', index })"
              :disabled="first"
            >
              <v-icon>fas fa-chevron-up</v-icon>
            </v-btn>
            <v-btn
              x-small
              fab
              color="primary--text"
              @click="$store.dispatch('moveWagon', { direction: 'down', index })"
              :disabled="last"
            >
              <v-icon>fas fa-chevron-down</v-icon>
            </v-btn>
          </v-row>
          <v-row class="d-flex justify-space-around mb-3">
            <v-btn icon @click="$store.dispatch('toggleWagon', index)">
              <v-icon v-if="regexNode.active">fas fa-check-square</v-icon>
              <v-icon v-else>far fa-square</v-icon>
            </v-btn>
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
              :value="regexNode.pattern !== null && decodeURI(regexNode.pattern)"
            />
            <span class="headline">/</span>
            <label v-for="flag in ['g', 'i', 'm']" :key="flag">
              <v-checkbox
                dense
                hide-details
                class="mx-1 my-0"
                :disabled="!regexNode.active"
                :value="regexNode.flags[flag]"
                :label="`(${flag})`"
                @change="$store.dispatch('toggleFlag', { flag, index })"
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
              placeholder="place the text you want to use as replacement: $1, some other text or leave it empty"
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
    updatePattern() {},
    updateReplace() {}
  }
};
</script>

<style>
.node {
  border-radius: 3px;
  border: 1px solid #e6e6e6;
}
</style>
