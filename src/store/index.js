import Vue from "vue";
import Vuex from "vuex";

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
    caboose: "asdas"
  },
  mutations: {},
  actions: {},
  modules: {}
});
