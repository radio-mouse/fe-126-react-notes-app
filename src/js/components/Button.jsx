import React, { useContext } from 'react';

import { ThemeContext } from '../hooks';

const Button = ({ icon, text, isSearch, isFloat, handler }) => {
  const isLight = useContext(ThemeContext);
  const classes = ['button', isSearch && 'search__button', isFloat && 'button_float', isLight && 'button_light'];

  return (
    <button onClick={handler} type="button" className={classes.join(' ')} aria-label={text}>
      <img src={icon} alt={text} />
    </button>
  );
};

export default Button;
