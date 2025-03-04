import React from 'react'
// import Navbar from './components/navbar'
import Navbar from './components/Navbar'
import logo from './assets/kevinRushLogo.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import Hero from './components/hero'
import About from './components/about'
import Technolgoies from './components/technologies'
import Experience from './components/Experience'
import Projects from './components/projects'
import Contact from './components/contact'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 w-full h-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
      <div className='container mx-auto px-8'>
      <Navbar />
      <Hero />
      <About/>
      <Technolgoies/>
      <Experience/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
