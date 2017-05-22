import React from 'react';
import PropTypes from 'prop-types';

class Icon extends React.Component {
  render() {
    const { icon, link, size } = this.props
    return (
      <a className="icon" href={ link } target="_blank">
        <i className={`fa fa-${icon}${size ? ` fa-${size}x` : ''}`} aria-hidden="true" />
      </a>
    )
  }
}

Icon.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  size: props => {
    if (props.size) {
      const magnify = Number(props.size)
      if (isNaN(magnify))
        return new Error('Size must be a number')
      else if (magnify < 2 || magnify > 5)
        return new Error(`Invalid size of ${magnify}x`)
    }
  }
}

export default Icon
