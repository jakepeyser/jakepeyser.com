import React from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
  errors: {}
}

export default InnerComponent =>
  class FormValidate extends React.Component {
    constructor(props) {
      super(props);
      this.state = initialState;
      this.onFieldChange = this.onFieldChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleAnother = this.handleAnother.bind(this);
    }

    // Clear the state and show the form again
    handleAnother() {
      this.setState(initialState);
      this.props.another();
    }

    // Validate and submit the form to the server
    handleSubmit(evt) {
      evt.preventDefault();
      const { name, email, message } = this.state;
      const { validate, send } = this.props;

      // Check form data for errors
      const messageData = { name, email, message };
      const formErrors = validate(messageData);

      // If valid, send to server. Otherwise, show errors
      if (!Object.keys(formErrors).length) send(messageData);
      else this.setState({ errors: formErrors });
    }

    // Update changed field and reset potential corresponding error
    onFieldChange(field, value) {
      let newState = {};
      newState[field] = value;
      if (this.state.errors[field]) {
        let newErrs = this.state.errors;
        delete newErrs[field]
        newState.errors = newErrs;
      }
      this.setState(newState);
    }

    render() {
      return (
        <InnerComponent
          onFieldChange={this.onFieldChange}
          handleSubmit={this.handleSubmit}
          handleAnother={this.handleAnother}
          {...this.state}
          {...this.props}
        />
      );
    }
  };
