import React from 'react';

const Button = ({ icon, text, isSearch, isFloat, handler }) => {
  const classes = ['button', isSearch && 'search__button', isFloat && 'button_float'];

  return (
    <button onClick={handler} type="button" className={classes.join(' ')} aria-label={text}>
      <img src={icon} alt={text} />
    </button>
  );
};

export default Button;
