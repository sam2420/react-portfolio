import React from 'react'
import logo from '../assets/logo3.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className='mb-20  flex items-center justify-between py-6 px-8'>
      <div className='flex items-center'>
      <img className='mx-2 w-10' src={logo} alt="logo" style={{ width: "100px", height: "auto" }} />
      </div>
      <div className='flex items-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  )
}

export default Navbar
