export const TOGGLE_FLAG = "TOGGLE_FLAG";
export const UPDATE_PATTERN = "UPDATE_PATTERN";
export const UPDATE_REPLACE = "UPDATE_REPLACE";
export const UPDATE_INPUT = "UPDATE_INPUT";
export const MOVE_NODE = "MOVE_NODE";
export const MOVE_NODE_DOWN = "MOVE_NODE_DOWN";
export const MOVE_NODE_UP = "MOVE_NODE_UP";
export const DELETE_NODE = "DELETE_NODE";
export const CREATE_NODE = "CREATE_NODE";
export const TOGGLE_NODE = "TOGGLE_NODE";
export const TOGGLE_FAQ = "TOGGLE_FAQ";

export const createNode = () => {
  return { type: CREATE_NODE };
};

export const deleteNode = index => {
  return { type: DELETE_NODE, index };
};

export const moveNode = (direction, index) => {
  return { type: MOVE_NODE, direction, index };
};

export const updateInput = input => {
  return { type: UPDATE_INPUT, input };
};

export const updatePattern = (pattern, index) => {
  return { type: UPDATE_PATTERN, pattern, index };
};

export const updateReplace = (replace, index) => {
  return { type: UPDATE_REPLACE, replace, index };
};

export const toggleNode = (toggle, index) => {
  return { type: TOGGLE_NODE, toggle, index };
};

export const toggleFlag = (flag, toggle, index) => {
  return { type: TOGGLE_FLAG, flag, toggle, index };
};
export const toggleFaq = () => {
  return { type: TOGGLE_FAQ };
};
