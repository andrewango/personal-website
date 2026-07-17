import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.history.scrollRestoration = 'manual';
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
