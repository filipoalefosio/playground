import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Creating a root
root.render(                    // Using render method on root
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
