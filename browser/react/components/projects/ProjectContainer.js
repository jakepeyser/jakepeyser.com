import { connect } from 'react-redux';
import Project from './Project';

const mapStateToProps = ({ projects, projectName }) => ({
  project: projects.find(proj => proj.filename === projectName)
});

export default connect(
  mapStateToProps
)(Project);
