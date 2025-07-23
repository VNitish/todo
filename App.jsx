import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Load todos and theme from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    const savedTheme = localStorage.getItem('darkMode');
    
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
    
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Save theme to localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <header className="header">
          <h1 className="title">My Todo List</h1>
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </header>

        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new todo..."
            className="todo-input"
          />
          <button onClick={addTodo} className="add-button">
            Add
          </button>
        </div>

        {totalCount > 0 && (
          <div className="stats">
            <span className="stats-text">
              {completedCount} of {totalCount} completed
            </span>
          </div>
        )}

        <div className="todo-list">
          {todos.length === 0 ? (
            <div className="empty-state">
              <p>No todos yet. Add one above!</p>
            </div>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleComplete={toggleComplete}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
