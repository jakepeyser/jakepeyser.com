import React from 'react';
import Helmet from 'react-helmet';
import FormError from '../form/FormError';
import SocialIcons from '../SocialIcons';
import { TextField } from 'material-ui';
import { black } from 'material-ui/styles/colors';

// Material element styles
const floatingLabelStyle = { color: black, fontSize: "1.2em" };
const floatingLabelFocusStyle = { color: "#8b9dc3" };
const underlineStyle = { borderBottomColor: black }
const underlineFocusStyle = { borderBottomColor: "#8b9dc3" }
const textareaStyle = { marginTop: "-5px" }

export default (props) => {

  let formDiv;
  if (Object.keys(props.messageStatus).length) {
    formDiv =
      <div className="form-sent">
        <p>{`Thank you for your message, ${props.name}. ${props.messageStatus.message} `}</p>
        {
          props.messageStatus.success ?
            <button onClick={ props.handleAnother }>Send Another</button> :
            null
        }
      </div>
  } else {
    formDiv =
      <div className="form">
        <form name="playlistForm" noValidate onSubmit={props.handleSubmit}>
          <fieldset>
            <FormError errors={ props.errors } />
            <div className="form-group contact-form">
              <TextField
                floatingLabelText="Name"
                floatingLabelStyle={floatingLabelStyle}
                floatingLabelFocusStyle={floatingLabelFocusStyle}
                underlineStyle={underlineStyle}
                underlineFocusStyle={underlineFocusStyle}
                fullWidth={true}
                onChange={(evt) => props.onFieldChange('name', evt.target.value) }
              />
              <TextField
                floatingLabelText="Email"
                floatingLabelStyle={floatingLabelStyle}
                floatingLabelFocusStyle={floatingLabelFocusStyle}
                underlineStyle={underlineStyle}
                underlineFocusStyle={underlineFocusStyle}
                fullWidth={true}
                onChange={(evt) => props.onFieldChange('email', evt.target.value) }
              />
              <TextField
                floatingLabelText="Message"
                floatingLabelStyle={floatingLabelStyle}
                floatingLabelFocusStyle={floatingLabelFocusStyle}
                underlineStyle={underlineStyle}
                underlineFocusStyle={underlineFocusStyle}
                textareaStyle={textareaStyle}
                fullWidth={true}
                multiLine={true}
                rows={5}
                rowsMax={5}
                onChange={(evt) => props.onFieldChange('message', evt.target.value) }
              />
              <span>{1000 - props.message.length} characters remaining</span>
              <button type="submit">Send</button>
            </div>
          </fieldset>
        </form>
      </div>
  }

  return (
    <div id="contact">
      <Helmet title="Contact" />
      <div>
        <div className="info">
          <h2>Reach Out</h2>
          <p>
            Please don't hesitate to send me a message if you have any questions
            or comments about the work I do or potential freelance opportunities.
            I am also not averse to the occasional message that simply says hello!
          </p>
          <p className="details">
            Jake Peyser<br/>
            442 3rd Ave, Apt 18<br/>
            New York, NY 10016<br/>
            jakepeyser@gmail.com<br/>
          </p>
          <SocialIcons size="2" />
        </div>
        { formDiv }
      </div>
    </div>
  )
};
