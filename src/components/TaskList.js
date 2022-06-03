import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from 'uuid'
//bringing in taskList array from App
function TaskList({taskList, filter, taskDelete}) {

  return (
    <div className="tasks">
      <ul>
        {/* mapping tasklist array using Task with category and text as props. uuidv4 as a key */}
        {taskList.map(task => {
          return <Task taskDelete={taskDelete} taskCat={task.category} taskText={task.text} key={uuidv4()} />
        })}
      </ul>
    </div>
  );
}

export default TaskList;
