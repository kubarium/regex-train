import * as Actions from "./actions";
import { prepareOutput } from "./Utils";

const reducerInitialState = {
  input: "The1 quick2 brown3 fox4 jumps5 over6 the7 lazy8 dog9",
  regexNodes: [
    {
      //index: 0,
      pattern: encodeURI(/\d+/),
      flags: { g: true, i: false, m: false, u: false, y: false },
      replace: "",
      active: true
    },
    {
      //index: 1,
      pattern: encodeURI("lazy"),
      flags: { g: false, i: false, m: false, u: false, y: false },
      replace: "quick",
      active: true
    },
    {
      //index: 2,
      pattern: encodeURI("quick"),
      flags: { g: false, i: false, m: false, u: false, y: false },
      replace: "lazy",
      active: true
    }
  ],
  output: ""
};

export default (state = reducerInitialState, action) => {
  let regexNodes;
  let output;

  switch (action.type) {
    case Actions.UPDATE_INPUT:
      output = prepareOutput(action.input, state.regexNodes);

      return Object.assign({}, state, { input: action.input, output });
    case Actions.UPDATE_PATTERN:
      regexNodes = state.regexNodes.slice();
      regexNodes[action.index].pattern = encodeURI(action.pattern);
      //console.log(new RegExp(`${action.pattern}`));

      output = prepareOutput(state.input, regexNodes);

      return Object.assign({}, state, { regexNodes, output });
    case Actions.TOGGLE_FLAG:
      regexNodes = state.regexNodes.slice();
      regexNodes[action.index].flags[action.flag] = action.toggle;

      output = prepareOutput(state.input, regexNodes);

      return Object.assign({}, state, { regexNodes, output });
    case Actions.TOGGLE_NODE:
      regexNodes = state.regexNodes.slice();
      regexNodes[action.index].active = action.toggle;

      output = prepareOutput(state.input, regexNodes);

      return Object.assign({}, state, { regexNodes, output });
    case Actions.MOVE_NODE:
      //const state = state.regexNodes

      action.direction;
      return state;
    case Actions.DELETE_NODE:
      regexNodes = state.regexNodes.filter((node, index) => index !== action.index);

      output = prepareOutput(state.input, regexNodes);

      return Object.assign({}, state, { regexNodes, output });
    case Actions.CREATE_NODE:
      regexNodes = state.regexNodes.concat({
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
