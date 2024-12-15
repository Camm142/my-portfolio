import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import App from './App.jsx'
// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
