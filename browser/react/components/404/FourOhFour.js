import React from 'react';
import { Link } from 'react-router';
import Zipper from './Zipper';
import navList from '../navbar/nav-list.json';

import { background } from '../colors';

export default () => (
  <div id="fourohfour">
    <div className="apology-wrapper">
      <div className="apology">
        <h1>404</h1>
        <h2>Uh Oh...</h2>
        <p className = "sub-caption">You seem to have caught me with my pants down.</p>
        <p>I'd be oh so grateful if you would navigate to one of the main pages below. Oh, and zip me up on the way out, would you?</p>
        <ul>
        {
          navList.map(link => {
            return (
              <li key={link.href}>
              { // Render Link or <a> based on internal/external link
                link.href.includes('http') ?
                  <a href={link.href}>{ link.text }</a> :
                  <Link to={link.href}>{ link.text }</Link>
              }
              </li>
            )
          })
        }
        </ul>
      </div>
    </div>
    <div className="zipper-wrapper">
      <Zipper
        numTeeth={ 26 }
        message="404"
        style={{ backgroundColor: background }}
        startUnzipped={ true } />
    </div>
  </div>
);
