import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  //state variable to track new Task
  const [newTask, setNewTask] = useState({text:'', category:'Code'})
  //controlled input for text
  function textHandler(e){
    setNewTask({...newTask, text:e.target.value})
  }
  //controlled input for category
  function catHandler(e){
    setNewTask({...newTask, category:e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={textHandler}/>
      </label>
      <label>
        Category
        <select name="category" onChange={catHandler}>
          {categories.map(cat => {
            return <option key={cat} value={cat}>{cat}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
