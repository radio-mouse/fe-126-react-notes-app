import React from 'react';

import List from './List';
import Empty from './Empty';

const Content = ({ notes, setNotes, isSearch, mask }) => {
  const filtered = notes.filter(({ title }) => title.toLowerCase().includes(mask));

  return filtered.length ? (
    <List setNotes={setNotes} notes={filtered} />
  ) : (
    <Empty isSearch={isSearch} />
  );
};

export default Content;
