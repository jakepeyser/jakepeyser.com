import React from 'react';
import Helmet from 'react-helmet';

// Embedded Google doc located here:
// https://drive.google.com/file/d/0B74g2zDubN9jcmFXV3lxWEM4RVE/view?usp=sharing
const resumeDownLoadLink =
  <a download href="https://drive.google.com/uc?export=download&id=0B74g2zDubN9jcmFXV3lxWEM4RVE">download</a>

export default () => (
  <div id="resume">
    <Helmet title="Resume" />
    <div className="resume-download">
      <p>
        If you are having trouble viewing the resume, you can
        &nbsp;{ resumeDownLoadLink }&nbsp;
        a copy
      </p>
    </div>
    <iframe
      id="resume"
      src="https://docs.google.com/viewer?srcid=0B74g2zDubN9jcmFXV3lxWEM4RVE&pid=explorer&embedded=true" >
    </iframe>
  </div>
);
