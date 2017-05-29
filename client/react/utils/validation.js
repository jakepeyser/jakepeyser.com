// Validate the contact form
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi;
export const validateEmailForm = ({ name, email, message }) => {
  const formErrors = {};
  if (!name) formErrors.name = 'I need to know your name';
  if (!email) formErrors.email = 'I am going to need an email so I can get back to you';
  else if (!EMAIL_REGEX.test(email)) formErrors.email = 'Please enter a valid email address';
  if (!message) formErrors.message = 'You forgot to leave a message';
  else if (message.length > 1000) formErrors.message = 'Please limit your message to 1000 characters';
  return formErrors;
}
