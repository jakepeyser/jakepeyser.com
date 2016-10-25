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
import ContactContainer from './components/contact/ContactContainer';

// Redux thunks
import { fetchProjects } from './redux/projects';

// onEnter functions
const onAppEnter = nextRouterState => {
  store.dispatch(fetchProjects());
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>
        <Route path="/home" component={Home} />
        <Route path="/projects" component={ProjectsContainer} />
        <Route path="/projects/:projectId" component={ProjectContainer} />
        <Route path="/contact" component={ContactContainer} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
