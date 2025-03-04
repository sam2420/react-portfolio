import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/image_hashim.jpg';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <motion.div 
      className='border-b border-neutral-900 pb-4'
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className='my-20 text-center text-4xl'>
        About <span className='text-neutral-500'>Me</span>
      </h2>
      <div className='flex flex-wrap items-center'>
        {/* Left Side - Image */}
        <motion.div 
          className='w-full lg:w-1/2 flex items-center justify-center'
          initial={{ x: -50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.img 
            className="rounded-2xl" 
            src={aboutImg} 
            alt="about" 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        {/* Right Side - About Text */}
        <motion.div 
          className='w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-start'
          initial={{ x: 50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
