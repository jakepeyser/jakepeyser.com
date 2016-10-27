import React from 'react';

export default ({ errors }) => {
  if (!errors || !errors.length) return null;
  return (
    <div id="contact-form-errors">
      { errors.map((err, i) => <span key={i} className="alert">{err}</span>) }
    </div>
  );
};
