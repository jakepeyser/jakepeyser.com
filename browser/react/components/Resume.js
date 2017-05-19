import React from 'react';
import Helmet from 'react-helmet';
import { getStaticResourceLink } from '../utils';

export default () => {
  const resumeLink = getStaticResourceLink('resume.pdf')
  return (
    <div id="resume">
      <Helmet title="Resume" />
      <div className="resume-download">
        <p>
          If you are having trouble viewing the resume, you can
          &nbsp;{ <a download href={ resumeLink }>download</a> }&nbsp;
          a copy
        </p>
      </div>
      <iframe
        src={`http://mozilla.github.io/pdf.js/web/viewer.html?file=${resumeLink}`}
      />
    </div>
  )
};
