import React from "react";

function Task({category, text, taskDelete}) {
  function deleteHandler(e) {
    taskDelete(e.target.id)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" id={text} onClick={deleteHandler}>X</button>
    </div>
  );
}

export default Task;
