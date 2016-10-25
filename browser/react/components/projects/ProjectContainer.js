import { connect } from 'react-redux';
import Project from './Project';

const mapStateToProps = ({ projects, projectId }) => ({
  project: projects[0] // Dynamically look up using ID
});

export default connect(
  mapStateToProps
)(Project);
