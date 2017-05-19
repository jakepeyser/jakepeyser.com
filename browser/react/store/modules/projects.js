import axios from 'axios';

// ---------------------> TAGS <---------------------
const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

// ----------------> ACTION CREATORS <----------------
const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

// --------------------> THUNKS <--------------------

export const fetchProjects = (done) => dispatch => {
  axios.get('/api/projects')
    .then(res => {
      dispatch(receiveProjects(res.data))
      if (done) done();
    })
    .catch(err => {
      console.error('Unable to fetch projects', err);
      if (done) done(err);
    });
};

// --------------------> REDUCER <--------------------
export default function projects(state = [], action) {
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    default:
      return state;
  }
}
