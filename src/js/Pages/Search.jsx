import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import closeIcon from '../../assets/Close.svg';
import Navigation from '../components/Navigation';
import Content from '../components/Content';

import { HOME } from '../routes';

const Search = ({ notes, setNotes }) => {
  const { push } = useHistory();
  const [text, setText] = useState('');

  return (
    <>
      <Navigation icon={closeIcon} handler={() => push(HOME)} isSearch text="Close Search">
        <input value={text} onChange={({ target }) => setText(target.value)} className="search__input" type="text" placeholder="Search by the keyword..." />
      </Navigation>
      <Content mask={text.toLowerCase()} notes={notes} setNotes={setNotes} isSearch />
    </>
  );
};

export default Search;
