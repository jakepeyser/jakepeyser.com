import React from 'react'
import axios from 'axios'
import TextField from './TextField'
import { validateEmailForm as validate } from '../../utils/validation'

const initialState = {
  sent: false,
  success: null,
  result: null,
  name: '',
  email: '',
  message: '',
  errors: {}
}

const SUCCESS_RESULT = 'I will do my best to get back to you shortly!'
const ERROR_RESULT = 'Unfortunately, there was an issue and it did not go through. Please try again later or contact me directly over email.'

export default class EmailForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
    this.handleAnother = this.handleAnother.bind(this)
    this.onFieldChange = this.onFieldChange.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
  }

  // Clear the state and show the form again
  handleAnother() {
    this.setState(initialState)
  }

  // Update changed field and reset potential corresponding error
  onFieldChange(field, value) {
    const newState = {}
    newState[field] = value
    if (this.state.errors[field]) {
      let newErrs = this.state.errors
      delete newErrs[field]
      newState.errors = newErrs
    }
    this.setState(newState)
  }

  sendEmail(evt) {
    // Run the form thru validation
    evt.preventDefault()
    const formErrors = validate(this.state);

    // If invalid, show errors and exit
    if (Object.keys(formErrors).length)
      return this.setState({ errors: formErrors })

    // No errors so send email thru server
    let success, result
    let { name, email, message } = this.state
    axios.post('/api/contact', { name, email, message })
      .then(() => {
        success = true
        result = SUCCESS_RESULT
      })
      .catch(err => {
        console.error('Error sending message', err)
        success = false
        result = ERROR_RESULT
      })
      .then(() => {
        this.setState({ sent: true, success, result })
      })
  }

  render() {
    const { sent, success, result, name, errors } = this.state
    return (
      <div className="email-form">
      {sent ?
        <div className="form-sent animated flipInY">
          <p>{`Thank you for your message, ${name}. ${result}`}</p>
          {success ? <button onClick={ this.handleAnother }>Send Another</button> : null}
        </div> :
        <div className="form">
          <form name="contactForm" noValidate onSubmit={ this.sendEmail }>
            <fieldset>
              <div className="form-group contact-form">
                <TextField
                  label="Name"
                  errorText={ errors.name }
                  onChange={(evt) => this.onFieldChange('name', evt.target.value) }
                />
                <TextField
                  label="Email"
                  type="email"
                  errorText={ errors.email }
                  onChange={(evt) => this.onFieldChange('email', evt.target.value) }
                />
                <TextField multiline
                  label="Message"
                  errorText={ errors.message }
                  maxChars={ 1000 }
                  onChange={(evt) => this.onFieldChange('message', evt.target.value) }
                />
                <button type="submit">Send</button>
              </div>
            </fieldset>
          </form>
        </div>
      }
      </div>
    )
  }
}
