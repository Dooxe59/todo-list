import { ABORTED, FINISHED, NEW } from "../consts.js";
import { createGuid } from "../utils.js";

const initialState = [{
  label: "Default finished task",
  timestamp: 1602148900000,
  status: FINISHED,
  id: createGuid(),
},{
  label: "Default new task",
  timestamp: 1602147000000,
  status: NEW,
  id: createGuid(),
},{
  label: "Default aborted task",
  timestamp: 1602145700000,
  status: ABORTED,
  id: createGuid(),
}];

export const ADD_TODO = 'ADD_TODO';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const CLEAR_TODOS = 'CLEAR_TODOS';

export const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: {
      if (!action.payload.itemLabel) return state;

      const newItem = {
        label: action.payload.itemLabel,
        timestamp: Date.now(),
        status: NEW,
        id: createGuid(),
      };
      return [...state, newItem];
    }
    case CHANGE_STATUS: {
      const itemIndex = state.findIndex(item => item.id === action.payload.itemId);
      if (itemIndex === -1) return state;

      const todoListItemsTemp = [...state];
      todoListItemsTemp[itemIndex].status = action.payload.newStatus;
      return todoListItemsTemp;
    }
    case CLEAR_TODOS: 
      return [];
    default:
      return state;
  }
};