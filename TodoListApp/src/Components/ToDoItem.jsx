import React, { useState } from "react";

function ToDoItem({ task, deleteTask, toggleCompletion, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, newTitle);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li
      className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
        task.completed ? "bg-green-100" : "bg-gray-50"
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompletion(task.id)}
        className="form-checkbox h-5 w-5 text-blue-500"
      />
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-1 py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
      ) : (
        <span
          onClick={() => toggleCompletion(task.id)}
          className={`flex-1 cursor-pointer ${
            task.completed ? "line-through text-gray-500" : "text-gray-900"
          }`}
        >
          {task.title}
        </span>
      )}
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
      >
        Delete
      </button>
      <button
        onClick={handleEdit}
        className="bg-blue-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}

export default ToDoItem;
