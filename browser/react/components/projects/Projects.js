import React from'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default ({ projects, fullView, children }) => (
  <div id="portfolio-wrapper">
    <Helmet title="Portfolio" />
    <div id={fullView ? 'portfolio' : 'portfolio-switcher'}>
    {
      projects.map(project => {
        return (
          <div key={project.id} className={fullView ? 'project' : 'project-switcher'}>
            <Link to={`/projects/${project.filename}`}
            className={`project-bubble i-${project.filename}`} activeClassName="active-bubble">
              <div className="project-text-wrapper">
                <span>{project.name}</span>
              </div>
            </Link>
          </div>
        )
      })
    }
    </div>
    { children }
  </div>
);
