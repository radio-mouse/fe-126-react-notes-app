import React from 'react';
import { useHistory } from 'react-router-dom';

import { ADD, SEARCH } from '../routes';

import Button from '../components/Button';
import plusIcon from '../../assets/Plus.svg';
import searchIcon from '../../assets/Search.svg';
import Navigation from '../components/Navigation';
import Content from '../components/Content';

const Home = ({ notes, setNotes }) => {
  const { push } = useHistory();

  return (
    <>
      <Navigation text="Search" handler={() => push(SEARCH)} icon={searchIcon}>
        <h1 className="title">Notes</h1>
      </Navigation>
      <Content notes={notes} setNotes={setNotes} mask="" />
      <Button handler={() => push(ADD)} text="Add Note" icon={plusIcon} isFloat />
    </>
  );
};

export default Home;
