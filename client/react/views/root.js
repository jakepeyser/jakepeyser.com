/* eslint-disable no-unused-vars*/

// React modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { getProject } from '../utils';

// React views
import App from './App';
import Home from './Home';
import Portfolio from './Portfolio';
import Project from './Project';
import Resume from './Resume';
import Contact from './Contact';
import FourOhFour from './FourOhFour'


// onEnter functions
const onAppEnter = (nextState, replace) => {
  if (nextState.location.pathname === '/') replace('/home');
};
const validProject = (nextState, replace) => {
  if (!getProject(nextState.params.projectName))
    replace('/invalid-project');
};

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={onAppEnter}>
      <Route path="/home" component={Home} />
      <Route path="/portfolio" component={Portfolio}>
        <Route path="/portfolio/:projectName" component={Project} onEnter={validProject}/>
      </Route>
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route path="/*" component={ FourOhFour } />
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('app')
);
