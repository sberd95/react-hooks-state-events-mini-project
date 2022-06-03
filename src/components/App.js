import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //state variable for filter
  const [filter, setFilter] = useState('All')
  //state variable to store list of tasks. will be affected by delete button from Task and NewTaskForm
  const [tasks, setTasks] = useState(TASKS)

  //callback going to CategoryFilter
  function changeFilter(selectedFilter) {
    setFilter(selectedFilter)
  }
  //callback going to Task
  function taskDelete(taskText) {
    const newTaskList = [...tasks].filter(task => taskText !== task.text)
    setTasks(newTaskList)
  }
  //callback going to NewTaskForm
  function taskAdd(task) {
    console.log(task)
    setTasks([...tasks, task])
  }
  //making a new variable to filter array before mapping it
  const tasksToMap = tasks.filter(task => (filter === 'All') || (filter === task.category))

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter changeFilter={changeFilter} catList={CATEGORIES} />
      <NewTaskForm taskAdd={taskAdd} catList={CATEGORIES} />
      <TaskList filter={filter} taskList={tasksToMap} taskDelete={taskDelete} />
    </div>
  );
}

export default App;
