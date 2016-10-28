import { connect } from 'react-redux';
import Projects from './Projects';

const mapStateToProps = ({ projects, project }) => ({
  projects,
  fullView: !Object.keys(project).length
})

export default connect(
  mapStateToProps
)(Projects);
