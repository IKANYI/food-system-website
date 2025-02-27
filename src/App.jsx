import { useState } from 'react'
import './App.css'
import Burger from './components/Head and footer/Burger'
import Head from './components/Head and footer/Head'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head/>
      <Burger/>
        
    </>
  )
}

export default App
