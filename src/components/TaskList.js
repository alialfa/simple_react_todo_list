/* Ali_Mongi-L2Task10-TODOapp */

import React from "react";
import Row from "react-bootstrap/Row";

// iterate through tasks, display them with their delete buttons
const TaskList = (props) => {
  const tList = props.tasks.map((task, index) => {
    return (
      <div class="taskRow">
        <Row>
          <button onClick={props.handleClick} value={index} class="taskBtn">
            x
          </button>
          <li>{task}</li>
        </Row>
      </div>
    );
  });

  return (
    <div class="taskList">
      <ol>{tList}</ol>
    </div>
  );
};

export default TaskList;
