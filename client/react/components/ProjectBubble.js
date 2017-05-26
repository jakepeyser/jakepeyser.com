import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

export default ({ name, filename, small }) => {
  const bubbleClass = classNames('project-bubble', { 'project-bubble--sm': small })
  const bubbleIconClass = classNames('project-bubble__icon', `i-${filename}`)
  const bubbleTextClass = classNames('project-bubble__text', { 'project-bubble__text--sm': small })
  return (
    <Link to={`/projects/${filename}`}
      className={ bubbleClass }
      activeClassName="project-bubble--active"
      onClick={ () => {
        const projContainer = document.querySelector('#project');
        if (projContainer) projContainer.scrollTop = 0;
      }}>
      <div className="project-bubble__wrapper">
        <div className={ bubbleIconClass } />
        <div className="project-bubble__text-wrapper">
          <span className={ bubbleTextClass }>{ name }</span>
        </div>
      </div>
    </Link>
  )
}
