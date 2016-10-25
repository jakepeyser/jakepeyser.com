// ---------------------> TAGS <---------------------
const SELECT_PROJECT = 'SELECT_PROJECT';

// ----------------> ACTION CREATORS <----------------
const selectProject = projectId => ({
  type: SELECT_PROJECT,
  projectId
});

// --------------------> REDUCER <--------------------
export default function projectId(state = null, action) {
  switch (action.type) {
    case SELECT_PROJECT:
      return action.projectId;
    default:
      return state;
  }
}
