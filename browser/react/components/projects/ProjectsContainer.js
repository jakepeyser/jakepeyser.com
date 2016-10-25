import { connect } from 'react-redux';
import Projects from './Projects';

const mapStateToProps = ({ projects }) => ({ projects });

export default connect(
  mapStateToProps
)(Projects);
