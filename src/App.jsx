import { useContext, useEffect } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoonIcon from './assets/icons/moon.svg'
import SunIcon from './assets/icons/sun.svg'

import './App.scss'

function App() {
const [theme, toggleTheme] = useContext(ThemeContext);
console.log(theme)
// adding dark mode class if the dark mode is set on to the body tag
useEffect(() => {
  if (theme === DARK_THEME) {
    document.body.classList.add('dark-mode')
  } else {
    document.body.classList.remove('dark-mode')
  }
}, [theme])
  return (
    <>
     
    </>
  )
}

export default App
