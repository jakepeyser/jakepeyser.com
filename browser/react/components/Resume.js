import React from 'react';
import Helmet from 'react-helmet';

// Embedded Google doc located here:
// https://drive.google.com/file/d/0B74g2zDubN9jcmFXV3lxWEM4RVE/view?usp=sharing

export default () => (
  <div>
    <Helmet title="Resume" />
    <iframe
      id="resume"
      src="https://docs.google.com/viewer?srcid=0B74g2zDubN9jcmFXV3lxWEM4RVE&pid=explorer&embedded=true" >
    </iframe>
  </div>
);
