import axios from 'axios';

// ---------------------> TAGS <---------------------
const MESSAGE_SENT = 'MESSAGE_SENT';
const NEW_MESSAGE = 'NEW_MESSAGE';

const SUCCESS_MESSAGE = `Your message has been received and
                         I will do my best to get back to you shortly!`;
const ERROR_MESSAGE = `There was an issue sending your message. Please try
                       again later or contact me through another medium.`;

// ----------------> ACTION CREATORS <----------------
const showMessageStatus = success => ({
  type: MESSAGE_SENT,
  success
});

export const newMessage = () => ({
  type: NEW_MESSAGE
});

// --------------------> THUNKS <--------------------

// Send the contact message and dispatch success status
export const sendMessage = data => dispatch => {
  axios.post('/api/contact', data)
    .then(() => dispatch(showMessageStatus(true)))
    .catch(err => {
      console.error('Error sending contact message', err);
      dispatch(showMessageStatus(false));
    });
};

// --------------------> REDUCER <--------------------
export default function messageStatus(state = {}, action) {
  switch (action.type) {
    case NEW_MESSAGE:
      return null;
    case MESSAGE_SENT:
      return action.success ?
        { success: true, message: SUCCESS_MESSAGE } :
        { success: false, message: ERROR_MESSAGE };
    default:
      return state;
  }
}
