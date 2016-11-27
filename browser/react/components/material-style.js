import React from 'react';
import { TextField } from 'material-ui';
import { active, placeholderText, errorText} from './colors'

// Regular text input
export const JPTextField = props => (
  <TextField
    floatingLabelStyle={{ color: placeholderText, fontSize: '1.2em' }}
    floatingLabelFocusStyle={{ color: active }}
    underlineStyle={{ borderBottomColor: placeholderText }}
    underlineFocusStyle={{ borderBottomColor: active }}
    errorStyle={{ color: errorText }}
    { ...props }
  />
);
