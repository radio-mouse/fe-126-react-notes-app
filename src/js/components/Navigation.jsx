import React from 'react';

import Button from './Button';

const Navigation = ({ icon, text, isSearch, handler, children }) => (
  <nav className="nav">
    {children}
    <Button
      handler={handler}
      isSearch={isSearch}
      icon={icon}
      text={text}
    />
  </nav>
);

export default Navigation;
