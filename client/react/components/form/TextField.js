import React from 'react';
import PropTypes from 'prop-types';

class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
    this.onChange = this.onChange.bind(this);
  }

  onChange(evt) {
    this.setState({ text: evt.target.value })
    if (this.props.onChange) this.props.onChange(evt)
  }

  render() {
    const { label, type, multiline, maxChars, errorText } = this.props
    const inputType = type || 'text';
    const remainingChars = maxChars ? maxChars - this.state.text.length : null;
    return (
      <div className="text-field">
        {multiline ?
          <textarea
            className="input"
            placeholder={ label }
            rows={ 4 }
            onChange={ this.onChange }
          /> :
          <input
            className="input"
            placeholder={ label }
            type={ inputType }
            onChange={ this.onChange }
          />
        }
        <div className="sub-text">
          {errorText ?
            <span className="input-error">{ errorText }</span> : null
          }
          {maxChars ?
            <span
              className={`counter${remainingChars < 0 ? ' counter--max' : ''}`}>
                { remainingChars }
              </span> : null
          }
        </div>
      </div>
    )
  }
}

TextField.propTypes = {
  multiline: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel', 'url']),
  maxChars: PropTypes.number,
  errorText: PropTypes.string,
  onChange: PropTypes.func
}

export default TextField
