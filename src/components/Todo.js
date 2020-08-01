/* Ali_Mongi-L2Task10-TODOapp */

import React from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TaskInput from "../components/TaskInput";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    // initialize state vars
    this.state = {
      text: "",
      tasks: [],
    };

    // context binding for events
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // if input changes
  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  // when task is ready, handle to store it
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.text.length === 0) {
      alert("Please key in a task!");
      return;
    }

    this.setState((state) => ({
      tasks: state.tasks.concat(this.state.text),
      text: "",
    }));
  }

  // when we wish to remove a task that was added
  handleClick(e) {
    const taskToRemove = this.state.tasks[e.target.value];
    const taskToRemoveIndex = e.target.value;
    //const taskToRemoveLen = taskToRemove.length;

    if (
      window.confirm(
        "Would you like to remove Task: " +
          (parseInt(taskToRemoveIndex) + 1) +
          " ?"
      )
    ) {
      this.setState((state) => ({
        //tasks: state.tasks.splice(taskToRemoveIndex, 1),
        tasks: state.tasks.filter((f) => f !== taskToRemove),
      }));
    }
  }

  render() {
    return (
      <Container fluid="sm">
        <Col className="todo">
          <Header />
          <div className="todoArea">
            <TaskList tasks={this.state.tasks} handleClick={this.handleClick} />
            <TaskInput
              text={this.state.text}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </Col>
      </Container>
    );
  }
}

export default Todo;
