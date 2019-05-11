import React from "react";

function ErrorBox(props) {
  const { value } = props;

  return (
    <div className="container-sticky error container-full container-flex container-warning">
      <p>{value}</p>
    </div>
  );
}

export default ErrorBox;
