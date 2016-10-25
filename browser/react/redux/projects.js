// ---------------------> TAGS <---------------------
const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

// ----------------> ACTION CREATORS <----------------
const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

// --------------------> THUNKS <--------------------

export const fetchProjects = () => dispatch => {
  fetch('/api/projects')
    .then(res => res.json())
    .then(projects => dispatch(receiveProjects(projects)))
    .catch(err => {
      console.error('Unable to fetch projects', err);
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
