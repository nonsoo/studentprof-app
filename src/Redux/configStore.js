import { combineReducers, createStore } from "redux";
import tagReducer from "./ducks/tag";

//combine reducers combines all the reducers into one so that you can use it in the store
const reducer = combineReducers({
  tag: tagReducer,
});

const store = createStore(reducer);

export default store;
