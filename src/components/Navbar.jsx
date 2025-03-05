import React from 'react';
import logo from '../assets/logo3.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6 px-8'>
      <div className='flex items-center'>
        <img 
          className='mx-2 w-10' 
          src={logo} 
          alt="logo" 
          style={{ width: "100px", height: "auto" }} 
        />
      </div>
      <div className='flex items-center gap-6 text-2xl'>
        <a href="https://www.linkedin.com/in/hashim-maniyar-1073a0227/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://github.com/sam2420" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition duration-300" />
        </a>
        {/* <a href="https://www.instagram.com/its._sam.24/" target="_blank" rel="noopener noreferrer"> */}
          {/* <FaInstagram className="hover:text-pink-500 transition duration-300" /> */}
        {/* </a> */}
        {/* Resume Download Button */}
        <a 
          href="https://drive.google.com/file/d/1nk-FjDc1MR7hrTtMrQHuYCsPYaYXq7ZZ/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-4 rounded-lg border-2 border-purple-500 px-4 py-2 text-sm font-medium text-purple-500 transition duration-300 hover:bg-purple-500 hover:text-white"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
