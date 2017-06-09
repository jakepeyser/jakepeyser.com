import React from 'react'
import Helmet from 'react-helmet'
import Icon from '../components/icons/Icon'
import projects from '../components/projects'

export default ({ params }) => {
  const project = projects[params.projectName]
  const Project = project.component
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
            <div className="project__links">
            {project.links && project.links.map(link => {
              return <Icon key={ link.url } icon={ link.type } link={ link.url } size="2" />
            })}
            </div>
          </div>
        </div>
        <div className="project__content">
          <div className="project__content-buffer">
            <div className="project__summary">
              <h2>Project Summary</h2>
              <table>
                <tbody>
                {Object.keys(project.summary).map(key => {
                  const value = typeof project.summary[key] === 'string'
                    ? project.summary[key].slice(0, 4) === 'http'
                      ? `<a href=${project.summary[key]} target="_blank"}>${project.summary[key]}</a>`
                      : project.summary[key]
                    : project.summary[key].join(', ')
                  return (
                    <tr key={ key } className="project__summary-row">
                      <td>{ key }:</td>
                      <td dangerouslySetInnerHTML={{ __html: value }}></td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
            </div>
            <div className="project__background">
              <h2>Project Summary</h2>
              <p>{ project.background }</p>
            </div>
            <Project />
          </div>
        </div>
      </div>
    </div>
  )
}
