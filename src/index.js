import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store";
import reactiveStore from "./store/index-use-middle";
import { Provider } from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={reactiveStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


