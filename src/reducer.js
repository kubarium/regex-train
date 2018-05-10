import * as Actions from "./actions";
import { prepareOutput } from "./Utils";

const reducerInitialState = {
  input: "The1 quick2 brown3 fox4 jumps5 over6 the7 lazy8 dog9",
  regexNodes: [
    {
      pattern: encodeURI("\\d"),
      flags: { g: true, i: false, m: false, u: false, y: false },
      replace: "",
      active: true
    },
    {
      pattern: encodeURI("lazy"),
      flags: { g: false, i: false, m: false, u: false, y: false },
      replace: "quick",
      active: true
    },
    {
      pattern: encodeURI("quick"),
      flags: { g: false, i: false, m: false, u: false, y: false },
      replace: "lazy",
      active: true
    }
  ],
  output: "",
  faq: false
};

export default (state = reducerInitialState, action) => {
  let regexNodes;
  let output;

  switch (action.type) {
    case Actions.UPDATE_INPUT:
      output = prepareOutput(action.input, state.regexNodes);

      return Object.assign({}, state, { input: action.input, output });
    case Actions.UPDATE_REPLACE:
      regexNodes = state.regexNodes.slice();
      regexNodes[action.index].replace = action.replace;

      output = prepareOutput(state.input, state.regexNodes);

      return Object.assign({}, state, { regexNodes, output });
    case Actions.UPDATE_PATTERN:
      regexNodes = state.regexNodes.slice();
      regexNodes[action.index].pattern = encodeURI(action.pattern);

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
      regexNodes = state.regexNodes.slice();

      if (action.direction === Actions.MOVE_NODE_UP) {
        //we take care of index=0 case with UI so index 0 will never come here
        regexNodes.splice(action.index - 1, 2, regexNodes[action.index], regexNodes[action.index - 1]);
      }
      if (action.direction === Actions.MOVE_NODE_DOWN) {
        //we take care of index=length-1 case with UI so RangeError is not possible
        regexNodes.splice(action.index, 2, regexNodes[action.index + 1], regexNodes[action.index]);
      }

      output = prepareOutput(state.input, regexNodes);

      return Object.assign({}, state, { regexNodes, output });
    case Actions.DELETE_NODE:
      regexNodes = state.regexNodes.filter((node, index) => index !== action.index);

      output = prepareOutput(state.input, regexNodes);

      return Object.assign({}, state, { regexNodes, output });
    case Actions.CREATE_NODE:
      regexNodes = state.regexNodes.concat({
        pattern: "",
        flags: { g: false, i: false, m: false, u: false, y: false },
        replace: "",
        active: true
      });
      return Object.assign({}, state, { regexNodes });
    case Actions.TOGGLE_FAQ:
      return Object.assign({}, state, { faq: !state.faq });
    default:
      output = prepareOutput(state.input, state.regexNodes);

      return Object.assign({}, state, { output });
  }
};