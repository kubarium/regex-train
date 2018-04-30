export const TOGGLE_FLAG = "TOGGLE_FLAG";
export const UPDATE_PATTERN = "UPDATE_PATTERN";
export const MOVE_NODE = "MOVE_NODE";
export const DELETE_NODE = "DELETE_NODE";
export const CREATE_NODE = "CREATE_NODE";
export const DISABLE_NODE = "DISABLE_NODE";

export const createNode = () => {
  return { type: CREATE_NODE };
};

export const moveNode = direction => {};

export const updatePattern = () => {
  return { type: UPDATE_PATTERN };
};

export const toggleFlag = (flag, toggle) => {
  return { type: TOGGLE_FLAG, flag, toggle };
};
