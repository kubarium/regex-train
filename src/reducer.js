import * as Actions from "./actions";

const reducerInitialState = {
  input: "The1 quick2 brown3 fox4 jumps5 over6 the7 lazy8 dog9",
  regexNodes: [
    { index: 0, pattern: /\d+/, flags: { g: true, i: false, m: false, u: false, y: false }, replace: "", active: true },
    {
      index: 1,
      pattern: /lazy/,
      flags: { g: false, i: false, m: false, u: false, y: false },
      replace: "quick",
      active: true
    },
    {
      index: 2,
      pattern: /quick/,
      flags: { g: false, i: false, m: false, u: false, y: false },
      replace: "lazy",
      active: true
    }
  ],
  output: ""
};

export default (state = reducerInitialState, action) => {
  switch (action.type) {
    case Actions.MOVE_NODE:
      //const state = state.regexNodes

      action.direction;
      return state;
    case Actions.DELETE_NODE:
      return state;
    case Actions.CREATE_NODE:
      let regexNodes = state.regexNodes.concat({
        pattern: null,
        flags: { g: false, i: false, m: false, u: false, y: false },
        replace: "",
        active: true
      });
      return Object.assign({}, state, { regexNodes });
    default:
      return state;
  }
};
