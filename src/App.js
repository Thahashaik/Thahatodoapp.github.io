// src/App.js
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './styles.css'; // Import the CSS file

function App() {
  const [todos, setTodos] = useState([]);
  const [inReview, setInReview] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const addTodo = (newTodo, category) => {
    const newTask = { id: todos.length + 1, text: newTodo, category };

    switch (category) {
      case 'In Review':
        setInReview([...inReview, newTask]);
        break;
      case 'In Progress':
        setInProgress([...inProgress, newTask]);
        break;
      case 'To Do':
        setTodos([...todos, newTask]);
        break;
    }
  };

  const removeTodo = (id, category) => {
    switch (category) {
      case 'In Review':
        setInReview(inReview.filter((task) => task.id !== id));
        break;
      case 'In Progress':
        setInProgress(inProgress.filter((task) => task.id !== id));
        break;
      default:
        setTodos(todos.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="container">
      <h1>TO DO APP</h1>
      <AddTodo addTodo={(newTodo, category) => addTodo(newTodo, category)} />
      <div className="custom-text">
        Current Time: {currentTime.toLocaleTimeString()} -{' '}
        {currentTime.toLocaleDateString()}
      </div>

      {/* Todo Lists */}
      <div className="todo-section">
        <h2>To Do</h2>
        <TodoList todos={todos} removeTodo={(id) => removeTodo(id, 'todo')} />
      </div>

      <div className="todo-section">
        <h2>In Review</h2>
        <TodoList
          todos={inReview}
          removeTodo={(id) => removeTodo(id, 'In Review')}
          category="In Review"
        />
      </div>

      <div className="todo-section">
        <h2>In Progress</h2>
        <TodoList
          todos={inProgress}
          removeTodo={(id) => removeTodo(id, 'In Progress')}
          category="In Progress"
        />
      </div>
    </div>
  );
}

export default App;

