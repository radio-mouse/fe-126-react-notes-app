import React from 'react';

import ColorPicker from './ColorPicker';

const Editor = ({ text, setText, title, setTitle, color, setColor }) => (
  <>
    <ColorPicker color={color} setColor={setColor} />
    <input value={title} onChange={({ target }) => setTitle(target.value)} type="text" className="title-input" placeholder="Title" />
    <textarea value={text} onChange={({ target }) => setText(target.value)} className="text-area" rows="8" placeholder="Type something..." />
  </>
);

export default Editor;
