import React from 'react';

import backIcon from '../../../assets/Back.svg';
import Button from '../Button';

import { getButtonText, getButtonIcon } from './helpers';

const Navigation = ({ isSearch, isMain, isDetail, isEdit }) => (
  <nav className="nav">
    {isMain && <h1 className="title">Notes</h1>}
    {isSearch && <input className="search__input" type="text" placeholder="Search by the keyword..." />}
    {isDetail && <Button icon={backIcon} text="Go Back" />}
    <Button
      isSearch={isSearch}
      icon={getButtonIcon(isSearch, isDetail, isEdit)}
      text={getButtonText(isSearch, isDetail, isEdit)}
    />
  </nav>
);

export default Navigation;
