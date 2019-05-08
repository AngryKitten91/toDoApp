import React, { Component } from "react";

import "normalize.css";
import "./App.scss";

import Header from "components/Header";
import Button from "components/Button";

class App extends Component {
  
  render() {
    return (
      <>
        <div className="c-container-full c-app__header">
          <Header />
          <div className="o-flex">
            <Button name="Add" />
            <Button name="Remove" />
            <Button name="Clear" />
          </div>
        </div>
        <div className="c-container" />
      </>
    );
  }
}

export default App;
