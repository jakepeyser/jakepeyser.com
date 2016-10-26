import React from 'react';
import { Link } from 'react-router';

const navList = [
  { id: 1, href: '/home', text: 'Home' },
  { id: 2, href: '/projects', text: 'Portfolio' },
  { id: 3, href: '/contact', text: 'Contact' }
]

export default ({ children }) => (
  <div id='navbar' className='col-xs-12'>
    <Link to="/home">
      <img src="/./images/logo.png" alt="JP Logo" className='logo' />
    </Link>
    <ul className='nav-list'>
      {
        navList.map(navItem => {
          return (
            <li key={navItem.id}>
              <Link to={navItem.href}
              className="nav-link"
              activeClassName="active-nav">
                {navItem.text}
              </Link>
            </li>
          )
        })
      }
    </ul>
  </div>
);
