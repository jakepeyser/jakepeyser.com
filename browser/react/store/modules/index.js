import { combineReducers } from 'redux';
import messageStatus from './contact';
import projects from './projects';
import projectName from './selectedProject';

export default combineReducers({
  messageStatus,
  projects,
  projectName
});
