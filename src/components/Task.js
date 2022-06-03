import React from "react";

function Task({taskCat, taskText, taskDelete}) {
  function deleteHandler(e) {
    taskDelete(e.target.id)
    console.log(e.target);
  }
  return (
    <div className="task">
      <div className="label">{taskCat}</div>
      <div className="text">{taskText}</div>
      <button className="delete" id={taskText} onClick={deleteHandler}>X</button>
    </div>
  );
}

export default Task;
