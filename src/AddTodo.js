// src/AddTodo.js
import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [category, setCategory] = useState('todo');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      addTodo(newTodo, category);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
      />
      <select
        value={category}
        onChange={handleCategoryChange}
        className="mt-2 px-4 py-2 rounded"
      >
        <option value="todo">To Do</option>
        <option value="In Review">In Review</option>
        <option value="In Progress">In Progress</option>
      </select>
      <button type="submit" className="mt-2 px-4 py-2 add-btn">
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;

