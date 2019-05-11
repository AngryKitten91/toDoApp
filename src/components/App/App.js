import React, { Component } from "react";

import "normalize.css";
import "./App.scss";

import Header from "components/Header";
import Button from "components/Button";
import Input from "components/Input";
import Task from "components/Task";
import ErrorBox from "components/ErrorBox";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      title: "To Do App",
      content: "",
      error: null
    };
  }

  handleClear = () => {
    const { items } = this.state;

    if (!items.length) {
      const msg = "Please add some tasks first";
      this.setState({ error: msg });
    } else {
      this.setState({ items: [] });
    }
  };

  handleAdd = () => {
    const { content } = this.state;

    if (!content.length) {
      const msg = "Please enter task name and try again";
      this.setState({ error: msg });
    } else {
      const newTask = {
        value: content
      };

      this.setState(prev => {
        return {
          items: [...prev.items, newTask],
          content: "",
          error: null
        };
      });
    }
  };

  handleRemove = () => {
    const { items } = this.state;
    
    if (!items.length) {
      const msg = "Please add new task";
      this.setState({ error: msg });
    } else {
      this.setState(state => {
        const tasks = state.items.filter((elem, i, array) => {
          return i !== array.length - 1;
        });

        return {
          items: tasks,
          error: null
        };
      });
    }
  };

  handleChange = event => {
    const { value } = event.target;

    if (value.length >= 20) {
      const msg = "Task name should contain maximum 20 characters";
      this.setState({ error: msg });
    } else {
      this.setState({ content: event.target.value, error: null });
    }
  };

  render() {
    const { title, items, content, error } = this.state;

    return (
      <>
        <div className="container-full container-dark">
          <Header title={title} />
          <div className="container container-flex">
            <Button fn={this.handleAdd}>Add</Button>
            <Button fn={this.handleRemove}>Remove Last</Button>
            <Button fn={this.handleClear}>Clear All</Button>
          </div>
          <Input value={content} fn={this.handleChange}>
            Please enter task name...
          </Input>
        </div>

        {error && <ErrorBox value={error} />}
        {!items.length && (
          <div className="container-full info container-flex">
            <h2>
              Get organized, Stay on track,
              <br />
              Add some tasks!
            </h2>
          </div>
        )}
        <div className="m-top-10 container">
          {items &&
            items.map((elem, i) => {
              return (
                <Task id={i} key={i}>
                  {elem.value}
                </Task>
              );
            })}
        </div>
      </>
    );
  }
}

export default App;
