import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Header from './LandingPage/Header.jsx'
import Banner from './LandingPage/Banner.jsx'
import Footer from './LandingPage/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Header />
    <Banner />
    <Footer />
  </StrictMode>,
)
