import React from 'react';

export default ({ project }) => (
  <div id="project">
    <div className={`project-banner bg-${project.filename}`}>
      <div className="project-title-container">
        <h1 className="name">{project.name}</h1>
        <div className="links">
        {
          project.links && project.links.map((link, idx) => {
            return (
              <a key={idx} href={ link.url } target="_blank">
                <i className={`profile-icon fa fa-${link.type} fa-2x`}
                aria-hidden="true"></i>
              </a>
            )
          })
        }
        </div>
      </div>
    </div>
    <div className="sections">
      <div className="overview">
        <div className="text">
          <h2>App Overview</h2>
          <p>{ project.summary }</p>
        </div>
        <div className="screenshot">
          <img src={`/browser/src/images/${project.filename}/screenshot.png`} />
        </div>
      </div>
      <div className="tech">
        <div className="text">
          <h2>Tech</h2>
          <ul>
          {
            project.tech && project.tech.map(tech => {
              return (
                <li key={tech.id}>
                  <a href={tech.link} target="_blank">{tech.name}</a>
                </li>
              )
            })
          }
          </ul>
        </div>
        <div className="screenshot">
          <img src={`/browser/src/images/${project.filename}/mobile.png`} />
        </div>
      </div>
    </div>
  </div>
)
