import React from 'react'
import { Button } from './ui/button'
import { FiDownload } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";



function Details() {
  return (
     <div>
      <div>
        <h1 className='text-2xl'>Hey, there<span className='text-accent'>!</span></h1>
        <p className='mt-5 text-4xl'>I&apos;m </p>
        <p className='mt-3 text-6xl'><span className='text-accent'>G</span>anesh <span className='text-accent'>M</span>allela.</p>
        <p className='mt-4 text-3xl'>Software Developer</p>
        <p className="mt-4 text-lg text-gray-700">
        I&apos;m a passionate developer with a knack for creating beautiful and functional web applications.
        </p>
     </div>
     <div className='flex flex-wrap mt-10 '>
      <Button className=' mt-10 bg-transparent border border-accent hover:bg-transparent rounded-xl py-6'>Download Resume <span className='ml-2'><FiDownload size={21} /></span></Button>
      <div className='flex mt-10 items-center ml-0 lg:ml-20'>
      <a target='_blank' href='https://github.com/GaneshM0616' className='border border-accent p-2 rounded-full text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'><FaGithub size={25} /></a>
      <a target='_blank' href='https://www.linkedin.com/in/ganesh-mallela/' className='ml-5 border border-accent p-2 rounded-full text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'><FaLinkedin size={25} /></a>
      <a target='_blank' href='https://x.com/MallelaGanesh34' className='ml-5 border border-accent p-2 rounded-full text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'><TfiTwitter className='' size={25} /></a>
      </div>
     </div>
     </div>
  )
}

export default Details