import React from 'react';

import Logo from './Logo';
import '../styles/components/Header.styl';

const Header = () => (
  <header className="Header">
    <div className="Container">
      <div className="Header__nav">
        <Logo />
        <ul>
          <li>
            <a href="/">TECHNOLOGY</a>
          </li>
          <li>
            <a href="/">IDEAS</a>
          </li>
          <li>
            <a href="/">LEADERSHIP</a>
          </li>
          <li>
            <a href="/">VIDEO</a>
          </li>
          <li>
            <a href="/">NEWS</a>
          </li>
          <li>
            <a href="/">FINANCE</a>
          </li>
          <li>
            <a href="/">ENTERTAINMENT</a>
          </li>
        </ul>
      </div>
      <i className="Heaver__icon-burger">
        <img
          src="https://img.icons8.com/material-rounded/50/000000/menu.png"
          alt="Icon burger"
        />
      </i>
    </div>
  </header>
);

export default Header;
