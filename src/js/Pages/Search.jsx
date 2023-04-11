import React from 'react';

import closeIcon from '../../assets/Close.svg';
import Navigation from '../components/Navigation';

const Search = ({ handleBack }) => (
  <Navigation icon={closeIcon} handler={handleBack} isSearch text="Close Search">
    <input className="search__input" type="text" placeholder="Search by the keyword..." />
  </Navigation>
);

export default Search;
