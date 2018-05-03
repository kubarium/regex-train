export const TOGGLE_FLAG = "TOGGLE_FLAG";
export const UPDATE_PATTERN = "UPDATE_PATTERN";
export const UPDATE_INPUT = "UPDATE_INPUT";
export const MOVE_NODE = "MOVE_NODE";
export const DELETE_NODE = "DELETE_NODE";
export const CREATE_NODE = "CREATE_NODE";
export const TOGGLE_NODE = "TOGGLE_NODE";

export const createNode = () => {
  return { type: CREATE_NODE };
};

export const deleteNode = index => {
  return { type: DELETE_NODE, index };
};

export const moveNode = direction => {};

export const updateInput = input => {
  return { type: UPDATE_INPUT, input };
};

export const updatePattern = (pattern, index) => {
  return { type: UPDATE_PATTERN, pattern, index };
};

export const toggleNode = (toggle, index) => {
  return { type: TOGGLE_NODE, toggle, index };
};

export const toggleFlag = (flag, toggle, index) => {
  return { type: TOGGLE_FLAG, flag, toggle, index };
};
