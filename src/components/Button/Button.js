import React from 'react';

import './Button.scss';

function Button(props) {
  return (
    <div className="c-button">
      <p>{props.name}</p>
    </div>
  );
}

export default Button;
