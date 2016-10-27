import React from'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default ({ projects, selectProject }) => (
  <div id="portfolio">
    <Helmet title="Portfolio" />
    {
      projects.map(project => {
        return (
          <div key={project.id} className="project">
            <Link to={`/projects/${project.filename}`}
            className={`project-link i-${project.filename}`}>
              <div className="project-name-wrapper">
                <span>{project.name}</span>
              </div>
            </Link>
          </div>
        )
      })
    }
  </div>
);
