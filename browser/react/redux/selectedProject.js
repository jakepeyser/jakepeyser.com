import axios from 'axios';

// ---------------------> TAGS <---------------------
const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
const LEAVE_PROJECT = 'LEAVE_PROJECT';

// ----------------> ACTION CREATORS <----------------
const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const leaveProject = () => ({
  type: LEAVE_PROJECT
});

// --------------------> THUNKS <--------------------

export const fetchProject = (name) => dispatch => {
  axios.get(`/api/projects/${name}`)
    .then(res => dispatch(receiveProject(res.data)))
    .catch(err => {
      console.error(`Unable to fetch ${name} project`, err);
    });
};

// --------------------> REDUCER <--------------------
export default function project(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PROJECT:
      return action.project;
    case LEAVE_PROJECT:
      return {};
    default:
      return state;
  }
}
