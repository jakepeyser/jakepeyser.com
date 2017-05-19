/* eslint-disable no-unused-vars*/

// React/Redux modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import store from './store';
import { Provider } from 'react-redux';
import { getProject } from './utils';

// React containers and components
import App from './components/App';
import Home from './components/Home';
import Projects from './components/projects/Projects';
import Project from './components/projects/Project';
import Resume from './components/Resume';
import ContactContainer from './components/contact/ContactContainer';
import FourOhFour from './components/404/FourOhFour'


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
