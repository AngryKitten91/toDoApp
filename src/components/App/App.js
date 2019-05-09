import React, { Component } from "react";

import "normalize.css";
import "./App.scss";

import Header from "components/Header";
import Button from "components/Button";
import Input from "components/Input"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      title: "To Do App",
      content: ''
    };
  }

  handleClear = () => {
    this.setState({ items: [] });
  };

  handleAdd = () => {

    if (!this.state.content.length) {
      return;
    }
    const newTask = {
      value: this.state.content,
    };

    this.setState(prev => {
      return {
        items: [...prev.items, newTask],
        content: ''
      };
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

  handleChange = (event) => {
    this.setState({ content: event.target.value });
  }

  render() {

    const { title, items, content } = this.state;

    const placehoderMsg = 'Placeholder';

    return (
      <>
        <div className="container-full container-dark">
          <Header title={title} />
          <div className="container container-flex">
            <Button fn={this.handleAdd} name="Add" />
            <Button fn={this.handleRemove} name="Remove" />
            <Button fn={this.handleClear} name="Clear" />
            </div>
            <Input value={content} fn={this.handleChange}>{placehoderMsg}</Input>
        </div>
        <div className="container">
          {items &&
            items.map((elem, i) => {
              return <p key={i}>{elem.value}</p>;
            })}
        </div>
      </>
    );
  }
}

export default App;
