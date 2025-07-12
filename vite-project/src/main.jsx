import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
// StrictMode in developement code will run two times first for check & for real
