// src/components/TodoList/TodoList.tsx
import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import { deleteTodo, selectTodos, toggleTodo } from '../../features/todos/todosSlice';
import { useAppDispatch, useAppSelector } from '../../app/store';

const ToDoList: React.FC = () => {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
