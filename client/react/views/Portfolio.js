import React from 'react'
import Helmet from 'react-helmet'
import ProjectBubble from '../components/ProjectBubble'
import classNames from 'classnames'
import projects from '../data/projects'
import { getStaticResourceLink } from '../utils'

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadedProjects: []
    }
    this.preloadProjectImage = this.preloadProjectImage.bind(this)
  }

  // When hovering over a project bubble, preload images to improve performance
  preloadProjectImage({ target }) {
    // Bubble up to link wrapper if needed
    while (target.nodeName !== 'A') {
      target = target.parentNode
    }

    // Load corresponding project's images if not yet loaded
    let project = target.dataset.project
    if (!this.state.loadedProjects.includes(project)) {
      const projectBanner = new Image()
      projectBanner.src = getStaticResourceLink(`images/${project}/banner.png`)
      this.setState({ loadedProjects: [...this.state.loadedProjects, project] })
    }
  }

  render() {
    const fullView = this.props.location.pathname === '/portfolio'
    const portfolioClass = classNames('portfolio', { 'portfolio--sm': !fullView })
    return (
      <div id="portfolio" className={ portfolioClass }>
        <Helmet title="Portfolio" />
        <div className="project-bubbles__wrapper">
          <div className="project-bubbles__bg" />
          <div className="project-bubbles">
          {projects.map(project =>
            <ProjectBubble key={ project.id }
              name={ project.name }
              filename={ project.filename }
              small={ !fullView }
              bubbleHover={ this.preloadProjectImage }
            />
          )}
          </div>
        </div>
        { this.props.children }
      </div>
    )
  }
}
