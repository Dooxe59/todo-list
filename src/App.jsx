import React, { useReducer } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import AddItem from "./AddTodoItem/AddTodoItem";
import TodoList from "./TodoList/TodoList";
import Button from "./Button/Button";
import { createGuid } from "./utils.js";
import { FINISHED, NEW } from "./consts.js";

import "./app.scss";

const App = () => {
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
      default:
        throw new Error(`Action ${action.type} not exist.`)
    }
  };

  const defaultTodoItem = {
    label: "Default task",
    timestamp: 1602148900000,
    status: FINISHED,
    id: createGuid(),
  };

  const [todoListItems, dispatch] = useReducer(reducer, [defaultTodoItem])
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const lang = i18n?.language === "en" ? "fr" : "en";
    i18n.changeLanguage(lang);
    moment.locale(lang);
  };

  return (
    <div className="app">
      <div className="application-name">{t("appTitle")}</div>
      <AddItem addNewTodoItem={(itemLabel) => dispatch({type: 'addTodo', itemLabel: itemLabel})}></AddItem>
      <hr className="separator" />
      <TodoList
        todoListItems={todoListItems}
        updateTodoItemStatus={(itemId, newStatus) => dispatch({type: 'changeStatus', itemId: itemId, newStatus: newStatus})}
      ></TodoList>
      <footer>
        <Button onClick={changeLanguage} label={t("changeLanguage")}></Button>
      </footer>
    </div>
  );
};

export default App;
