import React from'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default ({ projects, fullView, children }) => {
  const size = fullView ? 'lg' : 'sm';
  return (
    <div id={`portfolio-wrapper-${size}`}>
      <Helmet title="Portfolio" />
      <div className={`portfolio portfolio-${size}`}>
      {
        projects.map(project => {
          return (
            <div key={project.id} className={`project project-${size}`}>
              <Link to={`/projects/${project.filename}`}
                className={`project-bubble project-bubble-${size} i-${project.filename}`}
                activeClassName="active-bubble">
                <div className={"project-text-wrapper"}>
                  <span className={`project-bubble-text project-bubble-text-${size}`}>
                    { project.name }
                  </span>
                </div>
              </Link>
            </div>
          )
        })
      }
      </div>
      { children }
    </div>
  )
};
