import { connect } from 'react-redux';
import Navbar from './Navbar';
import { leaveProject } from '../../store/modules/selectedProject'

const mapDispatchToProps = dispatch => ({
  removeProject: () => dispatch(leaveProject())
});

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
