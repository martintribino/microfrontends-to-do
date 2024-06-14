import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { addTodo } from '../../features/todos/todosSlice';
import ToDoList from './ToDoList';

test('renders todos from the store', () => {
  store.dispatch(addTodo({
    id: '1',
    text: 'Test Todo',
    completed: false,
  }));

  render(
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );

  expect(screen.getByText(/test todo/i)).toBeInTheDocument();
});
