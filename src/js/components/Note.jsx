import React from 'react';

const Note = ({ text, title }) => (
  <>
    <h1 className="title title_thin">{title}</h1>
    <p className="text">{text}</p>
  </>
);

export default Note;
