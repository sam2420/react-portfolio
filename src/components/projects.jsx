import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <motion.div 
      className='border-b border-neutral-900 pb-4'
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className='mb-8 flex flex-wrap lg:justify-center'
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
          >
            {/* Left Side - Image */}
            <motion.img 
              src={project.image} 
              alt={project.title} 
              className='w-full lg:w-1/4 rounded-2xl'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
            />

            {/* Middle - Year */}
            <motion.div 
              className='w-full lg:w-1/4'
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.4 }}
            >
              <p className='mb-2 text-sm text-neutral-400'>{project.year}</p>
            </motion.div>

            {/* Right Side - Project Title & Description */}
            <motion.div 
              className='w-full max-w-xl lg:w-3/4'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.5 }}
            >
              <h6 className='mb-2 font-semibold'>
                {project.title} - <span className='text-sm text-purple-100'>{project.company}</span>
              </h6>
              <p className='mb-4 text-neutral-400'>
                {project.description}
              </p>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className='mr-2 px-2 py-1 text-sm bg-neutral-900 text-purple-800 font-medium rounded-lg'>
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
