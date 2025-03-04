import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs, FaPython, FaDatabase, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiTensorflow, SiPytorch, SiKubernetes } from 'react-icons/si';

const Technologies = () => {
  const techStack = [
    { icon: <RiReactjsLine className='text-7xl text-cyan-400' />, name: 'React.js' },
    { icon: <FaNodeJs className='text-7xl text-green-500' />, name: 'Node.js' },
    { icon: <FaPython className='text-7xl text-yellow-500' />, name: 'Python' },
    { icon: <FaDatabase className='text-7xl text-blue-500' />, name: 'SQL' },
    { icon: <SiMongodb className='text-7xl text-green-400' />, name: 'MongoDB' },
    { icon: <SiTensorflow className='text-7xl text-orange-500' />, name: 'TensorFlow' },
    { icon: <SiPytorch className='text-7xl text-red-500' />, name: 'PyTorch' },
    { icon: <FaDocker className='text-7xl text-blue-400' />, name: 'Docker' },
    { icon: <SiKubernetes className='text-7xl text-blue-600' />, name: 'Kubernetes' },
    { icon: <FaGitAlt className='text-7xl text-orange-400' />, name: 'Git' }
  ];

  return (
    <motion.div 
      className='border-b border-neutral-800 pb-24'
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-6'>
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4'
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse", 
              delay: index * 0.2 
            }}
            whileHover={{ scale: 1.1 }}
          >
            {tech.icon}
            <p className='mt-2 text-lg text-white'>{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
