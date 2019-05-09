import React from "react";

import "./Input.scss";

function Input(props) {
  const { fn, value, children } = props;
  return (
    <div className="container">
      <input
        className="input"
        onChange={fn}
        value={value}
        placeholder={children}
        type="text"
      />
    </div>
  );
}

export default Input;
