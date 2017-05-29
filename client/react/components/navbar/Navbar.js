import React from 'react';
import { Link } from 'react-router';
import NavList from './NavList'
import Logo from '../../../assets/logo.svg';

export default () =>
  <div id='navbar'>
    <Link className="logo-link" to="/home">
      <Logo className="logo" />
    </Link>
    <div className="nav-menu">
      <NavList />
    </div>
  </div>
