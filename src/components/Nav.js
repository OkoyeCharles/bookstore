import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import Logo from '../images/Logo.svg';

import '../styles/Nav.css';

function Nav() {
  return (
    <header className="nav__container">
      <div className="nav__logo">
        <img src={Logo} alt="logo" />
        <span>Bookstore CMS</span>
      </div>
      <nav className="nav__links">
        <Link to="/">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
      </nav>
      <div className="nav__user"><ImUser /></div>
    </header>
  );
}

export default Nav;
