import React, { useContext } from 'react';

import { ThemeContext } from '../hooks';

export const COLORS = ['#FD99FF', '#FF9E9E', '#91F48F', '#FFF599', '#9EFFFF', '#B69CFF'];

const ColorPicker = ({ color, setColor }) => {
  const isLight = useContext(ThemeContext);

  return (
    <ul className="colors-list">
      {COLORS.map((colorItem) => (
        <li className="colors-list__item" key={colorItem}>
          <button
            onClick={() => setColor(colorItem)}
            aria-label={colorItem}
            type="button"
            style={{ background: colorItem }}
            className={`color-button ${colorItem === color ? 'color-button_selected' : ''} ${isLight ? 'color-button_light' : ''}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default ColorPicker;
