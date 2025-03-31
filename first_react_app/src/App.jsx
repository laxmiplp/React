import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Table from './Table'
import Counter from './Counter'
import Toggle from './Toggle'
function App() {

  return (
    <>
      {/* <Card heading="Student Card Data" />
      <Table heading="Student Data Table" /> */}
      <Counter heading="Counter App" />
      <Toggle heading="Toggle App" />
    </>
  )
}

export default App
