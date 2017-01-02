import React from 'react';
import { TextField, Menu, MenuItem } from 'material-ui';
import { foreground, active, placeholderText, errorText } from './colors'

// Regular text input
export const JPTextField = props => (
  <TextField
    floatingLabelStyle={{ color: placeholderText, fontSize: '1.2em' }}
    floatingLabelFocusStyle={{ color: active }}
    underlineStyle={{ borderBottomColor: placeholderText }}
    underlineFocusStyle={{ borderBottomColor: active }}
    errorStyle={{ color: errorText, webkitTextFillColor: errorText }}
    { ...props }
  />
);

export const JPMenu = props => (
  <Menu
    className="menu"
    style={{ backgroundColor: foreground }}
    listStyle={{ paddingTop: '0px', paddingBottom: '0px' }}
    { ...props } >
    { props.children }
  </Menu>
)

// Menu item children of Menu
export const JPMenuItem = props => (
  <MenuItem
    disableFocusRipple={ true }
    disableTouchRipple={ true }
    { ...props }
  />
);
