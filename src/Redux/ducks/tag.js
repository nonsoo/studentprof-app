const ADD = "add";
const AllTags = [];

export const addTag = (newTag) => {
  AllTags.push(newTag);
  return {
    type: ADD,
  };
};

const initialState = {
  //setting the initial state of the variable
  tags: [],
};

export default function tagsState(state = initialState, action) {
  //controls what happens based on which action is called
  switch (action.type) {
    case ADD:
      return { ...state, tags: AllTags };

    default:
      return state;
  }
}
