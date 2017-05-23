import React from 'react';
import Helmet from 'react-helmet';
import TextField from '../../components/form/TextField'
import SocialIcons from '../../components/icons/SocialIcons';

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
              <TextField
                label="Name"
                errorText={props.errors.name}
                onChange={(evt) => props.onFieldChange('name', evt.target.value) }
              />
              <TextField
                label="Email"
                type="email"
                errorText={props.errors.email}
                onChange={(evt) => props.onFieldChange('email', evt.target.value) }
              />
              <TextField multiline
                label="Message"
                errorText={props.errors.message}
                maxChars={ 1000 }
                onChange={(evt) => props.onFieldChange('message', evt.target.value) }
              />
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
