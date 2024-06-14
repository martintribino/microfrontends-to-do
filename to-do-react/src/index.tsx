
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';

const render = (Component: React.FC) => {
  ReactDOM.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render(App);

export default App;
