import { createStore, combineReducers } from "redux";
import { todosReducer } from "./todosReducer";

export default createStore(
  combineReducers({
    todos: todosReducer,
    // filter: (state = 0, action) => state,
  }),
);