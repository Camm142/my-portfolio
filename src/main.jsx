import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import './styles/main.css'
import App from './App.jsx'
// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
