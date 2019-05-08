import React, { Component } from "react";

import "normalize.css";
import "./App.scss";

import Header from "components/Header";
import Button from "components/Button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [1, 2, 3]
    };
  }

  handleClear = () => {
    this.setState({ items: [] });
  };

  handleAdd = () => {
    this.setState(prev => {
      
        return {
          items: [...prev.items, "new"]
        }
    });
  };

  handleRemove = () => {
    this.setState(state => {
      const tasks = state.items.filter((elem, i, array) => {
        return i !== array.length - 1;
      });

      return {
        items: tasks
      };
    });
  };

  render() {
    return (
      <>
        <div className="c-container-full c-app__header">
          <Header />
          <div className="o-flex">
            <Button fn={this.handleAdd} name="Add" />
            <Button fn={this.handleRemove} name="Remove" />
            <Button fn={this.handleClear} name="Clear" />
          </div>
        </div>
        <div className="c-container" />
      </>
    );
  }
}

export default App;
