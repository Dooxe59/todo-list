import React from "react";
import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";

import { ALL, ABORTED, FINISHED, NEW } from "../consts.js";

import "./filterBar.scss";

const FilterBar = ({ currentFilter, updateFilter }) => {
  const { t } = useTranslation();

  const filterList = [ALL, NEW, FINISHED, ABORTED]

  const handleChangeFilter = (filterName) => {
    if(currentFilter === filterName) return;
    updateFilter(filterName);
  };

  const isActiveFilterClass = (filter) => {
    return currentFilter === filter ? 'active-filter' : '';
  };

  const filterItemClass = (filterName) => {
    const filter = filterName.toLowerCase();
    return `${filter}-filter-element`;
  }

  const renderFilterList = () => {
    return filterList.map((filterName, index) => {
      return (
        <span 
          key={index} 
          className={`filter-element ${isActiveFilterClass(filterName)} ${filterItemClass(filterName)}`} 
          onClick={() => handleChangeFilter(filterName)}>
          {t(filterName)}
        </span>);
    })
  };

  return (
    <div className="filter-bar">
      {renderFilterList()}
    </div>
  );
};

FilterBar.propTypes = {
  currentFilter: PropTypes.oneOf([ALL, ABORTED, FINISHED, NEW]),
  updateFilter: PropTypes.func.isRequired,
};

export default FilterBar;
