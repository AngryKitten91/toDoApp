import React from 'react';

import './Button.scss';

function Button(props) {

  const {name, fn} = props
  
  return (
    <div onClick={fn} className="c-button">
      <p>{name}</p>
    </div>
  );
}

export default Button;
