import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddToDo from './components/AddToDo/AddToDo';
import ToDoList from './components/ToDoList/ToDoList';

const App: React.FC = () => (
  <Provider store={store}>
    <div>
      <h1>Todo List</h1>
      <AddToDo />
      <ToDoList />
    </div>
  </Provider>
);

export default App;
