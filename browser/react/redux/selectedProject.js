import axios from 'axios';

// ---------------------> TAGS <---------------------
const SELECT_PROJECT = 'SELECT_PROJECT';
const LEAVE_PROJECT = 'LEAVE_PROJECT';

// ----------------> ACTION CREATORS <----------------
export const selectProject = projectName => ({
  type: SELECT_PROJECT,
  projectName
});

export const leaveProject = () => ({
  type: LEAVE_PROJECT
});

// --------------------> REDUCER <--------------------
export default function project(state = null, action) {
  switch (action.type) {
    case SELECT_PROJECT:
      return action.projectName;
    case LEAVE_PROJECT:
      return null;
    default:
      return state;
  }
}
