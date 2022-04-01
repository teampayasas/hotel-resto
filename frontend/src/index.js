import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import './pages/App.css';
import App from './pages/App';
import Admin from './pages/admin';
import { BrowserRouter } from 'react-router-dom'
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  // <Admin />
  document.getElementById('root')
);
