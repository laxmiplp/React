import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards.jsx';
import FormData from './FormData.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Cards /> */}
    <FormData />
  </StrictMode>,
)
