import React from "react";
import PropTypes from "prop-types";

import "./tag.scss";

const Tag = ({ label, theme = "default" }) => {
  return <div className={`tag tag-${theme}`}>{label}</div>;
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(["default", "green", "pink", "orange"]),
};

export default Tag;
