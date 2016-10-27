import { connect } from 'react-redux';
import Contact from './Contact';
import FormValidate from '../form/FormValidate';
import { newMessage, sendMessage } from '../../redux/contact';

// Validate the contact form
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi;
const validateContactForm = ({ name, email, message }) => {
  const formErrors = []
  if (!name)
    formErrors.push('I need to know your name');
  if (!email)
    formErrors.push('I am going to need an email to get back to you');
  else if (!EMAIL_REGEX.test(email))
    formErrors.push('Please enter a valid email address');
  if (!message)
    formErrors.push('You forgot to leave a message');
  else if (message.length > 1000)
    formErrors.push('Please limit your message to 1000 characters');
  return formErrors;
}

const mapStateToProps = ({ messageStatus }) => ({ messageStatus });

const mapDispatchToProps = dispatch => ({
  send: data => dispatch(sendMessage(data)),
  another: () => dispatch(newMessage()),
  validate: data => validateContactForm(data)
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormValidate(Contact));
