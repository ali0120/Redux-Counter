import { createStore } from "redux";
const reducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + 1
    };
  } else if (action.type === "DECREASE") {
    return {
      counter: state.counter - 1
    };
  }
  return state;
};
const store = createStore(reducer);
export default store;
