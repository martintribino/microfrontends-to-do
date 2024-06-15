
import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const render = (Component: React.FC) => {
  root.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );
};

render(App);

export default App;
