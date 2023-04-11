import React from 'react';

import searchIcon from '../../assets/Search.svg';
import plusIcon from '../../assets/Plus.svg';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import Empty from '../components/Empty';
import List from '../components/List';

const Main = ({ handleAdd, notes, setNotes, handleSearch }) => (
  <>
    <Navigation text="Search" handler={handleSearch} icon={searchIcon}>
      <h1 className="title">Notes</h1>
    </Navigation>
    {notes.length ? <List setNotes={setNotes} notes={notes} /> : <Empty />}
    <Button handler={handleAdd} text="Add Note" icon={plusIcon} isFloat />
  </>
);

export default Main;
