import React, { useContext } from 'react'
import themeContext from './ThemeContext'

const ThemedContext = () => {
  const { theme, setTheme } = useContext(themeContext)
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', height: '100vh' }}>ThemedContext
      <h1>Current Theme:{theme}</h1>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

export default ThemedContext