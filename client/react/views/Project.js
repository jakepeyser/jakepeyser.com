import React from 'react';
import Helmet from 'react-helmet';
import Icon from '../components/icons/Icon'
import { getProject, getStaticResourceLink } from '../utils'

export default ({ params }) => {
  const project = getProject(params.projectName)
  return (
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
              project.links && project.links.map(link => {
                return <Icon key={ link.url } icon={ link.type } link={ link.url } size="2" />
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
}
