import React from "react";

import "./Header.scss";

function Task(props) {

  const {title, number, content} = props;

  return (
    <div className="task">
      <p>{`Task number: ${number}`}</p>
      <p>{`Task title: ${title}`}</p>
      <p>{`Task content: ${content}`}</p>
    </div>
  );
}

export default Task;
