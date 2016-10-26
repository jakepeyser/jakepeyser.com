/* eslint-disable no-unused-vars*/

// React/Redux modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import store from './store';
import { Provider } from 'react-redux';

// React containers and components
import App from './components/App';
import Home from './components/Home';
import ProjectsContainer from './components/projects/ProjectsContainer';
import ProjectContainer from './components/projects/ProjectContainer';
import Resume from './components/Resume';
import ContactContainer from './components/contact/ContactContainer';

// Redux thunks and action creators
import { fetchProjects } from './redux/projects';
import { fetchProject } from './redux/selectedProject'

// onEnter functions
const onAppEnter = () => {
  store.dispatch(fetchProjects());
};
const getProject = nextState => {
  store.dispatch(fetchProject(nextState.params.projectName));
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>
        <Route path="/home" component={Home} />
        <Route path="/projects" component={ProjectsContainer} />
        <Route path="/projects/:projectName"
          component={ProjectContainer} onEnter={getProject}/>
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={ContactContainer} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
