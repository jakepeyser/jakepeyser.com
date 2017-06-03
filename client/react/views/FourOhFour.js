import React from 'react';
import { Link } from 'react-router';
import Zipper from '../components/Zipper';
import navList from '../components/navbar/nav-list'

export default () => (
  <div id="fourohfour">
    <div className="fourohfour__apology-wrapper">
      <div className="fourohfour__apology">
        <h1>404</h1>
        <h2 className = "fourohfour__caption">Uh Oh...</h2>
        <div className = "fourohfour__sub-caption fourohfour__sub-caption--large">
          <p>You seem to have caught me with my pants down.</p>
          <p>I'd be oh so grateful if you would navigate to one of the main pages below. Oh, and zip me up on the way out, would you?</p>
        </div>
        <div className = "fourohfour__sub-caption fourohfour__sub-caption--small">
          <p>Well this is awkward.</p>
          <p>How about you navigate to one of the links below and we pretend this little mishap never happened?</p>
        </div>
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
    <div className = "fourohfour__zipper-wrapper">
      <Zipper
        numTeeth={ 26 }
        message="404"
        style={{ backgroundColor: '#f7f7f7' }}
        startUnzipped={ true } />
    </div>
  </div>
);
