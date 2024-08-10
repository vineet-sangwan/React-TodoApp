import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, addTask, deleteTask, toggleCompletion, editTask }) {
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput) {
      const newTask = {
        id: Date.now(),
        title: taskInput,
        completed: false,
      };
      addTask(newTask);
      setTaskInput("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Input and Button Container */}
      <div className="flex flex-col lg:flex-row items-center gap-4 mb-8">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Add Task
        </button>
      </div>

      {/* Task List Container */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <ul className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-gray-50 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <ToDoItem
                task={task}
                deleteTask={deleteTask}
                toggleCompletion={toggleCompletion}
                editTask={editTask}
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
