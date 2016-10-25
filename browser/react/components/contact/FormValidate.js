import React from 'react';

export default InnerComponent =>
  class FormValidate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: {},
        value: props.defaultValue || '',
        disabled: true
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(next) {
      const value = next.defaultValue;
      if (!this.props.defaultValue && value)
        this.setState({ value });
    }

    handleSubmit(evt) {
      const { submit } = this.props;
      const { value } = this.state;

      evt.preventDefault();

      return submit(value)
        .catch(err => this.setState({
          error: {
            message: err.message,
            severity: 'danger'
          }
        }));
    }

    handleChange(evt) {
      const { validate } = this.props;
      const value = evt.target.value;
      this.setState(Object.assign({ value }, validate(value)));
    }

    render() {
      const { error, value } = this.state;

      return (
        <InnerComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          {...this.state}
          {...this.props}
        />
      );
    }
  };