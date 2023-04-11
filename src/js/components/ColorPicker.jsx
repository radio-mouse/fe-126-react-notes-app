import React from 'react';

export const COLORS = ['#FD99FF', '#FF9E9E', '#91F48F', '#FFF599', '#9EFFFF', '#B69CFF'];

const ColorPicker = ({ color, setColor }) => (
  <ul className="colors-list">
    {COLORS.map((colorItem) => (
      <li className="colors-list__item" key={colorItem}>
        <button onClick={() => setColor(colorItem)} aria-label={colorItem} type="button" style={{ background: colorItem }} className={`color-button ${colorItem === color ? 'color-button_selected' : ''}`} />
      </li>
    ))}
  </ul>
);

export default ColorPicker;