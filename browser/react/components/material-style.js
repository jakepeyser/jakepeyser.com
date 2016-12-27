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
    style={{ backgroundColor: foreground }}
    listStyle={{ paddingTop: '0px', paddingBottom: '0px' }}
    selectedMenuItemStyle={{ color: active }}
    { ...props } >
    { props.children }
  </Menu>
)

// Menu item children of Menu
export const JPMenuItem = props => (
  <MenuItem
    style={{ minHeight: '20px', lineHeight: '20px', padding: '10px 5px' }}
    disableFocusRipple={ true }
    disableTouchRipple={ true }
    { ...props }
  />
);
