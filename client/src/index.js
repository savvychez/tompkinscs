import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import axios from 'axios';
import './styles/App.css'

axios.defaults.baseURL = 'https://api.tompkinscs.com';
axios.defaults.withCredentials = true  // enable axios post cookie, default false


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
