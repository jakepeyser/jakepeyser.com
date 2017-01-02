import React from'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default ({ projects, fullView, children }) => {
  const size = fullView ? 'lg' : 'sm';
  return (
    <div id="portfolio-wrapper" className={`portfolio-wrapper-${size}`}>
      <Helmet title="Portfolio" />
      <div className={`portfolio-background-${size}`}></div>
      <div className={`portfolio portfolio-${size}`}>
      {
        projects.map(project => {
          return (
            <Link key={project.id}
              to={`/projects/${project.filename}`}
              onClick={ () => document.body.scrollTop = 0 }
              className={`project-bubble project-bubble-${size}`}
              activeClassName="active-bubble">
              <div className="project-background">
                <div className={'project-wrapper'}>
                  <div className={`project-icon i-${project.filename}`} />
                  <div className="project-text-wrapper">
                    <span className={`project-bubble-text project-bubble-text-${size}`}>
                      { project.name }
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })
      }
      </div>
      { children }
    </div>
  )
};
