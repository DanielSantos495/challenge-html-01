import React from 'react';
import className from 'classnames';

import '../styles/components/Logo.styl';

const Logo = ({ isFooter }) => {
  const logoStyle = className('Logo', {
    isFooter,
  });

  return (
    <h1 className={logoStyle}>
      Deck
      <span> </span>
    </h1>
  );
};
export default Logo;
