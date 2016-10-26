// ---------------------> TAGS <---------------------
const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

// ----------------> ACTION CREATORS <----------------
const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

// --------------------> THUNKS <--------------------

export const fetchProject = (name) => dispatch => {
  fetch(`/api/projects/${name}`)
    .then(res => res.json())
    .then(project => dispatch(receiveProject(project)))
    .catch(err => {
      console.error(`Unable to fetch ${name} project`, err);
    });
};

// --------------------> REDUCER <--------------------
export default function project(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PROJECT:
      return action.project;
    default:
      return state;
  }
}
