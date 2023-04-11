import React from 'react';

import Card from './Card';

const List = ({ notes, setNotes }) => (
  <ul className="list">
    {notes.map((note) => (
      <li key={note.id} className="list__item">
        <Card
          handleDelete={() => setNotes((prev) => prev.filter(({ id }) => id !== note.id))}
          note={note}
        />
      </li>
    ))}
  </ul>
);

export default List;
