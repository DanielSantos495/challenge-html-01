import React from 'react';
import Logo from './Logo';

import '../styles/components/Footer.styl';

const Footer = () => (
  <footer className="Footer">
    <div className="Container">
      <div className="Footer__navbar">
        <ul>
          <li>
            <Logo isFooter />
            <p> © 2018 Deck Component based UI Kit</p>
          </li>
          <li>
            <a href="/">TECHNOLOGY</a>
            <a href="/">IDEAS</a>
          </li>
          <li>
            <a href="/">LEADERSHIP</a>
            <a href="/">VIDEO</a>
          </li>
          <li>
            <a href="/">NEWS</a>
            <a href="/">FINANCE</a>
          </li>
          <li>
            <a href="/">ENTERTAIMENT</a>
          </li>
        </ul>
      </div>
      <div className="Footer__contact">
        <div>
          <p>Follow us:</p>
          <a href="/">
            <img
              src="https://img.icons8.com/material/16/000000/instagram-new.png"
              alt="Instagram"
            />
          </a>
          <a href="/">
            <img
              src="https://img.icons8.com/ios-filled/16/000000/pinterest.png"
              alt="Pinterest"
            />
          </a>
          <a href="/">
            <img
              src="https://img.icons8.com/android/16/000000/twitter.png"
              alt="Twitter"
            />
          </a>
          <a href="/">
            <img
              src="https://img.icons8.com/ios-filled/16/000000/facebook-new.png"
              alt="Facebook"
            />
          </a>
        </div>
        <form>
          <input placeholder="Yout E-mail" />
          <button type="button">SUSCRIBE</button>
        </form>
      </div>
    </div>
  </footer>
);

export default Footer;
