import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";

import { useTranslation } from "react-i18next";

import "./addItem.scss";

const AddItem = ({ addNewTodoItem }) => {
  const { t, i18n } = useTranslation();
  const [newTodoItemValue, setNewTodoItemValue] = useState("");
  const inputRef = useRef(null);

  const handleInputTextChange = (event) => {
    setNewTodoItemValue(event.target.value);
  };

  const isValidNewItem = () => {
    return newTodoItemValue?.trim()?.length > 0;
  };

  const setFocusOnInput = () => {
    inputRef.current.focus();
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
      setFocusOnInput();
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
        placeholder={t("addNewTodoItem")}
        autoFocus
        ref={inputRef}
        value={newTodoItemValue}
        onChange={handleInputTextChange}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
      <div className="add-item-button">
        <Button
          isDisabled={!isValidNewItem()}
          onClick={validateAndAddNewTodoItem}
          label={t("add")}
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
