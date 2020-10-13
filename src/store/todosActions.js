import { ADD_TODO, CHANGE_STATUS, CLEAR_TODOS } from "./todosReducer";

export const changeStatus = (todo) => ({
  type: CHANGE_STATUS,
  payload: {itemId: todo.itemId, newStatus: todo.newStatus}
});

export const addTodoItem = (todo) => ({
  type: ADD_TODO,
  payload: {itemLabel: todo.itemLabel}
});

export const clearTodos = () => ({
  type: CLEAR_TODOS,
});