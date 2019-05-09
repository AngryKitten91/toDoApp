import React from "react";

import "./Task.scss";

function Task(props) {

  const {children, id} = props;

  return (
    <div className="container container-flex-space-between task task-content">
      <div>{`Task number: ${id + 1}`}</div>
      <div className="">{children}</div>
    </div>
  );
}

export default Task;
