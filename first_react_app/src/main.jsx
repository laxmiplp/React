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
import UserApp from './Hooks/UserData/UserApp.jsx'
import LocalApp from './Hooks/LocalStorage/LocalApp.jsx'
import AuthProvider from './Hooks/AuthenticationState/AuthProvider.jsx'
import MainApp from './LanguageTranslationProject/MainApp.jsx'
import ProjectApp from './LanguageTranslationProject/ProjectApp.jsx'
import FocusInput from './Hooks/UseRef/FocusInput.jsx'
import StopWatch from './Hooks/UseRef/StopWatch.jsx'
import StoringPrevState from './Hooks/UseRef/StoringPrevState.jsx'
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
    {/* <AuthApp /> */}
    {/* <UserApp /> */}
    {/* <LocalApp /> */}
    {/* <AuthProvider /> */}
    {/* <MainApp /> */}
    {/* <ProjectApp /> */}
    {/* <FocusInput /> */}
    {/* <StopWatch /> */}
    <StoringPrevState />
  </StrictMode>,
)
