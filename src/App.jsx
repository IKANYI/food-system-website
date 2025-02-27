import { useState } from 'react'
import './App.css'
import Burger from './components/Head and footer/Burger'
import Head from './components/Head and footer/Head'
import Home from './components/Head and footer/Home'
import Donation from "./components/Head and footer/DonationBanner"
import AboutUs from './components/Head and footer/AboutUs'
import WhatWeDo from './components/Head and footer/WhatWeDo'
import YouTubeProjects from './components/Head and footer/YoutubeProjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head/>
      <Burger/>
      <Home/>
      <Donation/>
      <AboutUs/>
      <WhatWeDo/>
      <YouTubeProjects/>
        
    </>
  )
}

export default App
