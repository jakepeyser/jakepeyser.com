import { connect } from 'react-redux';
import Contact from './Contact';
import FormValidate from './FormValidate';
import { sendMessage } from '../../redux/contact';

// const noError = { disabled: false, error: {} };
// const disable = { disabled: true };
// const warning = { severity: 'warning' };
// const maxLengthWarning = { message: 'Must be at least 16 characters' };
// const nameEmptyWarning = { message: 'Name must not be empty' };
// const tooLong = Object.assign({}, disable, { error: Object.assign({}, warning, maxLengthWarning) });
// const tooShort = Object.assign({}, disable, { error: Object.assign({}, warning, nameEmptyWarning) });

const mapDispatchToProps = dispatch => ({
  send: obj => dispatch(sendMessage(obj))
  // validate: entry => {
  //   if (entry.length > 16)
  //     return tooLong;
  //   else if (!entry)
  //     return tooShort;
  //   else return noError;
  // }
});

module.exports = connect(
  null,
  mapDispatchToProps
)(FormValidate(Contact));
