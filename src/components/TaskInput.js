/* Ali_Mongi-L2Task10-TODOapp */

import React from "react";
import Row from "react-bootstrap/Row";

// form to allow input of tasks
const TaskInput = (props) => {
  return (
    <div class="taskInput">
      <hr></hr>
      <form onSubmit={props.handleSubmit}>
        <Row>
          <h6>What do you wanna do ?</h6>
          <input type="text" value={props.text} onChange={props.handleChange} />

          <button class="btnAdd" onSubmit={props.handleSubmit}>
            Add Task
          </button>
        </Row>
      </form>
      <hr></hr>
    </div>
  );
};

export default TaskInput;
