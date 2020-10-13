import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import moment from "moment";
import { ABORTED, FINISHED, NEW } from "../../../consts.js";
import {CheckCircleOutlined, CloseCircleOutlined} from '@ant-design/icons';
import Button from "../../ui/Button/Button";
import Tag from "../../ui/Tag/Tag";

import "./todoItem.scss";

const TodoItem = ({ item, updateTodoItemStatus }) => {
  const { t } = useTranslation();

  const getItemStatusTag = () => {
    switch (item.status) {
      case ABORTED:
        return "pink";
      case FINISHED:
        return "green";
      default:
        return "default";
    }
  };

  const renderTodoButton = () => {
    if(item.status !== NEW) return;
    return (
      <div className="todo-action-buttons">
        <div className="finish-todo-item-button">
          <Button
            className="button-with-label"
            theme="green"
            label={t("finish")}
            onClick={() => updateTodoItemStatus(FINISHED)}
          >
          </Button>
          <Button
            className="button-with-icon"
            theme="green"
            onClick={() => updateTodoItemStatus(FINISHED)}
          >
            <CheckCircleOutlined />
          </Button>
        </div>
        <div className="abort-todo-item-button">
          <Button
            className="button-with-label"
            theme="red"
            label={t("abort")}
            onClick={() => updateTodoItemStatus(ABORTED)}
          >
          </Button>
          <Button
            className="button-with-icon"
            theme="red"
            onClick={() => updateTodoItemStatus(ABORTED)}
          >
            <CloseCircleOutlined />
          </Button>
        </div>
      </div>  
    )
  };

  const todoItemClass = () => {
    const status = item.status.toLowerCase();
    return `${status}-todo-item`;
  }

  const todoItemDate = () => {
    return t("addedTodoItemDate", {
      date: moment(item.timestamp).fromNow(),
    });
  }

  return (
    <div className={`todo-item ${todoItemClass()}`}>
      <div className="todo-item-status">
        <Tag label={t(item.status)} theme={getItemStatusTag()}></Tag>
        {renderTodoButton()}
      </div>
      <div className="todo-item-value">
        <span className="todo-item-label truncated" title={item.label}>
          {item.label}
        </span>
        <span className="todo-item-date truncated" title={todoItemDate()}>
          {todoItemDate()}
        </span>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    status: PropTypes.oneOf([ABORTED, FINISHED, NEW]),
  }),
  updateTodoItemStatus: PropTypes.func.isRequired,
};

export default TodoItem;
