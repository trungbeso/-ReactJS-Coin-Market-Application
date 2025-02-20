import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes} from "react-router-dom";


document.documentElement.classList.add("bg-black");
document.documentElement.classList.add("text-white");
document.documentElement.classList.add("transition-discrete");
document.documentElement.classList.add("transition-all");
document.documentElement.classList.add("ease-in-out");

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </StrictMode>,
)
