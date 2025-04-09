import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './Form.jsx'
import Form2 from './Form2.jsx'
import FormTableTask from './FormTableTask.jsx'
import FormTableTask2 from './FormTableTask2.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Form /> */}
    {/* <Form2 /> */}
    {/* <FormTableTask /> */}
    <FormTableTask2 />

  </StrictMode>,
)
