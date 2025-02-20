import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Add dark class to root element
document.documentElement.classList.add("bg-black");
document.documentElement.classList.add("text-white");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
