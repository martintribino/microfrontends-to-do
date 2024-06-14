import React, { useState } from 'react';
import { useAppDispatch } from '../../app/store';
import { addTodo } from '../../features/todos/todosSlice';

const AddToDo: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo({
        id: Date.now().toString(),
        text,
        completed: false,
      }));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default AddToDo;
