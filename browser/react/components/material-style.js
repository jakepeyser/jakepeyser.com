import React from 'react';
import { TextField, Menu, MenuItem } from 'material-ui';
import { COLORS } from '../utils/constants'

// Regular text input
export const JPTextField = props => (
  <TextField
    floatingLabelStyle={{ color: COLORS.PLACEHOLDER_TEXT, fontSize: '1.2em' }}
    floatingLabelFocusStyle={{ color: COLORS.ACTIVE }}
    underlineStyle={{ borderBottomColor: COLORS.PLACEHOLDER_TEXT }}
    underlineFocusStyle={{ borderBottomColor: COLORS.ACTIVE }}
    errorStyle={{ color: errorText, webkitTextFillColor: COLORS.ERROR_TEXT }}
    { ...props }
  />
);

export const JPMenu = props => (
  <Menu
    className="menu"
    style={{ backgroundColor: COLORS.FOREGROUND }}
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
