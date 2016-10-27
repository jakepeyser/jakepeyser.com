import React from 'react';

const initialState = {
  errors: [],
  name: '',
  email: '',
  message: ''
}

export default InnerComponent =>
  class FormValidate extends React.Component {
    constructor(props) {
      super(props);
      this.state = Object.assign({}, initialState);
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
      if (!formErrors.length) {
        send(messageData);
      } else
        this.setState({ errors: formErrors });
    }

    // Keep track of input field updates
    onFieldChange(field, value) {
      let newState = {};
      newState[field] = value;
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
