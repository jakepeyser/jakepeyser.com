import React from 'react'
import Helmet from 'react-helmet'
import ProjectComponents from '../components/project'
const { ProjectSummary, ProjectImages } = ProjectComponents
import Icon from '../components/icons/Icon'
import projects from '../../projects'

export default ({ params }) => {
  const project = projects[params.projectName]
  return (
    <div id="project">
      <Helmet title={ project.name } />
      <div className="project__banner">
        <div className={`project__banner--bg-${project.filename}`} />
      </div>
      <div className="project__wrapper">
        <div className="project__title-wrapper">
          <div className="project__title">
            <h1 className="project__name">{project.name}</h1>
            {project.links && project.links.length ?
              <div className="project__links">
              {project.links.map(link => {
                return <Icon key={ link.url } icon={ link.type } link={ link.url } size="2" />
              })}
              </div> : null
            }
          </div>
        </div>
        <div className="project__content">
          <div className="project__content-buffer">
            <ProjectSummary summary={ project.summary } />
            <div className="project__background">
              <h2>Background</h2>
              {project.background.split('\n').map((text, idx) => <p key={idx}>{ text }</p>)}
            </div>
            <ProjectImages projectName={ project.filename } images={ project.images } />
          </div>
        </div>
      </div>
    </div>
  )
}
