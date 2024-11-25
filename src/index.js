import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { InputsContext } from './Coponenets/Context API/InputsContext';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = "http://localhost:3005"
root.render(
  <React.StrictMode>
    <InputsContext>
      <App />
    </InputsContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

