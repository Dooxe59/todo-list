import React, { useState } from "react";
import "./addItem.scss";
import PropTypes from "prop-types";

import Button from "../Button/Button";

const AddItem = ({ addNewTodoItem }) => {
  const [newTodoItemValue, setNewTodoItemValue] = useState("");

  const handleInputTextChange = (event) => {
    setNewTodoItemValue(event.target.value);
  };

  const isValidNewItem = () => {
    return newTodoItemValue?.trim()?.length > 0;
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      validateAndAddNewTodoItem();
      event.preventDefault();
    }
  };

  const validateAndAddNewTodoItem = () => {
    if (isValidNewItem()) {
      addNewTodoItem(newTodoItemValue.trim());
      clearInputText();
    }
  };

  const clearInputText = () => {
    setNewTodoItemValue("");
  };

  return (
    <div className="add-item">
      <input
        className="add-item-input"
        name="newTodoItemValue"
        type="text"
        placeholder="Add new todo item"
        autoFocus
        value={newTodoItemValue}
        onChange={handleInputTextChange}
        onKeyDown={handleKeyDown}
        autocomplete="off"
      />
      <div className="add-item-button">
        <Button
          isDisabled={!isValidNewItem()}
          onClick={validateAndAddNewTodoItem}
          label="Add"
          theme="green"
        ></Button>
      </div>
    </div>
  );
};

AddItem.propTypes = {
  addNewTodoItem: PropTypes.func.isRequired,
};

export default AddItem;
