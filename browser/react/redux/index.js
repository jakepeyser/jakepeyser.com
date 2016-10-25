import { combineReducers } from 'redux';
import messageStatus from './contact';
import projects from './projects';
import projectId from './selectedProject';

export default combineReducers({
  messageStatus,
  projects,
  projectId
});
