import React, { useEffect, useState } from 'react';

import Detail from '../Pages/Detail';
import Main from '../Pages/Main';
import Search from '../Pages/Search';

const App = () => {
  const [isMain, setIsMain] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) ?? []);
  const [isNotesInitialised, setIsNotesInitialised] = useState(false);

  const handleAdd = () => {
    setIsDetail(true);
    setIsMain(false);
  };

  const handleBack = () => {
    setIsSearch(false);
    setIsDetail(false);
    setIsMain(true);
  };

  const handleSearch = () => {
    setIsMain(false);
    setIsSearch(true);
  };

  useEffect(() => {
    if (isNotesInitialised) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }

    setIsNotesInitialised(true);
  }, [notes]);

  return (
    <>
      {isMain && (
        <Main handleSearch={handleSearch} setNotes={setNotes} notes={notes} handleAdd={handleAdd} />
      )}
      {isSearch && <Search handleBack={handleBack} />}
      {isDetail && <Detail setNotes={setNotes} handleBack={handleBack} />}
    </>
  );
};

export default App;
