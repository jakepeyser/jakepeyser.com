import React from 'react';
import Helmet from 'react-helmet';
import { getStaticResourceLink } from '../../../utils'

export default ({ project }) => (
  <div id="project">
    <Helmet title={ project.name } />
    <div className="project-banner">
      <div className={`bg-${project.filename}`} />
    </div>
    <div className="project-content">
      <div className="project-title-wrapper">
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
      <div className="sections-wrapper">
        <div className="sections">
          <div className="overview">
            <div className="text">
              <h2>App Overview</h2>
              <p>{ project.summary }</p>
            </div>
            <div className="screenshot">
              <div className="img-wrapper">
                <img src={ getStaticResourceLink(`images/${project.filename}/screenshot.png`) }
                  alt={ `${project.name} Screenshot` }/>
              </div>
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
              <div className="img-wrapper">
                <img src={ getStaticResourceLink(`images/${project.filename}/mobile.png`) }
                alt={ `${project.name} Mobile View` }/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
