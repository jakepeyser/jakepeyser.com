import React from 'react';
import Helmet from 'react-helmet';
import resume from '../../src/resume.pdf';
const resumeFilePath = '/browser/src/resume.pdf';

export default () => (
  <div id="resume">
    <Helmet title="Resume" />
    <div className="resume-download">
      <p>
        If you are having trouble viewing the resume, you can
        &nbsp;{ <a download href={ resumeFilePath }>download</a> }&nbsp;
        a copy
      </p>
    </div>
    <iframe
      src={`http://mozilla.github.io/pdf.js/web/viewer.html?file=https://jakepeyser-test.herokuapp.com${resumeFilePath}`}
    />
  </div>
);
