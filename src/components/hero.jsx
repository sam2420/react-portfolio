import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT, ABOUT_TEXT } from '../constants';
import profilePic from '../assets/image_hashim.png';

const Hero = () => {
  return (
    <motion.div 
      className='border-b border-neutral-900 pb-4 lg:mb-35'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='flex flex-wrap'>
        <motion.div 
          className='w-full lg:w-1/2'
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 
              className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Hashim Maniyar
            </motion.h1>
            <motion.span 
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Software Engineer
            </motion.span>
            <motion.p 
              className='my-2 max-w-xl py-6 font-light tracking-tighter'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              {HERO_CONTENT + ABOUT_TEXT}
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          className='w-full lg:w-1/2 lg:p-8 flex justify-center'
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <motion.img 
            src={profilePic} 
            alt='profilePic' 
            className='max-h-150 h-auto w-auto rounded-lg shadow-lg' // Reduced height, width auto-adjusts
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
