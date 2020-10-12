import React, { useReducer } from "react";
import AddItem from "../../components/addTodoItem/AddTodoItem";
import TodoList from "../../components/todoList/TodoList";
import { createGuid } from "../../utils.js";
import { ABORTED, FINISHED, NEW } from "../../consts.js";

import "./home.scss";

const HomePage = () => {
  const reducer = (state, action) => {
    switch(action.type) {
      case 'addTodo': {
        if (!action.itemLabel) return state;

        const newItem = {
          label: action.itemLabel,
          timestamp: Date.now(),
          status: NEW,
          id: createGuid(),
        };
        return [...state, newItem];
      }
      case 'changeStatus': {
        const itemIndex = state.findIndex(item => item.id === action.itemId);
        if(itemIndex === -1) return state;

        const todoListItemsTemp = [...state];
        todoListItemsTemp[itemIndex].status = action.newStatus;
        return todoListItemsTemp;
      }
      case 'clearTodos': 
        return [];
      default:
        throw new Error(`Action ${action.type} not exist.`)
    }
  };

  const defaultTodoItems = [{
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

  const [todoListItems, dispatch] = useReducer(reducer, defaultTodoItems)

  return (
    <div className="home">
    <AddItem addNewTodoItem={(itemLabel) => dispatch({type: 'addTodo', itemLabel: itemLabel})}></AddItem>
      <hr className="separator" />
      <TodoList
        todoListItems={todoListItems}
        updateTodoItemStatus={(itemId, newStatus) => dispatch({type: 'changeStatus', itemId: itemId, newStatus: newStatus})}
      ></TodoList>
      </div>
  );
};

export default HomePage;