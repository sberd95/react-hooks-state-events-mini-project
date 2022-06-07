import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from 'uuid'
//bringing in taskList array from App
function TaskList({taskList, taskDelete}) {

  const taskArray = taskList.map(task => {
    return <Task taskDelete={taskDelete} taskCat={task.category} className="task" taskText={task.text} key={uuidv4()} />
  })
  return (
    <div className="tasks">
        {/* mapping tasklist array using Task with category and text as props. uuidv4 as a key */}
        {taskArray}
    </div>
  );
}

export default TaskList;
