import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './Components/First'
import Second from './Components/Second'
import Third from './Components/Third'
function App() {
  const greet = 'Hello'
  const studentName = 'krishna'
  return (
    <>
      {/* <First greet={greet} studentName={studentName} />
      <Second greet='Hi' studentName='Ramya' />
      <Third greet={greet} studentName='kushal' /> */}
      <First greet={greet} studentName={studentName} />

    </>
  )
}

export default App
