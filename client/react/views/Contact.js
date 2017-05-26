import React from 'react';
import Helmet from 'react-helmet';
import SocialIcons from '../components/icons/SocialIcons';
import EmailForm from '../components/form/EmailForm';

export default () => (
  <div id="contact">
    <Helmet title="Contact" />
    <div>
      <div className="contact-info">
        <h2>Reach Out</h2>
        <p>
          Please don't hesitate to send me a message if you have any questions
          or comments about the work I do or potential freelance opportunities.
          I am also not averse to the occasional random hello!
        </p>
        <p className="details">
          Jake Peyser<br/>
          New York, NY<br/>
          jakepeyser@gmail.com<br/>
        </p>
        <SocialIcons size="2" />
      </div>
      <EmailForm />
    </div>
  </div>
);
