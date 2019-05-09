import React from 'react';

import './Button.scss';

function Button(props) {

  const {name, fn} = props
  
  return (
    <div onClick={fn} className="button button-dark">
      <p>{name}</p>
    </div>
  );
}

export default Button;
