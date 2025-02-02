import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //state variable for filter
  const [category, setCategory] = useState('All')
  //state variable to store list of tasks. will be affected by delete button from Task and NewTaskForm
  const [tasks, setTasks] = useState(TASKS)

  //callback going to Task
  function taskDelete(taskText) {
    const newTaskList = [...tasks].filter(task => taskText !== task.text)
    setTasks(newTaskList)
  }
  //callback going to NewTaskForm
  function taskAdd(task) {
    setTasks([...tasks, task])
  }
  //making a new variable to filter array before mapping it
  const tasksToMap = tasks.filter(task => (category === 'All') || (category === task.category))

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter activeFilter={category} changeFilter={setCategory} categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={taskAdd} categories={CATEGORIES.slice(1)} />
      <TaskList tasks={tasksToMap} taskDelete={taskDelete} />
    </div>
  );
}

export default App;
