// src/ProgressList.js
import React from 'react';
import TodoItem from './TodoItem';

const ProgressList = ({ todos, removeTodo }) => {
  const progressTodos = todos.filter((todo) => todo.progress);

  return (
    <ul className="todo-list">
      {progressTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default ProgressList;
