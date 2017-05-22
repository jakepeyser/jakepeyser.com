/* eslint-disable no-unused-vars*/

// React/Redux modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import store from '../store';
import { Provider } from 'react-redux';
import { getProject } from '../utils';

// React containers and components
import App from './App';
import Home from './Home';
import Projects from './Projects';
import Project from './Project';
import Resume from './Resume';
import ContactContainer from './contact/ContactContainer';
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
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>
        <Route path="/home" component={Home} />
        <Route path="/projects" component={Projects}>
          <Route path="/projects/:projectName" component={Project} onEnter={validProject}/>
        </Route>
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={ContactContainer} />
        <Route path="/*" component={ FourOhFour } />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
