import React from 'react';

const createLink = (link, icon, id) => {
  return (
    <a key={id} href={ link } target="_blank">
      <i className={`profile-icon fa fa-${icon} fa-2x`} aria-hidden="true"></i>
    </a>
  )
};

const getLinks = (githubUrl, liveUrl) => {
  const links = [];
  if (githubUrl) links.push(createLink(githubUrl, 'github', 1));
  if (liveUrl) links.push(createLink(liveUrl, 'desktop', 2));
  return links;
};

export default ({ project }) => {
  const links = getLinks(project.github_url, project.live_url)

  return (
    <div id="project">
      <div className={`project-banner bg-${project.filename}`}>
        <div className="project-title-container">
          <h1 className="name">{project.name}</h1>
          <div className="links">
            { links }
          </div>
        </div>
      </div>
    </div>
  )
}
