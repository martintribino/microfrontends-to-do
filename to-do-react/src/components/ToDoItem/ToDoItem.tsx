import React from 'react';

interface ToDoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ id, text, completed, onToggle, onDelete }) => (
  <li>
    <span
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      onClick={() => onToggle(id)}
    >
      {text}
    </span>
    <button onClick={() => onDelete(id)}>Delete</button>
  </li>
);

export default ToDoItem;
