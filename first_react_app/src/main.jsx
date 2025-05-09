import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import UseEffect from './Hooks/UseEffect.jsx'
import UseEffectAxios from './Hooks/UseEffectAxios.jsx'
import UseEffectProducts from './Hooks/UseEffectProducts.jsx'
import UseCallBack from './Hooks/UseCallBack.jsx'
import UseReducer from './Hooks/UseReducer.jsx'
// import App from './Hooks/UserContext/App.jsx'
import ThemedApp from './Hooks/UserContext/ThemedApp.jsx'
import App from './Hooks/UserContext/BasicContext/App.jsx'
import ThemeApp from './Hooks/UserContext/Theming/ThemeApp.jsx'
import LanguageApp from './Hooks/UserContext/LanguageTranslate/LanguageApp.jsx'
import AuthApp from './Hooks/AuthContext/AuthApp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseEffect /> */}
    {/* <UseEffectAxios /> */}
    {/* <UseEffectProducts /> */}
    {/* <UseReducer /> */}
    {/* <UseCallBack /> */}
    {/* <App /> */}
    {/* <ThemedApp /> */}
    {/* <App /> */}
    {/* <ThemeApp /> */}
    {/* <LanguageApp /> */}
    <AuthApp />
  </StrictMode>,
)
