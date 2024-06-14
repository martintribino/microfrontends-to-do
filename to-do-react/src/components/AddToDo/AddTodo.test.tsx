import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import AddToDo from './AddToDo';

test('adds a todo when form is submitted', () => {
  render(
    <Provider store={store}>
      <AddToDo />
    </Provider>
  );

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test Todo' } });
  fireEvent.click(screen.getByRole('button', { name: /add todo/i }));

  expect(screen.getByRole('textbox')).toHaveValue('');
  expect(store.getState().todos.todos).toHaveLength(1);
  expect(store.getState().todos.todos[0].text).toBe('Test Todo');
});
