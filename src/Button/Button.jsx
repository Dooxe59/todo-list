import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

const Button = ({ label, onClick, isDisabled = false, theme = "default" }) => {
  return (
    <button
      className={`button button-${theme}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  theme: PropTypes.oneOf(["default", "green", "red"]),
};

export default Button;
