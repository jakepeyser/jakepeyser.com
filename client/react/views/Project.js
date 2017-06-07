import React from 'react';
import Helmet from 'react-helmet';
import Project from './Project';
import Icon from '../components/icons/Icon'
import { getProject, getStaticResourceLink } from '../utils'

const ProjectDecorator = Project => {
  return class ProjectWrapper extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const project = getProject(this.props.params.projectName)
      return (
        <div id="project">
          <Helmet title={ project.name } />
          <div className="project__banner">
            <div className={`project__banner--bg-${project.filename}`} />
          </div>
          <div className="project__content">
            <div className="project__title-wrapper">
              <div className="project__title">
                <h1 className="project__name">{project.name}</h1>
                <div className="project__links">
                {project.links && project.links.map(link => {
                  return <Icon key={ link.url } icon={ link.type } link={ link.url } size="2" />
                })}
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
  }
}

export default ProjectDecorator(Project)
