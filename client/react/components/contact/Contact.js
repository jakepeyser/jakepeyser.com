import React from 'react';
import Helmet from 'react-helmet';
import SocialIcons from '../SocialIcons';
import { JPTextField } from '../material-style';

export default (props) => {

  let formDiv;
  if (Object.keys(props.messageStatus).length) {
    formDiv =
      <div className="form-sent animated flipInY">
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
        <form name="contactForm" noValidate onSubmit={props.handleSubmit}>
          <fieldset>
            <div className="form-group contact-form">
              <JPTextField
                floatingLabelText="Name"
                errorText={props.errors.name}
                fullWidth={true}
                onChange={(evt) => props.onFieldChange('name', evt.target.value) }
              />
              <JPTextField
                floatingLabelText="Email"
                type="email"
                errorText={props.errors.email}
                fullWidth={true}
                onChange={(evt) => props.onFieldChange('email', evt.target.value) }
              />
              <JPTextField
                floatingLabelText="Message"
                textareaStyle={{ marginTop: '-5px' }}
                errorText={props.errors.message}
                fullWidth={true}
                multiLine={true}
                rows={4} rowsMax={4}
                onChange={(evt) => props.onFieldChange('message', evt.target.value) }
              />
              <span>{1000 - props.message.length}</span>
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
        <div className="contact-info">
          <h2>Reach Out</h2>
          <p>
            Please don't hesitate to send me a message if you have any questions
            or comments about the work I do or potential freelance opportunities.
            I am also not averse to the occasional random hello!
          </p>
          <p className="details">
            Jake Peyser<br/>
            New York, NY<br/>
            jakepeyser@gmail.com<br/>
          </p>
          <SocialIcons size="2" />
        </div>
        { formDiv }
      </div>
    </div>
  )
};
