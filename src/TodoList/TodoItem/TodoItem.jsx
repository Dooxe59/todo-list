import React from "react";
import PropTypes from "prop-types";

import Button from "../../Button/Button";

import moment from "moment";
import { ABORTED, FINISHED, NEW, ONGOING } from "../../consts.js";

import { useTranslation } from "react-i18next";

import "./todoItem.scss";
import Tag from "../../Tag/Tag";

const TodoItem = ({ item, deleteTodoItem }) => {
  const { t } = useTranslation();

  const getItemStatusTag = () => {
    switch (item.status) {
      case ABORTED:
        return "pink";
      case FINISHED:
        return "green";
      case ONGOING:
        return "orange";
      default:
        return "default";
    }
  };

  return (
    <div className="todo-item">
      <div className="todo-item-status">
        <Tag label={t(item.status)} theme={getItemStatusTag()}></Tag>
      </div>
      <div className="todo-item-value">
        <span className="todo-item-label truncated" title={item.label}>
          {item.label}
        </span>
        <span className="todo-item-date">
          {t("addedTodoItemDate", {
            date: moment(item.timestamp).fromNow(),
          })}
        </span>
      </div>
      <div className="delete-todo-item-button">
        <Button
          onClick={deleteTodoItem}
          label={t("delete")}
          theme="red"
        ></Button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    status: PropTypes.oneOf([ABORTED, FINISHED, NEW, ONGOING]),
  }),
  deleteTodoItem: PropTypes.func.isRequired,
};

export default TodoItem;
