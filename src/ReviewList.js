// src/ReviewList.js
import React from 'react';
import TodoItem from './TodoItem';

const ReviewList = ({ todos, removeTodo }) => {
  const reviewTodos = todos.filter((todo) => todo.review);

  return (
    <ul className="todo-list">
      {reviewTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default ReviewList;
