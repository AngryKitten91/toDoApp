import React from 'react';

import './Button.scss';

function Button(props) {

  const {children, fn} = props
  
  return (
    <div onClick={fn} className="container-flex button button-dark">
      {children}
    </div>
  );
}

export default Button;
