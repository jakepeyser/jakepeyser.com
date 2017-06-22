import React from 'react'
import Helmet from 'react-helmet'
import BubbleCarousel from '../components/bubbles/BubbleCarousel'
import projects from '../../projects'
import classNames from 'classnames'

export default ({ location, children }) => {
  const fullView = location.pathname === '/portfolio'
  const portfolioClass = classNames('portfolio', { 'portfolio--sm': !fullView })

  // If on a project page, determine what index the bubble will be
  let projectIndex
  if (location.pathname.slice(-9) !== 'portfolio') {
    let curProject = location.pathname.slice(location.pathname.lastIndexOf('/') + 1)
    projectIndex = Object.keys(projects).indexOf(curProject) + 1
  }

  return (
    <div id="portfolio" className={ portfolioClass }>
      <Helmet title="Portfolio" />
      <BubbleCarousel active={ !fullView } projectIndex={ projectIndex } />
      { children }
    </div>
  )
}
