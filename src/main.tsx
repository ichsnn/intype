import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-tooltip/dist/react-tooltip.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
