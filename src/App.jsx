import { useState } from 'react'
import './App.css'
import Burger from './components/Head and footer/Burger'
import Head from './components/Head and footer/Head'
import Home from './components/Head and footer/Home'
import Donation from "./components/Head and footer/DonationBanner"
import AboutUs from './components/Head and footer/AboutUs'
import WhatWeDo from './components/Head and footer/WhatWeDo'
import YouTubeProjects from './components/Head and footer/YouTubeProjects'
import Impact from './components/Head and footer/Impact'
import PartnersCarousel from './components/Head and footer/PartnersCarousel'
import Footer from './components/Head and footer/Footer'

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
      <Impact/>
      <PartnersCarousel/>
      <Footer/>
        
    </>
  )
}

export default App
