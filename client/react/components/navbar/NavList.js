import React from 'react';
import { Link } from 'react-router';
import navList from './nav-list';

export default ({ onNavigate }) =>
  <ul className='nav-list'>
    {navList.map(navItem => {
      return (
        <li key={navItem.href} onClick={ onNavigate }>
        { // Render Link or <a> based on internal/external link
          navItem.href.includes('http') ?
            <a href={navItem.href}
              className="nav-link">
              { navItem.text }
            </a> :
            <Link to={navItem.href}
              className="nav-link"
              activeClassName="active-nav">
              { navItem.text }
            </Link>
        }
        </li>
      )
    })}
  </ul>
