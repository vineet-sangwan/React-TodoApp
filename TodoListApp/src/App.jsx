import React, { useState } from "react";
import ToDoList from "./Components/ToDoList";
import Header from "./Components/Header";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  return (
    <div className="app">
      <Header />
      <ToDoList
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        toggleCompletion={toggleCompletion}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
