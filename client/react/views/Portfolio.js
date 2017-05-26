import React from 'react'
import Helmet from 'react-helmet'
import ProjectBubble from '../components/ProjectBubble'
import classNames from 'classnames'
import projects from '../data/projects'

export default ({ children, location }) => {
  const fullView = location.pathname === '/projects'
  const portfolioClass = classNames('portfolio', { 'portfolio--sm': !fullView })
  return (
    <div id="portfolio" className={ portfolioClass }>
      <Helmet title="Portfolio" />
      <div className="project-bubbles__wrapper">
        <div className="project-bubbles">
        {projects.map(project =>
          <ProjectBubble key={ project.id }
            name={ project.name }
            filename={ project.filename }
            small={ !fullView }
          />
        )}
        </div>
      </div>
      { children }
    </div>
  )
}
