import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Students from './Components/Common/Students/Students'
import Library from './Components/Common/Library/Library'
import Staff from './Components/Common/Staff/Staff'

function App() {

  return (
    <>
      <Students />
      <Library />
      <Staff />

    </>
  )
}

export default App
