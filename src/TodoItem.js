// src/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <li className="flex items-center justify-between p-2 bg-gray-200 my-2 rounded">
      {todo.text}
      <button
        className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
        onClick={() => removeTodo(todo.id)}
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;

