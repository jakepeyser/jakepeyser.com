import { combineReducers } from 'redux';
import messageStatus from './contact';
import projects from './projects';
import project from './selectedProject';

export default combineReducers({
  messageStatus,
  projects,
  project
});
