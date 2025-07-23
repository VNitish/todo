import React from 'react';

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <button
          className="checkbox"
          onClick={() => onToggleComplete(todo.id)}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed && <span className="checkmark">✓</span>}
        </button>
        <span className="todo-text">{todo.text}</span>
      </div>
      <button
        className="delete-button"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;