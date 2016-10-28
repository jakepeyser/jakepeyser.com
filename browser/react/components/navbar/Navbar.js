import React from 'react';
import { Link } from 'react-router';

export default ({ removeProject }) => {
  const navList = [
    { id: 1, href: '/home', text: 'Home' },
    { id: 2, href: '/projects', text: 'Portfolio', onClick: removeProject},
    { id: 3, href: '/resume', text: 'Resume' },
    { id: 4, href: '/contact', text: 'Contact' }
  ]

  return (
    <div id='navbar'>
      <Link to="/home">
        <img src="/browser/src/images/logo.png" alt="JP Logo" className='logo' />
      </Link>
      <ul className='nav-list'>
        {
          navList.map(navItem => {
            return (
              <li key={navItem.id}>
                <Link to={navItem.href}
                className="nav-link"
                activeClassName="active-nav"
                onClick={navItem.onClick}>
                  {navItem.text}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};
