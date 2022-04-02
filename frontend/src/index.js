import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import './pages/App.css';
import App from './pages/App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  // <Admin />
  document.getElementById('root')
);
