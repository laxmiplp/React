import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App'
// import Timer from './Timer'
import Counter from './Counter'
import ToDoList from './ToDoList'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Timer /> */}
    {/* <Counter /> */}
    <ToDoList />
  </StrictMode>,
)
