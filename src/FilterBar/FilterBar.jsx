import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { ALL, ABORTED, FINISHED, NEW } from "../consts.js";

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import "./filterBar.scss";
import 'antd/dist/antd.css';

const FilterBar = ({ currentFilter, updateFilter }) => {
  const { t } = useTranslation();

  const filterList = [ALL, NEW, FINISHED, ABORTED];
  
  const handleChangeFilter = (filterName) => {
    if(currentFilter === filterName) return;
    updateFilter(filterName);
  };

  const filterItemClass = (filterName) => {
    const filter = filterName.toLowerCase();
    return `${filter}-filter-element`;
  }

  const filterListExceptCurrent = filterList.filter(elt => elt !== currentFilter);

  const renderMenuItems = () => {
    return filterListExceptCurrent.map((filterName, index) => {
      return (
        <Menu.Item key={index}>
          <a 
            className={filterItemClass(filterName)} 
            href={void(0)} 
            onClick={() => handleChangeFilter(filterName)}>
            {t(filterName)}
          </a>
        </Menu.Item>
      );
    });
  };

  const menu = (
    <Menu>
      {renderMenuItems()}
    </Menu>
  );

  return (
    <div className="filter-bar">
      <span className="filter-label">{t("tasksToDisplay")}:</span>
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link filters-dropdown" href={void(0)}  onClick={e => e.preventDefault()}>
          {t(currentFilter)}
          <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

FilterBar.propTypes = {
  currentFilter: PropTypes.oneOf([ALL, ABORTED, FINISHED, NEW]),
  updateFilter: PropTypes.func.isRequired,
};

export default FilterBar;
