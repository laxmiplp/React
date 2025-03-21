import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { Component1, Component2, Component3 } from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Component1 />
    <Component3 />

    <Component2 />
  </StrictMode>,
)
