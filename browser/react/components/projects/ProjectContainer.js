import { connect } from 'react-redux';
import { createSelector } from 'reselect'
import Project from './Project';

const getSelectedProject = createSelector(
  [ state => state.projects, state => state.projectName ],
  (projects, projectName) => projects.find(proj => proj.filename === projectName)
)

const mapStateToProps = state => ({
  project: getSelectedProject(state)
});

export default connect(
  mapStateToProps
)(Project);
