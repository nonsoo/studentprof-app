const ADD = "add";

export const addTag = (newTag) => ({
  type: ADD,
  payload: newTag,
});

const initialState = {
  //setting the initial state of the variable
  tags: [],
};

export default function tagsState(state = initialState, action) {
  //controls what happens based on which action is called
  switch (action.type) {
    case ADD:
      return { ...state, tag: action.payload };

    default:
      return state;
  }
}
