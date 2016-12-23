import React from 'react';
import { Link } from 'react-router';
import navList from './nav-list.json';
import Logo from '../../../src/images/logo.svg';

export default ({ removeProject }) => (
  <div id='navbar'>
    <Link className="logo-link" to="/home">
      <Logo className="logo" />
    </Link>
    <ul className='nav-list'>
      {
        navList.map(navItem => {
          return (
            <li key={navItem.id}>
              <Link to={navItem.href}
                className="nav-link"
                activeClassName="active-nav"
                onClick={ navItem.href === '/projects' ? removeProject : null }>
                {navItem.text}
              </Link>
            </li>
          )
        })
      }
    </ul>
  </div>
);
