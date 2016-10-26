import { connect } from 'react-redux';
import Project from './Project';

const mapStateToProps = ({ project }) => ({ project });

export default connect(
  mapStateToProps
)(Project);
