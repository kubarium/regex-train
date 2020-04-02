<template>
  <v-container class="node my-2">
    <v-row>
      <v-col xl="1" lg="2" md="2" sm="3">
        <h3 class="text-center">Controls</h3>
        <v-divider />
        <v-container>
          <v-row class="d-flex justify-space-around mb-3">
            <v-btn x-small fab color="green white--text" @click="$store.dispatch('addWagon', index)">
              <v-icon>fas fa-plus</v-icon>
            </v-btn>
            <v-btn x-small fab color="red white--text" @click="$store.dispatch('removeWagon', index)" :disabled="first">
              <v-icon>fas fa-minus</v-icon>
            </v-btn>
          </v-row>
          <v-row class="d-flex justify-space-around mb-3">
            <v-btn
              x-small
              fab
              color="primary--text"
              :disabled="first"
              @click="$store.dispatch('moveWagon', { direction: 'up', index })"
            >
              <v-icon>fas fa-chevron-up</v-icon>
            </v-btn>
            <v-btn
              x-small
              fab
              color="primary--text"
              :disabled="last"
              @click="$store.dispatch('moveWagon', { direction: 'down', index })"
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
              :value="regexNode.pattern != null && decodeURI(regexNode.pattern)"
              @input="updatePattern"
            />
            <span class="headline">/</span>
            <v-checkbox
              v-for="flag in ['g', 'i', 'm']"
              :key="flag"
              dense
              hide-details
              class="mx-1 my-0"
              :disabled="!regexNode.active"
              v-model="$store.state.wagons[index].flags[flag]"
              @change="updateFlag"
              :label="`(${flag})`"
            />
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
              :value="decodeURI(regexNode.replace)"
              @input="updateReplace"
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
    props: { regexNode: Object, index: Number, first: Boolean, last: Boolean },
    data: () => ({}),
    methods: {
      updateFlag(value) {
        this.$store.dispatch("toggleFlag", { value, index: this.index });
      },
      updatePattern(value) {
        this.$store.dispatch("updatePattern", { value, index: this.index });
      },
      updateReplace(value) {
        this.$store.dispatch("updateReplace", { value, index: this.index });
      }
    }
  };
</script>

<style>
  .node {
    border-radius: 3px;
    border: 1px solid #e6e6e6;
  }
</style>
