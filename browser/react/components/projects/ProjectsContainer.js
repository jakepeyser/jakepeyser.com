import { connect } from 'react-redux';
import Projects from './Projects';

const mapStateToProps = ({ projects, projectName }) => ({
  projects,
  fullView: !projectName
})

export default connect(
  mapStateToProps
)(Projects);
