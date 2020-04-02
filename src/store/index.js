import Vue from "vue";
import Vuex from "vuex";

import { prepareOutput } from "../Utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locomotive: "The1 quick2 brown3 fox4 jumps5 over6 the7 lazy8 dog9",
    wagons: [
      {
        pattern: encodeURI("\\d"),
        flags: { g: true, i: false, m: false },
        replace: "",
        active: true
      },
      {
        pattern: encodeURI("lazy"),
        flags: { g: false, i: false, m: false },
        replace: "quick",
        active: true
      },
      {
        pattern: encodeURI("quick"),
        flags: { g: false, i: false, m: false },
        replace: "lazy",
        active: true
      }
    ],
    caboose: ""
  },
  mutations: {
    updateCaboose(state) {
      state.caboose = prepareOutput(state.locomotive, state.wagons);
    },
    storeWagons(state) {
      localStorage["regex-train-wagons"] = JSON.stringify(state.wagons)
    }, fetchWagons(state) {
      if (localStorage["regex-train-wagons"]) {
        state.wagons = JSON.parse(localStorage["regex-train-wagons"])
      }
    }
  },
  actions: {
    toggleFlag({ state, commit }, payload) {
      state.wagons[payload.index].flags[payload.flag] = payload.flag;
      commit("updateCaboose");
      commit("storeWagons");
    },
    updateLocomotive({ state, commit }, value) {
      state.locomotive = value;
      commit("updateCaboose");
    },
    toggleWagon({ state, commit }, index) {
      state.wagons[index].active = !state.wagons[index].active;
      commit("updateCaboose");
      commit("storeWagons");
    },
    addWagon({ state, commit }, index) {
      state.wagons.splice(index, 0, {
        pattern: "",
        flags: { g: false, i: false, m: false },
        replace: "",
        active: true
      });
      commit("updateCaboose");
      commit("storeWagons");
    },
    removeWagon({ state, commit }, index) {
      state.wagons.splice(index, 1);
      commit("updateCaboose");
      commit("storeWagons");
    },
    updateReplace({ state, commit }, payload) {
      state.wagons[payload.index].replace = encodeURI(payload.value || "");
      commit("updateCaboose");
      commit("storeWagons");
    },
    updatePattern({ state, commit }, payload) {
      state.wagons[payload.index].pattern = encodeURI(payload.value || "");
      commit("updateCaboose");
      commit("storeWagons");
    },
    moveWagon({ state, commit }, payload) {
      if (payload.direction === "up") {
        //we take care of index=0 case with UI so index 0 will never come here
        state.wagons.splice(payload.index - 1, 2, state.wagons[payload.index], state.wagons[payload.index - 1]);
      }
      if (payload.direction === "down") {
        //we take care of index=length-1 case with UI so RangeError is not possible
        state.wagons.splice(payload.index, 2, state.wagons[payload.index + 1], state.wagons[payload.index]);
      }
      commit("updateCaboose");
      commit("storeWagons");

    }
  },
  modules: {}
});
